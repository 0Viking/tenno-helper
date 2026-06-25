function renderStarChartGlossary() {
  const el = document.getElementById('sc-gloss');
  if (!el) return;
  const loc = state.locale === 'pt-BR' ? 'pt-BR' : 'en';
  const L = o => (o && (o[loc] || o.en)) || '';
  const esc = relicEsc; // reutiliza o escape de HTML já existente

  const bySlug = {};
  (STAR_CHART.planets || []).forEach(p => { bySlug[p.slug] = p; });
  (STAR_CHART.special || []).forEach(p => { bySlug[p.slug] = p; });

  const facColor = p => (p && p.faction && SC_FACTIONS[p.faction] && SC_FACTIONS[p.faction].color) || '#b888ff';

  // Timeline de planetas
  const tl = SC_TIMELINE_ORDER.map(slug => {
    const p = bySlug[slug];
    if (!p) return '';
    return `<button type="button" class="sc-tl-chip" data-sc-go="${slug}" style="--f:${facColor(p)}">`
      + `<img class="sc-tl-img" src="${esc(p.image)}" alt="" loading="lazy">`
      + `<span class="sc-tl-name">${esc(L(p.name))}</span>`
      + `<span class="sc-tl-lv">${esc(p.levelRange || '')}</span></button>`;
  }).filter(Boolean).join('<span class="sc-tl-arrow" aria-hidden="true">›</span>');

  // Legenda de facções
  // só as facções que aparecem nos planetas da timeline (origin system)
  const facKeys = ['grineer', 'corpus', 'infested'];
  const legend = facKeys.map(k =>
    `<span class="sc-fac"><i style="background:${SC_FACTIONS[k].color}"></i>${esc(L(SC_FACTIONS[k].name))}</span>`
  ).join('');

  // Anatomia da Junction
  const steps = SC_JUNCTION_STEPS.map(s =>
    `<div class="sc-jstep"><span class="sc-jstep-t">${esc(L(s.t))}</span><span class="sc-jstep-d">${esc(L(s.d))}</span></div>`
  ).join('');

  // Destinos especiais — com proteção contra spoilers.
  const showSpoilers = !!(state.starChart && state.starChart.showSpoilers);
  const card = sp => {
    const p = bySlug[sp.slug];
    if (!p) return '';
    return `<button type="button" class="sc-special-card" data-sc-go="${sp.slug}" style="--f:${facColor(p)}">`
      + `<img class="sc-special-img" src="${esc(p.image)}" alt="" loading="lazy">`
      + `<span class="sc-special-name">${esc(L(p.name))}</span>`
      + `<span class="sc-special-note">${esc(L(sp.note))}</span></button>`;
  };
  const hiddenCount = SC_SPECIAL.filter(sp => sp.spoiler).length;
  let special;
  if (showSpoilers) {
    special = SC_SPECIAL.map(card).filter(Boolean).join('');
  } else {
    const visible = SC_SPECIAL.filter(sp => !sp.spoiler).map(card).filter(Boolean).join('');
    const veilTxt = L({ en: `${hiddenCount} quest-locked destinations hidden`, 'pt-BR': `${hiddenCount} destinos com quest-lock ocultos` });
    const veilCta = L({ en: 'Reveal spoilers', 'pt-BR': 'Revelar spoilers' });
    special = visible
      + `<button type="button" class="sc-special-card sc-special-veil" data-sc-reveal>`
      + `<span class="sc-veil-ico" aria-hidden="true">🔒</span>`
      + `<span class="sc-special-name">${esc(veilTxt)}</span>`
      + `<span class="sc-special-note">${esc(veilCta)} →</span></button>`;
  }

  // Termos-chave
  const terms = SC_TERMS.map(t =>
    `<div class="sc-term"><dt>${esc(L(t.t))}</dt><dd>${esc(L(t.d))}</dd></div>`
  ).join('');

  // Dicas
  const tips = SC_TIPS.map(t => `<li>${esc(L(t))}</li>`).join('');

  const T = {
    timeline:  { en: 'Progression order',        'pt-BR': 'Ordem de progressão' },
    timelineS: { en: 'Approximate planet unlock order. Tap a planet to open it on the interactive map.', 'pt-BR': 'Ordem aproximada de desbloqueio. Toque num planeta para abri-lo no mapa interativo.' },
    junction:  { en: 'Anatomy of a Junction',    'pt-BR': 'Anatomia de uma Junção' },
    special:   { en: 'Special destinations',     'pt-BR': 'Destinos especiais' },
    terms:     { en: 'Key terms',                'pt-BR': 'Termos-chave' },
    tips:      { en: 'Good to know',             'pt-BR': 'Bom saber' },
    cta:       { en: 'Explore the interactive Star Chart', 'pt-BR': 'Explorar o Mapa Estelar interativo' },
  };

  el.innerHTML =
    `<h4 class="sc-h">${esc(L(T.terms))}</h4>`
    + `<dl class="sc-terms">${terms}</dl>`
    + `<h4 class="sc-h">${esc(L(T.timeline))}</h4>`
    + `<p class="sc-sub">${esc(L(T.timelineS))}</p>`
    + `<div class="sc-timeline">${tl}</div>`
    + `<div class="sc-legend">${legend}</div>`
    + `<h4 class="sc-h">${esc(L(T.junction))}</h4>`
    + `<div class="sc-jsteps">${steps}</div>`
    + `<div class="sc-h-row"><h4 class="sc-h">${esc(L(T.special))}</h4>`
    + (showSpoilers && hiddenCount ? `<button type="button" class="sc-spoiler-toggle" data-sc-hide>${esc(L({ en: 'Hide spoilers', 'pt-BR': 'Ocultar spoilers' }))}</button>` : '')
    + `</div>`
    + `<div class="sc-special">${special}</div>`
    + `<h4 class="sc-h">${esc(L(T.tips))}</h4>`
    + `<ul class="sc-tips">${tips}</ul>`
    + `<button type="button" class="sc-cta" data-sc-cta>${esc(L(T.cta))} →</button>`;

  if (!_scGlossBound) {
    el.addEventListener('click', e => {
      const reveal = e.target.closest('[data-sc-reveal]');
      const hide = e.target.closest('[data-sc-hide]');
      if (reveal || hide) {
        state.starChart.showSpoilers = !!reveal;
        try { localStorage.setItem('starChart.showSpoilers', reveal ? 'true' : 'false'); } catch (err) {}
        renderStarChartGlossary();
        return;
      }
      const go = e.target.closest('[data-sc-go]');
      if (go) { goToStarChart(go.dataset.scGo); return; }
      if (e.target.closest('[data-sc-cta]')) {
        if (typeof selectTab === 'function') selectTab('star-chart');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
    _scGlossBound = true;
  }
}

// ── Mastery Rank glossary section ────────────────────────────────────────────

const MR_EARN = [
  { xp: '3 000', t: { en: 'Weapons', 'pt-BR': 'Armas' },
    d: { en: '100 XP per rank, to 30. Primaries, secondaries, melee, Kitguns, Zaws, Amps, Archwing & Sentinel weapons.',
         'pt-BR': '100 XP por rank, até 30. Primárias, secundárias, melee, Kitguns, Zaws, Amps, armas de Archwing e Sentinela.' } },
  { xp: '4 000', t: { en: 'Rank-40 weapons', 'pt-BR': 'Armas de rank 40' },
    d: { en: 'Kuva, Tenet & Coda weapons and the Paracesis rank to 40 (5 Forma) for more mastery.',
         'pt-BR': 'Armas Kuva, Tenet e Coda e a Paracesis sobem até o rank 40 (5 Forma), valendo mais mastery.' } },
  { xp: '6 000', t: { en: 'Warframes & co.', 'pt-BR': 'Warframes & cia.' },
    d: { en: '200 XP per rank, to 30. Warframes, Companions, Archwings, K-Drives, Necramechs.',
         'pt-BR': '200 XP por rank, até 30. Warframes, Companions, Archwings, K-Drives, Necramechs.' } },
];

const MR_PERKS = [
  { t: { en: 'Mod capacity head start', 'pt-BR': 'Capacidade de mod inicial' },
    d: { en: 'New unranked gear starts with mod capacity equal to your MR.', 'pt-BR': 'Equipamento novo já começa com capacidade de mod igual ao seu MR.' } },
  { t: { en: 'Daily Standing cap', 'pt-BR': 'Limite diário de Reputação' },
    d: { en: '16 000 + (500 × MR) per syndicate, each day.', 'pt-BR': '16.000 + (500 × MR) por sindicato, por dia.' } },
  { t: { en: 'Daily trades', 'pt-BR': 'Trades por dia' },
    d: { en: 'You can trade up to MR times per day.', 'pt-BR': 'Você pode negociar até MR vezes por dia.' } },
  { t: { en: 'MR-locked gear', 'pt-BR': 'Equipamento com MR-lock' },
    d: { en: 'Some weapons, items and Riven mods require a minimum rank.', 'pt-BR': 'Algumas armas, itens e Rivens exigem rank mínimo.' } },
];

const MR_TIPS = [
  { en: 'Rank each unique item to 30 once before selling it — that’s how MR rises, and you keep it after selling.',
    'pt-BR': 'Ranqueie cada item único até 30 uma vez antes de vender — é assim que o MR sobe, e você o mantém depois de vender.' },
  { en: 'Variants count separately: base, Prime, Vandal, Wraith and MK1 each grant mastery.',
    'pt-BR': 'Variantes contam separado: base, Prime, Vandal, Wraith e MK1 dão mastery cada uma.' },
  { en: 'MR matters most early (capacity + gates); later it’s mostly prestige and higher caps.',
    'pt-BR': 'MR importa mais no começo (capacidade + gates); depois é mais prestígio e caps maiores.' },
];

