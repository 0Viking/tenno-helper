function renderSyndicateSection() {
  const el = document.getElementById('syn-gloss');
  if (!el) return;
  const loc = state.locale === 'pt-BR' ? 'pt-BR' : 'en';
  const L = o => (o && (o[loc] || o.en)) || '';
  const esc = relicEsc;
  const showSpoilers = !!(state.starChart && state.starChart.showSpoilers);

  const how = SYN_HOW.map(p =>
    `<div class="sc-term"><dt>${esc(L(p.t))}</dt><dd>${esc(L(p.d))}</dd></div>`).join('');

  const allyLbl = L({ en: 'Allied', 'pt-BR': 'Aliado' });
  const oppLbl = L({ en: 'Opposed', 'pt-BR': 'Oposto' });
  const enemyLbl = L({ en: 'Enemy', 'pt-BR': 'Inimigo' });

  // card de sindicato: ícone + nome (cor) + descrição (+ relações, se de facção)
  const synCard = (s, rels) =>
    `<div class="syn-card" style="--c:${s.c};--bg:${s.bg}">`
    + `<div class="syn-card-head">`
    + (s.icon ? `<img class="syn-card-icon" src="${esc(s.icon)}" alt="" loading="lazy" onerror="this.style.display='none'">` : '')
    + `<div class="syn-card-htext"><div class="syn-card-name">${esc(s.n)}</div>`
    + `<div class="syn-card-desc">${esc(L(s.d))}</div></div></div>`
    + (rels || '') + `</div>`;

  // lista expansível "Warframes com augments aqui" (de SYNDICATE_AUGMENTS, por sindicato)
  const synAugList = name => {
    const items = (typeof SYNDICATE_AUGMENTS !== 'undefined' && SYNDICATE_AUGMENTS[name]) || [];
    if (!items.length) return '';
    const byFrame = {};
    items.forEach(it => { (byFrame[it.f] = byFrame[it.f] || []).push(it.a); });
    const frames = Object.keys(byFrame).sort((a, b) => a.localeCompare(b));
    const rows = frames.map(f =>
      `<li class="syn-aug-row"><span class="syn-aug-frame">${esc(f)}</span>`
      + `<span class="syn-aug-mods">${byFrame[f].map(esc).join(', ')}</span></li>`).join('');
    const summary = L({ en: `Warframes with augments here (${frames.length})`, 'pt-BR': `Warframes com augments aqui (${frames.length})` });
    return `<details class="syn-aug"><summary>${esc(summary)}</summary><ul class="syn-aug-list">${rows}</ul></details>`;
  };

  const base = SYN_BASE.map(s => synCard(s,
    `<div class="syn-rels">`
    + `<div class="syn-rel syn-rel--ally"><span class="syn-rel-k">${allyLbl} +50%</span><span class="syn-rel-v">${esc(s.ally)}</span></div>`
    + `<div class="syn-rel syn-rel--opp"><span class="syn-rel-k">${oppLbl} −50%</span><span class="syn-rel-v">${esc(s.opp)}</span></div>`
    + `<div class="syn-rel syn-rel--enemy"><span class="syn-rel-k">${enemyLbl} −100%</span><span class="syn-rel-v">${esc(s.enemy)}</span></div>`
    + `</div>` + synAugList(s.n))).join('');

  const neutral = SYN_NEUTRAL.map(s => synCard(s)).join('');
  const spoilerList = SYN_SPOILER.map(s => synCard(s)).join('');

  const tips = SYN_TIPS.map(t => `<li>${esc(L(t))}</li>`).join('');

  const T = {
    how:     { en: 'How it works', 'pt-BR': 'Como funciona' },
    base:    { en: 'The 6 faction syndicates', 'pt-BR': 'Os 6 sindicatos de facção' },
    baseS:   { en: 'Pledge to one at a time. Standing ripples out: allies gain +50%, opposed lose −50%, enemies lose −100%.', 'pt-BR': 'Você se compromete com um por vez. A Reputação respinga: aliados ganham +50%, opostos perdem −50%, inimigos perdem −100%.' },
    neutral: { en: 'Neutral syndicates', 'pt-BR': 'Sindicatos neutros' },
    neutralS:{ en: 'No enemies, each with its own daily cap — join them as you reach their content.', 'pt-BR': 'Sem inimigos, cada um com seu próprio cap diário — entre neles conforme alcança o conteúdo.' },
    spoiler: { en: 'Late-game syndicates', 'pt-BR': 'Sindicatos de fim de jogo' },
    tips:    { en: 'Good to know', 'pt-BR': 'Bom saber' },
    hide:    { en: 'Hide spoilers', 'pt-BR': 'Ocultar spoilers' },
  };

  let spoilerBlock;
  if (showSpoilers) {
    spoilerBlock = `<div class="sc-h-row"><h4 class="sc-h">${esc(L(T.spoiler))}</h4>`
      + `<button type="button" class="sc-spoiler-toggle" data-syn-hide>${esc(L(T.hide))}</button></div>`
      + `<div class="syn-grid">${spoilerList}</div>`;
  } else {
    const veilTxt = L({ en: `${SYN_SPOILER.length} quest-locked syndicates hidden`, 'pt-BR': `${SYN_SPOILER.length} sindicatos com quest-lock ocultos` });
    const veilCta = L({ en: 'Reveal spoilers', 'pt-BR': 'Revelar spoilers' });
    spoilerBlock = `<h4 class="sc-h">${esc(L(T.spoiler))}</h4>`
      + `<button type="button" class="sc-special-card sc-special-veil" data-syn-reveal style="aspect-ratio:auto">`
      + `<span class="sc-veil-ico" aria-hidden="true">🔒</span>`
      + `<span class="sc-special-name">${esc(veilTxt)}</span>`
      + `<span class="sc-special-note">${esc(veilCta)} →</span></button>`;
  }

  el.innerHTML =
    `<h4 class="sc-h">${esc(L(T.how))}</h4>`
    + `<dl class="sc-terms">${how}</dl>`
    + `<h4 class="sc-h">${esc(L(T.base))}</h4>`
    + `<p class="sc-sub">${esc(L(T.baseS))}</p>`
    + `<div class="syn-grid">${base}</div>`
    + `<h4 class="sc-h">${esc(L(T.neutral))}</h4>`
    + `<p class="sc-sub">${esc(L(T.neutralS))}</p>`
    + `<div class="syn-grid">${neutral}</div>`
    + spoilerBlock
    + `<h4 class="sc-h">${esc(L(T.tips))}</h4>`
    + `<ul class="sc-tips">${tips}</ul>`;

  if (!_synGlossBound) {
    el.addEventListener('click', e => {
      const reveal = e.target.closest('[data-syn-reveal]');
      const hide = e.target.closest('[data-syn-hide]');
      if (reveal || hide) {
        state.starChart.showSpoilers = !!reveal;
        try { localStorage.setItem('starChart.showSpoilers', reveal ? 'true' : 'false'); } catch (err) {}
        renderSyndicateSection();
      }
    });
    _synGlossBound = true;
  }
}

