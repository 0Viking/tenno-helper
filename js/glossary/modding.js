function renderModdingSection() {
  const el = document.getElementById('modding-gloss');
  if (!el) return;
  const loc = state.locale === 'pt-BR' ? 'pt-BR' : 'en';
  const L = o => (o && (o[loc] || o.en)) || '';
  const esc = relicEsc;

  const cap = MOD_CAP.map(c =>
    `<div class="mr-earn-card"><span class="nw-stat">${esc(c.k)}</span>`
    + `<span class="mr-earn-t">${esc(L(c.t))}</span>`
    + `<span class="mr-earn-d">${esc(L(c.d))}</span></div>`).join('');

  const term = arr => arr.map(p =>
    `<div class="sc-term"><dt>${esc(L(p.t))}</dt><dd>${esc(L(p.d))}</dd></div>`).join('');
  const tips = MOD_TIPS.map(t => `<li>${esc(L(t))}</li>`).join('');

  const legend = MOD_UI_LEGEND.map(x =>
    `<li class="mod-legend-item"><span class="mod-legend-dot" style="background:${x.c}"></span>`
    + `<span><b>${esc(L(x.t))}</b> — ${esc(L(x.d))}</span></li>`).join('');

  const polDemo = MOD_POL_DEMO.map(x =>
    `<figure class="mod-pol-fig"><img src="assets/glossary/${x.img}" alt="" loading="lazy">`
    + `<figcaption class="${x.cls}">${esc(L(x.cap))}</figcaption></figure>`).join('');

  const T = {
    screen:{ en: 'The modding screen', 'pt-BR': 'A tela de mods' },
    cap:   { en: 'Capacity', 'pt-BR': 'Capacidade' },
    pol:   { en: 'Polarities', 'pt-BR': 'Polaridades' },
    polSub:{ en: 'The same mod (Transient Fortitude, base 16) in three different slots:', 'pt-BR': 'O mesmo mod (Transient Fortitude, base 16) em três slots diferentes:' },
    types: { en: 'Mod types', 'pt-BR': 'Tipos de mod' },
    tips:  { en: 'Good to know', 'pt-BR': 'Bom saber' },
  };
  const figCap = L({ en: 'In-game modding screen (annotated).', 'pt-BR': 'Tela de mods do jogo (anotada).' });

  el.innerHTML =
    `<h4 class="sc-h">${esc(L(T.screen))}</h4>`
    + `<figure class="mod-ui-fig"><img src="assets/glossary/mods-ui.png" alt="" loading="lazy">`
    + `<figcaption>${esc(figCap)}</figcaption></figure>`
    + `<ul class="mod-legend">${legend}</ul>`
    + `<h4 class="sc-h">${esc(L(T.pol))}</h4>`
    + `<p class="sc-sub">${esc(L(T.polSub))}</p>`
    + `<div class="mod-pol-demo">${polDemo}</div>`
    + `<h4 class="sc-h">${esc(L(T.cap))}</h4>`
    + `<div class="mr-earn nw-acts">${cap}</div>`
    + `<h4 class="sc-h">${esc(L(T.types))}</h4>`
    + `<dl class="sc-terms">${term(MOD_TYPES)}</dl>`
    + `<h4 class="sc-h">${esc(L(T.tips))}</h4>`
    + `<ul class="sc-tips">${tips}</ul>`;
}

// ── Forma & Orokin Catalyst/Reactor glossary section ─────────────────────────

const FORMA_ITEMS = [
  { k: '×2', img: 'OrokinReactor.png?903d2', t: { en: 'Orokin Reactor', 'pt-BR': 'Reator Orokin' },
    d: { en: 'Doubles the mod capacity of <b>Warframes</b>, companions, Archwings and Necramechs. The “golden potato”.', 'pt-BR': 'Dobra a capacidade de mods de <b>Warframes</b>, companheiros, Archwings e Necramechs. A “batata dourada”.' } },
  { k: '×2', img: 'OrokinCatalyst.png?1d542', t: { en: 'Orokin Catalyst', 'pt-BR': 'Catalisador Orokin' },
    d: { en: 'Doubles the mod capacity of any <b>weapon</b>. The “blue potato”.', 'pt-BR': 'Dobra a capacidade de mods de qualquer <b>arma</b>. A “batata azul”.' } },
  { k: '+slot', img: 'ExilusWarframeAdapter.png?bfcaf', t: { en: 'Exilus Adapter', 'pt-BR': 'Exilus Adapter' },
    d: { en: 'Unlocks the Exilus (utility) slot — Exilus Adapter for Warframes, Exilus Weapon Adapter for weapons.', 'pt-BR': 'Libera o slot Exilus (utilidade) — Exilus Adapter pra Warframes, Exilus Weapon Adapter pra armas.' } },
];

const FORMA_HOW = [
  { t: { en: 'What it does', 'pt-BR': 'O que faz' },
    d: { en: 'Polarizes one mod slot — adds or changes its polarity so matching mods cost half. It works only on max-rank gear and resets that item to rank 0, so you re-level it afterwards.', 'pt-BR': 'Polariza um slot — adiciona ou muda a polaridade pra que mods que combinam custem metade. Só funciona em equipamento no rank máximo e zera o item pro rank 0, então você upa de novo depois.' } },
  { t: { en: 'Getting it', 'pt-BR': 'Como conseguir' },
    d: { en: 'Build it from a blueprint (relics, Nightwave, daily tribute, Acrithis) in ~23h, or buy it for 20 Platinum.', 'pt-BR': 'Construa a partir de um diagrama (relíquias, Nightwave, recompensa diária, Acrithis) em ~23h, ou compre por 20 de Platina.' } },
];

