// Glossário — Void Relics (conceito). O catálogo completo das 767 relíquias vive na
// aba "Relíquias"; aqui é só o como-funciona. Dados da wiki (wiki.warframe.com/w/Void_Relic).
const RELIC_GLOSS_ERAS = [
  { ic: 'LithRelicIntact.png?ee7d7', name: { en: 'Lith', 'pt-BR': 'Lith' }, lvl: { en: 'low', 'pt-BR': 'baixo' } },
  { ic: 'MesoRelicIntact.png?a9b4a', name: { en: 'Meso', 'pt-BR': 'Meso' }, lvl: { en: 'low-mid', 'pt-BR': 'baixo-médio' } },
  { ic: 'NeoRelicIntact.png?6dc86', name: { en: 'Neo', 'pt-BR': 'Neo' }, lvl: { en: 'mid-high', 'pt-BR': 'médio-alto' } },
  { ic: 'AxiRelicIntact.png?6cadf', name: { en: 'Axi', 'pt-BR': 'Axi' }, lvl: { en: 'high', 'pt-BR': 'alto' } },
  { ic: 'RequiemRelicIntact.png?03821', name: { en: 'Requiem', 'pt-BR': 'Requiem' }, lvl: { en: 'Requiem Mods', 'pt-BR': 'Mods Requiem' } },
];

// Refinamento: custo em Void Traces + chance do drop RARO (a "dourada") por tier.
const RELIC_GLOSS_REFINE = [
  { t: { en: 'Intact', 'pt-BR': 'Intacta' }, cost: '0', rare: '2%' },
  { t: { en: 'Exceptional', 'pt-BR': 'Excepcional' }, cost: '25', rare: '4%' },
  { t: { en: 'Flawless', 'pt-BR': 'Impecável' }, cost: '50', rare: '6%' },
  { t: { en: 'Radiant', 'pt-BR': 'Radiante' }, cost: '100', rare: '10%' },
];

function renderRelicsSection() {
  const el = document.getElementById('relics-gloss');
  if (!el) return;
  const loc = state.locale === 'pt-BR' ? 'pt-BR' : 'en';
  const L = o => (o && (o[loc] || o.en)) || '';
  const esc = relicEsc;
  const W = 'https://wiki.warframe.com/images/';
  const traceIco = `<img class="gloss-ico" src="${W}VoidTraces.png?fbc05" alt="" onerror="this.style.display='none'">`;
  const reactIco = `<img class="gloss-ico" src="${W}Reactant.png?ef7f3" alt="" onerror="this.style.display='none'">`;

  const T = {
    what: { en: 'What they are', 'pt-BR': 'O que são' },
    intro: { en: 'Sealed Orokin containers, each holding one of 6 rewards — a Prime part or a Forma blueprint. The main way to farm Prime gear.', 'pt-BR': 'Contêineres Orokin lacrados, cada um com 1 de 6 recompensas — uma peça Prime ou um diagrama de Forma. A principal forma de farmar equipamento Prime.' },
    eras: { en: 'The eras', 'pt-BR': 'As eras' },
    erasNote: { en: 'The era tells you which Void Fissure to run. Requiem is special — it drops Requiem Mods for Liches.', 'pt-BR': 'A era diz qual Fissura Void rodar. Requiem é especial — dropa Mods Requiem pra Liches.' },
    open: { en: 'How to open one', 'pt-BR': 'Como abrir' },
    openText: { en: 'Equip a relic, run a matching Void Fissure, and collect 10 Reactant. At the end you pick one of the revealed rewards.', 'pt-BR': 'Equipe uma relíquia, rode uma Fissura Void da era e colete 10 de Reactant. No fim, você escolhe uma das recompensas reveladas.' },
    squad: { en: 'In a squad', 'pt-BR': 'Em squad' },
    squadText: { en: 'a full squad opens 4 relics, so 4 rewards show up and each of you picks one — 4× the chances.', 'pt-BR': 'um squad cheio abre 4 relíquias, então 4 recompensas aparecem e cada um pega uma — 4× as chances.' },
    refine: { en: 'Refinement', 'pt-BR': 'Refinamento' },
    refineText: { en: 'Spend Void Traces to refine a relic — it raises the odds of the rare reward:', 'pt-BR': 'Gaste Void Traces pra refinar uma relíquia — aumenta a chance da recompensa rara:' },
    refTier: { en: 'Tier', 'pt-BR': 'Tier' },
    refRare: { en: 'Rare drop', 'pt-BR': 'Drop raro' },
    vault: { en: 'Vaulted vs unvaulted', 'pt-BR': 'No Vault vs disponível' },
    vaultText: { en: 'Vaulted relics leave the drop tables — you can’t farm new ones (but can still open/trade yours). They return via Prime Resurgence (bought with Aya).', 'pt-BR': 'Relíquias no Vault saem das tabelas de drop — você não farma novas (mas ainda abre/troca as suas). Voltam pelo Prime Resurgence (comprado com Aya).' },
    cta: { en: 'Browse every relic, its drops and where it falls →', 'pt-BR': 'Veja cada relíquia, seus drops e onde ela cai →' },
  };

  const eras = RELIC_GLOSS_ERAS.map(e =>
    `<div class="gloss-chip"><img class="gloss-chip-ic" src="${W}${e.ic}" alt="" loading="lazy" onerror="this.style.visibility='hidden'">`
    + `<span class="gloss-chip-name">${esc(L(e.name))}</span><span class="gloss-chip-sub">${esc(L(e.lvl))}</span></div>`).join('');

  const refRows = RELIC_GLOSS_REFINE.map(r =>
    `<tr><td>${esc(L(r.t))}</td><td>${r.cost === '0' ? '—' : traceIco + esc(r.cost)}</td><td class="is-hl">${esc(r.rare)}</td></tr>`).join('');

  el.innerHTML =
    `<h4 class="sc-h">${esc(L(T.what))}</h4>`
    + `<div class="gloss-callout"><span class="gloss-callout-ico" aria-hidden="true">🗝️</span><span class="gloss-callout-text">${esc(L(T.intro))}</span></div>`
    + `<h4 class="sc-h">${esc(L(T.eras))}</h4>`
    + `<div class="gloss-chips">${eras}</div><p class="sc-sub">${esc(L(T.erasNote))}</p>`
    + `<h4 class="sc-h">${esc(L(T.open))}</h4>`
    + `<div class="gloss-callout"><span class="gloss-callout-ico" aria-hidden="true">${reactIco}</span><span class="gloss-callout-text">${esc(L(T.openText))} <b>${esc(L(T.squad))}:</b> ${esc(L(T.squadText))}</span></div>`
    + `<h4 class="sc-h">${esc(L(T.refine))}</h4>`
    + `<p class="sc-sub">${traceIco}${esc(L(T.refineText))}</p>`
    + `<div class="gloss-tbl-wrap"><table class="gloss-tbl"><thead><tr><th>${esc(L(T.refTier))}</th><th>${traceIco}Void Traces</th><th class="is-hl">${esc(L(T.refRare))}</th></tr></thead><tbody>${refRows}</tbody></table></div>`
    + `<h4 class="sc-h">${esc(L(T.vault))}</h4>`
    + `<div class="gloss-callout"><span class="gloss-callout-ico" aria-hidden="true">🔒</span><span class="gloss-callout-text">${esc(L(T.vaultText))}</span></div>`
    + `<button type="button" class="sc-cta" onclick="selectTab('relics')">${esc(L(T.cta))}</button>`;
}
