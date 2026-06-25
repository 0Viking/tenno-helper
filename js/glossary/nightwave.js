function renderNightwaveSection() {
  const el = document.getElementById('nw-gloss');
  if (!el) return;
  const loc = state.locale === 'pt-BR' ? 'pt-BR' : 'en';
  const L = o => (o && (o[loc] || o.en)) || '';
  const esc = relicEsc;

  const unit = L({ en: 'Standing', 'pt-BR': 'Reputação' });
  const acts = NW_ACTS.map(a =>
    `<div class="mr-earn-card"><span class="nw-stat">${esc(a.v)}<span class="nw-unit"> ${esc(unit)}</span></span>`
    + `<span class="mr-earn-t">${esc(L(a.t))}</span>`
    + `<span class="mr-earn-d">${esc(L(a.d))}</span></div>`
  ).join('');

  const details = NW_DETAILS.map(p =>
    `<div class="sc-term"><dt>${esc(L(p.t))}</dt><dd>${esc(L(p.d))}</dd></div>`
  ).join('');

  const tips = NW_TIPS.map(t => `<li>${esc(L(t))}</li>`).join('');

  const T = {
    acts:  { en: 'Acts — earn Standing', 'pt-BR': 'Atos — ganhe Reputação' },
    actsS: { en: 'Weekly and Elite acts refresh every week.', 'pt-BR': 'Atos Semanais e Elite renovam toda semana (sábado, 21h horário de Brasília).' },
    callout: { en: 'No need to stress about missing Weekly or Elite acts — as long as you keep completing your active acts, the missed ones keep coming back as “Recovered” acts, until you’ve done them all.', 'pt-BR': 'Não precisa se preocupar em perder Atos Semanais ou Elite — enquanto você for completando os atos ativos, os que faltam continuam voltando como atos “Recovered”, até você fazer todos.' },
    track: { en: 'The reward track', 'pt-BR': 'A trilha de recompensas' },
    tips:  { en: 'Good to know', 'pt-BR': 'Bom saber' },
  };

  el.innerHTML =
    `<h4 class="sc-h">${esc(L(T.acts))}</h4>`
    + `<div class="mr-earn nw-acts">${acts}</div>`
    + `<p class="sc-sub">${esc(L(T.actsS))}</p>`
    + `<div class="gloss-callout"><span class="gloss-callout-ico" aria-hidden="true">♻️</span><span class="gloss-callout-text">${esc(L(T.callout))}</span></div>`
    + `<h4 class="sc-h">${esc(L(T.track))}</h4>`
    + `<dl class="sc-terms">${details}</dl>`
    + `<h4 class="sc-h">${esc(L(T.tips))}</h4>`
    + `<ul class="sc-tips">${tips}</ul>`;
}

// ── Sortie glossary section ──────────────────────────────────────────────────

const SORTIE_MISSIONS = [
  { v: '50–60',  t: { en: 'Mission 1', 'pt-BR': 'Missão 1' }, d: { en: 'Eases you in.',              'pt-BR': 'Pra aquecer.' } },
  { v: '65–80',  t: { en: 'Mission 2', 'pt-BR': 'Missão 2' }, d: { en: 'Tougher, same faction.',     'pt-BR': 'Mais difícil, mesma facção.' } },
  { v: '80–100', t: { en: 'Mission 3', 'pt-BR': 'Missão 3' }, d: { en: 'Often ends on the boss.',     'pt-BR': 'Costuma terminar no boss.' } },
];

