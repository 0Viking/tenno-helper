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
    name: { en: 'Heat', 'pt-BR': 'Ígneo' },
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
    name: { en: 'Cold', 'pt-BR': 'Glacial' },
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
    name: { en: 'Electricity', 'pt-BR': 'Elétrico' },
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
    name: { en: 'Toxin', 'pt-BR': 'Tóxico' },
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
    name: { en: 'Blast', 'pt-BR': 'Explosivo' },
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
    name: { en: 'Radiation', 'pt-BR': 'Radioativo' },
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
    name: { en: 'Gas', 'pt-BR': 'Gasoso' },
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
      'pt-BR': '[[Interromper]] — amplifica o dano em Escudos e Overguard em [[+100%]] (até [[+325%]] em 10 acúmulos) e [[anula a regeneração de escudos]] por 6s. Quando escudos ou overguard são removidos, dispara um proc Elétrico causando [[3% do escudo máximo por acúmulo]] (limitado a [[30%]]).',
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

// Valores-base de Riven por classe de arma (% no disposition 1.0), da wiki.
// Roll real = base × [0.9–1.1] × disposition × configFactor. Usados pelo
// MagnitudeFactor (§8.5 do analysis_rivens.md) pra normalizar a força do roll
// pela arma. Aproximacao: shotguns usam a classe 'rifle' (erro pequeno, pois em
// shotgun CC/CD raramente sao desejaveis). So stats com base aqui entram no fator.
const RIVEN_BASE_VALUES = {
  rifle:  { damage: 165, multishot: 90,    critical_chance: 150, critical_damage: 120, status_chance: 90, status_duration: 100, fire_rate: 60, toxin: 90, heat: 90, cold: 90, electricity: 90, slash: 90 },
  pistol: { damage: 219.6, multishot: 119.7, critical_chance: 150, critical_damage: 90,  status_chance: 90, status_duration: 100, fire_rate: 75, toxin: 90, heat: 90, cold: 90, electricity: 90, slash: 90 },
  melee:  { damage: 164.7, critical_chance: 180, critical_damage: 90,  status_chance: 90, status_duration: 100, attack_speed: 55, range: 194, combo_count_chance: 58.77, toxin: 90, heat: 90, cold: 90, electricity: 90, slash: 90 },
};
function rivenBaseClass(category) {
  if (category === 'secondary' || category === 'kitgun') return 'pistol';
  if (category === 'melee' || category === 'zaw') return 'melee';
  return 'rifle'; // primary, archgun, companion (aproximacao)
}
// Fator de quantidade de stats (wiki): 2pos / 2pos1neg / 3pos / 3pos1neg.
function rivenConfigFactor(p, n) {
  if (p === 2 && n === 0) return 0.99;
  if (p === 2 && n === 1) return 1.2375;
  if (p === 3 && n === 0) return 0.75;
  if (p === 3 && n === 1) return 0.9375;
  return 1.0;
}

