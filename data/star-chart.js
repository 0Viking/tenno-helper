const STAR_CHART = {
  planets: [
    {
      slug: 'earth',
      name: { en: 'Earth', 'pt-BR': 'Terra' },
      faction: 'grineer',
      levelRange: '1-25',
      image: 'https://wiki.warframe.com/images/Earth.png',
      resources: ['ferrite', 'rubedo', 'neurodes', 'cryotic'],
      sections: {
        'plains-of-eidolon': {
          name: { en: 'Plains of Eidolon', 'pt-BR': 'Planícies de Eidolon' },
          note: { en: 'Open world via Cetus (Ostrons): bounties, mining, fishing, conservation. Eidolons appear at night.',
                  'pt-BR': 'Mundo aberto via Cetus (Ostrons): contratos, mineração, pesca, conservação. Eidolons aparecem à noite.' },
          location: 'plains-of-eidolon',
        },
      },
      nodes: [
        { slug: 'e-prime',   name: 'E Prime',   type: 'exterminate',    levelRange: '1-3'   },
        { slug: 'mariana',   name: 'Mariana',   type: 'exterminate',    levelRange: '1-3'   },
        { slug: 'lith',      name: 'Lith',      type: 'defense',        levelRange: '1-6'   },
        { slug: 'erpo',      name: 'Erpo',      type: 'mobile_defense', levelRange: '1-6',   archwing: true },
        { slug: 'gaia',      name: 'Gaia',      type: 'interception',   levelRange: '1-6'   },
        { slug: 'everest',   name: 'Everest',   type: 'excavation',     levelRange: '1-6'   },
        { slug: 'mantle',    name: 'Mantle',    type: 'capture',        levelRange: '2-4'   },
        { slug: 'cambria',   name: 'Cambria',   type: 'spy',            levelRange: '2-4'   },
        { slug: 'eurasia',   name: 'Eurasia',   type: 'mobile_defense', levelRange: '3-5'   },
        { slug: 'pacific',   name: 'Pacific',   type: 'rescue',         levelRange: '3-6'   },
        { slug: 'cervantes', name: 'Cervantes', type: 'sabotage',       levelRange: '4-6'   },
        { slug: 'tikal',     name: 'Tikal',     type: 'excavation',     levelRange: '6-16', darkSector: true },
        { slug: 'coba',      name: 'Coba',      type: 'defense',        levelRange: '6-16', darkSector: true },
        { slug: 'oro',       name: 'Oro',       type: 'assassination',  levelRange: '20-25', boss: 'Vay Hek', warframeDrop: 'hydroid' },
        { slug: 'sayas-visions', name: "Saya's Visions", type: 'shrine_defense', levelRange: '5-15', warframeDrop: 'koumei' },
        { slug: 'poe-free-roam', name: { en: 'Free Roam', 'pt-BR': 'Mundo Aberto' }, type: 'free_roam',     levelRange: '5-30',  section: 'plains-of-eidolon' },
        { slug: 'cetus-bounties', name: { en: 'Cetus Bounties', 'pt-BR': 'Contratos de Cetus' }, type: 'bounty', levelRange: '5-30', section: 'plains-of-eidolon', warframeDrop: ['revenant', 'gara'] },
        { slug: 'eidolon-hunt',  name: { en: 'Eidolon Hunt', 'pt-BR': 'Caçada de Eidolon' }, type: 'assassination', levelRange: '50-100', boss: 'Teralyst / Gantulyst / Hydrolyst', section: 'plains-of-eidolon' },
      ],
    },
    {
      slug: 'venus',
      name: { en: 'Venus', 'pt-BR': 'Vênus' },
      faction: 'corpus',
      levelRange: '3-18',
      image: 'https://wiki.warframe.com/images/Venus.png',
      resources: ['polymer_bundle', 'circuits', 'alloy_plate'],
      sections: {
        'orb-vallis': {
          name: { en: 'Orb Vallis', 'pt-BR': 'Orb Vallis' },
          note: { en: 'Open world via Fortuna (Solaris United): bounties, mining, fishing, Deepmines and Orb heists.',
                  'pt-BR': 'Mundo aberto via Fortuna (Solaris United): contratos, mineração, pesca, Deepmines e assaltos aos Orbs.' },
          location: 'orb-vallis',
        },
        'vesper-relay': {
          name: { en: 'Vesper Relay', 'pt-BR': 'Vesper Relay' },
          note: { en: "Ruined relay hosting Follie's Hunt. Requires Chains of Harrow.",
                  'pt-BR': "Relay destruído que abriga a Follie's Hunt. Requer Chains of Harrow." },
        },
      },
      nodes: [
        { slug: 'e-gate',    name: 'E Gate',    type: 'exterminate',    levelRange: '3-5'  },
        { slug: 'montes',    name: 'Montes',    type: 'exterminate',    levelRange: '3-8',  archwing: true },
        { slug: 'kiliken',   name: 'Kiliken',   type: 'excavation',     levelRange: '3-8'  },
        { slug: 'tessera',   name: 'Tessera',   type: 'defense',        levelRange: '3-8'  },
        { slug: 'v-prime',   name: 'V Prime',   type: 'survival',       levelRange: '3-8'  },
        { slug: 'cytherean', name: 'Cytherean', type: 'interception',   levelRange: '3-8'  },
        { slug: 'unda',      name: 'Unda',      type: 'spy',            levelRange: '4-6'  },
        { slug: 'venera',    name: 'Venera',    type: 'capture',        levelRange: '5-7'  },
        { slug: 'linea',     name: 'Linea',     type: 'rescue',         levelRange: '5-7'  },
        { slug: 'ishtar',    name: 'Ishtar',    type: 'sabotage',       levelRange: '6-8'  },
        { slug: 'aphrodite', name: 'Aphrodite', type: 'mobile_defense', levelRange: '6-8'  },
        { slug: 'fossa',     name: 'Fossa',     type: 'assassination',  levelRange: '6-8',  boss: 'Jackal', warframeDrop: 'rhino' },
        { slug: 'malva',     name: 'Malva',     type: 'survival',       levelRange: '8-18', darkSector: true },
        { slug: 'romula',    name: 'Romula',    type: 'defense',        levelRange: '8-18', darkSector: true },
        { slug: 'vallis-free-roam', name: { en: 'Free Roam', 'pt-BR': 'Mundo Aberto' }, type: 'free_roam', levelRange: '7-40', section: 'orb-vallis' },
        { slug: 'fortuna-bounties', name: { en: 'Fortuna Bounties', 'pt-BR': 'Contratos de Fortuna' }, type: 'bounty', levelRange: '7-40', section: 'orb-vallis', warframeDrop: 'garuda' },
        { slug: 'deepmines',        name: { en: 'Deepmines', 'pt-BR': 'Minas Profundas' }, type: 'free_roam', levelRange: '15-40', section: 'orb-vallis', warframeDrop: 'nokko' },
        { slug: 'orb-heists',       name: { en: 'Orb Heists', 'pt-BR': 'Assaltos aos Orbs' }, type: 'assassination', levelRange: '30-60', boss: 'Profit-Taker / Exploiter Orb', section: 'orb-vallis', warframeDrop: 'hildryn' },
        { slug: 'follies-hunt', name: { en: "Follie's Hunt", 'pt-BR': "Follie's Hunt" }, type: 'follies_hunt', levelRange: '35-45', section: 'vesper-relay', warframeDrop: 'follie' },
      ],
    },
    {
      slug: 'mercury',
      name: { en: 'Mercury', 'pt-BR': 'Mercúrio' },
      faction: 'grineer',
      levelRange: '6-11',
      image: 'https://wiki.warframe.com/images/Mercury.png',
      resources: ['polymer_bundle', 'ferrite', 'morphics'],
      nodes: [
        { slug: 'pantheon',    name: 'Pantheon',    type: 'exterminate',    levelRange: '6-8'  },
        { slug: 'caloris',     name: 'Caloris',     type: 'rescue',         levelRange: '6-8'  },
        { slug: 'lares',       name: 'Lares',       type: 'defense',        levelRange: '6-11' },
        { slug: 'apollodorus', name: 'Apollodorus', type: 'survival',       levelRange: '6-11' },
        { slug: 'odin',        name: 'Odin',        type: 'interception',   levelRange: '6-11' },
        { slug: 'm-prime',     name: 'M Prime',     type: 'exterminate',    levelRange: '7-9'  },
        { slug: 'elion',       name: 'Elion',       type: 'capture',        levelRange: '7-9'  },
        { slug: 'suisei',      name: 'Suisei',      type: 'spy',            levelRange: '8-10' },
        { slug: 'boethius',    name: 'Boethius',    type: 'mobile_defense', levelRange: '8-10' },
        { slug: 'tolstoj',     name: 'Tolstoj',     type: 'assassination',  levelRange: '8-10', boss: 'Captain Vor' },
        { slug: 'terminus',    name: 'Terminus',    type: 'sabotage',       levelRange: '8-10' },
      ],
    },
    {
      slug: 'mars',
      name: { en: 'Mars', 'pt-BR': 'Marte' },
      faction: 'grineer',
      levelRange: '8-30',
      image: 'https://wiki.warframe.com/images/Mars.png',
      resources: ['salvage', 'morphics', 'gallium'],
      nodes: [
        { slug: 'tharsis',    name: 'Tharsis',    type: 'mobile_defense', levelRange: '8-10' },
        { slug: 'hellas',     name: 'Hellas',     type: 'exterminate',    levelRange: '8-10' },
        { slug: 'alator',     name: 'Alator',     type: 'interception',   levelRange: '8-13' },
        { slug: 'spear',      name: 'Spear',      type: 'defense',        levelRange: '8-13' },
        { slug: 'syrtis',     name: 'Syrtis',     type: 'exterminate',    levelRange: '8-13', archwing: true },
        { slug: 'ares',       name: 'Ares',       type: 'sabotage',       levelRange: '9-11' },
        { slug: 'arval',      name: 'Arval',      type: 'spy',            levelRange: '9-11' },
        { slug: 'gradivus',   name: 'Gradivus',   type: 'sabotage',       levelRange: '9-11' },
        { slug: 'augustus',   name: 'Augustus',   type: 'excavation',     levelRange: '9-14' },
        { slug: 'ara',        name: 'Ara',        type: 'capture',        levelRange: '10-12' },
        { slug: 'martialis',  name: 'Martialis',  type: 'rescue',         levelRange: '10-12' },
        { slug: 'kadesh',     name: 'Kadesh',     type: 'defense',        levelRange: '10-20', darkSector: true },
        { slug: 'wahiba',     name: 'Wahiba',     type: 'survival',       levelRange: '10-20', darkSector: true },
        { slug: 'war',        name: 'War',        type: 'assassination',  levelRange: '11-13', boss: 'Lt. Lech Kril', warframeDrop: 'excalibur' },
        { slug: 'vallis',     name: 'Vallis',     type: 'mobile_defense', levelRange: '11-13' },
        { slug: 'ultor',      name: 'Ultor',      type: 'exterminate',    levelRange: '11-13' },
        { slug: 'olympus',    name: 'Olympus',    type: 'disruption',     levelRange: '15-20' },
        { slug: 'tyana-pass', name: 'Tyana Pass', type: 'mirror_defense', levelRange: '25-30', warframeDrop: 'citrine' },
      ],
    },
    {
      slug: 'ceres',
      name: { en: 'Ceres', 'pt-BR': 'Ceres' },
      faction: 'grineer',
      levelRange: '12-25',
      image: 'https://wiki.warframe.com/images/Ceres.png',
      resources: ['circuits', 'alloy_plate', 'orokin_cell', 'nano_spores'],
      nodes: [
        { slug: 'bode',    name: 'Bode',    type: 'spy',            levelRange: '12-14' },
        { slug: 'pallas',  name: 'Pallas',  type: 'exterminate',    levelRange: '12-14' },
        { slug: 'cinxia',  name: 'Cinxia',  type: 'interception',   levelRange: '12-17' },
        { slug: 'casta',   name: 'Casta',   type: 'defense',        levelRange: '12-17' },
        { slug: 'draco',   name: 'Draco',   type: 'survival',       levelRange: '12-17' },
        { slug: 'nuovo',   name: 'Nuovo',   type: 'rescue',         levelRange: '13-15' },
        { slug: 'kiste',   name: 'Kiste',   type: 'mobile_defense', levelRange: '13-15' },
        { slug: 'lex',     name: 'Lex',     type: 'capture',        levelRange: '14-16' },
        { slug: 'exta',    name: 'Exta',    type: 'assassination',  levelRange: '14-16', boss: 'Lt. Lech Kril & Capt. Vor', warframeDrop: 'frost' },
        { slug: 'ker',     name: 'Ker',     type: 'sabotage',       levelRange: '14-16' },
        { slug: 'ludi',    name: 'Ludi',    type: 'hijack',         levelRange: '15-17' },
        { slug: 'thon',    name: 'Thon',    type: 'sabotage',       levelRange: '15-17' },
        { slug: 'seimeni', name: 'Seimeni', type: 'defense',        levelRange: '15-25', darkSector: true },
        { slug: 'gabii',      name: 'Gabii',      type: 'survival',      levelRange: '15-25', darkSector: true },
        { slug: 'abyssal-zone', name: { en: 'Abyssal Zone', 'pt-BR': 'Zona Abissal' }, type: 'abyssal_zone', levelRange: '20-60', warframeDrop: 'dagath' },
      ],
    },
    {
      slug: 'phobos',
      name: { en: 'Phobos', 'pt-BR': 'Phobos' },
      faction: 'grineer',
      levelRange: '10-25',
      image: 'https://wiki.warframe.com/images/Phobos.png',
      resources: ['rubedo', 'plastids', 'alloy_plate', 'morphics'],
      nodes: [
        { slug: 'roche',     name: 'Roche',     type: 'exterminate',    levelRange: '10-12' },
        { slug: 'gulliver',  name: 'Gulliver',  type: 'defense',        levelRange: '10-15' },
        { slug: 'stickney',  name: 'Stickney',  type: 'survival',       levelRange: '10-15' },
        { slug: 'shklovsky', name: 'Shklovsky', type: 'spy',            levelRange: '11-13' },
        { slug: 'sharpless', name: 'Sharpless', type: 'mobile_defense', levelRange: '11-13' },
        { slug: 'skyresh',   name: 'Skyresh',   type: 'capture',        levelRange: '12-14' },
        { slug: 'kepler',    name: 'Kepler',    type: 'archwing',       levelRange: '12-14', archwing: true },
        { slug: 'iliad',     name: 'Iliad',     type: 'assassination',  levelRange: '13-15', boss: 'The Sergeant', warframeDrop: 'mag' },
        { slug: 'monolith',  name: 'Monolith',  type: 'rescue',         levelRange: '13-15' },
        { slug: 'memphis',   name: 'Memphis',   type: 'defection',      levelRange: '15-25', darkSector: true },
        { slug: 'zeugma',    name: 'Zeugma',    type: 'survival',       levelRange: '15-25', darkSector: true },
      ],
    },
    {
      slug: 'deimos',
      name: { en: 'Deimos', 'pt-BR': 'Deimos' },
      faction: 'infested',
      levelRange: '12-60',
      image: 'https://wiki.warframe.com/images/Deimos.png',
      resources: ['plastids', 'ferrite', 'nano_spores', 'orokin_cell', 'entrati_lanthorn', 'voca'],
      sections: {
        'cambion-drift': {
          name: { en: 'Cambion Drift', 'pt-BR': 'Cambion Drift' },
          note: { en: 'Open world via the Necralisk (Entrati): bounties, mining, fishing, conservation and Isolation Vaults.',
                  'pt-BR': 'Mundo aberto via Necrólise (Entrati): contratos, mineração, pesca, conservação e Cofres de Isolamento.' },
          location: 'cambion-drift',
        },
        'sanctum-anatomica': {
          name: { en: 'Sanctum Anatomica', 'pt-BR': 'Sanctum Anatomica' },
          note: { en: 'Open world via the Necralisk (The Cavia / Bird 3). Unlocked after Whispers in the Walls.',
                  'pt-BR': 'Mundo aberto via Necrólise (The Cavia / Bird 3). Desbloqueado após Whispers in the Walls.' },
          spoilerLocked: true,
        },
        'albrechts-laboratories': {
          name: { en: "Albrecht's Laboratories", 'pt-BR': 'Laboratórios de Albrecht' },
          note: { en: 'Unlocked after the Whispers in the Walls quest.',
                  'pt-BR': 'Desbloqueado após a jornada Whispers in the Walls.' },
          factionOverride: 'murmur',
          spoilerLocked: true,
        },
      },
      nodes: [
        { slug: 'horend',      name: 'Horend',      type: 'capture',        levelRange: '12-14' },
        { slug: 'phlegyas',    name: 'Phlegyas',    type: 'exterminate',    levelRange: '13-15' },
        { slug: 'formido',     name: 'Formido',     type: 'sabotage',       levelRange: '14-16' },
        { slug: 'dirus',       name: 'Dirus',       type: 'mobile_defense', levelRange: '15-17' },
        { slug: 'hyf',         name: 'Hyf',         type: 'defense',        levelRange: '15-20' },
        { slug: 'magnacidium', name: 'Magnacidium', type: 'assassination',  levelRange: '20-25', boss: 'Lephantis', warframeDrop: 'nekros' },
        { slug: 'terrorem',    name: 'Terrorem',    type: 'survival',       levelRange: '25-35', warframeDrop: 'octavia' },
        { slug: 'exequias',    name: 'Exequias',    type: 'assassination',  levelRange: '30-35' },
        { slug: 'cambion-free-roam', name: { en: 'Free Roam', 'pt-BR': 'Mundo Aberto' }, type: 'free_roam', levelRange: '5-40', section: 'cambion-drift' },
        { slug: 'entrati-bounties',  name: { en: 'Entrati Bounties', 'pt-BR': 'Contratos Entrati' }, type: 'bounty', levelRange: '5-40', section: 'cambion-drift', warframeDrop: 'lavos' },
        { slug: 'isolation-vault',   name: { en: 'Isolation Vault', 'pt-BR': 'Cofre de Isolamento' }, type: 'bounty', levelRange: '15-40', boss: 'Necramech', section: 'cambion-drift' },
        { slug: 'sanctum-anatomica-bounties', name: { en: 'Sanctum Anatomica Bounties', 'pt-BR': 'Contratos do Sanctum Anatomica' }, type: 'bounty', levelRange: '55-80', section: 'sanctum-anatomica', warframeDrop: 'qorvex' },
        { slug: 'effervo',     name: 'Effervo',     type: 'assassination',  levelRange: '55-60', section: 'albrechts-laboratories', boss: 'The Fragmented' },
        { slug: 'armatus',     name: 'Armatus',     type: 'disruption',     levelRange: '55-60', section: 'albrechts-laboratories', warframeDrop: 'dante' },
        { slug: 'munio',       name: 'Munio',       type: 'mirror_defense', levelRange: '55-60', section: 'albrechts-laboratories' },
        { slug: 'nex',         name: 'Nex',         type: 'exterminate',    levelRange: '55-60', section: 'albrechts-laboratories' },
        { slug: 'persto',      name: 'Persto',      type: 'survival',       levelRange: '55-60', section: 'albrechts-laboratories' },
        { slug: 'cambire',     name: 'Cambire',     type: 'alchemy',        levelRange: '55-60', section: 'albrechts-laboratories' },
        { slug: 'deep-archimedea', name: { en: 'Deep Archimedea', 'pt-BR': 'Archimedea Profunda' }, type: 'deep_archimedea', levelRange: '250-275', section: 'albrechts-laboratories' },
      ],
    },
    {
      slug: 'jupiter',
      name: { en: 'Jupiter', 'pt-BR': 'Júpiter' },
      faction: 'corpus',
      levelRange: '15-40',
      image: 'https://wiki.warframe.com/images/Jupiter.png',
      resources: ['alloy_plate', 'salvage', 'neural_sensors', 'cryotic'],
      nodes: [
        { slug: 'metis',         name: 'Metis',           type: 'rescue',         levelRange: '15-17' },
        { slug: 'io',            name: 'Io',              type: 'defense',        levelRange: '15-20' },
        { slug: 'callisto',      name: 'Callisto',        type: 'interception',   levelRange: '15-20' },
        { slug: 'galilea',       name: 'Galilea',         type: 'sabotage',       levelRange: '15-20', archwing: true },
        { slug: 'elara',         name: 'Elara',           type: 'survival',       levelRange: '15-20' },
        { slug: 'ananke',        name: 'Ananke',          type: 'capture',        levelRange: '16-18' },
        { slug: 'carme',         name: 'Carme',           type: 'mobile_defense', levelRange: '16-18' },
        { slug: 'carpo',         name: 'Carpo',           type: 'exterminate',    levelRange: '17-19' },
        { slug: 'amalthea',      name: 'Amalthea',        type: 'spy',            levelRange: '17-19' },
        { slug: 'themisto',      name: 'Themisto',        type: 'assassination',  levelRange: '18-20', boss: 'Alad V', warframeDrop: 'valkyr' },
        { slug: 'adrastea',      name: 'Adrastea',        type: 'sabotage',       levelRange: '18-20' },
        { slug: 'thebe',         name: 'Thebe',           type: 'sabotage',       levelRange: '18-20' },
        { slug: 'sinai',         name: 'Sinai',           type: 'defense',        levelRange: '20-30', darkSector: true },
        { slug: 'cameria',       name: 'Cameria',         type: 'survival',       levelRange: '20-30', darkSector: true },
        { slug: 'ganymede',      name: 'Ganymede',        type: 'disruption',     levelRange: '30-35' },
        { slug: 'the-ropalolyst',name: 'The Ropalolyst',  type: 'assassination',  levelRange: '40-40', boss: 'Ropalolyst', warframeDrop: 'wisp' },
      ],
    },
    {
      slug: 'europa',
      name: { en: 'Europa', 'pt-BR': 'Europa' },
      faction: 'corpus',
      levelRange: '18-33',
      image: 'https://wiki.warframe.com/images/Europa.png',
      resources: ['rubedo', 'control_module', 'salvage', 'oxium'],
      nodes: [
        { slug: 'morax',     name: 'Morax',     type: 'mobile_defense', levelRange: '18-20' },
        { slug: 'valac',     name: 'Valac',     type: 'spy',            levelRange: '18-20' },
        { slug: 'armaros',   name: 'Armaros',   type: 'exterminate',    levelRange: '18-20' },
        { slug: 'ose',       name: 'Ose',       type: 'interception',   levelRange: '18-23' },
        { slug: 'paimon',    name: 'Paimon',    type: 'defense',        levelRange: '18-23' },
        { slug: 'valefor',   name: 'Valefor',   type: 'excavation',     levelRange: '18-23' },
        { slug: 'sorath',    name: 'Sorath',    type: 'hijack',         levelRange: '19-21' },
        { slug: 'orias',     name: 'Orias',     type: 'rescue',         levelRange: '20-22' },
        { slug: 'kokabiel',  name: 'Kokabiel',  type: 'sabotage',       levelRange: '20-22' },
        { slug: 'abaddon',   name: 'Abaddon',   type: 'capture',        levelRange: '21-23' },
        { slug: 'baal',      name: 'Baal',      type: 'exterminate',    levelRange: '21-23' },
        { slug: 'naamah',    name: 'Naamah',    type: 'assassination',  levelRange: '21-23', boss: 'Raptors', warframeDrop: 'nova' },
        { slug: 'cholistan', name: 'Cholistan', type: 'excavation',     levelRange: '23-33', darkSector: true },
        { slug: 'larzac',    name: 'Larzac',    type: 'defense',        levelRange: '23-33', darkSector: true },
      ],
    },
    {
      slug: 'saturn',
      name: { en: 'Saturn', 'pt-BR': 'Saturno' },
      faction: 'grineer',
      levelRange: '21-36',
      image: 'https://wiki.warframe.com/images/Saturn.png',
      resources: ['plastids', 'alloy_plate', 'nano_spores', 'orokin_cell'],
      nodes: [
        { slug: 'pandora',   name: 'Pandora',   type: 'pursuit',        levelRange: '21-23', archwing: true },
        { slug: 'dione',     name: 'Dione',     type: 'spy',            levelRange: '21-23' },
        { slug: 'cassini',   name: 'Cassini',   type: 'capture',        levelRange: '21-23' },
        { slug: 'titan',     name: 'Titan',     type: 'survival',       levelRange: '21-26' },
        { slug: 'rhea',      name: 'Rhea',      type: 'interception',   levelRange: '21-26' },
        { slug: 'helene',    name: 'Helene',    type: 'defense',        levelRange: '21-26' },
        { slug: 'telesto',   name: 'Telesto',   type: 'exterminate',    levelRange: '22-24' },
        { slug: 'anthe',     name: 'Anthe',     type: 'rescue',         levelRange: '22-24' },
        { slug: 'numa',      name: 'Numa',      type: 'rescue',         levelRange: '22-24' },
        { slug: 'keeler',    name: 'Keeler',    type: 'mobile_defense', levelRange: '23-25' },
        { slug: 'enceladus', name: 'Enceladus', type: 'sabotage',       levelRange: '23-25' },
        { slug: 'tethys',    name: 'Tethys',    type: 'assassination',  levelRange: '24-26', boss: 'General Sargas Ruk', warframeDrop: 'ember' },
        { slug: 'calypso',   name: 'Calypso',   type: 'sabotage',       levelRange: '24-26' },
        { slug: 'caracol',   name: 'Caracol',   type: 'defection',      levelRange: '26-36', darkSector: true },
        { slug: 'piscinas',  name: 'Piscinas',  type: 'survival',       levelRange: '26-36', darkSector: true },
      ],
    },
    {
      slug: 'uranus',
      name: { en: 'Uranus', 'pt-BR': 'Urano' },
      faction: 'grineer',
      levelRange: '24-50',
      image: 'https://wiki.warframe.com/images/Uranus.png',
      resources: ['polymer_bundle', 'plastids', 'gallium', 'tellurium'],
      nodes: [
        { slug: 'sycorax',   name: 'Sycorax',   type: 'exterminate',    levelRange: '24-26' },
        { slug: 'stephano',  name: 'Stephano',  type: 'defense',        levelRange: '24-29' },
        { slug: 'caelus',    name: 'Caelus',    type: 'interception',   levelRange: '24-29', archwing: true },
        { slug: 'umbriel',   name: 'Umbriel',   type: 'interception',   levelRange: '24-29' },
        { slug: 'ophelia',   name: 'Ophelia',   type: 'survival',       levelRange: '24-29' },
        { slug: 'caliban',   name: 'Caliban',   type: 'rescue',         levelRange: '25-27' },
        { slug: 'ariel',     name: 'Ariel',     type: 'capture',        levelRange: '25-27' },
        { slug: 'assur',     name: 'Assur',     type: 'survival',       levelRange: '25-35', darkSector: true },
        { slug: 'desdemona', name: 'Desdemona', type: 'sabotage',       levelRange: '26-28' },
        { slug: 'titania',   name: 'Titania',   type: 'assassination',  levelRange: '27-29', boss: 'Tyl Regor', warframeDrop: 'equinox' },
        { slug: 'cressida',  name: 'Cressida',  type: 'mobile_defense', levelRange: '27-29' },
        { slug: 'rosalind',  name: 'Rosalind',  type: 'spy',            levelRange: '27-29' },
        { slug: 'puck',      name: 'Puck',      type: 'exterminate',    levelRange: '27-29' },
        { slug: 'ur',        name: 'Ur',        type: 'disruption',     levelRange: '30-35', darkSector: true },
        { slug: 'brutus',    name: 'Brutus',    type: 'ascension',      levelRange: '45-50', warframeDrop: 'jade' },
      ],
    },
    {
      slug: 'neptune',
      name: { en: 'Neptune', 'pt-BR': 'Netuno' },
      faction: 'corpus',
      levelRange: '25-40',
      image: 'https://wiki.warframe.com/images/Neptune.png',
      resources: ['polymer_bundle', 'salvage', 'control_module', 'ferrite'],
      nodes: [
        { slug: 'laomedeia', name: 'Laomedeia', type: 'disruption',     levelRange: '25-30' },
        { slug: 'galatea',   name: 'Galatea',   type: 'capture',        levelRange: '27-29' },
        { slug: 'salacia',   name: 'Salacia',   type: 'mobile_defense', levelRange: '27-32', archwing: true },
        { slug: 'proteus',   name: 'Proteus',   type: 'defense',        levelRange: '27-32' },
        { slug: 'despina',   name: 'Despina',   type: 'excavation',     levelRange: '27-32' },
        { slug: 'triton',    name: 'Triton',    type: 'rescue',         levelRange: '28-30' },
        { slug: 'sao',       name: 'Sao',       type: 'sabotage',       levelRange: '29-31' },
        { slug: 'larissa',   name: 'Larissa',   type: 'mobile_defense', levelRange: '29-31' },
        { slug: 'neso',      name: 'Neso',      type: 'exterminate',    levelRange: '29-31' },
        { slug: 'nereid',    name: 'Nereid',    type: 'spy',            levelRange: '30-32' },
        { slug: 'psamathe',  name: 'Psamathe',  type: 'assassination',  levelRange: '30-32', boss: 'Hyena Pack', warframeDrop: 'loki' },
        { slug: 'kelashin',  name: 'Kelashin',  type: 'survival',       levelRange: '30-40', darkSector: true },
        { slug: 'yursa',     name: 'Yursa',     type: 'defection',      levelRange: '30-40', darkSector: true },
      ],
    },
    {
      slug: 'pluto',
      name: { en: 'Pluto', 'pt-BR': 'Plutão' },
      faction: 'corpus',
      levelRange: '30-45',
      image: 'https://wiki.warframe.com/images/Pluto.png',
      resources: ['rubedo', 'alloy_plate', 'plastids', 'morphics'],
      nodes: [
        { slug: 'hydra',          name: 'Hydra',          type: 'capture',        levelRange: '30-34' },
        { slug: 'minthe',         name: 'Minthe',         type: 'mobile_defense', levelRange: '30-34' },
        { slug: 'cerberus',       name: 'Cerberus',       type: 'interception',   levelRange: '30-40' },
        { slug: 'outer-terminus', name: 'Outer Terminus', type: 'defense',        levelRange: '30-40' },
        { slug: 'palus',          name: 'Palus',          type: 'survival',       levelRange: '30-40' },
        { slug: 'oceanum',        name: 'Oceanum',        type: 'spy',            levelRange: '32-36' },
        { slug: 'narcissus',      name: 'Narcissus',      type: 'exterminate',    levelRange: '32-36' },
        { slug: 'regna',          name: 'Regna',          type: 'rescue',         levelRange: '34-38' },
        { slug: 'cypress',        name: 'Cypress',        type: 'sabotage',       levelRange: '34-38' },
        { slug: 'acheron',        name: 'Acheron',        type: 'exterminate',    levelRange: '34-38' },
        { slug: 'hades',          name: 'Hades',          type: 'assassination',  levelRange: '35-45', boss: 'Ambulas', warframeDrop: 'trinity' },
        { slug: 'hieracon',       name: 'Hieracon',       type: 'excavation',     levelRange: '35-45', darkSector: true },
        { slug: 'sechura',        name: 'Sechura',        type: 'defense',        levelRange: '35-45', darkSector: true },
      ],
    },
    {
      slug: 'eris',
      name: { en: 'Eris', 'pt-BR': 'Eris' },
      faction: 'infested',
      levelRange: '30-45',
      image: 'https://wiki.warframe.com/images/Eris.png',
      resources: ['nano_spores', 'plastids', 'mutagen_sample', 'neurodes'],
      nodes: [
        { slug: 'naeglar',           name: 'Naeglar',           type: 'sabotage',        levelRange: '30-34' },
        { slug: 'mutalist-alad-v',   name: 'Mutalist Alad V',   type: 'assassination',   levelRange: '30-35', boss: 'Mutalist Alad V', warframeDrop: 'mesa' },
        { slug: 'xini',              name: 'Xini',              type: 'interception',    levelRange: '30-40' },
        { slug: 'nimus',             name: 'Nimus',             type: 'survival',        levelRange: '30-40' },
        { slug: 'kala-azar',         name: 'Kala-azar',         type: 'defense',         levelRange: '30-40' },
        { slug: 'jordas-golem',      name: 'Jordas Golem',      type: 'assassination',   levelRange: '32-34', boss: 'Jordas Golem',    warframeDrop: 'atlas', archwing: true },
        { slug: 'brugia',            name: 'Brugia',            type: 'rescue',          levelRange: '32-36' },
        { slug: 'isos',              name: 'Isos',              type: 'capture',         levelRange: '32-36' },
        { slug: 'solium',            name: 'Solium',            type: 'mobile_defense',  levelRange: '34-38' },
        { slug: 'saxis',             name: 'Saxis',             type: 'exterminate',     levelRange: '34-38' },
        { slug: 'oestrus',           name: 'Oestrus',           type: 'infested_salvage',levelRange: '34-38', warframeDrop: 'nidus' },
        { slug: 'akkad',             name: 'Akkad',             type: 'defense',         levelRange: '35-45', darkSector: true },
        { slug: 'zabala',            name: 'Zabala',            type: 'survival',        levelRange: '35-45', darkSector: true },
      ],
    },
    {
      slug: 'sedna',
      name: { en: 'Sedna', 'pt-BR': 'Sedna' },
      faction: 'grineer',
      levelRange: '30-85',
      image: 'https://wiki.warframe.com/images/Sedna.png',
      resources: ['rubedo', 'salvage', 'gallium', 'plastids'],
      nodes: [
        { slug: 'naga',      name: 'Naga',      type: 'rescue',         levelRange: '30-34' },
        { slug: 'berehynia', name: 'Berehynia', type: 'interception',   levelRange: '30-40' },
        { slug: 'hydron',    name: 'Hydron',    type: 'defense',        levelRange: '30-40' },
        { slug: 'selkie',    name: 'Selkie',    type: 'survival',       levelRange: '30-40' },
        { slug: 'rusalka',   name: 'Rusalka',   type: 'sabotage',       levelRange: '32-36' },
        { slug: 'adaro',     name: 'Adaro',     type: 'exterminate',    levelRange: '32-36' },
        { slug: 'kappa',     name: 'Kappa',     type: 'disruption',     levelRange: '34-38', warframeDrop: 'gauss' },
        { slug: 'marid',     name: 'Marid',     type: 'hijack',         levelRange: '34-38' },
        { slug: 'charybdis', name: 'Charybdis', type: 'mobile_defense', levelRange: '34-38' },
        { slug: 'merrow',    name: 'Merrow',    type: 'assassination',  levelRange: '35-40', boss: 'Kela de Thaym', warframeDrop: 'saryn' },
        { slug: 'kelpie',    name: 'Kelpie',    type: 'spy',            levelRange: '35-40' },
        { slug: 'amarna',    name: 'Amarna',    type: 'survival',       levelRange: '35-45', darkSector: true },
        { slug: 'sangeru',   name: 'Sangeru',   type: 'defense',        levelRange: '35-45', darkSector: true },
        { slug: 'nakki',     name: 'Nakki',     type: 'arena',          levelRange: '40-40' },
        { slug: 'yam',       name: 'Yam',       type: 'arena',          levelRange: '60-60' },
        { slug: 'vodyanoi',  name: 'Vodyanoi',  type: 'arena',          levelRange: '85-85' },
      ],
    },
    {
      slug: 'void',
      name: { en: 'Void', 'pt-BR': 'Vazio' },
      faction: 'corrupted',
      levelRange: '10-45',
      image: 'assets/backgrounds/VoidSkybox.jpg',
      resources: ['argon_crystal', 'rubedo', 'control_module', 'ferrite'],
      nodes: [
        { slug: 'hepit',   name: 'Hepit',   type: 'capture',        levelRange: '10-15' },
        { slug: 'taranis', name: 'Taranis', type: 'defense',        levelRange: '10-15' },
        { slug: 'teshub',  name: 'Teshub',  type: 'exterminate',    levelRange: '10-15' },
        { slug: 'tiwaz',   name: 'Tiwaz',   type: 'mobile_defense', levelRange: '20-25' },
        { slug: 'ani',     name: 'Ani',     type: 'survival',       levelRange: '20-25' },
        { slug: 'stribog', name: 'Stribog', type: 'sabotage',       levelRange: '20-25' },
        { slug: 'oxomoco', name: 'Oxomoco', type: 'exterminate',    levelRange: '30-35' },
        { slug: 'belenus', name: 'Belenus', type: 'defense',        levelRange: '30-35' },
        { slug: 'ukko',    name: 'Ukko',    type: 'capture',        levelRange: '30-35' },
        { slug: 'marduk',  name: 'Marduk',  type: 'sabotage',       levelRange: '40-45' },
        { slug: 'mot',     name: 'Mot',     type: 'survival',       levelRange: '40-45' },
        { slug: 'mithra',  name: 'Mithra',  type: 'interception',   levelRange: '40-45' },
        { slug: 'aten',    name: 'Aten',    type: 'mobile_defense', levelRange: '40-45' },
      ],
    },
    {
      slug: 'lua',
      name: { en: 'Lua', 'pt-BR': 'Lua' },
      faction: 'orokin',
      levelRange: '25-100',
      image: 'https://wiki.warframe.com/images/Lua.png',
      spoilerLocked: true, // Unlocked via The Second Dream quest
      resources: ['cryotic', 'rubedo', 'neurodes'],
      nodes: [
        { slug: 'yuvarium',   name: 'Yuvarium',   type: 'survival',       levelRange: '25-30' },
        { slug: 'grimaldi',   name: 'Grimaldi',   type: 'mobile_defense', levelRange: '25-30' },
        { slug: 'zeipel',     name: 'Zeipel',     type: 'rescue',         levelRange: '25-30' },
        { slug: 'pavlov',     name: 'Pavlov',     type: 'spy',            levelRange: '25-30' },
        { slug: 'stofler',    name: 'Stöfler',    type: 'defense',        levelRange: '25-30' },
        { slug: 'plato',      name: 'Plato',      type: 'exterminate',    levelRange: '25-30', warframeDrop: 'octavia' },
        { slug: 'tycho',      name: 'Tycho',      type: 'survival',       levelRange: '25-30' },
        { slug: 'copernicus', name: 'Copernicus', type: 'capture',        levelRange: '25-30' },
        { slug: 'apollo',     name: 'Apollo',     type: 'disruption',     levelRange: '35-40' },
        { slug: 'circulus',   name: 'Circulus',   type: 'survival',       levelRange: '80-100', warframeDrop: 'voruna' },
      ],
    },
    {
      slug: 'kuva-fortress',
      name: { en: 'Kuva Fortress', 'pt-BR': 'Fortaleza Kuva' },
      faction: 'grineer',
      levelRange: '28-40',
      image: 'https://wiki.warframe.com/images/Kuva_Fortress.png',
      spoilerLocked: true, // Unlocked via The War Within quest
      resources: ['circuits', 'alloy_plate', 'morphics', 'kuva'],
      nodes: [
        { slug: 'dakata',  name: 'Dakata',  type: 'exterminate',    levelRange: '28-30' },
        { slug: 'koro',    name: 'Koro',    type: 'assault',        levelRange: '29-31' },
        { slug: 'rotuma',  name: 'Rotuma',  type: 'mobile_defense', levelRange: '30-32' },
        { slug: 'nabuk',   name: 'Nabuk',   type: 'defense',        levelRange: '30-32' },
        { slug: 'pago',    name: 'Pago',    type: 'spy',            levelRange: '31-33', warframeDrop: 'harrow' },
        { slug: 'garus',   name: 'Garus',   type: 'rescue',         levelRange: '31-33' },
        { slug: 'taveuni', name: 'Taveuni', type: 'survival',       levelRange: '32-37' },
        { slug: 'tamu',    name: 'Tamu',    type: 'disruption',     levelRange: '35-40' },
      ],
    },
    {
      slug: 'zariman',
      name: { en: 'Zariman Ten Zero', 'pt-BR': 'Zariman Ten Zero' },
      faction: 'corrupted',
      levelRange: '50-55',
      image: 'assets/backgrounds/Zariman.jpg',
      spoilerLocked: true, // Unlocked via The Angels of the Zariman quest
      resources: ['voidplume_down'],
      note: {
        en: 'Unlocked after completing The Angels of the Zariman quest. The ruling faction (Kuva Grineer / Juno Corpus) rotates every 2.5h.',
        'pt-BR': 'Desbloqueado após a jornada The Angels of the Zariman. A facção dominante (Kuva Grineer / Juno Corpus) alterna a cada 2.5h.',
      },
      nodes: [
        { slug: 'the-greenway',     name: 'The Greenway',     type: 'mobile_defense',  levelRange: '50-55' },
        { slug: 'halako-perimeter', name: 'Halako Perimeter', type: 'exterminate',     levelRange: '50-55' },
        { slug: 'oro-works',        name: 'Oro Works',        type: 'void_armageddon', levelRange: '50-55' },
        { slug: 'everview-arc',     name: 'Everview Arc',     type: 'void_flood',      levelRange: '50-55' },
        { slug: 'tuvul-commons',    name: 'Tuvul Commons',    type: 'void_cascade',    levelRange: '50-55' },
        { slug: 'zariman-bounties', name: { en: 'Chrysalith Bounties', 'pt-BR': 'Contratos do Chrysalith' }, type: 'bounty', levelRange: '50-115', warframeDrop: 'gyre' },
      ],
    },
  ],

  // §20.5 — Railjack tab. 6 Proximas across Earth → Veil, gated by Intrinsics
  // rank. Nodes ordered by level range. Mission types: most Grineer Proximas
  // are Skirmish (Exterminate-flavored), Corpus ones mix Defense/Survival/
  // Volatile/Orphix/Exterminate/Spy. Veil mixes both factions.
  proximas: [
    {
      slug: 'earth-proxima',
      name: { en: 'Earth Proxima', 'pt-BR': 'Proxima da Terra' },
      faction: 'grineer',
      levelRange: '15-30',
      image: 'https://wiki.warframe.com/images/Earth.png',
      resources: ['carbides', 'cubic_diodes', 'titanium', 'ticor_plate', 'asterite', 'pustrels', 'copernics', 'anomaly_shard', 'corrupted_holokey'],
      nodes: [
        { slug: 'free-flight-rj',          name: 'Free Flight',                  type: 'free_flight',   levelRange: '1'      },
        { slug: 'sover-strait',            name: 'Sover Strait',                 type: 'skirmish',      levelRange: '15-20',  warframeDrop: 'oberon' },
        { slug: 'iota-temple',             name: 'Iota Temple',                  type: 'skirmish',      levelRange: '20-28'  },
        { slug: 'ogal-cluster',            name: 'Ogal Cluster',                 type: 'skirmish',      levelRange: '21-26'  },
        { slug: 'korms-belt',              name: "Korm's Belt",                  type: 'skirmish',      levelRange: '24-30'  },
        { slug: 'bendar-cluster',          name: 'Bendar Cluster',               type: 'skirmish',      levelRange: '29-36'  },
        { slug: 'technocyte-coda-concert', name: 'Technocyte Coda Concert',      type: 'assassination', levelRange: '100',   spoilerLocked: true },
      ],
    },
    {
      slug: 'venus-proxima',
      name: { en: 'Venus Proxima', 'pt-BR': 'Proxima de Vênus' },
      faction: 'corpus',
      levelRange: '15-26',
      image: 'https://wiki.warframe.com/images/Venus.png',
      resources: ['carbides', 'cubic_diodes', 'titanium', 'ticor_plate', 'asterite', 'gallos_rods', 'isos', 'anomaly_shard', 'corrupted_holokey'],
      nodes: [
        { slug: 'bifrost-echo',       name: 'Bifrost Echo',       type: 'exterminate', levelRange: '15-18' },
        { slug: 'beacon-shield-ring', name: 'Beacon Shield Ring', type: 'volatile',    levelRange: '17-20' },
        { slug: 'orvin-haarc',        name: 'Orvin-Haarc',        type: 'spy',         levelRange: '19-22' },
        { slug: 'vesper-strait',      name: 'Vesper Strait',      type: 'orphix',      levelRange: '21-24' },
        { slug: 'luckless-expanse',   name: 'Luckless Expanse',   type: 'survival',    levelRange: '22-25' },
        { slug: 'falling-glory',      name: 'Falling Glory',      type: 'defense',     levelRange: '23-26' },
      ],
    },
    {
      slug: 'saturn-proxima',
      name: { en: 'Saturn Proxima', 'pt-BR': 'Proxima de Saturno' },
      faction: 'grineer',
      levelRange: '48-75',
      image: 'https://wiki.warframe.com/images/Saturn.png',
      resources: ['carbides', 'cubic_diodes', 'asterite', 'gallos_rods', 'isos', 'tellurium', 'anomaly_shard', 'corrupted_holokey'],
      nodes: [
        { slug: 'lupal-pass',                 name: 'Lupal Pass',                 type: 'skirmish',      levelRange: '48-56', warframeDrop: 'oberon' },
        { slug: 'nodo-gap',                   name: 'Nodo Gap',                   type: 'skirmish',      levelRange: '54-60' },
        { slug: 'mordo-cluster',              name: 'Mordo Cluster',              type: 'skirmish',      levelRange: '55-60' },
        { slug: 'vand-cluster',               name: 'Vand Cluster',               type: 'skirmish',      levelRange: '65-70' },
        { slug: 'kasios-rest',                name: "Kasio's Rest",               type: 'skirmish',      levelRange: '70-75' },
        { slug: 'kuva-lich-confrontation',    name: 'Kuva Lich Confrontation',    type: 'assassination', levelRange: '63-70', spoilerLocked: true },
      ],
    },
    {
      slug: 'neptune-proxima',
      name: { en: 'Neptune Proxima', 'pt-BR': 'Proxima de Netuno' },
      faction: 'corpus',
      levelRange: '25-36',
      image: 'https://wiki.warframe.com/images/Neptune.png',
      resources: ['carbides', 'cubic_diodes', 'asterite', 'gallos_rods', 'isos', 'aucrux_capacitors', 'komms', 'nullstones', 'tellurium', 'anomaly_shard', 'corrupted_holokey'],
      nodes: [
        { slug: 'arva-vector',                       name: 'Arva Vector',                       type: 'defense',       levelRange: '25-28' },
        { slug: 'nu-gua-mines',                      name: 'Nu-gua Mines',                      type: 'exterminate',   levelRange: '27-30' },
        { slug: 'enkidu-ice-drifts',                 name: 'Enkidu Ice Drifts',                 type: 'survival',      levelRange: '29-32' },
        { slug: 'mammons-prospect',                  name: "Mammon's Prospect",                 type: 'orphix',        levelRange: '31-34' },
        { slug: 'brom-cluster',                      name: 'Brom Cluster',                      type: 'spy',           levelRange: '32-35' },
        { slug: 'sovereign-grasp',                   name: 'Sovereign Grasp',                   type: 'volatile',      levelRange: '33-36' },
        { slug: 'sister-of-parvos-confrontation',    name: 'Sister of Parvos Confrontation',    type: 'assassination', levelRange: '63-70', spoilerLocked: true },
      ],
    },
    {
      slug: 'pluto-proxima',
      name: { en: 'Pluto Proxima', 'pt-BR': 'Proxima de Plutão' },
      faction: 'corpus',
      levelRange: '35-46',
      image: 'https://wiki.warframe.com/images/Pluto.png',
      resources: ['cubic_diodes', 'titanium', 'asterite', 'gallos_rods', 'isos', 'aucrux_capacitors', 'komms', 'nullstones', 'tellurium', 'anomaly_shard', 'corrupted_holokey'],
      nodes: [
        { slug: 'khufu-envoy',    name: 'Khufu Envoy',    type: 'orphix',      levelRange: '35-38' },
        { slug: 'seven-sirens',   name: 'Seven Sirens',   type: 'exterminate', levelRange: '37-40' },
        { slug: 'obol-crossing',  name: 'Obol Crossing',  type: 'defense',     levelRange: '39-42' },
        { slug: 'fentons-field',  name: "Fenton's Field", type: 'survival',    levelRange: '40-43' },
        { slug: 'profit-margin',  name: 'Profit Margin',  type: 'volatile',    levelRange: '41-44' },
        { slug: 'peregrine-axis', name: 'Peregrine Axis', type: 'spy',         levelRange: '43-46' },
      ],
    },
    {
      slug: 'veil-proxima',
      name: { en: 'Veil Proxima', 'pt-BR': 'Proxima do Véu' },
      faction: 'mixed',
      levelRange: '80-100',
      image: 'assets/backgrounds/VoidSkybox.jpg',
      resources: ['cubic_diodes', 'titanium', 'ticor_plate', 'gallos_rods', 'isos', 'aucrux_capacitors', 'komms', 'nullstones', 'tellurium', 'anomaly_shard', 'corrupted_holokey'],
      sections: {
        grineer: { name: { en: 'Grineer-controlled', 'pt-BR': 'Controle Grineer' }, factionOverride: 'grineer' },
        corpus:  { name: { en: 'Corpus-controlled',  'pt-BR': 'Controle Corpus'  }, factionOverride: 'corpus'  },
      },
      nodes: [
        { slug: 'h-2-cloud',    name: 'H-2 Cloud',    type: 'skirmish', levelRange: '80-85',  section: 'grineer' },
        { slug: 'nsu-grid',     name: 'Nsu Grid',     type: 'skirmish', levelRange: '80-90',  section: 'grineer' },
        { slug: 'r-9-cloud',    name: 'R-9 Cloud',    type: 'skirmish', levelRange: '85-95',  section: 'grineer' },
        { slug: 'flexa',        name: 'Flexa',        type: 'skirmish', levelRange: '90-100', section: 'grineer' },
        { slug: 'calabash',     name: 'Calabash',     type: 'defense',  levelRange: '80-85',  section: 'corpus'  },
        { slug: 'numina',       name: 'Numina',       type: 'orphix',   levelRange: '85-90',  section: 'corpus'  },
        { slug: 'arc-silver',   name: 'Arc Silver',   type: 'survival', levelRange: '85-90',  section: 'corpus'  },
        { slug: 'erato',        name: 'Erato',        type: 'exterminate', levelRange: '90-95', section: 'corpus' },
        { slug: 'lu-yan',       name: 'Lu-yan',       type: 'volatile', levelRange: '95-100', section: 'corpus'  },
        { slug: 'sabmir-cloud', name: 'Sabmir Cloud', type: 'spy',      levelRange: '95-100', section: 'corpus', warframeDrop: 'sevagoth' },
      ],
    },
    {
      // Uranus Proxima — Update 43 (Jade Shadows: Constellations). Post-quest Railjack
      // location with the Pontis Tower hub. levelRange e mission types ainda não
      // publicados na wiki (work-in-progress) — omitidos por ora, confirmar depois.
      slug: 'uranus-proxima',
      name: { en: 'Uranus Proxima', 'pt-BR': 'Proxima de Urano' },
      faction: 'grineer',
      image: 'https://wiki.warframe.com/images/Uranus.png',
      resources: [],
      nodes: [
        { slug: 'the-kuva-wytch', name: "The Kuva Wytch", type: 'skirmish' },
        { slug: 'scorias-angel',  name: "Scoria's Angel",  type: 'assassination', warframeDrop: 'sirius & orion' },
      ],
    },
  ],
  // §20.5 — Special tab: Duviri, Höllvania (1999) and Dark Refractory. Regions
  // have no faction/levelRange like planets; the card themes off `location`.
  // Backgrounds come from assets/backgrounds/.
  special: [
    {
      slug: 'duviri',
      name: { en: 'Duviri', 'pt-BR': 'Duviri' },
      location: 'duviri',
      image: 'assets/backgrounds/Duviri.jpg',
      nodes: [
        { slug: 'duviri-experience', name: { en: 'Duviri Experience', 'pt-BR': 'Experiência Duviri' }, type: 'free_roam', levelRange: '55-70' },
        { slug: 'the-circuit',       name: { en: 'The Circuit', 'pt-BR': 'O Circuito' }, type: 'survival', levelRange: '30+' },
        { slug: 'the-undercroft',    name: 'The Undercroft', type: 'exterminate', levelRange: '55-90' },
        { slug: 'orowyrm',           name: 'Orowyrm', type: 'assassination', levelRange: '70-80', boss: 'Orowyrm' },
        { slug: 'isleweaver',        name: 'Isleweaver', type: 'assassination', levelRange: '55-70', boss: 'Oraxia', warframeDrop: 'oraxia' },
        { slug: 'kullervos-hold', name: { en: "Kullervo's Hold", 'pt-BR': 'Covil de Kullervo' }, type: 'assassination', levelRange: '55-70', boss: 'Kullervo', warframeDrop: 'kullervo' },
      ],
    },
    {
      slug: 'hollvania',
      name: { en: 'Höllvania', 'pt-BR': 'Höllvania' },
      location: 'hollvania',
      image: 'assets/backgrounds/Hollvania.jpg',
      nodes: [
        { slug: 'hollvania-central-mall', name: { en: 'Höllvania Central Mall', 'pt-BR': 'Shopping Central de Höllvania' }, type: 'free_roam', warframeDrop: 'cyte-09' },
        { slug: 'rhu-manor',        name: 'Rhu Manor',        type: 'exterminate',       levelRange: '65-70' },
        { slug: 'mausoleum-east',   name: 'Mausoleum East',   type: 'exterminate',       levelRange: '65-70' },
        { slug: 'lower-vehrvod',    name: 'Lower Vehrvod',    type: 'faceoff',           levelRange: '65-70' },
        { slug: 'vehrvod-district', name: 'Vehrvod District', type: 'faceoff',           levelRange: '65-70' },
        { slug: 'victory-plaza',    name: 'Victory Plaza',    type: 'assassination',     levelRange: '65-70', boss: 'H-09 Efervon Tank' },
        { slug: 'old-konderuk',     name: 'Old Konderuk',     type: 'hell_scrub',        levelRange: '65-70' },
        { slug: 'mischta-ramparts', name: 'Mischta Ramparts', type: 'hell_scrub',        levelRange: '65-70' },
        { slug: 'kobinn-west',      name: 'Köbinn West',      type: 'legacyte_harvest',  levelRange: '65-70' },
        { slug: 'solstice-square',  name: 'Solstice Square',  type: 'stage_defense',     levelRange: '65-70', warframeDrop: 'temple' },
        { slug: 'temporal-archimedea', name: { en: 'Temporal Archimedea', 'pt-BR': 'Archimedea Temporal' }, type: 'temporal_archimedea', levelRange: '350-375' },
      ],
    },
    {
      slug: 'dark-refractory',
      name: { en: 'Dark Refractory', 'pt-BR': 'Refratário Sombrio' },
      location: 'dark-refractory',
      image: 'assets/backgrounds/DarkRefractory.jpg',
      sections: {
        'the-descendia': {
          name: { en: 'The Descendia', 'pt-BR': 'A Descendia' },
          note: { en: 'Roguelike descent — 21 randomized Infernums, resets weekly.',
                  'pt-BR': 'Descida roguelike — 21 Infernums aleatórios, reseta semanalmente.' },
          location: 'dark-refractory',
        },
        'the-perita-rebellion': {
          name: { en: 'The Perita Rebellion', 'pt-BR': 'A Rebelião Perita' },
          note: { en: 'Timed Orders (12 min) then a boss finale chosen by Recall.',
                  'pt-BR': 'Ordens cronometradas (12 min) e então um boss final escolhido pelo Recall.' },
          location: 'dark-refractory',
        },
      },
      nodes: [
        { slug: 'the-descendia',        name: { en: 'The Descendia', 'pt-BR': 'A Descendia' }, type: 'descendia', levelRange: '65-85', boss: 'Roathe', warframeDrop: 'uriel', section: 'the-descendia' },
        { slug: 'perita-hunhullus',     name: 'Hunhullus',      type: 'perita_rebellion', levelRange: '65-70', boss: 'Hunhullus',      section: 'the-perita-rebellion' },
        { slug: 'perita-dactolyst',     name: 'Dactolyst',      type: 'perita_rebellion', levelRange: '65-70', boss: 'Dactolyst',      section: 'the-perita-rebellion' },
        { slug: 'perita-prime-vanguard', name: 'Prime Vanguard', type: 'perita_rebellion', levelRange: '65-70', boss: 'Prime Vanguard', section: 'the-perita-rebellion' },
      ],
    },
  ],
};

