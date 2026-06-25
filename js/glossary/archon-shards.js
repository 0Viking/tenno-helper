// Glossário — Archon Shards (Fragmentos de Archon). Dados da wiki (wiki.warframe.com/w/Archon_Shard).
// Tauforged = ×1,5 sobre a versão normal. Cores fundidas (Topaz/Violet/Emerald) via Coalescent Fusion.
const SHARD_TYPES = [
  { key: 'crimson', ac: '#e0473a', ic: 'CrimsonArchonShard.png?f2048', tic: 'TauforgedCrimsonArchonShard.png?7b876',
    name: { en: 'Crimson', 'pt-BR': 'Carmesim' }, cat: { en: 'Offense & abilities', 'pt-BR': 'Ofensiva & habilidades' },
    effects: [
      { e: { en: 'Melee Critical Damage', 'pt-BR': 'Dano de Crítico (corpo a corpo)' }, n: '+25%', t: '+37.5%' },
      { e: { en: 'Primary Status Chance', 'pt-BR': 'Chance de Status (primária)' }, n: '+25%', t: '+37.5%' },
      { e: { en: 'Secondary Critical Chance', 'pt-BR': 'Chance de Crítico (secundária)' }, n: '+25%', t: '+37.5%' },
      { e: { en: 'Ability Strength', 'pt-BR': 'Força de Habilidade' }, n: '+10%', t: '+15%' },
      { e: { en: 'Ability Duration', 'pt-BR': 'Duração de Habilidade' }, n: '+10%', t: '+15%' },
    ] },
  { key: 'amber', ac: '#e0a93a', ic: 'AmberArchonShard.png?5eaa1', tic: 'TauforgedAmberArchonShard.png?f6d69',
    name: { en: 'Amber', 'pt-BR': 'Âmbar' }, cat: { en: 'Energy & mobility', 'pt-BR': 'Energia & mobilidade' },
    effects: [
      { e: { en: 'Max Energy filled on spawn', 'pt-BR': 'Energia máx. preenchida ao surgir' }, n: '+30%', t: '+45%' },
      { e: { en: 'Health Orb Effectiveness', 'pt-BR': 'Eficácia de Orbe de Vida' }, n: '+100%', t: '+150%' },
      { e: { en: 'Energy Orb Effectiveness', 'pt-BR': 'Eficácia de Orbe de Energia' }, n: '+50%', t: '+75%' },
      { e: { en: 'Casting Speed', 'pt-BR': 'Velocidade de Conjuração' }, n: '+25%', t: '+37.5%' },
      { e: { en: 'Parkour Velocity', 'pt-BR': 'Velocidade de Parkour' }, n: '+15%', t: '+22.5%' },
    ] },
  { key: 'azure', ac: '#3a8fe0', ic: 'AzureArchonShard.png?e6241', tic: 'TauforgedAzureArchonShard.png?3ca85',
    name: { en: 'Azure', 'pt-BR': 'Azure' }, cat: { en: 'Survivability', 'pt-BR': 'Sobrevivência' },
    effects: [
      { e: { en: 'Max Health', 'pt-BR': 'Vida máxima' }, n: '+150', t: '+225' },
      { e: { en: 'Shield Capacity', 'pt-BR': 'Capacidade de Escudo' }, n: '+150', t: '+225' },
      { e: { en: 'Max Energy', 'pt-BR': 'Energia máxima' }, n: '+50', t: '+75' },
      { e: { en: 'Armor', 'pt-BR': 'Armadura' }, n: '+150', t: '+225' },
      { e: { en: 'Health Regen / s', 'pt-BR': 'Regen. de Vida / s' }, n: '+5', t: '+7.5' },
    ] },
  { key: 'topaz', ac: '#f0c020', ic: 'TopazArchonShard.png?fe934', tic: 'TauforgedTopazArchonShard.png?685b1',
    name: { en: 'Topaz', 'pt-BR': 'Topázio' }, cat: { en: 'Explosivo · Ígneo · Radioativo', 'pt-BR': 'Explosivo · Ígneo · Radioativo' },
    fused: true, from: ['crimson', 'amber'],
    effects: [
      { e: { en: 'Max Health per Blast-damage kill', 'pt-BR': 'Vida máx. por abate com dano Explosivo' }, n: { en: '+1 (max 300)', 'pt-BR': '+1 (máx 300)' }, t: { en: '+2 (max 450)', 'pt-BR': '+2 (máx 450)' } },
      { e: { en: 'Shield regen on Blast kill', 'pt-BR': 'Regen. de escudo em abate Explosivo' }, n: '+5', t: '+7.5' },
      { e: { en: 'Secondary Crit Chance per Heat-status kill', 'pt-BR': 'Chance de Crít. (sec.) por abate c/ status Ígneo' }, n: { en: '+1% (max 50%)', 'pt-BR': '+1% (máx 50%)' }, t: { en: '+1.5% (max 75%)', 'pt-BR': '+1,5% (máx 75%)' } },
      { e: { en: 'Ability Damage on enemies affected by Radiation Status', 'pt-BR': 'Dano de Habilidade em inimigos afetados por status Radioativo' }, n: '+10%', t: '+15%' },
    ] },
  { key: 'violet', ac: '#a25cf0', ic: 'VioletArchonShard.png?033e3', tic: 'TauforgedVioletArchonShard.png?72845',
    name: { en: 'Violet', 'pt-BR': 'Violeta' }, cat: { en: 'Electricity · melee crit · conversion', 'pt-BR': 'Elétrico · crít. corpo a corpo · conversão' },
    fused: true, from: ['crimson', 'azure'],
    effects: [
      { e: { en: 'Ability Damage on enemies affected by Electricity Status', 'pt-BR': 'Dano de Habilidade em inimigos afetados por status Elétrico' }, n: '+10%', t: '+15%' },
      { e: { en: 'Primary Electricity Damage', 'pt-BR': 'Dano Elétrico (primária)' }, n: '+30%', t: '+45%',
        sub: { e: { en: '+ per Crimson/Azure/Violet shard equipped', 'pt-BR': '+ por fragmento Carmesim/Azure/Violeta equipado' }, n: '+10%', t: '+15%' } },
      { e: { en: 'Melee Critical Damage (doubles if Max Energy > 500)', 'pt-BR': 'Dano de Crít. (corpo a corpo; dobra se Energia máx. > 500)' }, n: '+25%', t: '+37.5%' },
      { e: { en: 'Health pickups give Energy / Energy give Health', 'pt-BR': 'Orbe de Vida dá Energia / de Energia dá Vida' }, n: '+20%', t: '+30%' },
    ] },
  { key: 'emerald', ac: '#3ec98a', ic: 'EmeraldArchonShard.png?d8f47', tic: 'TauforgedEmeraldArchonShard.png?7a4e4',
    name: { en: 'Emerald', 'pt-BR': 'Esmeralda' }, cat: { en: 'Toxin · Corrosive', 'pt-BR': 'Tóxico · Corrosivo' },
    fused: true, from: ['amber', 'azure'],
    effects: [
      { e: { en: 'Toxin Status damage', 'pt-BR': 'Dano de status Tóxico' }, n: '+30%', t: '+45%' },
      { e: { en: 'Health recovered on Toxin-status damage', 'pt-BR': 'Vida recuperada ao causar dano de status Tóxico' }, n: '+2', t: '+3' },
      { e: { en: 'Ability Damage on enemies affected by Corrosion Status', 'pt-BR': 'Dano de Habilidade em inimigos afetados por status Corrosivo' }, n: '+10%', t: '+15%' },
      { e: { en: 'Max Corrosion Status stacks', 'pt-BR': 'Máx. de acúmulos de status Corrosivo' }, n: '+2', t: '+3' },
    ] },
];