const FORMA_TYPES = [
  { img: 'Forma.png?c7d01', t: { en: 'Forma', 'pt-BR': 'Forma' },
    d: { en: 'Standard — applies any one polarity (V, D, –, etc.) to a slot.', 'pt-BR': 'Padrão — aplica uma polaridade qualquer (V, D, –, etc.) num slot.' } },
  { img: 'UmbraForma.png?dcf23', t: { en: 'Umbra Forma', 'pt-BR': 'Forma Umbra' },
    d: { en: 'Applies the Umbra polarity, needed for Umbral mods. Rare — save it for Umbral builds.', 'pt-BR': 'Aplica a polaridade Umbra, necessária pros mods Umbral. Rara — guarde pros builds Umbral.' } },
  { img: 'AuraForma.png?ab6ef', t: { en: 'Omni Forma', 'pt-BR': 'Forma Omni' },
    d: { en: 'A universal polarity that halves any mod in the slot — except Umbral mods (placed at full cost; use an Umbra Forma for those) and the Stance slot.', 'pt-BR': 'Polaridade universal que corta pela metade qualquer mod naquele slot — exceto mods Umbral (entram com custo cheio; pra eles, a Forma Umbra) e o slot de Stance.' } },
  { img: 'StanceForma.png?97a5b', t: { en: 'Stance Forma', 'pt-BR': 'Forma de Stance' },
    d: { en: 'Universally polarizes a melee Stance slot, so any Stance mod fits at the matching (halved) cost. From the Steel Path Honors shop.', 'pt-BR': 'Polariza o slot de Stance (melee) como universal, então qualquer mod de Stance entra com o custo de polaridade combinada (metade). Vem da loja Honras do Percurso de Aço.' } },
];

// tipos de polaridade (ícones do wiki em preto → invertidos pra branco no CSS;
// "Any" já tem versão branca). A polaridade não restringe mods — só muda o custo.
const POL_TYPES = [
  { img: 'Madurai_Pol%28xBlack%29.svg?5760d', t: { en: 'Madurai (V)', 'pt-BR': 'Madurai (V)' },
    d: { en: 'Loosely tied to damage & power mods.', 'pt-BR': 'Ligada a mods de dano e força.' } },
  { img: 'Vazarin_Pol%28xBlack%29.svg?f3e14', t: { en: 'Vazarin (D)', 'pt-BR': 'Vazarin (D)' },
    d: { en: 'Defensive mods (health, armor, shields).', 'pt-BR': 'Mods defensivos (vida, armadura, escudos).' } },
  { img: 'Naramon_Pol%28xBlack%29.svg?ffa12', t: { en: 'Naramon (—)', 'pt-BR': 'Naramon (—)' },
    d: { en: 'Utility & miscellaneous mods.', 'pt-BR': 'Mods de utilidade e diversos.' } },
  { img: 'Zenurik_Pol%28xBlack%29.svg?8b7f2', t: { en: 'Zenurik', 'pt-BR': 'Zenurik' },
    d: { en: 'Warframe augments and some melee stances.', 'pt-BR': 'Augments de Warframe e algumas posturas de melee.' } },
  { img: 'Unairu_Pol%28xBlack%29.svg?b9372', t: { en: 'Unairu', 'pt-BR': 'Unairu' },
    d: { en: 'Certain melee stance mods.', 'pt-BR': 'Certas posturas de melee.' } },
  { img: 'Penjaga_Pol%28xBlack%29.svg?39944', t: { en: 'Penjaga', 'pt-BR': 'Penjaga' },
    d: { en: 'Companion ability mods.', 'pt-BR': 'Mods de habilidade de companheiro.' } },
  { img: 'Umbra_Pol%28xBlack%29.svg?008d1', t: { en: 'Umbra', 'pt-BR': 'Umbra' },
    d: { en: 'Umbral mods — applied only with an Umbra Forma.', 'pt-BR': 'Mods Umbral — aplicada só com uma Forma Umbra.' } },
  { img: 'Any_Pol%28xWhite%29.png?2c348', light: true, t: { en: 'Universal (Any)', 'pt-BR': 'Universal (Any)' },
    d: { en: 'From Omni Forma — fits any mod (except Umbra) at half cost.', 'pt-BR': 'Da Forma Omni — serve pra qualquer mod (menos Umbra) por metade do custo.' } },
];

const FORMA_TIPS = [
  { en: 'A Reactor/Catalyst is usually the first thing to put on gear you’re committing to — doubling capacity is the biggest single jump.', 'pt-BR': 'Um Reator/Catalisador costuma ser a primeira coisa a colocar num equipamento que você vai manter — dobrar a capacidade é o maior salto isolado.' },
  { en: 'Don’t Forma until your build is settled — each Forma resets the item to rank 0.', 'pt-BR': 'Não dê Forma até o build estar definido — cada Forma zera o item pro rank 0.' },
  { en: 'Keep a Forma cooking in the foundry — it takes ~23h, so start one before you log off.', 'pt-BR': 'Deixe sempre uma Forma na fundição — leva ~23h, então comece uma antes de sair.' },
];

