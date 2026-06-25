const MISSION_TYPES = {
  assassination:    { name: { en: 'Assassination',    'pt-BR': 'Assassinato'         }, color: '#e87878' },
  capture:          { name: { en: 'Capture',          'pt-BR': 'Captura'             }, color: '#7fb8d4' },
  defense:          { name: { en: 'Defense',          'pt-BR': 'Defesa'              }, color: '#d4b25a' },
  disruption:       { name: { en: 'Disruption',       'pt-BR': 'Disrupção'           }, color: '#b888ff' },
  exterminate:      { name: { en: 'Exterminate',      'pt-BR': 'Extermínio'          }, color: '#cc6666' },
  interception:     { name: { en: 'Interception',     'pt-BR': 'Interceptação'       }, color: '#88c0d0' },
  mobile_defense:   { name: { en: 'Mobile Defense',   'pt-BR': 'Defesa Móvel'        }, color: '#e89c4a' },
  rescue:           { name: { en: 'Rescue',           'pt-BR': 'Resgate'             }, color: '#7fb88a' },
  spy:              { name: { en: 'Spy',              'pt-BR': 'Espionagem'          }, color: '#a89aa9' },
  survival:         { name: { en: 'Survival',         'pt-BR': 'Sobrevivência'       }, color: '#a3d142' },
  sabotage:         { name: { en: 'Sabotage',         'pt-BR': 'Sabotagem'           }, color: '#f0c97a' },
  excavation:       { name: { en: 'Excavation',       'pt-BR': 'Escavação'           }, color: '#c9a04a' },
  hijack:           { name: { en: 'Hijack',           'pt-BR': 'Extravio'           }, color: '#d18a5a' },
  defection:        { name: { en: 'Defection',        'pt-BR': 'Defecção'            }, color: '#9a8acd' },
  arena:            { name: { en: 'Arena',            'pt-BR': 'Arena'               }, color: '#bf5555' },
  pursuit:          { name: { en: 'Pursuit',          'pt-BR': 'Perseguição'         }, color: '#5fb8c9' },
  assault:          { name: { en: 'Assault',          'pt-BR': 'Assalto'             }, color: '#d14545' },
  mirror_defense:   { name: { en: 'Mirror Defense',   'pt-BR': 'Defesa Espelhada'    }, color: '#a888d4' },
  archwing:         { name: { en: 'Archwing',         'pt-BR': 'Archwing'            }, color: '#5fb8d4' },
  ascension:        { name: { en: 'Ascension',        'pt-BR': 'Ascensão'            }, color: '#d4c25a' },
  alchemy:          { name: { en: 'Alchemy',          'pt-BR': 'Alquimia'            }, color: '#9aa44d' },
  infested_salvage: { name: { en: 'Infested Salvage', 'pt-BR': 'Sucata Infestada'    }, color: '#8a9a4d' },
  void_cascade:     { name: { en: 'Void Cascade',     'pt-BR': 'Cascata do Void'     }, color: '#c8a8e0' },
  void_flood:       { name: { en: 'Void Flood',       'pt-BR': 'Inundação do Void'   }, color: '#7fa8e0' },
  void_armageddon:  { name: { en: 'Void Armageddon',  'pt-BR': 'Armagedom do Void'   }, color: '#e8a85a' },
  // §20.5 — Railjack-specific mission types
  skirmish:         { name: { en: 'Skirmish',         'pt-BR': 'Escaramuça'          }, color: '#b888ff' },
  volatile:         { name: { en: 'Volatile',         'pt-BR': 'Volátil'             }, color: '#e85a5a' },
  orphix:           { name: { en: 'Orphix',           'pt-BR': 'Orphix'              }, color: '#c8a8e0' },
  free_flight:      { name: { en: 'Free Flight',      'pt-BR': 'Voo Livre'           }, color: '#8a8a8a' },
  // Open-world (Plains / Orb Vallis / Cambion Drift) activity types
  free_roam:        { name: { en: 'Free Roam',        'pt-BR': 'Mundo Aberto'        }, color: '#6abf8a' },
  bounty:           { name: { en: 'Bounty',           'pt-BR': 'Contrato'            }, color: '#d8a24a' },
  // Special tab — Höllvania (1999) unique mission types + Dark Refractory modes.
  // These only ever surface as filter chips on the Special tab (chips are
  // scoped to the mission types present in the active tab's nodes).
  faceoff:             { name: { en: 'Faceoff',             'pt-BR': 'Faceoff'             }, color: '#d14545' },
  hell_scrub:          { name: { en: 'Hell-Scrub',          'pt-BR': 'Hell-Scrub'          }, color: '#9aa44d' },
  legacyte_harvest:    { name: { en: 'Legacyte Harvest',    'pt-BR': 'Colheita Legacyte'   }, color: '#c9a04a' },
  stage_defense:       { name: { en: 'Stage Defense',       'pt-BR': 'Defesa de Palco'     }, color: '#6a9ad4' },
  temporal_archimedea: { name: { en: 'Temporal Archimedea', 'pt-BR': 'Archimedea Temporal' }, color: '#c8a8e0' },
  descendia:           { name: { en: 'The Descendia',       'pt-BR': 'A Descendia'         }, color: '#e89c4a' },
  perita_rebellion:    { name: { en: 'The Perita Rebellion','pt-BR': 'A Rebelião Perita'   }, color: '#b888ff' },
  // Weekly endgame in the Sanctum Anatomica (Albrecht's Laboratories, Deimos) —
  // sibling to Temporal Archimedea. Surfaces as a chip on the Origin System tab.
  deep_archimedea:     { name: { en: 'Deep Archimedea',     'pt-BR': 'Archimedea Profunda' }, color: '#a88ad4' },
  shrine_defense:      { name: { en: 'Shrine Defense',      'pt-BR': 'Defesa do Santuário'  }, color: '#d4a84d' },
  follies_hunt:        { name: { en: "Follie's Hunt",       'pt-BR': "Follie's Hunt"         }, color: '#b56b66' },
  abyssal_zone:        { name: { en: 'Abyssal Zone',        'pt-BR': 'Zona Abissal'          }, color: '#8b4a8b' },
  // Tipos que aparecem nos locais de drop das relíquias (Railjack / Duviri / Dark Refractory)
  caches:              { name: { en: 'Caches',              'pt-BR': 'Caches'                }, color: '#7fb8d4' },
  rush:                { name: { en: 'Rush',                'pt-BR': 'Rush'                  }, color: '#e89c4a' },
  the_circuit:         { name: { en: 'The Circuit',         'pt-BR': 'The Circuit'           }, color: '#b888ff' },
  the_perita_rebellion:{ name: { en: 'The Perita Rebellion','pt-BR': 'A Rebelião Perita'     }, color: '#b888ff' },
};

