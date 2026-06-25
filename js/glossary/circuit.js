function renderCircuitSection() {
  const el = document.getElementById('circuit-gloss');
  if (!el) return;
  const loc = state.locale === 'pt-BR' ? 'pt-BR' : 'en';
  const L = o => (o && (o[loc] || o.en)) || '';
  const esc = relicEsc;

  const versions = CIRCUIT_VERSIONS.map(v =>
    `<div class="sc-jstep"><span class="sc-jstep-t">${esc(L(v.t))}</span><span class="sc-jstep-d">${esc(L(v.d))}</span></div>`
  ).join('');

  const how = CIRCUIT_HOW.map(p =>
    `<div class="sc-term"><dt>${esc(L(p.t))}</dt><dd>${esc(L(p.d))}</dd></div>`
  ).join('');

  const tips = CIRCUIT_TIPS.map(t => `<li>${esc(L(t))}</li>`).join('');

  const T = {
    ver:  { en: 'Two versions', 'pt-BR': 'Duas versões' },
    how:  { en: 'How it works', 'pt-BR': 'Como funciona' },
    tips: { en: 'Good to know', 'pt-BR': 'Bom saber' },
  };

  el.innerHTML =
    `<h4 class="sc-h">${esc(L(T.ver))}</h4>`
    + `<div class="sc-jsteps sc-jsteps-2">${versions}</div>`
    + `<h4 class="sc-h">${esc(L(T.how))}</h4>`
    + `<dl class="sc-terms">${how}</dl>`
    + `<h4 class="sc-h">${esc(L(T.tips))}</h4>`
    + `<ul class="sc-tips">${tips}</ul>`;
}

// ── Syndicates glossary section ──────────────────────────────────────────────

const SYN_HOW = [
  { t: { en: 'Pledge & Sigil', 'pt-BR': 'Compromisso & Sigilo' },
    d: { en: 'Pledge to a syndicate and equip its Sigil — 15% of the affinity you earn becomes its Standing. Daily cap is 16,000 + (500 × MR).', 'pt-BR': 'Comprometa-se com um sindicato e equipe o Sigilo dele — 15% da afinidade que você ganha vira Reputação pra ele. O cap diário é 16.000 + (500 × MR).' } },
  { t: { en: 'Extra Standing', 'pt-BR': 'Reputação extra' },
    d: { en: 'Daily Syndicate Alerts and Medallions found in missions give Standing beyond the daily cap.', 'pt-BR': 'Alertas diários e Medalhões achados em missão dão Reputação além do cap diário.' } },
  { t: { en: 'Ranking up', 'pt-BR': 'Subir de rank' },
    d: { en: 'Spend Standing plus a sacrifice of items; all Standing is consumed and you pick one free gift.', 'pt-BR': 'Gaste Reputação + um sacrifício de itens; toda a Reputação é consumida e você escolhe um presente grátis.' } },
  { t: { en: 'Offerings', 'pt-BR': 'Ofertas' },
    d: { en: 'Sigils, relic packs, weapon augments and — at higher ranks — Warframe Augment Mods and syndicate weapons.', 'pt-BR': 'Sigilos, packs de relíquia, augmentos de arma e — nos ranks altos — Mods de Augment de Warframe e armas exclusivas do sindicato.' } },
];

