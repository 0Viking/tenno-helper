function renderFormaSection() {
  const el = document.getElementById('forma-gloss');
  if (!el) return;
  const loc = state.locale === 'pt-BR' ? 'pt-BR' : 'en';
  const L = o => (o && (o[loc] || o.en)) || '';
  const esc = relicEsc;

  const card = it => {
    const badge = it.k ? ` <span class="forma-badge">${esc(it.k)}</span>` : '';
    return `<div class="forma-card"><img class="forma-icon" src="https://wiki.warframe.com/images/${it.img}" alt="" loading="lazy" onerror="this.style.display='none'">`
      + `<div class="forma-card-body"><span class="forma-card-name">${esc(L(it.t))}${badge}</span>`
      + `<span class="forma-card-desc">${L(it.d)}</span></div></div>`;  // desc confiável: permite <b> inline
  };
  const term = arr => arr.map(p =>
    `<div class="sc-term"><dt>${esc(L(p.t))}</dt><dd>${esc(L(p.d))}</dd></div>`).join('');
  const tips = FORMA_TIPS.map(t => `<li>${esc(L(t))}</li>`).join('');
  const pols = POL_TYPES.map(p =>
    `<div class="pol-item"><img class="pol-icon${p.light ? ' is-light' : ''}" src="https://wiki.warframe.com/images/${p.img}" alt="" loading="lazy" onerror="this.style.display='none'">`
    + `<div class="pol-item-body"><span class="pol-name">${esc(L(p.t))}</span>`
    + `<span class="pol-desc">${esc(L(p.d))}</span></div></div>`).join('');

  const T = {
    items: { en: 'Orokin catalysts (“potatoes”)', 'pt-BR': 'Catalisadores Orokin (“batatas”)' },
    forma: { en: 'Forma', 'pt-BR': 'Forma' },
    pol:   { en: 'Polarity types', 'pt-BR': 'Tipos de polaridade' },
    polSub:{ en: 'Each slot symbol is its polarity. It does NOT restrict which mods fit — matching just halves the cost (and mismatching adds ~25%). The themes below are only loose/historical.', 'pt-BR': 'O símbolo de cada slot é a polaridade dele. Ela NÃO limita quais mods entram — combinar só reduz o custo pela metade (e não combinar soma ~25%). Os "temas" abaixo são só históricos.' },
    fix:   { en: 'Put a polarity on the wrong slot? It’s not wasted — once an item is polarized, the Swap Polarity option moves existing polarities between slots for free (the Stance slot is the exception), or an extra Forma can change one.', 'pt-BR': 'Colocou uma polaridade no slot errado? Não foi desperdício — depois que o item já tem ao menos uma polarização, a opção Swap Polarity (Trocar Polaridade) move as polaridades entre os slots de graça (o slot de Stance é a exceção), ou uma Forma extra troca uma.' },
    types: { en: 'Forma variants', 'pt-BR': 'Tipos de Forma' },
    tips:  { en: 'Good to know', 'pt-BR': 'Bom saber' },
  };

  el.innerHTML =
    `<h4 class="sc-h">${esc(L(T.items))}</h4>`
    + `<div class="forma-grid">${FORMA_ITEMS.map(card).join('')}</div>`
    + `<h4 class="sc-h">${esc(L(T.forma))}</h4>`
    + `<dl class="sc-terms">${term(FORMA_HOW)}</dl>`
    + `<h4 class="sc-h">${esc(L(T.pol))}</h4>`
    + `<p class="sc-sub">${esc(L(T.polSub))}</p>`
    + `<div class="pol-grid">${pols}</div>`
    + `<div class="gloss-callout"><span class="gloss-callout-ico" aria-hidden="true">🔧</span><span class="gloss-callout-text">${esc(L(T.fix))}</span></div>`
    + `<h4 class="sc-h">${esc(L(T.types))}</h4>`
    + `<div class="forma-grid">${FORMA_TYPES.map(card).join('')}</div>`
    + `<h4 class="sc-h">${esc(L(T.tips))}</h4>`
    + `<ul class="sc-tips">${tips}</ul>`;
}

// ── Rivens glossary section ──────────────────────────────────────────────────