// posTier  = quality when stat appears as a positive (S/A/B/C/D)
// negTier  = harm bucket when stat appears as a negative (beneficial/neutral/mild/harmful)
// cats     = which weapon categories this stat can appear on
const RIVEN_STATS = {
  damage:               { name: { en: 'Damage',                  'pt-BR': 'Dano' },                       posTier: 'C', negTier: 'harmful',    cats: ['primary', 'secondary', 'melee'] },
  multishot:            { name: { en: 'Multishot',               'pt-BR': 'Disparo Múltiplo' },           posTier: 'S', negTier: 'harmful',    cats: ['primary', 'secondary'] },
  critical_chance:      { name: { en: 'Critical Chance',         'pt-BR': 'Chance de Crítico' },          posTier: 'S', negTier: 'harmful',    cats: ['primary', 'secondary', 'melee'] },
  critical_damage:      { name: { en: 'Critical Damage',         'pt-BR': 'Dano Crítico' },               posTier: 'S', negTier: 'harmful',    cats: ['primary', 'secondary', 'melee'] },
  status_chance:        { name: { en: 'Status Chance',           'pt-BR': 'Chance de Status' },           posTier: 'A', negTier: 'harmful',    cats: ['primary', 'secondary', 'melee'] },
  status_duration:      { name: { en: 'Status Duration',         'pt-BR': 'Duração de Status' },          posTier: 'D', negTier: 'neutral',       cats: ['primary', 'secondary', 'melee'], typicalMax: 100 },
  toxin:                { name: { en: 'Toxin Damage',            'pt-BR': 'Dano Tóxico' },                posTier: 'A', negTier: 'mild',       cats: ['primary', 'secondary', 'melee'] },
  heat:                 { name: { en: 'Heat Damage',             'pt-BR': 'Dano Ígneo' },                 posTier: 'A', negTier: 'mild',       cats: ['primary', 'secondary', 'melee'] },
  cold:                 { name: { en: 'Cold Damage',             'pt-BR': 'Dano Glacial' },               posTier: 'B', negTier: 'mild',       cats: ['primary', 'secondary', 'melee'] },
  electricity:          { name: { en: 'Electricity Damage',      'pt-BR': 'Dano Elétrico' },              posTier: 'A', negTier: 'mild',       cats: ['primary', 'secondary', 'melee'] },
  impact:               { name: { en: 'Impact Damage',           'pt-BR': 'Dano Colisivo' },              posTier: 'D', negTier: 'beneficial', cats: ['primary', 'secondary', 'melee'] },
  puncture:             { name: { en: 'Puncture Damage',         'pt-BR': 'Dano de Penetração' },         posTier: 'D', negTier: 'beneficial', cats: ['primary', 'secondary', 'melee'] },
  slash:                { name: { en: 'Slash Damage',            'pt-BR': 'Dano de Corte' },              posTier: 'C', negTier: 'mild',       cats: ['primary', 'secondary', 'melee'] },
  fire_rate:            { name: { en: 'Fire Rate',               'pt-BR': 'Cadência de Tiro' },           posTier: 'B', negTier: 'mild',    cats: ['primary', 'secondary'], typicalMax: 100 },
  reload_speed:         { name: { en: 'Reload Speed',            'pt-BR': 'Velocidade de Recarga' },      posTier: 'C', negTier: 'mild',       cats: ['primary', 'secondary'], typicalMax: 100 },
  magazine_capacity:    { name: { en: 'Magazine Capacity',       'pt-BR': 'Capacidade do Carregador' },   posTier: 'C', negTier: 'neutral',       cats: ['primary', 'secondary'] },
  ammo_max:             { name: { en: 'Ammo Maximum',            'pt-BR': 'Munição Máxima' },             posTier: 'D', negTier: 'beneficial', cats: ['primary', 'secondary'] },
  punch_through:        { name: { en: 'Punch Through',           'pt-BR': 'Penetração' },                 posTier: 'B', negTier: 'neutral',    cats: ['primary', 'secondary'], unit: 'm', minVal: 0.1, maxVal: 10 },
  projectile_speed:     { name: { en: 'Projectile Speed',        'pt-BR': 'Velocidade do Projétil' },     posTier: 'C', negTier: 'neutral',       cats: ['primary', 'secondary'] },
  recoil:               { name: { en: 'Recoil',                  'pt-BR': 'Recuo' },                      posTier: 'D', negTier: 'beneficial', cats: ['primary', 'secondary'], typicalMax: 100, inverse: true },
  zoom:                 { name: { en: 'Zoom',                    'pt-BR': 'Zoom' },                       posTier: 'D', negTier: 'beneficial', cats: ['primary', 'secondary'], typicalMax: 100 },
  faction_grineer:      { name: { en: 'Damage to Grineer',       'pt-BR': 'Dano em Grineer' },            posTier: 'C', negTier: 'neutral',    cats: ['primary', 'secondary', 'melee'], unit: 'x', multiplier: true, minVal: 0.1, maxVal: 100 },
  faction_corpus:       { name: { en: 'Damage to Corpus',        'pt-BR': 'Dano em Corpus' },             posTier: 'C', negTier: 'neutral',    cats: ['primary', 'secondary', 'melee'], unit: 'x', multiplier: true, minVal: 0.1, maxVal: 100 },
  faction_infested:     { name: { en: 'Damage to Infested',      'pt-BR': 'Dano em Infestados' },         posTier: 'C', negTier: 'neutral',    cats: ['primary', 'secondary', 'melee'], unit: 'x', multiplier: true, minVal: 0.1, maxVal: 100 },
  faction_corrupted:    { name: { en: 'Damage to Corrupted',     'pt-BR': 'Dano em Corrompidos' },        posTier: 'C', negTier: 'neutral',    cats: ['primary', 'secondary', 'melee'], unit: 'x', multiplier: true, minVal: 0.1, maxVal: 100 },
  combo_duration:       { name: { en: 'Combo Duration',          'pt-BR': 'Duração do Combo' },           posTier: 'C', negTier: 'mild',    cats: ['melee'], minVal: 1, maxVal: 30, unit: 's' },
  combo_count_chance:   { name: { en: 'Combo Count Chance',      'pt-BR': 'Chance de Acúmulo de Combo' }, posTier: 'A', negTier: 'mild',       cats: ['melee'] },
  initial_combo:        { name: { en: 'Initial Combo',           'pt-BR': 'Combo Inicial' },              posTier: 'A', negTier: 'neutral',    cats: ['melee'], minVal: 1, maxVal: 50, unit: 'x' },
  attack_speed:         { name: { en: 'Attack Speed',            'pt-BR': 'Velocidade de Ataque' },       posTier: 'A', negTier: 'mild',    cats: ['melee'] },
  range:                { name: { en: 'Range',                   'pt-BR': 'Alcance' },                    posTier: 'A', negTier: 'harmful',    cats: ['melee'], minVal: 0.05, maxVal: 2.5, unit: 'm' },
  heavy_attack_eff:     { name: { en: 'Heavy Attack Efficiency', 'pt-BR': 'Eficiência de Ataque Pesado' }, posTier: 'B', negTier: 'mild',      cats: ['melee'] },
  heavy_attack_windup:  { name: { en: 'Heavy Attack Wind-Up',    'pt-BR': 'Carregamento de Ataque Pesado' }, posTier: 'C', negTier: 'mild',    cats: ['melee'] },
  finisher_damage:      { name: { en: 'Finisher Damage',         'pt-BR': 'Dano de Execução' },           posTier: 'C', negTier: 'neutral',    cats: ['melee'] },
};

