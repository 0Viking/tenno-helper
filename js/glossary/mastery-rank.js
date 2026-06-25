function renderMrSection() {
  const el = document.getElementById('mr-gloss');
  if (!el) return;
  const loc = state.locale === 'pt-BR' ? 'pt-BR' : 'en';
  const L = o => (o && (o[loc] || o.en)) || '';
  const esc = relicEsc;

  const earn = MR_EARN.map(m =>
    `<div class="mr-earn-card"><span class="mr-earn-xp">${esc(m.xp)}</span>`
    + `<span class="mr-earn-t">${esc(L(m.t))}</span>`
    + `<span class="mr-earn-d">${esc(L(m.d))}</span></div>`
  ).join('');

  const perks = MR_PERKS.map(p =>
    `<div class="sc-term"><dt>${esc(L(p.t))}</dt><dd>${esc(L(p.d))}</dd></div>`
  ).join('');

  const tips = MR_TIPS.map(t => `<li>${esc(L(t))}</li>`).join('');

  const T = {
    earn:  { en: 'How you earn MR',       'pt-BR': 'Como você ganha MR' },
    earnS: { en: 'Each unique item grants its mastery only once, the first time you rank it.', 'pt-BR': 'Cada item único dá o mastery só uma vez, na primeira vez que você o ranqueia.' },
    perks: { en: 'What MR unlocks',        'pt-BR': 'O que o MR desbloqueia' },
    test:  { en: 'The Mastery Rank test',  'pt-BR': 'O teste de Maestria' },
    testD: { en: 'Each rank-up needs a solo test. You can retry it as many times as you want — there’s no penalty for failing. Only passing a test locks you out for 24 hours before you can attempt the next one.',
             'pt-BR': 'Cada rank-up exige um teste solo. Você pode tentar quantas vezes quiser — não há punição por falhar. Só passar num teste trava por 24 horas até você poder tentar o próximo.' },
    ranks: { en: 'MR runs 0–30; beyond that are Legendary Ranks (LR1+). Each rank needs more XP (2 500 × rank²).',
             'pt-BR': 'O MR vai de 0 a 30; acima disso vêm os Legendary Ranks (LR1+). Cada rank exige mais XP (2.500 × rank²).' },
    tips:  { en: 'Good to know',           'pt-BR': 'Bom saber' },
  };

  el.innerHTML =
    `<h4 class="sc-h">${esc(L(T.earn))}</h4>`
    + `<div class="mr-earn">${earn}</div>`
    + `<p class="sc-sub">${esc(L(T.earnS))}</p>`
    + `<h4 class="sc-h">${esc(L(T.perks))}</h4>`
    + `<dl class="sc-terms">${perks}</dl>`
    + `<h4 class="sc-h">${esc(L(T.test))}</h4>`
    + `<div class="sc-jstep sc-jstep-full"><span class="sc-jstep-d">${esc(L(T.testD))}</span></div>`
    + `<p class="sc-sub">${esc(L(T.ranks))}</p>`
    + `<h4 class="sc-h">${esc(L(T.tips))}</h4>`
    + `<ul class="sc-tips">${tips}</ul>`;
}

// ── Nightwave glossary section ───────────────────────────────────────────────

const NW_ACTS = [
  { v: '1 000', t: { en: 'Daily acts', 'pt-BR': 'Atos diários' },
    d: { en: 'A new one each day; each lasts 3 days. Quick, simple goals.', 'pt-BR': 'Um novo por dia; cada um dura 3 dias. Objetivos rápidos.' } },
  { v: '4 500', t: { en: 'Weekly acts', 'pt-BR': 'Atos semanais' },
    d: { en: '2 weekly + 3 permanent weekly. Refresh every Sunday.', 'pt-BR': '2 semanais + 3 permanentes. Renovam sábado às 21h (horário de Brasília).' } },
  { v: '7 000', t: { en: 'Elite weekly', 'pt-BR': 'Elite semanal' },
    d: { en: '2 per week — the hardest tier, the most Standing.', 'pt-BR': '2 por semana — o tier mais difícil, mais Reputação.' } },
];

const NW_DETAILS = [
  { t: { en: 'Ranks', 'pt-BR': 'Ranks' },
    d: { en: '30 ranks, 10 000 Standing each. Leftover Standing carries over.', 'pt-BR': '30 ranks, 10.000 de Reputação cada. O excedente acumula.' } },
  { t: { en: 'Prestige', 'pt-BR': 'Prestige' },
    d: { en: 'After rank 30, each Prestige rank grants 15 Cred.', 'pt-BR': 'Depois do rank 30, cada Prestige dá 15 Cred.' } },
  { t: { en: 'Rewards', 'pt-BR': 'Recompensas' },
    d: { en: 'Nitain, Forma, Catalysts/Reactors, Auras, Umbra Forma, slots and exclusive cosmetics — rarer at higher ranks.', 'pt-BR': 'Nitain, Forma, Catalisadores/Reatores, Auras, Forma Umbra, slots e cosméticos exclusivos — mais raros nos ranks altos.' } },
  { t: { en: 'Cred shop', 'pt-BR': 'Loja de Cred' },
    d: { en: 'Rank-ups grant Cred — spend it in the rotating Cred Offerings. Standing only ranks you up.', 'pt-BR': 'Subir de rank dá Cred — gaste nas Cred Offerings rotativas. Reputação só sobe o rank.' } },
  { t: { en: 'Season length', 'pt-BR': 'Duração da temporada' },
    d: { en: 'Each Mix runs about 3–5 months (recent ones ranged 3.5–5.5). A countdown appears when ~2 weeks remain.', 'pt-BR': 'Cada Mix dura cerca de 3 a 5 meses (os recentes variaram de 3,5 a 5,5). Um contador aparece quando faltam ~2 semanas.' } },
];

const NW_TIPS = [
  { en: 'Do your Weekly and Elite acts first — that’s where the Standing is.', 'pt-BR': 'Faça os Atos Semanais e Elite primeiro — é onde está a Reputação.' },
  { en: 'Cred is season-specific — spend it before the season ends.', 'pt-BR': 'O Cred é específico da temporada — gaste antes dela acabar.' },
  { en: 'Nightwave is always on; seasons rotate — currently Nora’s Mix: Time Tempests.', 'pt-BR': 'A Nightwave está sempre ativa; as temporadas giram — atualmente Nora’s Mix: Time Tempests.' },
];

