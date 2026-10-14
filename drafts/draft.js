// Shared boot for the layout drafts: plate + time switcher, character stage, dock, reveals.
import { initPlate } from '../js/plate.js';

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const NAMES = { pip: 'Pip', moobi: 'Moobi', eli3: 'Eli3' };

const plate = initPlate({
  stageEl: document.getElementById('stage'),
  plateEl: document.getElementById('plate'),
  barEl: document.querySelector('.seg'),
  reducedMotion: reduced,
});

// "Explore the island": the copy steps aside and the plate opens to full view. Esc returns.
const hero = document.querySelector('.hero');
document.querySelectorAll('[data-explore]').forEach((b) => b.addEventListener('click', () => {
  hero.classList.add('exploring');
  const win = document.querySelector('.window');   // draft B: centre the window; draft A: the hero is the stage
  if (win) win.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
  else window.scrollTo({ top: hero.getBoundingClientRect().top + scrollY, behavior: reduced ? 'auto' : 'smooth' });
}));
document.querySelectorAll('[data-leave]').forEach((b) => b.addEventListener('click', () => hero.classList.remove('exploring')));
addEventListener('keydown', (e) => { if (e.key === 'Escape') hero.classList.remove('exploring'); });

// scroll reveals
const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -10% 0px' });
document.querySelectorAll('.rv').forEach((el) => io.observe(el));

// work loops: play the visible ones
const vio = new IntersectionObserver((es) => es.forEach((e) => { const v = e.target; if (e.isIntersecting && !reduced) { v.preload = 'auto'; v.play().catch(() => {}); } else v.pause(); }), { threshold: 0.35 });
document.querySelectorAll('video.loop').forEach((v) => vio.observe(v));
// Addendum 51: buffer each loop ~400 px before it is on screen, so play() does not also fetch and spin up the decoder
// in the same frame (the one unexplained 113-117 ms first-pass frame in Work sat exactly where the loops start)
const warmV = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting && !reduced) { const v = e.target; if (v.readyState === 0 && v.paused) { v.preload = 'auto'; v.load(); } warmV.unobserve(v); } }), { rootMargin: '400px 0px' });
document.querySelectorAll('video.loop').forEach((v) => warmV.observe(v));

// characters: one live stage in the Characters section; the hero dock picks the same character (stage back on home, Addendum 59:
// it now builds only when scrolled near, and shaders/textures warm before the first visible frame, Addendum 48)
const slotEl = document.getElementById('char-slot');
let pick = () => {};
const RIG_URL = { pip: 'https://closer-pip.netlify.app', moobi: 'https://closer-mlkshk.netlify.app', eli3: 'https://closer-eli3.netlify.app' };
const pickers = [...document.querySelectorAll('[data-char]')];
function mark(name) {
  pickers.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.char === name)));
  document.querySelectorAll('[data-char-name]').forEach((el) => { el.textContent = NAMES[name]; });
  document.querySelectorAll('[data-spec]').forEach((el) => { el.hidden = el.dataset.spec !== name; });
  document.querySelectorAll('[data-rig-link]').forEach((a) => { a.href = RIG_URL[name]; });
  document.querySelectorAll('[data-card-label]').forEach((el) => { el.textContent = `${NAMES[name]}'s character card`; });
}
let islandApi = null;
pickers.forEach((b) => b.addEventListener('click', () => { mark(b.dataset.char); pick(b.dataset.char); islandApi?.setCharacter(b.dataset.char); }));
mark('pip');

const hasGL = (() => { try { return !!document.createElement('canvas').getContext('webgl2'); } catch { return false; } })();

