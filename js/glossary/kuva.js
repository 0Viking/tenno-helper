// Glossário — Kuva. Recurso pra rerollar Rivens (+ fusão de armas de Lich). Dados da wiki.
const KUVA_SOURCES = [
  { ic: 'KuvaSiphon.png?aae56', t: { en: 'Kuva Siphon', 'pt-BR': 'Kuva Siphon' }, d: { en: 'lvl 25–35, ~550–700 Kuva. Appears on the planets nearest the roaming Kuva Fortress.', 'pt-BR': 'nível 25–35, ~550–700 de Kuva. Aparece nos planetas mais próximos da Fortaleza Kuva que circula pelo sistema.' } },
  { ic: 'KuvaSiphon.png?aae56', t: { en: 'Kuva Flood', 'pt-BR': 'Kuva Flood' }, d: { en: 'lvl 80–100, roughly double the Kuva — same effort, harder fight.', 'pt-BR': 'nível 80–100, cerca do dobro de Kuva — mesmo esforço, luta mais difícil.' } },
  { ic: 'KuvaSiphon.png?aae56', t: { en: 'Kuva Survival', 'pt-BR': 'Sobrevivência Kuva' }, d: { en: 'on the Kuva Fortress — convert Life Support into a Kuva Harvester and defend it.', 'pt-BR': 'na Fortaleza Kuva — converta o Suporte de Vida num Coletor de Kuva e defenda.' } },
  { ic: 'Kuva.png?0db18', t: { en: 'Sorties & Archon Hunts', 'pt-BR': 'Sorties & Caçada aos Archons' }, d: { en: 'big one-off rewards (Sortie ~6,000 · Archon ~12,000).', 'pt-BR': 'recompensas grandes de uma vez (Sortie ~6.000 · Archon ~12.000).' } },
];

function renderKuvaSection() {
  const el = document.getElementById('kuva-gloss');
  if (!el) return;
  const loc = state.locale === 'pt-BR' ? 'pt-BR' : 'en';
  const L = o => (o && (o[loc] || o.en)) || '';
  const esc = relicEsc;
  const W = 'https://wiki.warframe.com/images/';
  const kuvaIco = `<img class="gloss-ico" src="${W}Kuva.png?0db18" alt="" onerror="this.style.display='none'">`;
  const rivenIco = `<img class="gloss-ico" src="${W}RifleRivenMod.png?c488c" alt="" onerror="this.style.display='none'">`;

  const T = {
    what: { en: 'What it is', 'pt-BR': 'O que é' },
    intro: { en: 'Kuva is a rare red Void fluid the Grineer Queens crave. Its main use is re-rolling Riven Mods; it also fuses Kuva/Tenet Lich weapons and crafts a few items. It’s untradeable, and you unlock it after The War Within (Siphons need MR 5).', 'pt-BR': 'Kuva é um fluido Void vermelho e raro que as Rainhas Grineer cobiçam. Seu uso principal é rerollar Mods Riven; também funde armas de Lich (Kuva/Tenet) e crafta alguns itens. É introcável, e você desbloqueia depois de The War Within (Siphons pedem MR 5).' },
    reroll: { en: 'Re-rolling Rivens', 'pt-BR': 'Rerollar Rivens' },
    rerollText: { en: 'Each re-roll of the same Riven costs more: it starts at 900 Kuva and climbs +100 per roll, capping at 3,500 (from the 10th roll on). If a Riven keeps rolling badly, an unrolled one starts cheap again at 900.', 'pt-BR': 'Cada reroll do mesmo Riven custa mais: começa em 900 de Kuva e sobe +100 por roll, travando em 3.500 (a partir do 10º roll). Se um Riven só sai ruim, um sem rolls começa barato de novo, em 900.' },
    siphon: { en: 'The Siphon mechanic', 'pt-BR': 'A mecânica do Siphon' },
    siphonText: { en: 'A Siphon pulls in a red Kuva cloud with 4 Braids. Switch to your Operator and Void Dash/shoot the active Braid to destroy it; repeat for all 4. If the Siphon swallows 8 clouds first, it flees with a reduced reward — so bring your Operator/Amp.', 'pt-BR': 'O Siphon atrai uma nuvem vermelha de Kuva com 4 Tranças. Troque pro Operador e dê Void Dash/atire na Trança ativa pra destruí-la; repita nas 4. Se o Siphon engolir 8 nuvens antes, ele foge com recompensa reduzida — então leve seu Operador/Amp.' },
    get: { en: 'Where to farm it', 'pt-BR': 'Onde farmar' },
    booster: { en: 'A Resource Booster doubles Siphon/Flood Kuva — run one before a farming session.', 'pt-BR': 'Um Resource Booster dobra o Kuva de Siphon/Flood — use um antes de farmar.' },
    cta: { en: 'See how Rivens work and grade yours →', 'pt-BR': 'Veja como Rivens funcionam e avalie o seu →' },
  };

  const sources = KUVA_SOURCES.map(s =>
    `<div class="gloss-rew"><img class="gloss-rew-ico" src="${W}${s.ic}" alt="" loading="lazy" onerror="this.style.display='none'">`
    + `<span class="gloss-rew-name"><b>${esc(L(s.t))}</b> — ${esc(L(s.d))}</span></div>`).join('');

  el.innerHTML =
    `<h4 class="sc-h">${esc(L(T.what))}</h4>`
    + `<div class="gloss-callout"><span class="gloss-callout-ico" aria-hidden="true">${kuvaIco}</span><span class="gloss-callout-text">${esc(L(T.intro))}</span></div>`
    + `<h4 class="sc-h">${esc(L(T.reroll))}</h4>`
    + `<div class="gloss-callout"><span class="gloss-callout-ico" aria-hidden="true">${rivenIco}</span><span class="gloss-callout-text">${esc(L(T.rerollText))}</span></div>`
    + `<h4 class="sc-h">${esc(L(T.get))}</h4>`
    + `<ul class="gloss-rew-list">${sources}</ul>`
    + `<div class="gloss-callout"><span class="gloss-callout-ico" aria-hidden="true">⚡</span><span class="gloss-callout-text">${esc(L(T.booster))}</span></div>`
    + `<h4 class="sc-h">${esc(L(T.siphon))}</h4>`
    + `<div class="gloss-callout"><span class="gloss-callout-ico" aria-hidden="true">🌫️</span><span class="gloss-callout-text">${esc(L(T.siphonText))}</span></div>`
    + `<button type="button" class="sc-cta" onclick="goToGlossarySection('rivens')">${esc(L(T.cta))}</button>`;
}
