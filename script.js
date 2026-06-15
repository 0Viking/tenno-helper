// ============== i18n ==============

const SUPPORTED_LOCALES = ['en', 'pt-BR'];
const DEFAULT_LOCALE = 'en';

function detectInitialLocale() {
  try {
    const saved = localStorage.getItem('tenno-helper-locale');
    if (saved && SUPPORTED_LOCALES.includes(saved)) return saved;
  } catch (e) {}
  return DEFAULT_LOCALE;
}

const STRINGS = {
  en: {
    archetypes: 'Archetypes',
    star_chart: 'Star Chart',
    tutorials: 'Tutorials',
    glossary: 'Glossary',
    archetypes_title: 'Archetypes',
    archetypes_intro: 'Every warframe sorted by [[combat archetype]] — combinations of Damage, Survival, Support, Crowd Control, and Stealth that define a frame\'s playstyle. Click a [[stat pill]] to highlight warframes that specialize in it, an [[archetype]] to see its members, or any [[warframe card]] to view abilities, portrait variants, and acquisition details.',
    star_chart_title: 'Star Chart',
    star_chart_intro: 'Browse the solar system in [[progression order]] — every planet, node, boss drop and resource worth farming. [[Click a planet card]] to expand it in place with its full node list, recommended farms, and which warframes its bosses drop. Use the [[mission filters]] to find specific objectives, the [[search]] to track a planet/node/boss/warframe by name, and toggle [[Show Spoilers]] when you\'re ready for quest-locked content.',
    star_chart_search_placeholder: 'Search planet, node, boss…',
    star_chart_filter_all: 'All',
    star_chart_no_results: 'No planets or nodes match your search.',
    star_chart_no_nodes_filter: 'No nodes on this planet match the current filter.',
    star_chart_back: 'Back to planets',
    star_chart_nodes: 'nodes',
    star_chart_resources_label: 'Resources on this planet',
    star_chart_all_resources_label: 'All resources',
    star_chart_spoiler_toggle_label: 'Show Spoilers',
    star_chart_spoiler_toggle_tooltip: 'Toggle visibility of quest-locked content and the resources tied to it.',
    star_chart_resource_search_placeholder: 'Search resource…',
    star_chart_resource_no_results: 'No resources match your search.',
    resource_modal_description: 'About',
    resource_modal_used_for: 'Used for',
    resource_modal_recommended_farm: 'Recommended farm',
    tutorials_title: 'Tutorials',
    tutorials_intro: 'Coming soon — guides for adversaries (Liches, Sisters, Acolytes), ABC rotations, and other recurring mechanics.',
    glossary_title: 'Glossary',
    glossary_intro: 'Quick reference for Warframe systems and mechanics. Click a topic to expand, or use the search to filter.',
    glossary_search_placeholder: 'Search the glossary…',
    glossary_no_results: 'No glossary entries match your search.',
    glossary_status_effects: 'Status Effects',
    glossary_rotations: 'Mission Rotations (A/B/C)',
    glossary_rotations_body: 'Endless missions cycle through reward tables [[A]], [[B]], and [[C]] as you progress. The standard pattern is [[AABC]] — A at 5 min/wave 5, A at 10 min/wave 10, B at 15 min/wave 15, C at 20 min/wave 20, then it loops. The [[C tier]] holds the rarest rewards (most Prime parts come from C). Exceptions: [[Disruption]] uses A/B/C/C per round (4 conduits), [[Defection]] uses AAABA AAC, and [[Sabotage caches]] roll on a separate C-tier table independent of the mission reward.',
    glossary_relics: 'Relics & Void Traces',
    glossary_relics_body: 'Void Relics drop [[Prime parts]] when cracked in Void Fissure missions. Each relic has 6 possible rewards split as [[Common ×3]] (~76% combined), [[Uncommon ×2]] (~22%), [[Rare ×1]] (2% at Intact). Spend [[Void Traces]] to refine a relic — [[Intact → Exceptional → Flawless → Radiant]] — bumping the rare chance from 2% to 10%. In a squad of 4, after cracking, you see all 4 players\' reward choices and pick one — bring [[radiant relics]] for the rare, share with the team. Earn traces by collecting [[Reactant]] during Fissure missions (10 Reactant required to crack; up to 30 traces awarded per mission, daily cap = MR × 50).',
    glossary_modding: 'Modding Basics',
    glossary_modding_body: 'Mods grant stat bonuses but cost [[Mod Capacity]] equal to the mod\'s rank. Each item starts with capacity equal to its rank (max 30); installing an [[Orokin Reactor]] (Warframes/companions) or [[Orokin Catalyst]] (weapons) doubles that to 60. [[Polarities]] on slots cut the cost of matching-polarity mods in half (rounded up). [[Forma]] adds or changes a polarity on a slot, but resets the item\'s rank to 0. [[Set bonuses]] (Augur, Vigilante, etc.) stack from multiple equipped items. The [[Exilus slot]] only takes utility mods (movement, ammo, reload). [[Galvanized]] mods stack a damage buff on kill (from the Arbitrations vendor).',
    glossary_crits: 'Critical Hits',
    glossary_crits_body: 'Crits roll on every hit. [[Critical Chance]] above 100% creates [[orange crits]] (tier 2, base damage × crit multiplier × 2), and above 200% creates [[red crits]] (tier 3, × 3). [[Headshots]] add a flat ×2 multiplier — and a crit headshot gets an extra ×1.5 on top, effectively ×3 a body crit. Stacking mods like [[Point Strike]] (+150% crit chance), Riven crit rolls, and faction-specific buffs is how primaries reach red-crit territory. [[Critical Damage]] mods (Vital Sense at +120%) multiply the crit multiplier directly, so they only matter when you actually crit.',
    glossary_rivens: 'Riven Mods',
    glossary_rivens_body: 'Rivens are randomized mods tied to a specific weapon. Each weapon has a [[Disposition]] (1–5 dots) that scales the magnitude of every Riven stat — meta weapons usually have low disposition (small bonuses), low-tier weapons get huge ones. Rerolling ([[cycling]]) a Riven costs [[Kuva]], starting at 900 and rising per cycle until it caps at 3,500. Unrolled Rivens are [[veiled]] — complete a specific challenge in-mission to unveil. MR requirement scales with disposition (MR 8–16). The generic strong combo for guns is [[CC + CD + Damage / Multishot]] with no negative; for status weapons, [[Status Chance + Multishot]] beats raw damage.',
    glossary_arcanes: 'Arcanes',
    glossary_arcanes_body: 'Arcanes are slot-based bonuses that trigger on conditions ([[on kill]], [[on hit]], [[on cast]], etc.). [[Warframe Arcanes]] go on the Arcane slot (1 slot, 2 with an Arcane Adapter). [[Operator/Tenno Arcanes]] (Magus, Virtuos, Molt) go on Operator gear. Rank from 0 to 5 by feeding duplicates — each rank cuts cooldown or boosts the effect. Common picks: [[Arcane Energize]] (energy on orb pickup), [[Arcane Grace]] (health regen on damage), [[Molt Augmented]] (+ability strength after kills). [[Set bonuses]] no longer exist after the rework — each Arcane stands alone.',
    glossary_mr: 'Mastery Rank',
    glossary_mr_body: '[[Mastery Rank (MR)]] is your account-wide level — increases when you rank new gear (Warframes, weapons, companions) to 30. Each rank gives [[+1 baseline mod capacity]] across all gear, +1 daily trade (capped), and unlocks MR-gated items and Rivens. The [[MR test]] (one per rank up) is a mandatory mini-challenge — practice it in [[Cephalon Simaris\'s Sanctuary]] in the Relays. Most daily resource caps (Endo, Standing) scale with MR. There\'s a 24-hour cooldown if you fail a test.',
    glossary_helminth: 'Helminth (Subsume)',
    glossary_helminth_body: 'The [[Helminth]] system (unlocked at MR 8 + the Heart of Deimos quest) lets you replace one ability on most Warframes with a [[subsumed ability]] from another. To subsume: feed a fully-ranked Warframe to Helminth — that consumes the frame but permanently unlocks its 1st ability for installation. Some abilities can\'t be subsumed (e.g., Octavia\'s Mallet, Mesa\'s Peacemaker). Installing a subsumed ability costs [[Helminth resources]] (Bile, Calx, Oxides, Pheromones, Synthetics, Biotics, Sentient Appetite) — each ability slot has a specific resource type. [[Invigorations]] are random weekly buffs picked from the Helminth menu — separate system, same room.',
    coming_soon: '(coming soon)',
    credits: 'Credits',
    credits_title: 'Credits',
    credits_creator_label: 'Created by',
    credits_archetype_label: 'Archetype system',
    credits_archetype_desc: 'archetype classification, signature stats and warframe categorization',
    credits_archetype_video: 'Reference video',
    credits_game_label: 'Game content',
    credits_game_text: 'Warframe™ is a trademark of Digital Extremes Ltd. All rights to the game, its art and its lore belong to Digital Extremes.',
    credits_sources_label: 'References & sources',
    credits_wiki_desc: 'weapon data, dispositions, images, status effects, lore',
    credits_morrow_desc: 'riven tier reference and evaluation conventions',
    credits_semlar_desc: 'riven roll mechanics and stat range references',
    credits_browse_desc: 'weapon database cross-reference',
    credits_tech_label: 'Tech stack',
    credits_tesseract_desc: 'client-side OCR for riven image upload',
    credits_thanks_label: 'Thanks',
    credits_thanks_text: 'To the Warframe community for screenshots, feedback and testing.',
    acquisition_title: 'Acquisition',
    acquisition_blueprint: 'Main Blueprint',
    acquisition_parts: 'Components',
    acquisition_alternative: 'Alternative source',
    acquisition_recommended: 'Recommended farm',
    acquisition_view_on_star_chart: 'View on Star Chart',
    source_enemy_drop: 'Enemy drop',
    source_boss_drop: 'Boss drop',
    source_quest_reward: 'Quest reward',
    source_dojo_research: 'Dojo research',
    source_syndicate: 'Syndicate',
    source_cetus_offerings: 'Cetus offerings',
    source_fortuna_offerings: 'Fortuna offerings',
    source_nightwave: 'Nightwave',
    source_login_milestone: 'Login milestone',
    source_baro: 'Baro Ki’Teer',
    source_platinum_only: 'Platinum only',
    source_railjack: 'Railjack',
    source_duviri: 'Duviri / Circuit',
    grid_hint: 'Warframes of the selected archetype are highlighted. Click one to select it.',
    stat_dano: 'Damage',
    stat_sobrevivencia: 'Survival',
    stat_suporte: 'Support',
    stat_controle: 'Crowd Control',
    stat_furtividade: 'Stealth',
    stat_complexidade: 'Complexity',
    lang_name: 'English',
    passive_prefix: 'Passive',
    no_details: 'Description and abilities for this warframe have not been added yet.',
    augments: 'Augments',
    page_title: 'Tenno Helper',
    status_effects: 'Status Effects',
    status_effects_title: 'Status Effects',
    status_effects_intro: 'Status Effects (often called [[procs]]) are secondary effects inflicted when a [[Status Chance]] roll succeeds on a hit. Each damage type causes its own unique effect, and the four base elementals [[can be combined]] to create six compound effects. As of [[Update 36]], vulnerabilities and resistances are tied to enemy faction: vulnerable factions take [[+50% (×1.5)]] damage, and resistant factions take [[−50% (×0.5)]].',
    status_physical: 'Physical',
    status_elemental: 'Elemental',
    status_elemental_hint: 'Select one to view it, or two to see their combination.',
    status_special: 'Special',
    status_proc_label: 'Status proc',
    status_vulnerable: 'Vulnerable (×1.5)',
    status_resistant: 'Resistant (×0.5)',
    status_none: 'None',
    rivens: 'Rivens',
    riven_page_title: 'Riven Evaluation',
    riven_page_intro: 'Describe your riven below and get a [[0–10 score]] for how good it is. Pick the weapon category, the number of stats (2, 3 or 4), then fill in each stat. The evaluator weighs stat [[tier]], whether negatives are [[free or harmful]], and the overall [[slot shape]] of the roll.',
    riven_category_label: 'Weapon category',
    riven_cat_primary: 'Primary',
    riven_cat_secondary: 'Secondary',
    riven_cat_melee: 'Melee',
    riven_stats_label: 'Stats',
    riven_stat_placeholder: '— select a stat —',
    riven_value_placeholder: 'value (e.g. 25 or -30)',
    riven_add_stat: 'Add stat',
    riven_remove_stat: 'Remove stat',
    riven_evaluate: 'Evaluate',
    riven_breakdown_label: 'Breakdown',
    riven_verdict_godroll: 'Godroll',
    riven_verdict_excellent: 'Excellent',
    riven_verdict_solid: 'Solid',
    riven_verdict_mid: 'Mid / niche',
    riven_verdict_bad: 'Bad',
    riven_verdict_trash: 'Trash',
    riven_tier_S: 'S-tier',
    riven_tier_A: 'A-tier',
    riven_tier_B: 'B-tier',
    riven_tier_C: 'C-tier',
    riven_tier_D: 'D-tier',
    riven_neg_beneficial: 'Beneficial neg',
    riven_neg_neutral: 'Harmless neg',
    riven_neg_mild: 'Mild penalty',
    riven_neg_harmful: 'Harmful neg',
    riven_shape_godroll: 'Godroll shape (3+/1−): magnitudes maximized.',
    riven_shape_good: 'Good shape: the negative boosts the magnitude of your positives.',
    riven_shape_neutral: 'Neutral shape: no negative means smaller magnitudes on the positives.',
    riven_shape_bad: '4 positives without a negative: each positive rolls smaller than ideal.',
    riven_warn_pick_stat: 'Pick a stat for every slot before evaluating.',
    riven_warn_duplicate: 'You picked the same stat twice. Each row must be unique.',
    riven_upload_prompt: 'Drop a riven screenshot here or click to upload',
    riven_upload_hint: 'PNG, JPG or WebP — [[the sharper the image, the more accurate the reading]]',
    riven_ocr_disclaimer: 'Image reading may contain mistakes — always review the detected values before evaluating.',
    riven_ocr_loading_lib: 'Loading OCR engine (one-time, ~3 MB)…',
    riven_ocr_processing: 'Reading image…',
    riven_ocr_success: '{n} stats detected.',
    riven_ocr_no_stats: 'No stats found in this image. Try a clearer screenshot or switch to manual entry.',
    riven_ocr_failed: 'Failed to read the image. Try another screenshot or use manual entry.',
    riven_ocr_load_failed: 'Could not load the OCR engine. Check your connection and try again.',
    riven_ocr_change_image: 'Choose another image',
    riven_ocr_remove_image: 'Remove image',
    riven_weapon_label: 'Weapon (optional)',
    riven_weapon_none: 'No weapon selected — generic evaluation',
    riven_weapon_pick: 'Pick a weapon',
    riven_weapon_change: 'Change',
    riven_weapon_clear: 'Clear',
    riven_weapon_auto: 'auto from image',
    weapon_picker_title: 'Select weapon',
    weapon_picker_close: 'Close',
    weapon_cat_primary: 'Primary',
    weapon_cat_secondary: 'Secondary',
    weapon_cat_melee: 'Melee',
    weapon_search_placeholder: 'Search weapon…',
    weapon_pick_prompt: 'Pick a weapon from the list to see details.',
    weapon_no_results: 'No weapons match this search.',
    weapon_coming_soon: 'Coming in a future update.',
    weapon_use_btn: 'Use this weapon',
    weapon_disposition_label: 'Disposition',
    weapon_mr_label: 'Mastery Rank',
    weapon_type_label: 'Type',
    weapon_preferred_pos: 'Preferred positives',
    weapon_preferred_neg: 'Free negatives',
    weapon_wasted_pos: 'Wasted on this weapon',
    weapon_notes: 'Notes',
    weapon_family_variants_label: 'Same family — riven works on these too',
    weapon_family_more_variants: 'Other variants in this family share the riven',
    riven_breakdown_why: 'Why this score',
    riven_breakdown_override: 'overridden by {weapon}',
    riven_rec_title_generic: 'Recommended (generic)',
    riven_rec_title_weapon: 'Recommended for {weapon}',
    riven_rec_ideal_pos: 'Ideal positives',
    riven_rec_free_neg: 'Free negatives',
    riven_rec_wasted_pos: 'Wasted on this weapon',
    riven_rec_avoid_neg: 'Negatives to avoid',
  },
  'pt-BR': {
    archetypes: 'Arquétipos',
    star_chart: 'Mapa Estelar',
    tutorials: 'Tutoriais',
    glossary: 'Glossário',
    archetypes_title: 'Arquétipos',
    archetypes_intro: 'Cada warframe organizado por [[arquétipo de combate]] — combinações de Dano, Sobrevivência, Suporte, Controle e Furtividade que definem o estilo de jogo de cada frame. Clique numa [[stat pill]] pra destacar warframes que se especializam nela, num [[arquétipo]] pra ver seus membros, ou em qualquer [[card de warframe]] pra ver habilidades, variantes de portrait e detalhes de aquisição.',
    star_chart_title: 'Mapa Estelar',
    star_chart_intro: 'Navegue pelo sistema solar em [[ordem de progressão]] — cada planeta, nodo, drop de boss e recurso que vale farmar. [[Clique no card de um planeta]] pra expandir in-place com a lista completa de nodos, farms recomendados e quais warframes os bosses dropam. Use os [[filtros de missão]] pra encontrar objetivos específicos, a [[busca]] pra rastrear planeta/nodo/boss/warframe pelo nome, e ative [[Mostrar Spoilers]] quando estiver pronto pra conteúdo desbloqueado por quests.',
    star_chart_search_placeholder: 'Buscar planeta, nodo, boss…',
    star_chart_filter_all: 'Todos',
    star_chart_no_results: 'Nenhum planeta ou nodo corresponde à sua busca.',
    star_chart_no_nodes_filter: 'Nenhum nodo deste planeta corresponde ao filtro atual.',
    star_chart_back: 'Voltar aos planetas',
    star_chart_nodes: 'nodos',
    star_chart_resources_label: 'Recursos deste planeta',
    star_chart_all_resources_label: 'Todos os recursos',
    star_chart_spoiler_toggle_label: 'Mostrar Spoilers',
    star_chart_spoiler_toggle_tooltip: 'Alterna visibilidade do conteúdo com quest-lock e dos recursos vinculados.',
    star_chart_resource_search_placeholder: 'Buscar recurso…',
    star_chart_resource_no_results: 'Nenhum recurso corresponde à busca.',
    resource_modal_description: 'Sobre',
    resource_modal_used_for: 'Usado para',
    resource_modal_recommended_farm: 'Farm recomendado',
    tutorials_title: 'Tutoriais',
    tutorials_intro: 'Em breve — guias de adversários (Liches, Sisters, Acólitos), rotações ABC e outras mecânicas recorrentes.',
    glossary_title: 'Glossário',
    glossary_intro: 'Referência rápida de sistemas e mecânicas do Warframe. Clique num tópico pra expandir, ou use a busca pra filtrar.',
    glossary_search_placeholder: 'Buscar no glossário…',
    glossary_no_results: 'Nenhuma entrada do glossário corresponde à sua busca.',
    glossary_status_effects: 'Status Effects',
    glossary_rotations: 'Rotações de Missão (A/B/C)',
    glossary_rotations_body: 'Missões endless ciclam por tabelas de recompensa [[A]], [[B]] e [[C]] conforme você progride. O padrão usual é [[AABC]] — A em 5 min/wave 5, A em 10 min/wave 10, B em 15 min/wave 15, C em 20 min/wave 20, depois loop. A tabela [[C]] tem as recompensas mais raras (maior parte das peças Prime cai em C). Exceções: [[Disruption]] usa A/B/C/C por round (4 conduítes), [[Defection]] usa AAABA AAC, e [[caches de Sabotage]] rolam numa tabela C separada, independente da recompensa da missão.',
    glossary_relics: 'Relíquias & Void Traces',
    glossary_relics_body: 'Relíquias Void dropam [[peças Prime]] quando crackadas em missões Void Fissure. Cada relíquia tem 6 recompensas possíveis: [[Comum ×3]] (~76% somado), [[Incomum ×2]] (~22%), [[Rara ×1]] (2% no Intacta). Gaste [[Void Traces]] pra refinar uma relíquia — [[Intacta → Excepcional → Impecável → Radiante]] — subindo a chance de rara de 2% pra 10%. Em squad de 4, depois de crackar, aparecem as 4 escolhas de recompensa — escolhe a melhor. Leve [[relíquias radiantes]] pra puxar a rara, divida com o time. Ganha traces coletando [[Reactant]] durante missões Fissure (10 Reactant pra crackar; até 30 traces por missão, cap diário = MR × 50).',
    glossary_modding: 'Modding Básico',
    glossary_modding_body: 'Mods dão bônus de stat mas custam [[Capacidade de Mod]] igual ao rank do mod. Cada item começa com capacidade igual ao seu rank (máx 30); instalar um [[Orokin Reactor]] (Warframes/companions) ou [[Orokin Catalyst]] (armas) dobra pra 60. [[Polaridades]] nos slots cortam pela metade o custo de mods de mesma polaridade (arredonda pra cima). [[Forma]] adiciona ou muda a polaridade num slot, mas reseta o rank do item pra 0. [[Set bonuses]] (Augur, Vigilante, etc.) acumulam de múltiplos itens equipados. O [[slot Exilus]] aceita só mods utilitários (mobilidade, munição, recarga). Mods [[Galvanized]] empilham buff de dano ao matar (vêm do vendedor de Arbitrations).',
    glossary_crits: 'Críticos',
    glossary_crits_body: 'Críticos são rolados em cada hit. [[Crit Chance]] acima de 100% gera [[crit laranja]] (tier 2, dano base × multiplicador de crit × 2), e acima de 200% gera [[crit vermelho]] (tier 3, × 3). [[Tiros na cabeça]] adicionam ×2 fixo — e crit no headshot ganha um extra ×1.5 por cima, efetivamente ×3 um crit no corpo. Empilhar mods como [[Point Strike]] (+150% crit chance), rolls de crit em Rivens, e buffs específicos de facção é como armas primárias chegam em red crit. Mods de [[Crit Damage]] (Vital Sense em +120%) multiplicam o multiplicador de crit direto — então só importam quando você de fato crita.',
    glossary_rivens: 'Mods Riven',
    glossary_rivens_body: 'Rivens são mods randomizados ligados a uma arma específica. Cada arma tem uma [[Disposition]] (1–5 pontos) que escala a magnitude de todo stat de Riven — armas meta geralmente têm disposition baixo (bônus pequenos), armas low-tier ganham bônus enormes. Rerollar ([[cycling]]) um Riven custa [[Kuva]], começa em 900 e sobe por cycle até travar em 3.500. Rivens não rolados são [[velados]] — completa um desafio específico em missão pra desvelar. Requisito de MR escala com disposition (MR 8–16). Combo genérico forte pra armas é [[CC + CD + Dano / Multishot]] sem negativo; pra armas de status, [[Status Chance + Multishot]] bate dano puro.',
    glossary_arcanes: 'Arcanes',
    glossary_arcanes_body: 'Arcanes são bônus de slot que ativam em condições ([[on kill]], [[on hit]], [[on cast]], etc.). [[Arcanes de Warframe]] vão no slot de Arcane (1 slot, 2 com Arcane Adapter). [[Arcanes de Operador/Tenno]] (Magus, Virtuos, Molt) vão no equipamento do Operador. Rank de 0 a 5 alimentando duplicatas — cada rank corta cooldown ou aumenta o efeito. Escolhas comuns: [[Arcane Energize]] (energia ao pegar orb), [[Arcane Grace]] (regen de vida ao tomar dano), [[Molt Augmented]] (+força de habilidade após kills). [[Set bonuses]] não existem mais depois do rework — cada Arcane se sustenta sozinho.',
    glossary_mr: 'Mastery Rank',
    glossary_mr_body: '[[Mastery Rank (MR)]] é o nível geral da conta — sobe rankando novos equipamentos (Warframes, armas, companions) até 30. Cada rank dá [[+1 capacidade base de mod]] em todo equipamento, +1 trade por dia (limitado), e desbloqueia itens e Rivens com MR-lock. O [[teste de MR]] (um por rank up) é um mini-desafio obrigatório — pratique no [[Santuário do Cephalon Simaris]] nos Relays. Caps diários (Endo, Standing) escalam com MR. Tem cooldown de 24h se você falhar no teste.',
    glossary_helminth: 'Helminth (Subsume)',
    glossary_helminth_body: 'O sistema [[Helminth]] (desbloqueado em MR 8 + quest Heart of Deimos) deixa você substituir uma habilidade da maioria dos Warframes por uma [[habilidade subsumida]] de outro. Pra subsumir: alimente um Warframe no rank máximo ao Helminth — consome o frame mas desbloqueia a 1ª habilidade dele permanentemente pra instalação. Algumas habilidades não podem ser subsumidas (ex: Mallet da Octavia, Peacemaker da Mesa). Instalar uma habilidade subsumida custa [[recursos do Helminth]] (Bile, Calx, Oxides, Pheromones, Synthetics, Biotics, Sentient Appetite) — cada slot de habilidade pede um tipo específico. [[Invigorations]] são buffs aleatórios semanais escolhidos no menu Helminth — sistema separado, mesma sala.',
    coming_soon: '(em breve)',
    credits: 'Créditos',
    credits_title: 'Créditos',
    credits_creator_label: 'Criado por',
    credits_archetype_label: 'Sistema de arquétipos',
    credits_archetype_desc: 'classificação por arquétipos, stats de assinatura e categorização dos warframes',
    credits_archetype_video: 'Vídeo de referência',
    credits_game_label: 'Conteúdo do jogo',
    credits_game_text: 'Warframe™ é uma marca registrada da Digital Extremes Ltd. Todos os direitos do jogo, sua arte e seu universo pertencem à Digital Extremes.',
    credits_sources_label: 'Referências e fontes',
    credits_wiki_desc: 'dados de armas, dispositions, imagens, status effects, lore',
    credits_morrow_desc: 'referência de tiers de rivens e convenções de avaliação',
    credits_semlar_desc: 'mecânicas de roll de riven e ranges de stats',
    credits_browse_desc: 'cross-reference do banco de armas',
    credits_tech_label: 'Stack técnica',
    credits_tesseract_desc: 'OCR client-side pra upload de imagem de riven',
    credits_thanks_label: 'Agradecimentos',
    credits_thanks_text: 'À comunidade Warframe pelos prints, feedback e testes.',
    acquisition_title: 'Aquisição',
    acquisition_blueprint: 'Blueprint principal',
    acquisition_parts: 'Componentes',
    acquisition_alternative: 'Fonte alternativa',
    acquisition_recommended: 'Farm recomendado',
    acquisition_view_on_star_chart: 'Ver no Mapa Estelar',
    source_enemy_drop: 'Drop de inimigos',
    source_boss_drop: 'Drop de boss',
    source_quest_reward: 'Recompensa de quest',
    source_dojo_research: 'Pesquisa de dojo',
    source_syndicate: 'Sindicato',
    source_cetus_offerings: 'Ofertas de Cetus',
    source_fortuna_offerings: 'Ofertas de Fortuna',
    source_nightwave: 'Nightwave',
    source_login_milestone: 'Marco de login',
    source_baro: 'Baro Ki’Teer',
    source_platinum_only: 'Somente platinum',
    source_railjack: 'Railjack',
    source_duviri: 'Duviri / Circuit',
    grid_hint: 'Warframes do arquétipo selecionado em destaque. Clique em um para selecioná-lo.',
    stat_dano: 'Dano',
    stat_sobrevivencia: 'Sobrevivência',
    stat_suporte: 'Suporte',
    stat_controle: 'Controle de Grupo',
    stat_furtividade: 'Furtividade',
    stat_complexidade: 'Complexidade',
    lang_name: 'Português',
    passive_prefix: 'Passiva',
    no_details: 'Descrição e habilidades deste warframe ainda não foram inseridos.',
    augments: 'Augments',
    page_title: 'Tenno Helper',
    status_effects: 'Efeitos de Status',
    status_effects_title: 'Efeitos de Status',
    status_effects_intro: 'Efeitos de Status (também chamados de [[procs]]) são efeitos secundários causados quando uma [[Chance de Status]] é bem-sucedida em um acerto. Cada tipo de dano provoca seu próprio efeito único, e os quatro elementais base [[podem ser combinados]] para criar seis efeitos compostos. Desde a [[Atualização 36]], vulnerabilidades e resistências dependem da facção inimiga: facções vulneráveis recebem [[+50% (×1,5)]] de dano, e facções resistentes recebem [[−50% (×0,5)]].',
    status_physical: 'Físico',
    status_elemental: 'Elemental',
    status_elemental_hint: 'Selecione um para visualizar, ou dois para ver a combinação.',
    status_special: 'Especial',
    status_proc_label: 'Efeito (proc)',
    status_vulnerable: 'Vulnerável (×1,5)',
    status_resistant: 'Resistente (×0,5)',
    status_none: 'Nenhuma',
    rivens: 'Rivens',
    riven_page_title: 'Avaliação de Riven',
    riven_page_intro: 'Descreva seu riven abaixo e receba uma [[nota de 0 a 10]] sobre o quão bom ele é. Escolha a categoria da arma, o número de stats (2, 3 ou 4) e então preencha cada um. O avaliador pesa o [[tier do stat]], se negativos são [[livres ou prejudiciais]], e a [[forma geral]] do roll.',
    riven_category_label: 'Categoria da arma',
    riven_cat_primary: 'Primária',
    riven_cat_secondary: 'Secundária',
    riven_cat_melee: 'Corpo a corpo',
    riven_stats_label: 'Stats',
    riven_stat_placeholder: '— escolha um stat —',
    riven_value_placeholder: 'valor (ex: 25 ou -30)',
    riven_add_stat: 'Adicionar stat',
    riven_remove_stat: 'Remover stat',
    riven_evaluate: 'Avaliar',
    riven_breakdown_label: 'Detalhamento',
    riven_verdict_godroll: 'Godroll',
    riven_verdict_excellent: 'Excelente',
    riven_verdict_solid: 'Sólido',
    riven_verdict_mid: 'Mediano',
    riven_verdict_bad: 'Ruim',
    riven_verdict_trash: 'Lixo',
    riven_tier_S: 'Tier S',
    riven_tier_A: 'Tier A',
    riven_tier_B: 'Tier B',
    riven_tier_C: 'Tier C',
    riven_tier_D: 'Tier D',
    riven_neg_beneficial: 'Negativo benéfico',
    riven_neg_neutral: 'Negativo inofensivo',
    riven_neg_mild: 'Penalidade leve',
    riven_neg_harmful: 'Negativo prejudicial',
    riven_shape_godroll: 'Forma godroll (3+/1−): magnitudes maximizadas.',
    riven_shape_good: 'Boa forma: o negativo aumenta a magnitude dos positivos.',
    riven_shape_neutral: 'Forma neutra: sem negativo, os positivos rolam com menos magnitude.',
    riven_shape_bad: '4 positivos sem negativo: cada positivo rola menor do que o ideal.',
    riven_warn_pick_stat: 'Escolha um stat para cada slot antes de avaliar.',
    riven_warn_duplicate: 'Você escolheu o mesmo stat duas vezes. Cada linha precisa ser única.',
    riven_upload_prompt: 'Solte um print do riven aqui ou clique para enviar',
    riven_upload_hint: 'PNG, JPG ou WebP — [[quanto mais nítida a imagem, mais precisa a leitura]]',
    riven_ocr_disclaimer: 'A leitura por imagem pode conter erros — sempre revise os valores detectados antes de avaliar.',
    riven_ocr_loading_lib: 'Carregando engine de OCR (uma única vez, ~3 MB)…',
    riven_ocr_processing: 'Lendo imagem…',
    riven_ocr_success: '{n} stats detectados.',
    riven_ocr_no_stats: 'Não foi possível encontrar stats nessa imagem. Tente um print mais nítido ou use a entrada manual.',
    riven_ocr_failed: 'Falha ao ler a imagem. Tente outro print ou use a entrada manual.',
    riven_ocr_load_failed: 'Não foi possível carregar a engine de OCR. Verifique sua conexão e tente de novo.',
    riven_ocr_change_image: 'Escolher outra imagem',
    riven_ocr_remove_image: 'Remover imagem',
    riven_weapon_label: 'Arma (opcional)',
    riven_weapon_none: 'Nenhuma arma selecionada — avaliação genérica',
    riven_weapon_pick: 'Escolher arma',
    riven_weapon_change: 'Trocar',
    riven_weapon_clear: 'Limpar',
    riven_weapon_auto: 'auto da imagem',
    weapon_picker_title: 'Selecione a arma',
    weapon_picker_close: 'Fechar',
    weapon_cat_primary: 'Primária',
    weapon_cat_secondary: 'Secundária',
    weapon_cat_melee: 'Corpo a corpo',
    weapon_search_placeholder: 'Buscar arma…',
    weapon_pick_prompt: 'Escolha uma arma na lista pra ver os detalhes.',
    weapon_no_results: 'Nenhuma arma encontrada nessa busca.',
    weapon_coming_soon: 'Disponível em update futuro.',
    weapon_use_btn: 'Usar esta arma',
    weapon_disposition_label: 'Disposição',
    weapon_mr_label: 'Rank de Maestria',
    weapon_type_label: 'Tipo',
    weapon_preferred_pos: 'Positivos preferidos',
    weapon_preferred_neg: 'Negativos gratuitos',
    weapon_wasted_pos: 'Desperdício nesta arma',
    weapon_notes: 'Observações',
    weapon_family_variants_label: 'Mesma família — o riven serve nessas também',
    weapon_family_more_variants: 'Outras variantes na mesma família compartilham o riven',
    riven_breakdown_why: 'Por que essa nota',
    riven_breakdown_override: 'sobrescrito pelo {weapon}',
    riven_rec_title_generic: 'Recomendado (genérico)',
    riven_rec_title_weapon: 'Recomendado para {weapon}',
    riven_rec_ideal_pos: 'Positivos ideais',
    riven_rec_free_neg: 'Negativos gratuitos',
    riven_rec_wasted_pos: 'Desperdício nessa arma',
    riven_rec_avoid_neg: 'Negativos pra evitar',
  },
};

function t(key) {
  const dict = STRINGS[state.locale] || STRINGS[DEFAULT_LOCALE];
  return dict[key] || STRINGS[DEFAULT_LOCALE][key] || key;
}

// ============== Radar chart (estático por enquanto) ==============

const STATS = [
  { key: 'dano',          angle: -Math.PI / 2,     color: '#e74c3c' },
  { key: 'sobrevivencia', angle: -Math.PI / 6,     color: '#3498db' },
  { key: 'suporte',       angle:  Math.PI / 6,     color: '#2ecc71' },
  { key: 'controle',      angle:  Math.PI / 2,     color: '#f39c12' },
  { key: 'furtividade',   angle:  5 * Math.PI / 6, color: '#9b59b6' },
  { key: 'complexidade',  angle:  7 * Math.PI / 6, color: '#ffffff' },
];

function statLabel(key) { return t('stat_' + key); }

const RADIUS = 180;
const RINGS = 10;
const MAX_VALUE = 5;
const LABEL_OFFSET = 28;
const SVG_NS = 'http://www.w3.org/2000/svg';
const svg = document.getElementById('radar');

function point(angle, r) {
  return { x: Math.cos(angle) * r, y: Math.sin(angle) * r };
}

function hexPoints(radius) {
  return STATS.map(s => {
    const p = point(s.angle, radius);
    return `${p.x.toFixed(2)},${p.y.toFixed(2)}`;
  }).join(' ');
}

function buildChart() {
  const defs = document.createElementNS(SVG_NS, 'defs');
  STATS.forEach((s, i) => {
    const next = STATS[(i + 1) % STATS.length];
    const grad = document.createElementNS(SVG_NS, 'linearGradient');
    grad.setAttribute('id', `grad-${i}`);
    grad.setAttribute('gradientUnits', 'userSpaceOnUse');

    const stop1 = document.createElementNS(SVG_NS, 'stop');
    stop1.setAttribute('offset', '0%');
    stop1.setAttribute('stop-color', s.color);
    const stop2 = document.createElementNS(SVG_NS, 'stop');
    stop2.setAttribute('offset', '100%');
    stop2.setAttribute('stop-color', next.color);
    grad.appendChild(stop1);
    grad.appendChild(stop2);
    defs.appendChild(grad);
  });
  svg.appendChild(defs);

  for (let i = 1; i <= RINGS; i++) {
    const r = (RADIUS / RINGS) * i;
    const poly = document.createElementNS(SVG_NS, 'polygon');
    poly.setAttribute('points', hexPoints(r));
    poly.setAttribute('class', 'grid-hex');
    svg.appendChild(poly);
  }

  STATS.forEach((s, i) => {
    const tri = document.createElementNS(SVG_NS, 'polygon');
    tri.setAttribute('class', 'data-triangle');
    tri.setAttribute('data-section', i);
    tri.setAttribute('fill', `url(#grad-${i})`);
    svg.appendChild(tri);
  });

  STATS.forEach(s => {
    const p = point(s.angle, RADIUS);
    const line = document.createElementNS(SVG_NS, 'line');
    line.setAttribute('x1', 0);
    line.setAttribute('y1', 0);
    line.setAttribute('x2', p.x.toFixed(2));
    line.setAttribute('y2', p.y.toFixed(2));
    line.setAttribute('class', 'spoke');
    svg.appendChild(line);
  });

  STATS.forEach((s, i) => {
    const vline = document.createElementNS(SVG_NS, 'line');
    vline.setAttribute('class', 'value-line');
    vline.setAttribute('data-stat', i);
    vline.setAttribute('stroke', s.color);
    vline.setAttribute('x1', 0);
    vline.setAttribute('y1', 0);
    vline.setAttribute('x2', 0);
    vline.setAttribute('y2', 0);
    svg.appendChild(vline);
  });

  STATS.forEach(s => {
    const p = point(s.angle, RADIUS + LABEL_OFFSET);
    const text = document.createElementNS(SVG_NS, 'text');
    text.setAttribute('x', p.x.toFixed(2));
    text.setAttribute('y', p.y.toFixed(2));
    text.setAttribute('class', 'label');
    text.dataset.stat = s.key;

    const cos = Math.cos(s.angle);
    const sin = Math.sin(s.angle);
    let anchor = 'middle';
    if (cos > 0.15) anchor = 'start';
    else if (cos < -0.15) anchor = 'end';
    text.setAttribute('text-anchor', anchor);

    let baseline = 'middle';
    if (sin < -0.5) baseline = 'auto';
    else if (sin > 0.5) baseline = 'hanging';
    text.setAttribute('dominant-baseline', baseline);

    text.textContent = statLabel(s.key);
    svg.appendChild(text);
  });
}

function rebuildChartLabels() {
  svg.querySelectorAll('text.label[data-stat]').forEach(el => {
    el.textContent = statLabel(el.dataset.stat);
  });
}

function clampValue(v) {
  if (isNaN(v)) return 0;
  return Math.max(0, Math.min(MAX_VALUE, Math.round(v)));
}

const ANIM_DURATION = 350;
let currentRadii = STATS.map(() => 0);
let animFrom = null;
let animTarget = null;
let animStart = null;
let animFrameId = null;

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function renderPolygon(radii) {
  STATS.forEach((s, i) => {
    const ni = (i + 1) % STATS.length;
    const next = STATS[ni];
    const a = point(s.angle, radii[i]);
    const b = point(next.angle, radii[ni]);

    const tri = svg.querySelector(`.data-triangle[data-section="${i}"]`);
    if (tri) {
      tri.setAttribute('points', `0,0 ${a.x.toFixed(2)},${a.y.toFixed(2)} ${b.x.toFixed(2)},${b.y.toFixed(2)}`);
    }

    const grad = document.getElementById(`grad-${i}`);
    if (grad) {
      grad.setAttribute('x1', a.x.toFixed(2));
      grad.setAttribute('y1', a.y.toFixed(2));
      grad.setAttribute('x2', b.x.toFixed(2));
      grad.setAttribute('y2', b.y.toFixed(2));
    }

    const vline = svg.querySelector(`.value-line[data-stat="${i}"]`);
    if (vline) {
      vline.setAttribute('x2', a.x.toFixed(2));
      vline.setAttribute('y2', a.y.toFixed(2));
    }
  });
}

function animateStep(timestamp) {
  if (animStart === null) animStart = timestamp;
  const t = Math.min((timestamp - animStart) / ANIM_DURATION, 1);
  const eased = easeOutCubic(t);
  currentRadii = animFrom.map((from, i) => from + (animTarget[i] - from) * eased);
  renderPolygon(currentRadii);
  if (t < 1) {
    animFrameId = requestAnimationFrame(animateStep);
  } else {
    animFrameId = null;
  }
}

function updateChart() {
  const newTarget = STATS.map(s => {
    const input = document.querySelector(`input[data-key="${s.key}"]`);
    const v = clampValue(parseInt(input.value, 10));
    if (String(v) !== input.value) input.value = v;
    return (v / MAX_VALUE) * RADIUS;
  });

  animFrom = currentRadii.slice();
  animTarget = newTarget;
  animStart = null;
  if (animFrameId) cancelAnimationFrame(animFrameId);
  animFrameId = requestAnimationFrame(animateStep);
}

// ============== Dados: arquétipos e warframes ==============

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
    warframes: ['Follie', 'Volt'] },
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

// Dados de cada warframe (stats + cor do gráfico). Preenchido incrementalmente.
const WARFRAMES_DATA = {
  // Canhão de Vidro
  'dagath':    { stats: { dano: 5, sobrevivencia: 1, suporte: 0, controle: 1, furtividade: 0, complexidade: 5 }, color: '#3d557a' },
  'excalibur': { stats: { dano: 4, sobrevivencia: 2, suporte: 0, controle: 2, furtividade: 0, complexidade: 1 }, color: '#b03a2c' },
  'garuda':    { stats: { dano: 4, sobrevivencia: 2, suporte: 0, controle: 0, furtividade: 0, complexidade: 3 }, color: '#7e8a2e' },
  'mesa':      { stats: { dano: 5, sobrevivencia: 2, suporte: 1, controle: 1, furtividade: 0, complexidade: 1 }, color: '#5b3d7e' },
  'mirage':    { stats: { dano: 5, sobrevivencia: 2, suporte: 1, controle: 2, furtividade: 0, complexidade: 2 }, color: '#2289a6' },
  'saryn':     { stats: { dano: 5, sobrevivencia: 0, suporte: 0, controle: 1, furtividade: 0, complexidade: 3 }, color: '#c1701f' },
  'sevagoth':  { stats: { dano: 5, sobrevivencia: 2, suporte: 1, controle: 2, furtividade: 0, complexidade: 3 }, color: '#6e8caf' },
  'temple':    { stats: { dano: 4, sobrevivencia: 2, suporte: 1, controle: 1, furtividade: 0, complexidade: 3 }, color: '#b56b66' },
  'xaku':      { stats: { dano: 4, sobrevivencia: 2, suporte: 1, controle: 2, furtividade: 0, complexidade: 4 }, color: '#9aa334' },

  // Tanque
  'grendel':   { stats: { dano: 2, sobrevivencia: 4, suporte: 2, controle: 1, furtividade: 0, complexidade: 2 }, color: '#3d557a' },
  'rhino':     { stats: { dano: 1, sobrevivencia: 4, suporte: 2, controle: 2, furtividade: 0, complexidade: 1 }, color: '#7a3a30' },

  // Controlador
  'frost':     { stats: { dano: 1, sobrevivencia: 2, suporte: 2, controle: 4, furtividade: 0, complexidade: 1 }, color: '#2d6cb0' },
  'hydroid':   { stats: { dano: 2, sobrevivencia: 2, suporte: 2, controle: 3, furtividade: 0, complexidade: 1 }, color: '#c1701f' },
  'nyx':       { stats: { dano: 1, sobrevivencia: 2, suporte: 1, controle: 5, furtividade: 0, complexidade: 2 }, color: '#a73a2c' },

  // Infiltrador
  'ivara':     { stats: { dano: 2, sobrevivencia: 0, suporte: 2, controle: 1, furtividade: 5, complexidade: 3 }, color: '#c1701f' },

  // Lutador
  'atlas':     { stats: { dano: 4, sobrevivencia: 3, suporte: 1, controle: 2, furtividade: 0, complexidade: 2 }, color: '#3d6e88' },
  'baruuk':    { stats: { dano: 5, sobrevivencia: 3, suporte: 1, controle: 2, furtividade: 0, complexidade: 3 }, color: '#803a30' },
  'chroma':    { stats: { dano: 3, sobrevivencia: 4, suporte: 1, controle: 0, furtividade: 0, complexidade: 2 }, color: '#7e8a2e' },
  'gauss':     { stats: { dano: 3, sobrevivencia: 4, suporte: 0, controle: 1, furtividade: 0, complexidade: 5 }, color: '#5b3d7e' },
  'kullervo':  { stats: { dano: 5, sobrevivencia: 3, suporte: 0, controle: 1, furtividade: 0, complexidade: 2 }, color: '#2c7891' },
  'nidus':     { stats: { dano: 3, sobrevivencia: 4, suporte: 1, controle: 1, furtividade: 0, complexidade: 3 }, color: '#c1701f' },
  'revenant':  { stats: { dano: 3, sobrevivencia: 5, suporte: 2, controle: 2, furtividade: 0, complexidade: 1 }, color: '#b97a78' },
  'valkyr':    { stats: { dano: 4, sobrevivencia: 5, suporte: 1, controle: 2, furtividade: 0, complexidade: 1 }, color: '#9aa334' },
  'wukong':    { stats: { dano: 3, sobrevivencia: 4, suporte: 0, controle: 1, furtividade: 2, complexidade: 0 }, color: '#9788b5' },

  // Disruptor
  'ember':     { stats: { dano: 3, sobrevivencia: 2, suporte: 0, controle: 3, furtividade: 0, complexidade: 2 }, color: '#889735' },
  'gara':      { stats: { dano: 4, sobrevivencia: 2, suporte: 2, controle: 4, furtividade: 0, complexidade: 3 }, color: '#5b3d7e' },
  'gyre':      { stats: { dano: 3, sobrevivencia: 0, suporte: 0, controle: 4, furtividade: 0, complexidade: 4 }, color: '#2289a6' },
  'khora':     { stats: { dano: 5, sobrevivencia: 1, suporte: 1, controle: 4, furtividade: 0, complexidade: 1 }, color: '#c1701f' },
  'koumei':    { stats: { dano: 3, sobrevivencia: 2, suporte: 0, controle: 3, furtividade: 0, complexidade: 3 }, color: '#92a8b8' },
  'lavos':     { stats: { dano: 4, sobrevivencia: 2, suporte: 1, controle: 4, furtividade: 0, complexidade: 5 }, color: '#c47c7e' },
  'mag':       { stats: { dano: 4, sobrevivencia: 2, suporte: 1, controle: 4, furtividade: 0, complexidade: 3 }, color: '#9aa334' },
  'nokko':     { stats: { dano: 5, sobrevivencia: 2, suporte: 2, controle: 3, furtividade: 0, complexidade: 2 }, color: '#708ab0' },
  'nova':      { stats: { dano: 3, sobrevivencia: 2, suporte: 2, controle: 4, furtividade: 0, complexidade: 2 }, color: '#a597b8' },
  'qorvex':    { stats: { dano: 3, sobrevivencia: 1, suporte: 1, controle: 3, furtividade: 0, complexidade: 2 }, color: '#5a8a9c' },
  'uriel':     { stats: { dano: 5, sobrevivencia: 1, suporte: 1, controle: 3, furtividade: 0, complexidade: 2 }, color: '#c47c4a' },
  'vauban':    { stats: { dano: 4, sobrevivencia: 1, suporte: 1, controle: 5, furtividade: 0, complexidade: 3 }, color: '#2c4970' },

  // Assassino
  'ash':       { stats: { dano: 4, sobrevivencia: 1, suporte: 0, controle: 0, furtividade: 3, complexidade: 1 }, color: '#2c7891' },
  'cyte-09':   { stats: { dano: 4, sobrevivencia: 2, suporte: 2, controle: 0, furtividade: 3, complexidade: 3 }, color: '#8e3a2e' },
  'voruna':    { stats: { dano: 4, sobrevivencia: 2, suporte: 1, controle: 0, furtividade: 3, complexidade: 3 }, color: '#9aa334' },

  // Guardião
  'citrine':   { stats: { dano: 1, sobrevivencia: 3, suporte: 4, controle: 2, furtividade: 0, complexidade: 3 }, color: '#b56b66' },
  'harrow':    { stats: { dano: 1, sobrevivencia: 5, suporte: 5, controle: 1, furtividade: 0, complexidade: 5 }, color: '#9aa334' },
  'nekros':    { stats: { dano: 0, sobrevivencia: 4, suporte: 3, controle: 2, furtividade: 0, complexidade: 1 }, color: '#5b3d7e' },
  'trinity':   { stats: { dano: 1, sobrevivencia: 4, suporte: 4, controle: 0, furtividade: 0, complexidade: 2 }, color: '#2289a6' },

  // Bastião
  'hildryn':   { stats: { dano: 2, sobrevivencia: 4, suporte: 2, controle: 3, furtividade: 0, complexidade: 3 }, color: '#3d6e88' },
  'inaros':    { stats: { dano: 1, sobrevivencia: 5, suporte: 0, controle: 4, furtividade: 0, complexidade: 1 }, color: '#c1701f' },
  'nezha':     { stats: { dano: 2, sobrevivencia: 4, suporte: 2, controle: 3, furtividade: 0, complexidade: 2 }, color: '#b03a2c' },

  // Tático
  'limbo':     { stats: { dano: 1, sobrevivencia: 2, suporte: 3, controle: 5, furtividade: 1, complexidade: 5 }, color: '#7e8a2e' },
  'titania':   { stats: { dano: 2, sobrevivencia: 1, suporte: 4, controle: 3, furtividade: 0, complexidade: 3 }, color: '#b56b66' },

  // Sussurro
  'wisp':      { stats: { dano: 2, sobrevivencia: 2, suporte: 4, controle: 2, furtividade: 3, complexidade: 2 }, color: '#92a8b8' },

  // Sabotador
  'loki':      { stats: { dano: 0, sobrevivencia: 2, suporte: 1, controle: 4, furtividade: 4, complexidade: 4 }, color: '#5b3d7e' },

  // Paladino
  'dante':     { stats: { dano: 4, sobrevivencia: 4, suporte: 4, controle: 2, furtividade: 0, complexidade: 3 }, color: '#9788b5' },
  'jade':      { stats: { dano: 3, sobrevivencia: 3, suporte: 5, controle: 2, furtividade: 0, complexidade: 2 }, color: '#9aa334' },
  'protea':    { stats: { dano: 4, sobrevivencia: 3, suporte: 3, controle: 1, furtividade: 0, complexidade: 4 }, color: '#c1701f' },
  'styanax':   { stats: { dano: 3, sobrevivencia: 4, suporte: 3, controle: 1, furtividade: 0, complexidade: 1 }, color: '#2c7891' },

  // Gladiador
  'yareli':    { stats: { dano: 3, sobrevivencia: 3, suporte: 0, controle: 3, furtividade: 0, complexidade: 2 }, color: '#2d6cb0' },
  'zephyr':    { stats: { dano: 5, sobrevivencia: 3, suporte: 1, controle: 3, furtividade: 0, complexidade: 3 }, color: '#92a8b8' },

  // Predador
  'oraxia':    { stats: { dano: 3, sobrevivencia: 3, suporte: 1, controle: 2, furtividade: 3, complexidade: 3 }, color: '#7e8a2e' },

  // Estrategista
  'follie':    { stats: { dano: 4, sobrevivencia: 2, suporte: 5, controle: 3, furtividade: 0, complexidade: 4 }, color: '#b56b66' },
  'volt':      { stats: { dano: 3, sobrevivencia: 2, suporte: 3, controle: 3, furtividade: 0, complexidade: 1 }, color: '#2289a6' },

  // Clérigo
  'caliban':   { stats: { dano: 2, sobrevivencia: 3, suporte: 3, controle: 3, furtividade: 0, complexidade: 3 }, color: '#5a8a9c' },
  'oberon':    { stats: { dano: 2, sobrevivencia: 4, suporte: 4, controle: 3, furtividade: 0, complexidade: 1 }, color: '#7e8a2e' },

  // Generalista
  'equinox':   { stats: { dano: 3, sobrevivencia: 4, suporte: 5, controle: 3, furtividade: 0, complexidade: 5 }, color: '#9788b5' },
  'octavia':   { stats: { dano: 5, sobrevivencia: 0, suporte: 4, controle: 3, furtividade: 3, complexidade: 0 }, color: '#c1701f' },

  // Rework
  'banshee':   { stats: { dano: 2, sobrevivencia: 0, suporte: 1, controle: 2, furtividade: 2, complexidade: 1 }, color: '#9aa334' },
};

// Detalhes ricos: título, descrição e habilidades. Preenchido incrementalmente.
const WARFRAMES_DETAILS = {
  'octavia': {
    title: 'A Maestra',
    description: 'Bárdica do Sistema Origem: compõe ritmos no Mandacorde que provocam inimigos, encantam multidões, amplificam o dano da equipe e regeneram energia. Cada habilidade reproduz uma seção da música montada pelo jogador.',
    portraits: { base: 'assets/icons/base/octavia.png', prime: 'assets/icons/prime/octavia.png' },
    abilities: [
      { type: 'passive', name: 'Inspiração', icon: 'assets/abilities/octavia/passive.png', description: 'Ao ativar qualquer habilidade, Octavia e aliados em até 15 m ganham o buff Inspiração: 1 de energia por segundo durante 30 segundos. Recastar uma habilidade renova a duração.' },
      { name: 'Mallet', icon: 'assets/abilities/octavia/mallet.png', description: 'Arremessa um dispositivo flutuante e invulnerável que toca a Percussão da música. Provoca inimigos próximos a atacá-lo e devolve o dano absorvido como Explosão, distribuído entre as batidas do ritmo.' },
      { name: 'Resonator', icon: 'assets/abilities/octavia/resonator.png', description: 'Solta uma esfera rolante que toca o Baixo e encanta inimigos a segui-la — quanto mais seguidores, maior o raio. Se houver um Mallet ativo, o Resonator o carrega consigo, combinando atração e dano.' },
      { name: 'Metronome', icon: 'assets/abilities/octavia/metronome.png', description: 'Cria uma aura de Melodia que dá armadura aos aliados dentro dela. Ações sincronizadas com o ritmo concedem buffs: pulo (Vivace — velocidade), agachar (Nocturne — invisibilidade), atirar (Opera — multidisparo) e corpo a corpo (Forte — dano de melee).' },
      { name: 'Amp', icon: 'assets/abilities/octavia/amp.png', description: 'Lança um amplificador que transforma o chão num campo sonoro de 8–14 m. Aliados dentro dele recebem bônus de dano de arma proporcional ao som ambiente — tiros, passos, alarmes e as próprias habilidades alimentam o multiplicador.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Blueprint principal e Mandachord obtidos na quest Octavia\'s Anthem. Cópias adicionais custam 25.000 (Mandachord) ou 50.000 (principal) de standing com o Cephalon Simaris.',
      parts: 'Chassis da Music Puzzle em Lua (100% garantido). Neuroptics da Rotação C de Terrorem Survival, Deimos (22,56%). Sistemas de A Rotation Cache de Plato, Lua (22,56%).',
      alternative: 'Também disponível no Circuit (Duviri) quando a Octavia está na rotação: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Sistemas), Tier 10 (Blueprint principal).',
      recommended_farm: 'Resolva a Music Puzzle de Lua uma vez pelo Chassis; faça Terrorem (Deimos) e Plato (Lua) pelas outras partes.',
    },
  },
  'follie': {
    title: 'A Sombrigrafista',
    description: 'Artista macabra de tintas e pantomima, Follie controla o campo com manchas de tinta que confundem inimigos. Mistura suporte travesso com armadilhas teatrais.',
    portraits: { base: 'assets/icons/base/follie.png' },
    abilities: [
      { type: 'passive', name: 'Mancha de Tinta', icon: 'assets/abilities/follie/passive.png', description: 'Habilidades respingam tinta nos inimigos, deixando-os lentos por um tempo. Alvos manchados têm chance de soltar orbes de saúde e energia ao morrer.' },
      { name: 'Forced Perspective', icon: 'assets/abilities/follie/forced-perspective.png', description: 'Mergulha em uma poça de tinta para reaparecer em outro ponto. Durante a transição fica invulnerável e limpa efeitos de status ativos.' },
      { name: 'Shadowgraph', icon: 'assets/abilities/follie/shadowgraph.png', description: 'Esboça ferramentas e equipamentos à existência, conjurando itens úteis. Algumas das criações são exclusivas do tipo de missão atual.' },
      { name: 'Self Portrait', icon: 'assets/abilities/follie/self-portrait.png', description: 'Pinta um clone de tinta que serve de isca para os inimigos. Enquanto o retrato persiste, Follie recebe redução de dano.' },
      { name: 'Plein Air', icon: 'assets/abilities/follie/plein-air.png', description: 'Amarra inimigos a balões que os erguem pelos ares, removendo armadura e escudos. Estourar o balão derruba o alvo em queda fatal.' },
    ],
    acquisition: {
      source_type: 'enemy_drop',
      blueprint: 'Blueprint principal dropa da Rotação A de Follie\'s Hunt em Vesper Relay, Vênus (5% normal, 6% Steel Path). Requer Chains of Harrow.',
      parts: 'Blueprints de componentes também droppam da Rotação A de Follie\'s Hunt a 5% (6% no Steel Path) cada.',
      alternative: 'Alternativamente, compre com o Aspirant Zorba em qualquer relay usando Atramentum obtido em Follie\'s Hunt (400 por componente, 1200 para o principal; 2400 no total).',
      recommended_farm: 'Vesper Relay / Vênus — Follie\'s Hunt no Steel Path para drop chance melhor e Atramentum mais rápido.',
    },
  },
  'volt': {
    title: 'O Fio Vivo',
    description: 'Especialista em eletricidade, Volt acelera aliados, ergue barreiras de energia e libera descargas devastadoras. Versátil entre dano, suporte e defesa.',
    portraits: { base: 'assets/icons/base/volt.png', prime: 'assets/icons/prime/volt.png' },
    abilities: [
      { type: 'passive', name: 'Carga Estática', icon: 'assets/abilities/volt/passive.png', description: 'Movimentar-se pelo chão acumula carga elétrica em Volt. A energia armazenada é liberada no próximo ataque, somando-se ao dano.' },
      { name: 'Shock', icon: 'assets/abilities/volt/shock.png', description: 'Dispara um projétil elétrico que salta entre inimigos próximos. Excelente para atordoar grupos e iniciar combos elétricos.' },
      { name: 'Speed', icon: 'assets/abilities/volt/speed.png', description: 'Concede um surto de velocidade para Volt e aliados próximos. Aumenta movimentação, velocidade de ataque e de recarga.' },
      { name: 'Electric Shield', icon: 'assets/abilities/volt/electric-shield.png', description: 'Cria uma barreira portátil que bloqueia disparos inimigos. Tiros aliados que atravessam o escudo ganham dano elétrico bônus e crítico.' },
      { name: 'Discharge', icon: 'assets/abilities/volt/discharge.png', description: 'Eletrifica inimigos em uma área, transformando-os em torres viventes. Eles paralisam e eletrocutam outros adversários ao redor.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Uma das três warframes iniciais disponíveis na quest Awakening. Blueprints também podem ser pesquisadas no Tenno Lab no Dojo.',
      parts: 'Componentes obtidos via pesquisa no Tenno Lab (Dojo) e construídos na Foundry.',
      alternative: 'Volt também pode ser comprado pronto do Teshin por 60.000 standing do Conclave após atingir o rank Typhoon.',
      recommended_farm: 'Escolha o Volt como sua warframe inicial, ou pesquise-o no Tenno Lab do Dojo.',
    },
  },
  'caliban': {
    title: 'O Sobrevivente',
    description: 'Híbrido de Warframe e Sentiente, Caliban combina disrupção de batalha com adaptabilidade. Vulnerabiliza alvos enquanto sustenta a si mesmo e aos aliados.',
    portraits: { base: 'assets/icons/base/caliban.png', prime: 'assets/icons/prime/caliban.png' },
    abilities: [
      { type: 'passive', name: 'Adaptação Sentiente', icon: 'assets/abilities/caliban/passive.png', description: 'Aliados em alcance de afinidade ganham resistência aos tipos de dano que estão recebendo. A adaptação se ajusta conforme as ameaças no campo.' },
      { name: 'Razor Gyre', icon: 'assets/abilities/caliban/razor-gyre.png', description: 'Investe girando em alta velocidade, atravessando inimigos com lâminas de energia. Restaura saúde, escudos e energia conforme acerta alvos.' },
      { name: 'Sentient Wrath', icon: 'assets/abilities/caliban/sentient-wrath.png', description: 'Golpeia o solo liberando uma onda que suspende inimigos no ar. Os alvos atingidos ficam vulneráveis a dano amplificado.' },
      { name: 'Lethal Progeny', icon: 'assets/abilities/caliban/lethal-progeny.png', description: 'Invoca companheiros Sentientes que atacam corpo-a-corpo, à distância ou distraem. Eles também regeneram escudos dos aliados próximos.' },
      { name: 'Fusion Strike', icon: 'assets/abilities/caliban/fusion-strike.png', description: 'Converge feixes de energia em um único ponto, removendo escudos e armadura. Deixa para trás um campo residual que continua a causar dano.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Blueprint principal comprada no Mercado. Aquisição liberada após completar a quest The New War.',
      parts: 'Blueprints de componentes droppam das Narmer Bounties (Cetus ou Fortuna, Lvl 50-70) como drop incomum. O componente disponível roda aleatoriamente a cada 2,5 horas. Taxas em torno de 5,45-8,11% por stage.',
      recommended_farm: 'Faça Narmer Bounties Lvl 50-70 Stages 2 & 3 — ~12 stages esperados por componente.',
    },
  },
  'oberon': {
    title: 'O Místico',
    description: 'Paladino da floresta, Oberon equilibra zelo ofensivo com cura e proteção. Consagra o terreno em favor dos aliados e pune os inimigos com radiação.',
    portraits: { base: 'assets/icons/base/oberon.png', prime: 'assets/icons/prime/oberon.png' },
    abilities: [
      { type: 'passive', name: 'Negação Justa', icon: 'assets/abilities/oberon/passive.png', description: 'Coletar orbes de saúde concede a Oberon e aliados próximos invulnerabilidade breve. O efeito bloqueia o próximo dano recebido e pode se acumular.' },
      { name: 'Smite', icon: 'assets/abilities/oberon/smite.png', description: 'Lança um projétil de radiação contra um alvo, removendo armadura e Overguard. Causa dano percentual e gera fragmentos que perseguem inimigos próximos.' },
      { name: 'Hallowed Ground', icon: 'assets/abilities/oberon/hallowed-ground.png', description: 'Consagra o chão à frente, infligindo radiação em inimigos sobre ele. Aliados na área ficam imunes a status e têm efeitos negativos removidos.' },
      { name: 'Renewal', icon: 'assets/abilities/oberon/renewal.png', description: 'Envia ondas curativas que restauram a vida dos aliados próximos. Também aumenta armadura e prolonga o tempo de recuperação ao serem derrubados.' },
      { name: 'Reckoning', icon: 'assets/abilities/oberon/reckoning.png', description: 'Suspende inimigos no ar e os esmaga contra o solo, removendo armadura. Alvos sob radiação sofrem dano extra e há maior chance de soltarem orbes de saúde.' },
    ],
    acquisition: {
      source_type: 'railjack',
      blueprint: 'Comprado no Mercado.',
      parts: 'Componentes droppam de Points of Interest (caches) em missões Railjack/Empyrean. Neuroptics e Sistemas em Earth Proxima, Chassis em Saturn Proxima — 10% de chance cada por cache "A".',
      alternative: 'Disponível também no Circuit (Duviri) nas semanas em que Oberon está na rotação: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Sistemas), Tier 10 (Blueprint principal).',
      recommended_farm: 'Earth Proxima cobre 2 dos 3 componentes (Neuroptics + Sistemas). Pra evitar RNG, Circuit garante drops tier-based quando Oberon estiver disponível.',
    },
  },
  'equinox': {
    title: 'A Dualidade',
    description: 'Espelho de dia e noite, Equinox alterna entre forma ofensiva e defensiva conforme a situação. Adapta seu suporte para fortalecer aliados ou enfraquecer inimigos.',
    portraits: { base: 'assets/icons/base/equinox.png', prime: 'assets/icons/prime/equinox.png', variants: [{ key: 'day', label: 'Day' }, { key: 'night', label: 'Night' }] },
    abilities: [
      { type: 'passive', name: 'Equilíbrio', icon: 'assets/abilities/equinox/passive.png', description: 'Parte dos orbes de saúde coletados é convertida em energia, e parte dos orbes de energia em saúde. O equilíbrio entre recursos acompanha o tema dual da Warframe.' },
      { name: 'Metamorphosis', icon: 'assets/abilities/equinox/metamorphosis.png', description: 'Alterna entre a forma Diurna e Noturna. A forma Diurna eleva dano de armas e velocidade; a Noturna reforça armadura e escudos.' },
      { name: 'Rest & Rage', icon: 'assets/abilities/equinox/rest-rage.png', description: 'Em forma Noturna (Rest), embala inimigos em sono profundo. Em forma Diurna (Rage), aplica vulnerabilidade ao dano em alvos enfurecidos.' },
      { name: 'Pacify & Provoke', icon: 'assets/abilities/equinox/pacify-provoke.png', description: 'Em forma Noturna (Pacify), uma aura reduz o dano causado pelos inimigos próximos. Em forma Diurna (Provoke), amplifica a força de habilidade dos aliados.' },
      { name: 'Mend & Maim', icon: 'assets/abilities/equinox/mend-maim.png', description: 'Em forma Noturna (Mend), inimigos abatidos restauram escudos e vida aliada. Em forma Diurna (Maim), acumula dano cortante das mortes para liberar em uma explosão devastadora.' },
    ],
    acquisition: {
      source_type: 'boss_drop',
      blueprint: 'Blueprint principal comprada no Mercado. Equinox requer construir tanto o Night Aspect quanto o Day Aspect (cada um com seus próprios Neuroptics, Chassis e Sistemas) antes de craftar.',
      parts: 'Todas as partes Day e Night Aspect droppam do assassinato do Tyl Regor em Titania, Urano. Blueprints de Aspect a 22,56% cada, blueprints de componentes a 25,81% cada.',
      recommended_farm: 'Titania / Urano — repita assassinatos do Tyl Regor; espere farm longo devido às 8 partes distintas necessárias.',
    },
  },
  'banshee': {
    title: 'A Sonora',
    description: 'Mestra do som, Banshee expõe pontos fracos inimigos e silencia armas no campo. Combina controle de massa acústico com amplificação de dano para a equipe.',
    portraits: { base: 'assets/icons/base/banshee.png', prime: 'assets/icons/prime/banshee.png' },
    abilities: [
      { type: 'passive', name: 'Silenciador', icon: 'assets/abilities/banshee/passive.png', description: 'Os disparos de Banshee são silenciados, impedindo que inimigos ouçam seus tiros. Facilita ataques furtivos e ganchos surpresa.' },
      { name: 'Sonic Boom', icon: 'assets/abilities/banshee/sonic-boom.png', description: 'Libera uma onda sônica concentrada à frente, arremessando inimigos. Pode remover armadura em variações modificadas pela Helminth.' },
      { name: 'Sonar', icon: 'assets/abilities/banshee/sonar.png', description: 'Detecta inimigos em ampla área e marca pontos fracos brilhantes em seus corpos. Acertos nesses pontos multiplicam drasticamente o dano causado.' },
      { name: 'Silence', icon: 'assets/abilities/banshee/silence.png', description: 'Emite uma aura que ensurdece inimigos próximos, atordoando-os. Enquanto silenciados, eles não conseguem chamar reforços nem usar habilidades especiais.' },
      { name: 'Sound Quake', icon: 'assets/abilities/banshee/sound-quake.png', description: 'Banshee crava as mãos no solo, gerando reverberações sísmicas contínuas. Inimigos na área cambaleiam sem parar enquanto recebem dano.' },
    ],
    acquisition: {
      source_type: 'dojo_research',
      blueprint: 'Todas as blueprints podem ser pesquisadas no Tenno Lab no Dojo.',
      parts: 'Componentes são obtidos via pesquisa no Tenno Lab e construídos na Foundry.',
    },
  },
  'ash': {
    title: 'O Assassino das Sombras',
    description: 'Patrono da escola Orokin de assassinato político, sua lâmina é sentida antes de ser vista. Mestre da furtividade e execução cirúrgica.',
    portraits: { base: 'assets/icons/base/ash.png', prime: 'assets/icons/prime/ash.png' },
    abilities: [
      { type: 'passive', name: 'Sangramento Aprimorado', icon: 'assets/abilities/ash/passive.png', description: 'Efeitos de status de Corte causados por Ash duram mais e infligem dano adicional, transformando cada ferida em uma sentença prolongada.' },
      { name: 'Shuriken', icon: 'assets/abilities/ash/shuriken.png', description: 'Arremessa lâminas teleguiadas que perseguem alvos e aplicam Corte. Ideal para abrir confrontos eliminando inimigos prioritários à distância.' },
      { name: 'Smoke Screen', icon: 'assets/abilities/ash/smoke-screen.png', description: 'Libera uma cortina de fumaça que torna Ash e aliados próximos invisíveis. Atordoa inimigos no raio e permite reposicionamento ou execuções furtivas.' },
      { name: 'Teleport', icon: 'assets/abilities/ash/teleport.png', description: 'Translada instantaneamente para um alvo, deixando-o vulnerável a um golpe de execução. Combina mobilidade e dano massivo em combate corpo a corpo.' },
      { name: 'Blade Storm', icon: 'assets/abilities/ash/blade-storm.png', description: 'Marca múltiplos inimigos para execução por clones sombrios. Ash desencadeia uma chacina coordenada que dizima grupos inteiros em segundos.' },
    ],
    acquisition: {
      source_type: 'railjack',
      blueprint: 'Blueprint principal comprada no Mercado.',
      parts: 'Blueprints de componentes droppam de missões de Railjack: Sistemas de Venus Proxima, Neuroptics de Neptune Proxima, Chassis de Pluto Proxima (Defense/Survival Rotação A em ~12,5-13,3%).',
      alternative: 'Também disponível no Circuit (Duviri) quando o Ash está na rotação: todas as blueprints obtidas ao alcançar recompensas de Tier 10.',
      recommended_farm: 'Faça Defense ou Survival no Proxima correspondente para cada componente — ~7-8 rotações A esperadas por parte.',
    },
  },
  'cyte-09': {
    title: 'O Atirador Fantasma',
    description: 'Marksman Orokin forjado para eliminações cirúrgicas a longa distância. Combina precisão letal com furtividade, desaparecendo após o disparo decisivo.',
    portraits: { base: 'assets/icons/base/cyte-09.png' },
    abilities: [
      { type: 'passive', name: 'Caçador de Pontos Fracos', icon: 'assets/abilities/cyte-09/passive.png', description: 'Cada abate em ponto fraco aumenta permanentemente a chance crítica em pontos fracos pelo restante da missão, recompensando mira impecável.' },
      { name: 'Seek', icon: 'assets/abilities/cyte-09/seek.png', description: 'Implanta uma antena que revela inimigos através de paredes e amplifica a vulnerabilidade dos pontos fracos. Também concede penetração às armas de Cyte-09.' },
      { name: 'Resupply', icon: 'assets/abilities/cyte-09/resupply.png', description: 'Solta pacotes de munição selecionáveis pela roda de equipamentos. Cada pacote impregna as armas aliadas com um bônus elemental escolhido.' },
      { name: 'Evade', icon: 'assets/abilities/cyte-09/evade.png', description: 'Ativa invisibilidade tática que se prolonga a cada abate em ponto fraco. Permite reposicionar para o próximo disparo perfeito sem ser detectado.' },
      { name: 'Neutralize', icon: 'assets/abilities/cyte-09/neutralize.png', description: 'Conjura o rifle de precisão exaltado Neutralizer. Tiros em pontos fracos ricocheteiam para inimigos próximos e o disparo alternativo lança granada de Gelo.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Blueprint principal obtida ao completar a quest The Hex.',
      parts: 'Blueprints de componentes droppam como recompensa incomum das Höllvania Central Mall Bounties: Chassis Lvl 65-70 (12,20%), Neuroptics Lvl 75-80 (11,63%), Sistemas Lvl 85-90 (13,33%).',
      alternative: 'Alternativamente, compre com o Amir do The Hex: blueprints de componentes por 20.000 de standing cada (Rank 2 - Fresh Slice) e blueprint principal por 50.000 de standing (Rank 4 - Hot & Fresh).',
      recommended_farm: 'Faça Höllvania Central Mall Bounties no nível apropriado para cada componente — ~7-8 stages cada.',
    },
  },
  'voruna': {
    title: 'A Loba Encarnada',
    description: 'Coração da matilha e caçadora de presas divinas, lidera quatro lobos espirituais em emboscadas devastadoras. Furtividade e fúria animal em uma única forma.',
    portraits: { base: 'assets/icons/base/voruna.png', prime: 'assets/icons/prime/voruna.png' },
    abilities: [
      { type: 'passive', name: 'Espíritos da Matilha', icon: 'assets/abilities/voruna/passive.png', description: 'Voruna nunca caça sozinha. Segurar cada habilidade invoca um dos lobos para conceder bônus únicos como velocidade, imunidade a status ou ressurreição automática.' },
      { name: 'Shroud of Dynar', icon: 'assets/abilities/voruna/shroud-of-dynar.png', description: 'Veste Voruna em sombras, concedendo invisibilidade e velocidade até o primeiro ataque. Após romper, garante chance crítica e status corpo a corpo elevados.' },
      { name: 'Fangs of Raksh', icon: 'assets/abilities/voruna/fangs-of-raksh.png', description: 'Salta sobre um alvo, aplicando cinco status aleatórios em camadas. Quando o inimigo morre, os efeitos se espalham para todos ao redor numa cadeia tóxica.' },
      { name: "Lycath's Hunt", icon: 'assets/abilities/voruna/lycaths-hunt.png', description: 'Abates corpo a corpo derrubam orbes de saúde garantidos e abates em headshot derrubam orbes de energia. Mantém a matilha sustentada em combate intenso.' },
      { name: "Ulfrun's Descent", icon: 'assets/abilities/voruna/ulfruns-descent.png', description: 'Entra em postura ofensiva com cinco cargas de salto explosivo. Cada abate amplia o dano, a chance crítica e o dano crítico das próximas investidas.' },
    ],
    acquisition: {
      source_type: 'enemy_drop',
      blueprint: 'Blueprint principal dropa da Rotação C de Conjunction Survival (Yuvarium/Circulus, Lua). Tier 2 12,24%, Tier 1 6,82%. Requer The War Within.',
      parts: 'Blueprints de componentes também droppam da Rotação C de Conjunction Survival: Tier 2 8,16%, Tier 1 4,55% cada.',
      alternative: 'Alternativamente, compre com a Archimedean Yonta no Chrysalith usando Lua Thrax Plasm de Conjunction Survival (75 por componente, 125 para o principal; 350 no total).',
      recommended_farm: 'Circulus / Lua Conjunction Survival no Steel Path — melhor taxa de Plasm/rotação; mate Hollow Thrax para Plasm extra.',
    },
  },
  'citrine': {
    title: 'O Bastião Cristalino',
    description: 'Seu poder cristalino sustenta os aliados no campo de batalha, transformando cada gema em escudo, prisma de status ou jaula afiada para os inimigos.',
    portraits: { base: 'assets/icons/base/citrine.png' },
    abilities: [
      { type: 'passive', name: 'Geoluminescência', icon: 'assets/abilities/citrine/passive.png', description: 'Aliados próximos regeneram saúde continuamente. Coletar orbes de saúde aumenta a taxa de regeneração, recompensando o time por se manter unido.' },
      { name: 'Fractured Blast', icon: 'assets/abilities/citrine/fractured-blast.png', description: 'Arremessa fragmentos de cristal que dilaceram um cone de inimigos. Alvos afetados deixam cair orbes de saúde e energia com chance ampliada quando abatidos.' },
      { name: 'Preserving Shell', icon: 'assets/abilities/citrine/preserving-shell.png', description: 'Envolve Citrine e aliados em uma barreira cristalina com redução de dano. A resistência cresce a cada inimigo abatido, recompensando combate sustentado.' },
      { name: 'Prismatic Gem', icon: 'assets/abilities/citrine/prismatic-gem.png', description: 'Conjura uma gema estacionária que dispara um raio rotativo aplicando Calor, Frio, Toxina e Eletricidade. Também amplifica chance e duração de status para o time.' },
      { name: 'Crystallize', icon: 'assets/abilities/citrine/crystallize.png', description: 'Provoca um impacto no solo que prende inimigos em formações cristalinas. Os cristais possuem chance crítica massiva, transformando o campo em zona de execução.' },
    ],
    acquisition: {
      source_type: 'enemy_drop',
      blueprint: 'Blueprint principal dropa da Rotação C de Mirror Defense em Tyana Pass, Marte (9,30%). Requer conclusão de Heart of Deimos.',
      parts: 'Blueprints de componentes também droppam da Rotação C de Mirror Defense Tyana Pass a 6,10% cada.',
      alternative: 'Alternativamente, compre as blueprints com o Otak no Necralisk usando Belric e Rania Crystal Fragments obtidos no Mirror Defense.',
      recommended_farm: 'Tyana Pass / Marte — Mirror Defense, foque na Rotação C; troque fragmentos com o Otak como suplemento.',
    },
  },
  'harrow': {
    title: 'O Monge do Vazio',
    description: 'Sufragante do Vazio, ritualista monástico que canaliza fé em proteção e fúria sagrada. Cada disparo aliado se torna oração, cada baixa se torna sacramento.',
    portraits: { base: 'assets/icons/base/harrow.png', prime: 'assets/icons/prime/harrow.png' },
    abilities: [
      { type: 'passive', name: 'Fé Inquebrantável', icon: 'assets/abilities/harrow/passive.png', description: 'Capacidade máxima de sobrescudos dobrada e missões começam com energia cheia. A devoção de Harrow se manifesta como proteção e recursos constantes.' },
      { name: 'Condemn', icon: 'assets/abilities/harrow/condemn.png', description: 'Lança correntes que imobilizam inimigos em linha reta. Cada alvo aprisionado recarrega instantaneamente os escudos de Harrow, criando defesa a partir do ataque.' },
      { name: 'Penance', icon: 'assets/abilities/harrow/penance.png', description: 'Sacrifica escudos para conceder a Harrow e aliados aumento massivo de cadência, recarga e roubo de vida. Quanto mais escudos perdidos, maior a recompensa.' },
      { name: 'Thurible', icon: 'assets/abilities/harrow/thurible.png', description: 'Canaliza um ritual sagrado que armazena energia. Ao liberar, abates concedem energia aos aliados, com headshots multiplicando a oferenda.' },
      { name: 'Covenant', icon: 'assets/abilities/harrow/covenant.png', description: 'Torna Harrow e aliados invulneráveis por breves instantes. O dano absorvido é convertido em chance crítica massiva, amplificada ainda mais em headshots.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Blueprint principal obtida ao completar a quest Chains of Harrow. Cópias adicionais custam 50.000 de standing com o Cephalon Simaris.',
      parts: 'Chassis dropa de inimigos Corrupted em Void Fissure (3%). Neuroptics da Rotação A de Spy em Pago, Kuva Fortress (16,67%). Sistemas das Rotações B/C de Defection e Rotação C de Kuva Survival. Ambos podem vir do Kuva Survival C em Taveuni.',
      alternative: 'Também disponível no Circuit (Duviri) quando o Harrow está na rotação: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Sistemas), Tier 10 (Blueprint principal).',
      recommended_farm: 'Pago Spy para Neuroptics; Kuva Survival em Taveuni para Sistemas; qualquer Void Fissure para Chassis.',
    },
  },
  'nekros': {
    title: 'O Manipulador de Almas',
    description: 'Necromante das fileiras Orokin, comanda mortos e semeia terror entre os vivos. Cada cadáver é recurso, cada inimigo é potencial servo das sombras.',
    portraits: { base: 'assets/icons/base/nekros.png', prime: 'assets/icons/prime/nekros.png' },
    abilities: [
      { type: 'passive', name: 'Colheita Sombria', icon: 'assets/abilities/nekros/passive.png', description: 'Cada inimigo abatido por perto restaura saúde a Nekros. A morte alheia o sustenta, transformando o caos do combate em fonte contínua de vitalidade.' },
      { name: 'Soul Punch', icon: 'assets/abilities/nekros/soul-punch.png', description: 'Golpeia um inimigo com força necromântica, podendo eliminar alvos enfraquecidos. Mortos por esse golpe podem retornar como aliados sombrios temporários.' },
      { name: 'Terrify', icon: 'assets/abilities/nekros/terrify.png', description: 'Emana uma onda de pavor que faz inimigos próximos fugirem e remove parte de sua armadura. Cria caos instantâneo e abre alvos para execução fácil.' },
      { name: 'Desecrate', icon: 'assets/abilities/nekros/desecrate.png', description: 'Consome cadáveres próximos para gerar orbes de saúde e chances extras de loot. Habilidade essencial para farm prolongado e sustentação do esquadrão.' },
      { name: 'Shadows of the Dead', icon: 'assets/abilities/nekros/shadows-of-the-dead.png', description: 'Invoca cópias sombrias dos últimos inimigos abatidos para lutar ao seu lado. Cria um exército pessoal que herda as habilidades dos mortos.' },
    ],
    acquisition: {
      source_type: 'boss_drop',
      blueprint: 'Blueprint principal comprada no Mercado.',
      parts: 'Blueprints de componentes droppam do assassinato do Lephantis em Magnacidium, Deimos a 33,33% cada.',
      alternative: 'Também disponível no Circuit (Duviri) quando o Nekros está na rotação: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Sistemas), Tier 10 (Blueprint principal).',
      recommended_farm: 'Magnacidium / Deimos Lephantis — ~17 kills garantem cada componente.',
    },
  },
  'trinity': {
    title: 'A Curandeira Equalizadora',
    description: 'Médica de combate que mantém aliados de pé contra qualquer inimigo. Suas bênçãos transformam dano em sobrevivência e energia em vitória.',
    portraits: { base: 'assets/icons/base/trinity.png', prime: 'assets/icons/prime/trinity.png' },
    abilities: [
      { type: 'passive', name: 'Vínculo Vital', icon: 'assets/abilities/trinity/passive.png', description: 'Aliados no alcance de afinidade recebem parte da energia máxima de Trinity convertida em saúde. Sua presença fortalece todos ao redor permanentemente.' },
      { name: 'Well of Life', icon: 'assets/abilities/trinity/well-of-life.png', description: 'Suspende um inimigo no ar como fonte vital. Aliados próximos recebem cura, roubo de vida e imunidade a status enquanto atacam o alvo amaldiçoado.' },
      { name: 'Energy Vampire', icon: 'assets/abilities/trinity/energy-vampire.png', description: 'Marca um inimigo como fonte de energia, emitindo pulsos que recarregam aliados. Caso o alvo morra antes do fim, libera toda energia restante de uma vez.' },
      { name: 'Link', icon: 'assets/abilities/trinity/link.png', description: 'Conecta Trinity aos inimigos próximos, redirecionando o dano recebido para eles. Transforma-a em fortaleza ambulante imune a quase tudo.' },
      { name: 'Blessing', icon: 'assets/abilities/trinity/blessing.png', description: 'Emite uma onda restauradora que enche saúde e escudos de todos os aliados. Concede também redução de dano massiva pelo tempo do efeito.' },
    ],
    acquisition: {
      source_type: 'boss_drop',
      blueprint: 'Blueprint principal comprada no Mercado.',
      parts: 'Blueprints de componentes droppam do assassinato do Ambulas em Hades, Plutão. Taxas: Neuroptics 38,72%, Chassis 38,72%, Sistemas 22,56%.',
      alternative: 'Também disponível no Circuit (Duviri) quando a Trinity está na rotação: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Sistemas), Tier 10 (Blueprint principal).',
      recommended_farm: 'Plutão / Hades — assassinato do Ambulas; ~14 kills garantem Neuroptics/Chassis.',
    },
  },
  'dagath': {
    title: 'A Cavaleira Espectral',
    description: 'Uma antiga Dax cavalariana renascida como espírito vingativo, Dagath cavalga ao lado de sua égua fantasmagórica Rakhali para ceifar almas com ódio implacável.',
    portraits: { base: 'assets/icons/base/dagath.png' },
    abilities: [
      { type: 'passive', name: 'Colheita Sombria', icon: 'assets/abilities/dagath/passive.png', description: 'Orbes de Energia e Vida têm chance de serem muito mais eficazes quando coletados, sustentando sua cavalgada incessante.' },
      { name: 'Wyrd Scythes', icon: 'assets/abilities/dagath/skill1.png', description: 'Dispara foices espectrais que aplicam status Viral e desaceleram os inimigos atingidos.' },
      { name: 'Doom', icon: 'assets/abilities/dagath/skill2.png', description: 'Amaldiçoa inimigos com uma foice fantasmagórica que acumula o dano sofrido e o libera de volta como dano adicional.' },
      { name: 'Grave Spirit', icon: 'assets/abilities/dagath/skill3.png', description: 'Aumenta o Dano Crítico das armas e permite que Dagath enganhe a morte uma vez. Inimigos mortos garantem queda de Orbes de Vida.' },
      { name: "Rakhali's Cavalry", icon: 'assets/abilities/dagath/skill4.png', description: 'Invoca uma cavalgada de Kaithes fantasmagóricos que avançam pelo campo, removendo escudos e armadura dos inimigos.' },
    ],
    acquisition: {
      source_type: 'dojo_research',
      blueprint: 'Todas as blueprints obtidas no Dagath\'s Hollow no Clan Dojo (sem necessidade de pesquisa, disponível após construção da sala).',
      parts: 'Componentes requerem 102 Vainthorns no total, obtidos na Abyssal Zone em Ceres — acessada via Abyssal Beacons (Faction Syndicate Rank 2, 5.000 de standing). Cada clear dá 6-8 Vainthorns (8-12 no Steel Path).',
      recommended_farm: 'Acumule Abyssal Beacons em qualquer Faction Syndicate e faça a Abyssal Zone no Steel Path para máximo de Vainthorns por run.',
    },
  },
  'excalibur': {
    title: 'O Espadachim Radiante',
    description: 'Mestre da lâmina e da arma de fogo, Excalibur é um guerreiro versátil cuja maestria com espadas o torna uma escolha lendária entre os Tenno.',
    portraits: { base: 'assets/icons/base/excalibur.png', prime: 'assets/icons/prime/excalibur.png' },
    abilities: [
      { type: 'passive', name: 'Maestria da Espada', icon: 'assets/abilities/excalibur/passive.png', description: 'Aumenta o dano e a velocidade de ataque ao empunhar espadas, espadas duplas, nikanas ou rapiers.' },
      { name: 'Slash Dash', icon: 'assets/abilities/excalibur/skill1.png', description: 'Avança em alta velocidade cortando todos os inimigos no caminho com golpes precisos de lâmina.' },
      { name: 'Radial Blind', icon: 'assets/abilities/excalibur/skill2.png', description: 'Libera um flash de luz ofuscante que cega os inimigos próximos, deixando-os vulneráveis a ataques furtivos.' },
      { name: 'Radial Javelin', icon: 'assets/abilities/excalibur/skill3.png', description: 'Lança dardos de energia em todas as direções, empalando e eliminando os inimigos ao redor.' },
      { name: 'Exalted Blade', icon: 'assets/abilities/excalibur/skill4.png', description: 'Conjura uma espada etérea exaltada que corta de perto e dispara ondas de energia a distância.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Uma das três warframes iniciais disponíveis na quest Awakening. Blueprint principal também pode ser comprada no Mercado.',
      parts: 'Blueprints de componentes droppam do Lieutenant Lech Kril em War, Marte. Taxas: Neuroptics 38,72%, Chassis 38,72%, Sistemas 22,56%.',
      alternative: 'Também disponível no Circuit (Duviri): Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Sistemas), Tier 10 (Principal). Versão pronta pode ser comprada do Teshin por 60.000 standing do Conclave.',
      recommended_farm: 'War / Marte — assassinato rápido do Lech Kril, ~14 kills garantem Neuroptics/Chassis.',
    },
  },
  'garuda': {
    title: 'A Rainha do Sangue',
    description: 'Banhada pelo sangue de seus inimigos, Garuda transforma a vulnerabilidade em força bruta, alternando entre carnificina implacável e sustentação por meio da própria vida.',
    portraits: { base: 'assets/icons/base/garuda.png', prime: 'assets/icons/prime/garuda.png' },
    abilities: [
      { type: 'passive', name: 'Fúria Sanguinária', icon: 'assets/abilities/garuda/passive.png', description: 'Quanto menor sua vida, maior o dano causado. Sem arma corpo a corpo equipada, ela luta com suas mortais Garras de Garuda.' },
      { name: 'Dread Mirror', icon: 'assets/abilities/garuda/skill1.png', description: 'Lança-se sobre um inimigo para drenar sua força vital, formando um escudo protetor e um coração arremessável.' },
      { name: 'Blood Altar', icon: 'assets/abilities/garuda/skill2.png', description: 'Empala um alvo criando um altar sangrento que cura Garuda e aliados próximos ao longo do tempo.' },
      { name: 'Bloodletting', icon: 'assets/abilities/garuda/skill3.png', description: 'Sacrifica parte da própria vida para regenerar energia, sustentando sua sede insaciável de poder.' },
      { name: 'Seeking Talons', icon: 'assets/abilities/garuda/skill4.png', description: 'Carrega e libera uma rajada de talões letais que perseguem inimigos e aplicam dano de Corte, devastando alvos feridos.' },
    ],
    acquisition: {
      source_type: 'fortuna_offerings',
      blueprint: 'Blueprint principal obtida ao completar a quest Vox Solaris. Cópias adicionais custam 50.000 de standing com o Cephalon Simaris.',
      parts: 'Blueprints de componentes droppam das Fortuna Bounties no Orb Vallis: Chassis em Lvl 5-15, Sistemas em Lvl 10-30, Neuroptics em Lvl 20-40 (final stages ~22,50-27,60%).',
      alternative: 'Também disponível no Circuit (Duviri) quando a Garuda está na rotação: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Sistemas), Tier 10 (Blueprint principal).',
      recommended_farm: 'Orb Vallis — faça a Fortuna Bounty do nível apropriado para cada componente; final stages têm as melhores chances.',
    },
  },
  'mesa': {
    title: 'A Pistoleira Errante',
    description: 'Vagabunda das estrelas com as armas mais rápidas do sistema, Mesa é uma pistoleira mortal especializada em rajadas balísticas e duelos relâmpagos.',
    portraits: { base: 'assets/icons/base/mesa.png', prime: 'assets/icons/prime/mesa.png' },
    abilities: [
      { type: 'passive', name: 'Pistoleira Nata', icon: 'assets/abilities/mesa/passive.png', description: 'Aumenta a cadência de tiro com armas secundárias duplas e a velocidade de recarga com secundárias únicas. Recebe vida extra sem arma corpo a corpo equipada.' },
      { name: 'Ballistic Battery', icon: 'assets/abilities/mesa/skill1.png', description: 'Armazena uma porção do dano causado e libera tudo de uma vez no próximo disparo, transformando-o em um tiro devastador.' },
      { name: 'Shooting Gallery', icon: 'assets/abilities/mesa/skill2.png', description: 'Cria uma aura rotativa que amplifica o dano das armas dos aliados enquanto trava armas inimigas e atordoa atacantes corpo a corpo próximos.' },
      { name: 'Shatter Shield', icon: 'assets/abilities/mesa/skill3.png', description: 'Envolve Mesa em uma barreira que reduz drasticamente o dano de tiros recebidos e reflete projéteis de volta.' },
      { name: 'Peacemaker', icon: 'assets/abilities/mesa/skill4.png', description: 'Saca suas Regulators exaltadas e dispara rajadas precisas e mortais. Imobiliza Mesa, mas transforma-a em uma máquina de eliminação.' },
    ],
    acquisition: {
      source_type: 'boss_drop',
      blueprint: 'Blueprint principal comprada no Mercado.',
      parts: 'Blueprints de componentes droppam do assassinato do Mutalist Alad V em Eris (requer Mutalist Alad V Nav Coordinates e a quest Patient Zero). Taxas: Neuroptics 38,72%, Chassis 38,72%, Sistemas 22,56%.',
      alternative: 'Também disponível no Circuit (Duviri) quando a Mesa está na rotação: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Sistemas), Tier 10 (Blueprint principal).',
      recommended_farm: 'Farme Mutalist Alad V Nav Coordinates em Infested Invasions, depois faça o assassinato em Eris. ~14 kills garantem Neuroptics/Chassis.',
    },
  },
  'mirage': {
    title: 'A Conjuradora Sagaz',
    description: 'Ilusionista travessa que manipula luz e sombra, Mirage confunde o campo de batalha com clones, espelhos e armadilhas, fazendo o inimigo duvidar dos próprios sentidos.',
    portraits: { base: 'assets/icons/base/mirage.png', prime: 'assets/icons/prime/mirage.png' },
    abilities: [
      { type: 'passive', name: 'Acrobata Ilusionista', icon: 'assets/abilities/mirage/passive.png', description: 'Deslizes duram mais tempo e manobras acrobáticas são executadas com mais velocidade.' },
      { name: 'Hall of Mirrors', icon: 'assets/abilities/mirage/skill1.png', description: 'Cria clones holográficos que imitam seus movimentos e disparam junto, dividindo a atenção e o dano inimigo.' },
      { name: 'Sleight of Hand', icon: 'assets/abilities/mirage/skill2.png', description: 'Transforma objetos próximos em armadilhas explosivas e solta uma gema isca que atrai inimigos antes de detonar.' },
      { name: 'Eclipse', icon: 'assets/abilities/mirage/skill3.png', description: 'Dependendo da iluminação, concede dano amplificado na luz ou redução de dano na sombra, adaptando-se ao ambiente.' },
      { name: 'Prism', icon: 'assets/abilities/mirage/skill4.png', description: 'Lança um prisma flutuante que dispara feixes de luz contra os inimigos e detona em um clarão cegante ao final.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Blueprint principal comprada no Mercado.',
      parts: 'Blueprints de componentes obtidas no fim de cada missão da quest Hidden Messages. Cópias adicionais custam 25.000 de standing com o Cephalon Simaris.',
      alternative: 'Também disponível no Circuit (Duviri) quando a Mirage está na rotação: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Sistemas), Tier 10 (Blueprint principal).',
      recommended_farm: 'Complete a quest Hidden Messages para obter todas as partes.',
    },
  },
  'saryn': {
    title: 'A Pestilência Letal',
    description: 'Esquiva e mortal, Saryn dissemina doenças, venenos e contágios que se espalham em ondas devastadoras, dizimando grupos inteiros de inimigos.',
    portraits: { base: 'assets/icons/base/saryn.png', prime: 'assets/icons/prime/saryn.png' },
    abilities: [
      { type: 'passive', name: 'Contágio Persistente', icon: 'assets/abilities/saryn/passive.png', description: 'Aumenta a duração dos efeitos de status aplicados em inimigos, prolongando o sofrimento de suas vítimas.' },
      { name: 'Spores', icon: 'assets/abilities/saryn/skill1.png', description: 'Infecta um alvo com esporos corrosivos que se propagam para inimigos próximos quando o hospedeiro é atingido ou morto.' },
      { name: 'Molt', icon: 'assets/abilities/saryn/skill2.png', description: 'Despoja a pele para remover efeitos de status, ganhar velocidade e deixar um chamariz que distrai os inimigos.' },
      { name: 'Toxic Lash', icon: 'assets/abilities/saryn/skill3.png', description: 'Imbui suas armas com Toxina, amplificada no corpo a corpo, e detona esporos já aplicados em inimigos atingidos.' },
      { name: 'Miasma', icon: 'assets/abilities/saryn/skill4.png', description: 'Libera uma onda de choque Viral que devasta inimigos infectados e ajuda a propagar ainda mais seus esporos.' },
    ],
    acquisition: {
      source_type: 'boss_drop',
      blueprint: 'Blueprint principal comprada no Mercado.',
      parts: 'Blueprints de componentes droppam do assassinato da Kela De Thaym em Merrow, Sedna. Taxas: Neuroptics 38,72%, Chassis 38,72%, Sistemas 22,56%.',
      alternative: 'Também disponível no Circuit (Duviri) quando a Saryn está na rotação: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Sistemas), Tier 10 (Blueprint principal).',
      recommended_farm: 'Sedna / Merrow — assassinato da Kela De Thaym; ~14 kills garantem Neuroptics/Chassis.',
    },
  },
  'sevagoth': {
    title: 'O Ceifador Espectral',
    description: 'Espectro etéreo da morte, Sevagoth comanda sua própria sombra para ceifar almas em batalha, alternando entre corpo físico e forma fantasmagórica.',
    portraits: { base: 'assets/icons/base/sevagoth.png', prime: 'assets/icons/prime/sevagoth.png', variants: [{ key: 'shadow', label: 'Shadow' }] },
    abilities: [
      { type: 'passive', name: 'Ressurreição Sombria', icon: 'assets/abilities/sevagoth/passive.png', description: 'Ao cair em combate, Sevagoth assume a forma de sua Sombra e precisa coletar almas de inimigos para reerguer sua lápide e ressuscitar.' },
      { name: 'Reap', icon: 'assets/abilities/sevagoth/skill1.png', description: 'Envia sua Sombra para a frente, atingindo inimigos e aplicando vulnerabilidade ao dano nos alvos tocados.' },
      { name: 'Sow', icon: 'assets/abilities/sevagoth/skill2.png', description: 'Planta sementes da morte em inimigos que causam dano contínuo e detonam quando atingidas por Reap.' },
      { name: 'Gloom', icon: 'assets/abilities/sevagoth/skill3.png', description: 'Cria uma aura sombria que desacelera inimigos próximos e concede roubo de vida a cada eliminação.' },
      { name: 'Exalted Shadow', icon: 'assets/abilities/sevagoth/skill4.png', description: 'Cede o controle à sua Sombra exaltada, que empunha Garras Sombrias e possui um arsenal próprio de habilidades fantasmagóricas.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Blueprint principal obtida ao completar a quest Call of the Tempestarii. Cópias adicionais custam 50.000 de standing com o Cephalon Simaris.',
      parts: 'Blueprints de componentes têm 10% de bonus drop chance no fim de missões Void Storm: Neptune Proxima (Meso/Neo, 9,52%), Pluto Proxima (Neo, 10%), Veil Proxima (Axi, 10%).',
      recommended_farm: 'Faça Void Storms em Pluto ou Veil Proxima — o bonus reward é separado das recompensas de Relic, ~10 rotações esperadas por parte.',
    },
  },
  'temple': {
    title: 'A Estrela do Rock',
    description: 'Empunhando Lizzie, sua guitarra Infestada flamejante, Temple acende a chama da revolução com solos de fogo e poder de palco que inspira aliados.',
    portraits: { base: 'assets/icons/base/temple.png' },
    abilities: [
      { type: 'passive', name: 'Backbeat', icon: 'assets/abilities/temple/passive.png', description: 'Lançar habilidades no ritmo do metrônomo Backbeat amplifica seus efeitos e concede eficiência adicional, recompensando quem segue a batida.' },
      { name: 'Pyrotechnics', icon: 'assets/abilities/temple/skill1.png', description: 'Invoca pilares ardentes de fogo que irrompem do chão, consumindo inimigos com dano de Calor.' },
      { name: 'Overdrive', icon: 'assets/abilities/temple/skill2.png', description: 'Atinge inimigos com um debuff de Vulnerabilidade a Chance Crítica, deixando-os abertos a golpes devastadores.' },
      { name: "Ripper's Wail", icon: 'assets/abilities/temple/skill3.png', description: 'Solta um solo poderoso, ficando invulnerável enquanto restaura Vida e Escudos próprios e dos aliados, e amplifica o dano de Calor da equipe.' },
      { name: 'Exalted Solo', icon: 'assets/abilities/temple/skill4.png', description: 'Saca Lizzie, sua guitarra-lança-chamas exaltada, para incinerar o palco com uma performance flamejante.' },
    ],
    acquisition: {
      source_type: 'coda',
      blueprint: 'Blueprint principal dropa de Stage Defense em Solstice Square, Höllvania. Drop rates muito baixas em A/B (0,97-1,98%), melhores na Rotação C (4,58%). Requer a quest The Hex e Rank 4 - Hot & Fresh.',
      parts: 'Blueprints de componentes também droppam de Stage Defense nas mesmas taxas (Rotação C 4,58%).',
      alternative: 'Alternativamente, compre com o Flare do The Hex (Rank 4 - Hot & Fresh) usando Beating Heartstrings de Stage Defense (65 por componente, 195 para o principal; 390 no total).',
      recommended_farm: 'Solstice Square Stage Defense — chegue na Rotação C; complemente com compras de Beating Heartstrings com o Flare.',
    },
  },
  'xaku': {
    title: 'A Lei do Vazio',
    description: 'Forjado a partir de três Warframes fragmentados unidos por energia do Void, Xaku é uma força única que devasta com dano elevado, desarma inimigos e dobra as regras da realidade.',
    portraits: { base: 'assets/icons/base/xaku.png', prime: 'assets/icons/prime/xaku.png', variants: [{ key: 'broken', label: 'Broken' }] },
    abilities: [
      { type: 'passive', name: 'Fragmentos do Void', icon: 'assets/abilities/xaku/passive.png', description: 'Recebe redução de dano contra ataques em área e possui chance de desviar de tiros, deixando-os atravessarem seu corpo fragmentado.' },
      { name: "Xata's Whisper", icon: 'assets/abilities/xaku/skill1.png', description: 'Imbui as armas com dano de Void, fazendo cada disparo ressoar com a energia do vazio.' },
      { name: 'Grasp of Lohk', icon: 'assets/abilities/xaku/skill2.png', description: 'Rouba e desarma armas inimigas, criando armamentos flutuantes que atacam alvos próximos automaticamente.' },
      { name: 'The Lost', icon: 'assets/abilities/xaku/skill3.png', description: 'Habilidade cíclica com três modos: converte inimigos em aliados, prende um alvo que despoja escudos e armadura, ou suspende inimigos no ar em estase.' },
      { name: 'The Vast Untime', icon: 'assets/abilities/xaku/skill4.png', description: 'Despoja-se em uma forma esquelética que desacelera inimigos, aplica vulnerabilidade ao Void, aumenta velocidade e pausa a duração de outras habilidades.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Blueprint principal obtida ao completar a quest Heart of Deimos. Cópias adicionais custam 50.000 de standing com o Cephalon Simaris.',
      parts: 'Blueprints de componentes droppam das Necralisk Bounties no Cambion Drift: Neuroptics em Lvl 15-25 (~12%), Sistemas em Lvl 30-40 (~11%), Chassis em Lvl 40-60 ou Steel Path Lvl 100 (~13%). Requer Solaris United Rank 5 ou Vox Solaris Rank 1 para Gyromag Systems usado na construção.',
      recommended_farm: 'Cambion Drift — faça a Necralisk Bounty correspondente para cada componente; foque nos final stages (~21-26%).',
    },
  },
  'grendel': {
    title: 'O Devorador Insaciável',
    description: 'Warframe de sobrevivência tematizado em gula e folclore Oni, que engole inimigos inteiros para se fortalecer e desencadear efeitos devastadores. Possui uma das maiores reservas de vida do jogo.',
    portraits: { base: 'assets/icons/base/grendel.png', prime: 'assets/icons/prime/grendel.png' },
    abilities: [
      { type: 'passive', name: 'Estômago Fortificado', icon: 'assets/abilities/grendel/passive.png', description: 'Cada inimigo engolido concede armadura bônus a Grendel enquanto permanecer preso em seu estômago.' },
      { name: 'Feast', icon: 'assets/abilities/grendel/feast.png', description: 'Inala os inimigos próximos para dentro de sua barriga, armazenando-os para uso posterior em suas outras habilidades.' },
      { name: 'Nourish', icon: 'assets/abilities/grendel/nourish.png', description: 'Digere as vítimas armazenadas para recuperar vida e conceder a si e aos aliados energia bônus, dano Viral nas armas e um manto protetor de pulso Viral.' },
      { name: 'Pulverize', icon: 'assets/abilities/grendel/pulverize.png', description: 'Transforma Grendel em uma esfera rolante que esmaga inimigos, remove armadura e regenera vida enquanto se move.' },
      { name: 'Regurgitate', icon: 'assets/abilities/grendel/regurgitate.png', description: 'Cospe um inimigo engolido como um projétil de Toxina que desacelera alvos e remove sua armadura.' },
    ],
    acquisition: {
      source_type: 'enemy_drop',
      blueprint: 'Blueprint principal comprada no Mercado.',
      parts: 'Blueprints de componentes garantidas em missões especiais de Europa desbloqueadas por Locators comprados na Arbitration Honors (25 Vitus Essence cada). Cada missão tem restrições pesadas (sem gear, mods, operator, arcanes, etc.).',
      alternative: 'Neuroptics Locator desbloqueia Archaeo-freighter (Survival de 20 min), Chassis Locator desbloqueia Icefields of Riddah (Defense de 6 ondas), Systems Locator desbloqueia Mines of Karishh (Excavation de 800 Cryotic).',
      recommended_farm: 'Farme Vitus Essence em Arbitrations, depois faça cada missão única de Europa. Missões são apenas pre-made — leve squad.',
    },
  },
  'rhino': {
    title: 'A Força Imóvel',
    description: 'Warframe pesadamente blindado, estilo tanque, que troca mobilidade por poder bruto. Construído para absorver fogo inimigo, avançar em combate e dominar o campo de batalha pela força.',
    portraits: { base: 'assets/icons/base/rhino.png', prime: 'assets/icons/prime/rhino.png' },
    abilities: [
      { type: 'passive', name: 'Aterrissagem Pesada', icon: 'assets/abilities/rhino/passive.png', description: 'Ao pousar de grandes alturas, Rhino libera uma onda de choque que causa dano aos inimigos próximos.' },
      { name: 'Rhino Charge', icon: 'assets/abilities/rhino/charge.png', description: 'Um avanço brutal usado para fechar distância rapidamente com os inimigos, atropelando tudo no caminho.' },
      { name: 'Iron Skin', icon: 'assets/abilities/rhino/ironskin.png', description: 'Converte sua armadura em Overguard, concedendo uma camada protetora que absorve dano e o torna imune a controle de multidão.' },
      { name: 'Roar', icon: 'assets/abilities/rhino/roar.png', description: 'Um rugido bestial que aumenta o dano das armas de todos os aliados próximos por um período prolongado.' },
      { name: 'Rhino Stomp', icon: 'assets/abilities/rhino/stomp.png', description: 'Bate no chão, enviando inimigos pelos ares e aplicando um forte efeito de lentidão que os deixa indefesos.' },
    ],
    acquisition: {
      source_type: 'boss_drop',
      blueprint: 'Blueprint principal comprada no Mercado.',
      parts: 'Blueprints de componentes droppam do assassinato do Jackal em Fossa, Vênus. Taxas: Neuroptics 38,72%, Chassis 38,72%, Sistemas 22,56%.',
      alternative: 'Também disponível no Circuit (Duviri) quando o Rhino está na rotação: todas as blueprints obtidas ao alcançar recompensas de Tier 10.',
      recommended_farm: 'Vênus / Fossa — assassinato rápido do Jackal, um dos farms de boss mais rápidos do jogo.',
    },
  },
  'frost': {
    title: 'O Gelo Mortal',
    description: 'Warframe defensivo de elemento gelo focado em controle de multidão e sobrevivência. Congela inimigos, protege objetivos e reforça a durabilidade da equipe com seus poderes glaciais.',
    portraits: { base: 'assets/icons/base/frost.png', prime: 'assets/icons/prime/frost.png' },
    abilities: [
      { type: 'passive', name: 'Aura Glacial', icon: 'assets/abilities/frost/passive.png', description: 'Efeitos de status de Frio causados por Frost têm duração dobrada, e ele ganha armadura bônus para cada inimigo próximo afetado por Frio.' },
      { name: 'Freeze', icon: 'assets/abilities/frost/freeze.png', description: 'Lança um projétil que encapsula o inimigo atingido em um bloco de gelo, deixando-o totalmente imobilizado.' },
      { name: 'Ice Wave', icon: 'assets/abilities/frost/icewave.png', description: 'Envia uma trilha de gelo deslizando pelo chão que causa dano e aplica efeito de Frio em todos os inimigos no caminho.' },
      { name: 'Snow Globe', icon: 'assets/abilities/frost/snowglobe.png', description: 'Cria uma cúpula protetora que repele inimigos ao ser criada e aplica status de Frio em qualquer um que tente entrar.' },
      { name: 'Avalanche', icon: 'assets/abilities/frost/avalanche.png', description: 'Cerca Frost com uma tempestade gelada que congela inimigos por completo e remove sua armadura ao quebrar.' },
    ],
    acquisition: {
      source_type: 'boss_drop',
      blueprint: 'Blueprint principal comprada no Mercado.',
      parts: 'Blueprints de componentes droppam do assassinato do Captain Vor & Lieutenant Lech Kril em Exta, Ceres. Taxas: Neuroptics 38,72%, Chassis 38,72%, Sistemas 22,56%.',
      alternative: 'Também disponível no Circuit (Duviri) quando o Frost está na rotação: todas as blueprints obtidas ao alcançar recompensas de Tier 10.',
      recommended_farm: 'Ceres / Exta — farm rápido de assassinato, ~14 kills garantem Neuroptics/Chassis.',
    },
  },
  'hydroid': {
    title: 'O Saqueador Marítimo',
    description: 'Warframe tematizado em piratas, especializado em controle de multidão com água Corrosiva. Domina o campo de batalha ao remover armaduras inimigas e prendê-los em massa.',
    portraits: { base: 'assets/icons/base/hydroid.png', prime: 'assets/icons/prime/hydroid.png' },
    abilities: [
      { type: 'passive', name: 'Corrosão Aprimorada', icon: 'assets/abilities/hydroid/passive.png', description: 'Inimigos atingidos por Hydroid ficam mais suscetíveis a status Corrosivo, e a primeira aplicação remove uma parcela maior da armadura.' },
      { name: 'Tempest Barrage', icon: 'assets/abilities/hydroid/tempestbarrage.png', description: 'Convoca uma chuva de bombardeio de água Corrosiva sobre uma área, castigando todos os inimigos no local.' },
      { name: 'Tidal Surge', icon: 'assets/abilities/hydroid/tidalsurge.png', description: 'Transforma Hydroid em uma onda invulnerável que avança para frente, arrastando e empurrando inimigos no caminho.' },
      { name: 'Plunder', icon: 'assets/abilities/hydroid/plunder.png', description: 'Rouba status Corrosivos dos inimigos para reduzir permanentemente a armadura deles, enquanto reforça a própria armadura e concede dano Corrosivo às armas.' },
      { name: 'Tentacle Swarm', icon: 'assets/abilities/hydroid/tentacleswarm.png', description: 'Invoca uma criatura marinha cujos tentáculos agarram e suspendem os inimigos próximos, prendendo-os no ar.' },
    ],
    acquisition: {
      source_type: 'boss_drop',
      blueprint: 'Blueprint principal comprada no Mercado.',
      parts: 'Blueprints de componentes droppam do assassinato do Councilor Vay Hek em Oro, Terra (requer Mastery Rank 5). Taxas: Neuroptics 38,72%, Chassis 38,72%, Sistemas 22,56%.',
      alternative: 'Também disponível no Circuit (Duviri) quando o Hydroid está na rotação: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Sistemas), Tier 10 (Blueprint principal).',
      recommended_farm: 'Terra / Oro — assassinato do Vay Hek; ~14 kills garantem Neuroptics/Chassis.',
    },
  },
  'nyx': {
    title: 'A Manipuladora de Mentes',
    description: 'Warframe psíquica especializada em controle de multidão. Manipula a mente dos inimigos para desorientá-los, redirecionar seus ataques e dominar o campo de batalha pela confusão.',
    portraits: { base: 'assets/icons/base/nyx.png', prime: 'assets/icons/prime/nyx.png' },
    abilities: [
      { type: 'passive', name: 'Foco Psíquico', icon: 'assets/abilities/nyx/passive.png', description: 'Nyx e suas armas ganham chance crítica bônus para cada inimigo confuso dentro de seu alcance de afinidade, até um limite alto.' },
      { name: 'Mind Control', icon: 'assets/abilities/nyx/mindcontrol.png', description: 'Domina um único alvo, forçando-o a lutar ao lado de Nyx e infundindo seus ataques com dano de Radiação; pode ser potencializado se Nyx danificar o controlado.' },
      { name: 'Psychic Bolts', icon: 'assets/abilities/nyx/psychicbolts.png', description: 'Lança projéteis teleguiados que removem armadura e escudos dos alvos, desaceleram Infestados e devolvem armadura, escudos e Overguard para Nyx.' },
      { name: 'Chaos', icon: 'assets/abilities/nyx/chaos.png', description: 'Emite um pulso desorientador que aplica status máximo de Radiação, fazendo com que os inimigos afetados se ataquem uns aos outros.' },
      { name: 'Absorb', icon: 'assets/abilities/nyx/absorb.png', description: 'Nyx entra em um estado meditativo e invulnerável, absorvendo todo dano recebido e o dos inimigos confusos, liberando tudo depois como uma explosão devastadora.' },
    ],
    acquisition: {
      source_type: 'boss_drop',
      blueprint: 'Blueprint principal comprada no Mercado.',
      parts: 'Blueprints de componentes droppam de missões de assassinato do Phorid que aparecem durante Infested Invasions. Taxas: Neuroptics 38,72%, Chassis 38,72%, Sistemas 22,56%.',
      alternative: 'Também disponível no Circuit (Duviri) quando a Nyx está na rotação: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Sistemas), Tier 10 (Blueprint principal).',
      recommended_farm: 'Espere um alerta de Invasion com Phorid Manifestation — partes da Nyx só ficam disponíveis então. ~14 kills garantem Neuroptics/Chassis.',
    },
  },
  'ivara': {
    title: 'A Caçadora Furtiva',
    description: 'Warframe focada em furtividade, especializada em infiltração, engano e eliminação precisa a distância com seu arco exaltado e variados tipos de flechas.',
    portraits: { base: 'assets/icons/base/ivara.png', prime: 'assets/icons/prime/ivara.png' },
    abilities: [
      { type: 'passive', name: 'Sentido Aguçado', icon: 'assets/abilities/ivara/passive.png', description: 'Detecta automaticamente todos os inimigos hostis dentro de um amplo raio ao seu redor, funcionando como um radar estendido permanente.' },
      { name: 'Quiver', icon: 'assets/abilities/ivara/quiver.png', description: 'Alterna entre quatro tipos de flecha: Cloak (bolha de invisibilidade), Dashwire (tirolesa), Noise (atrai inimigos) e Sleep (faz dormir).' },
      { name: 'Navigator', icon: 'assets/abilities/ivara/navigator.png', description: 'Transfere a consciência de Ivara para um projétil disparado, permitindo guiá-lo manualmente até o alvo desejado.' },
      { name: 'Prowl', icon: 'assets/abilities/ivara/prowl.png', description: 'Concede invisibilidade, aumenta o dano de tiros na cabeça e rouba itens dos inimigos, mas reduz a velocidade de movimento e limita certas ações.' },
      { name: 'Artemis Bow', icon: 'assets/abilities/ivara/artemisbow.png', description: 'Invoca um arco exaltado que dispara um leque de várias flechas simultaneamente, devastando múltiplos alvos em uma rajada só.' },
    ],
    acquisition: {
      source_type: 'enemy_drop',
      blueprint: 'Blueprint principal comprada no Mercado.',
      parts: 'Blueprints de componentes droppam da Rotação C de missões Spy: Sistemas em Easy (Lvl 1-15, 22,56%), Chassis em Medium (Lvl 16-25), Neuroptics em Hard (Lvl 26+). Variantes Proxima Spy dão 36% cada.',
      alternative: 'Também disponível no Circuit (Duviri) quando a Ivara está na rotação: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Sistemas), Tier 10 (Blueprint principal).',
      recommended_farm: 'Faça missões Proxima Spy (36% Rotação C) — Orvin-Haarc (Sistemas), Brom Cluster (Chassis), Peregrine Axis (Neuroptics). Todos os vaults precisam de sucesso.',
    },
  },
  'atlas': {
    title: 'O Lutador da Montanha',
    description: 'Warframe focado em combate elemental terrestre, causando dano pesado com ataques de punho enquanto reforça suas defesas. Combina dano e sobrevivência em um estilo brutal.',
    portraits: { base: 'assets/icons/base/atlas.png', prime: 'assets/icons/prime/atlas.png' },
    abilities: [
      { type: 'passive', name: 'Firme na Terra', icon: 'assets/abilities/atlas/passive.png', description: 'Atlas é completamente imune a efeitos de queda e derrubada enquanto seus pés estiverem em contato com o solo.' },
      { name: 'Landslide', icon: 'assets/abilities/atlas/landslide.png', description: 'Atlas avança em direção a um inimigo e desfere um golpe corpo-a-corpo poderoso com seus Punhos de Landslide, podendo encadear vários alvos.' },
      { name: 'Tectonics', icon: 'assets/abilities/atlas/tectonics.png', description: 'Conjura uma barreira de pedra defensiva que também pode ser detonada para rolar como um projétil ofensivo, atropelando inimigos no caminho.' },
      { name: 'Petrify', icon: 'assets/abilities/atlas/petrify.png', description: 'Emite um olhar que transforma em pedra todos os inimigos visíveis no cone, deixando-os indefesos e vulneráveis.' },
      { name: 'Rumblers', icon: 'assets/abilities/atlas/rumblers.png', description: 'Invoca dois golems de pedra que vagam pela área engajando hostis, atraindo atenção e fornecendo destroços curativos para Atlas.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Blueprint principal obtida ao completar a quest The Jordas Precept. Cópias adicionais podem ser compradas do Cephalon Simaris por 50.000 de standing.',
      parts: 'Blueprints de componentes droppam do assassinato do Jordas Golem em Eris. Taxas: Neuroptics 38,72%, Chassis 38,72%, Sistemas 22,56%.',
      alternative: 'Também disponível no Circuit (Duviri) quando o Atlas está na rotação: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Sistemas), Tier 10 (Blueprint principal).',
      recommended_farm: 'Eris / Jordas Golem Assassinate — ~14 kills garantem Neuroptics/Chassis.',
    },
  },
  'baruuk': {
    title: 'O Guerreiro Relutante',
    description: 'Warframe monge pacifista focado em sobrevivência e controle de multidão, que se transforma em uma potência ofensiva devastadora quando sua paciência chega ao limite.',
    portraits: { base: 'assets/icons/base/baruuk.png', prime: 'assets/icons/prime/baruuk.png' },
    abilities: [
      { type: 'passive', name: 'Contenção', icon: 'assets/abilities/baruuk/passive.png', description: 'Esquivar de projéteis, fazer inimigos dormir ou desarmá-los reduz seu medidor de Contenção. À medida que ele cai, Baruuk ganha resistência a dano crescente.' },
      { name: 'Elude', icon: 'assets/abilities/baruuk/elude.png', description: 'Adota uma postura defensiva que faz ataques inimigos atravessá-lo sem causar dano, desde que ele se abstenha de atacar.' },
      { name: 'Lull', icon: 'assets/abilities/baruuk/lull.png', description: 'Emite uma onda calmante que coloca os inimigos próximos para dormir, deixando-os totalmente indefesos por um tempo.' },
      { name: 'Desolate Hands', icon: 'assets/abilities/baruuk/desolatehands.png', description: 'Conjura adagas flutuantes que concedem redução de dano e voam até inimigos para desarmá-los automaticamente.' },
      { name: 'Serene Storm', icon: 'assets/abilities/baruuk/serenestorm.png', description: 'Quando sua Contenção se esgota, invoca os Desert Wind, punhos exaltados, e ganha resistência adicional. Esta habilidade consome Contenção em vez de energia.' },
    ],
    acquisition: {
      source_type: 'fortuna_offerings',
      blueprint: 'Todas as blueprints compradas com a Little Duck (Vox Solaris) em Fortuna. Blueprint principal requer Rank 2 - Agent, componentes requerem Rank 3 - Hand. Cada blueprint custa 5.000 de standing (20.000 no total).',
      parts: 'Blueprints de componentes vendidas pela Little Duck no Rank 3 - Hand com Vox Solaris.',
      alternative: 'Também disponível no Circuit (Duviri) quando o Baruuk está na rotação: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Sistemas), Tier 10 (Blueprint principal).',
      recommended_farm: 'Farme standing da Vox Solaris completando bounties do Profit-Taker e entregando Toroids.',
    },
  },
  'chroma': {
    title: 'O Mestre dos Elementos',
    description: 'Warframe temático de dragões focado em sobrevivência e alto dano, dominando os quatro elementos (Calor, Eletricidade, Toxina, Frio) para potencializar ataques e defesas.',
    portraits: { base: 'assets/icons/base/chroma.png', prime: 'assets/icons/prime/chroma.png', variants: [{ key: 'effigy', label: 'Effigy' }] },
    abilities: [
      { type: 'passive', name: 'Asas Dracarianas', icon: 'assets/abilities/chroma/passive.png', description: 'Asas brotam das costas de Chroma, concedendo um salto extra no ar e um pulo de bala adicional para maior mobilidade.' },
      { name: 'Spectral Scream', icon: 'assets/abilities/chroma/spectralscream.png', description: 'Exala um sopro elemental contínuo à frente, com tipo de dano variando conforme a configuração de energia escolhida.' },
      { name: 'Elemental Ward', icon: 'assets/abilities/chroma/elementalward.png', description: 'Projeta uma aura elemental com bônus variando por elemento: Calor aumenta vida, Eletricidade reforça escudos e reage a dano, Toxina acelera recarga, Frio aumenta armadura e reflete dano.' },
      { name: 'Vex Armor', icon: 'assets/abilities/chroma/vexarmor.png', description: 'Acumula dois bônus crescentes: Desprezo (armadura) ao receber dano em escudo, e Fúria (dano de arma) ao receber dano em vida.' },
      { name: 'Effigy', icon: 'assets/abilities/chroma/effigy.png', description: 'Destaca seu manto como uma sentinela autônoma que dispara o sopro elemental e aumenta a taxa e quantidade de Créditos coletados.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Blueprint principal obtida ao completar a quest The New Strange. Cópias adicionais custam 50.000 de standing com o Cephalon Simaris.',
      parts: 'Blueprints de componentes obtidas pelas Junctions: Neuroptics (Uranus Junction), Chassis (Neptune Junction), Sistemas (Pluto Junction). Cópias adicionais custam 25.000 de standing cada com o Cephalon Simaris.',
      alternative: 'Também disponível no Circuit (Duviri) quando o Chroma está na rotação: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Sistemas), Tier 10 (Blueprint principal).',
      recommended_farm: 'Progrida pelas Junctions do star chart para desbloquear os componentes naturalmente.',
    },
  },
  'gauss': {
    title: 'O Veloz, Santo de Altra',
    description: 'Warframe centrado em velocidade que combina alto dano com forte sobrevivência. Seu kit gira em torno de uma Bateria Eletrocinética que se carrega com movimento constante.',
    portraits: { base: 'assets/icons/base/gauss.png', prime: 'assets/icons/prime/gauss.png', variants: [{ key: 'redline', label: 'Redline', versions: ['base'] }] },
    abilities: [
      { type: 'passive', name: 'Bateria Eletrocinética', icon: 'assets/abilities/gauss/passive.png', description: 'O movimento gera corrente que enche o medidor de bateria, acelerando a recarga dos escudos e reduzindo drasticamente o atraso para recomeçar a recarga.' },
      { name: 'Mach Rush', icon: 'assets/abilities/gauss/machrush.png', description: 'Impulsiona Gauss em velocidades supersônicas, ótimo para travessia rápida e para atropelar inimigos no caminho.' },
      { name: 'Kinetic Plating', icon: 'assets/abilities/gauss/kineticplating.png', description: 'Concede redução de dano e imunidade a status contra Impacto, Perfuração, Corte, Frio, Calor e Explosão, convertendo o dano recebido em Energia.' },
      { name: 'Thermal Sunder', icon: 'assets/abilities/gauss/thermalsunder.png', description: 'Implanta um campo de Frio ou Calor; sobrepor os dois campos produz dano Explosivo em grande área.' },
      { name: 'Redline', icon: 'assets/abilities/gauss/redline.png', description: 'Acelera a bateria ao máximo, aumentando cadência de tiro, velocidade de ataque, recarga e conjuração, além de emitir projéteis elétricos automáticos.' },
    ],
    acquisition: {
      source_type: 'enemy_drop',
      blueprint: 'Blueprint principal comprada no Mercado.',
      parts: 'Blueprints de componentes droppam da Rotação C de Disruption em Kappa, Sedna a 7,84% cada.',
      recommended_farm: 'Kappa / Sedna Disruption — limpe ao menos 4 conduits por round para Rotação C; ~12 rotações C esperadas por parte.',
    },
  },
  'kullervo': {
    title: 'O Renegado Carmesim',
    description: 'Warframe focado em dano corpo-a-corpo, especialmente com adagas, tematizado em traição e vingança. Tanque de vida sem escudos que pune inimigos com lâmina pessoal.',
    portraits: { base: 'assets/icons/base/kullervo.png' },
    abilities: [
      { type: 'passive', name: 'Maestria Pesada', icon: 'assets/abilities/kullervo/passive.png', description: 'Todos os ataques pesados de Kullervo têm eficiência drasticamente melhorada e tempo de carga muito mais rápido em qualquer arma corpo-a-corpo.' },
      { name: 'Wrathful Advance', icon: 'assets/abilities/kullervo/wrathfuladvance.png', description: 'Carrega um ataque pesado e se teleporta até um inimigo alvo, já com chance crítica corpo-a-corpo enormemente amplificada para o golpe.' },
      { name: 'Recompense', icon: 'assets/abilities/kullervo/recompense.png', description: 'Faz adagas girarem ao seu redor, restaurando Vida ao cortarem inimigos e concedendo uma camada de Overguard protetor.' },
      { name: 'Collective Curse', icon: 'assets/abilities/kullervo/collectivecurse.png', description: 'Encadeia vários inimigos em uma maldição compartilhada, fazendo com que o dano causado a um seja transferido para todos os alvos ligados.' },
      { name: 'Storm of Ukko', icon: 'assets/abilities/kullervo/stormofukko.png', description: 'Convoca uma tempestade de adagas em um ponto escolhido, aplicando rapidamente status de Corte e desorientando todos os inimigos na área.' },
    ],
    acquisition: {
      source_type: 'duviri',
      blueprint: 'Todas as blueprints compradas com a Acrithis no Dormizone usando Kullervo\'s Bane (15 para o principal, 9 para cada componente; 42 no total).',
      parts: 'Kullervo\'s Bane dropa ao derrotar o boss Kullervo no Kullervo\'s Hold e completar o Spiral (Orowyrm) no The Duviri Experience. Aparece nos spirals Anger, Sorrow e Fear. Dá 4-6 banes (6-8 no Steel Path).',
      recommended_farm: 'Faça The Duviri Experience nos moods Anger/Sorrow/Fear; fale com o The Warden no Kullervo\'s Hold para a luta do boss.',
    },
  },
  'nidus': {
    title: 'O Flagelo Adaptável',
    description: 'Warframe tematizado em Infestação focado em dano, sobrevivência e controle de multidão, ganhando poder ao acumular pilhas de Mutação durante o combate.',
    portraits: { base: 'assets/icons/base/nidus.png', prime: 'assets/icons/prime/nidus.png', variants: [{ key: 'mutated', label: 'Mutated' }] },
    abilities: [
      { type: 'passive', name: 'Pilhas de Mutação', icon: 'assets/abilities/nidus/passive.png', description: 'Se Nidus morreria tendo pilhas de Mutação suficientes, ele consome essas pilhas para ganhar invulnerabilidade temporária e restaurar parte da vida.' },
      { name: 'Virulence', icon: 'assets/abilities/nidus/virulence.png', description: 'Bate no chão para liberar um caminho de crescimento fúngico que causa dano aos inimigos e gera pilhas de Mutação a cada acerto.' },
      { name: 'Larva', icon: 'assets/abilities/nidus/larva.png', description: 'Lança um casulo Infestado que agarra os inimigos próximos e os aglomera em um ponto central, prontos para serem destruídos em sequência.' },
      { name: 'Parasitic Link', icon: 'assets/abilities/nidus/parasiticlink.png', description: 'Cria um elo com um alvo; em aliados aumenta dano de arma e Força; em inimigos redireciona uma parte do dano que Nidus receberia para eles.' },
      { name: 'Ravenous', icon: 'assets/abilities/nidus/ravenous.png', description: 'Cria um campo Infestado que regenera a vida de Nidus e gera Maggots que se prendem aos inimigos e explodem ao seu redor.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Blueprint principal obtida na quest The Glast Gambit. Cópias adicionais custam 50.000 de standing com o Cephalon Simaris.',
      parts: 'Blueprints de componentes droppam de Infested Salvage em Oestrus, Eris: Rotações A/B 7,69%, Rotação C 14,29% cada.',
      alternative: 'Também disponível no Circuit (Duviri) quando o Nidus está na rotação: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Sistemas), Tier 10 (Blueprint principal).',
      recommended_farm: 'Oestrus / Eris Infested Salvage — chegue na Rotação C (~20 min) para melhores chances, ~6 rotações C esperadas por parte.',
    },
  },
  'revenant': {
    title: 'O Condenado Retornado',
    description: 'Warframe temático de Sentinels e Eidolons focado em dano e sobrevivência, misturando mecânicas vampíricas com fortes capacidades defensivas e alto poder ofensivo.',
    portraits: { base: 'assets/icons/base/revenant.png', prime: 'assets/icons/prime/revenant.png' },
    abilities: [
      { type: 'passive', name: 'Eco do Eidolon', icon: 'assets/abilities/revenant/passive.png', description: 'Quando os escudos de Revenant são completamente drenados, uma onda de choque irrompe ao seu redor, derrubando inimigos próximos e causando dano.' },
      { name: 'Enthrall', icon: 'assets/abilities/revenant/enthrall.png', description: 'Converte inimigos em servos leais que lutam por Revenant; ao morrerem, deixam pilares que continuam convertendo outros inimigos em cadeia.' },
      { name: 'Mesmer Skin', icon: 'assets/abilities/revenant/mesmerskin.png', description: 'Concede invulnerabilidade por um número limitado de cargas, atordoando qualquer inimigo que ouse atacá-lo durante o efeito.' },
      { name: 'Reave', icon: 'assets/abilities/revenant/reave.png', description: 'Transforma Revenant em uma onda de energia que atravessa inimigos, drenando seus escudos e vida diretamente para si.' },
      { name: 'Danse Macabre', icon: 'assets/abilities/revenant/dansemacabre.png', description: 'Gira no ar enquanto dispara feixes de energia rotativos em todas as direções, em uma dança mortal que pulveriza tudo em volta.' },
    ],
    acquisition: {
      source_type: 'cetus_offerings',
      blueprint: 'Blueprint principal obtida ao completar a quest Mask of the Revenant (requer Rank 2 - Observer com The Quills). Cópias adicionais custam 50.000 de standing com o Cephalon Simaris.',
      parts: 'Blueprints de componentes droppam das Cetus Bounties: Sistemas em Lvl 20-40, Chassis em Lvl 30-50, Neuroptics em Lvl 40-60. Chassis de Plague Star Bounty ~14-16%. Final stages têm melhores chances (21-26%).',
      alternative: 'Também disponível no Circuit (Duviri) quando o Revenant está na rotação: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Sistemas), Tier 10 (Blueprint principal).',
      recommended_farm: 'Plains of Eidolon — faça a Cetus Bounty correspondente; o evento Plague Star (quando ativo) é a fonte mais rápida do Chassis.',
    },
  },
  'valkyr': {
    title: 'A Atormentada',
    description: 'Warframe estilo berserker construída em torno de combate corpo-a-corpo. Combina alta armadura e vida com ofensiva focada em ataques pessoais brutais e ferozes.',
    portraits: { base: 'assets/icons/base/valkyr.png', prime: 'assets/icons/prime/valkyr.png', variants: [{ key: 'bonds', label: 'Bonds' }] },
    abilities: [
      { type: 'passive', name: 'Fúria Crescente', icon: 'assets/abilities/valkyr/passive.png', description: 'Acertar e abater inimigos com armas corpo-a-corpo enche um medidor de Fúria que aumenta o dano corpo-a-corpo e pode salvá-la de golpes letais.' },
      { name: 'Rip Line', icon: 'assets/abilities/valkyr/ripline.png', description: 'Dispara um gancho de alta tração usado como ferramenta de mobilidade ou para puxar inimigos em sua direção.' },
      { name: 'Warcry', icon: 'assets/abilities/valkyr/warcry.png', description: 'Solta um grito de guerra que aumenta a armadura e a velocidade de ataque de Valkyr e de todos os aliados próximos.' },
      { name: 'Paralysis', icon: 'assets/abilities/valkyr/paralysis.png', description: 'Libera um pulso que aplica forte lentidão aos inimigos próximos e os deixa mais vulneráveis a dano corpo-a-corpo.' },
      { name: 'Hysteria', icon: 'assets/abilities/valkyr/hysteria.png', description: 'Invoca as Garras de Valkyr, suas lâminas exaltadas, concedendo imunidade a status e roubo de vida em cada ataque.' },
    ],
    acquisition: {
      source_type: 'boss_drop',
      blueprint: 'Blueprint principal comprada no Mercado.',
      parts: 'Blueprints de componentes droppam do assassinato do Alad V em Themisto, Júpiter. Taxas: Neuroptics 38,72%, Chassis 38,72%, Sistemas 22,56%.',
      alternative: 'Também disponível no Circuit (Duviri) quando a Valkyr está na rotação: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Sistemas), Tier 10 (Blueprint principal).',
      recommended_farm: 'Júpiter / Themisto — assassinato do Alad V; ~14 kills garantem Neuroptics/Chassis.',
    },
  },
  'wukong': {
    title: 'O Resistente, O Veloz',
    description: 'Guerreiro temático de símio construído em torno de alto dano e sobrevivência excepcional, com táticas de trapaceiro que enganam inimigos no campo de batalha.',
    portraits: { base: 'assets/icons/base/wukong.png', prime: 'assets/icons/prime/wukong.png' },
    abilities: [
      { type: 'passive', name: 'Cinco Níveis de Imortalidade', icon: 'assets/abilities/wukong/passive.png', description: 'Quando Wukong morreria, ele ativa automaticamente uma de suas técnicas de sobrevivência, podendo escapar da morte até três vezes por missão com bônus aleatórios.' },
      { name: 'Celestial Twin', icon: 'assets/abilities/wukong/celestialtwin.png', description: 'Invoca um clone independente que luta ao seu lado, usando sua arma e mirando alvos sozinho.' },
      { name: 'Cloud Walker', icon: 'assets/abilities/wukong/cloudwalker.png', description: 'Transforma-se em uma nuvem móvel, ganhando invisibilidade, invulnerabilidade e regeneração constante de vida.' },
      { name: 'Defy', icon: 'assets/abilities/wukong/defy.png', description: 'Ativa uma postura invulnerável que absorve todo o dano recebido e o devolve como contra-ataque, além de aumentar permanentemente sua armadura.' },
      { name: 'Primal Fury', icon: 'assets/abilities/wukong/primalfury.png', description: 'Invoca o lendário Cajado de Ferro, sua arma corpo-a-corpo exaltada, que estende seu alcance massivamente conforme acerta inimigos.' },
    ],
    acquisition: {
      source_type: 'dojo_research',
      blueprint: 'Todas as blueprints podem ser pesquisadas no Tenno Lab no Dojo.',
      parts: 'Componentes são obtidos via pesquisa no Tenno Lab e construídos na Foundry.',
    },
  },
  'hildryn': {
    title: 'A Senhora dos Escudos',
    description: 'Uma ciborgue hercúlea que protege aliados e esmaga fortificações inimigas com artilharia movida a escudos. Voa pelos campos de batalha emanando poder defensivo.',
    portraits: { base: 'assets/icons/base/hildryn.png', prime: 'assets/icons/prime/hildryn.png' },
    abilities: [
      { type: 'passive', name: 'Barreira de Escudo', icon: 'assets/abilities/hildryn/passive.png', description: 'Hildryn possui uma alta janela de invulnerabilidade após seus escudos serem destruídos, ficando imune a danos por alguns segundos.' },
      { name: 'Balefire', icon: 'assets/abilities/hildryn/balefire.png', description: 'Invoca a Balefire Charger, uma arma exaltada que dispara projéteis de energia devastadores alimentados pelos escudos.' },
      { name: 'Pillage', icon: 'assets/abilities/hildryn/pillage.png', description: 'Emite uma onda expansiva que rouba escudos e armadura dos inimigos, convertendo-os em escudos para si e seus aliados próximos.' },
      { name: 'Haven', icon: 'assets/abilities/hildryn/haven.png', description: 'Cria um elo protetor com aliados próximos, concedendo escudos extras e recarga acelerada, enquanto inimigos vinculados sofrem dano contínuo.' },
      { name: 'Aegis Storm', icon: 'assets/abilities/hildryn/aegis_storm.png', description: 'Eleva-se aos ares empunhando a Balefire e suspende inimigos próximos no ar. Gera orbes de energia continuamente enquanto domina o campo.' },
    ],
    acquisition: {
      source_type: 'fortuna_offerings',
      blueprint: 'Blueprint principal comprada com a Little Duck por 5.000 de standing no Rank 2 - Agent com Vox Solaris.',
      parts: 'Blueprints de componentes droppam do Exploiter Orb no Orb Vallis. Taxas: Neuroptics 38,72%, Chassis 38,72%, Sistemas 22,56%.',
      alternative: 'Também disponível no Circuit (Duviri) quando a Hildryn está na rotação: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Sistemas), Tier 10 (Blueprint principal).',
      recommended_farm: 'Exploiter Orb — luta rápida no Deck 12; ~14 kills garantem Neuroptics/Chassis.',
    },
  },
  'inaros': {
    title: 'O Rei do Deserto',
    description: 'Um faraó-múmia de resistência colossal que controla as areias para sufocar e dominar inimigos. Sustenta-se através do medo e do sangue daqueles que enfrentam seu deserto.',
    portraits: { base: 'assets/icons/base/inaros.png', prime: 'assets/icons/prime/inaros.png', variants: [{ key: 'sarcophagus', label: 'Sarcophagus' }] },
    abilities: [
      { type: 'passive', name: 'Sarcófago da Ressurreição', icon: 'assets/abilities/inaros/passive.png', description: 'Ao receber dano letal, Inaros se sela em um sarcófago e drena a vida dos inimigos próximos para retornar à batalha.' },
      { name: 'Desiccation', icon: 'assets/abilities/inaros/desiccation.png', description: 'Lança um jato de areia que cega inimigos à frente, deixando-os vulneráveis a ataques finalizadores e curando Inaros a cada finalização.' },
      { name: 'Sandstorm', icon: 'assets/abilities/inaros/sandstorm.png', description: 'Transforma-se em uma tempestade de areia invulnerável que atrai e suspende inimigos próximos, deixando-os vulneráveis a finalizações no solo.' },
      { name: 'Scarab Shell', icon: 'assets/abilities/inaros/scarab_shell.png', description: 'Sacrifica parte de sua vida para forjar uma carapaça de escaravelhos que concede armadura extra e imunidade total a efeitos de status.' },
      { name: 'Scarab Swarm', icon: 'assets/abilities/inaros/scarab_swarm.png', description: 'Desencadeia um enxame de escaravelhos que infligem dano corrosivo proporcional à sua vida máxima. Inimigos amaldiçoados que morrem geram um Kavat Escaravelho aliado.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Blueprint principal e componentes obtidos pela quest Sands of Inaros. A blueprint da quest é tradeable, ou pode ser comprada do Baro Ki\'Teer por 100 Ducats + 25.000 créditos.',
      parts: 'Todos os componentes vêm de completar a quest Sands of Inaros. Cópias adicionais custam 25.000 de standing (componentes) ou 50.000 de standing (principal) com o Cephalon Simaris.',
      alternative: 'Também disponível no Circuit (Duviri) quando o Inaros está na rotação: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Sistemas), Tier 10 (Blueprint principal).',
      recommended_farm: 'Complete Sands of Inaros — repetível para builds adicionais via Simaris ou trade.',
    },
  },
  'nezha': {
    title: 'O Príncipe de Lótus',
    description: 'Um terceiro príncipe ágil e flamejante que combina sobrevivência mística com controle de multidões. Desliza pelo campo de batalha incendiando inimigos com graça implacável.',
    portraits: { base: 'assets/icons/base/nezha.png', prime: 'assets/icons/prime/nezha.png' },
    abilities: [
      { type: 'passive', name: 'Deslize Veloz', icon: 'assets/abilities/nezha/passive.png', description: 'Nezha desliza pelo chão com velocidade e distância muito superiores às de outros Warframes, tornando sua mobilidade incomparável.' },
      { name: 'Fire Walker', icon: 'assets/abilities/nezha/fire_walker.png', description: 'Acende seus pés em chamas, ganhando velocidade de movimento e deixando um rastro flamejante que queima inimigos e remove status negativos de aliados.' },
      { name: 'Blazing Chakram', icon: 'assets/abilities/nezha/blazing_chakram.png', description: 'Arremessa um chakram em chamas que perfura inimigos, aumenta sua vulnerabilidade a dano e eleva a taxa de queda de orbes de vida e energia.' },
      { name: 'Warding Halo', icon: 'assets/abilities/nezha/warding_halo.png', description: 'Forma uma auréola protetora ao redor de Nezha que absorve dano recebido e concede imunidade a efeitos de status enquanto durar.' },
      { name: 'Divine Spears', icon: 'assets/abilities/nezha/divine_spears.png', description: 'Invoca lanças divinas que irrompem do solo, empalando e imobilizando inimigos próximos enquanto causam dano contínuo.' },
    ],
    acquisition: {
      source_type: 'dojo_research',
      blueprint: 'Todas as blueprints podem ser pesquisadas no Tenno Lab no Dojo.',
      parts: 'Componentes são obtidos via pesquisa no Tenno Lab e construídos na Foundry.',
    },
  },
  'limbo': {
    title: 'O Mestre do Vão',
    description: 'Um mago dimensional que manipula o Plano do Vão, deslocando aliados e inimigos entre realidades. Domina o tempo e o espaço para isolar o caos da batalha.',
    portraits: { base: 'assets/icons/base/limbo.png', prime: 'assets/icons/prime/limbo.png' },
    abilities: [
      { type: 'passive', name: 'Trânsito Dimensional', icon: 'assets/abilities/limbo/passive.png', description: 'Esquivar permite que Limbo entre e saia do Plano do Vão, criando um portal temporário para aliados. Inimigos eliminados no Vão concedem energia.' },
      { name: 'Banish', icon: 'assets/abilities/limbo/banish.png', description: 'Envia uma onda que arremessa alvos para o Plano do Vão, isolando-os do mundo material por um período determinado.' },
      { name: 'Stasis', icon: 'assets/abilities/limbo/stasis.png', description: 'Congela o tempo dentro do Vão, paralisando inimigos e suspendendo projéteis em pleno ar até que o efeito se dissipe.' },
      { name: 'Rift Surge', icon: 'assets/abilities/limbo/rift_surge.png', description: 'Aplica uma corrente do Vão em inimigos, fazendo com que ao sair do plano dimensional eles banem outros inimigos próximos em cadeia.' },
      { name: 'Cataclysm', icon: 'assets/abilities/limbo/cataclysm.png', description: 'Cria um domo gigantesco que mescla os dois planos, prendendo tudo em seu interior no Vão até a esfera implodir com violência.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Blueprint principal comprada no Mercado.',
      parts: 'Blueprints de componentes obtidas na quest The Limbo Theorem, liberada ao completar a Europa Junction em Júpiter. Cópias adicionais custam 25.000 de standing com o Cephalon Simaris.',
      alternative: 'Também disponível no Circuit (Duviri) quando o Limbo está na rotação: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Sistemas), Tier 10 (Blueprint principal).',
      recommended_farm: 'Complete a Europa Junction para liberar a quest; jogue The Limbo Theorem.',
    },
  },
  'titania': {
    title: 'A Rainha das Fadas',
    description: 'Uma encantadora élfica que dança entre tamanhos para devastar e enfeitiçar inimigos. Cura aliados com cada feitiço lançado e voa pelos campos com aço diminuto.',
    portraits: { base: 'assets/icons/base/titania.png', prime: 'assets/icons/prime/titania.png' },
    abilities: [
      { type: 'passive', name: 'Toque Feérico', icon: 'assets/abilities/titania/passive.png', description: 'Titania regenera vida para si e aliados próximos sempre que conjura uma habilidade, além de aumentar seu salto e rolamento.' },
      { name: 'Spellbind', icon: 'assets/abilities/titania/spellbind.png', description: 'Espalha pó de fada que desarma e arremessa inimigos no ar, enquanto concede imunidade total a efeitos de status para Titania e aliados próximos.' },
      { name: 'Tribute', icon: 'assets/abilities/titania/tribute.png', description: 'Extrai uma essência de um inimigo escolhido, gerando um de quatro buffs alternáveis que beneficiam aliados ou penalizam adversários.' },
      { name: 'Lantern', icon: 'assets/abilities/titania/lantern.png', description: 'Transforma um inimigo em uma lanterna flutuante que atrai outros inimigos hipnotizados, explodindo ao final do efeito.' },
      { name: 'Razorwing', icon: 'assets/abilities/titania/razorwing.png', description: 'Reduz Titania ao tamanho de uma fada e a equipa com pistolas duplas Dex Pixia e a espada Diwata. Razorflies acompanham, infligindo vulnerabilidade.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Blueprint principal e componentes obtidos pela quest The Silver Grove. Cópias adicionais custam 25.000 (componentes) ou 50.000 (principal) de standing com o Cephalon Simaris.',
      parts: 'Todos os componentes vêm de completar a quest The Silver Grove.',
      alternative: 'Também disponível no Circuit (Duviri) quando a Titania está na rotação: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Sistemas), Tier 10 (Blueprint principal).',
      recommended_farm: 'Complete a quest The Silver Grove.',
    },
  },
  'wisp': {
    title: 'A Convocadora Etérea',
    description: 'Uma aparição luminosa que desliza entre dimensões, oferecendo bênçãos e luz solar aos seus aliados. Sua graça é igualada apenas pelo poder devastador que carrega.',
    portraits: { base: 'assets/icons/base/wisp.png', prime: 'assets/icons/prime/wisp.png' },
    abilities: [
      { type: 'passive', name: 'Flutuar Invisível', icon: 'assets/abilities/wisp/passive.png', description: 'Enquanto está no ar, Wisp se desloca entre dimensões e permanece invisível para os inimigos, podendo flanqueá-los sem ser detectada.' },
      { name: 'Reservoirs', icon: 'assets/abilities/wisp/reservoirs.png', description: 'Implanta três tipos de motas etéreas que concedem vida e regeneração, velocidade e cadência de ataque, ou descargas elétricas em inimigos próximos.' },
      { name: 'Wil-O-Wisp', icon: 'assets/abilities/wisp/wil_o_wisp.png', description: 'Cria um espectro etéreo que distrai inimigos enquanto Wisp se torna invisível. Pode ser teleportada para a posição do espectro a qualquer momento.' },
      { name: 'Breach Surge', icon: 'assets/abilities/wisp/breach_surge.png', description: 'Libera faíscas dimensionais que cegam inimigos próximos. Adversários abatidos durante o efeito liberam projéteis teleguiados que perseguem alvos vivos.' },
      { name: 'Sol Gate', icon: 'assets/abilities/wisp/sol_gate.png', description: 'Abre um portal direto para a superfície do Sol, desencadeando um feixe contínuo de plasma solar que incinera qualquer inimigo em seu caminho.' },
    ],
    acquisition: {
      source_type: 'boss_drop',
      blueprint: 'Blueprint principal dropa do assassinato do Ropalolyst em Júpiter a 22,56%.',
      parts: 'Blueprints de componentes droppam do Ropalolyst em The Ropalolyst, Júpiter a 25,81% cada.',
      recommended_farm: 'Júpiter / The Ropalolyst — ~3-4 kills garantem cada componente; a frame inteira pode dropar desse único boss.',
    },
  },
  'loki': {
    title: 'O Trapaceiro Etéreo',
    description: 'Um mestre da decepção que emprega ilusões e invisibilidade para sabotar exércitos inteiros. Semeia confusão e desarma o inimigo antes que perceba sua presença.',
    portraits: { base: 'assets/icons/base/loki.png', prime: 'assets/icons/prime/loki.png' },
    abilities: [
      { type: 'passive', name: 'Agarre Persistente', icon: 'assets/abilities/loki/passive.png', description: 'Loki é capaz de se pendurar em paredes por um tempo muito maior do que outros Warframes, observando o campo silenciosamente.' },
      { name: 'Decoy', icon: 'assets/abilities/loki/decoy.png', description: 'Invoca um clone holográfico que provoca inimigos próximos, atraindo o fogo deles enquanto Loki escapa ou ataca pelas sombras.' },
      { name: 'Invisibility', icon: 'assets/abilities/loki/invisibility.png', description: 'Torna Loki completamente invisível aos inimigos, permitindo que ele se infiltre e execute ataques furtivos com dano aumentado.' },
      { name: 'Switch Teleport', icon: 'assets/abilities/loki/switch_teleport.png', description: 'Troca instantaneamente de posição com um alvo, deixando inimigos atordoados e brevemente aumentando a velocidade de movimento de Loki.' },
      { name: 'Radial Disarm', icon: 'assets/abilities/loki/radial_disarm.png', description: 'Emite uma onda de energia que desarma permanentemente todos os inimigos próximos, forçando-os a recorrer ao combate corpo a corpo.' },
    ],
    acquisition: {
      source_type: 'boss_drop',
      blueprint: 'Blueprint principal comprada no Mercado.',
      parts: 'Blueprints de componentes droppam do assassinato do Hyena Pack em Psamathe, Netuno. Taxas: Neuroptics 38,72%, Chassis 38,72%, Sistemas 22,56%.',
      alternative: 'Também disponível no Circuit (Duviri) quando o Loki está na rotação: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Sistemas), Tier 10 (Blueprint principal).',
      recommended_farm: 'Netuno / Psamathe — assassinato do Hyena Pack, ~14 kills garantem Neuroptics/Chassis.',
    },
  },
  'ember': {
    title: 'A Fúria Ardente',
    description: 'Uma Warframe elementar que canaliza o fogo para incinerar batalhões inteiros. Quanto mais inimigos em chamas ao seu redor, mais devastadora ela se torna.',
    portraits: { base: 'assets/icons/base/ember.png', prime: 'assets/icons/prime/ember.png' },
    abilities: [
      { type: 'passive', name: 'Calor Ardente', icon: 'assets/abilities/ember/passive.png', description: 'Cada inimigo próximo afetado por queimadura aumenta a Força de Habilidade da Ember, recompensando o caos em chamas.' },
      { name: 'Fireball', icon: 'assets/abilities/ember/fireball.png', description: 'Arremessa uma bola de fogo que explode no impacto, ateando fogo nos inimigos atingidos.' },
      { name: 'Immolation', icon: 'assets/abilities/ember/immolation.png', description: 'Envolve-se em chamas que concedem redução de dano. O calor cresce com o uso de habilidades e precisa ser controlado para não consumir toda a energia.' },
      { name: 'Fire Blast', icon: 'assets/abilities/ember/fire-blast.png', description: 'Libera uma onda de chamas em círculo que arranca a armadura dos inimigos e deixa um anel de fogo no chão.' },
      { name: 'Inferno', icon: 'assets/abilities/ember/inferno.png', description: 'Invoca uma chuva de meteoros flamejantes que caem sobre os inimigos próximos, queimando todos de uma só vez.' },
    ],
    acquisition: {
      source_type: 'boss_drop',
      blueprint: 'Blueprint principal comprada no Mercado.',
      parts: 'Blueprints de componentes droppam do assassinato do General Sargas Ruk em Tethys, Saturno. Taxas: Neuroptics 38,72%, Chassis 38,72%, Sistemas 22,56%.',
      alternative: 'Também disponível no Circuit (Duviri) quando a Ember está na rotação: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Sistemas), Tier 10 (Blueprint principal).',
      recommended_farm: 'Saturno / Tethys — farm rápido de assassinato, ~14 kills garantem Neuroptics/Chassis.',
    },
  },
  'gara': {
    title: 'A Senhora do Vidro',
    description: 'Uma Warframe que molda vidro fundido para cortar e aprisionar inimigos. Suas defesas se fortalecem a cada lâmina que ela despedaça pelo campo de batalha.',
    portraits: { base: 'assets/icons/base/gara.png', prime: 'assets/icons/prime/gara.png' },
    abilities: [
      { type: 'passive', name: 'Brilho Cortante', icon: 'assets/abilities/gara/passive.png', description: 'Acertos consecutivos com armas brancas cegam os inimigos próximos com um clarão ofuscante.' },
      { name: 'Shattered Lash', icon: 'assets/abilities/gara/shattered-lash.png', description: 'Brande uma lâmina de vidro afiada para golpear inimigos em arco ou em linha reta.' },
      { name: 'Splinter Storm', icon: 'assets/abilities/gara/splinter-storm.png', description: 'Envolve um alvo em uma tempestade de cacos giratórios que reduz dano e fere quem se aproxima.' },
      { name: 'Spectrorage', icon: 'assets/abilities/gara/spectrorage.png', description: 'Cria um anel de espelhos que enfurece os inimigos a atirar em seus próprios reflexos, explodindo em estilhaços ao final.' },
      { name: 'Mass Vitrify', icon: 'assets/abilities/gara/mass-vitrify.png', description: 'Levanta uma muralha de vidro que cresce ao redor da Gara, congelando inimigos no lugar e podendo ser estilhaçada para causar dano.' },
    ],
    acquisition: {
      source_type: 'cetus_offerings',
      blueprint: 'Blueprint principal obtida ao completar a quest Saya\'s Vigil. Cópias adicionais custam 50.000 de standing com o Cephalon Simaris.',
      parts: 'Blueprints de componentes droppam das Cetus Bounties no Plains of Eidolon: Chassis em Lvl 5-15, Sistemas em Lvl 10-30, Neuroptics em Lvl 20-40 (maiores chances nos final stages, ~23-30%).',
      alternative: 'Também disponível no Circuit (Duviri) quando a Gara está na rotação: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Sistemas), Tier 10 (Blueprint principal).',
      recommended_farm: 'Plains of Eidolon — faça a Cetus Bounty do nível apropriado para cada componente; final stages têm as melhores chances.',
    },
  },
  'gyre': {
    title: 'A Dança Elétrica',
    description: 'Uma Warframe carregada por correntes elétricas em constante crescimento. Cada acerto crítico alimenta sua eletricidade e transforma o combate em um espetáculo cintilante.',
    portraits: { base: 'assets/icons/base/gyre.png', prime: 'assets/icons/prime/gyre.png' },
    abilities: [
      { type: 'passive', name: 'Carga Cintilante', icon: 'assets/abilities/gyre/passive.png', description: 'Acertos críticos aumentam a chance e o multiplicador de críticos das próximas habilidades da Gyre.' },
      { name: 'Arcsphere', icon: 'assets/abilities/gyre/arcsphere.png', description: 'Libera esferas elétricas que orbitam a Gyre e descarregam raios contra inimigos próximos.' },
      { name: 'Coil Horizon', icon: 'assets/abilities/gyre/coil-horizon.png', description: 'Arremessa um portal eletromagnético que puxa inimigos para o centro antes de explodir em uma descarga.' },
      { name: 'Cathode Grace', icon: 'assets/abilities/gyre/cathode-grace.png', description: 'Carrega a Gyre com energia que aumenta a chance crítica de suas habilidades por um tempo.' },
      { name: 'Rotorswell', icon: 'assets/abilities/gyre/rotorswell.png', description: 'Envolve a Gyre em um turbilhão elétrico que potencializa o dano crítico das outras habilidades e descarrega raios em cadeia.' },
    ],
    acquisition: {
      source_type: 'enemy_drop',
      blueprint: 'Blueprint principal dropa das Zariman Bounties no Chrysalith: Lvl 90-95 ou Lvl 110-115 (12,99% cada).',
      parts: 'Blueprints de componentes droppam das Zariman Bounties: Neuroptics Lvl 50-55 (13,04%), Chassis Lvl 60-65 (13,56%), Sistemas Lvl 70-75 (11,90%).',
      recommended_farm: 'Chrysalith / Zariman — faça a bounty do nível apropriado para cada componente, ~7-8 stages esperados por parte.',
    },
  },
  'khora': {
    title: 'A Caçadora e Sua Fera',
    description: 'Uma Warframe que luta lado a lado com sua companheira felina Venari. Juntas, dominam o campo de batalha com chicotes, correntes e garras implacáveis.',
    portraits: { base: 'assets/icons/base/khora.png', prime: 'assets/icons/prime/khora.png', variants: [{ key: 'attack', label: 'Attack' }, { key: 'protect', label: 'Protect' }, { key: 'heal', label: 'Heal' }] },
    abilities: [
      { type: 'passive', name: 'Vínculo Selvagem', icon: 'assets/abilities/khora/passive.png', description: 'A pantera Venari acompanha a Khora a todo momento e pode ser ressuscitada após cair.' },
      { name: 'Whipclaw', icon: 'assets/abilities/khora/whipclaw.png', description: 'Um golpe brutal de chicote que causa dano em área e ecoa contra inimigos presos.' },
      { name: 'Ensnare', icon: 'assets/abilities/khora/ensnare.png', description: 'Lança um nó metálico que prende um inimigo e arrasta outros próximos para o mesmo aglomerado.' },
      { name: 'Venari', icon: 'assets/abilities/khora/venari.png', description: 'Comanda a postura da pantera Venari entre ataque, cura ou proteção, mudando o foco da companheira.' },
      { name: 'Strangledome', icon: 'assets/abilities/khora/strangledome.png', description: 'Cria uma cúpula de correntes vivas que enforca inimigos no ar, transformando-os em alvos fáceis para a Whipclaw.' },
    ],
    acquisition: {
      source_type: 'enemy_drop',
      blueprint: 'Blueprint principal comprada no Mercado.',
      parts: 'Blueprints de componentes droppam do Sanctuary Onslaught padrão (não Elite): Rotação A 7,14%, B 7,14%, C 9,09% cada. Cada duas stages é uma rotação (A-A-B-C).',
      alternative: 'Também disponível no Circuit (Duviri) quando a Khora está na rotação: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Sistemas), Tier 10 (Blueprint principal).',
      recommended_farm: 'Sanctuary Onslaught — chegue na Rotação C (stage 8) para melhores chances; leve uma frame de DPS/eficiência.',
    },
  },
  'koumei': {
    title: 'A Senhora do Acaso',
    description: 'Uma Warframe que confia no destino e nos dados para vencer. Suas habilidades giram em torno de apostas e bênçãos da sorte, recompensando a coragem com poder devastador.',
    portraits: { base: 'assets/icons/base/koumei.png' },
    abilities: [
      { type: 'passive', name: 'Bênção da Sorte', icon: 'assets/abilities/koumei/passive.png', description: 'Acertos críticos podem completar marcas de destino que concedem bênçãos temporárias à Koumei.' },
      { name: 'Kumihimo', icon: 'assets/abilities/koumei/kumihimo.png', description: 'Tece um cordão sagrado que prende inimigos em série e os arrasta quando a Koumei se move.' },
      { name: 'Omikuji', icon: 'assets/abilities/koumei/omikuji.png', description: 'Rola os dados do destino para conceder uma bênção aleatória que potencializa a Koumei e seus aliados.' },
      { name: 'Omamori', icon: 'assets/abilities/koumei/omamori.png', description: 'Concede um amuleto que pode anular um golpe fatal e devolver parte do dano absorvido.' },
      { name: 'Bunraku', icon: 'assets/abilities/koumei/bunraku.png', description: 'Invoca marionetes espirituais que distraem e atacam inimigos, transformando o caos em um espetáculo coreografado.' },
    ],
    acquisition: {
      source_type: 'enemy_drop',
      blueprint: 'Blueprint principal dropa de Shrine Defense em Saya\'s Visions, Terra a 4,09%. Requer Saya\'s Vigil e Once Awake.',
      parts: 'Blueprints de componentes também droppam de Shrine Defense a 4,09% cada.',
      alternative: 'Alternativamente, compre no Koumei\'s Shrine em Cetus usando Fate Pearls dropadas pelo Infested Oni no fim de Shrine Defense (55 por componente, 165 para o principal; 330 no total).',
      recommended_farm: 'Saya\'s Visions / Terra Shrine Defense — colete Fate Pearls dos kills do Oni; Steel Path dobra os pearls (20-24 vs 14-18).',
    },
  },
  'lavos': {
    title: 'O Alquimista das Eras',
    description: 'Uma Warframe ancestral que troca energia por tempos de recarga e mistura efeitos elementais nas próprias habilidades. Cada combinação se torna uma poção devastadora.',
    portraits: { base: 'assets/icons/base/lavos.png', prime: 'assets/icons/prime/lavos.png' },
    abilities: [
      { type: 'passive', name: 'Catalisador Vivo', icon: 'assets/abilities/lavos/passive.png', description: 'Lavos não usa energia, mas tem tempos de recarga em suas habilidades, e pode infundir elementos nelas tocando armas elementais.' },
      { name: 'Ophidian Bite', icon: 'assets/abilities/lavos/ophidian-bite.png', description: 'Avança como uma serpente e morde um inimigo, recuperando vida e drenando seus efeitos de estado.' },
      { name: 'Vial Rush', icon: 'assets/abilities/lavos/vial-rush.png', description: 'Desliza pelo chão deixando um rastro de frascos voláteis que explodem em reações elementais.' },
      { name: 'Transmutation Probe', icon: 'assets/abilities/lavos/transmutation-probe.png', description: 'Lança uma sonda saltitante que aplica efeitos de estado aleatórios em todos os inimigos que toca.' },
      { name: 'Catalyze', icon: 'assets/abilities/lavos/catalyze.png', description: 'Libera uma onda alquímica em área que detona todos os efeitos de estado dos inimigos atingidos, multiplicando o dano elemental.' },
    ],
    acquisition: {
      source_type: 'syndicate',
      blueprint: 'Todas as blueprints compradas com o Father com standing dos Entrati. Blueprint principal requer Rank 2 - Acquaintance, componentes Rank 3 - Associate. Cada uma custa 5.000 de standing (20.000 no total).',
      parts: 'Blueprints de componentes vendidas pelo Father ao alcançar Rank 3 - Associate com Entrati.',
      recommended_farm: 'Farme standing dos Entrati no Cambion Drift via bounties e gifting de tokens.',
    },
  },
  'mag': {
    title: 'A Força Magnética',
    description: 'Uma Warframe que manipula campos magnéticos para puxar inimigos, despedaçar escudos e transformar projéteis em armadilhas. Brilha contra alvos blindados e tecnológicos.',
    portraits: { base: 'assets/icons/base/mag.png', prime: 'assets/icons/prime/mag.png' },
    abilities: [
      { type: 'passive', name: 'Atração Inevitável', icon: 'assets/abilities/mag/passive.png', description: 'Tiros próximos à Mag são atraídos magneticamente para os inimigos, melhorando a precisão sob pressão.' },
      { name: 'Pull', icon: 'assets/abilities/mag/pull.png', description: 'Arranca inimigos do lugar com uma rajada magnética, deixando-os atordoados no chão.' },
      { name: 'Magnetize', icon: 'assets/abilities/mag/magnetize.png', description: 'Cria um campo magnético em torno de um alvo que prende projéteis e amplifica o dano contra ele.' },
      { name: 'Polarize', icon: 'assets/abilities/mag/polarize.png', description: 'Emite um pulso que arranca escudos e armaduras, transformando os fragmentos em estilhaços letais.' },
      { name: 'Crush', icon: 'assets/abilities/mag/crush.png', description: 'Levanta todos os inimigos próximos no ar e os esmaga com uma onda magnética colossal.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Uma das três warframes iniciais disponíveis na quest Awakening. Blueprint principal também pode ser comprada no Mercado.',
      parts: 'Blueprints de componentes droppam do assassinato do The Sergeant em Iliad, Phobos. Taxas: Neuroptics 38,72%, Chassis 38,72%, Sistemas 22,56%.',
      alternative: 'Também disponível no Circuit (Duviri): Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Sistemas), Tier 10 (Principal). Versão pronta pode ser comprada do Teshin por 60.000 standing do Conclave.',
      recommended_farm: 'Phobos / Iliad — farm rápido de assassinato, ~14 kills garantem Neuroptics/Chassis.',
    },
  },
  'nokko': {
    title: 'O Semeador de Esporos',
    description: 'Uma Warframe fúngica que cresce e se espalha pelo campo de batalha. Espalha esporos, raízes e cogumelos que se alimentam dos inimigos para fortalecer aliados.',
    portraits: { base: 'assets/icons/base/nokko.png' },
    abilities: [
      { type: 'passive', name: 'Decadência Vital', icon: 'assets/abilities/nokko/passive.png', description: 'Inimigos abatidos próximos à Nokko liberam esporos que curam e fortalecem a Warframe e seus aliados.' },
      { name: 'Stinkbrain', icon: 'assets/abilities/nokko/stinkbrain.png', description: 'Lança uma nuvem fétida que confunde inimigos e os faz atacar uns aos outros.' },
      { name: 'Brightbonnet', icon: 'assets/abilities/nokko/brightbonnet.png', description: 'Faz brotar um cogumelo luminoso que ilumina a área e potencializa as habilidades de aliados próximos.' },
      { name: 'Reroot', icon: 'assets/abilities/nokko/reroot.png', description: 'Cria raízes vivas que prendem inimigos no chão e os drenam para alimentar a Nokko.' },
      { name: 'Sporespring', icon: 'assets/abilities/nokko/sporespring.png', description: 'Libera uma explosão de esporos que se espalham por toda a área, infectando inimigos e curando aliados em cadeia.' },
    ],
    acquisition: {
      source_type: 'enemy_drop',
      blueprint: 'Blueprint principal dropa das Deepmines Bounties (Rotação C) como drop raro (5-8%). Requer The New War.',
      parts: 'Blueprints de componentes droppam das Deepmines Bounties como drops incomuns: Neuroptics (Weed The Gardens), Chassis (Critter Liberation), Sistemas (Corporate Restructuring). 10% na Rotação C, 2,50-5% na B.',
      alternative: 'Alternativamente, compre com o Nightcap em Fortuna no Rank 4 - Gardener usando Fergolyte das Deepmines Bounties (160 por componente, 240 para o principal; 720 no total).',
      recommended_farm: 'Faça Deepmines Bounties no Steel Path para drop rates melhores e acúmulo de Fergolyte mais rápido.',
    },
  },
  'nova': {
    title: 'A Cientista da Antimatéria',
    description: 'Uma Warframe que manipula antimatéria para acelerar ou retardar o tempo dos inimigos. Pequenas detonações ganham proporções catastróficas em suas mãos.',
    portraits: { base: 'assets/icons/base/nova.png', prime: 'assets/icons/prime/nova.png' },
    abilities: [
      { type: 'passive', name: 'Repulsão Quântica', icon: 'assets/abilities/nova/passive.png', description: 'Quando atingida por um golpe corpo a corpo, a Nova libera uma explosão de antimatéria que lança o atacante longe.' },
      { name: 'Null Star', icon: 'assets/abilities/nova/null-star.png', description: 'Invoca partículas de antimatéria que orbitam a Nova, reduzindo dano recebido e perseguindo inimigos próximos.' },
      { name: 'Antimatter Drop', icon: 'assets/abilities/nova/antimatter-drop.png', description: 'Lança uma esfera lenta de antimatéria que absorve tiros e explode causando dano proporcional ao que recebeu.' },
      { name: 'Wormhole', icon: 'assets/abilities/nova/wormhole.png', description: 'Abre um buraco de minhoca que transporta a Nova e seus aliados instantaneamente para um ponto distante.' },
      { name: 'Molecular Prime', icon: 'assets/abilities/nova/molecular-prime.png', description: 'Libera uma onda que marca inimigos com antimatéria, deixando-os lentos e fazendo-os explodir em cadeia ao morrer.' },
    ],
    acquisition: {
      source_type: 'boss_drop',
      blueprint: 'Blueprint principal comprada no Mercado.',
      parts: 'Blueprints de componentes droppam do assassinato dos Raptors em Naamah, Europa. Taxas: Neuroptics 38,72%, Chassis 38,72%, Sistemas 22,56%.',
      alternative: 'Também disponível no Circuit (Duviri) quando a Nova está na rotação: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Sistemas), Tier 10 (Blueprint principal).',
      recommended_farm: 'Europa / Naamah — assassinato dos Raptors, ~14 kills garantem Neuroptics/Chassis.',
    },
  },
  'qorvex': {
    title: 'O Golem Brutalista',
    description: 'Uma Warframe colossal feita de concreto radioativo que ergue muralhas e pilares no campo de batalha. Suas estruturas servem tanto como cobertura quanto como armas.',
    portraits: { base: 'assets/icons/base/qorvex.png' },
    abilities: [
      { type: 'passive', name: 'Cadeia Irradiada', icon: 'assets/abilities/qorvex/passive.png', description: 'Habilidades em sequência espalham efeito de radiação entre os inimigos atingidos, criando uma reação em cadeia.' },
      { name: 'Chyrinka Pillar', icon: 'assets/abilities/qorvex/chyrinka-pillar.png', description: 'Ergue um pilar radioativo que pulsa dano em área e enfraquece inimigos próximos.' },
      { name: 'Containment Wall', icon: 'assets/abilities/qorvex/containment-wall.png', description: 'Faz brotar uma muralha de concreto que serve como cobertura e detona em estilhaços radioativos.' },
      { name: 'Disometric Guard', icon: 'assets/abilities/qorvex/disometric-guard.png', description: 'Concede ao Qorvex e aos aliados próximos uma armadura suplementar que reflete parte do dano recebido.' },
      { name: 'Crucible Blast', icon: 'assets/abilities/qorvex/crucible-blast.png', description: 'Dispara um feixe radioativo concentrado que vaporiza inimigos em linha e detona suas estruturas em sequência.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Blueprint principal obtida ao completar a quest Whispers in the Walls.',
      parts: 'Blueprints de componentes droppam das Sanctum Anatomica Bounties como drops incomuns: Neuroptics Lvl 55-60 (13,04%), Chassis Lvl 65-70 (13,56%), Sistemas Lvl 75-80 (12,40%).',
      alternative: 'Alternativamente, compre com o Bird 3 de Cavia: componentes por 20.000 de standing (Rank 2 - Researcher), principal por 50.000 de standing (Rank 4 - Scholar).',
      recommended_farm: 'Faça Sanctum Anatomica Bounties no nível apropriado para cada componente, ~7-8 stages esperados por parte.',
    },
  },
  'uriel': {
    title: 'O Herege de Xata',
    description: 'Uma Warframe demoníaca que pune e purifica em partes iguais. Alterna entre castigar inimigos com chamas e curar aliados com chamas sagradas.',
    portraits: { base: 'assets/icons/base/uriel.png' },
    abilities: [
      { type: 'passive', name: 'Fé Profana', icon: 'assets/abilities/uriel/passive.png', description: 'Cada habilidade lançada acumula fé que alterna entre potencializar dano demoníaco ou cura sagrada.' },
      { name: 'Infernalis', icon: 'assets/abilities/uriel/infernalis.png', description: 'Conjura uma chama infernal que persegue inimigos e os queima com dano crescente.' },
      { name: 'Remedium', icon: 'assets/abilities/uriel/remedium.png', description: 'Libera uma onda sagrada que cura aliados próximos e remove efeitos de estado prejudiciais.' },
      { name: 'Demonium', icon: 'assets/abilities/uriel/demonium.png', description: 'Solta um grito demoníaco que aterroriza inimigos próximos, fazendo-os fugir e reduzindo sua resistência.' },
      { name: 'Brimstone', icon: 'assets/abilities/uriel/brimstone.png', description: 'Invoca uma chuva de enxofre flamejante que castiga inimigos e abençoa aliados dentro da área escolhida.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Blueprint principal obtida ao completar a quest The Old Peace.',
      parts: 'Blueprints de componentes droppam de Roathe\'s Oblivion em Infernium 21 do The Descendia a 12,50% cada.',
      alternative: 'Alternativamente, compre com o Roathe em La Cathėdrale, Sanctum Anatomica usando Maphica de The Descendia (25 por componente, 75 para o principal; 150 no total).',
      recommended_farm: 'Roathe / Infernium 21 — ~8 rotações esperadas por parte; colete Maphica para compras na loja de fragmentos.',
    },
  },
  'vauban': {
    title: 'O Engenheiro do Caos',
    description: 'Uma Warframe tática que enche o campo de batalha de minas, torres e armadilhas elétricas. Transforma corredores em zonas mortais e inimigos em alvos indefesos.',
    portraits: { base: 'assets/icons/base/vauban.png', prime: 'assets/icons/prime/vauban.png' },
    abilities: [
      { type: 'passive', name: 'Tática de Campo', icon: 'assets/abilities/vauban/passive.png', description: 'Habilidades do Vauban próximas umas das outras compartilham efeitos, aumentando o controle de área.' },
      { name: 'Tesla Nervos', icon: 'assets/abilities/vauban/tesla-nervos.png', description: 'Solta drones rolantes que perseguem inimigos e os eletrocutam até derrubá-los.' },
      { name: 'Minelayer', icon: 'assets/abilities/vauban/minelayer.png', description: 'Permite escolher entre quatro minas táticas diferentes, cada uma com um efeito devastador.' },
      { name: 'Photon Strike', icon: 'assets/abilities/vauban/photon-strike.png', description: 'Marca o chão para um bombardeio fotônico que detona com força colossal após uma breve carga.' },
      { name: 'Bastille', icon: 'assets/abilities/vauban/bastille.png', description: 'Cria um campo gravitacional que suspende inimigos no ar, podendo ser detonado em uma poderosa onda de Vortex.' },
    ],
    acquisition: {
      source_type: 'nightwave',
      blueprint: 'Blueprint principal comprada no Mercado.',
      parts: 'Blueprints de componentes compradas nas Offerings de Cred do Nightwave por 25 Creds cada (75 no total).',
      alternative: 'Também disponível no Circuit (Duviri) quando o Vauban está na rotação: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Sistemas), Tier 10 (Blueprint principal).',
      recommended_farm: 'Complete as atividades semanais do Nightwave para ganhar Creds e rodar a loja de Cred Offerings.',
    },
  },
  'dante': {
    title: 'O Bardo das Vozes',
    description: 'Estudioso da Leverian e cronista das eras esquecidas, Dante tece versos arcanos que protegem aliados e dilaceram inimigos. Seu tomo Noctua é tanto arma quanto biblioteca viva.',
    portraits: { base: 'assets/icons/base/dante.png' },
    abilities: [
      { type: 'passive', name: 'Escaneamento de Noctua', icon: 'assets/abilities/dante/passive.png', description: 'O tomo Noctua escaneia inimigos para o Códex, e alvos totalmente escaneados sofrem +50% de Chance de Status.' },
      { name: 'Noctua', icon: 'assets/abilities/dante/noctua.png', description: 'Invoca o tomo-arma Noctua, cujos tiros ricocheteiam entre inimigos enquanto o fogo alternativo dispara um projétil amplo.' },
      { name: 'Light Verse', icon: 'assets/abilities/dante/light-verse.png', description: 'Recita um verso luminoso que concede Sobreguarda a Dante e aos aliados próximos.' },
      { name: 'Dark Verse', icon: 'assets/abilities/dante/dark-verse.png', description: 'Profere um verso sombrio que inflige dano de Corte aos inimigos atingidos.' },
      { name: 'Final Verse', icon: 'assets/abilities/dante/final-verse.png', description: 'Combina os versos anteriores em um dos quatro contos finais: Triunfo, Tragédia, Wordwarden ou Pageflight, cada um com efeito devastador único.' },
    ],
    acquisition: {
      source_type: 'enemy_drop',
      blueprint: 'Blueprint principal dropa da Rotação C de Disruption em Armatus, Deimos (7,50%). Requer The Deadlock Protocol e Whispers in the Walls.',
      parts: 'Blueprints de componentes também droppam da Rotação C de Armatus Disruption a 5% cada.',
      alternative: 'Alternativamente, compre com o Loid no Sanctum Anatomica usando Vessel Capillaries dropadas pelos Demolishers (90 por componente, 270 para o principal; 540 no total).',
      recommended_farm: 'Armatus / Deimos Disruption — mate Demolishers para Vessel Capillaries enquanto farma drops da Rotação C.',
    },
  },
  'jade': {
    title: 'A Virtuosa Luminosa',
    description: 'Frame angelical de coros e julgamentos, Jade desce dos céus para curar aliados e marcar inimigos com a Luz do Jade. Sua presença é tanto santuário quanto sentença.',
    portraits: { base: 'assets/icons/base/jade.png', variants: [{ key: 'glory', label: 'Glory' }] },
    abilities: [
      { type: 'passive', name: 'Julgamento', icon: 'assets/abilities/jade/passive.png', description: 'Jade possui dois slots de Mod de Aura, e suas habilidades marcam inimigos com Julgamento, aumentando em 50% sua vulnerabilidade a dano por 10 segundos.' },
      { name: "Light's Judgment", icon: 'assets/abilities/jade/lights-judgment.png', description: 'Cria poços de luz que restauram a vida dos aliados enquanto causam dano de Calor e marcam os inimigos com Julgamento.' },
      { name: 'Symphony of Mercy', icon: 'assets/abilities/jade/symphony-of-mercy.png', description: 'Alterna entre três hinos: Power of The Seven (Força de Habilidade), Deathbringer (dano de arma) e Spirit of Resilience (regeneração de escudo).' },
      { name: 'Ophanim Eyes', icon: 'assets/abilities/jade/ophanim-eyes.png', description: 'Invoca um olhar celestial que lentifica alvos, remove escudos e armaduras, e pode reviver companheiros caídos à distância.' },
      { name: 'Glory on High', icon: 'assets/abilities/jade/glory-on-high.png', description: 'Jade alça voo empunhando a arma exaltada Glory, cujos projéteis aplicam Julgamento e detonam as marcas em área no disparo alternativo.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Blueprint principal obtida ao completar a quest Jade Shadows.',
      parts: 'Blueprints de componentes droppam de Ascension em Brutus, Urano a 4,63% cada.',
      alternative: 'Alternativamente, compre com o Ordis no Drifter\'s Camp usando Vestigial Motes obtidos em Ascension (150 por componente, 450 para o principal; 900 no total).',
      recommended_farm: 'Brutus / Urano Ascension no Steel Path — complete o objetivo Sisters of Parvos para máximo de Vestigial Motes.',
    },
  },
  'protea': {
    title: 'A Engenhosa do Tempo',
    description: 'Criada por Parvos Granum como sua guardiã pessoal, Protea domina engenhocas e manipulação temporal. Seu arsenal de gadgets sustenta a equipe enquanto seu ancoradouro temporal reverte a própria morte.',
    portraits: { base: 'assets/icons/base/protea.png', prime: 'assets/icons/prime/protea.png' },
    abilities: [
      { type: 'passive', name: 'Crítico Calculado', icon: 'assets/abilities/protea/passive.png', description: 'A cada quarto uso consecutivo de habilidade, o conjuro recebe +100% de Força de Habilidade.' },
      { name: 'Grenade Fan', icon: 'assets/abilities/protea/grenade-fan.png', description: 'Lança em leque granadas que viram vórtices de estilhaços contra inimigos, ou satélites que restauram escudos e reforçam o shield gating dos aliados.' },
      { name: 'Blaze Artillery', icon: 'assets/abilities/protea/blaze-artillery.png', description: 'Implanta uma torre estacionária de Calor que se torna mais poderosa a cada disparo realizado.' },
      { name: 'Dispensary', icon: 'assets/abilities/protea/dispensary.png', description: 'Posiciona um dispensador que gera periodicamente Orbes de Vida, Energia e um Pacote de Munição Universal aprimorados.' },
      { name: 'Temporal Anchor', icon: 'assets/abilities/protea/temporal-anchor.png', description: 'Fixa uma âncora temporal que registra o dano causado; ao expirar, Protea torna-se invulnerável, retorna ao ponto inicial e detona uma implosão com todo o dano acumulado.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Blueprint principal obtida ao completar a quest The Deadlock Protocol. Cópias adicionais custam 50.000 de standing com o Cephalon Simaris.',
      parts: 'Blueprints de componentes droppam da Rotação C dos Granum Void no Corpus Ship: Neuroptics do básico, Chassis do Extended, Sistemas do Nightmare. Todos a 11,11%.',
      recommended_farm: 'Use Granum Crowns de cada tier (Granum, Exemplar, Zenith) dos Treasurers em missões Corpus Ship para entrar no Granum Void correto.',
    },
  },
  'styanax': {
    title: 'O Hoplita Heroico',
    description: 'Frame inspirado nos hoplitas da Grécia antiga, Styanax brandi sua lança Axios e seu escudo Tharros para liderar pelo exemplo. Inspira aliados enquanto atrai a fúria inimiga sobre si mesmo.',
    portraits: { base: 'assets/icons/base/styanax.png' },
    abilities: [
      { type: 'passive', name: 'Ímpeto do Escudo', icon: 'assets/abilities/styanax/passive.png', description: 'Sua chance de crítico aumenta proporcionalmente aos escudos e é dobrada quando empunhando lanças de arremesso.' },
      { name: 'Axios Javelin', icon: 'assets/abilities/styanax/axios-javelin.png', description: 'Arremessa uma lança que crava o inimigo em superfícies e gera um vórtice que atrai outros adversários para perto.' },
      { name: 'Tharros Strike', icon: 'assets/abilities/styanax/tharros-strike.png', description: 'Projeta uma onda de escudos que remove escudos e armadura inimigos enquanto restaura a vida de Styanax.' },
      { name: 'Rally Point', icon: 'assets/abilities/styanax/rally-point.png', description: 'Inspira os aliados com regeneração de energia contínua e recuperação de escudos por abate, ao custo de atrair mais atenção dos inimigos.' },
      { name: 'Final Stand', icon: 'assets/abilities/styanax/final-stand.png', description: 'Salta aos céus ao lado de soldados espectrais e despeja uma chuva de lanças sobre os inimigos abaixo.' },
    ],
    acquisition: {
      source_type: 'syndicate',
      blueprint: 'Todas as blueprints compradas com o Chipper na Kahl\'s Garrison usando Stock obtido em missões semanais Break Narmer. Disponível após completar a quest Veilbreaker.',
      parts: 'Sistemas no Rank 2 - Encampment, Neuroptics no Rank 3 - Fort, Chassis no Rank 4 - Settlement, Principal no Rank 5 - Home. Componentes custam 60 Stock cada, principal custa 90 (270 no total).',
      recommended_farm: 'Complete as missões semanais Break Narmer do Kahl toda semana para acumular Stock e subir de Rank na Kahl\'s Garrison.',
    },
  },
  'yareli': {
    title: 'A Cavaleira das Ondas',
    description: 'Heroína folclórica das Crianças do Vento, Yareli dança sobre seu hoverboard Merulina manejando a graça das águas. Sua mobilidade aquática transforma cada manobra em uma rajada letal.',
    portraits: { base: 'assets/icons/base/yareli.png', prime: 'assets/icons/prime/yareli.png', variants: [{ key: 'merulina', label: 'Merulina' }] },
    abilities: [
      { type: 'passive', name: 'Fluxo Crítico', icon: 'assets/abilities/yareli/passive.png', description: 'Após permanecer em movimento por 1,5 segundos, suas armas secundárias recebem +200% de Chance de Crítico.' },
      { name: 'Sea Snares', icon: 'assets/abilities/yareli/sea-snares.png', description: 'Cria globos de água que caçam inimigos, suspendendo-os no ar enquanto amplificam sua vulnerabilidade a dano.' },
      { name: 'Merulina', icon: 'assets/abilities/yareli/merulina.png', description: 'Invoca seu hoverboard K-Drive de assinatura, que oferece mobilidade aquática e redirecionamento de dano como proteção.' },
      { name: 'Aquablades', icon: 'assets/abilities/yareli/aquablades.png', description: 'Conjura três lâminas giratórias de água que orbitam Yareli e dilaceram inimigos próximos.' },
      { name: 'Riptide', icon: 'assets/abilities/yareli/riptide.png', description: 'Gera um ciclone aquático que suga os inimigos para seu vórtice antes de detonar em uma explosão devastadora.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Blueprint principal obtida ao completar a quest The Waverider. Cópias adicionais custam 50.000 de standing com o Cephalon Simaris.',
      parts: 'Blueprints de componentes obtidas via pesquisa no Ventkids\' Bash Lab dentro do Clan Dojo.',
      recommended_farm: 'Complete a quest The Waverider; pesquise os componentes no Ventkids\' Bash Lab do Dojo.',
    },
  },
  'zephyr': {
    title: 'A Senhora dos Ventos',
    description: 'Ágil terror dos céus que entrega julgamento veloz do alto, Zephyr domina correntes de ar como ninguém. Leve e mortal, ela ergue inimigos em tornados enquanto plana com graça inalcançável.',
    portraits: { base: 'assets/icons/base/zephyr.png', prime: 'assets/icons/prime/zephyr.png' },
    abilities: [
      { type: 'passive', name: 'Graça Aérea', icon: 'assets/abilities/zephyr/passive.png', description: 'Zephyr cai lentamente e ganha aceleração em pleno ar, e suas armas recebem +150% de Chance de Crítico durante o voo.' },
      { name: 'Tail Wind', icon: 'assets/abilities/zephyr/tail-wind.png', description: 'Impulsiona Zephyr pelo ar na direção desejada, ou a mantém pairando estacionária em sua altura atual.' },
      { name: 'Airburst', icon: 'assets/abilities/zephyr/airburst.png', description: 'Dispara uma rajada de vento que afasta inimigos ou os agrupa, dependendo de como a habilidade é acionada.' },
      { name: 'Turbulence', icon: 'assets/abilities/zephyr/turbulence.png', description: 'Cria uma barreira protetora de vento ao redor de Zephyr que desvia os projéteis inimigos recebidos.' },
      { name: 'Tornado', icon: 'assets/abilities/zephyr/tornado.png', description: 'Conjura tornados errantes que erguem inimigos no ar como bonecos de pano e absorvem dano elemental para amplificá-lo.' },
    ],
    acquisition: {
      source_type: 'dojo_research',
      blueprint: 'Todas as blueprints podem ser pesquisadas no Tenno Lab no Dojo.',
      parts: 'Componentes são obtidos via pesquisa no Tenno Lab e construídos na Foundry.',
    },
  },
  'oraxia': {
    title: 'A Dama das Teias',
    description: 'Guardiã pessoal de Albrecht Entrati em Duviri, Oraxia caça nas sombras com graça sinistra e versatilidade letal. A evolução da predadora perfeita, ela tece o medo em cada movimento.',
    portraits: { base: 'assets/icons/base/oraxia.png' },
    abilities: [
      { type: 'passive', name: 'Espreita do Predador', icon: 'assets/abilities/oraxia/passive.png', description: 'Ao agarrar-se a paredes, Oraxia torna-se invisível por 8 segundos.' },
      { name: "Mercy's Kiss", icon: 'assets/abilities/oraxia/mercys-kiss.png', description: 'Avança em um bote letal que executa inimigos com vida baixa, fazendo-os soltar Orbes de Vida e Energia.' },
      { name: 'Webbed Embrace', icon: 'assets/abilities/oraxia/webbed-embrace.png', description: 'Aprisiona inimigos em teias e impõe Vulnerabilidade a Dano sobre os alvos capturados.' },
      { name: "Widow's Brood", icon: 'assets/abilities/oraxia/widows-brood.png', description: 'Crava dardos em alvos; quando estes morrem, Scuttlers aliados emergem para combater ao seu lado.' },
      { name: 'Silken Stride', icon: 'assets/abilities/oraxia/silken-stride.png', description: 'Desdobra suas pernas de aranha, ganhando imunidade a status, vida bônus, armas primárias e secundárias infundidas com Toxina e um rolamento puxado por seda.' },
    ],
    acquisition: {
      source_type: 'duviri',
      blueprint: 'Blueprint principal dropa da Rotação A de Isleweaver em Duviri a 7,69%. Requer a quest The Hex.',
      parts: 'Blueprints de componentes também droppam de Isleweaver Rotação A a 7,69% cada.',
      alternative: 'Alternativamente, compre com a Acrithis no Dormizone usando Scuttler Husks obtidos em Isleweaver (20 por componente, 60 para o principal; 120 no total).',
      recommended_farm: 'Faça Isleweaver em Duviri — Steel Path tem as mesmas chances; ~13 rotações A esperadas por parte.',
    },
  },
};

// English overlay: only title/description and ability name/description. Portraits + icons reused from PT base.
const WARFRAMES_DETAILS_EN = {
  'octavia': {
    title: 'The Maestro',
    description: 'Bard of the Origin System: composes rhythms on the Mandachord that taunt enemies, charm crowds, amplify team damage, and regenerate energy. Each ability plays a section of the song assembled by the player.',
    abilities: [
      { type: 'passive', name: 'Inspiration', description: 'When activating any ability, Octavia and allies within 15 m gain the Inspiration buff: 1 energy per second for 30 seconds. Recasting an ability refreshes the duration.' },
      { name: 'Mallet', description: 'Throws a floating, invulnerable device that plays the Percussion of the song. Taunts nearby enemies into attacking it and returns absorbed damage as Blast, distributed across the rhythm beats.' },
      { name: 'Resonator', description: 'Releases a rolling sphere that plays the Bass and charms enemies into following it — the more followers, the larger the radius. If a Mallet is active, the Resonator carries it along, combining attraction and damage.' },
      { name: 'Metronome', description: 'Creates a Melody aura that grants armor to allies inside it. Actions synchronized with the rhythm grant buffs: jump (Vivace — speed), crouch (Nocturne — invisibility), shoot (Opera — multishot), and melee (Forte — melee damage).' },
      { name: 'Amp', description: 'Deploys an amplifier that turns the ground into a sound field of 8–14 m. Allies inside it receive a weapon damage bonus proportional to ambient sound — gunfire, footsteps, alarms, and abilities themselves feed the multiplier.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Main blueprint and Mandachord acquired from the Octavia\'s Anthem quest. Additional copies cost 25,000 (Mandachord) or 50,000 (main) standing from Cephalon Simaris.',
      parts: 'Chassis from the Music Puzzle on Lua (100% guaranteed). Neuroptics from Rotation C of Terrorem Survival, Deimos (22.56%). Systems from A Rotation Cache of Plato, Lua (22.56%).',
      alternative: 'Also available in The Circuit (Duviri) when Octavia is in rotation: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Systems), Tier 10 (Main Blueprint).',
      recommended_farm: 'Solve the Lua Music Puzzle once for Chassis; run Terrorem (Deimos) and Plato (Lua) for the other parts.',
    },
  },
  'follie': {
    title: 'The Shadowgrapher',
    description: 'Macabre artist of inks and pantomime, Follie controls the field with ink stains that confuse enemies. Mixes mischievous support with theatrical traps.',
    abilities: [
      { type: 'passive', name: 'Ink Stain', description: 'Abilities splash ink on enemies, slowing them for a time. Stained targets have a chance to drop health and energy orbs on death.' },
      { name: 'Forced Perspective', description: 'Dives into a pool of ink to reappear at another point. During the transition she is invulnerable and clears active status effects.' },
      { name: 'Shadowgraph', description: 'Sketches tools and equipment into existence, conjuring useful items. Some of the creations are exclusive to the current mission type.' },
      { name: 'Self Portrait', description: 'Paints an ink clone that serves as a decoy for enemies. While the portrait persists, Follie receives damage reduction.' },
      { name: 'Plein Air', description: 'Ties enemies to balloons that lift them into the air, stripping armor and shields. Popping the balloon sends the target into a fatal fall.' },
    ],
    acquisition: {
      source_type: 'enemy_drop',
      blueprint: 'Main blueprint drops from Rotation A of Follie\'s Hunt on Vesper Relay, Venus (5% normal, 6% Steel Path). Requires Chains of Harrow.',
      parts: 'Component blueprints also drop from Rotation A of Follie\'s Hunt at 5% (6% on Steel Path) each.',
      alternative: 'Alternatively, purchase from Aspirant Zorba in any relay using Atramentum awarded from Follie\'s Hunt (400 per component, 1200 for main; 2400 total).',
      recommended_farm: 'Vesper Relay / Venus — Follie\'s Hunt on Steel Path for improved drop chance and faster Atramentum.',
    },
  },
  'volt': {
    title: 'The Live Wire',
    description: 'Electricity specialist, Volt speeds up allies, raises energy barriers, and unleashes devastating discharges. Versatile across damage, support, and defense.',
    abilities: [
      { type: 'passive', name: 'Static Charge', description: 'Moving across the ground accumulates electric charge in Volt. The stored energy is released on the next attack, adding to the damage.' },
      { name: 'Shock', description: 'Fires an electric projectile that chains between nearby enemies. Excellent for stunning groups and starting electric combos.' },
      { name: 'Speed', description: 'Grants a burst of speed to Volt and nearby allies. Increases movement, attack speed, and reload speed.' },
      { name: 'Electric Shield', description: 'Creates a portable barrier that blocks enemy shots. Allied shots passing through the shield gain bonus Electricity damage and critical hits.' },
      { name: 'Discharge', description: 'Electrifies enemies in an area, turning them into living towers. They paralyze and electrocute other adversaries around them.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'One of three starter Warframes available during the Awakening quest. Blueprints can also be researched from the Tenno Lab in the Dojo.',
      parts: 'Components obtained via Tenno Lab research (Dojo) and built in the Foundry.',
      alternative: 'Volt can also be bought complete from Teshin for 60,000 Conclave standing once Typhoon rank is achieved.',
      recommended_farm: 'Pick Volt as your starter, or research him at the Dojo\'s Tenno Lab.',
    },
  },
  'caliban': {
    title: 'The Survivor',
    description: 'Hybrid of Warframe and Sentient, Caliban combines battlefield disruption with adaptability. Makes targets vulnerable while sustaining himself and his allies.',
    abilities: [
      { type: 'passive', name: 'Sentient Adaptation', description: 'Allies within affinity range gain resistance to the damage types they are receiving. The adaptation adjusts according to threats on the field.' },
      { name: 'Razor Gyre', description: 'Charges spinning at high speed, cutting through enemies with energy blades. Restores health, shields, and energy as he hits targets.' },
      { name: 'Sentient Wrath', description: 'Strikes the ground, releasing a wave that suspends enemies in the air. Hit targets become vulnerable to amplified damage.' },
      { name: 'Lethal Progeny', description: 'Summons Sentient companions that attack in melee, at range, or distract. They also regenerate shields of nearby allies.' },
      { name: 'Fusion Strike', description: 'Converges energy beams into a single point, stripping shields and armor. Leaves behind a residual field that continues to deal damage.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Main blueprint purchased from the Market. Acquisition unlocked after completing The New War quest.',
      parts: 'Component blueprints drop from Narmer Bounties (Cetus or Fortuna, Lvl 50-70) as an uncommon drop. Which component rotates randomly every 2.5 hours. Drop rates around 5.45-8.11% per stage.',
      recommended_farm: 'Run Narmer Bounties Lvl 50-70 Stages 2 & 3 — ~12 stages expected per component.',
    },
  },
  'oberon': {
    title: 'The Mystic',
    description: 'Paladin of the forest, Oberon balances offensive zeal with healing and protection. Consecrates the terrain in favor of allies and punishes enemies with Radiation.',
    abilities: [
      { type: 'passive', name: 'Righteous Denial', description: 'Collecting health orbs grants Oberon and nearby allies brief invulnerability. The effect blocks the next damage taken and can stack.' },
      { name: 'Smite', description: 'Launches a Radiation projectile at a target, stripping armor and Overguard. Deals percentage damage and generates fragments that chase nearby enemies.' },
      { name: 'Hallowed Ground', description: 'Consecrates the ground ahead, inflicting Radiation on enemies over it. Allies in the area become immune to status and have negative effects removed.' },
      { name: 'Renewal', description: 'Sends healing waves that restore the health of nearby allies. Also increases armor and prolongs bleedout recovery time when downed.' },
      { name: 'Reckoning', description: 'Suspends enemies in the air and slams them against the ground, stripping armor. Targets under Radiation suffer extra damage and have a higher chance to drop health orbs.' },
    ],
    acquisition: {
      source_type: 'railjack',
      blueprint: 'Purchased from the in-game Market.',
      parts: 'Components drop from Points of Interest (caches) in Railjack/Empyrean missions. Neuroptics and Systems on Earth Proxima, Chassis on Saturn Proxima — 10% drop chance per "A" cache.',
      alternative: 'Also available in The Circuit (Duviri) during weeks when Oberon is in rotation: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Systems), Tier 10 (Main Blueprint).',
      recommended_farm: 'Earth Proxima covers 2 of 3 components (Neuroptics + Systems). To skip RNG, The Circuit gives guaranteed tier-based unlocks when Oberon is available.',
    },
  },
  'equinox': {
    title: 'The Duality',
    description: 'Mirror of day and night, Equinox alternates between offensive and defensive forms depending on the situation. Adapts her support to strengthen allies or weaken enemies.',
    abilities: [
      { type: 'passive', name: 'Balance', description: "Part of the health orbs collected is converted into energy, and part of the energy orbs into health. The balance between resources matches the Warframe's dual theme." },
      { name: 'Metamorphosis', description: 'Switches between Day and Night form. Day form boosts weapon damage and speed; Night form reinforces armor and shields.' },
      { name: 'Rest & Rage', description: 'In Night form (Rest), lulls enemies into deep sleep. In Day form (Rage), applies damage vulnerability to enraged targets.' },
      { name: 'Pacify & Provoke', description: 'In Night form (Pacify), an aura reduces damage dealt by nearby enemies. In Day form (Provoke), amplifies the Ability Strength of allies.' },
      { name: 'Mend & Maim', description: 'In Night form (Mend), slain enemies restore allied shields and health. In Day form (Maim), accumulates Slash damage from kills to release in a devastating explosion.' },
    ],
    acquisition: {
      source_type: 'boss_drop',
      blueprint: 'Main blueprint purchased from the Market. Equinox requires building both Night Aspect and Day Aspect (each with their own Neuroptics, Chassis, and Systems) before crafting.',
      parts: 'All Day and Night Aspect parts drop from Tyl Regor assassination on Titania, Uranus. Aspect blueprints at 22.56% each, component blueprints at 25.81% each.',
      recommended_farm: 'Titania / Uranus — repeat Tyl Regor assassinations; expect long farm due to 8 distinct parts needed.',
    },
  },
  'banshee': {
    title: 'The Sonic',
    description: 'Master of sound, Banshee exposes enemy weak points and silences weapons on the field. Combines acoustic crowd control with damage amplification for the team.',
    abilities: [
      { type: 'passive', name: 'Silencer', description: "Banshee's shots are silenced, preventing enemies from hearing her gunfire. Facilitates stealth attacks and surprise approaches." },
      { name: 'Sonic Boom', description: 'Releases a concentrated sonic wave forward, throwing enemies back. Can strip armor in variations modified by Helminth.' },
      { name: 'Sonar', description: 'Detects enemies in a wide area and marks glowing weak points on their bodies. Hits on these points dramatically multiply the damage dealt.' },
      { name: 'Silence', description: 'Emits an aura that deafens nearby enemies, stunning them. While silenced, they cannot call reinforcements or use special abilities.' },
      { name: 'Sound Quake', description: 'Banshee slams her hands into the ground, generating continuous seismic reverberations. Enemies in the area stagger endlessly while taking damage.' },
    ],
    acquisition: {
      source_type: 'dojo_research',
      blueprint: 'All blueprints can be researched from the Tenno Lab in the Dojo.',
      parts: 'Components are obtained via Tenno Lab research and built in the Foundry.',
    },
  },
  'ash': {
    title: 'The Assassin of Shadows',
    description: 'Patron of the Orokin school of political assassination, his blade is felt before it is seen. Master of stealth and surgical execution.',
    abilities: [
      { type: 'passive', name: 'Enhanced Bleeding', description: 'Slash status effects caused by Ash last longer and inflict additional damage, turning each wound into a prolonged sentence.' },
      { name: 'Shuriken', description: 'Throws homing blades that chase targets and apply Slash. Ideal for opening engagements by eliminating priority enemies at range.' },
      { name: 'Smoke Screen', description: 'Releases a curtain of smoke that makes Ash and nearby allies invisible. Stuns enemies in the radius and allows repositioning or stealth executions.' },
      { name: 'Teleport', description: 'Instantly translates to a target, leaving them vulnerable to a finishing strike. Combines mobility and massive damage in melee combat.' },
      { name: 'Blade Storm', description: 'Marks multiple enemies for execution by shadow clones. Ash unleashes a coordinated slaughter that decimates entire groups in seconds.' },
    ],
    acquisition: {
      source_type: 'railjack',
      blueprint: 'Main blueprint purchased from the Market.',
      parts: 'Component blueprints drop from Railjack missions: Systems from Venus Proxima, Neuroptics from Neptune Proxima, Chassis from Pluto Proxima (Defense/Survival Rotation A at ~12.5-13.3%).',
      alternative: 'Also available in The Circuit (Duviri) when Ash is in rotation: all blueprints earned after reaching Tier 10 rewards.',
      recommended_farm: 'Run Defense or Survival on the relevant Proxima for each component — ~7-8 A rotations expected per part.',
    },
  },
  'cyte-09': {
    title: 'The Phantom Marksman',
    description: 'Orokin marksman forged for surgical long-range eliminations. Combines lethal precision with stealth, vanishing after the decisive shot.',
    abilities: [
      { type: 'passive', name: 'Weak Point Hunter', description: 'Each weak point kill permanently increases Critical Chance on weak points for the rest of the mission, rewarding flawless aim.' },
      { name: 'Seek', description: "Deploys an antenna that reveals enemies through walls and amplifies weak point vulnerability. Also grants punch-through to Cyte-09's weapons." },
      { name: 'Resupply', description: 'Drops ammo packs selectable through the gear wheel. Each pack imbues allied weapons with a chosen elemental bonus.' },
      { name: 'Evade', description: 'Activates tactical invisibility that extends with each weak point kill. Allows repositioning for the next perfect shot without being detected.' },
      { name: 'Neutralize', description: 'Conjures the exalted precision rifle Neutralizer. Weak point shots ricochet to nearby enemies and the alternate fire launches a Cold grenade.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Main blueprint acquired upon completing The Hex quest.',
      parts: 'Component blueprints drop as an uncommon reward from Höllvania Central Mall Bounties: Chassis Lvl 65-70 (12.20%), Neuroptics Lvl 75-80 (11.63%), Systems Lvl 85-90 (13.33%).',
      alternative: 'Alternatively, purchase from Amir of The Hex: component blueprints for 20,000 standing each (Rank 2 - Fresh Slice) and main blueprint for 50,000 standing (Rank 4 - Hot & Fresh).',
      recommended_farm: 'Run Höllvania Central Mall Bounties at the appropriate level for each component — ~7-8 stages each.',
    },
  },
  'voruna': {
    title: 'The Incarnate Wolf',
    description: 'Heart of the pack and hunter of divine prey, leads four spirit wolves in devastating ambushes. Stealth and animal fury in a single form.',
    abilities: [
      { type: 'passive', name: 'Pack Spirits', description: 'Voruna never hunts alone. Holding each ability summons one of the wolves to grant unique bonuses such as speed, status immunity, or automatic revival.' },
      { name: 'Shroud of Dynar', description: 'Cloaks Voruna in shadows, granting invisibility and speed until the first attack. After breaking, grants elevated melee Critical Chance and Status.' },
      { name: 'Fangs of Raksh', description: 'Leaps onto a target, applying five random statuses in stacks. When the enemy dies, the effects spread to all around in a toxic chain.' },
      { name: "Lycath's Hunt", description: 'Melee kills drop guaranteed health orbs and headshot kills drop energy orbs. Keeps the pack sustained in intense combat.' },
      { name: "Ulfrun's Descent", description: 'Enters an offensive stance with five explosive leap charges. Each kill increases the damage, Critical Chance, and Critical Damage of the next charges.' },
    ],
    acquisition: {
      source_type: 'enemy_drop',
      blueprint: 'Main blueprint drops from Rotation C of Conjunction Survival (Yuvarium/Circulus, Lua). Tier 2 12.24%, Tier 1 6.82%. Requires The War Within.',
      parts: 'Component blueprints also drop from Rotation C of Conjunction Survival: Tier 2 8.16%, Tier 1 4.55% each.',
      alternative: 'Alternatively, purchase from Archimedean Yonta on the Chrysalith using Lua Thrax Plasm from Conjunction Survival (75 per component, 125 for main; 350 total).',
      recommended_farm: 'Circulus / Lua Conjunction Survival on Steel Path — best Plasm/rotation rate; kill Hollow Thrax for extra Plasm.',
    },
  },
  'citrine': {
    title: 'The Crystalline Bastion',
    description: 'Her crystalline power sustains allies on the battlefield, turning each gem into a shield, a status prism, or a sharp cage for enemies.',
    abilities: [
      { type: 'passive', name: 'Geoluminescence', description: 'Nearby allies regenerate health continuously. Collecting health orbs increases the regeneration rate, rewarding the team for staying together.' },
      { name: 'Fractured Blast', description: 'Throws crystal shards that tear through a cone of enemies. Affected targets drop health and energy orbs with increased chance when slain.' },
      { name: 'Preserving Shell', description: 'Envelops Citrine and allies in a crystalline barrier with damage reduction. The resistance grows with each enemy slain, rewarding sustained combat.' },
      { name: 'Prismatic Gem', description: 'Conjures a stationary gem that fires a rotating beam applying Heat, Cold, Toxin, and Electricity. Also amplifies status chance and duration for the team.' },
      { name: 'Crystallize', description: 'Triggers a ground impact that traps enemies in crystalline formations. The crystals have massive Critical Chance, turning the field into an execution zone.' },
    ],
    acquisition: {
      source_type: 'enemy_drop',
      blueprint: 'Main blueprint drops from Rotation C of Mirror Defense on Tyana Pass, Mars (9.30%). Requires completion of Heart of Deimos.',
      parts: 'Component blueprints also drop from Rotation C of Mirror Defense Tyana Pass at 6.10% each.',
      alternative: 'Alternatively, purchase blueprints from Otak in the Necralisk using Belric and Rania Crystal Fragments earned from Mirror Defense.',
      recommended_farm: 'Tyana Pass / Mars — Mirror Defense, focus on Rotation C; trade fragments at Otak as supplement.',
    },
  },
  'harrow': {
    title: 'The Void Monk',
    description: 'Suffragan of the Void, a monastic ritualist who channels faith into protection and holy fury. Each allied shot becomes a prayer, each kill becomes a sacrament.',
    abilities: [
      { type: 'passive', name: 'Unbreakable Faith', description: "Maximum overshield capacity doubled and missions begin with full energy. Harrow's devotion manifests as constant protection and resources." },
      { name: 'Condemn', description: "Launches chains that immobilize enemies in a straight line. Each imprisoned target instantly recharges Harrow's shields, creating defense from offense." },
      { name: 'Penance', description: 'Sacrifices shields to grant Harrow and allies a massive boost in fire rate, reload, and lifesteal. The more shields lost, the greater the reward.' },
      { name: 'Thurible', description: 'Channels a sacred ritual that stores energy. Upon release, kills grant energy to allies, with headshots multiplying the offering.' },
      { name: 'Covenant', description: 'Makes Harrow and allies invulnerable for brief moments. The absorbed damage is converted into massive Critical Chance, amplified even further on headshots.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Main blueprint awarded upon completing the Chains of Harrow quest. Additional copies cost 50,000 standing from Cephalon Simaris.',
      parts: 'Chassis drops from Void Fissure Corrupted enemies (3%). Neuroptics from Rotation A Spy on Pago, Kuva Fortress (16.67%). Systems from Defection Rotations B/C and Kuva Survival Rotation C. Both can also come from Taveuni Kuva Survival C.',
      alternative: 'Also available in The Circuit (Duviri) when Harrow is in rotation: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Systems), Tier 10 (Main Blueprint).',
      recommended_farm: 'Pago Spy for Neuroptics; Taveuni Kuva Survival for Systems; any Void Fissure for Chassis.',
    },
  },
  'nekros': {
    title: 'The Soul Manipulator',
    description: 'Necromancer of the Orokin ranks, commands the dead and sows terror among the living. Each corpse is a resource, each enemy a potential servant of the shadows.',
    abilities: [
      { type: 'passive', name: 'Dark Harvest', description: 'Each enemy slain nearby restores health to Nekros. The death of others sustains him, turning the chaos of combat into a continuous source of vitality.' },
      { name: 'Soul Punch', description: 'Strikes an enemy with necromantic force, capable of eliminating weakened targets. Those slain by this strike may return as temporary shadow allies.' },
      { name: 'Terrify', description: 'Emanates a wave of dread that causes nearby enemies to flee and removes part of their armor. Creates instant chaos and opens targets for easy execution.' },
      { name: 'Desecrate', description: 'Consumes nearby corpses to generate health orbs and extra loot chances. Essential ability for prolonged farming and squad sustainability.' },
      { name: 'Shadows of the Dead', description: 'Summons shadow copies of the last enemies slain to fight by his side. Creates a personal army that inherits the abilities of the dead.' },
    ],
    acquisition: {
      source_type: 'boss_drop',
      blueprint: 'Main blueprint purchased from the Market.',
      parts: 'Component blueprints drop from Lephantis assassination on Magnacidium, Deimos at 33.33% each.',
      alternative: 'Also available in The Circuit (Duviri) when Nekros is in rotation: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Systems), Tier 10 (Main Blueprint).',
      recommended_farm: 'Magnacidium / Deimos Lephantis — ~17 kills near-guaranteed per component.',
    },
  },
  'trinity': {
    title: 'The Equalizing Healer',
    description: 'Combat medic who keeps allies standing against any enemy. Her blessings turn damage into survival and energy into victory.',
    abilities: [
      { type: 'passive', name: 'Vital Bond', description: "Allies within affinity range receive part of Trinity's maximum energy converted into health. Her presence permanently strengthens everyone around her." },
      { name: 'Well of Life', description: 'Suspends an enemy in the air as a vital source. Nearby allies receive healing, lifesteal, and status immunity while attacking the cursed target.' },
      { name: 'Energy Vampire', description: 'Marks an enemy as an energy source, emitting pulses that recharge allies. If the target dies before the end, it releases all remaining energy at once.' },
      { name: 'Link', description: 'Connects Trinity to nearby enemies, redirecting received damage to them. Turns her into a walking fortress immune to almost anything.' },
      { name: 'Blessing', description: 'Emits a restorative wave that fills the health and shields of all allies. Also grants massive damage reduction for the duration of the effect.' },
    ],
    acquisition: {
      source_type: 'boss_drop',
      blueprint: 'Main blueprint purchased from the Market.',
      parts: 'Component blueprints drop from Ambulas assassination on Hades, Pluto. Drop rates: Neuroptics 38.72%, Chassis 38.72%, Systems 22.56%.',
      alternative: 'Also available in The Circuit (Duviri) when Trinity is in rotation: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Systems), Tier 10 (Main Blueprint).',
      recommended_farm: 'Pluto / Hades — Ambulas assassination; ~14 kills near-guaranteed for Neuroptics/Chassis.',
    },
  },
  'dagath': {
    title: 'The Spectral Rider',
    description: 'An ancient Dax cavalry rider reborn as a vengeful spirit, Dagath rides alongside her ghostly mare Rakhali to reap souls with relentless hatred.',
    abilities: [
      { type: 'passive', name: 'Dark Harvest', description: 'Energy and Health Orbs have a chance to be far more effective when collected, sustaining her endless ride.' },
      { name: 'Wyrd Scythes', description: 'Fires spectral scythes that apply Viral status and slow struck enemies.' },
      { name: 'Doom', description: 'Curses enemies with a ghostly scythe that accumulates the damage they suffer and releases it back as bonus damage.' },
      { name: 'Grave Spirit', description: 'Increases weapon Critical Damage and lets Dagath cheat death once. Slain enemies are guaranteed to drop Health Orbs.' },
      { name: "Rakhali's Cavalry", description: 'Summons a ghostly cavalry of Kaithes that charges across the field, stripping shields and armor from enemies.' },
    ],
    acquisition: {
      source_type: 'dojo_research',
      blueprint: 'All blueprints acquired from Dagath\'s Hollow in the Clan Dojo (no research required, available upon room construction).',
      parts: 'Components require 102 Vainthorns total, obtained from the Abyssal Zone on Ceres — accessed via Abyssal Beacons (Faction Syndicate Rank 2, 5,000 standing). Each clear awards 6-8 Vainthorns (8-12 on Steel Path).',
      recommended_farm: 'Stack Abyssal Beacons from any Faction Syndicate, then run the Abyssal Zone on Steel Path for max Vainthorns per run.',
    },
  },
  'excalibur': {
    title: 'The Radiant Swordsman',
    description: 'A master of blade and gun, Excalibur is a versatile warrior whose sword mastery makes him a legendary choice among the Tenno.',
    abilities: [
      { type: 'passive', name: 'Sword Mastery', description: 'Increases damage and attack speed when wielding swords, dual swords, nikanas, or rapiers.' },
      { name: 'Slash Dash', description: 'Dashes at high speed, slicing every enemy in his path with precise blade strikes.' },
      { name: 'Radial Blind', description: 'Releases a flash of blinding light that blinds nearby enemies, leaving them vulnerable to stealth attacks.' },
      { name: 'Radial Javelin', description: 'Hurls energy javelins in every direction, impaling and eliminating surrounding enemies.' },
      { name: 'Exalted Blade', description: 'Conjures an exalted ethereal sword that cuts up close and fires energy waves at range.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'One of three starter Warframes available during the Awakening quest. Main blueprint can also be purchased from the Market.',
      parts: 'Component blueprints drop from Lieutenant Lech Kril on War, Mars. Drop rates: Neuroptics 38.72%, Chassis 38.72%, Systems 22.56%.',
      alternative: 'Also available in The Circuit (Duviri): Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Systems), Tier 10 (Main). Fully built version can be bought from Teshin for 60,000 Conclave standing.',
      recommended_farm: 'War / Mars — quick Lech Kril assassination, ~14 kills near-guaranteed for Neuroptics/Chassis.',
    },
  },
  'garuda': {
    title: 'The Blood Queen',
    description: 'Bathed in the blood of her enemies, Garuda turns vulnerability into raw strength, alternating between relentless slaughter and sustenance drawn from her own life.',
    abilities: [
      { type: 'passive', name: 'Bloodthirsty Fury', description: 'The lower her health, the greater her damage. Without a melee weapon equipped, she fights with her deadly Garuda Talons.' },
      { name: 'Dread Mirror', description: 'Lunges at an enemy to drain their life force, forming a protective shield and a throwable heart.' },
      { name: 'Blood Altar', description: 'Impales a target to create a blood altar that heals Garuda and nearby allies over time.' },
      { name: 'Bloodletting', description: 'Sacrifices part of her own health to regenerate energy, sustaining her insatiable thirst for power.' },
      { name: 'Seeking Talons', description: 'Charges and unleashes a volley of lethal talons that seek enemies and apply Slash damage, devastating wounded targets.' },
    ],
    acquisition: {
      source_type: 'fortuna_offerings',
      blueprint: 'Main blueprint awarded upon completing the Vox Solaris quest. Additional copies cost 50,000 standing from Cephalon Simaris.',
      parts: 'Component blueprints drop from Orb Vallis Fortuna Bounties: Chassis from Lvl 5-15, Systems from Lvl 10-30, Neuroptics from Lvl 20-40 (final stages ~22.50-27.60%).',
      alternative: 'Also available in The Circuit (Duviri) when Garuda is in rotation: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Systems), Tier 10 (Main Blueprint).',
      recommended_farm: 'Orb Vallis — run the appropriate Fortuna Bounty tier for each component; final stages have best odds.',
    },
  },
  'mesa': {
    title: 'The Wandering Gunslinger',
    description: 'A drifter among the stars with the fastest guns in the system, Mesa is a deadly gunslinger specialized in ballistic barrages and lightning-fast duels.',
    abilities: [
      { type: 'passive', name: 'Natural Gunslinger', description: 'Increases fire rate with dual secondary weapons and reload speed with single secondaries. Gains bonus health without a melee weapon equipped.' },
      { name: 'Ballistic Battery', description: 'Stores a portion of damage dealt and unleashes it all at once on the next shot, turning it into a devastating blast.' },
      { name: 'Shooting Gallery', description: "Creates a rotating aura that amplifies allies' weapon damage while jamming enemy weapons and stunning nearby melee attackers." },
      { name: 'Shatter Shield', description: 'Cloaks Mesa in a barrier that drastically reduces incoming gunfire damage and reflects projectiles back.' },
      { name: 'Peacemaker', description: 'Draws her exalted Regulators and fires precise, lethal bursts. Immobilizes Mesa, but turns her into an elimination machine.' },
    ],
    acquisition: {
      source_type: 'boss_drop',
      blueprint: 'Main blueprint purchased from the Market.',
      parts: 'Component blueprints drop from Mutalist Alad V assassination on Eris (requires Mutalist Alad V Nav Coordinates and Patient Zero quest). Drop rates: Neuroptics 38.72%, Chassis 38.72%, Systems 22.56%.',
      alternative: 'Also available in The Circuit (Duviri) when Mesa is in rotation: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Systems), Tier 10 (Main Blueprint).',
      recommended_farm: 'Farm Mutalist Alad V Nav Coordinates from Infested Invasions, then run the Eris assassination. ~14 kills near-guaranteed for Neuroptics/Chassis.',
    },
  },
  'mirage': {
    title: 'The Cunning Conjurer',
    description: 'A mischievous illusionist who manipulates light and shadow, Mirage confounds the battlefield with clones, mirrors, and traps, making enemies doubt their own senses.',
    abilities: [
      { type: 'passive', name: 'Illusionist Acrobat', description: 'Slides last longer and acrobatic maneuvers are performed with greater speed.' },
      { name: 'Hall of Mirrors', description: 'Creates holographic clones that mimic her movements and fire alongside her, splitting enemy attention and damage.' },
      { name: 'Sleight of Hand', description: 'Turns nearby objects into explosive traps and drops a decoy gem that lures enemies before detonating.' },
      { name: 'Eclipse', description: 'Depending on the lighting, grants amplified damage in the light or damage reduction in the shadows, adapting to the environment.' },
      { name: 'Prism', description: 'Launches a floating prism that fires light beams at enemies and detonates in a blinding flash at the end.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Main blueprint purchased from the Market.',
      parts: 'Component blueprints awarded at the end of each mission in the Hidden Messages quest. Additional copies cost 25,000 standing from Cephalon Simaris.',
      alternative: 'Also available in The Circuit (Duviri) when Mirage is in rotation: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Systems), Tier 10 (Main Blueprint).',
      recommended_farm: 'Complete the Hidden Messages quest to acquire all parts.',
    },
  },
  'saryn': {
    title: 'The Lethal Pestilence',
    description: 'Elusive and deadly, Saryn spreads diseases, poisons, and contagions that propagate in devastating waves, decimating entire groups of enemies.',
    abilities: [
      { type: 'passive', name: 'Persistent Contagion', description: 'Increases the duration of status effects applied to enemies, prolonging the suffering of her victims.' },
      { name: 'Spores', description: 'Infects a target with corrosive spores that spread to nearby enemies when the host is hit or killed.' },
      { name: 'Molt', description: 'Sheds her skin to remove status effects, gain speed, and leave behind a decoy that distracts enemies.' },
      { name: 'Toxic Lash', description: 'Imbues her weapons with Toxin, amplified in melee, and detonates spores already applied on struck enemies.' },
      { name: 'Miasma', description: 'Releases a Viral shockwave that devastates infected enemies and helps spread her spores even further.' },
    ],
    acquisition: {
      source_type: 'boss_drop',
      blueprint: 'Main blueprint purchased from the Market.',
      parts: 'Component blueprints drop from Kela De Thaym assassination on Merrow, Sedna. Drop rates: Neuroptics 38.72%, Chassis 38.72%, Systems 22.56%.',
      alternative: 'Also available in The Circuit (Duviri) when Saryn is in rotation: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Systems), Tier 10 (Main Blueprint).',
      recommended_farm: 'Sedna / Merrow — Kela De Thaym assassination; ~14 kills near-guaranteed for Neuroptics/Chassis.',
    },
  },
  'sevagoth': {
    title: 'The Spectral Reaper',
    description: 'An ethereal specter of death, Sevagoth commands his own Shadow to reap souls in battle, alternating between his physical body and ghostly form.',
    abilities: [
      { type: 'passive', name: 'Shadow Resurrection', description: 'When downed in combat, Sevagoth takes the form of his Shadow and must collect souls from enemies to raise his tombstone and resurrect.' },
      { name: 'Reap', description: 'Sends his Shadow forward, striking enemies and applying damage vulnerability to touched targets.' },
      { name: 'Sow', description: 'Plants seeds of death in enemies that deal continuous damage and detonate when hit by Reap.' },
      { name: 'Gloom', description: 'Creates a dark aura that slows nearby enemies and grants life steal on each kill.' },
      { name: 'Exalted Shadow', description: 'Yields control to his exalted Shadow, who wields Shadow Claws and possesses its own arsenal of ghostly abilities.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Main blueprint acquired after completing Call of the Tempestarii quest. Additional copies cost 50,000 standing from Cephalon Simaris.',
      parts: 'Component blueprints have a 10% bonus drop chance at the end of Void Storm missions: Neptune Proxima (Meso/Neo, 9.52%), Pluto Proxima (Neo, 10%), Veil Proxima (Axi, 10%).',
      recommended_farm: 'Run Pluto or Veil Proxima Void Storms — bonus reward is separate from Relic rewards, ~10 rotations expected per part.',
    },
  },
  'temple': {
    title: 'The Rock Star',
    description: 'Wielding Lizzie, her flaming Infested guitar, Temple ignites the flame of revolution with fiery solos and stage presence that inspires allies.',
    abilities: [
      { type: 'passive', name: 'Backbeat', description: 'Casting abilities in rhythm with the Backbeat metronome amplifies their effects and grants additional efficiency, rewarding those who follow the beat.' },
      { name: 'Pyrotechnics', description: 'Summons blazing pillars of fire that erupt from the ground, consuming enemies with Heat damage.' },
      { name: 'Overdrive', description: 'Strikes enemies with a Critical Chance Vulnerability debuff, leaving them open to devastating blows.' },
      { name: "Ripper's Wail", description: "Unleashes a powerful solo, becoming invulnerable while restoring her own and allies' Health and Shields, and amplifying the team's Heat damage." },
      { name: 'Exalted Solo', description: 'Draws Lizzie, her exalted flamethrower guitar, to incinerate the stage with a blazing performance.' },
    ],
    acquisition: {
      source_type: 'coda',
      blueprint: 'Main blueprint drops from Stage Defense at Solstice Square, Höllvania. Drop rates very low on A/B (0.97-1.98%), best on Rotation C (4.58%). Requires The Hex quest and Rank 4 - Hot & Fresh.',
      parts: 'Component blueprints also drop from Stage Defense at the same rates (Rotation C 4.58%).',
      alternative: 'Alternatively, purchase from Flare of The Hex (Rank 4 - Hot & Fresh) using Beating Heartstrings from Stage Defense (65 per component, 195 for main; 390 total).',
      recommended_farm: 'Solstice Square Stage Defense — push to Rotation C; supplement with Beating Heartstrings purchases from Flare.',
    },
  },
  'xaku': {
    title: 'The Law of the Void',
    description: 'Forged from three fragmented Warframes bound together by Void energy, Xaku is a unique force that devastates with amplified damage, disarms enemies, and bends the rules of reality.',
    abilities: [
      { type: 'passive', name: 'Void Fragments', description: 'Gains damage reduction against area attacks and has a chance to evade gunfire, letting shots pass through their fragmented body.' },
      { name: "Xata's Whisper", description: 'Imbues weapons with Void damage, making every shot resonate with the energy of the void.' },
      { name: 'Grasp of Lohk', description: 'Steals and disarms enemy weapons, creating floating armaments that attack nearby targets automatically.' },
      { name: 'The Lost', description: 'A cycling ability with three modes: converts enemies into allies, pins a target while stripping shields and armor, or suspends enemies in midair in stasis.' },
      { name: 'The Vast Untime', description: 'Sheds into a skeletal form that slows enemies, applies Void vulnerability, increases speed, and pauses the duration of other abilities.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Main blueprint awarded upon completing the Heart of Deimos quest. Additional copies cost 50,000 standing from Cephalon Simaris.',
      parts: 'Component blueprints drop from Cambion Drift Necralisk Bounties: Neuroptics from Lvl 15-25 (~12%), Systems from Lvl 30-40 (~11%), Chassis from Lvl 40-60 or Steel Path Lvl 100 (~13%). Requires Solaris United Rank 5 or Vox Solaris Rank 1 for Gyromag Systems used in construction.',
      recommended_farm: 'Cambion Drift — run the matching Necralisk Bounty tier per component; aim for final stages (~21-26%).',
    },
  },
  'grendel': {
    title: 'The Insatiable Devourer',
    description: 'A survival Warframe themed around gluttony and Oni folklore, who swallows enemies whole to grow stronger and unleash devastating effects. Possesses one of the largest health pools in the game.',
    abilities: [
      { type: 'passive', name: 'Fortified Stomach', description: 'Each enemy swallowed grants bonus armor to Grendel while they remain trapped in his stomach.' },
      { name: 'Feast', description: 'Inhales nearby enemies into his belly, storing them for later use with his other abilities.' },
      { name: 'Nourish', description: 'Digests stored victims to recover health and grant himself and allies bonus energy, Viral weapon damage, and a protective Viral pulse cloak.' },
      { name: 'Pulverize', description: 'Transforms Grendel into a rolling sphere that crushes enemies, strips armor, and regenerates health while moving.' },
      { name: 'Regurgitate', description: 'Spits out a swallowed enemy as a Toxin projectile that slows targets and strips their armor.' },
    ],
    acquisition: {
      source_type: 'enemy_drop',
      blueprint: 'Main blueprint purchased from the Market.',
      parts: 'Component blueprints guaranteed from special Europa missions unlocked by Locators bought from Arbitration Honors (25 Vitus Essence each). Each mission has heavy restrictions (no gear, mods, operator, arcanes, etc.).',
      alternative: 'Neuroptics Locator unlocks Archaeo-freighter (20-min Survival), Chassis Locator unlocks Icefields of Riddah (6-wave Defense), Systems Locator unlocks Mines of Karishh (800 Cryotic Excavation).',
      recommended_farm: 'Farm Vitus Essence in Arbitrations, then run each unique Europa mission. Missions are pre-made only — bring a squad.',
    },
  },
  'rhino': {
    title: 'The Immovable Force',
    description: 'A heavily armored, tank-style Warframe that trades mobility for raw power. Built to absorb enemy fire, charge into combat, and dominate the battlefield through brute strength.',
    abilities: [
      { type: 'passive', name: 'Heavy Landing', description: 'When landing from great heights, Rhino releases a shockwave that deals damage to nearby enemies.' },
      { name: 'Rhino Charge', description: 'A brutal dash used to quickly close distance with enemies, trampling everything in his path.' },
      { name: 'Iron Skin', description: 'Converts his armor into Overguard, granting a protective layer that absorbs damage and makes him immune to crowd control.' },
      { name: 'Roar', description: 'A bestial roar that increases the weapon damage of all nearby allies for an extended period.' },
      { name: 'Rhino Stomp', description: 'Slams the ground, sending enemies flying and applying a strong slow effect that leaves them defenseless.' },
    ],
    acquisition: {
      source_type: 'boss_drop',
      blueprint: 'Main blueprint purchased from the Market.',
      parts: 'Component blueprints drop from Jackal assassination on Fossa, Venus. Drop rates: Neuroptics 38.72%, Chassis 38.72%, Systems 22.56%.',
      alternative: 'Also available in The Circuit (Duviri) when Rhino is in rotation: all blueprints earned after reaching Tier 10 rewards.',
      recommended_farm: 'Venus / Fossa — quick Jackal assassination, one of the fastest boss farms in the game.',
    },
  },
  'frost': {
    title: 'The Deadly Frost',
    description: 'A defensive ice-element Warframe focused on crowd control and survival. Freezes enemies, protects objectives, and reinforces team durability with his glacial powers.',
    abilities: [
      { type: 'passive', name: 'Glacial Aura', description: 'Cold status effects caused by Frost have doubled duration, and he gains bonus armor for each nearby enemy affected by Cold.' },
      { name: 'Freeze', description: 'Launches a projectile that encases the struck enemy in a block of ice, leaving them completely immobilized.' },
      { name: 'Ice Wave', description: 'Sends a trail of ice sliding across the ground that deals damage and applies Cold to every enemy in its path.' },
      { name: 'Snow Globe', description: 'Creates a protective dome that repels enemies on creation and applies Cold status to anyone who tries to enter.' },
      { name: 'Avalanche', description: 'Surrounds Frost with an icy storm that completely freezes enemies and strips their armor when it shatters.' },
    ],
    acquisition: {
      source_type: 'boss_drop',
      blueprint: 'Main blueprint purchased from the Market.',
      parts: 'Component blueprints drop from Captain Vor & Lieutenant Lech Kril assassination on Exta, Ceres. Drop rates: Neuroptics 38.72%, Chassis 38.72%, Systems 22.56%.',
      alternative: 'Also available in The Circuit (Duviri) when Frost is in rotation: all blueprints earned after reaching Tier 10 rewards.',
      recommended_farm: 'Ceres / Exta — quick assassination farm, ~14 kills near-guaranteed for Neuroptics/Chassis.',
    },
  },
  'hydroid': {
    title: 'The Maritime Plunderer',
    description: 'A pirate-themed Warframe specialized in crowd control with Corrosive water. Dominates the battlefield by stripping enemy armor and trapping them en masse.',
    abilities: [
      { type: 'passive', name: 'Enhanced Corrosion', description: 'Enemies struck by Hydroid become more susceptible to Corrosive status, and the first application strips a larger portion of armor.' },
      { name: 'Tempest Barrage', description: 'Summons a barrage of Corrosive water that rains down over an area, punishing every enemy caught within it.' },
      { name: 'Tidal Surge', description: 'Transforms Hydroid into an invulnerable wave that surges forward, dragging and pushing enemies in its path.' },
      { name: 'Plunder', description: 'Steals Corrosive status from enemies to permanently reduce their armor, while reinforcing his own armor and granting Corrosive damage to weapons.' },
      { name: 'Tentacle Swarm', description: 'Summons a sea creature whose tentacles grab and lift nearby enemies, trapping them in the air.' },
    ],
    acquisition: {
      source_type: 'boss_drop',
      blueprint: 'Main blueprint purchased from the Market.',
      parts: 'Component blueprints drop from Councilor Vay Hek assassination on Oro, Earth (requires Mastery Rank 5). Drop rates: Neuroptics 38.72%, Chassis 38.72%, Systems 22.56%.',
      alternative: 'Also available in The Circuit (Duviri) when Hydroid is in rotation: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Systems), Tier 10 (Main Blueprint).',
      recommended_farm: 'Earth / Oro — Vay Hek assassination; ~14 kills near-guaranteed for Neuroptics/Chassis.',
    },
  },
  'nyx': {
    title: 'The Mind Manipulator',
    description: 'A psychic Warframe specialized in crowd control. Manipulates the minds of enemies to disorient them, redirect their attacks, and dominate the battlefield through confusion.',
    abilities: [
      { type: 'passive', name: 'Psychic Focus', description: 'Nyx and her weapons gain bonus critical chance for each confused enemy within her affinity range, up to a high cap.' },
      { name: 'Mind Control', description: 'Dominates a single target, forcing them to fight alongside Nyx and infusing their attacks with Radiation damage; can be empowered if Nyx damages the controlled enemy.' },
      { name: 'Psychic Bolts', description: 'Fires homing projectiles that strip armor and shields from targets, slow Infested, and return armor, shields, and Overguard to Nyx.' },
      { name: 'Chaos', description: 'Emits a disorienting pulse that applies maximum Radiation status, causing affected enemies to attack one another.' },
      { name: 'Absorb', description: 'Nyx enters a meditative, invulnerable state, absorbing all incoming damage as well as that of confused enemies, then releasing it all as a devastating explosion.' },
    ],
    acquisition: {
      source_type: 'boss_drop',
      blueprint: 'Main blueprint purchased from the Market.',
      parts: 'Component blueprints drop from Phorid assassination missions that appear during Infested Invasions. Drop rates: Neuroptics 38.72%, Chassis 38.72%, Systems 22.56%.',
      alternative: 'Also available in The Circuit (Duviri) when Nyx is in rotation: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Systems), Tier 10 (Main Blueprint).',
      recommended_farm: 'Wait for a Phorid Manifestation Invasion alert — Nyx parts only available then. ~14 kills near-guaranteed for Neuroptics/Chassis.',
    },
  },
  'ivara': {
    title: 'The Stealthy Huntress',
    description: 'A stealth-focused Warframe specialized in infiltration, deception, and precise long-range elimination with her exalted bow and varied arrow types.',
    abilities: [
      { type: 'passive', name: 'Heightened Senses', description: 'Automatically detects all hostile enemies within a wide radius around her, functioning as a permanent extended radar.' },
      { name: 'Quiver', description: 'Cycles through four arrow types: Cloak (invisibility bubble), Dashwire (zipline), Noise (lures enemies), and Sleep (puts targets to sleep).' },
      { name: 'Navigator', description: "Transfers Ivara's consciousness into a fired projectile, allowing her to manually guide it to the desired target." },
      { name: 'Prowl', description: 'Grants invisibility, boosts headshot damage, and pickpockets items from enemies, but reduces movement speed and limits certain actions.' },
      { name: 'Artemis Bow', description: 'Summons an exalted bow that fires a fan of multiple arrows simultaneously, devastating multiple targets in a single volley.' },
    ],
    acquisition: {
      source_type: 'enemy_drop',
      blueprint: 'Main blueprint purchased from the Market.',
      parts: 'Component blueprints drop from Rotation C of Spy missions: Systems from Easy (Lvl 1-15, 22.56%), Chassis from Medium (Lvl 16-25), Neuroptics from Hard (Lvl 26+). Proxima Spy variants give 36% each.',
      alternative: 'Also available in The Circuit (Duviri) when Ivara is in rotation: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Systems), Tier 10 (Main Blueprint).',
      recommended_farm: 'Run Proxima Spy missions (36% Rotation C) — Orvin-Haarc (Systems), Brom Cluster (Chassis), Peregrine Axis (Neuroptics). All vaults must succeed.',
    },
  },
  'atlas': {
    title: 'The Mountain Fighter',
    description: 'A Warframe focused on grounded elemental combat, dealing heavy damage with fist attacks while reinforcing his defenses. He combines damage and survival in a brutal style.',
    abilities: [
      { type: 'passive', name: 'Earth-Bound', description: 'Atlas is completely immune to knockdown and stagger effects as long as his feet remain in contact with the ground.' },
      { name: 'Landslide', description: 'Atlas charges toward an enemy and delivers a powerful melee strike with his Landslide Fists, capable of chaining through multiple targets.' },
      { name: 'Tectonics', description: 'Conjures a defensive stone barrier that can also be detonated to roll forward as an offensive projectile, crushing enemies in its path.' },
      { name: 'Petrify', description: 'Emits a gaze that turns all enemies visible within the cone to stone, leaving them defenseless and vulnerable.' },
      { name: 'Rumblers', description: 'Summons two stone golems that wander the area engaging hostiles, drawing attention and providing healing rubble for Atlas.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Main blueprint awarded upon completing The Jordas Precept quest. Additional copies can be bought from Cephalon Simaris for 50,000 standing.',
      parts: 'Component blueprints drop from Jordas Golem assassination on Eris. Drop rates: Neuroptics 38.72%, Chassis 38.72%, Systems 22.56%.',
      alternative: 'Also available in The Circuit (Duviri) when Atlas is in rotation: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Systems), Tier 10 (Main Blueprint).',
      recommended_farm: 'Eris / Jordas Golem Assassinate — ~14 kills near-guaranteed for Neuroptics/Chassis.',
    },
  },
  'baruuk': {
    title: 'The Reluctant Warrior',
    description: 'A pacifist monk Warframe focused on survival and crowd control, who transforms into a devastating offensive powerhouse when his patience reaches its limit.',
    abilities: [
      { type: 'passive', name: 'Restraint', description: 'Dodging projectiles, putting enemies to sleep, or disarming them lowers his Restraint meter. As it drops, Baruuk gains escalating damage resistance.' },
      { name: 'Elude', description: 'Adopts a defensive stance that makes enemy attacks pass through him without dealing damage, as long as he refrains from attacking.' },
      { name: 'Lull', description: 'Emits a calming wave that puts nearby enemies to sleep, leaving them completely defenseless for a time.' },
      { name: 'Desolate Hands', description: 'Conjures floating daggers that grant damage reduction and fly out to enemies to disarm them automatically.' },
      { name: 'Serene Storm', description: 'When his Restraint is depleted, he summons the Desert Wind, his exalted fists, and gains additional resistance. This ability drains Restraint instead of energy.' },
    ],
    acquisition: {
      source_type: 'fortuna_offerings',
      blueprint: 'All blueprints purchased from Little Duck (Vox Solaris) in Fortuna. Main blueprint requires Rank 2 - Agent, components require Rank 3 - Hand. Each blueprint costs 5,000 standing (20,000 total).',
      parts: 'Component blueprints sold by Little Duck at Rank 3 - Hand with Vox Solaris.',
      alternative: 'Also available in The Circuit (Duviri) when Baruuk is in rotation: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Systems), Tier 10 (Main Blueprint).',
      recommended_farm: 'Farm Vox Solaris standing by completing Profit-Taker bounties and turning in Toroids.',
    },
  },
  'chroma': {
    title: 'The Master of Elements',
    description: 'A dragon-themed Warframe focused on survival and high damage, mastering the four elements (Heat, Electricity, Toxin, Cold) to empower attacks and defenses.',
    abilities: [
      { type: 'passive', name: 'Draconic Wings', description: "Wings sprout from Chroma's back, granting an extra midair jump and an additional bullet jump for greater mobility." },
      { name: 'Spectral Scream', description: 'Exhales a continuous elemental breath forward, with damage type varying according to the chosen energy configuration.' },
      { name: 'Elemental Ward', description: 'Projects an elemental aura with bonuses varying by element: Heat boosts health, Electricity reinforces shields and reacts to damage, Toxin accelerates reload, Cold increases armor and reflects damage.' },
      { name: 'Vex Armor', description: 'Builds up two escalating bonuses: Scorn (armor) when taking shield damage, and Fury (weapon damage) when taking health damage.' },
      { name: 'Effigy', description: 'Detaches his pelt as an autonomous sentinel that fires the elemental breath and increases the rate and amount of Credits collected.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Main blueprint rewarded upon completing The New Strange quest. Additional copies cost 50,000 standing from Cephalon Simaris.',
      parts: 'Component blueprints awarded from Junctions: Neuroptics (Uranus Junction), Chassis (Neptune Junction), Systems (Pluto Junction). Additional copies cost 25,000 standing each from Cephalon Simaris.',
      alternative: 'Also available in The Circuit (Duviri) when Chroma is in rotation: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Systems), Tier 10 (Main Blueprint).',
      recommended_farm: 'Progress through the star chart Junctions to unlock components naturally.',
    },
  },
  'gauss': {
    title: 'The Swift, Saint of Altra',
    description: 'A speed-focused Warframe that combines high damage with strong survivability. His kit revolves around an Electrokinetic Battery that charges with constant movement.',
    abilities: [
      { type: 'passive', name: 'Electrokinetic Battery', description: 'Movement generates current that fills the battery meter, accelerating shield recharge and drastically reducing the delay before recharge resumes.' },
      { name: 'Mach Rush', description: 'Propels Gauss at supersonic speeds, ideal for fast traversal and trampling enemies along the way.' },
      { name: 'Kinetic Plating', description: 'Grants damage reduction and status immunity against Impact, Puncture, Slash, Cold, Heat, and Blast, converting incoming damage into Energy.' },
      { name: 'Thermal Sunder', description: 'Deploys a Cold or Heat field; overlapping both fields produces Blast damage over a wide area.' },
      { name: 'Redline', description: 'Pushes the battery to its maximum, increasing fire rate, attack speed, reload, and cast speed, while also emitting automatic electric projectiles.' },
    ],
    acquisition: {
      source_type: 'enemy_drop',
      blueprint: 'Main blueprint purchased from the Market.',
      parts: 'Component blueprints drop from Rotation C of Disruption on Kappa, Sedna at 7.84% each.',
      recommended_farm: 'Kappa / Sedna Disruption — clear at least 4 conduits per round for Rotation C; ~12 C rotations expected per part.',
    },
  },
  'kullervo': {
    title: 'The Crimson Renegade',
    description: 'A Warframe focused on melee damage, especially with daggers, themed on betrayal and vengeance. A shieldless health tank that punishes enemies with a personal blade.',
    abilities: [
      { type: 'passive', name: 'Heavy Mastery', description: "All of Kullervo's heavy attacks have drastically improved efficiency and much faster charge time on any melee weapon." },
      { name: 'Wrathful Advance', description: 'Charges a heavy attack and teleports to a targeted enemy, with massively amplified melee critical chance for the strike.' },
      { name: 'Recompense', description: 'Daggers spin around him, restoring Health as they cut enemies and granting a layer of protective Overguard.' },
      { name: 'Collective Curse', description: 'Chains multiple enemies in a shared curse, causing damage dealt to one to be transferred to all linked targets.' },
      { name: 'Storm of Ukko', description: 'Summons a storm of daggers at a chosen point, rapidly applying Slash status and disorienting all enemies in the area.' },
    ],
    acquisition: {
      source_type: 'duviri',
      blueprint: 'All blueprints purchased from Acrithis in the Dormizone using Kullervo\'s Bane (15 for main, 9 each for components; 42 total).',
      parts: 'Kullervo\'s Bane drops from defeating the Kullervo boss on Kullervo\'s Hold and clearing the Spiral (Orowyrm) in The Duviri Experience. Spawns during Anger, Sorrow, and Fear spirals. Awards 4-6 banes (6-8 on Steel Path).',
      recommended_farm: 'Run The Duviri Experience during Anger/Sorrow/Fear moods; speak with The Warden on Kullervo\'s Hold for the boss fight.',
    },
  },
  'nidus': {
    title: 'The Adaptive Scourge',
    description: 'An Infestation-themed Warframe focused on damage, survival, and crowd control, gaining power by accumulating Mutation stacks during combat.',
    abilities: [
      { type: 'passive', name: 'Mutation Stacks', description: 'If Nidus would die with enough Mutation stacks, he consumes those stacks to gain temporary invulnerability and restore part of his health.' },
      { name: 'Virulence', description: 'Slams the ground to release a path of fungal growth that damages enemies and generates Mutation stacks with each hit.' },
      { name: 'Larva', description: 'Launches an Infested cocoon that grabs nearby enemies and clusters them at a central point, ready to be destroyed in sequence.' },
      { name: 'Parasitic Link', description: 'Creates a link with a target; on allies it boosts weapon damage and Strength; on enemies it redirects a portion of the damage Nidus would take to them.' },
      { name: 'Ravenous', description: "Creates an Infested field that regenerates Nidus's health and spawns Maggots that latch onto enemies and explode around them." },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Main blueprint acquired from The Glast Gambit quest. Additional copies cost 50,000 standing from Cephalon Simaris.',
      parts: 'Component blueprints drop from Infested Salvage on Oestrus, Eris: Rotation A/B 7.69%, Rotation C 14.29% each.',
      alternative: 'Also available in The Circuit (Duviri) when Nidus is in rotation: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Systems), Tier 10 (Main Blueprint).',
      recommended_farm: 'Oestrus / Eris Infested Salvage — push to Rotation C (~20 min) for best odds, ~6 C rotations expected per part.',
    },
  },
  'revenant': {
    title: 'The Returned Condemned',
    description: 'A Warframe themed on Sentients and Eidolons, focused on damage and survival, blending vampiric mechanics with strong defensive capabilities and high offensive power.',
    abilities: [
      { type: 'passive', name: 'Eidolon Echo', description: "When Revenant's shields are fully drained, a shockwave bursts around him, knocking down nearby enemies and dealing damage." },
      { name: 'Enthrall', description: 'Converts enemies into loyal thralls that fight for Revenant; upon death, they leave pillars that continue converting other enemies in a chain.' },
      { name: 'Mesmer Skin', description: 'Grants invulnerability for a limited number of charges, stunning any enemy that dares attack him during the effect.' },
      { name: 'Reave', description: 'Transforms Revenant into a wave of energy that passes through enemies, draining their shields and health directly into his own.' },
      { name: 'Danse Macabre', description: 'Spins in the air while firing rotating energy beams in all directions, in a deadly dance that pulverizes everything around him.' },
    ],
    acquisition: {
      source_type: 'cetus_offerings',
      blueprint: 'Main blueprint awarded upon completing the Mask of the Revenant quest (requires Rank 2 - Observer with The Quills). Additional copies cost 50,000 standing from Cephalon Simaris.',
      parts: 'Component blueprints drop from Cetus Bounties: Systems from Lvl 20-40, Chassis from Lvl 30-50, Neuroptics from Lvl 40-60. Plague Star Bounty Chassis ~14-16%. Final stages have best odds (21-26%).',
      alternative: 'Also available in The Circuit (Duviri) when Revenant is in rotation: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Systems), Tier 10 (Main Blueprint).',
      recommended_farm: 'Plains of Eidolon — run the matching Cetus Bounty tier; Plague Star event (when active) is the fastest source for Chassis.',
    },
  },
  'valkyr': {
    title: 'The Tormented',
    description: 'A berserker-style Warframe built around melee combat. She combines high armor and health with offense focused on brutal, ferocious personal strikes.',
    abilities: [
      { type: 'passive', name: 'Rising Fury', description: 'Hitting and killing enemies with melee weapons fills a Fury meter that increases melee damage and can save her from lethal blows.' },
      { name: 'Rip Line', description: 'Fires a high-traction grappling hook used as a mobility tool or to pull enemies toward her.' },
      { name: 'Warcry', description: 'Lets loose a war cry that increases the armor and attack speed of Valkyr and all nearby allies.' },
      { name: 'Paralysis', description: 'Releases a pulse that applies strong slow to nearby enemies and leaves them more vulnerable to melee damage.' },
      { name: 'Hysteria', description: "Summons Valkyr's Talons, her exalted blades, granting status immunity and life steal on every attack." },
    ],
    acquisition: {
      source_type: 'boss_drop',
      blueprint: 'Main blueprint purchased from the Market.',
      parts: 'Component blueprints drop from Alad V assassination on Themisto, Jupiter. Drop rates: Neuroptics 38.72%, Chassis 38.72%, Systems 22.56%.',
      alternative: 'Also available in The Circuit (Duviri) when Valkyr is in rotation: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Systems), Tier 10 (Main Blueprint).',
      recommended_farm: 'Jupiter / Themisto — Alad V assassination; ~14 kills near-guaranteed for Neuroptics/Chassis.',
    },
  },
  'wukong': {
    title: 'The Resilient, The Swift',
    description: 'A simian-themed warrior built around high damage and exceptional survivability, with trickster tactics that deceive enemies on the battlefield.',
    abilities: [
      { type: 'passive', name: 'Five Levels of Immortality', description: 'When Wukong would die, he automatically activates one of his survival techniques, able to cheat death up to three times per mission with random bonuses.' },
      { name: 'Celestial Twin', description: 'Summons an independent clone that fights alongside him, using his weapon and targeting enemies on its own.' },
      { name: 'Cloud Walker', description: 'Transforms into a moving cloud, gaining invisibility, invulnerability, and constant health regeneration.' },
      { name: 'Defy', description: 'Activates an invulnerable stance that absorbs all incoming damage and returns it as a counterattack, while also permanently boosting his armor.' },
      { name: 'Primal Fury', description: 'Summons the legendary Iron Staff, his exalted melee weapon, which massively extends its reach as it strikes enemies.' },
    ],
    acquisition: {
      source_type: 'dojo_research',
      blueprint: 'All blueprints can be researched from the Tenno Lab in the Dojo.',
      parts: 'Components are obtained via Tenno Lab research and built in the Foundry.',
    },
  },
  'hildryn': {
    title: 'The Lady of Shields',
    description: 'A Herculean cyborg who protects allies and crushes enemy fortifications with shield-powered artillery. She soars across battlefields emanating defensive power.',
    abilities: [
      { type: 'passive', name: 'Shield Barrier', description: 'Hildryn has a long window of invulnerability after her shields are destroyed, becoming immune to damage for several seconds.' },
      { name: 'Balefire', description: 'Summons the Balefire Charger, an exalted weapon that fires devastating energy projectiles fueled by her shields.' },
      { name: 'Pillage', description: 'Emits an expanding wave that strips shields and armor from enemies, converting them into shields for herself and nearby allies.' },
      { name: 'Haven', description: 'Creates a protective link with nearby allies, granting extra shields and accelerated recharge, while linked enemies suffer continuous damage.' },
      { name: 'Aegis Storm', description: 'Rises into the air wielding Balefire and suspends nearby enemies in midair. Continuously generates energy orbs while dominating the field.' },
    ],
    acquisition: {
      source_type: 'fortuna_offerings',
      blueprint: 'Main blueprint purchased from Little Duck for 5,000 standing at Rank 2 - Agent with Vox Solaris.',
      parts: 'Component blueprints drop from Exploiter Orb in Orb Vallis. Drop rates: Neuroptics 38.72%, Chassis 38.72%, Systems 22.56%.',
      alternative: 'Also available in The Circuit (Duviri) when Hildryn is in rotation: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Systems), Tier 10 (Main Blueprint).',
      recommended_farm: 'Exploiter Orb — fast fight in Deck 12; ~14 kills near-guaranteed for Neuroptics/Chassis.',
    },
  },
  'inaros': {
    title: 'The Desert King',
    description: 'A mummy-pharaoh of colossal endurance who commands the sands to suffocate and dominate enemies. He sustains himself through the fear and blood of those who face his desert.',
    abilities: [
      { type: 'passive', name: 'Resurrection Sarcophagus', description: 'Upon taking lethal damage, Inaros seals himself in a sarcophagus and drains the life from nearby enemies to return to battle.' },
      { name: 'Desiccation', description: 'Hurls a blast of sand that blinds enemies ahead, leaving them vulnerable to finisher attacks and healing Inaros with each finisher.' },
      { name: 'Sandstorm', description: 'Transforms into an invulnerable sandstorm that draws in and suspends nearby enemies, leaving them vulnerable to ground finishers.' },
      { name: 'Scarab Shell', description: 'Sacrifices part of his health to forge a shell of scarabs that grants extra armor and full immunity to status effects.' },
      { name: 'Scarab Swarm', description: 'Unleashes a swarm of scarabs that inflict Corrosive damage proportional to his maximum health. Cursed enemies that die spawn an allied Scarab Kavat.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Main and component blueprints obtained from the Sands of Inaros quest. The quest blueprint is tradeable, or purchasable from Baro Ki\'Teer for 100 Ducats + 25,000 credits.',
      parts: 'All components come from completing the Sands of Inaros quest. Additional copies cost 25,000 standing (components) or 50,000 standing (main) from Cephalon Simaris.',
      alternative: 'Also available in The Circuit (Duviri) when Inaros is in rotation: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Systems), Tier 10 (Main Blueprint).',
      recommended_farm: 'Complete Sands of Inaros — repeatable for additional builds via Simaris or trade.',
    },
  },
  'nezha': {
    title: 'The Lotus Prince',
    description: 'A nimble, fiery third prince who combines mystical survival with crowd control. He glides across the battlefield setting enemies ablaze with relentless grace.',
    abilities: [
      { type: 'passive', name: 'Swift Slide', description: 'Nezha slides along the ground with speed and distance far greater than other Warframes, making his mobility unmatched.' },
      { name: 'Fire Walker', description: 'Sets his feet ablaze, gaining movement speed and leaving a flaming trail that burns enemies and removes negative status effects from allies.' },
      { name: 'Blazing Chakram', description: 'Throws a flaming chakram that pierces enemies, increases their damage vulnerability, and raises the drop rate of health and energy orbs.' },
      { name: 'Warding Halo', description: 'Forms a protective halo around Nezha that absorbs incoming damage and grants status immunity for its duration.' },
      { name: 'Divine Spears', description: 'Summons divine spears that erupt from the ground, impaling and immobilizing nearby enemies while dealing continuous damage.' },
    ],
    acquisition: {
      source_type: 'dojo_research',
      blueprint: 'All blueprints can be researched from the Tenno Lab in the Dojo.',
      parts: 'Components are obtained via Tenno Lab research and built in the Foundry.',
    },
  },
  'limbo': {
    title: 'The Master of the Rift',
    description: 'A dimensional mage who manipulates the Rift Plane, shifting allies and enemies between realities. He commands time and space to isolate the chaos of battle.',
    abilities: [
      { type: 'passive', name: 'Dimensional Transit', description: 'Dodging lets Limbo enter and exit the Rift Plane, creating a temporary portal for allies. Enemies eliminated in the Rift grant energy.' },
      { name: 'Banish', description: 'Sends out a wave that hurls targets into the Rift Plane, isolating them from the material world for a set duration.' },
      { name: 'Stasis', description: 'Freezes time within the Rift, paralyzing enemies and suspending projectiles in midair until the effect dissipates.' },
      { name: 'Rift Surge', description: 'Applies a Rift current to enemies, causing them to banish other nearby enemies in a chain when they leave the dimensional plane.' },
      { name: 'Cataclysm', description: 'Creates a gigantic dome that merges the two planes, trapping everything inside in the Rift until the sphere violently implodes.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Main blueprint purchased from the Market.',
      parts: 'Component blueprints awarded from The Limbo Theorem quest, obtainable by completing the Europa Junction on Jupiter. Additional copies cost 25,000 standing from Cephalon Simaris.',
      alternative: 'Also available in The Circuit (Duviri) when Limbo is in rotation: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Systems), Tier 10 (Main Blueprint).',
      recommended_farm: 'Complete the Europa Junction to unlock the quest; play through The Limbo Theorem.',
    },
  },
  'titania': {
    title: 'The Queen of the Fae',
    description: 'An elven enchantress who dances between sizes to devastate and bewitch enemies. She heals allies with every spell cast and soars across the field with diminutive steel.',
    abilities: [
      { type: 'passive', name: 'Fae Touch', description: 'Titania regenerates health for herself and nearby allies whenever she casts an ability, and also gains increased jump and roll distance.' },
      { name: 'Spellbind', description: 'Scatters fae dust that disarms and hurls enemies into the air, while granting full status immunity to Titania and nearby allies.' },
      { name: 'Tribute', description: 'Extracts an essence from a chosen enemy, generating one of four switchable buffs that benefit allies or penalize adversaries.' },
      { name: 'Lantern', description: 'Transforms an enemy into a floating lantern that draws other hypnotized enemies in, exploding at the end of the effect.' },
      { name: 'Razorwing', description: 'Shrinks Titania to fae size and equips her with the dual Dex Pixia pistols and the Diwata sword. Razorflies accompany her, inflicting vulnerability.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Main and component blueprints obtained from The Silver Grove quest. Additional copies cost 25,000 (components) or 50,000 (main) standing from Cephalon Simaris.',
      parts: 'All components come from completing The Silver Grove quest.',
      alternative: 'Also available in The Circuit (Duviri) when Titania is in rotation: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Systems), Tier 10 (Main Blueprint).',
      recommended_farm: 'Complete The Silver Grove quest.',
    },
  },
  'wisp': {
    title: 'The Ethereal Conjurer',
    description: 'A luminous apparition who glides between dimensions, offering blessings and sunlight to her allies. Her grace is matched only by the devastating power she carries.',
    abilities: [
      { type: 'passive', name: 'Invisible Float', description: 'While airborne, Wisp shifts between dimensions and remains invisible to enemies, able to flank them without being detected.' },
      { name: 'Reservoirs', description: 'Deploys three types of ethereal motes that grant health and regeneration, speed and attack rate, or electric discharges against nearby enemies.' },
      { name: 'Wil-O-Wisp', description: "Creates an ethereal specter that distracts enemies while Wisp becomes invisible. She can teleport to the specter's position at any moment." },
      { name: 'Breach Surge', description: 'Releases dimensional sparks that blind nearby enemies. Adversaries killed during the effect release homing projectiles that chase living targets.' },
      { name: 'Sol Gate', description: 'Opens a portal directly to the surface of the Sun, unleashing a continuous beam of solar plasma that incinerates any enemy in its path.' },
    ],
    acquisition: {
      source_type: 'boss_drop',
      blueprint: 'Main blueprint drops from Ropalolyst assassination on Jupiter at 22.56%.',
      parts: 'Component blueprints drop from the Ropalolyst on The Ropalolyst, Jupiter at 25.81% each.',
      recommended_farm: 'Jupiter / The Ropalolyst — ~3-4 kills near-guaranteed per component; the entire frame can drop from this one boss.',
    },
  },
  'loki': {
    title: 'The Ethereal Trickster',
    description: 'A master of deception who employs illusions and invisibility to sabotage entire armies. He sows confusion and disarms the enemy before they notice his presence.',
    abilities: [
      { type: 'passive', name: 'Persistent Grip', description: 'Loki can cling to walls for far longer than other Warframes, silently observing the field.' },
      { name: 'Decoy', description: 'Summons a holographic clone that taunts nearby enemies, drawing their fire while Loki escapes or strikes from the shadows.' },
      { name: 'Invisibility', description: 'Renders Loki completely invisible to enemies, allowing him to infiltrate and execute stealth attacks with increased damage.' },
      { name: 'Switch Teleport', description: "Instantly swaps positions with a target, leaving enemies stunned and briefly boosting Loki's movement speed." },
      { name: 'Radial Disarm', description: 'Emits an energy wave that permanently disarms all nearby enemies, forcing them to resort to melee combat.' },
    ],
    acquisition: {
      source_type: 'boss_drop',
      blueprint: 'Main blueprint purchased from the Market.',
      parts: 'Component blueprints drop from Hyena Pack assassination on Psamathe, Neptune. Drop rates: Neuroptics 38.72%, Chassis 38.72%, Systems 22.56%.',
      alternative: 'Also available in The Circuit (Duviri) when Loki is in rotation: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Systems), Tier 10 (Main Blueprint).',
      recommended_farm: 'Neptune / Psamathe — Hyena Pack assassination, ~14 kills near-guaranteed for Neuroptics/Chassis.',
    },
  },
  'ember': {
    title: 'The Burning Fury',
    description: 'An elemental Warframe who channels fire to incinerate entire battalions. The more burning enemies around her, the more devastating she becomes.',
    abilities: [
      { type: 'passive', name: 'Burning Heat', description: "Each nearby enemy affected by Heat status increases Ember's Ability Strength, rewarding flaming chaos." },
      { name: 'Fireball', description: 'Hurls a ball of fire that explodes on impact, setting struck enemies ablaze.' },
      { name: 'Immolation', description: 'Wreathes herself in flames that grant damage reduction. The heat grows with ability use and must be managed to avoid consuming all her energy.' },
      { name: 'Fire Blast', description: 'Releases a circular wave of flames that strips enemy armor and leaves a ring of fire on the ground.' },
      { name: 'Inferno', description: 'Calls down a rain of flaming meteors that fall upon nearby enemies, burning them all at once.' },
    ],
    acquisition: {
      source_type: 'boss_drop',
      blueprint: 'Main blueprint purchased from the Market.',
      parts: 'Component blueprints drop from General Sargas Ruk assassination on Tethys, Saturn. Drop rates: Neuroptics 38.72%, Chassis 38.72%, Systems 22.56%.',
      alternative: 'Also available in The Circuit (Duviri) when Ember is in rotation: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Systems), Tier 10 (Main Blueprint).',
      recommended_farm: 'Saturn / Tethys — quick assassination farm, ~14 kills near-guaranteed for Neuroptics/Chassis.',
    },
  },
  'gara': {
    title: 'The Lady of Glass',
    description: 'A Warframe who shapes molten glass to slice and trap enemies. Her defenses grow stronger with every blade she shatters across the battlefield.',
    abilities: [
      { type: 'passive', name: 'Cutting Gleam', description: 'Consecutive melee hits blind nearby enemies with a dazzling flash.' },
      { name: 'Shattered Lash', description: 'Wields a sharp blade of glass to strike enemies in an arc or in a straight line.' },
      { name: 'Splinter Storm', description: 'Envelops a target in a storm of swirling shards that reduces damage taken and wounds those who draw near.' },
      { name: 'Spectrorage', description: 'Creates a ring of mirrors that enrages enemies into firing at their own reflections, exploding into splinters at the end.' },
      { name: 'Mass Vitrify', description: 'Raises a wall of glass that grows around Gara, freezing enemies in place and which can be shattered to deal damage.' },
    ],
    acquisition: {
      source_type: 'cetus_offerings',
      blueprint: 'Main blueprint awarded upon completing Saya\'s Vigil quest. Additional copies cost 50,000 standing from Cephalon Simaris.',
      parts: 'Component blueprints drop from Plains of Eidolon Cetus Bounties: Chassis from Lvl 5-15, Systems from Lvl 10-30, Neuroptics from Lvl 20-40 (highest chances in final stages, ~23-30%).',
      alternative: 'Also available in The Circuit (Duviri) when Gara is in rotation: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Systems), Tier 10 (Main Blueprint).',
      recommended_farm: 'Plains of Eidolon — run the appropriate Cetus Bounty tier for each component; final stages have best odds.',
    },
  },
  'gyre': {
    title: 'The Electric Dance',
    description: 'A Warframe charged with ever-growing electric currents. Every critical hit feeds her electricity and turns combat into a glittering spectacle.',
    abilities: [
      { type: 'passive', name: 'Glittering Charge', description: "Critical hits increase the critical chance and critical multiplier of Gyre's next abilities." },
      { name: 'Arcsphere', description: 'Releases electric spheres that orbit Gyre and discharge bolts against nearby enemies.' },
      { name: 'Coil Horizon', description: 'Hurls an electromagnetic portal that pulls enemies to its center before exploding in a discharge.' },
      { name: 'Cathode Grace', description: 'Charges Gyre with energy that increases the critical chance of her abilities for a time.' },
      { name: 'Rotorswell', description: 'Envelops Gyre in an electric whirlwind that boosts the critical damage of her other abilities and discharges chaining bolts.' },
    ],
    acquisition: {
      source_type: 'enemy_drop',
      blueprint: 'Main blueprint drops from Zariman Bounties on the Chrysalith: Lvl 90-95 or Lvl 110-115 (12.99% each).',
      parts: 'Component blueprints drop from Zariman Bounties: Neuroptics Lvl 50-55 (13.04%), Chassis Lvl 60-65 (13.56%), Systems Lvl 70-75 (11.90%).',
      recommended_farm: 'Chrysalith / Zariman — run the appropriate bounty level for each component, ~7-8 stages expected per part.',
    },
  },
  'khora': {
    title: 'The Huntress and Her Beast',
    description: 'A Warframe who fights side by side with her feline companion Venari. Together, they dominate the battlefield with whips, chains, and relentless claws.',
    abilities: [
      { type: 'passive', name: 'Wild Bond', description: 'The panther Venari accompanies Khora at all times and can be revived after falling.' },
      { name: 'Whipclaw', description: 'A brutal whip strike that deals area damage and echoes against ensnared enemies.' },
      { name: 'Ensnare', description: 'Throws a metallic snare that traps an enemy and drags other nearby foes into the same cluster.' },
      { name: 'Venari', description: "Commands the panther Venari's stance between attack, healing, or protection, shifting the companion's focus." },
      { name: 'Strangledome', description: 'Creates a dome of living chains that strangle enemies in midair, turning them into easy targets for Whipclaw.' },
    ],
    acquisition: {
      source_type: 'enemy_drop',
      blueprint: 'Main blueprint purchased from the Market.',
      parts: 'Component blueprints drop from standard Sanctuary Onslaught (not Elite): Rotation A 7.14%, B 7.14%, C 9.09% each. Every two stages is one rotation (A-A-B-C).',
      alternative: 'Also available in The Circuit (Duviri) when Khora is in rotation: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Systems), Tier 10 (Main Blueprint).',
      recommended_farm: 'Sanctuary Onslaught — push to Rotation C (stage 8) for best odds; bring a high-DPS efficiency frame.',
    },
  },
  'koumei': {
    title: 'The Lady of Chance',
    description: 'A Warframe who trusts in fate and dice to win. Her abilities revolve around wagers and blessings of luck, rewarding courage with devastating power.',
    abilities: [
      { type: 'passive', name: 'Blessing of Luck', description: 'Critical hits can complete fate marks that grant temporary blessings to Koumei.' },
      { name: 'Kumihimo', description: 'Weaves a sacred cord that ensnares enemies in a series and drags them along when Koumei moves.' },
      { name: 'Omikuji', description: 'Rolls the dice of fate to grant a random blessing that empowers Koumei and her allies.' },
      { name: 'Omamori', description: 'Grants an amulet that can negate a fatal blow and return a portion of the absorbed damage.' },
      { name: 'Bunraku', description: 'Summons spirit puppets that distract and attack enemies, turning chaos into a choreographed spectacle.' },
    ],
    acquisition: {
      source_type: 'enemy_drop',
      blueprint: 'Main blueprint drops from Shrine Defense on Saya\'s Visions, Earth at 4.09%. Requires Saya\'s Vigil and Once Awake.',
      parts: 'Component blueprints also drop from Shrine Defense at 4.09% each.',
      alternative: 'Alternatively, purchase from Koumei\'s Shrine in Cetus using Fate Pearls dropped by the Infested Oni at the end of Shrine Defense (55 per component, 165 for main; 330 total).',
      recommended_farm: 'Saya\'s Visions / Earth Shrine Defense — collect Fate Pearls from Oni kills; Steel Path doubles pearls (20-24 vs 14-18).',
    },
  },
  'lavos': {
    title: 'The Alchemist of Ages',
    description: 'An ancient Warframe who trades energy for cooldowns and mixes elemental effects into his own abilities. Every combination becomes a devastating potion.',
    abilities: [
      { type: 'passive', name: 'Living Catalyst', description: 'Lavos does not use energy, but has cooldowns on his abilities, and can infuse elements into them by touching elemental weapons.' },
      { name: 'Ophidian Bite', description: 'Lunges like a serpent and bites an enemy, restoring health and draining their status effects.' },
      { name: 'Vial Rush', description: 'Slides across the ground leaving a trail of volatile vials that explode in elemental reactions.' },
      { name: 'Transmutation Probe', description: 'Hurls a bouncing probe that applies random status effects to every enemy it touches.' },
      { name: 'Catalyze', description: 'Releases an alchemical wave in an area that detonates all status effects on struck enemies, multiplying elemental damage.' },
    ],
    acquisition: {
      source_type: 'syndicate',
      blueprint: 'All blueprints purchased from Father with Entrati standing. Main blueprint requires Rank 2 - Acquaintance, components Rank 3 - Associate. Each costs 5,000 standing (20,000 total).',
      parts: 'Component blueprints sold by Father once Entrati Rank 3 - Associate is reached.',
      recommended_farm: 'Farm Entrati standing in the Cambion Drift via bounties and token gifting.',
    },
  },
  'mag': {
    title: 'The Magnetic Force',
    description: 'A Warframe who manipulates magnetic fields to pull enemies, shred shields, and turn projectiles into traps. She shines against armored and technological targets.',
    abilities: [
      { type: 'passive', name: 'Inevitable Attraction', description: 'Shots near Mag are magnetically drawn toward enemies, improving accuracy under pressure.' },
      { name: 'Pull', description: 'Yanks enemies from where they stand with a magnetic burst, leaving them stunned on the ground.' },
      { name: 'Magnetize', description: 'Creates a magnetic field around a target that traps projectiles and amplifies damage dealt to it.' },
      { name: 'Polarize', description: 'Emits a pulse that strips shields and armor, turning the fragments into lethal shards.' },
      { name: 'Crush', description: 'Lifts all nearby enemies into the air and crushes them with a colossal magnetic wave.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'One of three starter Warframes available during the Awakening quest. Main blueprint can also be purchased from the Market.',
      parts: 'Component blueprints drop from The Sergeant assassination on Iliad, Phobos. Drop rates: Neuroptics 38.72%, Chassis 38.72%, Systems 22.56%.',
      alternative: 'Also available in The Circuit (Duviri): Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Systems), Tier 10 (Main). Fully built version can be bought from Teshin for 60,000 Conclave standing.',
      recommended_farm: 'Phobos / Iliad — quick assassination farm, ~14 kills near-guaranteed for Neuroptics/Chassis.',
    },
  },
  'nokko': {
    title: 'The Spore Sower',
    description: 'A fungal Warframe who grows and spreads across the battlefield. He scatters spores, roots, and mushrooms that feed on enemies to strengthen allies.',
    abilities: [
      { type: 'passive', name: 'Vital Decay', description: 'Enemies killed near Nokko release spores that heal and strengthen the Warframe and his allies.' },
      { name: 'Stinkbrain', description: 'Releases a fetid cloud that confuses enemies and makes them attack one another.' },
      { name: 'Brightbonnet', description: 'Sprouts a luminous mushroom that illuminates the area and empowers the abilities of nearby allies.' },
      { name: 'Reroot', description: 'Creates living roots that pin enemies to the ground and drain them to feed Nokko.' },
      { name: 'Sporespring', description: 'Unleashes a burst of spores that spread across the area, infecting enemies and healing allies in a chain.' },
    ],
    acquisition: {
      source_type: 'enemy_drop',
      blueprint: 'Main blueprint drops from Deepmines Bounties (Rotation C) as a rare drop (5-8%). Requires The New War.',
      parts: 'Component blueprints drop from Deepmines Bounties as uncommon drops: Neuroptics (Weed The Gardens), Chassis (Critter Liberation), Systems (Corporate Restructuring). 10% on Rotation C, 2.50-5% on B.',
      alternative: 'Alternatively, purchase from Nightcap in Fortuna at Rank 4 - Gardener using Fergolyte from Deepmines Bounties (160 per component, 240 for main; 720 total).',
      recommended_farm: 'Run Deepmines Bounties on Steel Path for improved drop rates and faster Fergolyte accumulation.',
    },
  },
  'nova': {
    title: 'The Antimatter Scientist',
    description: "A Warframe who manipulates antimatter to accelerate or slow enemies' time. Small detonations take on catastrophic proportions in her hands.",
    abilities: [
      { type: 'passive', name: 'Quantum Repulsion', description: 'When struck by a melee attack, Nova releases an antimatter blast that hurls the attacker away.' },
      { name: 'Null Star', description: 'Summons antimatter particles that orbit Nova, reducing damage taken and chasing nearby enemies.' },
      { name: 'Antimatter Drop', description: 'Launches a slow sphere of antimatter that absorbs shots and explodes for damage proportional to what it received.' },
      { name: 'Wormhole', description: 'Opens a wormhole that instantly transports Nova and her allies to a distant point.' },
      { name: 'Molecular Prime', description: 'Releases a wave that marks enemies with antimatter, slowing them and causing them to explode in a chain upon death.' },
    ],
    acquisition: {
      source_type: 'boss_drop',
      blueprint: 'Main blueprint purchased from the Market.',
      parts: 'Component blueprints drop from Raptors assassination on Naamah, Europa. Drop rates: Neuroptics 38.72%, Chassis 38.72%, Systems 22.56%.',
      alternative: 'Also available in The Circuit (Duviri) when Nova is in rotation: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Systems), Tier 10 (Main Blueprint).',
      recommended_farm: 'Europa / Naamah — Raptors assassination, ~14 kills near-guaranteed for Neuroptics/Chassis.',
    },
  },
  'qorvex': {
    title: 'The Brutalist Golem',
    description: 'A colossal Warframe made of radioactive concrete who raises walls and pillars across the battlefield. His structures serve as both cover and weapons.',
    abilities: [
      { type: 'passive', name: 'Irradiated Chain', description: 'Abilities used in sequence spread Radiation status among struck enemies, creating a chain reaction.' },
      { name: 'Chyrinka Pillar', description: 'Raises a radioactive pillar that pulses area damage and weakens nearby enemies.' },
      { name: 'Containment Wall', description: 'Sprouts a concrete wall that serves as cover and detonates into radioactive shards.' },
      { name: 'Disometric Guard', description: 'Grants Qorvex and nearby allies supplemental armor that reflects part of the damage taken.' },
      { name: 'Crucible Blast', description: 'Fires a concentrated radioactive beam that vaporizes enemies in a line and detonates his structures in sequence.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Main blueprint acquired upon completing Whispers in the Walls quest.',
      parts: 'Component blueprints drop from Sanctum Anatomica Bounties as uncommon drops: Neuroptics Lvl 55-60 (13.04%), Chassis Lvl 65-70 (13.56%), Systems Lvl 75-80 (12.40%).',
      alternative: 'Alternatively, purchase from Bird 3 of Cavia: components for 20,000 standing (Rank 2 - Researcher), main for 50,000 standing (Rank 4 - Scholar).',
      recommended_farm: 'Run Sanctum Anatomica Bounties at the appropriate level for each component, ~7-8 stages expected per part.',
    },
  },
  'uriel': {
    title: 'The Heretic of Xata',
    description: 'A demonic Warframe who punishes and purifies in equal measure. She alternates between scourging enemies with flames and healing allies with sacred fire.',
    abilities: [
      { type: 'passive', name: 'Profane Faith', description: 'Every ability cast accumulates faith that alternates between empowering demonic damage or sacred healing.' },
      { name: 'Infernalis', description: 'Conjures an infernal flame that hunts enemies and burns them with escalating damage.' },
      { name: 'Remedium', description: 'Releases a sacred wave that heals nearby allies and removes harmful status effects.' },
      { name: 'Demonium', description: 'Lets loose a demonic scream that terrorizes nearby enemies, sending them fleeing and reducing their resistance.' },
      { name: 'Brimstone', description: 'Calls down a rain of flaming brimstone that scourges enemies and blesses allies within the chosen area.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Main blueprint acquired upon completing The Old Peace quest.',
      parts: 'Component blueprints drop from Roathe\'s Oblivion on Infernium 21 of The Descendia at 12.50% each.',
      alternative: 'Alternatively, purchase from Roathe in La Cathėdrale, Sanctum Anatomica using Maphica from The Descendia (25 per component, 75 for main; 150 total).',
      recommended_farm: 'Roathe / Infernium 21 — ~8 rotations expected per part; collect Maphica for fragment shop purchases.',
    },
  },
  'vauban': {
    title: 'The Engineer of Chaos',
    description: 'A tactical Warframe who floods the battlefield with mines, turrets, and electric traps. He turns corridors into killing zones and enemies into helpless targets.',
    abilities: [
      { type: 'passive', name: 'Field Tactics', description: "Vauban's abilities placed near one another share effects, amplifying area control." },
      { name: 'Tesla Nervos', description: 'Releases rolling drones that chase enemies and electrocute them until they fall.' },
      { name: 'Minelayer', description: 'Allows him to choose between four different tactical mines, each with a devastating effect.' },
      { name: 'Photon Strike', description: 'Marks the ground for a photonic bombardment that detonates with colossal force after a brief charge.' },
      { name: 'Bastille', description: 'Creates a gravitational field that suspends enemies in midair, and can be detonated into a powerful Vortex wave.' },
    ],
    acquisition: {
      source_type: 'nightwave',
      blueprint: 'Main blueprint purchased from the Market.',
      parts: 'Component blueprints purchased from the Nightwave Cred Offerings for 25 Creds each (75 total).',
      alternative: 'Also available in The Circuit (Duviri) when Vauban is in rotation: Tier 2 (Neuroptics), Tier 5 (Chassis), Tier 8 (Systems), Tier 10 (Main Blueprint).',
      recommended_farm: 'Complete Nightwave acts weekly to earn Creds and rotate through the Cred Offerings shop.',
    },
  },
  'dante': {
    title: 'The Bard of Voices',
    description: 'Scholar of the Leverian and chronicler of forgotten ages, Dante weaves arcane verses that protect allies and shred enemies. His tome Noctua is both weapon and living library.',
    abilities: [
      { type: 'passive', name: 'Noctua Scan', description: 'The Noctua tome scans enemies for the Codex, and fully scanned targets suffer +50% Status Chance.' },
      { name: 'Noctua', description: 'Summons the tome-weapon Noctua, whose shots ricochet between enemies while the alternate fire launches a wide projectile.' },
      { name: 'Light Verse', description: 'Recites a luminous verse that grants Overguard to Dante and nearby allies.' },
      { name: 'Dark Verse', description: 'Utters a shadowed verse that inflicts Slash damage upon stricken enemies.' },
      { name: 'Final Verse', description: 'Combines the previous verses into one of four final tales: Triumph, Tragedy, Wordwarden, or Pageflight, each with a uniquely devastating effect.' },
    ],
    acquisition: {
      source_type: 'enemy_drop',
      blueprint: 'Main blueprint drops from Rotation C of Disruption on Armatus, Deimos (7.50%). Requires The Deadlock Protocol and Whispers in the Walls.',
      parts: 'Component blueprints also drop from Rotation C of Armatus Disruption at 5% each.',
      alternative: 'Alternatively, purchase from Loid in Sanctum Anatomica using Vessel Capillaries dropped by Disruption Demolishers (90 per component, 270 for main; 540 total).',
      recommended_farm: 'Armatus / Deimos Disruption — kill Demolishers for Vessel Capillaries while farming Rotation C drops.',
    },
  },
  'jade': {
    title: 'The Luminous Virtuoso',
    description: 'An angelic frame of choirs and judgments, Jade descends from the heavens to heal allies and mark enemies with the Light of Jade. Her presence is both sanctuary and sentence.',
    abilities: [
      { type: 'passive', name: 'Judgment', description: 'Jade possesses two Aura Mod slots, and her abilities mark enemies with Judgment, increasing their damage vulnerability by 50% for 10 seconds.' },
      { name: "Light's Judgment", description: "Creates pools of light that restore allies' health while dealing Heat damage and marking enemies with Judgment." },
      { name: 'Symphony of Mercy', description: 'Alternates between three hymns: Power of The Seven (Ability Strength), Deathbringer (weapon damage), and Spirit of Resilience (shield regeneration).' },
      { name: 'Ophanim Eyes', description: 'Summons a celestial gaze that slows targets, strips shields and armor, and can revive fallen companions from afar.' },
      { name: 'Glory on High', description: 'Jade takes flight wielding the exalted weapon Glory, whose projectiles apply Judgment and detonate the marks in an area with the alternate fire.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Main blueprint acquired upon completing the Jade Shadows quest.',
      parts: 'Component blueprints drop from Ascension on Brutus, Uranus at 4.63% each.',
      alternative: 'Alternatively, purchase from Ordis in the Drifter\'s Camp using Vestigial Motes earned from Ascension (150 per component, 450 for main; 900 total).',
      recommended_farm: 'Brutus / Uranus Ascension on Steel Path — complete Sisters of Parvos objective for max Vestigial Motes.',
    },
  },
  'protea': {
    title: 'The Ingenious of Time',
    description: 'Created by Parvos Granum as his personal guardian, Protea masters gadgets and temporal manipulation. Her arsenal of devices sustains the team while her temporal anchor reverses death itself.',
    abilities: [
      { type: 'passive', name: 'Calculated Critical', description: 'Every fourth consecutive ability use, the cast gains +100% Ability Strength.' },
      { name: 'Grenade Fan', description: "Hurls a fan of grenades that turn into shrapnel vortices against enemies, or satellites that restore shields and reinforce allies' shield gating." },
      { name: 'Blaze Artillery', description: 'Deploys a stationary Heat turret that grows more powerful with every shot fired.' },
      { name: 'Dispensary', description: 'Sets down a dispenser that periodically generates enhanced Health Orbs, Energy Orbs, and a Universal Ammo Pack.' },
      { name: 'Temporal Anchor', description: 'Plants a temporal anchor that records damage dealt; on expiration, Protea becomes invulnerable, returns to the starting point, and detonates an implosion carrying all accumulated damage.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Main blueprint rewarded upon completing The Deadlock Protocol quest. Additional copies cost 50,000 standing from Cephalon Simaris.',
      parts: 'Component blueprints drop from Rotation C of Granum Void variants on Corpus Ship: Neuroptics from basic, Chassis from Extended, Systems from Nightmare. All at 11.11%.',
      recommended_farm: 'Use Granum Crowns of each tier (Granum, Exemplar, Zenith) from Treasurer enemies on Corpus Ship missions to enter the right Granum Void.',
    },
  },
  'styanax': {
    title: 'The Heroic Hoplite',
    description: "A frame inspired by the hoplites of ancient Greece, Styanax wields his spear Axios and his shield Tharros to lead by example. He inspires allies while drawing the enemy's fury upon himself.",
    abilities: [
      { type: 'passive', name: 'Shield Momentum', description: 'His critical chance increases in proportion to his shields and is doubled when wielding throwing spears.' },
      { name: 'Axios Javelin', description: 'Hurls a spear that pins enemies to surfaces and generates a vortex that draws other adversaries close.' },
      { name: 'Tharros Strike', description: "Projects a wave of shields that strips enemy shields and armor while restoring Styanax's health." },
      { name: 'Rally Point', description: 'Inspires allies with continuous energy regeneration and shield recovery on kill, at the cost of drawing more enemy attention.' },
      { name: 'Final Stand', description: 'Leaps into the skies alongside spectral soldiers and pours a rain of spears upon the enemies below.' },
    ],
    acquisition: {
      source_type: 'syndicate',
      blueprint: 'All blueprints purchased from Chipper at Kahl\'s Garrison using Stock earned from Break Narmer weekly missions. Available after completing the Veilbreaker quest.',
      parts: 'Systems at Rank 2 - Encampment, Neuroptics at Rank 3 - Fort, Chassis at Rank 4 - Settlement, Main at Rank 5 - Home. Components cost 60 Stock each, main costs 90 (270 total).',
      recommended_farm: 'Complete Kahl\'s weekly Break Narmer missions every week to accumulate Stock and rank up with Kahl\'s Garrison.',
    },
  },
  'yareli': {
    title: 'The Rider of Waves',
    description: 'A folk heroine of the Children of the Wind, Yareli dances atop her Merulina hoverboard wielding the grace of the waters. Her aquatic mobility turns every maneuver into a lethal flurry.',
    abilities: [
      { type: 'passive', name: 'Critical Flow', description: 'After remaining in motion for 1.5 seconds, her secondary weapons gain +200% Critical Chance.' },
      { name: 'Sea Snares', description: 'Creates globes of water that hunt enemies, suspending them in the air while amplifying their damage vulnerability.' },
      { name: 'Merulina', description: 'Summons her signature K-Drive hoverboard, which grants aquatic mobility and damage redirection as protection.' },
      { name: 'Aquablades', description: 'Conjures three spinning blades of water that orbit Yareli and shred nearby enemies.' },
      { name: 'Riptide', description: 'Generates an aquatic cyclone that sucks enemies into its vortex before detonating in a devastating explosion.' },
    ],
    acquisition: {
      source_type: 'quest_reward',
      blueprint: 'Main blueprint acquired by completing The Waverider quest. Additional copies cost 50,000 standing from Cephalon Simaris.',
      parts: 'Component blueprints acquired via Research in the Ventkids\' Bash Lab inside the Clan Dojo.',
      recommended_farm: 'Complete The Waverider quest; research components at the Ventkids\' Bash Lab in the Dojo.',
    },
  },
  'zephyr': {
    title: 'The Lady of the Winds',
    description: 'An agile terror of the skies who delivers swift judgment from above, Zephyr commands air currents like no other. Light and deadly, she lifts enemies in tornadoes while gliding with unreachable grace.',
    abilities: [
      { type: 'passive', name: 'Aerial Grace', description: 'Zephyr falls slowly and gains acceleration in midair, and her weapons receive +150% Critical Chance during flight.' },
      { name: 'Tail Wind', description: 'Propels Zephyr through the air in the desired direction, or holds her hovering stationary at her current altitude.' },
      { name: 'Airburst', description: 'Fires a gust of wind that pushes enemies away or clusters them together, depending on how the ability is triggered.' },
      { name: 'Turbulence', description: 'Creates a protective barrier of wind around Zephyr that deflects incoming enemy projectiles.' },
      { name: 'Tornado', description: 'Conjures wandering tornadoes that lift enemies into the air like ragdolls and absorb elemental damage to amplify it.' },
    ],
    acquisition: {
      source_type: 'dojo_research',
      blueprint: 'All blueprints can be researched from the Tenno Lab in the Dojo.',
      parts: 'Components are obtained via Tenno Lab research and built in the Foundry.',
    },
  },
  'oraxia': {
    title: 'The Lady of Webs',
    description: 'Personal guardian of Albrecht Entrati in Duviri, Oraxia hunts in the shadows with sinister grace and lethal versatility. The evolution of the perfect predator, she weaves fear into every movement.',
    abilities: [
      { type: 'passive', name: "Predator's Stalk", description: 'When clinging to walls, Oraxia becomes invisible for 8 seconds.' },
      { name: "Mercy's Kiss", description: 'Lunges in a lethal pounce that executes low-health enemies, causing them to drop Health and Energy Orbs.' },
      { name: 'Webbed Embrace', description: 'Ensnares enemies in webs and imposes Damage Vulnerability on the captured targets.' },
      { name: "Widow's Brood", description: 'Drives darts into targets; when they die, allied Scuttlers emerge to fight at her side.' },
      { name: 'Silken Stride', description: 'Unfolds her spider legs, gaining status immunity, bonus health, primary and secondary weapons infused with Toxin, and a silk-drawn roll.' },
    ],
    acquisition: {
      source_type: 'duviri',
      blueprint: 'Main blueprint drops from Rotation A of Isleweaver in Duviri at 7.69%. Requires The Hex quest.',
      parts: 'Component blueprints also drop from Isleweaver Rotation A at 7.69% each.',
      alternative: 'Alternatively, purchase from Acrithis in the Dormizone using Scuttler Husks awarded from Isleweaver (20 per component, 60 for main; 120 total).',
      recommended_farm: 'Run Isleweaver in Duviri — Steel Path has same odds; ~13 A rotations expected per part.',
    },
  },
};

// ============== Augments ==============
// Augments are keyed by warframe slug, then by ability index (0 = passive, 1-4 = abilities).
// Each augment: { name, description, image }. Descriptions verbatim from wiki.warframe.com.
const AUGMENTS = {
  ash: {
    1: [
      {
        name: 'Seeking Shuriken',
        image: 'assets/augments/ash/seekingshuriken.png',
        description: {
          en: 'Hits expose weaknesses on enemies, reducing their Armor by 70% for 8s.',
          'pt-BR': 'Acertos expõem fraquezas nos inimigos, reduzindo sua Armadura em 70% por 8s.',
        },
      },
    ],
    2: [
      {
        name: 'Smoke Shadow',
        image: 'assets/augments/ash/smokeshadow.png',
        description: {
          en: 'Conceals allies within 15m and grants 150% Critical Chance while invisible.',
          'pt-BR': 'Oculta aliados num raio de 15m e concede 150% de Chance Crítica enquanto invisível.',
        },
      },
    ],
    3: [
      {
        name: 'Teleport Rush',
        image: 'assets/augments/ash/teleportrush.png',
        description: {
          en: 'Using Teleport increases Parkour Velocity by 30% for 12s. Executing a target with Teleport extends Smoke Screen\'s duration by 5s. Teleport Mercy Kills fully refresh the duration.',
          'pt-BR': 'Usar Teleport aumenta a Velocidade de Parkour em 30% por 12s. Executar um alvo com Teleport estende a duração de Smoke Screen em 5s. Mercy Kills com Teleport recarregam totalmente a duração.',
        },
      },
    ],
    4: [
      {
        name: 'Rising Storm',
        image: 'assets/augments/ash/risingstorm.png',
        description: {
          en: 'Blade Storm attacks increase your Ability Combo Counter by 4. Passive: +10s Combo Duration',
          'pt-BR': 'Ataques de Blade Storm aumentam seu Contador de Combo de Habilidade em 4. Passiva: +10s de Duração de Combo',
        },
      },
    ],
  },
  atlas: {
    1: [
      {
        name: 'Rubble Heap',
        image: 'assets/augments/atlas/rubbleheap.png',
        description: {
          en: 'When above 1400 Rubble, Landslide costs no Energy, deals 2x Damage, and travels 2x faster.',
          'pt-BR': 'Quando acima de 1400 de Entulho, Landslide não custa Energia, causa 2x de Dano e viaja 2x mais rápido.',
        },
      },
      {
        name: 'Path of Statues',
        image: 'assets/augments/atlas/pathofstatues.png',
        description: {
          en: 'Leave a trail for 12s that petrifies enemies for 6s.',
          'pt-BR': 'Deixa um rastro por 12s que petrifica inimigos por 6s.',
        },
      },
    ],
    2: [
      {
        name: 'Tectonic Fracture',
        image: 'assets/augments/atlas/tectonicfracture.png',
        description: {
          en: 'Create up to 3 walls with 100% Health. Walls can no longer be turned into boulders.',
          'pt-BR': 'Cria até 3 paredes com 100% de Vida. Paredes não podem mais ser transformadas em pedregulhos.',
        },
      },
    ],
    3: [
      {
        name: 'Ore Gaze',
        image: 'assets/augments/atlas/oregaze.png',
        description: {
          en: 'Petrified enemies are scanned into the Codex and have a 25% chance to drop additional loot when killed.',
          'pt-BR': 'Inimigos petrificados são escaneados no Codex e têm 25% de chance de soltar saque adicional ao morrer.',
        },
      },
    ],
    4: [
      {
        name: 'Titanic Rumbler',
        image: 'assets/augments/atlas/titanicrumbler.png',
        description: {
          en: 'Create a single rumbler with 300% Health and 400% Damage. Reactivating will cause him to slam the floor and knockdown enemies in 15m.',
          'pt-BR': 'Cria um único rumbler com 300% de Vida e 400% de Dano. Reativar fará com que ele bata no chão e derrube inimigos num raio de 15m.',
        },
      },
    ],
  },
  banshee: {
    1: [
      {
        name: 'Sonic Fracture',
        image: 'assets/augments/banshee/sonicfracture.png',
        description: {
          en: 'Enemy Armor is reduced by 70%.',
          'pt-BR': 'A Armadura dos inimigos é reduzida em 70%.',
        },
      },
    ],
    2: [
      {
        name: 'Resonance',
        image: 'assets/augments/banshee/resonance.png',
        description: {
          en: 'Killing an enemy by shooting their weak spot will trigger another Sonar for 100% of remaining duration.',
          'pt-BR': 'Matar um inimigo atirando em seu ponto fraco aciona outro Sonar com 100% da duração restante.',
        },
      },
    ],
    3: [
      {
        name: 'Savage Silence',
        image: 'assets/augments/banshee/savagesilence.png',
        description: {
          en: 'Silence staggers enemies and Finisher damage is increased by 300%',
          'pt-BR': 'Silence atordoa inimigos e o dano de Finisher é aumentado em 300%',
        },
      },
    ],
    4: [
      {
        name: 'Resonating Quake',
        image: 'assets/augments/banshee/resonatingquake.png',
        description: {
          en: 'Forgoes channeling to create a shockwave that deals 20x Damage at the epicenter, gradually weakening as it expands out.',
          'pt-BR': 'Abre mão do canalizamento para criar uma onda de choque que causa 20x de Dano no epicentro, enfraquecendo gradualmente conforme se expande.',
        },
      },
    ],
  },
  baruuk: {
    1: [
      {
        name: 'Elusive Retribution',
        image: 'assets/augments/baruuk/elusiveretribution.png',
        description: {
          en: 'Every attack Baruuk Eludes increases his Melee Attack Speed and Melee Critical Damage by 5% up to 6 stacks. Stacks last 6s.',
          'pt-BR': 'Cada ataque que Baruuk evita com Elude aumenta sua Velocidade de Ataque Corpo a Corpo e Dano Crítico Corpo a Corpo em 5%, até 6 acúmulos. Acúmulos duram 6s.',
        },
      },
    ],
    2: [
      {
        name: 'Endless Lullaby',
        image: 'assets/augments/baruuk/endlesslullaby.png',
        description: {
          en: 'Performing a finisher on or killing a sleeping enemy will retrigger Lull for 100% of the remaining duration. Passive: +50% Lull Duration.',
          'pt-BR': 'Executar um finisher ou matar um inimigo adormecido reativa Lull com 100% da duração restante. Passiva: +50% de Duração de Lull.',
        },
      },
    ],
    4: [
      {
        name: 'Reactive Storm',
        image: 'assets/augments/baruuk/reactivestorm.png',
        description: {
          en: 'Desert Wind is granted +250% Status Chance and changes its damage type to match enemy weaknesses.',
          'pt-BR': 'Desert Wind ganha +250% de Chance de Status e muda seu tipo de dano para corresponder às fraquezas dos inimigos.',
        },
      },
    ],
  },
  caliban: {
    1: [
      {
        name: 'Razor Mortar',
        image: 'assets/augments/caliban/razormortar.png',
        description: {
          en: 'Groups enemies together, while Lethal Progeny\'s Ortholysts focus fire on those enemies with +70% Electricity Damage and Fire Rate for 6s.',
          'pt-BR': 'Agrupa inimigos enquanto os Ortholysts de Lethal Progeny concentram fogo neles com +70% de Dano Elétrico e Cadência de Tiro por 6s.',
        },
      },
    ],
  },
  chroma: {
    2: [
      {
        name: 'Everlasting Ward',
        image: 'assets/augments/chroma/everlastingward.png',
        description: {
          en: 'Allies that leave the radius will retain the effect for 100% of the remaining duration.',
          'pt-BR': 'Aliados que saem do raio mantêm o efeito por 100% da duração restante.',
        },
      },
    ],
    3: [
      {
        name: 'Guardian Armor',
        image: 'assets/augments/chroma/guardianarmor.png',
        description: {
          en: 'Chroma reduces the damage his squadmates within Affinity Range take by 75%. Squad kills restore 5% of his Health over 3s and increases Vex Armor duration by 1s.',
          'pt-BR': 'Chroma reduz em 75% o dano que seus companheiros de esquadrão dentro do Alcance de Afinidade recebem. Abates da equipe restauram 5% de sua Vida ao longo de 3s e aumentam a duração de Vex Armor em 1s.',
        },
      },
      {
        name: 'Vexing Retaliation',
        image: 'assets/augments/chroma/vexingretaliation.png',
        description: {
          en: 'Taking 150 Damage will trigger a 9m burst. Shield damage will cause a Puncture Status effect while Health damage will cause a Blast Status effect.',
          'pt-BR': 'Receber 150 de Dano aciona uma explosão de 9m. Dano em escudo causa efeito de Status de Perfuração, enquanto dano em vida causa efeito de Status de Explosão.',
        },
      },
    ],
    4: [
      {
        name: 'Guided Effigy',
        image: 'assets/augments/chroma/guidedeffigy.png',
        description: {
          en: 'Cast and hold to make Effigy move to your aim point. Deals 4000 Damage/s and restores 5 Energy for each enemy in its path. Roars on arrival, stunning nearby enemies.',
          'pt-BR': 'Lance e segure para fazer Effigy se mover para seu ponto de mira. Causa 4000 de Dano/s e restaura 5 de Energia para cada inimigo em seu caminho. Ruge ao chegar, atordoando inimigos próximos.',
        },
      },
    ],
  },
  citrine: {
    3: [
      {
        name: 'Prismatic Companion',
        image: 'assets/augments/citrine/prismaticcompanion.png',
        description: {
          en: 'The gem now attaches to your free-moving companion. Passive : +50% Prismatic Gem Duration.',
          'pt-BR': 'A gema agora se anexa ao seu companheiro de movimento livre. Passiva: +50% de Duração de Prismatic Gem.',
        },
      },
    ],
    4: [
      {
        name: 'Recrystalize',
        image: 'assets/augments/citrine/recrystalize.png',
        description: {
          en: 'Enemies killed by crystalline growths stagger and spread the crystals to enemies within 16m.',
          'pt-BR': 'Inimigos mortos por crescimentos cristalinos cambaleiam e espalham os cristais para inimigos num raio de 16m.',
        },
      },
    ],
  },
  dagath: {
    3: [
      {
        name: 'Spectral Spirit',
        image: 'assets/augments/dagath/spectralspirit.png',
        description: {
          en: 'Immediately assume Spectral Form. 100% chance for weapons and abilities to apply Doom. Kills outside of Spectral Form decrease its cooldown by 1s.',
          'pt-BR': 'Assume imediatamente a Forma Espectral. 100% de chance para armas e habilidades aplicarem Doom. Abates fora da Forma Espectral reduzem seu cooldown em 1s.',
        },
      },
    ],
  },
  ember: {
    1: [
      {
        name: 'Fireball Frenzy',
        image: 'assets/augments/ember/fireballfrenzy.png',
        description: {
          en: 'Hold to cast will grant all allies within 15m an additional 100% Heat Damage to their attacks for 40s.',
          'pt-BR': 'Segurar para lançar concede a todos os aliados num raio de 15m um adicional de 100% de Dano de Calor em seus ataques por 40s.',
        },
      },
    ],
    2: [
      {
        name: 'Immolated Radiance',
        image: 'assets/augments/ember/immolatedradiance.png',
        description: {
          en: 'Allies within Affinity range will receive 50% of Immolation\'s Damage Reduction.',
          'pt-BR': 'Aliados dentro do alcance de Afinidade recebem 50% da Redução de Dano de Immolation.',
        },
      },
    ],
    3: [
      {
        name: 'Healing Flame',
        image: 'assets/augments/ember/healingflame.png',
        description: {
          en: 'Each enemy hit heals by 25 to 50 depending on current Immolation level. With Ember, over healing grants you Overguard.',
          'pt-BR': 'Cada inimigo atingido cura de 25 a 50 dependendo do nível atual de Immolation. Com Ember, cura excedente concede Overguard.',
        },
      },
    ],
    4: [
      {
        name: 'Exothermic',
        image: 'assets/augments/ember/exothermic.png',
        description: {
          en: 'Enemies killed while under the effect of Inferno have a 15% chance to drop an energy orb.',
          'pt-BR': 'Inimigos mortos sob o efeito de Inferno têm 15% de chance de soltar uma esfera de energia.',
        },
      },
    ],
  },
  equinox: {
    1: [
      {
        name: 'Duality',
        image: 'assets/augments/equinox/duality.png',
        description: {
          en: 'Equinox\'s other half breaks free for 10s, dealing 300% Damage.',
          'pt-BR': 'A outra metade de Equinox se liberta por 10s, causando 300% de Dano.',
        },
      },
    ],
    2: [
      {
        name: 'Calm & Frenzy',
        image: 'assets/augments/equinox/calmfrenzy.png',
        description: {
          en: 'Killing an affected enemy causes the effect to spread to enemies within 5m for 100% of the remaining duration.',
          'pt-BR': 'Matar um inimigo afetado faz o efeito se espalhar para inimigos num raio de 5m com 100% da duração restante.',
        },
      },
    ],
    3: [
      {
        name: 'Peaceful Provocation',
        image: 'assets/augments/equinox/peacefulprovocation.png',
        description: {
          en: 'Pacify converts damage done to allies into an aura that slows enemies by 40%. Provoke converts damage done to enemies into 15% extra Ability Strength.',
          'pt-BR': 'Pacify converte o dano causado aos aliados em uma aura que reduz a velocidade dos inimigos em 40%. Provoke converte o dano causado aos inimigos em 15% extra de Força de Habilidade.',
        },
      },
    ],
    4: [
      {
        name: 'Energy Transfer',
        image: 'assets/augments/equinox/energytransfer.png',
        description: {
          en: '100% of charge is conserved when switching between forms.',
          'pt-BR': '100% da carga é conservada ao alternar entre formas.',
        },
      },
    ],
  },
  excalibur: {
    0: [
      {
        name: 'Warrior\'s Rest',
        image: 'assets/augments/excalibur/warriorsrest.png',
        description: {
          en: 'Umbra\'s Ability Strength increases by +15% but he no longer fights independently alongside his Operator.',
          'pt-BR': 'A Força de Habilidade de Umbra aumenta em +15%, mas ele não luta mais de forma independente ao lado de seu Operador.',
        },
      },
    ],
    1: [
      {
        name: 'Surging Dash',
        image: 'assets/augments/excalibur/surgingdash.png',
        description: {
          en: 'Each enemy hit during Slash Dash further increases your Melee Counter by 8.',
          'pt-BR': 'Cada inimigo atingido durante Slash Dash aumenta ainda mais seu Contador Corpo a Corpo em 8.',
        },
      },
    ],
    2: [
      {
        name: 'Radiant Finish',
        image: 'assets/augments/excalibur/radiantfinish.png',
        description: {
          en: 'Blinded enemies take 300% more Finisher Damage.',
          'pt-BR': 'Inimigos cegos recebem 300% mais Dano de Finisher.',
        },
      },
    ],
    3: [
      {
        name: 'Furious Javelin',
        image: 'assets/augments/excalibur/furiousjavelin.png',
        description: {
          en: 'Each enemy hit will increase Excalibur\'s Melee Damage by 15% for 16s.',
          'pt-BR': 'Cada inimigo atingido aumenta o Dano Corpo a Corpo de Excalibur em 15% por 16s.',
        },
      },
    ],
    4: [
      {
        name: 'Chromatic Blade',
        image: 'assets/augments/excalibur/chromaticblade.png',
        description: {
          en: 'Exalted Blade\'s Damage Type changes depending on Excalibur\'s Emissive Color, and Status Chance is increased by 300%.',
          'pt-BR': 'O Tipo de Dano de Exalted Blade muda dependendo da Cor Emissiva de Excalibur, e a Chance de Status é aumentada em 300%.',
        },
      },
    ],
  },
  frost: {
    0: [
      {
        name: 'Biting Frost',
        image: 'assets/augments/frost/bitingfrost.png',
        description: {
          en: 'Frost gains +200% Critical Chance and +200% Critical Damage against frozen enemies.',
          'pt-BR': 'Frost ganha +200% de Chance Crítica e +200% de Dano Crítico contra inimigos congelados.',
        },
      },
    ],
    1: [
      {
        name: 'Freeze Force',
        image: 'assets/augments/frost/freezeforce.png',
        description: {
          en: 'Hold to cast will grant all allies within 15m an additional 100% Cold Damage to their attacks for 40s.',
          'pt-BR': 'Segurar para lançar concede a todos os aliados num raio de 15m um adicional de 100% de Dano de Frio em seus ataques por 40s.',
        },
      },
    ],
    2: [
      {
        name: 'Ice Wave Impedance',
        image: 'assets/augments/frost/icewaveimpedance.png',
        description: {
          en: 'Create a frozen trail for 12 seconds. Enemies that touch it are inflicted with Cold Status every second.',
          'pt-BR': 'Cria um rastro congelado por 12 segundos. Inimigos que o tocam recebem Status de Frio a cada segundo.',
        },
      },
    ],
    3: [
      {
        name: 'Chilling Globe',
        image: 'assets/augments/frost/chillingglobe.png',
        description: {
          en: 'Enemies that enter have a 50% chance to become frozen solid for 10s.',
          'pt-BR': 'Inimigos que entram têm 50% de chance de ficarem congelados por completo por 10s.',
        },
      },
    ],
    4: [
      {
        name: 'Icy Avalanche',
        image: 'assets/augments/frost/icyavalanche.png',
        description: {
          en: 'Allies within Affinity Range are coated in ice that grants 60 Overguard per enemy hit. Overguard increases by 20% of your Armor once per enemy.',
          'pt-BR': 'Aliados dentro do Alcance de Afinidade são revestidos de gelo que concede 60 de Overguard por inimigo atingido. O Overguard aumenta em 20% da sua Armadura uma vez por inimigo.',
        },
      },
    ],
  },
  gara: {
    1: [
      {
        name: 'Shattered Storm',
        image: 'assets/augments/gara/shatteredstorm.png',
        description: {
          en: 'When Gara breaks her Mass Vitrify ring with Shattered Lash, enemies struck by the glass suffer Splinter Storm at 100% Strength.',
          'pt-BR': 'Quando Gara quebra seu anel de Mass Vitrify com Shattered Lash, inimigos atingidos pelos vidros sofrem Splinter Storm a 100% de Força.',
        },
      },
    ],
    2: [
      {
        name: 'Mending Splinters',
        image: 'assets/augments/gara/mendingsplinters.png',
        description: {
          en: 'For each target affected, Splinter Storm heals 15 Health/s.',
          'pt-BR': 'Para cada alvo afetado, Splinter Storm cura 15 de Vida/s.',
        },
      },
    ],
    3: [
      {
        name: 'Spectrosiphon',
        image: 'assets/augments/gara/spectrosiphon.png',
        description: {
          en: 'Enemies that die within Spectrorage have a 50% chance to drop an Energy Orb.',
          'pt-BR': 'Inimigos que morrem dentro de Spectrorage têm 50% de chance de soltar um Orbe de Energia.',
        },
      },
    ],
  },
  garuda: {
    1: [
      {
        name: 'Dread Ward',
        image: 'assets/augments/garuda/dreadward.png',
        description: {
          en: 'Become unkillable for 8s when Dread Mirror kills a target by ripping its life force.',
          'pt-BR': 'Torne-se imortal por 8s quando Dread Mirror mata um alvo arrancando sua força vital.',
        },
      },
    ],
    3: [
      {
        name: 'Blood Forge',
        image: 'assets/augments/garuda/bloodforge.png',
        description: {
          en: 'Garuda\'s equipped weapon is reloaded up to 100%.',
          'pt-BR': 'A arma equipada de Garuda é recarregada em até 100%.',
        },
      },
    ],
    4: [
      {
        name: 'Blending Talons',
        image: 'assets/augments/garuda/blendingtalons.png',
        description: {
          en: 'Tap to perform a 9m AoE around Garuda. Garuda\'s Talons gain 100% additional Combo Count Chance when hitting targets affected by Slash Status.',
          'pt-BR': 'Toque para realizar um AoE de 9m ao redor de Garuda. As Talons de Garuda ganham 100% adicionais de Chance de Contagem de Combo ao atingir alvos afetados por Status de Slash.',
        },
      },
    ],
  },
  gauss: {
    1: [
      {
        name: 'Mach Crash',
        image: 'assets/augments/gauss/machcrash.png',
        description: {
          en: 'Impact shockwave leaves behind a vacuum that sucks in enemies within 8m.',
          'pt-BR': 'A onda de choque de Impacto deixa para trás um vácuo que suga inimigos em um raio de 8 m.',
        },
      },
    ],
    3: [
      {
        name: 'Thermal Transfer',
        image: 'assets/augments/gauss/thermaltransfer.png',
        description: {
          en: 'Allies in range gain 75% bonus Elemental Damage for 30s.',
          'pt-BR': 'Aliados no raio ganham 75% de Dano Elemental bônus por 30s.',
        },
      },
    ],
  },
  grendel: {
    1: [
      {
        name: 'Gourmand',
        image: 'assets/augments/grendel/gourmand.png',
        description: {
          en: 'Instead of Energy, consumes 200 Health on cast. Glutton grants an additional 150 Armor per enemy.',
          'pt-BR': 'Em vez de Energia, consome 200 de Vida ao conjurar. Glutton concede 150 de Armadura adicionais por inimigo.',
        },
      },
    ],
    2: [
      {
        name: 'Hearty Nourishment',
        image: 'assets/augments/grendel/heartynourishment.png',
        description: {
          en: 'Clear Status Effects and gain 5s of Status Immunity for each victim in Grendel\'s stomach.',
          'pt-BR': 'Limpa Efeitos de Status e concede 5s de Imunidade a Status para cada vítima no estômago de Grendel.',
        },
      },
    ],
    3: [
      {
        name: 'Catapult',
        image: 'assets/augments/grendel/catapult.png',
        description: {
          en: 'to launch Grendel in your aim direction. Costs 5. Crouch to slow down.',
          'pt-BR': 'para lançar Grendel na direção da sua mira. Custa 5. Agache para desacelerar.',
        },
      },
    ],
    4: [
      {
        name: 'Gastro',
        image: 'assets/augments/grendel/gastro.png',
        description: {
          en: 'Regurgitated enemies bounce up to 3 times, creating gas clouds that last 8s and inflict nearby enemies with Gas Status Effect.',
          'pt-BR': 'Inimigos regurgitados quicam até 3 vezes, criando nuvens de gás que duram 8s e infligem Efeito de Status de Gás em inimigos próximos.',
        },
      },
    ],
  },
  gyre: {
    1: [
      {
        name: 'Conductive Sphere',
        image: 'assets/augments/gyre/conductivesphere.png',
        description: {
          en: 'Projectiles that pass through Arcsphere have guaranteed Electricity Status Effect and +75% Electricity Damage.',
          'pt-BR': 'Projéteis que passam por Arcsphere têm Efeito de Status Elétrico garantido e +75% de Dano Elétrico.',
        },
      },
    ],
    2: [
      {
        name: 'Coil Recharge',
        image: 'assets/augments/gyre/coilrecharge.png',
        description: {
          en: 'Gyratory Sphere can be recalled. Enemies in its radius suffer 500 Electricity Damage and chain other enemies. Enemies pulled into detonation suffer additional discharges.',
          'pt-BR': 'A Gyratory Sphere pode ser revocada. Inimigos no seu raio sofrem 500 de Dano Elétrico e encadeiam outros inimigos. Inimigos puxados para a detonação sofrem descargas adicionais.',
        },
      },
    ],
    3: [
      {
        name: 'Cathode Current',
        image: 'assets/augments/gyre/cathodecurrent.png',
        description: {
          en: 'Eliminating an enemy while Cathode Grace is active will release an additional discharge from Rotorswell with 200% Damage and extend its duration by the same amount.',
          'pt-BR': 'Eliminar um inimigo enquanto Cathode Grace está ativo libera uma descarga adicional de Rotorswell com 200% de Dano e estende sua duração na mesma proporção.',
        },
      },
    ],
    4: [
      {
        name: 'Reverse Rotorswell',
        image: 'assets/augments/gyre/reverserotorswell.png',
        description: {
          en: '35% of damage received is redirected toward the instigator as Electricity Damage.',
          'pt-BR': '35% do dano recebido é redirecionado ao instigador como Dano Elétrico.',
        },
      },
    ],
  },
  harrow: {
    1: [
      {
        name: 'Tribunal',
        image: 'assets/augments/harrow/tribunal.png',
        description: {
          en: 'Other players will trigger 100% of the effects of Penance and Thurible when attacking chained enemies.',
          'pt-BR': 'Outros jogadores acionam 100% dos efeitos de Penance e Thurible ao atacar inimigos acorrentados.',
        },
      },
    ],
    3: [
      {
        name: 'Warding Thurible',
        image: 'assets/augments/harrow/wardingthurible.png',
        description: {
          en: 'Allies in range take 50% less Damage while channeling Thurible and grant 1.0 additional Energy charge whenever damaged.',
          'pt-BR': 'Aliados no alcance recebem 50% menos Dano enquanto canalizam Thurible e concedem 1,0 carga adicional de Energia sempre que sofrem dano.',
        },
      },
    ],
    4: [
      {
        name: 'Lasting Covenant',
        image: 'assets/augments/harrow/lastingcovenant.png',
        description: {
          en: 'Headshot kills increase Critical Chance bonus duration by 3s.',
          'pt-BR': 'Abates com tiro na cabeça aumentam a duração do bônus de Chance Crítica em 3s.',
        },
      },
    ],
  },
  hildryn: {
    1: [
      {
        name: 'Balefire Surge',
        image: 'assets/augments/hildryn/balefiresurge.png',
        description: {
          en: 'Fully charged direct hits restore 250 Shield to Hildryn. Impact with Nullifier Shields will destroy them and restore 750 Shield.',
          'pt-BR': 'Acertos diretos totalmente carregados restauram 250 de Escudo para Hildryn. Impacto com Escudos Nullifier os destrói e restaura 750 de Escudo.',
        },
      },
    ],
    2: [
      {
        name: 'Blazing Pillage',
        image: 'assets/augments/hildryn/blazingpillage.png',
        description: {
          en: 'Enemies affected by Haven will be set ablaze for 200 Heat Damage and restore 50 additional Shields to Hildryn.',
          'pt-BR': 'Inimigos afetados por Haven são incendiados sofrendo 200 de Dano de Calor e restauram 50 de Escudo adicionais para Hildryn.',
        },
      },
    ],
    4: [
      {
        name: 'Aegis Gale',
        image: 'assets/augments/hildryn/aegisgale.png',
        description: {
          en: 'Balefire has an Alternate Fire during Aegis Storm. The blast deals 15% of Hildryn\'s Max Shield as additional damage.',
          'pt-BR': 'Balefire ganha um Disparo Alternativo durante Aegis Storm. A explosão causa 15% do Escudo Máximo de Hildryn como dano adicional.',
        },
      },
    ],
  },
  hydroid: {
    1: [
      {
        name: 'Viral Tempest',
        image: 'assets/augments/hydroid/viraltempest.png',
        description: {
          en: 'Each projectile has a 100% chance of inflicting a Viral Status Effect.',
          'pt-BR': 'Cada projétil tem 100% de chance de infligir um Efeito de Status Viral.',
        },
      },
    ],
    2: [
      {
        name: 'Tidal Impunity',
        image: 'assets/augments/hydroid/tidalimpunity.png',
        description: {
          en: 'Clears Status Effects and grants 12s of Status Immunity for yourself and allies that come in contact with it. Reduces Tidal Surge\'s Energy cost to 15.',
          'pt-BR': 'Limpa Efeitos de Status e concede 12s de Imunidade a Status para você e aliados que entram em contato. Reduz o custo de Energia de Tidal Surge para 15.',
        },
      },
    ],
    3: [
      {
        name: 'Rousing Plunder',
        image: 'assets/augments/hydroid/rousingplunder.png',
        description: {
          en: 'Plunder gains 50% max Corrosive Damage and Armor, and heals allies within Affinity range for 50 Health.',
          'pt-BR': 'Plunder ganha 50% máximo de Dano Corrosivo e Armadura, e cura aliados no alcance de Afinidade em 50 de Vida.',
        },
      },
    ],
    4: [
      {
        name: 'Pilfering Swarm',
        image: 'assets/augments/hydroid/pilferingswarm.png',
        description: {
          en: 'Enemies held by tentacles have a 100% chance at additional drops.',
          'pt-BR': 'Inimigos presos por tentáculos têm 100% de chance de drops adicionais.',
        },
      },
    ],
  },
  inaros: {
    1: [
      {
        name: 'Desiccation\'s Curse',
        image: 'assets/augments/inaros/desiccationscurse.png',
        description: {
          en: 'Killing a blinded enemy with a Finisher has a 100% chance to summon a Swarm Kavat that will spread Scarab Swarm. Maximum Swarm Kavats +2.',
          'pt-BR': 'Matar um inimigo cego com um Finisher tem 100% de chance de invocar um Swarm Kavat que espalhará Scarab Swarm. Máximo de Swarm Kavats +2.',
        },
      },
    ],
    2: [
      {
        name: 'Elemental Sandstorm',
        image: 'assets/augments/inaros/elementalsandstorm.png',
        description: {
          en: 'Sandstorm gains 50% Ability Range and has a 100% chance of inflicting Status Effects based on the Damage Types on the equipped Melee Weapon.',
          'pt-BR': 'Sandstorm ganha 50% de Alcance de Habilidade e tem 100% de chance de infligir Efeitos de Status baseados nos Tipos de Dano da Arma Corpo a Corpo equipada.',
        },
      },
    ],
    3: [
      {
        name: 'Negation Armor',
        image: 'assets/augments/inaros/negationarmor.png',
        description: {
          en: 'When Inaros takes fatal damage, he consumes Scarab Shell to heal with a brief invulnerability that ends with a deadly Slash Status Effect. Cooldown 30s.',
          'pt-BR': 'Quando Inaros recebe dano fatal, ele consome Scarab Shell para curar-se com uma breve invulnerabilidade que termina com um Efeito de Status de Slash letal. Recarga de 30s.',
        },
      },
    ],
  },
  ivara: {
    1: [
      {
        name: 'Empowered Quiver',
        image: 'assets/augments/ivara/empoweredquiver.png',
        description: {
          en: 'Dashwire grants allies 100% Critical Damage. Cloak arrow has a 100% chance to prevent Status Effects.',
          'pt-BR': 'Dashwire concede aos aliados 100% de Dano Crítico. A flecha Cloak tem 100% de chance de prevenir Efeitos de Status.',
        },
      },
    ],
    2: [
      {
        name: 'Piercing Navigator',
        image: 'assets/augments/ivara/piercingnavigator.png',
        description: {
          en: 'Each hit increases the projectile\'s Critical Chance by 50% up to a max of 250%. +3 Projectile Punch Through.',
          'pt-BR': 'Cada acerto aumenta a Chance Crítica do projétil em 50%, até um máximo de 250%. +3 de Perfuração do Projétil.',
        },
      },
    ],
    3: [
      {
        name: 'Infiltrate',
        image: 'assets/augments/ivara/infiltrate.png',
        description: {
          en: 'Ivara is able to bypass laser barriers and gains 25% Movement Speed.',
          'pt-BR': 'Ivara consegue atravessar barreiras de laser e ganha 25% de Velocidade de Movimento.',
        },
      },
    ],
    4: [
      {
        name: 'Concentrated Arrow',
        image: 'assets/augments/ivara/concentratedarrow.png',
        description: {
          en: 'Fires a single arrow with +25% Base Critical Chance on full charge, additional +50% Chance and explodes in a 7m radius on Weak Points. Removes Punch Through.',
          'pt-BR': 'Dispara uma única flecha com +25% de Chance Crítica Base em carga completa, +50% adicional de Chance e explode em um raio de 7m em Pontos Fracos. Remove Perfuração.',
        },
      },
    ],
  },
  jade: {
    0: [
      {
        name: 'Jade\'s Judgment',
        image: 'assets/augments/jade/jadesjudgment.png',
        description: {
          en: 'Enemies damaged by the well have a 5% chance per hit to spawn a Jade Light above them, damaging them for 3s.',
          'pt-BR': 'Inimigos atingidos pelo poço têm 5% de chance por acerto de gerar uma Jade Light acima deles, causando dano por 3s.',
        },
      },
    ],
  },
  khora: {
    1: [
      {
        name: 'Accumulating Whipclaw',
        image: 'assets/augments/khora/accumulatingwhipclaw.png',
        description: {
          en: 'Hitting 3 enemies will grant a 35% stacking Damage Bonus to subsequent Whipclaws. Bonus will decay after 10s.',
          'pt-BR': 'Atingir 3 inimigos concede um Bônus de Dano cumulativo de 35% para os próximos Whipclaws. O bônus decai após 10s.',
        },
      },
    ],
    3: [
      {
        name: 'Venari Bodyguard',
        image: 'assets/augments/khora/venaribodyguard.png',
        description: {
          en: 'Venari dies in Khora\'s place. Recovery timer increased to 150s. Killing enemies decreases the timer by 4s.',
          'pt-BR': 'Venari morre no lugar de Khora. O tempo de recuperação aumenta para 150s. Matar inimigos diminui o tempo em 4s.',
        },
      },
    ],
    4: [
      {
        name: 'Pilfering Strangledome',
        image: 'assets/augments/khora/pilferingstrangledome.png',
        description: {
          en: 'Enemies held in Strangledome have a 65% chance of dropping additional loot.',
          'pt-BR': 'Inimigos presos em Strangledome têm 65% de chance de soltar saque adicional.',
        },
      },
    ],
  },
  koumei: {
    2: [
      {
        name: 'Omikuji\'s Fortune',
        image: 'assets/augments/koumei/omikujisfortune.png',
        description: {
          en: 'Reduce Omikuji\'s Cooldown by 4s when you kill an enemy with the weapon affected by Koumei\'s Passive.',
          'pt-BR': 'Reduz a Recarga de Omikuji em 4s quando você mata um inimigo com a arma afetada pela Passiva de Koumei.',
        },
      },
    ],
  },
  kullervo: {
    2: [
      {
        name: 'Volatile Recompense',
        image: 'assets/augments/kullervo/volatilerecompense.png',
        description: {
          en: 'Daggers whirl in a ring around Kullervo for 25s, slashing nearby foes and dealing Blast Damage and Status Effect before returning to the ring.',
          'pt-BR': 'Adagas giram em um anel ao redor de Kullervo por 25s, cortando inimigos próximos e causando Dano de Explosão e Efeito de Status antes de retornarem ao anel.',
        },
      },
    ],
    4: [
      {
        name: 'Wrath of Ukko',
        image: 'assets/augments/kullervo/wrathofukko.png',
        description: {
          en: 'Wrathful Advance moves the storm of daggers to the teleportation location and increases its duration by 6s.',
          'pt-BR': 'Wrathful Advance move a tempestade de adagas para o local da teletransportação e aumenta sua duração em 6s.',
        },
      },
    ],
  },
  lavos: {
    0: [
      {
        name: 'Valence Formation',
        image: 'assets/augments/lavos/valenceformation.png',
        description: {
          en: 'Casting an Ability imbued with extra Elemental Damage applies that Element as a 200% bonus to your weapons with guaranteed Status for 20s.',
          'pt-BR': 'Conjurar uma Habilidade imbuída com Dano Elemental extra aplica esse Elemento como um bônus de 200% às suas armas com Status garantido por 20s.',
        },
      },
    ],
    1: [
      {
        name: 'Swift Bite',
        image: 'assets/augments/lavos/swiftbite.png',
        description: {
          en: 'Reduce Ability Cooldowns by 4s when at least 4 enemies are hit. Ophidian Bite is granted 30% additional Ability Range.',
          'pt-BR': 'Reduz os Tempos de Recarga das Habilidades em 4s quando pelo menos 4 inimigos são atingidos. Ophidian Bite ganha 30% de Alcance de Habilidade adicional.',
        },
      },
    ],
    3: [
      {
        name: 'Lingering Transmutation',
        image: 'assets/augments/lavos/lingeringtransmutation.png',
        description: {
          en: 'Probe returns to cast position after reaching max range, and remains nearby for 15s. Recall Probe by recasting. Recast again to end.',
          'pt-BR': 'A Sonda retorna à posição de conjuração após alcançar o alcance máximo e permanece próxima por 15s. Reconvoque a Sonda ao reconjurar. Conjure novamente para encerrar.',
        },
      },
    ],
  },
  limbo: {
    1: [
      {
        name: 'Rift Haven',
        image: 'assets/augments/limbo/rifthaven.png',
        description: {
          en: 'Allies banished to the rift will have 25% of their Maximum Health restored every second.',
          'pt-BR': 'Aliados banidos para o rift terão 25% de sua Vida Máxima restaurada a cada segundo.',
        },
      },
    ],
    3: [
      {
        name: 'Rift Torrent',
        image: 'assets/augments/limbo/rifttorrent.png',
        description: {
          en: 'Limbo deals 30% Extra Damage for each enemy affected by Rift Surge while in the rift.',
          'pt-BR': 'Limbo causa 30% de Dano Extra para cada inimigo afetado por Rift Surge enquanto estiver no rift.',
        },
      },
    ],
    4: [
      {
        name: 'Cataclysmic Continuum',
        image: 'assets/augments/limbo/cataclysmiccontinuum.png',
        description: {
          en: 'Duration increased by 1s for each enemy killed.',
          'pt-BR': 'Duração aumentada em 1s para cada inimigo eliminado.',
        },
      },
    ],
  },
  loki: {
    1: [
      {
        name: 'Savior Decoy',
        image: 'assets/augments/loki/saviordecoy.png',
        description: {
          en: 'If Loki takes fatal damage, Decoy absorbs the damage and swaps locations. Also increases Casting Speed of Decoy by 50%',
          'pt-BR': 'Se Loki sofrer dano fatal, Decoy absorve o dano e troca de posição. Também aumenta a Velocidade de Conjuração de Decoy em 50%.',
        },
      },
      {
        name: 'Damage Decoy',
        image: 'assets/augments/loki/damagedecoy.png',
        description: {
          en: 'Decoy can be cast on enemies. Enemies who attack that decoy receive 5 random Status Effects, and the reflected damage is increased by 350%.',
          'pt-BR': 'Decoy pode ser conjurado em inimigos. Inimigos que atacam essa isca recebem 5 Efeitos de Status aleatórios, e o dano refletido é aumentado em 350%.',
        },
      },
    ],
    2: [
      {
        name: 'Hushed Invisibility',
        image: 'assets/augments/loki/hushedinvisibility.png',
        description: {
          en: 'Weapon noise is reduced by 100% while invisible.',
          'pt-BR': 'O ruído da arma é reduzido em 100% enquanto invisível.',
        },
      },
    ],
    3: [
      {
        name: 'Safeguard Switch',
        image: 'assets/augments/loki/safeguardswitch.png',
        description: {
          en: 'Switch with an enemy for 3s invulnerability. Switch with an ally to give ally 6s invulnerability. Switch also removes negative status effects on Loki and allies.',
          'pt-BR': 'Trocar com um inimigo concede 3s de invulnerabilidade. Trocar com um aliado concede 6s de invulnerabilidade ao aliado. A troca também remove efeitos de status negativos de Loki e dos aliados.',
        },
      },
    ],
    4: [
      {
        name: 'Irradiating Disarm',
        image: 'assets/augments/loki/irradiatingdisarm.png',
        description: {
          en: 'Enemies will be affected by Radiation Status for 9s',
          'pt-BR': 'Inimigos serão afetados pelo Status de Radiação por 9s.',
        },
      },
    ],
  },
  mag: {
    1: [
      {
        name: 'Greedy Pull',
        image: 'assets/augments/mag/greedypull.png',
        description: {
          en: 'Adds 100% chance to pull pickups towards Mag.',
          'pt-BR': 'Adiciona 100% de chance de puxar itens em direção a Mag.',
        },
      },
    ],
    2: [
      {
        name: 'Magnetized Discharge',
        image: 'assets/augments/mag/magnetizeddischarge.png',
        description: {
          en: 'Recast on the target to detonate. Enemies hit have a 50% chance to be disarmed. Passive: +45% Magnetize Range.',
          'pt-BR': 'Reconjure no alvo para detonar. Inimigos atingidos têm 50% de chance de serem desarmados. Passiva: +45% de Alcance de Magnetize.',
        },
      },
    ],
    3: [
      {
        name: 'Counter Pulse',
        image: 'assets/augments/mag/counterpulse.png',
        description: {
          en: 'Enemy weapons are jammed and robotics are disabled for 4s when hit by Polarize.',
          'pt-BR': 'Armas inimigas são travadas e robôs são desativados por 4s quando atingidos por Polarize.',
        },
      },
    ],
    4: [
      {
        name: 'Fracturing Crush',
        image: 'assets/augments/mag/fracturingcrush.png',
        description: {
          en: 'Crush gains +50% casting speed. The armor of surviving enemies decreases by 75% and they are unable to move for 7s.',
          'pt-BR': 'Crush ganha +50% de velocidade de conjuração. A armadura dos inimigos sobreviventes diminui em 75% e eles ficam incapazes de se mover por 7s.',
        },
      },
    ],
  },
  mesa: {
    1: [
      {
        name: 'Ballistic Bullseye',
        image: 'assets/augments/mesa/ballisticbullseye.png',
        description: {
          en: 'The shot gains a +50% Final Critical Chance bonus, based on the amount charged.',
          'pt-BR': 'O tiro ganha um bônus de +50% de Chance Crítica Final, com base na quantidade carregada.',
        },
      },
    ],
    2: [
      {
        name: 'Muzzle Flash',
        image: 'assets/augments/mesa/muzzleflash.png',
        description: {
          en: 'After 6 kill assists by a player with Shooting Gallery, Mesa\'s next shot will blind enemies within 12m for 6s.',
          'pt-BR': 'Após 6 assistências de eliminação por um jogador com Shooting Gallery, o próximo tiro de Mesa cegará inimigos em 12m por 6s.',
        },
      },
    ],
    3: [
      {
        name: 'Staggering Shield',
        image: 'assets/augments/mesa/staggeringshield.png',
        description: {
          en: 'Reflected bullets have a chance to stagger enemies. The base 50% chance increases with power strength.',
          'pt-BR': 'Balas refletidas têm chance de cambalear inimigos. A chance base de 50% aumenta com a Força de Habilidade.',
        },
      },
    ],
    4: [
      {
        name: 'Mesa\'s Waltz',
        image: 'assets/augments/mesa/mesaswaltz.png',
        description: {
          en: 'Mesa can move at 50% Speed while using Peacemaker.',
          'pt-BR': 'Mesa pode se mover a 50% de Velocidade enquanto usa Peacemaker.',
        },
      },
    ],
  },
  mirage: {
    1: [
      {
        name: 'Hall of Malevolence',
        image: 'assets/augments/mirage/hallofmalevolence.png',
        description: {
          en: 'The damage of your doppelgangers is increased by 5% every time you kill an enemy.',
          'pt-BR': 'O dano de seus clones é aumentado em 5% cada vez que você elimina um inimigo.',
        },
      },
    ],
    2: [
      {
        name: 'Explosive Legerdemain',
        image: 'assets/augments/mirage/explosivelegerdemain.png',
        description: {
          en: 'Ammo and Orbs pickups are turned into proximity mines that deal 1000 Damage with a 100% Status Chance.',
          'pt-BR': 'Itens de Munição e Orbes são transformados em minas de proximidade que causam 1000 de Dano com 100% de Chance de Status.',
        },
      },
    ],
    3: [
      {
        name: 'Total Eclipse',
        image: 'assets/augments/mirage/totaleclipse.png',
        description: {
          en: 'While active, allies within 15m benefit from Eclipse.',
          'pt-BR': 'Enquanto ativa, aliados em até 15m se beneficiam de Eclipse.',
        },
      },
    ],
  },
  nekros: {
    1: [
      {
        name: 'Soul Survivor',
        image: 'assets/augments/nekros/soulsurvivor.png',
        description: {
          en: 'Use on a downed ally to revive them with 30% Health.',
          'pt-BR': 'Use em um aliado caído para reanimá-lo com 30% de Vida.',
        },
      },
    ],
    2: [
      {
        name: 'Creeping Terrify',
        image: 'assets/augments/nekros/creepingterrify.png',
        description: {
          en: 'Affected enemies have 60% reduced Movement Speed.',
          'pt-BR': 'Inimigos afetados têm a Velocidade de Movimento reduzida em 60%.',
        },
      },
    ],
    3: [
      {
        name: 'Despoil',
        image: 'assets/augments/nekros/despoil.png',
        description: {
          en: 'No longer consumes Energy, but consumes 10 Health per corpse instead.',
          'pt-BR': 'Não consome mais Energia, mas consome 10 de Vida por cadáver.',
        },
      },
    ],
    4: [
      {
        name: 'Shield of Shadows',
        image: 'assets/augments/nekros/shieldofshadows.png',
        description: {
          en: 'Each Shadow within 50m take 6% of the Damage done to Nekros in his stead.',
          'pt-BR': 'Cada Sombra em até 50m absorve 6% do Dano causado a Nekros em seu lugar.',
        },
      },
    ],
  },
  nezha: {
    0: [
      {
        name: 'Controlled Slide',
        image: 'assets/augments/nezha/controlledslide.png',
        description: {
          en: 'Disable Nezha\'s passive ability. Increase Ability Strength by 15%.',
          'pt-BR': 'Desativa a habilidade passiva de Nezha. Aumenta a Força de Habilidade em 15%.',
        },
      },
    ],
    1: [
      {
        name: 'Pyroclastic Flow',
        image: 'assets/augments/nezha/pyroclasticflow.png',
        description: {
          en: 'Accumulate 250% of the damage Fire Walker deals, unleashing it in a trail of fire that lasts 10s.',
          'pt-BR': 'Acumula 250% do dano causado por Fire Walker, liberando-o em um rastro de fogo que dura 10s.',
        },
      },
    ],
    2: [
      {
        name: 'Reaping Chakram',
        image: 'assets/augments/nezha/reapingchakram.png',
        description: {
          en: 'Each enemy hit increases the ring\'s Damage by 2x and the chance for enemies to drop Health Orbs on death by +0.25x.',
          'pt-BR': 'Cada inimigo atingido aumenta o Dano do anel em 2x e a chance dos inimigos derrubarem Orbes de Vida ao morrer em +0,25x.',
        },
      },
    ],
    3: [
      {
        name: 'Safeguard',
        image: 'assets/augments/nezha/safeguard.png',
        description: {
          en: 'Can now be cast on allies with 50% effectiveness.',
          'pt-BR': 'Agora pode ser conjurado em aliados com 50% de eficácia.',
        },
      },
    ],
    4: [
      {
        name: 'Divine Retribution',
        image: 'assets/augments/nezha/divineretribution.png',
        description: {
          en: 'Status Effects spread to all speared enemies. Spear explosions scale by 1.5x of remaining Slash, Toxin and Heat Status Effects. Base Radius is 14m.',
          'pt-BR': 'Efeitos de Status se espalham para todos os inimigos empalados. As explosões das lanças escalam em 1,5x dos Efeitos de Status restantes de Corte, Toxina e Fogo. Raio base é 14m.',
        },
      },
    ],
  },
  nidus: {
    0: [
      {
        name: 'Abundant Mutation',
        image: 'assets/augments/nidus/abundantmutation.png',
        description: {
          en: 'Nidus gains an additional 200 max stacks of Mutation. Undying has a 30s cooldown.',
          'pt-BR': 'Nidus ganha 200 cargas máximas adicionais de Mutação. Undying tem um tempo de recarga de 30s.',
        },
      },
    ],
    1: [
      {
        name: 'Teeming Virulence',
        image: 'assets/augments/nidus/teemingvirulence.png',
        description: {
          en: 'Hitting 4 enemies with Virulence grants 120% Primary Weapon Critical Chance for 15s.',
          'pt-BR': 'Atingir 4 inimigos com Virulence concede 120% de Chance Crítica de Arma Primária por 15s.',
        },
      },
    ],
    2: [
      {
        name: 'Larva Burst',
        image: 'assets/augments/nidus/larvaburst.png',
        description: {
          en: 'Reactivate Larva to detonate and deal 600 Toxin Damage in a 8m radius. This damage stacks for every enemy grabbed by the Larva.',
          'pt-BR': 'Reative Larva para detonar e causar 600 de Dano de Toxina em um raio de 8m. Esse dano acumula para cada inimigo agarrado por Larva.',
        },
      },
    ],
    3: [
      {
        name: 'Parasitic Vitality',
        image: 'assets/augments/nidus/parasiticvitality.png',
        description: {
          en: 'Nidus and any ally he\'s bound to gain 4% Max Health per Mutation during Parasitic Link.',
          'pt-BR': 'Nidus e qualquer aliado a quem ele esteja vinculado ganham 4% de Vida Máxima por Mutação durante Parasitic Link.',
        },
      },
    ],
    4: [
      {
        name: 'Insatiable',
        image: 'assets/augments/nidus/insatiable.png',
        description: {
          en: 'Nidus has a chance for additional Mutation stacks while in the infestation. The base 60% chance increases with power strength, and multiple stacks are possible above 100%.',
          'pt-BR': 'Nidus tem chance de ganhar cargas adicionais de Mutação enquanto estiver na infestação. A chance base de 60% aumenta com a Força de Habilidade, e múltiplas cargas são possíveis acima de 100%.',
        },
      },
    ],
  },
  nova: {
    1: [
      {
        name: 'Neutron Star',
        image: 'assets/augments/nova/neutronstar.png',
        description: {
          en: 'Particles deal 240 Heat Damage with guaranteed Status effect in 8m. On recast, remaining particles seek out enemies with doubled search radius.',
          'pt-BR': 'As partículas causam 240 de Dano de Fogo com efeito de Status garantido em 8m. Ao reconjurar, as partículas restantes perseguem inimigos com o raio de busca dobrado.',
        },
      },
    ],
    2: [
      {
        name: 'Antimatter Absorb',
        image: 'assets/augments/nova/antimatterabsorb.png',
        description: {
          en: 'Absorbs enemy bullets within 5m, increasing the power of the explosion from Nova\'s particle of antimatter.',
          'pt-BR': 'Absorve balas inimigas em até 5m, aumentando o poder da explosão da partícula de antimatéria de Nova.',
        },
      },
    ],
    3: [
      {
        name: 'Escape Velocity',
        image: 'assets/augments/nova/escapevelocity.png',
        description: {
          en: 'Allies that travel through wormhole gain a 50% Speed bonus for 7s.',
          'pt-BR': 'Aliados que viajam pelo wormhole ganham um bônus de 50% de Velocidade por 7s.',
        },
      },
    ],
    4: [
      {
        name: 'Molecular Fission',
        image: 'assets/augments/nova/molecularfission.png',
        description: {
          en: 'Enemies hit by Null Stars are primed. When killed, primed enemies will restore a Null Star charge and have a 100% chance of restoring two.',
          'pt-BR': 'Inimigos atingidos por Null Stars são primados. Quando eliminados, inimigos primados restauram uma carga de Null Star e têm 100% de chance de restaurar duas.',
        },
      },
    ],
  },
  nyx: {
    1: [
      {
        name: 'Mind Freak',
        image: 'assets/augments/nyx/mindfreak.png',
        description: {
          en: 'Controlled target inflicts +1000% Damage and gains +25% Movement and Attack Speed.',
          'pt-BR': 'O alvo controlado causa +1000% de Dano e ganha +25% de Velocidade de Movimento e Ataque.',
        },
      },
    ],
    2: [
      {
        name: 'Pacifying Bolts',
        image: 'assets/augments/nyx/pacifyingbolts.png',
        description: {
          en: 'Throw an additional 3 force bolts with guaranteed Radiation Status Effect. Enemies struck are confused for 10s.',
          'pt-BR': 'Lança 3 dardos de força adicionais com Efeito de Status de Radiação garantido. Inimigos atingidos ficam confusos por 10s.',
        },
      },
    ],
    3: [
      {
        name: 'Chaos Sphere',
        image: 'assets/augments/nyx/chaossphere.png',
        description: {
          en: 'Enemies entering the Effect Range will be inflicted with Chaos. Effect Range lasts for 50% of the ability duration and shrinks over time.',
          'pt-BR': 'Inimigos que entrarem no Alcance de Efeito serão afetados por Chaos. O Alcance de Efeito dura 50% da duração da habilidade e diminui com o tempo.',
        },
      },
    ],
    4: [
      {
        name: 'Assimilate',
        image: 'assets/augments/nyx/assimilate.png',
        description: {
          en: 'Nyx can use weapons during Absorb and its duration is infinite, but it consumes 6.5 Energy/s and its area of effect is halved.',
          'pt-BR': 'Nyx pode usar armas durante Absorb e sua duração é infinita, mas consome 6,5 de Energia/s e sua área de efeito é reduzida pela metade.',
        },
      },
    ],
  },
  oberon: {
    1: [
      {
        name: 'Smite Infusion',
        image: 'assets/augments/oberon/smiteinfusion.png',
        description: {
          en: 'Hold to cast will grant all allies within 15m an additional 100% Radiation Damage to their attacks for 40s.',
          'pt-BR': 'Segure para conjurar e conceder a todos os aliados em 15m um adicional de 100% de Dano de Radiação aos seus ataques por 40s.',
        },
      },
    ],
    2: [
      {
        name: 'Hallowed Eruption',
        image: 'assets/augments/oberon/hallowederuption.png',
        description: {
          en: 'Reactivate to deal all Remaining Damage and Radiation Status. Passive: +200% Hallowed Ground Duration.',
          'pt-BR': 'Reative para causar todo o Dano Restante e Status de Radiação. Passiva: +200% de Duração de Hallowed Ground.',
        },
      },
    ],
    3: [
      {
        name: 'Phoenix Renewal',
        image: 'assets/augments/oberon/phoenixrenewal.png',
        description: {
          en: 'Taking fatal damage while under the effects of Renewal will instead Heal you or allies to 50% Health. This effect triggers only once for each ally every 60s.',
          'pt-BR': 'Sofrer dano fatal sob os efeitos de Renewal o curará (ou curará aliados) para 50% de Vida. Este efeito ativa apenas uma vez para cada aliado a cada 60s.',
        },
      },
    ],
    4: [
      {
        name: 'Hallowed Reckoning',
        image: 'assets/augments/oberon/hallowedreckoning.png',
        description: {
          en: 'Reckoning gains +40% range. A 3m radius around each affected enemy grants bonus armor to allies and deals 300 damage per second to enemies.',
          'pt-BR': 'Reckoning ganha +40% de alcance. Uma área de 3m ao redor de cada inimigo afetado concede armadura bônus aos aliados e causa 300 de dano por segundo aos inimigos.',
        },
      },
    ],
  },
  octavia: {
    1: [
      {
        name: 'Partitioned Mallet',
        image: 'assets/augments/octavia/partitionedmallet.png',
        description: {
          en: 'Create an additional Mallet with 20% reduced range.',
          'pt-BR': 'Crie um Mallet adicional com 20% de alcance reduzido.',
        },
      },
    ],
    2: [
      {
        name: 'Conductor',
        image: 'assets/augments/octavia/conductor.png',
        description: {
          en: 'Reactivate the ability to command Resonator to move to your aim point at 150% Speed.',
          'pt-BR': 'Reative a habilidade para comandar Resonator a se mover até seu ponto de mira a 150% de Velocidade.',
        },
      },
    ],
  },
  protea: {
    2: [
      {
        name: 'Temporal Artillery',
        image: 'assets/augments/protea/temporalartillery.png',
        description: {
          en: 'When Temporal Anchor is activated, one existing Artillery unit will attach to Protea, halting its duration countdown. Max combo count is 20x.',
          'pt-BR': 'Quando Temporal Anchor é ativada, uma unidade de Artillery existente se anexa à Protea, pausando a contagem de duração dela. Contagem máxima de combo é 20x.',
        },
      },
    ],
    3: [
      {
        name: 'Repair Dispensary',
        image: 'assets/augments/protea/repairdispensary.png',
        description: {
          en: 'Dispensary also creates pick ups that heal companions for 20% of their maximum health and reduce their incapacitation timer by 12 sec.',
          'pt-BR': 'Dispensary também cria itens que curam companheiros em 20% de sua vida máxima e reduzem o tempo de incapacitação deles em 12s.',
        },
      },
    ],
    4: [
      {
        name: 'Temporal Erosion',
        image: 'assets/augments/protea/temporalerosion.png',
        description: {
          en: 'While Temporal Anchor is active, each strike of Grenade Fan and Blaze Artillery strips 10% Armor from enemies.',
          'pt-BR': 'Enquanto Temporal Anchor está ativo, cada acerto de Grenade Fan e Blaze Artillery remove 10% da Armadura dos inimigos.',
        },
      },
    ],
  },
  qorvex: {
    2: [
      {
        name: 'Wrecking Wall',
        image: 'assets/augments/qorvex/wreckingwall.png',
        description: {
          en: 'Strip 50% of armor and shields from struck enemies. Hitting 5 or more enemies will restart the duration of any Chyrinka Pillars and empower them.',
          'pt-BR': 'Remove 50% da armadura e dos escudos dos inimigos atingidos. Atingir 5 ou mais inimigos reinicia a duração de quaisquer Chyrinka Pillars e os fortalece.',
        },
      },
    ],
    4: [
      {
        name: 'Fused Crucible',
        image: 'assets/augments/qorvex/fusedcrucible.png',
        description: {
          en: 'Becomes a channeled ability consuming 20 Energy/s that ramps up. While active Chyrinka Pillars trigger chain reactions and their duration is frozen. Mobility is greatly reduced.',
          'pt-BR': 'Torna-se uma habilidade canalizada que consome 20 de Energia/s e aumenta progressivamente. Enquanto ativa, Chyrinka Pillars disparam reações em cadeia e sua duração é congelada. A mobilidade é bastante reduzida.',
        },
      },
    ],
  },
  revenant: {
    1: [
      {
        name: 'Thrall Pact',
        image: 'assets/augments/revenant/thrallpact.png',
        description: {
          en: 'Gain +25% Primary Weapon Damage for each active Thrall.',
          'pt-BR': 'Ganhe +25% de Dano de Arma Primária para cada Thrall ativo.',
        },
      },
    ],
    2: [
      {
        name: 'Mesmer Shield',
        image: 'assets/augments/revenant/mesmershield.png',
        description: {
          en: 'Revenant receives +50% Mesmer Skin Strength and allies within Affinity Range are granted a maximum of 5 charges.',
          'pt-BR': 'Revenant recebe +50% de Força de Mesmer Skin e aliados dentro do Alcance de Afinidade ganham um máximo de 5 cargas.',
        },
      },
    ],
    3: [
      {
        name: 'Blinding Reave',
        image: 'assets/augments/revenant/blindingreave.png',
        description: {
          en: 'Reave gains +40% range and enemies are blinded by its fog for 10s.',
          'pt-BR': 'Reave ganha +40% de alcance e inimigos são cegados por sua névoa por 10s.',
        },
      },
    ],
  },
  rhino: {
    1: [
      {
        name: 'Ironclad Charge',
        image: 'assets/augments/rhino/ironcladcharge.png',
        description: {
          en: 'Each enemy hit increases Rhino\'s Armor Rating by 50% for 10s.',
          'pt-BR': 'Cada inimigo atingido aumenta a Armadura do Rhino em 50% por 10s.',
        },
      },
    ],
    2: [
      {
        name: 'Iron Shrapnel',
        image: 'assets/augments/rhino/ironshrapnel.png',
        description: {
          en: 'Recasting Iron Skin will cause it to detonate, dealing 100% of its remaining Health as Puncture Damage, and knocking down enemies.',
          'pt-BR': 'Reconjurar Iron Skin faz com que ela detone, causando 100% de sua Vida restante como Dano de Perfuração e derrubando inimigos.',
        },
      },
    ],
    3: [
      {
        name: 'Piercing Roar',
        image: 'assets/augments/rhino/piercingroar.png',
        description: {
          en: 'Roar gains +40% range. Enemies within 25m are knocked down and suffer 5 stacks of Puncture Status.',
          'pt-BR': 'Roar ganha +40% de alcance. Inimigos em até 25m são derrubados e sofrem 5 cargas de Status de Perfuração.',
        },
      },
    ],
    4: [
      {
        name: 'Reinforcing Stomp',
        image: 'assets/augments/rhino/reinforcingstomp.png',
        description: {
          en: 'Iron Skin Health is replenished by 4% for each enemy affected.',
          'pt-BR': 'A Vida de Iron Skin é restaurada em 4% para cada inimigo afetado.',
        },
      },
    ],
  },
  saryn: {
    1: [
      {
        name: 'Revealing Spores',
        image: 'assets/augments/saryn/revealingspores.png',
        description: {
          en: 'Infected enemies within 40m appear on the minimap. +40 Enemy Radar.',
          'pt-BR': 'Inimigos infectados em até 40m aparecem no minimapa. +40 de Radar de Inimigos.',
        },
      },
      {
        name: 'Venom Dose',
        image: 'assets/augments/saryn/venomdose.png',
        description: {
          en: 'Hold to cast will grant all allies within 15m an additional 100% Corrosive Damage to their attacks for 40s.',
          'pt-BR': 'Segure para conjurar e conceder a todos os aliados em 15m um adicional de 100% de Dano Corrosivo aos seus ataques por 40s.',
        },
      },
    ],
    2: [
      {
        name: 'Regenerative Molt',
        image: 'assets/augments/saryn/regenerativemolt.png',
        description: {
          en: 'After casting Molt, Saryn regenerates 50 Health/s for 10s.',
          'pt-BR': 'Após conjurar Molt, Saryn regenera 50 de Vida/s por 10s.',
        },
      },
    ],
    3: [
      {
        name: 'Contagion Cloud',
        image: 'assets/augments/saryn/contagioncloud.png',
        description: {
          en: 'Create 5m toxic clouds, dealing 300 Toxin Damage/s for 12s with every kill. Damage is twice as strong for Melee kills.',
          'pt-BR': 'Cria nuvens tóxicas de 5m, causando 300 de Dano de Toxina/s por 12s a cada eliminação. O dano é duas vezes mais forte para eliminações Corpo a Corpo.',
        },
      },
    ],
  },
  sevagoth: {
    1: [
      {
        name: 'Shadow Haze',
        image: 'assets/augments/sevagoth/shadowhaze.png',
        description: {
          en: 'Increase Critical Chance by 50% on enemies inflicted with Death Harvest. A new Shadow emerges from those enemies when they perish. Limit of 3 Shadows.',
          'pt-BR': 'Aumenta a Chance Crítica em 50% em inimigos afetados por Death Harvest. Uma nova Shadow emerge desses inimigos quando eles morrem. Limite de 3 Shadows.',
        },
      },
    ],
    2: [
      {
        name: 'Dark Propagation',
        image: 'assets/augments/sevagoth/darkpropagation.png',
        description: {
          en: 'Enemies killed while inflicted with Sow spread its effect in a 15m radius. Shadow\'s Death Harvest also inflicts Sow.',
          'pt-BR': 'Inimigos mortos enquanto afetados por Sow espalham seu efeito num raio de 15m. O Death Harvest da Shadow também aplica Sow.',
        },
      },
    ],
  },
  styanax: {
    1: [
      {
        name: 'Axios Javelineers',
        image: 'assets/augments/styanax/axiosjavelineers.png',
        description: {
          en: 'A pair of Styanax Specters spawn to throw javelins, creating vortexes on impact. Impale an enemy to increase vortex duration by 5s.',
          'pt-BR': 'Um par de Specters do Styanax surge para arremessar dardos, criando vórtices ao impacto. Empale um inimigo para aumentar a duração do vórtice em 5s.',
        },
      },
    ],
    2: [
      {
        name: 'Tharros Lethality',
        image: 'assets/augments/styanax/tharroslethality.png',
        description: {
          en: 'Increases Critical Damage by 100% on enemies you hit. Critical Damage bonus is doubled for Spearguns.',
          'pt-BR': 'Aumenta o Dano Crítico em 100% nos inimigos atingidos. O bônus de Dano Crítico é dobrado para Spearguns.',
        },
      },
    ],
    4: [
      {
        name: 'Intrepid Stand',
        image: 'assets/augments/styanax/intrepidstand.png',
        description: {
          en: 'Each javelin that damages an enemy grants 60 Overguard to Styanax and 30 Overguard to his allies within Affinity Range.',
          'pt-BR': 'Cada dardo que causa dano a um inimigo concede 60 de Overguard ao Styanax e 30 de Overguard aos seus aliados dentro do Alcance de Afinidade.',
        },
      },
    ],
  },
  titania: {
    1: [
      {
        name: 'Spellbound Harvest',
        image: 'assets/augments/titania/spellboundharvest.png',
        description: {
          en: 'Hitting at least 4 enemies with Spellbind grants Titania 50. The next cast has +40% Ability Range.',
          'pt-BR': 'Atingir pelo menos 4 inimigos com Spellbind concede 50 à Titania. A próxima conjuração tem +40% de Alcance de Habilidade.',
        },
      },
    ],
    3: [
      {
        name: 'Beguiling Lantern',
        image: 'assets/augments/titania/beguilinglantern.png',
        description: {
          en: 'Attracted enemies take 100% more Weapon Damage.',
          'pt-BR': 'Inimigos atraídos recebem 100% a mais de Dano de Arma.',
        },
      },
    ],
    4: [
      {
        name: 'Razorwing Blitz',
        image: 'assets/augments/titania/razorwingblitz.png',
        description: {
          en: 'Flight Speed increased by 25% and Fire Rate increased by 25% for 8s when using abilities. Stacks up to 4x.',
          'pt-BR': 'Velocidade de Voo aumentada em 25% e Cadência de Tiro aumentada em 25% por 8s ao usar habilidades. Acumula até 4x.',
        },
      },
      {
        name: 'Ironclad Flight',
        image: 'assets/augments/titania/ironcladflight.png',
        description: {
          en: 'Disable vacuum in Razorwing. Reduced Damage by 40% while Airborne.',
          'pt-BR': 'Desativa o vácuo em Razorwing. Dano reduzido em 40% enquanto no ar.',
        },
      },
    ],
  },
  trinity: {
    1: [
      {
        name: 'Pool of Life',
        image: 'assets/augments/trinity/pooloflife.png',
        description: {
          en: 'On death, marked enemies will drop 4 Health Orbs with a 100% chance of dropping an Energy Orb.',
          'pt-BR': 'Ao morrer, inimigos marcados soltarão 4 Orbes de Vida com 100% de chance de soltar um Orbe de Energia.',
        },
      },
    ],
    2: [
      {
        name: 'Vampire Leech',
        image: 'assets/augments/trinity/vampireleech.png',
        description: {
          en: 'Excess Energy replenishes Shields by 225%.',
          'pt-BR': 'Energia excedente restaura os Escudos em 225%.',
        },
      },
    ],
    3: [
      {
        name: 'Abating Link',
        image: 'assets/augments/trinity/abatinglink.png',
        description: {
          en: 'Reduces Armor Rating by 60% on enemies targeted by Link.',
          'pt-BR': 'Reduz a Armadura em 60% nos inimigos alvos de Link.',
        },
      },
    ],
    4: [
      {
        name: 'Champion\'s Blessing',
        image: 'assets/augments/trinity/championsblessing.png',
        description: {
          en: 'Gain Primary and Secondary Critical Chance for 30s for each percent you heal on allies up to 350%.',
          'pt-BR': 'Ganhe Chance Crítica Primária e Secundária por 30s para cada porcento curado em aliados, até 350%.',
        },
      },
    ],
  },
  valkyr: {
    1: [
      {
        name: 'Swing Line',
        image: 'assets/augments/valkyr/swingline.png',
        description: {
          en: 'Rip Lines has no Energy cost while Airborne. +20% Parkour Velocity',
          'pt-BR': 'Rip Line não tem custo de Energia enquanto no ar. +20% de Velocidade de Parkour',
        },
      },
    ],
    2: [
      {
        name: 'Eternal War',
        image: 'assets/augments/valkyr/eternalwar.png',
        description: {
          en: 'While active, Warcry\'s duration is increased by 2s for each Melee Kill.',
          'pt-BR': 'Enquanto ativa, a duração de Warcry aumenta em 2s para cada eliminação Corpo a Corpo.',
        },
      },
    ],
    3: [
      {
        name: 'Prolonged Paralysis',
        image: 'assets/augments/valkyr/prolongedparalysis.png',
        description: {
          en: 'Affected enemies are pulled towards Valkyr and the stun duration is increased by 5s.',
          'pt-BR': 'Inimigos afetados são puxados em direção à Valkyr e a duração do atordoamento é aumentada em 5s.',
        },
      },
    ],
    4: [
      {
        name: 'Enraged',
        image: 'assets/augments/valkyr/enraged.png',
        description: {
          en: 'Damage increased by 350%, Critical Chance increased by 350%. Hysteria lasts for 15s, and receives a matching cooldown.',
          'pt-BR': 'Dano aumentado em 350%, Chance Crítica aumentada em 350%. Hysteria dura 15s e recebe um tempo de recarga equivalente.',
        },
      },
      {
        name: 'Hysterical Assault',
        image: 'assets/augments/valkyr/hystericalassault.png',
        description: {
          en: 'Attack with Valkyr\'s Talons to leap onto targeted enemies up to 50m away. Gain +50% Parkour Velocity and +50% Sprint Speed for 5s.',
          'pt-BR': 'Ataque com as Garras da Valkyr para saltar sobre inimigos alvos a até 50m de distância. Ganhe +50% de Velocidade de Parkour e +50% de Velocidade de Corrida por 5s.',
        },
      },
    ],
  },
  vauban: {
    1: [
      {
        name: 'Tesla Bank',
        image: 'assets/augments/vauban/teslabank.png',
        description: {
          en: 'Enemy health when a Nervos is first attached is converted into a 8m burst of Electricity when killed.',
          'pt-BR': 'A vida do inimigo no momento em que um Nervos se prende a ele é convertida em uma explosão de Eletricidade de 8m quando ele é morto.',
        },
      },
    ],
    3: [
      {
        name: 'Photon Repeater',
        image: 'assets/augments/vauban/photonrepeater.png',
        description: {
          en: 'If Photon Strike hits at least 5 enemies, the next cast will cost no Energy and fire two additional strikes.',
          'pt-BR': 'Se Photon Strike atingir ao menos 5 inimigos, o próximo lançamento não custará Energia e disparará dois ataques adicionais.',
        },
      },
    ],
    4: [
      {
        name: 'Enduring Bastille',
        image: 'assets/augments/vauban/enduringbastille.png',
        description: {
          en: 'Killing an enemy in Bastille extends the duration by 2s. Vortex\'s duration is increased by 70% of its Maximum Duration for each additional Vortex thrown into it.',
          'pt-BR': 'Matar um inimigo dentro de Bastille aumenta a duração em 2s. A duração de Vortex é aumentada em 70% da sua Duração Máxima para cada Vortex adicional lançado dentro dele.',
        },
      },
    ],
  },
  volt: {
    1: [
      {
        name: 'Shock Trooper',
        image: 'assets/augments/volt/shocktrooper.png',
        description: {
          en: 'Hold to cast will grant all allies within 15m an additional 100% Electricity Damage to their attacks for 40s.',
          'pt-BR': 'Segurar para lançar concede a todos os aliados em até 15m um adicional de 100% de Dano de Eletricidade aos seus ataques por 40s.',
        },
      },
    ],
    2: [
      {
        name: 'Shocking Speed',
        image: 'assets/augments/volt/shockingspeed.png',
        description: {
          en: 'While moving under the effects of Speed, enemies within 3m will take 300 Electricity Damage with guaranteed Status effect.',
          'pt-BR': 'Enquanto se move sob os efeitos de Speed, inimigos em até 3m recebem 300 de Dano de Eletricidade com efeito de Status garantido.',
        },
      },
    ],
    3: [
      {
        name: 'Transistor Shield',
        image: 'assets/augments/volt/transistorshield.png',
        description: {
          en: 'Allies can pick up Electric Shield. 300% of damage absorbed will be added to Volt\'s Static Discharge.',
          'pt-BR': 'Aliados podem pegar o Electric Shield. 300% do dano absorvido será adicionado ao Static Discharge de Volt.',
        },
      },
    ],
    4: [
      {
        name: 'Capacitance',
        image: 'assets/augments/volt/capacitance.png',
        description: {
          en: 'Converts 3% of Damage dealt into Shields split between Volt and Squadmates.',
          'pt-BR': 'Converte 3% do Dano causado em Escudos divididos entre Volt e seus companheiros de esquadrão.',
        },
      },
    ],
  },
  voruna: {
    1: [
      {
        name: 'Prey of Dynar',
        image: 'assets/augments/voruna/preyofdynar.png',
        description: {
          en: 'Increase an enemy\'s Damage Vulnerability by 50%. Using Fang of Raksh on that enemy increases its spread radius by 150%.',
          'pt-BR': 'Aumenta a Vulnerabilidade a Dano de um inimigo em 50%. Usar Fang of Raksh nesse inimigo aumenta o raio de propagação em 150%.',
        },
      },
    ],
    4: [
      {
        name: 'Ulfrun\'s Endurance',
        image: 'assets/augments/voruna/ulfrunsendurance.png',
        description: {
          en: 'During Ulfrun\'s attack, enemies that die from Slash Status within 20m restore Voruna\'s charges.',
          'pt-BR': 'Durante o ataque de Ulfrun, inimigos que morrem por Status de Corte em até 20m restauram as cargas de Voruna.',
        },
      },
    ],
  },
  wisp: {
    1: [
      {
        name: 'Fused Reservoir',
        image: 'assets/augments/wisp/fusedreservoir.png',
        description: {
          en: 'Adds a fourth reservoir that gives the effects of all three. Costs 200% more Energy.',
          'pt-BR': 'Adiciona um quarto reservatório que concede os efeitos dos três. Custa 200% mais Energia.',
        },
      },
    ],
    3: [
      {
        name: 'Critical Surge',
        image: 'assets/augments/wisp/criticalsurge.png',
        description: {
          en: 'Teleporting to a Reservoir costs 50% Energy and grants 10% Critical Chance to Primary Weapons per meter traveled for 9s. Maximum 250% Critical Chance.',
          'pt-BR': 'Teleportar para um Reservatório custa 50% de Energia e concede 10% de Chance de Crítico para Armas Primárias por metro percorrido durante 9s. Máximo de 250% de Chance de Crítico.',
        },
      },
    ],
    4: [
      {
        name: 'Cataclysmic Gate',
        image: 'assets/augments/wisp/cataclysmicgate.png',
        description: {
          en: 'Wisp and 2 spectral images cast a single blast of Sol Gate, leaving an area with 500 Heat Damage / Second with guaranteed Heat and Radiation Status Effects for 10s.',
          'pt-BR': 'Wisp e 2 imagens espectrais disparam uma única rajada de Sol Gate, deixando uma área com 500 de Dano de Calor por segundo com Efeitos de Status de Calor e Radiação garantidos por 10s.',
        },
      },
    ],
  },
  wukong: {
    1: [
      {
        name: 'Celestial Stomp',
        image: 'assets/augments/wukong/celestialstomp.png',
        description: {
          en: 'Hold to command the twin to perform a slam attack suspending enemies in the air within 20m for 25 Energy.',
          'pt-BR': 'Segure para ordenar que o gêmeo execute um ataque de impacto, suspendendo inimigos no ar em até 20m, por 25 de Energia.',
        },
      },
    ],
    2: [
      {
        name: 'Enveloping Cloud',
        image: 'assets/augments/wukong/envelopingcloud.png',
        description: {
          en: 'Allies within 4m of the cloud become invisible to enemies for 14s.',
          'pt-BR': 'Aliados em até 4m da nuvem se tornam invisíveis para os inimigos por 14s.',
        },
      },
    ],
    4: [
      {
        name: 'Primal Rage',
        image: 'assets/augments/wukong/primalrage.png',
        description: {
          en: 'Killing an enemy increases Critical Chance by 15%. The increase decays by 1%/s',
          'pt-BR': 'Matar um inimigo aumenta a Chance de Crítico em 15%. O bônus decai 1%/s.',
        },
      },
    ],
  },
  xaku: {
    2: [
      {
        name: 'Vampiric Grasp',
        image: 'assets/augments/xaku/vampiricgrasp.png',
        description: {
          en: 'When a stolen weapon deals damage to an enemy affected by The Lost: Gaze or The Vast Untime, Xaku heals by 25.',
          'pt-BR': 'Quando uma arma roubada causa dano a um inimigo afetado por The Lost: Gaze ou The Vast Untime, Xaku se cura em 25.',
        },
      },
    ],
    3: [
      {
        name: 'The Relentless Lost',
        image: 'assets/augments/xaku/therelentlesslost.png',
        description: {
          en: 'The Lost gains 35% Ability Strength and 15% Ability Efficiency when cast. The effect stacks up to 3x. Casting the same ability back-to-back resets the effect.',
          'pt-BR': 'The Lost ganha 35% de Força de Habilidade e 15% de Eficiência de Habilidade ao ser usada. O efeito acumula até 3x. Usar a mesma habilidade seguida reseta o efeito.',
        },
      },
    ],
    4: [
      {
        name: 'Untime Rift',
        image: 'assets/augments/xaku/untimerift.png',
        description: {
          en: 'Creates a Rift that connects to enemies suffering from Void Status Effect within 15m, doubling debuffs applied by The Vast Untime and maintaining Void Status.',
          'pt-BR': 'Cria uma Fenda que se conecta a inimigos sofrendo de Efeito de Status Void em até 15m, dobrando os debuffs aplicados por The Vast Untime e mantendo o Status Void.',
        },
      },
    ],
  },
  yareli: {
    1: [
      {
        name: 'Merulina Guardian',
        image: 'assets/augments/yareli/merulinaguardian.png',
        description: {
          en: 'Enemies eliminated during Sea Snares heal 20% of Merulina\'s health. Upon healing, gain +200% Reload Speed and Fire Rate on Secondary weapons for 20s.',
          'pt-BR': 'Inimigos eliminados durante Sea Snares curam 20% da vida de Merulina. Ao curar, ganhe +200% de Velocidade de Recarga e Cadência de Tiro em armas Secundárias por 20s.',
        },
      },
    ],
    2: [
      {
        name: 'Loyal Merulina',
        image: 'assets/augments/yareli/loyalmerulina.png',
        description: {
          en: 'Yareli no longer rides Merulina. Instead, Merulina follows her and casts Sea Snare on nearby enemies. 2s cooldown.',
          'pt-BR': 'Yareli não cavalga mais Merulina. Em vez disso, Merulina a acompanha e lança Sea Snare em inimigos próximos. Recarga de 2s.',
        },
      },
    ],
    3: [
      {
        name: 'Surging Blades',
        image: 'assets/augments/yareli/surgingblades.png',
        description: {
          en: 'Activate Aquablades when the ability is in use or cooldown to throw one blade. Blades gain 10% damage when any Aquablade hits an enemy. No cost to throw with Merulina.',
          'pt-BR': 'Ative Aquablades enquanto a habilidade está em uso ou em recarga para arremessar uma lâmina. As lâminas ganham 10% de dano quando qualquer Aquablade atinge um inimigo. Sem custo para arremessar quando estiver em Merulina.',
        },
      },
    ],
  },
  zephyr: {
    0: [
      {
        name: 'Anchored Glide',
        image: 'assets/augments/zephyr/anchoredglide.png',
        description: {
          en: 'Disable Zephyr\'s reduced airborne gravity. Increase Ability Strength by 15%.',
          'pt-BR': 'Desativa a gravidade reduzida no ar de Zephyr. Aumenta a Força de Habilidade em 15%.',
        },
      },
    ],
    1: [
      {
        name: 'Target Fixation',
        image: 'assets/augments/zephyr/targetfixation.png',
        description: {
          en: 'Casting Tail Wind resets Zephyr\'s bullet jump. Each enemy hit increases Tail Wind Damage by 100%. Damage resets upon being on the ground for 2s.',
          'pt-BR': 'Lançar Tail Wind reseta o bullet jump de Zephyr. Cada inimigo atingido aumenta o Dano de Tail Wind em 100%. O dano é resetado ao ficar no chão por 2s.',
        },
      },
    ],
    2: [
      {
        name: 'Airburst Rounds',
        image: 'assets/augments/zephyr/airburstrounds.png',
        description: {
          en: 'Each enemy hit by Airburst increases secondary damage by 40% for 14s.',
          'pt-BR': 'Cada inimigo atingido por Airburst aumenta o dano de armas secundárias em 40% por 14s.',
        },
      },
    ],
    3: [
      {
        name: 'Jet Stream',
        image: 'assets/augments/zephyr/jetstream.png',
        description: {
          en: 'Turbulence increases Movement Speed by 40% and Projectile Speed by 100% for Zephyr and her allies.',
          'pt-BR': 'Turbulence aumenta a Velocidade de Movimento em 40% e a Velocidade de Projétil em 100% para Zephyr e seus aliados.',
        },
      },
    ],
    4: [
      {
        name: 'Funnel Clouds',
        image: 'assets/augments/zephyr/funnelclouds.png',
        description: {
          en: 'Creates 8 additional tornadoes. All tornadoes are 50% their original size and won\'t pick up enemies.',
          'pt-BR': 'Cria 8 tornados adicionais. Todos os tornados têm 50% do tamanho original e não capturam inimigos.',
        },
      },
    ],
  },
};

function getAugments(slug, abilityIndex) {
  const wf = AUGMENTS[slug];
  if (!wf) return [];
  return wf[abilityIndex] || [];
}

function augmentCaption(au) {
  if (!au.description) return '';
  return au.description[state.locale] || au.description[DEFAULT_LOCALE] || '';
}

// ============== Status Effects ==============

const FACTIONS = {
  grineer:  { en: 'Grineer',     'pt-BR': 'Grineer' },
  corpus:   { en: 'Corpus',      'pt-BR': 'Corpus' },
  infested: { en: 'Infested',    'pt-BR': 'Infestados' },
  orokin:   { en: 'Orokin',      'pt-BR': 'Orokin' },
  sentient: { en: 'Sentient',    'pt-BR': 'Sentientes' },
  narmer:   { en: 'Narmer',      'pt-BR': 'Narmer' },
  zariman:  { en: 'Zariman',     'pt-BR': 'Zariman' },
  murmur:   { en: 'The Murmur',  'pt-BR': 'O Murmúrio' },
  anarchs:  { en: 'Anarchs',     'pt-BR': 'Anarcas' },
  scaldra:  { en: 'Scaldra',     'pt-BR': 'Scaldra' },
  techrot:  { en: 'Techrot',     'pt-BR': 'Techrot' },
};

const STATUS_EFFECTS = {
  // ---- Physical (preto e branco) ----
  impact: {
    type: 'physical',
    name: { en: 'Impact', 'pt-BR': 'Colisivo' },
    color: '#78b3b4',
    description: {
      en: 'Physical damage from blunt force. Effective at [[staggering enemies]] and softening them up for [[finishers]].',
      'pt-BR': 'Dano físico de força bruta. Eficaz em [[desestabilizar inimigos]] e prepará-los para [[execuções]].',
    },
    proc: {
      en: '[[Knockback]] — the target flinches/staggers for 1 second. Each stack also raises the [[Parazon Mercy threshold]] by [[+8%]] (up to 5 stacks, [[+40%]]).',
      'pt-BR': '[[Empurrão]] — o alvo cambaleia por 1 segundo. Cada acúmulo também aumenta o [[limiar de Misericórdia do Parazon]] em [[+8%]] (até 5 acúmulos, [[+40%]]).',
    },
    vulnerable: ['grineer', 'anarchs', 'scaldra'],
    resistant: [],
  },
  puncture: {
    type: 'physical',
    name: { en: 'Puncture', 'pt-BR': 'Penetração' },
    color: '#c6b098',
    description: {
      en: 'Physical damage from piercing strikes. [[Weakens enemy output]] and tags them as [[fragile]].',
      'pt-BR': 'Dano físico de golpes perfurantes. [[Enfraquece o dano dos inimigos]] e os marca como [[frágeis]].',
    },
    proc: {
      en: '[[Weakened]] — reduces the target\'s damage output by [[40%]] for 10s and grants the attacker [[+5% critical chance]] against them. Stacks up to 5 times (max [[−80% damage]] / [[+25% crit chance]]).',
      'pt-BR': '[[Enfraquecido]] — reduz o dano causado pelo alvo em [[40%]] por 10s e concede [[+5% de chance de crítico]] ao atacante. Acumula até 5 vezes (máx [[−80% dano]] / [[+25% chance de crítico]]).',
    },
    vulnerable: ['corpus', 'orokin'],
    resistant: [],
  },
  slash: {
    type: 'physical',
    name: { en: 'Slash', 'pt-BR': 'Corte' },
    color: '#e69ca0',
    description: {
      en: 'Physical damage from cutting strikes. Famous for its [[bleed]] that [[bypasses Armor entirely]].',
      'pt-BR': 'Dano físico de golpes cortantes. Famoso pelo [[sangramento]] que [[ignora Armadura por completo]].',
    },
    proc: {
      en: '[[Bleed]] — deals [[35% of base damage per second]] as [[True damage]] over 6s, [[bypassing Armor]]. Multiple procs stack independently.',
      'pt-BR': '[[Sangramento]] — causa [[35% do dano-base por segundo]] como [[dano Verdadeiro]] durante 6s, [[ignorando Armadura]]. Vários procs se acumulam de forma independente.',
    },
    vulnerable: ['infested', 'narmer'],
    resistant: [],
  },

  // ---- Elemental base ----
  heat: {
    type: 'elemental',
    name: { en: 'Heat', 'pt-BR': 'Calor' },
    color: '#e3702f',
    description: {
      en: 'Elemental damage from fire and intense heat. Causes [[ongoing burns]] and gradually [[strips armor]].',
      'pt-BR': 'Dano elemental de fogo e calor intenso. Causa [[queimaduras contínuas]] e [[remove armadura]] aos poucos.',
    },
    proc: {
      en: '[[Ignite]] — deals [[50% base damage per second]] as Heat over 6s and [[panics the target]] for 4s. Stacking procs gradually [[strip up to 50% of the target\'s Armor]].',
      'pt-BR': '[[Incendiar]] — causa [[50% do dano-base por segundo]] como Calor durante 6s e deixa o alvo em [[pânico]] por 4s. Acúmulos sucessivos [[removem até 50% da Armadura]] do alvo.',
    },
    vulnerable: ['infested'],
    resistant: [],
  },
  cold: {
    type: 'elemental',
    name: { en: 'Cold', 'pt-BR': 'Frio' },
    color: '#2f92e3',
    description: {
      en: 'Elemental damage from extreme cold. [[Slows targets]] and rewards the attacker with [[bonus critical damage]].',
      'pt-BR': 'Dano elemental de frio extremo. [[Lenta os alvos]] e recompensa o atacante com [[bônus de dano crítico]].',
    },
    proc: {
      en: '[[Freeze]] — slows movement, fire rate and attack speed by [[50%]] for 6s (up to [[90%]] at 9 stacks) and grants the attacker [[+0.1 critical DAMAGE multiplier]] (up to [[+0.5]]). The 10th stack [[freezes the target solid]] for 3s with [[+1.0 critical DAMAGE multiplier]].',
      'pt-BR': '[[Congelar]] — lenta movimento, cadência e velocidade de ataque em [[50%]] por 6s (até [[90%]] em 9 acúmulos) e concede ao atacante [[+0,1 de multiplicador de DANO crítico]] (até [[+0,5]]). O 10º acúmulo [[congela o alvo por completo]] por 3s com [[+1,0 de multiplicador de DANO crítico]].',
    },
    vulnerable: ['sentient'],
    resistant: ['techrot'],
  },
  electricity: {
    type: 'elemental',
    name: { en: 'Electricity', 'pt-BR': 'Eletricidade' },
    color: '#b62fe3',
    description: {
      en: 'Elemental damage from arcing current. [[Chains between nearby enemies]] and [[stuns the original target]].',
      'pt-BR': 'Dano elemental de corrente elétrica. [[Salta entre inimigos próximos]] e [[atordoa o alvo original]].',
    },
    proc: {
      en: '[[Tesla Chain]] — deals [[50% base damage per second]] as Electricity over 6s to enemies within [[3m]] of the target, and [[stuns the main target]] for 3s.',
      'pt-BR': '[[Cadeia Tesla]] — causa [[50% do dano-base por segundo]] como Eletricidade durante 6s em inimigos a até [[3m]] do alvo, e [[atordoa o alvo principal]] por 3s.',
    },
    vulnerable: ['murmur', 'anarchs'],
    resistant: [],
  },
  toxin: {
    type: 'elemental',
    name: { en: 'Toxin', 'pt-BR': 'Toxina' },
    color: '#2fe33a',
    description: {
      en: 'Elemental damage from corrosive venom. [[Eats through Shields]] and continues [[poisoning the target]].',
      'pt-BR': 'Dano elemental de veneno corrosivo. [[Atravessa Escudos]] e continua [[envenenando o alvo]].',
    },
    proc: {
      en: '[[Poison]] — deals [[50% base damage per second]] as Toxin over 6s, [[bypassing Shields entirely]]. Multiple procs stack independently.',
      'pt-BR': '[[Veneno]] — causa [[50% do dano-base por segundo]] como Toxina durante 6s, [[ignorando Escudos por completo]]. Vários procs se acumulam de forma independente.',
    },
    vulnerable: ['narmer'],
    resistant: [],
  },

  // ---- Elemental combinations ----
  blast: {
    type: 'combination',
    name: { en: 'Blast', 'pt-BR': 'Explosão' },
    color: '#9c4144',
    components: ['heat', 'cold'],
    description: {
      en: 'Heat + Cold. [[Stores energy]] that [[detonates]] when the stack peaks or the enemy dies, hitting everyone nearby.',
      'pt-BR': 'Calor + Frio. [[Armazena energia]] que [[detona]] quando os acúmulos atingem o pico ou o inimigo morre, atingindo todos por perto.',
    },
    proc: {
      en: '[[Detonate]] — deals [[30% base damage]] after 1.5s. Stacks up to 10 times; on death or when the stack cap is reached, detonates and hits enemies within [[5m]] for [[300% base damage per stack]] ([[AoE only]] — the original target is not hit by the blast).',
      'pt-BR': '[[Detonar]] — causa [[30% do dano-base]] após 1,5s. Acumula até 10 vezes; ao morrer ou atingir o teto de acúmulos, detona e atinge inimigos a até [[5m]] por [[300% do dano-base por acúmulo]] ([[apenas em área]] — o alvo original não é atingido pela explosão).',
    },
    vulnerable: [],
    resistant: [],
  },
  radiation: {
    type: 'combination',
    name: { en: 'Radiation', 'pt-BR': 'Radiação' },
    color: '#f4e925',
    components: ['heat', 'electricity'],
    description: {
      en: 'Heat + Electricity. Turns the target into a [[confused minion]] that [[mauls its own faction]].',
      'pt-BR': 'Calor + Eletricidade. Transforma o alvo em um [[lacaio confuso]] que [[ataca a própria facção]].',
    },
    proc: {
      en: '[[Confusion]] — the target attacks the nearest enemy and deals [[+100% damage to allies]] for 12s. Stacks up to 10 (max [[+550% bonus damage to allies]]).',
      'pt-BR': '[[Confusão]] — o alvo ataca o inimigo mais próximo e causa [[+100% de dano em aliados]] por 12s. Acumula até 10 (máx [[+550% de dano bônus em aliados]]).',
    },
    vulnerable: ['sentient', 'murmur'],
    resistant: ['orokin', 'anarchs'],
  },
  gas: {
    type: 'combination',
    name: { en: 'Gas', 'pt-BR': 'Gás' },
    color: '#2fe3aa',
    components: ['heat', 'toxin'],
    description: {
      en: 'Heat + Toxin. Creates an [[expanding toxic cloud]] around the target.',
      'pt-BR': 'Calor + Toxina. Cria uma [[nuvem tóxica que se expande]] ao redor do alvo.',
    },
    proc: {
      en: '[[Gas Cloud]] — deals [[50% base damage per second]] as Gas over 6s within a [[3m radius]] around the target. Stacks up to 10, growing the radius by 0.3m per stack (max [[6m]]).',
      'pt-BR': '[[Nuvem de Gás]] — causa [[50% do dano-base por segundo]] como Gás durante 6s em um [[raio de 3m]] ao redor do alvo. Acumula até 10, aumentando o raio em 0,3m por acúmulo (máx [[6m]]).',
    },
    vulnerable: ['techrot'],
    resistant: ['scaldra'],
  },
  magnetic: {
    type: 'combination',
    name: { en: 'Magnetic', 'pt-BR': 'Magnético' },
    color: '#acacac',
    components: ['cold', 'electricity'],
    description: {
      en: 'Cold + Electricity. The [[Shield-killer]]: [[cripples shield regen]] and [[amplifies all damage taken to Shields and Overguard]].',
      'pt-BR': 'Frio + Eletricidade. O [[matador de Escudos]]: [[prejudica a regeneração]] e [[amplifica todo dano em Escudos e Overguard]].',
    },
    proc: {
      en: '[[Disrupt]] — amplifies damage to Shields and Overguard by [[+100%]] (up to [[+325%]] at 10 stacks) and [[nullifies shield regeneration]] for 6s. When shields or overguard are removed, it triggers an Electricity proc dealing [[3% of max shields per stack]] (capped at [[30%]]).',
      'pt-BR': '[[Interromper]] — amplifica o dano em Escudos e Overguard em [[+100%]] (até [[+325%]] em 10 acúmulos) e [[anula a regeneração de escudos]] por 6s. Quando escudos ou overguard são removidos, dispara um proc de Eletricidade causando [[3% do escudo máximo por acúmulo]] (limitado a [[30%]]).',
    },
    vulnerable: ['corpus', 'techrot'],
    resistant: ['narmer'],
  },
  viral: {
    type: 'combination',
    name: { en: 'Viral', 'pt-BR': 'Viral' },
    color: '#f47ced',
    components: ['cold', 'toxin'],
    description: {
      en: 'Cold + Toxin. The [[Health-killer]]: massively [[amplifies all damage taken to Health]].',
      'pt-BR': 'Frio + Toxina. O [[matador de Vida]]: amplifica drasticamente [[todo dano causado em Vida]].',
    },
    proc: {
      en: '[[Virus]] — amplifies damage dealt to Health by [[+100%]] for 6s. Stacks up to 10 (max [[+325% bonus damage to Health]]).',
      'pt-BR': '[[Vírus]] — amplifica o dano causado em Vida em [[+100%]] por 6s. Acumula até 10 (máx [[+325% de dano bônus em Vida]]).',
    },
    vulnerable: ['orokin'],
    resistant: ['murmur'],
  },
  corrosive: {
    type: 'combination',
    name: { en: 'Corrosive', 'pt-BR': 'Corrosivo' },
    color: '#b7c91f',
    components: ['electricity', 'toxin'],
    description: {
      en: 'Electricity + Toxin. The [[Armor-killer]]: [[strips a meaningful chunk of enemy Armor]] on every stack.',
      'pt-BR': 'Eletricidade + Toxina. O [[matador de Armadura]]: [[remove uma parcela considerável de Armadura inimiga]] a cada acúmulo.',
    },
    proc: {
      en: '[[Corrosion]] — reduces the target\'s Armor by [[26%]] for 8s. Stacks up to 10 (+6% per stack, max [[−80% Armor]]).',
      'pt-BR': '[[Corrosão]] — reduz a Armadura do alvo em [[26%]] por 8s. Acumula até 10 (+6% por acúmulo, máx [[−80% de Armadura]]).',
    },
    vulnerable: ['grineer', 'scaldra'],
    resistant: ['sentient'],
  },

  // ---- Special (no faction matchups by default) ----
  void: {
    type: 'special',
    name: { en: 'Void', 'pt-BR': 'Vazio' },
    color: '#17c4a8',
    description: {
      en: 'A unique damage type carried by [[Operators, their Amps and Xaku]]. [[Neither physical nor elemental]] — neutral against most factions but tagged for [[Zariman manifestations]] and able to [[reset Sentient adaptation]].',
      'pt-BR': 'Um tipo de dano único dos [[Operadores, seus Amps e Xaku]]. [[Nem físico nem elemental]] — neutro contra a maioria das facções, mas marcado contra [[manifestações Zariman]] e capaz de [[resetar a adaptação Sentiente]].',
    },
    proc: {
      en: '[[Bullet Attractor]] — creates a [[2.5m field]] at the impact point for [[3s]] that pulls in bullets and projectiles toward the target, and [[redirects shots fired by affected enemies]] away from the player.',
      'pt-BR': '[[Atrator de Projéteis]] — cria um [[campo de 2,5m]] no ponto de impacto por [[3s]] que atrai balas e projéteis em direção ao alvo, e [[desvia tiros do alvo afetado]] para longe do jogador.',
    },
    vulnerable: ['zariman'],
    resistant: [],
  },
  tau: {
    type: 'special',
    name: { en: 'Tau', 'pt-BR': 'Tau' },
    color: '#e36566',
    description: {
      en: 'A special damage type associated with [[Sentient equipment and Caliban]]. [[Neutral against every faction]] — Warframes themselves can only resist it through the [[Umbral set, Adaptation, or Caliban\'s passive]].',
      'pt-BR': 'Um tipo de dano especial associado ao [[equipamento Sentiente e ao Caliban]]. [[Neutro contra toda facção]] — apenas Warframes podem resisti-lo, através do [[conjunto Umbral, Adaptation ou da passiva do Caliban]].',
    },
    proc: {
      en: '[[Status Chance Vulnerability]] — increases the target\'s Status Chance for subsequent attacks by [[+10% per stack]] for 8s. Stacks up to 10 times (max [[+100%]]). Each stack expires independently; [[forced procs do not benefit]] from the vulnerability.',
      'pt-BR': '[[Vulnerabilidade a Status]] — aumenta a Chance de Status do alvo nos ataques seguintes em [[+10% por acúmulo]] durante 8s. Acumula até 10 vezes (máx [[+100%]]). Cada acúmulo expira de forma independente; [[procs forçados não se beneficiam]] da vulnerabilidade.',
    },
    vulnerable: [],
    resistant: [],
  },
  true: {
    type: 'special',
    name: { en: 'True', 'pt-BR': 'Verdadeiro' },
    color: '#dd9646',
    description: {
      en: 'A hidden damage type carried by [[Finishers, the Basmu and several Warframe abilities]]. [[Ignores Armor entirely]] and [[cannot be adapted to by Sentients]], but is [[not boosted]] by physical or elemental damage modifiers.',
      'pt-BR': 'Um tipo de dano oculto presente em [[Execuções, na Basmu e em diversas habilidades de Warframes]]. [[Ignora Armadura por completo]] e [[não pode ser adaptado por Sentientes]], mas [[não é amplificado]] por bônus de dano físico ou elemental.',
    },
    proc: {
      en: '[[None]] — True damage does not apply any status proc of its own.',
      'pt-BR': '[[Nenhum]] — dano Verdadeiro não aplica nenhum efeito de status próprio.',
    },
    vulnerable: [],
    resistant: [],
  },
};

const STATUS_PHYSICAL_KEYS = ['impact', 'puncture', 'slash'];
const STATUS_ELEMENTAL_KEYS = ['heat', 'cold', 'electricity', 'toxin'];
const STATUS_SPECIAL_KEYS = ['void', 'tau', 'true'];

const STATUS_COMBINATIONS = {};
Object.entries(STATUS_EFFECTS).forEach(([slug, eff]) => {
  if (eff.type !== 'combination') return;
  const key = [...eff.components].sort().join('+');
  STATUS_COMBINATIONS[key] = slug;
});

// ============== Rivens ==============
// Tier weights and negative-stat modifiers are defined in PLAN.md §14.

const RIVEN_TIER_WEIGHTS = { S: 10, A: 7, B: 5, C: 3, D: 1 };
const RIVEN_NEG_MODS = { beneficial: 2, neutral: 0, mild: -2, harmful: -5 };

// posTier  = quality when stat appears as a positive (S/A/B/C/D)
// negTier  = harm bucket when stat appears as a negative (beneficial/neutral/mild/harmful)
// cats     = which weapon categories this stat can appear on
const RIVEN_STATS = {
  damage:               { name: { en: 'Damage',                  'pt-BR': 'Dano' },                       posTier: 'S', negTier: 'harmful',    cats: ['primary', 'secondary', 'melee'] },
  multishot:            { name: { en: 'Multishot',               'pt-BR': 'Disparo Múltiplo' },           posTier: 'S', negTier: 'harmful',    cats: ['primary', 'secondary'] },
  critical_chance:      { name: { en: 'Critical Chance',         'pt-BR': 'Chance de Crítico' },          posTier: 'S', negTier: 'harmful',    cats: ['primary', 'secondary', 'melee'] },
  critical_damage:      { name: { en: 'Critical Damage',         'pt-BR': 'Dano Crítico' },               posTier: 'A', negTier: 'harmful',    cats: ['primary', 'secondary', 'melee'] },
  status_chance:        { name: { en: 'Status Chance',           'pt-BR': 'Chance de Status' },           posTier: 'A', negTier: 'harmful',    cats: ['primary', 'secondary', 'melee'] },
  status_duration:      { name: { en: 'Status Duration',         'pt-BR': 'Duração de Status' },          posTier: 'B', negTier: 'mild',       cats: ['primary', 'secondary', 'melee'], typicalMax: 100 },
  toxin:                { name: { en: 'Toxin Damage',            'pt-BR': 'Dano Tóxico' },                posTier: 'A', negTier: 'mild',       cats: ['primary', 'secondary', 'melee'] },
  heat:                 { name: { en: 'Heat Damage',             'pt-BR': 'Dano de Calor' },              posTier: 'A', negTier: 'mild',       cats: ['primary', 'secondary', 'melee'] },
  cold:                 { name: { en: 'Cold Damage',             'pt-BR': 'Dano de Frio' },               posTier: 'A', negTier: 'mild',       cats: ['primary', 'secondary', 'melee'] },
  electricity:          { name: { en: 'Electricity Damage',      'pt-BR': 'Dano Elétrico' },              posTier: 'A', negTier: 'mild',       cats: ['primary', 'secondary', 'melee'] },
  impact:               { name: { en: 'Impact Damage',           'pt-BR': 'Dano Colisivo' },              posTier: 'C', negTier: 'beneficial', cats: ['primary', 'secondary', 'melee'] },
  puncture:             { name: { en: 'Puncture Damage',         'pt-BR': 'Dano de Penetração' },         posTier: 'B', negTier: 'neutral',    cats: ['primary', 'secondary', 'melee'] },
  slash:                { name: { en: 'Slash Damage',            'pt-BR': 'Dano de Corte' },              posTier: 'A', negTier: 'mild',       cats: ['primary', 'secondary', 'melee'] },
  fire_rate:            { name: { en: 'Fire Rate',               'pt-BR': 'Cadência de Tiro' },           posTier: 'B', negTier: 'harmful',    cats: ['primary', 'secondary'], typicalMax: 100 },
  reload_speed:         { name: { en: 'Reload Speed',            'pt-BR': 'Velocidade de Recarga' },      posTier: 'C', negTier: 'mild',       cats: ['primary', 'secondary'], typicalMax: 100 },
  magazine_capacity:    { name: { en: 'Magazine Capacity',       'pt-BR': 'Capacidade do Carregador' },   posTier: 'C', negTier: 'mild',       cats: ['primary', 'secondary'] },
  ammo_max:             { name: { en: 'Ammo Maximum',            'pt-BR': 'Munição Máxima' },             posTier: 'C', negTier: 'harmful',    cats: ['primary', 'secondary'] },
  punch_through:        { name: { en: 'Punch Through',           'pt-BR': 'Penetração' },                 posTier: 'B', negTier: 'neutral',    cats: ['primary', 'secondary'], unit: 'm' },
  projectile_speed:     { name: { en: 'Projectile Speed',        'pt-BR': 'Velocidade do Projétil' },     posTier: 'C', negTier: 'mild',       cats: ['primary', 'secondary'] },
  recoil:               { name: { en: 'Recoil',                  'pt-BR': 'Recuo' },                      posTier: 'D', negTier: 'beneficial', cats: ['primary', 'secondary'], typicalMax: 100 },
  zoom:                 { name: { en: 'Zoom',                    'pt-BR': 'Zoom' },                       posTier: 'D', negTier: 'beneficial', cats: ['primary', 'secondary'], typicalMax: 100 },
  faction_grineer:      { name: { en: 'Damage to Grineer',       'pt-BR': 'Dano em Grineer' },            posTier: 'B', negTier: 'neutral',    cats: ['primary', 'secondary', 'melee'], unit: 'x', multiplier: true, minVal: 0.1, maxVal: 3 },
  faction_corpus:       { name: { en: 'Damage to Corpus',        'pt-BR': 'Dano em Corpus' },             posTier: 'B', negTier: 'neutral',    cats: ['primary', 'secondary', 'melee'], unit: 'x', multiplier: true, minVal: 0.1, maxVal: 3 },
  faction_infested:     { name: { en: 'Damage to Infested',      'pt-BR': 'Dano em Infestados' },         posTier: 'B', negTier: 'neutral',    cats: ['primary', 'secondary', 'melee'], unit: 'x', multiplier: true, minVal: 0.1, maxVal: 3 },
  faction_corrupted:    { name: { en: 'Damage to Corrupted',     'pt-BR': 'Dano em Corrompidos' },        posTier: 'B', negTier: 'neutral',    cats: ['primary', 'secondary', 'melee'], unit: 'x', multiplier: true, minVal: 0.1, maxVal: 3 },
  combo_duration:       { name: { en: 'Combo Duration',          'pt-BR': 'Duração do Combo' },           posTier: 'C', negTier: 'neutral',    cats: ['melee'], minVal: 1, maxVal: 30, unit: 's' },
  combo_count_chance:   { name: { en: 'Combo Count Chance',      'pt-BR': 'Chance de Acúmulo de Combo' }, posTier: 'B', negTier: 'mild',       cats: ['melee'] },
  initial_combo:        { name: { en: 'Initial Combo',           'pt-BR': 'Combo Inicial' },              posTier: 'B', negTier: 'neutral',    cats: ['melee'], minVal: 1, maxVal: 50, unit: 'x' },
  attack_speed:         { name: { en: 'Attack Speed',            'pt-BR': 'Velocidade de Ataque' },       posTier: 'B', negTier: 'harmful',    cats: ['melee'] },
  range:                { name: { en: 'Range',                   'pt-BR': 'Alcance' },                    posTier: 'B', negTier: 'mild',       cats: ['melee'], minVal: 0.05, maxVal: 2.5, unit: 'm' },
  heavy_attack_eff:     { name: { en: 'Heavy Attack Efficiency', 'pt-BR': 'Eficiência de Ataque Pesado' }, posTier: 'B', negTier: 'mild',      cats: ['melee'] },
  heavy_attack_windup:  { name: { en: 'Heavy Attack Wind-Up',    'pt-BR': 'Carregamento de Ataque Pesado' }, posTier: 'C', negTier: 'mild',    cats: ['melee'] },
  finisher_damage:      { name: { en: 'Finisher Damage',         'pt-BR': 'Dano de Execução' },           posTier: 'C', negTier: 'neutral',    cats: ['melee'] },
};

const RIVEN_CATEGORIES = ['primary', 'secondary', 'melee'];

// ---------------------------------------------------------------------------
// Weapon picker data (v3 — secondaries only for the initial release).
// disposition_dots map to a strength multiplier — the dots are what the game
// shows, the multiplier is used to scale roll_quality in scoreRiven.
//
// Overrides per weapon:
//   preferred_positive: { slug: 'S'|'A'|'B'|'C'|'D' } — bumps tier for that stat
//   wasted_positive:    { slug: 'C'|'D' } — knocks tier down (saturated/redundant)
//   preferred_negative: { slug: 'beneficial'|'neutral'|'mild'|'harmful' } — overrides the negative bucket
//
// Disposition values reflect the most recent disposition review. Update
// manually post-patch when DE publishes a new review.
// ---------------------------------------------------------------------------
const DISPOSITION_TIERS = [
  { dots: 1, min: 0.50, label: '●○○○○' },
  { dots: 2, min: 0.75, label: '●●○○○' },
  { dots: 3, min: 0.95, label: '●●●○○' },
  { dots: 4, min: 1.15, label: '●●●●○' },
  { dots: 5, min: 1.35, label: '●●●●●' },
];

function dispositionDots(mult) {
  let dots = 1;
  DISPOSITION_TIERS.forEach(t => { if (mult >= t.min) dots = t.dots; });
  return dots;
}
function dispositionLabel(mult) {
  return DISPOSITION_TIERS.find(t => t.dots === dispositionDots(mult)).label;
}

const WEAPONS = {
  primary: [
    {
      slug: 'ax-52', name: 'AX-52', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 12, disposition: 0.85, family: 'ax-52',
      image: 'https://wiki.warframe.com/images/AX-52.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'acceltra', name: 'Acceltra', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 8, disposition: 0.65, family: 'acceltra',
      image: 'https://wiki.warframe.com/images/Acceltra.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
      notes: {
        en: 'Auto rocket pistol with AoE — Multishot and Damage explode wave clears, Crit Chance helps.',
        'pt-BR': 'Pistola automática com foguetes AoE — Multishot e Dano explodem ondas, Chance de Crítico ajuda.',
      },
    },
    {
      slug: 'acceltra-prime', name: 'Acceltra Prime', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 14, disposition: 0.55, family: 'acceltra',
      image: 'https://wiki.warframe.com/images/AcceltraPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'aeolak', name: 'Aeolak', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 10, disposition: 1.2, family: 'aeolak',
      image: 'https://wiki.warframe.com/images/Aeolak.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'afentis', name: 'Afentis', category: 'primary',
      type: 'Speargun (Semi)', mastery_rank: 8, disposition: 1.05, family: 'afentis',
      image: 'https://wiki.warframe.com/images/Afentis.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'alternox', name: 'Alternox', category: 'primary',
      type: 'Rifle (Active)', mastery_rank: 8, disposition: 1.15, family: 'alternox',
      image: 'https://wiki.warframe.com/images/Alternox.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'alternox-prime', name: 'Alternox Prime', category: 'primary',
      type: 'Rifle (Active)', mastery_rank: 13, disposition: 0.65, family: 'alternox',
      image: 'https://wiki.warframe.com/images/AlternoxPrime.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'ambassador', name: 'Ambassador', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 10, disposition: 1.15, family: 'ambassador',
      image: 'https://wiki.warframe.com/images/Ambassador.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'amprex', name: 'Amprex', category: 'primary',
      type: 'Beam Rifle', mastery_rank: 10, disposition: 0.85, family: 'amprex',
      image: 'https://wiki.warframe.com/images/Amprex.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', damage: 'S' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
      notes: {
        en: 'Chain beam crit rifle — Multishot/Crit Chance/Damage all top tier.',
        'pt-BR': 'Rifle feixe encadeado de crítico — Multishot/Chance de Crítico/Dano todos top tier.',
      },
    },
    {
      slug: 'arca-plasmor', name: 'Arca Plasmor', category: 'primary',
      type: 'Shotgun (Semi-Auto)', mastery_rank: 10, disposition: 0.95, family: 'arca-plasmor',
      image: 'https://wiki.warframe.com/images/ArcaPlasmor.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'argonak', name: 'Argonak', category: 'primary',
      type: 'Rifle (Semi-Auto)', mastery_rank: 7, disposition: 1.25, family: 'argonak',
      image: 'https://wiki.warframe.com/images/Argonak.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'astilla', name: 'Astilla', category: 'primary',
      type: 'Shotgun (Auto)', mastery_rank: 10, disposition: 1.3, family: 'astilla',
      image: 'https://wiki.warframe.com/images/Astilla.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'astilla-prime', name: 'Astilla Prime', category: 'primary',
      type: 'Shotgun (Auto)', mastery_rank: 14, disposition: 1.2, family: 'astilla',
      image: 'https://wiki.warframe.com/images/AstillaPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'attica', name: 'Attica', category: 'primary',
      type: 'Crossbow (Auto)', mastery_rank: 7, disposition: 1.42, family: 'attica',
      image: 'https://wiki.warframe.com/images/Attica.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'basmu', name: 'Basmu', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 11, disposition: 1.2, family: 'basmu',
      image: 'https://wiki.warframe.com/images/Basmu.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'battacor', name: 'Battacor', category: 'primary',
      type: 'Rifle (Auto Burst)', mastery_rank: 10, disposition: 1.1, family: 'battacor',
      image: 'https://wiki.warframe.com/images/Battacor.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'baza', name: 'Baza', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 7, disposition: 1.05, family: 'baza',
      image: 'https://wiki.warframe.com/images/Baza.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'baza-prime', name: 'Baza Prime', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 10, disposition: 1.0, family: 'baza',
      image: 'https://wiki.warframe.com/images/BazaPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'boar', name: 'Boar', category: 'primary',
      type: 'Beam Shotgun', mastery_rank: 2, disposition: 1.45, family: 'boar',
      image: 'https://wiki.warframe.com/images/Boar.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'boar-prime', name: 'Boar Prime', category: 'primary',
      type: 'Beam Shotgun', mastery_rank: 11, disposition: 1.34, family: 'boar',
      image: 'https://wiki.warframe.com/images/BoarPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'boltor', name: 'Boltor', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 2, disposition: 1.3, family: 'boltor',
      image: 'https://wiki.warframe.com/images/Boltor.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'boltor-prime', name: 'Boltor Prime', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 13, disposition: 1.2, family: 'boltor',
      image: 'https://wiki.warframe.com/images/BoltorPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
      notes: {
        en: 'Hard-hitting bolt rifle — Multishot/Damage/Crit Chance carry every build.',
        'pt-BR': 'Rifle de parafusos pesado — Multishot/Dano/Chance de Crítico carregam toda build.',
      },
    },
    {
      slug: 'braton', name: 'Braton', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 0, disposition: 1.35, family: 'braton',
      image: 'https://wiki.warframe.com/images/Braton.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'braton-prime', name: 'Braton Prime', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 8, disposition: 1.25, family: 'braton',
      image: 'https://wiki.warframe.com/images/BratonPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'braton-vandal', name: 'Braton Vandal', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 4, disposition: 1.3, family: 'braton',
      image: 'https://wiki.warframe.com/images/BratonVandal.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'bubonico', name: 'Bubonico', category: 'primary',
      type: 'Arm-Cannon (Auto)', mastery_rank: 13, disposition: 0.75, family: 'bubonico',
      image: 'https://wiki.warframe.com/images/Bubonico.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'burston', name: 'Burston', category: 'primary',
      type: 'Rifle (Burst)', mastery_rank: 0, disposition: 1.45, family: 'burston',
      image: 'https://wiki.warframe.com/images/Burston.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'burston-prime', name: 'Burston Prime', category: 'primary',
      type: 'Rifle (Burst)', mastery_rank: 12, disposition: 1.35, family: 'burston',
      image: 'https://wiki.warframe.com/images/BurstonPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'buzlok', name: 'Buzlok', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 11, disposition: 1.45, family: 'buzlok',
      image: 'https://wiki.warframe.com/images/Buzlok.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'carmine-penta', name: 'Carmine Penta', category: 'primary',
      type: 'Launcher (Active)', mastery_rank: 6, disposition: 1.3, family: 'carmine-penta',
      image: 'https://wiki.warframe.com/images/CarminePenta.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'cedo', name: 'Cedo', category: 'primary',
      type: 'Shotgun (Auto)', mastery_rank: 8, disposition: 0.65, family: 'cedo',
      image: 'https://wiki.warframe.com/images/Cedo.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'cedo-prime', name: 'Cedo Prime', category: 'primary',
      type: 'Shotgun (Auto)', mastery_rank: 15, disposition: 0.55, family: 'cedo',
      image: 'https://wiki.warframe.com/images/CedoPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'cernos', name: 'Cernos', category: 'primary',
      type: 'Bow (Semi-Auto)', mastery_rank: 6, disposition: 1.3, family: 'cernos',
      image: 'https://wiki.warframe.com/images/Cernos.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial', magazine_capacity: 'beneficial' },
    },
    {
      slug: 'cernos-prime', name: 'Cernos Prime', category: 'primary',
      type: 'Bow (Semi-Auto)', mastery_rank: 12, disposition: 1.25, family: 'cernos',
      image: 'https://wiki.warframe.com/images/CernosPrime.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial', magazine_capacity: 'beneficial' },
    },
    {
      slug: 'cinta', name: 'Cinta', category: 'primary',
      type: 'Bow (Semi-Auto)', mastery_rank: 6, disposition: 1.25, family: 'cinta',
      image: 'https://wiki.warframe.com/images/Cinta.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial', magazine_capacity: 'beneficial' },
    },
    {
      slug: 'coda-bassocyst', name: 'Coda Bassocyst', category: 'primary',
      type: 'Shotgun (Semi-Auto)', mastery_rank: 17, disposition: 0.6, family: 'coda-bassocyst',
      image: 'https://wiki.warframe.com/images/CodaBassocyst.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'coda-bubonico', name: 'Coda Bubonico', category: 'primary',
      type: 'Arm-Cannon (Auto)', mastery_rank: 17, disposition: 0.5, family: 'coda-bubonico',
      image: 'https://wiki.warframe.com/images/CodaBubonico.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'coda-hema', name: 'Coda Hema', category: 'primary',
      type: 'Rifle (Burst)', mastery_rank: 17, disposition: 0.95, family: 'coda-hema',
      image: 'https://wiki.warframe.com/images/CodaHema.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'coda-sporothrix', name: 'Coda Sporothrix', category: 'primary',
      type: 'Sniper Rifle (Semi-Auto)', mastery_rank: 17, disposition: 0.95, family: 'coda-sporothrix',
      image: 'https://wiki.warframe.com/images/CodaSporothrix.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'S' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial', magazine_capacity: 'beneficial' },
    },
    {
      slug: 'coda-synapse', name: 'Coda Synapse', category: 'primary',
      type: 'Beam Rifle', mastery_rank: 17, disposition: 0.9, family: 'coda-synapse',
      image: 'https://wiki.warframe.com/images/CodaSynapse.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'convectrix', name: 'Convectrix', category: 'primary',
      type: 'Beam Shotgun', mastery_rank: 7, disposition: 1.46, family: 'convectrix',
      image: 'https://wiki.warframe.com/images/Convectrix.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'corinth', name: 'Corinth', category: 'primary',
      type: 'Shotgun (Semi-Auto)', mastery_rank: 8, disposition: 1.15, family: 'corinth',
      image: 'https://wiki.warframe.com/images/Corinth.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'corinth-prime', name: 'Corinth Prime', category: 'primary',
      type: 'Shotgun (Semi-Auto)', mastery_rank: 14, disposition: 1.0, family: 'corinth',
      image: 'https://wiki.warframe.com/images/CorinthPrime.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', damage: 'S' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
      notes: {
        en: 'Pump shotgun with airburst grenade — Multishot/Crit Chance/Damage all top tier picks.',
        'pt-BR': 'Escopeta de bombeio com granada airburst — Multishot/Chance de Crítico/Dano todos picks top tier.',
      },
    },
    {
      slug: 'daikyu', name: 'Daikyu', category: 'primary',
      type: 'Bow (Charge)', mastery_rank: 10, disposition: 1.3, family: 'daikyu',
      image: 'https://wiki.warframe.com/images/Daikyu.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial', magazine_capacity: 'beneficial' },
      notes: {
        en: 'Crit-focused bow with insane disposition — riven scales dramatically.',
        'pt-BR': 'Arco focado em crítico com disposição absurda — riven escala drasticamente.',
      },
    },
    {
      slug: 'daikyu-prime', name: 'Daikyu Prime', category: 'primary',
      type: 'Bow (Charge)', mastery_rank: 15, disposition: 0.9, family: 'daikyu',
      image: 'https://wiki.warframe.com/images/DaikyuPrime.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial', magazine_capacity: 'beneficial' },
    },
    {
      slug: 'dera', name: 'Dera', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 4, disposition: 1.4, family: 'dera',
      image: 'https://wiki.warframe.com/images/Dera.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'dera-vandal', name: 'Dera Vandal', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 7, disposition: 1.35, family: 'dera',
      image: 'https://wiki.warframe.com/images/DeraVandal.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'dex-sybaris', name: 'Dex Sybaris', category: 'primary',
      type: 'Rifle (Burst)', mastery_rank: 7, disposition: 1.3, family: 'dex-sybaris',
      image: 'https://wiki.warframe.com/images/DexSybaris.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'drakgoon', name: 'Drakgoon', category: 'primary',
      type: 'Shotgun (Charge)', mastery_rank: 5, disposition: 1.4, family: 'drakgoon',
      image: 'https://wiki.warframe.com/images/Drakgoon.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'dread', name: 'Dread', category: 'primary',
      type: 'Bow (Semi-Auto)', mastery_rank: 5, disposition: 1.3, family: 'dread',
      image: 'https://wiki.warframe.com/images/Dread.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial', magazine_capacity: 'beneficial' },
      notes: {
        en: 'Stalker bow with high crit — Multishot/Crit Chance/Crit Damage dominate.',
        'pt-BR': 'Arco do Stalker de alto crítico — Multishot/Chance/Dano de Crítico dominam.',
      },
    },
    {
      slug: 'efv-5-jupiter', name: 'EFV-5 Jupiter', category: 'primary',
      type: 'Rifle (Auto Charge)', mastery_rank: 14, disposition: 1.05, family: 'efv-5-jupiter',
      image: 'https://wiki.warframe.com/images/EFV-5Jupiter.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'enkaus', name: 'Enkaus', category: 'primary',
      type: 'Beam Rifle', mastery_rank: 12, disposition: 0.5, family: 'enkaus',
      image: 'https://wiki.warframe.com/images/Enkaus.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'evensong', name: 'Evensong', category: 'primary',
      type: 'Bow (Semi-Auto)', mastery_rank: 10, disposition: 1.2, family: 'evensong',
      image: 'https://wiki.warframe.com/images/Evensong.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial', magazine_capacity: 'beneficial' },
    },
    {
      slug: 'exergis', name: 'Exergis', category: 'primary',
      type: 'Shotgun (Semi-Auto)', mastery_rank: 8, disposition: 1.1, family: 'exergis',
      image: 'https://wiki.warframe.com/images/Exergis.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'felarx', name: 'Felarx', category: 'primary',
      type: 'Shotgun (Auto)', mastery_rank: 14, disposition: 0.6, family: 'felarx',
      image: 'https://wiki.warframe.com/images/Felarx.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', damage: 'S' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
      notes: {
        en: 'Quest-locked Incarnon shotgun — Multishot/Crit Chance/Damage all top tier.',
        'pt-BR': 'Escopeta Incarnon liberada por quest — Multishot/Chance de Crítico/Dano todos top tier.',
      },
    },
    {
      slug: 'ferrox', name: 'Ferrox', category: 'primary',
      type: 'Speargun (Semi)', mastery_rank: 14, disposition: 1.25, family: 'ferrox',
      image: 'https://wiki.warframe.com/images/Ferrox.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'flux-rifle', name: 'Flux Rifle', category: 'primary',
      type: 'Beam Rifle', mastery_rank: 6, disposition: 1.55, family: 'flux-rifle',
      image: 'https://wiki.warframe.com/images/FluxRifle.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'fulmin', name: 'Fulmin', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 8, disposition: 1.0, family: 'fulmin',
      image: 'https://wiki.warframe.com/images/Fulmin.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'fulmin-prime', name: 'Fulmin Prime', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 12, disposition: 0.75, family: 'fulmin',
      image: 'https://wiki.warframe.com/images/FulminPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'glaxion', name: 'Glaxion', category: 'primary',
      type: 'Beam Rifle', mastery_rank: 8, disposition: 1.3, family: 'glaxion',
      image: 'https://wiki.warframe.com/images/Glaxion.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'glaxion-vandal', name: 'Glaxion Vandal', category: 'primary',
      type: 'Beam Rifle', mastery_rank: 12, disposition: 1.25, family: 'glaxion',
      image: 'https://wiki.warframe.com/images/GlaxionVandal.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'gorgon', name: 'Gorgon', category: 'primary',
      type: 'Rifle (Auto Charge)', mastery_rank: 3, disposition: 1.4, family: 'gorgon',
      image: 'https://wiki.warframe.com/images/Gorgon.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'gorgon-wraith', name: 'Gorgon Wraith', category: 'primary',
      type: 'Rifle (Auto Charge)', mastery_rank: 7, disposition: 1.35, family: 'gorgon',
      image: 'https://wiki.warframe.com/images/GorgonWraith.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'gotva-prime', name: 'Gotva Prime', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 14, disposition: 0.85, family: 'gotva',
      image: 'https://wiki.warframe.com/images/GotvaPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'grakata', name: 'Grakata', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 5, disposition: 1.35, family: 'grakata',
      image: 'https://wiki.warframe.com/images/Grakata.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'grinlok', name: 'Grinlok', category: 'primary',
      type: 'Rifle (Semi-Auto)', mastery_rank: 7, disposition: 1.3, family: 'grinlok',
      image: 'https://wiki.warframe.com/images/Grinlok.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'harpak', name: 'Harpak', category: 'primary',
      type: 'Rifle (Burst)', mastery_rank: 7, disposition: 1.55, family: 'harpak',
      image: 'https://wiki.warframe.com/images/Harpak.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'hek', name: 'Hek', category: 'primary',
      type: 'Shotgun (Semi-Auto)', mastery_rank: 4, disposition: 1.2, family: 'hek',
      image: 'https://wiki.warframe.com/images/Hek.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'hema', name: 'Hema', category: 'primary',
      type: 'Rifle (Burst)', mastery_rank: 7, disposition: 1.3, family: 'hema',
      image: 'https://wiki.warframe.com/images/Hema.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'higasa', name: 'Higasa', category: 'primary',
      type: 'Rifle (Burst)', mastery_rank: 2, disposition: 1.25, family: 'higasa',
      image: 'https://wiki.warframe.com/images/Higasa.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'hind', name: 'Hind', category: 'primary',
      type: 'Rifle (Semi-Auto)', mastery_rank: 0, disposition: 1.42, family: 'hind',
      image: 'https://wiki.warframe.com/images/Hind.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'ignis', name: 'Ignis', category: 'primary',
      type: 'Beam Rifle', mastery_rank: 5, disposition: 0.65, family: 'ignis',
      image: 'https://wiki.warframe.com/images/Ignis.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'ignis-wraith', name: 'Ignis Wraith', category: 'primary',
      type: 'Beam Rifle', mastery_rank: 9, disposition: 0.6, family: 'ignis',
      image: 'https://wiki.warframe.com/images/IgnisWraith.png',
      preferred_positive: { multishot: 'S', damage: 'S', status_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
      notes: {
        en: 'Flamethrower rifle — Multishot doubles status procs, Damage scales everything.',
        'pt-BR': 'Rifle lança-chamas — Multishot dobra procs de status, Dano escala tudo.',
      },
    },
    {
      slug: 'javlok', name: 'Javlok', category: 'primary',
      type: 'Speargun (Semi)', mastery_rank: 7, disposition: 1.3, family: 'javlok',
      image: 'https://wiki.warframe.com/images/Javlok.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'karak', name: 'Karak', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 1, disposition: 1.35, family: 'karak',
      image: 'https://wiki.warframe.com/images/Karak.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'karak-wraith', name: 'Karak Wraith', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 7, disposition: 1.28, family: 'karak',
      image: 'https://wiki.warframe.com/images/KarakWraith.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'kohm', name: 'Kohm', category: 'primary',
      type: 'Shotgun (Auto-Spool)', mastery_rank: 5, disposition: 1.3, family: 'kohm',
      image: 'https://wiki.warframe.com/images/Kohm.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'komorex', name: 'Komorex', category: 'primary',
      type: 'Sniper Rifle (Semi-Auto)', mastery_rank: 8, disposition: 1.15, family: 'komorex',
      image: 'https://wiki.warframe.com/images/Komorex.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'S' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial', magazine_capacity: 'beneficial' },
    },
    {
      slug: 'kuva-bramma', name: 'Kuva Bramma', category: 'primary',
      type: 'Bow (Charge)', mastery_rank: 15, disposition: 0.65, family: 'kuva-bramma',
      image: 'https://wiki.warframe.com/images/KuvaBramma.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial', magazine_capacity: 'beneficial' },
      notes: {
        en: 'Explosive 3-arrow bow with the lowest disposition in the game — Multishot/Crit Chance/Crit Damage carry.',
        'pt-BR': 'Arco explosivo de 3 flechas com a menor disposição do jogo — Multishot/Chance/Dano de Crítico carregam.',
      },
    },
    {
      slug: 'kuva-chakkhurr', name: 'Kuva Chakkhurr', category: 'primary',
      type: 'Rifle (Semi-Auto)', mastery_rank: 15, disposition: 0.95, family: 'kuva-chakkhurr',
      image: 'https://wiki.warframe.com/images/KuvaChakkhurr.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'S' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial', impact: 'beneficial' },
      notes: {
        en: 'Heavy sniper-like rifle with explosive headshots — Multishot/Damage/Crit Chance dominate. −Impact boosts Slash proc share.',
        'pt-BR': 'Rifle pesado tipo sniper com headshot explosivo — Multishot/Dano/Chance de Crítico dominam. −Impacto aumenta a parcela de procs de Corte.',
      },
    },
    {
      slug: 'kuva-drakgoon', name: 'Kuva Drakgoon', category: 'primary',
      type: 'Shotgun (Charge)', mastery_rank: 13, disposition: 1.15, family: 'kuva-drakgoon',
      image: 'https://wiki.warframe.com/images/KuvaDrakgoon.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'kuva-hek', name: 'Kuva Hek', category: 'primary',
      type: 'Shotgun (Semi-Auto)', mastery_rank: 15, disposition: 1.0, family: 'kuva-hek',
      image: 'https://wiki.warframe.com/images/KuvaHek.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'S' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
      notes: {
        en: '4-burst shotgun with crit focus — Multishot/Damage/Crit Chance all top tier.',
        'pt-BR': 'Escopeta 4-burst focada em crítico — Multishot/Dano/Chance de Crítico todos top tier.',
      },
    },
    {
      slug: 'kuva-hind', name: 'Kuva Hind', category: 'primary',
      type: 'Rifle (Burst)', mastery_rank: 15, disposition: 1.1, family: 'kuva-hind',
      image: 'https://wiki.warframe.com/images/KuvaHind.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'kuva-karak', name: 'Kuva Karak', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 13, disposition: 1.05, family: 'kuva-karak',
      image: 'https://wiki.warframe.com/images/KuvaKarak.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'kuva-kohm', name: 'Kuva Kohm', category: 'primary',
      type: 'Shotgun (Auto-Spool)', mastery_rank: 13, disposition: 0.9, family: 'kuva-kohm',
      image: 'https://wiki.warframe.com/images/KuvaKohm.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'kuva-ogris', name: 'Kuva Ogris', category: 'primary',
      type: 'Launcher (Semi-Auto)', mastery_rank: 15, disposition: 0.7, family: 'kuva-ogris',
      image: 'https://wiki.warframe.com/images/KuvaOgris.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'kuva-quartakk', name: 'Kuva Quartakk', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 13, disposition: 1.1, family: 'kuva-quartakk',
      image: 'https://wiki.warframe.com/images/KuvaQuartakk.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'kuva-sobek', name: 'Kuva Sobek', category: 'primary',
      type: 'Shotgun (Auto)', mastery_rank: 15, disposition: 0.8, family: 'kuva-sobek',
      image: 'https://wiki.warframe.com/images/KuvaSobek.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'kuva-tonkor', name: 'Kuva Tonkor', category: 'primary',
      type: 'Launcher (Semi-Auto)', mastery_rank: 13, disposition: 0.9, family: 'kuva-tonkor',
      image: 'https://wiki.warframe.com/images/KuvaTonkor.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'kuva-zarr', name: 'Kuva Zarr', category: 'primary',
      type: 'Launcher (Semi-Auto)', mastery_rank: 15, disposition: 0.7, family: 'kuva-zarr',
      image: 'https://wiki.warframe.com/images/KuvaZarr.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'lanka', name: 'Lanka', category: 'primary',
      type: 'Sniper Rifle (Charge)', mastery_rank: 10, disposition: 1.05, family: 'lanka',
      image: 'https://wiki.warframe.com/images/Lanka.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'S' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial', magazine_capacity: 'beneficial' },
    },
    {
      slug: 'latron', name: 'Latron', category: 'primary',
      type: 'Rifle (Semi-Auto)', mastery_rank: 0, disposition: 1.4, family: 'latron',
      image: 'https://wiki.warframe.com/images/Latron.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'latron-prime', name: 'Latron Prime', category: 'primary',
      type: 'Rifle (Semi-Auto)', mastery_rank: 10, disposition: 1.3, family: 'latron',
      image: 'https://wiki.warframe.com/images/LatronPrime.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'latron-wraith', name: 'Latron Wraith', category: 'primary',
      type: 'Rifle (Semi-Auto)', mastery_rank: 7, disposition: 1.35, family: 'latron',
      image: 'https://wiki.warframe.com/images/LatronWraith.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'lenz', name: 'Lenz', category: 'primary',
      type: 'Bow (Charge)', mastery_rank: 8, disposition: 1.05, family: 'lenz',
      image: 'https://wiki.warframe.com/images/Lenz.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial', magazine_capacity: 'beneficial' },
      notes: {
        en: 'Explosive freeze bow — Multishot/Damage carry AoE clears.',
        'pt-BR': 'Arco explosivo congelante — Multishot/Dano carregam AoE.',
      },
    },
    {
      slug: 'miter', name: 'Miter', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 6, disposition: 1.5, family: 'miter',
      image: 'https://wiki.warframe.com/images/Miter.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'mk1-braton', name: 'Mk1-Braton', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 0, disposition: 1.35, family: 'mk1-braton',
      image: 'https://wiki.warframe.com/images/Braton.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'mk1-paris', name: 'Mk1-Paris', category: 'primary',
      type: 'Bow (Semi-Auto)', mastery_rank: 0, disposition: 1.45, family: 'mk1-paris',
      image: 'https://wiki.warframe.com/images/Paris.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial', magazine_capacity: 'beneficial' },
    },
    {
      slug: 'mk1-strun', name: 'Mk1-Strun', category: 'primary',
      type: 'Shotgun (Semi-Auto)', mastery_rank: 0, disposition: 1.45, family: 'mk1-strun',
      image: 'https://wiki.warframe.com/images/Strun.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'mutalist-cernos', name: 'Mutalist Cernos', category: 'primary',
      type: 'Bow (Semi-Auto)', mastery_rank: 7, disposition: 1.35, family: 'mutalist-cernos',
      image: 'https://wiki.warframe.com/images/MutalistCernos.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial', magazine_capacity: 'beneficial' },
    },
    {
      slug: 'mutalist-quanta', name: 'Mutalist Quanta', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 2, disposition: 1.5, family: 'mutalist-quanta',
      image: 'https://wiki.warframe.com/images/MutalistQuanta.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'nagantaka', name: 'Nagantaka', category: 'primary',
      type: 'Crossbow (Semi-Auto)', mastery_rank: 9, disposition: 1.3, family: 'nagantaka',
      image: 'https://wiki.warframe.com/images/Nagantaka.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'nagantaka-prime', name: 'Nagantaka Prime', category: 'primary',
      type: 'Crossbow (Semi-Auto)', mastery_rank: 12, disposition: 1.15, family: 'nagantaka',
      image: 'https://wiki.warframe.com/images/NagantakaPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'nataruk', name: 'Nataruk', category: 'primary',
      type: 'Bow (Semi-Auto)', mastery_rank: 0, disposition: 0.65, family: 'nataruk',
      image: 'https://wiki.warframe.com/images/Nataruk.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial', magazine_capacity: 'beneficial' },
    },
    {
      slug: 'ogris', name: 'Ogris', category: 'primary',
      type: 'Launcher (Charge)', mastery_rank: 9, disposition: 1.3, family: 'ogris',
      image: 'https://wiki.warframe.com/images/Ogris.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'opticor', name: 'Opticor', category: 'primary',
      type: 'Rifle (Charge)', mastery_rank: 14, disposition: 1.15, family: 'opticor',
      image: 'https://wiki.warframe.com/images/Opticor.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'opticor-vandal', name: 'Opticor Vandal', category: 'primary',
      type: 'Rifle (Charge)', mastery_rank: 14, disposition: 1.1, family: 'opticor',
      image: 'https://wiki.warframe.com/images/OpticorVandal.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'panthera', name: 'Panthera', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 7, disposition: 1.4, family: 'panthera',
      image: 'https://wiki.warframe.com/images/Panthera.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'panthera-prime', name: 'Panthera Prime', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 14, disposition: 1.25, family: 'panthera',
      image: 'https://wiki.warframe.com/images/PantheraPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'paracyst', name: 'Paracyst', category: 'primary',
      type: 'Rifle (Burst)', mastery_rank: 7, disposition: 1.31, family: 'paracyst',
      image: 'https://wiki.warframe.com/images/Paracyst.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'paris', name: 'Paris', category: 'primary',
      type: 'Bow (Semi-Auto)', mastery_rank: 0, disposition: 1.4, family: 'paris',
      image: 'https://wiki.warframe.com/images/Paris.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial', magazine_capacity: 'beneficial' },
    },
    {
      slug: 'paris-prime', name: 'Paris Prime', category: 'primary',
      type: 'Bow (Semi-Auto)', mastery_rank: 8, disposition: 1.35, family: 'paris',
      image: 'https://wiki.warframe.com/images/ParisPrime.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial', magazine_capacity: 'beneficial' },
    },
    {
      slug: 'penta', name: 'Penta', category: 'primary',
      type: 'Launcher (Active)', mastery_rank: 6, disposition: 1.35, family: 'penta',
      image: 'https://wiki.warframe.com/images/Penta.png',
      preferred_positive: { damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
      wasted_positive:    { multishot: 'C' },
      notes: {
        en: 'Grenade launcher with 5-grenade field cap — +Multishot is WASTED because extra grenades evict your own.',
        'pt-BR': 'Lançador com cap de 5 granadas no campo — +Multishot é DESPERDIÇADO porque granadas extras eliminam as suas próprias.',
      },
    },
    {
      slug: 'perigale', name: 'Perigale', category: 'primary',
      type: 'Sniper Rifle (Burst)', mastery_rank: 8, disposition: 1.15, family: 'perigale',
      image: 'https://wiki.warframe.com/images/Perigale.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'S' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial', magazine_capacity: 'beneficial' },
    },
    {
      slug: 'perigale-prime', name: 'Perigale Prime', category: 'primary',
      type: 'Sniper Rifle (Burst)', mastery_rank: 14, disposition: 0.5, family: 'perigale',
      image: 'https://wiki.warframe.com/images/PerigalePrime.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'S' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial', magazine_capacity: 'beneficial' },
    },
    {
      slug: 'phage', name: 'Phage', category: 'primary',
      type: 'Beam Shotgun', mastery_rank: 11, disposition: 1.46, family: 'phage',
      image: 'https://wiki.warframe.com/images/Phage.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'phantasma', name: 'Phantasma', category: 'primary',
      type: 'Beam Shotgun', mastery_rank: 9, disposition: 1.1, family: 'phantasma',
      image: 'https://wiki.warframe.com/images/Phantasma.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'phantasma-prime', name: 'Phantasma Prime', category: 'primary',
      type: 'Beam Shotgun', mastery_rank: 14, disposition: 0.8, family: 'phantasma',
      image: 'https://wiki.warframe.com/images/PhantasmaPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', status_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
      notes: {
        en: 'Beam shotgun with high innate status — Multishot doubles procs, Damage scales everything.',
        'pt-BR': 'Escopeta feixe com alta chance de status — Multishot dobra procs, Dano escala tudo.',
      },
    },
    {
      slug: 'phenmor', name: 'Phenmor', category: 'primary',
      type: 'Rifle (Semi)', mastery_rank: 14, disposition: 0.6, family: 'phenmor',
      image: 'https://wiki.warframe.com/images/Phenmor.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
      notes: {
        en: 'Quest-locked Incarnon rifle — Multishot/Crit Chance/Crit Damage carry the AoE form.',
        'pt-BR': 'Rifle Incarnon liberado por quest — Multishot/Chance de Crítico/Dano Crítico carregam o modo AoE.',
      },
    },
    {
      slug: 'prisma-gorgon', name: 'Prisma Gorgon', category: 'primary',
      type: 'Rifle (Auto Charge)', mastery_rank: 11, disposition: 1.3, family: 'gorgon',
      image: 'https://wiki.warframe.com/images/PrismaGorgon.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'prisma-grakata', name: 'Prisma Grakata', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 11, disposition: 1.3, family: 'grakata',
      image: 'https://wiki.warframe.com/images/PrismaGrakata.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'prisma-grinlok', name: 'Prisma Grinlok', category: 'primary',
      type: 'Rifle (Semi-Auto)', mastery_rank: 11, disposition: 1.25, family: 'grinlok',
      image: 'https://wiki.warframe.com/images/PrismaGrinlok.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'prisma-lenz', name: 'Prisma Lenz', category: 'primary',
      type: 'Bow (Charge)', mastery_rank: 12, disposition: 1.0, family: 'lenz',
      image: 'https://wiki.warframe.com/images/PrismaLenz.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial', magazine_capacity: 'beneficial' },
    },
    {
      slug: 'prisma-tetra', name: 'Prisma Tetra', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 4, disposition: 1.45, family: 'tetra',
      image: 'https://wiki.warframe.com/images/PrismaTetra.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'proboscis-cernos', name: 'Proboscis Cernos', category: 'primary',
      type: 'Bow (Charge)', mastery_rank: 15, disposition: 0.9, family: 'proboscis-cernos',
      image: 'https://wiki.warframe.com/images/ProboscisCernos.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial', magazine_capacity: 'beneficial' },
    },
    {
      slug: 'purgator-1', name: 'Purgator 1', category: 'primary',
      type: 'Rifle (Semi-Auto)', mastery_rank: 14, disposition: 1.1, family: 'purgator-1',
      image: 'https://wiki.warframe.com/images/Purgator1.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'quanta', name: 'Quanta', category: 'primary',
      type: 'Beam Rifle', mastery_rank: 4, disposition: 1.4, family: 'quanta',
      image: 'https://wiki.warframe.com/images/Quanta.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'quanta-vandal', name: 'Quanta Vandal', category: 'primary',
      type: 'Beam Rifle', mastery_rank: 10, disposition: 1.4, family: 'quanta',
      image: 'https://wiki.warframe.com/images/QuantaVandal.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'quartakk', name: 'Quartakk', category: 'primary',
      type: 'Rifle (Burst)', mastery_rank: 10, disposition: 1.25, family: 'quartakk',
      image: 'https://wiki.warframe.com/images/Quartakk.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'quellor', name: 'Quellor', category: 'primary',
      type: 'Rifle (Auto Charge)', mastery_rank: 12, disposition: 1.15, family: 'quellor',
      image: 'https://wiki.warframe.com/images/Quellor.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'rakta-cernos', name: 'Rakta Cernos', category: 'primary',
      type: 'Bow (Semi-Auto)', mastery_rank: 12, disposition: 1.25, family: 'cernos',
      image: 'https://wiki.warframe.com/images/RaktaCernos.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial', magazine_capacity: 'beneficial' },
    },
    {
      slug: 'rauta', name: 'Rauta', category: 'primary',
      type: 'Shotgun (Semi-Auto)', mastery_rank: 8, disposition: 1.1, family: 'rauta',
      image: 'https://wiki.warframe.com/images/Rauta.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'reconifex', name: 'Reconifex', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 14, disposition: 0.95, family: 'reconifex',
      image: 'https://wiki.warframe.com/images/Reconifex.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'rubico', name: 'Rubico', category: 'primary',
      type: 'Sniper Rifle (Semi-Auto)', mastery_rank: 6, disposition: 0.95, family: 'rubico',
      image: 'https://wiki.warframe.com/images/Rubico.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'S' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial', magazine_capacity: 'beneficial' },
    },
    {
      slug: 'rubico-prime', name: 'Rubico Prime', category: 'primary',
      type: 'Sniper Rifle (Semi-Auto)', mastery_rank: 12, disposition: 0.7, family: 'rubico',
      image: 'https://wiki.warframe.com/images/RubicoPrime.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'S' },
      preferred_negative: { recoil: 'beneficial', magazine_capacity: 'beneficial', zoom: 'beneficial' },
      notes: {
        en: 'Top-tier crit sniper — Multishot/Crit Chance/Crit Damage all S-tier. −Magazine free since you reload anyway.',
        'pt-BR': 'Sniper de crítico top tier — Multishot/Chance/Dano de Crítico todos S. −Carregador grátis porque você recarrega de qualquer jeito.',
      },
    },
    {
      slug: 'sancti-tigris', name: 'Sancti Tigris', category: 'primary',
      type: 'Shotgun (Duplex)', mastery_rank: 12, disposition: 1.0, family: 'tigris',
      image: 'https://wiki.warframe.com/images/SanctiTigris.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'scourge', name: 'Scourge', category: 'primary',
      type: 'Speargun (Semi)', mastery_rank: 6, disposition: 1.2, family: 'scourge',
      image: 'https://wiki.warframe.com/images/Scourge.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'scourge-prime', name: 'Scourge Prime', category: 'primary',
      type: 'Speargun (Semi)', mastery_rank: 14, disposition: 1.1, family: 'scourge',
      image: 'https://wiki.warframe.com/images/ScourgePrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'secura-penta', name: 'Secura Penta', category: 'primary',
      type: 'Launcher (Active)', mastery_rank: 12, disposition: 1.3, family: 'penta',
      image: 'https://wiki.warframe.com/images/SecuraPenta.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'shedu', name: 'Shedu', category: 'primary',
      type: 'Arm-Cannon (Auto)', mastery_rank: 13, disposition: 0.75, family: 'shedu',
      image: 'https://wiki.warframe.com/images/Shedu.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'simulor', name: 'Simulor', category: 'primary',
      type: 'Rifle (Active)', mastery_rank: 5, disposition: 1.25, family: 'simulor',
      image: 'https://wiki.warframe.com/images/Simulor.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'snipetron', name: 'Snipetron', category: 'primary',
      type: 'Sniper Rifle (Semi-Auto)', mastery_rank: 0, disposition: 1.3, family: 'snipetron',
      image: 'https://wiki.warframe.com/images/Snipetron.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'S' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial', magazine_capacity: 'beneficial' },
    },
    {
      slug: 'snipetron-vandal', name: 'Snipetron Vandal', category: 'primary',
      type: 'Sniper Rifle (Semi-Auto)', mastery_rank: 5, disposition: 1.25, family: 'snipetron',
      image: 'https://wiki.warframe.com/images/SnipetronVandal.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'S' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial', magazine_capacity: 'beneficial' },
    },
    {
      slug: 'sobek', name: 'Sobek', category: 'primary',
      type: 'Shotgun (Auto)', mastery_rank: 7, disposition: 1.33, family: 'sobek',
      image: 'https://wiki.warframe.com/images/Sobek.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'soma', name: 'Soma', category: 'primary',
      type: 'Rifle (Auto-Spool)', mastery_rank: 6, disposition: 1.15, family: 'soma',
      image: 'https://wiki.warframe.com/images/Soma.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'soma-prime', name: 'Soma Prime', category: 'primary',
      type: 'Rifle (Auto-Spool)', mastery_rank: 7, disposition: 1.1, family: 'soma',
      image: 'https://wiki.warframe.com/images/SomaPrime.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', damage: 'S' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
      notes: {
        en: 'Crit auto rifle — Multishot/Crit Chance/Damage all top tier picks.',
        'pt-BR': 'Rifle automático de crítico — Multishot/Chance de Crítico/Dano são picks top tier.',
      },
    },
    {
      slug: 'sporothrix', name: 'Sporothrix', category: 'primary',
      type: 'Sniper Rifle (Semi-Auto)', mastery_rank: 13, disposition: 1.3, family: 'sporothrix',
      image: 'https://wiki.warframe.com/images/Sporothrix.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'S' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial', magazine_capacity: 'beneficial' },
    },
    {
      slug: 'stahlta', name: 'Stahlta', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 10, disposition: 1.05, family: 'stahlta',
      image: 'https://wiki.warframe.com/images/Stahlta.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'steflos', name: 'Steflos', category: 'primary',
      type: 'Shotgun (Semi-Auto)', mastery_rank: 8, disposition: 1.25, family: 'steflos',
      image: 'https://wiki.warframe.com/images/Steflos.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'stradavar', name: 'Stradavar', category: 'primary',
      type: 'Rifle (Semi-Auto)', mastery_rank: 8, disposition: 1.1, family: 'stradavar',
      image: 'https://wiki.warframe.com/images/Stradavar.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'stradavar-prime', name: 'Stradavar Prime', category: 'primary',
      type: 'Rifle (Semi-Auto)', mastery_rank: 12, disposition: 1.1, family: 'stradavar',
      image: 'https://wiki.warframe.com/images/StradavarPrime.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'strun', name: 'Strun', category: 'primary',
      type: 'Shotgun (Semi-Auto)', mastery_rank: 1, disposition: 1.4, family: 'strun',
      image: 'https://wiki.warframe.com/images/Strun.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'strun-prime', name: 'Strun Prime', category: 'primary',
      type: 'Shotgun (Semi-Auto)', mastery_rank: 14, disposition: 1.2, family: 'strun',
      image: 'https://wiki.warframe.com/images/StrunPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'strun-wraith', name: 'Strun Wraith', category: 'primary',
      type: 'Shotgun (Semi-Auto)', mastery_rank: 10, disposition: 1.35, family: 'strun',
      image: 'https://wiki.warframe.com/images/StrunWraith.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'supra', name: 'Supra', category: 'primary',
      type: 'Rifle (Auto-Spool)', mastery_rank: 12, disposition: 1.1, family: 'supra',
      image: 'https://wiki.warframe.com/images/Supra.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'supra-vandal', name: 'Supra Vandal', category: 'primary',
      type: 'Rifle (Auto-Spool)', mastery_rank: 14, disposition: 1.0, family: 'supra',
      image: 'https://wiki.warframe.com/images/SupraVandal.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'sybaris', name: 'Sybaris', category: 'primary',
      type: 'Rifle (Burst)', mastery_rank: 5, disposition: 1.3, family: 'sybaris',
      image: 'https://wiki.warframe.com/images/Sybaris.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'sybaris-prime', name: 'Sybaris Prime', category: 'primary',
      type: 'Rifle (Burst)', mastery_rank: 12, disposition: 1.2, family: 'sybaris',
      image: 'https://wiki.warframe.com/images/SybarisPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'synapse', name: 'Synapse', category: 'primary',
      type: 'Beam Rifle', mastery_rank: 11, disposition: 1.31, family: 'synapse',
      image: 'https://wiki.warframe.com/images/Synapse.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'synoid-simulor', name: 'Synoid Simulor', category: 'primary',
      type: 'Rifle (Active)', mastery_rank: 12, disposition: 1.2, family: 'simulor',
      image: 'https://wiki.warframe.com/images/SynoidSimulor.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'telos-boltor', name: 'Telos Boltor', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 12, disposition: 1.2, family: 'boltor',
      image: 'https://wiki.warframe.com/images/TelosBoltor.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'tenet-arca-plasmor', name: 'Tenet Arca Plasmor', category: 'primary',
      type: 'Shotgun (Semi-Auto)', mastery_rank: 16, disposition: 0.55, family: 'tenet-arca-plasmor',
      image: 'https://wiki.warframe.com/images/TenetArcaPlasmor.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'tenet-envoy', name: 'Tenet Envoy', category: 'primary',
      type: 'Launcher (Auto)', mastery_rank: 16, disposition: 0.65, family: 'tenet-envoy',
      image: 'https://wiki.warframe.com/images/TenetEnvoy.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'tenet-ferrox', name: 'Tenet Ferrox', category: 'primary',
      type: 'Speargun (Semi)', mastery_rank: 16, disposition: 1.15, family: 'tenet-ferrox',
      image: 'https://wiki.warframe.com/images/TenetFerrox.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'tenet-flux-rifle', name: 'Tenet Flux Rifle', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 16, disposition: 1.2, family: 'tenet-flux-rifle',
      image: 'https://wiki.warframe.com/images/TenetFluxRifle.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'tenet-glaxion', name: 'Tenet Glaxion', category: 'primary',
      type: 'Beam Rifle', mastery_rank: 16, disposition: 0.65, family: 'tenet-glaxion',
      image: 'https://wiki.warframe.com/images/TenetGlaxion.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'tenet-quanta', name: 'Tenet Quanta', category: 'primary',
      type: 'Beam Rifle', mastery_rank: 16, disposition: 0.5, family: 'tenet-quanta',
      image: 'https://wiki.warframe.com/images/TenetQuanta.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'tenet-tetra', name: 'Tenet Tetra', category: 'primary',
      type: 'Rifle (Semi-Auto)', mastery_rank: 16, disposition: 1.25, family: 'tenet-tetra',
      image: 'https://wiki.warframe.com/images/TenetTetra.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'tenora', name: 'Tenora', category: 'primary',
      type: 'Rifle (Auto-Spool)', mastery_rank: 10, disposition: 1.1, family: 'tenora',
      image: 'https://wiki.warframe.com/images/Tenora.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'tenora-prime', name: 'Tenora Prime', category: 'primary',
      type: 'Rifle (Auto-Spool)', mastery_rank: 14, disposition: 1.05, family: 'tenora',
      image: 'https://wiki.warframe.com/images/TenoraPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'tetra', name: 'Tetra', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 3, disposition: 1.5, family: 'tetra',
      image: 'https://wiki.warframe.com/images/Tetra.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'thornbak', name: 'Thornbak', category: 'primary',
      type: 'Rifle (Burst)', mastery_rank: 0, disposition: 1.1, family: 'thornbak',
      image: 'https://wiki.warframe.com/images/Thornbak.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'tiberon', name: 'Tiberon', category: 'primary',
      type: 'Rifle (Burst)', mastery_rank: 10, disposition: 1.1, family: 'tiberon',
      image: 'https://wiki.warframe.com/images/Tiberon.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'tiberon-prime', name: 'Tiberon Prime', category: 'primary',
      type: 'Rifle (Burst / Semi / Auto)', mastery_rank: 14, disposition: 1.0, family: 'tiberon',
      image: 'https://wiki.warframe.com/images/TiberonPrime.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
      notes: {
        en: 'Versatile triple-mode rifle — Multishot/Crit Chance/Crit Damage shine in all modes.',
        'pt-BR': 'Rifle de três modos versátil — Multishot/Chance de Crítico/Dano Crítico brilham em todos.',
      },
    },
    {
      slug: 'tigris', name: 'Tigris', category: 'primary',
      type: 'Shotgun (Duplex)', mastery_rank: 7, disposition: 1.1, family: 'tigris',
      image: 'https://wiki.warframe.com/images/Tigris.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'tigris-prime', name: 'Tigris Prime', category: 'primary',
      type: 'Shotgun (Duplex)', mastery_rank: 13, disposition: 0.95, family: 'tigris',
      image: 'https://wiki.warframe.com/images/TigrisPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
      notes: {
        en: 'Double-barrel shotgun — Multishot/Damage explode burst damage per pull.',
        'pt-BR': 'Escopeta de cano duplo — Multishot/Dano explodem o tiro burst.',
      },
    },
    {
      slug: 'tonkor', name: 'Tonkor', category: 'primary',
      type: 'Launcher (Semi-Auto)', mastery_rank: 5, disposition: 1.3, family: 'tonkor',
      image: 'https://wiki.warframe.com/images/Tonkor.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'torid', name: 'Torid', category: 'primary',
      type: 'Launcher (Held)', mastery_rank: 4, disposition: 1.3, family: 'torid',
      image: 'https://wiki.warframe.com/images/Torid.png',
      preferred_positive: { multishot: 'S', damage: 'S', status_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
      notes: {
        en: 'Toxin AoE launcher with Incarnon evolution — Multishot/Damage/Status Chance carry.',
        'pt-BR': 'Lançador tóxico AoE com evolução Incarnon — Multishot/Dano/Chance de Status carregam.',
      },
    },
    {
      slug: 'trumna', name: 'Trumna', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 13, disposition: 0.85, family: 'trumna',
      image: 'https://wiki.warframe.com/images/Trumna.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'trumna-prime', name: 'Trumna Prime', category: 'primary',
      type: 'Rifle (Auto)', mastery_rank: 15, disposition: 0.65, family: 'trumna',
      image: 'https://wiki.warframe.com/images/TrumnaPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'vadarya-prime', name: 'Vadarya Prime', category: 'primary',
      type: 'Sniper Rifle (Charge)', mastery_rank: 15, disposition: 0.65, family: 'vadarya',
      image: 'https://wiki.warframe.com/images/VadaryaPrime.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'S' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial', magazine_capacity: 'beneficial' },
    },
    {
      slug: 'vaykor-hek', name: 'Vaykor Hek', category: 'primary',
      type: 'Shotgun (Semi-Auto)', mastery_rank: 12, disposition: 1.15, family: 'hek',
      image: 'https://wiki.warframe.com/images/VaykorHek.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'vectis', name: 'Vectis', category: 'primary',
      type: 'Sniper Rifle (Semi-Auto)', mastery_rank: 2, disposition: 1.15, family: 'vectis',
      image: 'https://wiki.warframe.com/images/Vectis.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'S' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial', magazine_capacity: 'beneficial' },
    },
    {
      slug: 'vectis-prime', name: 'Vectis Prime', category: 'primary',
      type: 'Sniper Rifle (Semi-Auto)', mastery_rank: 14, disposition: 1.0, family: 'vectis',
      image: 'https://wiki.warframe.com/images/VectisPrime.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'S' },
      preferred_negative: { recoil: 'beneficial', magazine_capacity: 'beneficial' },
      notes: {
        en: '2-shot sniper — Multishot/Crit Chance/Crit Damage are king. −Magazine is genuinely FREE (only 2 shots before reload anyway).',
        'pt-BR': 'Sniper de 2 tiros — Multishot/Crit Chance/Crit Damage são reis. −Carregador é genuinamente GRÁTIS (só 2 tiros antes da recarga).',
      },
    },
    {
      slug: 'veldt', name: 'Veldt', category: 'primary',
      type: 'Rifle (Semi-Auto)', mastery_rank: 8, disposition: 1.3, family: 'veldt',
      image: 'https://wiki.warframe.com/images/Veldt.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'vinquibus-primary', name: 'Vinquibus (Primary)', category: 'primary',
      type: 'Rifle (Semi-Auto)', mastery_rank: 14, disposition: 0.6, family: 'vinquibus-primary',
      image: 'https://wiki.warframe.com/images/Vinquibus.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'vulkar', name: 'Vulkar', category: 'primary',
      type: 'Sniper Rifle (Semi-Auto)', mastery_rank: 3, disposition: 1.45, family: 'vulkar',
      image: 'https://wiki.warframe.com/images/Vulkar.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'S' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial', magazine_capacity: 'beneficial' },
    },
    {
      slug: 'vulkar-wraith', name: 'Vulkar Wraith', category: 'primary',
      type: 'Sniper Rifle (Semi-Auto)', mastery_rank: 7, disposition: 1.4, family: 'vulkar',
      image: 'https://wiki.warframe.com/images/VulkarWraith.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'S' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial', magazine_capacity: 'beneficial' },
    },
    {
      slug: 'zarr', name: 'Zarr', category: 'primary',
      type: 'Launcher (Semi-Auto)', mastery_rank: 7, disposition: 1.15, family: 'zarr',
      image: 'https://wiki.warframe.com/images/Zarr.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'zenith', name: 'Zenith', category: 'primary',
      type: 'Rifle (Semi-Auto)', mastery_rank: 10, disposition: 1.1, family: 'zenith',
      image: 'https://wiki.warframe.com/images/Zenith.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'zhuge', name: 'Zhuge', category: 'primary',
      type: 'Crossbow (Auto)', mastery_rank: 10, disposition: 1.2, family: 'zhuge',
      image: 'https://wiki.warframe.com/images/Zhuge.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'zhuge-prime', name: 'Zhuge Prime', category: 'primary',
      type: 'Crossbow (Auto)', mastery_rank: 14, disposition: 1.15, family: 'zhuge',
      image: 'https://wiki.warframe.com/images/ZhugePrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
  ],
  secondary: [
    {
      slug: 'acrid', name: 'Acrid', category: 'secondary',
      type: 'Pistol (Semi-Auto)', mastery_rank: 7, disposition: 1.33, family: 'acrid',
      image: 'https://wiki.warframe.com/images/Acrid.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'aegrit', name: 'Aegrit', category: 'secondary',
      type: 'Thrown (Active)', mastery_rank: 11, disposition: 1.0, family: 'aegrit',
      image: 'https://wiki.warframe.com/images/Aegrit.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'afuris', name: 'Afuris', category: 'secondary',
      type: 'Dual Pistols (Auto)', mastery_rank: 4, disposition: 1.45, family: 'afuris',
      image: 'https://wiki.warframe.com/images/Afuris.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'afuris-prime', name: 'Afuris Prime', category: 'secondary',
      type: 'Dual Pistols (Auto)', mastery_rank: 12, disposition: 1.1, family: 'afuris',
      image: 'https://wiki.warframe.com/images/AfurisPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'akarius', name: 'Akarius', category: 'secondary',
      type: 'Dual Pistols (Burst)', mastery_rank: 8, disposition: 1.05, family: 'akarius',
      image: 'https://wiki.warframe.com/images/Akarius.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'akarius-prime', name: 'Akarius Prime', category: 'secondary',
      type: 'Dual Pistols (Burst)', mastery_rank: 14, disposition: 0.65, family: 'akarius',
      image: 'https://wiki.warframe.com/images/AkariusPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'akbolto', name: 'Akbolto', category: 'secondary',
      type: 'Dual Pistols (Semi-Auto)', mastery_rank: 8, disposition: 1.3, family: 'akbolto',
      image: 'https://wiki.warframe.com/images/Akbolto.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'akbolto-prime', name: 'Akbolto Prime', category: 'secondary',
      type: 'Dual Pistols (Semi-Auto)', mastery_rank: 13, disposition: 1.2, family: 'akbolto',
      image: 'https://wiki.warframe.com/images/AkboltoPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'akbronco', name: 'Akbronco', category: 'secondary',
      type: 'Dual Shotguns (Semi-Auto)', mastery_rank: 2, disposition: 1.35, family: 'akbronco',
      image: 'https://wiki.warframe.com/images/Akbronco.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'akbronco-prime', name: 'Akbronco Prime', category: 'secondary',
      type: 'Dual Shotguns (Semi-Auto)', mastery_rank: 10, disposition: 1.3, family: 'akbronco',
      image: 'https://wiki.warframe.com/images/AkbroncoPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'akjagara', name: 'Akjagara', category: 'secondary',
      type: 'Dual Pistols (Burst)', mastery_rank: 8, disposition: 1.1, family: 'akjagara',
      image: 'https://wiki.warframe.com/images/Akjagara.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'akjagara-prime', name: 'Akjagara Prime', category: 'secondary',
      type: 'Dual Pistols (Burst)', mastery_rank: 12, disposition: 1.0, family: 'akjagara',
      image: 'https://wiki.warframe.com/images/AkjagaraPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'aklato', name: 'Aklato', category: 'secondary',
      type: 'Dual Pistols (Semi-Auto)', mastery_rank: 3, disposition: 1.52, family: 'aklato',
      image: 'https://wiki.warframe.com/images/Aklato.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'aklex', name: 'Aklex', category: 'secondary',
      type: 'Dual Pistols (Semi-Auto)', mastery_rank: 4, disposition: 1.05, family: 'aklex',
      image: 'https://wiki.warframe.com/images/Aklex.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'aklex-prime', name: 'Aklex Prime', category: 'secondary',
      type: 'Dual Pistols (Semi-Auto)', mastery_rank: 15, disposition: 0.95, family: 'aklex',
      image: 'https://wiki.warframe.com/images/AklexPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'akmagnus', name: 'Akmagnus', category: 'secondary',
      type: 'Dual Pistols (Semi-Auto)', mastery_rank: 12, disposition: 1.35, family: 'akmagnus',
      image: 'https://wiki.warframe.com/images/Akmagnus.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'akmagnus-prime', name: 'Akmagnus Prime', category: 'secondary',
      type: 'Dual Pistols (Semi-Auto)', mastery_rank: 15, disposition: 1.1, family: 'akmagnus',
      image: 'https://wiki.warframe.com/images/AkmagnusPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'aksomati', name: 'Aksomati', category: 'secondary',
      type: 'Dual Pistols (Auto-Spool)', mastery_rank: 9, disposition: 1.25, family: 'aksomati',
      image: 'https://wiki.warframe.com/images/Aksomati.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'aksomati-prime', name: 'Aksomati Prime', category: 'secondary',
      type: 'Dual Pistols (Auto-Spool)', mastery_rank: 12, disposition: 1.05, family: 'aksomati',
      image: 'https://wiki.warframe.com/images/AksomatiPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'akstiletto', name: 'Akstiletto', category: 'secondary',
      type: 'Dual Pistols (Auto)', mastery_rank: 8, disposition: 0.95, family: 'akstiletto',
      image: 'https://wiki.warframe.com/images/Akstiletto.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'akstiletto-prime', name: 'Akstiletto Prime', category: 'secondary',
      type: 'Dual Pistols (Auto)', mastery_rank: 10, disposition: 0.85, family: 'akstiletto',
      image: 'https://wiki.warframe.com/images/AkstilettoPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'akvasto', name: 'Akvasto', category: 'secondary',
      type: 'Dual Pistols (Semi-Auto)', mastery_rank: 8, disposition: 1.25, family: 'akvasto',
      image: 'https://wiki.warframe.com/images/Akvasto.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'akvasto-prime', name: 'Akvasto Prime', category: 'secondary',
      type: 'Dual Pistols (Semi-Auto)', mastery_rank: 12, disposition: 1.2, family: 'akvasto',
      image: 'https://wiki.warframe.com/images/AkvastoPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'akzani', name: 'Akzani', category: 'secondary',
      type: 'Dual Pistols (Auto)', mastery_rank: 4, disposition: 1.52, family: 'akzani',
      image: 'https://wiki.warframe.com/images/Akzani.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'angstrum', name: 'Angstrum', category: 'secondary',
      type: 'Pistol (Auto)', mastery_rank: 4, disposition: 1.35, family: 'angstrum',
      image: 'https://wiki.warframe.com/images/Angstrum.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'arca-scisco', name: 'Arca Scisco', category: 'secondary',
      type: 'Pistol (Semi-Auto)', mastery_rank: 10, disposition: 1.1, family: 'arca-scisco',
      image: 'https://wiki.warframe.com/images/ArcaScisco.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'athodai', name: 'Athodai', category: 'secondary',
      type: 'Pistol (Auto)', mastery_rank: 10, disposition: 1.05, family: 'athodai',
      image: 'https://wiki.warframe.com/images/Athodai.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'athodai-prime', name: 'Athodai Prime', category: 'secondary',
      type: 'Pistol (Auto)', mastery_rank: 10, disposition: 0.5, family: 'athodai',
      image: 'https://wiki.warframe.com/images/AthodaiPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'atomos', name: 'Atomos', category: 'secondary',
      type: 'Pistol (Semi-Auto)', mastery_rank: 5, disposition: 0.95, family: 'atomos',
      image: 'https://wiki.warframe.com/images/Atomos.png',
      preferred_positive: { multishot: 'S', damage: 'S', status_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
      notes: {
        en: 'Chain beam pistol — Multishot doubles procs across linked targets, Status Chance maxes proc rate.',
        'pt-BR': 'Pistola feixe com cadeia — Multishot dobra procs nos alvos conectados, Chance de Status maximiza taxa de proc.',
      },
    },
    {
      slug: 'azima', name: 'Azima', category: 'secondary',
      type: 'Pistol (Auto)', mastery_rank: 6, disposition: 1.25, family: 'azima',
      image: 'https://wiki.warframe.com/images/Azima.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'ballistica', name: 'Ballistica', category: 'secondary',
      type: 'Crossbow (Burst / Charge)', mastery_rank: 2, disposition: 1.25, family: 'ballistica',
      image: 'https://wiki.warframe.com/images/Ballistica.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'ballistica-prime', name: 'Ballistica Prime', category: 'secondary',
      type: 'Crossbow (Charge)', mastery_rank: 14, disposition: 1.2, family: 'ballistica',
      image: 'https://wiki.warframe.com/images/BallisticaPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'bolto', name: 'Bolto', category: 'secondary',
      type: 'Pistol (Semi-Auto)', mastery_rank: 7, disposition: 1.51, family: 'bolto',
      image: 'https://wiki.warframe.com/images/Bolto.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'brakk', name: 'Brakk', category: 'secondary',
      type: 'Shotgun Sidearm (Semi-Auto)', mastery_rank: 6, disposition: 1.25, family: 'brakk',
      image: 'https://wiki.warframe.com/images/Brakk.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'S' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
      notes: {
        en: 'Crit-focused shotgun pistol — Multishot, Damage and Crit Chance are all top tier.',
        'pt-BR': 'Pistola escopeta focada em crítico — Multishot, Dano e Chance de Crítico são todos top-tier.',
      },
    },
    {
      slug: 'bronco', name: 'Bronco', category: 'secondary',
      type: 'Shotgun Sidearm (Semi-Auto)', mastery_rank: 0, disposition: 1.45, family: 'bronco',
      image: 'https://wiki.warframe.com/images/Bronco.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'bronco-prime', name: 'Bronco Prime', category: 'secondary',
      type: 'Shotgun Sidearm (Semi-Auto)', mastery_rank: 4, disposition: 1.4, family: 'bronco',
      image: 'https://wiki.warframe.com/images/BroncoPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'cantare', name: 'Cantare', category: 'secondary',
      type: 'Thrown (Auto)', mastery_rank: 10, disposition: 1.05, family: 'cantare',
      image: 'https://wiki.warframe.com/images/Cantare.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'castanas', name: 'Castanas', category: 'secondary',
      type: 'Thrown (Active)', mastery_rank: 3, disposition: 1.4, family: 'castanas',
      image: 'https://wiki.warframe.com/images/Castanas.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'catabolyst', name: 'Catabolyst', category: 'secondary',
      type: 'Beam Pistol', mastery_rank: 11, disposition: 1.2, family: 'catabolyst',
      image: 'https://wiki.warframe.com/images/Catabolyst.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'cestra', name: 'Cestra', category: 'secondary',
      type: 'Pistol (Auto)', mastery_rank: 4, disposition: 1.52, family: 'cestra',
      image: 'https://wiki.warframe.com/images/Cestra.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'coda-catabolyst', name: 'Coda Catabolyst', category: 'secondary',
      type: 'Beam Pistol', mastery_rank: 17, disposition: 0.65, family: 'coda-catabolyst',
      image: 'https://wiki.warframe.com/images/CodaCatabolyst.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'coda-pox', name: 'Coda Pox', category: 'secondary',
      type: 'Thrown (Auto)', mastery_rank: 17, disposition: 1.0, family: 'coda-pox',
      image: 'https://wiki.warframe.com/images/CodaPox.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'coda-tysis', name: 'Coda Tysis', category: 'secondary',
      type: 'Pistol (Semi-Auto)', mastery_rank: 17, disposition: 1.0, family: 'coda-tysis',
      image: 'https://wiki.warframe.com/images/CodaTysis.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'cyanex', name: 'Cyanex', category: 'secondary',
      type: 'Pistol (Mag Burst)', mastery_rank: 8, disposition: 1.0, family: 'cyanex',
      image: 'https://wiki.warframe.com/images/Cyanex.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'cycron', name: 'Cycron', category: 'secondary',
      type: 'Beam Pistol', mastery_rank: 8, disposition: 1.2, family: 'cycron',
      image: 'https://wiki.warframe.com/images/Cycron.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'despair', name: 'Despair', category: 'secondary',
      type: 'Thrown (Auto)', mastery_rank: 4, disposition: 1.3, family: 'despair',
      image: 'https://wiki.warframe.com/images/Despair.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'detron', name: 'Detron', category: 'secondary',
      type: 'Shotgun Sidearm (Semi-Auto)', mastery_rank: 6, disposition: 1.15, family: 'detron',
      image: 'https://wiki.warframe.com/images/Detron.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'dex-furis', name: 'Dex Furis', category: 'secondary',
      type: 'Dual Pistols (Auto)', mastery_rank: 10, disposition: 1.39, family: 'dex-furis',
      image: 'https://wiki.warframe.com/images/DexFuris.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'dual-cestra', name: 'Dual Cestra', category: 'secondary',
      type: 'Dual Pistols (Auto)', mastery_rank: 7, disposition: 1.35, family: 'dual-cestra',
      image: 'https://wiki.warframe.com/images/DualCestra.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'dual-coda-torxica', name: 'Dual Coda Torxica', category: 'secondary',
      type: 'Dual Pistols (Auto)', mastery_rank: 17, disposition: 0.55, family: 'dual-coda-torxica',
      image: 'https://wiki.warframe.com/images/DualCodaTorxica.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'dual-toxocyst', name: 'Dual Toxocyst', category: 'secondary',
      type: 'Dual Pistols (Auto)', mastery_rank: 11, disposition: 1.35, family: 'dual-toxocyst',
      image: 'https://wiki.warframe.com/images/DualToxocyst.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'efv-8-mars', name: 'EFV-8 Mars', category: 'secondary',
      type: 'Pistol (Semi-Auto)', mastery_rank: 14, disposition: 1.05, family: 'efv-8-mars',
      image: 'https://wiki.warframe.com/images/EFV-8Mars.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'embolist', name: 'Embolist', category: 'secondary',
      type: 'Beam Pistol', mastery_rank: 9, disposition: 1.4, family: 'embolist',
      image: 'https://wiki.warframe.com/images/Embolist.png',
      preferred_positive: { multishot: 'S', damage: 'S', status_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
      notes: {
        en: 'High-disposition toxin beam — Multishot/Damage/Status Chance are the strongest picks.',
        'pt-BR': 'Feixe tóxico com disposição alta — Multishot/Dano/Chance de Status são picks fortes.',
      },
    },
    {
      slug: 'epitaph', name: 'Epitaph', category: 'secondary',
      type: 'Pistol (Charge)', mastery_rank: 8, disposition: 0.6, family: 'epitaph',
      image: 'https://wiki.warframe.com/images/Epitaph.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { recoil: 'beneficial', magazine_capacity: 'beneficial', zoom: 'beneficial' },
      notes: {
        en: 'Sniper-style pistol — Crit Chance and Crit Damage rule, Multishot carries. −Magazine is free (one-shot focus).',
        'pt-BR': 'Pistola estilo sniper — Chance de Crítico e Dano Crítico mandam, Multishot carrega. −Carregador é grátis (foco em 1 hit).',
      },
    },
    {
      slug: 'epitaph-prime', name: 'Epitaph Prime', category: 'secondary',
      type: 'Pistol (Charge)', mastery_rank: 14, disposition: 0.55, family: 'epitaph',
      image: 'https://wiki.warframe.com/images/EpitaphPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'euphona-prime', name: 'Euphona Prime', category: 'secondary',
      type: 'Shotgun Sidearm (Semi-Auto)', mastery_rank: 14, disposition: 0.95, family: 'euphona',
      image: 'https://wiki.warframe.com/images/EuphonaPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'furis', name: 'Furis', category: 'secondary',
      type: 'Beam Pistol', mastery_rank: 2, disposition: 1.35, family: 'furis',
      image: 'https://wiki.warframe.com/images/Furis.png',
      preferred_positive: { multishot: 'S', damage: 'S', fire_rate: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
      notes: {
        en: 'Basic auto pistol with very high disposition — a riven scales it dramatically.',
        'pt-BR': 'Pistola automática básica com disposição muito alta — um riven escala ela drasticamente.',
      },
    },
    {
      slug: 'fusilai', name: 'Fusilai', category: 'secondary',
      type: 'Thrown (Semi-Auto)', mastery_rank: 7, disposition: 1.35, family: 'fusilai',
      image: 'https://wiki.warframe.com/images/Fusilai.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'gammacor', name: 'Gammacor', category: 'secondary',
      type: 'Pistol (Semi-Auto)', mastery_rank: 2, disposition: 1.15, family: 'gammacor',
      image: 'https://wiki.warframe.com/images/Gammacor.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'grimoire', name: 'Grimoire', category: 'secondary',
      type: 'Tome (Auto)', mastery_rank: 10, disposition: 0.6, family: 'grimoire',
      image: 'https://wiki.warframe.com/images/Grimoire.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'hikou', name: 'Hikou', category: 'secondary',
      type: 'Thrown (Auto)', mastery_rank: 2, disposition: 1.3, family: 'hikou',
      image: 'https://wiki.warframe.com/images/Hikou.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'hikou-prime', name: 'Hikou Prime', category: 'secondary',
      type: 'Thrown (Auto)', mastery_rank: 4, disposition: 1.25, family: 'hikou',
      image: 'https://wiki.warframe.com/images/HikouPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'hystrix', name: 'Hystrix', category: 'secondary',
      type: 'Pistol (Auto)', mastery_rank: 7, disposition: 1.2, family: 'hystrix',
      image: 'https://wiki.warframe.com/images/Hystrix.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'hystrix-prime', name: 'Hystrix Prime', category: 'secondary',
      type: 'Pistol (Auto)', mastery_rank: 12, disposition: 1.0, family: 'hystrix',
      image: 'https://wiki.warframe.com/images/HystrixPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'knell', name: 'Knell', category: 'secondary',
      type: 'Pistol (Auto)', mastery_rank: 10, disposition: 1.25, family: 'knell',
      image: 'https://wiki.warframe.com/images/Knell.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'knell-prime', name: 'Knell Prime', category: 'secondary',
      type: 'Pistol (Auto)', mastery_rank: 14, disposition: 0.85, family: 'knell',
      image: 'https://wiki.warframe.com/images/KnellPrime.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
      notes: {
        en: 'Crit pistol scaling off headshots — Multishot/Crit Chance/Crit Damage are king.',
        'pt-BR': 'Pistola de crítico que escala com headshots — Multishot/Chance de Crítico/Dano Crítico dominam.',
      },
    },
    {
      slug: 'kohmak', name: 'Kohmak', category: 'secondary',
      type: 'Shotgun Sidearm (Auto-Spool)', mastery_rank: 5, disposition: 1.35, family: 'kohmak',
      image: 'https://wiki.warframe.com/images/Kohmak.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'kompressa', name: 'Kompressa', category: 'secondary',
      type: 'Pistol (Auto)', mastery_rank: 8, disposition: 1.15, family: 'kompressa',
      image: 'https://wiki.warframe.com/images/Kompressa.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'kompressa-prime', name: 'Kompressa Prime', category: 'secondary',
      type: 'Pistol (Auto)', mastery_rank: 13, disposition: 0.6, family: 'kompressa',
      image: 'https://wiki.warframe.com/images/KompressaPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'kraken', name: 'Kraken', category: 'secondary',
      type: 'Pistol (Burst)', mastery_rank: 0, disposition: 1.53, family: 'kraken',
      image: 'https://wiki.warframe.com/images/Kraken.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'kulstar', name: 'Kulstar', category: 'secondary',
      type: 'Pistol (Semi-Auto)', mastery_rank: 5, disposition: 1.3, family: 'kulstar',
      image: 'https://wiki.warframe.com/images/Kulstar.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'kunai', name: 'Kunai', category: 'secondary',
      type: 'Thrown (Auto)', mastery_rank: 0, disposition: 1.51, family: 'kunai',
      image: 'https://wiki.warframe.com/images/Kunai.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'kuva-brakk', name: 'Kuva Brakk', category: 'secondary',
      type: 'Shotgun Sidearm (Semi-Auto)', mastery_rank: 13, disposition: 0.9, family: 'kuva-brakk',
      image: 'https://wiki.warframe.com/images/KuvaBrakk.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
      notes: {
        en: 'High-crit shotgun pistol — Multishot, Damage and Crit Chance are the priority.',
        'pt-BR': 'Pistola escopeta de alto crítico — Multishot, Dano e Chance de Crítico são prioridade.',
      },
    },
    {
      slug: 'kuva-kraken', name: 'Kuva Kraken', category: 'secondary',
      type: 'Pistol (Mag Burst)', mastery_rank: 15, disposition: 1.1, family: 'kuva-kraken',
      image: 'https://wiki.warframe.com/images/KuvaKraken.png',
      preferred_positive: { multishot: 'S', damage: 'S', status_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
      notes: {
        en: 'Burst pistol with strong status potential — Multishot and Damage carry, Status Chance helps stacks.',
        'pt-BR': 'Pistola burst com bom potencial de status — Multishot e Dano carregam, Chance de Status acumula procs.',
      },
    },
    {
      slug: 'kuva-nukor', name: 'Kuva Nukor', category: 'secondary',
      type: 'Beam Pistol', mastery_rank: 13, disposition: 0.5, family: 'kuva-nukor',
      image: 'https://wiki.warframe.com/images/KuvaNukor.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
      wasted_positive:    { status_chance: 'C' },
      notes: {
        en: 'Beam pistol with 50% innate status chance — Multishot/Damage/Crit Damage are king; +Status Chance is wasted.',
        'pt-BR': 'Pistola feixe com 50% de chance de status nativa — Multishot/Dano/Dano Crítico dominam; +Chance de Status é desperdício.',
      },
    },
    {
      slug: 'kuva-seer', name: 'Kuva Seer', category: 'secondary',
      type: 'Pistol (Semi-Auto)', mastery_rank: 15, disposition: 1.1, family: 'kuva-seer',
      image: 'https://wiki.warframe.com/images/KuvaSeer.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
      notes: {
        en: 'Semi-auto all-rounder — Multishot/Damage/Crit Chance combo works great.',
        'pt-BR': 'Semi-auto versátil — o combo Multishot/Dano/Chance de Crítico funciona muito bem.',
      },
    },
    {
      slug: 'kuva-twin-stubbas', name: 'Kuva Twin Stubbas', category: 'secondary',
      type: 'Dual Pistols (Auto)', mastery_rank: 13, disposition: 0.95, family: 'kuva-twin-stubbas',
      image: 'https://wiki.warframe.com/images/KuvaTwinStubbas.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
      notes: {
        en: 'Dual auto pistols — Multishot/Damage carry, crit-leaning builds are strong.',
        'pt-BR': 'Pistolas duplas automáticas — Multishot/Dano carregam, builds focadas em crítico funcionam bem.',
      },
    },
    {
      slug: 'laetum', name: 'Laetum', category: 'secondary',
      type: 'Pistol (Semi-Auto)', mastery_rank: 14, disposition: 0.5, family: 'laetum',
      image: 'https://wiki.warframe.com/images/Laetum.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'lato', name: 'Lato', category: 'secondary',
      type: 'Pistol (Semi-Auto)', mastery_rank: 0, disposition: 1.4, family: 'lato',
      image: 'https://wiki.warframe.com/images/Lato.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'lato-prime', name: 'Lato Prime', category: 'secondary',
      type: 'Pistol (Semi-Auto)', mastery_rank: 14, disposition: 1.35, family: 'lato',
      image: 'https://wiki.warframe.com/images/LatoPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'lato-vandal', name: 'Lato Vandal', category: 'secondary',
      type: 'Pistol (Semi-Auto)', mastery_rank: 7, disposition: 1.35, family: 'lato',
      image: 'https://wiki.warframe.com/images/LatoVandal.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'lex', name: 'Lex', category: 'secondary',
      type: 'Pistol (Semi-Auto)', mastery_rank: 3, disposition: 1.25, family: 'lex',
      image: 'https://wiki.warframe.com/images/Lex.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'lex-prime', name: 'Lex Prime', category: 'secondary',
      type: 'Pistol (Semi-Auto)', mastery_rank: 8, disposition: 1.2, family: 'lex',
      image: 'https://wiki.warframe.com/images/LexPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_damage: 'S' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
      notes: {
        en: 'High-damage hard-hitter — Multishot/Damage/Crit Damage are all top tier picks.',
        'pt-BR': 'Tiro pesado de alto dano — Multishot/Dano/Dano Crítico são picks top tier.',
      },
    },
    {
      slug: 'magnus', name: 'Magnus', category: 'secondary',
      type: 'Pistol (Semi-Auto)', mastery_rank: 10, disposition: 1.53, family: 'magnus',
      image: 'https://wiki.warframe.com/images/Magnus.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'magnus-prime', name: 'Magnus Prime', category: 'secondary',
      type: 'Pistol (Semi-Auto)', mastery_rank: 14, disposition: 1.25, family: 'magnus',
      image: 'https://wiki.warframe.com/images/MagnusPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'mara-detron', name: 'Mara Detron', category: 'secondary',
      type: 'Shotgun Sidearm (Semi-Auto)', mastery_rank: 9, disposition: 1.15, family: 'detron',
      image: 'https://wiki.warframe.com/images/MaraDetron.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'marelok', name: 'Marelok', category: 'secondary',
      type: 'Pistol (Semi-Auto)', mastery_rank: 7, disposition: 1.2, family: 'marelok',
      image: 'https://wiki.warframe.com/images/Marelok.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'mk1-furis', name: 'Mk1-Furis', category: 'secondary',
      type: 'Beam Pistol', mastery_rank: 0, disposition: 1.4, family: 'mk1-furis',
      image: 'https://wiki.warframe.com/images/Furis.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'mk1-kunai', name: 'Mk1-Kunai', category: 'secondary',
      type: 'Thrown (Auto)', mastery_rank: 0, disposition: 1.51, family: 'mk1-kunai',
      image: 'https://wiki.warframe.com/images/Kunai.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'nukor', name: 'Nukor', category: 'secondary',
      type: 'Beam Pistol', mastery_rank: 4, disposition: 1.45, family: 'nukor',
      image: 'https://wiki.warframe.com/images/Nukor.png',
      preferred_positive: { multishot: 'S', damage: 'S', status_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
      notes: {
        en: 'Beam pistol — unlike the Kuva variant, base status is lower so +Status Chance is genuinely valuable.',
        'pt-BR': 'Pistola feixe — diferente da variante Kuva, a chance de status base é menor, então +Chance de Status é genuinamente valiosa.',
      },
    },
    {
      slug: 'ocucor', name: 'Ocucor', category: 'secondary',
      type: 'Beam Pistol', mastery_rank: 8, disposition: 1.2, family: 'ocucor',
      image: 'https://wiki.warframe.com/images/Ocucor.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'onos', name: 'Onos', category: 'secondary',
      type: 'Pistol (Auto)', mastery_rank: 14, disposition: 0.8, family: 'onos',
      image: 'https://wiki.warframe.com/images/Onos.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'pandero', name: 'Pandero', category: 'secondary',
      type: 'Pistol (Mag Burst)', mastery_rank: 8, disposition: 1.2, family: 'pandero',
      image: 'https://wiki.warframe.com/images/Pandero.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'pandero-prime', name: 'Pandero Prime', category: 'secondary',
      type: 'Pistol (Mag Burst)', mastery_rank: 14, disposition: 1.1, family: 'pandero',
      image: 'https://wiki.warframe.com/images/PanderoPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'plinx', name: 'Plinx', category: 'secondary',
      type: 'Pistol (Semi-Auto)', mastery_rank: 6, disposition: 1.2, family: 'plinx',
      image: 'https://wiki.warframe.com/images/Plinx.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'pox', name: 'Pox', category: 'secondary',
      type: 'Thrown (Auto)', mastery_rank: 9, disposition: 1.2, family: 'pox',
      image: 'https://wiki.warframe.com/images/Pox.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'prisma-angstrum', name: 'Prisma Angstrum', category: 'secondary',
      type: 'Pistol (Auto)', mastery_rank: 8, disposition: 1.3, family: 'angstrum',
      image: 'https://wiki.warframe.com/images/PrismaAngstrum.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'prisma-twin-gremlins', name: 'Prisma Twin Gremlins', category: 'secondary',
      type: 'Dual Pistols (Auto)', mastery_rank: 11, disposition: 1.15, family: 'twin-gremlins',
      image: 'https://wiki.warframe.com/images/PrismaTwinGremlins.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'pyrana', name: 'Pyrana', category: 'secondary',
      type: 'Shotgun Sidearm (Auto)', mastery_rank: 12, disposition: 0.95, family: 'pyrana',
      image: 'https://wiki.warframe.com/images/Pyrana.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'pyrana-prime', name: 'Pyrana Prime', category: 'secondary',
      type: 'Shotgun Sidearm (Auto)', mastery_rank: 13, disposition: 0.65, family: 'pyrana',
      image: 'https://wiki.warframe.com/images/PyranaPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'quatz', name: 'Quatz', category: 'secondary',
      type: 'Pistol (Burst)', mastery_rank: 9, disposition: 1.2, family: 'quatz',
      image: 'https://wiki.warframe.com/images/Quatz.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'rakta-ballistica', name: 'Rakta Ballistica', category: 'secondary',
      type: 'Crossbow (Charge)', mastery_rank: 6, disposition: 1.2, family: 'ballistica',
      image: 'https://wiki.warframe.com/images/RaktaBallistica.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'riot-848', name: 'Riot-848', category: 'secondary',
      type: 'Pistol (Auto)', mastery_rank: 14, disposition: 0.95, family: 'riot-848',
      image: 'https://wiki.warframe.com/images/Riot-848.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'sagek-prime', name: 'Sagek Prime', category: 'secondary',
      type: 'Pistol (Auto)', mastery_rank: 14, disposition: 0.65, family: 'sagek',
      image: 'https://wiki.warframe.com/images/SagekPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'sancti-castanas', name: 'Sancti Castanas', category: 'secondary',
      type: 'Thrown (Active)', mastery_rank: 10, disposition: 1.35, family: 'castanas',
      image: 'https://wiki.warframe.com/images/SanctiCastanas.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'scyotid', name: 'Scyotid', category: 'secondary',
      type: 'Thrown (Auto)', mastery_rank: 12, disposition: 0.6, family: 'scyotid',
      image: 'https://wiki.warframe.com/images/Scyotid.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'secura-dual-cestra', name: 'Secura Dual Cestra', category: 'secondary',
      type: 'Dual Pistols (Auto-Spool)', mastery_rank: 10, disposition: 1.3, family: 'dual-cestra',
      image: 'https://wiki.warframe.com/images/SecuraDualCestra.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'seer', name: 'Seer', category: 'secondary',
      type: 'Pistol (Semi-Auto)', mastery_rank: 0, disposition: 1.5, family: 'seer',
      image: 'https://wiki.warframe.com/images/Seer.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'sepulcrum', name: 'Sepulcrum', category: 'secondary',
      type: 'Pistol (Burst)', mastery_rank: 14, disposition: 1.1, family: 'sepulcrum',
      image: 'https://wiki.warframe.com/images/Sepulcrum.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'sicarus', name: 'Sicarus', category: 'secondary',
      type: 'Pistol (Burst)', mastery_rank: 3, disposition: 1.2, family: 'sicarus',
      image: 'https://wiki.warframe.com/images/Sicarus.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'sicarus-prime', name: 'Sicarus Prime', category: 'secondary',
      type: 'Pistol (Burst)', mastery_rank: 14, disposition: 1.15, family: 'sicarus',
      image: 'https://wiki.warframe.com/images/SicarusPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'sonicor', name: 'Sonicor', category: 'secondary',
      type: 'Pistol (Semi-Auto)', mastery_rank: 2, disposition: 1.15, family: 'sonicor',
      image: 'https://wiki.warframe.com/images/Sonicor.png',
      preferred_positive: { multishot: 'S', damage: 'S' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial', magazine_capacity: 'beneficial' },
      notes: {
        en: 'AoE CC pistol — Multishot/Damage carry. −Magazine is harmless (one-shot focused).',
        'pt-BR': 'Pistola de AoE/CC — Multishot/Dano carregam. −Carregador é inofensivo (foco em 1 hit).',
      },
    },
    {
      slug: 'spectra', name: 'Spectra', category: 'secondary',
      type: 'Beam Pistol', mastery_rank: 4, disposition: 1.49, family: 'spectra',
      image: 'https://wiki.warframe.com/images/Spectra.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'spectra-vandal', name: 'Spectra Vandal', category: 'secondary',
      type: 'Beam Pistol', mastery_rank: 10, disposition: 1.45, family: 'spectra',
      image: 'https://wiki.warframe.com/images/SpectraVandal.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'spira', name: 'Spira', category: 'secondary',
      type: 'Thrown (Auto)', mastery_rank: 8, disposition: 1.35, family: 'spira',
      image: 'https://wiki.warframe.com/images/Spira.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'spira-prime', name: 'Spira Prime', category: 'secondary',
      type: 'Thrown (Auto)', mastery_rank: 10, disposition: 1.25, family: 'spira',
      image: 'https://wiki.warframe.com/images/SpiraPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'staticor', name: 'Staticor', category: 'secondary',
      type: 'Thrown (Charge)', mastery_rank: 10, disposition: 0.9, family: 'staticor',
      image: 'https://wiki.warframe.com/images/Staticor.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'stubba', name: 'Stubba', category: 'secondary',
      type: 'Pistol (Auto)', mastery_rank: 7, disposition: 1.35, family: 'stubba',
      image: 'https://wiki.warframe.com/images/Stubba.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'stug', name: 'Stug', category: 'secondary',
      type: 'Pistol (Auto / Charge)', mastery_rank: 2, disposition: 1.48, family: 'stug',
      image: 'https://wiki.warframe.com/images/Stug.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'synoid-gammacor', name: 'Synoid Gammacor', category: 'secondary',
      type: 'Pistol (Semi-Auto)', mastery_rank: 7, disposition: 1.1, family: 'gammacor',
      image: 'https://wiki.warframe.com/images/SynoidGammacor.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'talons', name: 'Talons', category: 'secondary',
      type: 'Thrown (Active)', mastery_rank: 8, disposition: 1.44, family: 'talons',
      image: 'https://wiki.warframe.com/images/Talons.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'telos-akbolto', name: 'Telos Akbolto', category: 'secondary',
      type: 'Dual Pistols (Semi-Auto)', mastery_rank: 11, disposition: 1.25, family: 'akbolto',
      image: 'https://wiki.warframe.com/images/TelosAkbolto.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'tenet-cycron', name: 'Tenet Cycron', category: 'secondary',
      type: 'Beam Pistol', mastery_rank: 14, disposition: 0.7, family: 'tenet-cycron',
      image: 'https://wiki.warframe.com/images/TenetCycron.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
      notes: {
        en: 'Beam pistol — Multishot doubles status procs and shines with damage scaling. Crit Damage is the cherry on top.',
        'pt-BR': 'Pistola feixe — Multishot dobra procs e escala bem com dano. Dano Crítico fecha a build.',
      },
    },
    {
      slug: 'tenet-detron', name: 'Tenet Detron', category: 'secondary',
      type: 'Shotgun Sidearm (Semi-Auto)', mastery_rank: 16, disposition: 0.95, family: 'tenet-detron',
      image: 'https://wiki.warframe.com/images/TenetDetron.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'tenet-diplos', name: 'Tenet Diplos', category: 'secondary',
      type: 'Dual Pistols (Auto)', mastery_rank: 16, disposition: 0.75, family: 'tenet-diplos',
      image: 'https://wiki.warframe.com/images/TenetDiplos.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'tenet-plinx', name: 'Tenet Plinx', category: 'secondary',
      type: 'Pistol (Semi / Charge)', mastery_rank: 6, disposition: 0.8, family: 'tenet-plinx',
      image: 'https://wiki.warframe.com/images/TenetPlinx.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'tenet-spirex', name: 'Tenet Spirex', category: 'secondary',
      type: 'Pistol (Semi-Auto)', mastery_rank: 14, disposition: 1.05, family: 'tenet-spirex',
      image: 'https://wiki.warframe.com/images/TenetSpirex.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
      notes: {
        en: 'Crit-based semi-auto — Multishot/Crit Chance/Crit Damage dominate.',
        'pt-BR': 'Semi-auto de crítico — Multishot/Chance de Crítico/Dano Crítico dominam.',
      },
    },
    {
      slug: 'twin-grakatas', name: 'Twin Grakatas', category: 'secondary',
      type: 'Dual Pistols (Auto)', mastery_rank: 9, disposition: 1.2, family: 'twin-grakatas',
      image: 'https://wiki.warframe.com/images/TwinGrakatas.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'twin-gremlins', name: 'Twin Gremlins', category: 'secondary',
      type: 'Dual Pistols (Auto)', mastery_rank: 5, disposition: 1.2, family: 'twin-gremlins',
      image: 'https://wiki.warframe.com/images/TwinGremlins.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'twin-kohmak', name: 'Twin Kohmak', category: 'secondary',
      type: 'Dual Shotguns (Auto-Spool)', mastery_rank: 10, disposition: 1.25, family: 'twin-kohmak',
      image: 'https://wiki.warframe.com/images/TwinKohmak.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'twin-rogga', name: 'Twin Rogga', category: 'secondary',
      type: 'Dual Shotguns (Semi-Auto)', mastery_rank: 9, disposition: 1.3, family: 'twin-rogga',
      image: 'https://wiki.warframe.com/images/TwinRogga.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'twin-vipers', name: 'Twin Vipers', category: 'secondary',
      type: 'Dual Pistols (Auto)', mastery_rank: 5, disposition: 1.45, family: 'twin-vipers',
      image: 'https://wiki.warframe.com/images/TwinVipers.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'twin-vipers-wraith', name: 'Twin Vipers Wraith', category: 'secondary',
      type: 'Dual Pistols (Auto)', mastery_rank: 7, disposition: 1.41, family: 'twin-vipers',
      image: 'https://wiki.warframe.com/images/TwinVipersWraith.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'tysis', name: 'Tysis', category: 'secondary',
      type: 'Pistol (Semi-Auto)', mastery_rank: 9, disposition: 1.45, family: 'tysis',
      image: 'https://wiki.warframe.com/images/Tysis.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'vasto', name: 'Vasto', category: 'secondary',
      type: 'Pistol (Burst)', mastery_rank: 4, disposition: 1.4, family: 'vasto',
      image: 'https://wiki.warframe.com/images/Vasto.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'vasto-prime', name: 'Vasto Prime', category: 'secondary',
      type: 'Pistol (Burst)', mastery_rank: 10, disposition: 1.35, family: 'vasto',
      image: 'https://wiki.warframe.com/images/VastoPrime.png',
      preferred_positive: { multishot: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
      notes: {
        en: 'Crit revolver — Multishot/Crit Chance/Crit Damage dominate.',
        'pt-BR': 'Revólver de crítico — Multishot/Chance de Crítico/Dano Crítico dominam.',
      },
    },
    {
      slug: 'vaykor-marelok', name: 'Vaykor Marelok', category: 'secondary',
      type: 'Pistol (Semi-Auto)', mastery_rank: 10, disposition: 1.1, family: 'marelok',
      image: 'https://wiki.warframe.com/images/VaykorMarelok.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'velox', name: 'Velox', category: 'secondary',
      type: 'Pistol (Auto)', mastery_rank: 8, disposition: 1.25, family: 'velox',
      image: 'https://wiki.warframe.com/images/Velox.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'velox-prime', name: 'Velox Prime', category: 'secondary',
      type: 'Pistol (Auto)', mastery_rank: 13, disposition: 0.85, family: 'velox',
      image: 'https://wiki.warframe.com/images/VeloxPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'vesper-77', name: 'Vesper 77', category: 'secondary',
      type: 'Pistol (Semi-Auto)', mastery_rank: 14, disposition: 0.8, family: 'vesper-77',
      image: 'https://wiki.warframe.com/images/Vesper77.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'viper', name: 'Viper', category: 'secondary',
      type: 'Pistol (Auto)', mastery_rank: 4, disposition: 1.45, family: 'viper',
      image: 'https://wiki.warframe.com/images/Viper.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'viper-wraith', name: 'Viper Wraith', category: 'secondary',
      type: 'Pistol (Auto)', mastery_rank: 4, disposition: 1.4, family: 'viper',
      image: 'https://wiki.warframe.com/images/ViperWraith.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'zakti', name: 'Zakti', category: 'secondary',
      type: 'Pistol (Semi-Auto)', mastery_rank: 10, disposition: 1.25, family: 'zakti',
      image: 'https://wiki.warframe.com/images/Zakti.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'zakti-prime', name: 'Zakti Prime', category: 'secondary',
      type: 'Pistol (Semi-Auto)', mastery_rank: 14, disposition: 1.1, family: 'zakti',
      image: 'https://wiki.warframe.com/images/ZaktiPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'zylok', name: 'Zylok', category: 'secondary',
      type: 'Pistol (Charge)', mastery_rank: 6, disposition: 1.25, family: 'zylok',
      image: 'https://wiki.warframe.com/images/Zylok.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'zylok-prime', name: 'Zylok Prime', category: 'secondary',
      type: 'Pistol (Charge)', mastery_rank: 13, disposition: 0.9, family: 'zylok',
      image: 'https://wiki.warframe.com/images/ZylokPrime.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
    {
      slug: 'zymos', name: 'Zymos', category: 'secondary',
      type: 'Pistol (Semi-Auto)', mastery_rank: 11, disposition: 1.2, family: 'zymos',
      image: 'https://wiki.warframe.com/images/Zymos.png',
      preferred_positive: { multishot: 'S', damage: 'S', critical_chance: 'A' },
      preferred_negative: { zoom: 'beneficial', recoil: 'beneficial' },
    },
  ],
  melee: [
    {
      slug: 'ack-and-brunt', name: 'Ack & Brunt', category: 'melee',
      type: 'Sword and Shield', mastery_rank: 3, disposition: 1.35, family: 'ack-and-brunt',
      image: 'https://wiki.warframe.com/images/Ack&Brunt.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'amanata', name: 'Amanata', category: 'melee',
      type: 'Polearm', mastery_rank: 2, disposition: 0.85, family: 'amanata',
      image: 'https://wiki.warframe.com/images/Amanata.png',
      preferred_positive: { damage: 'S', status_chance: 'S', critical_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'amphis', name: 'Amphis', category: 'melee',
      type: 'Staff', mastery_rank: 5, disposition: 1.5, family: 'amphis',
      image: 'https://wiki.warframe.com/images/Amphis.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'anku', name: 'Anku', category: 'melee',
      type: 'Scythe', mastery_rank: 3, disposition: 1.46, family: 'anku',
      image: 'https://wiki.warframe.com/images/Anku.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'ankyros', name: 'Ankyros', category: 'melee',
      type: 'Fist', mastery_rank: 2, disposition: 1.5, family: 'ankyros',
      image: 'https://wiki.warframe.com/images/Ankyros.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'ankyros-prime', name: 'Ankyros Prime', category: 'melee',
      type: 'Fist', mastery_rank: 8, disposition: 1.45, family: 'ankyros',
      image: 'https://wiki.warframe.com/images/AnkyrosPrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'arca-titron', name: 'Arca Titron', category: 'melee',
      type: 'Hammer', mastery_rank: 10, disposition: 1.3, family: 'arca-titron',
      image: 'https://wiki.warframe.com/images/ArcaTitron.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'argo-and-vel', name: 'Argo & Vel', category: 'melee',
      type: 'Sword and Shield', mastery_rank: 0, disposition: 1.15, family: 'argo-and-vel',
      image: 'https://wiki.warframe.com/images/Argo&Vel.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'arum-spinosa', name: 'Arum Spinosa', category: 'melee',
      type: 'Warfan (Charge)', mastery_rank: 11, disposition: 1.25, family: 'arum-spinosa',
      image: 'https://wiki.warframe.com/images/ArumSpinosa.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'atterax', name: 'Atterax', category: 'melee',
      type: 'Whip', mastery_rank: 5, disposition: 1.15, family: 'atterax',
      image: 'https://wiki.warframe.com/images/Atterax.png',
      preferred_positive: { damage: 'S', status_chance: 'S', critical_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
      notes: {
        en: 'Slash whip with high status — Damage/Status Chance/Crit Chance carry.',
        'pt-BR': 'Chicote de Corte com alto status — Dano/Chance de Status/Chance de Crítico carregam.',
      },
    },
    {
      slug: 'azothane', name: 'Azothane', category: 'melee',
      type: 'Two-Handed Nikana', mastery_rank: 0, disposition: 1.05, family: 'azothane',
      image: 'https://wiki.warframe.com/images/Azothane.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'bo', name: 'Bo', category: 'melee',
      type: 'Staff', mastery_rank: 0, disposition: 1.35, family: 'bo',
      image: 'https://wiki.warframe.com/images/Bo.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'bo-prime', name: 'Bo Prime', category: 'melee',
      type: 'Staff', mastery_rank: 5, disposition: 1.35, family: 'bo',
      image: 'https://wiki.warframe.com/images/BoPrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'boltace', name: 'Boltace', category: 'melee',
      type: 'Tonfa', mastery_rank: 4, disposition: 1.25, family: 'boltace',
      image: 'https://wiki.warframe.com/images/Boltace.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'broken-scepter', name: 'Broken Scepter', category: 'melee',
      type: 'Staff', mastery_rank: 7, disposition: 1.4, family: 'broken-scepter',
      image: 'https://wiki.warframe.com/images/BrokenScepter.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'broken-war', name: 'Broken War', category: 'melee',
      type: 'Sword', mastery_rank: 10, disposition: 1.15, family: 'broken-war',
      image: 'https://wiki.warframe.com/images/BrokenWar.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'cadus', name: 'Cadus', category: 'melee',
      type: 'Staff', mastery_rank: 4, disposition: 1.29, family: 'cadus',
      image: 'https://wiki.warframe.com/images/Cadus.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'cassowar', name: 'Cassowar', category: 'melee',
      type: 'Polearm', mastery_rank: 5, disposition: 1.35, family: 'cassowar',
      image: 'https://wiki.warframe.com/images/Cassowar.png',
      preferred_positive: { damage: 'S', status_chance: 'S', critical_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'caustacyst', name: 'Caustacyst', category: 'melee',
      type: 'Scythe (Charge)', mastery_rank: 7, disposition: 1.3, family: 'caustacyst',
      image: 'https://wiki.warframe.com/images/Caustacyst.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'ceramic-dagger', name: 'Ceramic Dagger', category: 'melee',
      type: 'Dagger', mastery_rank: 3, disposition: 1.43, family: 'ceramic-dagger',
      image: 'https://wiki.warframe.com/images/CeramicDagger.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
      notes: {
        en: 'Highest disposition melee with Incarnon adapter — riven plus Incarnon turns it into a powerhouse.',
        'pt-BR': 'Melee com maior disposição do jogo e adaptador Incarnon — riven + Incarnon transforma em arma top.',
      },
    },
    {
      slug: 'cerata', name: 'Cerata', category: 'melee',
      type: 'Glaive', mastery_rank: 7, disposition: 1.25, family: 'cerata',
      image: 'https://wiki.warframe.com/images/Cerata.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'ceti-lacera', name: 'Ceti Lacera', category: 'melee',
      type: 'Blade and Whip', mastery_rank: 12, disposition: 1.2, family: 'ceti-lacera',
      image: 'https://wiki.warframe.com/images/CetiLacera.png',
      preferred_positive: { damage: 'S', status_chance: 'S', critical_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'cobra-and-crane', name: 'Cobra & Crane', category: 'melee',
      type: 'Sword and Shield', mastery_rank: 10, disposition: 1.35, family: 'cobra-and-crane',
      image: 'https://wiki.warframe.com/images/Cobra&Crane.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'cobra-and-crane-prime', name: 'Cobra & Crane Prime', category: 'melee',
      type: 'Sword and Shield', mastery_rank: 14, disposition: 1.2, family: 'cobra-and-crane',
      image: 'https://wiki.warframe.com/images/Cobra&CranePrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'coda-caustacyst', name: 'Coda Caustacyst', category: 'melee',
      type: 'Scythe (Charge)', mastery_rank: 17, disposition: 0.85, family: 'coda-caustacyst',
      image: 'https://wiki.warframe.com/images/CodaCaustacyst.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'coda-hirudo', name: 'Coda Hirudo', category: 'melee',
      type: 'Sparring', mastery_rank: 17, disposition: 0.75, family: 'coda-hirudo',
      image: 'https://wiki.warframe.com/images/CodaHirudo.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'coda-mire', name: 'Coda Mire', category: 'melee',
      type: 'Sword', mastery_rank: 17, disposition: 0.7, family: 'coda-mire',
      image: 'https://wiki.warframe.com/images/CodaMire.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'coda-motovore', name: 'Coda Motovore', category: 'melee',
      type: 'Hammer', mastery_rank: 17, disposition: 0.75, family: 'coda-motovore',
      image: 'https://wiki.warframe.com/images/CodaMotovore.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'coda-pathocyst', name: 'Coda Pathocyst', category: 'melee',
      type: 'Glaive', mastery_rank: 17, disposition: 0.65, family: 'coda-pathocyst',
      image: 'https://wiki.warframe.com/images/CodaPathocyst.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'corufell', name: 'Corufell', category: 'melee',
      type: 'Heavy Scythe (Charge)', mastery_rank: 8, disposition: 1.0, family: 'corufell',
      image: 'https://wiki.warframe.com/images/Corufell.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'cronus', name: 'Cronus', category: 'melee',
      type: 'Sword', mastery_rank: 0, disposition: 1.48, family: 'cronus',
      image: 'https://wiki.warframe.com/images/Cronus.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'dakra-prime', name: 'Dakra Prime', category: 'melee',
      type: 'Sword', mastery_rank: 10, disposition: 1.1, family: 'dakra',
      image: 'https://wiki.warframe.com/images/DakraPrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'dark-dagger', name: 'Dark Dagger', category: 'melee',
      type: 'Dagger', mastery_rank: 2, disposition: 1.1, family: 'dark-dagger',
      image: 'https://wiki.warframe.com/images/DarkDagger.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'dark-split-sword-dual-swords', name: 'Dark Split-Sword (Dual Swords)', category: 'melee',
      type: 'Dual Swords', mastery_rank: 5, disposition: 1.3, family: 'dark-split-sword-dual-swords',
      image: 'https://wiki.warframe.com/images/DarkSplitSwordDualSwords.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'dark-split-sword-heavy-blade', name: 'Dark Split-Sword (Heavy Blade)', category: 'melee',
      type: 'Heavy Blade', mastery_rank: 5, disposition: 1.3, family: 'dark-split-sword-heavy-blade',
      image: 'https://wiki.warframe.com/images/DarkSplitSwordHeavyBlade.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'dark-sword', name: 'Dark Sword', category: 'melee',
      type: 'Sword', mastery_rank: 8, disposition: 1.48, family: 'dark-sword',
      image: 'https://wiki.warframe.com/images/DarkSword.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'destreza', name: 'Destreza', category: 'melee',
      type: 'Rapier', mastery_rank: 7, disposition: 1.25, family: 'destreza',
      image: 'https://wiki.warframe.com/images/Destreza.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'destreza-prime', name: 'Destreza Prime', category: 'melee',
      type: 'Rapier', mastery_rank: 10, disposition: 1.14, family: 'destreza',
      image: 'https://wiki.warframe.com/images/DestrezaPrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'dex-dakra', name: 'Dex Dakra', category: 'melee',
      type: 'Dual Swords', mastery_rank: 6, disposition: 1.35, family: 'dex-dakra',
      image: 'https://wiki.warframe.com/images/DexDakra.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'dex-nikana', name: 'Dex Nikana', category: 'melee',
      type: 'Nikana', mastery_rank: 8, disposition: 1.1, family: 'dex-nikana',
      image: 'https://wiki.warframe.com/images/DexNikana.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'dorrclave', name: 'Dorrclave', category: 'melee',
      type: 'Blade and Whip', mastery_rank: 8, disposition: 1.1, family: 'dorrclave',
      image: 'https://wiki.warframe.com/images/Dorrclave.png',
      preferred_positive: { damage: 'S', status_chance: 'S', critical_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'dragon-nikana', name: 'Dragon Nikana', category: 'melee',
      type: 'Nikana', mastery_rank: 8, disposition: 1.15, family: 'dragon-nikana',
      image: 'https://wiki.warframe.com/images/DragonNikana.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'dual-cleavers', name: 'Dual Cleavers', category: 'melee',
      type: 'Dual Swords', mastery_rank: 5, disposition: 1.2, family: 'dual-cleavers',
      image: 'https://wiki.warframe.com/images/DualCleavers.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'dual-ether', name: 'Dual Ether', category: 'melee',
      type: 'Dual Swords', mastery_rank: 8, disposition: 1.45, family: 'dual-ether',
      image: 'https://wiki.warframe.com/images/DualEther.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'dual-heat-swords', name: 'Dual Heat Swords', category: 'melee',
      type: 'Dual Swords', mastery_rank: 3, disposition: 1.44, family: 'dual-heat-swords',
      image: 'https://wiki.warframe.com/images/DualHeatSwords.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'dual-ichor', name: 'Dual Ichor', category: 'melee',
      type: 'Dual Swords', mastery_rank: 6, disposition: 1.25, family: 'dual-ichor',
      image: 'https://wiki.warframe.com/images/DualIchor.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'dual-kamas', name: 'Dual Kamas', category: 'melee',
      type: 'Dual Swords', mastery_rank: 1, disposition: 1.35, family: 'dual-kamas',
      image: 'https://wiki.warframe.com/images/DualKamas.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'dual-kamas-prime', name: 'Dual Kamas Prime', category: 'melee',
      type: 'Dual Swords', mastery_rank: 8, disposition: 1.25, family: 'dual-kamas',
      image: 'https://wiki.warframe.com/images/DualKamasPrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'dual-keres', name: 'Dual Keres', category: 'melee',
      type: 'Dual Swords', mastery_rank: 7, disposition: 1.1, family: 'dual-keres',
      image: 'https://wiki.warframe.com/images/DualKeres.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'dual-keres-prime', name: 'Dual Keres Prime', category: 'melee',
      type: 'Dual Swords', mastery_rank: 14, disposition: 0.8, family: 'dual-keres',
      image: 'https://wiki.warframe.com/images/DualKeresPrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'dual-raza', name: 'Dual Raza', category: 'melee',
      type: 'Dual Swords', mastery_rank: 6, disposition: 1.4, family: 'dual-raza',
      image: 'https://wiki.warframe.com/images/DualRaza.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'dual-skana', name: 'Dual Skana', category: 'melee',
      type: 'Dual Swords', mastery_rank: 0, disposition: 1.48, family: 'dual-skana',
      image: 'https://wiki.warframe.com/images/DualSkana.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'dual-viciss', name: 'Dual Viciss', category: 'melee',
      type: 'Dual Swords', mastery_rank: 14, disposition: 0.8, family: 'dual-viciss',
      image: 'https://wiki.warframe.com/images/DualViciss.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'dual-zoren', name: 'Dual Zoren', category: 'melee',
      type: 'Dual Swords', mastery_rank: 2, disposition: 1.44, family: 'dual-zoren',
      image: 'https://wiki.warframe.com/images/DualZoren.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'dual-zoren-prime', name: 'Dual Zoren Prime', category: 'melee',
      type: 'Dual Swords', mastery_rank: 13, disposition: 0.9, family: 'dual-zoren',
      image: 'https://wiki.warframe.com/images/DualZorenPrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'edun', name: 'Edun', category: 'melee',
      type: 'Polearm', mastery_rank: 0, disposition: 1.1, family: 'edun',
      image: 'https://wiki.warframe.com/images/Edun.png',
      preferred_positive: { damage: 'S', status_chance: 'S', critical_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'ekhein', name: 'Ekhein', category: 'melee',
      type: 'Hammer', mastery_rank: 10, disposition: 1.2, family: 'ekhein',
      image: 'https://wiki.warframe.com/images/Ekhein.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'endura', name: 'Endura', category: 'melee',
      type: 'Rapier', mastery_rank: 7, disposition: 1.4, family: 'endura',
      image: 'https://wiki.warframe.com/images/Endura.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'ether-daggers', name: 'Ether Daggers', category: 'melee',
      type: 'Dual Daggers', mastery_rank: 6, disposition: 1.49, family: 'ether-daggers',
      image: 'https://wiki.warframe.com/images/EtherDaggers.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'ether-reaper', name: 'Ether Reaper', category: 'melee',
      type: 'Scythe', mastery_rank: 4, disposition: 1.45, family: 'ether-reaper',
      image: 'https://wiki.warframe.com/images/EtherReaper.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'ether-sword', name: 'Ether Sword', category: 'melee',
      type: 'Sword', mastery_rank: 7, disposition: 1.44, family: 'ether-sword',
      image: 'https://wiki.warframe.com/images/EtherSword.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'falcor', name: 'Falcor', category: 'melee',
      type: 'Glaive', mastery_rank: 8, disposition: 1.3, family: 'falcor',
      image: 'https://wiki.warframe.com/images/Falcor.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'fang', name: 'Fang', category: 'melee',
      type: 'Dual Daggers', mastery_rank: 0, disposition: 1.36, family: 'fang',
      image: 'https://wiki.warframe.com/images/Fang.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'fang-prime', name: 'Fang Prime', category: 'melee',
      type: 'Dual Daggers', mastery_rank: 10, disposition: 1.3, family: 'fang',
      image: 'https://wiki.warframe.com/images/FangPrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'fragor', name: 'Fragor', category: 'melee',
      type: 'Hammer', mastery_rank: 2, disposition: 1.2, family: 'fragor',
      image: 'https://wiki.warframe.com/images/Fragor.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'fragor-prime', name: 'Fragor Prime', category: 'melee',
      type: 'Hammer', mastery_rank: 12, disposition: 1.05, family: 'fragor',
      image: 'https://wiki.warframe.com/images/FragorPrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'furax', name: 'Furax', category: 'melee',
      type: 'Fist', mastery_rank: 5, disposition: 1.38, family: 'furax',
      image: 'https://wiki.warframe.com/images/Furax.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'furax-wraith', name: 'Furax Wraith', category: 'melee',
      type: 'Fist', mastery_rank: 9, disposition: 1.15, family: 'furax',
      image: 'https://wiki.warframe.com/images/FuraxWraith.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'galariak-prime', name: 'Galariak Prime', category: 'melee',
      type: 'Scythe', mastery_rank: 14, disposition: 0.65, family: 'galariak',
      image: 'https://wiki.warframe.com/images/GalariakPrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'galatine', name: 'Galatine', category: 'melee',
      type: 'Heavy Blade', mastery_rank: 3, disposition: 1.05, family: 'galatine',
      image: 'https://wiki.warframe.com/images/Galatine.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'galatine-prime', name: 'Galatine Prime', category: 'melee',
      type: 'Heavy Blade', mastery_rank: 13, disposition: 0.9, family: 'galatine',
      image: 'https://wiki.warframe.com/images/GalatinePrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
      notes: {
        en: 'Heavy blade with massive damage — Damage/Crit Chance/Crit Damage dominate.',
        'pt-BR': 'Lâmina pesada com dano massivo — Dano/Chance de Crítico/Dano Crítico dominam.',
      },
    },
    {
      slug: 'galvacord', name: 'Galvacord', category: 'melee',
      type: 'Whip', mastery_rank: 6, disposition: 1.35, family: 'galvacord',
      image: 'https://wiki.warframe.com/images/Galvacord.png',
      preferred_positive: { damage: 'S', status_chance: 'S', critical_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'gazal-machete', name: 'Gazal Machete', category: 'melee',
      type: 'Machete', mastery_rank: 5, disposition: 1.4, family: 'gazal-machete',
      image: 'https://wiki.warframe.com/images/GazalMachete.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'ghoulsaw', name: 'Ghoulsaw', category: 'melee',
      type: 'Assault Saw', mastery_rank: 7, disposition: 1.25, family: 'ghoulsaw',
      image: 'https://wiki.warframe.com/images/Ghoulsaw.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'glaive', name: 'Glaive', category: 'melee',
      type: 'Glaive', mastery_rank: 1, disposition: 1.3, family: 'glaive',
      image: 'https://wiki.warframe.com/images/Glaive.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'glaive-prime', name: 'Glaive Prime', category: 'melee',
      type: 'Glaive', mastery_rank: 10, disposition: 0.7, family: 'glaive',
      image: 'https://wiki.warframe.com/images/GlaivePrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
      notes: {
        en: 'Throwable glaive with explosive heavy attack — Damage/Crit Chance/Crit Damage dominate.',
        'pt-BR': 'Glaive arremessável com ataque pesado explosivo — Dano/Chance de Crítico/Dano Crítico dominam.',
      },
    },
    {
      slug: 'gram', name: 'Gram', category: 'melee',
      type: 'Heavy Blade', mastery_rank: 2, disposition: 1.44, family: 'gram',
      image: 'https://wiki.warframe.com/images/Gram.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'gram-prime', name: 'Gram Prime', category: 'melee',
      type: 'Heavy Blade', mastery_rank: 14, disposition: 0.75, family: 'gram',
      image: 'https://wiki.warframe.com/images/GramPrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
      notes: {
        en: 'Prime heavy blade — Damage/Crit Chance/Crit Damage are top tier picks.',
        'pt-BR': 'Lâmina pesada Prime — Dano/Chance de Crítico/Dano Crítico são picks top tier.',
      },
    },
    {
      slug: 'guandao', name: 'Guandao', category: 'melee',
      type: 'Polearm', mastery_rank: 4, disposition: 1.05, family: 'guandao',
      image: 'https://wiki.warframe.com/images/Guandao.png',
      preferred_positive: { damage: 'S', status_chance: 'S', critical_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'guandao-prime', name: 'Guandao Prime', category: 'melee',
      type: 'Polearm', mastery_rank: 12, disposition: 0.7, family: 'guandao',
      image: 'https://wiki.warframe.com/images/GuandaoPrime.png',
      preferred_positive: { damage: 'S', status_chance: 'S', critical_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'gunsen', name: 'Gunsen', category: 'melee',
      type: 'Warfan', mastery_rank: 8, disposition: 1.35, family: 'gunsen',
      image: 'https://wiki.warframe.com/images/Gunsen.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'gunsen-prime', name: 'Gunsen Prime', category: 'melee',
      type: 'Warfan', mastery_rank: 12, disposition: 1.0, family: 'gunsen',
      image: 'https://wiki.warframe.com/images/GunsenPrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'halikar', name: 'Halikar', category: 'melee',
      type: 'Glaive', mastery_rank: 7, disposition: 1.44, family: 'halikar',
      image: 'https://wiki.warframe.com/images/Halikar.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'halikar-wraith', name: 'Halikar Wraith', category: 'melee',
      type: 'Glaive', mastery_rank: 13, disposition: 1.2, family: 'halikar',
      image: 'https://wiki.warframe.com/images/HalikarWraith.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'harmony', name: 'Harmony', category: 'melee',
      type: 'Scythe', mastery_rank: 10, disposition: 0.6, family: 'harmony',
      image: 'https://wiki.warframe.com/images/Harmony.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'hate', name: 'Hate', category: 'melee',
      type: 'Scythe', mastery_rank: 8, disposition: 1.1, family: 'hate',
      image: 'https://wiki.warframe.com/images/Hate.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
      notes: {
        en: 'Stalker scythe with massive disposition — riven scales dramatically.',
        'pt-BR': 'Foice do Stalker com disposição enorme — riven escala drasticamente.',
      },
    },
    {
      slug: 'heat-dagger', name: 'Heat Dagger', category: 'melee',
      type: 'Dagger', mastery_rank: 3, disposition: 1.44, family: 'heat-dagger',
      image: 'https://wiki.warframe.com/images/HeatDagger.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'heat-sword', name: 'Heat Sword', category: 'melee',
      type: 'Sword', mastery_rank: 3, disposition: 1.48, family: 'heat-sword',
      image: 'https://wiki.warframe.com/images/HeatSword.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'heliocor', name: 'Heliocor', category: 'melee',
      type: 'Hammer', mastery_rank: 9, disposition: 1.35, family: 'heliocor',
      image: 'https://wiki.warframe.com/images/Heliocor.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'hespar', name: 'Hespar', category: 'melee',
      type: 'Heavy Scythe', mastery_rank: 12, disposition: 1.0, family: 'hespar',
      image: 'https://wiki.warframe.com/images/Hespar.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', heavy_attack_eff: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
      notes: {
        en: 'Two-handed scythe with massive reach — Damage/Crit Chance/Heavy Attack Efficiency work well.',
        'pt-BR': 'Foice de duas mãos com alcance enorme — Dano/Chance de Crítico/Eficiência de Ataque Pesado funcionam bem.',
      },
    },
    {
      slug: 'hirudo', name: 'Hirudo', category: 'melee',
      type: 'Sparring', mastery_rank: 7, disposition: 1.15, family: 'hirudo',
      image: 'https://wiki.warframe.com/images/Hirudo.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'innodem', name: 'Innodem', category: 'melee',
      type: 'Dagger', mastery_rank: 14, disposition: 0.65, family: 'innodem',
      image: 'https://wiki.warframe.com/images/Innodem.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'jat-kittag', name: 'Jat Kittag', category: 'melee',
      type: 'Hammer', mastery_rank: 5, disposition: 1.35, family: 'jat-kittag',
      image: 'https://wiki.warframe.com/images/JatKittag.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'jat-kusar', name: 'Jat Kusar', category: 'melee',
      type: 'Blade and Whip', mastery_rank: 11, disposition: 1.2, family: 'jat-kusar',
      image: 'https://wiki.warframe.com/images/JatKusar.png',
      preferred_positive: { damage: 'S', status_chance: 'S', critical_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'jaw-sword', name: 'Jaw Sword', category: 'melee',
      type: 'Sword', mastery_rank: 0, disposition: 1.4, family: 'jaw-sword',
      image: 'https://wiki.warframe.com/images/JawSword.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'kama', name: 'Kama', category: 'melee',
      type: 'Machete', mastery_rank: 1, disposition: 1.47, family: 'kama',
      image: 'https://wiki.warframe.com/images/Kama.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'karyst', name: 'Karyst', category: 'melee',
      type: 'Dagger', mastery_rank: 6, disposition: 1.35, family: 'karyst',
      image: 'https://wiki.warframe.com/images/Karyst.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'karyst-prime', name: 'Karyst Prime', category: 'melee',
      type: 'Dagger', mastery_rank: 12, disposition: 1.15, family: 'karyst',
      image: 'https://wiki.warframe.com/images/KarystPrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
      notes: {
        en: 'Prime dagger with insane disposition — top tier for riven scaling.',
        'pt-BR': 'Adaga Prime com disposição insana — top tier pra escalonamento de riven.',
      },
    },
    {
      slug: 'keratinos', name: 'Keratinos', category: 'melee',
      type: 'Claws', mastery_rank: 9, disposition: 1.05, family: 'keratinos',
      image: 'https://wiki.warframe.com/images/Keratinos.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'kesheg', name: 'Kesheg', category: 'melee',
      type: 'Polearm', mastery_rank: 7, disposition: 1.35, family: 'kesheg',
      image: 'https://wiki.warframe.com/images/Kesheg.png',
      preferred_positive: { damage: 'S', status_chance: 'S', critical_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'kestrel', name: 'Kestrel', category: 'melee',
      type: 'Glaive', mastery_rank: 0, disposition: 1.45, family: 'kestrel',
      image: 'https://wiki.warframe.com/images/Kestrel.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'kestrel-prime', name: 'Kestrel Prime', category: 'melee',
      type: 'Glaive', mastery_rank: 11, disposition: 0.5, family: 'kestrel',
      image: 'https://wiki.warframe.com/images/KestrelPrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'kogake', name: 'Kogake', category: 'melee',
      type: 'Sparring', mastery_rank: 2, disposition: 1.46, family: 'kogake',
      image: 'https://wiki.warframe.com/images/Kogake.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'kogake-prime', name: 'Kogake Prime', category: 'melee',
      type: 'Sparring', mastery_rank: 10, disposition: 1.4, family: 'kogake',
      image: 'https://wiki.warframe.com/images/KogakePrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'korrudo', name: 'Korrudo', category: 'melee',
      type: 'Sparring', mastery_rank: 9, disposition: 1.35, family: 'korrudo',
      image: 'https://wiki.warframe.com/images/Korrudo.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'korumm', name: 'Korumm', category: 'melee',
      type: 'Polearm', mastery_rank: 13, disposition: 1.1, family: 'korumm',
      image: 'https://wiki.warframe.com/images/Korumm.png',
      preferred_positive: { damage: 'S', status_chance: 'S', critical_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'kreska', name: 'Kreska', category: 'melee',
      type: 'Machete', mastery_rank: 6, disposition: 1.35, family: 'kreska',
      image: 'https://wiki.warframe.com/images/Kreska.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'krohkur', name: 'Krohkur', category: 'melee',
      type: 'Sword', mastery_rank: 9, disposition: 1.35, family: 'krohkur',
      image: 'https://wiki.warframe.com/images/Krohkur.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'kronen', name: 'Kronen', category: 'melee',
      type: 'Tonfa', mastery_rank: 3, disposition: 1.43, family: 'kronen',
      image: 'https://wiki.warframe.com/images/Kronen.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'kronen-prime', name: 'Kronen Prime', category: 'melee',
      type: 'Tonfa', mastery_rank: 13, disposition: 0.65, family: 'kronen',
      image: 'https://wiki.warframe.com/images/KronenPrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
      notes: {
        en: 'High-crit tonfas — Damage/Crit Chance/Crit Damage are king.',
        'pt-BR': 'Tonfas de alto crítico — Dano/Chance de Crítico/Dano Crítico são reis.',
      },
    },
    {
      slug: 'kuva-ghoulsaw', name: 'Kuva Ghoulsaw', category: 'melee',
      type: 'Assault Saw', mastery_rank: 13, disposition: 0.5, family: 'kuva-ghoulsaw',
      image: 'https://wiki.warframe.com/images/KuvaGhoulsaw.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'kuva-shildeg', name: 'Kuva Shildeg', category: 'melee',
      type: 'Hammer', mastery_rank: 13, disposition: 0.8, family: 'kuva-shildeg',
      image: 'https://wiki.warframe.com/images/KuvaShildeg.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'lacera', name: 'Lacera', category: 'melee',
      type: 'Blade and Whip', mastery_rank: 7, disposition: 1.31, family: 'lacera',
      image: 'https://wiki.warframe.com/images/Lacera.png',
      preferred_positive: { damage: 'S', status_chance: 'S', critical_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'lecta', name: 'Lecta', category: 'melee',
      type: 'Whip', mastery_rank: 0, disposition: 1.25, family: 'lecta',
      image: 'https://wiki.warframe.com/images/Lecta.png',
      preferred_positive: { damage: 'S', status_chance: 'S', critical_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'lesion', name: 'Lesion', category: 'melee',
      type: 'Polearm', mastery_rank: 9, disposition: 0.85, family: 'lesion',
      image: 'https://wiki.warframe.com/images/Lesion.png',
      preferred_positive: { damage: 'S', status_chance: 'S', critical_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
      notes: {
        en: 'Toxin polearm with high status — Damage/Status Chance/Crit Chance dominate.',
        'pt-BR': 'Polearm tóxica de alto status — Dano/Chance de Status/Chance de Crítico dominam.',
      },
    },
    {
      slug: 'machete', name: 'Machete', category: 'melee',
      type: 'Machete', mastery_rank: 1, disposition: 1.45, family: 'machete',
      image: 'https://wiki.warframe.com/images/Machete.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'machete-wraith', name: 'Machete Wraith', category: 'melee',
      type: 'Machete', mastery_rank: 11, disposition: 1.4, family: 'machete',
      image: 'https://wiki.warframe.com/images/MacheteWraith.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'magistar', name: 'Magistar', category: 'melee',
      type: 'Hammer', mastery_rank: 1, disposition: 1.35, family: 'magistar',
      image: 'https://wiki.warframe.com/images/Magistar.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'masseter', name: 'Masseter', category: 'melee',
      type: 'Heavy Blade', mastery_rank: 8, disposition: 1.25, family: 'masseter',
      image: 'https://wiki.warframe.com/images/Masseter.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'masseter-prime', name: 'Masseter Prime', category: 'melee',
      type: 'Heavy Blade', mastery_rank: 14, disposition: 1.0, family: 'masseter',
      image: 'https://wiki.warframe.com/images/MasseterPrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'mios', name: 'Mios', category: 'melee',
      type: 'Blade and Whip', mastery_rank: 8, disposition: 1.3, family: 'mios',
      image: 'https://wiki.warframe.com/images/Mios.png',
      preferred_positive: { damage: 'S', status_chance: 'S', critical_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'mire', name: 'Mire', category: 'melee',
      type: 'Sword', mastery_rank: 5, disposition: 1.3, family: 'mire',
      image: 'https://wiki.warframe.com/images/Mire.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'mk1-bo', name: 'Mk1-Bo', category: 'melee',
      type: 'Staff', mastery_rank: 0, disposition: 1.4, family: 'mk1-bo',
      image: 'https://wiki.warframe.com/images/MK1-Bo.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'mk1-furax', name: 'Mk1-Furax', category: 'melee',
      type: 'Fist', mastery_rank: 0, disposition: 1.45, family: 'mk1-furax',
      image: 'https://wiki.warframe.com/images/MK1-Furax.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'nami-skyla', name: 'Nami Skyla', category: 'melee',
      type: 'Dual Swords', mastery_rank: 2, disposition: 1.3, family: 'nami-skyla',
      image: 'https://wiki.warframe.com/images/NamiSkyla.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'nami-skyla-prime', name: 'Nami Skyla Prime', category: 'melee',
      type: 'Dual Swords', mastery_rank: 11, disposition: 1.0, family: 'nami-skyla',
      image: 'https://wiki.warframe.com/images/NamiSkylaPrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'nami-solo', name: 'Nami Solo', category: 'melee',
      type: 'Machete', mastery_rank: 6, disposition: 1.43, family: 'nami-solo',
      image: 'https://wiki.warframe.com/images/NamiSolo.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'nepheri', name: 'Nepheri', category: 'melee',
      type: 'Dual Daggers', mastery_rank: 13, disposition: 1.0, family: 'nepheri',
      image: 'https://wiki.warframe.com/images/Nepheri.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'nikana', name: 'Nikana', category: 'melee',
      type: 'Nikana', mastery_rank: 4, disposition: 0.95, family: 'nikana',
      image: 'https://wiki.warframe.com/images/Nikana.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'nikana-prime', name: 'Nikana Prime', category: 'melee',
      type: 'Nikana', mastery_rank: 12, disposition: 0.6, family: 'nikana',
      image: 'https://wiki.warframe.com/images/NikanaPrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
      notes: {
        en: 'Prime nikana with strong crit — Damage/Crit Chance/Crit Damage dominate.',
        'pt-BR': 'Nikana Prime com crítico forte — Dano/Chance de Crítico/Dano Crítico dominam.',
      },
    },
    {
      slug: 'ninkondi', name: 'Ninkondi', category: 'melee',
      type: 'Nunchaku', mastery_rank: 8, disposition: 1.41, family: 'ninkondi',
      image: 'https://wiki.warframe.com/images/Ninkondi.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'ninkondi-prime', name: 'Ninkondi Prime', category: 'melee',
      type: 'Nunchaku', mastery_rank: 14, disposition: 1.1, family: 'ninkondi',
      image: 'https://wiki.warframe.com/images/NinkondiPrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'obex', name: 'Obex', category: 'melee',
      type: 'Sparring', mastery_rank: 4, disposition: 1.3, family: 'obex',
      image: 'https://wiki.warframe.com/images/Obex.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'ohma', name: 'Ohma', category: 'melee',
      type: 'Tonfa', mastery_rank: 8, disposition: 1.25, family: 'ohma',
      image: 'https://wiki.warframe.com/images/Ohma.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'okina', name: 'Okina', category: 'melee',
      type: 'Dual Daggers', mastery_rank: 5, disposition: 1.4, family: 'okina',
      image: 'https://wiki.warframe.com/images/Okina.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'okina-prime', name: 'Okina Prime', category: 'melee',
      type: 'Dual Daggers', mastery_rank: 12, disposition: 0.7, family: 'okina',
      image: 'https://wiki.warframe.com/images/OkinaPrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'orthos', name: 'Orthos', category: 'melee',
      type: 'Polearm', mastery_rank: 2, disposition: 1.0, family: 'orthos',
      image: 'https://wiki.warframe.com/images/Orthos.png',
      preferred_positive: { damage: 'S', status_chance: 'S', critical_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'orthos-prime', name: 'Orthos Prime', category: 'melee',
      type: 'Polearm', mastery_rank: 12, disposition: 0.7, family: 'orthos',
      image: 'https://wiki.warframe.com/images/OrthosPrime.png',
      preferred_positive: { damage: 'S', status_chance: 'S', critical_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'orvius', name: 'Orvius', category: 'melee',
      type: 'Glaive', mastery_rank: 5, disposition: 1.35, family: 'orvius',
      image: 'https://wiki.warframe.com/images/Orvius.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'pangolin-prime', name: 'Pangolin Prime', category: 'melee',
      type: 'Sword', mastery_rank: 14, disposition: 1.05, family: 'pangolin',
      image: 'https://wiki.warframe.com/images/PangolinPrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'pangolin-sword', name: 'Pangolin Sword', category: 'melee',
      type: 'Sword', mastery_rank: 3, disposition: 1.47, family: 'pangolin-sword',
      image: 'https://wiki.warframe.com/images/PangolinSword.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'paracesis', name: 'Paracesis', category: 'melee',
      type: 'Heavy Blade', mastery_rank: 10, disposition: 0.6, family: 'paracesis',
      image: 'https://wiki.warframe.com/images/Paracesis.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'pathocyst', name: 'Pathocyst', category: 'melee',
      type: 'Glaive', mastery_rank: 9, disposition: 1.3, family: 'pathocyst',
      image: 'https://wiki.warframe.com/images/Pathocyst.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'pennant', name: 'Pennant', category: 'melee',
      type: 'Two-Handed Nikana', mastery_rank: 7, disposition: 0.95, family: 'pennant',
      image: 'https://wiki.warframe.com/images/Pennant.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'plasma-sword', name: 'Plasma Sword', category: 'melee',
      type: 'Sword', mastery_rank: 4, disposition: 1.48, family: 'plasma-sword',
      image: 'https://wiki.warframe.com/images/PlasmaSword.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'praedos', name: 'Praedos', category: 'melee',
      type: 'Tonfa', mastery_rank: 14, disposition: 0.6, family: 'praedos',
      image: 'https://wiki.warframe.com/images/Praedos.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
      notes: {
        en: 'Quest-locked Incarnon dagger — Damage/Crit Chance/Crit Damage dominate.',
        'pt-BR': 'Adaga Incarnon liberada por quest — Dano/Chance de Crítico/Dano Crítico dominam.',
      },
    },
    {
      slug: 'prisma-dual-cleavers', name: 'Prisma Dual Cleavers', category: 'melee',
      type: 'Dual Swords', mastery_rank: 9, disposition: 1.1, family: 'dual-cleavers',
      image: 'https://wiki.warframe.com/images/PrismaDualCleavers.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'prisma-machete', name: 'Prisma Machete', category: 'melee',
      type: 'Machete', mastery_rank: 7, disposition: 1.45, family: 'machete',
      image: 'https://wiki.warframe.com/images/PrismaMachete.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'prisma-obex', name: 'Prisma Obex', category: 'melee',
      type: 'Sparring', mastery_rank: 10, disposition: 1.25, family: 'obex',
      image: 'https://wiki.warframe.com/images/PrismaObex.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'prisma-ohma', name: 'Prisma Ohma', category: 'melee',
      type: 'Tonfa', mastery_rank: 12, disposition: 0.9, family: 'ohma',
      image: 'https://wiki.warframe.com/images/PrismaOhma.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'prisma-skana', name: 'Prisma Skana', category: 'melee',
      type: 'Sword', mastery_rank: 8, disposition: 1.2, family: 'skana',
      image: 'https://wiki.warframe.com/images/PrismaSkana.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'prova', name: 'Prova', category: 'melee',
      type: 'Machete', mastery_rank: 3, disposition: 1.4, family: 'prova',
      image: 'https://wiki.warframe.com/images/Prova.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'prova-vandal', name: 'Prova Vandal', category: 'melee',
      type: 'Machete', mastery_rank: 8, disposition: 1.35, family: 'prova',
      image: 'https://wiki.warframe.com/images/ProvaVandal.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'pulmonars', name: 'Pulmonars', category: 'melee',
      type: 'Nunchaku', mastery_rank: 11, disposition: 1.2, family: 'pulmonars',
      image: 'https://wiki.warframe.com/images/Pulmonars.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'pupacyst', name: 'Pupacyst', category: 'melee',
      type: 'Polearm', mastery_rank: 7, disposition: 1.35, family: 'pupacyst',
      image: 'https://wiki.warframe.com/images/Pupacyst.png',
      preferred_positive: { damage: 'S', status_chance: 'S', critical_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'quassus', name: 'Quassus', category: 'melee',
      type: 'Warfan (Charge)', mastery_rank: 8, disposition: 1.15, family: 'quassus',
      image: 'https://wiki.warframe.com/images/Quassus.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'quassus-prime', name: 'Quassus Prime', category: 'melee',
      type: 'Warfan (Charge)', mastery_rank: 13, disposition: 0.85, family: 'quassus',
      image: 'https://wiki.warframe.com/images/QuassusPrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'rakta-dark-dagger', name: 'Rakta Dark Dagger', category: 'melee',
      type: 'Dagger', mastery_rank: 8, disposition: 1.0, family: 'dark-dagger',
      image: 'https://wiki.warframe.com/images/RaktaDarkDagger.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'reaper-prime', name: 'Reaper Prime', category: 'melee',
      type: 'Scythe', mastery_rank: 10, disposition: 0.8, family: 'reaper',
      image: 'https://wiki.warframe.com/images/ReaperPrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
      notes: {
        en: 'Crit scythe — Damage/Crit Chance/Crit Damage dominate.',
        'pt-BR': 'Foice de crítico — Dano/Chance de Crítico/Dano Crítico dominam.',
      },
    },
    {
      slug: 'redeemer', name: 'Redeemer', category: 'melee',
      type: 'Gunblade (Charge)', mastery_rank: 4, disposition: 1.05, family: 'redeemer',
      image: 'https://wiki.warframe.com/images/Redeemer.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'redeemer-prime', name: 'Redeemer Prime', category: 'melee',
      type: 'Gunblade (Charge)', mastery_rank: 10, disposition: 0.65, family: 'redeemer',
      image: 'https://wiki.warframe.com/images/RedeemerPrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'ripkas', name: 'Ripkas', category: 'melee',
      type: 'Claws', mastery_rank: 5, disposition: 1.3, family: 'ripkas',
      image: 'https://wiki.warframe.com/images/Ripkas.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'rumblejack', name: 'Rumblejack', category: 'melee',
      type: 'Dagger', mastery_rank: 8, disposition: 1.2, family: 'rumblejack',
      image: 'https://wiki.warframe.com/images/Rumblejack.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'ruvox', name: 'Ruvox', category: 'melee',
      type: 'Fist', mastery_rank: 14, disposition: 0.9, family: 'ruvox',
      image: 'https://wiki.warframe.com/images/Ruvox.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'sampotes', name: 'Sampotes', category: 'melee',
      type: 'Hammer', mastery_rank: 0, disposition: 1.0, family: 'sampotes',
      image: 'https://wiki.warframe.com/images/Sampotes.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'sancti-magistar', name: 'Sancti Magistar', category: 'melee',
      type: 'Hammer', mastery_rank: 8, disposition: 1.25, family: 'magistar',
      image: 'https://wiki.warframe.com/images/SanctiMagistar.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', heavy_attack_eff: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
      notes: {
        en: 'Healing hammer with Incarnon adapter — Damage/Crit Chance/Heavy Attack Efficiency carry.',
        'pt-BR': 'Martelo de cura com adaptador Incarnon — Dano/Chance de Crítico/Eficiência de Ataque Pesado carregam.',
      },
    },
    {
      slug: 'sarofang', name: 'Sarofang', category: 'melee',
      type: 'Heavy Blade', mastery_rank: 8, disposition: 1.1, family: 'sarofang',
      image: 'https://wiki.warframe.com/images/Sarofang.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'sarofang-prime', name: 'Sarofang Prime', category: 'melee',
      type: 'Heavy Blade', mastery_rank: 16, disposition: 0.5, family: 'sarofang',
      image: 'https://wiki.warframe.com/images/SarofangPrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'sarpa', name: 'Sarpa', category: 'melee',
      type: 'Gunblade (Charge)', mastery_rank: 8, disposition: 1.2, family: 'sarpa',
      image: 'https://wiki.warframe.com/images/Sarpa.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'scindo', name: 'Scindo', category: 'melee',
      type: 'Heavy Blade', mastery_rank: 2, disposition: 1.35, family: 'scindo',
      image: 'https://wiki.warframe.com/images/Scindo.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'scindo-prime', name: 'Scindo Prime', category: 'melee',
      type: 'Heavy Blade', mastery_rank: 8, disposition: 1.3, family: 'scindo',
      image: 'https://wiki.warframe.com/images/ScindoPrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'scoliac', name: 'Scoliac', category: 'melee',
      type: 'Whip', mastery_rank: 6, disposition: 1.3, family: 'scoliac',
      image: 'https://wiki.warframe.com/images/Scoliac.png',
      preferred_positive: { damage: 'S', status_chance: 'S', critical_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'secura-lecta', name: 'Secura Lecta', category: 'melee',
      type: 'Whip', mastery_rank: 8, disposition: 1.2, family: 'lecta',
      image: 'https://wiki.warframe.com/images/SecuraLecta.png',
      preferred_positive: { damage: 'S', status_chance: 'S', critical_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'serro', name: 'Serro', category: 'melee',
      type: 'Polearm', mastery_rank: 6, disposition: 1.38, family: 'serro',
      image: 'https://wiki.warframe.com/images/Serro.png',
      preferred_positive: { damage: 'S', status_chance: 'S', critical_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'shaku', name: 'Shaku', category: 'melee',
      type: 'Nunchaku', mastery_rank: 10, disposition: 1.35, family: 'shaku',
      image: 'https://wiki.warframe.com/images/Shaku.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'sheev', name: 'Sheev', category: 'melee',
      type: 'Dagger', mastery_rank: 5, disposition: 1.35, family: 'sheev',
      image: 'https://wiki.warframe.com/images/Sheev.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'sibear', name: 'Sibear', category: 'melee',
      type: 'Hammer', mastery_rank: 6, disposition: 1.35, family: 'sibear',
      image: 'https://wiki.warframe.com/images/Sibear.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'sigma-and-octantis', name: 'Sigma & Octantis', category: 'melee',
      type: 'Sword and Shield', mastery_rank: 10, disposition: 1.1, family: 'sigma-and-octantis',
      image: 'https://wiki.warframe.com/images/Sigma&Octantis.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'silva-and-aegis', name: 'Silva & Aegis', category: 'melee',
      type: 'Sword and Shield', mastery_rank: 0, disposition: 1.15, family: 'silva-and-aegis',
      image: 'https://wiki.warframe.com/images/Silva&Aegis.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'silva-and-aegis-prime', name: 'Silva & Aegis Prime', category: 'melee',
      type: 'Sword and Shield', mastery_rank: 12, disposition: 1.05, family: 'silva-and-aegis',
      image: 'https://wiki.warframe.com/images/Silva&AegisPrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'skana', name: 'Skana', category: 'melee',
      type: 'Sword', mastery_rank: 0, disposition: 1.3, family: 'skana',
      image: 'https://wiki.warframe.com/images/Skana.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'skana-prime', name: 'Skana Prime', category: 'melee',
      type: 'Sword', mastery_rank: 12, disposition: 1.2, family: 'skana',
      image: 'https://wiki.warframe.com/images/SkanaPrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'skiajati', name: 'Skiajati', category: 'melee',
      type: 'Nikana', mastery_rank: 11, disposition: 0.9, family: 'skiajati',
      image: 'https://wiki.warframe.com/images/Skiajati.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
      notes: {
        en: 'Stealth nikana with status focus — Damage/Status Chance/Crit Chance carry.',
        'pt-BR': 'Nikana furtiva com foco em status — Dano/Chance de Status/Chance de Crítico carregam.',
      },
    },
    {
      slug: 'slaytra', name: 'Slaytra', category: 'melee',
      type: 'Machete', mastery_rank: 13, disposition: 1.05, family: 'slaytra',
      image: 'https://wiki.warframe.com/images/Slaytra.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'spinnerex', name: 'Spinnerex', category: 'melee',
      type: 'Whip', mastery_rank: 12, disposition: 0.6, family: 'spinnerex',
      image: 'https://wiki.warframe.com/images/Spinnerex.png',
      preferred_positive: { damage: 'S', status_chance: 'S', critical_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'stropha', name: 'Stropha', category: 'melee',
      type: 'Gunblade (Charge)', mastery_rank: 10, disposition: 0.65, family: 'stropha',
      image: 'https://wiki.warframe.com/images/Stropha.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'sun-and-moon', name: 'Sun & Moon', category: 'melee',
      type: 'Dual Nikanas', mastery_rank: 0, disposition: 0.8, family: 'sun-and-moon',
      image: 'https://wiki.warframe.com/images/Sun&Moon.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'syam', name: 'Syam', category: 'melee',
      type: 'Nikana', mastery_rank: 0, disposition: 0.75, family: 'syam',
      image: 'https://wiki.warframe.com/images/Syam.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'sydon', name: 'Sydon', category: 'melee',
      type: 'Polearm', mastery_rank: 5, disposition: 1.35, family: 'sydon',
      image: 'https://wiki.warframe.com/images/Sydon.png',
      preferred_positive: { damage: 'S', status_chance: 'S', critical_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'synoid-heliocor', name: 'Synoid Heliocor', category: 'melee',
      type: 'Hammer', mastery_rank: 11, disposition: 1.35, family: 'heliocor',
      image: 'https://wiki.warframe.com/images/SynoidHeliocor.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'tak-and-lug', name: 'Tak & Lug', category: 'melee',
      type: 'Sword and Shield', mastery_rank: 9, disposition: 0.5, family: 'tak-and-lug',
      image: 'https://wiki.warframe.com/images/Tak&Lug.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'tatsu', name: 'Tatsu', category: 'melee',
      type: 'Two-Handed Nikana', mastery_rank: 7, disposition: 1.05, family: 'tatsu',
      image: 'https://wiki.warframe.com/images/Tatsu.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'tatsu-prime', name: 'Tatsu Prime', category: 'melee',
      type: 'Two-Handed Nikana', mastery_rank: 14, disposition: 0.9, family: 'tatsu',
      image: 'https://wiki.warframe.com/images/TatsuPrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', initial_combo: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
      notes: {
        en: 'Two-handed nikana — Damage/Crit Chance/Initial Combo strong for heavy attacks.',
        'pt-BR': 'Nikana de duas mãos — Dano/Chance de Crítico/Combo Inicial fortes pra ataque pesado.',
      },
    },
    {
      slug: 'tekko', name: 'Tekko', category: 'melee',
      type: 'Fist', mastery_rank: 6, disposition: 1.4, family: 'tekko',
      image: 'https://wiki.warframe.com/images/Tekko.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'tekko-prime', name: 'Tekko Prime', category: 'melee',
      type: 'Fist', mastery_rank: 12, disposition: 1.3, family: 'tekko',
      image: 'https://wiki.warframe.com/images/TekkoPrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'telos-boltace', name: 'Telos Boltace', category: 'melee',
      type: 'Tonfa', mastery_rank: 11, disposition: 1.1, family: 'boltace',
      image: 'https://wiki.warframe.com/images/TelosBoltace.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
      notes: {
        en: 'Status-focused tonfas — Damage/Status Chance/Crit Chance carry.',
        'pt-BR': 'Tonfas focadas em status — Dano/Chance de Status/Chance de Crítico carregam.',
      },
    },
    {
      slug: 'tenet-agendus', name: 'Tenet Agendus', category: 'melee',
      type: 'Sword and Shield (Charge)', mastery_rank: 14, disposition: 0.9, family: 'tenet-agendus',
      image: 'https://wiki.warframe.com/images/TenetAgendus.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'tenet-exec', name: 'Tenet Exec', category: 'melee',
      type: 'Heavy Blade', mastery_rank: 16, disposition: 0.8, family: 'tenet-exec',
      image: 'https://wiki.warframe.com/images/TenetExec.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'tenet-grigori', name: 'Tenet Grigori', category: 'melee',
      type: 'Scythe (Charge)', mastery_rank: 14, disposition: 0.95, family: 'tenet-grigori',
      image: 'https://wiki.warframe.com/images/TenetGrigori.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'tenet-livia', name: 'Tenet Livia', category: 'melee',
      type: 'Two-Handed Nikana', mastery_rank: 14, disposition: 0.95, family: 'tenet-livia',
      image: 'https://wiki.warframe.com/images/TenetLivia.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'thalys', name: 'Thalys', category: 'melee',
      type: 'Heavy Scythe', mastery_rank: 12, disposition: 0.6, family: 'thalys',
      image: 'https://wiki.warframe.com/images/Thalys.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'tipedo', name: 'Tipedo', category: 'melee',
      type: 'Staff', mastery_rank: 3, disposition: 1.31, family: 'tipedo',
      image: 'https://wiki.warframe.com/images/Tipedo.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'tipedo-prime', name: 'Tipedo Prime', category: 'melee',
      type: 'Staff', mastery_rank: 10, disposition: 1.25, family: 'tipedo',
      image: 'https://wiki.warframe.com/images/TipedoPrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'tonbo', name: 'Tonbo', category: 'melee',
      type: 'Polearm', mastery_rank: 3, disposition: 1.38, family: 'tonbo',
      image: 'https://wiki.warframe.com/images/Tonbo.png',
      preferred_positive: { damage: 'S', status_chance: 'S', critical_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'tonkkatt', name: 'Tonkkatt', category: 'melee',
      type: 'Tonfa', mastery_rank: 9, disposition: 0.5, family: 'tonkkatt',
      image: 'https://wiki.warframe.com/images/Tonkkatt.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'twin-basolk', name: 'Twin Basolk', category: 'melee',
      type: 'Dual Swords', mastery_rank: 7, disposition: 1.3, family: 'twin-basolk',
      image: 'https://wiki.warframe.com/images/TwinBasolk.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'twin-krohkur', name: 'Twin Krohkur', category: 'melee',
      type: 'Dual Swords', mastery_rank: 10, disposition: 1.2, family: 'twin-krohkur',
      image: 'https://wiki.warframe.com/images/TwinKrohkur.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'vastilok', name: 'Vastilok', category: 'melee',
      type: 'Gunblade (Charge)', mastery_rank: 9, disposition: 0.9, family: 'vastilok',
      image: 'https://wiki.warframe.com/images/Vastilok.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'vaykor-sydon', name: 'Vaykor Sydon', category: 'melee',
      type: 'Polearm', mastery_rank: 11, disposition: 1.3, family: 'sydon',
      image: 'https://wiki.warframe.com/images/VaykorSydon.png',
      preferred_positive: { damage: 'S', status_chance: 'S', critical_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'venato', name: 'Venato', category: 'melee',
      type: 'Scythe', mastery_rank: 9, disposition: 1.3, family: 'venato',
      image: 'https://wiki.warframe.com/images/Venato.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'venato-prime', name: 'Venato Prime', category: 'melee',
      type: 'Scythe', mastery_rank: 14, disposition: 0.5, family: 'venato',
      image: 'https://wiki.warframe.com/images/VenatoPrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'venka', name: 'Venka', category: 'melee',
      type: 'Claws', mastery_rank: 4, disposition: 1.1, family: 'venka',
      image: 'https://wiki.warframe.com/images/Venka.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'venka-prime', name: 'Venka Prime', category: 'melee',
      type: 'Claws', mastery_rank: 14, disposition: 0.85, family: 'venka',
      image: 'https://wiki.warframe.com/images/VenkaPrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'verdilac', name: 'Verdilac', category: 'melee',
      type: 'Whip', mastery_rank: 13, disposition: 1.1, family: 'verdilac',
      image: 'https://wiki.warframe.com/images/Verdilac.png',
      preferred_positive: { damage: 'S', status_chance: 'S', critical_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'vericres', name: 'Vericres', category: 'melee',
      type: 'Warfan', mastery_rank: 8, disposition: 1.15, family: 'vericres',
      image: 'https://wiki.warframe.com/images/Vericres.png',
      preferred_positive: { damage: 'S', critical_chance: 'A', status_chance: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'vinquibus-melee', name: 'Vinquibus (Melee)', category: 'melee',
      type: 'Bayonet', mastery_rank: 14, disposition: 0.6, family: 'vinquibus-melee',
      image: 'https://wiki.warframe.com/images/Vinquibus.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'vitrica', name: 'Vitrica', category: 'melee',
      type: 'Heavy Blade', mastery_rank: 13, disposition: 1.05, family: 'vitrica',
      image: 'https://wiki.warframe.com/images/Vitrica.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'volnus', name: 'Volnus', category: 'melee',
      type: 'Hammer', mastery_rank: 9, disposition: 1.4, family: 'volnus',
      image: 'https://wiki.warframe.com/images/Volnus.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'volnus-prime', name: 'Volnus Prime', category: 'melee',
      type: 'Hammer', mastery_rank: 14, disposition: 1.3, family: 'volnus',
      image: 'https://wiki.warframe.com/images/VolnusPrime.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'war', name: 'War', category: 'melee',
      type: 'Heavy Blade', mastery_rank: 10, disposition: 1.05, family: 'war',
      image: 'https://wiki.warframe.com/images/War.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'wolf-sledge', name: 'Wolf Sledge', category: 'melee',
      type: 'Hammer', mastery_rank: 7, disposition: 1.25, family: 'wolf-sledge',
      image: 'https://wiki.warframe.com/images/WolfSledge.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'xoris', name: 'Xoris', category: 'melee',
      type: 'Glaive', mastery_rank: 4, disposition: 0.65, family: 'xoris',
      image: 'https://wiki.warframe.com/images/Xoris.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
    {
      slug: 'zenistar', name: 'Zenistar', category: 'melee',
      type: 'Heavy Blade', mastery_rank: 6, disposition: 1.15, family: 'zenistar',
      image: 'https://wiki.warframe.com/images/Zenistar.png',
      preferred_positive: { damage: 'S', critical_chance: 'S', critical_damage: 'A' },
      preferred_negative: { finisher_damage: 'beneficial' },
    },
  ],
};

// ============== Star Chart data (v1 mockup) ==============
// Mission types — used to render the colored badge next to each node.
const MISSION_TYPES = {
  assassination:    { name: { en: 'Assassination',    'pt-BR': 'Assassinato'         }, color: '#e87878' },
  capture:          { name: { en: 'Capture',          'pt-BR': 'Captura'             }, color: '#7fb8d4' },
  defense:          { name: { en: 'Defense',          'pt-BR': 'Defesa'              }, color: '#d4b25a' },
  disruption:       { name: { en: 'Disruption',       'pt-BR': 'Disrupção'           }, color: '#b888ff' },
  exterminate:      { name: { en: 'Exterminate',      'pt-BR': 'Exterminar'          }, color: '#cc6666' },
  interception:     { name: { en: 'Interception',     'pt-BR': 'Interceptação'       }, color: '#88c0d0' },
  mobile_defense:   { name: { en: 'Mobile Defense',   'pt-BR': 'Defesa Móvel'        }, color: '#e89c4a' },
  rescue:           { name: { en: 'Rescue',           'pt-BR': 'Resgate'             }, color: '#7fb88a' },
  spy:              { name: { en: 'Spy',              'pt-BR': 'Espionagem'          }, color: '#a89aa9' },
  survival:         { name: { en: 'Survival',         'pt-BR': 'Sobrevivência'       }, color: '#a3d142' },
  sabotage:         { name: { en: 'Sabotage',         'pt-BR': 'Sabotagem'           }, color: '#f0c97a' },
  excavation:       { name: { en: 'Excavation',       'pt-BR': 'Escavação'           }, color: '#c9a04a' },
  hijack:           { name: { en: 'Hijack',           'pt-BR': 'Sequestro'           }, color: '#d18a5a' },
  defection:        { name: { en: 'Defection',        'pt-BR': 'Defecção'            }, color: '#9a8acd' },
  arena:            { name: { en: 'Arena',            'pt-BR': 'Arena'               }, color: '#bf5555' },
  pursuit:          { name: { en: 'Pursuit',          'pt-BR': 'Perseguição'         }, color: '#5fb8c9' },
  assault:          { name: { en: 'Assault',          'pt-BR': 'Assalto'             }, color: '#d14545' },
  mirror_defense:   { name: { en: 'Mirror Defense',   'pt-BR': 'Defesa Espelhada'    }, color: '#a888d4' },
  archwing:         { name: { en: 'Archwing',         'pt-BR': 'Archwing'            }, color: '#5fb8d4' },
  ascension:        { name: { en: 'Ascension',        'pt-BR': 'Ascensão'            }, color: '#d4c25a' },
  alchemy:          { name: { en: 'Alchemy',          'pt-BR': 'Alquimia'            }, color: '#9aa44d' },
  infested_salvage: { name: { en: 'Infested Salvage', 'pt-BR': 'Sucata Infestada'    }, color: '#8a9a4d' },
  void_cascade:     { name: { en: 'Void Cascade',     'pt-BR': 'Cascata Void'        }, color: '#c8a8e0' },
  void_flood:       { name: { en: 'Void Flood',       'pt-BR': 'Dilúvio Void'        }, color: '#7fa8e0' },
  void_armageddon:  { name: { en: 'Void Armageddon',  'pt-BR': 'Armagedom Void'      }, color: '#e8a85a' },
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
};

// Resource rarities — used for the colored dot on pills and the badge in the modal.
const SC_RARITIES = {
  common:    { name: { en: 'Common',    'pt-BR': 'Comum'    }, color: '#8a8a8a' },
  uncommon:  { name: { en: 'Uncommon',  'pt-BR': 'Incomum'  }, color: '#5fa363' },
  rare:      { name: { en: 'Rare',      'pt-BR': 'Raro'     }, color: '#d4b25a' },
  special:   { name: { en: 'Special',   'pt-BR': 'Especial' }, color: '#b888ff' },
};

// Resources keyed by slug. recommendedFarm.{planet,node} must point to nodes
// in STAR_CHART — the modal renders that as a clickable link to drill into.
// Icon images are hotlinked from the Warframe wiki (pattern:
// https://wiki.warframe.com/images/<PascalCaseName>.png).
const RESOURCES = {
  salvage: {
    name: { en: 'Salvage', 'pt-BR': 'Sucata' },
    rarity: 'common',
    image: 'https://wiki.warframe.com/images/Salvage.png',
    description: {
      en: 'Cheap, ubiquitous Grineer-aligned crafting material. Drops from Grineer enemies and lockers across Mars, Phobos, Ceres, Saturn, and Sedna.',
      'pt-BR': 'Material de craft Grineer barato e onipresente. Cai de inimigos Grineer e armários em Marte, Phobos, Ceres, Saturno e Sedna.',
    },
    usedFor: {
      en: 'Many Grineer-aligned weapons and early warframes (Rhino, Frost, Excalibur).',
      'pt-BR': 'Muitas armas Grineer e warframes iniciais (Rhino, Frost, Excalibur).',
    },
    recommendedFarm: { planet: 'mars', node: 'kadesh',
      noteEn: 'Long Survival runs — Salvage drops from every kill.',
      notePt: 'Runs longas de Sobrevivência — Sucata cai de cada kill.' },
  },
  polymer_bundle: {
    name: { en: 'Polymer Bundle', 'pt-BR': 'Conjunto de Polímero' },
    rarity: 'uncommon',
    image: 'https://wiki.warframe.com/images/PolymerBundle.png',
    description: {
      en: 'Uncommon Corpus-aligned crafting material. Drops on Mercury, Venus, and Uranus. The best farm is Assur (Uranus, Dark Sector Survival).',
      'pt-BR': 'Material de craft incomum, alinhado aos Corpus. Cai em Mercúrio, Vênus e Urano. O melhor farm é Assur (Urano, Sobrevivência Dark Sector).',
    },
    usedFor: {
      en: 'Corpus weapons, warframe parts (Nova, Volt) and gear blueprints.',
      'pt-BR': 'Armas Corpus, partes de warframes (Nova, Volt) e blueprints de equipamento.',
    },
    recommendedFarm: { planet: 'venus', node: 'romula',
      noteEn: 'On Venus, Romula Dark Sector Defense gives good Polymer drops. For peak yield, Assur on Uranus is the meta.',
      notePt: 'Em Vênus, a Defesa Dark Sector de Romula dá bons drops de Polímero. Pra rendimento máximo, Assur em Urano é o meta.' },
  },
  circuits: {
    name: { en: 'Circuits', 'pt-BR': 'Circuitos' },
    rarity: 'uncommon',
    image: 'https://wiki.warframe.com/images/Circuits.png',
    description: {
      en: 'Uncommon crafting material. Drops on Venus, Ceres, and the Kuva Fortress. Ceres has a higher drop chance — Gabii (Dark Sector Survival) is the meta farm.',
      'pt-BR': 'Material de craft incomum. Cai em Vênus, Ceres e na Fortaleza Kuva. Ceres tem maior chance de drop — Gabii (Sobrevivência Dark Sector) é o farm meta.',
    },
    usedFor: {
      en: 'Sentinel parts, Corpus weapons, and many warframes.',
      'pt-BR': 'Partes de sentinelas, armas Corpus e vários warframes.',
    },
    recommendedFarm: { planet: 'venus', node: 'cytherean',
      noteEn: 'On Venus, Cytherean Disruption gives steady Circuit drops. For peak yield, Gabii on Ceres is the meta.',
      notePt: 'Em Vênus, a Disrupção de Cytherean dá drops constantes de Circuitos. Pra rendimento máximo, Gabii em Ceres é o meta.' },
  },
  alloy_plate: {
    name: { en: 'Alloy Plate', 'pt-BR': 'Placa de Liga' },
    rarity: 'common',
    image: 'https://wiki.warframe.com/images/AlloyPlate.png',
    description: {
      en: 'Common crafting material. Drops on Venus, Phobos, Ceres, Jupiter, Pluto, and Sedna. Gabii (Ceres, Dark Sector Survival) yields ~1k per 15 min with a Resource Booster.',
      'pt-BR': 'Material de craft comum. Cai em Vênus, Phobos, Ceres, Júpiter, Plutão e Sedna. Gabii (Ceres, Sobrevivência Dark Sector) dá ~1k a cada 15 min com Resource Booster.',
    },
    usedFor: {
      en: 'Tons of weapons and warframes — one of the most reused materials.',
      'pt-BR': 'Muitas armas e warframes — um dos materiais mais reutilizados.',
    },
    recommendedFarm: { planet: 'phobos', node: 'gulliver',
      noteEn: 'On Phobos, Gulliver Survival drops Alloy Plate alongside Rubedo. Gabii on Ceres is the global meta.',
      notePt: 'Em Phobos, a Sobrevivência de Gulliver dá Placa de Liga junto com Rubedo. Gabii em Ceres é o meta global.' },
  },
  rubedo: {
    name: { en: 'Rubedo', 'pt-BR': 'Rubedo' },
    rarity: 'uncommon',
    image: 'https://wiki.warframe.com/images/Rubedo.png',
    description: {
      en: 'Red crystalline crafting material. Drops on Earth, Lua, Phobos, Europa, Pluto, Sedna, and the Void. Zeugma (Phobos, Dark Sector Survival) yields ~250 per 5 min.',
      'pt-BR': 'Material de craft cristalino vermelho. Cai em Terra, Lua, Phobos, Europa, Plutão, Sedna e Void. Zeugma (Phobos, Sobrevivência Dark Sector) dá ~250 a cada 5 min.',
    },
    usedFor: {
      en: 'Many crit-focused weapons and warframes (Mag, Volt, Excalibur Prime).',
      'pt-BR': 'Muitas armas de crit e warframes (Mag, Volt, Excalibur Prime).',
    },
    recommendedFarm: { planet: 'phobos', node: 'gulliver',
      noteEn: 'Survival — sustained Rubedo drops. Zeugma (Dark Sector) is the meta on Phobos.',
      notePt: 'Sobrevivência — drops sustentados de Rubedo. Zeugma (Dark Sector) é o meta em Phobos.' },
  },
  plastids: {
    name: { en: 'Plastids', 'pt-BR': 'Plastídeos' },
    rarity: 'uncommon',
    image: 'https://wiki.warframe.com/images/Plastids.png',
    description: {
      en: 'Uncommon crafting material. Drops on Phobos, Saturn, Uranus, Pluto, and Eris — Saturn and Uranus have the highest rates. Ophelia (Uranus, Survival) is the meta farm.',
      'pt-BR': 'Material de craft incomum. Cai em Phobos, Saturno, Urano, Plutão e Eris — Saturno e Urano têm as maiores taxas. Ophelia (Urano, Sobrevivência) é o farm meta.',
    },
    usedFor: {
      en: 'Several weapons and warframes (Saryn, Nidus, Inaros). One of the hardest non-rare resources to farm.',
      'pt-BR': 'Várias armas e warframes (Saryn, Nidus, Inaros). Um dos recursos não-raros mais difíceis de farmar.',
    },
    recommendedFarm: { planet: 'phobos', node: 'gulliver',
      noteEn: 'On Phobos, Gulliver Survival drops Plastids. Ophelia (Uranus) is the global meta with boosted rates.',
      notePt: 'Em Phobos, a Sobrevivência de Gulliver dá Plastídeos. Ophelia (Urano) é o meta global com taxas aumentadas.' },
  },
  morphics: {
    name: { en: 'Morphics', 'pt-BR': 'Mórficos' },
    rarity: 'rare',
    image: 'https://wiki.warframe.com/images/Morphics.png',
    description: {
      en: 'Rare reactive metallic compound. Drops on Mercury, Mars, Phobos, Europa, and Pluto — Mars has the highest drop rate. Hellas (Mars, Exterminate) is the meta farm.',
      'pt-BR': 'Composto metálico reativo raro. Cai em Mercúrio, Marte, Phobos, Europa e Plutão — Marte tem a maior taxa de drop. Hellas (Marte, Exterminar) é o farm meta.',
    },
    usedFor: {
      en: 'Many warframe chassis (Rhino, Mag, Volt) and Forma blueprints.',
      'pt-BR': 'Muitos chassis de warframe (Rhino, Mag, Volt) e blueprints de Forma.',
    },
    recommendedFarm: { planet: 'mars', node: 'kadesh',
      noteEn: 'On Mars, Survival runs net consistent Morphics. Hellas (Exterminate) is faster per-run.',
      notePt: 'Em Marte, runs de Sobrevivência dão Mórficos consistentes. Hellas (Exterminar) é mais rápido por run.' },
  },
  gallium: {
    name: { en: 'Gallium', 'pt-BR': 'Gálio' },
    rarity: 'rare',
    image: 'https://wiki.warframe.com/images/Gallium.png',
    description: {
      en: 'Rare crafting material — long-term bottleneck for many builds. Drops on Mars and Uranus. Tyl Regor (Titania, Uranus) is a guaranteed boss-drop target.',
      'pt-BR': 'Material de craft raro — gargalo de longo prazo de muitas builds. Cai em Marte e Urano. Tyl Regor (Titania, Urano) é alvo garantido de boss-drop.',
    },
    usedFor: {
      en: 'Frost, Volt, and many high-tier weapons (Soma, Boltor, Galatine).',
      'pt-BR': 'Frost, Volt e muitas armas top-tier (Soma, Boltor, Galatine).',
    },
    recommendedFarm: { planet: 'mars', node: 'war',
      noteEn: 'Boss assassination has a chance to drop Gallium. Hellas (Exterminate) is the meta farm on Mars.',
      notePt: 'Assassinato de boss tem chance de dropar Gálio. Hellas (Exterminar) é o farm meta em Marte.' },
  },
  argon_crystal: {
    name: { en: 'Argon Crystal', 'pt-BR': 'Cristal de Argônio' },
    rarity: 'rare',
    image: 'https://wiki.warframe.com/images/ArgonCrystal.png',
    description: {
      en: 'Void-exclusive radioactive crystal. Drops only inside the Void from Argon Pegmatite deposits, Corrupted Vor (50%), and Isolation Vaults. Decays every 24h at GMT 00:00 — collected crystals halve daily.',
      'pt-BR': 'Cristal radioativo exclusivo do Void. Cai apenas dentro do Void de depósitos de Pegmatita de Argônio, Corrupted Vor (50%) e Cofres de Isolamento. Decai a cada 24h às 00:00 GMT — cristais coletados diminuem pela metade diariamente.',
    },
    usedFor: {
      en: 'Endgame weapons and warframes (Tigris Prime, Vauban Prime, Equinox Prime), arcanes, and Forma blueprints. Plan farms close to when you actually need them.',
      'pt-BR': 'Armas e warframes endgame (Tigris Prime, Vauban Prime, Equinox Prime), arcanes e blueprints de Forma. Planeje farms perto de quando você de fato precisar.',
    },
    recommendedFarm: { planet: 'void', node: 'hepit',
      noteEn: 'Hepit (Capture) is the fastest farm — quick runs, low level, ~2 Argon deposits per map yielding 1–2 crystals each.',
      notePt: 'Hepit (Captura) é o farm mais rápido — runs curtas, nível baixo, ~2 depósitos de Argônio por mapa dando 1–2 cristais cada.' },
  },
  ferrite: {
    name: { en: 'Ferrite', 'pt-BR': 'Ferrita' },
    rarity: 'common',
    image: 'https://wiki.warframe.com/images/Ferrite.png',
    description: {
      en: 'Basic crafting material. Drops on Earth, Phobos, Saturn, Pluto, Void, and Deimos. One of the most common materials in the chart.',
      'pt-BR': 'Material de craft básico. Cai em Terra, Phobos, Saturno, Plutão, Void e Deimos. Um dos materiais mais comuns do mapa.',
    },
    usedFor: {
      en: 'Tons of weapons and warframes — almost every early blueprint needs Ferrite.',
      'pt-BR': 'Muitas armas e warframes — quase todo blueprint inicial pede Ferrita.',
    },
    recommendedFarm: { planet: 'earth', node: 'cervantes',
      noteEn: 'Capture missions stack Ferrite fast; Cervantes is the classic farm.',
      notePt: 'Missões de Captura acumulam Ferrita rápido; Cervantes é o farm clássico.' },
  },
  control_module: {
    name: { en: 'Control Module', 'pt-BR': 'Módulo de Controle' },
    rarity: 'rare',
    image: 'https://wiki.warframe.com/images/ControlModule.png',
    description: {
      en: 'Rare Corpus crafting component. Drops on Europa, Neptune, and the Void. Long-term bottleneck for many Prime parts.',
      'pt-BR': 'Componente Corpus raro. Cai em Europa, Netuno e Void. Gargalo de longo prazo de muitas peças Prime.',
    },
    usedFor: {
      en: 'Nova, Trinity, Vauban, Sentinel parts, and many Prime blueprints.',
      'pt-BR': 'Nova, Trinity, Vauban, partes de sentinelas e muitos blueprints Prime.',
    },
    recommendedFarm: { planet: 'neptune', node: 'salacia',
      noteEn: 'Salacia (Mobile Defense) is a popular farm; Ukko (Void Capture) also drops these.',
      notePt: 'Salacia (Defesa Móvel) é farm popular; Ukko (Captura Void) também dropa.' },
  },
  nano_spores: {
    name: { en: 'Nano Spores', 'pt-BR': 'Nano Esporos' },
    rarity: 'common',
    image: 'https://wiki.warframe.com/images/NanoSpores.png',
    description: {
      en: 'Common Infested-aligned material. Drops on Saturn, Eris, Deimos, Neptune, and Ceres. Comes in huge stacks.',
      'pt-BR': 'Material Infestado comum. Cai em Saturno, Eris, Deimos, Netuno e Ceres. Cai em pilhas enormes.',
    },
    usedFor: {
      en: 'Many Infested-aligned weapons and warframes (Saryn, Nidus, Atlas).',
      'pt-BR': 'Muitas armas Infestadas e warframes (Saryn, Nidus, Atlas).',
    },
    recommendedFarm: { planet: 'saturn', node: 'piscinas',
      noteEn: 'Piscinas (Dark Sector Survival) yields massive Nano Spores stacks per run.',
      notePt: 'Piscinas (Sobrevivência Dark Sector) dá pilhas enormes de Nano Esporos por run.' },
  },
  orokin_cell: {
    name: { en: 'Orokin Cell', 'pt-BR': 'Célula Orokin' },
    rarity: 'rare',
    image: 'https://wiki.warframe.com/images/OrokinCell.png',
    description: {
      en: 'Rare crafting component. Drops mainly on Saturn, Ceres, and Deimos (Isolation Vaults). One of the most-needed rare resources.',
      'pt-BR': 'Componente raro. Cai principalmente em Saturno, Ceres e Deimos (Cofres de Isolamento). Um dos recursos raros mais pedidos.',
    },
    usedFor: {
      en: 'Rhino, Trinity, Mag, Nyx, Forma, and tons of weapons.',
      'pt-BR': 'Rhino, Trinity, Mag, Nyx, Forma e muitas armas.',
    },
    recommendedFarm: { planet: 'saturn', node: 'helene',
      noteEn: 'Helene (Defense) is the meta farm — 5 waves = 1 OC reward roll.',
      notePt: 'Helene (Defesa) é o farm meta — 5 waves = 1 chance de OC na recompensa.' },
  },
  neural_sensors: {
    name: { en: 'Neural Sensors', 'pt-BR': 'Sensores Neurais' },
    rarity: 'rare',
    image: 'https://wiki.warframe.com/images/NeuralSensors.png',
    description: {
      en: 'Rare Jupiter-exclusive component. Drops mainly from Corpus units and lockers on Jupiter.',
      'pt-BR': 'Componente raro exclusivo de Júpiter. Cai principalmente de unidades Corpus e armários em Júpiter.',
    },
    usedFor: {
      en: 'Mesa, Valkyr, Nyx, Loki, Trinity, plus various weapons.',
      'pt-BR': 'Mesa, Valkyr, Nyx, Loki, Trinity, e várias armas.',
    },
    recommendedFarm: { planet: 'jupiter', node: 'themisto',
      noteEn: 'Themisto (Alad V assassination) has a guaranteed Neural Sensors drop chance.',
      notePt: 'Themisto (assassinato do Alad V) tem chance garantida de drop de Sensores Neurais.' },
  },
  cryotic: {
    name: { en: 'Cryotic', 'pt-BR': 'Crióticos' },
    rarity: 'special',
    image: 'https://wiki.warframe.com/images/Cryotic.png',
    description: {
      en: 'Excavation-only resource. Each successful Excavator extracts 100 Cryotic. Not a passive drop — must run Excavation missions specifically.',
      'pt-BR': 'Recurso exclusivo de Escavação. Cada Escavador completo extrai 100 Crióticos. Não cai passivamente — tem que rodar missões de Escavação.',
    },
    usedFor: {
      en: 'Frost Prime, Ash, Hydroid, Atlas, and Cryotic-themed weapons.',
      'pt-BR': 'Frost Prime, Ash, Hydroid, Atlas e armas temáticas de Cryotic.',
    },
    recommendedFarm: { planet: 'earth', node: 'everest',
      noteEn: 'Everest (Earth Excavation) is the entry-level Cryotic farm; Hieracon (Pluto) for high-level.',
      notePt: 'Everest (Escavação na Terra) é o farm inicial; Hieracon (Plutão) pra high-level.' },
  },
  tellurium: {
    name: { en: 'Tellurium', 'pt-BR': 'Telúrio' },
    rarity: 'rare',
    image: 'https://wiki.warframe.com/images/Tellurium.png',
    description: {
      en: 'Rare resource from Sealab tileset (Uranus) and Empyrean (Railjack) missions. Bottleneck for Archwing and Railjack builds.',
      'pt-BR': 'Recurso raro do tileset Sealab (Urano) e missões Empyrean (Railjack). Gargalo de builds de Archwing e Railjack.',
    },
    usedFor: {
      en: 'Archwing weapons (Imperator, Velocitus), Hydroid Prime, Saryn Prime, Railjack parts.',
      'pt-BR': 'Armas de Archwing (Imperator, Velocitus), Hydroid Prime, Saryn Prime, partes de Railjack.',
    },
    recommendedFarm: { planet: 'uranus', node: 'ophelia',
      noteEn: 'Ophelia (Survival) drops Tellurium passively in long runs.',
      notePt: 'Ophelia (Sobrevivência) dropa Telúrio passivamente em runs longas.' },
  },
  oxium: {
    name: { en: 'Oxium', 'pt-BR': 'Óxio' },
    rarity: 'uncommon',
    image: 'https://wiki.warframe.com/images/Oxium.png',
    description: {
      en: 'Uncommon Corpus material. Drops only from Oxium Ospreys (kill before they self-destruct!). Found on most Corpus planets.',
      'pt-BR': 'Material Corpus incomum. Cai apenas de Oxium Ospreys (mate antes de se autodestruírem!). Em planetas Corpus.',
    },
    usedFor: {
      en: 'Zephyr (especially Prime), various Archwings, and Corpus-themed gear.',
      'pt-BR': 'Zephyr (especialmente Prime), vários Archwings e equipamentos Corpus.',
    },
    recommendedFarm: { planet: 'europa', node: 'larzac',
      noteEn: 'Larzac (Dark Sector Defense) spawns Oxium Ospreys consistently.',
      notePt: 'Larzac (Defesa Dark Sector) spawna Oxium Ospreys constantemente.' },
  },
  neurodes: {
    name: { en: 'Neurodes', 'pt-BR': 'Neuródios' },
    rarity: 'rare',
    image: 'https://wiki.warframe.com/images/Neurodes.png',
    description: {
      en: 'Rare bio-organic component. Drops on Earth, Lua, Eris, and Deimos. Iconic early-game bottleneck.',
      'pt-BR': 'Componente bio-orgânico raro. Cai em Terra, Lua, Eris e Deimos. Gargalo icônico do early game.',
    },
    usedFor: {
      en: 'Mag, Loki, Nyx, sentinels, and many weapons. Pretty much every early build needs them.',
      'pt-BR': 'Mag, Loki, Nyx, sentinelas e muitas armas. Quase toda build inicial pede.',
    },
    recommendedFarm: { planet: 'lua', node: 'plato',
      noteEn: 'Plato (Lua Exterminate) drops Neurodes consistently. Earth Caches also yield them.',
      notePt: 'Plato (Exterminar na Lua) dropa Neuródios consistentemente. Caches da Terra também dão.' },
  },
  mutagen_sample: {
    name: { en: 'Mutagen Sample', 'pt-BR': 'Amostra Mutagênica' },
    rarity: 'uncommon',
    image: 'https://wiki.warframe.com/images/MutagenSample.png',
    description: {
      en: 'Uncommon Infested material. Drops on Eris and from Deimos Infested. Core to many Infested-themed crafts.',
      'pt-BR': 'Material Infestado incomum. Cai em Eris e de Infestados em Deimos. Essencial pra muitos crafts Infestados.',
    },
    usedFor: {
      en: 'Nidus, Saryn, Atlas, Hema (lots!), and Infested-themed weapons.',
      'pt-BR': 'Nidus, Saryn, Atlas, Hema (muito!) e armas Infestadas.',
    },
    recommendedFarm: { planet: 'eris', node: 'akkad',
      noteEn: 'Akkad (Dark Sector Defense) is the meta Mutagen Sample farm.',
      notePt: 'Akkad (Defesa Dark Sector) é o farm meta de Amostra Mutagênica.' },
  },
  kuva: {
    name: { en: 'Kuva', 'pt-BR': 'Kuva' },
    rarity: 'special',
    image: 'https://wiki.warframe.com/images/Kuva.png',
    spoilerLocked: true,
    description: {
      en: 'Red Sentient-corrupted Orokin liquid. Drops from Kuva Siphons and Kuva Floods on Kuva-marked planets, plus various Kuva Fortress missions.',
      'pt-BR': 'Líquido Orokin vermelho corrompido pelos Sentientes. Cai de Kuva Siphons e Kuva Floods em planetas marcados, além de missões na Fortaleza Kuva.',
    },
    usedFor: {
      en: 'Riven reroll currency, Kuva Lich creation/customization, weapon variant rolls.',
      'pt-BR': 'Moeda pra rerollar Rivens, criação/customização de Kuva Liches, rolls de variantes de armas.',
    },
    recommendedFarm: { planet: 'kuva-fortress', node: 'taveuni',
      noteEn: 'Taveuni Survival yields Kuva passively. Kuva Survival on the Fortress is the highest pure-Kuva farm.',
      notePt: 'Survival de Taveuni dá Kuva passivamente. Kuva Survival na Fortaleza é o farm puro de Kuva mais alto.' },
  },
  entrati_lanthorn: {
    name: { en: 'Entrati Lanthorn', 'pt-BR': 'Lanthorn Entrati' },
    rarity: 'rare',
    image: 'https://wiki.warframe.com/images/EntratiLanthorn.png',
    spoilerLocked: true,
    description: {
      en: 'Rare Entrati-aligned crafting material. Drops from Isolation Vaults (Deimos Cambion Drift) and Murmur enemies in Albrecht\'s Laboratories.',
      'pt-BR': 'Material de craft Entrati raro. Cai de Cofres de Isolamento (Cambion Drift em Deimos) e inimigos do Murmúrio nos Laboratórios de Albrecht.',
    },
    usedFor: {
      en: 'Necramech parts, Helminth crafts, and several Cavia-aligned weapons.',
      'pt-BR': 'Partes de Necramech, crafts do Helminth e várias armas alinhadas aos Cavia.',
    },
    recommendedFarm: { planet: 'deimos', node: 'cambire',
      noteEn: 'Cambire (Alchemy) and Albrecht\'s missions drop Lanthorns regularly.',
      notePt: 'Cambire (Alquimia) e missões em Albrecht\'s dropam Lanthorns regularmente.' },
  },
  voca: {
    name: { en: 'Voca', 'pt-BR': 'Voca' },
    rarity: 'uncommon',
    image: 'https://wiki.warframe.com/images/EchoVoca.png',
    spoilerLocked: true,
    description: {
      en: 'Cavia syndicate currency from Albrecht\'s Laboratories. Three tiers: Shrill (500), Bellow (1k), Echo (2k) standing each. Drops from Murmur enemies.',
      'pt-BR': 'Moeda do sindicato Cavia, dos Laboratórios de Albrecht. Três tiers: Shrill (500), Bellow (1k), Echo (2k) de standing cada. Cai de inimigos do Murmúrio.',
    },
    usedFor: {
      en: 'Cavia syndicate standing — unlocks Melee Arcanes and Cavia-themed items.',
      'pt-BR': 'Standing do sindicato Cavia — desbloqueia Arcanes de melee e itens do tema Cavia.',
    },
    recommendedFarm: { planet: 'deimos', node: 'persto',
      noteEn: 'Persto (Survival) sustains heavy Voca drops over long runs.',
      notePt: 'Persto (Sobrevivência) sustenta drops pesados de Voca em runs longas.' },
  },
  voidplume_down: {
    name: { en: 'Voidplume Down', 'pt-BR': 'Penugem Voidplume' },
    rarity: 'uncommon',
    image: 'https://wiki.warframe.com/images/VoidplumeDown.png',
    spoilerLocked: true,
    description: {
      en: 'Common Zariman bounty reward. The most plentiful of 5 Voidplume tiers (Down, Vane, Crest, Pinion, Quill). Used as Holdfasts syndicate currency.',
      'pt-BR': 'Recompensa comum de bounties do Zariman. A mais abundante dos 5 tiers de Voidplume (Down, Vane, Crest, Pinion, Quill). Usada como moeda do sindicato Holdfasts.',
    },
    usedFor: {
      en: 'Cephalon Quell / Holdfasts standing — unlocks Zariman arcanes and weapons.',
      'pt-BR': 'Standing do Cephalon Quell / Holdfasts — desbloqueia arcanes e armas do Zariman.',
    },
    recommendedFarm: { planet: 'zariman', node: 'tuvul-commons',
      noteEn: 'Tuvul Commons (Void Cascade) consistently rewards Voidplume Down per rotation.',
      notePt: 'Tuvul Commons (Cascata Void) recompensa Voidplume Down consistentemente por rotação.' },
  },
};

// v1 mockup: 3 planets with the classic early boss-warframe drops + resources.
// Each assassination node carries `boss` + `warframeDrop` (slug from WARFRAMES_DATA).
// `resources` array lists slugs of resources that drop on the planet.
// Real scrape will follow — this is just enough to validate the UI flow.
const STAR_CHART = {
  planets: [
    {
      slug: 'earth',
      name: { en: 'Earth', 'pt-BR': 'Terra' },
      faction: 'grineer',
      levelRange: '1-25',
      image: 'https://wiki.warframe.com/images/Earth.png',
      resources: ['ferrite', 'rubedo', 'neurodes', 'cryotic'],
      nodes: [
        { slug: 'e-prime',   name: 'E Prime',   type: 'exterminate',    levelRange: '1-3'   },
        { slug: 'mariana',   name: 'Mariana',   type: 'exterminate',    levelRange: '1-3'   },
        { slug: 'lith',      name: 'Lith',      type: 'defense',        levelRange: '1-6'   },
        { slug: 'erpo',      name: 'Erpo',      type: 'mobile_defense', levelRange: '1-6'   },
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
      ],
    },
    {
      slug: 'venus',
      name: { en: 'Venus', 'pt-BR': 'Vênus' },
      faction: 'corpus',
      levelRange: '3-18',
      image: 'https://wiki.warframe.com/images/Venus.png',
      resources: ['polymer_bundle', 'circuits', 'alloy_plate'],
      nodes: [
        { slug: 'e-gate',    name: 'E Gate',    type: 'exterminate',    levelRange: '3-5'  },
        { slug: 'montes',    name: 'Montes',    type: 'exterminate',    levelRange: '3-8'  },
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
        { slug: 'syrtis',     name: 'Syrtis',     type: 'exterminate',    levelRange: '8-13' },
        { slug: 'ares',       name: 'Ares',       type: 'sabotage',       levelRange: '9-11' },
        { slug: 'arval',      name: 'Arval',      type: 'spy',            levelRange: '9-11' },
        { slug: 'gradivus',   name: 'Gradivus',   type: 'sabotage',       levelRange: '9-11' },
        { slug: 'augustus',   name: 'Augustus',   type: 'excavation',     levelRange: '9-14' },
        { slug: 'ara',        name: 'Ara',        type: 'capture',        levelRange: '10-12' },
        { slug: 'martialis',  name: 'Martialis',  type: 'rescue',         levelRange: '10-12' },
        { slug: 'kadesh',     name: 'Kadesh',     type: 'defense',        levelRange: '10-20', darkSector: true },
        { slug: 'wahiba',     name: 'Wahiba',     type: 'survival',       levelRange: '10-20', darkSector: true },
        { slug: 'war',        name: 'War',        type: 'assassination',  levelRange: '11-13', boss: 'Lt. Lech Kril', warframeDrop: 'frost' },
        { slug: 'vallis',     name: 'Vallis',     type: 'mobile_defense', levelRange: '11-13' },
        { slug: 'ultor',      name: 'Ultor',      type: 'exterminate',    levelRange: '11-13' },
        { slug: 'olympus',    name: 'Olympus',    type: 'disruption',     levelRange: '15-20' },
        { slug: 'tyana-pass', name: 'Tyana Pass', type: 'mirror_defense', levelRange: '25-30' },
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
        { slug: 'gabii',   name: 'Gabii',   type: 'survival',       levelRange: '15-25', darkSector: true },
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
        { slug: 'kepler',    name: 'Kepler',    type: 'archwing',       levelRange: '12-14' },
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
        'albrechts-laboratories': {
          name: { en: "Albrecht's Laboratories", 'pt-BR': 'Laboratórios de Albrecht' },
          note: { en: 'Unlocked after the Whispers in the Walls quest.',
                  'pt-BR': 'Desbloqueado após a quest Whispers in the Walls.' },
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
        { slug: 'terrorem',    name: 'Terrorem',    type: 'survival',       levelRange: '25-35' },
        { slug: 'exequias',    name: 'Exequias',    type: 'assassination',  levelRange: '30-35' },
        { slug: 'effervo',     name: 'Effervo',     type: 'assassination',  levelRange: '55-60', section: 'albrechts-laboratories', boss: 'The Fragmented' },
        { slug: 'armatus',     name: 'Armatus',     type: 'disruption',     levelRange: '55-60', section: 'albrechts-laboratories' },
        { slug: 'munio',       name: 'Munio',       type: 'mirror_defense', levelRange: '55-60', section: 'albrechts-laboratories' },
        { slug: 'nex',         name: 'Nex',         type: 'exterminate',    levelRange: '55-60', section: 'albrechts-laboratories' },
        { slug: 'persto',      name: 'Persto',      type: 'survival',       levelRange: '55-60', section: 'albrechts-laboratories' },
        { slug: 'cambire',     name: 'Cambire',     type: 'alchemy',        levelRange: '55-60', section: 'albrechts-laboratories' },
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
        { slug: 'galilea',       name: 'Galilea',         type: 'sabotage',       levelRange: '15-20' },
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
        { slug: 'pandora',   name: 'Pandora',   type: 'pursuit',        levelRange: '21-23' },
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
        { slug: 'caelus',    name: 'Caelus',    type: 'interception',   levelRange: '24-29' },
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
        { slug: 'brutus',    name: 'Brutus',    type: 'ascension',      levelRange: '45-50' },
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
        { slug: 'salacia',   name: 'Salacia',   type: 'mobile_defense', levelRange: '27-32' },
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
        { slug: 'jordas-golem',      name: 'Jordas Golem',      type: 'assassination',   levelRange: '32-34', boss: 'Jordas Golem',    warframeDrop: 'atlas' },
        { slug: 'brugia',            name: 'Brugia',            type: 'rescue',          levelRange: '32-36' },
        { slug: 'isos',              name: 'Isos',              type: 'capture',         levelRange: '32-36' },
        { slug: 'solium',            name: 'Solium',            type: 'mobile_defense',  levelRange: '34-38' },
        { slug: 'saxis',             name: 'Saxis',             type: 'exterminate',     levelRange: '34-38' },
        { slug: 'oestrus',           name: 'Oestrus',           type: 'infested_salvage',levelRange: '34-38' },
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
        { slug: 'kappa',     name: 'Kappa',     type: 'disruption',     levelRange: '34-38' },
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
        { slug: 'plato',      name: 'Plato',      type: 'exterminate',    levelRange: '25-30' },
        { slug: 'tycho',      name: 'Tycho',      type: 'survival',       levelRange: '25-30' },
        { slug: 'copernicus', name: 'Copernicus', type: 'capture',        levelRange: '25-30' },
        { slug: 'apollo',     name: 'Apollo',     type: 'disruption',     levelRange: '35-40' },
        { slug: 'circulus',   name: 'Circulus',   type: 'survival',       levelRange: '80-100' },
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
        { slug: 'pago',    name: 'Pago',    type: 'spy',            levelRange: '31-33' },
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
      spoilerLocked: true, // Unlocked via The Angels of the Zariman quest
      resources: ['voidplume_down'],
      note: {
        en: 'Unlocked after completing The Angels of the Zariman quest. The ruling faction (Kuva Grineer / Juno Corpus) rotates every 2.5h.',
        'pt-BR': 'Desbloqueado após a quest The Angels of the Zariman. A facção dominante (Kuva Grineer / Juno Corpus) alterna a cada 2.5h.',
      },
      nodes: [
        { slug: 'the-greenway',     name: 'The Greenway',     type: 'mobile_defense',  levelRange: '50-55' },
        { slug: 'halako-perimeter', name: 'Halako Perimeter', type: 'exterminate',     levelRange: '50-55' },
        { slug: 'oro-works',        name: 'Oro Works',        type: 'void_armageddon', levelRange: '50-55' },
        { slug: 'everview-arc',     name: 'Everview Arc',     type: 'void_flood',      levelRange: '50-55' },
        { slug: 'tuvul-commons',    name: 'Tuvul Commons',    type: 'void_cascade',    levelRange: '50-55' },
      ],
    },
  ],
};

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

// Reverse-lookup: given a warframe slug, find the planet + node it drops from
// in STAR_CHART (used by the acquisition link in the Archetypes tab).
function findWarframeDropNode(warframeSlug) {
  if (!warframeSlug) return null;
  for (const planet of STAR_CHART.planets) {
    for (const node of planet.nodes) {
      if (node.warframeDrop === warframeSlug) {
        return { planet, node };
      }
    }
  }
  return null;
}

function getPlanet(slug) {
  return STAR_CHART.planets.find(p => p.slug === slug) || null;
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
    pos: { en: 'Extends procs (Slash bleed, Heat armor strip, Viral). Useful but secondary.', 'pt-BR': 'Estende procs (sangramento de Corte, strip de Calor, Viral). Útil mas secundário.' },
    neg: { en: 'Shorter procs — less time for stack-up effects. Mild.', 'pt-BR': 'Procs mais curtos — menos tempo pra stacks acumularem. Leve.' },
  },
  toxin: {
    pos: { en: 'Adds Toxin element — combines with Cold for Viral, with Electricity for Corrosive.', 'pt-BR': 'Adiciona Tóxico — combina com Frio pra Viral, com Eletricidade pra Corrosivo.' },
    neg: { en: 'Reduces Toxin damage. Mild unless the build relies on a specific elemental combo.', 'pt-BR': 'Reduz dano Tóxico. Leve, a menos que a build dependa da combinação elemental.' },
  },
  heat: {
    pos: { en: 'Adds Heat — strips armor and procs panic. Standalone strong, also combines.', 'pt-BR': 'Adiciona Calor — remove armadura e causa pânico. Forte sozinho, combina também.' },
    neg: { en: 'Reduces Heat. Mild on most builds.', 'pt-BR': 'Reduz Calor. Leve na maioria das builds.' },
  },
  cold: {
    pos: { en: 'Adds Cold — slows enemies and feeds Viral combos.', 'pt-BR': 'Adiciona Frio — lenta inimigos e alimenta combos Virais.' },
    neg: { en: 'Reduces Cold. Mild unless slow/Viral is critical.', 'pt-BR': 'Reduz Frio. Leve, a menos que slow/Viral seja crítico.' },
  },
  electricity: {
    pos: { en: 'Adds Electricity — chains between enemies, feeds Magnetic/Corrosive/Radiation combos.', 'pt-BR': 'Adiciona Eletricidade — encadeia entre inimigos, alimenta combos Magnético/Corrosivo/Radiação.' },
    neg: { en: 'Reduces Electricity. Mild on most builds.', 'pt-BR': 'Reduz Eletricidade. Leve na maioria das builds.' },
  },
  impact: {
    pos: { en: 'Adds Impact. Generally low-value — Slash dominates physical procs.', 'pt-BR': 'Adiciona Impacto. Geralmente fraco — Corte domina os procs físicos.' },
    neg: { en: 'Reduces Impact. Often beneficial on Slash-focused weapons (more bleed procs).', 'pt-BR': 'Reduz Impacto. Frequentemente benéfico em armas focadas em Corte (mais sangramento).' },
  },
  puncture: {
    pos: { en: 'Adds Puncture. Decent on armor-heavy targets, weakens enemy damage.', 'pt-BR': 'Adiciona Penetração. Bom contra armadura, enfraquece o dano inimigo.' },
    neg: { en: 'Reduces Puncture. Neutral on most builds.', 'pt-BR': 'Reduz Penetração. Neutro na maioria das builds.' },
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
    neg: { en: 'Can underflow and leave you with 0 ammo. Game-breaking — harmful.', 'pt-BR': 'Pode estourar e te deixar com 0 munição. Quebra o jogo — prejudicial.' },
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
    pos: { en: 'More recoil — actively bad, wastes the slot.', 'pt-BR': 'Mais recuo — ativamente ruim, desperdiça o slot.' },
    neg: { en: 'Less recoil. Best free negative — always welcomed.', 'pt-BR': 'Menos recuo. Melhor negativo grátis — sempre bem-vindo.' },
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
  positive: ['multishot', 'damage', 'critical_chance', 'critical_damage', 'status_chance'],
  freeNegative: ['zoom', 'recoil'],
  avoidNegative: ['damage', 'multishot', 'fire_rate', 'critical_chance', 'ammo_max'],
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

function effectiveNegTier(slug, weapon) {
  const def = RIVEN_STATS[slug];
  if (!def) return null;
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

  const weapon = weaponSlug ? weaponBySlug(weaponSlug) : null;

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

  const raw = sumPositives + sumNegMod + shapeBonus;
  const score = maxPossible > 0
    ? Math.max(0, Math.min(10, (raw / maxPossible) * 10))
    : 0;

  const verdict = rivenVerdictFor(score);

  return {
    score: Math.round(score * 10) / 10,
    verdict,
    shapeKey,
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
  faction_grineer:   ['dano em grineer', 'damage to grineer'],
  faction_corpus:    ['dano em corpus', 'damage to corpus'],
  faction_infested:  ['dano em infestados', 'damage to infested'],
  faction_corrupted: ['dano em corrompidos', 'damage to corrupted'],
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

  // Riven cards wrap long stat labels across two lines ("Duração de\nStatus").
  // A line is a continuation if it has NO multi-digit run (so it isn't a stat-
  // value line) AND doesn't start with +/−. We use "2+ consecutive digits"
  // instead of "any digit" because labels can contain single-digit fragments
  // like "(x2 para Bows)" — a continuation of the previous stat, not a new
  // one. Stat values like "132" or "36,8" still have a 2+ run somewhere, and
  // single-digit signed values like "+6,3s" still trigger via the sign check.
  const rawLines = text.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);
  const lines = [];
  for (const line of rawLines) {
    const hasMultiDigit = /\d{2,}/.test(line);
    const startsWithSign = /^[+\-−]/.test(line);
    if (lines.length > 0 && !hasMultiDigit && !startsWithSign) {
      lines[lines.length - 1] += ' ' + line;
    } else {
      lines.push(line);
    }
  }
  try { console.log('[Riven OCR] joined lines:', lines); } catch (e) {}

  const detected = [];
  const seen = new Set();

  // Allow internal whitespace inside the number (OCR splits digits sometimes).
  // Unit char is OPTIONAL and can be %, s (seconds — Combo Duration), m
  // (meters — Range), or x (multiplier — Initial Combo, faction damage). We
  // strip it from the value so it doesn't bleed into the label (otherwise
  // "+6,3s de Duração do Combo" would give label "s de Duração do Combo").
  const RX = /([+\-−]?)\s*(\d[\d\s]*(?:[.,]\s*\d[\d\s]*)?)\s*[%smx]?\s*(?:de\s+)?(.+)$/i;

  for (const line of lines) {
    const m = line.match(RX);
    if (!m) continue;

    const rawSign = (m[1] || '').trim();
    const sign = (rawSign === '-' || rawSign === '−') ? 'neg' : 'pos';
    const rawValue = m[2].replace(/\s+/g, '').replace(',', '.');
    let value = parseFloat(rawValue);
    if (!isFinite(value)) continue;

    let labelRaw = m[3].trim();
    // Drop trailing junk from card layout (drain markers, etc.)
    labelRaw = labelRaw.replace(/[<>\[\]{}|]/g, '').trim();
    if (labelRaw.length < 3) continue;

    const match = matchStatLabel(labelRaw);
    if (!match) continue;
    if (seen.has(match.slug)) continue;

    // Per-stat valid value range — most riven stats are percentages between
    // 5–500%, but melee Range / Combo Duration / Initial Combo use meters,
    // seconds, or a small integer respectively. Per-stat min/max override
    // the defaults.
    const def = RIVEN_STATS[match.slug];
    const minVal = def && typeof def.minVal === 'number' ? def.minVal : 5;
    const maxVal = def && typeof def.maxVal === 'number' ? def.maxVal : 500;

    // Recovery: if value is too low AND there's letter-junk before the number
    // (signals OCR mangled the leading digit), try prepending "1" — the most
    // common case is "+100.9%" being read as "et] 00.9%" because the leading
    // "+1" got corrupted into garbage characters.
    const matchStart = m.index || 0;
    const before = line.substring(0, matchStart);
    // Junk = any character that isn't a digit, sign, or whitespace. Catches
    // letters, square/curly braces, and non-ASCII glyphs the OCR sometimes
    // produces in place of "+" (e.g. «, ‹, ×, x, NX).
    const hasJunkBefore = before.length > 0 && /[^\d+\-\s−]/.test(before);

    if (value < minVal && hasJunkBefore) {
      // Forward recovery: OCR ate a leading "1" — try prepending it.
      // Common when "+100.9%" gets read as "et] 00.9%".
      const recovered = parseFloat('1' + rawValue);
      if (isFinite(recovered) && recovered >= minVal && recovered <= maxVal) {
        try { console.log(`[Riven OCR] recovered value ${recovered} from "${line}" (assumed dropped leading 1)`); } catch (e) {}
        value = recovered;
      }
    } else if (
      hasJunkBefore
      && def && typeof def.typicalMax === 'number'
      && value > def.typicalMax
      && rawValue.length > 1
    ) {
      // Reverse recovery: stats with a known typical ceiling (Recoil, Zoom,
      // Fire Rate, Reload, Status Duration) that come in well over it usually
      // got an extra leading digit injected by the OCR from misreading the
      // sign — e.g. "+95.7% Weapon Recoil" → "x 195.7%". Strip the leading
      // digit if the stripped value falls within the typical range.
      const stripped = parseFloat(rawValue.substring(1));
      if (isFinite(stripped) && stripped >= minVal && stripped <= def.typicalMax) {
        try { console.log(`[Riven OCR] stripped leading digit from "${line}" — ${value} → ${stripped} (typical max for ${match.slug}: ${def.typicalMax})`); } catch (e) {}
        value = stripped;
      }
    }

    if (value < minVal || value > maxVal) {
      try { console.log(`[Riven OCR] rejected "${line}" — value ${value} outside [${minVal}, ${maxVal}] for ${match.slug}`); } catch (e) {}
      continue;
    }

    seen.add(match.slug);
    detected.push({ slug: match.slug, sign, value, confidence: match.confidence, labelRaw });
    if (detected.length >= 4) break;
  }

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

async function runRivenOcr(file) {
  // Reset previous result/warnings.
  state.riven.result = null;
  state.riven.warning = null;
  state.riven.imageError = null;
  state.riven.imageDetectedCount = 0;

  // Show preview while we work.
  if (state.riven.imagePreviewUrl) URL.revokeObjectURL(state.riven.imagePreviewUrl);
  state.riven.imagePreviewUrl = URL.createObjectURL(file);

  try {
    state.riven.imageState = 'loading_lib';
    state.riven.imageProgress = 0;
    renderRivens();
    await ensureTesseractLoaded();

    state.riven.imageState = 'processing';
    state.riven.imageProgress = 0;
    renderRivens();

    const preprocessed = await preprocessImageForOcr(state.riven.imagePreviewUrl);

    const { data } = await window.Tesseract.recognize(preprocessed, 'eng+por', {
      logger: m => {
        if (m.status === 'recognizing text' && typeof m.progress === 'number') {
          state.riven.imageProgress = m.progress;
          updateRivenOcrProgressUi();
        }
      },
    });

    const detected = parseRivenOcrText(data.text || '');
    if (detected.length === 0) {
      state.riven.imageState = 'error';
      state.riven.imageError = 'no_stats';
      renderRivens();
      return;
    }

    // Try to identify the weapon by name from the raw OCR text. The riven card
    // shows the weapon name in a large prominent line right above the stats
    // (e.g. "Nukor Hexa-acrides" — first token is the weapon name).
    const detectedWeapon = detectWeaponFromOcr(data.text || '');
    if (detectedWeapon) {
      state.riven.weapon = detectedWeapon.slug;
      state.riven.weaponAutoDetected = true;
      state.riven.category = detectedWeapon.category;
    } else {
      // Auto-detect category from the detected stats — if any stat is melee-exclusive
      // (Range, Combo Duration, Initial Combo, etc.) we switch the category to melee
      // so the dropdown contains the right options.
      const inferred = inferCategoryFromDetected(detected);
      if (inferred) state.riven.category = inferred;
    }

    // Auto-populate the form below. Slot count matches the detected count
    // (between 2 and 4). Value carries its sign — negative effects become
    // negative numbers (e.g. "-30").
    state.riven.slots = Math.min(4, Math.max(2, detected.length));
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
        // Faction damage is stored as a multiplier (0.75x / 1.23x).
        // In-game: positive roll shows as "+30%" (percentage), negative as
        // "x0.73" (multiplier). The OCR captures the raw number — if it
        // came from the percentage form (value > 5 typically), convert to
        // a multiplier so the form treats it correctly.
        const raw = parseFloat(d.value);
        if (d.sign === 'neg') {
          // Should not happen for faction damage, but handle as "1 - X%"
          value = (1 - raw / 100).toFixed(2);
        } else if (raw > 5) {
          // Looks like a percentage from a positive faction-damage roll
          value = (1 + raw / 100).toFixed(2);
        } else {
          // Already a multiplier (e.g. 0.73)
          value = String(raw);
        }
      } else {
        value = d.sign === 'neg' ? '-' + d.value : String(d.value);
      }
      fresh[i] = { slug: d.slug, value };
    });
    state.riven.stats = fresh;
    state.riven.imageState = 'success';
    state.riven.imageDetectedCount = detected.length;
    renderRivens();
  } catch (err) {
    console.error('Riven OCR error:', err);
    state.riven.imageState = 'error';
    state.riven.imageError = err && err.message && err.message.includes('Tesseract load')
      ? 'load_failed' : 'ocr_failed';
    renderRivens();
  }
}

function updateRivenOcrProgressUi() {
  const fill = document.getElementById('riven-ocr-progress-fill');
  if (fill) fill.style.width = `${Math.round(state.riven.imageProgress * 100)}%`;
}

function setupRivenUploadEvents() {
  const zone = document.getElementById('riven-upload-zone');
  const input = document.getElementById('riven-image-input');
  const changeBtn = document.getElementById('riven-image-change-btn');
  const removeBtn = document.getElementById('riven-image-remove-btn');
  if (!zone || !input) return;

  zone.addEventListener('click', () => input.click());
  changeBtn?.addEventListener('click', () => input.click());
  removeBtn?.addEventListener('click', () => resetRivenForm());

  input.addEventListener('change', e => {
    const file = e.target.files && e.target.files[0];
    if (file) runRivenOcr(file);
    input.value = ''; // allow re-uploading the same file
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
    if (file && file.type.startsWith('image/')) runRivenOcr(file);
  });
}

function resetRivenForm() {
  if (state.riven.imagePreviewUrl) {
    try { URL.revokeObjectURL(state.riven.imagePreviewUrl); } catch (e) {}
  }
  state.riven.category = 'primary';
  state.riven.slots = 2;
  state.riven.stats = [
    { slug: null, value: '' },
    { slug: null, value: '' },
    { slug: null, value: '' },
    { slug: null, value: '' },
  ];
  state.riven.result = null;
  state.riven.warning = null;
  state.riven.imageState = 'idle';
  state.riven.imagePreviewUrl = null;
  state.riven.imageProgress = 0;
  state.riven.imageError = null;
  state.riven.imageDetectedCount = 0;
  state.riven.weapon = null;
  state.riven.weaponAutoDetected = false;

  const fileInput = document.getElementById('riven-image-input');
  if (fileInput) fileInput.value = '';
  const previewImg = document.getElementById('riven-image-preview-img');
  if (previewImg) previewImg.src = '';

  renderRivens();
}

// ============== Weapon picker render + state ==============

function renderRivenWeaponBtn() {
  const btn = document.getElementById('riven-weapon-btn');
  if (!btn) return;
  btn.innerHTML = '';

  if (!state.riven.weapon) {
    btn.classList.remove('has-weapon');
    const icon = document.createElement('span');
    icon.className = 'weapon-btn-icon';
    icon.textContent = '🔍';
    const text = document.createElement('span');
    text.className = 'weapon-btn-name';
    text.textContent = t('riven_weapon_none');
    btn.appendChild(icon);
    btn.appendChild(text);
    return;
  }

  const w = weaponBySlug(state.riven.weapon);
  if (!w) {
    state.riven.weapon = null;
    return renderRivenWeaponBtn();
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
      // Fallback to the lightning emoji if the wiki URL ever 404s.
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
  if (state.riven.weaponAutoDetected) {
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
    clearWeapon();
  });
  btn.appendChild(clear);
}

function openWeaponPicker() {
  state.weaponPicker.open = true;
  state.weaponPicker.selected = state.riven.weapon || null;
  // Default the picker's tab to the riven category if it has anything,
  // otherwise the only populated one (secondary for v3).
  state.weaponPicker.category = WEAPONS[state.riven.category]?.length
    ? state.riven.category
    : 'secondary';
  state.weaponPicker.search = '';
  // Reset family expansion, then auto-expand the display-family of the
  // currently selected weapon (if any) so it's visible after open. Uses
  // displayFamily so picking Kuva Karak expands the Karak group, not the
  // empty Kuva Karak group.
  state.weaponPicker.expandedFamilies = new Set();
  const sel = state.weaponPicker.selected ? weaponBySlug(state.weaponPicker.selected) : null;
  if (sel) {
    const df = displayFamily(sel);
    if (df) state.weaponPicker.expandedFamilies.add(df);
  }
  document.getElementById('weapon-modal').classList.remove('hidden');
  renderWeaponPicker();
  // Focus search after the modal renders
  setTimeout(() => document.getElementById('weapon-search')?.focus(), 0);
}

function closeWeaponPicker() {
  state.weaponPicker.open = false;
  document.getElementById('weapon-modal').classList.add('hidden');
}

function selectWeapon(slug, autoDetected = false) {
  state.riven.weapon = slug;
  state.riven.weaponAutoDetected = autoDetected;
  // Snap category to the selected weapon's category
  const w = weaponBySlug(slug);
  if (w) state.riven.category = w.category;
  // Invalidate any previous evaluation so the score reflects new context
  state.riven.result = null;
  renderRivens();
}

function clearWeapon() {
  state.riven.weapon = null;
  state.riven.weaponAutoDetected = false;
  state.riven.result = null;
  renderRivens();
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
  ['primary', 'secondary', 'melee'].forEach(cat => {
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
    selectWeapon(w.slug, false);
    closeWeaponPicker();
  });
  panel.appendChild(useBtn);
}

function setupWeaponPickerEvents() {
  document.getElementById('riven-weapon-btn')?.addEventListener('click', openWeaponPicker);
  document.getElementById('weapon-modal-close')?.addEventListener('click', closeWeaponPicker);
  document.getElementById('weapon-modal-backdrop')?.addEventListener('click', closeWeaponPicker);

  const search = document.getElementById('weapon-search');
  search?.addEventListener('input', () => {
    state.weaponPicker.search = search.value;
    renderWeaponList();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && state.weaponPicker.open) {
      e.preventDefault();
      closeWeaponPicker();
    }
  });
}

// ============== Credits modal ==============

function openCreditsModal() {
  document.getElementById('credits-modal')?.classList.remove('hidden');
}
function closeCreditsModal() {
  document.getElementById('credits-modal')?.classList.add('hidden');
}

function setupCreditsEvents() {
  document.getElementById('credits-btn')?.addEventListener('click', openCreditsModal);
  document.getElementById('credits-modal-close')?.addEventListener('click', closeCreditsModal);
  document.getElementById('credits-modal-backdrop')?.addEventListener('click', closeCreditsModal);
  document.addEventListener('keydown', e => {
    const modal = document.getElementById('credits-modal');
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      e.preventDefault();
      closeCreditsModal();
    }
  });
}

function formatHighlights(text) {
  // Escape HTML, then turn [[...]] markers into highlighted spans.
  const escaped = String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  return escaped.replace(/\[\[([^\]]+)\]\]/g, '<span class="hl">$1</span>');
}

function statusName(slug) {
  const eff = STATUS_EFFECTS[slug];
  if (!eff) return slug;
  return eff.name[state.locale] || eff.name[DEFAULT_LOCALE] || slug;
}

function statusDescription(slug) {
  const eff = STATUS_EFFECTS[slug];
  if (!eff) return '';
  return eff.description[state.locale] || eff.description[DEFAULT_LOCALE] || '';
}

function statusProc(slug) {
  const eff = STATUS_EFFECTS[slug];
  if (!eff) return '';
  return eff.proc[state.locale] || eff.proc[DEFAULT_LOCALE] || '';
}

function factionName(slug) {
  const f = FACTIONS[slug];
  if (!f) return slug;
  return f[state.locale] || f[DEFAULT_LOCALE] || slug;
}

function combinationSlug(elemSet) {
  if (elemSet.size !== 2) return null;
  const key = [...elemSet].sort().join('+');
  return STATUS_COMBINATIONS[key] || null;
}

function applyWarframeStats(slug) {
  const data = WARFRAMES_DATA[slug];
  STATS.forEach(s => {
    const input = document.querySelector(`input[data-key="${s.key}"]`);
    if (input) input.value = data ? (data.stats[s.key] ?? 0) : 0;
  });
  updateChart();
  return !!data;
}

// ============== Estado e render ==============

const state = {
  archetype: 'canhao-de-vidro',
  warframe: null,
  activeStats: new Set(),
  activeAbility: 0,
  variant: 'base',
  form: 'normal', // 'normal' | <variant-key> (e.g. 'broken', 'day')
  locale: detectInitialLocale(),
  tab: null, // 'archetypes' | 'glossary' | 'star-chart' | 'rivens' — set by initial selectTab('archetypes') call
  statusPhysical: null, // 'impact' | 'puncture' | 'slash' | null
  statusElementals: new Set(), // subset of {'heat','cold','electricity','toxin'}, max 2
  statusSpecial: null, // 'void' | 'tau' | 'true' | null
  riven: {
    category: 'primary',
    slots: 2,
    stats: [
      { slug: null, value: '' },
      { slug: null, value: '' },
      { slug: null, value: '' },
      { slug: null, value: '' },
    ],
    result: null, // last evaluation result or null
    warning: null, // 'pick_stat' | 'duplicate' | null
    imageState: 'idle', // 'idle' | 'loading_lib' | 'processing' | 'success' | 'error'
    imagePreviewUrl: null, // object URL of last uploaded image (for preview)
    imageProgress: 0, // 0..1 during OCR
    imageError: null, // 'no_stats' | 'ocr_failed' | 'load_failed'
    imageDetectedCount: 0,
    weapon: null,            // slug of selected weapon, or null
    weaponAutoDetected: false, // true when set by OCR (so we can show "auto" indicator)
  },
  weaponPicker: {
    open: false,
    category: 'secondary', // active tab in the picker modal
    search: '',
    selected: null, // slug currently highlighted in the picker
    expandedFamilies: new Set(), // slugs of families expanded in the list
  },
  starChart: {
    expandedPlanet: null, // slug of in-place expanded planet card, or null = all collapsed
    filter: 'all',        // mission type slug or 'all' or 'assassination'
    search: '',
    resourceSearch: '',   // search query in the global all-resources section
    // Spoiler protection — hides quest-locked planets (Lua/Kuva Fortress/Zariman),
    // the Albrecht's Laboratories section within Deimos, and their exclusive
    // resources. Persisted in localStorage so the choice survives reloads.
    showSpoilers: (() => {
      try { return localStorage.getItem('starChart.showSpoilers') === 'true'; }
      catch (e) { return false; }
    })(),
  },
};

function getWarframeDetails(slug) {
  const pt = WARFRAMES_DETAILS[slug];
  if (!pt) return null;
  if (state.locale === 'pt-BR') return pt;
  const en = (typeof WARFRAMES_DETAILS_EN !== 'undefined') ? WARFRAMES_DETAILS_EN[slug] : null;
  if (!en) return pt;
  return {
    title: en.title || pt.title,
    description: en.description || pt.description,
    portraits: pt.portraits,
    abilities: pt.abilities.map((ptAb, i) => {
      const enAb = en.abilities && en.abilities[i];
      if (!enAb) return ptAb;
      return {
        type: ptAb.type,
        icon: ptAb.icon,
        name: enAb.name || ptAb.name,
        description: enAb.description || ptAb.description,
      };
    }),
    acquisition: en.acquisition || pt.acquisition,
  };
}

function setLocale(loc) {
  if (!SUPPORTED_LOCALES.includes(loc)) return;
  state.locale = loc;
  try { localStorage.setItem('tenno-helper-locale', loc); } catch (e) {}

  document.documentElement.setAttribute('lang', loc === 'pt-BR' ? 'pt-BR' : 'en');
  document.title = t('page_title');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const raw = t(el.dataset.i18n);
    if (el.hasAttribute('data-i18n-html')) {
      el.innerHTML = formatHighlights(raw);
    } else {
      el.textContent = raw;
    }
  });

  // data-i18n-attr="<attr>:<key>" — sets the attribute (e.g. placeholder, aria-label)
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const spec = el.dataset.i18nAttr || '';
    spec.split(';').forEach(pair => {
      const [attr, key] = pair.split(':').map(s => s.trim());
      if (attr && key) el.setAttribute(attr, t(key));
    });
  });

  document.querySelectorAll('.lang-item').forEach(item => {
    item.classList.toggle('active', item.dataset.lang === loc);
  });

  const flagEl = document.getElementById('lang-flag');
  const nameEl = document.getElementById('lang-name');
  const activeItem = document.querySelector(`.lang-item[data-lang="${loc}"]`);
  if (activeItem) {
    const img = activeItem.querySelector('img.flag');
    if (img && flagEl) flagEl.src = img.src;
    if (nameEl) nameEl.textContent = t('lang_name');
  }

  // Rebuild static UI that bakes localized strings into the DOM.
  document.getElementById('stats-bar').innerHTML = '';
  buildStatsBar();
  document.getElementById('archetype-bar').innerHTML = '';
  buildArchetypeBar();
  buildStatusBars();
  rebuildChartLabels();
  renderRivens();

  render();
  renderStatusEffects();
}

function selectArchetype(slug) {
  // Toggle: clicar no arquétipo já ativo (ou passar null) desseleciona tudo.
  if (slug === null || state.archetype === slug) {
    state.archetype = null;
    state.activeStats = new Set();
    state.warframe = null;
    render();
    return;
  }
  state.archetype = slug;
  const archetype = ARCHETYPES.find(a => a.slug === slug);
  // Selecionar um arquétipo desliga o filtro de stats — modo "exclusivo".
  state.activeStats = new Set();
  state.warframe = archetype && archetype.warframes.length > 0
    ? archetype.warframes[0].toLowerCase()
    : null;
  state.activeAbility = 0;
  render();
}

function selectStat(key) {
  // Signature stats from a selected archetype appear "lit" implicitly via render().
  // Promote them to the explicit filter on first click so toggling actually deselects.
  if (state.activeStats.size === 0 && state.archetype) {
    const arch = ARCHETYPES.find(a => a.slug === state.archetype);
    if (arch) state.activeStats = new Set(arch.signature);
  }
  if (state.activeStats.has(key)) {
    state.activeStats.delete(key);
  } else {
    state.activeStats.add(key);
  }
  // Once the user is manually filtering, the auto-archetype/warframe selection
  // should release — the list of matching archetypes will glow as candidates.
  if (state.activeStats.size > 0) {
    state.archetype = null;
    state.warframe = null;
  }
  render();
}

function selectWarframe(slug) {
  if (state.warframe === slug) {
    // Toggle off: desseleciona warframe + arquétipo + stats.
    state.warframe = null;
    state.archetype = null;
    state.activeStats = new Set();
  } else {
    state.warframe = slug;
    state.activeAbility = 0;
    state.variant = 'base';
    state.form = 'normal';
    const arch = WARFRAME_TO_ARCHETYPE[slug];
    if (arch && arch !== state.archetype) {
      state.archetype = arch;
      state.activeStats = new Set();
    }
  }
  render();
}

function selectAbility(idx) {
  state.activeAbility = idx;
  renderAbilityPanel();
}

function selectVariant(v) {
  state.variant = v;
  renderPortrait();
}

function selectForm(f) {
  state.form = f;
  renderPortrait();
}

// ----- Status Effects: state transitions -----

function selectTab(tab) {
  if (state.tab === tab) return;
  state.tab = tab;
  document.getElementById('tab-archetypes').classList.toggle('hidden', tab !== 'archetypes');
  document.getElementById('tab-star-chart').classList.toggle('hidden', tab !== 'star-chart');
  document.getElementById('tab-glossary').classList.toggle('hidden', tab !== 'glossary');
  document.getElementById('tab-rivens').classList.toggle('hidden', tab !== 'rivens');

  const archBtn = document.getElementById('archetype-btn');
  const starBtn = document.getElementById('star-chart-btn');
  const glossBtn = document.getElementById('glossary-btn');
  const rivensBtn = document.getElementById('rivens-btn');
  if (archBtn) {
    archBtn.classList.toggle('active', tab === 'archetypes');
    archBtn.style.setProperty('--neon-color', '#d4b25a');
  }
  if (starBtn) {
    starBtn.classList.toggle('active', tab === 'star-chart');
    starBtn.style.setProperty('--neon-color', '#5ec0e8');
  }
  if (glossBtn) {
    glossBtn.classList.toggle('active', tab === 'glossary');
    glossBtn.style.setProperty('--neon-color', '#7fd13b');
  }
  if (rivensBtn) {
    rivensBtn.classList.toggle('active', tab === 'rivens');
    rivensBtn.style.setProperty('--neon-color', '#b888ff');
  }

  if (tab === 'glossary') renderStatusEffects();
  if (tab === 'rivens') renderRivens();
  if (tab === 'star-chart') renderStarChart();
}

function selectStatusPhysical(slug) {
  if (state.statusPhysical === slug) {
    state.statusPhysical = null;
  } else {
    state.statusPhysical = slug;
    state.statusElementals.clear();
    state.statusSpecial = null;
  }
  renderStatusEffects();
}

function selectStatusElemental(slug) {
  if (state.statusElementals.has(slug)) {
    state.statusElementals.delete(slug);
  } else {
    if (state.statusPhysical) state.statusPhysical = null;
    if (state.statusSpecial) state.statusSpecial = null;
    if (state.statusElementals.size >= 2) {
      // Evict the oldest (first inserted) to keep at most 2.
      const first = state.statusElementals.values().next().value;
      state.statusElementals.delete(first);
    }
    state.statusElementals.add(slug);
  }
  renderStatusEffects();
}

function selectStatusSpecial(slug) {
  if (state.statusSpecial === slug) {
    state.statusSpecial = null;
  } else {
    state.statusSpecial = slug;
    state.statusPhysical = null;
    state.statusElementals.clear();
  }
  renderStatusEffects();
}

function render() {
  const archetype = state.archetype
    ? ARCHETYPES.find(a => a.slug === state.archetype)
    : null;
  const hasArchetype = !!archetype;

  // Stat pills active state: union of explicit filter and selected archetype's signature
  const litStats = new Set(state.activeStats);
  if (archetype) archetype.signature.forEach(s => litStats.add(s));
  document.querySelectorAll('.stat-pill').forEach(p => {
    p.classList.toggle('active', litStats.has(p.dataset.stat));
  });

  // Archetype pills:
  //   - Sem nada selecionado: todos no estado padrão (nenhum esmaecido).
  //   - Só com arquétipo: ativo brilha, resto esmaecido.
  //   - Com filtro de stats (AND): matches brilham, resto esmaecido.
  const hasFilter = state.activeStats.size > 0;
  const filterArr = [...state.activeStats];
  document.querySelectorAll('.archetype-pill').forEach(p => {
    const slug = p.dataset.archetype;
    const arch = ARCHETYPES.find(a => a.slug === slug);
    const sig = arch ? arch.signature : [];
    const isActive = slug === state.archetype;
    const isMatch = hasFilter && filterArr.every(s => sig.includes(s));

    p.classList.toggle('active', isActive);
    p.classList.toggle('matched', hasFilter && isMatch && !isActive);
    p.classList.toggle('dimmed',
      hasFilter ? !isMatch : (hasArchetype && !isActive));
  });

  document.querySelector('.chart-wrapper').classList.toggle('hidden', !state.warframe);

  const infoEl = document.getElementById('archetype-info');
  if (hasArchetype) {
    infoEl.classList.remove('hidden');
    const titleEl = document.getElementById('archetype-name');
    titleEl.innerHTML = '';
    archetype.signature.forEach(stat => {
      const img = document.createElement('img');
      img.className = 'info-icon';
      img.src = `assets/icons/stats/${stat}.png`;
      img.alt = '';
      titleEl.appendChild(img);
    });
    titleEl.appendChild(document.createTextNode(archName(archetype)));

    document.getElementById('archetype-description').textContent = archDesc(archetype);
    infoEl.style.setProperty('--neon-color', blendStatColors(archetype.signature));
    infoEl.style.setProperty('--neon-gradient', statGradient(archetype.signature));
    infoEl.style.setProperty('--neon-outline', outlineShadow(archetype.signature, 1.4));
  } else {
    infoEl.classList.add('hidden');
  }

  // Archetypes whose signatures match the current stat filter (used when no archetype is selected).
  const matchedArchetypes = hasFilter
    ? new Set(ARCHETYPES.filter(a => filterArr.every(s => a.signature.includes(s))).map(a => a.slug))
    : null;

  document.querySelectorAll('.warframe-card').forEach(card => {
    const slug = card.dataset.warframe;
    const wfArch = WARFRAME_TO_ARCHETYPE[slug];
    const litByArchetype = hasArchetype && wfArch === state.archetype;
    const litByFilter = !!matchedArchetypes && matchedArchetypes.has(wfArch);
    card.classList.toggle('in-archetype', litByArchetype || litByFilter);
    card.classList.toggle('selected', state.warframe === slug);
  });

  const detail = document.getElementById('warframe-detail');
  if (state.warframe) {
    const wfName = ALL_WARFRAMES.find(w => w.toLowerCase() === state.warframe) || state.warframe;
    document.getElementById('warframe-detail-name').textContent = wfName;
    applyWarframeStats(state.warframe);
    renderWarframeDetail(state.warframe);
    detail.classList.remove('hidden');
  } else {
    detail.classList.add('hidden');
  }
}

function renderWarframeDetail(slug) {
  const details = getWarframeDetails(slug);
  const subEl = document.getElementById('warframe-detail-subtitle');
  const sepEl = document.querySelector('.warframe-detail-sep');
  const descEl = document.getElementById('warframe-detail-description');
  const tabsEl = document.getElementById('ability-tabs');
  const panelEl = document.getElementById('ability-panel');

  if (!details) {
    subEl.textContent = '';
    subEl.hidden = true;
    if (sepEl) sepEl.hidden = true;
    descEl.textContent = t('no_details');
    descEl.style.fontStyle = 'italic';
    descEl.style.color = '#888';
    tabsEl.innerHTML = '';
    panelEl.innerHTML = '';
    panelEl.style.display = 'none';
    const box = document.getElementById('warframe-acquisition');
    if (box) { box.classList.add('hidden'); box.innerHTML = ''; }
    renderPortrait();
    return;
  }

  subEl.hidden = false;
  subEl.textContent = details.title || '';
  if (sepEl) sepEl.hidden = false;
  descEl.textContent = details.description || '';
  descEl.style.fontStyle = '';
  descEl.style.color = '';
  panelEl.style.display = '';

  if (state.activeAbility >= details.abilities.length) state.activeAbility = 0;

  tabsEl.innerHTML = '';
  details.abilities.forEach((ab, i) => {
    const btn = document.createElement('button');
    btn.className = 'ability-tab';
    if (ab.type === 'passive') btn.classList.add('passive');
    if (i === state.activeAbility) btn.classList.add('active');
    btn.textContent = ab.type === 'passive' ? `${t('passive_prefix')} — ${ab.name}` : ab.name;
    btn.setAttribute('role', 'tab');
    btn.addEventListener('click', () => selectAbility(i));
    tabsEl.appendChild(btn);
  });

  renderAbilityPanel();
  renderAcquisitionBox(details);
  renderPortrait();
}

function renderAcquisitionBox(details) {
  const box = document.getElementById('warframe-acquisition');
  if (!box) return;
  const acq = details && details.acquisition;
  if (!acq) {
    box.classList.add('hidden');
    box.innerHTML = '';
    return;
  }
  box.classList.remove('hidden');
  box.innerHTML = '';

  // Header: title + source type badge
  const header = document.createElement('div');
  header.className = 'acquisition-header';
  const title = document.createElement('h3');
  title.className = 'acquisition-title';
  title.textContent = t('acquisition_title');
  header.appendChild(title);
  if (acq.source_type) {
    const badge = document.createElement('span');
    badge.className = 'acquisition-source-badge';
    badge.dataset.source = acq.source_type;
    badge.textContent = t('source_' + acq.source_type);
    header.appendChild(badge);
  }
  box.appendChild(header);

  // Rows
  const buildRow = (labelKey, value) => {
    if (!value) return;
    const row = document.createElement('div');
    row.className = 'acquisition-row';
    const label = document.createElement('div');
    label.className = 'acquisition-row-label';
    label.textContent = t(labelKey);
    const text = document.createElement('div');
    text.className = 'acquisition-row-text';
    text.textContent = value;
    row.appendChild(label);
    row.appendChild(text);
    box.appendChild(row);
  };

  buildRow('acquisition_blueprint', acq.blueprint);
  buildRow('acquisition_parts', acq.parts);
  buildRow('acquisition_alternative', acq.alternative);

  if (acq.recommended_farm) {
    const rec = document.createElement('div');
    rec.className = 'acquisition-recommended';
    const label = document.createElement('div');
    label.className = 'acquisition-recommended-label';
    label.textContent = '💡 ' + t('acquisition_recommended');
    const text = document.createElement('div');
    text.className = 'acquisition-recommended-text';
    text.textContent = acq.recommended_farm;
    rec.appendChild(label);
    rec.appendChild(text);
    box.appendChild(rec);
  }

  // Star Chart link — if this warframe drops from a node we have mapped, show
  // a clickable link that switches to Star Chart and drills into that planet.
  const dropLocation = findWarframeDropNode(state.warframe);
  if (dropLocation) {
    const link = document.createElement('button');
    link.type = 'button';
    link.className = 'acquisition-star-chart-link';
    const icon = document.createElement('span');
    icon.className = 'acquisition-star-chart-link-icon';
    icon.textContent = '⤴';
    icon.setAttribute('aria-hidden', 'true');
    link.appendChild(icon);
    const label = document.createElement('span');
    label.className = 'acquisition-star-chart-link-label';
    label.textContent = t('acquisition_view_on_star_chart');
    link.appendChild(label);
    const target = document.createElement('span');
    target.className = 'acquisition-star-chart-link-target';
    target.textContent = `${planetName(dropLocation.planet)} / ${dropLocation.node.name}`;
    link.appendChild(target);
    link.addEventListener('click', () => {
      state.starChart.expandedPlanet = dropLocation.planet.slug;
      state.starChart.filter = 'all';
      state.starChart.search = '';
      const searchInput = document.getElementById('star-chart-search');
      if (searchInput) searchInput.value = '';
      selectTab('star-chart');
    });
    box.appendChild(link);
  }
}

function renderPortrait() {
  const variantEl = document.getElementById('variant-tabs');
  const formEl = document.getElementById('form-tabs');
  const layerA = document.getElementById('warframe-portrait-img');
  const layerB = document.getElementById('warframe-portrait-img-b');
  const details = getWarframeDetails(state.warframe);
  const portraits = details && details.portraits;

  variantEl.innerHTML = '';
  if (formEl) formEl.innerHTML = '';

  if (!portraits) {
    [layerA, layerB].forEach(l => {
      l.removeAttribute('src');
      l.alt = '';
      l.classList.remove('active');
      delete l.dataset.src;
    });
    return;
  }

  // Top row: Base / Prime
  const variants = [];
  if (portraits.base) variants.push({ key: 'base', label: 'Base' });
  if (portraits.prime) variants.push({ key: 'prime', label: 'Prime' });

  if (!variants.some(v => v.key === state.variant)) {
    state.variant = variants[0] ? variants[0].key : 'base';
  }

  variants.forEach(v => {
    const btn = document.createElement('button');
    btn.className = 'variant-tab';
    if (v.key === state.variant) btn.classList.add('active');
    btn.textContent = v.label;
    btn.addEventListener('click', () => selectVariant(v.key));
    variantEl.appendChild(btn);
  });

  // Bottom row: Normal + form variants (filtered by current version availability)
  const allForms = Array.isArray(portraits.variants) ? portraits.variants : [];
  const availableForms = allForms.filter(f =>
    !f.versions || f.versions.includes(state.variant)
  );

  if (availableForms.length > 0 && formEl) {
    if (state.form !== 'normal' && !availableForms.some(f => f.key === state.form)) {
      state.form = 'normal';
    }

    const formTabs = [{ key: 'normal', label: 'Normal' }, ...availableForms];
    formTabs.forEach(f => {
      const btn = document.createElement('button');
      btn.className = 'form-tab';
      if (f.key === state.form) btn.classList.add('active');
      btn.textContent = f.label;
      btn.addEventListener('click', () => selectForm(f.key));
      formEl.appendChild(btn);
    });
  } else if (state.form !== 'normal') {
    state.form = 'normal';
  }

  const slug = state.warframe;
  const nextSrc = state.form === 'normal'
    ? portraits[state.variant]
    : `assets/icons/${state.variant}/${slug}-${state.form}.png`;
  const portraitBox = layerA.parentElement;
  if (portraitBox) portraitBox.classList.toggle('is-variant', state.form !== 'normal');
  const active = layerA.classList.contains('active') ? layerA
               : layerB.classList.contains('active') ? layerB : null;

  if (active && active.dataset.src === nextSrc) {
    active.alt = state.warframe;
    return;
  }

  if (!active) {
    layerA.src = nextSrc;
    layerA.dataset.src = nextSrc;
    layerA.alt = state.warframe;
    layerA.classList.add('active');
    return;
  }

  const inactive = active === layerA ? layerB : layerA;
  inactive.alt = state.warframe;

  const swap = () => {
    inactive.dataset.src = nextSrc;
    inactive.classList.add('active');
    active.classList.remove('active');
  };

  inactive.onload = inactive.onerror = null;
  inactive.src = nextSrc;
  if (inactive.complete && inactive.naturalWidth > 0) {
    requestAnimationFrame(swap);
  } else {
    inactive.onload = inactive.onerror = () => requestAnimationFrame(swap);
  }
}

function renderAbilityPanel() {
  const panel = document.getElementById('ability-panel');
  const details = getWarframeDetails(state.warframe);
  if (!details) { panel.innerHTML = ''; return; }

  document.querySelectorAll('#ability-tabs .ability-tab').forEach((t, i) => {
    t.classList.toggle('active', i === state.activeAbility);
  });

  const ab = details.abilities[state.activeAbility];
  if (!ab) { panel.innerHTML = ''; return; }

  const augments = getAugments(state.warframe, state.activeAbility);
  const showCaption = state.locale !== 'en';
  const augmentsHtml = augments.length ? `
    <div class="ability-augments">
      <h5 class="augments-title">${t('augments')}</h5>
      <div class="augments-list">
        ${augments.map(au => `
          <figure class="augment-card">
            <img class="augment-image" src="${au.image}" alt="${au.name}">
            ${showCaption ? `<figcaption class="augment-caption">${augmentCaption(au)}</figcaption>` : ''}
          </figure>
        `).join('')}
      </div>
    </div>
  ` : '';

  panel.innerHTML = `
    <div class="ability-content">
      <div class="ability-icon">
        ${ab.icon ? `<img src="${ab.icon}" alt="">` : ''}
      </div>
      <div class="ability-text">
        <h4 class="ability-name">${ab.name}</h4>
        <p class="ability-description">${ab.description}</p>
      </div>
    </div>
    ${augmentsHtml}
  `;
}

// ============== Builders ==============

function setupDropdown(dropdownId, btnId, onItemClick) {
  const dropdown = document.getElementById(dropdownId);
  const btn = document.getElementById(btnId);

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    // close other dropdowns first
    document.querySelectorAll('.nav-dropdown.open').forEach(d => {
      if (d !== dropdown) {
        d.classList.remove('open');
        d.querySelector('.nav-button')?.setAttribute('aria-expanded', 'false');
      }
    });
    const open = dropdown.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-dropdown')) {
    document.querySelectorAll('.nav-dropdown.open').forEach(d => {
      d.classList.remove('open');
      d.querySelector('.nav-button')?.setAttribute('aria-expanded', 'false');
    });
  }
});

function setupLangDropdown() {
  setupDropdown('lang-dropdown', 'lang-btn');

  const dropdown = document.getElementById('lang-dropdown');
  const btn = document.getElementById('lang-btn');

  document.querySelectorAll('.lang-item').forEach(item => {
    item.addEventListener('click', (e) => {
      if (item.classList.contains('disabled')) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      const loc = item.dataset.lang;
      if (loc && loc !== state.locale) setLocale(loc);
      dropdown.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

function buildStatsBar() {
  const bar = document.getElementById('stats-bar');
  STATS.filter(s => s.key !== 'complexidade').forEach(s => {
    const pill = document.createElement('button');
    pill.className = 'stat-pill';
    pill.dataset.stat = s.key;
    pill.style.setProperty('--neon-color', s.color);

    const img = document.createElement('img');
    img.className = 'stat-icon';
    img.src = `assets/icons/stats/${s.key}.png`;
    img.alt = '';
    pill.appendChild(img);

    pill.appendChild(document.createTextNode(statLabel(s.key)));
    pill.addEventListener('click', () => selectStat(s.key));
    bar.appendChild(pill);
  });
}

function buildArchetypeBar() {
  const bar = document.getElementById('archetype-bar');
  ARCHETYPES.forEach(a => {
    const pill = document.createElement('button');
    pill.className = 'archetype-pill';
    pill.dataset.archetype = a.slug;
    pill.style.setProperty('--neon-color', blendStatColors(a.signature));
    pill.style.setProperty('--neon-gradient', statGradient(a.signature));

    a.signature.forEach(stat => {
      const img = document.createElement('img');
      img.className = 'sig-icon';
      img.src = `assets/icons/stats/${stat}.png`;
      img.alt = '';
      pill.appendChild(img);
    });

    pill.appendChild(document.createTextNode(archName(a)));
    pill.addEventListener('click', () => selectArchetype(a.slug));
    bar.appendChild(pill);
  });
}

function buildStatusBars() {
  const phyBar = document.getElementById('status-bar-physical');
  const eleBar = document.getElementById('status-bar-elemental');
  const spcBar = document.getElementById('status-bar-special');
  if (!phyBar || !eleBar) return;

  phyBar.innerHTML = '';
  eleBar.innerHTML = '';
  if (spcBar) spcBar.innerHTML = '';

  STATUS_PHYSICAL_KEYS.forEach(slug => {
    phyBar.appendChild(buildStatusPill(slug, () => selectStatusPhysical(slug)));
  });
  STATUS_ELEMENTAL_KEYS.forEach(slug => {
    eleBar.appendChild(buildStatusPill(slug, () => selectStatusElemental(slug)));
  });
  if (spcBar) {
    STATUS_SPECIAL_KEYS.forEach(slug => {
      spcBar.appendChild(buildStatusPill(slug, () => selectStatusSpecial(slug)));
    });
  }
}

function buildStatusPill(slug, onClick) {
  const eff = STATUS_EFFECTS[slug];
  const pill = document.createElement('button');
  pill.type = 'button';
  pill.className = 'status-pill';
  pill.dataset.status = slug;
  pill.style.setProperty('--neon-color', eff.color);
  pill.style.setProperty('--neon-gradient', `linear-gradient(90deg, ${eff.color}, ${eff.color})`);

  const img = document.createElement('img');
  img.className = 'status-icon';
  img.src = `assets/icons/status/${slug}.png`;
  img.alt = '';
  pill.appendChild(img);

  pill.appendChild(document.createTextNode(statusName(slug)));
  pill.addEventListener('click', onClick);
  return pill;
}

function renderStatusEffects() {
  // Determine which slug (if any) is currently displayed in the info block.
  let activeSlug = null;
  if (state.statusSpecial) {
    activeSlug = state.statusSpecial;
  } else if (state.statusPhysical) {
    activeSlug = state.statusPhysical;
  } else if (state.statusElementals.size === 1) {
    activeSlug = [...state.statusElementals][0];
  } else if (state.statusElementals.size === 2) {
    activeSlug = combinationSlug(state.statusElementals);
  }

  // Update physical pills
  const hasPhysical = !!state.statusPhysical;
  const hasElem = state.statusElementals.size > 0;
  const hasSpecial = !!state.statusSpecial;
  document.querySelectorAll('#status-bar-physical .status-pill').forEach(p => {
    const slug = p.dataset.status;
    const isActive = slug === state.statusPhysical;
    p.classList.toggle('active', isActive);
    p.classList.toggle('dimmed', hasElem || hasSpecial || (hasPhysical && !isActive));
  });

  // Update elemental pills
  document.querySelectorAll('#status-bar-elemental .status-pill').forEach(p => {
    const slug = p.dataset.status;
    const isActive = state.statusElementals.has(slug);
    p.classList.toggle('active', isActive);
    p.classList.toggle('dimmed', hasPhysical || hasSpecial || (hasElem && !isActive));
  });

  // Update special pills
  document.querySelectorAll('#status-bar-special .status-pill').forEach(p => {
    const slug = p.dataset.status;
    const isActive = slug === state.statusSpecial;
    p.classList.toggle('active', isActive);
    p.classList.toggle('dimmed', hasPhysical || hasElem || (hasSpecial && !isActive));
  });

  // Info block
  const info = document.getElementById('status-info');
  if (!activeSlug) {
    info.classList.add('hidden');
    return;
  }
  info.classList.remove('hidden');

  const eff = STATUS_EFFECTS[activeSlug];
  info.style.setProperty('--neon-color', eff.color);
  info.dataset.slug = activeSlug;

  const titleEl = document.getElementById('status-info-title');
  titleEl.innerHTML = '';
  const mainIcon = document.createElement('img');
  mainIcon.className = 'info-icon';
  mainIcon.src = `assets/icons/status/${activeSlug}.png`;
  mainIcon.alt = '';
  titleEl.appendChild(mainIcon);
  titleEl.appendChild(document.createTextNode(statusName(activeSlug)));

  document.getElementById('status-info-description').innerHTML = formatHighlights(statusDescription(activeSlug));

  const procEl = document.getElementById('status-info-proc');
  procEl.innerHTML = '';
  const procLabel = document.createElement('span');
  procLabel.className = 'status-info-proc-label';
  procLabel.style.setProperty('--neon-color', eff.color);
  procLabel.textContent = t('status_proc_label');
  procEl.appendChild(procLabel);
  const procBody = document.createElement('span');
  procBody.innerHTML = formatHighlights(statusProc(activeSlug));
  procEl.appendChild(procBody);

  // Faction grid
  const grid = document.getElementById('status-faction-grid');
  grid.innerHTML = '';
  grid.appendChild(buildFactionCol('vuln', t('status_vulnerable'), eff.vulnerable, '×1.5'));
  grid.appendChild(buildFactionCol('resist', t('status_resistant'), eff.resistant, '×0.5'));
}

function buildFactionCol(kind, labelText, factions, mult) {
  const col = document.createElement('div');
  col.className = `status-faction-col ${kind}${factions.length === 0 ? ' empty' : ''}`;

  const label = document.createElement('h4');
  label.className = 'status-faction-col-label';
  label.textContent = labelText;
  col.appendChild(label);

  if (factions.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'status-faction-empty';
    empty.textContent = t('status_none');
    col.appendChild(empty);
    return col;
  }

  const chips = document.createElement('div');
  chips.className = 'status-faction-chips';
  factions.forEach(f => {
    const chip = document.createElement('span');
    chip.className = 'status-faction-chip';
    chip.appendChild(document.createTextNode(factionName(f) + ' '));
    const m = document.createElement('span');
    m.className = 'status-faction-chip-mult';
    m.textContent = mult;
    chip.appendChild(m);
    chips.appendChild(chip);
  });
  col.appendChild(chips);
  return col;
}

function buildGrid() {
  const grid = document.getElementById('warframe-grid');
  ALL_WARFRAMES.forEach(name => {
    const slug = name.toLowerCase();
    const card = document.createElement('div');
    card.className = 'warframe-card';
    card.dataset.warframe = slug;

    const img = document.createElement('img');
    img.src = `assets/icons/base/${slug}.png`;
    img.alt = name;
    img.loading = 'lazy';

    const label = document.createElement('span');
    label.className = 'name';
    label.textContent = name;

    card.appendChild(img);
    card.appendChild(label);
    card.addEventListener('click', () => selectWarframe(slug));
    grid.appendChild(card);
  });
}

// ============== Star Chart render + state ==============

// Filters shown as chips in the toolbar. 'all' shows everything; 'assassination'
// is the killer feature for beginners (find boss → warframe drops). The rest
// are the most common mission types.
const STAR_CHART_FILTERS = ['all', 'assassination', 'survival', 'defense', 'spy', 'capture', 'exterminate', 'mobile_defense', 'excavation', 'interception', 'sabotage', 'disruption'];

function planetMatchesFilter(planet, filter, search) {
  if (!planet) return false;
  const matchedNodes = planetNodesFiltered(planet, filter, search);
  if (matchedNodes.length > 0) return true;
  // When only searching, allow planet-name match too
  if (search && !filter || filter === 'all') {
    const norm = normalizeForMatch(search);
    if (norm && normalizeForMatch(planetName(planet)).includes(norm)) return true;
  }
  return false;
}

function planetNodesFiltered(planet, filter, search) {
  if (!planet) return [];
  const norm = search ? normalizeForMatch(search) : '';
  const showSpoilers = state.starChart.showSpoilers;
  return planet.nodes.filter(n => {
    if (filter !== 'all' && n.type !== filter) return false;
    // Hide nodes in spoiler-locked sections (e.g., Albrecht's Laboratories
    // inside Deimos) unless the user toggled spoilers on.
    if (!showSpoilers && n.section && planet.sections?.[n.section]?.spoilerLocked) {
      return false;
    }
    if (norm) {
      const hay = normalizeForMatch(
        n.name + ' ' + missionTypeName(n.type) + ' ' + (n.boss || '') + ' ' + (n.warframeDrop || '')
      );
      if (!hay.includes(norm)) return false;
    }
    return true;
  });
}

function selectPlanet(slug) {
  // Toggle in-place expansion (clicking already-expanded card collapses it).
  // Wrap in View Transitions API so modern browsers animate the morph between
  // compact card and expanded detail state automatically.
  const apply = () => {
    if (state.starChart.expandedPlanet === slug) {
      state.starChart.expandedPlanet = null;
    } else {
      state.starChart.expandedPlanet = slug;
    }
    renderStarChart();
  };
  if (typeof document.startViewTransition === 'function') {
    document.startViewTransition(apply);
  } else {
    apply();
  }
}

function selectStarChartFilter(filter) {
  state.starChart.filter = filter;
  renderStarChart();
}

function toggleStarChartSpoilers() {
  const next = !state.starChart.showSpoilers;
  state.starChart.showSpoilers = next;
  try { localStorage.setItem('starChart.showSpoilers', next ? 'true' : 'false'); } catch (e) {}
  // If a now-hidden planet was expanded, collapse it.
  if (!next) {
    const expanded = state.starChart.expandedPlanet;
    if (expanded) {
      const p = getPlanet(expanded);
      if (p && p.spoilerLocked) state.starChart.expandedPlanet = null;
    }
  }
  renderStarChart();
}

function renderStarChart() {
  renderStarChartFilters();
  const view = document.getElementById('star-chart-view');
  if (!view) return;
  view.innerHTML = '';
  // Always render the grid — detail content is rendered inline inside the
  // expanded card (no separate drill-down view).
  renderStarChartGrid(view);
}

function renderStarChartFilters() {
  const container = document.getElementById('star-chart-filters');
  if (!container) return;
  container.innerHTML = '';

  STAR_CHART_FILTERS.forEach(key => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'star-chart-filter-chip';
    chip.dataset.filter = key;
    if (state.starChart.filter === key) chip.classList.add('active');

    const color = key === 'all' ? '#5ec0e8' : (MISSION_TYPES[key]?.color || '#5ec0e8');
    chip.style.setProperty('--chip-color', color);

    if (key !== 'all') {
      const dot = document.createElement('span');
      dot.className = 'star-chart-filter-chip-dot';
      chip.appendChild(dot);
    }
    const label = document.createElement('span');
    label.textContent = key === 'all' ? t('star_chart_filter_all') : missionTypeName(key);
    chip.appendChild(label);

    chip.addEventListener('click', () => selectStarChartFilter(key));
    container.appendChild(chip);
  });
}

function buildSpoilerToggleRow() {
  const row = document.createElement('div');
  row.className = 'star-chart-spoiler-row';

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'star-chart-spoiler-toggle';
  if (state.starChart.showSpoilers) btn.classList.add('active');
  btn.title = t('star_chart_spoiler_toggle_tooltip');
  const eye = document.createElement('span');
  eye.className = 'spoiler-toggle-icon';
  eye.textContent = state.starChart.showSpoilers ? '👁' : '🙈';
  btn.appendChild(eye);
  const label = document.createElement('span');
  label.textContent = t('star_chart_spoiler_toggle_label');
  btn.appendChild(label);
  btn.addEventListener('click', toggleStarChartSpoilers);

  row.appendChild(btn);
  return row;
}

function renderStarChartGrid(view) {
  // Spoiler toggle in its own centered row above the planet grid.
  view.appendChild(buildSpoilerToggleRow());

  const grid = document.createElement('div');
  grid.className = 'star-chart-grid';

  const filter = state.starChart.filter;
  const search = state.starChart.search;

  let visible = 0;
  const showSpoilers = state.starChart.showSpoilers;
  STAR_CHART.planets.forEach(p => {
    // Skip quest-locked planets (Lua, Kuva Fortress, Zariman) unless toggled.
    if (!showSpoilers && p.spoilerLocked) return;
    const card = buildPlanetCard(p, filter, search);
    if (card) {
      visible++;
      grid.appendChild(card);
    }
  });

  if (visible === 0) {
    const empty = document.createElement('div');
    empty.className = 'star-chart-empty';
    empty.textContent = t('star_chart_no_results');
    view.appendChild(empty);
  } else {
    view.appendChild(grid);
  }

  // All-resources section — global list below the planet grid with its own
  // search bar. When a planet is expanded, the list filters to that planet's
  // resources only. Click on a resource opens the same modal.
  view.appendChild(buildAllResourcesSection(state.starChart.expandedPlanet));
}

function buildAllResourcesSection(filterPlanetSlug) {
  const section = document.createElement('section');
  section.className = 'star-chart-all-resources';

  // When filtering by an expanded planet, the source list is just that planet's
  // resources. Otherwise it's the full catalog.
  const filterPlanet = filterPlanetSlug ? getPlanet(filterPlanetSlug) : null;
  const sourceSlugs = (filterPlanet && Array.isArray(filterPlanet.resources))
    ? filterPlanet.resources
    : Object.keys(RESOURCES);

  const header = document.createElement('div');
  header.className = 'star-chart-all-resources-header';
  const label = document.createElement('h3');
  label.className = 'star-chart-resources-label';
  label.textContent = filterPlanet
    ? t('star_chart_resources_label')
    : t('star_chart_all_resources_label');
  header.appendChild(label);

  const searchWrap = document.createElement('div');
  searchWrap.className = 'star-chart-resource-search-wrap';
  const input = document.createElement('input');
  input.type = 'search';
  input.className = 'star-chart-resource-search-input';
  input.placeholder = t('star_chart_resource_search_placeholder');
  input.value = state.starChart.resourceSearch || '';
  input.autocomplete = 'off';
  const clearBtn = document.createElement('button');
  clearBtn.type = 'button';
  clearBtn.className = 'star-chart-resource-search-clear';
  clearBtn.setAttribute('aria-label', 'Clear');
  clearBtn.textContent = '×';
  if (!input.value) clearBtn.classList.add('hidden');
  searchWrap.appendChild(input);
  searchWrap.appendChild(clearBtn);
  header.appendChild(searchWrap);
  section.appendChild(header);

  const listWrap = document.createElement('div');
  listWrap.className = 'resource-list';
  section.appendChild(listWrap);

  // Sort order: common → uncommon → rare → special (matches SC_RARITIES order).
  // Also filter out spoiler-locked resources when the spoiler toggle is off.
  const RARITY_ORDER = { common: 0, uncommon: 1, rare: 2, special: 3 };
  const showSpoilers = state.starChart.showSpoilers;
  const sortedSlugs = sourceSlugs.filter(s => {
    const r = RESOURCES[s];
    if (!r) return false;
    if (!showSpoilers && r.spoilerLocked) return false;
    return true;
  }).slice().sort((a, b) => {
    const ra = RARITY_ORDER[RESOURCES[a].rarity] ?? 99;
    const rb = RARITY_ORDER[RESOURCES[b].rarity] ?? 99;
    if (ra !== rb) return ra - rb;
    return resourceName(a).localeCompare(resourceName(b));
  });

  const renderItems = () => {
    listWrap.innerHTML = '';
    const q = state.starChart.resourceSearch ? normalizeForMatch(state.starChart.resourceSearch) : '';
    sortedSlugs.forEach(slug => {
      const r = RESOURCES[slug];
      if (q) {
        const hay = normalizeForMatch(
          resourceName(slug) + ' ' + rarityName(r.rarity) + ' ' + (r.description?.[state.locale] || '')
        );
        if (!hay.includes(q)) return;
      }
      listWrap.appendChild(buildResourceListItem(slug, r));
    });
  };

  input.addEventListener('input', () => {
    state.starChart.resourceSearch = input.value.trim();
    clearBtn.classList.toggle('hidden', !state.starChart.resourceSearch);
    renderItems();
  });
  clearBtn.addEventListener('click', () => {
    input.value = '';
    state.starChart.resourceSearch = '';
    clearBtn.classList.add('hidden');
    renderItems();
    input.focus();
  });

  renderItems();
  return section;
}

function buildPlanetCard(planet, filter, search) {
  const isExpanded = state.starChart.expandedPlanet === planet.slug;
  const hasOtherExpanded = state.starChart.expandedPlanet && !isExpanded;

  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'star-chart-planet-card';
  // Unique view-transition-name lets the browser morph this card between
  // compact and expanded states automatically (modern browsers only).
  card.style.viewTransitionName = `planet-${planet.slug}`;
  if (isExpanded) card.classList.add('is-expanded');
  if (hasOtherExpanded) card.classList.add('is-collapsed-by-other');

  const faction = getFaction(planet.faction);
  if (faction) card.style.setProperty('--faction-color', faction.color);
  if (planet.image) {
    card.style.backgroundImage = `url('${planet.image}')`;
  } else {
    card.classList.add('no-image');
  }

  const matchingNodes = planetNodesFiltered(planet, filter, search);
  const planetNameMatchesSearch = search && normalizeForMatch(planetName(planet))
    .includes(normalizeForMatch(search));

  // If no nodes match the filter AND the planet name doesn't match search → hide
  // (but never hide the currently-expanded card)
  if (!isExpanded && matchingNodes.length === 0 && !planetNameMatchesSearch) {
    if (filter === 'all' && !search) {
      // fall through — show all
    } else {
      return null;
    }
  }

  const header = document.createElement('div');
  header.className = 'star-chart-planet-card-header';
  const name = document.createElement('span');
  name.className = 'star-chart-planet-card-name';
  name.textContent = planetName(planet);
  const level = document.createElement('span');
  level.className = 'star-chart-planet-card-level';
  level.textContent = `Lv ${planet.levelRange}`;
  header.appendChild(name);
  header.appendChild(level);

  const factionTag = document.createElement('div');
  factionTag.className = 'star-chart-planet-card-faction';
  factionTag.textContent = scFactionName(planet.faction);

  const meta = document.createElement('div');
  meta.className = 'star-chart-planet-card-meta';
  const count = document.createElement('span');
  count.className = 'star-chart-planet-card-count';
  // Count reflects what the user actually sees: filtered nodes + spoiler-aware.
  // When a filter is active, show "matching/total-visible" so the denominator
  // also respects the spoiler toggle (e.g. Deimos = 8 with spoilers off).
  const visibleTotal = planetNodesFiltered(planet, 'all', '').length;
  if (filter !== 'all') {
    count.textContent = `${matchingNodes.length}/${visibleTotal} ${t('star_chart_nodes')}`;
  } else {
    count.textContent = `${visibleTotal} ${t('star_chart_nodes')}`;
  }
  meta.appendChild(count);

  // Warframe drops shown as corner badges (icon + name in red) for the compact
  // card — see CSS .star-chart-planet-card-wf-badge. Skip when expanded.
  const assassinations = planet.nodes.filter(n => n.type === 'assassination' && n.warframeDrop);

  card.appendChild(header);
  card.appendChild(factionTag);
  // Compact meta only when not expanded — expanded card shows full node list instead.
  if (!isExpanded) {
    card.appendChild(meta);
    if (assassinations.length > 0) {
      const wfWrap = document.createElement('div');
      wfWrap.className = 'star-chart-planet-card-wf-wrap';
      assassinations.forEach(n => {
        const slug = n.warframeDrop;
        const wfName = slug.charAt(0).toUpperCase() + slug.slice(1);
        const badge = document.createElement('div');
        badge.className = 'star-chart-planet-card-wf-badge';
        const img = document.createElement('img');
        img.className = 'star-chart-planet-card-wf-icon';
        img.src = `assets/icons/base/${slug}.png`;
        img.alt = '';
        img.loading = 'lazy';
        badge.appendChild(img);
        const name = document.createElement('span');
        name.className = 'star-chart-planet-card-wf-name';
        name.textContent = wfName;
        badge.appendChild(name);
        wfWrap.appendChild(badge);
      });
      card.appendChild(wfWrap);
    }
  }

  if (isExpanded) {
    // Inline planet image as full-bleed bg (replaces background-image cover crop)
    if (planet.image) {
      const bgImg = document.createElement('img');
      bgImg.className = 'planet-detail-bg-image';
      bgImg.src = planet.image;
      bgImg.alt = '';
      card.appendChild(bgImg);
      // Remove the cover background-image since we're using the img element now
      card.style.backgroundImage = 'none';
    }
    // Detail content wrapper sits above the bg image
    const detail = document.createElement('div');
    detail.className = 'star-chart-card-detail';
    const nodes = planetNodesFiltered(planet, filter, search);
    if (nodes.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'star-chart-empty';
      empty.textContent = t('star_chart_no_nodes_filter');
      detail.appendChild(empty);
    } else {
      const list = document.createElement('div');
      list.className = 'star-chart-node-list';
      // Section grouping: a planet can declare named sub-areas (like Albrecht's
      // Laboratories within Deimos). Insert a header when the section changes.
      let lastSection = null;
      nodes.forEach(n => {
        const sec = n.section || null;
        if (sec !== lastSection && sec && planet.sections && planet.sections[sec]) {
          list.appendChild(buildNodeSectionHeader(planet.sections[sec]));
          lastSection = sec;
        } else if (sec === null) {
          lastSection = null;
        }
        list.appendChild(buildNodeRow(n));
      });
      detail.appendChild(list);
    }
    card.appendChild(detail);
  }

  card.addEventListener('click', () => selectPlanet(planet.slug));
  return card;
}

// renderStarChartPlanetDetail was removed — detail now renders inline inside
// the expanded planet card via buildPlanetCard's `isExpanded` branch.

function buildResourcesSection(planet) {
  const section = document.createElement('section');
  section.className = 'star-chart-resources';

  const label = document.createElement('h3');
  label.className = 'star-chart-resources-label';
  label.textContent = t('star_chart_resources_label');
  section.appendChild(label);

  const list = document.createElement('div');
  list.className = 'resource-list';
  // Sort planet resources by rarity, filter out spoiler-locked when toggle is off.
  const RARITY_ORDER = { common: 0, uncommon: 1, rare: 2, special: 3 };
  const showSpoilers = state.starChart.showSpoilers;
  const sorted = planet.resources.filter(s => {
    const r = RESOURCES[s];
    if (!r) return false;
    if (!showSpoilers && r.spoilerLocked) return false;
    return true;
  }).slice().sort((a, b) => {
    const ra = RESOURCES[a] ? (RARITY_ORDER[RESOURCES[a].rarity] ?? 99) : 99;
    const rb = RESOURCES[b] ? (RARITY_ORDER[RESOURCES[b].rarity] ?? 99) : 99;
    if (ra !== rb) return ra - rb;
    return resourceName(a).localeCompare(resourceName(b));
  });
  sorted.forEach(slug => {
    const r = getResource(slug);
    if (!r) return;
    list.appendChild(buildResourceListItem(slug, r));
  });
  section.appendChild(list);
  return section;
}

function buildResourceListItem(slug, r) {
  const item = document.createElement('button');
  item.type = 'button';
  item.className = 'resource-list-item';
  const rarity = getRarity(r.rarity);
  if (rarity) item.style.setProperty('--rarity-color', rarity.color);

  if (r.image) {
    const img = document.createElement('img');
    img.className = 'resource-list-item-icon';
    img.src = r.image;
    img.alt = '';
    img.loading = 'lazy';
    item.appendChild(img);
  } else {
    const fallback = document.createElement('span');
    fallback.className = 'resource-list-item-icon-fallback';
    item.appendChild(fallback);
  }

  const text = document.createElement('span');
  text.className = 'resource-list-item-name';
  text.textContent = resourceName(slug);
  item.appendChild(text);

  if (rarity) {
    const rTag = document.createElement('span');
    rTag.className = 'resource-list-item-rarity';
    rTag.textContent = rarityName(r.rarity);
    item.appendChild(rTag);
  }

  item.addEventListener('click', () => openResourceModal(slug));
  return item;
}

function buildNodeSectionHeader(section) {
  const header = document.createElement('div');
  header.className = 'star-chart-node-section-header';
  if (section.factionOverride) {
    const f = getFaction(section.factionOverride);
    if (f) header.style.setProperty('--section-color', f.color);
  }
  const name = document.createElement('div');
  name.className = 'star-chart-node-section-name';
  const nm = section.name || {};
  name.textContent = nm[state.locale] || nm[DEFAULT_LOCALE] || '';
  header.appendChild(name);
  if (section.note) {
    const note = document.createElement('div');
    note.className = 'star-chart-node-section-note';
    note.textContent = section.note[state.locale] || section.note[DEFAULT_LOCALE] || '';
    header.appendChild(note);
  }
  return header;
}

function buildNodeRow(node) {
  const row = document.createElement('div');
  row.className = 'star-chart-node-row';
  if (node.type === 'assassination') row.classList.add('is-assassination');
  if (node.darkSector) row.classList.add('is-dark-sector');
  // Mission-type color drives the per-row neon border/glow in layout-v2.
  const mt = getMissionType(node.type);
  if (mt) row.style.setProperty('--mission-color', mt.color);

  const name = document.createElement('span');
  name.className = 'star-chart-node-name';
  name.textContent = node.name;
  row.appendChild(name);

  const typeWrap = document.createElement('span');
  typeWrap.className = 'star-chart-node-type';
  const dot = document.createElement('span');
  dot.className = 'star-chart-node-type-dot';
  if (mt) dot.style.setProperty('--type-color', mt.color);
  typeWrap.appendChild(dot);
  const typeLabel = document.createElement('span');
  typeLabel.textContent = missionTypeName(node.type);
  typeWrap.appendChild(typeLabel);
  row.appendChild(typeWrap);

  const lvl = document.createElement('span');
  lvl.className = 'star-chart-node-level';
  lvl.textContent = `Lv ${node.levelRange}`;
  row.appendChild(lvl);

  // Drop column — assassination nodes get a boss pill + a separate warframe
  // icon/name beside it. Other boss nodes just get the pill.
  if (node.type === 'assassination' && node.warframeDrop) {
    const dropWrap = document.createElement('div');
    dropWrap.className = 'star-chart-node-drop-wrap';
    if (node.boss) {
      const bossPill = document.createElement('span');
      bossPill.className = 'star-chart-node-drop';
      bossPill.textContent = node.boss;
      dropWrap.appendChild(bossPill);
    }
    const wfName = node.warframeDrop.charAt(0).toUpperCase() + node.warframeDrop.slice(1);
    const wf = document.createElement('span');
    wf.className = 'star-chart-node-warframe';
    const img = document.createElement('img');
    img.className = 'star-chart-node-warframe-icon';
    img.src = `assets/icons/base/${node.warframeDrop}.png`;
    img.alt = '';
    img.loading = 'lazy';
    wf.appendChild(img);
    const wfStrong = document.createElement('strong');
    wfStrong.textContent = wfName;
    wf.appendChild(wfStrong);
    dropWrap.appendChild(wf);
    row.appendChild(dropWrap);
  } else if (node.boss) {
    const drop = document.createElement('span');
    drop.className = 'star-chart-node-drop';
    drop.textContent = node.boss;
    row.appendChild(drop);
  } else {
    // empty slot to keep grid alignment
    const filler = document.createElement('span');
    filler.className = 'star-chart-node-drop-filler';
    row.appendChild(filler);
  }

  return row;
}

function openResourceModal(slug) {
  const r = getResource(slug);
  if (!r) return;
  const modal = document.getElementById('resource-modal');
  const title = document.getElementById('resource-modal-title');
  const body = document.getElementById('resource-modal-body');
  if (!modal || !title || !body) return;

  const rarity = getRarity(r.rarity);
  const rarityColor = rarity ? rarity.color : '#5ec0e8';
  title.style.setProperty('--rarity-color', rarityColor);

  title.innerHTML = '';
  const nameSpan = document.createElement('span');
  nameSpan.textContent = resourceName(slug);
  title.appendChild(nameSpan);
  if (rarity) {
    const rTag = document.createElement('span');
    rTag.className = 'resource-modal-rarity';
    rTag.style.setProperty('--rarity-color', rarityColor);
    rTag.textContent = rarityName(r.rarity);
    title.appendChild(rTag);
  }

  body.innerHTML = '';

  // Big resource icon at the top, above the description section.
  if (r.image) {
    const iconWrap = document.createElement('div');
    iconWrap.className = 'resource-modal-icon-wrap';
    const icon = document.createElement('img');
    icon.className = 'resource-modal-icon';
    icon.src = r.image;
    icon.alt = '';
    iconWrap.appendChild(icon);
    body.appendChild(iconWrap);
  }

  // Description
  const descSec = document.createElement('div');
  descSec.className = 'resource-modal-section';
  const descLabel = document.createElement('p');
  descLabel.className = 'resource-modal-section-label';
  descLabel.textContent = t('resource_modal_description');
  const descText = document.createElement('p');
  descText.className = 'resource-modal-section-text';
  descText.textContent = r.description[state.locale] || r.description[DEFAULT_LOCALE] || '';
  descSec.appendChild(descLabel);
  descSec.appendChild(descText);
  body.appendChild(descSec);

  // Used for
  if (r.usedFor) {
    const usedSec = document.createElement('div');
    usedSec.className = 'resource-modal-section';
    const usedLabel = document.createElement('p');
    usedLabel.className = 'resource-modal-section-label';
    usedLabel.textContent = t('resource_modal_used_for');
    const usedText = document.createElement('p');
    usedText.className = 'resource-modal-section-text';
    usedText.textContent = r.usedFor[state.locale] || r.usedFor[DEFAULT_LOCALE] || '';
    usedSec.appendChild(usedLabel);
    usedSec.appendChild(usedText);
    body.appendChild(usedSec);
  }

  // Recommended farm
  if (r.recommendedFarm) {
    const farmSec = document.createElement('div');
    farmSec.className = 'resource-modal-section';
    const farmLabel = document.createElement('p');
    farmLabel.className = 'resource-modal-section-label';
    farmLabel.textContent = t('resource_modal_recommended_farm');
    farmSec.appendChild(farmLabel);

    const farmBox = document.createElement('div');
    farmBox.className = 'resource-modal-farm';
    const targetPlanet = getPlanet(r.recommendedFarm.planet);
    const targetNode = findNode(r.recommendedFarm.planet, r.recommendedFarm.node);
    if (targetPlanet && targetNode) {
      const linkBtn = document.createElement('button');
      linkBtn.type = 'button';
      linkBtn.className = 'resource-modal-farm-link';
      linkBtn.textContent = `${planetName(targetPlanet)} / ${targetNode.name} (${missionTypeName(targetNode.type)})`;
      linkBtn.addEventListener('click', () => {
        closeResourceModal();
        selectPlanet(r.recommendedFarm.planet);
      });
      farmBox.appendChild(linkBtn);
    }
    const noteText = state.locale === 'pt-BR' ? r.recommendedFarm.notePt : r.recommendedFarm.noteEn;
    if (noteText) {
      const note = document.createElement('p');
      note.className = 'resource-modal-farm-note';
      note.textContent = noteText;
      farmBox.appendChild(note);
    }
    farmSec.appendChild(farmBox);
    body.appendChild(farmSec);
  }

  modal.classList.remove('hidden');
}

function closeResourceModal() {
  const modal = document.getElementById('resource-modal');
  if (modal) modal.classList.add('hidden');
}

function setupResourceModalEvents() {
  const closeBtn = document.getElementById('resource-modal-close');
  const backdrop = document.getElementById('resource-modal-backdrop');
  closeBtn?.addEventListener('click', closeResourceModal);
  backdrop?.addEventListener('click', closeResourceModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const modal = document.getElementById('resource-modal');
      if (modal && !modal.classList.contains('hidden')) closeResourceModal();
    }
  });
}

function setupStarChartSearch() {
  const input = document.getElementById('star-chart-search');
  const clearBtn = document.getElementById('star-chart-search-clear');
  if (!input) return;

  const apply = () => {
    const v = input.value.trim();
    clearBtn?.classList.toggle('hidden', v.length === 0);
    state.starChart.search = v;
    renderStarChart();
  };

  input.addEventListener('input', apply);
  clearBtn?.addEventListener('click', () => {
    input.value = '';
    apply();
    input.focus();
  });
}

// ============== Init ==============

buildChart();
buildGrid();
buildStatsBar();
buildArchetypeBar();
buildStatusBars();
setupLangDropdown();
setupTabNav();

document.querySelectorAll('input[data-key]').forEach(input => {
  input.addEventListener('input', updateChart);
  input.addEventListener('change', updateChart);
});
setLocale(state.locale);
selectTab('archetypes');

function setupTabNav() {
  document.getElementById('glossary-btn')?.addEventListener('click', () => selectTab('glossary'));
  document.getElementById('rivens-btn')?.addEventListener('click', () => selectTab('rivens'));
  document.getElementById('star-chart-btn')?.addEventListener('click', () => selectTab('star-chart'));
  // Selecting an archetype from the dropdown or the bar should bring us back to that tab.
  document.getElementById('archetype-btn')?.addEventListener('click', () => {
    if (state.tab !== 'archetypes') selectTab('archetypes');
  });
  document.getElementById('archetype-bar')?.addEventListener('click', () => {
    if (state.tab !== 'archetypes') selectTab('archetypes');
  });

  document.getElementById('riven-evaluate-btn')?.addEventListener('click', evaluateRiven);
  document.getElementById('riven-add-stat-btn')?.addEventListener('click', addRivenStatSlot);
  setupRivenUploadEvents();
  setupWeaponPickerEvents();
  setupCreditsEvents();
  setupGlossarySearch();
  setupStarChartSearch();
  setupResourceModalEvents();
}

function setupGlossarySearch() {
  const input = document.getElementById('glossary-search-input');
  const clearBtn = document.getElementById('glossary-search-clear');
  const empty = document.getElementById('glossary-empty');
  if (!input) return;

  const sections = Array.from(document.querySelectorAll('.glossary-section'));

  const applyFilter = () => {
    const raw = input.value.trim();
    const q = normalizeForMatch(raw);
    clearBtn?.classList.toggle('hidden', raw.length === 0);

    if (!q) {
      sections.forEach(s => s.classList.remove('hidden'));
      empty?.classList.add('hidden');
      return;
    }

    let visible = 0;
    sections.forEach(s => {
      const titleEl = s.querySelector('.glossary-section-title');
      const bodyEl = s.querySelector('.glossary-section-body');
      const haystack = normalizeForMatch(
        (titleEl?.textContent || '') + ' ' +
        (s.dataset.keywords || '') + ' ' +
        (bodyEl?.textContent || '')
      );
      const match = haystack.includes(q);
      s.classList.toggle('hidden', !match);
      if (match) visible++;
    });
    empty?.classList.toggle('hidden', visible > 0);
  };

  input.addEventListener('input', applyFilter);
  clearBtn?.addEventListener('click', () => {
    input.value = '';
    applyFilter();
    input.focus();
  });
}

// ============== Rivens render ==============

function renderRivens() {
  renderRivenWeaponBtn();
  renderRivenCategoryPills();
  renderRivenStatRows();
  renderRivenResult();
  renderRivenImageSection();
}

// Upload + OCR feedback. The upload zone is always visible (no more "mode"
// toggle — image upload is just an optional shortcut). The form below the
// upload is also always visible so manual entry is possible at any time.
function renderRivenImageSection() {
  const section = document.getElementById('riven-image-section');
  if (!section) return;

  const zone       = document.getElementById('riven-upload-zone');
  const preview    = document.getElementById('riven-image-preview');
  const previewImg = document.getElementById('riven-image-preview-img');
  const statusEl   = document.getElementById('riven-ocr-status');
  const statusText = document.getElementById('riven-ocr-status-text');
  const banner     = document.getElementById('riven-ocr-banner');

  const s = state.riven.imageState;
  const hasImage = !!state.riven.imagePreviewUrl;

  // While an image is uploaded, swap the upload zone for the preview.
  zone.classList.toggle('hidden', hasImage);
  preview.classList.toggle('hidden', !hasImage);
  if (hasImage && previewImg.src !== state.riven.imagePreviewUrl) {
    previewImg.src = state.riven.imagePreviewUrl;
  }

  // OCR progress spinner
  const busy = (s === 'loading_lib' || s === 'processing');
  statusEl.classList.toggle('hidden', !busy);
  if (busy) {
    statusText.textContent = s === 'loading_lib'
      ? t('riven_ocr_loading_lib')
      : t('riven_ocr_processing');
    updateRivenOcrProgressUi();
  }

  // Result/error banner
  banner.classList.remove('error', 'success');
  if (s === 'success') {
    banner.classList.add('success');
    banner.textContent = t('riven_ocr_success').replace('{n}', state.riven.imageDetectedCount);
    banner.classList.remove('hidden');
  } else if (s === 'error') {
    banner.classList.add('error');
    let key = 'riven_ocr_failed';
    if (state.riven.imageError === 'no_stats') key = 'riven_ocr_no_stats';
    else if (state.riven.imageError === 'load_failed') key = 'riven_ocr_load_failed';
    banner.textContent = t(key);
    banner.classList.remove('hidden');
  } else {
    banner.classList.add('hidden');
  }
}

function renderRivenCategoryPills() {
  const row = document.getElementById('riven-category-row');
  if (!row) return;
  row.innerHTML = '';
  RIVEN_CATEGORIES.forEach(cat => {
    const pill = document.createElement('button');
    pill.type = 'button';
    pill.className = 'riven-pill';
    pill.dataset.cat = cat;
    pill.textContent = t('riven_cat_' + cat);
    pill.classList.toggle('active', state.riven.category === cat);
    pill.addEventListener('click', () => setRivenCategory(cat));
    row.appendChild(pill);
  });
}

function renderRivenStatRows() {
  const list = document.getElementById('riven-stat-list');
  if (!list) return;
  list.innerHTML = '';

  for (let i = 0; i < state.riven.slots; i++) {
    list.appendChild(buildRivenStatRow(i));
  }

  // Add-stat button only enabled until we hit the 4-slot cap.
  const addBtn = document.getElementById('riven-add-stat-btn');
  if (addBtn) addBtn.classList.toggle('hidden', state.riven.slots >= 4);
}

function addRivenStatSlot() {
  if (state.riven.slots >= 4) return;
  state.riven.slots += 1;
  // Reset the new slot to a clean state in case it had stale data from a
  // previous larger configuration.
  const idx = state.riven.slots - 1;
  state.riven.stats[idx] = { slug: null, value: '' };
  state.riven.result = null;
  state.riven.warning = null;
  renderRivenStatRows();
}

function removeRivenStatSlot(index) {
  if (state.riven.slots <= 2) return;
  // Shift slots after `index` one position up, then shrink.
  for (let i = index; i < state.riven.slots - 1; i++) {
    state.riven.stats[i] = state.riven.stats[i + 1];
  }
  state.riven.stats[state.riven.slots - 1] = { slug: null, value: '' };
  state.riven.slots -= 1;
  state.riven.result = null;
  state.riven.warning = null;
  renderRivenStatRows();
}

// Sign is derived from the value's sign:
//   - default stats: negative number = negative effect (`-25` is bad)
//   - multiplier stats (faction damage): value < 1.0 = negative effect
//     (e.g. `0.75x` is bad, `1.23x` is good)
function isStatNegative(slot) {
  if (!slot || slot.value === '' || slot.value == null) return false;
  const v = parseFloat(slot.value);
  if (!isFinite(v)) return false;
  const def = slot.slug ? RIVEN_STATS[slot.slug] : null;
  if (def && def.multiplier) return v < 1.0;
  return v < 0;
}

function rivenStatSign(slot) {
  return isStatNegative(slot) ? 'neg' : 'pos';
}

// Display unit for a stat — default %, overridden by `unit` field on the
// stat definition (m for range/punch_through, s for combo duration, x for
// initial combo).
function rivenStatUnit(slug) {
  if (!slug) return '%';
  const def = RIVEN_STATS[slug];
  return (def && def.unit) || '%';
}

function buildRivenStatRow(index) {
  const slot = state.riven.stats[index];

  const row = document.createElement('div');
  row.className = 'riven-stat-row';
  row.dataset.row = String(index);
  if (isStatNegative(slot)) row.classList.add('is-negative');

  const sel = document.createElement('select');
  sel.className = 'riven-stat-select';
  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = t('riven_stat_placeholder');
  sel.appendChild(placeholder);
  rivenStatsForCategory(state.riven.category).forEach(slug => {
    const opt = document.createElement('option');
    opt.value = slug;
    opt.textContent = rivenStatName(slug);
    if (slug === slot.slug) opt.selected = true;
    sel.appendChild(opt);
  });
  sel.addEventListener('change', () => {
    state.riven.stats[index].slug = sel.value || null;
    state.riven.warning = null;
    // Re-render so the unit suffix updates with the new stat selection.
    renderRivenStatRows();
  });
  row.appendChild(sel);

  const valueWrap = document.createElement('div');
  valueWrap.className = 'riven-stat-value-wrap';

  const input = document.createElement('input');
  input.className = 'riven-stat-value';
  input.type = 'number';
  input.step = '0.1';
  // No `min` — negative values represent negative effects.
  input.placeholder = t('riven_value_placeholder');
  input.value = slot.value;
  input.addEventListener('input', () => {
    state.riven.stats[index].value = input.value;
    row.classList.toggle('is-negative', isStatNegative(state.riven.stats[index]));
  });
  valueWrap.appendChild(input);

  const unit = document.createElement('span');
  unit.className = 'riven-stat-unit';
  unit.textContent = rivenStatUnit(slot.slug);
  valueWrap.appendChild(unit);
  row.appendChild(valueWrap);

  // Remove button — only visible when there are more than 2 slots.
  if (state.riven.slots > 2) {
    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.className = 'riven-stat-remove';
    removeBtn.textContent = '−';
    removeBtn.title = t('riven_remove_stat');
    removeBtn.setAttribute('aria-label', t('riven_remove_stat'));
    removeBtn.addEventListener('click', () => removeRivenStatSlot(index));
    row.appendChild(removeBtn);
  }

  return row;
}

function renderRivenResult() {
  const panel = document.getElementById('riven-result');
  const result = state.riven.result;
  const warning = state.riven.warning;

  if (!result && !warning) {
    panel.classList.add('hidden');
    return;
  }

  if (warning) {
    panel.classList.remove('hidden');
    document.getElementById('riven-score-number').textContent = '—';
    const verdictEl = document.getElementById('riven-score-verdict');
    verdictEl.textContent = warning === 'duplicate' ? t('riven_warn_duplicate') : t('riven_warn_pick_stat');
    verdictEl.style.color = '#d14545';
    document.getElementById('riven-breakdown').innerHTML = '';
    panel.style.removeProperty('--neon-color');
    return;
  }

  panel.classList.remove('hidden');
  panel.style.setProperty('--neon-color', result.verdict.color);
  document.getElementById('riven-score-number').textContent = result.score.toFixed(1);
  const verdictEl = document.getElementById('riven-score-verdict');
  verdictEl.textContent = `${result.verdict.emoji} ${t('riven_verdict_' + result.verdict.key)}`;
  verdictEl.style.color = result.verdict.color;

  const list = document.getElementById('riven-breakdown');
  list.innerHTML = '';

  const weaponObj = result.weapon ? weaponBySlug(result.weapon.slug) : null;

  result.breakdown.forEach(b => {
    const rowWrap = document.createElement('div');
    rowWrap.className = 'riven-breakdown-item ' + (b.sign === 'pos' ? 'pos' : 'neg');

    const row = document.createElement('div');
    row.className = 'riven-breakdown-row ' + (b.sign === 'pos' ? 'pos' : 'neg');

    const sign = document.createElement('span');
    sign.className = 'riven-breakdown-sign';
    sign.textContent = b.sign === 'pos' ? '+' : '−';
    row.appendChild(sign);

    const name = document.createElement('span');
    name.className = 'riven-breakdown-name';
    name.textContent = b.label;
    row.appendChild(name);

    const tier = document.createElement('span');
    tier.className = 'riven-breakdown-tier';
    if (b.sign === 'pos') {
      tier.textContent = t('riven_tier_' + b.tier);
      tier.dataset.tier = b.tier;
    } else {
      tier.textContent = t('riven_neg_' + b.tier);
      tier.dataset.neg = b.tier;
    }
    row.appendChild(tier);

    if (b.value !== '' && b.value != null) {
      const val = document.createElement('span');
      val.className = 'riven-breakdown-value';
      const unit = rivenStatUnit(b.slug);
      const def = RIVEN_STATS[b.slug];
      // Multiplier stats (faction damage) display as `0.75x` / `1.23x` — no
      // sign prefix because the multiplier itself carries the sign.
      // Other stats prefix '+' on positives so the sign is always explicit.
      let signed;
      if (def && def.multiplier) {
        signed = String(b.value);
      } else {
        signed = parseFloat(b.value) < 0 ? String(b.value) : `+${b.value}`;
      }
      val.textContent = `${signed}${unit}`;
      row.appendChild(val);
    }
    rowWrap.appendChild(row);

    // Rationale line under each stat row.
    const rationale = rivenRationale(b.slug, b.sign === 'pos' ? 'pos' : 'neg');
    if (rationale || b.tierOverridden) {
      const explain = document.createElement('div');
      explain.className = 'riven-breakdown-rationale';
      if (rationale) {
        const txt = document.createElement('span');
        txt.textContent = rationale;
        explain.appendChild(txt);
      }
      if (b.tierOverridden && weaponObj) {
        const ov = document.createElement('span');
        ov.className = 'riven-breakdown-override';
        ov.textContent = ' · ' + t('riven_breakdown_override').replace('{weapon}', weaponObj.name);
        explain.appendChild(ov);
      }
      rowWrap.appendChild(explain);
    }

    list.appendChild(rowWrap);
  });

  const shape = document.createElement('div');
  shape.className = 'riven-shape-note';
  shape.textContent = t('riven_shape_' + result.shapeKey);
  list.appendChild(shape);

  // ---- Recommended panel ----
  renderRivenRecommended(weaponObj);
}

function renderRivenRecommended(weapon) {
  // Append after the breakdown list. The "Recommended" panel renders the
  // ideal positives and free negatives for either the chosen weapon (when
  // selected) or generic universals.
  // The container lives inside the result panel, after the breakdown list.
  const list = document.getElementById('riven-breakdown');
  if (!list) return;

  // Header
  const header = document.createElement('h4');
  header.className = 'riven-rec-header';
  if (weapon) {
    header.textContent = t('riven_rec_title_weapon').replace('{weapon}', weapon.name);
  } else {
    header.textContent = t('riven_rec_title_generic');
  }
  list.appendChild(header);

  const grid = document.createElement('div');
  grid.className = 'riven-rec-grid';

  if (weapon) {
    // Weapon-specific recommendations
    const pref = weapon.preferred_positive || {};
    const wasted = weapon.wasted_positive || {};
    const free = weapon.preferred_negative || {};

    // Combine preferred positive with universal high-tier stats for fallback
    const preferredSlugs = Object.keys(pref);
    if (preferredSlugs.length === 0) {
      // No weapon-specific overrides: fall back to universal
      UNIVERSAL_RECS.positive.slice(0, 4).forEach(s => preferredSlugs.push(s));
    }

    grid.appendChild(buildRecSection(t('riven_rec_ideal_pos'), preferredSlugs.map(slug => ({
      slug, tier: pref[slug] || RIVEN_STATS[slug]?.posTier, side: 'pos',
    }))));

    const freeSlugs = Object.keys(free);
    if (freeSlugs.length > 0) {
      grid.appendChild(buildRecSection(t('riven_rec_free_neg'), freeSlugs.map(slug => ({
        slug, tier: free[slug], side: 'neg',
      }))));
    }

    const wastedSlugs = Object.keys(wasted);
    if (wastedSlugs.length > 0) {
      grid.appendChild(buildRecSection(t('riven_rec_wasted_pos'), wastedSlugs.map(slug => ({
        slug, tier: wasted[slug], side: 'pos', wasted: true,
      }))));
    }
  } else {
    // Universal generic recommendations
    grid.appendChild(buildRecSection(t('riven_rec_ideal_pos'), UNIVERSAL_RECS.positive.map(slug => ({
      slug, tier: RIVEN_STATS[slug]?.posTier, side: 'pos',
    }))));
    grid.appendChild(buildRecSection(t('riven_rec_free_neg'), UNIVERSAL_RECS.freeNegative.map(slug => ({
      slug, tier: 'beneficial', side: 'neg',
    }))));
    grid.appendChild(buildRecSection(t('riven_rec_avoid_neg'), UNIVERSAL_RECS.avoidNegative.map(slug => ({
      slug, tier: 'harmful', side: 'neg', avoid: true,
    }))));
  }

  list.appendChild(grid);
}

function buildRecSection(label, items) {
  const sec = document.createElement('div');
  sec.className = 'riven-rec-section';

  const lbl = document.createElement('div');
  lbl.className = 'riven-rec-section-label';
  lbl.textContent = label;
  sec.appendChild(lbl);

  items.forEach(it => {
    const row = document.createElement('div');
    row.className = 'riven-rec-row ' + (it.side === 'pos' ? 'pos' : 'neg');
    if (it.wasted) row.classList.add('wasted');
    if (it.avoid) row.classList.add('avoid');

    const sign = document.createElement('span');
    sign.className = 'riven-rec-sign';
    if (it.wasted) sign.textContent = '⚠';
    else if (it.avoid) sign.textContent = '✕';
    else sign.textContent = it.side === 'pos' ? '+' : '−';
    row.appendChild(sign);

    const name = document.createElement('span');
    name.className = 'riven-rec-name';
    name.textContent = rivenStatName(it.slug);
    row.appendChild(name);

    if (it.tier) {
      const tier = document.createElement('span');
      tier.className = 'riven-rec-tier';
      if (it.side === 'pos') {
        tier.textContent = t('riven_tier_' + it.tier);
        tier.dataset.tier = it.tier;
      } else {
        tier.textContent = t('riven_neg_' + it.tier);
        tier.dataset.neg = it.tier;
      }
      row.appendChild(tier);
    }

    const rationale = rivenRationale(it.slug, it.side);
    if (rationale) {
      const explain = document.createElement('div');
      explain.className = 'riven-rec-rationale';
      explain.textContent = rationale;
      const wrap = document.createElement('div');
      wrap.className = 'riven-rec-item ' + (it.side === 'pos' ? 'pos' : 'neg');
      if (it.wasted) wrap.classList.add('wasted');
      if (it.avoid)  wrap.classList.add('avoid');
      wrap.appendChild(row);
      wrap.appendChild(explain);
      sec.appendChild(wrap);
    } else {
      sec.appendChild(row);
    }
  });

  return sec;
}

function setRivenCategory(cat) {
  if (state.riven.category === cat) return;
  state.riven.category = cat;
  // Clear stat selections — different category has different stat list.
  state.riven.stats.forEach(s => { s.slug = null; });
  state.riven.result = null;
  state.riven.warning = null;
  // If the selected weapon doesn't match the new category, drop it.
  if (state.riven.weapon) {
    const w = weaponBySlug(state.riven.weapon);
    if (w && w.category !== cat) {
      state.riven.weapon = null;
      state.riven.weaponAutoDetected = false;
    }
  }
  renderRivens();
}

function evaluateRiven() {
  const slots = state.riven.slots;
  const active = state.riven.stats.slice(0, slots);

  // Validation
  if (active.some(s => !s.slug)) {
    state.riven.warning = 'pick_stat';
    state.riven.result = null;
    renderRivenResult();
    return;
  }
  const slugs = active.map(s => s.slug);
  if (new Set(slugs).size !== slugs.length) {
    state.riven.warning = 'duplicate';
    state.riven.result = null;
    renderRivenResult();
    return;
  }

  state.riven.warning = null;
  state.riven.result = scoreRiven({ stats: active, weaponSlug: state.riven.weapon });
  renderRivenResult();
}
selectArchetype(state.archetype);