const SYN_IMG = 'https://wiki.warframe.com/images/';
// cores oficiais da wiki (bg = fundo, c = fontcolor/nome). hexágono: aliado +50% / oposto −50% / inimigo −100%
const SYN_BASE = [
  { n: 'Steel Meridian', bg: '#2C3F46', c: '#f9bc93', icon: SYN_IMG + 'SteelIcon(xPink).png?58e3f',
    d: { en: 'Grineer deserters protecting what remains of the colonies.', 'pt-BR': 'Desertores Grineer protegendo o que resta das colônias.' },
    ally: 'Red Veil', opp: 'New Loka', enemy: 'The Perrin Sequence' },
  { n: 'Arbiters of Hexis', bg: '#374045', c: '#cfe1e4', icon: SYN_IMG + 'ArbitarIcon(xGrey).png?f8712',
    d: { en: 'Seekers of the truth behind Tenno potential.', 'pt-BR': 'Buscam a verdade por trás do potencial dos Tenno.' },
    ally: 'Cephalon Suda', opp: 'The Perrin Sequence', enemy: 'Red Veil' },
  { n: 'Cephalon Suda', bg: '#3D375D', c: '#fbfed0', icon: SYN_IMG + 'CephalonIconLightGold.png?0cbc3',
    d: { en: 'A vast consciousness hungry for knowledge.', 'pt-BR': 'Uma vasta consciência ávida por conhecimento.' },
    ally: 'Arbiters of Hexis', opp: 'Red Veil', enemy: 'New Loka' },
  { n: 'The Perrin Sequence', bg: '#3D4963', c: '#92dbff', icon: SYN_IMG + 'PerrinSequenceIconBlue.png?0cbc3',
    d: { en: 'Merchants restoring order through prosperity.', 'pt-BR': 'Mercadores que restauram a ordem pela prosperidade.' },
    ally: 'New Loka', opp: 'Arbiters of Hexis', enemy: 'Steel Meridian' },
  { n: 'Red Veil', bg: '#3D1839', c: '#fe8a88', icon: SYN_IMG + 'RedVeilIcon(xRed).png?f8712',
    d: { en: 'Purge the system’s corruption — at any cost.', 'pt-BR': 'Purgam a corrupção do sistema — a qualquer custo.' },
    ally: 'Steel Meridian', opp: 'Cephalon Suda', enemy: 'Arbiters of Hexis' },
  { n: 'New Loka', bg: '#2A3C2E', c: '#c2ffbf', icon: SYN_IMG + 'LokaIcon(xGreen).png?58e3f',
    d: { en: 'Seek a pure humanity and a repopulated Earth.', 'pt-BR': 'Buscam uma humanidade pura e a Terra repovoada.' },
    ally: 'The Perrin Sequence', opp: 'Steel Meridian', enemy: 'Cephalon Suda' },
];

const SYN_NEUTRAL = [
  { n: 'Cephalon Simaris', bg: '#5F3C0D', c: '#ebd18f', icon: SYN_IMG + 'SimarisSigil(xYellow)(xLight).png?3e3ec', d: { en: 'Sanctuary — Synthesis scanning.', 'pt-BR': 'Santuário — escaneamento (Synthesis).' } },
  { n: 'Conclave',         bg: '#0a0a0a', c: '#ffffff', icon: SYN_IMG + 'ConclaveSigil(SxWhite).png?b6dad', d: { en: 'PvP modes.', 'pt-BR': 'Modos PvP.' } },
  { n: 'Ostron',           bg: '#B74624', c: '#e8ddaf', icon: SYN_IMG + 'OstronSigil(xLight).png?ba21e', d: { en: 'Cetus / Plains of Eidolon.', 'pt-BR': 'Cetus / Planícies de Eidolon.' } },
  { n: 'Solaris United',   bg: '#5F3C0D', c: '#e8ddaf', icon: SYN_IMG + 'SolarisUnited1(xLight).png?9ee79', d: { en: 'Fortuna / Orb Vallis.', 'pt-BR': 'Fortuna / Orb Vallis.' } },
  { n: 'Vox Solaris',      bg: '#F2E5A7', c: '#4A2B18', icon: SYN_IMG + 'VoxSolarisIcon(xDark).png?e6889', d: { en: 'Orb Vallis endgame (Vox Solaris quest).', 'pt-BR': 'Endgame do Orb Vallis (jornada Vox Solaris).' } },
  { n: 'Ventkids',         bg: '#B97EF9', c: '#FFF58F', icon: SYN_IMG + 'VentkidsIcon(xLight).png?70259', d: { en: 'Fortuna — K-Drive racing.', 'pt-BR': 'Fortuna — corridas de K-Drive.' } },
  { n: 'Entrati',          bg: '#4E5360', c: '#FFC12F', icon: SYN_IMG + 'EntratiIcon(xLight).png?cafef', d: { en: 'Deimos / Cambion Drift (Heart of Deimos).', 'pt-BR': 'Deimos / Cambion Drift (Heart of Deimos).' } },
  { n: 'Necraloid',        bg: '#333334', c: '#BA9E5E', icon: SYN_IMG + 'NecraloidIcon.png?a3e90', d: { en: 'Deimos — Necramech progression.', 'pt-BR': 'Deimos — progressão de Necramech.' } },
];