// §20.5 — Return the planet array for whichever Star Chart tab is currently
// active. Defaults to Origin System so older callers don't change behavior.
function currentTabPlanets() {
  const tab = state?.starChart?.tab;
  // Defensive: Railjack/Special are hidden with spoilers OFF — never surface
  // their planet sets in that mode even if the tab state is somehow stale.
  if (!state?.starChart?.showSpoilers && (tab === 'empyrean' || tab === 'special')) {
    return STAR_CHART.planets;
  }
  switch (tab) {
    case 'empyrean': return STAR_CHART.proximas || [];
    case 'special':  return STAR_CHART.special || [];
    case 'origin-system':
    default:         return STAR_CHART.planets;
  }
}

// §20.5 — Given a planet slug, return which top-level Star Chart tab owns it.
// Used by redirects (resource farm link, warframe "View on Star Chart" link)
// to switch tabs automatically when the target lives in Railjack/Special.
function findPlanetTab(planetSlug) {
  if (!planetSlug) return 'origin-system';
  if (STAR_CHART.planets.some(p => p.slug === planetSlug)) return 'origin-system';
  if ((STAR_CHART.proximas || []).some(p => p.slug === planetSlug)) return 'empyrean';
  if ((STAR_CHART.special || []).some(p => p.slug === planetSlug)) return 'special';
  return 'origin-system';
}

