const { test, after } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const ts = require("typescript");

// Load the real server modules without a Next.js server. Replace only the SMTP
// network boundary; these tests never send messages to the real inbox.
const originalLoad = Module._load;
const originalTsExtension = require.extensions[".ts"];
let capturedConfig;
let capturedMail;
let accepted = ["info@sampangroup.com.bd"];
Module._load = function (name, ...args) {
  if (name === "server-only") return {};
  if (name === "nodemailer") return {
    createTransport(config) {
      capturedConfig = config;
      return { async sendMail(mail) { capturedMail = mail; return { accepted }; } };
    },
  };
  return originalLoad.call(this, name, ...args);
};
require.extensions[".ts"] = function (mod, filename) {
  const source = fs.readFileSync(filename, "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
    fileName: filename,
  });
  mod._compile(compiled.outputText, filename);
};
const { createEnquiryHandler } = require("../src/lib/enquiry-handler.ts");
const { sendEnquiryEmail, MailConfigurationError } = require("../src/lib/enquiry-mail.ts");
const { enquiryTypes, MAX_CV_BYTES } = require("../src/lib/enquiry-config.ts");
after(() => {
  Module._load = originalLoad;
  if (originalTsExtension) require.extensions[".ts"] = originalTsExtension;
  else delete require.extensions[".ts"];
});

let requestId = 0;
const contact = { enquiryType: "contact", sourcePage: "/contact", name: "Local Tester", email: "tester@example.com", subject: "Website test", message: "Please contact me." };
function request(fields = contact, options = {}) {
  const headers = { "x-forwarded-for": `test-${++requestId}`, origin: "http://localhost:3000", ...options.headers };
  let body;
  if (fields instanceof FormData) body = fields;
  else { body = JSON.stringify(fields); headers["content-type"] = "application/json"; }
  return new Request("http://localhost:3000/api/enquiries", { method: "POST", body, ...options, headers });
}
function multipart(values) {
  const form = new FormData();
  for (const [key, value] of Object.entries(values)) form.set(key, value);
  return form;
}

test("accepts a valid enquiry only after delivery completes, preserving details", async () => {
  let delivered;
  let release;
  const gate = new Promise(resolve => { release = resolve; });
  const handler = createEnquiryHandler(async message => { await gate; delivered = message; });
  let resolved = false;
  const pending = handler(request({ ...contact, projectName: "Sampan Metro Square" })).then(r => { resolved = true; return r; });
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(resolved, false);
  release();
  const result = await pending;
  assert.equal(result.status, 200);
  assert.deepEqual(await result.json(), { success: true });
  assert.equal(delivered.fields.projectName, "Sampan Metro Square");
  assert.equal(delivered.fields.email, contact.email);
  assert.equal(delivered.sourcePage, "/contact");
});

test("all 13 active enquiry types accept their required fields", async () => {
  const handler = createEnquiryHandler(async () => {});
  for (const [type, config] of Object.entries(enquiryTypes)) {
    const values = { enquiryType: type, sourcePage: "/test" };
    for (const key of config.required) values[key] = key === "email" ? "test@example.com" : key === "phone" ? "+8801711000000" : key === "visitDate" ? "2026-12-01" : "Test value";
    const form = multipart(values);
    if (type === "careers") form.set("cv", new File(["%PDF-1.4\nTest CV"], "resume.pdf", { type: "application/pdf" }));
    const result = await handler(request(form));
    assert.equal(result.status, 200, `${type}: ${await result.text()}`);
  }
});

test("rejects missing fields, invalid contacts, unknown types and header injection", async () => {
  let calls = 0;
  const handler = createEnquiryHandler(async () => { calls++; });
  for (const values of [
    { ...contact, name: "  " },
    { ...contact, email: "invalid" },
    { ...contact, email: "test@example.com\r\nBcc: attacker@example.com" },
    { ...contact, phone: "abc" },
    { ...contact, enquiryType: "__proto__" },
    { ...contact, enquiryType: "missing" },
    { ...contact, message: "x".repeat(5001) },
    { ...contact, sourcePage: "https://other.example" },
    { ...contact, sourcePage: "//other.example" },
    { ...contact, sourcePage: "/contact\r\nInjected" },
    { ...contact, website: "spam" },
    { ...contact, name: { nested: true } },
  ]) assert.equal((await handler(request(values))).status, 400);
  assert.equal(calls, 0);
});