const SYN_SPOILER = [
  { n: 'Plumas',          bg: '#F7FACB', c: '#b43419', icon: SYN_IMG + 'TheQuillsSigil.png?954cb', d: { en: 'Cetus at night — Eidolons & Operator.', 'pt-BR': 'Cetus à noite — Eidolons & Operador.' } },
  { n: 'The Holdfasts',   bg: '#21242e', c: '#a9b5cc', icon: SYN_IMG + 'TheHoldfastsIcon(xDark).png?8bad1', d: { en: 'Zariman (Angels of the Zariman).', 'pt-BR': 'Zariman (jornada Angels of the Zariman).' } },
  { n: 'Cavia',           bg: '#282624', c: '#A5A394', icon: SYN_IMG + 'CaviaSyndicateLogo1(xLight).png?406b5', d: { en: 'Albrecht’s Laboratories (Whispers in the Walls).', 'pt-BR': 'Albrecht’s Laboratories (Whispers in the Walls).' } },
  { n: 'Kahl’s Garrison', bg: '#0a2a1b', c: '#a16042', icon: SYN_IMG + 'GarrisonIcon.png?3d907', d: { en: 'Weekly missions (Veilbreaker).', 'pt-BR': 'Missões semanais (Veilbreaker).' } },
  { n: 'The Hex',         bg: '#556033', c: '#171b0e', icon: SYN_IMG + 'HexIcon(xLight).png?c8c7d', d: { en: 'Höllvania / 1999.', 'pt-BR': 'Höllvania / 1999.' } },
  { n: 'Nightcap',        bg: '#603672', c: '#f8942a', icon: SYN_IMG + 'NightcapIcon(xLight).png?59010', d: { en: 'Deepmines (Fortuna / Orb Vallis).', 'pt-BR': 'Deepmines (Fortuna / Orb Vallis).' } },
];

const SYN_TIPS = [
  { en: 'The 6 base syndicates interlock: gaining Standing with one rewards its ally (+50%) and penalizes its opposed (−50%) and its enemy (−100%) — align with ones that don’t clash.', 'pt-BR': 'Os 6 sindicatos base se entrelaçam: ganhar Reputação com um beneficia o aliado (+50%) e penaliza o oposto (−50%) e o inimigo (−100%) — alinhe-se com os que não se opõem.' },
  { en: 'Each Warframe Augment Mod is sold by two syndicates.', 'pt-BR': 'Cada Mod de Augment de Warframe é vendido por dois sindicatos.' },
  { en: 'Syndicates outside the hexagon (neutral and late-game) have no enemies and never demote — the late-game ones just unlock after certain quests.', 'pt-BR': 'Os sindicatos fora do hexágono (neutros e de fim de jogo) não têm inimigos nem perdem rank — os de fim de jogo só desbloqueiam depois de certas jornadas.' },
  { en: 'Letting a syndicate’s Standing go too negative sends Death Squads after you.', 'pt-BR': 'Deixar a Reputação de um sindicato muito negativa faz ele mandar Death Squads atrás de você.' },
  { en: 'There are also event syndicates: Operational Supply (live operations) and Nightwave (its own section here).', 'pt-BR': 'Há ainda sindicatos de evento: Operational Supply (operações ativas) e a Nightwave (que tem seção própria aqui).' },
];

let _synGlossBound = false;
