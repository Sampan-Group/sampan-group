This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Local enquiry email testing

The active contact, newsletter, careers, property and hospitality forms submit to
`POST /api/enquiries`. The server emails `info@sampangroup.com.bd` using SMTP.
Emails include the form type, page path, project details where applicable, and all
submitted fields. The visitor's email is used as Reply-To when provided.

1. Add the settings from `.env.example` to `.env.local` in the project root.
   Preserve any existing entries in `.env.local`.
2. In cPanel Webmail, open **Configure Mail Client / Connect Devices** and confirm
   the outgoing SMTP hostname. The sample uses `lemon-yellow.colorbytes.net`,
   inferred from your webmail URL. Its TLS certificate and SMTP greeting on port
   465 were verified, but mailbox authentication still needs your password.
3. Set `SMTP_USER=info@sampangroup.com.bd`, `SMTP_PORT=465` (implicit TLS), and
   `SMTP_PASS` to the mailbox password. Port `587` with mandatory STARTTLS is also
   supported. `SMTP_FROM` must be a mailbox your SMTP account is allowed to send as.
   Quote passwords containing spaces or `#`; escape literal `$` as `\$` in Next.js env files.
4. Restart `npm run dev` and submit the form at `/contact` with your own details.
5. Check the `info@` inbox and spam folder. Test replying to confirm Reply-To.

SMTP secrets stay on the server. Never prefix them with `NEXT_PUBLIC_` or commit
`.env.local`. Missing settings and SMTP rejection produce an error, preserve
entered values, and do not show success. A success response means the SMTP server
accepted the email; it does not guarantee final inbox delivery.

Careers accepts one PDF, DOC or DOCX CV up to 10 MB as an email attachment. The
endpoint validates required fields, basic email/phone formats, file type and body
size. It rejects cross-origin browser submissions and includes a honeypot and an
in-memory limit of 10 attempts per IP per 10 minutes. This limit resets when the
server restarts and is not shared between instances; use durable rate limiting
and spam protection before high-traffic production use.

Newsletter and launch forms send signup requests to the team; they do not enroll
visitors in an automated mailing list. Booking forms send requests for staff to
confirm. This implementation does not store submissions in a database. Previously
disabled/unused form components remain disabled and are not connected.

Run `npm run test:enquiries` for API validation, attachment, delivery failure and
SMTP configuration checks without sending real email.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
