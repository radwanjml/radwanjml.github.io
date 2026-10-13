// Boot. The page is complete without this file; everything here is enhancement.

const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

function hasWebGL2() {
  try { return !!document.createElement('canvas').getContext('webgl2'); } catch { return false; }
}

// Work loops: play only the most visible one, pause the rest.
function initLoops() {
  const videos = [...document.querySelectorAll('video.loop')];
  if (reducedMotion || !videos.length) return;
  const ratios = new Map();
  const obs = new IntersectionObserver((entries) => {
    for (const e of entries) ratios.set(e.target, e.intersectionRatio);
    let best = null, bestR = 0.6;
    for (const [v, r] of ratios) if (r >= bestR) { best = v; bestR = r; }
    for (const v of videos) {
      if (v === best) { v.preload = 'auto'; v.play().catch(() => {}); }
      else v.pause();
    }
  }, { threshold: [0, 0.6, 0.8, 1] });
  videos.forEach((v) => obs.observe(v));
}

function goToWork(id) {
  const el = document.getElementById(`work-${id}`);
  if (!el) return;
  el.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
  el.setAttribute('tabindex', '-1');
  el.focus({ preventScroll: true });
}

// Hero plate + time switcher: no WebGL needed, posters only under reduced motion.
async function initHero() {
  const { initPlate } = await import('./plate.js');
  const plate = initPlate({
    stageEl: document.getElementById('hero-stage'),
    plateEl: document.getElementById('plate'),
    barEl: document.querySelector('.timebar'),
    reducedMotion,
  });
  window.__plate = plate;   // debugging handle for the live layer work
  if (hasWebGL2()) {
    document.documentElement.classList.add('has-3d');
    initViewer(null);   // live Pip on the plate replaces the old disc playground (step 2)
  }
}

function initViewer(hero) {
  const buttons = document.querySelectorAll('[data-model]');
  buttons.forEach((b) => b.addEventListener('click', async () => {
    const v = await import('./viewer.js');
    v.open(b.dataset.model, hero);
  }));
}

initLoops();
initHero();
