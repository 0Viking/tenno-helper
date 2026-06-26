// Glossário — Nemesis system: Kuva Liches (Grineer) & Sisters of Parvos (Corpus).
// Endgame (pede The War Within). Visão geral. Dados da wiki (Kuva_Lich + Sisters_of_Parvos).
// Armas obteníveis por adversário (nome completo + ícone). Wiki /Rewards + imageinfo.
const NEMESIS_WEAPONS = [
  { label: { en: 'Kuva — Lich', 'pt-BR': 'Kuva — Lich' }, c: '#e0473a', list: [
    { n: 'Kuva Ayanga', ic: 'KuvaAyanga.png?098c6' }, { n: 'Kuva Brakk', ic: 'KuvaBrakk.png?1c1e5' }, { n: 'Kuva Bramma', ic: 'KuvaBramma.png?e3603' }, { n: 'Kuva Chakkhurr', ic: 'KuvaChakkhurr.png?becac' }, { n: 'Kuva Drakgoon', ic: 'KuvaDrakgoon.png?1b428' }, { n: 'Kuva Ghoulsaw', ic: 'KuvaGhoulsaw.png?938a6' }, { n: 'Kuva Grattler', ic: 'KuvaGrattler.png?baf07' }, { n: 'Kuva Hek', ic: 'KuvaHek.png?a27b6' }, { n: 'Kuva Hind', ic: 'KuvaHind.png?a568a' }, { n: 'Kuva Karak', ic: 'KuvaKarak.png?df32b' }, { n: 'Kuva Kohm', ic: 'KuvaKohm.png?a9f0f' }, { n: 'Kuva Kraken', ic: 'KuvaKraken.png?6fa90' }, { n: 'Kuva Nukor', ic: 'KuvaNukor.png?73f99' }, { n: 'Kuva Ogris', ic: 'KuvaOgris.png?e9ee4' }, { n: 'Kuva Quartakk', ic: 'KuvaQuartakk.png?e2838' }, { n: 'Kuva Seer', ic: 'KuvaSeer.png?be10c' }, { n: 'Kuva Shildeg', ic: 'KuvaShildeg.png?4038c' }, { n: 'Kuva Sobek', ic: 'KuvaSobek.png?94bd0' }, { n: 'Kuva Tonkor', ic: 'KuvaTonkor.png?e43aa' }, { n: 'Kuva Twin Stubbas', ic: 'KuvaTwinStubbas.png?93b2f' }, { n: 'Kuva Zarr', ic: 'KuvaZarr.png?53490' },
  ] },
  { label: { en: 'Tenet — Sister', 'pt-BR': 'Tenet — Sister' }, c: '#3a8fe0', list: [
    { n: 'Tenet Agendus', ic: 'TenetAgendus.png?f0d3b' }, { n: 'Tenet Arca Plasmor', ic: 'TenetArcaPlasmor.png?a6d9a' }, { n: 'Tenet Cycron', ic: 'TenetCycron.png?3a27e' }, { n: 'Tenet Detron', ic: 'TenetDetron.png?0f208' }, { n: 'Tenet Diplos', ic: 'TenetDiplos.png?b553c' }, { n: 'Tenet Envoy', ic: 'TenetEnvoy.png?9f00a' }, { n: 'Tenet Exec', ic: 'TenetExec.png?0ea03' }, { n: 'Tenet Ferrox', ic: 'TenetFerrox.png?170fa' }, { n: 'Tenet Flux Rifle', ic: 'TenetFluxRifle.png?a0124' }, { n: 'Tenet Glaxion', ic: 'TenetGlaxion.png?d3aaa' }, { n: 'Tenet Grigori', ic: 'TenetGrigori.png?f7e09' }, { n: 'Tenet Livia', ic: 'TenetLivia.png?db146' }, { n: 'Tenet Plinx', ic: 'TenetPlinx.png?d3d96' }, { n: 'Tenet Quanta', ic: 'TenetQuanta.png?5fc88' }, { n: 'Tenet Spirex', ic: 'TenetSpirex.png?696b4' }, { n: 'Tenet Tetra', ic: 'TenetTetra.png?a34b1' },
  ] },
  { label: { en: 'Coda — Technocyte', 'pt-BR': 'Coda — Technocyte' }, c: '#cf5ad4', list: [
    { n: 'Coda Bassocyst', ic: 'CodaBassocyst.png?2407f' }, { n: 'Coda Bubonico', ic: 'CodaBubonico.png?5fc88' }, { n: 'Coda Catabolyst', ic: 'CodaCatabolyst.png?2407f' }, { n: 'Coda Caustacyst', ic: 'CodaCaustacyst.png?f76ee' }, { n: 'Coda Hema', ic: 'CodaHema.png?f76ee' }, { n: 'Coda Hirudo', ic: 'CodaHirudo.png?f76ee' }, { n: 'Coda Mire', ic: 'CodaMire.png?2ea1f' }, { n: 'Coda Motovore', ic: 'CodaMotovore.png?2ea1f' }, { n: 'Coda Pathocyst', ic: 'CodaPathocyst.png?2ea1f' }, { n: 'Coda Pox', ic: 'CodaPox.png?6edfb' }, { n: 'Coda Sporothrix', ic: 'CodaSporothrix.png?6edfb' }, { n: 'Coda Synapse', ic: 'CodaSynapse.png?6edfb' }, { n: 'Coda Tysis', ic: 'CodaTysis.png?09ea2' }, { n: 'Dual Coda Torxica', ic: 'DualCodaTorxica.png?56d53' },
  ] },
];

