// Glossário — Orokin Ducats. Moeda do Baro Ki'Teer; vem de vender peças Prime.
// Dados da wiki (wiki.warframe.com/w/Ducats + Baro_Ki'Teer).
const DUCATS_VALUES = [
  { r: { en: 'Common (bronze)', 'pt-BR': 'Comum (bronze)' }, v: '15', c: '#b08d57' },
  { r: { en: 'Uncommon (silver)', 'pt-BR': 'Incomum (prata)' }, v: '45', c: '#c0c0c0' },
  { r: { en: 'Rare (gold)', 'pt-BR': 'Rara (ouro)' }, v: '100', c: '#e6c200' },
];

function renderDucatsSection() {
  const el = document.getElementById('ducats-gloss');
  if (!el) return;
  const loc = state.locale === 'pt-BR' ? 'pt-BR' : 'en';
  const L = o => (o && (o[loc] || o.en)) || '';
  const esc = relicEsc;
  const W = 'https://wiki.warframe.com/images/';
  const ducIco = `<img class="gloss-ico" src="${W}OrokinDucats.png?23930" alt="" onerror="this.style.display='none'">`;

  const T = {
    what: { en: 'What they are', 'pt-BR': 'O que são' },
    intro: { en: 'Orokin Ducats are a currency used almost only to buy from Baro Ki’Teer, the Void Trader. You earn them by exchanging Prime gear you don’t need.', 'pt-BR': 'Ducados Orokin são uma moeda usada quase só pra comprar do Baro Ki’Teer, o Mercador do Void. Você os ganha trocando equipamento Prime que não precisa.' },
    get: { en: 'How to get them', 'pt-BR': 'Como conseguir' },
    getText: { en: 'Sell Prime parts and blueprints at a Ducat Kiosk — found in the Concourse of any Relay (open any time, no need for Baro). A part’s value depends on its rarity in the relic that drops it:', 'pt-BR': 'Venda peças e diagramas Prime num Quiosque de Ducados — fica no Concourse de qualquer Relay (aberto sempre, sem precisar do Baro). O valor de uma peça depende da raridade dela na relíquia que a dropa:' },
    val: { en: 'Rarity', 'pt-BR': 'Raridade' },
    duc: { en: 'Ducats', 'pt-BR': 'Ducados' },
    reprint: { en: 'A few reissued parts whose rarity was lowered are worth 25 or 65 instead — edge cases, not the norm.', 'pt-BR': 'Algumas peças reeditadas com raridade reduzida valem 25 ou 65 — exceções, não a regra.' },
    baro: { en: 'Baro Ki’Teer (the Void Trader)', 'pt-BR': 'Baro Ki’Teer (o Mercador do Void)' },
    baroText: { en: 'A merchant obsessed with rare Orokin goods. He visits a random Relay every 2 weeks (14 days) and stays for 48 hours, selling rotating stock — Primed Mods, Vandal/Wraith/Prisma weapons, cosmetics, arcanes and special blueprints — for Ducats + Credits. His stock changes every visit and is unpredictable.', 'pt-BR': 'Um mercador obcecado por raridades Orokin. Ele visita um Relay aleatório a cada 2 semanas (14 dias) e fica 48 horas, vendendo um estoque rotativo — Mods Primed, armas Vandal/Wraith/Prisma, cosméticos, arcanos e diagramas especiais — por Ducados + Créditos. O estoque muda a cada visita e é imprevisível.' },
    tips: { en: 'New-player tips', 'pt-BR': 'Dicas pra quem começa' },
    tip1: { en: 'Once you’ve built a Prime item, sell its duplicate parts at the kiosk — or <span class="gloss-link" onclick="goToGlossarySection(\'platinum-trading\')">trade them for platinum</span> (the premium currency).', 'pt-BR': 'Depois de construir um item Prime, venda as peças duplicadas no quiosque — ou <span class="gloss-link" onclick="goToGlossarySection(\'platinum-trading\')">troque por platina</span> (a moeda premium).' },
    tip2: { en: 'Build a Ducat + Credit stockpile before Baro arrives — he only stays 2 days.', 'pt-BR': 'Junte Ducados + Créditos antes do Baro chegar — ele só fica 2 dias.' },
    tip3: { en: 'Type “when baro” in Region/Relay chat to see where and when he shows up next.', 'pt-BR': 'Digite “when baro” no chat de Região/Relay pra ver onde e quando ele aparece.' },
  };

  const valChips = DUCATS_VALUES.map(d =>
    `<div class="gloss-chip"><span class="gloss-dot" style="background:${d.c}"></span><span class="gloss-chip-name">${esc(L(d.r))}</span><span class="gloss-chip-sub">${ducIco}${esc(d.v)}</span></div>`).join('');
  const tips = [T.tip1, T.tip2, T.tip3].map(t => `<li>${L(t)}</li>`).join('');

  el.innerHTML =
    `<h4 class="sc-h">${esc(L(T.what))}</h4>`
    + `<div class="gloss-callout"><span class="gloss-callout-ico" aria-hidden="true">${ducIco}</span><span class="gloss-callout-text">${esc(L(T.intro))}</span></div>`
    + `<h4 class="sc-h">${esc(L(T.get))}</h4>`
    + `<p class="sc-sub">${esc(L(T.getText))}</p>`
    + `<div class="gloss-chips">${valChips}</div>`
    + `<p class="sc-sub">${esc(L(T.reprint))}</p>`
    + `<h4 class="sc-h">${esc(L(T.baro))}</h4>`
    + `<div class="gloss-callout"><span class="gloss-callout-ico" aria-hidden="true">🛒</span><span class="gloss-callout-text">${esc(L(T.baroText))}</span></div>`
    + `<h4 class="sc-h">${esc(L(T.tips))}</h4>`
    + `<ul class="sc-tips">${tips}</ul>`;
}
