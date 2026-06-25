function renderPatchNotes() {
  const locale = state.locale === 'pt-BR' ? 'pt-BR' : 'en';
  const entries = PATCH_NOTES[locale] || PATCH_NOTES.en;
  const html = entries.map(entry => `
    <div class="patchnotes-entry">
      <h3 class="patchnotes-entry-header">
        <span class="patchnotes-date">${entry.date}</span>
        <span class="patchnotes-title">${entry.title}</span>
      </h3>
      <ul class="patchnotes-list">
        ${entry.items.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
  `).join('');
  document.getElementById('credits-patchnotes-body').innerHTML = html;
}

function openPatchNotes() {
  document.getElementById('credits-body')?.classList.add('hidden');
  document.getElementById('credits-patchnotes-view')?.classList.remove('hidden');
  renderPatchNotes();
}

function closePatchNotes() {
  document.getElementById('credits-patchnotes-view')?.classList.add('hidden');
  document.getElementById('credits-body')?.classList.remove('hidden');
}

function openCreditsModal() {
  document.getElementById('credits-modal')?.classList.remove('hidden');
}
function closeCreditsModal() {
  closePatchNotes();
  document.getElementById('credits-modal')?.classList.add('hidden');
}

function setupCreditsEvents() {
  document.getElementById('credits-btn')?.addEventListener('click', openCreditsModal);
  document.getElementById('credits-modal-close')?.addEventListener('click', closeCreditsModal);
  document.getElementById('credits-modal-backdrop')?.addEventListener('click', closeCreditsModal);
  document.getElementById('credits-patchnotes-btn')?.addEventListener('click', openPatchNotes);
  document.getElementById('credits-patchnotes-back')?.addEventListener('click', closePatchNotes);
  document.addEventListener('keydown', e => {
    const modal = document.getElementById('credits-modal');
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      e.preventDefault();
      closeCreditsModal();
    }
  });
}

// ── Painel de contato (form → email via Cloudflare Function /api/contact) ─────
const CONTACT_MAX_FILE = 5 * 1024 * 1024; // 5 MB
// Lê um arquivo como base64 puro (sem o prefixo "data:...;base64,").
function readContactFile(file) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => {
      const s = String(r.result || '');
      const i = s.indexOf(',');
      resolve({ filename: file.name, type: file.type || 'application/octet-stream', data: i >= 0 ? s.slice(i + 1) : s });
    };
    r.onerror = () => reject(new Error('read_failed'));
    r.readAsDataURL(file);
  });
}
function openContactPanel() {
  const p = document.getElementById('contact-panel');
  if (!p) return;
  p.classList.remove('hidden');
  p.dataset.openedAt = String(Date.now()); // armadilha de tempo (anti-spam)
  document.getElementById('contact-name')?.focus();
}
function closeContactPanel() {
  document.getElementById('contact-panel')?.classList.add('hidden');
}
function setupContactPanel() {
  const panel = document.getElementById('contact-panel');
  const btn = document.getElementById('contact-btn');
  const form = document.getElementById('contact-form');
  if (!panel || !btn || !form) return;

  btn.addEventListener('click', () => {
    if (panel.classList.contains('hidden')) openContactPanel();
    else closeContactPanel();
  });
  document.getElementById('contact-panel-close')?.addEventListener('click', closeContactPanel);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !panel.classList.contains('hidden')) { e.preventDefault(); closeContactPanel(); }
  });

  const statusEl = document.getElementById('contact-status');
  const submitBtn = document.getElementById('contact-submit');
  const setStatus = (msg, kind) => {
    if (!statusEl) return;
    statusEl.textContent = msg;
    statusEl.classList.remove('is-ok', 'is-err');
    if (kind) statusEl.classList.add(kind === 'ok' ? 'is-ok' : 'is-err');
  };
  const T = () => (state.locale === 'pt-BR'
    ? { sending: 'Enviando…', ok: 'Mensagem enviada — obrigado!', err: 'Não foi possível enviar. Tente de novo mais tarde.', fill: 'Preencha todos os campos.', email: 'Email inválido.', fileBig: 'Anexo muito grande (máx 5 MB).', fileType: 'Anexo deve ser imagem ou PDF.' }
    : { sending: 'Sending…', ok: 'Message sent — thank you!', err: 'Could not send. Please try again later.', fill: 'Please fill in all fields.', email: 'Invalid email.', fileBig: 'Attachment too large (max 5 MB).', fileType: 'Attachment must be an image or PDF.' });

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const t = T();
    // Honeypot: se o campo escondido foi preenchido, é bot → finge sucesso e aborta.
    if (document.getElementById('contact-website')?.value) { setStatus(t.ok, 'ok'); form.reset(); return; }
    // Armadilha de tempo: envio em menos de 2,5s do abrir = bot → finge sucesso e aborta.
    const openedAt = Number(panel.dataset.openedAt || 0);
    if (openedAt && Date.now() - openedAt < 2500) { setStatus(t.ok, 'ok'); form.reset(); return; }

    const payload = {
      type: document.getElementById('contact-type')?.value || '',
      name: (document.getElementById('contact-name')?.value || '').trim(),
      email: (document.getElementById('contact-email')?.value || '').trim(),
      subject: (document.getElementById('contact-subject')?.value || '').trim(),
      message: (document.getElementById('contact-message')?.value || '').trim(),
      locale: state.locale,
    };
    if (!payload.name || !payload.email || !payload.subject || !payload.message) { setStatus(t.fill, 'err'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) { setStatus(t.email, 'err'); return; }

    // Anexo opcional: valida tipo + tamanho e converte pra base64.
    const fileInput = document.getElementById('contact-file');
    const file = fileInput?.files?.[0];
    if (file) {
      if (!/^(image\/(png|jpeg|gif|webp)|application\/pdf)$/.test(file.type)) { setStatus(t.fileType, 'err'); return; }
      if (file.size > CONTACT_MAX_FILE) { setStatus(t.fileBig, 'err'); return; }
      try { payload.attachment = await readContactFile(file); }
      catch (err) { setStatus(t.err, 'err'); return; }
    }

    submitBtn.disabled = true;
    setStatus(t.sending, null);
    try {
      const resp = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!resp.ok) throw new Error('bad_status');
      setStatus(t.ok, 'ok');
      form.reset();
    } catch (err) {
      setStatus(t.err, 'err');
    } finally {
      submitBtn.disabled = false;
    }
  });
}

