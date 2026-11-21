import "server-only";
import nodemailer from "nodemailer";

export const ENQUIRY_RECIPIENT = "info@sampangroup.com.bd";

export class MailConfigurationError extends Error {}

export type EnquiryMessage = {
  title: string;
  sourcePage: string;
  fields: Record<string, string>;
  cv?: { filename: string; content: Buffer; contentType: string };
};

export async function sendEnquiryEmail(message: EnquiryMessage) {
  const { SMTP_HOST, SMTP_USER, SMTP_PASS } = process.env;
  const port = Number(process.env.SMTP_PORT || "465");
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || ![465, 587].includes(port)) {
    throw new MailConfigurationError("Configure SMTP_HOST, SMTP_PORT, SMTP_USER and SMTP_PASS in .env.local.");
  }
  const from = process.env.SMTP_FROM || SMTP_USER;
  if (!/^[^\s<>@]+@[^\s<>@]+\.[^\s<>@]+$/.test(from)) {
    throw new MailConfigurationError("SMTP_FROM must be a valid sender email address.");
  }
  const transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    requireTLS: true,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 20000,
    tls: { minVersion: "TLSv1.2" },
  });

  const result = await transport.sendMail({
    from: { name: "Sampan Website", address: from },
    to: ENQUIRY_RECIPIENT,
    replyTo: message.fields.email || undefined,
    subject: `[Sampan Website] ${message.title}`,
    text: [
      message.title,
      `Page: ${message.sourcePage}`,
      `Submitted: ${new Date().toISOString()}`,
      "",
      ...Object.entries(message.fields).map(([key, value]) => `${key}: ${value}`),
      "",
      "This is an enquiry request, not a confirmed reservation or subscription automation.",
    ].join("\n"),
    attachments: message.cv ? [message.cv] : [],
    disableFileAccess: true,
    disableUrlAccess: true,
  });
  if (!result.accepted.some((address) => String(address).toLowerCase() === ENQUIRY_RECIPIENT)) {
    throw new Error("The mail server did not accept the enquiry recipient.");
  }
}
