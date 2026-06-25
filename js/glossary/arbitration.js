function renderArbitrationSection() {
  const el = document.getElementById('arb-gloss');
  if (!el) return;
  const loc = state.locale === 'pt-BR' ? 'pt-BR' : 'en';
  const L = o => (o && (o[loc] || o.en)) || '';
  const esc = relicEsc;

  const rules = ARB_RULES.map(r =>
    `<div class="sc-jstep"><span class="sc-jstep-t">${esc(L(r.t))}</span><span class="sc-jstep-d">${esc(L(r.d))}</span></div>`
  ).join('');

  const details = ARB_DETAILS.map(p =>
    `<div class="sc-term"><dt>${esc(L(p.t))}</dt><dd>${esc(L(p.d))}</dd></div>`
  ).join('');

  const tips = ARB_TIPS.map(t => `<li>${esc(L(t))}</li>`).join('');

  const T = {
    rules: { en: 'Two rules that define it', 'pt-BR': 'Duas regras que definem o modo' },
    how:   { en: 'How it works', 'pt-BR': 'Como funciona' },
    tips:  { en: 'Good to know', 'pt-BR': 'Bom saber' },
  };

  el.innerHTML =
    `<h4 class="sc-h">${esc(L(T.rules))}</h4>`
    + `<div class="sc-jsteps sc-jsteps-2">${rules}</div>`
    + `<h4 class="sc-h">${esc(L(T.how))}</h4>`
    + `<dl class="sc-terms">${details}</dl>`
    + `<h4 class="sc-h">${esc(L(T.tips))}</h4>`
    + `<ul class="sc-tips">${tips}</ul>`;
}

// ── Archon Hunt glossary section ─────────────────────────────────────────────

// Os 3 Archons rotacionam semanalmente; cada um dropa uma cor de Fragmento (wiki).
const ARCHON_LIST = [
  { img: 'ArchonAmar.png?09983',   name: 'Amar',   shardImg: 'CrimsonArchonShard.png?f2048', ac: '#e0473a',
    shard: { en: 'Crimson Shard', 'pt-BR': 'Fragmento Carmesim' } },
  { img: 'ArchonNira.png?37ec9',   name: 'Nira',   shardImg: 'AmberArchonShard.png?5eaa1',   ac: '#e0a93a',
    shard: { en: 'Amber Shard', 'pt-BR': 'Fragmento Âmbar' } },
  { img: 'ArchonBoreal.png?1174b', name: 'Boreal', shardImg: 'AzureArchonShard.png?e6241',   ac: '#3a8fe0',
    shard: { en: 'Azure Shard', 'pt-BR': 'Fragmento Azure' } },
];

const ARCHON_HOW = [
  { t: { en: 'Weekly reset', 'pt-BR': 'Reset semanal' },
    d: { en: 'One hunt per week, resetting Monday 00:00 UTC. The Archon — and with it the planet, tileset and faction — rotates between Amar, Nira and Boreal.', 'pt-BR': 'Uma caçada por semana, renovando domingo às 21h (horário de Brasília). O Archon — e com ele o planeta, o cenário e a facção — alterna entre Amar, Nira e Boreal.' } },
  { t: { en: 'Three missions in a row', 'pt-BR': 'Três missões em sequência' },
    d: { en: 'Like a Sortie: clear all three in order, with shared mission conditions (no Ciphers). The third stage is the Archon showdown.', 'pt-BR': 'Tipo um Sortie: complete as três em ordem, com condições compartilhadas (sem Ciphers). O terceiro estágio é o confronto com o Archon.' } },
  { t: { en: 'Loadout buff', 'pt-BR': 'Buff de loadout' },
    d: { en: 'You bring your own gear, but each hunt spotlights a random Warframe + 3 weapons with big bonuses (+300% Ability Strength, +500 Health, +300% Damage) — even on gear you don’t own.', 'pt-BR': 'Você leva seu próprio equipamento, mas cada caçada destaca um Warframe + 3 armas aleatórios com bônus altos (+300% de Força de Habilidade, +500 de Vida, +300% de Dano) — até em itens que você não tem.' } },
  { t: { en: 'Brutal rules', 'pt-BR': 'Regras brutais' },
    d: { en: 'No self-revive (only teammates revive you), bleedout shortens each time, no summons or specters, Restores on a 3-min cooldown, and enemy Health/Shields +100% (up to +300% in a full squad).', 'pt-BR': 'Sem auto-reviver (só aliados te revivem), o bleedout encurta a cada vez, sem invocações ou espectros, Restores com cooldown de 3 min, e Vida/Escudo dos inimigos +100% (até +300% em squad cheio).' } },
];

