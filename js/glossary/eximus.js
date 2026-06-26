// Glossário — Eximus & Overguard (sistema pós-rework U31.5). Dados da wiki (Eximus + Overguard).
const EXIMUS_TYPES = [
  { ic: 'ArcticEximus.png?bc368', n: { en: 'Arctic', 'pt-BR': 'Ártico' }, e: { en: 'frost globe that slows you and blocks shots', 'pt-BR': 'globo de gelo que te lentifica e bloqueia tiros' } },
  { ic: 'EnergyLeechEximus.png?cdb53', n: { en: 'Energy Leech', 'pt-BR': 'Sanguessuga de Energia' }, e: { en: 'drains your Warframe energy', 'pt-BR': 'drena a energia do seu Warframe' } },
  { ic: 'LeechEximus.png?ff89d', n: { en: 'Leech', 'pt-BR': 'Sanguessuga' }, e: { en: 'saps your health and heals itself', 'pt-BR': 'suga sua vida e se cura' } },
  { ic: 'ArsonEximus.png?dc2c1', n: { en: 'Arson', 'pt-BR': 'Incendiário' }, e: { en: 'Heat blast + knockdown', 'pt-BR': 'explosão Ígnea + derrubada' } },
  { ic: 'VenomousEximus.png?01a1d', n: { en: 'Venomous', 'pt-BR': 'Venenoso' }, e: { en: 'Toxin aura around it', 'pt-BR': 'aura Tóxica ao redor' } },
  { ic: 'ShockEximus.png?4726e', n: { en: 'Shock', 'pt-BR': 'Choque' }, e: { en: 'homing Electricity orbs', 'pt-BR': 'orbes Elétricos teleguiados' } },
  { ic: 'VolatileEximus.png?b1410', n: { en: 'Volatile / Blitz', 'pt-BR': 'Volátil / Blitz' }, e: { en: 'Blast shockwave + knockdown', 'pt-BR': 'onda de choque Explosiva + derrubada' } },
  { ic: 'GuardianEximus.png?8f84e', n: { en: 'Guardian', 'pt-BR': 'Guardião' }, e: { en: 'shields nearby enemies with damage reduction', 'pt-BR': 'blinda inimigos próximos com redução de dano' } },
  { ic: 'JadeLightEximus.png?8b772', n: { en: 'Jade Light', 'pt-BR': 'Jade Light' }, e: { en: 'satellite lasers with escalating Heat damage', 'pt-BR': 'lasers orbitais com dano Ígneo crescente' } },
];

// Elementos citados nos efeitos/Overguard → ícone local + cor (STATUS_EFFECTS).
const EXIMUS_ELEMS = [
  { ic: 'heat.png', color: '#e3702f', en: ['Heat'], pt: ['Ígneo'] },
  { ic: 'toxin.png', color: '#2fe33a', en: ['Toxin'], pt: ['Tóxico'] },
  { ic: 'electricity.png', color: '#b62fe3', en: ['Electricity'], pt: ['Elétrico'] },
  { ic: 'blast.png', color: '#9c4144', en: ['Blast'], pt: ['Explosivo'] },
  { ic: 'magnetic.png', color: '#acacac', en: ['Magnetic'], pt: ['Magnético'] },
  { ic: 'cold.png', color: '#2f92e3', en: ['Cold'], pt: ['Glacial'] },
];