// Resources from the Special-tab systems are hidden with spoilers OFF (same as
// their tabs). Open-world locations stay visible (base game).
const SPOILER_HIDDEN_LOCATIONS = new Set(['duviri', 'hollvania', 'dark-refractory', 'misc']);

// Whether a resource should be hidden while spoilers are OFF: explicit
// spoilerLocked flag, a Special-tab location, or an Empyrean (Railjack) drop.
function resourceIsSpoiler(r) {
  if (!r) return false;
  if (r.spoilerLocked) return true;
  if (SPOILER_HIDDEN_LOCATIONS.has(r.location)) return true;
  if (Array.isArray(r.sources) && r.sources.includes('empyrean')) return true;
  return false;
}

function getResource(slug) {
  return RESOURCES[slug] || null;
}
function getRarity(slug) {
  return SC_RARITIES[slug] || null;
}
function resourceName(slug) {
  const r = getResource(slug);
  if (!r) return slug;
  return r.name[state.locale] || r.name[DEFAULT_LOCALE] || slug;
}
function rarityName(slug) {
  const r = getRarity(slug);
  if (!r) return slug;
  return r.name[state.locale] || r.name[DEFAULT_LOCALE] || slug;
}
function findNode(planetSlug, nodeSlug) {
  const p = getPlanet(planetSlug);
  if (!p) return null;
  return p.nodes.find(n => n.slug === nodeSlug) || null;
}

