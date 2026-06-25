function renderMissionTypesSection() {
  const el = document.getElementById('mission-types-gloss');
  if (!el) return;
  const loc = state.locale === 'pt-BR' ? 'pt-BR' : 'en';
  const L = o => (o && (o[loc] || o.en)) || '';
  const esc = relicEsc;
  const showSpoilers = !!(state.starChart && state.starChart.showSpoilers);

  const renderGroup = g => {
    const cards = g.items.map(it => {
      const mt = MISSION_TYPES[it.key] || { name: { en: it.key }, color: '#5ec0e8' };
      const c = mt.color || '#5ec0e8';
      return `<div class="mt-card"><span class="mt-dot" style="background:${c};box-shadow:0 0 8px ${c}"></span>`
        + `<div class="mt-body"><span class="mt-name">${esc(L(mt.name))}</span>`
        + `<span class="mt-desc">${esc(L(it.d))}</span></div></div>`;
    }).join('');
    return `<h4 class="sc-h">${esc(L(g.label))}</h4><div class="mt-grid">${cards}</div>`;
  };

  const open = MT_GROUPS.filter(g => !g.spoiler);
  const locked = MT_GROUPS.filter(g => g.spoiler);
  const hiddenCount = locked.reduce((n, g) => n + g.items.length, 0);

  const T = {
    spoiler: { en: 'Late-game & endgame modes', 'pt-BR': 'Modos de fim de jogo e história' },
    hide:    { en: 'Hide spoilers', 'pt-BR': 'Ocultar spoilers' },
  };

  let spoilerBlock = '';
  if (locked.length) {
    if (showSpoilers) {
      spoilerBlock = `<div class="sc-h-row"><h4 class="sc-h">${esc(L(T.spoiler))}</h4>`
        + `<button type="button" class="sc-spoiler-toggle" data-mt-hide>${esc(L(T.hide))}</button></div>`
        + locked.map(renderGroup).join('');
    } else {
      const veilTxt = L({ en: `${hiddenCount} late-game / story modes hidden`, 'pt-BR': `${hiddenCount} modos de fim de jogo / história ocultos` });
      const veilCta = L({ en: 'Reveal spoilers', 'pt-BR': 'Revelar spoilers' });
      spoilerBlock = `<h4 class="sc-h">${esc(L(T.spoiler))}</h4>`
        + `<button type="button" class="sc-special-card sc-special-veil" data-mt-reveal style="aspect-ratio:auto">`
        + `<span class="sc-veil-ico" aria-hidden="true">🔒</span>`
        + `<span class="sc-special-name">${esc(veilTxt)}</span>`
        + `<span class="sc-special-note">${esc(veilCta)} →</span></button>`;
    }
  }

  el.innerHTML = open.map(renderGroup).join('') + spoilerBlock
    + `<p class="mt-note">${esc(L(MT_NOTE))}</p>`;

  if (!_mtGlossBound) {
    el.addEventListener('click', e => {
      const reveal = e.target.closest('[data-mt-reveal]');
      const hide = e.target.closest('[data-mt-hide]');
      if (reveal || hide) {
        state.starChart.showSpoilers = !!reveal;
        try { localStorage.setItem('starChart.showSpoilers', reveal ? 'true' : 'false'); } catch (err) {}
        renderMissionTypesSection();
      }
    });
    _mtGlossBound = true;
  }
}

// ── Modding Basics glossary section ──────────────────────────────────────────

// legenda da captura anotada da tela de mods (cores batem com os retângulos da imagem)
const MOD_UI_LEGEND = [
  { c: '#e0473a', t: { en: 'Capacity', 'pt-BR': 'Capacidade' },
    d: { en: 'Your mod budget. 60/60 means a maxed item with a Reactor/Catalyst installed.', 'pt-BR': 'Seu limite de mods. 60/60 é um item no máximo com Reator/Catalisador instalado.' } },
  { c: '#5fc26a', t: { en: 'Status', 'pt-BR': 'Status' },
    d: { en: 'Live stats (Health, Shield, Armor…) plus the four ability stats — Strength, Duration, Range, Efficiency — that ability mods change.', 'pt-BR': 'Stats ao vivo (Vida, Escudo, Armadura…) e as quatro stats de habilidade — Força, Duração, Alcance, Eficiência — que os mods de habilidade alteram.' } },
  { c: '#3fd0e0', t: { en: 'Aura slot', 'pt-BR': 'Slot de Aura' },
    d: { en: 'Holds an Aura mod — adds capacity instead of using it.', 'pt-BR': 'Recebe um mod de Aura — adiciona capacidade em vez de gastar.' } },
  { c: '#e85ad0', t: { en: 'Exilus slot', 'pt-BR': 'Slot Exilus' },
    d: { en: 'Utility / mobility mods (needs an Exilus Adapter).', 'pt-BR': 'Mods de utilidade / mobilidade (precisa de um Exilus Adapter).' } },
  { c: '#e0c33a', t: { en: 'Mod slots', 'pt-BR': 'Slots de mod' },
    d: { en: 'The eight main slots for your build.', 'pt-BR': 'Os oito slots principais do seu build.' } },
  { c: '#e0822e', t: { en: 'Polarity', 'pt-BR': 'Polaridade' },
    d: { en: 'The symbol on a slot is its polarity — a mod with the same polarity costs half (see below).', 'pt-BR': 'O símbolo no slot é a polaridade dele — um mod com a mesma polaridade custa metade (veja abaixo).' } },
];