// ── Modal de doação (PayPal + PIX) ───────────────────────────────────────────
// ⚠️ PREENCHER com os dados reais do usuário:
//   PAYPAL_URL  = link PayPal.me (ex.: 'https://paypal.me/usuario')
//   PIX_PAYLOAD = código "Pix Copia e Cola" (BR Code) de uma chave aleatória/email
// Se PIX_PAYLOAD ficar vazio, a seção do Pix some (mostra só PayPal).
const PAYPAL_URL = 'https://streamelements.com/viking_tropical/tip';
// Pix Copia e Cola (BR Code) — gerado de chave aleatória via scripts/_pix_brcode.py.
const PIX_PAYLOAD = '00020126580014br.gov.bcb.pix013648b98a4a-c5c7-4a6d-9735-9ae88badbf615204000053039865802BR5912TENNO HELPER6006BRASIL62070503***630429A2';

function openDonateModal() {
  const m = document.getElementById('donate-modal');
  if (!m) return;
  m.classList.remove('hidden');
  // Gera o QR do Pix uma vez (lazy), quando o modal abre.
  const qrBox = document.getElementById('donate-pix-qr');
  if (qrBox && !qrBox.dataset.done && PIX_PAYLOAD && typeof qrcode === 'function') {
    try {
      const qr = qrcode(0, 'M');
      qr.addData(PIX_PAYLOAD);
      qr.make();
      qrBox.innerHTML = `<img src="${qr.createDataURL(5, 8)}" alt="Pix QR Code" width="180" height="180">`;
      qrBox.dataset.done = '1';
    } catch (e) { qrBox.style.display = 'none'; }
  }
}
function closeDonateModal() {
  document.getElementById('donate-modal')?.classList.add('hidden');
}
function setupDonateModal() {
  const btn = document.getElementById('donate-btn');
  const modal = document.getElementById('donate-modal');
  if (!btn || !modal) return;

  // PayPal: aplica a URL (e esconde se não configurada).
  const pp = document.getElementById('donate-paypal');
  if (pp) {
    if (PAYPAL_URL && !/SEU_USUARIO/.test(PAYPAL_URL)) pp.href = PAYPAL_URL;
    else pp.style.display = 'none';
  }
  // PIX: preenche o código (e esconde a seção se não configurado).
  const pixSection = document.getElementById('donate-pix');
  const pixCode = document.getElementById('donate-pix-code');
  if (PIX_PAYLOAD && pixCode) pixCode.value = PIX_PAYLOAD;
  else if (pixSection) pixSection.style.display = 'none';

  btn.addEventListener('click', openDonateModal);
  document.getElementById('donate-modal-close')?.addEventListener('click', closeDonateModal);
  document.getElementById('donate-modal-backdrop')?.addEventListener('click', closeDonateModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) { e.preventDefault(); closeDonateModal(); }
  });

  // Copiar o código Pix.
  const copyBtn = document.getElementById('donate-pix-btn');
  copyBtn?.addEventListener('click', async () => {
    if (!PIX_PAYLOAD) return;
    try { await navigator.clipboard.writeText(PIX_PAYLOAD); }
    catch (e) { pixCode?.select(); document.execCommand && document.execCommand('copy'); }
    const orig = copyBtn.textContent;
    copyBtn.textContent = state.locale === 'pt-BR' ? 'Copiado!' : 'Copied!';
    setTimeout(() => { copyBtn.textContent = orig; }, 1600);
  });
}