// Normalize warframeDrop to an array regardless of string vs array form.
function warframeDropSlugs(drop) {
  if (!drop) return [];
  return Array.isArray(drop) ? drop : [drop];
}

// Reverse-lookup: given a warframe slug, find the planet + node it drops from
// in STAR_CHART (used by the acquisition link in the Archetypes tab).
function findWarframeDropNode(warframeSlug) {
  if (!warframeSlug) return null;
  // Scan all systems — Origin planets, Railjack Proximas and Special regions —
  // so frames dropped in Höllvania/Duviri/Dark Refractory (Temple, Oraxia,
  // Uriel, etc.) resolve too, not just Origin-System boss nodes.
  const all = [
    ...STAR_CHART.planets,
    ...(STAR_CHART.proximas || []),
    ...(STAR_CHART.special || []),
  ];
  for (const planet of all) {
    for (const node of (planet.nodes || [])) {
      if (warframeDropSlugs(node.warframeDrop).includes(warframeSlug)) {
        return { planet, node };
      }
    }
  }
  return null;
}

function getPlanet(slug) {
  return STAR_CHART.planets.find(p => p.slug === slug)
      || (STAR_CHART.proximas || []).find(p => p.slug === slug)
      || (STAR_CHART.special || []).find(p => p.slug === slug)
      || null;
}
function getMissionType(slug) {
  return MISSION_TYPES[slug] || null;
}
function getFaction(slug) {
  return SC_FACTIONS[slug] || null;
}
function missionTypeName(slug) {
  const mt = getMissionType(slug);
  if (!mt) return slug;
  return mt.name[state.locale] || mt.name[DEFAULT_LOCALE] || slug;
}
function scFactionName(slug) {
  const f = getFaction(slug);
  if (!f) return slug;
  return f.name[state.locale] || f.name[DEFAULT_LOCALE] || slug;
}
function planetName(p) {
  if (!p || !p.name) return '';
  return p.name[state.locale] || p.name[DEFAULT_LOCALE] || p.slug;
}

// Node names are usually plain strings (proper nouns like 'E Prime'), but
// open-world activity nodes use a localized { en, 'pt-BR' } object.
function nodeName(node) {
  const n = node?.name;
  return (n && typeof n === 'object') ? (n[state.locale] || n[DEFAULT_LOCALE] || '') : (n || '');
}

function weaponBySlug(slug) {
  if (!slug) return null;
  for (const cat of Object.values(WEAPONS)) {
    const found = cat.find(w => w.slug === slug);
    if (found) return found;
  }
  return null;
}

// Index family → list of weapons that share the same riven family.
const WEAPON_FAMILY_INDEX = (() => {
  const idx = {};
  Object.values(WEAPONS).forEach(cat => {
    cat.forEach(w => {
      if (!w.family) return;
      if (!idx[w.family]) idx[w.family] = [];
      idx[w.family].push(w);
    });
  });
  return idx;
})();

function weaponsInFamily(family) {
  return family ? (WEAPON_FAMILY_INDEX[family] || []) : [];
}

// Derive the wiki image URL for a weapon. Pattern observed across all 35
// secondaries: strip whitespace from the display name, append ".png", host
// at https://wiki.warframe.com/images/. Override per-weapon by setting an
// explicit `image` field on the WEAPONS entry.
function weaponImageUrl(weapon) {
  if (!weapon) return null;
  if (weapon.image) return weapon.image;
  const filename = weapon.name.replace(/\s+/g, '').replace(/[^A-Za-z0-9-]/g, '') + '.png';
  return `https://wiki.warframe.com/images/${filename}`;
}

// Variant-order hint: lower number = appears first within a family.
const VARIANT_ORDER = [
  /^(?!.*\b(prime|wraith|vandal|prisma|sancti|vaykor|synoid|rakta|telos|secura|mara|kuva|tenet|coda|mk1)\b)/i, // base (no suffix)
  /\bprime\b/i,
  /\bwraith\b/i,
  /\bvandal\b/i,
  /\bprisma\b/i,
  /\bsancti\b/i,
  /\bvaykor\b/i,
  /\bsynoid\b/i,
  /\brakta\b/i,
  /\btelos\b/i,
  /\bsecura\b/i,
  /\bmara\b/i,
  /\bkuva\b/i,
  /\btenet\b/i,
  /\bcoda\b/i,
  /\bmk1/i,
];

// Display family: how the weapon is GROUPED in the picker UI. This differs
// from the `family` field (used for riven sharing semantics) — Kuva/Tenet/
// Coda/MK1 variants don't share rivens with their base, but visually we want
// them nested under the parent so users can browse them together.
//
// Rule: strip a known prefix (kuva-/tenet-/coda-/mk1-) from the slug. If a
// weapon with the stripped slug exists as its own family, group under it.
// Otherwise keep the original family (e.g. Kuva Bramma stays its own group
// because there's no base "Bramma").
const WEAPON_DISPLAY_PREFIXES = ['kuva-', 'tenet-', 'coda-', 'mk1-'];

function displayFamily(w) {
  if (!w || !w.slug) return w?.family || null;
  for (const prefix of WEAPON_DISPLAY_PREFIXES) {
    if (w.slug.startsWith(prefix)) {
      const candidate = w.slug.substring(prefix.length);
      if (WEAPON_FAMILY_INDEX[candidate]) return candidate;
    }
  }
  return w.family;
}

function variantRank(name) {
  for (let i = 0; i < VARIANT_ORDER.length; i++) {
    if (VARIANT_ORDER[i].test(name)) return i;
  }
  return VARIANT_ORDER.length;
}

function weaponsForSearch(category, query) {
  // Kept for downstream callers that want a flat sorted list (OCR detection, etc.).
  // The picker UI uses weaponFamilyGroups directly to render collapsible families.
  const groups = weaponFamilyGroups(category, query);
  const result = [];
  groups.forEach(g => g.items.forEach(w => result.push(w)));
  return result;
}

function weaponFamilyGroups(category, query) {
  let list = WEAPONS[category] || [];
  if (query) {
    const norm = normalizeForMatch(query);
    list = list.filter(w => normalizeForMatch(w.name).includes(norm));
  }
  // Group by displayFamily — Kuva/Tenet/Coda/MK1 variants nest under the
  // parent's family when the parent exists, so users can browse them together.
  const byFamily = new Map();
  list.forEach(w => {
    const df = displayFamily(w);
    if (!byFamily.has(df)) byFamily.set(df, []);
    byFamily.get(df).push(w);
  });
  const groups = [];
  byFamily.forEach((items, family) => {
    items.sort((a, b) => variantRank(a.name) - variantRank(b.name)
      || a.name.localeCompare(b.name));
    groups.push({ family, items });
  });
  groups.sort((a, b) => a.items[0].name.toLowerCase().localeCompare(b.items[0].name.toLowerCase()));
  return groups;
}

function isFamilyExpanded(family) {
  // When there's an active search, expand everything so matches are visible.
  if (state.weaponPicker.search) return true;
  return state.weaponPicker.expandedFamilies.has(family);
}

function toggleFamilyExpanded(family) {
  if (state.weaponPicker.expandedFamilies.has(family)) {
    state.weaponPicker.expandedFamilies.delete(family);
  } else {
    state.weaponPicker.expandedFamilies.add(family);
  }
}

