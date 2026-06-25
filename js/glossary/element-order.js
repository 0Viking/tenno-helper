function renderElementOrder() {
  const el = document.getElementById('element-order-gloss');
  if (!el || typeof STATUS_EFFECTS === 'undefined') return;
  const loc = state.locale === 'pt-BR' ? 'pt-BR' : 'en';
  const esc = relicEsc;
  const L = o => (o && (o[loc] || o.en)) || '';
  const sn = s => { const e = STATUS_EFFECTS[s]; return e ? (e.name[loc] || e.name.en) : s; };
  const scol = s => (STATUS_EFFECTS[s] && STATUS_EFFECTS[s].color) || '#cfcfd6';

  const figs = EL_ORDER.map(d => {
    const order = d.order.map(sn).map(esc).join(' → ');
    const res = `<b style="color:${scol(d.combo)}">${esc(sn(d.combo))}</b> + ${esc(sn(d.rest))}`;
    return `<figure class="el-ord-fig"><img src="assets/glossary/${d.img}" alt="" loading="lazy">`
      + `<figcaption><span class="el-ord-order">${order}</span><span class="el-ord-res">= ${res}</span></figcaption></figure>`;
  }).join('');

  const combos = EL_COMBOS.map(x =>
    `<li class="el-combo"><b style="color:${scol(x.c)}">${esc(sn(x.c))}</b> = ${esc(sn(x.a))} + ${esc(sn(x.b))}</li>`).join('');

  const search = EL_SEARCH.map(d =>
    `<figure class="el-ord-fig"><img src="assets/glossary/${d.img}" alt="" loading="lazy">`
    + `<figcaption><span class="el-ord-res"><b style="color:${scol(d.combo)}">${esc(sn(d.combo))}</b></span>`
    + `<span class="el-ord-order">${esc(sn(d.a))} + ${esc(sn(d.b))}</span></figcaption></figure>`).join('');

  const T = {
    h:       { en: 'Combining elements (mod order)', 'pt-BR': 'Combinando elementos (ordem dos mods)' },
    intro:   { en: 'When you equip two base elements — Heat, Cold, Electricity or Toxin — they merge into a secondary element. The order the mods sit in the slots decides which element comes out (read left to right, starting with the top row). So the same three mods can become different elements just by reordering them:', 'pt-BR': 'Quando você equipa dois elementos base — Ígneo, Glacial, Elétrico ou Tóxico — eles se combinam num elemento secundário. A ordem dos mods nos slots decide qual elemento sai (a leitura é da esquerda pra direita, começando pela linha de cima). Por isso, os mesmos três mods podem virar elementos diferentes só trocando a ordem:' },
    combosH: { en: 'The six combinations', 'pt-BR': 'As seis combinações' },
    searchH: { en: 'Shortcut: the mod search', 'pt-BR': 'Atalho: a busca de mods' },
    searchT: { en: 'Type the combined element’s name in the mod search and the game filters the base mods you need for it.', 'pt-BR': 'Digite o nome do elemento combinado na busca de mods e o jogo já filtra os mods base que você precisa pra ele.' },
  };

  el.innerHTML =
    `<h4 class="sc-h">${esc(L(T.h))}</h4>`
    + `<p class="sc-sub">${esc(L(T.intro))}</p>`
    + `<div class="el-ord-demo">${figs}</div>`
    + `<h5 class="sc-h el-combos-h">${esc(L(T.combosH))}</h5>`
    + `<ul class="el-combos">${combos}</ul>`
    + `<h5 class="sc-h el-combos-h">${esc(L(T.searchH))}</h5>`
    + `<p class="sc-sub">${esc(L(T.searchT))}</p>`
    + `<div class="el-ord-demo el-search-demo">${search}</div>`;
}

// ── Glossary navigation + table of contents ──────────────────────────────────

// Jump to a glossary <details data-id="..."> section: switch to the tab, open it,
// and scroll it into view. Reused by the TOC and by augment → syndicate links.