// ── Critical Hits glossary section ───────────────────────────────────────────

const CRIT_STATS = [
  { k: 'CC', t: { en: 'Critical Chance', 'pt-BR': 'Chance de Crítico' },
    d: { en: 'How often a hit crits.', 'pt-BR': 'Com que frequência um tiro crita.' } },
  { k: 'CD', t: { en: 'Critical Damage', 'pt-BR': 'Dano de Crítico' },
    d: { en: 'The damage multiplier when it crits.', 'pt-BR': 'O multiplicador de dano quando crita.' } },
];

const CRIT_TIERS = [
  { c: '#e8c04a', t: { en: 'Tier 1 · Yellow', 'pt-BR': 'Tier 1 · Amarelo' }, cc: { en: 'CC up to 100%', 'pt-BR': 'CC até 100%' },
    d: { en: 'A normal crit — damage × CD.', 'pt-BR': 'Crítico normal — dano × CD.' }, ex: 'CD 2,0× → ×2,0' },
  { c: '#e0823c', t: { en: 'Tier 2 · Orange', 'pt-BR': 'Tier 2 · Laranja' }, cc: { en: 'CC above 100%', 'pt-BR': 'CC acima de 100%' },
    d: { en: 'Big crit — the crit bonus is doubled.', 'pt-BR': 'Crítico grande — o bônus do crítico é dobrado.' }, ex: 'CD 2,0× → ×3,0' },
  { c: '#d2483a', t: { en: 'Tier 3 · Red', 'pt-BR': 'Tier 3 · Vermelho' }, cc: { en: 'CC 200%+', 'pt-BR': 'CC 200%+' },
    d: { en: 'Super crit — the crit bonus is tripled.', 'pt-BR': 'Crítico supremo — o bônus do crítico é triplicado.' }, ex: 'CD 2,0× → ×4,0' },
];