test("blocks cross-origin posts and malformed or oversized bodies", async () => {
  let calls = 0;
  const handler = createEnquiryHandler(async () => { calls++; });
  assert.equal((await handler(request(contact, { headers: { origin: "https://other.example" } }))).status, 403);
  assert.equal((await handler(request(contact, { body: "{" }))).status, 400);
  assert.equal((await handler(request(contact, { headers: { "content-length": String(12 * 1024 * 1024) } }))).status, 413);
  const oversized = { ...contact, message: "x".repeat(11 * 1024 * 1024) };
  assert.equal((await handler(request(oversized))).status, 413);
  const unsupported = new Request("http://localhost:3000/api/enquiries", { method: "POST", headers: { "content-type": "text/plain" }, body: "hello" });
  assert.equal((await handler(unsupported)).status, 415);
  assert.equal(calls, 0);
});

test("rate limits repeated submissions before sending additional email", async () => {
  let calls = 0;
  const handler = createEnquiryHandler(async () => { calls++; });
  for (let i = 0; i < 10; i++) assert.equal((await handler(request(contact, { headers: { "x-forwarded-for": "rate-limit-test" } }))).status, 200);
  const result = await handler(request(contact, { headers: { "x-forwarded-for": "rate-limit-test" } }));
  assert.equal(result.status, 429);
  assert.ok(Number(result.headers.get("retry-after")) > 0);
  assert.equal(calls, 10);
});

test("careers attaches the actual CV bytes with a safe filename", async () => {
  let delivered;
  const handler = createEnquiryHandler(async message => { delivered = message; });
  const form = multipart({ enquiryType: "careers", sourcePage: "/who-are-we/career", name: "Applicant", email: "applicant@example.com" });
  const bytes = "%PDF-1.4\nApplicant CV";
  form.set("cv", new File([bytes], "private-resume.pdf", { type: "application/pdf" }));
  assert.equal((await handler(request(form))).status, 200);
  assert.equal(delivered.cv.filename, "cv.pdf");
  assert.equal(delivered.cv.content.toString(), bytes);
  assert.equal(delivered.cv.contentType, "application/pdf");
});

test("rejects missing, disguised, oversized and misplaced attachments", async () => {
  let calls = 0;
  const handler = createEnquiryHandler(async () => { calls++; });
  const application = { enquiryType: "careers", sourcePage: "/who-are-we/career", name: "Applicant", email: "applicant@example.com" };
  assert.equal((await handler(request(application))).status, 400);
  for (const [filename, bytes] of [["resume.exe", "MZprogram"], ["resume.pdf", "not a PDF"]]) {
    const form = multipart(application);
    form.set("cv", new File([bytes], filename));
    assert.equal((await handler(request(form))).status, 400);
  }
  const big = multipart(application);
  big.set("cv", new File([new Uint8Array(MAX_CV_BYTES + 1)], "resume.pdf"));
  assert.equal((await handler(request(big))).status, 413);
  const unrelated = multipart(contact);
  unrelated.set("cv", new File(["%PDF-1.4"], "resume.pdf"));
  assert.equal((await handler(request(unrelated))).status, 400);
  assert.equal(calls, 0);
});

test("SMTP failure never returns success or exposes credentials", async (t) => {
  t.mock.method(console, "error", () => {});
  const handler = createEnquiryHandler(async () => { throw new Error("secret-password provider failure"); });
  const result = await handler(request());
  assert.equal(result.status, 502);
  const text = await result.text();
  assert.ok(!text.includes("secret-password"));
  assert.ok(!text.includes('"success":true'));
});

test("SMTP configuration errors are actionable locally and private in production", async () => {
  const before = process.env.NODE_ENV;
  const handler = createEnquiryHandler(async () => { throw new MailConfigurationError("Configure SMTP_PASS in .env.local."); });
  try {
    process.env.NODE_ENV = "development";
    const local = await handler(request());
    assert.equal(local.status, 503);
    assert.match((await local.json()).error, /SMTP_PASS/);
    process.env.NODE_ENV = "production";
    const production = await handler(request());
    assert.equal(production.status, 503);
    assert.doesNotMatch((await production.json()).error, /SMTP_PASS/);
  } finally {
    if (before === undefined) delete process.env.NODE_ENV;
    else process.env.NODE_ENV = before;
  }
});