// Per-stat rationale text used in the result breakdown and the
// "Recommended" panel. One short sentence per slug × side × locale.
const RIVEN_RATIONALE = {
  damage: {
    pos: { en: 'Universal damage multiplier — scales every weapon, stacks additively with Serration.', 'pt-BR': 'Multiplicador universal de dano — escala toda arma, soma com Serration.' },
    neg: { en: 'Inverts damage on hit (heals enemies) at extreme rolls. Always avoid.', 'pt-BR': 'Em rolls extremos chega a curar inimigos. Sempre evite.' },
  },
  multishot: {
    pos: { en: 'Adds extra projectiles AND doubles status proc rate per shot. Strongest universal stat.', 'pt-BR': 'Adiciona projéteis extras E dobra a taxa de procs por tiro. Melhor stat universal.' },
    neg: { en: 'Cripples DPS directly — comparable to losing Damage. Avoid.', 'pt-BR': 'Detona o DPS diretamente — equivalente a perder Damage. Evite.' },
  },
  critical_chance: {
    pos: { en: 'Probability of crit hits. Top priority on crit-base weapons (Rubico, Tiberon).', 'pt-BR': 'Probabilidade de hits críticos. Prioridade máxima em armas de crit (Rubico, Tiberon).' },
    neg: { en: 'Kills crit-based DPS. Avoid on crit weapons.', 'pt-BR': 'Acaba com o DPS de crit. Evite em armas que críticam muito.' },
  },
  critical_damage: {
    pos: { en: 'Multiplier on crit hits. Synergizes with high Crit Chance — strong but secondary.', 'pt-BR': 'Multiplicador dos críticos. Sinérgico com alta Chance de Crítico — forte mas secundário.' },
    neg: { en: 'Reduces crit payoff. Bad on crit weapons, mild elsewhere.', 'pt-BR': 'Reduz o ganho de crítico. Ruim em armas de crit, leve nas outras.' },
  },
  status_chance: {
    pos: { en: 'Drives proc rate. Crucial for status-focused and Condition Overload builds.', 'pt-BR': 'Define a taxa de procs. Essencial pra builds de status e Condition Overload.' },
    neg: { en: 'Drops proc rate. Harmful on status builds, less impactful on pure crit weapons.', 'pt-BR': 'Reduz a taxa de procs. Ruim em builds de status, menos impactante em crit puro.' },
  },
  status_duration: {
    pos: { en: 'Extends procs (Slash bleed, Heat armor strip, Viral). Useful but secondary.', 'pt-BR': 'Estende procs (sangramento de Corte, strip de armadura do Ígneo, Viral). Útil mas secundário.' },
    neg: { en: 'Shorter procs — less time for stack-up effects. Mild.', 'pt-BR': 'Procs mais curtos — menos tempo pra stacks acumularem. Leve.' },
  },
  toxin: {
    pos: { en: 'Adds Toxin element — combines with Cold for Viral, with Electricity for Corrosive.', 'pt-BR': 'Adiciona dano Tóxico — combina com Glacial pra Viral, com Elétrico pra Corrosivo.' },
    neg: { en: 'Reduces Toxin damage. Mild unless the build relies on a specific elemental combo.', 'pt-BR': 'Reduz dano Tóxico. Leve, a menos que a build dependa da combinação elemental.' },
  },
  heat: {
    pos: { en: 'Adds Heat — strips armor and procs panic. Standalone strong, also combines.', 'pt-BR': 'Adiciona dano Ígneo — remove armadura e causa pânico. Forte sozinho, combina também.' },
    neg: { en: 'Reduces Heat. Mild on most builds.', 'pt-BR': 'Reduz dano Ígneo. Leve na maioria das builds.' },
  },
  cold: {
    pos: { en: 'Adds Cold — slows enemies and feeds Viral combos.', 'pt-BR': 'Adiciona dano Glacial — lenta inimigos e alimenta combos Virais.' },
    neg: { en: 'Reduces Cold. Mild unless slow/Viral is critical.', 'pt-BR': 'Reduz dano Glacial. Leve, a menos que slow/Viral seja crítico.' },
  },
  electricity: {
    pos: { en: 'Adds Electricity — chains between enemies, feeds Magnetic/Corrosive/Radiation combos.', 'pt-BR': 'Adiciona dano Elétrico — encadeia entre inimigos, alimenta combos Magnético/Corrosivo/Radioativo.' },
    neg: { en: 'Reduces Electricity. Mild on most builds.', 'pt-BR': 'Reduz dano Elétrico. Leve na maioria das builds.' },
  },
  impact: {
    pos: { en: 'Adds Impact. Generally low-value — Slash dominates physical procs.', 'pt-BR': 'Adiciona Impacto. Geralmente fraco — Corte domina os procs físicos.' },
    neg: { en: 'Reduces Impact. Often beneficial on Slash-focused weapons (more bleed procs).', 'pt-BR': 'Reduz Impacto. Frequentemente benéfico em armas focadas em Corte (mais sangramento).' },
  },
  puncture: {
    pos: { en: 'Adds Puncture. Decent on armor-heavy targets, weakens enemy damage.', 'pt-BR': 'Adiciona Penetração. Bom contra armadura, enfraquece o dano inimigo.' },
    neg: { en: 'Reduces Puncture — raises the share of desirable status procs (Slash/Corrosive). One of the best free negatives.', 'pt-BR': 'Reduz Penetração — aumenta a proporção de status bons (Corte/Corrosivo). Um dos melhores negativos grátis.' },
  },
  slash: {
    pos: { en: 'Adds Slash — increases bleed proc rate, which bypasses armor entirely.', 'pt-BR': 'Adiciona Corte — aumenta a taxa de sangramento, que ignora armadura.' },
    neg: { en: 'Reduces Slash. Mild, can hurt bleed-focused builds.', 'pt-BR': 'Reduz Corte. Leve, pode atrapalhar builds de sangramento.' },
  },
  fire_rate: {
    pos: { en: 'More shots per second. Strong when it lets you drop Speed Trigger or equivalent.', 'pt-BR': 'Mais tiros por segundo. Forte quando permite tirar Speed Trigger ou equivalente.' },
    neg: { en: 'Hard DPS hit — almost as bad as losing Damage. Avoid.', 'pt-BR': 'Perda forte de DPS — quase tão ruim quanto perder Damage. Evite.' },
  },
  reload_speed: {
    pos: { en: 'Faster reload — quality of life on autos and shotguns.', 'pt-BR': 'Recarga mais rápida — qualidade de vida em autos e shotguns.' },
    neg: { en: 'Slower reload. Annoying but rarely build-breaking.', 'pt-BR': 'Recarga mais lenta. Chato mas raramente quebra a build.' },
  },
  magazine_capacity: {
    pos: { en: 'More rounds per mag. Niche — Magazine mods cover most cases.', 'pt-BR': 'Mais munição no carregador. Nicho — mods de magazine cobrem a maioria dos casos.' },
    neg: { en: 'Smaller mag — free on snipers/launchers, mild on autos.', 'pt-BR': 'Carregador menor — gratuito em snipers/launchers, leve em autos.' },
  },
  ammo_max: {
    pos: { en: 'More reserve ammo. Niche on ammo-hungry weapons.', 'pt-BR': 'Mais munição de reserva. Nicho em armas que gastam muito.' },
    neg: { en: 'Less reserve ammo. Harmless on most builds (ammo pickups / mutation cover it) — a free negative.', 'pt-BR': 'Menos munição de reserva. Inofensivo na maioria das builds (pickups / mutação cobrem) — negativo grátis.' },
  },
  punch_through: {
    pos: { en: 'Bullets pierce through targets. Strong for AoE wave clear.', 'pt-BR': 'Tiros atravessam alvos. Forte pra limpar grupos.' },
    neg: { en: 'Loses pierce. Neutral on most non-pierce builds.', 'pt-BR': 'Perde a penetração. Neutro em builds que não dependem disso.' },
  },
  projectile_speed: {
    pos: { en: 'Faster projectiles. Helps with travel time on bows and launchers.', 'pt-BR': 'Projéteis mais rápidos. Ajuda no tempo de viagem de arcos e launchers.' },
    neg: { en: 'Slower projectiles. Annoying on bows, irrelevant on hitscan.', 'pt-BR': 'Projéteis mais lentos. Chato em arcos, irrelevante em hitscan.' },
  },
  recoil: {
    pos: { en: 'Less recoil — minor, and it wastes a positive slot.', 'pt-BR': 'Menos recuo — leve, e desperdiça um slot positivo.' },
    neg: { en: 'More recoil. Negligible on beams, bows and launchers; more noticeable on full-auto / high fire-rate weapons.', 'pt-BR': 'Mais recuo. Irrelevante em beams, arcos e launchers; mais perceptível em armas de tiro rápido (auto/burst).' },
  },
  zoom: {
    pos: { en: 'More zoom — usually pointless outside snipers.', 'pt-BR': 'Mais zoom — geralmente inútil fora de snipers.' },
    neg: { en: 'Less zoom. Aesthetic only — perfect free negative.', 'pt-BR': 'Menos zoom. Só estético — negativo grátis perfeito.' },
  },
  faction_grineer: {
    pos: { en: 'Bonus damage vs Grineer. Solid on dedicated anti-Grineer loadouts.', 'pt-BR': 'Dano bônus contra Grineer. Bom em loadouts dedicados.' },
    neg: { en: 'Less damage vs Grineer. Free if you skip Grineer missions.', 'pt-BR': 'Menos dano em Grineer. Grátis se você não joga missões Grineer.' },
  },
  faction_corpus: {
    pos: { en: 'Bonus damage vs Corpus. Useful for shield-heavy enemies.', 'pt-BR': 'Dano bônus contra Corpus. Útil pra inimigos com muito escudo.' },
    neg: { en: 'Less damage vs Corpus. Free if you skip Corpus missions.', 'pt-BR': 'Menos dano em Corpus. Grátis se você não joga missões Corpus.' },
  },
  faction_infested: {
    pos: { en: 'Bonus damage vs Infested. Strong on Eris/Deimos farms.', 'pt-BR': 'Dano bônus contra Infestados. Forte em farms de Eris/Deimos.' },
    neg: { en: 'Less damage vs Infested. Free if you skip Infested missions.', 'pt-BR': 'Menos dano em Infestados. Grátis se você não joga missões Infestadas.' },
  },
  faction_corrupted: {
    pos: { en: 'Bonus damage vs Corrupted. Niche — only matters in Void missions.', 'pt-BR': 'Dano bônus contra Corrompidos. Nicho — só importa em missões da Vazio.' },
    neg: { en: 'Less damage vs Corrupted. Almost always free.', 'pt-BR': 'Menos dano em Corrompidos. Quase sempre grátis.' },
  },
  combo_duration: {
    pos: { en: 'Longer combo window between hits. Niche on heavy-attack builds.', 'pt-BR': 'Janela de combo mais longa. Nicho em builds de ataque pesado.' },
    neg: { en: 'Shorter combo window. Mostly fine — combo builds quickly.', 'pt-BR': 'Janela mais curta. Quase sempre ok — combo enche rápido.' },
  },
  combo_count_chance: {
    pos: { en: 'Extra combo per hit. Strong on heavy-attack and combo-scaling builds.', 'pt-BR': 'Combo extra por hit. Forte em builds de ataque pesado e escalonamento.' },
    neg: { en: 'Less combo per hit. Mild on most non-heavy builds.', 'pt-BR': 'Menos combo por hit. Leve em builds que não usam ataque pesado.' },
  },
  initial_combo: {
    pos: { en: 'Starts the combo counter higher — front-loads heavy-attack damage.', 'pt-BR': 'Inicia o contador de combo mais alto — antecipa dano de ataque pesado.' },
    neg: { en: 'Lower initial combo. Neutral — combo builds quickly.', 'pt-BR': 'Combo inicial menor. Neutro — combo enche rápido.' },
  },
  attack_speed: {
    pos: { en: 'More swings per second. Multiplicative with other modifiers — strong universally.', 'pt-BR': 'Mais ataques por segundo. Multiplicativo com outros bônus — forte universalmente.' },
    neg: { en: 'Slower swings. Hurts DPS and combo-building. Avoid.', 'pt-BR': 'Ataques mais lentos. Atrapalha DPS e geração de combo. Evite.' },
  },
  range: {
    pos: { en: 'Longer melee reach. Excellent on zaws, polearms and heavy weapons.', 'pt-BR': 'Mais alcance no melee. Excelente em zaws, polearms e armas pesadas.' },
    neg: { en: 'Shorter reach. Mild on long weapons, painful on daggers.', 'pt-BR': 'Menos alcance. Leve em armas longas, ruim em adagas.' },
  },
  heavy_attack_eff: {
    pos: { en: 'Heavy attacks consume less combo — enables spammable heavies.', 'pt-BR': 'Ataque pesado consome menos combo — permite spam.' },
    neg: { en: 'Heavy attacks burn more combo. Mild on non-heavy builds.', 'pt-BR': 'Ataque pesado gasta mais combo. Leve em builds normais.' },
  },
  heavy_attack_windup: {
    pos: { en: 'Faster heavy charge. Quality of life on Tennokai and heavy-attack builds.', 'pt-BR': 'Carga mais rápida no ataque pesado. Qualidade de vida em Tennokai e ataque pesado.' },
    neg: { en: 'Slower charge. Annoying on heavy builds, irrelevant on normal.', 'pt-BR': 'Carga mais lenta. Chato em builds de pesado, irrelevante nas normais.' },
  },
  finisher_damage: {
    pos: { en: 'More damage on finishers. Useful for stealth and Parazon builds.', 'pt-BR': 'Mais dano em execuções. Útil em builds furtivas e de Parazon.' },
    neg: { en: 'Less finisher damage. Neutral — finishers usually 1-shot anyway.', 'pt-BR': 'Menos dano em execuções. Neutro — execução geralmente mata em 1 hit.' },
  },
};

// Generic recommendations shown when no specific weapon is selected.
// These are universal tier opinions — concrete weapon-specific picks live
// in the weapon entry's preferred_positive / wasted_positive / preferred_negative.
const UNIVERSAL_RECS = {
  positive: ['critical_chance', 'critical_damage', 'multishot', 'damage', 'toxin'],
  freeNegative: ['zoom', 'recoil', 'impact'],
  avoidNegative: ['damage', 'multishot', 'critical_chance', 'critical_damage', 'ammo_max'],
};

function rivenRationale(slug, side /* 'pos' | 'neg' */) {
  const entry = RIVEN_RATIONALE[slug];
  if (!entry || !entry[side]) return '';
  return entry[side][state.locale] || entry[side][DEFAULT_LOCALE] || '';
}

function rivenStatName(slug) {
  const def = RIVEN_STATS[slug];
  if (!def) return slug;
  return def.name[state.locale] || def.name[DEFAULT_LOCALE] || slug;
}

function rivenStatsForCategory(cat) {
  return Object.entries(RIVEN_STATS)
    .filter(([, def]) => def.cats.includes(cat))
    .map(([slug]) => slug)
    .sort((a, b) => rivenStatName(a).localeCompare(rivenStatName(b), state.locale));
}

// Returns the weapon object with incarnon overrides merged in when incarnon mode is active.
function resolvedWeapon(slug) {
  const w = slug ? weaponBySlug(slug) : null;
  if (!w || !w.incarnon || !state.riven.incarnonMode) return w;
  return {
    ...w,
    preferred_positive: w.incarnon.preferred_positive || w.preferred_positive,
    wasted_positive:    w.incarnon.wasted_positive,        // undefined = no wasted stats
    preferred_negative: w.incarnon.preferred_negative || w.preferred_negative,
  };
}

// Resolve effective tier for a positive stat given the weapon context.
// Weapon overrides (preferred / wasted) replace the generic tier when set.
function effectivePosTier(slug, weapon) {
  const def = RIVEN_STATS[slug];
  if (!def) return null;
  if (weapon) {
    if (weapon.preferred_positive && weapon.preferred_positive[slug]) {
      return weapon.preferred_positive[slug];
    }
    if (weapon.wasted_positive && weapon.wasted_positive[slug]) {
      return weapon.wasted_positive[slug];
    }
  }
  return def.posTier;
}

// Quão bom é recoil como NEGATIVO depende do tipo de arma. Avaliado em 3 camadas
// (ordem importa — keyword de modo de disparo é ambígua):
//   1) CLASSE inerentemente sem recuo de mira (beam, bow, crossbow, sniper, thrown,
//      speargun, launcher contínuo Held) → freebie ('beneficial'), qualquer modo.
//   2) Disparo SUSTENTADO (auto/burst/semi) em rifle/pistol/shotgun → recuo atrapalha
//      ('neutral'). Pega "Auto Charge" do Gorgon (spool-up full-auto, NÃO tiro carregado).
//   3) Tiro único / carga / contínuo (charge/active/arc/launcher/chamber) → freebie.
function recoilNegTier(weapon) {
  const type = ((weapon && weapon.type) || '').toLowerCase();
  if (!type) return 'beneficial';
  if (/beam|bow|crossbow|sniper|thrown|speargun|held/.test(type)) return 'beneficial';
  if (/auto|burst|semi|duplex/.test(type)) return 'neutral';
  if (/charge|active|arc|launcher|chamber/.test(type)) return 'beneficial';
  return 'beneficial';
}

