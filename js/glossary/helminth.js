const HELM_STEPS = [
  { t: { en: '1 · Subsume the frame', 'pt-BR': '1 · Subsuma o frame' },
    d: { en: 'Feed a built non-Prime, non-Umbra Warframe to the Helminth. After 23h you learn its one predetermined ability — the frame is consumed and its slot freed.', 'pt-BR': 'Alimente um Warframe construído, não-Prime e não-Umbra, ao Helminth. Após 23h você aprende a habilidade pré-definida dele — o frame é consumido e o slot liberado.' } },
  { t: { en: '2 · Infuse the ability', 'pt-BR': '2 · Infunda a habilidade' },
    d: { en: 'Inject that ability onto any other frame, replacing one of its four (Prime/Umbra included). It costs Secretions; reversible, but spent Secretions aren’t refunded.', 'pt-BR': 'Injete essa habilidade em qualquer outro frame, no lugar de uma das quatro (inclui Prime/Umbra). Custa Secreções; reversível, mas as Secreções gastas não voltam.' } },
];
// Secreções (medidores do Helminth) + TODOS os materiais que alimentam cada uma com a
// quantidade consumida por feed (wiki). 3º campo truthy = rende 2× secreção.
const HELM_SECRETIONS = [
  { name: 'Bile', icon: 'Bile.png?e3280', mats: [
    ['Aggristone', 350], ['Ariette Scale', 250], ['Antiserum Injector Fragment', 900], ['Argon Crystal', 3], ['Cryotic', 3000],
    ['Diluted Thermia', 5], ['Efervon Sample', 800], ['Enigma Gyrum', 7], ['Isos', 200], ['Javlok Capacitor', 7], ['Morphics', 40],
    ['Nav Coordinate', 65], ['Omega Isotope', 30], ['Orokin Cipher', 5], ['Rune Marrow', 75], ['Somatic Fibers', 10],
    ['Thermal Sludge', 50], ['Ticor Plate', 5000], ['Vainthorn', 40], ['Vessel Capillaries', 55], ['Voidgel Orb', 10] ] },
  { name: 'Biotics', icon: 'Biotics.png?650c9', mats: [
    ['Connla Sprout', 35], ['Dracroot', 75], ['Dusklight Sarracenia', 8], ['Eevani', 35], ['Frostleaf', 8], ['Ganglion', 50, 1],
    ['Gorgaricus Spore', 25], ['Höllvanian Pitchweave Fragment', 700], ['Kovnik', 150], ['Lunar Pitcher', 8], ['Maprico', 50],
    ['Moonlight Dragonlily', 8], ['Moonlight Jadeleaf', 8], ['Moonlight Threshcone', 8], ['Mytocardia Spore', 8], ['Nistlepod', 25],
    ['Pustulite', 25, 1], ["Ruk's Claw", 8], ['Silphsela', 35], ['Sunlight Dragonlily', 8], ['Sunlight Jadeleaf', 8],
    ['Sunlight Threshcone', 8], ['Tasoma Extract', 35], ['Tepa Nodule', 50], ['Ueymag', 35], ['Vestan Moss', 8], ['Yao Shrub', 35] ] },
  { name: 'Calx', icon: 'Calx.png?2fd4b', mats: [
    ['Asterite', 300], ['Belric Crystal Fragment', 250], ['Cubic Diodes', 7000], ['Gallos Rods', 175], ['Grokdrul', 30],
    ['Hexenon', 300], ['Iradite', 50], ['Lucent Teroglobe', 50, 1], ['Nacreous Pebble', 80], ['Nullstones', 50],
    ['Rania Crystal Fragment', 250], ['Rubedo', 6000], ['Stela', 180] ] },
  { name: 'Oxides', icon: 'Oxides.png?dcad3', mats: [
    ['Alloy Plate', 15000], ['Carbides', 2500], ['Entrati Obols', 45000], ['Ferrite', 20000], ['Gallium', 25], ['Maw Fang', 10],
    ['Oxium', 750], ['Salvage', 20000], ['Tellurium', 10], ['Titanium', 10000] ] },
  { name: 'Pheromones', icon: 'Pheromones.png?89f2a', mats: [
    ['Chitinous Husk', 3], ['Infected Palpators', 3], ['Lamentus', 150], ['Mutagen Sample', 125], ['Nano Spores', 20000],
    ['Neurodes', 15], ['Plastids', 4000], ['Pulsating Tubercles', 3], ['Severed Bile Sac', 3], ['Techrot Chitin', 300],
    ['Techrot Motherboard', 25], ['Thrax Plasm', 50], ['Lua Thrax Plasm', 20] ] },
  { name: 'Synthetics', icon: 'Synthetics.png?cc9ca', mats: [
    ['Atmo Systems', 6], ['Aucrux Capacitors', 10], ['Circuits', 7000], ['Control Module', 75], ['Cryptographic ALU', 30],
    ['Detonite Ampule', 125], ['Entrati Lanthorn', 5], ['Experimental Arc-Relay', 65], ['Fieldron Sample', 125],
    ['Gyromag Systems', 12], ['Komms', 15], ['Necracoil', 800], ['Neural Sensors', 25], ['Orokin Cell', 15],
    ['Polymer Bundle', 12500], ['Repeller Systems', 3], ['Saggen Pearl', 200] ] },
];
const HELM_TIPS = [
  { en: 'Each frame has ONE fixed subsumable ability — some ults (like Mesa’s) aren’t available.', 'pt-BR': 'Cada frame tem UMA habilidade subsumível fixa — alguns ults (como o da Mesa) não dá.' },
  { en: 'Popular subsumes: Roar (Rhino), Eclipse (Mirage), Nourish (Grendel), Gloom (Sevagoth), Pull (Mag).', 'pt-BR': 'Subsumes populares: Roar (Rhino), Eclipse (Mirage), Nourish (Grendel), Gloom (Sevagoth), Pull (Mag).' },
  { en: 'Using the Helminth ranks it up, unlocking more subsume slots and its own abilities (like Empower).', 'pt-BR': 'Usar o Helminth aumenta o rank dele, liberando mais slots de subsume e habilidades próprias (como Empower).' },
];