// Factions for Star Chart UI (colored tint per faction). NOTE: there's an
// existing top-level FACTIONS const for Status Effects translations — keep
// this one prefixed (SC_) so they don't collide as JS `const`s.
const SC_FACTIONS = {
  grineer:   { name: { en: 'Grineer',     'pt-BR': 'Grineer'      }, color: '#d2845a' },
  corpus:    { name: { en: 'Corpus',      'pt-BR': 'Corpus'       }, color: '#8accc9' },
  infested:  { name: { en: 'Infested',    'pt-BR': 'Infestados'   }, color: '#9aa44d' },
  orokin:    { name: { en: 'Orokin',      'pt-BR': 'Orokin'       }, color: '#d4b25a' },
  corrupted: { name: { en: 'Corrupted',   'pt-BR': 'Corrompidos'  }, color: '#b888ff' },
  sentient:  { name: { en: 'Sentient',    'pt-BR': 'Sentientes'   }, color: '#e07b8a' },
  murmur:    { name: { en: 'The Murmur',  'pt-BR': 'O Murmúrio'   }, color: '#8a5acc' },
  // §20.5 — used by Veil Proxima (Grineer + Corpus mixed) to drive the
  // purple corrupted-style card. Shares the Corrupted hue intentionally.
  mixed:     { name: { en: 'Mixed',        'pt-BR': 'Misto'        }, color: '#b888ff' },
};

// Resource rarities — used for the colored dot on pills and the badge in the modal.
const SC_RARITIES = {
  common:    { name: { en: 'Common',    'pt-BR': 'Comum'    }, color: '#8a8a8a' },
  uncommon:  { name: { en: 'Uncommon',  'pt-BR': 'Incomum'  }, color: '#5fa363' },
  rare:      { name: { en: 'Rare',      'pt-BR': 'Raro'     }, color: '#d4b25a' },
  special:   { name: { en: 'Special',   'pt-BR': 'Especial' }, color: '#b888ff' },
};

