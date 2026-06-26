function renderCritsSection() {
  const el = document.getElementById('crits-gloss');
  if (!el) return;
  const loc = state.locale === 'pt-BR' ? 'pt-BR' : 'en';
  const L = o => (o && (o[loc] || o.en)) || '';
  const esc = relicEsc;

  const stats = CRIT_STATS.map(s =>
    `<div class="mr-earn-card"><span class="nw-stat">${esc(s.k)}</span>`
    + `<span class="mr-earn-t">${esc(L(s.t))}</span>`
    + `<span class="mr-earn-d">${esc(L(s.d))}</span></div>`).join('');

  const tiers = CRIT_TIERS.map(t =>
    `<div class="crit-tier" style="--c:${t.c}">`
    + `<div class="crit-tier-name">${esc(L(t.t))}</div>`
    + `<div class="crit-tier-cc">${esc(L(t.cc))}</div>`
    + `<div class="crit-tier-d">${esc(L(t.d))}</div>`
    + `<div class="crit-tier-ex">${esc(t.ex)}</div></div>`).join('');

  const exRows = CRIT_EX.map(r =>
    `<tr><td>${esc(r.cd)}</td><td class="ct-y">${esc(r.y)}</td><td class="ct-o">${esc(r.o)}</td><td class="ct-r">${esc(r.r)}</td><td class="ct-r">${esc(r.r1)}</td><td class="ct-r">${esc(r.r2)}</td><td class="ct-r">${esc(r.r3)}</td></tr>`).join('');
  const exTable = `<p class="sc-sub crit-ex-label">${esc(L({ en: 'Example — effective multiplier per tier:', 'pt-BR': 'Exemplo — multiplicador efetivo por tier:' }))}</p>`
    + `<div class="crit-ex-wrap"><table class="crit-ex"><thead><tr>`
    + `<th>${esc(L({ en: 'Crit Damage', 'pt-BR': 'Dano de Crít.' }))}</th>`
    + `<th class="ct-y">${esc(L({ en: 'Yellow', 'pt-BR': 'Amarelo' }))}</th>`
    + `<th class="ct-o">${esc(L({ en: 'Orange', 'pt-BR': 'Laranja' }))}</th>`
    + `<th class="ct-r">${esc(L({ en: 'Red', 'pt-BR': 'Vermelho' }))}</th>`
    + `<th class="ct-r">!</th>`
    + `<th class="ct-r">!!</th>`
    + `<th class="ct-r">!!!</th></tr></thead>`
    + `<tbody>${exRows}</tbody></table></div>`;

  const details = CRIT_DETAILS.map(p =>
    `<div class="sc-term"><dt>${esc(L(p.t))}</dt><dd>${esc(L(p.d))}</dd></div>`).join('');

  const tips = CRIT_TIPS.map(t => `<li>${esc(L(t))}</li>`).join('');

  const T = {
    stats: { en: 'The two stats', 'pt-BR': 'As duas stats' },
    tiers: { en: 'Crit tiers', 'pt-BR': 'Tiers de crítico' },
    how:   { en: 'How it works', 'pt-BR': 'Como funciona' },
    tips:  { en: 'Good to know', 'pt-BR': 'Bom saber' },
  };

  el.innerHTML =
    `<h4 class="sc-h">${esc(L(T.stats))}</h4>`
    + `<div class="mr-earn nw-acts">${stats}</div>`
    + `<h4 class="sc-h">${esc(L(T.tiers))}</h4>`
    + `<div class="crit-tiers">${tiers}</div>`
    + exTable
    + `<h4 class="sc-h">${esc(L(T.how))}</h4>`
    + `<dl class="sc-terms">${details}</dl>`
    + `<h4 class="sc-h">${esc(L(T.tips))}</h4>`
    + `<ul class="sc-tips">${tips}</ul>`;
}

// ── Mission Rotations glossary section ───────────────────────────────────────