// Habilidade subsumível + custos de secreção (subsumir/infundir, % do medidor) de cada frame.
// Fonte: wikitext da "Subsumable Ability Checklist" colado pelo usuário → scripts/_helminth_parse.py.
// Shape: slug → { a: 'Ability', s: [['Sec', pct]…] (subsumir), j: […] (infundir) }.
const HELM_ICON = 'Helminth.png?ff8c4';
const SECRETION_ICONS = { Bile: 'Bile.png?e3280', Biotics: 'Biotics.png?650c9', Calx: 'Calx.png?2fd4b', Oxides: 'Oxides.png?dcad3', Pheromones: 'Pheromones.png?89f2a', Synthetics: 'Synthetics.png?cc9ca' };
const HELMINTH_SUBSUME = {
  'ash': { a: 'Shuriken', s: [['Calx', 50], ['Pheromones', 77], ['Bile', 80]], j: [['Oxides', 51], ['Biotics', 38], ['Synthetics', 17]] },
  'atlas': { a: 'Petrify', s: [['Oxides', 75], ['Synthetics', 57], ['Bile', 80]], j: [['Calx', 19], ['Biotics', 19], ['Pheromones', 60]] },
  'banshee': { a: 'Silence', s: [['Biotics', 80], ['Pheromones', 54], ['Bile', 80]], j: [['Oxides', 52], ['Calx', 22], ['Synthetics', 23]] },
  'baruuk': { a: 'Lull', s: [['Oxides', 51], ['Synthetics', 79], ['Pheromones', 80]], j: [['Calx', 33], ['Biotics', 58], ['Bile', 10]] },
  'caliban': { a: 'Sentient Wrath', s: [['Calx', 71], ['Synthetics', 71], ['Pheromones', 72]], j: [['Oxides', 47], ['Biotics', 14], ['Bile', 37]] },
  'chroma': { a: 'Elemental Ward', s: [['Calx', 80], ['Synthetics', 48], ['Pheromones', 80]], j: [['Oxides', 32], ['Biotics', 34], ['Bile', 31]] },
  'citrine': { a: 'Fractured Blast', s: [['Oxides', 75], ['Synthetics', 57], ['Bile', 80]], j: [['Calx', 19], ['Biotics', 19], ['Pheromones', 60]] },
  'cyte-09': { a: 'Evade', s: [['Calx', 82.5], ['Synthetics', 55], ['Pheromones', 65]], j: [['Calx', 19], ['Biotics', 19], ['Pheromones', 60]] },
  'dagath': { a: 'Wyrd Scythes', s: [['Calx', 82.5], ['Synthetics', 55], ['Pheromones', 65]], j: [['Calx', 77], ['Biotics', 19], ['Pheromones', 60]] },
  'dante': { a: 'Dark Verse', s: [['Calx', 82.5], ['Synthetics', 55], ['Pheromones', 65]], j: [['Calx', 19], ['Biotics', 19], ['Pheromones', 60]] },
  'ember': { a: 'Fire Blast', s: [['Calx', 80], ['Biotics', 49], ['Bile', 80]], j: [['Oxides', 18], ['Synthetics', 18], ['Pheromones', 59]] },
  'equinox': { a: 'Rest & Rage', s: [['Oxides', 80], ['Biotics', 62], ['Bile', 64]], j: [['Calx', 16], ['Synthetics', 15], ['Pheromones', 72]] },
  'excalibur': { a: 'Radial Blind', s: [['Biotics', 80], ['Pheromones', 52], ['Bile', 80]], j: [['Oxides', 50], ['Calx', 27], ['Synthetics', 24]] },
  'follie': { a: 'Self Portrait', s: [['Calx', 82.5], ['Synthetics', 55], ['Pheromones', 65]], j: [] },
  'frost': { a: 'Ice Wave', s: [['Calx', 68], ['Synthetics', 70], ['Pheromones', 70]], j: [['Oxides', 11], ['Biotics', 61], ['Bile', 30]] },
  'gara': { a: 'Spectrorage', s: [['Calx', 77], ['Biotics', 55], ['Bile', 80]], j: [['Oxides', 28], ['Synthetics', 27], ['Pheromones', 49]] },
  'garuda': { a: 'Blood Altar', s: [['Calx', 71], ['Synthetics', 71], ['Pheromones', 72]], j: [['Oxides', 47], ['Biotics', 14], ['Bile', 37]] },
  'gauss': { a: 'Thermal Sunder', s: [['Oxides', 46], ['Pheromones', 80], ['Bile', 80]], j: [['Calx', 50], ['Biotics', 15], ['Synthetics', 35]] },
  'grendel': { a: 'Nourish', s: [['Oxides', 53], ['Biotics', 80], ['Synthetics', 80]], j: [['Calx', 33], ['Pheromones', 16], ['Bile', 50]] },
  'gyre': { a: 'Coil Horizon', s: [['Calx', 67], ['Biotics', 73], ['Pheromones', 71]], j: [['Oxides', 17], ['Synthetics', 71], ['Bile', 12]] },
  'harrow': { a: 'Condemn', s: [['Oxides', 80], ['Calx', 56], ['Pheromones', 80]], j: [['Biotics', 20], ['Synthetics', 62], ['Bile', 20]] },
  'hildryn': { a: 'Pillage', s: [['Calx', 54], ['Biotics', 74], ['Pheromones', 80]], j: [['Oxides', 52], ['Synthetics', 26], ['Bile', 24]] },
  'hydroid': { a: 'Tempest Barrage', s: [['Oxides', 79], ['Calx', 80], ['Synthetics', 51]], j: [['Biotics', 36], ['Pheromones', 34], ['Bile', 32]] },
  'inaros': { a: 'Desiccation', s: [['Calx', 73], ['Biotics', 80], ['Bile', 53]], j: [['Oxides', 17], ['Synthetics', 14], ['Pheromones', 70]] },
  'ivara': { a: 'Quiver', s: [['Calx', 67], ['Biotics', 73], ['Pheromones', 71]], j: [['Oxides', 17], ['Synthetics', 71], ['Bile', 12]] },
  'jade': { a: 'Ophanim Eyes', s: [['Calx', 82.5], ['Synthetics', 55], ['Pheromones', 65]], j: [['Calx', 19], ['Biotics', 19], ['Pheromones', 60]] },
  'khora': { a: 'Ensnare', s: [['Oxides', 67], ['Calx', 70], ['Synthetics', 68]], j: [['Biotics', 61], ['Pheromones', 18], ['Bile', 18]] },
  'koumei': { a: 'Omamori', s: [['Calx', 82.5], ['Synthetics', 55], ['Pheromones', 65]], j: [['Calx', 19], ['Biotics', 19], ['Pheromones', 60]] },
  'kullervo': { a: 'Wrathful Advance', s: [['Calx', 82.5], ['Synthetics', 55], ['Pheromones', 65]], j: [['Calx', 19], ['Biotics', 19], ['Pheromones', 60]] },
  'lavos': { a: 'Vial Rush', s: [['Calx', 77], ['Biotics', 55], ['Bile', 80]], j: [['Oxides', 28], ['Synthetics', 27], ['Pheromones', 49]] },
  'limbo': { a: 'Banish', s: [['Oxides', 48], ['Synthetics', 80], ['Pheromones', 80]], j: [['Calx', 30], ['Biotics', 62], ['Bile', 10]] },
  'loki': { a: 'Decoy', s: [['Oxides', 53], ['Pheromones', 80], ['Bile', 80]], j: [['Calx', 59], ['Biotics', 18], ['Synthetics', 18]] },
  'mag': { a: 'Pull', s: [['Oxides', 72], ['Calx', 71], ['Synthetics', 68]], j: [['Biotics', 21], ['Pheromones', 23], ['Bile', 61]] },
  'mesa': { a: 'Shooting Gallery', s: [['Oxides', 80], ['Calx', 80], ['Biotics', 48]], j: [['Synthetics', 35], ['Pheromones', 51], ['Bile', 15]] },
  'mirage': { a: 'Eclipse', s: [['Oxides', 67], ['Calx', 72], ['Bile', 68]], j: [['Biotics', 50], ['Synthetics', 34], ['Pheromones', 16]] },
  'nekros': { a: 'Terrify', s: [['Oxides', 80], ['Biotics', 80], ['Pheromones', 52]], j: [['Calx', 15], ['Synthetics', 12], ['Bile', 71]] },
  'nezha': { a: 'Fire Walker', s: [['Oxides', 68], ['Calx', 68], ['Synthetics', 68]], j: [['Biotics', 34], ['Pheromones', 34], ['Bile', 33]] },
  'nidus': { a: 'Larva', s: [['Biotics', 80], ['Pheromones', 80], ['Bile', 80]], j: [['Oxides', 80], ['Calx', 31], ['Synthetics', 10]] },
  'nokko': { a: 'Brightbonnet', s: [['Calx', 82.5], ['Synthetics', 55], ['Pheromones', 65]], j: [['Calx', 17.5], ['Biotics', 19], ['Pheromones', 35]] },
  'nova': { a: 'Null Star', s: [['Oxides', 80], ['Biotics', 69], ['Synthetics', 63]], j: [['Calx', 22], ['Pheromones', 18], ['Bile', 58]] },
  'nyx': { a: 'Mind Control', s: [['Oxides', 80], ['Biotics', 80], ['Bile', 49]], j: [['Calx', 32], ['Synthetics', 32], ['Pheromones', 30]] },
  'oberon': { a: 'Smite', s: [['Calx', 80], ['Pheromones', 49], ['Bile', 80]], j: [['Oxides', 14], ['Biotics', 80], ['Synthetics', 13]] },
  'octavia': { a: 'Resonator', s: [['Calx', 80], ['Biotics', 60], ['Bile', 73]], j: [['Oxides', 34], ['Synthetics', 36], ['Pheromones', 32]] },
  'oraxia': { a: 'Webbed Embrace', s: [['Calx', 82.5], ['Synthetics', 55], ['Pheromones', 65]], j: [['Calx', 19], ['Biotics', 19], ['Pheromones', 60]] },
  'protea': { a: 'Dispensary', s: [['Calx', 58], ['Biotics', 80], ['Synthetics', 74]], j: [['Oxides', 21], ['Pheromones', 23], ['Bile', 60]] },
  'qorvex': { a: 'Chyrinka Pillar', s: [['Calx', 82.5], ['Synthetics', 55], ['Pheromones', 65]], j: [['Calx', 19], ['Biotics', 19], ['Pheromones', 60]] },
  'revenant': { a: 'Reave', s: [['Oxides', 80], ['Calx', 80], ['Bile', 55]], j: [['Biotics', 35], ['Synthetics', 32], ['Pheromones', 34]] },
  'rhino': { a: 'Roar', s: [['Oxides', 80], ['Biotics', 80], ['Pheromones', 80]], j: [['Calx', 37], ['Synthetics', 12], ['Bile', 77]] },
  'saryn': { a: 'Molt', s: [['Biotics', 80], ['Pheromones', 80], ['Bile', 52]], j: [['Oxides', 14], ['Calx', 46], ['Synthetics', 35]] },
  'sevagoth': { a: 'Gloom', s: [['Calx', 77], ['Biotics', 55], ['Bile', 80]], j: [['Oxides', 28], ['Synthetics', 27], ['Pheromones', 49]] },
  'sirius & orion': { a: 'Jade Stars', s: [['Calx', 82.5], ['Synthetics', 55], ['Pheromones', 65]], j: [] },
  'styanax': { a: 'Tharros Strike', s: [['Biotics', 80], ['Pheromones', 52], ['Bile', 80]], j: [['Oxides', 50], ['Calx', 27], ['Synthetics', 24]] },
  'temple': { a: 'Pyrotechnics', s: [['Calx', 82.5], ['Synthetics', 55], ['Pheromones', 65]], j: [['Calx', 19], ['Biotics', 19], ['Pheromones', 60]] },
  'titania': { a: 'Spellbind', s: [['Oxides', 63], ['Calx', 80], ['Bile', 66]], j: [['Biotics', 16], ['Synthetics', 12], ['Pheromones', 70]] },
  'trinity': { a: 'Well of Life', s: [['Oxides', 50], ['Synthetics', 80], ['Bile', 80]], j: [['Calx', 38], ['Biotics', 17], ['Pheromones', 52]] },
  'uriel': { a: 'Remedium', s: [['Calx', 82.5], ['Synthetics', 55], ['Pheromones', 65]], j: [['Calx', 19], ['Biotics', 19], ['Pheromones', 60]] },
  'valkyr': { a: 'Warcry', s: [['Oxides', 72], ['Biotics', 68], ['Pheromones', 68]], j: [['Calx', 30], ['Synthetics', 59], ['Bile', 10]] },
  'vauban': { a: 'Tesla Nervos', s: [['Oxides', 48], ['Calx', 80], ['Biotics', 80]], j: [['Synthetics', 52], ['Pheromones', 23], ['Bile', 23]] },
  'volt': { a: 'Shock', s: [['Oxides', 80], ['Biotics', 48], ['Pheromones', 80]], j: [['Calx', 31], ['Synthetics', 10], ['Bile', 61]] },
  'voruna': { a: "Lycath's Hunt", s: [['Oxides', 72], ['Biotics', 68], ['Pheromones', 68]], j: [['Calx', 30], ['Synthetics', 59], ['Bile', 10]] },
  'wisp': { a: 'Breach Surge', s: [['Oxides', 45], ['Synthetics', 80], ['Bile', 80]], j: [['Calx', 23], ['Biotics', 26], ['Pheromones', 51]] },
  'wukong': { a: 'Defy', s: [['Synthetics', 80], ['Pheromones', 80], ['Bile', 80]], j: [['Oxides', 30], ['Calx', 62], ['Biotics', 29]] },
  'xaku': { a: "Xata's Whisper", s: [['Oxides', 53], ['Calx', 80], ['Bile', 80]], j: [['Biotics', 19], ['Synthetics', 22], ['Pheromones', 57]] },
  'yareli': { a: 'Aquablades', s: [['Calx', 60], ['Pheromones', 60], ['Bile', 60]], j: [['Biotics', 36], ['Pheromones', 34], ['Bile', 32]] },
  'zephyr': { a: 'Airburst', s: [['Oxides', 80], ['Biotics', 80], ['Bile', 47]], j: [['Calx', 33], ['Synthetics', 14], ['Pheromones', 47]] },
};
// Frames cujos valores da habilidade são reduzidos/alterados ao infundir (wiki: "ALTERED").
const HELM_ALTERED = {
  caliban: 'Frontal cast only and the Tau status effect is removed.',
  citrine: 'Diminished Strength.',
  'cyte-09': 'Maximum Duration capped to 25 seconds.',
  dagath: 'Diminished Slow.',
  ember: 'No Overguard from the Healing Flames augment.',
  follie: 'Damage Reduction capped at 75%, and Inkblot is not applied to enemies.',
  gauss: 'Heat-status scaling capped to 10x Ability Damage.',
  grendel: 'Self-heal removed and effect reduced.',
  jade: 'Cannot revive allies.',
  koumei: 'Gains 10–20 Omamori Charms but no invulnerability.',
  kullervo: 'Diminished Range and Melee Critical Chance.',
  mag: 'Diminished Range.',
  mirage: 'Diminished effectiveness (damage bonus and DR cap).',
  nidus: 'Diminished Range.',
  nokko: 'Reduced Strength buff and Energy restoration.',
  nova: 'Damage Reduction capped at 75%.',
  oberon: 'Reduced maximum Strength.',
  oraxia: 'Diminished Range.',
  protea: 'Diminished Duration.',
  rhino: 'Diminished damage increase.',
  'sirius & orion': 'Cannot be used to swap Warframe.',
  temple: 'Backbeat synergy is unavailable.',
  trinity: 'Immortality cooldown increased to 120 seconds.',
  uriel: 'Reduced healing and Gulphagor removed.',
  valkyr: 'Diminished speed increase.',
  voruna: 'Passive removed.',
  wukong: 'Diminished max Armor.',
};
// Índice da habilidade subsumível nas abilities localizadas (match por nome OU forma), ou -1.
function subsumableAbilityIndex(slug, abilities) {
  const e = HELMINTH_SUBSUME[slug];
  if (!e || !e.a || !abilities) return -1;
  const t = e.a.toLowerCase();
  return abilities.findIndex(a => (a.name || '').toLowerCase() === t || (a.forms || []).some(f => (f.name || '').toLowerCase() === t));
}

