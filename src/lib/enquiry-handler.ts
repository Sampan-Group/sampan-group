import "server-only";
import { enquiryTypes, MAX_CV_BYTES, type EnquiryType } from "./enquiry-config";
import { MailConfigurationError, sendEnquiryEmail, type EnquiryMessage } from "./enquiry-mail";

const MAX_BODY_BYTES = MAX_CV_BYTES + 64 * 1024;
const emailPattern = /^[^\s<>@]+@[^\s<>@]+\.[^\s<>@]+$/;
const attempts = new Map<string, { count: number; expires: number }>();

class SubmissionError extends Error {
  constructor(message: string, readonly status = 400) { super(message); }
}

function response(body: object, status = 200) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

async function readForm(request: Request) {
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.startsWith("multipart/form-data") && !contentType.startsWith("application/json")) {
    throw new SubmissionError("Use multipart/form-data or application/json.", 415);
  }
  if (Number(request.headers.get("content-length")) > MAX_BODY_BYTES) {
    throw new SubmissionError("The submission is too large. CVs must be under 10 MB.", 413);
  }
  const reader = request.body?.getReader();
  if (!reader) throw new SubmissionError("The submission is empty.");
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BODY_BYTES) {
        await reader.cancel();
        throw new SubmissionError("The submission is too large. CVs must be under 10 MB.", 413);
      }
      chunks.push(value);
    }
  } finally { reader.releaseLock(); }
  const body = Buffer.concat(chunks);
  if (contentType.startsWith("application/json")) {
    const data: unknown = JSON.parse(body.toString("utf8"));
    if (!data || typeof data !== "object" || Array.isArray(data)) throw new SubmissionError("Invalid submission.");
    const form = new FormData();
    for (const [key, value] of Object.entries(data)) {
      if (typeof value !== "string") throw new SubmissionError("Form fields must be text.");
      form.set(key, value);
    }
    return form;
  }
  return new Response(body, { headers: { "Content-Type": contentType } }).formData();
}

export function createEnquiryHandler(deliver: (message: EnquiryMessage) => Promise<void> = sendEnquiryEmail) {
  return async function handleEnquiry(request: Request) {
    try {
      const origin = request.headers.get("origin");
      if (origin && origin !== new URL(request.url).origin) {
        throw new SubmissionError("Please submit the form from this website.", 403);
      }
      const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "local";
      const now = Date.now();
      for (const [key, value] of attempts) if (value.expires <= now) attempts.delete(key);
      const entry = attempts.get(ip) || { count: 0, expires: now + 10 * 60 * 1000 };
      if (entry.count >= 10 || (!attempts.has(ip) && attempts.size >= 10000)) {
        return Response.json({ error: "Too many submissions. Please try again later." }, {
          status: 429, headers: { "Retry-After": String(Math.ceil((entry.expires - now) / 1000)), "Cache-Control": "no-store" },
        });
      }
      entry.count++;
      attempts.set(ip, entry);
      let form: FormData;
      try { form = await readForm(request); }
      catch (error) {
        if (error instanceof SubmissionError) throw error;
        throw new SubmissionError("The form could not be read. Please try again.");
      }
      if (form.get("website")) throw new SubmissionError("The submission could not be accepted.");
      const type = form.get("enquiryType");
      if (typeof type !== "string" || !Object.hasOwn(enquiryTypes, type)) throw new SubmissionError("Unknown enquiry type.");
      const config = enquiryTypes[type as EnquiryType];
      const fields: Record<string, string> = Object.create(null);
      let fieldCount = 0;
      for (const [key, value] of form.entries()) {
        if (["enquiryType", "sourcePage", "website", "cv"].includes(key)) continue;
        if (++fieldCount > 30 || !/^[a-zA-Z][a-zA-Z0-9 _-]{0,59}$/.test(key) || typeof value !== "string" || value.length > 5000) {
          throw new SubmissionError("One or more form fields are invalid or too long.");
        }
        fields[key] = value.trim();
      }
      for (const key of config.required) {
        if (!fields[key]) throw new SubmissionError(`Please complete the ${key} field.`);
      }
      if (fields.email && (fields.email.length > 254 || !emailPattern.test(fields.email))) throw new SubmissionError("Please enter a valid email address.");
      if (fields.phone && !/^\+?[\d\s().-]{7,30}$/.test(fields.phone)) throw new SubmissionError("Please enter a valid phone number.");
      const source = form.get("sourcePage");
      if (typeof source !== "string" || !source.startsWith("/") || source.startsWith("//") || source.length > 500 || /[\r\n]/.test(source)) {
        throw new SubmissionError("The page address is invalid.");
      }
      const message: EnquiryMessage = { title: config.title, sourcePage: source, fields };
      const cv = form.get("cv");
      if (type === "careers" && (!(cv instanceof File) || cv.size === 0)) throw new SubmissionError("Please upload your CV.");
      if (cv instanceof File && cv.size > 0) {
        if (type !== "careers") throw new SubmissionError("Attachments are only accepted for career applications.");
        if (cv.size > MAX_CV_BYTES) throw new SubmissionError("Please choose a CV smaller than 10 MB.", 413);
        const extension = cv.name.split(".").pop()?.toLowerCase();
        const content = Buffer.from(await cv.arrayBuffer());
        const isPdf = extension === "pdf" && content.subarray(0, 5).toString() === "%PDF-";
        const isDoc = extension === "doc" && content.subarray(0, 8).toString("hex") === "d0cf11e0a1b11ae1";
        const isDocx = extension === "docx" && content.subarray(0, 4).toString("hex") === "504b0304";
        if (!isPdf && !isDoc && !isDocx) throw new SubmissionError("Please upload a PDF, DOC or DOCX CV.");
        message.cv = {
          filename: `cv.${extension}`,
          content,
          contentType: isPdf ? "application/pdf" : isDoc ? "application/msword" : "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        };
      }
      await deliver(message);
      return response({ success: true });
    } catch (error) {
      if (error instanceof SubmissionError) return response({ error: error.message }, error.status);
      if (error instanceof MailConfigurationError) {
        return response({ error: process.env.NODE_ENV === "production" ? "Email is temporarily unavailable. Please contact us by phone or WhatsApp." : error.message }, 503);
      }
      // Log only an SMTP error code, never credentials or submitted personal details.
      console.error("Enquiry email failed", error && typeof error === "object" && "code" in error ? String(error.code) : "DELIVERY_FAILED");
      return response({ error: "Your enquiry could not be sent. Please try again or contact us by phone or WhatsApp." }, 502);
    }
  };
}