const SHARD_DEIMOS = { en: 'Deimos · Sanctum', 'pt-BR': 'Deimos · Sanctum' };
const SHARD_SOURCES = [
  { t: { en: 'Archon Hunts', 'pt-BR': 'Caçada aos Archons' }, cad: { en: 'weekly', 'pt-BR': 'semanal' },
    d: { en: 'One guaranteed shard per weekly hunt — 80% normal, 20% Tauforged (the Tauforged chance climbs +20% each week you don’t get one, ~40% effective). Crimson from Amar, Amber from Nira, Azure from Boreal.', 'pt-BR': 'Um fragmento garantido por caçada semanal — 80% normal, 20% Tauforged (a chance de Tauforged sobe +20% a cada semana sem tirar, ~40% efetivo). Carmesim do Amar, Âmbar da Nira, Azure do Boreal.' },
    link: { gloss: 'archon-hunts', label: { en: 'Archon Hunts', 'pt-BR': 'Caçada aos Archons' } } },
  { t: { en: 'Netracells', 'pt-BR': 'Netracells' }, cad: { en: 'weekly', 'pt-BR': 'semanal' },
    d: { en: 'Sanctum Anatomica, 5 runs a week: 52.5% normal / 12.5% Tauforged each (a random Crimson/Amber/Azure).', 'pt-BR': 'Sanctum Anatomica, 5 partidas por semana: 52,5% normal / 12,5% Tauforged cada (um Carmesim/Âmbar/Azure aleatório).' },
    link: { star: 'deimos', label: SHARD_DEIMOS, f: ['bounty'] } },
  { t: { en: 'Deep Archimedea', 'pt-BR': 'Deep Archimedea' }, cad: { en: 'weekly', 'pt-BR': 'semanal' },
    d: { en: 'Weekly endgame challenge from the Sanctum Anatomica — harder tiers reward more Tauforged (the Legendary pool is 50% Tauforged).', 'pt-BR': 'Desafio semanal de fim de jogo no Sanctum Anatomica — tiers mais difíceis dão mais Tauforged (o pool Lendário é 50% Tauforged).' },
    link: { star: 'deimos', label: SHARD_DEIMOS, f: ['bounty'] } },
  { t: { en: 'Temporal Archimedea', 'pt-BR': 'Temporal Archimedea' }, cad: { en: 'weekly', 'pt-BR': 'semanal' },
    d: { en: 'The 1999 weekly endgame — can reward Fused (Topaz/Violet/Emerald) and Tauforged shards directly.', 'pt-BR': 'O endgame semanal de 1999 — pode dar fragmentos Fundidos (Topázio/Violeta/Esmeralda) e Tauforged direto.' },
    link: { star: 'hollvania', label: { en: 'Höllvania', 'pt-BR': 'Höllvania' }, f: ['temporal_archimedea'] } },
  { t: { en: 'Bird 3 (Cavia)', 'pt-BR': 'Bird 3 (Cavia)' }, cad: { en: 'vendor', 'pt-BR': 'loja' },
    d: { en: 'At Rank 5 (Illuminate) in the Sanctum Anatomica, buy one rotating Crimson/Amber/Azure each week for 30,000 Standing.', 'pt-BR': 'No Rank 5 (Illuminate) do Sanctum Anatomica, compre um Carmesim/Âmbar/Azure rotativo por semana por 30.000 de Reputação.' },
    link: { star: 'deimos', label: SHARD_DEIMOS, f: ['bounty'] } },
  { t: { en: 'Other', 'pt-BR': 'Outros' }, cad: { en: 'various', 'pt-BR': 'vários' },
    d: { en: 'The 1999 Calendar (normal shards) and Steel Path’s The Descendia (after Infernum 21).', 'pt-BR': 'O Calendário de 1999 (fragmentos normais) e A Descendia no Percurso de Aço (após Infernum 21).' } },
];

