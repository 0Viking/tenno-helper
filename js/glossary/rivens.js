function renderRivensSection() {
  const el = document.getElementById('rivens-gloss');
  if (!el) return;
  const loc = state.locale === 'pt-BR' ? 'pt-BR' : 'en';
  const L = o => (o && (o[loc] || o.en)) || '';
  const esc = relicEsc;
  const term = arr => arr.map(p => `<div class="sc-term"><dt>${esc(L(p.t))}</dt><dd>${p.html ? L(p.d) : esc(L(p.d))}</dd></div>`).join('');
  const dots = n => '●'.repeat(n) + '○'.repeat(5 - n);
  const T = {
    how: { en: 'How it works', 'pt-BR': 'Como funciona' },
    deep: { en: 'Disposition, rolling & sources', 'pt-BR': 'Disposition, reroll e fontes' },
    disp: { en: 'Disposition (●1–5, 0.5–1.55) scales the strength of every Riven stat — the less popular the weapon, the more dots. DE re-tunes it about every 3 months:', 'pt-BR': 'A disposition (●1–5, 0,5–1,55) escala a força de todo stat do Riven — quanto menos usada a arma, mais pontos. A DE reajusta a cada ~3 meses:' },
    chal: { en: 'Unveiling challenges', 'pt-BR': 'Desafios de revelação' },
    chalSub: { en: 'Tap a challenge for tips on completing it.', 'pt-BR': 'Toque num desafio pra ver dicas de como completá-lo.' },
    tips: { en: 'Good to know', 'pt-BR': 'Bom saber' },
    cta: { en: 'Evaluate or compare your Rivens →', 'pt-BR': 'Avalie ou compare seus Rivens →' },
  };
  const dispScale = RIVEN_DISP.map(d =>
    `<div class="riven-disp-row"><span class="riven-disp-dots">${dots(d.n)}</span><span class="riven-disp-t">${esc(L(d.t))}</span></div>`).join('');
  const chalChips = RIVEN_CHALLENGES.map((ch, i) =>
    `<button type="button" class="riven-chal-chip" onclick="openRivenChallenge(${i})">${esc(L(ch.c))}</button>`).join('');
  const flow = RIVEN_FLOW.map(f =>
    `<figure class="riven-flow-fig"><img src="assets/glossary/${f.img}" alt="" loading="lazy">`
    + `<figcaption><span class="riven-flow-t">${esc(L(f.t))}</span><span class="riven-flow-d">${esc(L(f.d))}</span></figcaption></figure>`).join('');

  el.innerHTML =
    `<h4 class="sc-h">${esc(L(T.how))}</h4>`
    + `<div class="riven-flow">${flow}</div>`
    + `<dl class="sc-terms">${term(RIVEN_HOW)}</dl>`
    + `<h4 class="sc-h">${esc(L(T.deep))}</h4>`
    + `<p class="sc-sub">${esc(L(T.disp))}</p><div class="riven-disp">${dispScale}</div>`
    + `<dl class="sc-terms">${term(RIVEN_DEEP)}</dl>`
    + `<h4 class="sc-h">${esc(L(T.chal))}</h4>`
    + `<details class="riven-chal"><summary>${esc(L({ en: `All challenges (${RIVEN_CHALLENGES.length})`, 'pt-BR': `Todos os desafios (${RIVEN_CHALLENGES.length})` }))}</summary>`
    + `<p class="sc-sub">${esc(L(T.chalSub))}</p><div class="riven-chal-grid">${chalChips}</div></details>`
    + `<h4 class="sc-h">${esc(L(T.tips))}</h4><ul class="sc-tips">${RIVEN_TIPS.map(t => `<li>${esc(L(t))}</li>`).join('')}</ul>`
    + `<button type="button" class="sc-cta" onclick="selectTab('rivens')">${esc(L(T.cta))}</button>`;
}

// ── Arcanes glossary section ─────────────────────────────────────────────────

