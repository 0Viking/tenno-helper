// Glossário — Endo. Recurso pra upar mods. Dados da wiki (Endo + Ayatan_Sculpture/Treasures).
const ENDO_SOURCES = [
  { t: { en: 'Ayatan Sculptures & Stars', 'pt-BR': 'Esculturas & Estrelas Ayatan' }, d: { en: 'the biggest source — socket Stars into Sculptures, then cash them in', 'pt-BR': 'a maior fonte — encaixe Estrelas nas Esculturas e troque por Endo' } },
  { t: { en: 'Endo drops', 'pt-BR': 'Drops de Endo' }, d: { en: 'enemies and caches drop Endo orbs (15 / 50 / 80)', 'pt-BR': 'inimigos e caches dropam orbes de Endo (15 / 50 / 80)' } },
  { t: { en: '<span class="gloss-link" onclick="goToGlossarySection(\'arbitrations\')">Arbitrations</span> & <span class="gloss-link" onclick="goToGlossarySection(\'sorties\')">Sorties</span>', 'pt-BR': '<span class="gloss-link" onclick="goToGlossarySection(\'arbitrations\')">Arbitragens</span> & <span class="gloss-link" onclick="goToGlossarySection(\'sorties\')">Sorties</span>' }, d: { en: 'strong mid/late-game Endo rewards', 'pt-BR': 'boas recompensas de Endo no mid/late-game' } },
  { t: { en: 'Dissolving duplicate mods', 'pt-BR': 'Dissolver mods duplicados' }, d: { en: 'turn unwanted mods into Endo (one-way!)', 'pt-BR': 'transforma mods que não quer em Endo (sem volta!)' } },
  { t: { en: 'Maroo’s Weekly Ayatan Hunt', 'pt-BR': 'Caça Ayatan semanal da Maroo' }, d: { en: 'one sculpture a week from Maroo (Maroo’s Bazaar, Mars)', 'pt-BR': 'uma escultura por semana com a Maroo (Maroo’s Bazaar, Marte)' } },
];

// 11 esculturas: ciano/âmbar sockets, base e valor cheio (todas as estrelas). Wiki.
// Fórmula: cheio = (base + 50·ciano + 100·âmbar) × (1 + M), M=0.5 Anasa / 3 (gold-rich) / 2 demais.
const ENDO_SCULPTS = [
  { ic: 'AyatanAnasaSculpture.png?b0b14', name: 'Anasa', c: 2, a: 2, base: 2000, full: 3450 },
  { ic: 'AyatanKithaSculpture.png?24cf5', name: 'Kitha', c: 4, a: 1, base: 450, full: 3000 },
  { ic: 'AyatanOrtaSculpture.png?6eba6', name: 'Orta', c: 3, a: 1, base: 650, full: 2700 },
  { ic: 'AyatanChattrakaSculpture.png?28911', name: 'Chattraka', c: 2, a: 1, base: 450, full: 2600 },
  { ic: 'AyatanHemakaraSculpture.png?67c1a', name: 'Hemakara', c: 2, a: 1, base: 450, full: 2600 },
  { ic: 'AyatanZambukaSculpture.png?2ab30', name: 'Zambuka', c: 2, a: 1, base: 450, full: 2600 },
  { ic: 'AyatanVayaSculpture.png?c7032', name: 'Vaya', c: 2, a: 1, base: 400, full: 1800 },
  { ic: 'AyatanPivSculpture.png?f136c', name: 'Piv', c: 2, a: 1, base: 375, full: 1725 },
  { ic: 'AyatanValanaSculpture.png?27d8d', name: 'Valana', c: 2, a: 1, base: 325, full: 1575 },
  { ic: 'AyatanSahSculpture.png?c23ae', name: 'Sah', c: 2, a: 1, base: 300, full: 1500 },
  { ic: 'AyatanAyrSculpture.png?c6e86', name: 'Ayr', c: 3, a: 0, base: 325, full: 1425 },
];