const ROT_MISSIONS = [
  { m: { en: 'Survival',       'pt-BR': 'Sobrevivência' },     iv: { en: 'every 5 min',      'pt-BR': 'a cada 5 min' },     a: { en: '5 / 10 min',     'pt-BR': '5 / 10 min' },     b: { en: '15 min',     'pt-BR': '15 min' },     c: { en: '20 min',     'pt-BR': '20 min' } },
  { m: { en: 'Defense',        'pt-BR': 'Defesa' },            iv: { en: 'every 3 waves',    'pt-BR': 'a cada 3 ondas' },   a: { en: 'waves 3 / 6',    'pt-BR': 'ondas 3 / 6' },    b: { en: 'wave 9',     'pt-BR': 'onda 9' },     c: { en: 'wave 12',    'pt-BR': 'onda 12' } },
  { m: { en: 'Interception',   'pt-BR': 'Interceptação' },     iv: { en: 'each round',       'pt-BR': 'cada rodada' },      a: { en: 'rounds 1 / 2',   'pt-BR': 'rodadas 1 / 2' },  b: { en: 'round 3',    'pt-BR': 'rodada 3' },   c: { en: 'round 4',    'pt-BR': 'rodada 4' } },
  { m: { en: 'Excavation',     'pt-BR': 'Escavação' },         iv: { en: 'every 100 Cryotic','pt-BR': 'a cada 100 Cryotic' },a: { en: '1st / 2nd dig',  'pt-BR': '1ª / 2ª escav.' }, b: { en: '3rd',        'pt-BR': '3ª' },         c: { en: '4th',        'pt-BR': '4ª' } },
  { m: { en: 'Defection',      'pt-BR': 'Defecção' },          iv: { en: 'every 2 squads',   'pt-BR': 'a cada 2 esquadrões' }, a: { en: '2 / 4 squads', 'pt-BR': '2 / 4 esq.' },  b: { en: '6 squads',   'pt-BR': '6 esq.' },     c: { en: '8 squads',   'pt-BR': '8 esq.' } },
  { m: { en: 'Mirror Defense', 'pt-BR': 'Defesa Espelhada' },  iv: { en: '~5.5 min',         'pt-BR': '~5,5 min' },         a: { en: '1st / 2nd',      'pt-BR': '1ª / 2ª' },        b: { en: '3rd',        'pt-BR': '3ª' },         c: { en: '4th',        'pt-BR': '4ª' } },
];

// Cada caso especial vira um mini-card: padrão visualizado (seq/conduits/tag) + legenda curta.
const ROT_SPECIAL = [
  { t: { en: 'Arbitrations', 'pt-BR': 'Arbitragens' }, seq: 'AABBC', loop: true,
    d: { en: 'After AABB it stays on C — great for farming C-tier drops.', 'pt-BR': 'Depois de AABB fica na C — ótimo pra farmar drops de tier C.' } },
  { t: { en: 'Disruption', 'pt-BR': 'Disrupção' }, conduits: true,
    d: { en: 'No clock or waves — your tier is how many of the 4 conduits you defend (round 3: 4→C, 3→B, 1→A; round 4+: 4→C).', 'pt-BR': 'Sem relógio nem ondas — o tier é quantos dos 4 conduítes você defende (rodada 3: 4→C, 3→B, 1→A; rodada 4+: 4→C).' } },
  { t: { en: 'The Index', 'pt-BR': 'O Índice' }, seq: 'ABB', tail: { en: '… + C ×1', 'pt-BR': '… + C ×1' },
    d: { en: 'C shows up only once per match — after ~1h, when John Prodman appears.', 'pt-BR': 'A C aparece só uma vez por partida — após ~1h, quando o John Prodman surge.' } },
  { t: { en: 'Sabotage caches', 'pt-BR': 'Caches de Sabotagem' }, tag: { en: 'own table', 'pt-BR': 'tabela própria' },
    d: { en: 'Caches roll a separate bonus table — find them all to unlock it.', 'pt-BR': 'Caches rolam numa tabela de bônus separada — ache todos pra liberá-la.' } },
];

const ROT_TIPS = [
  { en: 'Rotation C usually has what you want (Prime parts, rare mods) — plan your exit on a C: 20 min, wave 12, round 4, or the 4th excavation.', 'pt-BR': 'A rotação C costuma ter o que você quer (peças Prime, mods raros) — planeje a saída numa C: 20 min, onda 12, rodada 4, ou a 4ª escavação.' },
  { en: 'You only keep the loot when you extract — dying without a revive or abandoning the run loses the rewards.', 'pt-BR': 'Você só leva o loot ao extrair — morrer sem revive ou abandonar a partida perde as recompensas.' },
  { en: 'In Void Fissures, Excavation asks for 200 Cryotic per reward (double the usual).', 'pt-BR': 'Em Fissuras do Void, a Escavação pede 200 Cryotic por recompensa (o dobro do normal).' },
];