function renderLichesSistersSection() {
  const el = document.getElementById('liches-sisters-gloss');
  if (!el) return;
  const loc = state.locale === 'pt-BR' ? 'pt-BR' : 'en';
  const L = o => (o && (o[loc] || o.en)) || '';
  const esc = relicEsc;
  const W = 'https://wiki.warframe.com/images/';
  const parazonIco = `<img class="gloss-ico" src="${W}Parazon.png?55597" alt="" onerror="this.style.display='none'">`;
  const reqIco = `<img class="gloss-ico" src="${W}XataMod.png?5a558" alt="" onerror="this.style.display='none'">`;
  const ephIco = `<img class="gloss-ico" src="${W}Eph_Lich.png?9f6a0" alt="" onerror="this.style.display='none'">`;

  const T = {
    what: { en: 'What they are', 'pt-BR': 'O que são' },
    intro: { en: 'Kuva Liches (Grineer), Sisters of Parvos (Corpus) and Technocyte Codas (Höllvania, 1999) are personal nemesis bosses — unique named enemies you have to hunt down. Liches and Sisters even tax your loot, stealing a cut of your rewards on the nodes they control until you beat them (you get it all back). All are endgame.', 'pt-BR': 'Kuva Liches (Grineer), Sisters of Parvos (Corpus) e Technocyte Codas (Höllvania, 1999) são chefes nêmesis pessoais — inimigos únicos com nome que você precisa caçar. Liches e Sisters ainda taxam seu loot, roubando uma fatia das recompensas nos nodos que controlam até você vencê-los (você recupera tudo). Todos são endgame.' },
    born: { en: 'How one is created', 'pt-BR': 'Como nasce um' },
    lich: { en: 'Kuva Lich', 'pt-BR': 'Kuva Lich' },
    lichText: { en: 'Kill 15 enemies fast in a level 20+ Grineer mission to force a Kuva Larvling to appear, then Mercy-kill it with your Parazon. The Larvling shows the weapon you’d get; the Warframe you use (the Progenitor) sets the weapon’s bonus element.', 'pt-BR': 'Mate 15 inimigos rápido numa missão Grineer de nível 20+ pra forçar um Kuva Larvling a aparecer, depois dê uma Misericórdia nele com o Parazon. O Larvling mostra a arma que você ganharia; o Warframe que você usa (o Progenitor) define o elemento bônus da arma.' },
    sister: { en: 'Sister of Parvos', 'pt-BR': 'Sister of Parvos' },
    sisterText: { en: 'Complete the Granum Void (using a Zenith Granum Crown) on a Corpus Ship to spawn a Candidate, then Parazon-Mercy it. Same idea: the Progenitor Warframe sets the element.', 'pt-BR': 'Complete o Granum Void (usando uma Zenith Granum Crown) numa Nave Corpus pra surgir uma Candidata, depois dê a Misericórdia com o Parazon. Mesma ideia: o Warframe Progenitor define o elemento.' },
    coda: { en: 'Technocyte Coda', 'pt-BR': 'Technocyte Coda' },
    codaText: { en: 'In Höllvania (after The Hex quest), Techrot enemies drop a Mixtape — grab it and clear the hacking minigame to create a Coda. No Parazon Mercy and no Progenitor here.', 'pt-BR': 'Em Höllvania (depois da quest The Hex), inimigos Techrot dropam um Mixtape — pegue e passe o minigame de hacking pra criar um Coda. Aqui não tem Misericórdia com Parazon nem Progenitor.' },
    codaHunt: { en: 'Technocyte Codas work differently: instead of Requiem Mods you equip Antivirus Mods on your Parazon (only 1 of 8 works, no order) and beat the Coda’s Duet pairs to fill a Disinfection meter — the final showdown is on Earth Proxima via Railjack.', 'pt-BR': 'Technocyte Codas funcionam diferente: em vez de Mods Requiem você equipa Antivirus Mods no Parazon (só 1 de 8 funciona, sem ordem) e vence as Duplas do Coda pra encher um medidor de Desinfecção — o confronto final é na Earth Proxima via Railjack.' },
    hunt: { en: 'The Requiem hunt', 'pt-BR': 'A caçada Requiem' },
    huntText: { en: 'You can’t just kill it. Hunt its minions — Thralls (Lich) or Hounds (Sister) — to fill a Murmur bar that slowly reveals the 3 Requiem Mods you need, in the correct order. Requiem Mods come from Requiem Relics, opened in Fissures on the Kuva Fortress. Stab the nemesis with the Parazon to test your guess — a wrong order or missing mod fails the kill and levels it up (angrier and tankier, up to level 5).', 'pt-BR': 'Você não pode só matá-lo. Cace os lacaios dele — Thralls (Lich) ou Hounds (Sister) — pra encher uma barra de Murmúrio que revela aos poucos os 3 Mods Requiem que você precisa, na ordem certa. Mods Requiem vêm das Relíquias Requiem, abertas em Fissuras na Fortaleza Kuva. Esfaqueie o nêmesis com o Parazon pra testar — ordem errada ou mod faltando falha o golpe e o sobe de nível (mais bravo e tankudo, até o nível 5).' },
    finish: { en: 'Vanquish or Convert', 'pt-BR': 'Aniquilar ou Converter' },
    vanquish: { en: 'Vanquish', 'pt-BR': 'Aniquilar' },
    vanquishText: { en: 'kill it and keep its weapon (and Ephemera)', 'pt-BR': 'mata e fica com a arma dele (e a Ephemera)' },
    convert: { en: 'Convert', 'pt-BR': 'Converter' },
    convertText: { en: 'spare it; it becomes an ally you can summon or use as Railjack crew', 'pt-BR': 'poupa; vira um aliado que você pode invocar ou usar como tripulação do Railjack' },
    weapons: { en: 'Their weapons', 'pt-BR': 'As armas deles' },
    weaponsText: { en: 'Kuva weapons (Lich), Tenet weapons (Sister) and Coda weapons (Coda — bought from Eleanor with Live Heartcells) are strong variants carrying a bonus elemental % (the “valence”). Valence Fusion — merging two of the same weapon — raises that bonus % over time.', 'pt-BR': 'Armas Kuva (Lich), Tenet (Sister) e Coda (Coda — compradas da Eleanor com Live Heartcells) são variantes fortes com um bônus elemental % (a “valência”). A Valence Fusion — fundir duas da mesma arma — aumenta esse bônus % com o tempo.' },
    rank40: { en: 'These weapons rank up to <b>40</b>, not 30. Reach rank 30 the normal way, then each of the 5 <span class="gloss-link" onclick="goToGlossarySection(\'forma\')">Formas</span> you apply adds 2 more ranks (30 → 40).', 'pt-BR': 'Essas armas vão até o rank <b>40</b>, não 30. Chegue ao rank 30 normalmente, e cada uma das 5 <span class="gloss-link" onclick="goToGlossarySection(\'forma\')">Formas</span> que você aplica dá +2 ranks (30 → 40).' },
    note: { en: 'You can only have one active nemesis at a time.', 'pt-BR': 'Você só pode ter um nêmesis ativo de cada vez.' },
    wpnList: { en: 'Every weapon you can get', 'pt-BR': 'Todas as armas que dá pra obter' },
  };

  const wpnGroups = NEMESIS_WEAPONS.map(w => {
    const cards = w.list.map(it =>
      `<div class="adv-wpn-card"><img class="adv-wpn-card-ic" src="${W}${it.ic}" alt="${esc(it.n)}" loading="lazy" onerror="this.style.visibility='hidden'">`
      + `<span class="adv-wpn-card-name">${esc(it.n)}</span></div>`).join('');
    return `<div class="adv-wpn-group" style="--ac:${w.c}"><div class="adv-wpn-head">${esc(L(w.label))} <span class="adv-wpn-count">${w.list.length}</span></div>`
      + `<div class="adv-wpn-grid">${cards}</div></div>`;
  }).join('');

  el.innerHTML =
    `<h4 class="sc-h">${esc(L(T.what))}</h4>`
    + `<div class="gloss-callout"><span class="gloss-callout-ico" aria-hidden="true">😈</span><span class="gloss-callout-text">${esc(L(T.intro))}</span></div>`
    + `<h4 class="sc-h">${esc(L(T.born))}</h4>`
    + `<dl class="sc-terms">`
    + `<div class="sc-term"><dt>${parazonIco}${esc(L(T.lich))}</dt><dd>${esc(L(T.lichText))}</dd></div>`
    + `<div class="sc-term"><dt>${parazonIco}${esc(L(T.sister))}</dt><dd>${esc(L(T.sisterText))}</dd></div>`
    + `<div class="sc-term"><dt>🎵 ${esc(L(T.coda))}</dt><dd>${esc(L(T.codaText))}</dd></div>`
    + `</dl>`
    + `<h4 class="sc-h">${esc(L(T.hunt))}</h4>`
    + `<div class="gloss-callout"><span class="gloss-callout-ico" aria-hidden="true">${reqIco}</span><span class="gloss-callout-text">${esc(L(T.huntText))}</span></div>`
    + `<div class="gloss-callout"><span class="gloss-callout-ico" aria-hidden="true">🎵</span><span class="gloss-callout-text">${esc(L(T.codaHunt))}</span></div>`
    + `<h4 class="sc-h">${esc(L(T.finish))}</h4>`
    + `<dl class="sc-terms">`
    + `<div class="sc-term"><dt class="is-bad">⚔ ${esc(L(T.vanquish))}</dt><dd>${esc(L(T.vanquishText))}</dd></div>`
    + `<div class="sc-term"><dt class="is-good">🤝 ${esc(L(T.convert))}</dt><dd>${esc(L(T.convertText))}</dd></div>`
    + `</dl>`
    + `<h4 class="sc-h">${esc(L(T.weapons))}</h4>`
    + `<div class="gloss-callout"><span class="gloss-callout-ico" aria-hidden="true">${ephIco}</span><span class="gloss-callout-text">${esc(L(T.weaponsText))}</span></div>`
    + `<div class="gloss-callout"><span class="gloss-callout-ico" aria-hidden="true">🔧</span><span class="gloss-callout-text">${L(T.rank40)}</span></div>`
    + `<h4 class="sc-h">${esc(L(T.wpnList))}</h4>`
    + `<div class="adv-weapons">${wpnGroups}</div>`
    + `<div class="gloss-callout"><span class="gloss-callout-ico" aria-hidden="true">⚠️</span><span class="gloss-callout-text">${esc(L(T.note))}</span></div>`;
}
