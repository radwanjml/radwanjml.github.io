// Hero plate: the rendered island loop for the current time mode (Addenda 3, 21).
// One <video> per layer, wide or portrait by stage aspect; switching mode crossfades a new
// layer in on top (--mode-fade, 1.2 s) and keeps it in phase with the old one.

export const MODES = ['light', 'dark', 'night'];
export const LOOP_S = 8;
const KEY = 'island-mode';
const THEME = { light: '#F6EFE4', dark: '#1E1830', night: '#0B1024' };
const PORTRAIT_BELOW = 1.19;   // geometric mean of 4:5 and 16:9: pick whichever crops less
const FADE_MS = 1200;

const root = document.documentElement;
const src = (mode, view, ext) => `assets/island/${mode}_${view}.${ext}`;

function stored() {
  try { const m = localStorage.getItem(KEY); return MODES.includes(m) ? m : null; } catch { return null; }
}
function store(m) { try { localStorage.setItem(KEY, m); } catch { /* private mode: session only */ } }
const systemMode = () => (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

export function initPlate({ stageEl, plateEl, barEl, reducedMotion }) {
  const saveData = navigator.connection?.saveData === true;
  const animate = !reducedMotion && !saveData;
  const listeners = new Set();
  let mode = MODES.includes(root.dataset.mode) ? root.dataset.mode : systemMode();
  let userPaused = false, inView = true;

  const viewFor = () => {
    const r = stageEl.getBoundingClientRect();
    return r.width / Math.max(1, r.height) < PORTRAIT_BELOW ? 'portrait' : 'wide';
  };

  // The first layer comes from the HTML with its poster already chosen before paint.
  let current = { el: plateEl.querySelector('.plate-layer'), video: null };
  current.view = current.el.querySelector('img').dataset.view || viewFor();
  current.mode = mode;

  function addVideo(layer, syncFrom) {
    if (!animate) return;
    const v = document.createElement('video');
    v.muted = true; v.loop = true; v.playsInline = true; v.preload = 'auto';
    v.setAttribute('muted', ''); v.setAttribute('playsinline', ''); v.setAttribute('aria-hidden', 'true');
    for (const [ext, type] of [['mp4', 'video/mp4']]) {
      const s = document.createElement('source');
      s.src = src(layer.mode, layer.view, ext); s.type = type;
      v.appendChild(s);
    }
    // Stay in phase with the plate being replaced, so the swap reads as light changing, not a cut.
    // Seek on metadata, then keep correcting while the old plate is still on the page: the new
    // one starts late by however long it took to buffer.
    // Addendum 64: seeking on every timeupdate fed itself (each seek fires timeupdate while the decoder is still
    // catching up): ~120 seeks per switch, seen as the video racing then stalling. Now: one seek when metadata
    // arrives, one when it first plays, then small drift is absorbed by nudging playbackRate (max ±8%, not visible).
    const drift = () => ((syncFrom.currentTime - v.currentTime) % LOOP_S + LOOP_S * 1.5) % LOOP_S - LOOP_S / 2;
    const live = () => syncFrom && syncFrom.isConnected && syncFrom.readyState >= 2;
    const seek = () => { if (live() && Math.abs(drift()) > 0.06) v.currentTime = (syncFrom.currentTime + (v.paused ? 0 : 0.04)) % LOOP_S; };
    let lastSeek = 0;
    const nudge = () => {
      if (!live()) { v.playbackRate = 1; v.removeEventListener('timeupdate', nudge); return; }
      if (v.seeking) return;
      const d = drift(), now = performance.now();
      if (Math.abs(d) > 0.25 && now - lastSeek > 1000) { lastSeek = now; v.playbackRate = 1; seek(); return; }   // big gap: one seek, then cool down
      v.playbackRate = Math.abs(d) < 0.02 ? 1 : 1 + Math.max(-0.08, Math.min(0.08, d * 0.5));
    };
    v.addEventListener('loadedmetadata', seek, { once: true });
    v.addEventListener('playing', () => { seek(); v.addEventListener('timeupdate', nudge); }, { once: true });
    v.addEventListener('playing', () => { v.classList.add('playing'); layer.onReady?.(); }, { once: true });
    // paused by the visitor: still show the synced frame rather than the poster's frame 1
    v.addEventListener('seeked', () => { if (!shouldPlay()) { v.classList.add('playing'); layer.onReady?.(); } }, { once: true });
    layer.el.appendChild(v);
    layer.video = v;
    if (shouldPlay()) v.play().catch(() => {});
  }

  function dropLayer(layer) {
    if (layer.video) { layer.video.pause(); layer.video.removeAttribute('src'); layer.video.querySelectorAll('source').forEach((s) => s.remove()); layer.video.load(); }
    layer.el.remove();
  }

  let pending = null;
  function swap(nextMode, nextView, fade = true) {
    const el = document.createElement('div');
    el.className = 'plate-layer';
    const img = new Image();
    img.alt = '';
    img.className = 'plate-poster';
    img.src = src(nextMode, nextView, 'webp');
    el.appendChild(img);
    plateEl.appendChild(el);
    const layer = { el, mode: nextMode, view: nextView, video: null };
    const prev = current;
    current = layer;
    let shown = false;
    const show = () => {
      if (shown || current !== layer) return;   // once; or superseded by a faster click
      shown = true;
      requestAnimationFrame(() => el.classList.add('on'));
      clearTimeout(pending);
      pending = setTimeout(() => {
        [...plateEl.children].forEach((c) => { if (c !== el) dropLayer({ el: c, video: c.querySelector('video') }); });
      }, fade ? FADE_MS + 100 : 0);
    };
    if (!fade) el.style.transition = 'none';
    // Fade in once the new video is actually playing (video-to-video, in phase), or on the
    // poster when there is no video; never wait longer than 2.5 s on a slow connection.
    layer.onReady = show;
    addVideo(layer, prev.video);
    if (!layer.video) img.decode().then(show, show);
    else setTimeout(show, 2500);
  }

  function setMode(next, { save = true } = {}) {
    if (!MODES.includes(next)) return;
    if (save) store(next);
    if (next === mode) return;
    mode = next;
    root.dataset.mode = next;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME[next]);
    syncBar();
    swap(next, viewFor());
    listeners.forEach((fn) => fn(next));
  }

  // ---- play / pause: only while the hero is on screen, the tab is visible and not paused by the visitor
  const shouldPlay = () => animate && inView && !userPaused && !document.hidden;
  function syncPlay() {
    const v = current.video;
    if (!v) return;
    if (shouldPlay()) v.play().catch(() => {}); else v.pause();
  }
  new IntersectionObserver(([e]) => { inView = e.isIntersecting; syncPlay(); }).observe(stageEl);
  document.addEventListener('visibilitychange', syncPlay);

  // ---- switcher
  const modeBtns = [...barEl.querySelectorAll('[data-mode]')];
  const pauseBtn = barEl.querySelector('.tb-pause');
  function syncBar() { modeBtns.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.mode === mode))); }
  modeBtns.forEach((b) => b.addEventListener('click', () => setMode(b.dataset.mode)));
  if (animate) {
    pauseBtn.hidden = false;
    pauseBtn.addEventListener('click', () => {
      userPaused = !userPaused;
      pauseBtn.setAttribute('aria-pressed', String(userPaused));
      pauseBtn.setAttribute('aria-label', userPaused ? 'Play the island animation' : 'Pause the island animation');
      pauseBtn.title = userPaused ? 'Play' : 'Pause';
      syncPlay();
    });
  }
  syncBar();

  // follow the system scheme until the visitor picks a mode themselves
  matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => { if (!stored()) setMode(systemMode(), { save: false }); });

  // wide <-> portrait when the stage changes shape (rotation, window resize across 960 px)
  let rt = 0;
  new ResizeObserver(() => {
    clearTimeout(rt);
    rt = setTimeout(() => {
      const v = viewFor();
      if (v !== current.view) { swap(mode, v, false); listeners.forEach((fn) => fn(mode)); }
    }, 150);
  }).observe(stageEl);

  addVideo(current, null);

  return {
    get mode() { return mode; },
    get view() { return current.view; },
    /** The video whose clock drives all live timing (null when posters only). */
    get video() { return current.video; },
    /** Loop phase 0..1 from the plate itself: video.currentTime / 8. */
    phase() { const v = current.video; return v ? (v.currentTime % LOOP_S) / LOOP_S : 0; },
    setMode,
    onChange(fn) { listeners.add(fn); return () => listeners.delete(fn); },
  };
}