// Derive the stat pools for the modular/extra Riven categories from the base
// pools instead of hand-tagging every entry:
//   • archgun & kitgun share the gun (primary/secondary) pool
//   • companion (robotic) = gun pool minus self-aim / ammo stats
//     (Sentinels auto-aim and regenerate ammo)
//   • zaw = the melee pool
(function deriveRivenStatCats() {
  const COMPANION_EXCLUDE = new Set(['zoom', 'recoil', 'ammo_max']);
  for (const [slug, def] of Object.entries(RIVEN_STATS)) {
    const isGun = def.cats.includes('primary') || def.cats.includes('secondary');
    const isMelee = def.cats.includes('melee');
    const add = c => { if (!def.cats.includes(c)) def.cats.push(c); };
    if (isGun) {
      add('archgun');
      add('kitgun');
      if (!COMPANION_EXCLUDE.has(slug)) add('companion');
    }
    if (isMelee) add('zaw');
  }
})();

const RIVEN_CATEGORIES = ['primary', 'secondary', 'melee', 'archgun', 'kitgun', 'zaw', 'companion'];

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
  { dots: 1, min: 0.50, label: '◉○○○○' },
  { dots: 2, min: 0.75, label: '◉◉○○○' },
  { dots: 3, min: 0.95, label: '◉◉◉○○' },
  { dots: 4, min: 1.15, label: '◉◉◉◉○' },
  { dots: 5, min: 1.35, label: '◉◉◉◉◉' },
];

function dispositionDots(mult) {
  let dots = 1;
  DISPOSITION_TIERS.forEach(t => { if (mult >= t.min) dots = t.dots; });
  return dots;
}
function dispositionLabel(mult) {
  return DISPOSITION_TIERS.find(t => t.dots === dispositionDots(mult)).label;
}

