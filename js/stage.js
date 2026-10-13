// The one WebGLRenderer on the page. The hero and the viewer borrow it in turn:
// mount() moves the canvas into a slot, run() swaps the scene being drawn.
import * as THREE from 'three';

export const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.toneMapping = THREE.AgXToneMapping;
renderer.outputColorSpace = THREE.SRGBColorSpace;
export const canvas = renderer.domElement;

let slot = null;
let current = null;          // { scene, camera, tick }
let inView = true;
let paused = false;
const clock = new THREE.Clock();

const resizeObs = new ResizeObserver(() => resize());
const viewObs = new IntersectionObserver(([e]) => { inView = e.isIntersecting; sync(); }, { threshold: 0 });
document.addEventListener('visibilitychange', sync);

function resize() {
  if (!slot) return;
  const w = slot.clientWidth, h = slot.clientHeight;
  if (!w || !h) return;
  renderer.setSize(w, h, false);
  if (current?.camera.isPerspectiveCamera) {
    current.camera.aspect = w / h;
    current.camera.updateProjectionMatrix();
  }
  current?.onResize?.(w, h);
}

function frame() {
  const dt = Math.min(clock.getDelta(), 1 / 20);
  // two frames on one timestamp give dt = 0; the rigs divide by dt, so skip the tick
  if (dt > 1e-4) current.tick?.(dt, clock.elapsedTime);
  renderer.render(current.scene, current.camera);
}

function sync() {
  const live = current && slot && inView && !paused && !document.hidden;
  if (live) { clock.getDelta(); renderer.setAnimationLoop(frame); }
  else renderer.setAnimationLoop(null);
}

/** Move the single canvas into slotEl and size it to the slot. */
export function mount(slotEl) {
  if (slot) { resizeObs.unobserve(slot); viewObs.unobserve(slot); }
  slot = slotEl;
  slot.appendChild(canvas);
  resizeObs.observe(slot);
  viewObs.observe(slot);
  inView = true;
  resize();
  sync();
}

/** Draw this scene/camera from now on. tick(dt, t) runs before each frame. */
export function run(scene, camera, tick, onResize) {
  current = { scene, camera, tick, onResize };
  resize();
  sync();
}

export function pause() { paused = true; sync(); }
export function resume() { paused = false; sync(); }
export const getSlot = () => slot;
export const getScene = () => current?.scene;
export const getCamera = () => current?.camera;