const MOD_CAP = [
  { k: '30 → 60', t: { en: 'Capacity', 'pt-BR': 'Capacidade' },
    d: { en: 'Equals the item rank (max 30); a Reactor/Catalyst (“potato”) doubles it to 60.', 'pt-BR': 'Igual ao rank do item (máx 30); um Reator/Catalisador (“batata”) dobra pra 60.' } },
  { k: 'Endo', t: { en: 'Ranking mods', 'pt-BR': 'Subir mods' },
    d: { en: 'Upgrading a mod raises its effect and its drain — paid with Endo + Credits.', 'pt-BR': 'Subir o rank de um mod aumenta o efeito e o custo — pago com Endo + Créditos.' } },
  { k: 'Forma', t: { en: 'Forma', 'pt-BR': 'Forma' },
    d: { en: 'Changes a slot’s polarity (resetting the item to rank 0) so you can fit heavier builds — then re-level it.', 'pt-BR': 'Muda a polaridade de um slot (zerando o item pro rank 0) pra caber builds mais pesadas — depois é só upar de novo.' } },
];

// demonstração visual: o mesmo mod (Transient Fortitude, base 16) em 3 slots
const MOD_POL_DEMO = [
  { img: 'mod-normal-slot.png', cls: '',
    cap: { en: 'In a slot with no polarity, the mod’s cost is unchanged (16).', 'pt-BR': 'Em um slot sem polaridade, o custo do mod fica inalterado (16).' } },
  { img: 'mod-right-polarity.png', cls: 'is-match',
    cap: { en: 'When the slot polarity matches the mod, the cost is halved (16 → 8).', 'pt-BR': 'Quando a polaridade do slot é igual à do mod, o custo cai pela metade (16 → 8).' } },
  { img: 'mod-wrong-polarity.png', cls: 'is-miss',
    cap: { en: 'When the polarity is different, the cost rises about 25% (16 → 20).', 'pt-BR': 'Quando a polaridade é diferente, o custo sobe cerca de 25% (16 → 20).' } },
];

const MOD_TYPES = [
  { t: { en: 'Augment mods', 'pt-BR': 'Mods de Augment' },
    d: { en: 'Tweak one specific Warframe ability — bought from syndicates.', 'pt-BR': 'Modificam uma habilidade específica do Warframe — comprados nos sindicatos.' } },
  { t: { en: 'Exilus mods', 'pt-BR': 'Mods Exilus' },
    d: { en: 'Utility / mobility mods (parkour, ammo, sprint…) that fit the Exilus slot.', 'pt-BR': 'Mods de utilidade / mobilidade (parkour, munição, corrida…) que entram no slot Exilus.' } },
  { t: { en: 'Set mods', 'pt-BR': 'Mods de conjunto (set)' },
    d: { en: 'Give a bonus that grows with how many pieces of the set you equip across your gear.', 'pt-BR': 'Dão um bônus que cresce conforme quantas peças do conjunto você equipa entre os equipamentos.' } },
  { t: { en: 'Galvanized & Primed', 'pt-BR': 'Galvanized e Primed' },
    d: { en: 'Upgraded versions of core mods — Galvanized (Arbitration shop, on-kill bonus) and Primed (Void Trader, higher max rank).', 'pt-BR': 'Versões melhoradas dos mods básicos — Galvanized (loja de Arbitragens, bônus ao abater) e Primed (Void Trader, rank máximo maior).' } },
  { t: { en: 'Archon mods', 'pt-BR': 'Mods Archon' },
    d: { en: 'Upgraded core ability mods (Archon Intensify, Vitality…) with an extra effect — bought from Chipper in Kahl\'s Garrison with Stock.', 'pt-BR': 'Versões melhoradas de mods de habilidade (Archon Intensify, Vitality…) com um efeito extra — comprados no Chipper, em Kahl\'s Garrison, com Stock (moeda das missões do Kahl).' } },
  { t: { en: 'Riven mods', 'pt-BR': 'Mods Riven' },
    d: { en: 'Randomized mods unique to a single weapon — see the Rivens section.', 'pt-BR': 'Mods aleatórios exclusivos de uma arma — veja a seção Rivens.' } },
];

const MOD_TIPS = [
  { en: 'Matching the polarity on an Aura or Stance slot doubles the capacity it adds.', 'pt-BR': 'Casar a polaridade num slot de Aura ou Stance dobra a capacidade que ele adiciona.' },
  { en: 'Core early mods: Vitality and Redirection (survival); Serration / Hornet Strike / Pressure Point (damage); Intensify, Continuity, Streamline (abilities).', 'pt-BR': 'Mods essenciais no começo: Vitality e Redirection (sobrevivência); Serration / Hornet Strike / Pressure Point (dano); Intensify, Continuity, Streamline (habilidades).' },
  { en: 'Save Reactors / Catalysts (potatoes) for gear you will keep — doubling capacity is a huge jump.', 'pt-BR': 'Guarde Reatores / Catalisadores (batatas) pros itens que você vai manter — dobrar a capacidade é um salto enorme.' },
  { en: 'Do not max every mod early — Endo cost grows exponentially per rank. On mods that go to Rank 10, stopping around Rank 6–7 at first is plenty.', 'pt-BR': 'Não maximize todo mod cedo — o custo em Endo cresce exponencialmente a cada rank. Em mods que vão até o Rank 10, parar por volta do Rank 6/7 no começo já resolve.' },
];