// Resource categories — used for the filter chips in the global all-resources
// list. A resource's `category` field is its functional grouping (separate
// from rarity, which only drives the badge color).
const SC_CATEGORIES = {
  common:      { name: { en: 'Common',     'pt-BR': 'Comum'        }, color: '#8a8a8a' },
  uncommon:    { name: { en: 'Uncommon',   'pt-BR': 'Incomum'      }, color: '#5fa363' },
  rare:        { name: { en: 'Rare',       'pt-BR': 'Raro'         }, color: '#d4b25a' },
  research:    { name: { en: 'Research',   'pt-BR': 'Pesquisa'     }, color: '#8accc9' },
  currency:    { name: { en: 'Currency',   'pt-BR': 'Moeda'        }, color: '#e87878' },
  syndicate:   { name: { en: 'Syndicate',  'pt-BR': 'Sindicato'    }, color: '#b888ff' },
  'open-world':{ name: { en: 'Open World', 'pt-BR': 'Mundo Aberto' }, color: '#7fb88a' },
  special:     { name: { en: 'Special',    'pt-BR': 'Especial'     }, color: '#e89c4a' },
};

// Filter chip order — 'all' is always first; rest follows SC_CATEGORIES order.
const SC_RESOURCE_FILTERS = ['all', 'common', 'uncommon', 'rare', 'research', 'currency', 'syndicate', 'open-world', 'special'];

function getResourceCategory(slug) {
  return SC_CATEGORIES[slug] || null;
}
function resourceCategoryName(slug) {
  const c = getResourceCategory(slug);
  if (!c) return slug;
  return c.name[state.locale] || c.name[DEFAULT_LOCALE] || slug;
}

// Locations (tabs in the wiki) — shown as a pill on each resource card.
const SC_LOCATIONS = {
  'star-chart':        { name: { en: 'Star Chart',        'pt-BR': 'Mapa Estelar'    }, color: '#5ec0e8' },
  'plains-of-eidolon': { name: { en: 'Plains of Eidolon', 'pt-BR': 'Planícies de Eidolon' }, color: '#d4b25a' },
  'orb-vallis':        { name: { en: 'Orb Vallis',        'pt-BR': 'Orb Vallis'      }, color: '#8accc9' },
  'cambion-drift':     { name: { en: 'Cambion Drift',     'pt-BR': 'Cambion Drift'   }, color: '#b888ff' },
  'duviri':            { name: { en: 'Duviri',            'pt-BR': 'Duviri'          }, color: '#e87878' },
  'hollvania':         { name: { en: 'Höllvania 1999',    'pt-BR': 'Höllvania 1999'  }, color: '#7fb88a' },
  'dark-refractory':   { name: { en: 'Dark Refractory',   'pt-BR': 'Refratário Sombrio' }, color: '#e89c4a' },
  'misc':              { name: { en: 'Miscellaneous',     'pt-BR': 'Diversos'        }, color: '#8a8a8a' },
};

