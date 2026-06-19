# Tenno Helper

A free, fan-made companion site for **Warframe**.
Site companion grátis e feito por fã pra **Warframe**.

[🇺🇸 English](#english) · [🇧🇷 Português](#português)

---

## English

Built to help Tenno — new and veteran — plan builds, find farm spots, and understand the systems behind the game.

### What's inside

#### Archetypes
Every warframe sorted by **combat archetype** — combinations of Damage, Survival, Support, Crowd Control, and Stealth that define how a frame plays. Find which fits your style, check its abilities, switch between Base and Prime portraits, and see how to acquire it.

#### Star Chart
The full solar system in **progression order** — every planet, every node, every boss drop, and every farmable resource.

- See at a glance which **warframes drop from each boss** (icon + name pinned in the corner of every planet card)
- Click a planet card to expand it in place with the full node list, recommended farms, and resources
- Filter by mission type (Assassination, Survival, Spy, Excavation, Mobile Defense, Disruption, etc.) or search by planet, node, boss, or warframe name
- Click any resource to see what it's used for, where it drops, and the meta farm node
- A **Show Spoilers** toggle keeps quest-locked content hidden by default — perfect for new players

#### Glossary
Interactive reference for **Status Effects (Procs)** — pick any of the 13 damage types (Physical, Elemental, or Combinations) and see what the proc does, how it stacks, and which factions are vulnerable or resistant. Updated for the current faction damage rework.

#### Riven Evaluator
Score your **Riven mods** from 0 to 10 based on stat tier and roll quality.

- Add up to 4 stats with positive or negative values, automatic unit detection (`%`, `x`, `m`, `s`)
- Or just **drop a screenshot of your Riven** — built-in OCR reads stat values and the weapon name automatically (English + Portuguese)
- Get a verdict on whether to **keep, reroll, or trash** the roll, with a per-stat breakdown explaining what's helping or hurting the score

### Languages
The whole site is available in **Português (BR)** and **English** — switch via the flag in the top-right corner.

### Patches

#### 2026-06-19 — Riven recoil overhaul & relic filters
- **Recoil graded by weapon type** — recoil as a Riven negative is now handled correctly: it's a harmless freebie on weapons where it doesn't disrupt aim (beams, bows, snipers, launchers, the Torid's Incarnon beam) and a real downside on full-auto / burst weapons where it actually matters. It's also correctly read as a *negative* effect (more recoil), not a bonus.
- **Fairer roll-strength scoring** — a god-roll combination no longer gets dragged down just because the weapon has a high disposition. Roll strength now *adjusts* the score instead of dominating it, so the same great Riven scores similarly across weapons (fixes a Torid Incarnon scoring lower than weapons it should beat).
- **Riven stat grades aligned to the community reference** — about 17 stat tiers were re-checked against the Morrow Shore guide (impact, puncture, ammo, range, fire rate, faction damage and more).
- **Relic filters** — new **Unvaulted** and **No Forma** toggles narrow the relic list quickly, and each part now shows its Ducat value right in the relic cards.

#### 2026-06-19 — Void Relics, War Prime & Styanax Prime
- **New Void Relics page** — browse all 767 relics: search by relic name or by Prime part, filter by era (Lith/Meso/Neo/Axi/Requiem), and open a detailed card showing every drop with its rarity, Ducat value, and drop chance per refinement tier (Intact → Radiant). Vaulted relics explain how their parts come back; Requiem relics point to Palladino.
- **Relic drop locations** — each relic lists where it drops, grouped by planet, with a "View on map" button that jumps straight to the Star Chart (Railjack/Proxima nodes now link correctly). Filter the locations by mission type.
- **War Prime & Afentis Prime** added to the Riven evaluator.
- **Styanax Prime** — now in the Archetypes page with a Base/Prime toggle.
- **Sharper Riven photo reading** — the stat parser was rebuilt structurally: faction damage in % (e.g. "+5.6% Damage to Grineer") and Punch Through are read correctly now, even when the game packs stats onto one line or splits a value from its name.
- **More Star Chart filters** — Mirror Defense and other missing mission types now have filter chips.

#### 2026-06-18 — Sirius & Orion, Riven evaluator & photo reading
- **Sirius & Orion** — the new dual warframe (Update 43) is now live in the Archetypes page, classified as **Strategist** (Damage + Support + Crowd Control). Stats marked as subject to change while the classification is being validated.
- **Re-tuned weapon ratings** — every weapon's ideal Riven stats were re-derived from real stats: raw +Damage is no longer treated as a top stat (it's filler on most weapons), and crit/status priorities now match each weapon's build. Status weapons correctly mark crit as wasted.
- **Incarnon Mode** — weapons built around their Incarnon form (Torid, Braton, Latron, Strun…) auto-enable Incarnon Mode when selected, grading the Riven against that form's meta build. Toggle it off to evaluate the base form.
- **Roll strength & disposition** — the result now shows how strong your roll is (normalized by the weapon's disposition) plus the disposition dots.
- **Better photo reading** — uploading a Riven screenshot now uses Google Vision for far more accurate text recognition (it even reads photos taken of a monitor), with the local reader as a fallback. Faction-damage stats (e.g. "x1.27 to Infested") are read correctly now.
- **Update 43 content** — new augments (Dante, Temple, Koumei, Nokko), the Nidus retouch (200 Mutation stacks, Virulence/Ravenous changes), and Uranus Proxima on the Star Chart.

#### 2026-06-17 — Riven comparator, mobile menu, and shareable links
- **Compare two Rivens side by side** — the Riven evaluator now has two independent columns (Roll A / Roll B). Evaluate a single roll or fill both to compare — ideal when deciding which roll to keep after a reroll. Each column has its own screenshot upload, stat slots, and 0–10 score with full breakdown.
- **Weapon lock** — the first roll to have a weapon set (manually or via OCR) locks it for both columns; the lock releases only when both columns are cleared.
- **Mobile-friendly header** — on phones the navigation collapses into a hamburger menu (☰), with the logo centered and language/credits on the right, so the tabs no longer overflow.
- **Shareable links** — pages now have their own URL (e.g. `/archetypes/frost`, `/star-chart/mars`); copy the address bar to share a specific warframe, planet, or tab, and the browser back button works.
- **Patch notes in Credits** — the Credits dialog now has a "Patch notes" view with the recent changelog.

#### 2026-06-16 — Warframe farm map, interactive icons, and Star Chart polish
- **Now on Cloudflare Pages** — the site is now hosted at [tennohelper.pages.dev](https://tennohelper.pages.dev), with faster global load times via Cloudflare's CDN.
- **Warframe icons on planet cards** — every planet card now shows which warframes drop on it; click an icon to jump straight to that warframe's archetype detail.
- **All 64 warframes mapped** — every farmable frame now has its drop location marked on the Star Chart, including Oberon in Railjack proximas and Octavia in Lua.
- **Star Chart tabs always visible** — Origin System, Railjack, and Special tabs now appear at the top regardless of the spoiler toggle; clicking Railjack or Special auto-enables spoilers.
- **Patch Notes in Credits** — the Credits modal now has a patch history you can browse.
- **Warframe badge icons smaller** — badges on planet cards are more compact so multiple drops no longer get clipped.

#### 2026-06-16 — Railjack & Special systems, Riven categories, and spoiler control
- **Star Chart now has three tabs** — Origin System, Railjack (Empyrean), and Special (Duviri, Höllvania 1999, Dark Refractory), each with its own missions and themed backdrop.
- **Open worlds on the map** — Plains of Eidolon, Orb Vallis (incl. Deepmines), and Cambion Drift now appear as navigable areas inside Earth, Venus, and Deimos, with their activities (Free Roam, Bounties, Eidolon Hunt, Orb Heists, Isolation Vault) plus Deep & Temporal Archimedea.
- **Click a resource → jump to where it drops** — open-world and special-system resources now link straight to their farm node on the map.
- **Archwing missions flagged** — Archwing nodes (Caelus, Salacia, Erpo, etc.) now show an Archwing icon.
- **Four new Riven categories** — the Riven evaluator now covers Archgun, Kitgun, Zaw, and Companion weapons on top of Primary/Secondary/Melee.
- **Smarter Show Spoilers** — with spoilers off, the Railjack and Special tabs (and their resources) are hidden for a clean base-game view; open worlds stay visible.
- **New warframe drops mapped** — Oraxia (Isleweaver), Temple (Solstice Square), Cyte-09 (Höllvania Central Mall), and Uriel (The Descendia) show on their nodes; frames also farmable in The Circuit get an "Also in The Circuit" link.

#### 2026-06-15 — Resources, craft costs, and better filters
- **Complete resource catalog** — over 350 resources now listed (was ~25 originally), covering every Open World, Empyrean, Duviri, Höllvania, and quest item from the wiki.
- **Tags on every resource** — each one shows its rarity, location, and source as colored chips, so you can scan the list and instantly see what kind of item it is.
- **Three independent filters in the resource grid** — narrow it down by rarity, by location (Star Chart, Plains of Eidolon, Orb Vallis, Cambion Drift, Duviri, Höllvania, Dark Refractory, Misc), or by source (Bounty Drops, Heist Drops, Mining, Fishing, Necramech Drops, Hex Treasures, etc.).
- **Multi-select mission filters in the Star Chart** — pick several mission types simultaneously (e.g. Assassination + Spy) instead of one at a time. Click an active chip to toggle it off; click "All" to clear them.
- **Full craft cost per warframe** — every frame now shows the complete shopping list to build it (Main BP + Neuroptics + Chassis + Systems combined), with each resource clickable to jump straight to its recommended farm node.
- **Special cases handled** — Chroma's full breakdown including the Volt / Ember / Frost / Saryn parts it requires; Equinox shows the Day + Night halves separately plus the aggregated total including Forma.
- **Smart "View on Star Chart" link** — clicking the link from a warframe now auto-applies the right mission-type filter, so the relevant farm node stands out immediately.
- **Open-world planets show every regional resource** — Venus now lists every Orb Vallis item, Earth every Plains of Eidolon item, Deimos every Cambion Drift item, all alphabetized in a 3-column grid.

#### 2026-06-15 — First version launch
- **Archetypes** — every warframe sorted by combat archetype, with abilities, portraits, and acquisition info.
- **Star Chart** — full solar system in progression order: all planets, nodes, boss → warframe drops, recommended farms, mission filters, search, and a Show Spoilers toggle.
- **Glossary** — interactive Status Effects (Procs) reference for all 13 damage types and faction vulnerabilities.
- **Riven Evaluator** — 0–10 scoring based on stat tier and roll quality, with built-in OCR for screenshot input (EN + PT).
- **Bilingual** — full Português (BR) and English support.

### Credits & Legal

- **Warframe** and all related assets © Digital Extremes Ltd. This is a fan project, not affiliated with or endorsed by DE. Visit the official site at [warframe.com](https://www.warframe.com).
- Archetype framework inspired by [Vinoncio](https://www.youtube.com/@Vinoncio)'s YouTube content — used with permission.
- Riven evaluation tiers and conventions based on [Morrow Shore's Comprehensive Riven Guide](https://morrowshore.com/guide/rivens/).
- Riven roll mechanics and stat ranges from [Semlar Riven Calculator](https://semlar.com/rivencalc).
- Weapon database cross-reference via [browse.wf](https://browse.wf).
- Glossary book icon from [Lucide](https://lucide.dev/) (MIT license).
- Riven OCR powered by [Tesseract.js](https://github.com/naptha/tesseract.js).
- Wiki data and images sourced from the [Warframe Wiki](https://wiki.warframe.com).

---

## Português

Feito pra ajudar Tennos — novatos ou veteranos — a planejar builds, achar lugares de farm, e entender os sistemas por trás do jogo.

### O que tem dentro

#### Arquétipos
Cada warframe organizado por **arquétipo de combate** — combinações de Dano, Sobrevivência, Suporte, Controle e Furtividade que definem como um frame joga. Descubra qual combina com seu estilo, veja as habilidades, alterne entre portraits Base e Prime, e veja como conseguir.

#### Mapa Estelar
O sistema solar inteiro em **ordem de progressão** — cada planeta, cada nodo, cada drop de boss, e cada recurso farmável.

- Veja de cara quais **warframes cada boss dropa** (ícone + nome no canto de cada card de planeta)
- Clique no card de um planeta pra expandir in-place com a lista completa de nodos, farms recomendados e recursos
- Filtre por tipo de missão (Assassinato, Sobrevivência, Espionagem, Escavação, Defesa Móvel, Disrupção, etc.) ou busque por planeta, nodo, boss ou warframe pelo nome
- Clique em qualquer recurso pra ver pra que serve, onde dropa, e qual o nodo meta de farm
- Um toggle **Mostrar Spoilers** mantém conteúdo desbloqueado por quest escondido por padrão — ideal pra jogadores novos

#### Glossário
Referência interativa pra **Status Effects (Procs)** — escolha qualquer um dos 13 tipos de dano (Físico, Elemental ou Combinações) e veja o que o proc faz, como acumula, e quais facções são vulneráveis ou resistentes. Atualizado pro rework atual de dano por facção.

#### Avaliador de Rivens
Dá uma nota de 0 a 10 pros seus **Rivens** baseado no tier dos stats e qualidade do roll.

- Adicione até 4 stats com valores positivos ou negativos, detecção automática de unidade (`%`, `x`, `m`, `s`)
- Ou simplesmente **solte um print do seu Riven** — o OCR embutido lê os valores e o nome da arma automaticamente (Inglês + Português)
- Receba um veredito se vale **manter, rerollar ou jogar fora**, com um breakdown explicando o que tá puxando a nota pra cima ou pra baixo

### Idiomas
O site inteiro tá disponível em **Português (BR)** e **Inglês** — alterne pela bandeira no canto superior direito.

### Patches

#### 2026-06-19 — Reforma do recuo nos Rivens e filtros de relíquias
- **Recuo avaliado por tipo de arma** — o recuo como negativo de Riven agora é tratado certo: é um bônus inofensivo nas armas onde não atrapalha a mira (beams, arcos, snipers, lançadores, o beam Incarnon da Torid) e um ponto negativo de verdade nas armas full-auto / burst, onde ele realmente importa. Também é lido corretamente como um efeito *negativo* (mais recuo), não um bônus.
- **Pontuação mais justa pela força do roll** — uma combinação god-roll não afunda mais só porque a arma tem disposition alta. A força do roll agora *ajusta* a nota em vez de dominá-la, então o mesmo Riven ótimo pontua parecido entre armas diferentes (corrige uma Torid Incarnon pontuando abaixo de armas que deveria superar).
- **Notas de stats alinhadas à referência da comunidade** — cerca de 17 tiers de stats foram reconferidos com o guia da Morrow Shore (impacto, perfuração, munição, alcance, cadência, dano por facção e mais).
- **Filtros de relíquias** — novos toggles **Unvaulted** e **Sem Forma** afunilam a lista rapidamente, e cada peça agora mostra o valor em Ducados direto nos cards.

#### 2026-06-19 — Relíquias Void, War Prime e Styanax Prime
- **Nova página de Relíquias Void** — navegue por todas as 767 relíquias: busque por nome da relíquia ou por peça Prime, filtre por era (Lith/Meso/Neo/Axi/Requiem), e abra um card detalhado com cada drop, sua raridade, valor em Ducados e chance de drop por nível de refinamento (Intacta → Radiante). Relíquias no Vault explicam como as peças voltam; as Requiem apontam pra Palladino.
- **Locais de drop das relíquias** — cada relíquia lista onde dropa, agrupado por planeta, com um botão "Ver no mapa" que pula direto pro Mapa Estelar (nós de Railjack/Proxima agora linkam certo). Filtre os locais por tipo de missão.
- **War Prime e Afentis Prime** adicionados ao avaliador de Rivens.
- **Styanax Prime** — agora na página de Arquétipos com toggle Base/Prime.
- **Leitura de foto de Riven mais precisa** — o parser de stats foi reconstruído de forma estrutural: dano de facção em % (ex.: "+5.6% Damage to Grineer") e Penetração agora são lidos corretamente, mesmo quando o jogo junta stats numa linha só ou separa o valor do nome.
- **Mais filtros no Mapa Estelar** — Defesa Espelhada e outros tipos de missão que faltavam agora têm chip de filtro.

#### 2026-06-18 — Sirius & Orion, avaliador de Rivens e leitura por foto mais inteligentes
- **Sirius & Orion** — o novo warframe duplo (Update 43) está no ar na página de Arquétipos, classificado como **Estrategista** (Dano + Suporte + Controle de Grupo). Stats marcados como sujeitos a mudanças enquanto a classificação é validada.
- **Notas de arma recalibradas** — os stats ideais de Riven de cada arma foram refeitos a partir dos stats reais: +Dano cru não é mais tratado como stat top (é filler na maioria), e as prioridades de crit/status agora batem com a build de cada arma. Armas de status marcam crit como desperdício.
- **Modo Incarnon** — armas construídas na forma Incarnon (Torid, Braton, Latron, Strun…) ligam o Modo Incarnon automaticamente ao serem selecionadas, avaliando o Riven pela build de meta da forma. Desligue para avaliar a forma base.
- **Força do roll & disposição** — o resultado agora mostra quão forte foi seu roll (normalizado pela disposição da arma) e os pontos de disposição.
- **Leitura por foto melhor** — enviar um print de Riven agora usa o Google Vision, com reconhecimento muito mais preciso (lê até foto de monitor), com o leitor local como reserva. Stats de dano de facção (ex.: "x1,27 contra Infestados") agora são lidos corretamente.
- **Conteúdo do Update 43** — novos augments (Dante, Temple, Koumei, Nokko), o retoque do Nidus (200 cargas de Mutação, mudanças em Virulence/Ravenous) e o Uranus Proxima no Mapa Estelar.

#### 2026-06-17 — Comparador de Rivens, menu mobile e links compartilháveis
- **Compare dois Rivens lado a lado** — o avaliador agora tem duas colunas independentes (Roll A / Roll B). Avalie um roll só ou preencha os dois pra comparar — ideal pra decidir qual roll manter depois de um reroll. Cada coluna tem upload de print próprio, slots de stats e nota de 0 a 10 com breakdown completo.
- **Trava de arma** — o primeiro roll que define uma arma (manual ou via OCR) trava ela pras duas colunas; a trava só é liberada quando as duas colunas são limpas.
- **Header adaptado pra celular** — no celular a navegação vira um menu hambúrguer (☰), com o logo centralizado e idioma/créditos à direita, então as abas não estouram mais.
- **Links compartilháveis** — cada página agora tem URL própria (ex.: `/archetypes/frost`, `/star-chart/mars`); copie a barra de endereço pra compartilhar um warframe, planeta ou aba específica, e o botão voltar do navegador funciona.
- **Notas de atualização nos Créditos** — o modal de Créditos agora tem uma view "Notas de atualização" com o changelog recente.

#### 2026-06-16 — Mapa de farm de warframes, ícones interativos e polimento do Mapa Estelar
- **Agora no Cloudflare Pages** — o site agora está em [tennohelper.pages.dev](https://tennohelper.pages.dev), com carregamento mais rápido pelo CDN global da Cloudflare.
- **Ícones de warframe nos cards de planeta** — cada card agora mostra quais warframes droppam nele; clique no ícone para ir direto ao detalhe do arquétipo.
- **Todos os 64 warframes mapeados** — todo frame farmável agora tem a localização de drop marcada no Mapa Estelar, incluindo Oberon nas proximas de Railjack e Octavia na Lua.
- **Abas do Mapa Estelar sempre visíveis** — Sistema Origin, Railjack e Especial aparecem sempre no topo, independente do toggle de spoilers; clicar em Railjack ou Especial ativa os spoilers automaticamente.
- **Notas de atualização nos Créditos** — o modal de Créditos agora tem um histórico de atualizações que você pode consultar.
- **Ícones de warframe menores** — os badges nos cards de planeta são mais compactos para não cortar quando vários warframes droppam no mesmo planeta.

#### 2026-06-16 — Sistemas Railjack & Special, categorias de Riven e controle de spoiler
- **Mapa Estelar agora tem três abas** — Sistema Origin, Railjack (Empyrean) e Special (Duviri, Höllvania 1999, Refratário Sombrio), cada uma com missões próprias e fundo temático.
- **Mundos abertos no mapa** — Plains of Eidolon, Orb Vallis (com Deepmines) e Cambion Drift agora aparecem como áreas navegáveis dentro de Terra, Vênus e Deimos, com suas atividades (Mundo Aberto, Contratos, Caçada de Eidolon, Assaltos aos Orbs, Cofre de Isolamento) e Deep & Temporal Archimedea.
- **Clique num recurso → vá direto pra onde ele cai** — recursos de mundo aberto e dos sistemas especiais agora linkam pro nodo de farm no mapa.
- **Missões de Archwing sinalizadas** — nodos de Archwing (Caelus, Salacia, Erpo, etc.) agora mostram um ícone de Archwing.
- **Quatro novas categorias de Riven** — o avaliador agora cobre Archgun, Kitgun, Zaw e Companion além de Primária/Secundária/Corpo a corpo.
- **Show Spoilers mais esperto** — com spoilers desligado, as abas Railjack e Special (e seus recursos) ficam escondidas pra uma visão limpa do base game; mundos abertos continuam visíveis.
- **Novos drops de warframe mapeados** — Oraxia (Isleweaver), Temple (Solstice Square), Cyte-09 (Höllvania Central Mall) e Uriel (The Descendia) aparecem nos nodos; frames também farmáveis no Circuito ganham link "Também no Circuito".

#### 2026-06-15 — Recursos, custos de craft e filtros melhorados
- **Catálogo completo de recursos** — mais de 350 recursos listados agora (antes eram ~25), cobrindo todo Open World, Empyrean, Duviri, Höllvania, Dark Refractory e itens de quest da wiki.
- **Tags em cada recurso** — cada um mostra raridade, local e fonte como chips coloridos, então dá pra bater o olho e saber na hora que tipo de item é.
- **Três filtros independentes na grid de recursos** — afunile por raridade, por local (Mapa Estelar, Plains of Eidolon, Orb Vallis, Cambion Drift, Duviri, Höllvania, Refratário Sombrio, Diversos) ou por fonte (Drops de Bounty, Heist, Mineração, Pesca, Necramech, Tesouros Hex, etc.).
- **Multi-seleção de filtros de missão no Mapa Estelar** — escolha vários tipos de missão ao mesmo tempo (ex: Assassinato + Espionagem) em vez de só um. Clicar num chip ativo desliga ele; clicar em "Todos" limpa tudo.
- **Custo de craft completo por warframe** — cada frame agora mostra a lista de compras pra construir ele inteiro (BP Principal + Neuroptics + Chassis + Sistemas somados), com cada recurso clicável pra ir direto pro nodo de farm recomendado.
- **Casos especiais tratados** — Chroma mostra o breakdown completo incluindo as partes de Volt / Ember / Frost / Saryn que ele exige; Equinox mostra Day + Night separadamente e o total agregado com Forma.
- **Link "Ver no Mapa Estelar" inteligente** — clicar no link a partir de um warframe agora aplica automaticamente o filtro de tipo de missão certo, então o nodo de farm relevante já fica em destaque.
- **Planetas de open-world unem recursos automaticamente** — Vênus agora lista todos os itens do Orb Vallis, Terra todos das Plains of Eidolon, Deimos todos do Cambion Drift, em ordem alfabética numa grid de 3 colunas.

#### 2026-06-15 — Lançamento da primeira versão
- **Arquétipos** — cada warframe organizado por arquétipo de combate, com habilidades, portraits e infos de aquisição.
- **Mapa Estelar** — sistema solar completo em ordem de progressão: todos os planetas, nodos, drops de boss → warframe, farms recomendados, filtros de missão, busca, e toggle Mostrar Spoilers.
- **Glossário** — referência interativa de Status Effects (Procs) pros 13 tipos de dano e vulnerabilidades por facção.
- **Avaliador de Rivens** — nota de 0 a 10 baseada em tier de stats e qualidade do roll, com OCR embutido pra leitura de print (EN + PT).
- **Bilíngue** — suporte completo em Português (BR) e Inglês.

### Créditos & Legal

- **Warframe** e todos os assets relacionados são da Digital Extremes Ltd. Este é um projeto de fã, sem afiliação ou endosso oficial da DE. Site oficial: [warframe.com](https://www.warframe.com).
- Sistema de arquétipos inspirado pelo conteúdo do [Vinoncio](https://www.youtube.com/@Vinoncio) no YouTube — usado com permissão.
- Tiers e convenções de avaliação de Rivens baseadas no [Comprehensive Riven Guide do Morrow Shore](https://morrowshore.com/guide/rivens/).
- Mecânicas de roll e ranges de stats de Rivens do [Semlar Riven Calculator](https://semlar.com/rivencalc).
- Cross-reference do banco de dados de armas via [browse.wf](https://browse.wf).
- Ícone do livro do Glossário por [Lucide](https://lucide.dev/) (licença MIT).
- OCR dos Rivens via [Tesseract.js](https://github.com/naptha/tesseract.js).
- Dados e imagens vindos da [Warframe Wiki](https://wiki.warframe.com).
