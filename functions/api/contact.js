// Cloudflare Pages Function — recebe o form de contato e envia um email pro dono.
// O site é estático; esta função roda no edge e guarda a key num secret, nunca
// exposta ao cliente. Provedor: Resend (https://resend.com) — troca-se aqui se preciso.
//
// Endpoint: POST /api/contact
//   body: { type, name, email, subject, message, locale }
//   resposta: { ok: true }  (ou { error } com status != 200)
//
// Secrets necessários no Cloudflare Pages (Settings → Environment variables):
//   RESEND_API_KEY    — key da API do Resend
//   CONTACT_TO_EMAIL  — email de destino (pra onde as mensagens chegam)
//   CONTACT_FROM_EMAIL (opcional) — remetente verificado no Resend
//                        (default: onboarding@resend.dev, só pra teste)

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
}

const clean = (s, max) => String(s == null ? '' : s).trim().slice(0, max);
const esc = s => String(s).replace(/[<>&]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));

export async function onRequestPost({ request, env }) {
  const key = env && env.RESEND_API_KEY;
  const to = env && env.CONTACT_TO_EMAIL;
  if (!key || !to) return json({ error: 'not_configured' }, 503);
  const from = (env && env.CONTACT_FROM_EMAIL) || 'onboarding@resend.dev';

  let body;
  try {
    body = await request.json();
  } catch (e) {
    return json({ error: 'bad_request' }, 400);
  }

  // Honeypot: bots preenchem o campo escondido "website" → descarta em silêncio.
  if (body && body.website) return json({ ok: true });

  const type = clean(body && body.type, 20) || 'feedback';
  const name = clean(body && body.name, 80);
  const email = clean(body && body.email, 120);
  const subject = clean(body && body.subject, 120);
  const message = clean(body && body.message, 4000);
  const locale = clean(body && body.locale, 10);

  if (!name || !email || !subject || !message) return json({ error: 'missing_fields' }, 400);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ error: 'bad_email' }, 400);

  const typeLabel = { feedback: 'Feedback', bug: 'Bug report', idea: 'Idea / suggestion' }[type] || type;
  const html =
    `<h2>Tenno Helper — ${esc(typeLabel)}</h2>`
    + `<p><b>Name:</b> ${esc(name)}<br>`
    + `<b>Email:</b> ${esc(email)}<br>`
    + `<b>Type:</b> ${esc(typeLabel)}<br>`
    + `<b>Locale:</b> ${esc(locale || '—')}</p>`
    + `<p><b>Subject:</b> ${esc(subject)}</p>`
    + `<p style="white-space:pre-wrap">${esc(message)}</p>`;

  // Anexo opcional (base64). Cap defensivo (~5 MB de arquivo → ~7 MB em base64) + tipo permitido.
  let attachments;
  const att = body && body.attachment;
  if (att && att.data && att.filename) {
    if (typeof att.data !== 'string' || att.data.length > 7400000) return json({ error: 'attachment_too_large' }, 413);
    if (!/^(image\/(png|jpeg|gif|webp)|application\/pdf)$/.test(att.type || '')) return json({ error: 'attachment_bad_type' }, 400);
    attachments = [{ filename: clean(att.filename, 120), content: att.data }];
  }

  const mail = {
    from: `Tenno Helper <${from}>`,
    to: [to],
    reply_to: email,
    subject: `[${typeLabel}] ${subject}`,
    html,
  };
  if (attachments) mail.attachments = attachments;

  let resp;
  try {
    resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'authorization': 'Bearer ' + key,
        'content-type': 'application/json',
      },
      body: JSON.stringify(mail),
    });
  } catch (e) {
    return json({ error: 'upstream_fetch_failed' }, 502);
  }

  if (!resp.ok) {
    let detail = '';
    try { detail = (await resp.text()).slice(0, 300); } catch (e) {}
    return json({ error: 'send_failed', status: resp.status, detail }, 502);
  }

  return json({ ok: true });
}