// Arcanos em destaque — efeitos no rank 5 (conferidos na wiki). Ícones via imageinfo.
const ARC_POPULAR = [
  { icon: 'ArcaneEnergize.png?cc86e', name: 'Arcane Energize',
    eff: { en: 'On energy-orb pickup (60%): +150 energy to you and nearby allies.', 'pt-BR': 'Ao pegar orb de energia (60%): +150 de energia pra você e aliados próximos.' } },
  { icon: 'ArcaneGrace.png?9db80', name: 'Arcane Grace',
    eff: { en: 'When health is hurt (9%): regen 6% health/sec for 9s.', 'pt-BR': 'Ao tomar dano na vida (9%): regenera 6% da vida/s por 9s.' } },
  { icon: 'ArcaneGuardian.png?eb328', name: 'Arcane Guardian',
    eff: { en: 'When hit (15%): +900 Armor for 20s.', 'pt-BR': 'Ao tomar dano (15%): +900 de Armadura por 20s.' } },
  { icon: 'ArcaneAegis.png?a602f', name: 'Arcane Aegis',
    eff: { en: 'When shield is hurt (3%): 30% shield regen/sec for 12s.', 'pt-BR': 'Ao tomar dano no escudo (3%): 30% de recarga de escudo/s por 12s.' } },
  { icon: 'MoltEfficiency.png?9abb5', name: 'Molt Efficiency',
    eff: { en: 'With shields up: +6% Ability Duration/sec, up to +36%.', 'pt-BR': 'Com escudo ativo: +6% de Duração de Habilidade/s, até +36%.' } },
  { icon: 'MoltAugmented.png?15a05', name: 'Molt Augmented',
    eff: { en: 'Each kill: +Ability Strength, stacking up to +60%.', 'pt-BR': 'A cada abate: +Força de Habilidade, acumulando até +60%.' } },
  { icon: 'ArcaneAvenger.png?95298', name: 'Arcane Avenger',
    eff: { en: 'When hit (21%): +45% Critical Chance for 12s.', 'pt-BR': 'Ao tomar dano (21%): +45% de Chance de Crítico por 12s.' } },
  { icon: 'ArcaneBlessing.png?11833', name: 'Arcane Blessing',
    eff: { en: 'On health-orb pickup: +24 Max Health per stack, up to +1,200.', 'pt-BR': 'Ao pegar health orb: +24 de Vida máxima por stack, até +1.200.' } },
];
const ARC_SLOTS = [
  { t: { en: 'Warframe / Operator / Amp', 'pt-BR': 'Warframe / Operador / Amp' }, v: '×2' },
  { t: { en: 'Weapons', 'pt-BR': 'Armas' }, v: '×1' },
  { t: { en: 'Arch-guns', 'pt-BR': 'Arch-guns' }, v: '×2' },
  { t: { en: 'Zaws / Kitguns', 'pt-BR': 'Zaws / Kitguns' }, v: '×1' },
  { t: { en: 'Sentinels · Necramechs', 'pt-BR': 'Sentinelas · Necramechs' }, v: '✕' },
];
// [rank, cópias só desse tier, total acumulado]
const ARC_RANKS = [['0', '1', '1'], ['1', '+2', '3'], ['2', '+3', '6'], ['3', '+4', '10'], ['4', '+5', '15'], ['5', '+6', '21']];
const ARC_SOURCES = [
  { src: { en: 'Eidolons & Orphix', 'pt-BR': 'Eidolons & Orphix' }, gives: { en: 'Warframe arcanes (Energize, Grace, Guardian…)', 'pt-BR': 'arcanos de Warframe (Energize, Grace, Guardian…)' } },
  { src: { en: 'The Holdfasts (Zariman)', 'pt-BR': 'The Holdfasts (Zariman)' }, gives: { en: 'Molt, Cascadia & Eternal arcanes', 'pt-BR': 'arcanos Molt, Cascadia & Eternal' } },
  { src: { en: 'The Quills / Vox Solaris', 'pt-BR': 'Plumas / Vox Solaris' }, gives: { en: 'Magus & Virtuos (Operator/Amp)', 'pt-BR': 'Magus & Virtuos (Operador/Amp)' } },
  { src: { en: 'Cavia (Deimos)', 'pt-BR': 'Cavia (Deimos)' }, gives: { en: 'Melee, Theorem & Residual arcanes', 'pt-BR': 'arcanos de Melee, Theorem & Residual' } },
  { src: { en: 'Steel Path · Acolytes · Mirror Defense', 'pt-BR': 'Percurso de Aço · Acólitos · Defesa Espelhada' }, gives: { en: 'Primary & Secondary arcanes', 'pt-BR': 'arcanos de Primária & Secundária' } },
  { src: { en: 'Arbitrations', 'pt-BR': 'Arbitragens' }, gives: { en: 'companion arcanes', 'pt-BR': 'arcanos de companheiro' } },
];

