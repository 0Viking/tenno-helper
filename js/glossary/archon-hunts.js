function renderArchonHuntsSection() {
  const el = document.getElementById('archon-hunts-gloss');
  if (!el) return;
  const loc = state.locale === 'pt-BR' ? 'pt-BR' : 'en';
  const L = o => (o && (o[loc] || o.en)) || '';
  const esc = relicEsc;

  const archons = ARCHON_LIST.map(a =>
    `<div class="archon-card" style="--ac:${a.ac}">`
    + `<img class="archon-img" src="https://wiki.warframe.com/images/${a.img}" alt="" loading="lazy" onerror="this.style.display='none'">`
    + `<div class="archon-card-cap">`
    + `<span class="archon-name">${esc(a.name)}</span>`
    + `<span class="archon-shard"><img src="https://wiki.warframe.com/images/${a.shardImg}" alt="" onerror="this.style.display='none'">${esc(L(a.shard))}</span>`
    + `</div></div>`).join('');

  const how = ARCHON_HOW.map(p => `<div class="sc-term"><dt>${esc(L(p.t))}</dt><dd>${esc(L(p.d))}</dd></div>`).join('');

  const unitL = L({ en: 'lvl', 'pt-BR': 'nível' });
  const stages = ARCHON_STAGES.map(s =>
    `<div class="mr-earn-card"><span class="nw-stat">${esc(s.v)}<span class="nw-unit"> ${esc(unitL)}</span></span>`
    + `<span class="mr-earn-t">${esc(L(s.t))}</span><span class="mr-earn-d">${esc(L(s.d))}</span></div>`).join('');

  const pctL = r => (typeof r.pct === 'object' ? L(r.pct) : r.pct);
  const rewards = ARCHON_REWARDS.map(r =>
    `<li class="gloss-rew${r.guaranteed ? ' is-guaranteed' : ''}">`
    + `<img class="gloss-rew-ico" src="https://wiki.warframe.com/images/${r.icon}" alt="" loading="lazy" onerror="this.style.display='none'">`
    + `<span class="gloss-rew-name">${esc(L(r.name))}</span>`
    + `<span class="gloss-rew-pct">${esc(pctL(r))}</span></li>`).join('');

  const tips = ARCHON_TIPS.map(t => `<li>${esc(L(t))}</li>`).join('');

  const T = {
    unlock: { en: 'Unlock by finishing the Veilbreaker quest. You also need a rank-30 Warframe (or to be MR 30 with a Forma’d Warframe).', 'pt-BR': 'Desbloqueie terminando a quest Veilbreaker. Você também precisa de um Warframe rank 30 (ou ser MR 30 com um Warframe já Formado).' },
    arch:   { en: 'The three Archons (weekly rotation)', 'pt-BR': 'Os três Archons (rotação semanal)' },
    archS:  { en: 'Each one drops its own colour of Archon Shard.', 'pt-BR': 'Cada um dropa sua própria cor de Fragmento de Archon.' },
    how:    { en: 'How it works', 'pt-BR': 'Como funciona' },
    stages: { en: 'The three missions & levels', 'pt-BR': 'As três missões e níveis' },
    rew:    { en: 'Rewards', 'pt-BR': 'Recompensas' },
    rewS:   { en: 'Every hunt: the Archon Shard is guaranteed; the rest is one roll from this pool.', 'pt-BR': 'Toda caçada: o Fragmento de Archon é garantido; o resto é um sorteio deste pool.' },
    tips:   { en: 'Good to know', 'pt-BR': 'Bom saber' },
    cta:    { en: 'What Archon Shards do →', 'pt-BR': 'O que os Fragmentos de Archon fazem →' },
  };

  el.innerHTML =
    `<div class="gloss-callout"><span class="gloss-callout-ico" aria-hidden="true">🔓</span><span class="gloss-callout-text">${esc(L(T.unlock))}</span></div>`
    + `<h4 class="sc-h">${esc(L(T.arch))}</h4>`
    + `<div class="archon-grid">${archons}</div>`
    + `<p class="sc-sub">${esc(L(T.archS))}</p>`
    + `<h4 class="sc-h">${esc(L(T.how))}</h4>`
    + `<dl class="sc-terms">${how}</dl>`
    + `<h4 class="sc-h">${esc(L(T.stages))}</h4>`
    + `<div class="mr-earn nw-acts">${stages}</div>`
    + `<h4 class="sc-h">${esc(L(T.rew))}</h4>`
    + `<p class="sc-sub">${esc(L(T.rewS))}</p>`
    + `<ul class="gloss-rew-list">${rewards}</ul>`
    + `<h4 class="sc-h">${esc(L(T.tips))}</h4>`
    + `<ul class="sc-tips">${tips}</ul>`
    + `<button type="button" class="sc-cta" onclick="goToGlossarySection('archon-shards')">${esc(L(T.cta))}</button>`;
}