// ciclo de vida do Riven (imagens do usuário): oculto → desafio → revelado
const RIVEN_FLOW = [
  { img: 'riven-veiled.png', t: { en: '1. Veiled', 'pt-BR': '1. Oculto' },
    d: { en: 'A new Riven — stats hidden.', 'pt-BR': 'Um Riven novo — stats ocultos.' } },
  { img: 'riven-challenge.png', t: { en: '2. Challenge', 'pt-BR': '2. Desafio' },
    d: { en: 'Equip it and complete its challenge.', 'pt-BR': 'Equipe e complete o desafio dele.' } },
  { img: 'riven-unveiled.png', t: { en: '3. Unveiled', 'pt-BR': '3. Revelado' },
    d: { en: 'Stats, polarity and MR revealed.', 'pt-BR': 'Stats, polaridade e MR revelados.' } },
];

const RIVEN_HOW = [
  { t: { en: 'Veiled → unveiled', 'pt-BR': 'Oculto → revelado' },
    d: { en: 'A veiled Riven is bound to a weapon category (Rifle, Pistol, Shotgun, Melee…), not a specific weapon — so you can equip it on ANY weapon of that category. Complete its challenge with it equipped, and on unveil it locks to a RANDOM weapon of that category (and its variants), with stat values scaled by that weapon’s disposition. You can only have one Riven equipped at a time.', 'pt-BR': 'Um Riven oculto está preso a uma categoria de arma (Rifle, Pistola, Shotgun, Melee…), não a uma arma específica — então você pode equipá-lo em QUALQUER arma daquela categoria. Complete o desafio com ele equipado e, ao revelar, ele trava numa arma ALEATÓRIA da categoria (e suas variantes), com os valores dos stats escalados pela disposition dessa arma. Você só pode ter um Riven equipado por vez.' } },
  { t: { en: 'Stats & curse', 'pt-BR': 'Stats e maldição' },
    d: { en: 'It carries 2–3 positive bonuses and sometimes 1 negative (a curse). A curse on a stat you don’t care about (−Zoom, +Recoil…) is great — it actually makes the positives stronger.', 'pt-BR': 'Tem 2–3 bônus positivos e, às vezes, 1 negativo (maldição). Uma maldição num stat que você não usa (−Zoom, +Recuo…) é ótima — ela ainda deixa os positivos mais fortes.' } },
];
const RIVEN_DEEP = [
  { html: true, t: { en: 'Re-rolling (Kuva)', 'pt-BR': 'Rerolar (Kuva)' },
    d: { en: 'Don’t like the roll? Re-roll it with <img class="gloss-ico" src="https://wiki.warframe.com/images/Kuva.png?0db18" alt="" onerror="this.style.display=\'none\'"><button type="button" class="gloss-link" onclick="goToGlossarySection(\'kuva\')">Kuva</button> — the cost climbs each time, from 900 up to a 3,500 Kuva cap. Every roll re-randomizes everything.', 'pt-BR': 'Não curtiu os stats? Rerole com <img class="gloss-ico" src="https://wiki.warframe.com/images/Kuva.png?0db18" alt="" onerror="this.style.display=\'none\'"><button type="button" class="gloss-link" onclick="goToGlossarySection(\'kuva\')">Kuva</button> — o custo sobe a cada vez, de 900 até travar em 3.500 Kuva. Cada roll re-sorteia tudo.' } },
  { html: true, t: { en: 'Where they come from', 'pt-BR': 'De onde vêm' },
    d: { en: '<button type="button" class="gloss-link" onclick="goToGlossarySection(\'sorties\')">Sorties</button>, the <button type="button" class="gloss-link" onclick="goToGlossarySection(\'steel-path\')">Steel Path</button>, <button type="button" class="gloss-link" onclick="goToGlossarySection(\'archon-hunts\')">Archon Hunts</button>, Acrithis (15 <img class="gloss-ico" src="https://wiki.warframe.com/images/PathosClamp.png?888cf" alt="" onerror="this.style.display=\'none\'">Pathos Clamps), <button type="button" class="gloss-link" onclick="goToGlossarySection(\'nightwave\')">Nightwave</button> — plus one free from The War Within. <img class="gloss-ico" src="https://wiki.warframe.com/images/RivenSliver.png?55597" alt="" onerror="this.style.display=\'none\'">Riven Slivers: collect 10 and Palladino (Iron Wake) trades them for a veiled Riven, once a week.', 'pt-BR': '<button type="button" class="gloss-link" onclick="goToGlossarySection(\'sorties\')">Sortie</button>, <button type="button" class="gloss-link" onclick="goToGlossarySection(\'steel-path\')">Percurso de Aço</button>, <button type="button" class="gloss-link" onclick="goToGlossarySection(\'archon-hunts\')">Archon Hunt</button>, Acrithis (15 <img class="gloss-ico" src="https://wiki.warframe.com/images/PathosClamp.png?888cf" alt="" onerror="this.style.display=\'none\'">Pathos Clamps), <button type="button" class="gloss-link" onclick="goToGlossarySection(\'nightwave\')">Nightwave</button> — e 1 grátis na quest The War Within. <img class="gloss-ico" src="https://wiki.warframe.com/images/RivenSliver.png?55597" alt="" onerror="this.style.display=\'none\'">Riven Slivers: junte 10 e a Palladino (Iron Wake) troca por um Riven oculto, 1×/semana.' } },
];
const RIVEN_TIPS = [
  { en: 'Crit weapons want Critical Chance + Critical Damage + Multishot; status weapons want Status Chance + Multishot.', 'pt-BR': 'Armas de crit querem Chance de Crítico + Dano de Crítico + Multishot; armas de status querem Chance de Status + Multishot.' },
];

