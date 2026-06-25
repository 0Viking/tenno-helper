const ARCHETYPES = [
  { slug: 'canhao-de-vidro',
    name: { en: 'Glass Cannon', 'pt-BR': 'Canhão de Vidro' },
    signature: ['dano'],
    description: {
      en: 'Reserved for warframes that spend all their chips on dealing damage and nothing else. Not necessarily the best damage dealers, but the most focused on it. For those who like to play as DPS: kill the enemy before they kill you.',
      'pt-BR': 'Reservado pros warframes que gastam todas as suas fichas em dar dano e mais nada. Não necessariamente os melhores em causar dano, mas os mais focados nisso. Para quem gosta de jogar como DPS: mate o inimigo antes que ele te mate.',
    },
    warframes: ['Dagath', 'Excalibur', 'Garuda', 'Mesa', 'Mirage', 'Saryn', 'Sevagoth', 'Temple', 'Xaku'] },
  { slug: 'tanque',
    name: { en: 'Tank', 'pt-BR': 'Tanque' },
    signature: ['sobrevivencia'],
    description: {
      en: 'Beefy warframes whose only focus is staying alive, letting you focus on the rest of the game. Their kits are usually simpler, often centered on abilities you activate and forget about.',
      'pt-BR': 'Warframes parrudos cujo foco é única e exclusivamente ficar vivo, te permitindo focar no resto do jogo. Kits geralmente mais simples, muitas vezes focados em habilidades que você ativa e esquece que estão lá.',
    },
    warframes: ['Grendel', 'Rhino'] },
  { slug: 'controlador',
    name: { en: 'Controller', 'pt-BR': 'Controlador' },
    signature: ['controle'],
    description: {
      en: 'Singular focus on crowd control: completely manipulating the battlefield in your favor. Want to lock enemies down entirely? You came to the right place.',
      'pt-BR': 'Foco único em controle de grupo: manipular completamente o campo de batalha ao seu favor. Quer travar inimigos por completo? Veio ao lugar certo.',
    },
    warframes: ['Frost', 'Hydroid', 'Nyx'] },
  { slug: 'infiltrador',
    name: { en: 'Infiltrator', 'pt-BR': 'Infiltrador' },
    signature: ['furtividade'],
    description: {
      en: 'Single-mindedly focused on stealth. If you need a warframe that invests everything it has to stay invisible and avoid enemies, use an Infiltrator.',
      'pt-BR': 'Focado única e exclusivamente em furtividade. Se você precisa de um warframe que investe tudo o que tem para ficar invisível e evitar os inimigos, use um infiltrador.',
    },
    warframes: ['Ivara'] },
  { slug: 'lutador',
    name: { en: 'Fighter', 'pt-BR': 'Lutador' },
    signature: ['dano', 'sobrevivencia'],
    description: {
      en: 'A combination of damage and survival. For those who like to deal damage and stay alive — fighting as much as possible, healing, taking hits and giving back twice as much.',
      'pt-BR': 'Combinação de dano e sobrevivência. Para quem gosta de causar dano e ficar vivo — lutar o máximo possível, se curando, aguentando porrada e devolvendo o dobro.',
    },
    warframes: ['Atlas', 'Baruuk', 'Chroma', 'Gauss', 'Kullervo', 'Nidus', 'Revenant', 'Valkyr', 'Wukong'] },
  { slug: 'disruptor',
    name: { en: 'Disruptor', 'pt-BR': 'Disruptor' },
    signature: ['dano', 'controle'],
    description: {
      en: 'Combines damage and crowd control. Disruptors focus on preventing enemies from acting and killing them as fast as possible — the classic crowd-control mages.',
      'pt-BR': 'Combina dano e controle de grupo. Disruptores focam em impedir os inimigos de agir e matá-los o mais rápido possível — os clássicos magos de controle de grupo.',
    },
    warframes: ['Ember', 'Gara', 'Gyre', 'Khora', 'Koumei', 'Lavos', 'Mag', 'Nokko', 'Nova', 'Qorvex', 'Uriel', 'Vauban'] },
  { slug: 'assassino',
    name: { en: 'Assassin', 'pt-BR': 'Assassino' },
    signature: ['dano', 'furtividade'],
    description: {
      en: 'Combines damage and stealth. For those who love the assassin fantasy: slip in invisible, kill the enemies and vanish before they notice.',
      'pt-BR': 'Combina dano e furtividade. Para quem gosta do conceito de assassino: entrar invisível, matar os inimigos e desaparecer antes que percebam.',
    },
    warframes: ['Ash', 'Cyte-09', 'Voruna'] },
  { slug: 'guardiao',
    name: { en: 'Guardian', 'pt-BR': 'Guardião' },
    signature: ['sobrevivencia', 'suporte'],
    description: {
      en: 'A mix of survival and support. Guardians are tanks who heal or buff allies, often as a side effect — their healing is shared. They can help the team while keeping a fairly independent playstyle.',
      'pt-BR': 'Mistura de sobrevivência e suporte. Guardiões são tanques que curam ou buffam os aliados, muitas vezes por consequência — a cura deles é compartilhada. Podem ajudar a equipe e manter um estilo de jogo bem independente.',
    },
    warframes: ['Citrine', 'Harrow', 'Nekros', 'Trinity'] },
  { slug: 'bastiao',
    name: { en: 'Bastion', 'pt-BR': 'Bastião' },
    signature: ['sobrevivencia', 'controle'],
    description: {
      en: 'A combination of survival and crowd control. The archetype of those annoying tanks who let no one move — and if you try to fight back, you barely deal any damage. Want to be a tank that also fully controls the enemies? Here are your options.',
      'pt-BR': 'Combinação de sobrevivência e controle de grupo. O arquétipo daqueles tanques chatos que não deixam ninguém se mexer — e se você tenta lutar contra, mal vai dar dano. Quer ser um tanque que também controla os inimigos por completo? Aqui estão suas opções.',
    },
    warframes: ['Hildryn', 'Inaros', 'Nezha'] },
  { slug: 'tatico',
    name: { en: 'Tactician', 'pt-BR': 'Tático' },
    signature: ['suporte', 'controle'],
    description: {
      en: 'Support and crowd control. Tacticians are excellent in any team — they let no one move and still buff allies. A different niche of support: helps indirectly, but is sorely missed when playing solo.',
      'pt-BR': 'Suporte e controle de grupo. Táticos são excelentes em qualquer equipe — não deixam ninguém se mexer e ainda buffam os aliados. Um nicho diferente de suporte: ajuda de forma mais indireta, mas faz falta na hora de jogar sozinho.',
    },
    warframes: ['Limbo', 'Titania'] },
  { slug: 'sussurro',
    name: { en: 'Whisper', 'pt-BR': 'Sussurro' },
    signature: ['suporte', 'furtividade'],
    description: {
      en: 'Combines support and stealth. For those who like the idea of helping allies from the shadows, without becoming a target.',
      'pt-BR': 'Combina suporte e furtividade. Para quem gosta da ideia de ajudar os aliados das sombras, sem virar alvo.',
    },
    warframes: ['Wisp'] },
  { slug: 'sabotador',
    name: { en: 'Saboteur', 'pt-BR': 'Sabotador' },
    signature: ['furtividade', 'controle'],
    description: {
      en: 'Stealth and crowd control. Stay completely invisible and unnoticed while constantly sabotaging and disrupting the enemies.',
      'pt-BR': 'Furtividade e controle de grupo. Ficar completamente invisível e despercebido, mas constantemente sabotando e atrapalhando os inimigos.',
    },
    warframes: ['Loki'] },
  { slug: 'paladino',
    name: { en: 'Paladin', 'pt-BR': 'Paladino' },
    signature: ['dano', 'sobrevivencia', 'suporte'],
    description: {
      en: 'Combines damage, survival and support — almost everything you could want in a single warframe. Extremely complete and independent, and they still help the team a lot.',
      'pt-BR': 'Combina dano, sobrevivência e suporte — é quase tudo o que você pode querer em um warframe só. Extremamente completos e independentes, e ainda ajudam bastante o time.',
    },
    warframes: ['Dante', 'Jade', 'Protea', 'Styanax'] },
  { slug: 'gladiador',
    name: { en: 'Gladiator', 'pt-BR': 'Gladiador' },
    signature: ['dano', 'sobrevivencia', 'controle'],
    description: {
      en: 'A combination of damage, survival and crowd control. Tons of damage, they never die and they still neutralize the enemies. A complete package.',
      'pt-BR': 'Combinação de dano, sobrevivência e controle de grupo. Muito dano, não morrem nunca e ainda conseguem inutilizar os inimigos. Um prato cheio.',
    },
    warframes: ['Yareli', 'Zephyr'] },
  { slug: 'predador',
    name: { en: 'Predator', 'pt-BR': 'Predador' },
    signature: ['dano', 'sobrevivencia', 'furtividade'],
    description: {
      en: 'Combines damage, survival and stealth. A predator does not go invisible to stay alive — it goes invisible to catch enemies by surprise. Does a little of everything.',
      'pt-BR': 'Combina dano, sobrevivência e furtividade. Um predador não fica invisível para se garantir vivo — fica invisível para pegar os inimigos de surpresa. Faz um pouquinho de tudo.',
    },
    warframes: ['Oraxia'] },
  { slug: 'estrategista',
    name: { en: 'Strategist', 'pt-BR': 'Estrategista' },
    signature: ['dano', 'suporte', 'controle'],
    description: {
      en: 'Focused on damage, support and crowd control. Strategists are the peak of utility: they kill well, control the enemies and help the team with absurd versatility. They usually have a rich kit packed with options.',
      'pt-BR': 'Focados em dano, suporte e controle de grupo. Estrategistas são o ápice da utilidade: matam bem, controlam os inimigos e ajudam o time com uma versatilidade absurda. Costumam ter um kit bem recheado de opções.',
    },
    warframes: ['Follie', 'Sirius & Orion', 'Volt'] },
  { slug: 'clerigo',
    name: { en: 'Cleric', 'pt-BR': 'Clérigo' },
    signature: ['sobrevivencia', 'suporte', 'controle'],
    description: {
      en: 'Focused on survival, support and crowd control. Always looking after the team — they let no one die, lock down the annoying enemies, and they themselves rarely die either.',
      'pt-BR': 'Focado em sobrevivência, suporte e controle de grupo. Estão sempre cuidando do time — não deixam ninguém morrer, imobilizam os inimigos chatos e eles mesmos também não morrem por nada.',
    },
    warframes: ['Caliban', 'Oberon'] },
  { slug: 'generalista',
    name: { en: 'Generalist', 'pt-BR': 'Generalista' },
    signature: ['dano', 'sobrevivencia', 'suporte', 'controle', 'furtividade'],
    description: {
      en: 'Encompasses all warframes that are good in four or five categories. Versatile, they do a little of everything without specializing deeply in any single area.',
      'pt-BR': 'Engloba todos os warframes bons em quatro ou cinco categorias. Versáteis, fazem um pouco de tudo sem se especializar profundamente em nenhuma área.',
    },
    warframes: ['Equinox', 'Octavia'] },
  { slug: 'rework',
    name: { en: 'Rework', 'pt-BR': 'Rework' },
    signature: [],
    description: {
      en: 'The category reserved for warframes that do not stand out in any single category — the poor souls who desperately need a rework.',
      'pt-BR': 'A categoria reservada pros warframes que não se destacam em nenhuma categoria — os coitados que precisam desesperadamente de um rework.',
    },
    warframes: ['Banshee'] },
];

