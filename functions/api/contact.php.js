const ADMIN_EMAIL = "info@easytechit.de";
const FROM = "EasyTech IT-Solutions <info@easytechit.de>";

const LIMITS = {
  firstName: 100,
  lastName: 100,
  email: 254,
  company: 200,
  phone: 50,
  phoneCountry: 10,
  country: 10,
  service: 100,
  webdesignPackage: 100,
  itCategory: 100,
  message: 5000,
};

const EMAIL_RE = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/;

const json = (status, payload) =>
  new Response(JSON.stringify(payload), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
  });

const esc = (v) =>
  String(v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

const detailRows = (details) =>
  Object.entries(details)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:12px 16px;border-bottom:1px solid #e8edf3;color:#64748b;font-size:14px;vertical-align:top;width:34%;">${esc(label)}</td>` +
        `<td style="padding:12px 16px;border-bottom:1px solid #e8edf3;color:#172033;font-size:14px;vertical-align:top;white-space:pre-line;">${esc(value !== "" ? value : "-")}</td></tr>`
    )
    .join("");

const layout = (title, intro, content) =>
  `<!doctype html><html lang="de"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>${esc(title)}</title></head>` +
  `<body style="margin:0;padding:0;background:#f3f6fa;font-family:Arial,Helvetica,sans-serif;color:#172033;">` +
  `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f3f6fa;padding:32px 12px;"><tr><td align="center">` +
  `<table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;">` +
  `<tr><td style="padding:24px 32px;background:#2e4a6f;color:#ffffff;font-size:20px;font-weight:bold;">EasyTech <span style="font-weight:normal;">IT-Solutions</span></td></tr>` +
  `<tr><td style="padding:32px;"><h1 style="margin:0 0 12px;color:#172033;font-size:24px;line-height:1.3;">${esc(title)}</h1>` +
  `<p style="margin:0 0 24px;color:#526078;font-size:15px;line-height:1.7;">${esc(intro)}</p>${content}</td></tr>` +
  `<tr><td style="padding:20px 32px;background:#f8fafc;border-top:1px solid #e8edf3;color:#64748b;font-size:12px;line-height:1.6;">EasyTech IT-Solutions &middot; <a href="mailto:${ADMIN_EMAIL}" style="color:#2e4a6f;text-decoration:none;">${ADMIN_EMAIL}</a><br>Diese E-Mail wurde automatisch über das Kontaktformular versendet.</td></tr>` +
  `</table></td></tr></table></body></html>`;

const table = (details) =>
  `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border:1px solid #e8edf3;border-radius:10px;border-collapse:separate;">${detailRows(details)}</table>`;

async function sendEmail(env, { to, subject, text, html, replyTo }) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: FROM, to: [to], subject, text, html, reply_to: replyTo }),
  });
  if (!res.ok) console.error("Resend error", res.status, await res.text());
  return res.ok;
}