// the live layer on the hero plate (draft A)
const liveEl = document.getElementById('live');
if (liveEl && hasGL) (async () => {
  const labels = [...document.querySelectorAll('.ruin[data-section]')];
  const go = (section) => { hero.classList.remove('exploring'); document.getElementById(section)?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' }); };
  const { initIsland } = await import('./island.js');
  islandApi = await initIsland({ stageEl: document.getElementById('stage'), liveEl, plate, labels, onEnter: go, reducedMotion: reduced });
  // a ruin label walks the character there first; once inside the ruin it opens the section
  labels.forEach((a) => a.addEventListener('click', (e) => {
    e.preventDefault();
    if (islandApi.near === a.dataset.section) go(a.dataset.section); else islandApi.walkTo(a.dataset.section);
    hideHint();
  }));
  window.__loaded?.('island');
  // Addendum 55: on 4:3 screens the 16:9 plate crops the About ruin to the edge; nudge any label back inside the screen
  const clampLabels = () => labels.forEach((a) => { const sp = a.querySelector('span'); if (!sp) return; sp.style.translate = ''; const r = sp.getBoundingClientRect(), W = document.documentElement.clientWidth; const dx = r.right > W - 8 ? W - 8 - r.right : r.left < 8 ? 8 - r.left : 0; if (dx) sp.style.translate = `${Math.round(dx)}px 0`; });
  clampLabels(); let clampT; addEventListener('resize', () => { clearTimeout(clampT); clampT = setTimeout(clampLabels, 260); });
  const hint = document.getElementById('hint');
  const hideHint = () => hint && hint.classList.add('gone');
  if (hint && matchMedia('(hover: none), (pointer: coarse)').matches) hint.textContent = hint.dataset.touch;
  if (hint) { hint.hidden = false; liveEl.addEventListener('pointerup', hideHint, { once: true }); addEventListener('keydown', (e) => { if (/^(Key[WASD]|Arrow)/.test(e.code)) hideHint(); }); }
})().catch((err) => console.warn('Live layer unavailable, keeping the plate.', err));

if (slotEl && hasGL) new IntersectionObserver(async ([e], io) => {
  if (!e.isIntersecting) return; io.disconnect();
  const { createCharStage } = await import('./chars.js');
  const stage = await createCharStage(slotEl, { mode: plate.mode });
  const first = document.querySelector('[data-char][aria-pressed="true"]')?.dataset.char || 'pip';
  await stage.set(first);
  pick = (n) => stage.set(n);
  (window.requestIdleCallback || ((f) => setTimeout(f, 1500)))(() => stage.warm(['pip', 'moobi', 'eli3'].filter((n) => n !== first)).catch(() => {}));
  plate.onChange((m) => stage.setMode(m));
  slotEl.classList.add('ready');
}, { rootMargin: '600px 0px' }).observe(slotEl);

// Draft B: the sticky work index follows the card in view
const idx = [...document.querySelectorAll('.index a[href^="#w"]')];
if (idx.length) {
  const wio = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) idx.forEach((a) => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-45% 0px -45% 0px' });
  idx.forEach((a) => { const t = document.querySelector(a.getAttribute('href')); t && wio.observe(t); });
}

// topographic background (Addendum 31): one fixed canvas; sections set zoom + strength; topo/plain + layout switches
const topoEl = document.getElementById('topo');
if (topoEl) import('./topo.js').then(({ initTopo }) => {
  const topo = initTopo(topoEl, { mode: plate.mode, reducedMotion: reduced });
  if (!topo) return;
  plate.onChange((m) => topo.setMode(m));
  addEventListener('scroll', () => topo.setScroll(scrollY * 0.25), { passive: true });
  const heroEl = document.querySelector('.hero');   // the opaque hero covers the terrain: don't animate what nobody sees (Addendum 46)
  if (heroEl) new IntersectionObserver(([e]) => topo.setPaused(e.intersectionRatio > 0.98), { threshold: [0.9, 0.98, 1] }).observe(heroEl);   // the ground moves at 0.25x the page
  const secs = [...document.querySelectorAll('[data-topo]')];
  const pick = () => {   // the section crossing the middle of the screen owns the terrain
    const mid = innerHeight / 2;
    const s = secs.find((el) => { const r = el.getBoundingClientRect(); return r.top <= mid && r.bottom > mid; }) || secs[0];
    const [sc, k] = s.dataset.topo.split(' ').map(Number);
    topo.setScale(sc); topoEl.parentElement.style.setProperty('--topo-k', k);
  };
  addEventListener('scroll', pick, { passive: true }); pick();
}).catch((e) => console.warn('topo background unavailable', e));

// nav: .scrolled once the page leaves the top (a hook; the pill is glass at all times)
const nav = document.querySelector('.nav');
if (nav) { const f = () => nav.classList.toggle('scrolled', scrollY > 40); addEventListener('scroll', f, { passive: true }); f(); }

// models archipelago (Addendum 34): fluid contour islands. Each island's edge is smooth polar noise whose phases
// drift slowly (lava lamp); its three rings are the same shape sampled a little earlier in time, so the contours
// ripple outward after the edge like topo lines following the fluid. Hover (fine pointers): the island swells,
// flows faster, grows small ferrofluid spikes and bulges toward the pointer. Off screen it stops; reduced motion = still.
const isles = document.getElementById('isles');
if (isles) {
  const coarse = matchMedia('(hover: none), (pointer: coarse)').matches;
  const NS = 'http://www.w3.org/2000/svg', N = coarse ? 56 : 120, TAU = Math.PI * 2, STEP = coarse ? 1 / 24 : 1 / 30;   // phones ~24 fps, desktop 30 (Addendum 46)
  const rnd = (seed) => () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = [...isles.querySelectorAll('.isle')].map((el, n) => {
    const r = rnd(+el.dataset.seed * 977 + 13);
    const terms = [2, 3, 4, 5].map((f) => ({ f, a: (0.05 + r() * 0.06) / (f * 0.55), p: r() * TAU, w: (0.12 + r() * 0.16) * (r() < 0.5 ? -1 : 1) }));
    const svg = document.createElementNS(NS, 'svg'); svg.setAttribute('viewBox', '-1.2 -1.2 2.4 2.4'); svg.setAttribute('aria-hidden', 'true');
    const add = (parent, tag, at) => { const e = document.createElementNS(NS, tag); for (const k in at) e.setAttribute(k, at[k]); parent.appendChild(e); return e; };
    const defs = add(svg, 'defs', {}); const cp = add(defs, 'clipPath', { id: 'isle' + n }); const clip = add(cp, 'path', {});
    const shade = null;   // the blurred shadow path re-rasterised every frame on desktop too: dropped (Addendum 46)   // a blurred path re-rasterised every frame was the main phone cost
    const body = el.dataset.img
      ? add(svg, 'image', { href: el.dataset.img, x: -1.1, y: -1.1, width: 2.2, height: 2.2, preserveAspectRatio: 'xMidYMid slice', 'clip-path': `url(#isle${n})` })
      : add(svg, 'path', { class: 'blank' });
    const rings = [1, 2, 3].map((k) => add(svg, 'path', { class: 'ring r' + k }));
    el.prepend(svg);
    return { el, terms, clip, shade, body, rings, hover: 0, hT: 0, px: 0, py: 0, bulge: 0, t: r() * 50 };
  });
  // radius at angle th: base noise + (hover) ferro spikes + a bulge toward the pointer
  const radius = (it, th, t, k) => {
    const h = it.hover;
    let rad = 0.84 * (1 + 0.1 * h) + k;
    for (const s of it.terms) rad += s.a * (1 + 0.9 * h) * Math.sin(s.f * th + s.p + t * s.w);
    rad += h * 0.018 * Math.sin(11 * th + t * 2.4) + h * 0.012 * Math.sin(17 * th - t * 3.1);   // ferrofluid ripple
    const ang = Math.atan2(it.py, it.px), d = Math.cos(th - ang);
    rad += it.bulge * Math.pow(Math.max(d, 0), 6) * 0.14;   // a soft lobe reaching for the cursor
    return rad;
  };
  const pathAt = (it, t, k) => {
    let d = '';
    for (let i = 0; i <= N; i++) {
      const th = (i / N) * TAU, rr = radius(it, th, t, k);
      d += (i ? 'L' : 'M') + (Math.cos(th) * rr).toFixed(4) + ' ' + (Math.sin(th) * rr).toFixed(4);
    }
    return d + 'Z';
  };
  const draw = (it) => {
    const d = pathAt(it, it.t, 0);
    it.clip.setAttribute('d', d); it.shade?.setAttribute('d', d);
    if (it.body.tagName === 'path') it.body.setAttribute('d', d);
    const gap = 0.075 + 0.035 * it.hover;   // rings spread on hover
    it.rings.forEach((ring, j) => ring.setAttribute('d', pathAt(it, it.t - (j + 1) * 0.9, gap * (j + 1))));
  };
  items.forEach((it) => {
    draw(it);
    if (!fine) return;
    it.el.addEventListener('pointerenter', () => { it.hT = 1; kick(); });
    it.el.addEventListener('pointerleave', () => { it.hT = 0; kick(); });
    it.el.addEventListener('pointermove', (e) => {
      const r = it.el.getBoundingClientRect();
      it.px = (e.clientX - r.left) / r.width - 0.5; it.py = (e.clientY - r.top) / r.height - 0.5;
    });
  });
  let visible = false, raf = 0, last = 0;
  function frame(now) {
    raf = 0;
    if (STEP && last && now - last < STEP * 1000) { if (visible) raf = requestAnimationFrame(frame); return; }
    const dt = Math.min((now - (last || now)) / 1000, 0.05); last = now;
    let busy = false;
    for (const it of items) {
      it.hover += (it.hT - it.hover) * (1 - Math.exp(-dt * 4));
      it.bulge += (it.hT * Math.min(1, Math.hypot(it.px, it.py) * 2.4) - it.bulge) * (1 - Math.exp(-dt * 6));
      it.t += dt * (0.55 + 1.6 * it.hover);
      it.el.style.setProperty('--grow', (1 + 0.1 * it.hover).toFixed(4));
      draw(it);
      if (Math.abs(it.hT - it.hover) > 0.002) busy = true;
    }
    if (visible && (!still || busy)) raf = requestAnimationFrame(frame);
  }
  function kick() { if (!raf) { last = 0; raf = requestAnimationFrame(frame); } }
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) kick(); }, { rootMargin: '0px' }).observe(isles);
}

