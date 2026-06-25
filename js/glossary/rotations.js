function renderRotationsSection() {
  const el = document.getElementById('rotations-gloss');
  if (!el) return;
  const loc = state.locale === 'pt-BR' ? 'pt-BR' : 'en';
  const L = o => (o && (o[loc] || o.en)) || '';
  const esc = relicEsc;

  const cycle = ['A', 'A', 'B', 'C'].map(x =>
    `<span class="rot-chip${x === 'C' ? ' is-c' : ''}">${x}</span>`).join('<span class="rot-arrow">›</span>');

  const rows = ROT_MISSIONS.map(r =>
    `<tr><td>${esc(L(r.m))}</td><td class="rot-iv">${esc(L(r.iv))}</td><td>${esc(L(r.a))}</td><td>${esc(L(r.b))}</td><td class="rot-c">${esc(L(r.c))}</td></tr>`).join('');

  const table = `<div class="crit-ex-wrap"><table class="rot-table"><thead><tr>`
    + `<th>${esc(L({ en: 'Mission', 'pt-BR': 'Missão' }))}</th>`
    + `<th>${esc(L({ en: 'Cadence', 'pt-BR': 'Cadência' }))}</th>`
    + `<th>A</th><th>B</th><th class="rot-c">C</th></tr></thead>`
    + `<tbody>${rows}</tbody></table></div>`;

  const special = ROT_SPECIAL.map(p =>
    `<div class="sc-term"><dt>${esc(L(p.t))}</dt><dd>${esc(L(p.d))}</dd></div>`).join('');

  const tips = ROT_TIPS.map(t => `<li>${esc(L(t))}</li>`).join('');

  const T = {
    cycle:   { en: 'The AABC cycle', 'pt-BR': 'O ciclo AABC' },
    when:    { en: 'When each rotation lands', 'pt-BR': 'Quando cada rotação cai' },
    special: { en: 'Special cases', 'pt-BR': 'Casos especiais' },
    tips:    { en: 'Good to know', 'pt-BR': 'Bom saber' },
  };

  el.innerHTML =
    `<h4 class="sc-h">${esc(L(T.cycle))}</h4>`
    + `<div class="rot-cycle">${cycle}<span class="rot-loop">↻</span></div>`
    + `<p class="rot-repeat">${esc(L({ en: '…then it repeats: A A B C A A B C…', 'pt-BR': '…e repete: A A B C A A B C…' }))}</p>`
    + `<h4 class="sc-h">${esc(L(T.when))}</h4>`
    + table
    + `<h4 class="sc-h">${esc(L(T.special))}</h4>`
    + `<dl class="sc-terms">${special}</dl>`
    + `<h4 class="sc-h">${esc(L(T.tips))}</h4>`
    + `<ul class="sc-tips">${tips}</ul>`;
}

// ── Mission Types glossary section ───────────────────────────────────────────
// Names + colors are inherited from MISSION_TYPES (the Star Chart filter source).

