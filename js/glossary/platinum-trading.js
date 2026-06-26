// Glossário — Platinum & Trading. Moeda premium; o caminho f2p é trocar com jogadores.
// Dados da wiki (Platinum + Trading). warframe.market = comunidade (não oficial).
function renderPlatinumTradingSection() {
  const el = document.getElementById('platinum-trading-gloss');
  if (!el) return;
  const loc = state.locale === 'pt-BR' ? 'pt-BR' : 'en';
  const L = o => (o && (o[loc] || o.en)) || '';
  const esc = relicEsc;
  const W = 'https://wiki.warframe.com/images/';
  const platIco = `<img class="gloss-ico" src="${W}Platinum64.png?6022f" alt="" onerror="this.style.display='none'">`;

  const T = {
    what: { en: 'What platinum is', 'pt-BR': 'O que é a platina' },
    intro: { en: 'Platinum (plat) is the premium currency — bought with real money or earned by trading with other players. It buys cosmetics, Warframe/weapon slots, Market gear and rushes builds, and it’s what player trades use. It can’t be turned back into Credits. For new players, slots are the most useful early buy.', 'pt-BR': 'Platina (plat) é a moeda premium — comprada com dinheiro real ou ganha trocando com outros jogadores. Compra cosméticos, slots de Warframe/arma, itens do Mercado e acelera crafts, e é o que as trocas entre jogadores usam. Não dá pra converter de volta em Créditos. Pra quem começa, os slots são a compra mais útil no início.' },
    free: { en: 'Earning plat for free', 'pt-BR': 'Ganhar plat de graça' },
    freeText: { en: 'The free-to-play route is trading items to other players for plat.', 'pt-BR': 'O caminho free-to-play é trocar itens com outros jogadores por plat.' },
    can: { en: 'Tradeable', 'pt-BR': 'Pode trocar' },
    canText: { en: 'Prime parts & blueprints, mods (incl. rare and Rivens), Arcanes, Void Relics, Ayatan Sculptures/Stars, Captura scenes, fish, refined gems, dojo imprints.', 'pt-BR': 'Peças & diagramas Prime, mods (incl. raros e Rivens), Arcanos, Relíquias Void, Esculturas/Estrelas Ayatan, cenas de Captura, peixes, gemas refinadas, imprints de dojo.' },
    cant: { en: 'Not tradeable', 'pt-BR': 'Não troca' },
    cantText: { en: 'Credits, Endo, most resources, built/crafted gear and Warframes, Mastery Rank, Flawed/Umbra mods, and your starting/gifted platinum.', 'pt-BR': 'Créditos, Endo, a maioria dos recursos, equipamento já construído e Warframes, Nível de Maestria, mods Flawed/Umbra, e a platina inicial/de presente.' },
    how: { en: 'How trading works', 'pt-BR': 'Como trocar' },
    howText: { en: 'Trade at Maroo’s Bazaar (Mars), at a clan dojo Trading Post, or find partners in Trade chat. Each trade charges a Credit tax (paid by the receiver) plus a hub surcharge (+10% at Maroo’s, 0–100% at a dojo). Trades are final — they’re never reversed.', 'pt-BR': 'Troque no Maroo’s Bazaar (Marte), num Posto de Troca do dojo do clã, ou ache parceiros no chat de Trade. Cada troca cobra um imposto em Créditos (pago por quem recebe) mais uma sobretaxa do local (+10% no Maroo’s, 0–100% num dojo). Trocas são finais — nunca são revertidas.' },
    limits: { en: 'Trade limits', 'pt-BR': 'Limites de troca' },
    limitsText: { en: 'You need Mastery Rank 2 to trade at all, and your daily limit equals your Mastery Rank (MR 5 = 5 trades/day, resets 00:00 GMT). Trading Rivens needs both players at MR 8+.', 'pt-BR': 'Você precisa de Nível de Maestria 2 pra trocar, e seu limite diário é igual ao seu Nível de Maestria (MR 5 = 5 trocas/dia, reseta 00:00 GMT). Trocar Rivens exige os dois jogadores em MR 8+.' },
    market: { en: 'warframe.market', 'pt-BR': 'warframe.market' },
    marketText: { en: 'A community site (third-party, not official) everyone uses to check fair prices and find buyers/sellers before trading.', 'pt-BR': 'Um site da comunidade (de terceiros, não oficial) que todo mundo usa pra ver preços justos e achar quem compra/vende antes de trocar.' },
    tips: { en: 'New-player tips', 'pt-BR': 'Dicas pra quem começa' },
    tip1: { en: 'Sell duplicate Prime parts and spare Relics for your first plat.', 'pt-BR': 'Venda peças Prime duplicadas e Relíquias extras pra sua primeira plat.' },
    tip2: { en: 'Spend early plat on Warframe/weapon slots, not cosmetics.', 'pt-BR': 'Gaste a plat inicial em slots de Warframe/arma, não em cosméticos.' },
    tip3: { en: 'Trades can’t be undone — trade for items only, never promises or favors.', 'pt-BR': 'Trocas não voltam atrás — troque só por itens, nunca por promessas ou favores.' },
  };

  const tips = [T.tip1, T.tip2, T.tip3].map(t => `<li>${esc(L(t))}</li>`).join('');

  el.innerHTML =
    `<h4 class="sc-h">${esc(L(T.what))}</h4>`
    + `<div class="gloss-callout"><span class="gloss-callout-ico" aria-hidden="true">${platIco}</span><span class="gloss-callout-text">${esc(L(T.intro))}</span></div>`
    + `<h4 class="sc-h">${esc(L(T.free))}</h4>`
    + `<p class="sc-sub">${esc(L(T.freeText))}</p>`
    + `<dl class="sc-terms">`
    + `<div class="sc-term"><dt class="is-good">✓ ${esc(L(T.can))}</dt><dd>${esc(L(T.canText))}</dd></div>`
    + `<div class="sc-term"><dt class="is-bad">✕ ${esc(L(T.cant))}</dt><dd>${esc(L(T.cantText))}</dd></div>`
    + `</dl>`
    + `<h4 class="sc-h">${esc(L(T.how))}</h4>`
    + `<div class="gloss-callout"><span class="gloss-callout-ico" aria-hidden="true">🤝</span><span class="gloss-callout-text">${esc(L(T.howText))}</span></div>`
    + `<div class="gloss-callout"><span class="gloss-callout-ico" aria-hidden="true">🔢</span><span class="gloss-callout-text"><b>${esc(L(T.limits))}.</b> ${esc(L(T.limitsText))}</span></div>`
    + `<h4 class="sc-h">${esc(L(T.market))}</h4>`
    + `<div class="gloss-callout"><span class="gloss-callout-ico" aria-hidden="true">🌐</span><span class="gloss-callout-text">${esc(L(T.marketText))}</span></div>`
    + `<a class="sc-cta" href="https://warframe.market" target="_blank" rel="noopener">warframe.market →</a>`
    + `<h4 class="sc-h">${esc(L(T.tips))}</h4>`
    + `<ul class="sc-tips">${tips}</ul>`;
}