function effectiveNegTier(slug, weapon) {
  const def = RIVEN_STATS[slug];
  if (!def) return null;
  if (slug === 'recoil') return recoilNegTier(weapon);
  if (weapon && weapon.preferred_negative && weapon.preferred_negative[slug]) {
    return weapon.preferred_negative[slug];
  }
  return def.negTier;
}

// Scoring per PLAN §14.2 (v3: weapon-aware).
function scoreRiven({ stats, weaponSlug }) {
  const filled = stats.filter(s => s.slug);
  // Sign is derived from the value via isStatNegative (handles multiplier stats too).
  const negatives = filled.filter(s => isStatNegative(s));
  const positives = filled.filter(s => !isStatNegative(s));
  const p = positives.length;
  const n = negatives.length;

  const weapon = resolvedWeapon(weaponSlug);

  // Roll quality: without a weapon, we have no calibration → 1.0 fixed.
  // With a weapon, we use disposition as a proxy: stats on high-disposition
  // weapons (●●●●●) roll bigger, so a "good roll" there is harder to achieve.
  // For now we just bias the maxPossible — actual roll-value calibration
  // (comparing input vs. wiki max tables) is v3.1.
  const rollQuality = 1.0;

  let sumPositives = 0;
  positives.forEach(s => {
    const tier = effectivePosTier(s.slug, weapon);
    if (!tier) return;
    sumPositives += RIVEN_TIER_WEIGHTS[tier] * rollQuality;
  });

  let sumNegMod = 0;
  negatives.forEach(s => {
    const tier = effectiveNegTier(s.slug, weapon);
    if (!tier) return;
    sumNegMod += RIVEN_NEG_MODS[tier];
  });

  // Shape bonus / penalty
  let shapeBonus = 0;
  let shapeKey = 'neutral';
  if (p === 3 && n === 1) { shapeBonus = 1.0;  shapeKey = 'godroll'; }
  else if (p === 4 && n === 0) { shapeBonus = -0.5; shapeKey = 'bad';     }
  else if (p === 2 && n === 1) { shapeBonus = 0.5;  shapeKey = 'good';    }
  else if (p === 1 && n === 1) { shapeBonus = 0.5;  shapeKey = 'good';    }

  // Max possible: every positive is S-tier × rollQuality 1.0, the lone negative (if any) is beneficial.
  const bestNeg = n > 0 ? RIVEN_NEG_MODS.beneficial * n : 0;
  let bestShape;
  if      (p === 3 && n === 1) bestShape = 1.0;
  else if (p === 4 && n === 0) bestShape = 0;
  else if (p === 2 && n === 1) bestShape = 0.5;
  else if (p === 1 && n === 1) bestShape = 0.5;
  else bestShape = 0;
  const maxPossible = (p * RIVEN_TIER_WEIGHTS.S * rollQuality) + bestNeg + bestShape;

  // MagnitudeFactor (§8.5): quão forte o roll é vs. o máximo da arma, normalizado
  // por disposition. Só conta positivos desejáveis (S/A) com base conhecida e valor
  // preenchido. Sem arma/disposition/valores → 1.0 (não penaliza). Efeito real ~±10%
  // (o grosso da nota vem da combinação de stats, não da magnitude).
  let rollStrength = null;
  let magFactor = 1.0;
  if (weapon && weapon.disposition) {
    const table = RIVEN_BASE_VALUES[rivenBaseClass(weapon.category)] || {};
    const cfg = rivenConfigFactor(p, n);
    const factors = [];
    positives.forEach(s => {
      const tier = effectivePosTier(s.slug, weapon);
      if (tier !== 'S' && tier !== 'A') return;       // só stats desejáveis
      const base = table[s.slug];
      if (!base) return;                               // utilitário/faction sem base → ignora
      const val = Math.abs(parseFloat(s.value));
      if (!val || !isFinite(val)) return;              // sem valor → ignora
      const expectedMax = base * 1.1 * weapon.disposition * cfg;
      factors.push(Math.max(0, Math.min(1, val / expectedMax)));
    });
    if (factors.length) {
      rollStrength = factors.reduce((a, b) => a + b, 0) / factors.length;
      // §8.5: a força do roll AJUSTA a nota (~±10–20%), não a domina — o grosso vem
      // da combinação de stats. Mapeia [0,1] -> [0.8,1.0] (antes era multiplicador
      // direto: um roll 67% cortava 33% da nota, o que afundava armas de disposition
      // alta tipo Torid mesmo com combinação god-roll).
      magFactor = 0.8 + 0.2 * rollStrength;
    }
  }

  const raw = sumPositives + sumNegMod + shapeBonus;
  const base01 = maxPossible > 0 ? Math.max(0, Math.min(1, raw / maxPossible)) : 0;
  const score = Math.max(0, Math.min(10, base01 * magFactor * 10));

  const verdict = rivenVerdictFor(score);

  return {
    score: Math.round(score * 10) / 10,
    verdict,
    shapeKey,
    rollStrength,                                  // 0–1 (null se não calibrável)
    disposition: weapon ? (weapon.disposition || null) : null,
    incarnonMode: !!(weapon && weapon.incarnon && state.riven.incarnonMode),
    weapon: weapon ? { slug: weapon.slug, name: weapon.name } : null,
    breakdown: filled.map(s => {
      const sign = rivenStatSign(s);
      const tier = sign === 'pos'
        ? effectivePosTier(s.slug, weapon)
        : effectiveNegTier(s.slug, weapon);
      const baseTier = sign === 'pos'
        ? RIVEN_STATS[s.slug].posTier
        : RIVEN_STATS[s.slug].negTier;
      return {
        slug: s.slug,
        sign,
        value: s.value,
        label: rivenStatName(s.slug),
        tier,
        tierOverridden: tier !== baseTier,
      };
    }),
  };
}

const RIVEN_VERDICTS = [
  { min: 9.0, key: 'godroll',   emoji: '🌟', color: '#f0c97a' },
  { min: 7.5, key: 'excellent', emoji: '🔥', color: '#a3d142' },
  { min: 6.0, key: 'solid',     emoji: '✅', color: '#4ec3ea' },
  { min: 4.0, key: 'mid',       emoji: '🤷', color: '#bbbbbb' },
  { min: 2.0, key: 'bad',       emoji: '🗑️', color: '#d14545' },
  { min: 0,   key: 'trash',     emoji: '💀', color: '#7a2c2c' },
];

function rivenVerdictFor(score) {
  return RIVEN_VERDICTS.find(v => score >= v.min) || RIVEN_VERDICTS[RIVEN_VERDICTS.length - 1];
}

// ----- OCR: label index, fuzzy matching, parsing -----

function normalizeForMatch(s) {
  return String(s)
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '') // strip combining marks (accents)
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const RIVEN_STAT_ALIASES = {
  damage:            ['dano', 'damage'],
  critical_chance:   ['chance critica', 'crit chance', 'critical chance'],
  critical_damage:   ['dano critico', 'crit damage', 'critical damage'],
  status_chance:     ['chance de status', 'status chance'],
  status_duration:   ['duracao de status', 'status duration'],
  multishot:         ['disparo multiplo', 'multishot'],
  fire_rate:         ['cadencia de tiro', 'fire rate', 'velocidade de disparo'],
  reload_speed:      ['velocidade de recarga', 'reload speed'],
  magazine_capacity: ['capacidade do carregador', 'magazine capacity', 'mag capacity'],
  ammo_max:          ['municao maxima', 'ammo maximum', 'max ammo'],
  punch_through:     ['penetracao', 'punch through'],
  projectile_speed:  ['velocidade do projetil', 'projectile speed'],
  recoil:            ['recuo', 'recoil', 'weapon recoil'],
  zoom:              ['zoom'],
  toxin:             ['dano toxico', 'toxin', 'toxin damage'],
  heat:              ['dano de calor', 'heat', 'heat damage'],
  cold:              ['dano de frio', 'cold', 'cold damage'],
  electricity:       ['dano eletrico', 'electricity', 'electricity damage'],
  impact:            ['dano de impacto', 'impact', 'impact damage', 'colisivo', 'dano colisivo', 'acolisivo'],
  puncture:          ['dano de penetracao', 'puncture', 'puncture damage'],
  slash:             ['dano de corte', 'slash', 'slash damage'],
  combo_duration:    ['duracao do combo', 'combo duration'],
  combo_count_chance:['chance de acumulo de combo', 'combo count chance', 'combo chance'],
  initial_combo:     ['combo inicial', 'initial combo'],
  attack_speed:      ['velocidade de ataque', 'attack speed'],
  range:             ['alcance', 'range', 'melee range'],
  heavy_attack_eff:  ['eficiencia de ataque pesado', 'heavy attack efficiency'],
  heavy_attack_windup:['carregamento de ataque pesado', 'heavy attack wind up', 'heavy attack windup'],
  finisher_damage:   ['dano de execucao', 'finisher damage'],
  // Facção: o Riven mostra "Dano contra X" (in-game) além do "Dano em X" do
  // catálogo — sem o alias "contra", "Dano contra Infestados" caía em `damage`.
  faction_grineer:   ['dano em grineer', 'dano contra grineer', 'damage to grineer', 'damage vs grineer', 'damage against grineer'],
  faction_corpus:    ['dano em corpus', 'dano contra corpus', 'damage to corpus', 'damage vs corpus', 'damage against corpus'],
  faction_infested:  ['dano em infestados', 'dano contra infestados', 'damage to infested', 'damage vs infested', 'damage against infested'],
  faction_corrupted: ['dano em corrompidos', 'dano contra corrompidos', 'damage to corrupted', 'damage vs corrupted', 'damage against corrupted'],
};

const RIVEN_LABEL_INDEX = (() => {
  const idx = [];
  Object.entries(RIVEN_STATS).forEach(([slug, def]) => {
    Object.values(def.name).forEach(label => {
      idx.push({ key: normalizeForMatch(label), slug });
    });
    const aliases = RIVEN_STAT_ALIASES[slug] || [];
    aliases.forEach(a => idx.push({ key: normalizeForMatch(a), slug }));
  });
  return idx;
})();

function levenshtein(a, b) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const dp = new Array(b.length + 1);
  for (let j = 0; j <= b.length; j++) dp[j] = j;
  for (let i = 1; i <= a.length; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = dp[j];
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[j] = Math.min(dp[j] + 1, dp[j - 1] + 1, prev + cost);
      prev = tmp;
    }
  }
  return dp[b.length];
}

function matchStatLabel(label) {
  const norm = normalizeForMatch(label);
  if (!norm) return null;
  const firstWord = norm.split(/\s+/)[0] || '';

  // 1. Exact match.
  for (const entry of RIVEN_LABEL_INDEX) {
    if (entry.key === norm) return { slug: entry.slug, confidence: 1.0 };
  }
  // 2. Substring / prefix match — pick the MOST SPECIFIC candidate (smallest
  //    length difference). Without this, "Damage to Infeste" (OCR-cut "d")
  //    would match `damage` first via norm.startsWith, missing the better
  //    `damage to infested` (faction_infested) hit later in the index.
  let bestSub = null;
  let bestSubDiff = Infinity;
  for (const entry of RIVEN_LABEL_INDEX) {
    if (entry.key.startsWith(norm) || norm.startsWith(entry.key)
        || entry.key.includes(norm) || norm.includes(entry.key)) {
      const diff = Math.abs(entry.key.length - norm.length);
      if (diff < bestSubDiff) {
        bestSubDiff = diff;
        bestSub = entry;
      }
    }
  }
  if (bestSub) return { slug: bestSub.slug, confidence: 0.85 };
  // 3. Levenshtein fallback — but require the first word to be close.
  // This prevents "Chance de Status" from collapsing onto "Chance de Crítico"
  // through pure char-edit distance: both start with "Chance" so first-word
  // gate passes, but the *full* distance is then judged tightly (≤2 edits).
  let best = null;
  let bestDist = Infinity;
  for (const entry of RIVEN_LABEL_INDEX) {
    const entryFirst = entry.key.split(/\s+/)[0] || '';
    // First word must be within 1 edit (typo tolerance, no semantic drift).
    if (levenshtein(firstWord, entryFirst) > 1) continue;
    const d = levenshtein(norm, entry.key);
    if (d < bestDist) { bestDist = d; best = entry; }
  }
  if (best) {
    // Tighter overall tolerance: max 2 edits OR 15% of length, whichever is smaller.
    const tolerance = Math.min(2, Math.floor(Math.max(norm.length, best.key.length) * 0.15));
    if (bestDist <= Math.max(1, tolerance)) {
      const confidence = Math.max(0.4, 1 - bestDist / Math.max(norm.length, best.key.length));
      return { slug: best.slug, confidence };
    }
  }
  return null;
}

function parseRivenOcrText(text) {
  // Debug: surface what the OCR actually produced so users can inspect it
  // in the browser console when something looks off.
  try { console.log('[Riven OCR] raw text:\n' + text); } catch (e) {}

  // STRUCTURAL parse. Every Riven stat value carries a marker — "+", "−"/"-",
  // or "x" (faction-damage multiplier). The mastery-rank requirement ("MR 14")
  // and the weapon name do NOT. So we flatten the text, drop the MR line, then
  // tokenize by those markers and take everything up to the NEXT marker as the
  // label. This is robust to however the OCR wraps lines — stats glued onto one
  // line, a value split from its name across lines ("+48.9%\nToxin"), and the
  // element status icons (☠/❄/🔥…) the OCR renders as junk between the value and
  // the name (matchStatLabel normalizes those away). A bare number with no
  // marker — the weapon name's, the MR line's, or an icon misread as digits —
  // is never treated as a stat value, so it can't steal a real stat's number.
  let flat = text.replace(/\r?\n/g, ' ');
  flat = flat.replace(/\b(?:MR|Mastery\s+Rank)\.?\s*\d+\b/gi, ' ');
  flat = flat.replace(/\s+/g, ' ').trim();
  try { console.log('[Riven OCR] flattened:', flat); } catch (e) {}

  // A value token: a sign (+ / − / -) + number with optional unit (% , s =
  // seconds for Combo Duration, m = meters for Range/Punch Through), OR an
  // "x" multiplier (faction damage, e.g. "x1.27"). Numbers may use , or . as
  // the decimal separator.
  const TOK = /([+\-−])\s*(\d[\d.,]*\d|\d)\s*([%sm])?|x\s*(\d[\d.,]*\d|\d)/gi;
  const tokens = [];
  let mt;
  while ((mt = TOK.exec(flat)) !== null) {
    tokens.push({ index: mt.index, end: TOK.lastIndex, m: mt });
  }

  const detected = [];
  const seen = new Set();

  for (let i = 0; i < tokens.length; i++) {
    const tok = tokens[i];
    const m = tok.m;
    const isMult = m[4] !== undefined;            // matched the "x1.27" branch
    const rawValue = (isMult ? m[4] : m[2]).replace(/\s+/g, '').replace(',', '.');
    let value = parseFloat(rawValue);
    if (!isFinite(value)) continue;
    const sign = (!isMult && (m[1] === '-' || m[1] === '−')) ? 'neg' : 'pos';

    // Label = text from this token's end up to the next token's start.
    const nextStart = (i + 1 < tokens.length) ? tokens[i + 1].index : flat.length;
    let labelRaw = flat.substring(tok.end, nextStart);
    labelRaw = labelRaw.replace(/[<>\[\]{}|]/g, '');
    // Strip leading non-letters (leftover unit, %, or an element icon glyph the
    // OCR produced) and a connector word ("de"/"do"/"da"/"of").
    labelRaw = labelRaw.replace(/^[^a-zA-ZÀ-ÿ]+/, '').replace(/^(?:de|do|da|of)\s+/i, '').trim();
    if (labelRaw.length < 3) continue;

    const match = matchStatLabel(labelRaw);
    if (!match) continue;
    if (seen.has(match.slug)) continue;

    // Per-stat valid value range — most riven stats are percentages between
    // 5–500%, but melee Range / Combo Duration / Initial Combo use meters,
    // seconds, or a small integer, faction damage is a multiplier or a small
    // %, and Punch Through is in meters. Per-stat min/max override the defaults.
    const def = RIVEN_STATS[match.slug];
    const minVal = def && typeof def.minVal === 'number' ? def.minVal : 5;
    const maxVal = def && typeof def.maxVal === 'number' ? def.maxVal : 500;

    // Recovery: a value well over the stat's known typical ceiling usually got
    // an extra leading digit injected by the OCR — e.g. "+95.7% Weapon Recoil"
    // misread as "195.7". Strip the leading digit if the result lands in range.
    if (
      def && typeof def.typicalMax === 'number'
      && value > def.typicalMax
      && rawValue.replace('.', '').length > 1
    ) {
      const stripped = parseFloat(rawValue.substring(1));
      if (isFinite(stripped) && stripped >= minVal && stripped <= def.typicalMax) {
        try { console.log(`[Riven OCR] stripped leading digit — ${value} → ${stripped} (typical max for ${match.slug}: ${def.typicalMax})`); } catch (e) {}
        value = stripped;
      }
    }

    if (value < minVal || value > maxVal) {
      try { console.log(`[Riven OCR] rejected value ${value} outside [${minVal}, ${maxVal}] for ${match.slug} (label "${labelRaw}")`); } catch (e) {}
      continue;
    }

    seen.add(match.slug);
    detected.push({ slug: match.slug, sign, value, confidence: match.confidence, labelRaw });
    if (detected.length >= 4) break;
  }

  try { console.log('[Riven OCR] detected:', detected.map(d => `${d.sign === 'neg' ? '-' : '+'}${d.value} ${d.slug}`)); } catch (e) {}
  return detected;
}

