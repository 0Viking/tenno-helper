function renderArcanesSection() {
  const el = document.getElementById('arcanes-gloss');
  if (!el) return;
  const loc = state.locale === 'pt-BR' ? 'pt-BR' : 'en';
  const L = o => (o && (o[loc] || o.en)) || '';
  const esc = relicEsc;
  const W = 'https://wiki.warframe.com/images/';

  const cards = ARC_POPULAR.map(a =>
    `<div class="arc-card"><img class="arc-card-ico" src="${W}${a.icon}" alt="" loading="lazy" onerror="this.style.visibility='hidden'">`
    + `<div class="arc-card-body"><span class="arc-card-name">${esc(a.name)}</span><span class="arc-card-eff">${esc(L(a.eff))}</span></div></div>`).join('');
  const slots = ARC_SLOTS.map(s => `<span class="arc-slot"><b>${esc(L(s.t))}</b> ${esc(s.v)}</span>`).join('');
  const ranks = ARC_RANKS.map(([r, tier, cum]) => `<div class="arc-rank"><span class="arc-rank-l">Rank ${r}</span><span class="arc-rank-n">${tier}</span><span class="arc-rank-tot">${cum} total</span></div>`).join('');
  const sources = ARC_SOURCES.map(s => `<li class="arc-src"><span class="arc-src-where">${esc(L(s.src))}</span><span class="arc-src-gives">${esc(L(s.gives))}</span></li>`).join('');

  const T = {
    how: { en: 'How they work', 'pt-BR': 'Como funcionam' },
    trigger: { en: 'Each arcane fires on a condition — on kill, on headshot, when damaged, on energy pickup — with a % chance. Many stack up to a cap.', 'pt-BR': 'Cada arcano dispara numa condição — ao abater, no headshot, ao tomar dano, ao pegar orb de energia — com uma % de chance. Muitos acumulam até um limite.' },
    slots: { en: 'Arcane slots', 'pt-BR': 'Slots de arcano' },
    ranks: { en: 'Ranking up', 'pt-BR': 'Subindo de rank' },
    ranksNote: { en: 'The big number is the duplicate copies for that tier; the running total is below. Max rank 5 = 21 copies. Most go to 5; Exodia, Virtuos, Pax and Residual cap at 3.', 'pt-BR': 'O número grande é quantas cópias repetidas aquele tier pede; o total acumulado fica embaixo. Rank máx 5 = 21 cópias. A maioria vai até o 5; Exodia, Virtuos, Pax e Residual param no 3.' },
    pop: { en: 'Strong picks for newer players', 'pt-BR': 'Boas escolhas pra quem está começando' },
    popNote: { en: 'Effects shown at max rank.', 'pt-BR': 'Efeitos mostrados no rank máximo.' },
    src: { en: 'Where they come from', 'pt-BR': 'De onde vêm' },
    vosfor: { en: 'Duplicate arcanes dissolve into Vosfor (with Loid), tradeable for random arcanes.', 'pt-BR': 'Arcanos repetidos viram Vosfor (com o Loid), trocável por arcanos aleatórios.' },
  };

  el.innerHTML =
    `<h4 class="sc-h">${esc(L(T.how))}</h4>`
    + `<div class="gloss-callout"><span class="gloss-callout-ico" aria-hidden="true">💠</span><span class="gloss-callout-text">${esc(L(T.trigger))}</span></div>`
    + `<p class="sc-sub">${esc(L(T.slots))}</p><div class="arc-slots">${slots}</div>`
    + `<h4 class="sc-h">${esc(L(T.ranks))}</h4>`
    + `<div class="arc-ranks">${ranks}</div><p class="sc-sub">${esc(L(T.ranksNote))}</p>`
    + `<h4 class="sc-h">${esc(L(T.pop))}</h4>`
    + `<div class="arc-grid">${cards}</div><p class="sc-sub">${esc(L(T.popNote))}</p>`
    + `<h4 class="sc-h">${esc(L(T.src))}</h4>`
    + `<ul class="arc-src-list">${sources}</ul>`
    + `<div class="gloss-callout"><span class="gloss-callout-ico" aria-hidden="true">♻️</span><span class="gloss-callout-text"><img class="gloss-ico" src="${W}Vosfor.png?4b52b" alt="" onerror="this.style.display='none'">${esc(L(T.vosfor))}</span></div>`;
}

// ── Helminth glossary section ────────────────────────────────────────────────