const ARCHON_STAGES = [
  { v: '130–135', t: { en: 'Stage 1', 'pt-BR': 'Estágio 1' },
    d: { en: 'Capture, Exterminate, Mobile Defense, Rescue, Sabotage or Spy.', 'pt-BR': 'Captura, Extermínio, Defesa Móvel, Resgate, Sabotagem ou Espionagem.' } },
  { v: '135–140', t: { en: 'Stage 2', 'pt-BR': 'Estágio 2' },
    d: { en: 'Defense (6 waves), Disruption (8 conduits), Excavation (500 Cryotic), Interception (2) or Survival (10 min).', 'pt-BR': 'Defesa (6 ondas), Disrupção (8 conduítes), Escavação (500 Cryotic), Intercepção (2) ou Sobrevivência (10 min).' } },
  { v: '145–150', t: { en: 'Stage 3 · Showdown', 'pt-BR': 'Estágio 3 · Confronto' },
    d: { en: 'Assassinate the Archon itself.', 'pt-BR': 'Assassine o próprio Archon.' } },
];

// Lista de recompensas (ícone + nome + %). Fragmento = garantido; o resto é 1 sorteio
// do pool rotativo (estilo Sortie, soma ~100%). Rivens (6 categorias) e Boosters (3)
// agrupados pra leitura. Drop chances + ícones da wiki.
const ARCHON_REWARDS = [
  { icon: 'ArchonShard.png?a7ee5', guaranteed: true, name: { en: 'Archon Shard', 'pt-BR': 'Fragmento de Archon' },
    pct: { en: 'guaranteed · 20% Tauforged', 'pt-BR': 'garantido · 20% Tauforged' } },
  { icon: 'AyatanAnasaSculpture.png?b0b14', name: { en: 'Ayatan Anasa Sculpture', 'pt-BR': 'Escultura Ayatan Anasa' }, pct: '28%' },
  { icon: 'RifleRivenMod.png?c488c', name: { en: 'Riven Mod (any category)', 'pt-BR': 'Riven Mod (qualquer categoria)' }, pct: { en: '27.9%', 'pt-BR': '27,9%' } },
  { icon: 'Endo.png?34c5c', name: { en: 'Endo ×8,000', 'pt-BR': 'Endo ×8.000' }, pct: { en: '12.1%', 'pt-BR': '12,1%' } },
  { icon: 'Kuva.png?0db18', name: { en: 'Kuva ×12,000', 'pt-BR': 'Kuva ×12.000' }, pct: '12%' },
  { icon: 'AffinityBooster%28xLight%29.png?1e12d', name: { en: 'Booster (Affinity / Mod / Resource)', 'pt-BR': 'Booster (Afinidade / Mod / Recurso)' }, pct: { en: '3.27% each', 'pt-BR': '3,27% cada' } },
  { icon: 'OrokinCatalyst.png?1d542', name: { en: 'Orokin Catalyst Blueprint', 'pt-BR': 'Diagrama de Catalisador Orokin' }, pct: { en: '2.5%', 'pt-BR': '2,5%' } },
  { icon: 'OrokinReactor.png?903d2', name: { en: 'Orokin Reactor Blueprint', 'pt-BR': 'Diagrama de Reator Orokin' }, pct: { en: '2.5%', 'pt-BR': '2,5%' } },
  { icon: 'ExilusWarframeAdapter.png?bfcaf', name: { en: 'Exilus Warframe Adapter', 'pt-BR': 'Adaptador Exilus de Warframe' }, pct: { en: '2.5%', 'pt-BR': '2,5%' } },
  { icon: 'Forma.png?c7d01', name: { en: 'Forma ×3', 'pt-BR': 'Forma ×3' }, pct: { en: '2.5%', 'pt-BR': '2,5%' } },
  { icon: 'LegendaryCore.png?30a55', name: { en: 'Legendary Core', 'pt-BR': 'Legendary Core' }, pct: { en: '0.18%', 'pt-BR': '0,18%' } },
];

const ARCHON_TIPS = [
  { en: 'The guaranteed Archon Shard is the prize — bank it into a Warframe for a permanent stat boost.', 'pt-BR': 'O Fragmento de Archon garantido é o prêmio — invista num Warframe pra um aumento de status permanente.' },
  { en: 'Bring single-target burst and survivability — the Archon is tanky, adapts to damage, and you can’t self-revive.', 'pt-BR': 'Leve dano single-target e sobrevivência — o Archon é tankão, se adapta ao dano, e você não pode se auto-reviver.' },
  { en: 'Archon Hunts don’t count as Sorties for Nightwave acts.', 'pt-BR': 'Archon Hunts não contam como Sortie pros atos da Nightwave.' },
];