function detectWeaponFromOcr(rawText) {
  if (!rawText) return null;
  // Build a search list of all weapons with normalized names.
  const allWeapons = [];
  Object.values(WEAPONS).forEach(arr => arr.forEach(w => allWeapons.push(w)));
  if (allWeapons.length === 0) return null;

  const lines = rawText.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);

  // The weapon name line is typically a label-looking line: no `%`, contains
  // letters, possibly with garbled chars. Skip lines that look like stat values
  // (have `%` AND digits).
  const candidateLines = lines.filter(l => {
    if (/%/.test(l)) return false;
    if (!/[a-zA-ZÀ-ÿ]{3,}/.test(l)) return false;
    return true;
  });

  let best = null;
  let bestScore = 0; // weapon name length
  let bestKind = 0;  // 2 = startsWith (riven prefix), 1 = includes (fallback)

  for (const line of candidateLines) {
    const norm = normalizeForMatch(line);
    if (!norm) continue;
    for (const w of allWeapons) {
      const wNorm = normalizeForMatch(w.name);
      // The riven name format is "<WeaponName> <RivenSuffix>" — so the OCR
      // line should START with the weapon name. That's the strong match.
      // `includes` is a weaker fallback for when OCR adds garbage prefix or
      // the weapon name appears inside the riven suffix (e.g. the suffix
      // "Hexa-acrid" contains "Acrid", but the weapon is actually Nukor).
      let kind = 0;
      if (norm.startsWith(wNorm)) kind = 2;
      else if (norm.includes(wNorm) && wNorm.length >= 5) kind = 1;
      if (!kind) continue;

      // Prefer stronger match kind first; within the same kind, prefer the
      // longer weapon name ("Kuva Nukor" > "Nukor" when both startsWith).
      if (kind > bestKind || (kind === bestKind && wNorm.length > bestScore)) {
        bestKind = kind;
        bestScore = wNorm.length;
        best = w;
      }
    }
    // Stop early only on a confident startsWith match of decent length.
    if (best && bestKind === 2 && bestScore >= 5) break;
  }

  if (best) {
    try { console.log(`[Riven OCR] weapon auto-detected: ${best.name} (slug=${best.slug})`); } catch (e) {}
  } else {
    try { console.log('[Riven OCR] weapon not detected — user can pick manually'); } catch (e) {}
  }
  return best;
}

function inferCategoryFromDetected(detected) {
  if (!detected.length) return null;
  const counts = { primary: 0, secondary: 0, melee: 0 };
  let meleeOnlyHit = false;
  detected.forEach(d => {
    const def = RIVEN_STATS[d.slug];
    if (!def) return;
    def.cats.forEach(c => { if (c in counts) counts[c]++; });
    if (def.cats.length === 1 && def.cats[0] === 'melee') meleeOnlyHit = true;
  });
  // If any detected stat is melee-exclusive, lock to melee.
  if (meleeOnlyHit) return 'melee';
  // Otherwise: pick the category with the most matches. Ties default to current.
  const ordered = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  if (ordered[0][1] === 0) return null;
  // If primary and secondary tied, keep whatever the user already had.
  if (ordered[0][1] === ordered[1][1]) return null;
  return ordered[0][0];
}

// ----- OCR: Tesseract loader + image preprocessing -----

const TESSERACT_CDN = 'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js';
let tesseractLoadPromise = null;

function ensureTesseractLoaded() {
  if (typeof window.Tesseract !== 'undefined') return Promise.resolve();
  if (tesseractLoadPromise) return tesseractLoadPromise;
  tesseractLoadPromise = new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = TESSERACT_CDN;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => { tesseractLoadPromise = null; reject(new Error('Tesseract load failed')); };
    document.head.appendChild(s);
  });
  return tesseractLoadPromise;
}

function preprocessImageForOcr(imageSrc) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      // Upscale small images so text is at least ~22px tall.
      const targetWidth = img.naturalWidth < 700 ? img.naturalWidth * 2 : img.naturalWidth;
      const ratio = targetWidth / img.naturalWidth;
      const w = Math.round(img.naturalWidth * ratio);
      const h = Math.round(img.naturalHeight * ratio);

      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, 0, 0, w, h);

      // Boost contrast on the luminance, drop chroma (riven UI text is white on
      // dark, so we want a near-binary B&W).
      const imgData = ctx.getImageData(0, 0, w, h);
      const px = imgData.data;
      for (let i = 0; i < px.length; i += 4) {
        const lum = px[i] * 0.299 + px[i + 1] * 0.587 + px[i + 2] * 0.114;
        // Stretch [70..200] to [0..255]
        let v = (lum - 70) * (255 / 130);
        if (v < 0) v = 0; else if (v > 255) v = 255;
        // Invert: Tesseract reads dark text on light bg better than the reverse.
        const inv = 255 - v;
        px[i] = px[i + 1] = px[i + 2] = inv;
        px[i + 3] = 255;
      }
      ctx.putImageData(imgData, 0, 0);
      resolve(canvas);
    };
    img.onerror = () => reject(new Error('Image decode failed'));
    img.src = imageSrc;
  });
}

// Lê o arquivo como base64 puro (sem o prefixo "data:image/...;base64,").
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => {
      const s = String(r.result || '');
      const comma = s.indexOf(',');
      resolve(comma >= 0 ? s.slice(comma + 1) : s);
    };
    r.onerror = () => reject(new Error('file_read_failed'));
    r.readAsDataURL(file);
  });
}

// OCR via Google Vision, atrás do proxy /api/ocr (Cloudflare Function).
// Lança erro se indisponível (sem key, 404 no dev local, quota) → o caller
// cai no Tesseract. Retorna o texto detectado.
async function ocrViaVision(file) {
  const imageBase64 = await fileToBase64(file);
  const resp = await fetch('/api/ocr', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ imageBase64 }),
  });
  if (!resp.ok) throw new Error('vision_http_' + resp.status);
  const data = await resp.json();
  if (!data || typeof data.text !== 'string') throw new Error('vision_no_text');
  return data.text;
}

async function runRivenOcr(file, rollIdx) {
  const roll = state.riven.rolls[rollIdx];
  roll.result = null;
  roll.warning = null;
  roll.imageError = null;
  roll.imageDetectedCount = 0;
  roll.weaponMismatch = null;

  if (roll.imagePreviewUrl) URL.revokeObjectURL(roll.imagePreviewUrl);
  roll.imagePreviewUrl = URL.createObjectURL(file);

  try {
    let text = null;
    let engine = null;

    // 1) Google Vision via Cloudflare Function (/api/ocr). Melhor precisão — lê
    //    até foto de monitor. Cai no Tesseract em qualquer falha (sem key, 404
    //    no dev local sem Function, erro/quota).
    roll.imageState = 'processing';
    roll.imageProgress = 0;
    renderRivens();
    try {
      const visionText = await ocrViaVision(file);
      if (visionText && visionText.trim()) { text = visionText; engine = 'vision'; }
    } catch (e) {
      try { console.log('[Riven OCR] Vision indisponivel, usando Tesseract:', e && e.message); } catch (_) {}
    }

    // 2) Fallback: Tesseract.js client-side (caminho original).
    if (!text) {
      roll.imageState = 'loading_lib';
      roll.imageProgress = 0;
      renderRivens();
      await ensureTesseractLoaded();

      roll.imageState = 'processing';
      roll.imageProgress = 0;
      renderRivens();

      const preprocessed = await preprocessImageForOcr(roll.imagePreviewUrl);
      const { data } = await window.Tesseract.recognize(preprocessed, 'eng+por', {
        logger: m => {
          if (m.status === 'recognizing text' && typeof m.progress === 'number') {
            roll.imageProgress = m.progress;
            updateRivenOcrProgressUi(rollIdx);
          }
        },
      });
      text = data.text || '';
      engine = 'tesseract';
    }
    roll.imageEngine = engine;
    try { console.log('[Riven OCR] engine usado:', engine); } catch (_) {}

    const detected = parseRivenOcrText(text || '');
    if (detected.length === 0) {
      roll.imageState = 'error';
      roll.imageError = 'no_stats';
      renderRivens();
      return;
    }

    const detectedWeapon = detectWeaponFromOcr(text || '');
    if (detectedWeapon) {
      roll.weapon = detectedWeapon.slug;
      roll.weaponAutoDetected = true;
      roll.weaponMismatch = null;
      state.riven.category = detectedWeapon.category;
      const dw = weaponBySlug(detectedWeapon.slug);
      if (dw && dw.incarnon && dw.incarnon.metaDefault !== false) {
        state.riven.incarnonMode = true;
      }
    } else {
      const inferred = inferCategoryFromDetected(detected);
      if (inferred) state.riven.category = inferred;
    }

    roll.slots = Math.min(4, Math.max(2, detected.length));
    const fresh = [
      { slug: null, value: '' },
      { slug: null, value: '' },
      { slug: null, value: '' },
      { slug: null, value: '' },
    ];
    detected.forEach((d, i) => {
      if (i >= 4) return;
      const def = RIVEN_STATS[d.slug];
      let value;
      if (def && def.multiplier) {
        const raw = parseFloat(d.value);
        if (d.sign === 'neg') {
          value = (1 - raw / 100).toFixed(2);
        } else if (raw > 5) {
          value = (1 + raw / 100).toFixed(2);
        } else {
          value = String(raw);
        }
      } else {
        value = d.sign === 'neg' ? '-' + d.value : String(d.value);
      }
      fresh[i] = { slug: d.slug, value };
    });
    roll.stats = fresh;
    roll.imageState = 'success';
    roll.imageDetectedCount = detected.length;
    renderRivens();
    checkWeaponConflict();
  } catch (err) {
    console.error('Riven OCR error:', err);
    roll.imageState = 'error';
    roll.imageError = err && err.message && err.message.includes('Tesseract load')
      ? 'load_failed' : 'ocr_failed';
    renderRivens();
  }
}

function updateRivenOcrProgressUi(rollIdx) {
  const fill = document.getElementById(`riven-ocr-progress-fill-${rollIdx}`);
  if (fill) fill.style.width = `${Math.round(state.riven.rolls[rollIdx].imageProgress * 100)}%`;
}

function setupRivenUploadEvents() {
  [0, 1].forEach(rollIdx => {
    const zone      = document.getElementById(`riven-upload-zone-${rollIdx}`);
    const input     = document.getElementById(`riven-image-input-${rollIdx}`);
    const changeBtn = document.getElementById(`riven-image-change-btn-${rollIdx}`);
    const removeBtn = document.getElementById(`riven-image-remove-btn-${rollIdx}`);
    if (!zone || !input) return;

    zone.addEventListener('click', () => input.click());
    changeBtn?.addEventListener('click', () => input.click());
    removeBtn?.addEventListener('click', () => removeRivenImage(rollIdx));

    input.addEventListener('change', e => {
      const file = e.target.files && e.target.files[0];
      if (file) runRivenOcr(file, rollIdx);
      input.value = '';
    });

    ['dragenter', 'dragover'].forEach(ev => {
      zone.addEventListener(ev, e => {
        e.preventDefault();
        zone.classList.add('dragging');
      });
    });
    ['dragleave', 'drop'].forEach(ev => {
      zone.addEventListener(ev, e => {
        e.preventDefault();
        zone.classList.remove('dragging');
      });
    });
    zone.addEventListener('drop', e => {
      const file = e.dataTransfer.files && e.dataTransfer.files[0];
      if (file && file.type.startsWith('image/')) runRivenOcr(file, rollIdx);
    });
  });
}

function removeRivenImage(rollIdx) {
  const roll = state.riven.rolls[rollIdx];
  if (roll.imagePreviewUrl) {
    try { URL.revokeObjectURL(roll.imagePreviewUrl); } catch (e) {}
    roll.imagePreviewUrl = null;
  }
  roll.imageState = 'idle';
  roll.imageProgress = 0;
  roll.imageError = null;
  roll.imageDetectedCount = 0;
  roll.weaponMismatch = null;
  const fileInput = document.getElementById(`riven-image-input-${rollIdx}`);
  if (fileInput) fileInput.value = '';
  const previewImg = document.getElementById(`riven-image-preview-img-${rollIdx}`);
  if (previewImg) previewImg.src = '';
  renderRivenImageSection(rollIdx);
}

function resetRivenForm(rollIdx) {
  const roll = state.riven.rolls[rollIdx];
  if (roll.imagePreviewUrl) {
    try { URL.revokeObjectURL(roll.imagePreviewUrl); } catch (e) {}
  }
  const fileInput = document.getElementById(`riven-image-input-${rollIdx}`);
  if (fileInput) fileInput.value = '';
  const previewImg = document.getElementById(`riven-image-preview-img-${rollIdx}`);
  if (previewImg) previewImg.src = '';
  state.riven.rolls[rollIdx] = makeRoll();
  if (state.riven.rolls.every(r => !r.weapon)) {
    state.riven.incarnonMode = false;
  }
  renderRivens();
}

// ============== Weapon picker render + state ==============

function renderRivenWeaponBtn(rollIdx) {
  const roll = state.riven.rolls[rollIdx];
  const btn = document.getElementById(`riven-weapon-btn-${rollIdx}`);
  if (!btn) return;
  btn.innerHTML = '';

  const incarnonRow = document.getElementById(`riven-incarnon-row-${rollIdx}`);
  const incarnonAuto = document.getElementById(`riven-incarnon-auto-${rollIdx}`);

  if (!roll.weapon) {
    btn.classList.remove('has-weapon');
    const icon = document.createElement('span');
    icon.className = 'weapon-btn-icon';
    icon.textContent = '🔍';
    const text = document.createElement('span');
    text.className = 'weapon-btn-name';
    text.textContent = t('riven_weapon_none');
    btn.appendChild(icon);
    btn.appendChild(text);
    incarnonRow?.classList.add('hidden');
    incarnonAuto?.classList.add('hidden');
    return;
  }

  const w = weaponBySlug(roll.weapon);
  if (!w) {
    roll.weapon = null;
    return renderRivenWeaponBtn(rollIdx);
  }

  btn.classList.add('has-weapon');

  const imgUrl = weaponImageUrl(w);
  if (imgUrl) {
    const iconImg = document.createElement('img');
    iconImg.className = 'weapon-btn-icon-img';
    iconImg.src = imgUrl;
    iconImg.alt = '';
    iconImg.loading = 'lazy';
    iconImg.onerror = () => {
      const fallback = document.createElement('span');
      fallback.className = 'weapon-btn-icon';
      fallback.textContent = '⚡';
      iconImg.replaceWith(fallback);
    };
    btn.appendChild(iconImg);
  } else {
    const icon = document.createElement('span');
    icon.className = 'weapon-btn-icon';
    icon.textContent = '⚡';
    btn.appendChild(icon);
  }

  const main = document.createElement('span');
  main.className = 'weapon-btn-main';
  const name = document.createElement('span');
  name.className = 'weapon-btn-name';
  name.textContent = w.name;
  const meta = document.createElement('span');
  meta.className = 'weapon-btn-meta';
  meta.textContent = `${w.type} · MR ${w.mastery_rank} · `;
  const dots = document.createElement('span');
  dots.className = 'dots';
  dots.textContent = dispositionLabel(w.disposition);
  meta.appendChild(dots);
  if (roll.weaponAutoDetected) {
    const autoBadge = document.createElement('span');
    autoBadge.className = 'weapon-btn-auto';
    autoBadge.textContent = t('riven_weapon_auto');
    meta.appendChild(autoBadge);
  }
  main.appendChild(name);
  main.appendChild(meta);
  btn.appendChild(main);

  const clear = document.createElement('button');
  clear.type = 'button';
  clear.className = 'weapon-btn-clear';
  clear.textContent = '×';
  clear.title = t('riven_weapon_clear');
  clear.addEventListener('click', e => {
    e.stopPropagation();
    clearWeapon(rollIdx);
  });
  btn.appendChild(clear);

  // Toggle Incarnon: só aparece se essa coluna tem uma arma com dados de Incarnon.
  // O toggle controla state.riven.incarnonMode (compartilhado entre as duas colunas).
  if (incarnonRow) {
    if (w.incarnon) {
      incarnonRow.classList.remove('hidden');
      const cb = document.getElementById(`riven-incarnon-checkbox-${rollIdx}`);
      if (cb) cb.checked = state.riven.incarnonMode;
      if (incarnonAuto) incarnonAuto.classList.toggle('hidden', !state.riven.incarnonMode);
    } else {
      incarnonRow.classList.add('hidden');
      if (incarnonAuto) incarnonAuto.classList.add('hidden');
    }
  }
}