// Disposition dot tiers (●1–5). Lower popularity = more dots = stronger stats.
const RIVEN_DISP = [
  { n: 1, t: { en: 'Faint — meta / very used weapons', 'pt-BR': 'Faint — armas meta / muito usadas' } },
  { n: 2, t: { en: 'Below average', 'pt-BR': 'Abaixo da média' } },
  { n: 3, t: { en: 'Average', 'pt-BR': 'Média' } },
  { n: 4, t: { en: 'Above average', 'pt-BR': 'Acima da média' } },
  { n: 5, t: { en: 'Strong — rarely-used weapons', 'pt-BR': 'Strong — armas pouco usadas' } },
];

// Unveiling challenges (active only — retired ones excluded). place = star-chart link.
const PLAINS = { slug: 'earth', label: { en: 'Plains of Eidolon (Earth)', 'pt-BR': 'Planícies de Eidolon (Terra)' } };
const RIVEN_CHALLENGES = [
  { c: { en: 'Kill enemies with Finishers', 'pt-BR': 'Matar inimigos com Finishers' }, frames: ['ash', 'excalibur', 'equinox', 'ivara', 'inaros'],
    tip: { en: 'Open enemies to finishers — blind them (Excalibur), sleep them (Equinox/Ivara) or use Ash’s Teleport, then melee the finisher prompt. (Ash’s Teleport opens a finisher; his Blade Storm does not count.)', 'pt-BR': 'Deixe os inimigos abertos a finisher — cegue (Excalibur), durma (Equinox/Ivara) ou use o Teleport do Ash, e aperte o melee no prompt de finisher. (O Teleport do Ash abre finisher; o Blade Storm dele não conta.)' } },
  { c: { en: 'Kill enemies while Sliding', 'pt-BR': 'Matar inimigos deslizando' }, frames: ['gauss', 'volt'],
    tip: { en: 'Hold crouch while sprinting to slide, and kill during the slide. A fast frame and a high-fire-rate weapon let you chain slides through a crowd.', 'pt-BR': 'Segure agachar enquanto corre pra deslizar, e mate durante o slide. Um frame rápido + arma de cadência alta encadeiam slides numa horda.' } },
  { c: { en: 'Kill enemies with Headshots', 'pt-BR': 'Matar com Headshots' }, frames: ['banshee', 'harrow'],
    tip: { en: 'Use a precise weapon and aim for the head. Banshee’s Sonar marks weak spots; Harrow’s Covenant boosts headshot crit.', 'pt-BR': 'Use uma arma precisa e mire na cabeça. O Sonar da Banshee marca pontos fracos; o Covenant do Harrow aumenta o crit no headshot.' } },
  { c: { en: 'Headshot unalerted Tusk Ballistas', 'pt-BR': 'Headshot em Tusk Ballistas desavisadas' }, frames: ['ivara', 'loki'], place: PLAINS,
    tip: { en: 'Tusk Ballistas are the Grineer snipers up in the watchtowers around Plains camps. Stay invisible and headshot them before they spot you — they must be unalerted.', 'pt-BR': 'As Tusk Ballistas são as snipers Grineer nas torres dos acampamentos das Planícies. Fique invisível e atire na cabeça antes de ser visto — precisam estar desavisadas.' } },
  { c: { en: 'Headshots from 75m+ away', 'pt-BR': 'Headshots a 75m+ de distância' }, frames: ['banshee'], place: PLAINS,
    tip: { en: 'Use a sniper rifle on a wide-open tile (the Plains is ideal). Banshee’s Sonar helps land the distant headshots.', 'pt-BR': 'Use um rifle sniper num cenário aberto (as Planícies são ideais). O Sonar da Banshee ajuda nos headshots distantes.' } },
  { c: { en: 'Kill enemies on a Dropship', 'pt-BR': 'Matar inimigos numa Dropship' }, frames: [], place: PLAINS,
    tip: { en: 'In the Plains, shoot the Grineer still riding a Dropship before they deploy. Hit them while they’re hanging off the sides.', 'pt-BR': 'Nas Planícies, atire nos Grineer que ainda estão na Dropship antes de desembarcarem — pegue-os pendurados nas laterais.' } },
  { c: { en: 'Catch fish without missing a throw', 'pt-BR': 'Pescar sem errar um arremesso' }, frames: [], place: PLAINS,
    tip: { en: 'In any open world: equip a fishing spear, aim carefully (bait/dye help fish appear), and don’t throw at empty water — a miss resets it.', 'pt-BR': 'Em qualquer mundo aberto: equipe um arpão, mire com calma (iscas/tintas ajudam os peixes a aparecer) e não jogue na água vazia — errar zera o progresso.' } },
  { c: { en: 'Catch 1 fish, mine 1 deposit, kill 1 enemy in 30s', 'pt-BR': 'Pescar 1, minerar 1 e matar 1 em 30s' }, frames: [], place: PLAINS,
    tip: { en: 'Set up next to a fishing spot that has a mining vein and an enemy nearby, then do all three back-to-back within the timer.', 'pt-BR': 'Se posicione perto de um ponto de pesca que tenha uma veia de minério e um inimigo por perto, e faça os três em sequência dentro do tempo.' } },
  { c: { en: 'Defense (lvl 30+) — objective takes no damage', 'pt-BR': 'Defesa (nv 30+) — alvo sem dano' }, frames: ['frost', 'limbo', 'gara'],
    tip: { en: 'Only 3 waves — wall off the objective with Frost’s Snow Globe, Limbo’s Cataclysm or Gara’s Mass Vitrify so it takes no damage.', 'pt-BR': 'Só 3 ondas — cerque o alvo com Snow Globe do Frost, Cataclysm do Limbo ou Mass Vitrify da Gara pra ele não tomar dano.' } },
  { c: { en: 'Exterminate (lvl 30+) undetected', 'pt-BR': 'Exterminar (nv 30+) sem ser detectado' }, frames: ['loki', 'ivara', 'ash', 'octavia'],
    tip: { en: 'Bring a stealth frame and kill before alarms trip. Loki/Ash invisibility or Ivara’s Prowl let you clear it unseen.', 'pt-BR': 'Leve um frame furtivo e mate antes do alarme. Invisibilidade de Loki/Ash ou o Prowl da Ivara limpam sem ser visto.' } },
  { c: { en: 'Solo Interception (lvl 30+) with a Hobbled Dragon Key', 'pt-BR': 'Interceptação solo (nv 30+) com Hobbled Dragon Key' }, frames: ['vauban', 'khora', 'nyx'],
    tip: { en: 'Only 1 round. The Hobbled key just slows your sprint, so pick a frame that holds points without running — Vauban, Khora or Nyx lock enemies down.', 'pt-BR': 'Só 1 rodada. A Hobbled key só te deixa lento, então use um frame que segura pontos parado — Vauban, Khora ou Nyx travam os inimigos.' } },
  { c: { en: 'Survival (lvl 30+) without killing anyone', 'pt-BR': 'Sobrevivência (nv 30+) sem matar ninguém' }, frames: ['limbo', 'loki', 'nyx', 'ivara'],
    tip: { en: 'Just 5 minutes, and you can’t deal the killing blow — survive on life-support capsules and crowd control. Limbo’s rift (Stasis) or invisibility keeps you safe without kills.', 'pt-BR': 'Só 5 minutos, e você não pode dar o golpe final — sobreviva com cápsulas de suporte de vida e controle de grupo. A fenda do Limbo (Stasis) ou invisibilidade te mantêm vivo sem matar.' } },
  { c: { en: 'Destroy Dargyns with a bow', 'pt-BR': 'Destruir Dargyns com um arco' }, frames: [], place: PLAINS,
    tip: { en: 'Dargyns are the flying Grineer skiffs in the Plains. Equip a bow and shoot them (or their pilots) out of the sky.', 'pt-BR': 'Dargyns são as naves Grineer voadoras das Planícies. Equipe um arco e derrube-as (ou os pilotos).' } },
  { c: { en: 'Destroy Vruush Turrets in Archwing', 'pt-BR': 'Destruir Torres Vruush em Archwing' }, frames: [],
    tip: { en: 'Enter Archwing (the Plains has free Archwing, or run an Archwing mission) and destroy the Vruush anti-air turrets.', 'pt-BR': 'Entre em Archwing (as Planícies têm Archwing livre, ou rode uma missão de Archwing) e destrua as torres antiaéreas Vruush.' } },
  { c: { en: 'Find all Caches (1–4)', 'pt-BR': 'Achar todos os Caches (1–4)' }, frames: [],
    tip: { en: 'Run a Sabotage (or cache) mission and search the tileset for the hidden lockers — a Loot/Animal radar mod and an Loot frame (Nekros/Khora) help spot them.', 'pt-BR': 'Rode uma missão de Sabotagem (ou de caches) e vasculhe o cenário pelos armários escondidos — mods de radar e um frame de loot (Nekros/Khora) ajudam a achar.' } },
  { c: { en: 'Find Syndicate Medallions (8–12)', 'pt-BR': 'Achar Medalhões de Sindicato (8–12)' }, frames: [],
    tip: { en: 'Run a Syndicate alert and comb the tiles for hidden medallions (they ping on the minimap up close). A medallion-location guide saves time.', 'pt-BR': 'Rode um alerta de Sindicato e vasculhe os medalhões escondidos (eles pingam no mapa de perto). Um guia de localização economiza tempo.' } },
  { c: { en: '3 headshot kills in one aim-glide', 'pt-BR': '3 headshots num único aim-glide' }, frames: ['zephyr'],
    tip: { en: 'Jump and hold aim to slow-fall (aim glide), then headshot 3 enemies before you land. Zephyr floats longest; pick grouped, low-level enemies.', 'pt-BR': 'Pule e segure mirar pra planar (aim glide), e dê 3 headshots antes de cair. A Zephyr flutua mais; pegue inimigos agrupados e fracos.' } },
  { c: { en: 'Kills in a row while wall dashing/clinging (no floor)', 'pt-BR': 'Abates seguidos em parede (sem tocar o chão)' }, frames: ['zephyr', 'titania'],
    tip: { en: 'Stay off the ground: wall-latch (aim while touching a wall) and wall-dash between kills. Titania’s Razorwing or Zephyr make it easy.', 'pt-BR': 'Fique fora do chão: gruda na parede (mire encostado nela) e dê wall-dash entre os abates. Razorwing da Titania ou a Zephyr facilitam.' } },
  { c: { en: 'Get the killing blow on Sentients', 'pt-BR': 'Dar o golpe final em Sentientes' }, frames: [], place: { slug: 'lua', label: { en: 'Lua', 'pt-BR': 'Lua' } },
    tip: { en: 'Sentients spawn on Lua, Jupiter, Murex/Veil Proxima and Orphix (and the Plains at night). They adapt to damage — switch damage types to keep hurting them, but land the killing blow with your Warframe/weapon (Operator, Sentinel and Necramech hits don’t count).', 'pt-BR': 'Sentientes aparecem em Lua, Júpiter, Murex/Veil Proxima e Orphix (e nas Planícies à noite). Eles se adaptam ao dano — troque o tipo de dano pra continuar machucando, mas dê o golpe final com seu Warframe/arma (Operador, Sentinela e Necramech não contam).' } },
  { c: { en: 'Kill many enemies (often with a modifier)', 'pt-BR': 'Matar muitos inimigos (às vezes com modificador)' }, frames: ['saryn', 'mesa', 'equinox', 'gara'],
    tip: { en: 'Pick a high-density mission (Steel Path Survival/Exterminate or Sanctuary Onslaught) and a room-clearing frame. Watch for modifiers (no shields, time limit, a Dragon Key…).', 'pt-BR': 'Escolha uma missão de alta densidade (Sobrevivência/Extermínio do Percurso de Aço ou Sanctuary Onslaught) e um frame que limpa sala. Cuidado com modificadores (sem escudo, tempo, Dragon Key…).' } },
  { c: { en: 'Consecutive headshots in Archwing (Plains)', 'pt-BR': 'Headshots seguidos em Archwing (Planícies)' }, frames: [], place: PLAINS,
    tip: { en: 'Summon your Archwing in the Plains and headshot enemies in a row — aim for grouped Grineer near their camps.', 'pt-BR': 'Invoque o Archwing nas Planícies e dê headshots seguidos — mire em Grineer agrupados perto dos acampamentos.' } },
  { c: { en: 'Sustain a 6× melee combo for 30s', 'pt-BR': 'Manter combo 6× de melee por 30s' }, frames: [],
    tip: { en: 'Build the combo to 6× — that’s 100 hits (every 20 hits is another tier) — then keep hitting a crowd or a tanky enemy. Naramon’s Power Spike stops the combo decaying, and the Xoris holds it indefinitely.', 'pt-BR': 'Suba o combo até 6× — são 100 acertos (a cada 20 sobe um nível) — e siga batendo numa horda ou num inimigo tanque. O Power Spike do Naramon impede o combo de cair, e o Xoris segura ele pra sempre.' } },
  { c: { en: 'Synthesize a Simaris target (no traps/abilities, Hobbled Key)', 'pt-BR': 'Sintetizar alvo do Simaris (sem armadilhas/habilidades, Hobbled Key)' }, frames: [],
    tip: { en: 'Take a Synthesis task from Cephalon Simaris and scan the target’s glowing points — without Kinetic Siphon Traps or any Warframe ability. The Hobbled key only slows you.', 'pt-BR': 'Pegue uma tarefa de Síntese com o Cephalon Simaris e escaneie os pontos brilhantes do alvo — sem Kinetic Siphon Traps nem habilidade de Warframe. A Hobbled key só te deixa lento.' } },
];