// ── Steel Path glossary section ──────────────────────────────────────────────

const SP_MODS = [
  { v: '+100', t: { en: 'Levels', 'pt-BR': 'Níveis' },  d: { en: 'On enemies (only +50 on Archwing/Railjack).', 'pt-BR': 'Nos inimigos (só +50 em Archwing/Railjack).' } },
  { v: '×2.5', t: { en: 'Health', 'pt-BR': 'Vida' },    d: { en: 'Enemies are far tankier.', 'pt-BR': 'Inimigos bem mais tankões.' } },
  { v: '×2.5', t: { en: 'Shields', 'pt-BR': 'Escudos' }, d: { en: 'Same for Corpus shields.', 'pt-BR': 'Idem nos escudos Corpus.' } },
];

const SP_DETAILS = [
  { t: { en: 'How you earn Essence', 'pt-BR': 'Como ganhar Essência de Aço' },
    d: { en: 'Acolytes (2 each), Steel Path Incursions (5 each), clearing a full planet (25), Eidolons and SP relic cracking (1).', 'pt-BR': 'Acólitos (2 cada), Incursões do Percurso de Aço (5 cada), limpar um planeta inteiro (25), Eidolons e relíquias em Fissuras do Percurso de Aço (1).' } },
  { t: { en: 'Teshin’s Steel Path Honors', 'pt-BR': 'Loja do Teshin (Honras do Percurso de Aço)' },
    d: { en: 'Umbra Forma BP (150), Kuva, Arcane Adapters, a weekly Veiled Riven Cipher, Stance Forma, cosmetics — plus a rotating weekly offer.', 'pt-BR': 'Diagrama de Forma Umbra (150), Kuva, adaptadores de arcanos, um decodificador de riven oculto semanal, forma de postura, cosméticos — além de uma oferta semanal rotativa.' } },
  { t: { en: 'Steel Path Incursions', 'pt-BR': 'Incursões do Percurso de Aço' },
    d: { en: '6 alert missions a day (reset 00:00 UTC), 5 Steel Essence each.', 'pt-BR': '6 missões-alerta por dia (renovam às 21h, horário de Brasília), 5 Essência de Aço cada.' } },
  { t: { en: 'The Circuit (weekly)', 'pt-BR': 'O Circuito (semanal)' },
    d: { en: 'Offers Incarnon Genesis adapters — 2 of 5 selectable per week.', 'pt-BR': 'Oferece adaptadores de Incarnon Genesis — 2 de 5 escolhíveis por semana.' } },
];

const SP_TIPS = [
  { en: 'Enemies are tankier, not just more numerous — bring real damage and armor/shield strip.', 'pt-BR': 'Os inimigos são mais resistentes, não só mais numerosos — leve dano de verdade e remoção de armadura/escudo.' },
  { en: 'Even solo, enemy spawns stay at the maximum (4-player) rate — normal missions scale to squad size, Steel Path doesn’t.', 'pt-BR': 'Mesmo solo, a quantidade de inimigos é sempre máxima (como num squad de 4) — no modo normal ela se adapta ao número de jogadores; no Percurso de Aço, não.' },
  { en: 'Steel Path Incursions are an easy, steady source of Steel Essence; Umbra Forma is the shop’s highest-value buy.', 'pt-BR': 'As Incursões do Percurso de Aço rendem Essência de Aço de forma fácil e constante. A Forma Umbra é a compra mais valiosa da loja.' },
];