const MT_GROUPS = [
  { label: { en: 'Basics (single objective)', 'pt-BR': 'Básicas (objetivo único)' }, items: [
    { key: 'exterminate',    d: { en: 'Kill enemies until you hit the quota, then head to extraction.', 'pt-BR': 'Elimine inimigos até bater a cota e siga pra extração.' } },
    { key: 'capture',        d: { en: 'Track the target, take it down and capture it before it escapes.', 'pt-BR': 'Rastreie o alvo, derrube-o e capture antes que fuja.' } },
    { key: 'rescue',         d: { en: 'Break into the prison and escort the hostage out — alarms send guards to execute them.', 'pt-BR': 'Invada a prisão e escolte o refém até a saída — alarmes mandam guardas executá-lo.' } },
    { key: 'spy',            d: { en: 'Hack data vaults without tripping the alarm; stealth is rewarded.', 'pt-BR': 'Invada cofres de dados sem disparar o alarme; furtividade é recompensada.' } },
    { key: 'sabotage',       d: { en: 'Destroy or compromise an objective (reactor, cache); the method varies by tileset.', 'pt-BR': 'Destrua ou comprometa um objetivo (reator, cache); o método muda conforme o local.' } },
    { key: 'mobile_defense', d: { en: 'Plant the datamass at terminals and defend each for a timed countdown.', 'pt-BR': 'Plante o datamass nos terminais e defenda cada um por um tempo cronometrado.' } },
    { key: 'assassination',  d: { en: 'Fight the planet boss — usually drops Warframe parts.', 'pt-BR': 'Enfrente o chefe daquele planeta — costuma dropar peças de Warframe.' } },
  ] },
  { label: { en: 'Endless (A/B/C rotations)', 'pt-BR': 'Infinitas (rotações A/B/C)' }, items: [
    { key: 'survival',       d: { en: 'Stay alive by keeping life support up; the longer you last, the better the rewards.', 'pt-BR': 'Sobreviva mantendo o suporte de vida ativo; quanto mais tempo, melhores as recompensas.' } },
    { key: 'defense',        d: { en: 'Protect a target through waves of enemies.', 'pt-BR': 'Proteja um alvo ao longo de ondas de inimigos.' } },
    { key: 'interception',   d: { en: 'Capture and hold towers to fill your bar before the enemy fills theirs.', 'pt-BR': 'Capture e segure torres pra encher sua barra antes do inimigo.' } },
    { key: 'excavation',     d: { en: 'Feed excavators with power cells while defending them.', 'pt-BR': 'Alimente escavadoras com células de energia enquanto as defende.' } },
    { key: 'disruption',     d: { en: 'Defend conduits from Demolishers rushing to blow them up.', 'pt-BR': 'Defenda conduítes dos Demolishers que correm pra explodi-los.' } },
    { key: 'defection',      d: { en: 'Escort groups of Infested refugees, healing them along the way.', 'pt-BR': 'Escolte grupos de refugiados infestados, curando-os pelo caminho.' } },
    { key: 'mirror_defense', d: { en: 'A Defense variant with two parallel objectives; alternate between them and grab pickups to heal them.', 'pt-BR': 'Variante de Defesa com dois objetivos paralelos; alterne entre eles e colete itens pra curá-los.' } },
  ] },
  { label: { en: 'Special', 'pt-BR': 'Especiais' }, items: [
    { key: 'hijack',           d: { en: 'Drive a mobile objective to extraction, fueling it with your shields.', 'pt-BR': 'Conduza um objetivo móvel até a extração, abastecendo-o com seus escudos.' } },
    { key: 'arena',            d: { en: 'Fight waves of enemies in a closed arena (Rathuum).', 'pt-BR': 'Lute contra ondas de inimigos numa arena fechada (Rathuum).' } },
    { key: 'assault',          d: { en: 'A chain of linked objectives through an enemy base.', 'pt-BR': 'Uma sequência de objetivos encadeados por uma base inimiga.' } },
    { key: 'ascension',        d: { en: 'Corpus mission: defend the collector, charge the capsule up the elevator and escort it out.', 'pt-BR': 'Missão Corpus: defenda o coletor, carregue a cápsula no elevador e escolte até a saída.' } },
    { key: 'alchemy',          d: { en: 'Collect Amphors and toss them into the Crucible to combine primary elements into the target element.', 'pt-BR': 'Colete Amphors e jogue-os no Caldeirão pra combinar elementos primários no elemento-alvo.' } },
    { key: 'infested_salvage', d: { en: 'Keep consoles active while managing toxic Infested gas.', 'pt-BR': 'Mantenha consoles ativos enquanto lida com o gás tóxico infestado.' } },
  ] },
  { label: { en: 'Void (Zariman)', 'pt-BR': 'Void (Zariman)' }, spoiler: true, items: [
    { key: 'void_cascade',     d: { en: 'Use Operator Void damage to purge possessed Exolizers and stop the cascade.', 'pt-BR': 'Use o dano Void do Operador pra purgar Exolizers possuídos e evitar o colapso.' } },
    { key: 'void_flood',       d: { en: 'Gather Vitoplast and deposit it into Void Ruptures to seal them.', 'pt-BR': 'Recolha Vitoplast e deposite nas Rupturas do Void pra selá-las.' } },
    { key: 'void_armageddon',  d: { en: 'Defend the relic and Exodampers from enemy waves, then defeat the Void Angel that ends each round.', 'pt-BR': 'Defenda a relíquia e os Exodampers das ondas e derrote o Anjo do Void que encerra cada rodada.' } },
  ] },
  { label: { en: 'Archwing & Railjack', 'pt-BR': 'Archwing & Railjack' }, items: [
    { key: 'archwing',    d: { en: 'Aerial / space combat flying your Archwing.', 'pt-BR': 'Combate aéreo/espacial pilotando seu Archwing.' } },
    { key: 'pursuit',     d: { en: 'Archwing mission: chase down and disable a fleeing Grineer Courier ship to grab its black box.', 'pt-BR': 'Missão de Archwing: persiga e desative uma nave Courier Grineer em fuga pra pegar a caixa-preta.' } },
    { key: 'free_flight', d: { en: 'Free Archwing flight to practice with no objective.', 'pt-BR': 'Voo livre de Archwing pra treinar sem objetivo.' } },
    { key: 'skirmish',    d: { en: 'Railjack: clear enemy fighters and bases in space and on foot.', 'pt-BR': 'Railjack: limpe esquadrilhas e bases inimigas no espaço e a pé.' } },
    { key: 'volatile',    d: { en: 'Railjack: a Skirmish variant with reactor sabotage inside the enemy ship.', 'pt-BR': 'Railjack: variante de Escaramuça com sabotagem de reator dentro da nave inimiga.' } },
    { key: 'orphix',      d: { en: 'Railjack: destroy Orphix sentients using Necramechs.', 'pt-BR': 'Railjack: destrua sentinelas Orphix usando Necramechs.' } },
  ] },
  { label: { en: 'Open worlds', 'pt-BR': 'Mundo aberto' }, items: [
    { key: 'free_roam', d: { en: 'Open-world areas to explore freely (Cetus, Fortuna, Necralisk).', 'pt-BR': 'Áreas de mundo aberto pra explorar livremente (Cetus, Fortuna, Necralisk).' } },
    { key: 'bounty',    d: { en: 'Series of open-world objectives handed out by the local syndicates.', 'pt-BR': 'Séries de objetivos no mundo aberto dadas pelos sindicatos locais.' } },
  ] },
  { label: { en: 'Region-specific modes', 'pt-BR': 'Modos de região' }, items: [
    { key: 'shrine_defense',   d: { en: 'Earth mission: protect the Ostrons, bring offerings to the Koumei Shrine for buffs, and beat the Infested Oni boss.', 'pt-BR': 'Missão na Terra: proteja os Ostron, leve oferendas ao Santuário de Koumei por bônus e derrote o chefe Oni Infestado.' } },
    { key: 'abyssal_zone',     d: { en: 'Exterminate on Ceres: wipe out Grineer and haul cursed Orokin Defixios to extraction while random debuffs hit.', 'pt-BR': 'Exterminação em Ceres: elimine Grineer e leve Defixios Orokin amaldiçoados à extração enquanto sofre penalidades aleatórias.' } },
    { key: 'follies_hunt',     d: { en: 'In the ruined Vesper Relay on Venus, gather Paint to finish three Shadowgraph canvases while Follie hunts you.', 'pt-BR': 'Na arruinada Vesper Relay em Vênus, junte Tinta pra completar três telas de Shadowgraph enquanto Follie te caça.' } },
  ] },
  { label: { en: 'Höllvania (1999)', 'pt-BR': 'Höllvania (1999)' }, spoiler: true, items: [
    { key: 'faceoff',          d: { en: 'PvPvE mode: two squads of four race through Höllvania completing objectives while fighting Scaldra and Techrot.', 'pt-BR': 'Modo PvPvE: dois times de quatro disputam em Höllvania completando objetivos enquanto lutam contra Scaldra e Techrot.' } },
    { key: 'hell_scrub',       d: { en: 'A Survival twist: cleanse spore-infested zones by destroying spores before they grow into Eximus.', 'pt-BR': 'Variante de Sobrevivência: limpe zonas infestadas por esporos, destruindo-os antes que virem Eximus.' } },
    { key: 'legacyte_harvest', d: { en: 'An endless Capture: help the Kavat Kalymos lure out and capture Techrot Legacytes.', 'pt-BR': 'Captura infinita: ajude o Kavat Kalymos a atrair e capturar Legacytes Techrot.' } },
    { key: 'stage_defense',    d: { en: 'Defense in Solstice Square: protect the musician Flare from waves of Scaldra and Techrot.', 'pt-BR': 'Defesa na Solstice Square: proteja a musicista Flare de ondas de Scaldra e Techrot.' } },
  ] },
  { label: { en: 'Dark Refractory', 'pt-BR': 'Dark Refractory' }, spoiler: true, items: [
    { key: 'descendia',        d: { en: 'Weekly run via the Dark Refractory: descend a 21-floor tower of Hell, clearing each floor before facing the boss Roathe.', 'pt-BR': 'Partida semanal pelo Dark Refractory: desça uma torre do Inferno de 21 andares, vencendo cada andar antes de encarar o chefe Roathe.' } },
    { key: 'perita_rebellion', d: { en: 'Weekly run in the Dark Refractory: clear as many Orders as you can in 12 minutes, stacking buffs, then fight a chosen boss.', 'pt-BR': 'Partida semanal no Dark Refractory: complete o máximo de Orders em 12 minutos, acumulando bônus, e enfrente um chefe escolhido.' } },
  ] },
  { label: { en: 'Weekly endgame (Archimedea)', 'pt-BR': 'Endgame semanal (Archimedea)' }, spoiler: true, items: [
    { key: 'temporal_archimedea', d: { en: 'Höllvania weekly endgame: three back-to-back high-difficulty missions vs Scaldra and Techrot for Research Points and Archon Shards.', 'pt-BR': 'Endgame semanal de Höllvania: três missões seguidas de alta dificuldade contra Scaldra e Techrot por Pontos de Pesquisa e Archon Shards.' } },
    { key: 'deep_archimedea',     d: { en: 'Sanctum Anatomica weekly endgame (Deimos): three high-difficulty missions vs The Murmur, with optional loadout restrictions and modifiers for better rewards.', 'pt-BR': 'Endgame semanal do Sanctum Anatomica (Deimos): três missões de alta dificuldade contra The Murmur, com restrições de loadout e modificadores opcionais por recompensas melhores.' } },
  ] },
];

const MT_NOTE = { en: 'These are the mission types tracked by the Star Chart filters — Digital Extremes adds new ones with each region and update.', 'pt-BR': 'Estes são os tipos de missão acompanhados pelos filtros do Mapa Estelar — a Digital Extremes adiciona novos a cada região e atualização.' };

let _mtGlossBound = false;

