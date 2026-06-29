const PATCH_NOTES = {
  en: [
    {
      date: '2026-06-29',
      title: 'Visual polish: footer & archetype grid',
      items: [
        'Compact footer — the language and Credits controls moved from a full-width bar to a small floating pill in the bottom-right corner, keeping the screen cleaner.',
        'Archetype grid glow — inactive Warframe icons are now slightly darker; icons highlighted by the selected archetype gain a soft white glow around their silhouette.',
      ]
    },
    {
      date: '2026-06-26',
      title: 'Economy & Enemies glossary sections',
      items: [
        'Economy — new Relics, Ducats, Endo, Kuva and Platinum & Trading entries: what each currency/resource is for, where to farm it, and a panel of every Ayatan Sculpture with its socket needs and Endo value.',
        'Enemies — Eximus & Overguard (with the full ability roster and the status types they deal) and the Nemesis system (Kuva Liches, Sisters of Parvos and the new Technocyte Codas), including a card list of every weapon you can earn from each.',
        'Clearer Mission Rotations — the special cases (Arbitrations, Disruption, The Index) now show their pattern at a glance, plus two reward infographics you can click to enlarge.',
      ]
    },
    {
      date: '2026-06-25',
      title: 'Arcanes, Helminth & Archon Shards glossary sections',
      items: [
        'Arcanes — a new visual guide: what arcanes are, where they slot in (Warframe, weapons, Archwing…), how ranks and upgrade costs work, and the main arcane families.',
        'Helminth — how to unlock the Helminth, how subsuming and injecting abilities works, the secretion resources and their costs, and which ability each Warframe can give up (with a note when a subsumed ability is weakened).',
        'Archon Shards — all six shard colors and their Tauforged versions, full effect tables (normal vs Tauforged) with status icons, every way to get them (with shortcuts to the Star Chart), and the Coalescent/Ascent fusion recipes with their Stela costs.',
      ]
    },
    {
      date: '2026-06-24',
      title: 'Archon Hunts, contact form & donations',
      items: [
        'New "Archon Hunts" glossary section — how to unlock it, the three weekly Archons (Amar, Nira, Boreal) and their shards, the mission stages and levels, and the full reward table.',
        'Reward lists with icons — Sortie and Archon Hunt rewards now show each item with its icon and drop chance.',
        'Polished Riven Mods section — a visual veiled → challenge → unveiled walkthrough, links to related topics (Kuva, Sorties…), and a clearer take on how unveiling works.',
        'Desktop footer — language and Credits moved to a footer so the navigation uses the full width of the screen.',
        'Contact form — a new Contact button opens a quick form to send feedback, a bug report or an idea, with an optional file attachment (image or PDF up to 5 MB) and spam protection.',
        'Support the project — a new "Support" button in the footer, with PayPal/card (international) and Pix (Brazil only, with a QR code and copy-paste code).',
      ]
    },
    {
      date: '2026-06-23',
      title: 'Glossary index, augment sources, tooltips & Modding Basics',
      items: [
        'Glossary index — a table of contents at the top jumps you to any section.',
        'Augment sources — each Warframe ability augment now shows which syndicates sell it (with a link to the Syndicates entry), and each faction syndicate lists the Warframes that have augments there.',
        'Keyword tooltips — hover (or tap) jargon like *DPS*, *crowd control* or *AoE* in archetype and ability descriptions for a quick explanation.',
        'Quest rewards with icons — quest reward grids now show item icons (Necramech parts, catalysts, Captura scenes, decorations and more), and several quest descriptions were rewritten to stay spoiler-free.',
        'New "Modding Basics" glossary section — capacity, polarities and mod types, with annotated in-game screenshots.',
        'Status Effects: combining elements — a new guide showing how the *order* of your elemental mods decides which combo you get, plus the mod-search shortcut.',
        'More Builds & Mods sections — Forma & Orokin Catalysts, Riven Mods, Arcanes and Helminth, marked *under construction* while we add visuals.',
        'pt-BR damage elements now use their adjective names (Calor → Ígneo, Frio → Glacial, etc.).',
      ]
    },
    {
      date: '2026-06-22',
      title: 'Glossary launch',
      items: [
        'The Glossary is live — a searchable, categorized reference (Progression, Combat, Builds & Mods, Economy, Enemies) with rich, illustrated sections. A few entries are still marked "Soon" and will be filled in over the coming updates.',
        'Mission Types — a new section covering all 40 mission types from the Star Chart filters (Exterminate, Survival, Disruption, the Void/Zariman modes, Railjack and more), grouped and color-coded, with late-game modes tucked behind a spoiler veil.',
        'Mission Rotations (A/B/C) — how the AABC reward cycle works, when each rotation lands per mission type (Survival, Defense, Interception…), plus the special cases (Disruption, Arbitrations, The Index).',
        'Critical Hits — a clearer take on how Critical Chance and Critical Damage multiply, a worked example table per crit tier, and what the in-game "!", "!!" and "!!!" actually mean.',
      ]
    },
    {
      date: '2026-06-19',
      title: 'Void Relics, Riven recoil overhaul & relic filters',
      items: [
        'New Void Relics page — browse all 767 relics: search by relic name or by Prime part, filter by era (Lith/Meso/Neo/Axi/Requiem), and open a detailed card showing every drop with its rarity, Ducat value, and drop chance per refinement tier (Intact → Radiant). Vaulted relics explain how their parts come back; Requiem relics point to Palladino.',
        'Relic drop locations — each relic lists where it drops, grouped by planet, with a "View on map" button that jumps straight to the Star Chart (Railjack/Proxima nodes now link correctly). Filter the locations by mission type.',
        'Relic filters — new Unvaulted and No Forma toggles narrow the relic list quickly, and each part now shows its Ducat value right in the relic cards.',
        'Recoil graded by weapon type — recoil as a Riven negative is now handled correctly: it\'s a harmless freebie on weapons where it doesn\'t disrupt aim (beams, bows, snipers, launchers, the Torid\'s Incarnon beam) and a real downside on full-auto / burst weapons where it actually matters. It\'s also correctly read as a *negative* effect (more recoil), not a bonus.',
        'Fairer roll-strength scoring — a god-roll combination no longer gets dragged down just because the weapon has a high disposition. Roll strength now *adjusts* the score instead of dominating it, so the same great Riven scores similarly across weapons (fixes a Torid Incarnon scoring lower than weapons it should beat).',
        'Riven stat grades aligned to the community reference — about 17 stat tiers were re-checked against the Morrow Shore guide (impact, puncture, ammo, range, fire rate, faction damage and more).',
        'War Prime & Afentis Prime added to the Riven evaluator.',
        'Styanax Prime — now in the Archetypes page with a Base/Prime toggle.',
        'Sharper Riven photo reading — the stat parser was rebuilt structurally: faction damage in % (e.g. "+5.6% Damage to Grineer") and Punch Through are read correctly now, even when the game packs stats onto one line or splits a value from its name.',
        'More Star Chart filters — Mirror Defense and other missing mission types now have filter chips.',
      ]
    },
    {
      date: '2026-06-18',
      title: 'Sirius & Orion, Riven evaluator & photo reading',
      items: [
        'Sirius & Orion — the new dual warframe (Update 43) is now live in the Archetypes page, classified as Strategist (Damage + Support + Crowd Control). Stats marked as subject to change while the classification is being validated.',
        'Re-tuned weapon ratings — every weapon\'s ideal Riven stats were re-derived from real stats: raw +Damage is no longer treated as a top stat (it\'s filler on most weapons), and crit/status priorities now match each weapon\'s build. Status weapons correctly mark crit as wasted.',
        'Incarnon Mode — weapons built around their Incarnon form (Torid, Braton, Latron, Strun…) auto-enable Incarnon Mode when selected, grading the Riven against that form\'s meta build. Toggle it off to evaluate the base form.',
        'Roll strength & disposition — the result now shows how strong your roll is (normalized by the weapon\'s disposition) plus the disposition dots.',
        'Better photo reading — uploading a Riven screenshot now uses Google Vision for far more accurate text recognition (it even reads photos taken of a monitor), with the local reader as a fallback. Faction-damage stats (e.g. "x1.27 to Infested") are read correctly now.',
        'Update 43 content — new augments (Dante, Temple, Koumei, Nokko), the Nidus retouch (200 Mutation stacks, Virulence/Ravenous changes), and Uranus Proxima on the Star Chart.',
      ]
    },
    {
      date: '2026-06-17',
      title: 'Riven comparator, mobile menu, and shareable links',
      items: [
        'Compare two Rivens side by side — the Riven evaluator now has two independent columns (Roll A / Roll B). Evaluate a single roll or fill both to compare — ideal when deciding which roll to keep after a reroll. Each column has its own screenshot upload, stat slots, and 0–10 score with full breakdown.',
        'Weapon lock — the first roll to have a weapon set (manually or via OCR) locks it for both columns; the lock releases only when both columns are cleared.',
        'Mobile-friendly header — on phones the navigation collapses into a hamburger menu (☰), with the logo centered and language/credits on the right, so the tabs no longer overflow.',
        'Shareable links — pages now have their own URL (e.g. `/archetypes/frost`, `/star-chart/mars`); copy the address bar to share a specific warframe, planet, or tab, and the browser back button works.',
        'Patch notes in Credits — the Credits dialog now has a "Patch notes" view with the recent changelog.',
      ]
    },
    {
      date: '2026-06-16',
      title: 'Railjack & Special systems, Warframe farm map & Star Chart polish',
      items: [
        'Now on Cloudflare Pages — the site is now hosted at tennohelper.pages.dev, with faster global load times via Cloudflare\'s CDN.',
        'Star Chart now has three tabs — Origin System, Railjack (Empyrean), and Special (Duviri, Höllvania 1999, Dark Refractory), each with its own missions and themed backdrop; the tabs stay visible regardless of the spoiler toggle, and opening Railjack or Special auto-enables spoilers.',
        'Open worlds on the map — Plains of Eidolon, Orb Vallis (incl. Deepmines), and Cambion Drift now appear as navigable areas inside Earth, Venus, and Deimos, with their activities (Free Roam, Bounties, Eidolon Hunt, Orb Heists, Isolation Vault) plus Deep & Temporal Archimedea.',
        'Warframe icons on planet cards — every planet card now shows which warframes drop on it; click an icon to jump straight to that warframe\'s archetype detail.',
        'All 64 warframes mapped — every farmable frame now has its drop location marked on the Star Chart, including Oberon in Railjack proximas and Octavia in Lua.',
        'New warframe drops mapped — Oraxia (Isleweaver), Temple (Solstice Square), Cyte-09 (Höllvania Central Mall), and Uriel (The Descendia) show on their nodes; frames also farmable in The Circuit get an "Also in The Circuit" link.',
        'Click a resource → jump to where it drops — open-world and special-system resources now link straight to their farm node on the map.',
        'Archwing missions flagged — Archwing nodes (Caelus, Salacia, Erpo, etc.) now show an Archwing icon.',
        'Four new Riven categories — the Riven evaluator now covers Archgun, Kitgun, Zaw, and Companion weapons on top of Primary/Secondary/Melee.',
        'Smarter Show Spoilers — with spoilers off, the Railjack and Special tabs (and their resources) are hidden for a clean base-game view; open worlds stay visible.',
        'Patch Notes in Credits — the Credits modal now has a patch history you can browse.',
        'Warframe badge icons smaller — badges on planet cards are more compact so multiple drops no longer get clipped.',
      ]
    },
    {
      date: '2026-06-15',
      title: 'First version launch',
      items: [
        'Archetypes — every warframe sorted by combat archetype, with abilities, portraits, and acquisition info.',
        'Star Chart — full solar system in progression order: all planets, nodes, boss → warframe drops, recommended farms, mission filters, search, and a Show Spoilers toggle.',
        'Glossary — interactive Status Effects (Procs) reference for all 13 damage types and faction vulnerabilities.',
        'Riven Evaluator — 0–10 scoring based on stat tier and roll quality, with built-in OCR for screenshot input (EN + PT).',
        'Bilingual — full Português (BR) and English support.',
        'Complete resource catalog — over 350 resources now listed (was ~25 originally), covering every Open World, Empyrean, Duviri, Höllvania, and quest item from the wiki.',
        'Tags on every resource — each one shows its rarity, location, and source as colored chips, so you can scan the list and instantly see what kind of item it is.',
        'Three independent filters in the resource grid — narrow it down by rarity, by location (Star Chart, Plains of Eidolon, Orb Vallis, Cambion Drift, Duviri, Höllvania, Dark Refractory, Misc), or by source (Bounty Drops, Heist Drops, Mining, Fishing, Necramech Drops, Hex Treasures, etc.).',
        'Multi-select mission filters in the Star Chart — pick several mission types simultaneously (e.g. Assassination + Spy) instead of one at a time. Click an active chip to toggle it off; click "All" to clear them.',
        'Full craft cost per warframe — every frame now shows the complete shopping list to build it (Main BP + Neuroptics + Chassis + Systems combined), with each resource clickable to jump straight to its recommended farm node.',
        'Special cases handled — Chroma\'s full breakdown including the Volt / Ember / Frost / Saryn parts it requires; Equinox shows the Day + Night halves separately plus the aggregated total including Forma.',
        'Smart "View on Star Chart" link — clicking the link from a warframe now auto-applies the right mission-type filter, so the relevant farm node stands out immediately.',
        'Open-world planets show every regional resource — Venus now lists every Orb Vallis item, Earth every Plains of Eidolon item, Deimos every Cambion Drift item, all alphabetized in a 3-column grid.',
      ]
    }
  ],
  'pt-BR': [
    {
      date: '2026-06-29',
      title: 'Polimento visual: rodapé e grade de arquétipos',
      items: [
        'Rodapé compacto — os controles de idioma e Créditos saíram da barra full-width e viraram uma pílula flutuante discreta no canto inferior direito, deixando a tela mais limpa.',
        'Glow na grade de arquétipos — os ícones de Warframe inativos ficaram um pouco mais escuros; os ícones destacados pelo arquétipo selecionado ganham um glow branco suave ao redor da silhueta.',
      ]
    },
    {
      date: '2026-06-26',
      title: 'Seções de Economia e Inimigos no Glossário',
      items: [
        'Economia — novas entradas de Relíquias, Ducados, Endo, Kuva e Platina & Trade: pra que serve cada moeda/recurso, onde farmar, e um painel com todas as Esculturas Ayatan (sockets necessários e valor em Endo).',
        'Inimigos — Eximus & Overguard (com todas as habilidades e os status que causam) e o sistema de nêmesis (Kuva Liches, Sisters of Parvos e os novos Technocyte Codas), incluindo a lista em cards de cada arma que dá pra obter.',
        'Rotações de Missão mais claras — os casos especiais (Arbitragens, Disrupção, O Índice) agora mostram o padrão de forma visual, mais dois infográficos de recompensa que dá pra clicar e ampliar.',
      ]
    },
    {
      date: '2026-06-25',
      title: 'Seções de Arcanos, Helminth e Fragmentos de Archon no Glossário',
      items: [
        'Arcanos — um guia visual novo: o que são arcanos, onde encaixam (Warframe, armas, Archwing…), como funcionam os ranks e os custos de upgrade, e as principais famílias de arcanos.',
        'Helminth — como desbloquear o Helminth, como funciona subsumir e injetar habilidades, os recursos de secreção e seus custos, e qual habilidade cada Warframe pode ceder (com aviso quando a habilidade subsumida é enfraquecida).',
        'Fragmentos de Archon — as seis cores de fragmento e suas versões Tauforged, tabelas completas de efeitos (normal vs Tauforged) com ícones de status, todas as formas de conseguir (com atalhos pro Mapa Estelar) e as receitas de fusão Coalescent/Ascent com seus custos em Stela.',
      ]
    },
    {
      date: '2026-06-24',
      title: 'Caçada aos Archons, formulário de contato e doações',
      items: [
        'Nova seção "Caçada aos Archons" no Glossário — como desbloquear, os três Archons semanais (Amar, Nira, Boreal) e seus fragmentos, os estágios e níveis das missões, e a tabela completa de recompensas.',
        'Listas de recompensa com ícones — as recompensas de Sortie e da Caçada aos Archons agora mostram cada item com seu ícone e a chance de drop.',
        'Seção de Riven Mods melhorada — um passo a passo visual oculto → desafio → revelado, links pra tópicos relacionados (Kuva, Sortie…) e uma explicação mais clara de como revelar funciona.',
        'Rodapé no desktop — idioma e Créditos foram pro rodapé pra navegação usar a largura toda da tela.',
        'Formulário de contato — um novo botão Contato abre um formulário rápido pra mandar feedback, reportar um bug ou sugerir uma ideia, com anexo opcional (imagem ou PDF até 5 MB) e proteção anti-spam.',
        'Apoie o projeto — um novo botão "Apoiar" no rodapé, com PayPal/cartão (internacional) e Pix (apenas no Brasil, com QR Code e código copia-e-cola).',
      ]
    },
    {
      date: '2026-06-23',
      title: 'Índice do glossário, fontes de augment, tooltips e Modding Básico',
      items: [
        'Índice do glossário — um sumário no topo te leva direto pra qualquer seção.',
        'Fontes de augment — cada augment de habilidade agora mostra em quais sindicatos comprá-lo (com link pra entrada de Sindicatos), e cada sindicato de facção lista os Warframes que têm augment lá.',
        'Tooltips de termos — passe o mouse (ou toque) em jargões como *DPS*, *controle de grupo* ou *AoE* nas descrições de arquétipos e habilidades pra uma explicação rápida.',
        'Recompensas de quest com ícones — as grades de recompensa agora mostram ícones de item (peças de Necramech, catalisadores, cenas de Captura, decorações e mais), e várias descrições de quest foram reescritas sem spoilers.',
        'Nova seção "Modding Básico" — capacidade, polaridades e tipos de mod, com capturas anotadas do jogo.',
        'Status Effects: combinando elementos — um guia novo mostrando como a *ordem* dos seus mods elementais decide qual combo sai, mais o atalho da busca de mods.',
        'Mais seções de Builds & Mods — Forma & Catalisador/Reator Orokin, Mods Riven, Arcanos e Helminth, marcadas como *em construção* enquanto adicionamos as imagens.',
        'Elementos de dano em pt-BR agora usam a forma adjetiva (Calor → Ígneo, Frio → Glacial, etc.).',
      ]
    },
    {
      date: '2026-06-22',
      title: 'Lançamento do Glossário',
      items: [
        'O Glossário está no ar — uma referência pesquisável e categorizada (Progressão, Combate, Builds & Mods, Economia, Inimigos) com seções ricas e ilustradas. Algumas entradas ainda estão marcadas como "Em breve" e serão preenchidas nas próximas atualizações.',
        'Tipos de Missão — nova seção cobrindo os 40 tipos de missão dos filtros do Mapa Estelar (Exterminar, Sobrevivência, Disrupção, os modos Void/Zariman, Railjack e mais), agrupados e coloridos, com os modos de fim de jogo atrás de um véu de spoiler.',
        'Rotações de Missão (A/B/C) — como funciona o ciclo de recompensas AABC, quando cada rotação cai por tipo de missão (Sobrevivência, Defesa, Interceptação…) e os casos especiais (Disrupção, Arbitragens, O Índice).',
        'Críticos — uma explicação mais clara de como Chance de Crítico e Dano de Crítico se multiplicam, uma tabela de exemplo por tier de crítico, e o que significam os "!", "!!" e "!!!" que aparecem no jogo.',
      ]
    },
    {
      date: '2026-06-19',
      title: 'Relíquias Void, reforma do recuo nos Rivens e filtros de relíquias',
      items: [
        'Nova página de Relíquias Void — navegue por todas as 767 relíquias: busque por nome da relíquia ou por peça Prime, filtre por era (Lith/Meso/Neo/Axi/Requiem), e abra um card detalhado com cada drop, sua raridade, valor em Ducados e chance de drop por nível de refinamento (Intacta → Radiante). Relíquias no Vault explicam como as peças voltam; as Requiem apontam pra Palladino.',
        'Locais de drop das relíquias — cada relíquia lista onde dropa, agrupado por planeta, com um botão "Ver no mapa" que pula direto pro Mapa Estelar (nós de Railjack/Proxima agora linkam certo). Filtre os locais por tipo de missão.',
        'Filtros de relíquias — novos toggles Unvaulted e Sem Forma afunilam a lista rapidamente, e cada peça agora mostra o valor em Ducados direto nos cards.',
        'Recuo avaliado por tipo de arma — o recuo como negativo de Riven agora é tratado certo: é um bônus inofensivo nas armas onde não atrapalha a mira (beams, arcos, snipers, lançadores, o beam Incarnon da Torid) e um ponto negativo de verdade nas armas full-auto / burst, onde ele realmente importa. Também é lido corretamente como um efeito *negativo* (mais recuo), não um bônus.',
        'Pontuação mais justa pela força do roll — uma combinação god-roll não afunda mais só porque a arma tem disposition alta. A força do roll agora *ajusta* a nota em vez de dominá-la, então o mesmo Riven ótimo pontua parecido entre armas diferentes (corrige uma Torid Incarnon pontuando abaixo de armas que deveria superar).',
        'Notas de stats alinhadas à referência da comunidade — cerca de 17 tiers de stats foram reconferidos com o guia da Morrow Shore (impacto, perfuração, munição, alcance, cadência, dano por facção e mais).',
        'War Prime e Afentis Prime adicionados ao avaliador de Rivens.',
        'Styanax Prime — agora na página de Arquétipos com toggle Base/Prime.',
        'Leitura de foto de Riven mais precisa — o parser de stats foi reconstruído de forma estrutural: dano de facção em % (ex.: "+5.6% Damage to Grineer") e Penetração agora são lidos corretamente, mesmo quando o jogo junta stats numa linha só ou separa o valor do nome.',
        'Mais filtros no Mapa Estelar — Defesa Espelhada e outros tipos de missão que faltavam agora têm chip de filtro.',
      ]
    },
    {
      date: '2026-06-18',
      title: 'Sirius & Orion, avaliador de Rivens e leitura por foto mais inteligentes',
      items: [
        'Sirius & Orion — o novo warframe duplo (Update 43) está no ar na página de Arquétipos, classificado como Estrategista (Dano + Suporte + Controle de Grupo). Stats marcados como sujeitos a mudanças enquanto a classificação é validada.',
        'Notas de arma recalibradas — os stats ideais de Riven de cada arma foram refeitos a partir dos stats reais: +Dano cru não é mais tratado como stat top (é filler na maioria), e as prioridades de crit/status agora batem com a build de cada arma. Armas de status marcam crit como desperdício.',
        'Modo Incarnon — armas construídas na forma Incarnon (Torid, Braton, Latron, Strun…) ligam o Modo Incarnon automaticamente ao serem selecionadas, avaliando o Riven pela build de meta da forma. Desligue para avaliar a forma base.',
        'Força do roll & disposição — o resultado agora mostra quão forte foi seu roll (normalizado pela disposição da arma) e os pontos de disposição.',
        'Leitura por foto melhor — enviar um print de Riven agora usa o Google Vision, com reconhecimento muito mais preciso (lê até foto de monitor), com o leitor local como reserva. Stats de dano de facção (ex.: "x1,27 contra Infestados") agora são lidos corretamente.',
        'Conteúdo do Update 43 — novos augments (Dante, Temple, Koumei, Nokko), o retoque do Nidus (200 cargas de Mutação, mudanças em Virulence/Ravenous) e o Uranus Proxima no Mapa Estelar.',
      ]
    },
    {
      date: '2026-06-17',
      title: 'Comparador de Rivens, menu mobile e links compartilháveis',
      items: [
        'Compare dois Rivens lado a lado — o avaliador agora tem duas colunas independentes (Roll A / Roll B). Avalie um roll só ou preencha os dois pra comparar — ideal pra decidir qual roll manter depois de um reroll. Cada coluna tem upload de print próprio, slots de stats e nota de 0 a 10 com breakdown completo.',
        'Trava de arma — o primeiro roll que define uma arma (manual ou via OCR) trava ela pras duas colunas; a trava só é liberada quando as duas colunas são limpas.',
        'Header adaptado pra celular — no celular a navegação vira um menu hambúrguer (☰), com o logo centralizado e idioma/créditos à direita, então as abas não estouram mais.',
        'Links compartilháveis — cada página agora tem URL própria (ex.: `/archetypes/frost`, `/star-chart/mars`); copie a barra de endereço pra compartilhar um warframe, planeta ou aba específica, e o botão voltar do navegador funciona.',
        'Notas de atualização nos Créditos — o modal de Créditos agora tem uma view "Notas de atualização" com o changelog recente.',
      ]
    },
    {
      date: '2026-06-16',
      title: 'Sistemas Railjack & Special, mapa de farm de warframes e polimento do Mapa Estelar',
      items: [
        'Agora no Cloudflare Pages — o site agora está em tennohelper.pages.dev, com carregamento mais rápido pelo CDN global da Cloudflare.',
        'Mapa Estelar agora tem três abas — Sistema Origin, Railjack (Empyrean) e Special (Duviri, Höllvania 1999, Refratário Sombrio), cada uma com missões próprias e fundo temático; as abas ficam sempre visíveis independente do toggle de spoilers, e abrir Railjack ou Special ativa os spoilers automaticamente.',
        'Mundos abertos no mapa — Plains of Eidolon, Orb Vallis (com Deepmines) e Cambion Drift agora aparecem como áreas navegáveis dentro de Terra, Vênus e Deimos, com suas atividades (Mundo Aberto, Contratos, Caçada de Eidolon, Assaltos aos Orbs, Cofre de Isolamento) e Deep & Temporal Archimedea.',
        'Ícones de warframe nos cards de planeta — cada card agora mostra quais warframes droppam nele; clique no ícone para ir direto ao detalhe do arquétipo.',
        'Todos os 64 warframes mapeados — todo frame farmável agora tem a localização de drop marcada no Mapa Estelar, incluindo Oberon nas proximas de Railjack e Octavia na Lua.',
        'Novos drops de warframe mapeados — Oraxia (Isleweaver), Temple (Solstice Square), Cyte-09 (Höllvania Central Mall) e Uriel (The Descendia) aparecem nos nodos; frames também farmáveis no Circuito ganham link "Também no Circuito".',
        'Clique num recurso → vá direto pra onde ele cai — recursos de mundo aberto e dos sistemas especiais agora linkam pro nodo de farm no mapa.',
        'Missões de Archwing sinalizadas — nodos de Archwing (Caelus, Salacia, Erpo, etc.) agora mostram um ícone de Archwing.',
        'Quatro novas categorias de Riven — o avaliador agora cobre Archgun, Kitgun, Zaw e Companion além de Primária/Secundária/Corpo a corpo.',
        'Show Spoilers mais esperto — com spoilers desligado, as abas Railjack e Special (e seus recursos) ficam escondidas pra uma visão limpa do base game; mundos abertos continuam visíveis.',
        'Notas de atualização nos Créditos — o modal de Créditos agora tem um histórico de atualizações que você pode consultar.',
        'Ícones de warframe menores — os badges nos cards de planeta são mais compactos para não cortar quando vários warframes droppam no mesmo planeta.',
      ]
    },
    {
      date: '2026-06-15',
      title: 'Lançamento da primeira versão',
      items: [
        'Arquétipos — cada warframe organizado por arquétipo de combate, com habilidades, portraits e infos de aquisição.',
        'Mapa Estelar — sistema solar completo em ordem de progressão: todos os planetas, nodos, drops de boss → warframe, farms recomendados, filtros de missão, busca, e toggle Mostrar Spoilers.',
        'Glossário — referência interativa de Status Effects (Procs) pros 13 tipos de dano e vulnerabilidades por facção.',
        'Avaliador de Rivens — nota de 0 a 10 baseada em tier de stats e qualidade do roll, com OCR embutido pra leitura de print (EN + PT).',
        'Bilíngue — suporte completo em Português (BR) e Inglês.',
        'Catálogo completo de recursos — mais de 350 recursos listados agora (antes eram ~25), cobrindo todo Open World, Empyrean, Duviri, Höllvania, Dark Refractory e itens de quest da wiki.',
        'Tags em cada recurso — cada um mostra raridade, local e fonte como chips coloridos, então dá pra bater o olho e saber na hora que tipo de item é.',
        'Três filtros independentes na grid de recursos — afunile por raridade, por local (Mapa Estelar, Plains of Eidolon, Orb Vallis, Cambion Drift, Duviri, Höllvania, Refratário Sombrio, Diversos) ou por fonte (Drops de Bounty, Heist, Mineração, Pesca, Necramech, Tesouros Hex, etc.).',
        'Multi-seleção de filtros de missão no Mapa Estelar — escolha vários tipos de missão ao mesmo tempo (ex: Assassinato + Espionagem) em vez de só um. Clicar num chip ativo desliga ele; clicar em "Todos" limpa tudo.',
        'Custo de craft completo por warframe — cada frame agora mostra a lista de compras pra construir ele inteiro (BP Principal + Neuroptics + Chassis + Sistemas somados), com cada recurso clicável pra ir direto pro nodo de farm recomendado.',
        'Casos especiais tratados — Chroma mostra o breakdown completo incluindo as partes de Volt / Ember / Frost / Saryn que ele exige; Equinox mostra Day + Night separadamente e o total agregado com Forma.',
        'Link "Ver no Mapa Estelar" inteligente — clicar no link a partir de um warframe agora aplica automaticamente o filtro de tipo de missão certo, então o nodo de farm relevante já fica em destaque.',
        'Planetas de open-world unem recursos automaticamente — Vênus agora lista todos os itens do Orb Vallis, Terra todos das Plains of Eidolon, Deimos todos do Cambion Drift, em ordem alfabética numa grid de 3 colunas.',
      ]
    }
  ]
};