export async function onRequestPost({ request, env }) {
  if (!(request.headers.get("Content-Type") || "").toLowerCase().startsWith("application/json")) {
    return json(415, { ok: false, error: "Ungültiges Anfrageformat." });
  }

  const raw = await request.text();
  if (raw.length > 16384) return json(413, { ok: false, error: "Die Anfrage ist zu groß." });

  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    data = null;
  }
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return json(400, { ok: false, error: "Die Anfrage enthält ungültige Daten." });
  }

  const f = {};
  for (const [key, limit] of Object.entries(LIMITS)) {
    const value = data[key] ?? "";
    if (typeof value !== "string" || value.trim().length > limit) {
      return json(400, { ok: false, error: "Bitte prüfen Sie Ihre Eingaben." });
    }
    f[key] = value.trim();
  }

  if (["firstName", "lastName", "email", "service"].some((k) => f[k] === "")) {
    return json(400, { ok: false, error: "Bitte füllen Sie alle Pflichtfelder aus." });
  }
  if (!EMAIL_RE.test(f.email)) {
    return json(400, { ok: false, error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." });
  }
  if (data.consent !== "true") {
    return json(400, { ok: false, error: "Bitte stimmen Sie der Datenschutzerklärung zu." });
  }
  if (!env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return json(500, { ok: false, error: "Die Nachricht konnte nicht versendet werden. Bitte schreiben Sie direkt an info@easytechit.de." });
  }

  const phone = f.phone !== "" ? `${f.phoneCountry} ${f.phone}`.trim() : "";
  const adminDetails = {
    Name: `${f.firstName} ${f.lastName}`,
    "E-Mail": f.email,
    Unternehmen: f.company,
    Telefon: phone,
    Land: f.country,
    "Gewünschte Leistung": f.service,
    "Webdesign-Paket": f.webdesignPackage,
    "IT-Kategorie": f.itCategory,
    Nachricht: f.message,
  };
  const adminText = ["Neue Kontaktanfrage über easytechit.de", "", ...Object.entries(adminDetails).map(([l, v]) => `${l}: ${v !== "" ? v : "-"}`)].join("\r\n");

  const adminSent = await sendEmail(env, {
    to: ADMIN_EMAIL,
    subject: "Neue Kontaktanfrage - EasyTech IT-Solutions",
    text: adminText,
    html: layout("Neue Kontaktanfrage", "Eine neue Anfrage wurde über das Kontaktformular eingereicht.", table(adminDetails)),
    replyTo: f.email,
  });
  if (!adminSent) {
    return json(500, {
      ok: false,
      error: "Die Nachricht konnte nicht versendet werden. Bitte versuchen Sie es später erneut oder schreiben Sie direkt an info@easytechit.de.",
    });
  }

  const confirmationText =
    `Hallo ${f.firstName},\r\n\r\nvielen Dank für Ihre Nachricht an EasyTech IT-Solutions. Wir haben Ihre Anfrage erhalten und melden uns persönlich bei Ihnen.\r\n\r\n` +
    `Ihre Anfrage:\r\nLeistung: ${f.service}\r\n` +
    (f.webdesignPackage !== "" ? `Webdesign-Paket: ${f.webdesignPackage}\r\n` : "") +
    (f.itCategory !== "" ? `IT-Kategorie: ${f.itCategory}\r\n` : "") +
    `\r\nFalls Sie noch etwas ergänzen möchten, antworten Sie einfach auf diese E-Mail.\r\n\r\nViele Grüße\r\nEasyTech IT-Solutions`;
  const confirmationHtml = layout(
    "Vielen Dank für Ihre Anfrage",
    `Hallo ${f.firstName}, vielen Dank für Ihre Nachricht. Wir haben Ihre Anfrage erhalten und melden uns persönlich bei Ihnen.`,
    `<h2 style="margin:0 0 12px;color:#2e4a6f;font-size:16px;">Ihre Anfrage auf einen Blick</h2>${table({
      Name: `${f.firstName} ${f.lastName}`,
      "Gewünschte Leistung": f.service,
    })}<p style="margin:24px 0 0;color:#526078;font-size:14px;line-height:1.7;">Falls Sie noch etwas ergänzen möchten, antworten Sie einfach auf diese E-Mail.</p>` +
      `<p style="margin:20px 0 0;color:#172033;font-size:14px;line-height:1.7;">Viele Grüße<br><strong>EasyTech IT-Solutions</strong></p>`
  );
  const confirmationSent = await sendEmail(env, {
    to: f.email,
    subject: "Wir haben Ihre Anfrage erhalten - EasyTech IT-Solutions",
    text: confirmationText,
    html: confirmationHtml,
    replyTo: ADMIN_EMAIL,
  });

  return json(200, { ok: true, confirmationSent });
}

export const onRequest = () =>
  new Response(JSON.stringify({ ok: false, error: "Diese Anfrage ist nicht erlaubt." }), {
    status: 405,
    headers: { Allow: "POST", "Content-Type": "application/json; charset=utf-8" },
  });