test("SMTP uses fixed recipient, visitor Reply-To, TLS and actual attachments", async () => {
  const keys = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "SMTP_FROM"];
  const previous = Object.fromEntries(keys.map(key => [key, process.env[key]]));
  try {
    Object.assign(process.env, { SMTP_HOST: "mail.example.com", SMTP_PORT: "465", SMTP_USER: "info@sampangroup.com.bd", SMTP_PASS: "test-password", SMTP_FROM: "info@sampangroup.com.bd" });
    const cv = { filename: "cv.pdf", content: Buffer.from("%PDF-1.4"), contentType: "application/pdf" };
    const message = { title: "General enquiry", sourcePage: "/contact", fields: { email: "visitor@example.com", to: "attacker@example.com", message: "<script>text</script>" }, cv };
    await sendEnquiryEmail(message);
    assert.equal(capturedMail.to, "info@sampangroup.com.bd");
    assert.equal(capturedMail.replyTo, "visitor@example.com");
    assert.equal(capturedMail.from.address, "info@sampangroup.com.bd");
    assert.equal(capturedMail.html, undefined);
    assert.match(capturedMail.text, /Page: \/contact/);
    assert.equal(capturedMail.attachments[0], cv);
    assert.equal(capturedConfig.secure, true);
    assert.equal(capturedConfig.requireTLS, true);
    assert.equal(capturedConfig.tls.rejectUnauthorized, undefined);
    process.env.SMTP_PORT = "587";
    await sendEnquiryEmail(message);
    assert.equal(capturedConfig.secure, false);
    assert.equal(capturedConfig.requireTLS, true);
    accepted = [];
    await assert.rejects(sendEnquiryEmail(message), /did not accept/);
    accepted = ["info@sampangroup.com.bd"];
    delete process.env.SMTP_PASS;
    await assert.rejects(sendEnquiryEmail(message), MailConfigurationError);
  } finally {
    accepted = ["info@sampangroup.com.bd"];
    for (const key of keys) {
      if (previous[key] === undefined) delete process.env[key];
      else process.env[key] = previous[key];
    }
  }
});

test("every connected form serializes required fields and contains its submit control", () => {
  const connected = new Set();
  function scan(directory) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const filename = path.join(directory, entry.name);
      if (entry.isDirectory()) { scan(filename); continue; }
      if (!filename.endsWith(".tsx")) continue;
      const source = ts.createSourceFile(filename, fs.readFileSync(filename, "utf8"), ts.ScriptTarget.Latest, true);
      function visit(node) {
        if (ts.isJsxElement(node) && node.openingElement.tagName.getText(source) === "EnquiryForm") {
          const typeAttribute = node.openingElement.attributes.properties.find(a => ts.isJsxAttribute(a) && a.name.getText(source) === "enquiryType");
          const type = typeAttribute.initializer.text;
          connected.add(type);
          const fields = new Set();
          let submit = false;
          function inspect(child) {
            if (ts.isJsxOpeningElement(child) || ts.isJsxSelfClosingElement(child)) {
              const tag = child.tagName.getText(source);
              const attributes = Object.fromEntries(child.attributes.properties.filter(ts.isJsxAttribute).map(a => [a.name.getText(source), a.initializer?.text || true]));
              if (["input", "select", "textarea"].includes(tag)) {
                assert.equal(typeof attributes.name, "string", `Missing name in ${filename}`);
                fields.add(attributes.name);
              }
              if (tag === "button" && attributes.type !== "button") submit = true;
            }
            ts.forEachChild(child, inspect);
          }
          for (const child of node.children) inspect(child);
          for (const required of enquiryTypes[type].required) assert.ok(fields.has(required), `${type} is missing ${required}`);
          assert.ok(submit, `${type} has no submit control inside the form`);
        }
        ts.forEachChild(node, visit);
      }
      visit(source);
    }
  }
  scan(path.join(__dirname, "../src"));
  assert.deepEqual([...connected].sort(), Object.keys(enquiryTypes).sort());
});
