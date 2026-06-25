function setupLightboxEvents() {
  document.getElementById('lightbox-backdrop')?.addEventListener('click', closeLightbox);
  document.getElementById('lightbox-close')?.addEventListener('click', closeLightbox);
  document.getElementById('glossary-sections')?.addEventListener('click', e => {
    const img = e.target.closest('.glossary-figure img, .mod-ui-fig img, .mod-pol-fig img, .el-ord-fig img, .riven-flow-fig img, .archon-img');
    if (img) openLightbox(img.src, img.alt);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const rc = document.getElementById('riven-chal-modal');
      if (rc && !rc.classList.contains('hidden')) { e.preventDefault(); closeRivenChal(); return; }
    }
    const modal = document.getElementById('lightbox-modal');
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      e.preventDefault();
      closeLightbox();
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
  const noteEl = document.getElementById('chart-provisional-note');
  if (noteEl) {
    const isProvisional = !!(data && data.provisional);
    noteEl.classList.toggle('hidden', !isProvisional);
    if (isProvisional) noteEl.textContent = t('chart_provisional_note');
  }
  return !!data;
}

// ============== Estado e render ==============

function makeRoll() {
  return {
    weapon: null,
    weaponAutoDetected: false,
    slots: 2,
    stats: [
      { slug: null, value: '' },
      { slug: null, value: '' },
      { slug: null, value: '' },
      { slug: null, value: '' },
    ],
    result: null,
    warning: null,
    imageState: 'idle',
    imagePreviewUrl: null,
    imageProgress: 0,
    imageError: null,
    imageDetectedCount: 0,
    weaponMismatch: null,
  };
}

const state = {
  archetype: 'canhao-de-vidro',
  warframe: null,
  activeStats: new Set(),
  activeAbility: 0,
  variant: 'base',
  form: 'normal', // 'normal' | <variant-key> (e.g. 'broken', 'day')
  locale: detectInitialLocale(),
  tab: null, // 'archetypes' | 'glossary' | 'star-chart' | 'rivens' | 'tutorials' | 'relics' — set by initial selectTab('archetypes') call
  relics: { search: '', era: 'all', noForma: false, unvaulted: false, selected: null }, // Void Relics tab
  statusPhysical: null, // 'impact' | 'puncture' | 'slash' | null
  statusElementals: new Set(), // subset of {'heat','cold','electricity','toxin'}, max 2
  statusSpecial: null, // 'void' | 'tau' | 'true' | null
  riven: {
    category: 'primary',
    incarnonMode: false,
    rolls: [makeRoll(), makeRoll()],
  },
  weaponPicker: {
    open: false,
    rollIdx: 0, // which roll this picker is editing
    category: 'secondary', // active tab in the picker modal
    search: '',
    selected: null, // slug currently highlighted in the picker
    expandedFamilies: new Set(), // slugs of families expanded in the list
  },
  starChart: {
    expandedPlanet: null, // slug of in-place expanded planet card, or null = all collapsed
    tab: 'origin-system', // §20.5 — top-level Star Chart tab: 'origin-system' | 'empyrean' | 'special'
    filters: new Set(),   // mission type slugs; empty Set = show all (multi-select, §20.1)
    search: '',
    resourceSearch: '',   // search query in the global all-resources section
    resourceCategory: 'all', // active category filter chip in the all-resources section (legacy)
    resourceRarity: 'all',   // active rarity filter (common/uncommon/rare/special/all)
    resourceLocation: 'all', // active location filter (star-chart/plains-of-eidolon/.../all)
    resourceSource: 'all',   // active source filter (mining/fishing/heist-drops/.../all)
    // Spoiler protection — hides quest-locked planets (Lua/Kuva Fortress/Zariman),
    // the Albrecht's Laboratories section within Deimos, and their exclusive
    // resources. Persisted in localStorage so the choice survives reloads.
    showSpoilers: (() => {
      try { return localStorage.getItem('starChart.showSpoilers') === 'true'; }
      catch (e) { return false; }
    })(),
  },
};

// ============== Client-side router ==============
let _routerPaused = false;

// Maps internal star-chart tab keys → URL slugs (and back).
const STAR_CHART_TAB_SLUGS = { origin: 'origin-system', empyrean: 'railjack', special: 'special' };
const STAR_CHART_SLUG_TABS = { 'origin-system': 'origin', 'railjack': 'empyrean', 'special': 'special' };

function pathFromState() {
  const { tab, warframe, starChart } = state;
  if (tab === 'star-chart') {
    if (starChart.expandedPlanet) return `/star-chart/${starChart.expandedPlanet}`;
    const tabSlug = STAR_CHART_TAB_SLUGS[starChart.tab] || 'origin-system';
    return `/star-chart/${tabSlug}`;
  }
  if (tab === 'glossary') return '/glossary';
  if (tab === 'rivens') return '/rivens';
  if (tab === 'relics') return '/relics';
  return warframe ? `/archetypes/${warframe}` : '/archetypes';
}

function pushPath() {
  if (_routerPaused) return;
  history.pushState(null, '', pathFromState());
}

function applyPath(path) {
  _routerPaused = true;
  try {
    const parts = path.replace(/^\//, '').split('/').filter(Boolean);
    const section = parts[0];
    if (section === 'star-chart') {
      const seg = parts[1] || null;
      const tabKey = seg ? STAR_CHART_SLUG_TABS[seg] : null;
      if (tabKey) {
        // seg is a tab slug (origin-system / railjack / special)
        if ((tabKey === 'empyrean' || tabKey === 'special') && !state.starChart.showSpoilers) {
          state.starChart.showSpoilers = true;
          try { localStorage.setItem('starChart.showSpoilers', 'true'); } catch (e) {}
        }
        state.starChart.tab = tabKey;
        state.starChart.expandedPlanet = null;
      } else if (seg) {
        // seg is a planet slug — infer tab from the planet
        const tab = findPlanetTab(seg);
        if ((tab === 'empyrean' || tab === 'special') && !state.starChart.showSpoilers) {
          state.starChart.showSpoilers = true;
          try { localStorage.setItem('starChart.showSpoilers', 'true'); } catch (e) {}
        }
        state.starChart.tab = tab;
        state.starChart.expandedPlanet = seg;
      } else {
        state.starChart.expandedPlanet = null;
      }
      if (state.tab === 'star-chart') renderStarChart();
      else selectTab('star-chart');
    } else if (section === 'glossary') {
      selectTab('glossary');
    } else if (section === 'rivens') {
      selectTab('rivens');
    } else if (section === 'relics') {
      selectTab('relics');
    } else {
      const warframeSlug = parts[1] || null;
      if (warframeSlug && WARFRAMES_DETAILS[warframeSlug]) {
        if (state.warframe !== warframeSlug) {
          state.warframe = warframeSlug;
          state.activeAbility = 0; state.variant = 'base'; state.form = 'normal';
          const arch = WARFRAME_TO_ARCHETYPE[warframeSlug];
          if (arch) { state.archetype = arch; state.activeStats = new Set(); }
        }
      } else { state.warframe = null; }
      render();
      selectTab('archetypes');
    }
  } finally { _routerPaused = false; }
}

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
      // Dual-form abilities (forms[]) merge each form by index: keep label/icon
      // from PT base, take name/description from EN when present.
      if (ptAb.forms) {
        return {
          type: ptAb.type,
          name: enAb.name || ptAb.name,
          forms: ptAb.forms.map((f, j) => {
            const ef = enAb.forms && enAb.forms[j];
            return {
              label: f.label,
              icon: f.icon,
              name: (ef && ef.name) || f.name,
              description: (ef && ef.description) || f.description,
            };
          }),
        };
      }
      return {
        type: ptAb.type,
        icon: ptAb.icon,
        name: enAb.name || ptAb.name,
        description: enAb.description || ptAb.description,
      };
    }),
    acquisition: en.acquisition || pt.acquisition,
    craftCost: pt.craftCost,         // numeric — locale-agnostic, lives on the PT base
    requiresParts: pt.requiresParts, // structural — frame slugs are also locale-agnostic
    subFrames: pt.subFrames,         // localized via `label[locale]` at render time
    railjackFarms: pt.railjackFarms, // localized via `note[locale]` at render time
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
  renderQuestsSection();
  renderStarChartGlossary();
  renderMrSection();
  renderNightwaveSection();
  renderSortieSection();
  renderArbitrationSection();
  renderSteelPathSection();
  renderCircuitSection();
  renderSyndicateSection();
  renderCritsSection();
  renderRotationsSection();
  renderMissionTypesSection();
  renderModdingSection();
  renderFormaSection();
  renderRivensSection();
  renderArcanesSection();
  renderHelminthSection();
  renderArchonHuntsSection();
  renderArchonShardsSection();
  renderElementOrder();
  renderGlossaryToc();
  applyTermTipsToGlossary();
}

function selectArchetype(slug) {
  // Toggle: clicar no arquétipo já ativo (ou passar null) desseleciona tudo.
  if (slug === null || state.archetype === slug) {
    state.archetype = null;
    state.activeStats = new Set();
    state.warframe = null;
    render();
    pushPath();
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
  pushPath();
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
  pushPath();
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
  pushPath();
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

// ── Void Relics: render ───────────────────────────────────────────────────
// Fontes de drop sem nodo no Star Chart (bounties linkam pro planeta; ESO/lich
// /sister são só texto — decidido 2026-06-19, ver PLAN §22.6).
const RELIC_SOURCES = {
  'cetus-bounty':     { name: { en: 'Cetus Bounties (Plains of Eidolon)',     'pt-BR': 'Contratos de Cetus (Planícies de Eidolon)' }, planet: 'earth' },
  'fortuna-bounty':   { name: { en: 'Fortuna Bounties (Orb Vallis)',          'pt-BR': 'Contratos de Fortuna (Orb Vallis)' },          planet: 'venus' },
  'necralisk-bounty': { name: { en: 'Necralisk Bounties (Cambion Drift)',     'pt-BR': 'Contratos do Necralisk (Cambion Drift)' },     planet: 'deimos' },
  'zariman-bounty':   { name: { en: 'Zariman Bounties',                       'pt-BR': 'Contratos do Zariman' },                       planet: 'zariman' },
  'hollvania-bounty': { name: { en: 'Höllvania Bounties (1999)',              'pt-BR': 'Contratos de Höllvania (1999)' },              planet: 'hollvania' },
  'the-circuit':      { name: { en: 'The Circuit (Duviri)',                   'pt-BR': 'The Circuit (Duviri)' },                       planet: 'duviri' },
  'elite-onslaught':  { name: { en: 'Elite Sanctuary Onslaught',              'pt-BR': 'Elite Sanctuary Onslaught' } },
  'lich-murmur':      { name: { en: 'Kuva Lich (murmurs)',                    'pt-BR': 'Kuva Lich (murmúrios)' } },
  'sister-murmur':    { name: { en: 'Sisters of Parvos (murmurs)',            'pt-BR': 'Sisters of Parvos (murmúrios)' } },
  'railjack':         { name: { en: 'Railjack',                               'pt-BR': 'Railjack' } },
};
const RELIC_REFINE = ['intact', 'exceptional', 'flawless', 'radiant'];
let _relicsBound = false;
let _relicRefine = 'intact';
let _relicLocFilter = new Set();

function relicLoc(v) {
  if (v == null) return '';
  if (typeof v === 'string') return v;
  return v[state.locale] || v.en || Object.values(v)[0] || '';
}
function relicEsc(s) {
  return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}
function relicPlanetName(slug) {
  const p = (typeof getPlanet === 'function') ? getPlanet(slug) : null;
  if (p) return relicLoc(p.name);
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}
function relicRarity(r) {
  return (typeof SC_RARITIES !== 'undefined' && SC_RARITIES[r]) || { name: { en: r, 'pt-BR': r }, color: '#8a8a8a' };
}
// Cores das raridades de relíquia: bronze / prata / ouro (barras + dots da listagem).
const RELIC_RARITY_COLORS = { common: '#c8814b', uncommon: '#c8d0d8', rare: '#e3bd45' };
function relicRarityColor(r) { return RELIC_RARITY_COLORS[r] || '#8a8a8a'; }
function relicRarityIcon(r) { return `assets/icons/rarity/${r}.png`; }

function renderRelics() {
  renderRelicEraChips();
  if (!_relicsBound) {
    setupRelicControls();
    _relicsBound = true;
  }
  renderRelicFilters();
  renderRelicList();
}

function relicHasForma(r) {
  return r.rewards.some(rw => /\bforma\b/i.test(rw.item));
}

function renderRelicFilters() {
  const un = document.getElementById('relics-toggle-unvaulted');
  const nf = document.getElementById('relics-toggle-noforma');
  if (un) un.classList.toggle('active', state.relics.unvaulted);
  if (nf) {
    nf.classList.toggle('active', state.relics.noForma);
    // Requiem não dropa Forma → o toggle não faz sentido nessa era.
    nf.classList.toggle('hidden', state.relics.era === 'requiem');
  }
}

function renderRelicEraChips() {
  const row = document.getElementById('relics-eras');
  if (!row) return;
  row.innerHTML = '';
  const eras = ['all', ...Object.keys(RELIC_ERAS)];
  eras.forEach(era => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'relics-era-chip' + (state.relics.era === era ? ' active' : '');
    chip.dataset.era = era;
    if (era !== 'all') {
      chip.style.setProperty('--era-color', RELIC_ERAS[era].color);
      const img = document.createElement('img');
      img.className = 'relics-era-chip-icon';
      img.src = RELIC_ERAS[era].icon;
      img.alt = '';
      chip.appendChild(img);
    }
    const label = document.createElement('span');
    label.textContent = era === 'all' ? t('relics_era_all') : relicLoc(RELIC_ERAS[era].name);
    chip.appendChild(label);
    chip.addEventListener('click', () => {
      state.relics.era = era;
      renderRelicEraChips();
      renderRelicFilters();
      renderRelicList();
    });
    row.appendChild(chip);
  });
}

function setupRelicControls() {
  const input = document.getElementById('relics-search');
  const clear = document.getElementById('relics-search-clear');
  if (input) {
    input.addEventListener('input', () => {
      state.relics.search = input.value;
      clear?.classList.toggle('hidden', input.value.length === 0);
      renderRelicList();
    });
  }
  clear?.addEventListener('click', () => {
    if (input) input.value = '';
    state.relics.search = '';
    clear.classList.add('hidden');
    renderRelicList();
    input?.focus();
  });
  document.getElementById('relics-toggle-unvaulted')?.addEventListener('click', () => {
    state.relics.unvaulted = !state.relics.unvaulted;
    renderRelicFilters();
    renderRelicList();
  });
  document.getElementById('relics-toggle-noforma')?.addEventListener('click', () => {
    state.relics.noForma = !state.relics.noForma;
    renderRelicFilters();
    renderRelicList();
  });
  document.getElementById('relic-modal-close')?.addEventListener('click', closeRelicModal);
  document.getElementById('relic-modal-backdrop')?.addEventListener('click', closeRelicModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !document.getElementById('relic-modal')?.classList.contains('hidden')) closeRelicModal();
  });
}

