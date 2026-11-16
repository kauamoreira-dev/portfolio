import { readContact, validateContact, type ContactInput } from "@/lib/contact";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "kauacirinom@icloud.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "Portfólio <onboarding@resend.dev>";
// The confirmation email to the visitor only works with a domain verified on Resend
const AUTOREPLY = process.env.CONTACT_AUTOREPLY === "true";

type Lang = "pt" | "en";

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]!);
}

function layout(content: string) {
  return `<div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;background:#fafaf9;padding:32px 16px">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e7e5e4;border-radius:12px;overflow:hidden">
    <div style="height:4px;background:#f97316"></div>
    <div style="padding:28px">${content}</div>
  </div>
  <p style="max-width:560px;margin:16px auto 0;text-align:center;font-size:12px;color:#a8a29e">kauamoreira.vercel.app</p>
</div>`;
}

function ownerEmail({ name, email, message }: ContactInput, lang: Lang) {
  const safe = escapeHtml(message).replace(/\n/g, "<br>");
  return {
    subject: `Nova mensagem do portfólio: ${name}`,
    text: `Nome: ${name}\nE-mail: ${email}\nIdioma do site: ${lang.toUpperCase()}\n\n${message}\n\n— Responda este e-mail para falar direto com ${name}.`,
    html: layout(`
      <p style="margin:0 0 4px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#f97316">Nova mensagem do portfólio</p>
      <h1 style="margin:0 0 20px;font-size:22px;color:#0c0a09">${escapeHtml(name)}</h1>
      <table style="width:100%;font-size:14px;color:#57534e;margin-bottom:20px">
        <tr><td style="padding:4px 0;width:110px">E-mail</td><td><a href="mailto:${escapeHtml(email)}" style="color:#0c0a09">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:4px 0">Idioma do site</td><td style="color:#0c0a09">${lang.toUpperCase()}</td></tr>
      </table>
      <div style="padding:16px;border:1px solid #e7e5e4;border-radius:8px;background:#fafaf9;font-size:15px;line-height:1.6;color:#0c0a09">${safe}</div>
      <p style="margin:20px 0 0;font-size:13px;color:#a8a29e">Clique em "Responder" para falar direto com ${escapeHtml(name)}.</p>`),
  };
}

function autoReplyEmail({ name, message }: ContactInput, lang: Lang) {
  const first = escapeHtml(name.split(" ")[0]);
  const safe = escapeHtml(message).replace(/\n/g, "<br>");
  if (lang === "en") {
    return {
      subject: "Got your message — Kauã Moreira",
      text: `Hi ${name.split(" ")[0]},\n\nThanks for reaching out! I got your message and will reply within one business day.\n\nYour message:\n${message}\n\n— Kauã Moreira\nFull Stack Developer\nhttps://kauamoreira.vercel.app`,
      html: layout(`
        <h1 style="margin:0 0 16px;font-size:22px;color:#0c0a09">Hi ${first}, thanks for reaching out!</h1>
        <p style="font-size:15px;line-height:1.6;color:#57534e">I got your message and will reply within one business day.</p>
        <p style="margin:24px 0 8px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#a8a29e">Your message</p>
        <div style="padding:16px;border:1px solid #e7e5e4;border-radius:8px;background:#fafaf9;font-size:14px;line-height:1.6;color:#57534e">${safe}</div>
        <p style="margin:24px 0 0;font-size:15px;color:#0c0a09"><strong>Kauã Moreira</strong><br><span style="color:#f97316">Full Stack Developer</span></p>`),
    };
  }
  return {
    subject: "Recebi sua mensagem — Kauã Moreira",
    text: `Olá, ${name.split(" ")[0]}!\n\nObrigado pelo contato. Recebi sua mensagem e respondo em até 24 horas úteis.\n\nSua mensagem:\n${message}\n\n— Kauã Moreira\nDesenvolvedor Full Stack\nhttps://kauamoreira.vercel.app`,
    html: layout(`
      <h1 style="margin:0 0 16px;font-size:22px;color:#0c0a09">Olá, ${first}! Obrigado pelo contato.</h1>
      <p style="font-size:15px;line-height:1.6;color:#57534e">Recebi sua mensagem e respondo em até 24 horas úteis.</p>
      <p style="margin:24px 0 8px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#a8a29e">Sua mensagem</p>
      <div style="padding:16px;border:1px solid #e7e5e4;border-radius:8px;background:#fafaf9;font-size:14px;line-height:1.6;color:#57534e">${safe}</div>
      <p style="margin:24px 0 0;font-size:15px;color:#0c0a09"><strong>Kauã Moreira</strong><br><span style="color:#f97316">Desenvolvedor Full Stack</span></p>`),
  };
}

async function sendEmail(apiKey: string, payload: Record<string, unknown>) {
  return fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: FROM_EMAIL, ...payload }),
  });
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid" }, { status: 400 });
  }

  // Honeypot filled in: pretend success so bots don't retry
  if (typeof body.company === "string" && body.company.length > 0) {
    return Response.json({ ok: true });
  }

  const input = readContact(body);
  const fields = validateContact(input);
  if (Object.keys(fields).length > 0) {
    return Response.json({ error: "invalid", fields }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return Response.json({ error: "not_configured" }, { status: 503 });
  }

  const lang: Lang = body.lang === "en" ? "en" : "pt";

  const res = await sendEmail(apiKey, { to: [TO_EMAIL], reply_to: input.email, ...ownerEmail(input, lang) });
  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return Response.json({ error: "send_failed" }, { status: 502 });
  }

  if (AUTOREPLY) {
    // The visitor's confirmation is a courtesy: a failure here must not fail the request
    const reply = await sendEmail(apiKey, { to: [input.email], reply_to: TO_EMAIL, ...autoReplyEmail(input, lang) });
    if (!reply.ok) console.error("Auto-reply error", reply.status, await reply.text());
  }

  return Response.json({ ok: true });
}
