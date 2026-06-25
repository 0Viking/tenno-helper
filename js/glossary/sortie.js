function renderSortieSection() {
  const el = document.getElementById('sorties-gloss');
  if (!el) return;
  const loc = state.locale === 'pt-BR' ? 'pt-BR' : 'en';
  const L = o => (o && (o[loc] || o.en)) || '';
  const esc = relicEsc;

  const unit = L({ en: 'lvl', 'pt-BR': 'nível' });
  const missions = SORTIE_MISSIONS.map(m =>
    `<div class="mr-earn-card"><span class="nw-stat">${esc(m.v)}<span class="nw-unit"> ${esc(unit)}</span></span>`
    + `<span class="mr-earn-t">${esc(L(m.t))}</span>`
    + `<span class="mr-earn-d">${esc(L(m.d))}</span></div>`
  ).join('');

  const mods = SORTIE_MODS.map(p =>
    `<div class="sc-term"><dt>${esc(L(p.t))}</dt><dd>${esc(L(p.d))}</dd></div>`
  ).join('');

  const pctL = r => (typeof r.pct === 'object' ? L(r.pct) : r.pct);
  const rewards = SORTIE_REWARDS.map(r =>
    `<li class="gloss-rew">`
    + `<img class="gloss-rew-ico" src="https://wiki.warframe.com/images/${r.icon}" alt="" loading="lazy" onerror="this.style.display='none'">`
    + `<span class="gloss-rew-name">${esc(L(r.name))}</span>`
    + `<span class="gloss-rew-pct">${esc(pctL(r))}</span></li>`
  ).join('');

  const tips = SORTIE_TIPS.map(t => `<li>${esc(L(t))}</li>`).join('');

  const T = {
    miss:  { en: 'Three missions, rising difficulty', 'pt-BR': 'Três missões, dificuldade crescente' },
    missS: { en: 'All three share one faction and reset daily. You must clear them in order.', 'pt-BR': 'As três compartilham uma facção e renovam diariamente. Você precisa completá-las em ordem.' },
    mods:  { en: 'Modifiers you’ll see', 'pt-BR': 'Modificadores que aparecem' },
    rew:   { en: 'Reward pool (one per day)', 'pt-BR': 'Pool de recompensas (uma por dia)' },
    tips:  { en: 'Good to know', 'pt-BR': 'Bom saber' },
  };

  el.innerHTML =
    `<h4 class="sc-h">${esc(L(T.miss))}</h4>`
    + `<div class="mr-earn nw-acts">${missions}</div>`
    + `<p class="sc-sub">${esc(L(T.missS))}</p>`
    + `<h4 class="sc-h">${esc(L(T.mods))}</h4>`
    + `<dl class="sc-terms">${mods}</dl>`
    + `<h4 class="sc-h">${esc(L(T.rew))}</h4>`
    + `<ul class="gloss-rew-list">${rewards}</ul>`
    + `<h4 class="sc-h">${esc(L(T.tips))}</h4>`
    + `<ul class="sc-tips">${tips}</ul>`;
}

// ── Arbitration glossary section ─────────────────────────────────────────────

const ARB_RULES = [
  { t: { en: 'One life · no bleedout', 'pt-BR': 'Uma vida · sem bleedout' },
    d: { en: 'Lose all health and you die instantly. In a squad, allies revive you with 5 Resurgence Tokens (dropped by drones); solo, death is final for the run.',
         'pt-BR': 'Perdeu toda a vida, morre na hora. Em squad, aliados revivem com 5 Resurgence Tokens (dropados pelos drones); solo, a morte é definitiva.' } },
  { t: { en: 'Arbitration Drones', 'pt-BR': 'Arbitragem Drones' },
    d: { en: 'They tether nearby enemies and make them invulnerable (magenta aura). Up to 5 at once, 10 m range — kill them first. Punch-through, AoE or big-hitbox guns help.',
         'pt-BR': 'Prendem inimigos próximos e os deixam invulneráveis (aura magenta). Até 5 por vez, alcance 10 m — mate-os primeiro. Punch-through, AoE ou armas de hitbox grande ajudam.' } },
];

const ARB_DETAILS = [
  { t: { en: 'Rotation', 'pt-BR': 'Rotação' },
    d: { en: 'A new node every hour; only endless mission types. Enemies start at level 60–80.', 'pt-BR': 'Um nodo novo a cada hora; só tipos infinitos. Inimigos começam no nível 60–80.' } },
  { t: { en: 'Reward rounds', 'pt-BR': 'Rodadas de recompensa' },
    d: { en: 'Rotate AABBCC… — the longer you stay, the better the pool.', 'pt-BR': 'Giram em AABBCC… — quanto mais tempo, melhor o pool.' } },
  { t: { en: 'Vitus Essence', 'pt-BR': 'Vitus Essence' },
    d: { en: 'The currency: 1 per completed round (+6% drop from drones), plus 50 000 credits on completion.', 'pt-BR': 'A moeda: 1 por rodada concluída (+6% de drop nos drones), além de 50.000 créditos ao completar.' } },
  { t: { en: 'Rotation drops', 'pt-BR': 'Drops de rotação' },
    d: { en: 'Endo, Ayatan Sculptures, Arcanes, mods (Adaptation, Combat Discipline), Omni Forma.', 'pt-BR': 'Endo, Esculturas Ayatan, Arcanos, mods (Adaptation, Combat Discipline), Omni Forma.' } },
  { t: { en: 'Arbitration Honors shop', 'pt-BR': 'Loja Arbitragem Honors' },
    d: { en: 'Spend Vitus in the Arbiters of Hexis room of any Relay (no reputation needed): Galvanized mods, Archgun Rivens, Kuva, Grendel locators, cosmetics.', 'pt-BR': 'Gaste Vitus na sala dos Arbiters of Hexis em qualquer Relay (sem precisar de reputação): mods Galvanized, Archgun Rivens, Kuva, localizadores do Grendel, cosméticos.' } },
];

const ARB_TIPS = [
  { en: 'Kill the drones on sight — while they live, nearby enemies are immortal.', 'pt-BR': 'Mate os drones assim que aparecem — enquanto vivos, os inimigos perto ficam imortais.' },
  { en: 'Don’t go down: no bleedout, and reviving needs a squad + tokens. Bring survivability (Adaptation, dashes, healing).', 'pt-BR': 'Não vá ao chão: sem bleedout, e reviver exige squad + tokens. Leve sobrevivência (Adaptation, dashes, cura).' },
  { en: 'Galvanized mods (huge weapon upgrades) are the main reason to farm Vitus Essence here.', 'pt-BR': 'Os mods Galvanized (upgrades enormes de arma) são o principal motivo pra farmar Vitus Essence aqui.' },
];

