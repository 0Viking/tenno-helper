function renderSteelPathSection() {
  const el = document.getElementById('sp-gloss');
  if (!el) return;
  const loc = state.locale === 'pt-BR' ? 'pt-BR' : 'en';
  const L = o => (o && (o[loc] || o.en)) || '';
  const esc = relicEsc;

  const mods = SP_MODS.map(m =>
    `<div class="mr-earn-card"><span class="nw-stat">${esc(m.v)}</span>`
    + `<span class="mr-earn-t">${esc(L(m.t))}</span>`
    + `<span class="mr-earn-d">${esc(L(m.d))}</span></div>`
  ).join('');

  const details = SP_DETAILS.map(p =>
    `<div class="sc-term"><dt>${esc(L(p.t))}</dt><dd>${esc(L(p.d))}</dd></div>`
  ).join('');

  const tips = SP_TIPS.map(t => `<li>${esc(L(t))}</li>`).join('');

  const T = {
    diff:  { en: 'How much harder', 'pt-BR': 'Quão mais difícil' },
    diffS: { en: 'Armor is NOT increased (changed in Update 36) — the challenge comes from levels + HP/shields.', 'pt-BR': 'A armadura NÃO aumenta (mudou no Update 36) — o desafio vem de nível + HP/escudos.' },
    bonus: { en: 'Bonus: +100% resource drop chance and +100% mod drop chance (not on Railjack missions).', 'pt-BR': 'Bônus: +100% de chance de drop de recursos e +100% de chance de drop de mods (não conta para missões de Railjack).' },
    aco:   { en: 'Acolytes', 'pt-BR': 'Acólitos' },
    acoD:  { en: 'Minibosses that hunt you down every few minutes. Each guarantees 2 Steel Essence + a random Steel Path Arcane. If one downs you, it escapes and you get nothing.', 'pt-BR': 'Mini-bosses que te caçam a cada poucos minutos. Cada um garante 2 Essência de Aço + um Arcano do Percurso de Aço. Se um te derruba, ele foge e você não ganha nada.' },
    ess:   { en: 'Steel Essence & shop', 'pt-BR': 'Essência de Aço & loja' },
    tips:  { en: 'Good to know', 'pt-BR': 'Bom saber' },
  };

  el.innerHTML =
    `<h4 class="sc-h">${esc(L(T.diff))}</h4>`
    + `<div class="mr-earn nw-acts">${mods}</div>`
    + `<p class="sc-sub">${esc(L(T.diffS))}</p>`
    + `<p class="sp-bonus">${esc(L(T.bonus))}</p>`
    + `<h4 class="sc-h">${esc(L(T.aco))}</h4>`
    + `<div class="sc-jstep sc-jstep-full"><span class="sc-jstep-d">${esc(L(T.acoD))}</span></div>`
    + `<h4 class="sc-h">${esc(L(T.ess))}</h4>`
    + `<dl class="sc-terms">${details}</dl>`
    + `<h4 class="sc-h">${esc(L(T.tips))}</h4>`
    + `<ul class="sc-tips">${tips}</ul>`;
}

// ── The Circuit glossary section ─────────────────────────────────────────────

const CIRCUIT_VERSIONS = [
  { t: { en: 'Normal', 'pt-BR': 'Normal' },
    d: { en: 'Pick 1 of 3 Warframes offered each week — you earn their blueprints across the tiers.',
         'pt-BR': 'Escolha 1 de 3 Warframes oferecidos por semana — você ganha os diagramas deles ao longo dos tiers.' } },
  { t: { en: 'Steel Path', 'pt-BR': 'Percurso de Aço' },
    d: { en: 'Pick 2 of 5 Incarnon Genesis adapters each week (Tier 5 & 10). Enemies start around level 130.',
         'pt-BR': 'Escolha 2 de 5 adaptadores de Incarnon Genesis por semana (Tier 5 e 10). Inimigos começam por volta do nível 130.' } },
];

const CIRCUIT_HOW = [
  { t: { en: 'Mission types', 'pt-BR': 'Tipos de missão' },
    d: { en: 'Stages rotate through Survival, Exterminate, Defense, Excavation, Alchemy, Void Flood — and a Corrupted Jackal boss from stage 5 on.', 'pt-BR': 'Os estágios alternam entre Sobrevivência, Extermínio, Defesa, Escavação, Alquimia, Inundação do Void — e um boss Corrupted Jackal a partir do estágio 5.' } },
  { t: { en: 'Random loadout', 'pt-BR': 'Loadout aleatório' },
    d: { en: 'You start with a random set of Warframes & weapons (Duviri rules) — your own gear and companions are disabled.', 'pt-BR': 'Você começa com um conjunto aleatório de Warframes e armas (regras de Duviri) — seu equipamento e companions ficam desativados.' } },
  { t: { en: 'Decrees', 'pt-BR': 'Decretos' },
    d: { en: 'Collect 3 Decree Fragments per stage to earn a Decree — a strong buff that lasts the run.', 'pt-BR': 'Junte 3 Fragmentos de Decreto por estágio pra ganhar um Decreto — um buff forte que dura a partida.' } },
  { t: { en: 'Progress & reset', 'pt-BR': 'Progresso & reset' },
    d: { en: 'Clear stages to fill Circuit Progress toward tiers; rewards are claimable once a week, resetting Monday 00:00 UTC.', 'pt-BR': 'Complete estágios pra encher o Progresso do Circuito rumo aos tiers; recompensas resgatáveis uma vez por semana, reiniciando domingo às 21h (horário de Brasília).' } },
  { t: { en: 'Steel Path extras', 'pt-BR': 'Extras do Percurso de Aço' },
    d: { en: 'At Drifter Opportunity Intrinsic 9 you can also pick Riven Mods or 20,000 Kuva as rewards.', 'pt-BR': 'Com Intrínseco Opportunity 9 do Drifter você também pode escolher Rivens ou 20.000 Kuva como recompensa.' } },
];

const CIRCUIT_TIPS = [
  { en: 'The Circuit is the main way to farm Warframes and Incarnons — check each week’s rotation.', 'pt-BR': 'O Circuito é a principal forma de farmar Warframes e Incarnons — confira a rotação de cada semana.' },
  { en: 'Bring nothing — the loadout is random. Lean into Decrees to power up your run.', 'pt-BR': 'Não precisa levar nada — o loadout é aleatório. Aposte nos Decretos pra fortalecer a partida.' },
];