// Source tags (title + group from the wiki Lua) — shown as smaller pills.
// An item's `sources` array typically contains 1-2 entries: a primary (e.g. 'mining', 'fishing', 'heist-drops')
// and optionally a sub-source (e.g. 'gems-blue', 'parts').
const SC_SOURCES = {
  'open-world-materials':  { name: { en: 'Open World Materials',   'pt-BR': 'Materiais Mundo Aberto'   } },
  'bounty-drops':          { name: { en: 'Bounty Drops',           'pt-BR': 'Drops de Bounty'          } },
  'heist-drops':           { name: { en: 'Heist Drops',            'pt-BR': 'Drops de Heist'           } },
  'raknoid-drops':         { name: { en: 'Raknoid Drops',          'pt-BR': 'Drops de Raknoid'         } },
  'sentient-drops':        { name: { en: 'Sentient Drops',         'pt-BR': 'Drops Sentient'           } },
  'event-currency':        { name: { en: 'Event Currency',         'pt-BR': 'Moeda de Evento'          } },
  'mining':                { name: { en: 'Mining',                 'pt-BR': 'Mineração'                } },
  'metals-red':            { name: { en: 'Metals (Red Veins)',     'pt-BR': 'Metais (Veias Vermelhas)' } },
  'ores-red':              { name: { en: 'Ores (Red Veins)',       'pt-BR': 'Minérios (Veias Vermelhas)' } },
  'gems-blue':             { name: { en: 'Gems (Blue Veins)',      'pt-BR': 'Gemas (Veias Azuis)'      } },
  'minerals-yellow':       { name: { en: 'Minerals (Yellow Lesions)', 'pt-BR': 'Minerais (Lesões Amarelas)' } },
  'gems-blue-cambion':     { name: { en: 'Gems (Blue Lesions)',    'pt-BR': 'Gemas (Lesões Azuis)'     } },
  'fishing':               { name: { en: 'Fishing',                'pt-BR': 'Pesca'                    } },
  'parts':                 { name: { en: 'Parts',                  'pt-BR': 'Partes'                   } },
  'spoils':                { name: { en: 'Spoils',                 'pt-BR': 'Saqueio'                  } },
  'junk':                  { name: { en: 'Junk',                   'pt-BR': 'Lixo'                     } },
  'research':              { name: { en: 'Research',               'pt-BR': 'Pesquisa'                 } },
  'common-drops':          { name: { en: 'Common Drops',           'pt-BR': 'Drops Comuns'             } },
  'uncommon-drops':        { name: { en: 'Uncommon Drops',         'pt-BR': 'Drops Incomuns'           } },
  'rare-drops':            { name: { en: 'Rare Drops',             'pt-BR': 'Drops Raros'              } },
  'mission-drops':         { name: { en: 'Mission Drops',          'pt-BR': 'Drops de Missão'          } },
  'empyrean':              { name: { en: 'Empyrean',               'pt-BR': 'Empyrean'                 } },
  'special':               { name: { en: 'Special',                'pt-BR': 'Especial'                 } },
  'warframe-currency':     { name: { en: 'Warframe Currency',      'pt-BR': 'Moeda Warframe'           } },
  'navigation-currency':   { name: { en: 'Navigation Currency',    'pt-BR': 'Moeda de Navegação'       } },
  'misc':                  { name: { en: 'Miscellaneous',          'pt-BR': 'Diversos'                 } },
  'isolation-vault':       { name: { en: 'Isolation Vault',        'pt-BR': 'Isolation Vault'          } },
  'necramech-drops':       { name: { en: 'Necramech Drops',        'pt-BR': 'Drops Necramech'          } },
  'entrati-currency':      { name: { en: 'Entrati Currency',       'pt-BR': 'Moeda Entrati'            } },
  'undercroft':            { name: { en: 'Undercroft',             'pt-BR': 'Undercroft'               } },
  'isleweaver':            { name: { en: 'Isleweaver',             'pt-BR': 'Isleweaver'               } },
  'boss-drops':            { name: { en: 'Boss Drops',             'pt-BR': 'Drops de Boss'            } },
  'hex-treasures':         { name: { en: 'Hex Treasures',          'pt-BR': 'Tesouros Hex'             } },
  'temporal-archimedea':   { name: { en: 'Temporal Archimedea',    'pt-BR': 'Archimedea Temporal'      } },
  'quests':                { name: { en: 'Quests',                 'pt-BR': 'Jornadas'                   } },
  'plants':                { name: { en: 'Plants',                 'pt-BR': 'Plantas'                  } },
  'events':                { name: { en: 'Events',                 'pt-BR': 'Eventos'                  } },
  'deepmines':             { name: { en: 'Deepmines',              'pt-BR': 'Minas Profundas'          } },
};

function locationName(key) {
  const l = SC_LOCATIONS[key];
  if (!l) return key;
  return l.name[state.locale] || l.name[DEFAULT_LOCALE] || key;
}
function locationColor(key) {
  return SC_LOCATIONS[key]?.color || '#888';
}
function sourceName(key) {
  const s = SC_SOURCES[key];
  if (!s) return key;
  return s.name[state.locale] || s.name[DEFAULT_LOCALE] || key;
}

// Resources keyed by slug. recommendedFarm.{planet,node} must point to nodes
// in STAR_CHART — the modal renders that as a clickable link to drill into.
// Icon images are hotlinked from the Warframe wiki (pattern:
// https://wiki.warframe.com/images/<PascalCaseName>.png).
// ── Void Relics ─────────────────────────────────────────────────────────────
// Gerado por scripts/_relics_extract.py + _relics_apply.py (dev-only). NÃO editar à mão.