function relicMatches(relic, q) {
  if (!q) return true;
  const hay = normalizeForMatch(relic.name + ' ' + relic.rewards.map(r => relicLoc(r.item)).join(' '));
  return hay.includes(q);
}

function renderRelicList() {
  const view = document.getElementById('relics-view');
  if (!view) return;
  const q = normalizeForMatch(state.relics.search || '');
  const era = state.relics.era;
  const noForma = state.relics.noForma;
  const unvaulted = state.relics.unvaulted;
  const list = Object.entries(RELICS)
    .filter(([, r]) => (era === 'all' || r.era === era) && relicMatches(r, q)
      && (!unvaulted || !r.vaulted)
      && (!noForma || r.era === 'requiem' || !relicHasForma(r)))
    .sort((a, b) => a[1].name.localeCompare(b[1].name));

  view.innerHTML = '';
  if (!list.length) {
    const empty = document.createElement('p');
    empty.className = 'relics-empty';
    empty.textContent = t('relics_no_results');
    view.appendChild(empty);
    return;
  }
  const CAP = 200;  // mostra todas dentro de uma era (≤196); trunca só a visão "Todas"
  const grid = document.createElement('div');
  grid.className = 'relics-grid';
  list.slice(0, CAP).forEach(([slug, r]) => grid.appendChild(buildRelicCard(slug, r, q)));
  view.appendChild(grid);
  if (list.length > CAP) {
    const note = document.createElement('p');
    note.className = 'relics-more';
    note.textContent = t('relics_more').replace('{n}', CAP).replace('{total}', list.length);
    view.appendChild(note);
  }
}

function buildRelicCard(slug, r, q) {
  const era = RELIC_ERAS[r.era];
  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'relic-card';
  card.style.setProperty('--era-color', era.color);
  // Com termo de busca, mostra só as peças que casam (se nenhuma casar, a relíquia
  // entrou pelo nome → mostra todas).
  let shownRewards = r.rewards;
  if (q) {
    const matched = r.rewards.filter(rw => normalizeForMatch(relicLoc(rw.item)).includes(q));
    if (matched.length) shownRewards = matched;
  }
  const drops = shownRewards.map(rw => {
    const c = relicRarityColor(rw.rarity);
    const duc = (rw.requiemMod || rw.ducats == null) ? '' :
      `<span class="relic-card-duc"><img class="relic-ducat-icon" src="assets/icons/relics/ducat.png" alt="">${rw.ducats}</span>`;
    return `<li class="relic-card-drop"><span class="relic-dot" style="background:${c}"></span><span class="relic-card-drop-name">${relicEsc(relicLoc(rw.item))}</span>${duc}</li>`;
  }).join('');
  card.innerHTML =
    `<div class="relic-card-head">
       <img class="relic-card-icon" src="${era.icon}" alt="">
       <div class="relic-card-head-text">
         <span class="relic-card-name">${relicEsc(r.name)}</span>
         <span class="relic-card-era">${relicEsc(relicLoc(era.name))}</span>
       </div>
       ${r.vaulted ? `<span class="relic-vaulted-badge">${t('relic_vaulted')}</span>` : ''}
     </div>
     <ul class="relic-card-drops">${drops}</ul>`;
  card.addEventListener('click', () => openRelicModal(slug));
  return card;
}

function openRelicModal(slug) {
  const r = RELICS[slug];
  if (!r) return;
  state.relics.selected = slug;
  const era = RELIC_ERAS[r.era];
  document.getElementById('relic-modal')?.style.setProperty('--era-color', era.color);
  document.getElementById('relic-modal-era-icon').src = era.icon;
  document.getElementById('relic-modal-title').textContent = r.name;
  document.getElementById('relic-modal-era').textContent = relicLoc(era.name) + (r.vaulted ? ' · ' + t('relic_vaulted') : '');
  const body = document.getElementById('relic-modal-body');

  let html = '';

  if (r.vaulted) {
    if (r.era === 'requiem') {
      // Requiem não é "vaulted" no sentido Prime — obtém-se com a Palladino.
      html += `<div class="relic-warning">⚠️ ${relicEsc(t('relic_requiem_palladino'))}</div>`;
    } else {
      let w = t('relic_vaulted_warning');
      const pa = (r.primeAccess || []).map(s => s.split('-').map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(' ')).join(', ');
      if (pa) w += ' ' + t('relic_vaulted_pa') + ' ' + pa + '.';
      html += `<div class="relic-warning">⚠️ ${relicEsc(w)}</div>`;
    }
  }
  if (r.era === 'requiem') {
    html += `<div class="relic-note">${relicEsc(t('relic_requiem_note'))}</div>`;
  }

  // Drops: grid de quadrados (estilo in-game) + toggle de refinamento
  html += `<h3 class="relic-section-label">${t('relic_drops')}</h3>`;
  if (!r.noRefine) {  // Requiem Eterna não tem refinamento
    html += `<div class="relic-refine-toggle" id="relic-refine-toggle">` +
      RELIC_REFINE.map((k, i) => {
        const dots = [0, 1, 2].map(d => `<span class="relic-refine-dot${d < i ? ' on' : ''}"></span>`).join('');
        return `<button type="button" class="relic-refine-btn${i === 0 ? ' active' : ''}" data-ref="${k}">` +
          `<span class="relic-refine-lbl">${t('relic_refine_' + k)}</span>` +
          `<span class="relic-refine-dots">${dots}</span></button>`;
      }).join('') +
      `</div>`;
  }
  html += `<div class="relic-drops-grid" id="relic-drops-grid"></div>`;

  // Locais de drop — filtros por tipo de missão (multi-select) + lista por planeta.
  const loc = r.dropLocations || { nodes: [], sources: [] };
  if (loc.nodes.length || loc.sources.length) {
    html += `<h3 class="relic-section-label">${t('relic_locations')}</h3>`;
    html += `<div class="relic-loc-filters hidden" id="relic-loc-filters"></div>`;
    html += `<div class="relic-locs" id="relic-locs"></div>`;
  }

  body.innerHTML = html;

  _relicRefine = 'intact';
  paintRelicDrops(r);
  body.querySelectorAll('#relic-refine-toggle .relic-refine-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      _relicRefine = btn.dataset.ref;
      body.querySelectorAll('#relic-refine-toggle .relic-refine-btn').forEach(b => b.classList.toggle('active', b === btn));
      updateRelicBars(r);
    });
  });

  _relicLocFilter = new Set();
  if (loc.nodes.length || loc.sources.length) {
    renderRelicLocFilters(r);
    renderRelicLocList(r);
  }

  const modal = document.getElementById('relic-modal');
  modal.classList.remove('hidden');
}

// Tipo de missão: o `type` do nó usa hífen (mobile-defense); MISSION_TYPES usa _.
function relicTypeKey(type) { return String(type || '').replace(/-/g, '_'); }
function relicTypeLabel(type) {
  const key = relicTypeKey(type);
  const n = (typeof missionTypeName === 'function') ? missionTypeName(key) : key;
  if (n && n !== key) return n;
  return String(type || '').split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}
function relicTypeColor(type) {
  const mt = (typeof MISSION_TYPES !== 'undefined') ? MISSION_TYPES[relicTypeKey(type)] : null;
  return mt ? mt.color : '#5ec0e8';
}
function relicLocTypes(r) {
  const s = new Set();
  (r.dropLocations.nodes || []).forEach(n => { if (n.type) s.add(n.type); });
  return [...s].sort((a, b) => relicTypeLabel(a).localeCompare(relicTypeLabel(b)));
}

function renderRelicLocFilters(r) {
  const row = document.getElementById('relic-loc-filters');
  if (!row) return;
  const types = relicLocTypes(r);
  row.innerHTML = '';
  if (types.length < 2) { row.classList.add('hidden'); return; }  // sem sentido com 0–1 tipo
  row.classList.remove('hidden');
  types.forEach(type => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'relic-loc-chip' + (_relicLocFilter.has(type) ? ' active' : '');
    chip.style.setProperty('--mt-color', relicTypeColor(type));
    chip.innerHTML = `<span class="relic-loc-chip-dot"></span>${relicEsc(relicTypeLabel(type))}`;
    chip.addEventListener('click', () => {
      if (_relicLocFilter.has(type)) _relicLocFilter.delete(type);
      else _relicLocFilter.add(type);
      renderRelicLocFilters(r);
      renderRelicLocList(r);
    });
    row.appendChild(chip);
  });
}