// work media: a gentle 3D tilt with a moving glare on fine pointers (Addendum 34)
if (matchMedia('(hover: hover) and (pointer: fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.row .media').forEach((m) => {
    m.addEventListener('pointermove', (e) => {
      const r = m.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      m.style.setProperty('--rx', ((0.5 - y) * 5).toFixed(2) + 'deg'); m.style.setProperty('--ry', ((x - 0.5) * 7).toFixed(2) + 'deg');
      m.style.setProperty('--gx', (x * 100).toFixed(1) + '%'); m.style.setProperty('--gy', (y * 100).toFixed(1) + '%');
    });
    m.addEventListener('pointerleave', () => { m.style.setProperty('--rx', '0deg'); m.style.setProperty('--ry', '0deg'); });
  });
}
// touch screens get touch wording
if (matchMedia('(hover: none)').matches) document.querySelectorAll('[data-touch-text]').forEach((el) => { el.textContent = el.dataset.touchText; });

// start at the hero: phones restored the last scroll position on reload and opened at "Selected work"
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
if (!location.hash) addEventListener('load', () => scrollTo(0, 0));

// phone menu
const menuBtn = document.querySelector('.menu-btn'), menu = document.getElementById('menu');
if (menuBtn && menu) {
  const set = (open) => { menuBtn.setAttribute('aria-expanded', String(open)); menu.hidden = !open; };
  menuBtn.addEventListener('click', () => set(menu.hidden));
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) set(false); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape') set(false); });
  addEventListener('scroll', () => { if (!menu.hidden) set(false); }, { passive: true });
}