const SORTIE_MODS = [
  { t: { en: 'Augmented Armor', 'pt-BR': 'Armadura Aumentada' },        d: { en: 'Enemies have +300% armor.', 'pt-BR': 'Inimigos com +300% de armadura.' } },
  { t: { en: 'Elemental Enhancement', 'pt-BR': 'Reforço Elemental' },   d: { en: '+100% of an element, +85% resistance to all elements.', 'pt-BR': '+100% de um elemento, +85% de resistência a todos.' } },
  { t: { en: 'Energy Reduction', 'pt-BR': 'Redução de Energia' },       d: { en: 'Max Warframe energy quartered, slow regen.', 'pt-BR': 'Energia máxima do Warframe cai pra 1/4, regen lenta.' } },
  { t: { en: 'Eximus Stronghold', 'pt-BR': 'Reduto Eximus' },           d: { en: 'Far more buffed Eximus enemies.', 'pt-BR': 'Muito mais inimigos Eximus buffados.' } },
  { t: { en: 'Environmental hazard', 'pt-BR': 'Risco ambiental' },      d: { en: 'Radiation, Cryo leak or Fire across the map.', 'pt-BR': 'Radiação, vazamento criogênico ou fogo pelo mapa.' } },
  { t: { en: 'Weapon restriction', 'pt-BR': 'Restrição de arma' },      d: { en: 'Only Sniper / Shotgun / Bow / Melee allowed.', 'pt-BR': 'Só Sniper / Shotgun / Arco / Melee permitidos.' } },
];

// Recompensa diária = 1 sorteio deste pool (estilo lista, igual Archon Hunt).
// Rivens (6 categorias) e Boosters (3) agrupados; drop chances + ícones da wiki.
const SORTIE_REWARDS = [
  { icon: 'AyatanAnasaSculpture.png?b0b14', name: { en: 'Ayatan Anasa Sculpture', 'pt-BR': 'Escultura Ayatan Anasa' }, pct: '28%' },
  { icon: 'RifleRivenMod.png?c488c', name: { en: 'Riven Mod (any category)', 'pt-BR': 'Riven Mod (qualquer categoria)' }, pct: '28%' },
  { icon: 'Endo.png?34c5c', name: { en: 'Endo ×4,000', 'pt-BR': 'Endo ×4.000' }, pct: '12%' },
  { icon: 'Kuva.png?0db18', name: { en: 'Kuva ×6,000', 'pt-BR': 'Kuva ×6.000' }, pct: '12%' },
  { icon: 'AffinityBooster%28xLight%29.png?1e12d', name: { en: '3-day Booster (Affinity / Mod / Resource)', 'pt-BR': 'Booster de 3 dias (Afinidade / Mod / Recurso)' }, pct: { en: '3.27% each', 'pt-BR': '3,27% cada' } },
  { icon: 'OrokinCatalyst.png?1d542', name: { en: 'Orokin Catalyst Blueprint', 'pt-BR': 'Diagrama de Catalisador Orokin' }, pct: { en: '2.5%', 'pt-BR': '2,5%' } },
  { icon: 'OrokinReactor.png?903d2', name: { en: 'Orokin Reactor Blueprint', 'pt-BR': 'Diagrama de Reator Orokin' }, pct: { en: '2.5%', 'pt-BR': '2,5%' } },
  { icon: 'ExilusWarframeAdapter.png?bfcaf', name: { en: 'Exilus Warframe Adapter', 'pt-BR': 'Adaptador Exilus de Warframe' }, pct: { en: '2.5%', 'pt-BR': '2,5%' } },
  { icon: 'Forma.png?c7d01', name: { en: 'Forma', 'pt-BR': 'Forma' }, pct: { en: '2.5%', 'pt-BR': '2,5%' } },
  { icon: 'LegendaryCore.png?30a55', name: { en: 'Legendary Core', 'pt-BR': 'Legendary Core' }, pct: { en: '0.19%', 'pt-BR': '0,19%' } },
];

const SORTIE_TIPS = [
  { en: 'One reward per day — finish all three missions, in order.', 'pt-BR': 'Uma recompensa por dia — complete as três missões, em ordem.' },
  { en: 'Match your loadout to the modifier (e.g. the weapon restriction) and bring a strong rank-30 frame.', 'pt-BR': 'Adapte o loadout ao modificador (ex.: a restrição de arma) e leve um Warframe forte no rank 30.' },
  { en: 'Riven mods drop veiled — unveil them with a challenge. Anasa Sculptures convert to a big chunk of Endo.', 'pt-BR': 'Rivens caem ocultos — revele com um desafio. Anasa Sculptures convertem num bom tanto de Endo.' },
];

