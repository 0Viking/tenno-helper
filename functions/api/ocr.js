// Cloudflare Pages Function — proxy de OCR pro Google Cloud Vision.
// O site é estático; chamar a Vision direto do navegador exporia a key.
// Esta função roda no edge do Cloudflare e guarda a key num secret
// (env.GOOGLE_VISION_KEY), nunca exposto ao cliente.
//
// Endpoint: POST /api/ocr   body: { imageBase64: "<base64 sem prefixo data:>" }
// Resposta: { text: "<texto detectado>" }  (ou { error } com status != 200)
//
// O cliente (script.js runRivenOcr) tenta isto primeiro e cai no Tesseract
// se falhar (sem key, 404 no dev local, erro/quota da Vision).

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
}

export async function onRequestPost({ request, env }) {
  const key = env && env.GOOGLE_VISION_KEY;
  if (!key) return json({ error: 'no_key' }, 503);

  let body;
  try {
    body = await request.json();
  } catch (e) {
    return json({ error: 'bad_request' }, 400);
  }
  const b64 = body && body.imageBase64;
  if (!b64 || typeof b64 !== 'string') return json({ error: 'bad_request' }, 400);
  // Cap de tamanho (~10MB de imagem -> ~13.5M chars em base64). Evita abuso.
  if (b64.length > 14_000_000) return json({ error: 'too_large' }, 413);

  const visionBody = {
    requests: [{
      image: { content: b64 },
      features: [{ type: 'DOCUMENT_TEXT_DETECTION' }],
      imageContext: { languageHints: ['pt', 'en'] },
    }],
  };

  let resp;
  try {
    resp = await fetch(
      'https://vision.googleapis.com/v1/images:annotate?key=' + encodeURIComponent(key),
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(visionBody),
      }
    );
  } catch (e) {
    return json({ error: 'upstream_fetch_failed' }, 502);
  }

  if (!resp.ok) {
    let detail = '';
    try { detail = (await resp.text()).slice(0, 300); } catch (e) {}
    return json({ error: 'vision_error', status: resp.status, detail }, 502);
  }

  let data;
  try {
    data = await resp.json();
  } catch (e) {
    return json({ error: 'vision_bad_json' }, 502);
  }

  const r0 = data && data.responses && data.responses[0];
  if (r0 && r0.error) return json({ error: 'vision_api_error', detail: r0.error.message }, 502);
  const text = (r0 && r0.fullTextAnnotation && r0.fullTextAnnotation.text) || '';
  return json({ text });
}
