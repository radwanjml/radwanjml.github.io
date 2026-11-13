import { KINDS, COLOURS, METALS, WOODS, SIGNATURES, BASE_PRICE, PRICE } from './data.js?v=9';
import { initPlanner } from './planner.js?v=9';

document.documentElement.classList.add('js');
// intro: lift once fonts + the hero poster are ready, or after 2.5 s at most
{
  const intro = document.getElementById('intro');
  const poster = new Image(); poster.src = matchMedia('(max-width: 860px)').matches ? 'assets/img/poster_portrait.webp' : 'assets/img/poster.webp';
  const ready = Promise.all([document.fonts?.ready, poster.decode?.().catch(() => {}), new Promise((r) => setTimeout(r, 900))]);
  const lift = () => {
    intro && intro.classList.add('is-gone');
    const g = window.gsap;
    if (g && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      g.from('.hero-title', { yPercent: 18, opacity: 0, duration: 1.3, ease: 'expo.out', delay: 0.1 });
      g.from('.hero-side > *', { y: 14, opacity: 0, duration: 0.9, ease: 'expo.out', stagger: 0.07, delay: 0.3 });
    }
  };
  Promise.race([ready, new Promise((r) => setTimeout(r, 2500))]).then(lift);
}
const $ = (s, r = document) => r.querySelector(s);
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const toSRGB = (c) => (c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055);
const hex = (a) => '#' + a.map((v) => Math.round(Math.min(1, Math.max(0, toSRGB(v))) * 255).toString(16).padStart(2, '0')).join('');
const inr = (n) => '₹' + n.toLocaleString('en-IN');