function renderEximusSection() {
  const el = document.getElementById('eximus-gloss');
  if (!el) return;
  const loc = state.locale === 'pt-BR' ? 'pt-BR' : 'en';
  const L = o => (o && (o[loc] || o.en)) || '';
  const esc = relicEsc;
  const W = 'https://wiki.warframe.com/images/';
  const ogIco = `<img class="gloss-ico" src="${W}Overguard%28xWhite%29.png?1c220" alt="" onerror="this.style.display='none'">`;
  const decorate = html => {
    EXIMUS_ELEMS.forEach(e => (loc === 'pt-BR' ? e.pt : e.en).forEach(w => {
      const re = new RegExp('(^|[^\\p{L}])(' + w + ')(?![\\p{L}])', 'gu');
      html = html.replace(re, (m, pre, word) =>
        `${pre}<span class="shard-el" style="color:${e.color}"><img class="shard-el-ic" src="assets/icons/status/${e.ic}" alt="" onerror="this.style.display='none'">${word}</span>`);
    }));
    return html;
  };

  const T = {
    what: { en: 'What they are', 'pt-BR': 'O que são' },
    intro: { en: 'Eximus are elite versions of normal enemies — bigger, with a glowing aura, extra stats and a special area ability. They get far more common at high levels and on the Steel Path.', 'pt-BR': 'Eximus são versões elite de inimigos comuns — maiores, com uma aura brilhante, stats extras e uma habilidade de área especial. Ficam muito mais comuns em níveis altos e no Percurso de Aço.' },
    og: { en: 'Overguard', 'pt-BR': 'Overguard' },
    ogText: { en: 'Eximus carry Overguard — an extra bar above their health. The key thing: while it’s up they ignore crowd control entirely (no stuns, knockdowns, mind control or slows), so you must strip it with raw damage first. Once depleted it does not regenerate. It’s neutral to damage types except +50% from Void, and Magnetic status amplifies all damage to it.', 'pt-BR': 'Eximus têm Overguard — uma barra extra acima da vida. O ponto-chave: enquanto ela existe, eles ignoram controle de grupo por completo (sem stuns, derrubadas, controle mental ou lentidão), então você precisa raspá-la com dano puro primeiro. Depois de zerada, ela não regenera. É neutra aos tipos de dano, exceto +50% de Void, e o status Magnético amplifica todo o dano contra ela.' },
    types: { en: 'Eximus abilities', 'pt-BR': 'Habilidades de Eximus' },
    typesNote: { en: 'Each Eximus has one of these auras.', 'pt-BR': 'Cada Eximus tem uma destas auras.' },
    why: { en: 'Why they matter', 'pt-BR': 'Por que importam' },
    whyText: { en: 'They’re dangerous but rewarding: +1,000 bonus Affinity, guaranteed Energy/Health orbs, and a chance at a Riven Sliver from level 30+. Steel Path’s “Eximus Stronghold” modifier floods missions with them — and they’re the main reason crowd-control builds also need damage.', 'pt-BR': 'São perigosos mas recompensadores: +1.000 de Afinidade bônus, orbes de Energia/Vida garantidos, e chance de Riven Sliver a partir do nível 30. O modificador “Eximus Stronghold” do Percurso de Aço enche as missões deles — e são o principal motivo de builds de controle de grupo também precisarem de dano.' },
    tips: { en: 'New-player tips', 'pt-BR': 'Dicas pra quem começa' },
    tip1: { en: 'Strip Overguard with damage first — your stuns won’t work until it’s gone.', 'pt-BR': 'Raspe o Overguard com dano primeiro — seus stuns só funcionam depois que ele acabar.' },
    tip2: { en: 'Kill Energy Leech Eximus fast — they drain your energy.', 'pt-BR': 'Mate o Eximus Sanguessuga de Energia rápido — ele drena sua energia.' },
    tip3: { en: 'Don’t stand in an Arctic globe — it slows you and blocks your shots.', 'pt-BR': 'Não fique dentro do globo Ártico — ele te lentifica e bloqueia seus tiros.' },
  };

  const cards = EXIMUS_TYPES.map(x =>
    `<div class="arc-card"><img class="arc-card-ico" src="${W}${x.ic}" alt="${esc(L(x.n))}" loading="lazy" onerror="this.style.visibility='hidden'">`
    + `<div class="arc-card-body"><span class="arc-card-name">${esc(L(x.n))}</span><span class="arc-card-eff">${decorate(esc(L(x.e)))}</span></div></div>`).join('');
  const tips = [T.tip1, T.tip2, T.tip3].map(t => `<li>${esc(L(t))}</li>`).join('');

  el.innerHTML =
    `<h4 class="sc-h">${esc(L(T.what))}</h4>`
    + `<div class="gloss-callout"><span class="gloss-callout-ico" aria-hidden="true">💠</span><span class="gloss-callout-text">${esc(L(T.intro))}</span></div>`
    + `<h4 class="sc-h">${esc(L(T.og))}</h4>`
    + `<div class="gloss-callout"><span class="gloss-callout-ico" aria-hidden="true">${ogIco}</span><span class="gloss-callout-text">${decorate(esc(L(T.ogText)))}</span></div>`
    + `<h4 class="sc-h">${esc(L(T.types))}</h4>`
    + `<div class="arc-grid eximus-types">${cards}</div><p class="sc-sub">${esc(L(T.typesNote))}</p>`
    + `<h4 class="sc-h">${esc(L(T.why))}</h4>`
    + `<div class="gloss-callout"><span class="gloss-callout-ico" aria-hidden="true">💀</span><span class="gloss-callout-text">${esc(L(T.whyText))}</span></div>`
    + `<h4 class="sc-h">${esc(L(T.tips))}</h4>`
    + `<ul class="sc-tips">${tips}</ul>`;
}