function archName(a) { return (a.name && (a.name[state.locale] || a.name[DEFAULT_LOCALE])) || ''; }
function archDesc(a) { return (a.description && (a.description[state.locale] || a.description[DEFAULT_LOCALE])) || ''; }

const STAT_COLORS = {
  dano:          '#e74c3c',
  sobrevivencia: '#3498db',
  suporte:       '#2ecc71',
  controle:      '#f39c12',
  furtividade:   '#9b59b6',
};

function blendStatColors(stats) {
  if (!stats || stats.length === 0) return '#888888';
  const rgbs = stats.map(s => {
    const hex = STAT_COLORS[s];
    return [parseInt(hex.slice(1,3),16), parseInt(hex.slice(3,5),16), parseInt(hex.slice(5,7),16)];
  });
  const sum = rgbs.reduce((a, c) => [a[0]+c[0], a[1]+c[1], a[2]+c[2]], [0,0,0]);
  const avg = sum.map(v => Math.round(v / rgbs.length));
  return `#${avg.map(v => v.toString(16).padStart(2,'0')).join('')}`;
}

// Simula um "contorno multicolor" via múltiplos text-shadow ao redor do glifo
// (CSS text-stroke é monocrômico). Esquerda usa a 1ª cor, meio usa a do meio,
// direita usa a última — espelha o gradiente da borda das pills.
function outlineShadow(stats, w = 1.2) {
  if (!stats || stats.length === 0) {
    const c = '#888';
    return [
      `-${w}px -${w}px 0 ${c}`, `-${w}px 0 0 ${c}`, `-${w}px ${w}px 0 ${c}`,
      `0 -${w}px 0 ${c}`, `0 ${w}px 0 ${c}`,
      `${w}px -${w}px 0 ${c}`, `${w}px 0 0 ${c}`, `${w}px ${w}px 0 ${c}`,
    ].join(', ');
  }
  const n = stats.length;
  const leftC  = STAT_COLORS[stats[0]];
  const midC   = STAT_COLORS[stats[Math.floor(n / 2)]];
  const rightC = STAT_COLORS[stats[n - 1]];
  return [
    `-${w}px -${w}px 0 ${leftC}`,
    `-${w}px 0 0 ${leftC}`,
    `-${w}px ${w}px 0 ${leftC}`,
    `0 -${w}px 0 ${midC}`,
    `0 ${w}px 0 ${midC}`,
    `${w}px -${w}px 0 ${rightC}`,
    `${w}px 0 0 ${rightC}`,
    `${w}px ${w}px 0 ${rightC}`,
  ].join(', ');
}

// Constrói um linear-gradient com N segmentos iguais e pequena transição entre eles.
// 1 stat -> cor sólida. 0 stats -> fallback cinza.
function statGradient(stats) {
  if (!stats || stats.length === 0) {
    return 'linear-gradient(90deg, #555, #555)';
  }
  if (stats.length === 1) {
    const c = STAT_COLORS[stats[0]];
    return `linear-gradient(90deg, ${c}, ${c})`;
  }
  const n = stats.length;
  const segment = 100 / n;
  // Largura da zona de transição (metade dela em cada lado da fronteira).
  // Reduz pra arquétipos com muitos stats pra manter área "chapada" visível.
  const transition = n >= 4 ? 3 : 5;
  const stops = [];
  stats.forEach((stat, i) => {
    const color = STAT_COLORS[stat];
    const segStart = i * segment;
    const segEnd = (i + 1) * segment;
    const flatStart = i === 0 ? 0 : segStart + transition;
    const flatEnd = i === n - 1 ? 100 : segEnd - transition;
    stops.push(`${color} ${flatStart.toFixed(2)}%`);
    stops.push(`${color} ${flatEnd.toFixed(2)}%`);
  });
  return `linear-gradient(90deg, ${stops.join(', ')})`;
}

// Build reverse map: warframe slug -> archetype slug
const WARFRAME_TO_ARCHETYPE = {};
ARCHETYPES.forEach(a => {
  a.warframes.forEach(w => {
    WARFRAME_TO_ARCHETYPE[w.toLowerCase()] = a.slug;
  });
});

const ALL_WARFRAMES = ARCHETYPES.flatMap(a => a.warframes).sort((a, b) => a.localeCompare(b));

// Ícone da lista por warframe. Override quando o nome-slug não casa com o arquivo
// (ex.: 'sirius & orion' tem espaço/& → usa 'sirius-orion.png'). Senão, slug.png.
const WARFRAME_ICON_OVERRIDES = {
  'sirius & orion': 'assets/icons/base/sirius-orion.png',
};
function warframeIconUrl(slug) {
  return WARFRAME_ICON_OVERRIDES[slug] || `assets/icons/base/${slug}.png`;
}

// ── Quest data (Glossário §19) ────────────────────────────────────────────────

const QUEST_ARCS = [
  { key: 'arc1', label: { pt: 'Arco 1 — O Despertar do Tenno', en: 'Arc 1: Tenno Awakening' } },
  { key: 'arc2', label: { pt: 'Arco 2 — Isto É O Que Você É',  en: 'Arc 2: This Is What You Are' } },
  { key: 'arc3', label: { pt: 'Arco 3 — A Nova Guerra',          en: 'Arc 3: The New War' } },
  {
    key: 'arc4',
    label: { pt: 'Arco 4 — A Saga do Void', en: 'Arc 4: Void War Saga' },
    subarcs: [
      { key: 'kalymos', label: { pt: 'Sequência Kalymos', en: 'Kalymos Sequence Arc' } },
      { key: 'jade',    label: { pt: 'Arco Jade Shadows', en: 'Jade Shadows Arc' } },
      { key: 'oneoff',  label: { pt: 'Avulsos',            en: 'One-Offs' } },
    ],
  },
  { key: 'side',     label: { pt: 'Missões Secundárias', en: 'Side Quests' } },
  { key: 'warframe', label: { pt: 'Missões de Warframe', en: 'Warframe Quests' } },
];