function renderEndoSection() {
  const el = document.getElementById('endo-gloss');
  if (!el) return;
  const loc = state.locale === 'pt-BR' ? 'pt-BR' : 'en';
  const L = o => (o && (o[loc] || o.en)) || '';
  const esc = relicEsc;
  const W = 'https://wiki.warframe.com/images/';
  const endoIco = `<img class="gloss-ico" src="${W}Endo.png?34c5c" alt="" onerror="this.style.display='none'">`;
  const fmt = n => n.toLocaleString(loc === 'pt-BR' ? 'pt-BR' : 'en-US');

  const T = {
    what: { en: 'What it is', 'pt-BR': 'O que é' },
    intro: { en: 'Endo is the resource that upgrades (ranks up) your mods, making them stronger. Each rank also costs Credits. Endo can’t be traded or sold.', 'pt-BR': 'Endo é o recurso que melhora (upa) seus mods, deixando-os mais fortes. Cada rank também custa Créditos. Endo não pode ser trocado nem vendido.' },
    get: { en: 'How to get it', 'pt-BR': 'Como conseguir' },
    ayatan: { en: 'Ayatan Sculptures', 'pt-BR': 'Esculturas Ayatan' },
    ayatanText: { en: 'Ornate Orokin artifacts with empty sockets. Slot Ayatan Stars into them, then give the filled sculpture to Maroo for Endo — or keep it as an animated Orbiter decoration. Stars don’t come out once socketed, and Vacuum won’t grab Stars or Sculptures (pick them up by hand).', 'pt-BR': 'Artefatos Orokin com encaixes vazios. Coloque Estrelas Ayatan neles e dê a escultura cheia pra Maroo por Endo — ou guarde como decoração animada do Orbiter. Estrelas não saem depois de encaixadas, e o Vacuum não pega Estrelas nem Esculturas (pegue na mão).' },
    howSocket: { en: 'How to socket Stars', 'pt-BR': 'Como encaixar as Estrelas' },
    socketPath: { en: 'Orbiter → Mods segment → Ayatan Sculptures → pick a sculpture → click its empty sockets to insert your Stars.', 'pt-BR': 'Orbiter → segmento de Mods → Esculturas Ayatan → escolha uma escultura → clique nos encaixes vazios pra inserir suas Estrelas.' },
    stars: { en: 'Star values', 'pt-BR': 'Valor das Estrelas' },
    cyan: { en: 'Cyan Star', 'pt-BR': 'Estrela Ciano' },
    amber: { en: 'Amber Star', 'pt-BR': 'Estrela Âmbar' },
    panel: { en: 'Every sculpture (base → fully socketed)', 'pt-BR': 'Todas as esculturas (base → toda encaixada)' },
    formula: { en: 'A filled sculpture is worth (base + 50 per Cyan + 100 per Amber) × a per-sculpture multiplier (×1.5 to ×4) — so filling one is worth far more than the loose Stars.', 'pt-BR': 'Uma escultura cheia vale (base + 50 por Ciano + 100 por Âmbar) × um multiplicador da escultura (×1,5 a ×4) — então enchê-la vale muito mais que as Estrelas soltas.' },
    tips: { en: 'New-player tips', 'pt-BR': 'Dicas pra quem começa' },
    tip1: { en: '<b>ALWAYS socket spare Stars</b> before turning a sculpture in — a full one is worth far more.', 'pt-BR': '<b>SEMPRE encaixe as Estrelas extras</b> antes de entregar a escultura — cheia vale muito mais.' },
    tip2: { en: 'Don’t dissolve mods you might still want — it’s one-way.', 'pt-BR': 'Não dissolva mods que ainda pode querer — não tem volta.' },
    tip3: { en: 'Arbitrations are a great Endo source once you unlock them.', 'pt-BR': 'Arbitragens são uma ótima fonte de Endo depois de desbloqueá-las.' },
  };

  const sources = ENDO_SOURCES.map(s => `<div class="sc-term"><dt>${L(s.t)}</dt><dd>${L(s.d)}</dd></div>`).join('');
  const tips = [T.tip1, T.tip2, T.tip3].map(t => `<li>${L(t)}</li>`).join('');
  const dot = c => `<span class="gloss-dot" style="background:${c}"></span>`;
  const sculpts = ENDO_SCULPTS.map(s => {
    const sockets = dot('#3fb7c7').repeat(s.c) + dot('#e3a72f').repeat(s.a);
    return `<div class="endo-sculpt"><img class="endo-sculpt-ic" src="${W}${s.ic}" alt="" loading="lazy" onerror="this.style.visibility='hidden'">`
      + `<span class="endo-sculpt-name">${esc(s.name)}</span>`
      + `<div class="endo-sculpt-sockets">${sockets}</div>`
      + `<div class="endo-sculpt-val">${endoIco}${fmt(s.base)} → <span class="endo-sculpt-full">${fmt(s.full)}</span></div></div>`;
  }).join('');

  el.innerHTML =
    `<h4 class="sc-h">${esc(L(T.what))}</h4>`
    + `<div class="gloss-callout"><span class="gloss-callout-ico" aria-hidden="true">${endoIco}</span><span class="gloss-callout-text">${esc(L(T.intro))}</span></div>`
    + `<h4 class="sc-h">${esc(L(T.get))}</h4>`
    + `<dl class="sc-terms">${sources}</dl>`
    + `<h4 class="sc-h">${esc(L(T.ayatan))}</h4>`
    + `<div class="gloss-callout"><span class="gloss-callout-ico" aria-hidden="true"><img class="gloss-ico" src="${W}AyatanAnasaSculpture.png?b0b14" alt="" onerror="this.style.display='none'"></span><span class="gloss-callout-text">${esc(L(T.ayatanText))}</span></div>`
    + `<p class="sc-sub">${esc(L(T.howSocket))}</p>`
    + `<div class="gloss-callout"><span class="gloss-callout-ico" aria-hidden="true">🛠️</span><span class="gloss-callout-text">${esc(L(T.socketPath))}</span></div>`
    + `<p class="sc-sub">${esc(L(T.stars))}</p>`
    + `<div class="gloss-chips">`
    + `<div class="gloss-chip">${dot('#3fb7c7')}<span class="gloss-chip-name">${esc(L(T.cyan))}</span><span class="gloss-chip-sub">${endoIco}50</span></div>`
    + `<div class="gloss-chip">${dot('#e3a72f')}<span class="gloss-chip-name">${esc(L(T.amber))}</span><span class="gloss-chip-sub">${endoIco}100</span></div>`
    + `</div>`
    + `<h4 class="sc-h">${esc(L(T.panel))}</h4>`
    + `<div class="endo-sculpts">${sculpts}</div>`
    + `<p class="sc-sub">${esc(L(T.formula))}</p>`
    + `<h4 class="sc-h">${esc(L(T.tips))}</h4>`
    + `<ul class="sc-tips">${tips}</ul>`;
}
