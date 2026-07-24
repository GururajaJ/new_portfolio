import nodemailer from "nodemailer";
import { portfolio } from "@/config/portfolio";

// nodemailer needs the Node.js runtime (not the Edge runtime).
export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  // Honeypot field — real users never fill this in.
  company?: unknown;
};

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message, company } = payload;

  // Silently accept honeypot submissions to discourage bots.
  if (isNonEmptyString(company)) {
    return Response.json({ ok: true });
  }

  if (
    !isNonEmptyString(name) ||
    !isNonEmptyString(email) ||
    !isNonEmptyString(message)
  ) {
    return Response.json(
      { error: "Please fill in your name, email, and a message." },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(email.trim())) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SMTP_SECURE,
    CONTACT_TO,
    CONTACT_FROM,
  } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error(
      "Contact form: SMTP is not configured (missing SMTP_HOST / SMTP_USER / SMTP_PASS).",
    );
    return Response.json(
      {
        error:
          "Email delivery isn't configured yet. Please reach out directly at " +
          portfolio.email +
          ".",
      },
      { status: 503 },
    );
  }

  const port = Number(SMTP_PORT) || 587;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    // Use implicit TLS on 465, STARTTLS otherwise, unless overridden.
    secure: SMTP_SECURE ? SMTP_SECURE === "true" : port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const to = CONTACT_TO || "jgururaja2004@gmail.com";
  const from = CONTACT_FROM || SMTP_USER;
  const safeName = name.trim();
  const safeEmail = email.trim();
  const safeMessage = message.trim();

  try {
    await transporter.sendMail({
      from: `"${safeName} (Portfolio)" <${from}>`,
      to,
      replyTo: `"${safeName}" <${safeEmail}>`,
      subject: `New portfolio message from ${safeName}`,
      text: `Name: ${safeName}\nEmail: ${safeEmail}\n\n${safeMessage}`,
      html: `
        <div style="font-family:system-ui,sans-serif;line-height:1.6">
          <h2 style="margin:0 0 12px">New portfolio message</h2>
          <p><strong>Name:</strong> ${escapeHtml(safeName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(safeEmail)}</p>
          <p style="white-space:pre-wrap;margin-top:16px">${escapeHtml(
            safeMessage,
          )}</p>
        </div>
      `,
    });
  } catch (err) {
    console.error("Contact form: failed to send email", err);
    return Response.json(
      { error: "Couldn't send your message right now. Please try again later." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