function renderHelminthSection() {
  const el = document.getElementById('helminth-gloss');
  if (!el) return;
  const loc = state.locale === 'pt-BR' ? 'pt-BR' : 'en';
  const L = o => (o && (o[loc] || o.en)) || '';
  const esc = relicEsc;
  const W = 'https://wiki.warframe.com/images/';

  const steps = HELM_STEPS.map(s =>
    `<div class="sc-jstep"><span class="sc-jstep-t">${esc(L(s.t))}</span><span class="sc-jstep-d">${esc(L(s.d))}</span></div>`).join('');
  const secBtns = HELM_SECRETIONS.map((s, i) =>
    `<button type="button" class="helm-sec-btn" onclick="openHelminthSecretion(${i})"><img src="${W}${s.icon}" alt="" loading="lazy" onerror="this.style.visibility='hidden'"><span>${esc(s.name)}</span></button>`).join('');
  const tips = HELM_TIPS.map(t => `<li>${esc(L(t))}</li>`).join('');

  const T = {
    unlock: { en: 'Unlock: Mastery Rank 8 + Rank 3 (Associate) with the Entrati. The Helminth Segment blueprint comes from Son in the Necralisk (15,000 standing).', 'pt-BR': 'Desbloqueio: Nível de Maestria 8 + Rank 3 (Associate) com os Entrati. O diagrama do Helminth Segment vem do Son, no Necralisk (15.000 de reputação).' },
    how: { en: 'How it works', 'pt-BR': 'Como funciona' },
    sec: { en: 'Secretions — what feeds the Helminth', 'pt-BR': 'Secreções — o que alimenta o Helminth' },
    secNote: { en: 'Feeding resources fills each gauge; infusing an ability spends Secretions. Tap a secretion for every material it eats and how much.', 'pt-BR': 'Alimentar recursos enche cada medidor; infundir uma habilidade gasta Secreções. Toque numa secreção pra ver todos os materiais que ela consome e quanto.' },
    prefIntro: { en: 'The Helminth rotates its tastes — an arrow on a resource in-game shows how much Secretion it currently gives:', 'pt-BR': 'O Helminth muda os gostos — uma seta num recurso (no jogo) mostra quanta Secreção ele dá no momento:' },
    prefUp: { en: 'Preferred — up to 30%', 'pt-BR': 'Preferido — até 30%' },
    prefNeu: { en: 'Neutral — 15% (median)', 'pt-BR': 'Neutro — 15% (mediana)' },
    prefDown: { en: 'Disliked — as low as 3%', 'pt-BR': 'Desgostado — só 3%' },
    prefSentient: { en: 'Disliked a resource? Feed a Sentient Appetite resource to restore its gauge by 50% — repeat until it’s neutral again.', 'pt-BR': 'Recurso desgostado? Alimente um recurso de Sentient Appetite pra restaurar 50% do medidor — repita até voltar ao neutro.' },
    prefDouble: { en: 'Lucent Teroglobe (→ Calx), Pustulite and Ganglion (→ Biotics) always give double Secretion — up to 60% when preferred.', 'pt-BR': 'Lucent Teroglobe (→ Calx), Pustulite e Ganglion (→ Biotics) sempre rendem o dobro de Secreção — até 60% quando preferidos.' },
    tips: { en: 'Good to know', 'pt-BR': 'Bom saber' },
    subTitle: { en: 'Subsumable abilities', 'pt-BR': 'Habilidades subsumíveis' },
    subOpen: { en: 'Every frame and its subsumable ability', 'pt-BR': 'Cada frame e sua habilidade subsumível' },
    subLbl: { en: 'Subsume', 'pt-BR': 'Subsumir' },
    injLbl: { en: 'Infuse', 'pt-BR': 'Infundir' },
    altered: { en: 'ALTERED', 'pt-BR': 'ALTERADO' },
  };

  const Wm = 'https://wiki.warframe.com/images/';
  const ALT_ICO = Wm + 'HelminthChrysalis%28xWhite%29.png?9cd4c';
  const costRow = (lbl, pairs) => (pairs && pairs.length)
    ? `<div class="helm-cost-row"><span class="helm-cost-lbl">${esc(lbl)}</span>`
      + pairs.map(([sec, pct]) => `<span class="helm-cost"><img class="helm-cost-ico" src="${Wm}${SECRETION_ICONS[sec] || ''}" alt="" title="${esc(sec)}" onerror="this.style.display='none'"><span class="helm-cost-nm">${esc(sec)}</span><span class="helm-cost-pct">${pct}%</span></span>`).join('')
      + `</div>` : '';
  const subSlugs = Object.keys(HELMINTH_SUBSUME).filter(s => getWarframeDetails(s)).sort();
  const subCards = subSlugs.map(slug => {
    const det = getWarframeDetails(slug);
    const e = HELMINTH_SUBSUME[slug];
    const idx = subsumableAbilityIndex(slug, det.abilities);
    const ab = idx >= 0 ? det.abilities[idx] : null;
    // forms (ex.: Sirius & Orion → Jade Stars/Sirius + Astral Shell/Orion) → 1 entrada por forma.
    const entries = (ab && Array.isArray(ab.forms))
      ? ab.forms.map(f => ({ icon: f.icon, name: f.name, desc: f.description, label: f.label }))
      : [{ icon: ab ? ab.icon : '', name: ab ? ab.name : e.a, desc: ab ? ab.description : '' }];
    const nm = slug.replace(/(^|[\s-])([a-z0-9])/g, (m, p, c) => p + c.toUpperCase());
    const alt = HELM_ALTERED[slug];
    const altHtml = alt
      ? `<span class="helm-card-alt term-tip" tabindex="0" data-tip="${esc(alt)}"><img src="${ALT_ICO}" alt="" onerror="this.style.display='none'">${esc(L(T.altered))}</span>`
      : '';
    const abHtml = entries.map(en =>
      `<div class="helm-card-skill"><span class="helm-card-ability">${en.icon ? `<img class="helm-card-ab-ico" src="${en.icon}" alt="" onerror="this.style.display='none'">` : ''}`
      + `<span class="helm-card-ab-name">${esc(en.label ? `${en.name} · ${en.label}` : en.name)}</span></span>`
      + (en.desc ? `<span class="helm-card-desc">${esc(en.desc)}</span>` : '') + `</div>`).join('');
    return `<div class="helm-card" role="button" tabindex="0" onclick="goToArchetype('${slug}')">`
      + `<img class="helm-card-frame" src="${warframeIconUrl(slug)}" alt="" loading="lazy" onerror="this.style.visibility='hidden'">`
      + `<span class="helm-card-name">${esc(nm)}${altHtml}</span>`
      + abHtml
      + `<div class="helm-card-mats">${costRow(L(T.subLbl), e.s)}${costRow(L(T.injLbl), e.j)}</div></div>`;
  }).join('');
  const subTable = subSlugs.length
    ? `<h4 class="sc-h">${esc(L(T.subTitle))}</h4>`
      + `<details class="helm-sub"><summary>${esc(L(T.subOpen))} (${subSlugs.length})</summary>`
      + `<div class="helm-cards">${subCards}</div></details>`
    : '';

  const pref = `<div class="helm-pref"><p class="helm-pref-intro">${esc(L(T.prefIntro))}</p>`
    + `<div class="helm-pref-rows">`
    + `<span class="helm-pref-row"><span class="helm-arrow up">▲</span>${esc(L(T.prefUp))}</span>`
    + `<span class="helm-pref-row"><span class="helm-arrow neu">—</span>${esc(L(T.prefNeu))}</span>`
    + `<span class="helm-pref-row"><span class="helm-arrow down">▼</span>${esc(L(T.prefDown))}</span></div>`
    + `<p class="helm-pref-extra">${esc(L(T.prefSentient))}</p>`
    + `<p class="helm-pref-extra">${esc(L(T.prefDouble))}</p></div>`;

  el.innerHTML =
    `<div class="gloss-callout"><span class="gloss-callout-ico" aria-hidden="true">🔓</span><span class="gloss-callout-text">${esc(L(T.unlock))}</span></div>`
    + `<h4 class="sc-h">${esc(L(T.how))}</h4>`
    + `<div class="sc-jsteps sc-jsteps-2">${steps}</div>`
    + `<h4 class="sc-h">${esc(L(T.sec))}</h4>`
    + `<p class="sc-sub">${esc(L(T.secNote))}</p>`
    + pref
    + `<div class="helm-sec-row">${secBtns}</div>`
    + `<h4 class="sc-h">${esc(L(T.tips))}</h4><ul class="sc-tips">${tips}</ul>`
    + subTable;
}