// ── Riven challenge modal ────────────────────────────────────────────────────
function openRivenChallenge(i) {
  const ch = RIVEN_CHALLENGES[i];
  if (!ch) return;
  const modal = document.getElementById('riven-chal-modal');
  if (!modal) return;
  const loc = state.locale === 'pt-BR' ? 'pt-BR' : 'en';
  const L = o => (o && (o[loc] || o.en)) || '';
  const esc = relicEsc;
  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

  document.getElementById('riven-chal-title').textContent = L(ch.c);
  document.getElementById('riven-chal-tip').textContent = L(ch.tip);

  const fr = document.getElementById('riven-chal-frames');
  if (ch.frames && ch.frames.length) {
    fr.innerHTML = `<span class="riven-chal-label">${esc(L({ en: 'Suggested Warframes', 'pt-BR': 'Warframes sugeridos' }))}</span>`
      + `<div class="riven-chal-frame-row">${ch.frames.map(s =>
        `<button type="button" class="riven-frame" onclick="goToArchetype('${s}'); closeRivenChal();">`
        + `<img src="assets/icons/base/${s}.png" alt="" onerror="this.style.display='none'"><span>${esc(cap(s))}</span></button>`).join('')}</div>`;
    fr.classList.remove('hidden');
  } else { fr.innerHTML = ''; fr.classList.add('hidden'); }

  const pl = document.getElementById('riven-chal-place');
  if (ch.place) {
    pl.innerHTML = `<button type="button" class="riven-place" onclick="goToStarChart('${ch.place.slug}'); closeRivenChal();">📍 ${esc(L(ch.place.label))}</button>`;
    pl.classList.remove('hidden');
  } else { pl.innerHTML = ''; pl.classList.add('hidden'); }

  modal.classList.remove('hidden');
}
function closeRivenChal() {
  document.getElementById('riven-chal-modal')?.classList.add('hidden');
}