function renderRelicLocList(r) {
  const cont = document.getElementById('relic-locs');
  if (!cont) return;
  const loc = r.dropLocations || { nodes: [], sources: [] };
  const f = _relicLocFilter;
  const nodes = f.size ? loc.nodes.filter(n => f.has(n.type)) : loc.nodes;
  const byPlanet = {};
  nodes.forEach(n => { (byPlanet[n.planet] = byPlanet[n.planet] || []).push(n); });
  let html = '';
  Object.entries(byPlanet).forEach(([planet, ns]) => {
    const shown = ns.slice(0, 6).map(n => relicEsc(n.nodeName || n.node) + (n.rotations && n.rotations.length ? ` (${n.rotations.join('/')})` : '')).join(', ');
    const more = ns.length > 6 ? ` <span class="relic-loc-more">+${ns.length - 6}</span>` : '';
    // redirect aplica só os tipos presentes (= filtros selecionados quando há filtro).
    const types = [...new Set(ns.map(n => relicTypeKey(n.type)).filter(Boolean))];
    html += `<div class="relic-loc-row">
      <button type="button" class="relic-loc-map" data-planet="${relicEsc(planet)}" data-types="${relicEsc(types.join(','))}">${t('relic_view_on_map')}</button>
      <div class="relic-loc-text"><span class="relic-loc-planet">${relicEsc(relicPlanetName(planet))}</span> <span class="relic-loc-nodes">${shown}${more}</span></div>
    </div>`;
  });
  // fontes sem nodo: só quando não há filtro de tipo ativo (não são missões tipadas).
  if (!f.size && loc.sources.length) {
    const items = loc.sources.map(s => {
      const def = RELIC_SOURCES[s];
      const label = def ? relicLoc(def.name) : s;
      if (def && def.planet) {
        return `<li><button type="button" class="relic-loc-map small" data-planet="${relicEsc(def.planet)}" data-types="">${t('relic_view_on_map')}</button> ${relicEsc(label)}</li>`;
      }
      return `<li class="relic-src-text">${relicEsc(label)}</li>`;
    }).join('');
    html += `<div class="relic-sources"><span class="relic-section-sub">${t('relic_other_sources')}</span><ul>${items}</ul></div>`;
  }
  cont.innerHTML = html;
  cont.querySelectorAll('.relic-loc-map').forEach(btn => {
    btn.addEventListener('click', () => {
      const planet = btn.dataset.planet;
      const types = (btn.dataset.types || '').split(',').filter(Boolean);
      closeRelicModal();
      if (typeof goToStarChart === 'function') goToStarChart(planet, types);
    });
  });
}

function closeRelicModal() {
  document.getElementById('relic-modal')?.classList.add('hidden');
  state.relics.selected = null;
}

// Barra estilo wiki (0–100): progresso = chance × nº de partes na mesma raridade
// (ex.: comum 25.33% × 3 partes = 76). Mostra a chance da peça como número.
function relicRarCount(r) {
  const c = {};
  r.rewards.forEach(rw => { c[rw.rarity] = (c[rw.rarity] || 0) + 1; });
  return c;
}

// Constrói o grid de quadrados (fill começa em 0 e é animado por updateRelicBars).
function paintRelicDrops(r) {
  const grid = document.getElementById('relic-drops-grid');
  if (!grid) return;
  const isReq = r.era === 'requiem';
  const eraIcon = RELIC_ERAS[r.era].icon;
  grid.innerHTML = r.rewards.map(rw => {
    const icon = rw.icon || eraIcon;
    const glowCls = rw.glow === 'requiem' ? ' relic-sq--rune' : '';
    const duc = isReq ? '' : `<span class="relic-sq-duc"><img class="relic-ducat-icon" src="assets/icons/relics/ducat.png" alt="">${rw.ducats || 0}</span>`;
    return `<div class="relic-sq${glowCls}" style="--rar:${relicRarityColor(rw.rarity)}">
      <div class="relic-sq-bg" style="background-image:url('${icon}')"></div>
      <div class="relic-sq-foot">
        <div class="relic-sq-line">
          <span class="relic-sq-name">${relicEsc(relicLoc(rw.item))}</span>
          ${duc}
        </div>
        <div class="relic-sq-meta">
          <img class="relic-sq-rar" src="${relicRarityIcon(rw.rarity)}" alt="">
          <div class="relic-sq-bar"><div class="relic-sq-fill" style="width:0%"></div></div>
          <span class="relic-sq-pct"></span>
        </div>
      </div>
    </div>`;
  }).join('');
  // próximo frame: anima do 0 até o valor do refinamento atual.
  requestAnimationFrame(() => updateRelicBars(r));
}

// Atualiza só as larguras/% dos quadrados já montados (anima via transition no toggle).
function updateRelicBars(r) {
  const grid = document.getElementById('relic-drops-grid');
  if (!grid) return;
  const rarCount = relicRarCount(r);
  const sqs = grid.querySelectorAll('.relic-sq');
  r.rewards.forEach((rw, i) => {
    const sq = sqs[i];
    if (!sq) return;
    const ch = rw.chances ? rw.chances[_relicRefine] : null;
    const fill = ch != null ? Math.min(100, Math.round(ch * (rarCount[rw.rarity] || 1))) : 0;
    const f = sq.querySelector('.relic-sq-fill');
    if (f) f.style.width = fill + '%';
    const p = sq.querySelector('.relic-sq-pct');
    if (p) p.textContent = ch != null ? ch + '%' : '—';
  });
}

function selectTab(tab) {
  if (state.tab === tab) return;
  state.tab = tab;
  // Null-guard every getElementById here: the shipped main/index.html strips
  // tabs that aren't ready (Tutorials, etc.). A missing element would throw
  // on .classList.toggle and break the whole initial render.
  const showHide = (id, shouldShow) => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('hidden', !shouldShow);
  };
  showHide('tab-archetypes', tab === 'archetypes');
  showHide('tab-star-chart', tab === 'star-chart');
  showHide('tab-glossary',   tab === 'glossary');
  showHide('tab-rivens',     tab === 'rivens');
  showHide('tab-relics',     tab === 'relics');
  showHide('tab-tutorials',  tab === 'tutorials');

  const archBtn = document.getElementById('archetype-btn');
  const starBtn = document.getElementById('star-chart-btn');
  const glossBtn = document.getElementById('glossary-btn');
  const rivensBtn = document.getElementById('rivens-btn');
  const relicsBtn = document.getElementById('relics-btn');
  const tutBtn = document.getElementById('tutorials-btn');
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
  if (relicsBtn) {
    relicsBtn.classList.toggle('active', tab === 'relics');
    relicsBtn.style.setProperty('--neon-color', '#caa15a');
  }
  if (tutBtn) {
    tutBtn.classList.toggle('active', tab === 'tutorials');
    tutBtn.style.setProperty('--neon-color', '#ff9a3c');
  }

  if (tab === 'glossary') renderStatusEffects();
  if (tab === 'rivens') renderRivens();
  if (tab === 'star-chart') renderStarChart();
  if (tab === 'relics') renderRelics();
}