// ---------------------------------------------------------------- state
const clone = (o) => JSON.parse(JSON.stringify(o));
let state = clone(SIGNATURES[0].cfg); let activeSig = '01';
function readHash() {
  try { const h = location.hash.match(/#cfg=(.+)/); if (h) { state = JSON.parse(atob(decodeURIComponent(h[1]))); activeSig = null; } } catch { /* ignore a bad link */ }
}
readHash();
let viewer = null;

// ---------------------------------------------------------------- names + price
const upName = (s) => s.up.custom ? `Custom ${KINDS[s.up.kind].label.toLowerCase()}` : `${COLOURS[s.up.kind].find((c) => c.id === s.up.colour)?.name} ${KINDS[s.up.kind].label.toLowerCase()}`;
const stName = (s) => s.stripe.mode === 'none' ? '' : `${s.stripe.mode === 'twin' ? 'twin' : 'single'} ${s.stripe.custom ? 'custom' : COLOURS[s.stripe.kind].find((c) => c.id === s.stripe.colour)?.name.toLowerCase()} stripe`;
const frName = (s) => s.frame.type === 'wood' ? `${WOODS.find((w) => w.id === s.frame.id).name.toLowerCase()} frame` : `${METALS.find((m) => m.id === s.frame.id).name.toLowerCase()} frame`;
function describe(s) { return [upName(s), stName(s), frName(s)].filter(Boolean).join(', ').replace(/^./, (c) => c.toUpperCase()); }
function price(s) {
  const lines = [['Duolune, cognac leather, satin black', BASE_PRICE]];
  const k = KINDS[s.up.kind].price; if (k) lines.push([`${KINDS[s.up.kind].label} upholstery`, k]);
  if (s.up.custom) lines.push(['Custom colour, dyed to order', PRICE.customColour]);
  if (s.stripe.mode !== 'none') { lines.push([`${s.stripe.mode === 'twin' ? 'Twin' : 'Single'} stripe`, PRICE.stripe[s.stripe.mode]]); if (s.stripe.custom) lines.push(['Custom stripe colour', PRICE.stripeCustom]); }
  const f = s.frame.type === 'wood' ? WOODS.find((w) => w.id === s.frame.id) : METALS.find((m) => m.id === s.frame.id);
  if (f.price) lines.push([`${f.name} frame`, f.price]);
  return { total: lines.reduce((a, l) => a + l[1], 0), lines };
}

// ---------------------------------------------------------------- panel
function radio(container, items, current, onPick, cls = '') {
  container.innerHTML = '';
  for (const it of items) {
    const b = document.createElement('button');
    b.type = 'button'; b.setAttribute('role', 'radio'); b.setAttribute('aria-checked', String(it.id === current)); b.className = cls;
    if (it.label) b.textContent = it.label;
    if (it.style) { b.setAttribute('aria-label', it.name); b.title = it.name; for (const [k, v] of Object.entries(it.style)) b.style.setProperty(k, v); }
    b.addEventListener('click', () => onPick(it.id));
    container.appendChild(b);
  }
}
function render() {
  const s = state;
  radio($('#up-kind'), Object.entries(KINDS).map(([id, k]) => ({ id, label: k.label })), s.up.kind, (id) => { s.up.kind = id; s.up.colour = COLOURS[id][0].id; s.up.custom = null; changed(); });
  radio($('#up-col'), COLOURS[s.up.kind].map((c) => ({ id: c.id, name: c.name, style: { '--c': hex(c.a) } })), s.up.custom ? null : s.up.colour, (id) => { s.up.colour = id; s.up.custom = null; changed(); }, 'sw');
  $('#up-custom').closest('.picker').classList.toggle('is-on', !!s.up.custom);
  radio($('#st-mode'), [{ id: 'none', label: 'None' }, { id: 'single', label: 'Single' }, { id: 'twin', label: 'Twin' }], s.stripe.mode, (id) => {
    s.stripe.mode = id; if (id !== 'none' && !s.stripe.kind) { s.stripe.kind = 'leather'; s.stripe.colour = 'cognac'; s.stripe.custom = null; } changed(); });
  $('#st-more').hidden = s.stripe.mode === 'none';
  if (s.stripe.mode !== 'none') {
    radio($('#st-kind'), Object.entries(KINDS).map(([id, k]) => ({ id, label: k.label })), s.stripe.kind, (id) => { s.stripe.kind = id; s.stripe.colour = COLOURS[id][0].id; s.stripe.custom = null; changed(); });
    radio($('#st-col'), COLOURS[s.stripe.kind].map((c) => ({ id: c.id, name: c.name, style: { '--c': hex(c.a) } })), s.stripe.custom ? null : s.stripe.colour, (id) => { s.stripe.colour = id; s.stripe.custom = null; changed(); }, 'sw');
    $('#st-custom').closest('.picker').classList.toggle('is-on', !!s.stripe.custom);
  }
  radio($('#fr-type'), [{ id: 'metal', label: 'Steel' }, { id: 'wood', label: 'Bent wood' }], s.frame.type, (id) => { s.frame.type = id; s.frame.id = id === 'wood' ? WOODS[0].id : METALS[0].id; changed(); });
  if (s.frame.type === 'wood') {
    radio($('#fr-col'), WOODS.map((w) => ({ id: w.id, name: w.name, style: { '--c': hex(w.light), '--c2': hex(w.dark) } })), s.frame.id, (id) => { s.frame.id = id; changed(); }, 'sw sw-wood');
    $('#fr-note').textContent = `${WOODS.find((w) => w.id === s.frame.id).name}, laminated and bent. Side rails stay satin black steel.`;
  } else {
    radio($('#fr-col'), METALS.map((m) => ({ id: m.id, name: m.name, style: { '--c': hex(m.c) } })), s.frame.id, (id) => { s.frame.id = id; changed(); }, 'sw');
    $('#fr-note').textContent = `${METALS.find((m) => m.id === s.frame.id).name}. Steel comes in these six finishes only: they're what a powder-coat line runs well.`;
  }
  // signature row state
  document.querySelectorAll('#sig-row button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.id === activeSig)));
  // summary
  const p = price(s);
  $('#sum-name').textContent = describe(s);
  $('#price').textContent = inr(p.total);
  $('#dock-price').textContent = inr(p.total); $('#dock-name').textContent = describe(s);
  $('#sum-lines').innerHTML = p.lines.map(([n, v], i) => `<li><span>${n}</span><span>${i ? '+ ' : ''}${inr(v)}</span></li>`).join('');
  const msg = `Hi, I'd like to ask about this Duolune build: ${describe(s)} (${inr(p.total)}). ${shareUrl()}`;
  $('#wa-btn').href = `https://wa.me/?text=${encodeURIComponent(msg)}`;
  // the page seam takes the stripe colour (or the upholstery thread when there's no stripe)
  const seamCol = s.stripe.mode !== 'none' ? (s.stripe.custom || hex(COLOURS[s.stripe.kind].find((c) => c.id === s.stripe.colour).a)) : (s.up.custom || hex(COLOURS[s.up.kind].find((c) => c.id === s.up.colour).thread));
  document.documentElement.style.setProperty('--stripe', seamCol);
}
function shareUrl() { return `${location.origin}${location.pathname}#cfg=${encodeURIComponent(btoa(JSON.stringify(state)))}`; }
function changed(fromSig = false) { if (!fromSig) activeSig = null; render(); viewer?.apply(state); }

$('#up-custom').addEventListener('input', (e) => { state.up.custom = e.target.value; changed(); });
$('#st-custom').addEventListener('input', (e) => { state.stripe.custom = e.target.value; if (!state.stripe.kind) state.stripe.kind = 'leather'; changed(); });

// signature builds
const sigRow = $('#sig-row');
for (const g of SIGNATURES) {
  const b = document.createElement('button'); b.type = 'button'; b.dataset.id = g.id; b.setAttribute('aria-pressed', 'false');
  b.innerHTML = `<img src="assets/img/thumbs/${g.img}.webp" alt="" width="104" height="130" loading="lazy"><span>${g.name}</span>`;
  b.addEventListener('click', () => { state = clone(g.cfg); activeSig = g.id; changed(true); });
  sigRow.appendChild(b);
}
render();

// the twelve: every signature render, each one loads into the configurator
const tw = $('#tw-grid');
for (const g of SIGNATURES) {
  const li = document.createElement('li');
  li.innerHTML = `<button type="button" data-id="${g.id}"><figure><img src="assets/img/hero_${g.img}.webp" alt="Duolune, ${g.name}" width="1080" height="1350" loading="lazy"></figure><p class="tw-cap"><b>${g.name}</b><span>${inr(price(g.cfg).total)}</span></p></button>`;
  li.querySelector('button').addEventListener('click', () => { state = clone(g.cfg); activeSig = g.id; changed(true); $('#build').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' }); });
  tw.appendChild(li);
}

// ---------------------------------------------------------------- configurator (lazy)
const loader = $('#loader'); const stage = $('#stage');
const MSGS = ['Cutting the hide', 'Bending the arcs', 'Threading the needle', 'Sewing seventeen rollers', 'Tightening six bolts', 'Polishing the nuts'];
let loading = false;
async function boot() {
  if (loading) return; loading = true;
  loader.classList.add('is-loading');
  let mi = 0; const mt = setInterval(() => { $('#ld-msg').textContent = MSGS[++mi % MSGS.length]; }, 1100);
  try {
    const { createConfigurator } = await import('./configurator.js?v=9');
    viewer = await createConfigurator({
      canvas: $('#cfg-canvas'), overlay: $('#cfg-overlay'),
      onProgress: (p) => { const v = Math.round(Math.min(1, p) * 100); $('#ld-pct').textContent = v; loader.style.setProperty('--p', v + '%'); loader.querySelector('.ld-seam').style.clipPath = `inset(0 ${100 - v}% 0 0)`; },
      onHotspot: showInfo,
    });
    viewer.apply(state);
    stage.classList.add('is-ready'); loader.classList.add('is-done'); $('#stage-tools').hidden = false;
    if (!lite) viewer.setRoom(true); else { $('#t-room').setAttribute('aria-pressed', 'false'); }
  } catch (err) {
    console.error(err);
    $('#ld-msg').textContent = 'The 3D view could not start on this device. The renders below show every finish.';
    loader.classList.remove('is-loading'); $('#ld-start').textContent = 'Try again'; loading = false;
  } finally { clearInterval(mt); }
}
$('#ld-start').addEventListener('click', boot);
const conn = navigator.connection; const lite = conn && (conn.saveData || /2g/.test(conn.effectiveType || ''));
if (!lite) new IntersectionObserver(([e], o) => { if (e.isIntersecting) { o.disconnect(); boot(); } }, { rootMargin: '400px 0px' }).observe(stage);

function toggle(btn, fn) { btn.addEventListener('click', () => { const v = btn.getAttribute('aria-pressed') !== 'true'; btn.setAttribute('aria-pressed', String(v)); fn(v); }); }
toggle($('#t-room'), (v) => viewer?.setRoom(v));
toggle($('#t-hs'), (v) => viewer?.setHotspots(v));
toggle($('#t-dim'), (v) => viewer?.setDims(v));
toggle($('#t-rot'), (v) => viewer?.setAutoRotate(v));
$('#t-reset').addEventListener('click', () => { hideInfo(); viewer?.reset(); });
function showInfo(h) {
  $('#info-k').textContent = h.kicker; $('#info-t').textContent = h.title; $('#info-b').textContent = h.body;
  $('#info-p').innerHTML = h.points.map((p) => `<li>${p}</li>`).join(''); $('#info').hidden = false;
}
function hideInfo() { $('#info').hidden = true; }
$('#info-x').addEventListener('click', () => { hideInfo(); viewer?.reset(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !$('#info').hidden) { hideInfo(); viewer?.reset(); } });

$('#snap-btn').addEventListener('click', () => {
  if (!viewer) return boot();
  const a = document.createElement('a'); a.href = viewer.snapshot(); a.download = 'duolune-build.png'; a.click();
});
$('#share-btn').addEventListener('click', async () => {
  history.replaceState(null, '', shareUrl().replace(location.origin, ''));
  try { await navigator.clipboard.writeText(shareUrl()); $('#share-btn').textContent = 'Link copied'; } catch { $('#share-btn').textContent = 'Link is in the address bar'; }
  setTimeout(() => { $('#share-btn').textContent = 'Copy link'; }, 2200);
});

// ---------------------------------------------------------------- AR (model-viewer, loaded only when asked)
const dlg = $('#ar-dlg');
$('#ar-btn').addEventListener('click', async () => {
  dlg.showModal();
  if (!customElements.get('model-viewer')) await import('https://cdn.jsdelivr.net/npm/@google/model-viewer@3.5.0/dist/model-viewer.min.js');
  let mv = dlg.querySelector('model-viewer');
  if (!mv) {
    mv = document.createElement('model-viewer');
    Object.entries({ src: 'assets/model/duolune.glb', loading: 'eager', ar: '', 'ar-modes': 'webxr scene-viewer quick-look', 'ar-scale': 'fixed', 'camera-controls': '', 'shadow-intensity': '1', exposure: '1.05', 'environment-image': 'neutral', alt: 'Duolune at full size', 'camera-orbit': '35deg 70deg 3.4m' })
      .forEach(([k, v]) => mv.setAttribute(k, v));
    $('#ar-stage').appendChild(mv);
    mv.addEventListener('load', () => paintAR(mv));
  } else paintAR(mv);
  mv.addEventListener('ar-status', (e) => { if (e.detail.status === 'failed') $('#ar-hint').textContent = 'AR is not available on this device. Open this page on a phone with AR support.'; });
  if (!/Android|iPhone|iPad/i.test(navigator.userAgent)) $('#ar-hint').textContent = 'AR works on phones. Open this page on Android (Chrome) or iPhone (Safari) and tap this button again. You can turn the chair here meanwhile.';
});
function paintAR(mv) {
  const lin = (a) => [...a, 1];
  const s = state; const set = (name, rgba, rough, metal) => {
    const m = mv.model?.materials.find((x) => x.name === name); if (!m) return;
    m.pbrMetallicRoughness.setBaseColorFactor(rgba); if (rough != null) m.pbrMetallicRoughness.setRoughnessFactor(rough); if (metal != null) m.pbrMetallicRoughness.setMetallicFactor(metal);
  };
  const fromHexLin = (h) => [1, 3, 5].map((i) => { const c = parseInt(h.slice(i, i + 2), 16) / 255; return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); });
  const up = s.up.custom ? fromHexLin(s.up.custom) : COLOURS[s.up.kind].find((c) => c.id === s.up.colour).a;
  set('rollers', lin(up), KINDS[s.up.kind].rough); set('trim', lin(up.map((v) => v * 0.75)), KINDS[s.up.kind].rough);
  if (s.frame.type === 'wood') { const w = WOODS.find((x) => x.id === s.frame.id); set('frame', lin(w.light.map((v, i) => (v + w.dark[i]) / 2)), 0.45, 0); set('rail', lin(METALS[0].c), 0.36, 0); }
  else { const m = METALS.find((x) => x.id === s.frame.id); set('frame', lin(m.c), m.rough, m.metal); set('rail', lin(m.c), m.rough, m.metal); }
}
$('#ar-x').addEventListener('click', () => dlg.close());
dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });

// ---------------------------------------------------------------- hero film
const film = $('#film');
if (matchMedia('(max-width: 860px)').matches) film.poster = 'assets/img/poster_portrait.webp';
const SHOTS = [
  ['01', 'Cognac leather on satin black'], ['02', 'Noir with twin sand stripes, from below'], ['03', 'Walnut, bent in plies'],
  ['04', 'From above: the lens'], ['05', 'Ivory bouclé, piped ends'], ['06', 'The arc, side on'],
  ['07', 'Four builds, one beat each'], ['08', 'Oxblood on bronze'],
];
const OFFSET = 0; // film starts on the bar
let lastShot = -1, ticking = false;
function shotTick() {
  const i = Math.min(7, Math.floor(((film.currentTime + OFFSET) % 16) / 2));
  if (i !== lastShot) { lastShot = i; $('#shot-n').textContent = SHOTS[i][0]; $('#shot-name').textContent = SHOTS[i][1]; }
  if (!film.paused) requestAnimationFrame(shotTick); else ticking = false;
}
const startTick = () => { if (!ticking) { ticking = true; requestAnimationFrame(shotTick); } };
['play', 'playing', 'timeupdate', 'seeked'].forEach((ev) => film.addEventListener(ev, startTick));
startTick();
const pauseBtn = $('#pause');
function setPlaying(p) {
  if (p) film.play().catch(() => {}); else film.pause();
  pauseBtn.setAttribute('aria-label', p ? 'Pause film' : 'Play film');
  pauseBtn.innerHTML = p ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h3v14H7zM14 5h3v14h-3z"/></svg>' : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
}
const saveData = !!(navigator.connection && navigator.connection.saveData);
if (!reduced && !saveData) {
  new IntersectionObserver(([e]) => { if (e.isIntersecting && !film.dataset.userPaused) setPlaying(true); else film.pause(); }, { threshold: 0.25 }).observe(film);
} else setPlaying(false);
if (saveData) setPlaying(false);
pauseBtn.addEventListener('click', () => { const p = film.paused; film.dataset.userPaused = p ? '' : '1'; if (p) delete film.dataset.userPaused; setPlaying(p); });
$('#sound').addEventListener('click', (e) => {
  const on = film.muted; film.muted = !on; e.currentTarget.setAttribute('aria-pressed', String(on));
  e.currentTarget.textContent = on ? 'Mute' : 'Play with sound';
  if (on) { film.currentTime = 0; delete film.dataset.userPaused; setPlaying(true); }
});

// ---------------------------------------------------------------- header + seam + reveals
const bar = $('#bar');
const zones = [...document.querySelectorAll('.hero, .paper, .studio')];
function headerTone() {
  const y = 40; let tone = 'hero';
  for (const z of zones) { const r = z.getBoundingClientRect(); if (r.top <= y && r.bottom > y) tone = z.classList.contains('hero') ? 'hero' : z.classList.contains('studio') ? 'dark' : 'paper'; }
  bar.classList.toggle('is-solid', tone === 'paper'); bar.classList.toggle('is-dark', tone === 'dark');
  const p = Math.min(1, scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight));
  document.documentElement.style.setProperty('--seam', p.toFixed(4));
}
addEventListener('scroll', headerTone, { passive: true }); headerTone();

addEventListener('load', () => {
  const g = window.gsap;
  if (!g || reduced) { document.querySelectorAll('.reveal').forEach((el) => { el.style.opacity = 1; el.style.transform = 'none'; }); return; }
  g.registerPlugin(window.ScrollTrigger);
  g.utils.toArray('.reveal').forEach((el) => g.to(el, { opacity: 1, y: 0, duration: 0.9, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 86%' } }));
  const arc = document.querySelector('.arc-draw path');
  if (arc) { g.set(arc, { strokeDasharray: '0.006 0.004', clipPath: 'inset(0 100% 0 0)' }); g.fromTo('.arc-draw', { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', ease: 'none', scrollTrigger: { trigger: '.arc-fig', start: 'top 75%', end: 'bottom 45%', scrub: 0.6 } }); }
});

// ---------------------------------------------------------------- gallery lightbox
const lb = $('#lightbox');
document.querySelectorAll('#gal-row button').forEach((b) => b.addEventListener('click', () => {
  const img = new Image(); img.src = b.dataset.full; img.alt = b.querySelector('img').alt;
  $('#lb-frame').replaceChildren(img); lb.hidden = false; $('#lb-x').focus();
}));
const closeLb = () => { lb.hidden = true; };
$('#lb-x').addEventListener('click', closeLb); lb.addEventListener('click', (e) => { if (e.target === lb) closeLb(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !lb.hidden) closeLb(); });

initPlanner();

// phone price dock: shown while the stage is on screen and the summary isn't
const dock = $('#dock'); let stageOn = false, sumOn = false;
const dockUpd = () => { const on = stageOn && !sumOn; dock.classList.toggle('is-on', on); dock.setAttribute('aria-hidden', String(!on)); };
new IntersectionObserver(([e]) => { stageOn = e.isIntersecting; dockUpd(); }, { threshold: 0.2 }).observe($('#build'));
new IntersectionObserver(([e]) => { sumOn = e.isIntersecting; dockUpd(); }).observe($('.sum'));