function openLightbox(src, alt) {
  const modal = document.getElementById('lightbox-modal');
  const img   = document.getElementById('lightbox-img');
  img.src = src;
  img.alt = alt || '';
  modal.classList.remove('hidden');
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  modal.classList.add('hidden');
  document.getElementById('lightbox-img').src = '';
}

// ── Star Chart glossary section (timeline + junction anatomy + special + terms) ──

// Ordem aproximada de progressão pelo Sistema de Origem (alimenta a timeline;
// dados de cada planeta vêm de STAR_CHART por slug).
const SC_TIMELINE_ORDER = ['earth', 'venus', 'mercury', 'mars', 'deimos', 'phobos', 'ceres',
  'jupiter', 'europa', 'saturn', 'uranus', 'neptune', 'pluto', 'eris', 'sedna'];

// `spoiler: true` → escondido atrás do véu quando "Mostrar Spoilers" está OFF.
const SC_SPECIAL = [
  { slug: 'void',          note: { en: 'Relics & Void Traces. Opens early via the Mars Junction.', 'pt-BR': 'Relíquias & Void Traces. Abre cedo pela Junção de Marte.' } },
  { slug: 'lua',           spoiler: true, note: { en: 'The Moon. Requires the The Second Dream quest.', 'pt-BR': 'A Lua. Exige a jornada The Second Dream.' } },
  { slug: 'zariman',       spoiler: true, note: { en: 'Hub. Angels of the Zariman quest.',            'pt-BR': 'Central. Jornada Angels of the Zariman.' } },
  { slug: 'kuva-fortress', spoiler: true, note: { en: 'Roaming Grineer fortress. The War Within.',    'pt-BR': 'Fortaleza Grineer móvel. The War Within.' } },
  { slug: 'duviri',        spoiler: true, note: { en: 'Standalone realm. The Duviri Paradox.',        'pt-BR': 'Reino à parte. The Duviri Paradox.' } },
];

const SC_JUNCTION_STEPS = [
  { t: { en: '1 · Tasks',        'pt-BR': '1 · Tarefas' },          d: { en: 'A checklist: kill enemies with a damage type, fully rank a mod, finish certain missions or a quest.', 'pt-BR': 'Uma lista: matar com um tipo de dano, maxar um mod, completar certas missões ou uma jornada.' } },
  { t: { en: '2 · Specter duel', 'pt-BR': '2 · Duelo de Espectro' }, d: { en: 'Beat a Specter — a clone enemy guarding the gateway.', 'pt-BR': 'Derrote um Espectro — um clone inimigo que guarda o portão.' } },
  { t: { en: '3 · Rewards',      'pt-BR': '3 · Recompensas' },      d: { en: 'Unlocks the next planet, plus mods, credits, sometimes a Warframe slot or an Orokin Catalyst/Reactor.', 'pt-BR': 'Libera o próximo planeta, além de mods, créditos e às vezes slot de Warframe ou Catalisador/Reator Orokin.' } },
];

const SC_TERMS = [
  { t: { en: 'Node',          'pt-BR': 'Nodo' },             d: { en: 'A single mission on a planet.',                          'pt-BR': 'Uma missão individual num planeta.' } },
  { t: { en: 'Junction',      'pt-BR': 'Junção' },         d: { en: 'The gateway between planets — clear it to progress.',     'pt-BR': 'O portão entre planetas — complete pra avançar.' } },
  { t: { en: 'Dark Sector',   'pt-BR': 'Dark Sector' },      d: { en: 'Special Infested nodes with bonus resource drops.',       'pt-BR': 'Nodos Infestados especiais com bônus de recursos.' } },
  { t: { en: 'Archwing node', 'pt-BR': 'Nodo de Archwing' }, d: { en: 'Free-flight space missions; needs Archwing.',             'pt-BR': 'Missões espaciais de voo livre; exigem Archwing.' } },
  { t: { en: 'Assassination', 'pt-BR': 'Assassinato' },      d: { en: 'Boss nodes — many drop Warframe parts.',                  'pt-BR': 'Nodos de chefe — muitos dropam partes de Warframe.' } },
];

const SC_TIPS = [
  { en: "You don't need to 100% every node — Junctions are what gate your progression.", 'pt-BR': 'Você não precisa 100%ar cada nodo — são as Junções que travam a progressão.' },
  { en: 'Relics (for Prime gear) come from Void missions and many node rewards.',         'pt-BR': 'Relíquias (pro equipamento Prime) vêm de missões no Void e de vários nodos.' },
  { en: 'Steel Path is a harder remix of the whole Star Chart — see its own section.',    'pt-BR': 'O Percurso de Aço é uma versão mais difícil de todo o Mapa Estelar — veja a seção dele.' },
];

let _scGlossBound = false;
