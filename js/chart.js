function t(key) {
  const dict = STRINGS[state.locale] || STRINGS[DEFAULT_LOCALE];
  return dict[key] || STRINGS[DEFAULT_LOCALE][key] || key;
}

// ============== Radar chart (estático por enquanto) ==============

const STATS = [
  { key: 'dano',          angle: -Math.PI / 2,     color: '#e74c3c' },
  { key: 'sobrevivencia', angle: -Math.PI / 6,     color: '#3498db' },
  { key: 'suporte',       angle:  Math.PI / 6,     color: '#2ecc71' },
  { key: 'controle',      angle:  Math.PI / 2,     color: '#f39c12' },
  { key: 'furtividade',   angle:  5 * Math.PI / 6, color: '#9b59b6' },
  { key: 'complexidade',  angle:  7 * Math.PI / 6, color: '#ffffff' },
];

function statLabel(key) { return t('stat_' + key); }

const RADIUS = 180;
const RINGS = 10;
const MAX_VALUE = 5;
const LABEL_OFFSET = 28;
const SVG_NS = 'http://www.w3.org/2000/svg';
const svg = document.getElementById('radar');

function point(angle, r) {
  return { x: Math.cos(angle) * r, y: Math.sin(angle) * r };
}

function hexPoints(radius) {
  return STATS.map(s => {
    const p = point(s.angle, radius);
    return `${p.x.toFixed(2)},${p.y.toFixed(2)}`;
  }).join(' ');
}

function buildChart() {
  const defs = document.createElementNS(SVG_NS, 'defs');
  STATS.forEach((s, i) => {
    const next = STATS[(i + 1) % STATS.length];
    const grad = document.createElementNS(SVG_NS, 'linearGradient');
    grad.setAttribute('id', `grad-${i}`);
    grad.setAttribute('gradientUnits', 'userSpaceOnUse');

    const stop1 = document.createElementNS(SVG_NS, 'stop');
    stop1.setAttribute('offset', '0%');
    stop1.setAttribute('stop-color', s.color);
    const stop2 = document.createElementNS(SVG_NS, 'stop');
    stop2.setAttribute('offset', '100%');
    stop2.setAttribute('stop-color', next.color);
    grad.appendChild(stop1);
    grad.appendChild(stop2);
    defs.appendChild(grad);
  });
  svg.appendChild(defs);

  for (let i = 1; i <= RINGS; i++) {
    const r = (RADIUS / RINGS) * i;
    const poly = document.createElementNS(SVG_NS, 'polygon');
    poly.setAttribute('points', hexPoints(r));
    poly.setAttribute('class', 'grid-hex');
    svg.appendChild(poly);
  }

  STATS.forEach((s, i) => {
    const tri = document.createElementNS(SVG_NS, 'polygon');
    tri.setAttribute('class', 'data-triangle');
    tri.setAttribute('data-section', i);
    tri.setAttribute('fill', `url(#grad-${i})`);
    svg.appendChild(tri);
  });

  STATS.forEach(s => {
    const p = point(s.angle, RADIUS);
    const line = document.createElementNS(SVG_NS, 'line');
    line.setAttribute('x1', 0);
    line.setAttribute('y1', 0);
    line.setAttribute('x2', p.x.toFixed(2));
    line.setAttribute('y2', p.y.toFixed(2));
    line.setAttribute('class', 'spoke');
    svg.appendChild(line);
  });

  STATS.forEach((s, i) => {
    const vline = document.createElementNS(SVG_NS, 'line');
    vline.setAttribute('class', 'value-line');
    vline.setAttribute('data-stat', i);
    vline.setAttribute('stroke', s.color);
    vline.setAttribute('x1', 0);
    vline.setAttribute('y1', 0);
    vline.setAttribute('x2', 0);
    vline.setAttribute('y2', 0);
    svg.appendChild(vline);
  });

  STATS.forEach(s => {
    const p = point(s.angle, RADIUS + LABEL_OFFSET);
    const text = document.createElementNS(SVG_NS, 'text');
    text.setAttribute('x', p.x.toFixed(2));
    text.setAttribute('y', p.y.toFixed(2));
    text.setAttribute('class', 'label');
    text.dataset.stat = s.key;

    const cos = Math.cos(s.angle);
    const sin = Math.sin(s.angle);
    let anchor = 'middle';
    if (cos > 0.15) anchor = 'start';
    else if (cos < -0.15) anchor = 'end';
    text.setAttribute('text-anchor', anchor);

    let baseline = 'middle';
    if (sin < -0.5) baseline = 'auto';
    else if (sin > 0.5) baseline = 'hanging';
    text.setAttribute('dominant-baseline', baseline);

    text.textContent = statLabel(s.key);
    svg.appendChild(text);
  });
}

function rebuildChartLabels() {
  svg.querySelectorAll('text.label[data-stat]').forEach(el => {
    el.textContent = statLabel(el.dataset.stat);
  });
}

function clampValue(v) {
  if (isNaN(v)) return 0;
  return Math.max(0, Math.min(MAX_VALUE, Math.round(v)));
}

const ANIM_DURATION = 350;
let currentRadii = STATS.map(() => 0);
let animFrom = null;
let animTarget = null;
let animStart = null;
let animFrameId = null;

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function renderPolygon(radii) {
  STATS.forEach((s, i) => {
    const ni = (i + 1) % STATS.length;
    const next = STATS[ni];
    const a = point(s.angle, radii[i]);
    const b = point(next.angle, radii[ni]);

    const tri = svg.querySelector(`.data-triangle[data-section="${i}"]`);
    if (tri) {
      tri.setAttribute('points', `0,0 ${a.x.toFixed(2)},${a.y.toFixed(2)} ${b.x.toFixed(2)},${b.y.toFixed(2)}`);
    }

    const grad = document.getElementById(`grad-${i}`);
    if (grad) {
      grad.setAttribute('x1', a.x.toFixed(2));
      grad.setAttribute('y1', a.y.toFixed(2));
      grad.setAttribute('x2', b.x.toFixed(2));
      grad.setAttribute('y2', b.y.toFixed(2));
    }

    const vline = svg.querySelector(`.value-line[data-stat="${i}"]`);
    if (vline) {
      vline.setAttribute('x2', a.x.toFixed(2));
      vline.setAttribute('y2', a.y.toFixed(2));
    }
  });
}

function animateStep(timestamp) {
  if (animStart === null) animStart = timestamp;
  const t = Math.min((timestamp - animStart) / ANIM_DURATION, 1);
  const eased = easeOutCubic(t);
  currentRadii = animFrom.map((from, i) => from + (animTarget[i] - from) * eased);
  renderPolygon(currentRadii);
  if (t < 1) {
    animFrameId = requestAnimationFrame(animateStep);
  } else {
    animFrameId = null;
  }
}

function updateChart() {
  const newTarget = STATS.map(s => {
    const input = document.querySelector(`input[data-key="${s.key}"]`);
    const v = clampValue(parseInt(input.value, 10));
    if (String(v) !== input.value) input.value = v;
    return (v / MAX_VALUE) * RADIUS;
  });

  animFrom = currentRadii.slice();
  animTarget = newTarget;
  animStart = null;
  if (animFrameId) cancelAnimationFrame(animFrameId);
  animFrameId = requestAnimationFrame(animateStep);
}

// ============== Dados: arquétipos e warframes ==============