const QUESTS = [
  // ─── Arc 1 ───────────────────────────────────────────────────────────────────
  { slug: 'awakening', name: 'Awakening', arc: 'arc1',
    image: "https://wiki.warframe.com/images/Awakening.png?45dfd", mr: 0,
    howToGet: { pt: ["Primeiro login"], en: ["First Login"] },
    rewards: [
      { name: { pt: "Warframe inicial", en: "Starter Warframe" } },
      { name: { pt: "Armas iniciais", en: "Starter Weapons" } },
    ],
    desc: { pt: "Tutorial de Warframe — apresenta o mundo, os Tenno e as mecânicas básicas. Você escolhe seu primeiro Warframe entre Excalibur, Mag ou Volt.",
            en: "Warframe's tutorial — introduces the world, the Tenno, and basic mechanics. You choose your first Warframe among Excalibur, Mag, or Volt." } },
  { slug: 'vors-prize', name: "Vor's Prize", arc: 'arc1',
    image: "https://wiki.warframe.com/images/Vor%27sPrize.png?46f54", mr: 0,
    howToGet: { pt: ["Awakening"], en: ["Awakening"] },
    rewards: [
      { name: { pt: "Burston diagrama", en: "Burston blueprint" }, icon: "https://wiki.warframe.com/images/Burston.png?3e21c" },
      { name: { pt: "25,000 Credits", en: "25,000 Credits" }, icon: "https://wiki.warframe.com/images/Credits64.png?6022f" },
    ],
    desc: { pt: "Jornada obrigatória que te leva pelas missões básicas do Mapa Estelar e apresenta o sistema de mods. O ponto de partida de toda a progressão.",
            en: "Mandatory quest walking you through basic Star Chart missions and introducing the mod system. The starting point for all in-game progression." } },
  { slug: 'the-teacher', name: 'The Teacher', arc: 'arc1',
    image: "https://wiki.warframe.com/images/TheTeacher.png?d981e", mr: 0,
    howToGet: { pt: ["Vor's Prize"], en: ["Vor's Prize"] },
    rewards: [
      { name: { pt: "Thornbak", en: "Thornbak" }, icon: "https://wiki.warframe.com/images/Thornbak.png?ac555" },
      { name: { pt: "Mod Segment", en: "Mod Segment" }, icon: "https://wiki.warframe.com/images/OrbiterSegment.png?24bfe" },
      { name: { pt: "Acesso a Cetus", en: "Access to Cetus" } },
      { name: { pt: "Stormbringer", en: "Stormbringer" }, icon: "https://wiki.warframe.com/images/StormbringerMod.png?7215d" },
      { name: { pt: "Cryo Rounds", en: "Cryo Rounds" }, icon: "https://wiki.warframe.com/images/CryoRoundsMod.png?dee2a" },
      { name: { pt: "Vitality", en: "Vitality" }, icon: "https://wiki.warframe.com/images/VitalityMod.png?ac1e5" },
      { name: { pt: "Pressure Point", en: "Pressure Point" }, icon: "https://wiki.warframe.com/images/PressurePointMod.png?d9969" },
      { name: { pt: "Fury", en: "Fury" }, icon: "https://wiki.warframe.com/images/FuryMod.png?f0224" },
      { name: { pt: "Serration", en: "Serration" }, icon: "https://wiki.warframe.com/images/SerrationMod.png?0b8ff" },
      { name: { pt: "Hornet Strike", en: "Hornet Strike" }, icon: "https://wiki.warframe.com/images/HornetStrikeMod.png?37dcd" },
      { name: { pt: "Heated Charge", en: "Heated Charge" }, icon: "https://wiki.warframe.com/images/HeatedChargeMod.png?2a534" },
      { name: { pt: "Continuity", en: "Continuity" }, icon: "https://wiki.warframe.com/images/ContinuityMod.png?06c37" },
      { name: { pt: "Equilibrium", en: "Equilibrium" }, icon: "https://wiki.warframe.com/images/EquilibriumMod.png?a6c8d" },
      { name: { pt: "Redirection", en: "Redirection" }, icon: "https://wiki.warframe.com/images/RedirectionMod.png?e62e9" },
      { name: { pt: "500 Endo", en: "500 Endo" }, icon: "https://wiki.warframe.com/images/Endo.png?34c5c" },
      { name: { pt: "30,000 Credits", en: "30,000 Credits" }, icon: "https://wiki.warframe.com/images/Credits.png?a6ad7" },
    ],
    desc: { pt: "Jornada guiada pelo Cephalon Ordis que ensina polaridades, fusão e como maxar um mod. Recomendada logo após Vor's Prize.",
            en: "A guided quest from Cephalon Ordis teaching polarities, fusion, and how to max a mod. Recommended right after Vor's Prize." } },
  { slug: 'vox-solaris', name: 'Vox Solaris', arc: 'arc1',
    image: "https://wiki.warframe.com/images/VoxSolaris.png?14cd8", mr: 0,
    howToGet: { pt: ["Talk with Eudico in Fortuna"], en: ["Talk with Eudico in Fortuna"] },
    rewards: [
      { name: { pt: "K-Drive Launcher", en: "K-Drive Launcher" }, icon: "https://wiki.warframe.com/images/K-DriveLauncher.png?f892b" },
      { name: { pt: "Garuda Diagrama", en: "Garuda Blueprint" }, icon: "https://wiki.warframe.com/images/GarudaIcon272.png?55b93" },
      { name: { pt: "Acesso a Solaris United sindicato", en: "Access to Solaris United syndicate" } },
      { name: { pt: "Acesso a Fortuna bounties", en: "Access to Fortuna bounties" } },
    ],
    desc: { pt: 'Introdução a Fortuna (Vênus) e ao mundo aberto Orb Vallis. Apresenta a sindicato Solaris United e a luta dos trabalhadores contra Nef Anyo.',
            en: "Introduction to Fortuna (Venus) and the Orb Vallis open world. Introduces Solaris United and the workers' struggle against Nef Anyo." } },
  { slug: 'once-awake', name: 'Once Awake', arc: 'arc1',
    image: "https://wiki.warframe.com/images/OnceAwake.png?663f7", mr: 1,
    howToGet: { pt: ["Mercury Junction"], en: ["Mercury Junction"] },
    rewards: [
      { name: { pt: "Molten Impact", en: "Molten Impact" }, icon: "https://wiki.warframe.com/images/MoltenImpactMod.png?74e14" },
      { name: { pt: "Heat Sword (Diagrama)", en: "Heat Sword (Blueprint)" }, icon: "https://wiki.warframe.com/images/HeatSword.png?4bd81" },
    ],
    desc: { pt: "Jornada curta que apresenta os Corpus como ameaça crescente e abre caminhos narrativos sobre o papel dos Tenno no sistema solar.",
            en: "A short quest introducing the Corpus as a growing threat and opening narrative threads about the Tenno's role in the solar system." } },
  { slug: 'heart-of-deimos', name: 'Heart of Deimos', arc: 'arc1',
    image: "https://wiki.warframe.com/images/HeartofDeimos.jpg?8c281", mr: 0,
    howToGet: { pt: ["Earth to Mars Junction"], en: ["Earth to Mars Junction"] },
    rewards: [
      { name: { pt: "Xaku diagrama", en: "Xaku blueprint" }, icon: "https://wiki.warframe.com/images/XakuIcon272.png?ad108" },
      { name: { pt: "Deimos Necralisk Captura Scene", en: "Deimos Necralisk Captura Scene" }, icon: "https://wiki.warframe.com/images/DeimosNecraliskScene.png?e9880" },
      { name: { pt: "Acesso a Entrati sindicato", en: "Access to Entrati syndicate" } },
      { name: { pt: "Acesso a Necralisk bounties", en: "Access to Necralisk bounties" } },
      { name: { pt: "Voidrig diagrama", en: "Voidrig blueprint" }, icon: "https://wiki.warframe.com/images/Voidrig.png?1b92f" },
      { name: { pt: "Voidrig Capsule diagrama", en: "Voidrig Capsule blueprint" }, icon: "https://wiki.warframe.com/images/VoidrigCapsule.png?fd45f" },
      { name: { pt: "Voidrig Casing diagrama", en: "Voidrig Casing blueprint" }, icon: "https://wiki.warframe.com/images/VoidrigCasing.png?9e29b" },
      { name: { pt: "Voidrig Engine diagrama", en: "Voidrig Engine blueprint" }, icon: "https://wiki.warframe.com/images/VoidrigEngine.png?7f653" },
      { name: { pt: "Voidrig Weapon Pod diagrama", en: "Voidrig Weapon Pod blueprint" }, icon: "https://wiki.warframe.com/images/VoidrigWeaponPod.png?faa1c" },
      { name: { pt: "Mirror Defense", en: "Mirror Defense" } },
    ],
    desc: { pt: 'Introduz Deimos e o mundo aberto Cambion Drift, dominado pela Infestação. Apresenta a família Entrati e abre o caminho para o Helminth.',
            en: 'Introduces Deimos and the Cambion Drift open world. Meets the Entrati family and opens the path to the Helminth system.' } },
  { slug: 'the-archwing', name: 'The Archwing', arc: 'arc1',
    image: 'https://wiki.warframe.com/images/TheArchwing.png', mr: 0,
    howToGet: { pt: ['Mensagem no Orbiter'],                        en: ['Inbox message'] },
    rewards: [
      { name: { pt: 'Odonata', en: 'Odonata' }, icon: 'https://wiki.warframe.com/images/Odonata.png' },
      { name: { pt: 'Lançador de Archwing', en: 'Archwing Launcher' }, icon: 'https://wiki.warframe.com/images/ArchwingLauncherSegment.png' },
    ],
    desc: { pt: 'Desbloqueia o modo de voo espacial Archwing — necessário para missões no espaço aberto e Railjack. Recompensa o launcher e o diagrama do Odonata.',
            en: 'Unlocks Archwing space flight mode — required for open-space missions and Railjack. Rewards the launcher segment and the Odonata Archwing blueprint.' } },
  // ─── Arc 2 ───────────────────────────────────────────────────────────────────
  { slug: 'natah', name: 'Natah', arc: 'arc2',
    image: "https://wiki.warframe.com/images/NatahQuest.png?78356", mr: 0,
    howToGet: { pt: ["Uranus Junction"], en: ["Uranus Junction"] },
    rewards: [
      { name: { pt: "Exilus Warframe Adapter", en: "Exilus Warframe Adapter" }, icon: "https://wiki.warframe.com/images/ExilusWarframeAdapter.png?bfcaf" },
    ],
    desc: { pt: "Jornada de história na Lua que segue uma investigação Sentient e prepara o caminho para The Second Dream.",
            en: "A story quest on Lua following a Sentient investigation, setting up The Second Dream." } },
  { slug: 'the-second-dream', name: 'The Second Dream', arc: 'arc2',
    image: "https://wiki.warframe.com/images/TheSecondDream.png?b5fc2", mr: 0,
    howToGet: { pt: ["Completar Natah (Quest)", "Neptune Junction"], en: ["Completed Natah (Quest)", "Neptune Junction"] },
    rewards: [
      { name: { pt: "Operator Unlocked", en: "Operator Unlocked" } },
      { name: { pt: "Broken War", en: "Broken War" }, icon: "https://wiki.warframe.com/images/BrokenWar.png?f9cf1" },
      { name: { pt: "Focus Unlocked", en: "Focus Unlocked" } },
      { name: { pt: "Lua Access", en: "Lua Access" } },
      { name: { pt: "Scar Sigil", en: "Scar Sigil" }, icon: "https://wiki.warframe.com/images/ScarSigil%28SxWhite%29.png?98182" },
      { name: { pt: "Rising Tide Jornada", en: "Rising Tide Quest" } },
    ],
    desc: { pt: "Um marco da história de Warframe e um ponto de virada do jogo — desbloqueia uma forma de jogar totalmente nova. Melhor vivida sem spoilers.",
            en: "A milestone in Warframe's story and a turning point for the game — unlocks a whole new way to play. Best experienced unspoiled." } },
  { slug: 'the-war-within', name: 'The War Within', arc: 'arc2',
    image: "https://wiki.warframe.com/images/TheWarWithin.png?f6123", mr: 5,
    howToGet: { pt: ["Completar The Second Dream", "Pluto Junction"], en: ["Completed The Second Dream", "Pluto Junction"] },
    rewards: [
      { name: { pt: "Broken Scepter", en: "Broken Scepter" }, icon: "https://wiki.warframe.com/images/BrokenScepter.png?325b2" },
      { name: { pt: "Orvius (Diagrama)", en: "Orvius (Blueprint)" }, icon: "https://wiki.warframe.com/images/Orvius.png?d4116" },
      { name: { pt: "Transference Unlocked", en: "Transference Unlocked" } },
      { name: { pt: "The Plumas Access", en: "The Quills Access" } },
      { name: { pt: "Vox Solaris Access", en: "Vox Solaris Access" } },
      { name: { pt: "Necraloid Access", en: "Necraloid Access" } },
      { name: { pt: "Riven Mod", en: "Riven Mod" }, icon: "https://wiki.warframe.com/images/RivenVeiledMod.png?72ada" },
      { name: { pt: "Incursão Access", en: "Sortie Access" } },
      { name: { pt: "Kuva Fortress Access", en: "Kuva Fortress Access" } },
      { name: { pt: "Kuva Lich Access", en: "Kuva Lich Access" } },
      { name: { pt: "Grineer Queens Glyph", en: "Grineer Queens Glyph" } },
      { name: { pt: "Personal Quarters Segment Diagrama", en: "Personal Quarters Segment Blueprint" }, icon: "https://wiki.warframe.com/images/OrbiterSegment.png?24bfe" },
      { name: { pt: "Conjunction Survival Access", en: "Conjunction Survival Access" } },
      { name: { pt: "Voruna Leverian access", en: "Voruna Leverian access" }, icon: "assets/icons/base/voruna.png" },
    ],
    desc: { pt: "Continua o arco anterior e desbloqueia o Kuva — recurso essencial para rolar Rivens — além de novos poderes.",
            en: "Continues the previous arc and unlocks Kuva — the key resource for re-rolling Rivens — along with new powers." } },
  { slug: 'rising-tide', name: 'Rising Tide', arc: 'arc2',
    image: "https://wiki.warframe.com/images/RisingTide.png?9c4e0", mr: 0,
    howToGet: { pt: ["Completar The War Within"], en: ["Completed The War Within"] },
    rewards: [
      { name: { pt: "Railjack", en: "Railjack" }, icon: "https://wiki.warframe.com/images/Railjack.png?2cf09" },
    ],
    desc: { pt: 'Jornada de construção do Railjack — sua nave de guerra para missões Empyrean. Você recupera e restaura uma nave antiga com a ajuda do Cephalon Cy.',
            en: "The Railjack building quest — your warship for Empyrean missions. You recover and restore an ancient ship with Cephalon Cy's guidance." } },
  { slug: 'chains-of-harrow', name: 'Chains of Harrow', arc: 'arc2',
    image: "https://wiki.warframe.com/images/ChainsofHarrow.png?72f56", mr: 4,
    howToGet: { pt: ["Completar The War Within", "Visit Onkko in Cetus"], en: ["Completed The War Within", "Visit Onkko in Cetus"] },
    rewards: [
      { name: { pt: "Harrow Diagrama", en: "Harrow Blueprint" }, icon: "https://wiki.warframe.com/images/HarrowIcon272.png?bebac" },
      { name: { pt: "Acesso a Iron Wake", en: "Access to Iron Wake" } },
      { name: { pt: "Acesso a Follie's Hunt", en: "Access to Follie's Hunt" }, icon: "assets/icons/base/follie.png" },
    ],
    desc: { pt: "Jornada de terror psicológico a bordo de uma nave infestada do Red Veil. Recompensa o Warframe Harrow.",
            en: "A psychological-horror quest aboard an infested Red Veil ship. Rewards the Harrow Warframe." } },
  { slug: 'apostasy-prologue', name: 'Apostasy Prologue', arc: 'arc2',
    image: "https://wiki.warframe.com/images/ApostasyPrologue.png?83f93", mr: 0,
    howToGet: { pt: ["Completar Chains of Harrow", "Personal Quarters Segment"], en: ["Completed Chains of Harrow", "Personal Quarters Segment"] },
    rewards: [
      { name: { pt: 'Conclui o arco da Lotus (Apostasy)', en: 'Completes the Lotus arc (Apostasy)' } },
      { name: { pt: 'Pedestal da Lotus nos Aposentos Pessoais', en: 'Lotus plinth in Personal Quarters' } },
    ],
    desc: { pt: "Jornada curta e atmosférica que fecha o arco anterior. É puramente narrativa, sem recompensas de item.",
            en: "A short, atmospheric quest that closes the previous arc. It's purely narrative, with no item rewards." } },
  { slug: 'the-sacrifice', name: 'The Sacrifice', arc: 'arc2',
    image: 'https://wiki.warframe.com/images/TheSacrifice.png', mr: 0,
    howToGet: { pt: ['Mensagem (após Apostasy Prologue)'], en: ['Inbox (after Apostasy Prologue)'] },
    rewards: [
      { name: { pt: 'Excalibur Umbra', en: 'Excalibur Umbra' }, icon: 'https://wiki.warframe.com/images/ExcaliburUmbra.png' },
      { name: { pt: 'Skiajati', en: 'Skiajati' }, icon: 'https://wiki.warframe.com/images/Skiajati.png' },
      { name: { pt: 'War', en: 'War' }, icon: 'https://wiki.warframe.com/images/War.png' },
    ],
    desc: { pt: "Jornada cinematográfica do arco principal. Recompensa o Excalibur Umbra e a nikana Skiajati.",
            en: "A cinematic main-story quest. Rewards Excalibur Umbra and the Skiajati nikana." } },
  // ─── Arc 3 ───────────────────────────────────────────────────────────────────
  { slug: 'prelude-to-war', name: 'Prelude to War', arc: 'arc3',
    image: "https://wiki.warframe.com/images/PreludeToWar.png?37cb0", mr: 0,
    howToGet: { pt: ['Mensagem (após The Sacrifice)'],       en: ['Inbox (after The Sacrifice)'] },
    rewards: [
      { name: { pt: 'Prólogo narrativo (prepara The New War)', en: 'Narrative prologue (sets up The New War)' } },
    ],
    desc: { pt: "Prólogo curto que prepara o cenário para The New War.",
            en: "A short prologue that sets the stage for The New War." } },
  { slug: 'the-new-war', name: 'The New War', arc: 'arc3',
    image: 'https://wiki.warframe.com/images/TheNewWar.jpg', mr: 0,
    howToGet: { pt: ['Ter uma Railjack', 'Ter um Amp', 'Completar Prelude to War'],
                en: ['Own a Railjack', 'Own an Amp', 'Completed Prelude to War'] },
    rewards: [
      { name: { pt: 'Sirocco', en: 'Sirocco Amp' }, icon: 'https://wiki.warframe.com/images/Sirocco.png?76b26' },
      { name: { pt: "Skin do Sirocco", en: "Sirocco's Amp Skin" }, icon: 'https://wiki.warframe.com/images/Sirocco.png?76b26' },
      { name: { pt: 'Nataruk', en: 'Nataruk' }, icon: 'https://wiki.warframe.com/images/Nataruk.png?4b210' },
      { name: { pt: 'Rumblejack', en: 'Rumblejack' }, icon: 'https://wiki.warframe.com/images/Rumblejack.png?867de' },
      { name: { pt: 'Booster de Afinidade (3 dias)', en: '3 Day Affinity Booster' }, icon: 'https://wiki.warframe.com/images/AffinityBooster%28xLight%29.png?1e12d' },
      { name: { pt: 'Booster de Créditos (3 dias)', en: '3 Day Credit Booster' }, icon: 'https://wiki.warframe.com/images/CreditBooster%28xLight%29.png?0be61' },
      { name: { pt: 'Cena do Acampamento do Drifter', en: 'The Drifter Camp Scene' }, icon: 'https://wiki.warframe.com/images/TheDrifterCampScene.png?0ec73' },
      { name: { pt: 'A Lost Time (decoração)', en: 'A Lost Time Decoration' }, icon: 'https://wiki.warframe.com/images/FamilyPortrait.png?cdb63' },
      { name: { pt: 'Cajado Narmer do Ballas (decoração)', en: "Ballas' Narmer Staff Decoration" } },
      { name: { pt: 'Drifter desbloqueado', en: 'Drifter Unlocked' } },
      { name: { pt: 'Acesso às Narmer Bounties', en: 'Access to Narmer Bounties' } },
      { name: { pt: 'Acesso às Deepmines', en: 'Access to Deepmines' } },
    ],
    desc: { pt: "A maior jornada do jogo — horas de cinematics com três personagens jogáveis. Conclui o arco Sentient e desbloqueia os Archon Hunts semanais.",
            en: "The game's biggest quest — hours of cinematics across three playable characters. Concludes the Sentient arc and unlocks weekly Archon Hunts." } },
  { slug: 'the-duviri-paradox', name: 'The Duviri Paradox', arc: 'arc3',
    image: "https://wiki.warframe.com/images/TheDuviriParadox.png?d5933", mr: 0,
    howToGet: { pt: ["Uranus Junction"], en: ["Uranus Junction"] },
    rewards: [
      { name: { pt: "Histornam Kaithe", en: "Histornam Kaithe" }, icon: "https://wiki.warframe.com/images/HistornamKaithe.png?f1e11" },
      { name: { pt: "Sun & Moon Diagrama", en: "Sun & Moon Blueprint" }, icon: "https://wiki.warframe.com/images/Sun%26Moon.png?58a53" },
      { name: { pt: "Mountain's Edge", en: "Mountain's Edge" }, icon: "https://wiki.warframe.com/images/Mountain%27sEdgeMod.png?2a794" },
      { name: { pt: "Acesso a Duviri, The Lone Story e The Circuit", en: "Access to Duviri, The Lone Story & The Circuit" } },
    ],
    desc: { pt: 'Introduz Duviri, onde o Drifter opera sozinho. Desbloqueia o Incarnon Genesis — upgrades permanentes para armas clássicas — e o sistema de Decrees.',
            en: "Introduces Duviri, a paradoxical world where the Drifter operates alone. Unlocks Incarnon Genesis — permanent weapon upgrades — and the Decree system." } },
  // ─── Arc 4 — Kalymos Sequence ────────────────────────────────────────────────
  { slug: 'whispers-in-the-walls', name: 'Whispers in the Walls', arc: 'arc4', subarc: 'kalymos',
    image: "https://wiki.warframe.com/images/WhispersintheWalls.png?1b514", mr: 0,
    howToGet: { pt: ["Completar Heart of Deimos", "Completar The New War"], en: ["Completed Heart of Deimos", "Completed The New War"] },
    rewards: [
      { name: { pt: "Qorvex Diagrama", en: "Qorvex Blueprint" }, icon: "https://wiki.warframe.com/images/QorvexIcon272.png?9d1dd" },
      { name: { pt: "Weapon Slot", en: "Weapon Slot" } },
      { name: { pt: "Grimoire (Rank 30, Catalyst pre-installed)", en: "Grimoire (Rank 30, Catalyst pre-installed)" }, icon: "https://wiki.warframe.com/images/Grimoire.png?e8ce6" },
      { name: { pt: "Melee Upgrade Segment", en: "Melee Upgrade Segment" }, icon: "https://wiki.warframe.com/images/MeleeUpgradeSegment.png?da2c5" },
      { name: { pt: "Mentor's Legacy", en: "Mentor's Legacy" }, icon: "https://wiki.warframe.com/images/Mentor%27sLegacyMod.png?a522c" },
      { name: { pt: "Melee Arcane Adapter", en: "Melee Arcane Adapter" }, icon: "https://wiki.warframe.com/images/MeleeArcaneAdapter.png?a96fa" },
      { name: { pt: "Acesso a Cavia sindicato", en: "Access to Cavia syndicate" }, icon: "https://wiki.warframe.com/images/CaviaSyndicateLogo1%28xLight%29.png?406b5" },
      { name: { pt: "Acesso a extra nodes in Deimos", en: "Access to extra nodes in Deimos" } },
    ],
    desc: { pt: 'Revela os experimentos do Albrecht Entrati e abre Höllvania (subterrâneo de Deimos). Desbloqueia os Netracells — missões de endgame com Archon Shards.',
            en: "Reveals Albrecht Entrati's experiments and opens Höllvania beneath Deimos. Unlocks Netracells — endgame missions dropping Archon Shards." } },
  { slug: 'the-lotus-eaters', name: 'The Lotus Eaters', arc: 'arc4', subarc: 'kalymos',
    image: "https://wiki.warframe.com/images/TheLotusEaters.png?bef0c", mr: 0,
    howToGet: { pt: ["Completar Whispers in the Walls"], en: ["Completed Whispers in the Walls"] },
    rewards: [
      { name: { pt: "Arthur's KinePage", en: "Arthur's KinePage" } },
    ],
    desc: { pt: "Jornada de história recente que aprofunda o lore do Void e dos experimentos de Albrecht Entrati.",
            en: "A recent story quest deepening the lore of the Void and Albrecht Entrati's experiments." } },
  { slug: 'the-hex', name: 'The Hex', arc: 'arc4', subarc: 'kalymos',
    image: "https://wiki.warframe.com/images/TheHex.png?29e5d", mr: 0,
    howToGet: { pt: ["The Duviri Paradox", "The Lotus Eaters"], en: ["The Duviri Paradox", "The Lotus Eaters"] },
    rewards: [
      { name: { pt: "Cyte-09 diagrama", en: "Cyte-09 blueprint" }, icon: "https://wiki.warframe.com/images/Cyte-09Icon272.png?1a06f" },
      { name: { pt: "Magnetic Might", en: "Magnetic Might" }, icon: "https://wiki.warframe.com/images/MagneticMightMod.png?2a86c" },
      { name: { pt: "Forma", en: "Forma" }, icon: "https://wiki.warframe.com/images/Forma.png?c7d01" },
      { name: { pt: "Atomicycle", en: "Atomicycle" }, icon: "https://wiki.warframe.com/images/AtomicycleSummon.png?6a3e2" },
      { name: { pt: "Atomicycle Summon", en: "Atomicycle Summon" }, icon: "https://wiki.warframe.com/images/AtomicycleSummon.png?6a3e2" },
      { name: { pt: "Rust Belt Livery Atomicycle Skin", en: "Rust Belt Livery Atomicycle Skin" }, icon: "https://wiki.warframe.com/images/RustBeltLivery.png?8b5ad" },
      { name: { pt: "Standard Livery Atomicycle Skin", en: "Standard Livery Atomicycle Skin" } },
      { name: { pt: "Acesso a The Hex sindicato", en: "Access to The Hex syndicate" }, icon: "https://wiki.warframe.com/images/HexIcon%28xLight%29.png?c8c7d" },
      { name: { pt: "Acesso a Höllvania missions and Bounties", en: "Access to Höllvania missions and Bounties" } },
      { name: { pt: "Protokol Longsword Skin", en: "Protokol Longsword Skin" }, icon: "https://wiki.warframe.com/images/ProtokolLongswordSkin.png?facb9" },
      { name: { pt: "The Hex Noggle Collection", en: "The Hex Noggle Collection" } },
      { name: { pt: "Acesso a Isleweaver in Duviri", en: "Access to Isleweaver in Duviri" } },
    ],
    desc: { pt: 'Apresenta Jade e seus aliados únicos. Jornada narrativa e de ação que culmina na obtenção do diagrama do Jade Warframe.',
            en: "Introduces Jade and her unique allies. A narrative and action quest culminating in the Jade Warframe blueprint." } },
  { slug: 'the-old-peace', name: 'The Old Peace', arc: 'arc4', subarc: 'kalymos',
    image: "https://wiki.warframe.com/images/TheOldPeace.png?439cc", mr: 0,
    howToGet: { pt: ["The Lotus Eaters"], en: ["The Lotus Eaters"] },
    rewards: [
      { name: { pt: "Uriel diagrama", en: "Uriel blueprint" }, icon: "https://wiki.warframe.com/images/UrielIcon272.png?d8ae1" },
      { name: { pt: "Operator Atmosphor accessory", en: "Operator Atmosphor accessory" }, icon: "https://wiki.warframe.com/images/OperatorAtmosphor.png?a0afe" },
      { name: { pt: "75 Lyroic Bridge", en: "75 Lyroic Bridge" }, icon: "https://wiki.warframe.com/images/LyroicBridge.png?0dccd" },
      { name: { pt: "75 Ren Hypercore", en: "75 Ren Hypercore" }, icon: "https://wiki.warframe.com/images/RenHypercore.png?238dc" },
      { name: { pt: "75 Ascaris Prime", en: "75 Ascaris Prime" }, icon: "https://wiki.warframe.com/images/AscarisPrime.png?a4667" },
      { name: { pt: "Acesso a Dark Refractory", en: "Access to Dark Refractory" } },
      { name: { pt: "Acesso a The Perita Rebellion", en: "Access to The Perita Rebellion" } },
      { name: { pt: "Acesso a The Descendia", en: "Access to The Descendia" } },
      { name: { pt: "Acesso a La Cathédrale (through Sanctum Anatomica)", en: "Access to La Cathédrale (through Sanctum Anatomica)" } },
    ],
    desc: { pt: 'Encerra a Sequência Kalymos com revelações sobre o passado de Albrecht Entrati e o equilíbrio entre o Void e o mundo material.',
            en: "Closes the Kalymos Sequence with revelations about Albrecht Entrati's past and the balance between the Void and the material world." } },
  // ─── Arc 4 — Jade Shadows Arc ────────────────────────────────────────────────
  { slug: 'jade-shadows', name: 'Jade Shadows', arc: 'arc4', subarc: 'jade',
    image: "https://wiki.warframe.com/images/JadeShadows.png?b962c", mr: 0,
    howToGet: { pt: ["Completar The New War"], en: ["Completed The New War"] },
    rewards: [
      { name: { pt: "Jade Diagrama", en: "Jade Blueprint" }, icon: "https://wiki.warframe.com/images/JadeIcon272.png?f1fb2" },
      { name: { pt: "Stalker's Lair Scene (Captura)", en: "Stalker's Lair Scene (Captura)" }, icon: "https://wiki.warframe.com/images/Stalker%27sLairScene.png?c4966" },
      { name: { pt: "Alone Portrait", en: "Alone Portrait" } },
      { name: { pt: "United Portrait", en: "United Portrait" } },
      { name: { pt: "Protector Portrait", en: "Protector Portrait" } },
    ],
    desc: { pt: 'Jornada que aprofunda os segredos e a origem do Jade Warframe, expandindo o universo do Void War Saga.',
            en: "A quest deepening the secrets and origin of the Jade Warframe, expanding the Void War Saga universe." } },
  { slug: 'jade-shadows-constellations', name: 'Jade Shadows: Constellations', arc: 'arc4', subarc: 'jade',
    image: "https://wiki.warframe.com/images/JadeShadowsConstellations.png?46609", mr: 0,
    howToGet: { pt: ["Completar Jade Shadows"], en: ["Completed Jade Shadows"] },
    rewards: [
      { name: { pt: "Sirius & Orion (diagrama)", en: "Sirius & Orion (blueprint)" }, icon: "https://wiki.warframe.com/images/SiriusOrion.png?3a1d6" },
      { name: { pt: "Sirius' Swaddle Syandana", en: "Sirius' Swaddle Syandana" }, icon: "https://wiki.warframe.com/images/Sirius%27SwaddleSyandana.png?a2136" },
      { name: { pt: "Orion's Swaddle Syandana", en: "Orion's Swaddle Syandana" }, icon: "https://wiki.warframe.com/images/Orion%27sSwaddleSyandana.png?a2136" },
      { name: { pt: "Stay Together Display", en: "Stay Together Display" }, icon: "https://wiki.warframe.com/images/StayTogetherDisplay.png?db58a" },
      { name: { pt: "Sirius Alone Display", en: "Sirius Alone Display" }, icon: "https://wiki.warframe.com/images/SiriusAloneDisplay.png?18674" },
      { name: { pt: "Orion Alone Display", en: "Orion Alone Display" }, icon: "https://wiki.warframe.com/images/OrionAloneDisplay.png?db58a" },
    ],
    desc: { pt: 'Jornada do Update 43 que introduz o frame duplo Sirius & Orion e continua o Void War Saga com novos desenvolvimentos no arco de Jade.',
            en: "The Update 43 quest introducing the dual frame Sirius & Orion and continuing the Void War Saga in the Jade arc." } },
  // ─── Arc 4 — One-Offs ────────────────────────────────────────────────────────
  { slug: 'angels-of-the-zariman', name: 'Angels of the Zariman', arc: 'arc4', subarc: 'oneoff',
    image: "https://wiki.warframe.com/images/AngelsoftheZariman.jpg?d1b7f", mr: 0,
    howToGet: { pt: ["Completar \"The New War\""], en: ["Completed \"The New War\""] },
    rewards: [
      { name: { pt: "1 Voidplume Pinion", en: "1 Voidplume Pinion" }, icon: "https://wiki.warframe.com/images/VoidplumePinion.png?5e728" },
      { name: { pt: "Operator Voidshell Set", en: "Operator Voidshell Set" }, icon: "https://wiki.warframe.com/images/VoidshellSuit.png?e6c0f" },
      { name: { pt: "Drifter Voidshell Set", en: "Drifter Voidshell Set" }, icon: "https://wiki.warframe.com/images/SuitAdultVoidshell.png?9dd70" },
      { name: { pt: "Acesso a the Dormizone", en: "Access to the Dormizone" } },
      { name: { pt: "Acesso a The Holdfasts Sindicato", en: "Access to The Holdfasts Syndicate" } },
      { name: { pt: "Acesso a Chrysalith Bounties (Gyre)", en: "Access to Chrysalith Bounties (Gyre)" }, icon: "https://wiki.warframe.com/images/GyreIcon272.png?4c4ae" },
    ],
    desc: { pt: 'Abre a nave Zariman Ten Zero como hub e apresenta o sindicato Holdfast e Cavalero (Incarnon). Desbloqueia missões como Void Cascade e Void Flood.',
            en: "Opens the Zariman Ten Zero ship as a hub and introduces the Holdfast syndicate and Cavalero (Incarnon). Unlocks Void Cascade and Void Flood missions." } },
  // ─── Side Quests ─────────────────────────────────────────────────────────────
  { slug: 'sayas-vigil', name: "Saya's Vigil", arc: 'side',
    image: "https://wiki.warframe.com/images/Saya%27sVigil.png?2d84f", mr: 0,
    howToGet: { pt: ["Completar Vor's Prize", "At least 1 bounty completed"], en: ["Completed Vor's Prize", "At least 1 bounty completed"] },
    rewards: [
      { name: { pt: "Gara Diagrama", en: "Gara Blueprint" }, icon: "https://wiki.warframe.com/images/GaraIcon272.png?3956f" },
      { name: { pt: "Acesso a Shrine Defense mission", en: "Access to Shrine Defense mission" }, icon: "https://wiki.warframe.com/images/KoumeiIcon272.png?5abcc" },
    ],
    desc: { pt: 'Jornada de introdução a Cetus (Terra) e às Planícies de Eidolon. Apresenta Konzu e Saya enquanto investiga o paradeiro do marido desaparecido dela.',
            en: "Introduction to Cetus and the Plains of Eidolon. Introduces Konzu and Saya as you investigate her missing husband's whereabouts." } },
  { slug: 'howl-of-the-kubrow', name: 'Howl of the Kubrow', arc: 'side',
    image: "https://wiki.warframe.com/images/HowloftheKubrow.png?ae539", mr: 0,
    howToGet: { pt: ["Venus to Mercury Junction"], en: ["Venus to Mercury Junction"] },
    rewards: [
      { name: { pt: "Incubator Segment", en: "Incubator Segment" }, icon: "https://wiki.warframe.com/images/IncubatorSegment.png?c7a73" },
      { name: { pt: "Balanced Posture", en: "Balanced Posture" }, icon: "https://wiki.warframe.com/images/BalancedPostureMod.png?1eb2a" },
    ],
    desc: { pt: 'Introduz o sistema de Kubrow — companheiros caninos criados de ovos. Você aprende a incubar e criar um Kubrow como companion de combate.',
            en: 'Introduces the Kubrow system — canine companions raised from eggs. You learn to incubate and raise a Kubrow as your combat companion.' } },
  { slug: 'stolen-dreams', name: 'Stolen Dreams', arc: 'side',
    image: "https://wiki.warframe.com/images/StolenDreams.png?5ba08", mr: 0,
    howToGet: { pt: ["Phobos Junction"], en: ["Phobos Junction"] },
    rewards: [
      { name: { pt: "Ether Daggers Diagrama", en: "Ether Daggers Blueprint" }, icon: "https://wiki.warframe.com/images/EtherDaggers.png?70d49" },
      { name: { pt: "Catalisador Orokin Diagrama", en: "Orokin Catalyst Blueprint" }, icon: "https://wiki.warframe.com/images/OrokinCatalyst.png?1d542" },
      { name: { pt: "Weekly Ayatan Treasure Hunt", en: "Weekly Ayatan Treasure Hunt" } },
    ],
    desc: { pt: 'Jornada curta investigando artefatos Orokin roubados. Apresenta Maroo, uma mercenária especializada em cofres Orokin e missões de parkour.',
            en: "A short quest investigating stolen Orokin artifacts. Introduces Maroo, a mercenary specializing in Orokin vaults and parkour missions." } },
  { slug: 'veilbreaker', name: 'Veilbreaker', arc: 'side',
    image: "https://wiki.warframe.com/images/Veilbreaker.png?1e700", mr: 0,
    howToGet: { pt: ["Completar The New War"], en: ["Completed The New War"] },
    rewards: [
      { name: { pt: "Archon Hunt Access", en: "Archon Hunt Access" } },
      { name: { pt: "Kahl's Garrison Access", en: "Kahl's Garrison Access" } },
      { name: { pt: "Break Narmer Access", en: "Break Narmer Access" } },
      { name: { pt: "Helminth Archon Shard Segment Diagrama", en: "Helminth Archon Shard Segment Blueprint" }, icon: "https://wiki.warframe.com/images/OrbiterSegment.png?24bfe" },
    ],
    desc: { pt: 'Conta a história do soldado Grineer Kahl-175 libertando companheiros do controle Sentient. Desbloqueia missões semanais de Kahl e o Styanax.',
            en: "Follows Grineer soldier Kahl-175 freeing comrades from Sentient control. Unlocks Kahl's weekly missions and the Styanax Warframe." } },
  { slug: 'patient-zero', name: 'Patient Zero', arc: 'side',
    image: "https://wiki.warframe.com/images/PatientZero.png?7efb5", mr: 0,
    howToGet: { pt: ["Completar Once Awake", "Unlocked Eris"], en: ["Completed Once Awake", "Unlocked Eris"] },
    rewards: [
      { name: { pt: "Mutalist Alad V Key", en: "Mutalist Alad V Key" }, icon: "https://wiki.warframe.com/images/MutalistAladVNavCoordinate.png?807d3" },
    ],
    desc: { pt: 'Jornada sobre o surto de Infestação em uma nave Corpus. Apresenta o perigo biológico da praga e as pesquisas do Corpus sobre sua propagação.',
            en: 'Quest about an Infestation outbreak on a Corpus ship. Highlights the biological danger of the plague and Corpus research on its spread.' } },
  { slug: 'a-man-of-few-words', name: 'A Man of Few Words', arc: 'side',
    image: "https://wiki.warframe.com/images/AManofFewWords.png?623b9", mr: 0,
    howToGet: { pt: ["Talk with Darvo in any Relay"], en: ["Talk with Darvo in any Relay"] },
    rewards: [
      { name: { pt: "Exilus Adapter", en: "Exilus Adapter" }, icon: "https://wiki.warframe.com/images/ExilusWarframeAdapter.png?bfcaf" },
      { name: { pt: "Clem Clone Diagrama", en: "Clem Clone Blueprint" }, icon: "https://wiki.warframe.com/images/Clem.png?acc8e" },
      { name: { pt: "Help Clem (Unlocked)", en: "Help Clem (Unlocked)" } },
    ],
    desc: { pt: 'Jornada curta que expande o lore de Duviri e a relação entre o Drifter e os personagens do mundo paradoxal. Complementa The Duviri Paradox.',
            en: "A short quest expanding Duviri lore and the Drifter's relationship with its characters. Complements The Duviri Paradox." } },
  // ─── Warframe Quests ─────────────────────────────────────────────────────────
  { slug: 'the-deadlock-protocol', name: 'The Deadlock Protocol', arc: 'warframe',
    image: "https://wiki.warframe.com/images/TheDeadlockProtocol.png?a879e", mr: 0,
    howToGet: { pt: ["Mastery Rank 4", "Saturn Junction"], en: ["Mastery Rank 4", "Saturn Junction"] },
    rewards: [
      { name: { pt: "Protea diagrama", en: "Protea blueprint" }, icon: "https://wiki.warframe.com/images/ProteaIcon272.png?6b6d2" },
      { name: { pt: "Xoris", en: "Xoris" }, icon: "https://wiki.warframe.com/images/Xoris.png?5c2e5" },
      { name: { pt: "Granum Void Captura Scene", en: "Granum Void Captura Scene" }, icon: "https://wiki.warframe.com/images/GranumVoidScene.png?80363" },
      { name: { pt: "Armatus, Deimos Unlocked", en: "Armatus, Deimos Unlocked" } },
    ],
    desc: { pt: 'Investiga o legado de Parvos Granum e a crise de sucessão do Corpus. Desbloqueia o Granum Void — modo extra-dimensional de endgame.',
            en: "Investigates Parvos Granum's legacy and the Corpus succession crisis. Unlocks the Granum Void — an extra-dimensional endgame mode." } },
  { slug: 'call-of-the-tempestarii', name: 'Call of the Tempestarii', arc: 'warframe',
    image: "https://wiki.warframe.com/images/CalloftheTempestarii.jpg?153a6", mr: 0,
    howToGet: { pt: ["The Deadlock Protocol completed", "Ter Railjack and retrieved Reliquary Key", "Mastery Rank 4"], en: ["The Deadlock Protocol completed", "Own a Railjack and retrieved Reliquary Key", "Mastery Rank 4"] },
    rewards: [
      { name: { pt: "Sevagoth diagrama", en: "Sevagoth blueprint" }, icon: "https://wiki.warframe.com/images/SevagothIcon272.png?89397" },
      { name: { pt: "Tempestarii Railjack Skin", en: "Tempestarii Railjack Skin" }, icon: "https://wiki.warframe.com/images/TempestariiRailjackSkin.png?12e98" },
      { name: { pt: "Sevagoth Prex", en: "Sevagoth Prex" }, icon: "https://wiki.warframe.com/images/Prex46Sevagoth.png?8be4c" },
      { name: { pt: "Sevagoth Statuette", en: "Sevagoth Statuette" }, icon: "https://wiki.warframe.com/images/SevagothStatuette.png?7b399" },
      { name: { pt: "The Cold Below Captura Scene", en: "The Cold Below Captura Scene" }, icon: "https://wiki.warframe.com/images/TheColdBelowScene.png?a9292" },
    ],
    desc: { pt: 'Jornada de Railjack que investiga o fantasma da nave Tempestarii e a lenda do Sevagoth, o Warframe das sombras.',
            en: "A Railjack quest investigating the ghost of the Tempestarii ship and the legend of Sevagoth, the shadow Warframe." } },
  { slug: 'the-new-strange', name: 'The New Strange', arc: 'warframe',
    image: "https://wiki.warframe.com/images/TheNewStrange.png?93e64", mr: 5,
    howToGet: { pt: ["Stolen Dreams", "Europa Junction"], en: ["Stolen Dreams", "Europa Junction"] },
    rewards: [
      { name: { pt: "Chroma Diagrama", en: "Chroma Blueprint" }, icon: "https://wiki.warframe.com/images/ChromaIcon272.png?e852e" },
      { name: { pt: "Acesso a Sanctuary Onslaught", en: "Access to Sanctuary Onslaught" } },
      { name: { pt: "Acesso a Daily Synthesis Task", en: "Access to Daily Synthesis Task" } },
    ],
    desc: { pt: 'Introduz o Cephalon Simaris e o sistema de Synthesis — captura de criaturas com scanner. Recompensa o Chassis do Chroma e abre o lab de Simaris.',
            en: "Introduces Cephalon Simaris and the Synthesis scanning system. Rewards the Chroma Chassis blueprint and unlocks Simaris's Relay lab." } },
  { slug: 'the-glast-gambit', name: 'The Glast Gambit', arc: 'warframe',
    image: "https://wiki.warframe.com/images/TheGlastGambit.png?2bbe2", mr: 5,
    howToGet: { pt: ["Completar The War Within"], en: ["Completed The War Within"] },
    rewards: [
      { name: { pt: "Nidus diagrama", en: "Nidus blueprint" }, icon: "https://wiki.warframe.com/images/NidusIcon272.png?1a2fa" },
    ],
    desc: { pt: 'Envolve o comerciante Ergo Glast numa aposta com Nef Anyo por uma colônia infestada. Recompensa o Neuroptics do Nidus e introduz o Infested Salvage.',
            en: "Involves merchant Ergo Glast in a bet with Nef Anyo over an Infested colony. Rewards Nidus Neuroptics and introduces the Infested Salvage mission mode." } },
  { slug: 'octavias-anthem', name: "Octavia's Anthem", arc: 'warframe',
    image: "https://wiki.warframe.com/images/Octavia%27sAnthem.png?c45c9", mr: 0,
    howToGet: { pt: ["Completar \"The Second Dream\""], en: ["Completed \"The Second Dream\""] },
    rewards: [
      { name: { pt: "\"Octavia\" Diagrama", en: "\"Octavia\" Blueprint" }, icon: "https://wiki.warframe.com/images/OctaviaIcon272.png?ad6d4" },
    ],
    desc: { pt: 'Jornada musical sobre o legado da Cephalon Suda. Você recupera a partitura do Octavia enquanto explora a história da música no universo Orokin.',
            en: "A musical quest about Cephalon Suda's legacy. You recover Octavia's score while exploring the history of music in the Orokin universe." } },
  { slug: 'sands-of-inaros', name: 'Sands of Inaros', arc: 'warframe',
    image: "https://wiki.warframe.com/images/SandsofInaros.png", mr: 0,
    howToGet: { pt: ["Mastery Rank 5"], en: ["Mastery Rank 5"] },
    rewards: [
      { name: { pt: "Inaros diagrama and parts", en: "Inaros blueprint and parts" }, icon: "https://wiki.warframe.com/images/InarosIcon272.png?aa366" },
      { name: { pt: "Sacred Urn Orbiter decoration", en: "Sacred Urn Orbiter decoration" } },
    ],
    desc: { pt: "Jornada de temática egípcia acompanhando o espírito de Inaros em rituais antigos. A única jornada comprada diretamente do Baro Ki'Teer.",
            en: "An Egyptian-themed quest following Inaros's spirit through ancient rituals. The only quest purchased directly from Baro Ki'Teer." } },
  { slug: 'hidden-messages', name: 'Hidden Messages', arc: 'warframe',
    image: "https://wiki.warframe.com/images/HiddenMessages.png", mr: 0,
    howToGet: { pt: ["Sedna Junction"], en: ["Sedna Junction"] },
    rewards: [
      { name: { pt: "Mirage Neuroptics", en: "Mirage Neuroptics" }, icon: "https://wiki.warframe.com/images/MirageIcon272.png?08564" },
      { name: { pt: "Mirage System", en: "Mirage System" }, icon: "assets/icons/base/mirage.png" },
      { name: { pt: "Mirage Chassis", en: "Mirage Chassis" }, icon: "assets/icons/base/mirage.png" },
    ],
    desc: { pt: 'Jornada de puzzles com cifras — você decifra mensagens para encontrar os componentes do Mirage. Uma das poucas jornadas focadas em enigmas sem combate intenso.',
            en: "A cipher-puzzle quest — you decode messages to find Mirage's components. One of the few quests focused entirely on riddles." } },
  { slug: 'mask-of-the-revenant', name: 'Mask of the Revenant', arc: 'warframe',
    image: "https://wiki.warframe.com/images/MaskoftheRevenant.png", mr: 0,
    howToGet: { pt: ["Observer rank with The Quills"], en: ["Observer rank with The Quills"] },
    rewards: [
      { name: { pt: "Revenant diagrama", en: "Revenant blueprint" }, icon: "assets/icons/base/revenant.png" },
    ],
    desc: { pt: 'Jornada curta nas Planícies de Eidolon investigando a origem do Revenant — um Warframe possuído por uma entidade Sentient.',
            en: "A short quest in the Plains of Eidolon investigating Revenant's origin — a Warframe possessed by a Sentient entity." } },
  { slug: 'the-silver-grove', name: 'The Silver Grove', arc: 'warframe',
    image: "https://wiki.warframe.com/images/TheSilverGrove.png", mr: 7,
    howToGet: { pt: ["The Second Dream Complete", "Mastery Rank 7"], en: ["The Second Dream Complete", "Mastery Rank 7"] },
    rewards: [
      { name: { pt: "Titania Diagrama & Parts", en: "Titania Blueprint & Parts" }, icon: "https://wiki.warframe.com/images/TitaniaIcon272.png?c9409" },
    ],
    desc: { pt: 'Jornada pastoral que protege um bosque sagrado na Terra. Requer rank 2 no sindicato New Loka. Recompensa o Titania completo.',
            en: 'A pastoral quest protecting a sacred grove on Earth. Requires New Loka syndicate Rank 2. Rewards the full Titania blueprint.' } },
  { slug: 'the-waverider', name: 'The Waverider', arc: 'warframe',
    image: "https://wiki.warframe.com/images/TheWaverider.jpg", mr: 0,
    howToGet: { pt: ["Completar Vox Solaris (Quest)", "Mastery Rank 3"], en: ["Completed Vox Solaris (Quest)", "Mastery Rank 3"] },
    rewards: [
      { name: { pt: "Yareli Diagrama", en: "Yareli Blueprint" }, icon: "https://wiki.warframe.com/images/YareliIcon272.png?0b164" },
      { name: { pt: "Noggle Statue - Yareli", en: "Noggle Statue - Yareli" }, icon: "https://wiki.warframe.com/images/BobbleheadYareli.png?31fe2" },
      { name: { pt: "K-Drive Booster Decoration", en: "K-Drive Booster Decoration" }, icon: "https://wiki.warframe.com/images/K-BoosterDecoration.png?bc848" },
      { name: { pt: "Yareli Prex", en: "Yareli Prex" }, icon: "https://wiki.warframe.com/images/Prex47Yareli.png?11e6e" },
      { name: { pt: "Waverider #1", en: "Waverider #1" } },
    ],
    desc: { pt: "Jornada curta focada no Yareli, o Warframe surfista. Envolve missões no K-Drive e apresenta a história de Yareli dentro do universo de Fortuna.",
            en: "A short quest centered on Yareli, the surfing Warframe. Involves K-Drive missions and introduces Yareli's story within the Fortuna universe." } },
  { slug: 'the-limbo-theorem', name: 'The Limbo Theorem', arc: 'warframe',
    image: "https://wiki.warframe.com/images/TheLimboTheorem.png?dcfe0", mr: 0,
    howToGet: { pt: ["Obtain an Archwing", "Jupiter - Europa Junction"], en: ["Obtain an Archwing", "Jupiter - Europa Junction"] },
    rewards: [
      { name: { pt: "Limbo Neuroptics", en: "Limbo Neuroptics" }, icon: "https://wiki.warframe.com/images/LimboIcon272.png?a04a4" },
      { name: { pt: "Limbo System", en: "Limbo System" }, icon: "assets/icons/base/limbo.png" },
      { name: { pt: "Limbo Chassis", en: "Limbo Chassis" }, icon: "assets/icons/base/limbo.png" },
    ],
    desc: { pt: 'Jornada de coleta onde você recupera as notas do cientista que criou o Limbo, espalhadas por missões do Mapa Estelar.',
            en: "A collection quest recovering notes from the scientist who created Limbo, scattered across Star Chart missions." } },
  { slug: 'the-jordas-precept', name: 'The Jordas Precept', arc: 'warframe',
    image: "https://wiki.warframe.com/images/TheJordasPrecept.png?7956c", mr: 5,
    howToGet: { pt: ["Pluto to Eris Junction"], en: ["Pluto to Eris Junction"] },
    rewards: [
      { name: { pt: "Atlas Diagrama", en: "Atlas Blueprint" }, icon: "https://wiki.warframe.com/images/AtlasIcon272.png?7e79f" },
      { name: { pt: "Jordas Golem Assassination", en: "Jordas Golem Assassination" } },
    ],
    desc: { pt: 'Jornada de horror com a Cephalon Jordas, infectada pela Infestação. Culmina em um boss battle de Archwing único. Recompensa o Neuroptics do Atlas.',
            en: 'A horror quest featuring the Infested Cephalon Jordas. Culminates in a unique Archwing boss battle. Rewards the Atlas Neuroptics blueprint.' } },
];

// ─────────────────────────────────────────────────────────────────────────────

// Dados de cada warframe (stats + cor do gráfico). Preenchido incrementalmente.