// Coalescent Fusion: 2 primárias → 1 fundida (50 Stela). Ascent: 3 iguais → 1 Tauforged (100 Stela).
const COALESCENT = [
  { a: 'crimson', b: 'amber', out: 'topaz' },
  { a: 'crimson', b: 'azure', out: 'violet' },
  { a: 'amber', b: 'azure', out: 'emerald' },
];

// Elementos citados nos efeitos → ícone local + cor (do STATUS_EFFECTS). Usado pra
// decorar as palavras (Blast/Heat/Radiation/Electricity/Toxin/Corrosion) nas tabelas.
const SHARD_ELEMS = [
  { ic: 'blast.png',       color: '#9c4144', en: ['Blast'],                  pt: ['Explosivo'] },
  { ic: 'heat.png',        color: '#e3702f', en: ['Heat'],                   pt: ['Ígneo'] },
  { ic: 'radiation.png',   color: '#f4e925', en: ['Radiation'],             pt: ['Radioativo'] },
  { ic: 'electricity.png', color: '#b62fe3', en: ['Electricity'],           pt: ['Elétrico'] },
  { ic: 'toxin.png',       color: '#2fe33a', en: ['Toxin'],                 pt: ['Tóxico'] },
  { ic: 'corrosive.png',   color: '#b7c91f', en: ['Corrosion', 'Corrosive'], pt: ['Corrosivo'] },
];