// ── Modal de secreção (lista completa de materiais + quantidade consumida) ────
function openHelminthSecretion(i) {
  const s = HELM_SECRETIONS[i];
  const modal = document.getElementById('helminth-sec-modal');
  if (!s || !modal) return;
  const loc = state.locale === 'pt-BR' ? 'pt-BR' : 'en';
  const esc = relicEsc;
  const W = 'https://wiki.warframe.com/images/';
  document.getElementById('helminth-sec-modal-ico').src = W + s.icon;
  document.getElementById('helminth-sec-modal-title').textContent = s.name;
  document.getElementById('helminth-sec-modal-sub').textContent =
    loc === 'pt-BR' ? `${s.mats.length} materiais · quantidade consumida por feed` : `${s.mats.length} materials · amount consumed per feed`;
  const nf = n => n.toLocaleString(loc === 'pt-BR' ? 'pt-BR' : 'en-US');
  const mats = s.mats.map(([name, qty, x2]) => {
    const slug = name.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
    const r = RESOURCES[slug];
    const src = r && r.image ? r.image : (W + encodeURIComponent(name.replace(/[’']/g, '').replace(/\s+/g, '')) + '.png');
    const badge = x2 ? `<span class="helm-mat-2x" title="2×">2×</span>` : '';
    const inner = `<img class="helm-mat-ico" src="${src}" alt="" loading="lazy" onerror="this.style.visibility='hidden'">`
      + `<span class="helm-mat-name">${esc(name)}</span>${badge}<span class="helm-mat-qty">×${nf(qty)}</span>`;
    return r
      ? `<button type="button" class="helm-mat is-link" onclick="openResourceModal('${slug}')">${inner}</button>`
      : `<div class="helm-mat">${inner}</div>`;
  }).join('');
  document.getElementById('helminth-sec-modal-mats').innerHTML = mats;
  modal.classList.remove('hidden');
}
function closeHelminthSecretion() {
  document.getElementById('helminth-sec-modal')?.classList.add('hidden');
}
function setupHelminthSecModal() {
  document.addEventListener('keydown', e => {
    const m = document.getElementById('helminth-sec-modal');
    if (e.key === 'Escape' && m && !m.classList.contains('hidden')) { e.preventDefault(); closeHelminthSecretion(); }
  });
}

// ── Elemental combination order (Status Effects extra) ───────────────────────
// As 3 capturas mostram os MESMOS 3 mods (Heat/Cold/Electric) em ordens diferentes.
const EL_ORDER = [
  { img: 'status-cold-rad.png',   order: ['electricity', 'heat', 'cold'],        combo: 'radiation', rest: 'cold' },
  { img: 'status-blast-elec.png', order: ['cold', 'heat', 'electricity'],        combo: 'blast',     rest: 'electricity' },
  { img: 'status-mag-heat.png',   order: ['cold', 'electricity', 'heat'],        combo: 'magnetic',  rest: 'heat' },
];
const EL_COMBOS = [
  { c: 'viral',     a: 'cold',        b: 'toxin' },
  { c: 'corrosive', a: 'electricity', b: 'toxin' },
  { c: 'gas',       a: 'heat',        b: 'toxin' },
  { c: 'blast',     a: 'heat',        b: 'cold' },
  { c: 'radiation', a: 'heat',        b: 'electricity' },
  { c: 'magnetic',  a: 'cold',        b: 'electricity' },
];
// busca de mods filtra pelos mods base do elemento combinado
const EL_SEARCH = [
  { img: 'search-viral.png', combo: 'viral', a: 'cold', b: 'toxin' },
  { img: 'search-blast.png', combo: 'blast', a: 'heat', b: 'cold' },
];