// multiplicador efetivo por tier = 1 + T×(CD−1). r1/r2/r3 = vermelho com ! / !! / !!!
const CRIT_EX = [
  { cd: '2,0×',  y: '×2',  o: '×3',  r: '×4',  r1: '×5',  r2: '×6',  r3: '×7' },
  { cd: '3,0×',  y: '×3',  o: '×5',  r: '×7',  r1: '×9',  r2: '×11', r3: '×13' },
  { cd: '10,0×', y: '×10', o: '×19', r: '×28', r1: '×37', r2: '×46', r3: '×55' },
];

const CRIT_DETAILS = [
  { t: { en: 'Above 100% CC', 'pt-BR': 'Acima de 100% de CC' },
    d: { en: 'Every hit is a guaranteed crit; the excess becomes the chance to tier up. E.g. 150% CC → all hits crit and 50% turn orange.', 'pt-BR': 'Todo tiro vira crítico garantido; o excedente vira a chance de subir de tier. Ex.: 150% de CC → todos critam e 50% viram laranja.' } },
  { t: { en: 'CC and CD multiply each other', 'pt-BR': 'CC e CD se multiplicam' },
    d: { en: 'Tiering up re-applies the CD bonus (the part above ×1) — orange doubles it, red triples it (multiplier = 1 + T × (CD − 1)). So CC past 100% raises your damage, not just how often you crit — that’s why crit weapons stack both. See the table above.', 'pt-BR': 'Subir de tier reaplica o bônus do CD (a parte acima de ×1) — laranja dobra, vermelho triplica (multiplicador = 1 + T × (CD − 1)). Por isso CC acima de 100% aumenta o dano, não só a frequência — e armas de crit sobem os dois juntos. Veja a tabela acima.' } },
  { t: { en: 'The “!” in-game', 'pt-BR': 'Os “!” no jogo' },
    d: { en: 'Past red (tier 3) the colour stops changing, so each extra tier adds an exclamation mark — red !, red !!, then red !!! (tier 6, around 500%+ CC). More marks = even more damage.', 'pt-BR': 'Passado o vermelho (tier 3), a cor para de mudar — aí cada tier a mais coloca um “!”: vermelho !, vermelho !!, e vermelho !!! (tier 6, com CC lá por ~500%+). Mais “!” = ainda mais dano.' } },
  { t: { en: 'Headshots', 'pt-BR': 'Tiros na cabeça' },
    d: { en: 'Have their own multiplier that stacks on top of the crit — and some effects (e.g. Harrow’s Covenant) boost crit chance on headshots.', 'pt-BR': 'Têm multiplicador próprio que empilha por cima do crítico — e alguns efeitos (ex.: Covenant da Harrow) aumentam a CC na cabeça.' } },
  { t: { en: 'Boosting it', 'pt-BR': 'Como aumentar' },
    d: { en: 'CC mods (Point Strike +150%, Galvanized Scope…), CD mods (Vital Sense +120%, Bladed Rounds…), arcanes (Avenger/Crepuscular) and Rivens.', 'pt-BR': 'Mods de CC (Point Strike +150%, Galvanized Scope…), de CD (Vital Sense +120%, Bladed Rounds…), arcanos (Avenger/Crepuscular) e Rivens.' } },
];

const CRIT_TIPS = [
  { en: 'Crit weapons want CC and CD together — they multiply each other, so raising both beats focusing one.', 'pt-BR': 'Armas de crit querem CC e CD juntos — eles se multiplicam, então subir os dois rende mais que focar um.' },
  { en: 'Passing 100% (orange) and 200% (red) are huge damage jumps — worth chasing.', 'pt-BR': 'Passar de 100% (laranja) e 200% (vermelho) são saltos enormes de dano — vale a pena buscar.' },
  { en: 'Headshots multiply on top of crits — great on snipers and precision weapons.', 'pt-BR': 'Headshots multiplicam por cima do crit — ótimos em snipers e armas de precisão.' },
  { en: 'Status weapons (low crit, high status) don’t want crit — invest in Status Chance instead.', 'pt-BR': 'Armas de status (crit baixo, status alto) não querem crit — invista em Chance de Status.' },
];

