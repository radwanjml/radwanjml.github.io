// Hero playground: a violet disc, Moobi or Pip, three pads that open the Work panels.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import * as stage from './stage.js';
import { stepVelocity, steerTo, clampToDisc, padHit, isTap, damp } from './motion.js';
import { buildMoobi, buildPip } from './rigs.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const DISC_R = 5.2;
const PADS = [
  { id: 'agit', label: 'AGIT', angle: -2.05 },
  { id: 'overspill', label: 'OVERSPILL', angle: Math.PI },
  { id: 'closer', label: 'CLOSER', angle: 2.05 },
].map((p) => ({ ...p, x: Math.sin(p.angle) * 3.4, z: -Math.cos(p.angle) * 3.4, r: 0.62 }));

const PAD_HITS = PADS.map((p) => ({ ...p, r: 0.9 }));   // forgiving hit area; the ring stays 0.62
const HERO_SPEED = 3.4;   // Closer runs 4.2 on a big island; this stage is 5 units across

const CHARS = {
  moobi: { url: 'assets/models/moobi.glb', build: buildMoobi },
  pip: { url: 'assets/models/pip.glb', build: buildPip },
};

export const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);

function blobTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, 'rgba(10,4,24,0.55)');
  grad.addColorStop(0.6, 'rgba(10,4,24,0.2)');
  grad.addColorStop(1, 'rgba(10,4,24,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

// Stage top: a pool of light in the middle falling off to a deep rim, with a fine gold ring.
function discTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 1024;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(512, 512, 40, 512, 512, 512);
  grad.addColorStop(0, '#5a3aa0');
  grad.addColorStop(0.65, '#3d2775');
  grad.addColorStop(1, '#24164a');
  g.fillStyle = grad;
  g.fillRect(0, 0, 1024, 1024);
  g.strokeStyle = 'rgba(232,176,74,0.55)';
  g.lineWidth = 3;
  g.beginPath(); g.arc(512, 512, 498, 0, Math.PI * 2); g.stroke();
  g.strokeStyle = 'rgba(246,239,226,0.07)';
  g.lineWidth = 2;
  g.beginPath(); g.arc(512, 512, 330, 0, Math.PI * 2); g.stroke();
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

function labelTexture(text) {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 128;
  const g = c.getContext('2d');
  g.font = '700 64px "Space Mono", monospace';
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillStyle = '#f6efe2';
  g.fillText(text, 256, 68);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function makePad(p) {
  const group = new THREE.Group();
  group.position.set(p.x, 0.01, p.z);
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(p.r * 0.72, p.r, 48),
    new THREE.MeshBasicMaterial({ color: 0xe8b04a, transparent: true, opacity: 0.85, side: THREE.DoubleSide }),
  );
  ring.rotation.x = -Math.PI / 2;
  const fill = new THREE.Mesh(
    new THREE.CircleGeometry(p.r * 0.72, 48),
    new THREE.MeshBasicMaterial({ color: 0xe8b04a, transparent: true, opacity: 0.12 }),
  );
  fill.rotation.x = -Math.PI / 2;
  const label = new THREE.Mesh(
    new THREE.PlaneGeometry(1.6, 0.4),
    new THREE.MeshBasicMaterial({ map: labelTexture(p.label), transparent: true, depthWrite: false }),
  );
  label.position.y = 0.9;
  group.add(ring, fill, label);
  return { group, ring, fill, label };
}

export async function init(slotEl, { onPad }) {
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x1a1030, 26, 52);   // far rim of the disc melts into the page
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
  const pmrem = new THREE.PMREMGenerator(stage.renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.55;
  pmrem.dispose();

  scene.add(new THREE.HemisphereLight(0xcdb8ff, 0x1a1030, 1.1));
  const key = new THREE.DirectionalLight(0xffd59a, 2.4);
  key.position.set(4, 7, 5);
  const rim = new THREE.DirectionalLight(0x8e6fd1, 2.2);
  rim.position.set(-5, 4, -6);
  scene.add(key, rim);

  const disc = new THREE.Mesh(
    new THREE.CylinderGeometry(DISC_R, DISC_R * 1.04, 0.5, 96),
    new THREE.MeshStandardMaterial({ color: 0x3b2470, roughness: 0.85, envMapIntensity: 0 }),
  );
  disc.position.y = -0.25;
  const top = new THREE.Mesh(
    new THREE.CircleGeometry(DISC_R - 0.12, 96),
    new THREE.MeshStandardMaterial({ map: discTexture(), roughness: 0.92, envMapIntensity: 0 }),
  );
  top.rotation.x = -Math.PI / 2;
  top.position.y = 0.002;
  scene.add(disc, top);

  const pads = PADS.map((p) => { const m = makePad(p); scene.add(m.group); return m; });

  const marker = new THREE.Mesh(
    new THREE.RingGeometry(0.18, 0.26, 32),
    new THREE.MeshBasicMaterial({ color: 0xf6efe2, transparent: true, opacity: 0 }),
  );
  marker.rotation.x = -Math.PI / 2;
  marker.position.y = 0.02;
  scene.add(marker);

  const slot = new THREE.Group();          // position + heading
  const visual = new THREE.Group();        // rig-owned offsets
  slot.add(visual);
  scene.add(slot);
  const shadow = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshBasicMaterial({ map: blobTexture(), transparent: true, depthWrite: false }),
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.01;
  slot.add(shadow);

  // load both characters; Moobi first so first frame isn't blocked on Pip
  const loaded = {};
  async function load(name) {
    if (loaded[name]) return loaded[name];
    const gltf = await loader.loadAsync(CHARS[name].url);
    const root = gltf.scene;
    const holder = new THREE.Group();
    holder.add(root);
    // build while detached: the rig reads world positions to place hand pivots, and the
    // slot may already be mid-drive (Pip loads second). Attached, that gave flying hands.
    holder.updateMatrixWorld(true);
    const rig = CHARS[name].build(root, slot, visual);
    visual.add(holder);
    holder.visible = false;
    loaded[name] = { holder, rig };
    return loaded[name];
  }

  let active = null, activeName = null;
  const api = { onCharacter: null };
  api.setCharacter = async (name) => {
    if (name === activeName || !CHARS[name]) return;
    const c = await load(name);
    if (active) active.holder.visible = false;
    visual.position.set(0, 0, 0);
    c.holder.visible = true;
    active = c; activeName = name;
    shadow.scale.setScalar(c.rig.contactSize);
    api.onCharacter?.(name);
  };

  try {
    await api.setCharacter('moobi');
  } catch (err) {
    console.warn('Character failed to load, keeping the poster.', err);
    return null;
  }
  load('pip').catch(() => {});

  // ---------- input ----------
  const keys = new Set();
  let target = null, touched = false;
  const KEYMAP = { KeyW: [0, -1], ArrowUp: [0, -1], KeyS: [0, 1], ArrowDown: [0, 1], KeyA: [-1, 0], ArrowLeft: [-1, 0], KeyD: [1, 0], ArrowRight: [1, 0] };
  const heroEl = document.getElementById('hero');
  const heroVisible = () => heroEl.getBoundingClientRect().bottom > 80;
  addEventListener('keydown', (e) => {
    if (e.target.closest?.('input, textarea, dialog[open]') || !heroVisible()) return;
    if (e.code === 'Digit1') return api.setCharacter('moobi');
    if (e.code === 'Digit2') return api.setCharacter('pip');
    if (KEYMAP[e.code]) { keys.add(e.code); target = null; touched = true; if (e.code.startsWith('Arrow')) e.preventDefault(); }
  });
  addEventListener('keyup', (e) => keys.delete(e.code));
  addEventListener('blur', () => keys.clear());

  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  const ground = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const hit = new THREE.Vector3();
  let down = null;
  const canvas = stage.canvas;
  canvas.addEventListener('pointerdown', (e) => { down = { x: e.clientX, y: e.clientY, t: performance.now() }; });
  canvas.addEventListener('pointerup', (e) => {
    if (!down || !isTap(down, { x: e.clientX, y: e.clientY, t: performance.now() })) { down = null; return; }
    down = null;
    const r = canvas.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    if (!ray.ray.intersectPlane(ground, hit)) return;
    target = clampToDisc({ x: hit.x, z: hit.z }, DISC_R - 0.7);
    marker.position.x = target.x; marker.position.z = target.z;
    marker.material.opacity = 0.9;
    touched = true;
  });

  // ---------- camera framing ----------
  const camOffset = new THREE.Vector3(0, 8.6, 13.5);
  const look = new THREE.Vector3();
  let mobile = false, wide = false;
  function frameFor(w, h) {
    mobile = w / h < 1;
    wide = innerWidth >= 960;   // stage is full-bleed behind the text: push the disc right
    camera.fov = mobile ? 47 : 30;
    camera.updateProjectionMatrix();
  }

  // ---------- loop ----------
  let vel = { x: 0, z: 0 };
  let padCooldown = 0, lastPad = null;
  const tmp = new THREE.Vector3();

  function tick(dt, t) {
    let input = { x: 0, z: 0 };
    for (const k of keys) { input.x += KEYMAP[k][0]; input.z += KEYMAP[k][1]; }
    if (!keys.size && target) {
      input = steerTo({ x: slot.position.x, z: slot.position.z }, target);
      if (!input.x && !input.z) target = null;
    }
    // idle life before first input: a slow wander so the stage isn't static
    if (!touched) input = steerTo({ x: slot.position.x, z: slot.position.z }, { x: Math.sin(t * 0.4) * 1.3, z: Math.cos(t * 0.4) * 0.9 - 0.6 }, 0.06, 2.5);

    vel = stepVelocity(vel, input, dt, HERO_SPEED);
    const next = clampToDisc({ x: slot.position.x + vel.x * dt, z: slot.position.z + vel.z * dt }, DISC_R - 0.7);
    slot.position.x = next.x; slot.position.z = next.z;
    const sp = Math.hypot(vel.x, vel.z);
    if (sp > 0.15) {
      const want = Math.atan2(vel.x, vel.z);
      let d = want - slot.rotation.y;
      while (d > Math.PI) d -= Math.PI * 2;
      while (d < -Math.PI) d += Math.PI * 2;
      slot.rotation.y += d * (1 - Math.exp(-10 * dt));
    }
    active?.rig.update(dt, t);

    marker.material.opacity = target ? 0.6 + Math.sin(t * 6) * 0.3 : damp(marker.material.opacity, 0, 8, dt);

    // pads: pulse, and fire once when driven onto (only after real input)
    const onPad = touched ? padHit({ x: slot.position.x, z: slot.position.z }, PAD_HITS) : null;
    pads.forEach((p, i) => {
      const lit = PADS[i].id === onPad;
      p.fill.material.opacity = damp(p.fill.material.opacity, lit ? 0.45 : 0.1 + Math.sin(t * 2 + i) * 0.05, 8, dt);
      p.label.quaternion.copy(camera.quaternion);
    });
    padCooldown -= dt;
    if (onPad && onPad !== lastPad && padCooldown <= 0) { padCooldown = 1; keys.clear(); target = null; onPad && setTimeout(() => api.onPadHook(onPad), 250); }
    lastPad = onPad;

    // camera: fixed 3/4, damped follow; character offset to the right on desktop
    tmp.set(slot.position.x * 0.5, mobile ? -0.6 : 0.4, slot.position.z * 0.5);   // aim below centre on phones so the disc rides up clear of the chips
    look.lerp(tmp, 1 - Math.exp(-3 * dt));
    const k = wide ? 1.45 : 1;   // full-bleed desktop stage: pull back so the whole disc reads
    camera.position.set(look.x + camOffset.x, camOffset.y * k, look.z + camOffset.z * k);
    camera.lookAt(look.x - (wide ? 4.2 : 0), look.y - (wide ? 1.2 : 0), look.z);
  }
  api.onPadHook = onPad;

  stage.mount(slotEl);
  stage.run(scene, camera, tick, frameFor);
  frameFor(slotEl.clientWidth, slotEl.clientHeight);
  look.set(0, mobile ? -0.6 : 0.4, 0);
  requestAnimationFrame(() => requestAnimationFrame(() => {
    stage.canvas.classList.add('ready');
    slotEl.parentElement.querySelector('.poster')?.classList.add('gone');
  }));

  api.scene = scene; api.camera = camera; api.tick = tick; api.onResize = frameFor;
  return api;
}
