/* =========================================================
   Tutorials — view toggle (index landing <-> tutorial detail)
   Standalone: escuta click nos cards e no back button.
   ========================================================= */
(function () {
  'use strict';

  function showIndex() {
    document.getElementById('tut-view-index')?.classList.remove('hidden');
    document.querySelectorAll('#tab-tutorials .tut-detail').forEach(el => el.classList.add('hidden'));
    // Rola pro topo do tab
    const container = document.getElementById('tab-tutorials');
    if (container) container.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function openTutorial(slug) {
    if (!slug) return;
    const detail = document.getElementById('tut-view-detail-' + slug);
    if (!detail) return;
    document.getElementById('tut-view-index')?.classList.add('hidden');
    document.querySelectorAll('#tab-tutorials .tut-detail').forEach(el => el.classList.add('hidden'));
    detail.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  // --- Search on the landing page ---------------------------------------

  // Accent-folded, lowercase for match. Mirrors the site's normalize style.
  function norm(s) {
    return (s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  }

  // Cache the original text nodes we highlight so a cleared search restores them.
  const ORIGINALS = new WeakMap();

  function stashOriginal(el) {
    if (!ORIGINALS.has(el)) ORIGINALS.set(el, el.textContent);
  }
  function restoreOriginal(el) {
    if (ORIGINALS.has(el)) el.textContent = ORIGINALS.get(el);
  }

  function highlight(el, queryNorm) {
    stashOriginal(el);
    const original = ORIGINALS.get(el);
    if (!queryNorm) { el.textContent = original; return; }
    const originalNorm = norm(original);
    const idx = originalNorm.indexOf(queryNorm);
    if (idx === -1) { el.textContent = original; return; }
    // The normalized string has the same length as the original in Latin scripts
    // (NFD strips diacritics, which are combining chars → they'd shift the offset
    // if present). Guard: rebuild without mark if lengths diverge.
    if (originalNorm.length !== original.length) { el.textContent = original; return; }
    const before = original.slice(0, idx);
    const match  = original.slice(idx, idx + queryNorm.length);
    const after  = original.slice(idx + queryNorm.length);
    el.innerHTML = '';
    el.append(document.createTextNode(before));
    const mark = document.createElement('mark');
    mark.className = 'tut-hl';
    mark.textContent = match;
    el.appendChild(mark);
    el.append(document.createTextNode(after));
  }

  function applyTutSearch(rawQuery) {
    const index = document.getElementById('tut-view-index');
    if (!index) return;
    const q = norm(rawQuery.trim());
    const cards = index.querySelectorAll('.tut-card');
    const sections = index.querySelectorAll('.tut-index-section');
    const empty = document.getElementById('tut-search-empty');
    const clearBtn = document.getElementById('tut-search-clear');

    let visibleTotal = 0;
    cards.forEach(card => {
      const titleEl = card.querySelector('.tut-card-title');
      const descEl  = card.querySelector('.tut-card-desc');
      const tagEls  = card.querySelectorAll('.tut-card-tag');

      // Restore originals before we decide (keeps highlight fresh between edits).
      if (titleEl) restoreOriginal(titleEl);
      if (descEl)  restoreOriginal(descEl);

      if (!q) {
        card.classList.remove('is-hidden');
        visibleTotal++;
        return;
      }
      const titleN = norm(titleEl?.textContent);
      const descN  = norm(descEl?.textContent);
      const tagsN  = Array.from(tagEls).map(t => norm(t.textContent)).join(' ');
      const match = titleN.includes(q) || descN.includes(q) || tagsN.includes(q);
      card.classList.toggle('is-hidden', !match);
      if (match) {
        visibleTotal++;
        if (titleEl) highlight(titleEl, q);
        if (descEl)  highlight(descEl,  q);
      }
    });

    // Hide a whole section if all its cards are hidden.
    sections.forEach(sec => {
      const anyVisible = Array.from(sec.querySelectorAll('.tut-card')).some(c => !c.classList.contains('is-hidden'));
      sec.classList.toggle('is-hidden', !anyVisible);
    });

    if (empty)    empty.classList.toggle('hidden', !q || visibleTotal > 0);
    if (clearBtn) clearBtn.classList.toggle('hidden', !q);
  }

  function setupTutSearch() {
    const input = document.getElementById('tut-search-input');
    const clear = document.getElementById('tut-search-clear');
    if (!input) return;

    input.addEventListener('input', () => applyTutSearch(input.value));
    if (clear) {
      clear.addEventListener('click', () => {
        input.value = '';
        applyTutSearch('');
        input.focus();
      });
    }
  }

  function bind() {
    const tab = document.getElementById('tab-tutorials');
    if (!tab) return;

    // Card clicks → open the tutorial (ignore locked cards)
    tab.querySelectorAll('.tut-card[data-open-tutorial]').forEach(card => {
      if (card.classList.contains('is-locked')) return;
      card.addEventListener('click', () => {
        openTutorial(card.getAttribute('data-open-tutorial'));
      });
    });

    // Back-to-index links inside any detail view
    tab.querySelectorAll('[data-back-to-index]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        showIndex();
      });
    });

    setupTutSearch();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind);
  } else {
    bind();
  }
})();
