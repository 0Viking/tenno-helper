function renderQuestsSection() {
  const container = document.getElementById('quest-arcs-container');
  if (!container) return;
  const loc = state.locale === 'pt-BR' ? 'pt' : 'en';
  container.innerHTML = '';

  QUEST_ARCS.forEach(arc => {
    const section = document.createElement('div');
    section.className = 'quest-arc-section';

    const header = document.createElement('h3');
    header.className = 'quest-arc-header';
    header.textContent = arc.label[loc];
    section.appendChild(header);

    if (arc.subarcs) {
      arc.subarcs.forEach(subarc => {
        const subLabel = document.createElement('p');
        subLabel.className = 'quest-subarc-label';
        subLabel.textContent = subarc.label[loc];
        section.appendChild(subLabel);
        section.appendChild(buildQuestGrid(arc.key, subarc.key));
      });
    } else {
      section.appendChild(buildQuestGrid(arc.key, null));
    }

    container.appendChild(section);
  });
}

function buildQuestGrid(arcKey, subarc) {
  const loc = state.locale === 'pt-BR' ? 'pt' : 'en';
  const quests = QUESTS.filter(q => q.arc === arcKey && (subarc ? q.subarc === subarc : true));
  const grid = document.createElement('div');
  grid.className = 'quest-grid';

  quests.forEach(quest => {
    const card = document.createElement('div');
    card.className = 'quest-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.dataset.slug = quest.slug;

    const img = document.createElement('div');
    img.className = 'quest-card-img';
    img.style.backgroundImage = `url('${quest.image}')`;

    const overlay = document.createElement('div');
    overlay.className = 'quest-card-overlay';

    const name = document.createElement('span');
    name.className = 'quest-card-name';
    name.textContent = quest.name;

    overlay.appendChild(name);
    card.appendChild(img);
    card.appendChild(overlay);
    grid.appendChild(card);
  });

  return grid;
}

function openQuestModal(slug) {
  const quest = QUESTS.find(q => q.slug === slug);
  if (!quest) return;
  const loc = state.locale === 'pt-BR' ? 'pt' : 'en';

  document.getElementById('quest-modal-img').src = quest.image;
  document.getElementById('quest-modal-img').alt = quest.name;
  document.getElementById('quest-modal-title').textContent = quest.name;
  document.getElementById('quest-modal-desc').textContent = quest.desc[loc];

  // Pré-requisitos: lista (seção "Requirements" da wiki). Aceita array de strings
  // ou, legado, uma string única.
  const howEl = document.getElementById('quest-meta-how');
  howEl.innerHTML = '';
  const how = quest.howToGet[loc];
  if (Array.isArray(how)) {
    const ul = document.createElement('ul');
    ul.className = 'quest-req-list';
    how.forEach(r => { const li = document.createElement('li'); li.textContent = r; ul.appendChild(li); });
    howEl.appendChild(ul);
  } else {
    howEl.textContent = how;
  }

  // Recompensas: grade de ícones (estilo tela de fim de missão). Aceita array de
  // { name:{pt,en}, icon? } — sem icon vira célula de "desbloqueio" só com texto —
  // ou, legado, um objeto de texto { pt, en }.
  const rewardsWrap = document.getElementById('quest-modal-rewards-wrap');
  const rewardsGrid = document.getElementById('quest-modal-rewards');
  rewardsGrid.innerHTML = '';
  const rw = quest.rewards;
  if (Array.isArray(rw) && rw.length) {
    // recompensas com ícone primeiro (sort estável preserva a ordem dentro de cada grupo)
    const ordered = rw.slice().sort((a, b) => (b.icon ? 1 : 0) - (a.icon ? 1 : 0));
    ordered.forEach(item => {
      const cell = document.createElement('div');
      cell.className = 'quest-reward-cell' + (item.icon ? '' : ' quest-reward-unlock');
      const name = (item.name && (item.name[loc] || item.name.en)) || '';
      if (item.icon) {
        cell.style.backgroundImage = `url("${item.icon}")`;
      }
      const label = document.createElement('span');
      label.className = 'quest-reward-name';
      label.textContent = name;
      cell.appendChild(label);
      rewardsGrid.appendChild(cell);
    });
    rewardsWrap.classList.remove('hidden');
  } else if (rw && (rw.pt || rw.en)) {
    const p = document.createElement('p');
    p.className = 'quest-reward-legacy';
    p.textContent = rw[loc] || rw.en || '';
    rewardsGrid.appendChild(p);
    rewardsWrap.classList.remove('hidden');
  } else {
    rewardsWrap.classList.add('hidden');
  }

  const tagsEl = document.getElementById('quest-modal-tags');
  tagsEl.innerHTML = '';
  if (quest.mr > 0) {
    const tag = document.createElement('span');
    tag.className = 'glossary-tag';
    tag.textContent = t('quest_mr') + ' ' + quest.mr;
    tagsEl.appendChild(tag);
  }

  const modal = document.getElementById('quest-modal');
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

function closeQuestModal() {
  document.getElementById('quest-modal').classList.add('hidden');
  document.getElementById('quest-modal-img').src = '';
  document.body.classList.remove('modal-open');
}

function setupQuestModalEvents() {
  document.getElementById('quest-modal-backdrop')?.addEventListener('click', closeQuestModal);
  document.getElementById('quest-modal-close')?.addEventListener('click', closeQuestModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !document.getElementById('quest-modal')?.classList.contains('hidden')) {
      closeQuestModal();
    }
  });
  document.getElementById('quest-arcs-container')?.addEventListener('click', e => {
    const card = e.target.closest('.quest-card');
    if (card) openQuestModal(card.dataset.slug);
  });
  document.getElementById('quest-arcs-container')?.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.quest-card');
      if (card) { e.preventDefault(); openQuestModal(card.dataset.slug); }
    }
  });
}

// ─────────────────────────────────────────────────────────────────────────────

