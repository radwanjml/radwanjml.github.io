import { KINDS, COLOURS, METALS, WOODS, SIGNATURES, BASE_PRICE, PRICE } from './data.js?v=45';
import { initPlanner } from './planner.js?v=45';

document.documentElement.classList.add('js');
// intro: lift once fonts + the hero poster are ready, or after 2.5 s at most
{
  const intro = document.getElementById('intro');
  const poster = new Image(); poster.src = matchMedia('(max-aspect-ratio: 1/1)').matches ? 'assets/img/poster_portrait.webp' : 'assets/img/poster.webp';
  const gf = document.getElementById('gf');   // font sheet loads non-blocking (media=print swap); wait for it, then the faces
  const sheet = !gf || gf.media === 'all' ? Promise.resolve() : new Promise((r) => { gf.addEventListener('load', r, { once: true }); gf.addEventListener('error', r, { once: true }); });
  const ready = Promise.all([sheet.then(() => document.fonts?.ready), poster.decode?.().catch(() => {}), new Promise((r) => setTimeout(r, 900))]);
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
const INR = new Intl.NumberFormat('en-IN'); const inr = (n) => '₹' + INR.format(n);   // one formatter: toLocaleString built one per call (52 ms at 4x CPU)

// ---------------------------------------------------------------- state
const clone = (o) => JSON.parse(JSON.stringify(o));
let state = clone(SIGNATURES[0].cfg); let activeSig = '01';
function readHash() {
  try { const h = location.hash.match(/#cfg=(.+)/); if (h) { state = JSON.parse(atob(decodeURIComponent(h[1]))); activeSig = null; } } catch { /* ignore a bad link */ }
}
readHash();
// round 15: coming back from a lost 3D context: same build, same place on the page
let restoreY = null;
try { const r = JSON.parse(sessionStorage.getItem('duo-restore') || 'null'); sessionStorage.removeItem('duo-restore');
  if (r && Date.now() - r.t < 10 * 60e3) { state = r.state; activeSig = r.sig; restoreY = r.y; } } catch { /* storage blocked: start fresh */ }
let viewer = null;

// ---------------------------------------------------------------- names + price
const upName = (s) => s.up.custom ? `Custom ${KINDS[s.up.kind].label.toLowerCase()}` : `${COLOURS[s.up.kind].find((c) => c.id === s.up.colour)?.name} ${KINDS[s.up.kind].label.toLowerCase()}`;
const stName = (s) => s.stripe.mode === 'none' ? '' : `${s.stripe.mode === 'twin' ? 'twin' : 'single'} ${s.stripe.custom ? 'custom' : COLOURS[s.stripe.kind].find((c) => c.id === s.stripe.colour)?.name.toLowerCase()} stripe`;
const frName = (s) => s.frame.type !== 'wood' && s.frame.custom ? 'custom powder-coat frame' : s.frame.type === 'wood' ? `${WOODS.find((w) => w.id === s.frame.id).name.toLowerCase()} frame` : `${METALS.find((m) => m.id === s.frame.id).name.toLowerCase()} frame`;
function describe(s) { return [upName(s), stName(s), frName(s)].filter(Boolean).join(', ').replace(/^./, (c) => c.toUpperCase()); }
function price(s) {
  const lines = [['Duolune base (leather, steel frame)', BASE_PRICE]];   // round 14: named the default build even when another cover was chosen
  const k = KINDS[s.up.kind].price; if (k) lines.push([`${KINDS[s.up.kind].label} upholstery`, k]);
  if (s.up.custom) lines.push(['Custom colour, dyed to order', PRICE.customColour]);
  if (s.stripe.mode !== 'none') { lines.push([`${s.stripe.mode === 'twin' ? 'Twin' : 'Single'} stripe`, PRICE.stripe[s.stripe.mode]]); if (s.stripe.custom) lines.push(['Custom stripe colour', PRICE.stripeCustom]); }
  const f = s.frame.type === 'wood' ? WOODS.find((w) => w.id === s.frame.id) : METALS.find((m) => m.id === s.frame.id);
  if (s.frame.type !== 'wood' && s.frame.custom) lines.push(['Custom powder coat, any RAL colour (+2 weeks)', PRICE.frameCustom]);
  else if (f.price) lines.push([`${f.name} frame`, f.price]);
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
  radio($('#fr-type'), [{ id: 'metal', label: 'Steel' }, { id: 'wood', label: 'Bent wood' }], s.frame.type, (id) => { s.frame.type = id; s.frame.id = id === 'wood' ? WOODS[0].id : METALS[0].id; s.frame.custom = null; changed(); });
  if (s.frame.type === 'wood') {
    radio($('#fr-col'), WOODS.map((w) => ({ id: w.id, name: w.name, style: { '--c': hex(w.light), '--c2': hex(w.dark) } })), s.frame.id, (id) => { s.frame.id = id; changed(); }, 'sw sw-wood');
    $('#fr-note').textContent = `${WOODS.find((w) => w.id === s.frame.id).name}, laminated and bent. Side rails stay satin black steel.`;
  } else {
    radio($('#fr-col'), METALS.map((m) => ({ id: m.id, name: m.name, style: { '--c': hex(m.c) } })), s.frame.custom ? null : s.frame.id, (id) => { s.frame.id = id; s.frame.custom = null; changed(); }, 'sw');
    $('#fr-note').textContent = s.frame.custom ? 'Custom powder coat: any RAL colour, matched to your sample. Satin finish, adds about two weeks.' : `${METALS.find((m) => m.id === s.frame.id).name}. Six stocked finishes, or any powder-coat colour to order.`;
  }
  $('#fr-picker').hidden = s.frame.type === 'wood'; $('#fr-picker').classList.toggle('is-on', !!s.frame.custom);
  // signature row state
  document.querySelectorAll('#sig-row button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.id === activeSig)));
  // summary
  const p = price(s);
  $('#sum-name').textContent = describe(s);
  $('#price').textContent = inr(p.total); $('#deck-price').textContent = inr(p.total);
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

$('#fr-custom').addEventListener('input', (e) => { state.frame.custom = e.target.value; if (state.frame.type === 'wood') { state.frame.type = 'metal'; state.frame.id = METALS[0].id; } changed(); });
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
  li.innerHTML = `<button type="button" data-id="${g.id}"><figure><img data-src="assets/img/hero_${g.img}.webp" alt="Duolune, ${g.name}" width="1080" height="1350" loading="lazy"></figure><p class="tw-cap"><b>${g.name}</b><span>${inr(price(g.cfg).total)}</span></p></button>`;
  li.querySelector('button').addEventListener('click', () => { state = clone(g.cfg); activeSig = g.id; changed(true); $('#build').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' }); });
  tw.appendChild(li);
}

// ---------------------------------------------------------------- hold the gallery while the 3D downloads (round 12)
// On slow links the gallery below the build (8 prints, ~370 KB) started with the GLB and split the bandwidth with it.
// Its images wait until the 3D is ready or has failed, or until the visitor actually reaches the gallery.
// The twelve-up grid just above the build is held the same way (jumping to the build pulled 8 of its prints in).
const galImgs = [...document.querySelectorAll('#gal-row img')].filter((i) => !i.complete);
for (const i of galImgs) { i.dataset.src = i.getAttribute('src'); i.removeAttribute('src'); }
const heldImgs = [...galImgs, ...document.querySelectorAll('#tw-grid img[data-src]')];
const show = (i) => { if (!i.getAttribute('src')) i.src = i.dataset.src; };
const nearIO = new IntersectionObserver((es) => { for (const e of es) if (e.isIntersecting) { nearIO.unobserve(e.target); show(e.target); } }, { rootMargin: '200px 0px' });
heldImgs.forEach((i) => nearIO.observe(i));
let galOut = false;
const releaseGallery = () => { if (galOut) return; galOut = true; nearIO.disconnect(); heldImgs.forEach(show); };

// ---------------------------------------------------------------- configurator (lazy)
const loader = $('#loader'); const stage = $('#stage');
const MSGS = ['Cutting the hide', 'Bending the arcs', 'Threading the needle', 'Sewing seventeen rollers', 'Tightening six bolts', 'Polishing the nuts'];
let loading = false;
async function boot() {
  if (loading) return; loading = true;
  loader.classList.add('is-loading');
  let mi = 0; const mt = setInterval(() => { $('#ld-msg').textContent = MSGS[++mi % MSGS.length]; }, 1100);
  try {
    let glbBuf = null;   // start the model download now, in parallel with three.js and its addons (same LITE rule as configurator.js)
    { const q = new URLSearchParams(location.search); const L = q.has('lite') ? q.get('lite') === '1' : innerWidth < 760 || (navigator.deviceMemory || 8) <= 4 || matchMedia('(pointer: coarse)').matches;
      if (!q.get('m')) glbBuf = fetch(L ? 'assets/model/duolune_lite.glb?v=45' : 'assets/model/duolune.glb?v=45').then((r) => (r.ok ? r.arrayBuffer() : null)).catch(() => null); }
    const { createConfigurator } = await import('./configurator.js?v=45');
    viewer = await createConfigurator({
      canvas: $('#cfg-canvas'), overlay: $('#cfg-overlay'),
      onProgress: (p) => { const v = Math.round(Math.min(1, p) * 100); $('#ld-pct').textContent = v; loader.style.setProperty('--p', v + '%'); loader.querySelector('.ld-seam').style.clipPath = `inset(0 ${100 - v}% 0 0)`; },
      onHotspot: showInfo, glb: glbBuf, onLost: ctxLost, onRestored: ctxBack, onTurnOff: () => $('#t-rot').setAttribute('aria-pressed', 'false'),
    });
    viewer.apply(state);
    stage.classList.add('is-ready'); loader.classList.add('is-done'); $('#stage-tools').hidden = false;
    releaseGallery();
    warmAR();
    if (!lite) viewer.setRoom(true); else { $('#t-room').setAttribute('aria-pressed', 'false'); }
  } catch (err) {
    console.error(err);
    $('#ld-msg').textContent = 'The 3D view could not start on this device. The renders below show every finish.';
    loader.classList.remove('is-loading'); $('#ld-start').textContent = 'Try again'; loading = false; releaseGallery();
  } finally { clearInterval(mt); }
}
$('#ld-start').addEventListener('click', boot);
// round 15: the phone took the GPU back (usually a background tab). Keep the build, say so, reload in place when it returns.
let ctxGone = false;
function ctxLost() {
  ctxGone = true;
  try { sessionStorage.setItem('duo-restore', JSON.stringify({ state, sig: activeSig, y: scrollY, t: Date.now() })); } catch { /* reload still works, build resets */ }
  stage.classList.remove('is-ready'); loader.classList.remove('is-done'); loader.classList.remove('is-loading');
  $('#ld-msg').textContent = 'Your phone paused the 3D view to save memory. Your build is kept.';
  $('#ld-start').textContent = 'Bring the 3D view back'; $('#ld-start').onclick = () => location.reload();
}
function ctxBack() { if (ctxGone) location.reload(); }
document.addEventListener('visibilitychange', () => { if (ctxGone && document.visibilityState === 'visible') setTimeout(() => location.reload(), 300); });
if (restoreY !== null) addEventListener('load', () => { document.documentElement.style.scrollBehavior = 'auto'; scrollTo(0, restoreY); document.documentElement.style.scrollBehavior = ''; }, { once: true });
const conn = navigator.connection; const lite = conn && (conn.saveData || /2g/.test(conn.effectiveType || ''));
if (!lite) new IntersectionObserver(([e], o) => { if (e.isIntersecting) { o.disconnect(); boot(); } }, { rootMargin: '400px 0px' }).observe(stage);
else releaseGallery();   // save-data / 2G: 3D waits for a tap, so nothing to hold for

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
// round 16: check AR support and fetch ar.js while the visitor looks at the chair, so the tap goes straight to the session
let xrOK = null, arMod = null;
function warmAR() { if (!navigator.xr) { xrOK = false; return; }
  navigator.xr.isSessionSupported('immersive-ar').then((v) => { xrOK = v; if (v) arMod = import('./ar.js?v=45'); }).catch(() => { xrOK = false; }); }
const dlg = $('#ar-dlg');
$('#ar-btn').addEventListener('click', async () => {
  // Android Chrome: our own WebXR mode (two taps to place, tap the chair to turn or move it, locked 1:1).
  // Round 16: back as the default (Red's choice), with the session started straight from the tap and a floor fallback.
  // iPhone, or anything without immersive-ar: model-viewer (Quick Look / Scene Viewer). ?xr=mv forces model-viewer.
  try {
    if (new URLSearchParams(location.search).get('xr') !== 'mv' && (xrOK ?? (navigator.xr && await navigator.xr.isSessionSupported('immersive-ar')))) {
      const { startAR } = await (arMod || import('./ar.js?v=45'));
      return startAR({ paint: arPaint(state), name: describe(state) });
    }
  } catch (e) { console.warn('webxr', e); }
  dlg.showModal();
  if (!customElements.get('model-viewer')) await import('https://cdn.jsdelivr.net/npm/@google/model-viewer@3.5.0/dist/model-viewer.min.js');
  let mv = dlg.querySelector('model-viewer');
  if (!mv) {
    mv = document.createElement('model-viewer');
    Object.entries({ src: 'assets/model/duolune.glb?v=45', loading: 'eager', ar: '', 'ar-modes': 'webxr scene-viewer quick-look', 'ar-scale': 'fixed', 'camera-controls': '', 'shadow-intensity': '1', exposure: '1.05', 'environment-image': 'neutral', alt: 'Duolune at full size', 'camera-orbit': '35deg 70deg 3.4m' })
      .forEach(([k, v]) => mv.setAttribute(k, v));
    $('#ar-stage').appendChild(mv);
    mv.addEventListener('load', () => { paintAR(mv); const go = $('#ar-go'); if (go && mv.canActivateAR) go.hidden = false; });
  } else paintAR(mv);
  mv.addEventListener('ar-status', (e) => { if (e.detail.status === 'failed') $('#ar-hint').textContent = 'AR is not available on this device. Open this page on a phone with AR support.'; });
  if (!/Android|iPhone|iPad/i.test(navigator.userAgent)) $('#ar-hint').textContent = 'AR works on phones. Open this page on Android (Chrome) or iPhone (Safari) and tap this button again. You can turn the chair here meanwhile.';
});
$('#t-ar').addEventListener('click', () => $('#ar-btn').click());   // round 14: AR is a selling point, so it sits on the stage, not only in Order
$('#ar-go')?.addEventListener('click', () => dlg.querySelector('model-viewer')?.activateAR());   // a fresh tap: activateAR needs a user gesture
// colours for AR, as {material: [r, g, b, rough, metal]} in linear RGB (shared by model-viewer and our WebXR mode)
function arPaint(s) {
  const fromHexLin = (h) => [1, 3, 5].map((i) => { const c = parseInt(h.slice(i, i + 2), 16) / 255; return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); });
  const up = s.up.custom ? fromHexLin(s.up.custom) : COLOURS[s.up.kind].find((c) => c.id === s.up.colour).a;
  const r = KINDS[s.up.kind].rough; const o = { rollers: [...up, r, 0], trim: [...up.map((v) => v * 0.75), r, 0] };
  if (s.frame.type === 'wood') { const w = WOODS.find((x) => x.id === s.frame.id); o.frame = [...w.light.map((v, i) => (v + w.dark[i]) / 2), 0.45, 0]; o.rail = [...METALS[0].c, 0.36, 0]; }
  else if (s.frame.custom) { const c = fromHexLin(s.frame.custom); o.frame = [...c, 0.4, 0]; o.rail = [...c, 0.4, 0]; }
  else { const m = METALS.find((x) => x.id === s.frame.id); o.frame = [...m.c, m.rough, m.metal]; o.rail = [...m.c, m.rough, m.metal]; }
  return o;
}
function paintAR(mv) {
  for (const [name, v] of Object.entries(arPaint(state))) {
    const m = mv.model?.materials.find((x) => x.name === name); if (!m) continue;
    m.pbrMetallicRoughness.setBaseColorFactor([v[0], v[1], v[2], 1]); m.pbrMetallicRoughness.setRoughnessFactor(v[3]); m.pbrMetallicRoughness.setMetallicFactor(v[4]);
  }
}
$('#ar-x').addEventListener('click', () => dlg.close());
dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });

// ---------------------------------------------------------------- hero film
const film = $('#film');
if (matchMedia('(max-aspect-ratio: 3/4)').matches) film.poster = 'assets/img/poster_portrait.webp';
else if (matchMedia('(max-aspect-ratio: 3/2)').matches) film.poster = 'assets/img/poster_square.webp';   // 3 films: <=3:4 portrait, <=3:2 square, wider landscape
const SHOTS = SIGNATURES.map((g) => [g.id, g.name.replace(' / ', ', ')]);   // the hero film: 40 s at 72 BPM, the finish changes every beat (25 f = 5/6 s), 12 signatures x 4
const OFFSET = 0; // film starts on the bar
let lastShot = -1, ticking = false;
function shotTick() {
  const i = Math.floor(((film.currentTime + OFFSET) % 40) / (5 / 6)) % 12;
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
  // the poster is the LCP; decoding the film during load cost ~5 s of main thread on a throttled phone (Lighthouse, 13 Nov),
  // so the film only starts once the page has loaded and gone idle
  let filmOk = false, inView = true;
  const tryPlay = () => { if (filmOk && inView && !film.dataset.userPaused) setPlaying(true); else film.pause(); };
  new IntersectionObserver(([e]) => { inView = e.isIntersecting; tryPlay(); }, { threshold: 0.25 }).observe(film);
  const arm = () => { filmOk = true; tryPlay(); };
  const afterLoad = () => setTimeout(() => (window.requestIdleCallback ? requestIdleCallback(arm, { timeout: 2500 }) : arm()), 1200);
  if (document.readyState === 'complete') afterLoad(); else addEventListener('load', afterLoad, { once: true });
} else setPlaying(false);
if (saveData) setPlaying(false);
const soundBtn = $('#sound');   // browsers only autoplay muted; sound is opt-in. Music: "chill loopable" by Pro Sensory (CC0)
const SND_ON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2"/></svg>';
const SND_OFF = soundBtn.innerHTML;
soundBtn.addEventListener('click', () => {
  film.muted = !film.muted;
  soundBtn.setAttribute('aria-pressed', String(!film.muted));
  soundBtn.setAttribute('aria-label', film.muted ? 'Turn sound on' : 'Turn sound off');
  soundBtn.innerHTML = film.muted ? SND_OFF : SND_ON;
  if (!film.muted && film.paused) { delete film.dataset.userPaused; setPlaying(true); }
});
pauseBtn.addEventListener('click', () => { const p = film.paused; film.dataset.userPaused = p ? '' : '1'; if (p) delete film.dataset.userPaused; setPlaying(p); });


// ---------------------------------------------------------------- header + seam + reveals
const bar = $('#bar');
const zones = [...document.querySelectorAll('.hero, .paper, .studio')];
function headerTone() {
  const y = 40; let tone = 'hero';
  for (const z of zones) { const r = z.getBoundingClientRect(); if (r.top <= y && r.bottom > y) tone = z.classList.contains('hero') ? 'hero' : z.classList.contains('studio') ? 'dark' : 'paper'; }
  bar.classList.toggle('is-solid', tone === 'paper'); bar.classList.toggle('is-dark', tone === 'dark');
  const p = Math.min(1, scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight)).toFixed(3);
  if (p !== lastSeam) { lastSeam = p; seamEl?.style.setProperty('--seam', p); }   // on the seam only: on <html> it restyled the whole page per scroll
}
// one read per frame, never during script evaluation (that forced an extra full layout at load)
const seamEl = document.querySelector('.seam'); let lastSeam = ''; let toneQ = false;
const queueTone = () => { if (toneQ) return; toneQ = true; requestAnimationFrame(() => { toneQ = false; headerTone(); }); };
addEventListener('scroll', queueTone, { passive: true }); queueTone();

const idle = (fn) => (window.requestIdleCallback ? requestIdleCallback(fn, { timeout: 1500 }) : setTimeout(() => fn({ timeRemaining: () => 8 }), 200));
// ~30 scroll triggers each measure layout when created. Build them one small job at a time inside idle slices,
// so no single task blocks input (one big batch was 4 tasks of 90-165 ms at 4x CPU; Lighthouse, 13 Nov)
const runIdle = (jobs) => { const step = (dl) => { do { const j = jobs.shift(); if (j) j(); } while (jobs.length && dl.timeRemaining() > 6); if (jobs.length) idle(step); }; idle(step); };
// ScrollTrigger is fetched after load (round 12): as a deferred script its evaluation forced the page's first full
// layout synchronously (134 ms at 4x CPU). After load, layout is already clean, so it costs almost nothing.
const showReveals = () => document.querySelectorAll('.reveal').forEach((el) => { el.style.opacity = 1; el.style.transform = 'none'; });
addEventListener('load', () => {
  if (!window.gsap || reduced) { showReveals(); return; }
  const st = document.createElement('script'); st.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js';
  st.onload = setupScroll; st.onerror = showReveals; document.head.appendChild(st);
});
function setupScroll() {
  const g = window.gsap;
  g.registerPlugin(window.ScrollTrigger);
  const jobs = [];
  g.utils.toArray('.reveal').forEach((el) => jobs.push(() => g.to(el, { opacity: 1, y: 0, duration: 0.9, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 86%' } })));
  // parallax: the film (background) drifts slower than the title and controls (foreground) as the hero leaves
  const hero = document.querySelector('.hero');
  jobs.push(() => g.to('.hero-film', { yPercent: 24, scale: 1.06, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } }));
  jobs.push(() => g.to('.hero-title', { yPercent: -50, opacity: 0.1, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } }));
  // prints inside their frames move against the page (frames are overflow: hidden)
  g.utils.toArray('.piece-fig img').forEach((img) => jobs.push(() => { img.classList.add('px');
    g.fromTo(img, { yPercent: -8 }, { yPercent: 8, ease: 'none', scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } }); }));
  // background layers drift WITH the scroll (so they read as further away); headings move against it (nearer)
  g.utils.toArray('.paper, .studio').forEach((sec) => jobs.push(() => g.fromTo(sec, { '--bgy': '-110px' }, { '--bgy': '110px', ease: 'none', scrollTrigger: { trigger: sec, start: 'top bottom', end: 'bottom top', scrub: 0.4 } })));
  g.utils.toArray('main h2:not(.hero-title)').forEach((h) => jobs.push(() => g.fromTo(h, { yPercent: 18 }, { yPercent: -18, ease: 'none', scrollTrigger: { trigger: h, start: 'top bottom', end: 'bottom top', scrub: 0.4 } })));
  const arc = document.querySelector('.arc-draw path');
  if (arc) jobs.push(() => { g.set(arc, { strokeDasharray: '0.006 0.004', clipPath: 'inset(0 100% 0 0)' }); g.fromTo('.arc-draw', { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', ease: 'none', scrollTrigger: { trigger: '.arc-fig', start: 'top 75%', end: 'bottom 45%', scrub: 0.6 } }); });
  runIdle(jobs);
}

// ---------------------------------------------------------------- gallery lightbox
const lb = $('#lightbox');
document.querySelectorAll('#gal-row button').forEach((b) => b.addEventListener('click', () => {
  const img = new Image(); img.src = b.dataset.full; img.alt = b.querySelector('img').alt;
  $('#lb-frame').replaceChildren(img); lb.hidden = false; $('#lb-x').focus();
}));
const closeLb = () => { lb.hidden = true; };
$('#lb-x').addEventListener('click', closeLb); lb.addEventListener('click', (e) => { if (e.target === lb) closeLb(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !lb.hidden) closeLb(); });

// the planner measures its canvas; run during script evaluation that forced the page's first full layout (434 ms at
// 4x CPU once nothing earlier did). It starts when it nears the viewport; IO callbacks run after the browser's own layout.
{ const fc = $('#fit-canvas'); if (fc) new IntersectionObserver(([e], o) => { if (e.isIntersecting) { o.disconnect(); initPlanner(); } }, { rootMargin: '800px 0px' }).observe(fc); }

// ---------------------------------------------------------------- control deck: one tab open, chair always in view
const tabs = [...document.querySelectorAll('.tabs [role=tab]')];
function openTab(id, focus) {
  tabs.forEach((b) => { const on = b.dataset.go === id; b.setAttribute('aria-selected', String(on)); b.tabIndex = on ? 0 : -1; if (on && focus) b.focus(); });
  document.querySelectorAll('#panel [data-tab]').forEach((el) => { el.hidden = el.dataset.tab !== id; });
  $('#panel').scrollTop = 0;
}
tabs.forEach((b, i) => {
  b.addEventListener('click', () => openTab(b.dataset.go));
  b.addEventListener('keydown', (e) => { const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (d) { e.preventDefault(); openTab(tabs[(i + d + tabs.length) % tabs.length].dataset.go, true); } });
});
openTab('looks');
// a signature pick jumps nowhere: the chair changes in view; 'Order' tab holds price + actions

// phone price dock: shown while the stage is on screen and the summary isn't
const dock = $('#dock'); let stageOn = false, sumOn = false;
const dockUpd = () => { const on = stageOn && !sumOn; dock.classList.toggle('is-on', on); dock.setAttribute('aria-hidden', String(!on)); };
new IntersectionObserver(([e]) => { stageOn = e.isIntersecting; dockUpd(); }, { threshold: 0.2 }).observe($('#build'));
new IntersectionObserver(([e]) => { sumOn = e.isIntersecting; dockUpd(); }).observe($('.sum'));