function renderArchonShardsSection() {
  const el = document.getElementById('archon-shards-gloss');
  if (!el) return;
  const loc = state.locale === 'pt-BR' ? 'pt-BR' : 'en';
  const L = o => (o && (o[loc] || o.en)) || '';
  const esc = relicEsc;
  const W = 'https://wiki.warframe.com/images/';
  const SH = Object.fromEntries(SHARD_TYPES.map(s => [s.key, s]));
  const numLoc = s => (loc === 'pt-BR' ? String(s).replace(/\./g, ',') : String(s));
  const fmt = v => (v == null ? '—' : (typeof v === 'object' ? L(v) : numLoc(v)));
  const img = (s, tau) => `<img class="shard-ic${tau ? ' is-tau' : ''}" src="${W}${tau ? s.tic : s.ic}" alt="" loading="lazy" onerror="this.style.visibility='hidden'">`;
  // Colore os nomes de elemento já escapados e prefixa o ícone local do status.
  const decorate = html => {
    SHARD_ELEMS.forEach(e => (loc === 'pt-BR' ? e.pt : e.en).forEach(w => {
      const re = new RegExp('(^|[^\\p{L}])(' + w + ')(?![\\p{L}])', 'gu');
      html = html.replace(re, (m, pre, word) =>
        `${pre}<span class="shard-el" style="color:${e.color}">`
        + `<img class="shard-el-ic" src="assets/icons/status/${e.ic}" alt="" onerror="this.style.display='none'">${word}</span>`);
    }));
    return html;
  };

  const T = {
    what: { en: 'What they are', 'pt-BR': 'O que são' },
    intro: { en: 'Archon Shards are permanent stat boosts you socket into a Warframe — they never wear off, but you can pull them out and re-slot them anytime (for a small Helminth cost, below). Every frame has 5 shard slots, unlocked with the Helminth Archon Shard Segment (blueprint from the Veilbreaker quest), and you can stack the same bonus across several shards.', 'pt-BR': 'Fragmentos de Archon são bônus permanentes de atributo que você encaixa num Warframe — não expiram, mas dá pra removê-los e reencaixá-los quando quiser (por um pequeno custo no Helminth, abaixo). Todo frame tem 5 slots de fragmento, desbloqueados com o Segmento de Fragmento de Archon do Helminth (diagrama da quest Veilbreaker), e você pode empilhar o mesmo bônus em vários fragmentos.' },
    theShards: { en: 'The six shards', 'pt-BR': 'Os seis fragmentos' },
    fusedTag: { en: 'fused', 'pt-BR': 'fundido' },
    tau: { en: 'Tauforged shards (brighter, with a crystalline glow) give 50% stronger bonuses than the normal version — every value in the Tauforged column is ×1.5.', 'pt-BR': 'Fragmentos Tauforged (mais brilhantes, com brilho cristalino) dão bônus 50% mais fortes que a versão normal — cada valor na coluna Tauforged é ×1,5.' },
    effects: { en: 'Effects (normal vs Tauforged)', 'pt-BR': 'Efeitos (normal vs Tauforged)' },
    effCol: { en: 'Effect', 'pt-BR': 'Efeito' },
    normCol: { en: 'Normal', 'pt-BR': 'Normal' },
    tauCol: { en: 'Tauforged', 'pt-BR': 'Tauforged' },
    pick: { en: 'Each socketed shard grants one of these — your pick.', 'pt-BR': 'Cada fragmento encaixado concede um destes — você escolhe.' },
    howToGet: { en: 'How to get them', 'pt-BR': 'Como conseguir' },
    fusion: { en: 'Fusion (Coalescent & Ascent)', 'pt-BR': 'Fusão (Coalescent & Ascent)' },
    fusionReq: { en: 'Fusion needs the Helminth Coalescent Segment (blueprint from Bird 3 at Rank 2 — Researcher, 30,000 Standing). Only normal+normal or Tauforged+Tauforged can be fused, and fusion is permanent.', 'pt-BR': 'A fusão precisa do Segmento Coalescent do Helminth (diagrama do Bird 3 no Rank 2 — Researcher, 30.000 de Reputação). Só dá pra fundir normal+normal ou Tauforged+Tauforged, e a fusão é permanente.' },
    coalescent: { en: 'Coalescent Fusion — two primaries into a fused color:', 'pt-BR': 'Coalescent Fusion — duas primárias numa cor fundida:' },
    ascentSub: { en: 'Ascent Fusion — three of the same color into one Tauforged:', 'pt-BR': 'Ascent Fusion — três da mesma cor em um Tauforged:' },
    stela: { en: 'Stela & unsocketing', 'pt-BR': 'Stela & remoção' },
    stelaNote: { en: 'Stela is a resource from Albrecht’s Laboratories, spent on fusion: 50 for Coalescent, 100 for Ascent. Removing a socketed shard refunds it but costs Helminth secretions — 15% (30% for Tauforged), each color drawing a different secretion.', 'pt-BR': 'Stela é um recurso dos Laboratórios de Albrecht, gasto na fusão: 50 no Coalescent, 100 no Ascent. Remover um fragmento encaixado o devolve, mas custa secreções do Helminth — 15% (30% pra Tauforged), cada cor puxando uma secreção diferente.' },
  };

  const cards = SHARD_TYPES.map(s =>
    `<div class="shard-card" style="--ac:${s.ac}">`
    + `<div class="shard-card-ics">${img(s)}${img(s, true)}</div>`
    + `<span class="shard-card-name">${esc(L(s.name))}</span>`
    + `<span class="shard-card-cat">${esc(L(s.cat))}</span>`
    + (s.fused
      ? `<span class="shard-card-recipe"><span class="shard-card-fusedtag">${esc(L(T.fusedTag))}</span>${img(SH[s.from[0]])}<span>+</span>${img(SH[s.from[1]])}</span>`
      : '')
    + `</div>`).join('');

  const tables = SHARD_TYPES.map(s => {
    const sub = (txt, cls) => `<br><span class="shard-sub${cls ? ' ' + cls : ''}">${txt}</span>`;
    const rows = s.effects.map(ef => {
      const se = ef.sub ? sub(decorate(esc(L(ef.sub.e)))) : '';
      const sn = ef.sub ? sub(esc(fmt(ef.sub.n))) : '';
      const st = ef.sub ? sub(esc(fmt(ef.sub.t))) : '';
      return `<tr><td>${decorate(esc(L(ef.e)))}${se}</td><td>${esc(fmt(ef.n))}${sn}</td>`
        + `<td class="is-tau">${esc(fmt(ef.t))}${st}</td></tr>`;
    }).join('');
    return `<div class="shard-tbl-wrap"><table class="shard-tbl" style="--ac:${s.ac}">`
      + `<caption>${img(s)}<span>${esc(L(s.name))}</span><em>${esc(L(s.cat))}</em></caption>`
      + `<thead><tr><th>${esc(L(T.effCol))}</th><th>${esc(L(T.normCol))}</th><th class="is-tau">${esc(L(T.tauCol))}</th></tr></thead>`
      + `<tbody>${rows}</tbody></table></div>`;
  }).join('');

  const sources = SHARD_SOURCES.map(s => {
    const cad = s.cad ? `<span class="shard-src-cad">${esc(L(s.cad))}</span>` : '';
    const flt = s.link && s.link.f ? `, [${s.link.f.map(x => `'${x}'`).join(',')}]` : '';
    const onclick = s.link && (s.link.star ? `goToStarChart('${s.link.star}'${flt})` : `goToGlossarySection('${s.link.gloss}')`);
    const link = s.link
      ? `<button type="button" class="shard-src-link" onclick="${onclick}">📍 ${esc(L(s.link.label))} <span class="shard-src-arrow">→</span></button>`
      : '';
    return `<div class="shard-src-card">`
      + `<div class="shard-src-head"><img class="shard-src-ico" src="${W}ArchonShard.png?a7ee5" alt="" loading="lazy" onerror="this.style.display='none'">`
      + `<span class="shard-src-title">${esc(L(s.t))}</span>${cad}</div>`
      + `<p class="shard-src-desc">${esc(L(s.d))}</p>${link}</div>`;
  }).join('');

  const stelaIco = `<img class="gloss-ico" src="${W}Stela.png?83c7c" alt="" onerror="this.style.display='none'">`;
  const recipes = COALESCENT.map(r =>
    `<div class="shard-fuse">${img(SH[r.a])}<span class="shard-fuse-op">+</span>${img(SH[r.b])}`
    + `<span class="shard-fuse-op">→</span>${img(SH[r.out])}<b class="shard-fuse-out">${esc(L(SH[r.out].name))}</b>`
    + `<span class="shard-stela">${stelaIco}50 Stela</span></div>`).join('');
  // Ascent: 3 da mesma cor → 1 Tauforged. Um exemplo por cor (2 col × 3 linhas).
  const ascentCells = SHARD_TYPES.map(s =>
    `<div class="shard-fuse">${img(s)}<span class="shard-fuse-op">+</span>${img(s)}<span class="shard-fuse-op">+</span>${img(s)}`
    + `<span class="shard-fuse-op">→</span>${img(s, true)}`
    + `<span class="shard-stela">${stelaIco}100 Stela</span></div>`).join('');

  el.innerHTML =
    `<h4 class="sc-h">${esc(L(T.what))}</h4>`
    + `<div class="gloss-callout"><span class="gloss-callout-ico" aria-hidden="true">💠</span><span class="gloss-callout-text">${esc(L(T.intro))}</span></div>`
    + `<h4 class="sc-h">${esc(L(T.theShards))}</h4>`
    + `<div class="shard-grid">${cards}</div>`
    + `<div class="gloss-callout"><span class="gloss-callout-ico" aria-hidden="true">✨</span><span class="gloss-callout-text">${esc(L(T.tau))}</span></div>`
    + `<h4 class="sc-h">${esc(L(T.effects))}</h4>`
    + `<p class="sc-sub">${esc(L(T.pick))}</p>`
    + `<div class="shard-tables">${tables}</div>`
    + `<h4 class="sc-h">${esc(L(T.howToGet))}</h4>`
    + `<div class="shard-src-grid">${sources}</div>`
    + `<h4 class="sc-h">${esc(L(T.fusion))}</h4>`
    + `<div class="gloss-callout"><span class="gloss-callout-ico" aria-hidden="true">⚗️</span><span class="gloss-callout-text">${esc(L(T.fusionReq))}</span></div>`
    + `<div class="shard-fuse-cols">`
    + `<div class="shard-fuse-col"><p class="sc-sub">${esc(L(T.coalescent))}</p><div class="shard-fuse-list">${recipes}</div></div>`
    + `<div class="shard-fuse-col"><p class="sc-sub">${esc(L(T.ascentSub))}</p><div class="shard-ascent-grid">${ascentCells}</div></div>`
    + `</div>`
    + `<h4 class="sc-h">${esc(L(T.stela))}</h4>`
    + `<div class="gloss-callout"><span class="gloss-callout-ico" aria-hidden="true">⬡</span><span class="gloss-callout-text">${stelaIco}${esc(L(T.stelaNote))}</span></div>`;
}