// Redirect into the Star Chart, drilled into `planetSlug` with a mission-type
// filter pre-applied. Shared by resource-modal farm links, warframe acquisition
// links and Railjack farm links. Crucially re-renders even when already on the
// star-chart tab — selectTab() early-returns on an unchanged tab, which would
// otherwise leave the new expansion/filter state on screen unrendered (the bug
// when clicking a resource's farm link from within the Star Chart itself).
function goToArchetype(warframeSlug) {
  _routerPaused = true;
  selectWarframe(warframeSlug);
  if (state.tab !== 'archetypes') selectTab('archetypes');
  _routerPaused = false;
  pushPath();
  requestAnimationFrame(() => {
    const detail = document.getElementById('warframe-detail');
    if (detail) detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function goToStarChart(planetSlug, filterTypes) {
  const tab = findPlanetTab(planetSlug);
  // Navigating to a Railjack/Special target (e.g. a warframe's Railjack farm
  // link) while spoilers are OFF: enable spoilers so the destination tab is
  // actually visible — the user explicitly chose to go there.
  if ((tab === 'empyrean' || tab === 'special') && !state.starChart.showSpoilers) {
    state.starChart.showSpoilers = true;
    try { localStorage.setItem('starChart.showSpoilers', 'true'); } catch (e) {}
  }
  state.starChart.tab = tab;
  state.starChart.expandedPlanet = planetSlug;
  state.starChart.filters = new Set(filterTypes || []);
  state.starChart.search = '';
  const searchInput = document.getElementById('star-chart-search');
  if (searchInput) searchInput.value = '';
  if (state.tab === 'star-chart') renderStarChart();
  else selectTab('star-chart');
  pushPath();
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
    applyTermTips(document.getElementById('archetype-description'));
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
  const subsIdx = subsumableAbilityIndex(slug, details.abilities);
  details.abilities.forEach((ab, i) => {
    const btn = document.createElement('button');
    btn.className = 'ability-tab';
    if (ab.type === 'passive') btn.classList.add('passive');
    if (i === state.activeAbility) btn.classList.add('active');
    btn.textContent = ab.type === 'passive' ? `${t('passive_prefix')} — ${ab.name}` : ab.name;
    if (i === subsIdx) {
      btn.classList.add('is-subsumable');
      btn.insertAdjacentHTML('afterbegin', `<img class="ability-tab-helm" src="https://wiki.warframe.com/images/${HELM_ICON}" alt="" title="Helminth">`);
    }
    btn.setAttribute('role', 'tab');
    btn.addEventListener('click', () => selectAbility(i));
    tabsEl.appendChild(btn);
  });

  renderAbilityPanel();
  renderAcquisitionBox(details);
  renderPortrait();
}

// §16.6 — Sum per-part resource costs into a single { slug: total } map.
// Input shape: { neuroptics: { ferrite: 1000, ... }, chassis: { ... }, ... }
// Output: { ferrite: 4500, rubedo: 800, ... } sorted at render time.
function aggregateCraftCost(craftCost) {
  const total = {};
  if (!craftCost) return total;
  Object.values(craftCost).forEach(part => {
    if (!part) return;
    Object.entries(part).forEach(([slug, qty]) => {
      total[slug] = (total[slug] || 0) + qty;
    });
  });
  return total;
}

// Merge a `details` object's craftCost AND every subFrame's craftCost AND every
// donor-part's craftCost into a single aggregated total. Used for both Equinox
// (subFrames) and Chroma (requiresParts) so the pill grid at the top of the
// section reflects the FULL shopping list — including resources you need to
// build the cross-frame ingredients.
function aggregateFullCraftCost(details) {
  const total = aggregateCraftCost(details.craftCost);

  if (Array.isArray(details.subFrames)) {
    details.subFrames.forEach(sf => {
      const sub = aggregateCraftCost(sf.craftCost);
      Object.entries(sub).forEach(([slug, qty]) => {
        total[slug] = (total[slug] || 0) + qty;
      });
    });
  }

  // Recurse into requiresParts: lookup the donor frame's craftCost for the
  // referenced part and add (qty × cost) per resource. Silently skips entries
  // whose donor frame doesn't have craftCost populated yet.
  if (Array.isArray(details.requiresParts)) {
    details.requiresParts.forEach(req => {
      const donorPart = donorPartCost(req.frame, req.part);
      if (!donorPart) return;
      Object.entries(donorPart).forEach(([slug, qty]) => {
        total[slug] = (total[slug] || 0) + qty * (req.qty || 1);
      });
    });
  }

  return total;
}

// Lookup the resource cost of one specific part on a donor frame. Returns null
// when the data isn't populated yet so callers can handle the gap gracefully.
function donorPartCost(frameSlug, partKey) {
  const donor = WARFRAMES_DETAILS[frameSlug];
  if (!donor || !donor.craftCost) return null;
  return donor.craftCost[partKey] || null;
}

// Order rarities cheapest-to-rarest so the pills sort with the bottleneck up
// top (we reverse at sort time). 'special' is treated as rarest.
const CRAFT_COST_RARITY_ORDER = { common: 0, uncommon: 1, rare: 2, special: 3 };

function buildCraftCostSection(details) {
  const section = document.createElement('div');
  section.className = 'acquisition-craft-cost';

  const header = document.createElement('div');
  header.className = 'acquisition-craft-cost-header';
  const label = document.createElement('span');
  label.className = 'acquisition-craft-cost-label';
  label.textContent = '🛠 ' + t('acquisition_craft_cost');
  header.appendChild(label);
  section.appendChild(header);

  // Aggregated total across craftCost AND any subFrames (Equinox case).
  const totals = aggregateFullCraftCost(details);
  const sortedSlugs = sortBySlugRarity(Object.keys(totals));

  const grid = document.createElement('div');
  grid.className = 'acquisition-craft-cost-grid';
  sortedSlugs.forEach(slug => {
    grid.appendChild(buildCraftCostPill(slug, totals[slug]));
  });
  section.appendChild(grid);

  // Cross-frame ingredients (Chroma case) — clickable to jump to donor frame.
  if (Array.isArray(details.requiresParts) && details.requiresParts.length > 0) {
    section.appendChild(buildRequiresPartsBlock(details.requiresParts));
  }

  // Sub-frames (Equinox case) — collapsible breakdown per aspect.
  if (Array.isArray(details.subFrames) && details.subFrames.length > 0) {
    section.appendChild(buildSubFramesBlock(details.subFrames));
  }

  return section;
}

function sortBySlugRarity(slugs) {
  return slugs.slice().sort((a, b) => {
    const ra = RESOURCES[a], rb = RESOURCES[b];
    const oa = ra ? (CRAFT_COST_RARITY_ORDER[ra.rarity] ?? 0) : -1;
    const ob = rb ? (CRAFT_COST_RARITY_ORDER[rb.rarity] ?? 0) : -1;
    if (oa !== ob) return ob - oa; // rarer first
    const na = ra ? resourceName(a) : a;
    const nb = rb ? resourceName(b) : b;
    return na.localeCompare(nb);
  });
}

const FRAME_PART_LABEL_KEY = {
  neuroptics: 'craft_part_neuroptics',
  chassis:    'craft_part_chassis',
  systems:    'craft_part_systems',
  main_bp:    'craft_part_main_bp',
};

function partLabel(partKey) {
  const k = FRAME_PART_LABEL_KEY[partKey];
  return k ? t(k) : partKey;
}

function buildRequiresPartsBlock(requiresParts) {
  const block = document.createElement('div');
  block.className = 'acquisition-requires-parts';

  const header = document.createElement('div');
  header.className = 'acquisition-requires-parts-header';
  header.textContent = '🔗 ' + t('acquisition_requires_parts');
  block.appendChild(header);

  requiresParts.forEach(req => {
    block.appendChild(buildDonorPartRow(req));
  });

  return block;
}

function buildDonorPartRow(req) {
  const row = document.createElement('div');
  row.className = 'acquisition-donor-part';

  // Title bar — clickable, jumps to the donor warframe.
  const titleBar = document.createElement('button');
  titleBar.type = 'button';
  titleBar.className = 'acquisition-donor-part-title';

  const donorDetails = WARFRAMES_DETAILS[req.frame];
  const icon = document.createElement('img');
  icon.className = 'acquisition-donor-part-icon';
  icon.alt = '';
  icon.loading = 'lazy';
  icon.src = donorDetails?.portraits?.base || `assets/icons/base/${req.frame}.png`;
  titleBar.appendChild(icon);

  const labelWrap = document.createElement('div');
  labelWrap.className = 'acquisition-donor-part-label-wrap';
  const name = document.createElement('span');
  name.className = 'acquisition-donor-part-name';
  const frameDisplay = req.frame.charAt(0).toUpperCase() + req.frame.slice(1);
  name.textContent = `${frameDisplay} ${partLabel(req.part)}`;
  labelWrap.appendChild(name);
  const meta = document.createElement('span');
  meta.className = 'acquisition-donor-part-meta';
  meta.textContent = `${t('craft_for_part')} ${partLabel(req.forPart)}`;
  labelWrap.appendChild(meta);
  titleBar.appendChild(labelWrap);

  const qty = document.createElement('span');
  qty.className = 'acquisition-donor-part-qty';
  qty.textContent = '×' + req.qty;
  titleBar.appendChild(qty);

  const arrow = document.createElement('span');
  arrow.className = 'acquisition-donor-part-arrow';
  arrow.textContent = '⤴';
  arrow.setAttribute('aria-hidden', 'true');
  titleBar.appendChild(arrow);

  titleBar.addEventListener('click', () => {
    selectWarframe(req.frame);
    selectTab('archetypes');
  });
  row.appendChild(titleBar);

  // Per-donor-part resource grid (like subFrames).
  const partCost = donorPartCost(req.frame, req.part);
  if (partCost) {
    // Scale by qty if multiple donor parts are needed (rare case but possible).
    const scaled = {};
    Object.entries(partCost).forEach(([slug, q]) => {
      scaled[slug] = q * (req.qty || 1);
    });
    const sortedSlugs = sortBySlugRarity(Object.keys(scaled));
    const grid = document.createElement('div');
    grid.className = 'acquisition-craft-cost-grid';
    sortedSlugs.forEach(slug => {
      grid.appendChild(buildCraftCostPill(slug, scaled[slug]));
    });
    row.appendChild(grid);
  } else {
    // Donor frame doesn't have craftCost populated yet — show a hint.
    const stub = document.createElement('div');
    stub.className = 'acquisition-donor-part-stub';
    stub.textContent = t('craft_donor_data_pending');
    row.appendChild(stub);
  }

  return row;
}

function buildSubFramesBlock(subFrames) {
  const block = document.createElement('div');
  block.className = 'acquisition-sub-frames';

  const header = document.createElement('div');
  header.className = 'acquisition-sub-frames-header';
  header.textContent = '🌗 ' + t('acquisition_sub_frames');
  block.appendChild(header);

  subFrames.forEach(sf => {
    block.appendChild(buildSubFrameRow(sf));
  });

  return block;
}

function buildSubFrameRow(subFrame) {
  const row = document.createElement('div');
  row.className = 'acquisition-sub-frame';

  const title = document.createElement('div');
  title.className = 'acquisition-sub-frame-title';
  const lbl = subFrame.label || {};
  title.textContent = lbl[state.locale] || lbl[DEFAULT_LOCALE] || subFrame.slug;
  row.appendChild(title);

  const totals = aggregateCraftCost(subFrame.craftCost);
  const sortedSlugs = sortBySlugRarity(Object.keys(totals));
  const grid = document.createElement('div');
  grid.className = 'acquisition-craft-cost-grid';
  sortedSlugs.forEach(slug => {
    grid.appendChild(buildCraftCostPill(slug, totals[slug]));
  });
  row.appendChild(grid);

  return row;
}

function buildCraftCostPill(slug, qty) {
  const r = RESOURCES[slug];
  const pill = document.createElement('button');
  pill.type = 'button';
  pill.className = 'craft-cost-pill';
  if (r) {
    const rarity = getRarity(r.rarity);
    if (rarity) pill.style.setProperty('--rarity-color', rarity.color);
  }

  // Icon (or fallback box if resource missing/unknown)
  if (r && r.image) {
    const img = document.createElement('img');
    img.className = 'craft-cost-pill-icon';
    img.src = r.image;
    img.alt = '';
    img.loading = 'lazy';
    pill.appendChild(img);
  } else {
    const fallback = document.createElement('span');
    fallback.className = 'craft-cost-pill-icon-fallback';
    pill.appendChild(fallback);
  }

  const name = document.createElement('span');
  name.className = 'craft-cost-pill-name';
  name.textContent = r ? resourceName(slug) : slug;
  pill.appendChild(name);

  const qtyEl = document.createElement('span');
  qtyEl.className = 'craft-cost-pill-qty';
  qtyEl.textContent = '×' + qty.toLocaleString(state.locale === 'pt-BR' ? 'pt-BR' : 'en-US');
  pill.appendChild(qtyEl);

  if (r) {
    pill.addEventListener('click', () => openResourceModal(slug));
  } else {
    pill.disabled = true;
  }
  return pill;
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

  // §16.6 Craft Cost — aggregated shopping list of all resources to build the
  // full frame. Each pill is clickable and opens the resource modal (which has
  // the recommended farm node). Also handles cross-frame requirements (Chroma)
  // and multi-aspect frames (Equinox).
  if (details.craftCost || details.subFrames || details.requiresParts) {
    box.appendChild(buildCraftCostSection(details));
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
    target.textContent = `${planetName(dropLocation.planet)} / ${nodeName(dropLocation.node)}`;
    link.appendChild(target);
    link.addEventListener('click', () => {
      // §20.2/§20.5: drill into the right planet (and top-level tab) with a
      // filter matching the node's mission type so only the relevant node shows.
      goToStarChart(dropLocation.planet.slug, [dropLocation.node.type]);
    });
    box.appendChild(link);
  }

  // "Also in The Circuit" link — frames whose acquisition lists the Duviri
  // Circuit rotation get a shortcut to that node. Detected from the (localized)
  // `alternative` text, which says "Circuit" in both EN and PT-BR.
  const altText = details.acquisition && details.acquisition.alternative;
  const circuitNode = findNode('duviri', 'the-circuit');
  if (typeof altText === 'string' && altText.includes('Circuit') && circuitNode) {
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
    label.textContent = t('acquisition_view_circuit');
    link.appendChild(label);
    const target = document.createElement('span');
    target.className = 'acquisition-star-chart-link-target';
    target.textContent = `${planetName(getPlanet('duviri'))} / ${nodeName(circuitNode)}`;
    link.appendChild(target);
    link.addEventListener('click', () => goToStarChart('duviri', [circuitNode.type]));
    box.appendChild(link);
  }

  // §20.5 — Railjack alt-farm links (Oberon, Ash, Sevagoth, ...). Each link
  // jumps to the Empyrean tab with the listed Proxima expanded and the
  // recommended mission types pre-applied as filters.
  if (Array.isArray(details.railjackFarms) && details.railjackFarms.length > 0) {
    box.appendChild(buildRailjackFarmsBlock(details.railjackFarms));
  }
}

function buildRailjackFarmsBlock(farms) {
  const block = document.createElement('div');
  block.className = 'acquisition-railjack-farms';

  const header = document.createElement('div');
  header.className = 'acquisition-railjack-farms-header';
  header.textContent = '🚀 ' + t('acquisition_railjack_farms');
  block.appendChild(header);

  farms.forEach(farm => {
    const targetPlanet = getPlanet(farm.planet);
    if (!targetPlanet) return;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'acquisition-railjack-farm-link';

    const arrow = document.createElement('span');
    arrow.className = 'acquisition-railjack-farm-arrow';
    arrow.textContent = '⤴';
    arrow.setAttribute('aria-hidden', 'true');
    btn.appendChild(arrow);

    const body = document.createElement('div');
    body.className = 'acquisition-railjack-farm-body';

    const target = document.createElement('span');
    target.className = 'acquisition-railjack-farm-target';
    // "Earth Proxima · Skirmish"
    const filterNames = (farm.missionTypes || [])
      .map(t => missionTypeName(t))
      .join(' / ');
    target.textContent = filterNames
      ? `${planetName(targetPlanet)} · ${filterNames}`
      : planetName(targetPlanet);
    body.appendChild(target);

    const note = document.createElement('span');
    note.className = 'acquisition-railjack-farm-note';
    const nm = farm.note || {};
    note.textContent = nm[state.locale] || nm[DEFAULT_LOCALE] || '';
    body.appendChild(note);

    btn.appendChild(body);

    btn.addEventListener('click', () => {
      goToStarChart(farm.planet, farm.missionTypes || []);
    });
    block.appendChild(btn);
  });

  return block;
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

    const formTabs = [{ key: 'normal', label: portraits.normalLabel || 'Normal' }, ...availableForms];
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
  const activeForm = allForms.find(f => f.key === state.form);
  const nextSrc = state.form === 'normal'
    ? portraits[state.variant]
    : (activeForm?.src || `assets/icons/${state.variant}/${slug}-${state.form}.png`);
  const portraitBox = layerA.parentElement;
  // is-variant switches the portrait to object-fit:contain (for variant art framed
  // differently, e.g. Equinox/Sevagoth). Frames whose variant uses the same framing
  // as the base (e.g. Sirius & Orion) opt out via portraits.variantCover.
  if (portraitBox) portraitBox.classList.toggle('is-variant', state.form !== 'normal' && !portraits.variantCover);
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

  // Nota de habilidade subsumível (quando a aba ativa é a habilidade subsumível do frame).
  const isSubsumable = state.activeAbility === subsumableAbilityIndex(state.warframe, details.abilities);
  const subsNoteTxt = state.locale === 'pt-BR'
    ? `<b>Habilidade subsumível.</b> Subsuma este Warframe no Helminth pra infundir ${ab.name} em outros frames.`
    : `<b>Subsumable ability.</b> Subsume this Warframe in the Helminth to infuse ${ab.name} onto other frames.`;
  const subsNote = isSubsumable
    ? `<div class="ability-subsume-note"><img src="https://wiki.warframe.com/images/${HELM_ICON}" alt="">`
      + `<span>${subsNoteTxt} <button type="button" class="gloss-link" onclick="goToGlossarySection('helminth')">Helminth →</button></span></div>`
    : '';

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
            ${augmentSyndsHtml(au)}
          </figure>
        `).join('')}
      </div>
    </div>
  ` : '';

  // Dual-form abilities (ab.forms) render each form stacked (e.g. Sirius on top,
  // Orion below), each with its own label/icon/name/description. Single abilities
  // keep the original one-block layout.
  const contentHtml = Array.isArray(ab.forms) ? `
    <div class="ability-forms">
      ${ab.forms.map(f => `
        <div class="ability-content">
          <div class="ability-icon">
            ${f.icon ? `<img src="${f.icon}" alt="">` : ''}
          </div>
          <div class="ability-text">
            ${f.label ? `<span class="ability-form-label">${f.labelIcon ? `<img class="ability-form-label-icon" src="${f.labelIcon}" alt="">` : ''}${f.label}</span>` : ''}
            <h4 class="ability-name">${f.name}</h4>
            <p class="ability-description">${f.description}</p>
          </div>
        </div>
      `).join('')}
    </div>
  ` : `
    <div class="ability-content">
      <div class="ability-icon">
        ${ab.icon ? `<img src="${ab.icon}" alt="">` : ''}
      </div>
      <div class="ability-text">
        <h4 class="ability-name">${ab.name}</h4>
        <p class="ability-description">${ab.description}</p>
      </div>
    </div>
  `;

  panel.innerHTML = `
    ${contentHtml}
    ${subsNote}
    ${augmentsHtml}
  `;
  panel.querySelectorAll('.ability-description, .augment-caption').forEach(applyTermTips);
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
    img.src = warframeIconUrl(slug);
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
const STAR_CHART_FILTERS = ['all', 'assassination', 'survival', 'defense', 'mobile_defense', 'mirror_defense', 'shrine_defense', 'stage_defense', 'spy', 'capture', 'exterminate', 'rescue', 'sabotage', 'excavation', 'interception', 'disruption', 'defection', 'hijack', 'arena', 'pursuit', 'assault', 'alchemy', 'ascension', 'abyssal_zone', 'infested_salvage', 'archwing', 'free_flight', 'skirmish', 'volatile', 'orphix', 'free_roam', 'bounty', 'faceoff', 'hell_scrub', 'legacyte_harvest', 'follies_hunt', 'temporal_archimedea', 'deep_archimedea', 'descendia', 'perita_rebellion', 'void_cascade', 'void_flood', 'void_armageddon'];

function planetMatchesFilter(planet, filters, search) {
  if (!planet) return false;
  const matchedNodes = planetNodesFiltered(planet, filters, search);
  if (matchedNodes.length > 0) return true;
  // When only searching, allow planet-name match too
  if (search && (!filters || filters.size === 0)) {
    const norm = normalizeForMatch(search);
    if (norm && normalizeForMatch(planetName(planet)).includes(norm)) return true;
  }
  return false;
}

function planetNodesFiltered(planet, filters, search) {
  if (!planet) return [];
  const norm = search ? normalizeForMatch(search) : '';
  const showSpoilers = state.starChart.showSpoilers;
  // filters is a Set of mission type slugs. Empty Set = no filter applied.
  const hasFilters = filters && filters.size > 0;
  return planet.nodes.filter(n => {
    if (hasFilters && !filters.has(n.type)) return false;
    // Hide nodes in spoiler-locked sections (e.g., Albrecht's Laboratories
    // inside Deimos) unless the user toggled spoilers on.
    if (!showSpoilers && n.section && planet.sections?.[n.section]?.spoilerLocked) {
      return false;
    }
    if (norm) {
      const hay = normalizeForMatch(
        nodeName(n) + ' ' + missionTypeName(n.type) + ' ' + (n.boss || '') + ' ' + warframeDropSlugs(n.warframeDrop).join(' ')
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
    pushPath();
  };
  if (typeof document.startViewTransition === 'function') {
    document.startViewTransition(apply);
  } else {
    apply();
  }
}

function selectStarChartFilter(key) {
  // §20.1 multi-select:
  // - 'all' chip clears the set
  // - clicking an already-active type toggles it off
  // - clicking an inactive type adds it
  // Empty set = show all nodes (logical OR of zero filters = pass-through).
  const filters = state.starChart.filters;
  if (key === 'all') {
    filters.clear();
  } else if (filters.has(key)) {
    filters.delete(key);
  } else {
    filters.add(key);
  }
  renderStarChart();
}

function toggleStarChartSpoilers() {
  const next = !state.starChart.showSpoilers;
  state.starChart.showSpoilers = next;
  try { localStorage.setItem('starChart.showSpoilers', next ? 'true' : 'false'); } catch (e) {}
  if (!next) {
    // Turning spoilers OFF: the Railjack/Special tabs are now hidden, so snap
    // back to Origin System and drop any expansion that lives in a hidden tab.
    if (state.starChart.tab === 'empyrean' || state.starChart.tab === 'special') {
      state.starChart.tab = 'origin-system';
      state.starChart.expandedPlanet = null;
    }
    // If a now-hidden (spoiler-locked) planet was expanded, collapse it.
    const expanded = state.starChart.expandedPlanet;
    if (expanded) {
      const p = getPlanet(expanded);
      if (p && p.spoilerLocked) state.starChart.expandedPlanet = null;
    }
  }
  renderStarChart();
}

function renderStarChart() {
  // The legacy #star-chart-filters container is no longer used — chips are now
  // rendered per-tab inside the grid (see buildStarChartMissionFilters). Empty
  // it on every render so any stale chips from earlier loads disappear.
  const legacy = document.getElementById('star-chart-filters');
  if (legacy) legacy.innerHTML = '';

  const view = document.getElementById('star-chart-view');
  if (!view) return;
  view.innerHTML = '';
  // Always render the grid — detail content is rendered inline inside the
  // expanded card (no separate drill-down view).
  renderStarChartGrid(view);
}

// §20.5 — Mission filter chips, rendered INSIDE the current tab's section
// (between the tab buttons and the planet grid). Each tab shows only the
// mission types that actually appear on its planet set, so Railjack doesn't
// surface Mobile Defense / Excavation, and Origin doesn't surface Skirmish.
function buildStarChartMissionFilters() {
  const row = document.createElement('div');
  row.className = 'star-chart-filters-row';

  // Collect every mission type used on this tab's planets so we can show only
  // those chips. Origin System has all of them; Railjack is a smaller subset.
  const usedTypes = new Set();
  currentTabPlanets().forEach(p => {
    (p.nodes || []).forEach(n => {
      if (n.type) usedTypes.add(n.type);
    });
  });

  // Preserve the order from STAR_CHART_FILTERS so chips don't shuffle when a
  // type is missing. 'all' is always first.
  const chipsForThisTab = STAR_CHART_FILTERS.filter(k => k === 'all' || usedTypes.has(k));

  chipsForThisTab.forEach(key => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'star-chart-filter-chip';
    chip.dataset.filter = key;
    const isActive = key === 'all'
      ? state.starChart.filters.size === 0
      : state.starChart.filters.has(key);
    if (isActive) chip.classList.add('active');

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
    row.appendChild(chip);
  });

  return row;
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

// §20.5 — Top-level Star Chart tab selector. Three rectangular buttons,
// centered, side by side. Each one has a placeholder image with a left→right
// gradient fade and the tab label on the right side. Layout-only for now:
// click updates state and visually re-paints the row, but doesn't yet filter
// the planet grid (that wiring will land in a follow-up commit).
const STAR_CHART_TABS = [
  { key: 'origin-system', labelKey: 'star_chart_tab_origin',   theme: 'origin',   image: 'assets/backgrounds/OriginSystem.jpg' },
  { key: 'empyrean',      labelKey: 'star_chart_tab_empyrean', theme: 'empyrean', image: 'assets/backgrounds/Railjack.jpg'     },
  { key: 'special',       labelKey: 'star_chart_tab_special',  theme: 'special',  image: 'assets/backgrounds/Special.png'      },
];

function visibleStarChartTabs() {
  if (!state.starChart.showSpoilers) {
    return STAR_CHART_TABS.filter(t => t.key === 'origin-system');
  }
  return STAR_CHART_TABS;
}

function buildStarChartTopTabs() {
  const tabs = visibleStarChartTabs();
  // Only Origin System visible → no point rendering a single-button selector.
  if (tabs.length <= 1) return null;

  const row = document.createElement('div');
  row.className = 'star-chart-top-tabs';

  tabs.forEach(spec => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'star-chart-top-tab';
    btn.dataset.theme = spec.theme;
    if (state.starChart.tab === spec.key) btn.classList.add('active');

    // Image layer — real background from assets/backgrounds/, falling back to
    // the theme-specific CSS gradient when no image is set.
    const img = document.createElement('span');
    img.className = 'star-chart-top-tab-image';
    if (spec.image) {
      img.style.backgroundImage = `url('${spec.image}')`;
      img.style.backgroundSize = 'cover';
      img.style.backgroundPosition = 'center';
    }
    btn.appendChild(img);

    // Fade overlay so the label stays legible over the image.
    const fade = document.createElement('span');
    fade.className = 'star-chart-top-tab-fade';
    btn.appendChild(fade);

    // Label on the right (gradient is darkest on that side).
    const label = document.createElement('span');
    label.className = 'star-chart-top-tab-label';
    label.textContent = t(spec.labelKey);
    btn.appendChild(label);

    btn.addEventListener('click', () => {
      if (state.starChart.tab === spec.key) return;
      if ((spec.key === 'empyrean' || spec.key === 'special') && !state.starChart.showSpoilers) {
        state.starChart.showSpoilers = true;
        try { localStorage.setItem('starChart.showSpoilers', 'true'); } catch (e) {}
      }
      state.starChart.tab = spec.key;
      // Collapse any expanded planet from the previous tab — it doesn't exist
      // in the new tab's planet set, so leaving it expanded would render
      // nothing and look broken.
      state.starChart.expandedPlanet = null;
      state.starChart.filters = new Set();
      renderStarChart();
      pushPath();
    });
    row.appendChild(btn);
  });

  return row;
}

function renderStarChartGrid(view) {
  // Spoiler toggle in its own centered row above the planet grid.
  view.appendChild(buildSpoilerToggleRow());

  // §20.5 — top-level Star Chart tabs (Origin System / Railjack / Special).
  // Hidden entirely with spoilers OFF (only Origin System is base game), so the
  // builder returns null when a single tab would remain.
  const topTabs = buildStarChartTopTabs();
  if (topTabs) view.appendChild(topTabs);

  // Mission-type filter chips, scoped to the current tab's planet set.
  view.appendChild(buildStarChartMissionFilters());

  const grid = document.createElement('div');
  grid.className = 'star-chart-grid';

  const filters = state.starChart.filters;
  const search = state.starChart.search;

  let visible = 0;
  const showSpoilers = state.starChart.showSpoilers;
  currentTabPlanets().forEach(p => {
    // Skip quest-locked planets (Lua, Kuva Fortress, Zariman) unless toggled.
    if (!showSpoilers && p.spoilerLocked) return;
    const card = buildPlanetCard(p, filters, search);
    if (card) {
      visible++;
      grid.appendChild(card);
    }
  });

  if (visible === 0) {
    const empty = document.createElement('div');
    empty.className = 'star-chart-empty';
    // Friendlier message when the tab itself has no content yet
    // (Special is the canonical case — its data lands in a follow-up).
    if (state.starChart.tab === 'special' && currentTabPlanets().length === 0) {
      empty.textContent = t('star_chart_tab_coming_soon');
    } else {
      empty.textContent = t('star_chart_no_results');
    }
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
  const sourceSlugs = filterPlanet
    ? planetResourceSlugs(filterPlanet)
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

  // Filter chips — only on the global list, not on planet-specific.
  // Three independent dimensions, AND-combined: Rarity, Location, Source.
  let rarityChips = null, locationChips = null, sourceChips = null;
  if (!filterPlanet) {
    const filtersWrap = document.createElement('div');
    filtersWrap.className = 'star-chart-resource-filters';

    const mkRow = (labelKey, fallbackLabel) => {
      const row = document.createElement('div');
      row.className = 'star-chart-resource-filter-row';
      const lbl = document.createElement('span');
      lbl.className = 'star-chart-resource-filter-row-label';
      lbl.textContent = t(labelKey) || fallbackLabel;
      row.appendChild(lbl);
      const chipsBox = document.createElement('div');
      chipsBox.className = 'star-chart-resource-categories';
      row.appendChild(chipsBox);
      filtersWrap.appendChild(row);
      return chipsBox;
    };

    rarityChips   = mkRow('star_chart_filter_label_rarity',   'Rarity');
    locationChips = mkRow('star_chart_filter_label_location', 'Location');
    sourceChips   = mkRow('star_chart_filter_label_source',   'Source');
    section.appendChild(filtersWrap);
  }

  const listWrap = document.createElement('div');
  listWrap.className = 'resource-list is-grid-3col';
  section.appendChild(listWrap);

  // Sort alphabetically (case-insensitive) using localeCompare.
  // Filter out spoiler-locked resources when the spoiler toggle is off.
  const showSpoilers = state.starChart.showSpoilers;
  const sortedSlugs = sourceSlugs.filter(s => {
    const r = RESOURCES[s];
    if (!r) return false;
    if (!showSpoilers && resourceIsSpoiler(r)) return false;
    return true;
  }).slice().sort((a, b) => resourceName(a).localeCompare(resourceName(b)));

  // Compute which source keys actually appear in our data — skip empty chips.
  const usedSourceSet = new Set();
  sortedSlugs.forEach(s => {
    const arr = RESOURCES[s]?.sources;
    if (Array.isArray(arr)) arr.forEach(x => usedSourceSet.add(x));
  });

  const RARITY_FILTERS = ['all', 'common', 'uncommon', 'rare', 'special'];
  const LOCATION_FILTERS = ['all', ...Object.keys(SC_LOCATIONS)];
  const SOURCE_FILTERS = ['all', ...Object.keys(SC_SOURCES).filter(k => usedSourceSet.has(k))];

  const mkChip = (key, isActive, color, label, onClick) => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'star-chart-resource-cat-chip';
    if (isActive) chip.classList.add('active');
    chip.style.setProperty('--chip-color', color);
    if (key !== 'all') {
      const dot = document.createElement('span');
      dot.className = 'star-chart-filter-chip-dot';
      chip.appendChild(dot);
    }
    const lbl = document.createElement('span');
    lbl.textContent = label;
    chip.appendChild(lbl);
    chip.addEventListener('click', onClick);
    return chip;
  };

  const renderChips = () => {
    if (!rarityChips) return;

    rarityChips.innerHTML = '';
    RARITY_FILTERS.forEach(key => {
      const active = state.starChart.resourceRarity === key;
      const color = key === 'all' ? '#5ec0e8' : (SC_RARITIES[key]?.color || '#888');
      const label = key === 'all' ? t('star_chart_filter_all') : rarityName(key);
      rarityChips.appendChild(mkChip(key, active, color, label, () => {
        state.starChart.resourceRarity = key;
        renderChips();
        renderItems();
      }));
    });

    locationChips.innerHTML = '';
    LOCATION_FILTERS.forEach(key => {
      const active = state.starChart.resourceLocation === key;
      const color = key === 'all' ? '#5ec0e8' : locationColor(key);
      const label = key === 'all' ? t('star_chart_filter_all') : locationName(key);
      locationChips.appendChild(mkChip(key, active, color, label, () => {
        state.starChart.resourceLocation = key;
        renderChips();
        renderItems();
      }));
    });

    sourceChips.innerHTML = '';
    SOURCE_FILTERS.forEach(key => {
      const active = state.starChart.resourceSource === key;
      const color = key === 'all' ? '#5ec0e8' : '#aaa';
      const label = key === 'all' ? t('star_chart_filter_all') : sourceName(key);
      sourceChips.appendChild(mkChip(key, active, color, label, () => {
        state.starChart.resourceSource = key;
        renderChips();
        renderItems();
      }));
    });
  };

  const renderItems = () => {
    listWrap.innerHTML = '';
    const q = state.starChart.resourceSearch ? normalizeForMatch(state.starChart.resourceSearch) : '';
    const fRarity   = state.starChart.resourceRarity;
    const fLocation = state.starChart.resourceLocation;
    const fSource   = state.starChart.resourceSource;
    sortedSlugs.forEach(slug => {
      const r = RESOURCES[slug];
      // AND-combine: all active filters must pass (only on global list).
      if (!filterPlanet) {
        if (fRarity   && fRarity   !== 'all' && r.rarity   !== fRarity)   return;
        if (fLocation && fLocation !== 'all' && r.location !== fLocation) return;
        if (fSource   && fSource   !== 'all' && !(Array.isArray(r.sources) && r.sources.includes(fSource))) return;
      }
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

  renderChips();
  renderItems();
  return section;
}

function buildPlanetCard(planet, filters, search) {
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
  else if (planet.location) card.style.setProperty('--faction-color', locationColor(planet.location));
  if (planet.image) {
    card.style.backgroundImage = `url('${planet.image}')`;
  } else {
    card.classList.add('no-image');
  }

  const matchingNodes = planetNodesFiltered(planet, filters, search);
  const planetNameMatchesSearch = search && normalizeForMatch(planetName(planet))
    .includes(normalizeForMatch(search));

  // If no nodes match the filter AND the planet name doesn't match search → hide
  // (but never hide the currently-expanded card)
  if (!isExpanded && matchingNodes.length === 0 && !planetNameMatchesSearch) {
    if (filters.size === 0 && !search) {
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
  header.appendChild(name);
  // Regions (Special tab) have no level range — omit the pill rather than
  // render "Lv undefined".
  if (planet.levelRange) {
    const level = document.createElement('span');
    level.className = 'star-chart-planet-card-level';
    level.textContent = `Lv ${planet.levelRange}`;
    header.appendChild(level);
  }

  // Regions have no faction — skip the faction tag entirely (built/appended
  // only when present).
  const factionTag = planet.faction ? document.createElement('div') : null;
  if (factionTag) {
    factionTag.className = 'star-chart-planet-card-faction';
    factionTag.textContent = scFactionName(planet.faction);
  }

  const meta = document.createElement('div');
  meta.className = 'star-chart-planet-card-meta';
  const count = document.createElement('span');
  count.className = 'star-chart-planet-card-count';
  // Count reflects what the user actually sees: filtered nodes + spoiler-aware.
  // Show "matching/total-visible" when a mission filter is active OR when a
  // search actually matched nodes (so "war" on Mars shows e.g. 1/18). When the
  // search only matched the planet *name* (no node matches), show the plain
  // total — all nodes are relevant there.
  const visibleTotal = planetNodesFiltered(planet, new Set(), '').length;
  if (filters.size > 0 || (search && matchingNodes.length > 0)) {
    count.textContent = `${matchingNodes.length}/${visibleTotal} ${t('star_chart_nodes')}`;
  } else {
    count.textContent = `${visibleTotal} ${t('star_chart_nodes')}`;
  }
  meta.appendChild(count);

  // Warframe drops shown as corner badges (icon + name in red) for the compact
  // card — see CSS .star-chart-planet-card-wf-badge. Skip when expanded. Any
  // node that drops a warframe qualifies (boss assassinations + special-system
  // drops like Höllvania/Descendia).
  const assassinations = planet.nodes.filter(n => n.warframeDrop);

  card.appendChild(header);
  if (factionTag) card.appendChild(factionTag);
  // Compact meta only when not expanded — expanded card shows full node list instead.
  if (!isExpanded) {
    card.appendChild(meta);
    if (assassinations.length > 0) {
      const wfWrap = document.createElement('div');
      wfWrap.className = 'star-chart-planet-card-wf-wrap';
      assassinations.forEach(n => {
        warframeDropSlugs(n.warframeDrop).forEach(slug => {
          const wfName = ALL_WARFRAMES.find(w => w.toLowerCase() === slug) || (slug.charAt(0).toUpperCase() + slug.slice(1));
          const badge = document.createElement('div');
          badge.className = 'star-chart-planet-card-wf-badge';
          badge.title = wfName;
          badge.addEventListener('click', e => { e.stopPropagation(); goToArchetype(slug); });
          const img = document.createElement('img');
          img.className = 'star-chart-planet-card-wf-icon';
          img.src = warframeIconUrl(slug);
          img.alt = '';
          img.loading = 'lazy';
          badge.appendChild(img);
          const name = document.createElement('span');
          name.className = 'star-chart-planet-card-wf-name';
          name.textContent = wfName;
          badge.appendChild(name);
          wfWrap.appendChild(badge);
        });
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
    const nodes = planetNodesFiltered(planet, filters, search);
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
  list.className = 'resource-list is-grid-3col';
  // Sort planet resources alphabetically, filter out spoiler-locked when toggle is off.
  // planetResourceSlugs() unions the explicit list with every resource hosted by
  // an open-world region under this planet (e.g. Orb Vallis for Venus).
  const showSpoilers = state.starChart.showSpoilers;
  const sorted = planetResourceSlugs(planet).filter(s => {
    const r = RESOURCES[s];
    if (!r) return false;
    if (!showSpoilers && resourceIsSpoiler(r)) return false;
    return true;
  }).slice().sort((a, b) => resourceName(a).localeCompare(resourceName(b)));
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

  const body = document.createElement('div');
  body.className = 'resource-list-item-body';

  const text = document.createElement('span');
  text.className = 'resource-list-item-name';
  text.textContent = resourceName(slug);
  body.appendChild(text);

  const tags = document.createElement('div');
  tags.className = 'resource-list-item-tags';

  if (rarity) {
    const rTag = document.createElement('span');
    rTag.className = 'resource-list-item-tag is-rarity';
    rTag.textContent = rarityName(r.rarity);
    tags.appendChild(rTag);
  }

  if (r.location && SC_LOCATIONS[r.location]) {
    const loc = document.createElement('span');
    loc.className = 'resource-list-item-tag is-location';
    loc.style.setProperty('--location-color', locationColor(r.location));
    loc.textContent = locationName(r.location);
    tags.appendChild(loc);
  }

  if (Array.isArray(r.sources)) {
    r.sources.forEach(srcKey => {
      if (!SC_SOURCES[srcKey]) return;
      const s = document.createElement('span');
      s.className = 'resource-list-item-tag is-source';
      s.textContent = sourceName(srcKey);
      tags.appendChild(s);
    });
  }

  body.appendChild(tags);
  item.appendChild(body);

  item.addEventListener('click', () => openResourceModal(slug));
  return item;
}

function buildNodeSectionHeader(section) {
  const header = document.createElement('div');
  header.className = 'star-chart-node-section-header';
  if (section.location) {
    // Open-world sections (Plains / Orb Vallis / Cambion Drift) theme the
    // header with the canonical location color from SC_LOCATIONS.
    header.style.setProperty('--section-color', locationColor(section.location));
  } else if (section.factionOverride) {
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

// Archwing mission indicator icon (local asset). CSS forces it white + adds
// the neon glow tinted by the node's mission-type color.
const ARCHWING_ICON = 'assets/icons/star-chart/archwing.png';

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
  name.textContent = nodeName(node);
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
  // Archwing indicator — white glyph in a neon ring tinted by the node's
  // mission-type color, sitting just right of the mission-type tag.
  if (node.archwing) {
    const aw = document.createElement('span');
    aw.className = 'star-chart-node-archwing';
    aw.title = 'Archwing';
    aw.setAttribute('aria-label', 'Archwing');
    const awImg = document.createElement('img');
    awImg.src = ARCHWING_ICON;
    awImg.alt = '';
    awImg.loading = 'lazy';
    aw.appendChild(awImg);
    typeWrap.appendChild(aw);
  }
  row.appendChild(typeWrap);

  const lvl = document.createElement('span');
  lvl.className = 'star-chart-node-level';
  // Hubs (e.g. Höllvania Central Mall) have no level — leave the pill empty to
  // keep the row grid aligned rather than showing "Lv undefined".
  lvl.textContent = node.levelRange ? `Lv ${node.levelRange}` : '';
  row.appendChild(lvl);

  // Drop column — any node that drops a warframe gets a boss pill (if it has a
  // boss) + the warframe icon/name beside it. Other boss nodes just get the
  // pill. Covers assassinations and special-system drops (Höllvania Stage
  // Defense → Temple, Central Mall → Cyte-09, Descendia → Uriel, etc.).
  if (node.warframeDrop) {
    const dropWrap = document.createElement('div');
    dropWrap.className = 'star-chart-node-drop-wrap';
    if (node.boss) {
      const bossPill = document.createElement('span');
      bossPill.className = 'star-chart-node-drop';
      bossPill.textContent = node.boss;
      dropWrap.appendChild(bossPill);
    }
    warframeDropSlugs(node.warframeDrop).forEach(slug => {
      const wfName = ALL_WARFRAMES.find(w => w.toLowerCase() === slug) || (slug.charAt(0).toUpperCase() + slug.slice(1));
      const wf = document.createElement('span');
      wf.className = 'star-chart-node-warframe';
      wf.title = wfName;
      wf.addEventListener('click', e => { e.stopPropagation(); goToArchetype(slug); });
      const img = document.createElement('img');
      img.className = 'star-chart-node-warframe-icon';
      img.src = warframeIconUrl(slug);
      img.alt = '';
      img.loading = 'lazy';
      wf.appendChild(img);
      const wfStrong = document.createElement('strong');
      wfStrong.textContent = wfName;
      wf.appendChild(wfStrong);
      dropWrap.appendChild(wf);
    });
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

  // Recommended farm — explicit `recommendedFarm` wins; otherwise derive a link
  // to the matching open-world node straight from the resource's source tags.
  const farm = r.recommendedFarm || deriveOpenWorldFarm(r);
  if (farm) {
    const farmSec = document.createElement('div');
    farmSec.className = 'resource-modal-section';
    const farmLabel = document.createElement('p');
    farmLabel.className = 'resource-modal-section-label';
    farmLabel.textContent = t('resource_modal_recommended_farm');
    farmSec.appendChild(farmLabel);

    const farmBox = document.createElement('div');
    farmBox.className = 'resource-modal-farm';
    const targetPlanet = getPlanet(farm.planet);
    const targetNode = findNode(farm.planet, farm.node);
    if (targetPlanet && targetNode) {
      const linkBtn = document.createElement('button');
      linkBtn.type = 'button';
      linkBtn.className = 'resource-modal-farm-link';
      linkBtn.textContent = `${planetName(targetPlanet)} / ${nodeName(targetNode)} (${missionTypeName(targetNode.type)})`;
      linkBtn.addEventListener('click', () => {
        closeResourceModal();
        goToStarChart(farm.planet, [targetNode.type]);
      });
      farmBox.appendChild(linkBtn);
    }
    const noteText = state.locale === 'pt-BR' ? farm.notePt : farm.noteEn;
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
applyPath(window.location.pathname);
window.addEventListener('popstate', () => applyPath(window.location.pathname));

function setupTabNav() {
  // Mobile hamburger: toggles the nav drawer (.header-nav). Closes when a nav
  // item is tapped or when clicking outside. CSS-gated to mobile, so on desktop
  // the toggle is hidden and the drawer is always an inline row — inert here.
  const navToggle = document.getElementById('nav-toggle');
  const headerNav = document.getElementById('header-nav');
  const closeNav = () => {
    headerNav?.classList.remove('open');
    navToggle?.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  };
  navToggle?.addEventListener('click', () => {
    const open = headerNav?.classList.toggle('open');
    navToggle.classList.toggle('open', !!open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  headerNav?.addEventListener('click', (e) => {
    if (e.target.closest('.nav-button')) closeNav();
  });
  document.addEventListener('click', (e) => {
    if (!headerNav?.classList.contains('open')) return;
    if (e.target.closest('#header-nav') || e.target.closest('#nav-toggle')) return;
    closeNav();
  });

  // Idioma + créditos (.header-right): no desktop ficam no rodapé (alinhados à
  // direita) pra liberar espaço no topo; no mobile voltam pro header. Mover o nó
  // preserva os listeners (já ligados por ID no boot). matchMedia = breakpoint do drawer.
  const headerRight = document.querySelector('.header-right');
  const headerInner = document.querySelector('.header-inner');
  const footerInner = document.getElementById('footer-inner');
  if (headerRight && headerInner && footerInner) {
    const mqMobile = window.matchMedia('(max-width: 600px)');
    const placeHeaderRight = () => {
      if (mqMobile.matches) {
        // Mobile: header-right precisa ser o último filho do header-inner (3ª coluna do grid).
        if (headerRight.parentElement !== headerInner) headerInner.appendChild(headerRight);
      } else if (headerRight.parentElement !== footerInner) {
        footerInner.appendChild(headerRight);
      }
    };
    placeHeaderRight();
    mqMobile.addEventListener('change', placeHeaderRight);
  }

  document.getElementById('glossary-btn')?.addEventListener('click', () => { selectTab('glossary'); pushPath(); });
  document.getElementById('rivens-btn')?.addEventListener('click', () => { selectTab('rivens'); pushPath(); });
  document.getElementById('relics-btn')?.addEventListener('click', () => { selectTab('relics'); pushPath(); });
  document.getElementById('star-chart-btn')?.addEventListener('click', () => { selectTab('star-chart'); pushPath(); });
  document.getElementById('tutorials-btn')?.addEventListener('click', () => { selectTab('tutorials'); pushPath(); });
  // Selecting an archetype from the dropdown or the bar should bring us back to that tab.
  document.getElementById('archetype-btn')?.addEventListener('click', () => {
    if (state.tab !== 'archetypes') { selectTab('archetypes'); pushPath(); }
  });
  document.getElementById('archetype-bar')?.addEventListener('click', () => {
    if (state.tab !== 'archetypes') { selectTab('archetypes'); pushPath(); }
  });

  [0, 1].forEach(rollIdx => {
    document.getElementById(`riven-evaluate-btn-${rollIdx}`)?.addEventListener('click', () => evaluateRiven(rollIdx));
    document.getElementById(`riven-add-stat-btn-${rollIdx}`)?.addEventListener('click', () => addRivenStatSlot(rollIdx));
    document.getElementById(`riven-clear-btn-${rollIdx}`)?.addEventListener('click', () => resetRivenForm(rollIdx));
  });
  setupRivenUploadEvents();
  setupWeaponPickerEvents();
  setupCreditsEvents();
  setupContactPanel();
  setupDonateModal();
  setupHelminthSecModal();
  setupLightboxEvents();
  setupQuestModalEvents();
  renderQuestsSection();
  renderStarChartGlossary();
  renderMrSection();
  renderNightwaveSection();
  renderSortieSection();
  renderArbitrationSection();
  renderSteelPathSection();
  renderCircuitSection();
  renderSyndicateSection();
  renderCritsSection();
  renderRotationsSection();
  renderMissionTypesSection();
  renderModdingSection();
  renderFormaSection();
  renderRivensSection();
  renderArcanesSection();
  renderHelminthSection();
  renderArchonHuntsSection();
  renderArchonShardsSection();
  renderElementOrder();
  renderGlossaryToc();
  applyTermTipsToGlossary();
  setupGlossarySearch();
  setupStarChartSearch();
  setupResourceModalEvents();
}

// Fold acento+caixa preservando alinhamento 1:1 por caractere (cada char precomposto
// vira 1 char base), pra mapear o índice do match de volta ao texto original.
function foldForHighlight(s) {
  return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}

function clearGlossaryHighlights(root) {
  root.querySelectorAll('mark.glossary-hl').forEach(m => {
    m.replaceWith(document.createTextNode(m.textContent));
  });
  // fecha <details> aninhados que a busca abriu só pra mostrar um highlight
  root.querySelectorAll('details[data-glossary-hl-open]').forEach(d => {
    d.open = false;
    delete d.dataset.glossaryHlOpen;
  });
  root.normalize();
}

// Envolve ocorrências de `rawQuery` (acento/caixa-insensível) em <mark> nos nós de
// texto de `el`. Pula nós onde o fold muda o comprimento (alinhamento quebraria).
function highlightGlossaryMatches(el, rawQuery) {
  if (!el) return;
  const q = foldForHighlight(rawQuery).trim();
  if (!q) return;
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const nodes = [];
  for (let n = walker.nextNode(); n; n = walker.nextNode()) nodes.push(n);
  nodes.forEach(node => {
    const text = node.nodeValue;
    const folded = foldForHighlight(text);
    if (folded.length !== text.length) return;   // alinhamento não-1:1 → não destaca
    let idx = folded.indexOf(q);
    if (idx === -1) return;
    const frag = document.createDocumentFragment();
    let cursor = 0;
    while (idx !== -1) {
      if (idx > cursor) frag.appendChild(document.createTextNode(text.slice(cursor, idx)));
      const mark = document.createElement('mark');
      mark.className = 'glossary-hl';
      mark.textContent = text.slice(idx, idx + q.length);
      frag.appendChild(mark);
      cursor = idx + q.length;
      idx = folded.indexOf(q, cursor);
    }
    if (cursor < text.length) frag.appendChild(document.createTextNode(text.slice(cursor)));
    node.parentNode.replaceChild(frag, node);
  });
}

function setupGlossarySearch() {
  const input = document.getElementById('glossary-search-input');
  const clearBtn = document.getElementById('glossary-search-clear');
  const container = document.getElementById('glossary-sections');
  if (!input || !container) return;

  const sections = Array.from(container.querySelectorAll('.glossary-section'));
  const categories = Array.from(container.querySelectorAll('.glossary-category'));

  // Esconde o divider de categoria se nenhuma seção até o próximo divider estiver visível.
  const updateCategories = () => {
    categories.forEach(cat => {
      let anyVisible = false;
      for (let el = cat.nextElementSibling; el && !el.classList.contains('glossary-category'); el = el.nextElementSibling) {
        if (el.classList.contains('glossary-section') && !el.classList.contains('hidden')) { anyVisible = true; break; }
      }
      cat.classList.toggle('hidden', !anyVisible);
    });
  };

  const toc = document.getElementById('glossary-toc');

  const applyFilter = () => {
    const raw = input.value.trim();
    const q = normalizeForMatch(raw);
    clearBtn?.classList.toggle('hidden', raw.length === 0);
    // o índice só faz sentido na visão completa — esconde durante a busca
    toc?.classList.toggle('hidden', q.length > 0);

    if (!q) {
      sections.forEach(s => {
        s.classList.remove('hidden');
        clearGlossaryHighlights(s);
        if (s.dataset.glossaryAutoOpen === '1') { s.open = false; delete s.dataset.glossaryAutoOpen; }
      });
      categories.forEach(c => c.classList.remove('hidden'));
      return;
    }

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
      clearGlossaryHighlights(s);
      if (match) {
        highlightGlossaryMatches(titleEl, raw);
        // destaca em todo o corpo (inclui o conteúdo rico renderizado: dt/dd/li/spans),
        // não só nos <p> — assim termos como "Incursões" no Steel Path são marcados.
        if (bodyEl) {
          highlightGlossaryMatches(bodyEl, raw);
          // abre <details> aninhados (ex.: "Warframes com augments aqui" nos
          // cards de sindicato) que contenham um highlight, pra a marca aparecer
          bodyEl.querySelectorAll('details').forEach(d => {
            if (!d.open && d.querySelector('mark.glossary-hl')) {
              d.open = true;
              d.dataset.glossaryHlOpen = '1';
            }
          });
        }
        if (!s.open) { s.open = true; s.dataset.glossaryAutoOpen = '1'; }
      } else if (s.dataset.glossaryAutoOpen === '1') {
        s.open = false; delete s.dataset.glossaryAutoOpen;
      }
    });
    updateCategories();
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
  renderRivenWeaponBtn(0);
  renderRivenWeaponBtn(1);
  renderRivenCategoryPills();
  renderRivenStatRows(0);
  renderRivenStatRows(1);
  renderRivenResult();
  renderRivenImageSection(0);
  renderRivenImageSection(1);
}

function renderRivenImageSection(rollIdx) {
  const section = document.getElementById(`riven-image-section-${rollIdx}`);
  if (!section) return;

  const zone       = document.getElementById(`riven-upload-zone-${rollIdx}`);
  const preview    = document.getElementById(`riven-image-preview-${rollIdx}`);
  const previewImg = document.getElementById(`riven-image-preview-img-${rollIdx}`);
  const statusEl   = document.getElementById(`riven-ocr-status-${rollIdx}`);
  const statusText = document.getElementById(`riven-ocr-status-text-${rollIdx}`);
  const banner     = document.getElementById(`riven-ocr-banner-${rollIdx}`);

  const roll = state.riven.rolls[rollIdx];
  const s = roll.imageState;
  const hasImage = !!roll.imagePreviewUrl;

  zone.classList.toggle('hidden', hasImage);
  preview.classList.toggle('hidden', !hasImage);
  if (hasImage && previewImg.src !== roll.imagePreviewUrl) {
    previewImg.src = roll.imagePreviewUrl;
  }

  const busy = (s === 'loading_lib' || s === 'processing');
  statusEl.classList.toggle('hidden', !busy);
  if (busy) {
    statusText.textContent = s === 'loading_lib'
      ? t('riven_ocr_loading_lib')
      : t('riven_ocr_processing');
    updateRivenOcrProgressUi(rollIdx);
  }

  banner.classList.remove('error', 'success');
  if (s === 'success') {
    banner.classList.add('success');
    let msg = t('riven_ocr_success').replace('{n}', roll.imageDetectedCount);
    if (roll.weaponMismatch) {
      msg += ' · ' + t('riven_ocr_weapon_locked').replace('{weapon}', roll.weaponMismatch);
    }
    banner.textContent = msg;
    banner.classList.remove('hidden');
  } else if (s === 'error') {
    banner.classList.add('error');
    let key = 'riven_ocr_failed';
    if (roll.imageError === 'no_stats') key = 'riven_ocr_no_stats';
    else if (roll.imageError === 'load_failed') key = 'riven_ocr_load_failed';
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

function renderRivenStatRows(rollIdx) {
  const list = document.getElementById(`riven-stat-list-${rollIdx}`);
  if (!list) return;
  list.innerHTML = '';

  const roll = state.riven.rolls[rollIdx];
  for (let i = 0; i < roll.slots; i++) {
    list.appendChild(buildRivenStatRow(rollIdx, i));
  }

  const addBtn = document.getElementById(`riven-add-stat-btn-${rollIdx}`);
  if (addBtn) addBtn.classList.toggle('hidden', roll.slots >= 4);
}

function addRivenStatSlot(rollIdx) {
  const roll = state.riven.rolls[rollIdx];
  if (roll.slots >= 4) return;
  roll.slots += 1;
  const idx = roll.slots - 1;
  roll.stats[idx] = { slug: null, value: '' };
  roll.result = null;
  roll.warning = null;
  renderRivenStatRows(rollIdx);
}

function removeRivenStatSlot(rollIdx, index) {
  const roll = state.riven.rolls[rollIdx];
  if (roll.slots <= 2) return;
  for (let i = index; i < roll.slots - 1; i++) {
    roll.stats[i] = roll.stats[i + 1];
  }
  roll.stats[roll.slots - 1] = { slug: null, value: '' };
  roll.slots -= 1;
  roll.result = null;
  roll.warning = null;
  renderRivenStatRows(rollIdx);
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
  // Stats inversos (recoil): "lower is better" — um valor POSITIVO (+recoil = mais
  // recuo) é o efeito NEGATIVO/curse; um valor negativo (−recoil) é o efeito positivo.
  const neg = v < 0;
  return (def && def.inverse) ? !neg : neg;
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

function buildRivenStatRow(rollIdx, index) {
  const roll = state.riven.rolls[rollIdx];
  const slot = roll.stats[index];

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
    state.riven.rolls[rollIdx].stats[index].slug = sel.value || null;
    state.riven.rolls[rollIdx].warning = null;
    renderRivenStatRows(rollIdx);
  });

  const valueWrap = document.createElement('div');
  valueWrap.className = 'riven-stat-value-wrap';

  const input = document.createElement('input');
  input.className = 'riven-stat-value';
  input.type = 'number';
  input.step = '0.1';
  input.placeholder = t('riven_value_placeholder');
  input.value = slot.value;
  input.addEventListener('input', () => {
    state.riven.rolls[rollIdx].stats[index].value = input.value;
    row.classList.toggle('is-negative', isStatNegative(state.riven.rolls[rollIdx].stats[index]));
  });
  valueWrap.appendChild(input);

  const unit = document.createElement('span');
  unit.className = 'riven-stat-unit';
  unit.textContent = rivenStatUnit(slot.slug);
  valueWrap.appendChild(unit);
  row.appendChild(valueWrap);
  row.appendChild(sel);

  if (roll.slots > 2) {
    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.className = 'riven-stat-remove';
    removeBtn.textContent = '−';
    removeBtn.title = t('riven_remove_stat');
    removeBtn.setAttribute('aria-label', t('riven_remove_stat'));
    removeBtn.addEventListener('click', () => removeRivenStatSlot(rollIdx, index));
    row.appendChild(removeBtn);
  }

  return row;
}

function renderRivenResult() {
  renderRivenResultFor(0);
  renderRivenResultFor(1);
}

function renderRivenResultFor(rollIdx) {
  const panel = document.getElementById(`riven-result-${rollIdx}`);
  if (!panel) return;
  const roll = state.riven.rolls[rollIdx];
  const result = roll.result;
  const warning = roll.warning;

  if (!result && !warning) {
    panel.classList.add('hidden');
    return;
  }

  if (warning) {
    panel.classList.remove('hidden');
    document.getElementById(`riven-score-number-${rollIdx}`).textContent = '—';
    const verdictEl = document.getElementById(`riven-score-verdict-${rollIdx}`);
    verdictEl.textContent = warning === 'duplicate' ? t('riven_warn_duplicate') : t('riven_warn_pick_stat');
    verdictEl.style.color = '#d14545';
    document.getElementById(`riven-breakdown-${rollIdx}`).innerHTML = '';
    panel.style.removeProperty('--neon-color');
    return;
  }

  panel.classList.remove('hidden');
  panel.style.setProperty('--neon-color', result.verdict.color);
  document.getElementById(`riven-score-number-${rollIdx}`).textContent = result.score.toFixed(1);
  const verdictEl = document.getElementById(`riven-score-verdict-${rollIdx}`);
  verdictEl.textContent = `${result.verdict.emoji} ${t('riven_verdict_' + result.verdict.key)}`;
  verdictEl.style.color = result.verdict.color;

  const list = document.getElementById(`riven-breakdown-${rollIdx}`);
  list.innerHTML = '';

  // Linha de meta: disposition (●1–5) + força do roll (MagnitudeFactor) + Incarnon.
  if (result.disposition || result.rollStrength != null || result.incarnonMode) {
    const meta = document.createElement('div');
    meta.className = 'riven-result-meta';
    const parts = [];
    if (result.disposition) parts.push(`${t('riven_disposition')}: ${dispositionLabel(result.disposition)} (${result.disposition.toFixed(2)})`);
    if (result.rollStrength != null) parts.push(`${t('riven_roll_strength')}: ${Math.round(result.rollStrength * 100)}%`);
    if (result.incarnonMode) parts.push('⚡ Incarnon');
    meta.textContent = parts.join('  ·  ');
    list.appendChild(meta);
  }

  const weaponObj = result.weapon ? resolvedWeapon(result.weapon.slug) : null;

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
  renderRivenRecommended(weaponObj, rollIdx);
}

function renderRivenRecommended(weapon, rollIdx) {
  const list = document.getElementById(`riven-breakdown-${rollIdx}`);
  if (!list) return;

  // Resolve to the Incarnon form when the toggle is on, so the recommended
  // stats panel matches what scoreRiven actually evaluates (e.g. Torid shows
  // status in base form, crit in Incarnon form). Without this the panel would
  // always display the base weapon's recommendations.
  if (weapon) weapon = resolvedWeapon(weapon.slug) || weapon;

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
        slug, tier: effectiveNegTier(slug, weapon), side: 'neg',
      }))));
    }

    const wastedSlugs = Object.keys(wasted);
    if (wastedSlugs.length > 0) {
      grid.appendChild(buildRecSection(t('riven_rec_wasted_pos'), wastedSlugs.map(slug => ({
        slug, tier: wasted[slug], side: 'pos', wasted: true,
      }))));
    }
  } else {
    // Universal generic recommendations.
    // Filter avoidNegative to exclude stats already listed as ideal positives — otherwise
    // the same stat (CC, CD, MS, Damage) appears twice which is confusing.
    const positiveSet = new Set(UNIVERSAL_RECS.positive);
    const avoidOnly = UNIVERSAL_RECS.avoidNegative.filter(s => !positiveSet.has(s));

    grid.appendChild(buildRecSection(t('riven_rec_ideal_pos'), UNIVERSAL_RECS.positive.map(slug => ({
      slug, tier: RIVEN_STATS[slug]?.posTier, side: 'pos',
    }))));
    grid.appendChild(buildRecSection(t('riven_rec_free_neg'), UNIVERSAL_RECS.freeNegative.map(slug => ({
      slug, tier: 'beneficial', side: 'neg',
    }))));
    if (avoidOnly.length > 0) {
      grid.appendChild(buildRecSection(t('riven_rec_avoid_neg'), avoidOnly.map(slug => ({
        slug, tier: 'harmful', side: 'neg', avoid: true,
      }))));
    }
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
  state.riven.rolls.forEach(roll => {
    roll.stats.forEach(s => { s.slug = null; });
    roll.result = null;
    roll.warning = null;
    if (roll.weapon) {
      const w = weaponBySlug(roll.weapon);
      if (w && w.category !== cat) {
        roll.weapon = null;
        roll.weaponAutoDetected = false;
      }
    }
  });
  if (state.riven.rolls.every(r => !r.weapon)) {
    state.riven.incarnonMode = false;
  }
  renderRivens();
}

function evaluateRiven(rollIdx) {
  const roll = state.riven.rolls[rollIdx];
  const active = roll.stats.slice(0, roll.slots);

  if (active.some(s => !s.slug)) {
    roll.warning = 'pick_stat';
    roll.result = null;
    renderRivenResult();
    return;
  }
  const slugs = active.map(s => s.slug);
  if (new Set(slugs).size !== slugs.length) {
    roll.warning = 'duplicate';
    roll.result = null;
    renderRivenResult();
    return;
  }

  roll.warning = null;
  roll.result = scoreRiven({ stats: active, weaponSlug: roll.weapon });
  renderRivenResult();
}
selectArchetype(state.archetype);
