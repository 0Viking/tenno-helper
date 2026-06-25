function goToGlossarySection(id) {
  if (typeof selectTab === 'function') selectTab('glossary');
  const sec = document.querySelector(`.glossary-section[data-id="${id}"]`);
  if (!sec) return;
  sec.open = true;
  // also reveal its category if hidden by a stale search filter
  sec.classList.remove('hidden');
  const cat = sec.previousElementSibling;
  requestAnimationFrame(() => sec.scrollIntoView({ behavior: 'smooth', block: 'start' }));
}

// Build the index from the DOM so labels stay in sync with the rendered
// (locale-aware) section titles. Walks #glossary-sections in order: each
// .glossary-category starts a group, each .glossary-section[data-id] is a link.
let _glossaryTocBound = false;
function renderGlossaryToc() {
  const toc = document.getElementById('glossary-toc');
  const root = document.getElementById('glossary-sections');
  if (!toc || !root) return;

  let html = '';
  let open = false;
  root.querySelectorAll(':scope > .glossary-category, :scope > .glossary-section[data-id]').forEach(node => {
    if (node.classList.contains('glossary-category')) {
      if (open) html += '</div></div>';
      const label = node.querySelector('.glossary-category-label');
      html += `<div class="glossary-toc-cat"><span class="glossary-toc-cat-label">${(label ? label.textContent : '').trim()}</span><div class="glossary-toc-links">`;
      open = true;
    } else {
      const id = node.getAttribute('data-id');
      const titleEl = node.querySelector('.glossary-section-title');
      const soon = node.classList.contains('glossary-section-soon');
      const title = (titleEl ? titleEl.textContent : id).trim();
      html += `<button type="button" class="glossary-toc-link${soon ? ' is-soon' : ''}" data-toc="${id}">${title}</button>`;
    }
  });
  if (open) html += '</div></div>';
  toc.innerHTML = html;

  if (!_glossaryTocBound) {
    toc.addEventListener('click', e => {
      const link = e.target.closest('[data-toc]');
      if (link) goToGlossarySection(link.getAttribute('data-toc'));
    });
    _glossaryTocBound = true;
  }
}

// ── Quest section ─────────────────────────────────────────────────────────────