function openWeaponPicker(rollIdx) {
  const roll = state.riven.rolls[rollIdx];
  const currentWeapon = roll.weapon ? weaponBySlug(roll.weapon) : null;
  const defaultCat = currentWeapon
    ? currentWeapon.category
    : (WEAPONS[state.riven.category]?.length ? state.riven.category : 'secondary');

  state.weaponPicker.open = true;
  state.weaponPicker.rollIdx = rollIdx;
  state.weaponPicker.selected = roll.weapon || null;
  state.weaponPicker.category = defaultCat;
  state.weaponPicker.search = '';
  state.weaponPicker.expandedFamilies = new Set();
  if (currentWeapon) {
    const df = displayFamily(currentWeapon);
    if (df) state.weaponPicker.expandedFamilies.add(df);
  }
  document.getElementById('weapon-modal').classList.remove('hidden');
  renderWeaponPicker();
  setTimeout(() => document.getElementById('weapon-search')?.focus(), 0);
}

function closeWeaponPicker() {
  state.weaponPicker.open = false;
  document.getElementById('weapon-modal').classList.add('hidden');
}

function selectWeapon(slug, rollIdx, autoDetected = false) {
  const roll = state.riven.rolls[rollIdx];
  roll.weapon = slug;
  roll.weaponAutoDetected = autoDetected;
  roll.result = null;
  const w = weaponBySlug(slug);
  // Auto-enable Incarnon Mode for weapons built around their Incarnon form.
  // Only auto-ON (never auto-OFF) so selecting a non-incarnon weapon in one
  // column doesn't disable incarnon for an incarnon weapon in the other.
  if (w && w.incarnon && w.incarnon.metaDefault !== false) {
    state.riven.incarnonMode = true;
  }
  if (w) state.riven.category = w.category;
  renderRivens();
  checkWeaponConflict();
}

function clearWeapon(rollIdx) {
  const roll = state.riven.rolls[rollIdx];
  roll.weapon = null;
  roll.weaponAutoDetected = false;
  roll.result = null;
  if (state.riven.rolls.every(r => !r.weapon)) {
    state.riven.incarnonMode = false;
  }
  renderRivens();
}

function checkWeaponConflict() {
  const w0 = state.riven.rolls[0].weapon;
  const w1 = state.riven.rolls[1].weapon;
  if (!w0 || !w1 || w0 === w1) return;

  function fillSlot(imgId, nameId, slug) {
    const w = weaponBySlug(slug);
    const imgEl = document.getElementById(imgId);
    const nameEl = document.getElementById(nameId);
    if (imgEl) {
      const url = w && weaponImageUrl(w);
      imgEl.src = url || '';
      imgEl.style.display = url ? '' : 'none';
    }
    if (nameEl) nameEl.textContent = w?.name || slug;
  }

  fillSlot('riven-conflict-img-a', 'riven-conflict-name-a', w0);
  fillSlot('riven-conflict-img-b', 'riven-conflict-name-b', w1);
  document.getElementById('riven-conflict-modal')?.classList.remove('hidden');
}

function renderWeaponPicker() {
  renderWeaponCatTabs();
  renderWeaponList();
  renderWeaponDetail();
}

function renderWeaponCatTabs() {
  const row = document.getElementById('weapon-cat-tabs');
  if (!row) return;
  row.innerHTML = '';
  RIVEN_CATEGORIES.forEach(cat => {
    const tab = document.createElement('button');
    tab.type = 'button';
    tab.className = 'weapon-cat-tab';
    tab.dataset.cat = cat;
    tab.textContent = t('weapon_cat_' + cat);
    const empty = !WEAPONS[cat] || WEAPONS[cat].length === 0;
    tab.classList.toggle('active', state.weaponPicker.category === cat && !empty);
    tab.classList.toggle('disabled', empty);
    if (!empty) tab.addEventListener('click', () => setWeaponPickerCategory(cat));
    row.appendChild(tab);
  });
}

function setWeaponPickerCategory(cat) {
  if (state.weaponPicker.category === cat) return;
  state.weaponPicker.category = cat;
  state.weaponPicker.selected = null;
  state.weaponPicker.search = '';
  document.getElementById('weapon-search').value = '';
  renderWeaponPicker();
}

function renderWeaponList() {
  const list = document.getElementById('weapon-list');
  if (!list) return;
  list.innerHTML = '';

  const cat = state.weaponPicker.category;
  if (!WEAPONS[cat] || WEAPONS[cat].length === 0) {
    const empty = document.createElement('div');
    empty.className = 'weapon-list-empty';
    empty.textContent = t('weapon_coming_soon');
    list.appendChild(empty);
    return;
  }

  const groups = weaponFamilyGroups(cat, state.weaponPicker.search);
  if (groups.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'weapon-list-empty';
    empty.textContent = t('weapon_no_results');
    list.appendChild(empty);
    return;
  }

  groups.forEach((g, idx) => {
    if (idx > 0) {
      const sep = document.createElement('div');
      sep.className = 'weapon-list-family-sep';
      list.appendChild(sep);
    }

    // Single-variant families render as a normal flat row.
    if (g.items.length === 1) {
      list.appendChild(buildWeaponListRow(g.items[0], false));
      return;
    }

    // Multi-variant family: header row (collapsible) + indented variants when expanded.
    const expanded = isFamilyExpanded(g.family);
    const base = g.items[0];
    const header = document.createElement('div');
    header.className = 'weapon-list-family-header' + (expanded ? ' expanded' : '');
    // Mark active if the currently-selected weapon belongs to this family.
    if (g.items.some(v => v.slug === state.weaponPicker.selected)) {
      header.classList.add('has-selection');
    }

    const name = document.createElement('span');
    name.className = 'weapon-list-name';
    name.textContent = base.name;
    header.appendChild(name);

    const badge = document.createElement('span');
    badge.className = 'weapon-list-family';
    badge.textContent = String(g.items.length);
    badge.title = t('weapon_family_more_variants');
    header.appendChild(badge);

    const dots = document.createElement('span');
    dots.className = 'weapon-list-dots';
    dots.textContent = dispositionLabel(base.disposition);
    header.appendChild(dots);

    header.addEventListener('click', () => {
      toggleFamilyExpanded(g.family);
      renderWeaponList();
    });
    list.appendChild(header);

    if (expanded) {
      g.items.forEach(v => {
        list.appendChild(buildWeaponListRow(v, true));
      });
    }
  });
}

function buildWeaponListRow(w, indented) {
  const row = document.createElement('div');
  row.className = 'weapon-list-item';
  if (indented) row.classList.add('is-variant');
  row.dataset.slug = w.slug;
  row.classList.toggle('active', w.slug === state.weaponPicker.selected);

  const name = document.createElement('span');
  name.className = 'weapon-list-name';
  name.textContent = w.name;
  row.appendChild(name);

  const dots = document.createElement('span');
  dots.className = 'weapon-list-dots';
  dots.textContent = dispositionLabel(w.disposition);
  row.appendChild(dots);

  row.addEventListener('click', () => {
    state.weaponPicker.selected = w.slug;
    renderWeaponList();
    renderWeaponDetail();
  });
  return row;
}

function renderWeaponDetail() {
  const panel = document.getElementById('weapon-detail');
  if (!panel) return;
  panel.innerHTML = '';

  const slug = state.weaponPicker.selected;
  if (!slug) {
    const empty = document.createElement('p');
    empty.className = 'weapon-detail-empty';
    empty.textContent = t('weapon_pick_prompt');
    panel.appendChild(empty);
    return;
  }

  const w = weaponBySlug(slug);
  if (!w) return;

  const name = document.createElement('h3');
  name.className = 'weapon-detail-name';
  name.textContent = w.name;
  panel.appendChild(name);

  const sub = document.createElement('p');
  sub.className = 'weapon-detail-subtitle';
  sub.textContent = `${w.type} · ${t('weapon_cat_' + w.category)}`;
  panel.appendChild(sub);

  // Weapon image from the wiki — hides gracefully on failure.
  const imgUrl = weaponImageUrl(w);
  if (imgUrl) {
    const imgWrap = document.createElement('div');
    imgWrap.className = 'weapon-detail-image-wrap';
    const img = document.createElement('img');
    img.className = 'weapon-detail-image';
    img.alt = w.name;
    img.loading = 'lazy';
    img.onerror = () => { imgWrap.classList.add('hidden'); };
    img.src = imgUrl;
    imgWrap.appendChild(img);
    panel.appendChild(imgWrap);
  }

  const grid = document.createElement('div');
  grid.className = 'weapon-detail-grid';
  const rows = [
    [t('weapon_mr_label'), `MR ${w.mastery_rank}`],
    [t('weapon_type_label'), w.type],
    [t('weapon_disposition_label'), `${dispositionLabel(w.disposition)} (${w.disposition.toFixed(2)})`, 'disp-dots'],
  ];
  rows.forEach(([label, value, cls]) => {
    const r = document.createElement('div');
    r.className = 'weapon-detail-grid-row';
    const l = document.createElement('span');
    l.className = 'weapon-detail-grid-label';
    l.textContent = label;
    const v = document.createElement('span');
    v.className = 'weapon-detail-grid-value' + (cls ? ' ' + cls : '');
    v.textContent = value;
    r.appendChild(l);
    r.appendChild(v);
    grid.appendChild(r);
  });
  panel.appendChild(grid);

  // Preferred / wasted / negatives sections — only render if present
  const buildChipSection = (titleKey, entries, kind /* 'pos' | 'neg' */) => {
    if (!entries || Object.keys(entries).length === 0) return;
    const section = document.createElement('div');
    section.className = 'weapon-detail-section';
    const label = document.createElement('p');
    label.className = 'weapon-detail-section-label';
    label.textContent = t(titleKey);
    section.appendChild(label);

    const chips = document.createElement('div');
    chips.className = 'weapon-detail-stat-chips';
    Object.entries(entries).forEach(([statSlug, tier]) => {
      const chip = document.createElement('span');
      chip.className = 'weapon-stat-chip';
      chip.textContent = rivenStatName(statSlug) + ' · ' + (kind === 'pos' ? tier : t('riven_neg_' + tier));
      if (kind === 'pos') chip.dataset.tier = tier;
      else chip.dataset.neg = tier;
      chips.appendChild(chip);
    });
    section.appendChild(chips);
    panel.appendChild(section);
  };

  // Family variants — show clickable chips of other variants that share the
  // same riven family. A single-variant family doesn't get the section.
  const familyVariants = weaponsInFamily(w.family).filter(v => v.slug !== w.slug);
  if (familyVariants.length > 0) {
    const famSec = document.createElement('div');
    famSec.className = 'weapon-detail-section';
    const famLabel = document.createElement('p');
    famLabel.className = 'weapon-detail-section-label';
    famLabel.textContent = t('weapon_family_variants_label');
    famSec.appendChild(famLabel);

    const famChips = document.createElement('div');
    famChips.className = 'weapon-detail-stat-chips';
    familyVariants.forEach(v => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'weapon-family-chip';
      chip.textContent = `${v.name} · ${dispositionLabel(v.disposition)}`;
      chip.title = `MR ${v.mastery_rank}`;
      chip.addEventListener('click', () => {
        state.weaponPicker.selected = v.slug;
        // If switching to a different category, snap the picker category
        if (v.category !== state.weaponPicker.category) {
          state.weaponPicker.category = v.category;
        }
        renderWeaponPicker();
      });
      famChips.appendChild(chip);
    });
    famSec.appendChild(famChips);
    panel.appendChild(famSec);
  }

  buildChipSection('weapon_preferred_pos', w.preferred_positive, 'pos');
  buildChipSection('weapon_wasted_pos',    w.wasted_positive,    'pos');
  buildChipSection('weapon_preferred_neg', w.preferred_negative, 'neg');

  // Notes (per-locale, optional)
  if (w.notes) {
    const noteText = w.notes[state.locale] || w.notes[DEFAULT_LOCALE];
    if (noteText) {
      const n = document.createElement('div');
      n.className = 'weapon-detail-notes';
      n.textContent = noteText;
      panel.appendChild(n);
    }
  }

  // "Use this weapon" button
  const useBtn = document.createElement('button');
  useBtn.type = 'button';
  useBtn.className = 'weapon-detail-use-btn';
  useBtn.textContent = t('weapon_use_btn');
  useBtn.addEventListener('click', () => {
    selectWeapon(w.slug, state.weaponPicker.rollIdx, false);
    closeWeaponPicker();
  });
  panel.appendChild(useBtn);
}

function setupWeaponPickerEvents() {
  document.getElementById('riven-weapon-btn-0')?.addEventListener('click', () => openWeaponPicker(0));
  document.getElementById('riven-weapon-btn-1')?.addEventListener('click', () => openWeaponPicker(1));
  document.getElementById('weapon-modal-close')?.addEventListener('click', closeWeaponPicker);
  document.getElementById('weapon-modal-backdrop')?.addEventListener('click', closeWeaponPicker);

  const search = document.getElementById('weapon-search');
  search?.addEventListener('input', () => {
    state.weaponPicker.search = search.value;
    renderWeaponList();
  });

  // Ambos os checkboxes de incarnon controlam o mesmo state.riven.incarnonMode.
  // renderRivenWeaponBtn(0/1) sincroniza o checked de cada coluna.
  function onIncarnon(e) {
    state.riven.incarnonMode = e.target.checked;
    state.riven.rolls.forEach((roll, i) => { if (roll.result) evaluateRiven(i); });
    renderRivenWeaponBtn(0);
    renderRivenWeaponBtn(1);
  }
  document.getElementById('riven-incarnon-checkbox-0')?.addEventListener('change', onIncarnon);
  document.getElementById('riven-incarnon-checkbox-1')?.addEventListener('change', onIncarnon);

  // Conflict modal actions
  function applyConflictChoice(keepIdx) {
    const slug = state.riven.rolls[keepIdx].weapon;
    if (!slug) return;
    const otherIdx = keepIdx === 0 ? 1 : 0;
    const other = state.riven.rolls[otherIdx];
    if (other.imagePreviewUrl) { try { URL.revokeObjectURL(other.imagePreviewUrl); } catch (e) {} }
    const fi = document.getElementById(`riven-image-input-${otherIdx}`);
    if (fi) fi.value = '';
    state.riven.rolls[otherIdx] = makeRoll();
    state.riven.rolls[otherIdx].weapon = slug;
    document.getElementById('riven-conflict-modal')?.classList.add('hidden');
    renderRivens();
  }
  document.getElementById('riven-conflict-use-a')?.addEventListener('click', () => applyConflictChoice(0));
  document.getElementById('riven-conflict-use-b')?.addEventListener('click', () => applyConflictChoice(1));
  document.getElementById('riven-conflict-clear-both')?.addEventListener('click', () => {
    [0, 1].forEach(idx => {
      const r = state.riven.rolls[idx];
      if (r.imagePreviewUrl) { try { URL.revokeObjectURL(r.imagePreviewUrl); } catch (e) {} }
      const fi = document.getElementById(`riven-image-input-${idx}`);
      if (fi) fi.value = '';
    });
    state.riven.rolls = [makeRoll(), makeRoll()];
    state.riven.incarnonMode = false;
    document.getElementById('riven-conflict-modal')?.classList.add('hidden');
    renderRivens();
  });
  document.getElementById('riven-conflict-backdrop')?.addEventListener('click', () => {
    document.getElementById('riven-conflict-modal')?.classList.add('hidden');
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && state.weaponPicker.open) {
      e.preventDefault();
      closeWeaponPicker();
    }
  });
}

// ============== Credits modal ==============

