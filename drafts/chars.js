// Draft character stage: Pip, Moobi and Eli3 live, with their procedural rigs.
// The character drives toward the pointer, so the springs (antennae, hands, bell, ears, trunk) show.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { buildPip, buildMoobi } from '../js/rigs.js';
import { stepVelocity, steerTo, clampToDisc } from '../js/motion.js';
import { makeWave } from './wave.js';

const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
const texLoader = new THREE.TextureLoader();
function tex(url) { const t = texLoader.load(url); t.flipY = false; t.colorSpace = THREE.SRGBColorSpace; return t; }

// Eli3's real rig, ported from Closer's V1/ELI3.html (Addendum 32): rolling ball, underdamped body lean,
// ear and hoof springs, and the trunk as a cone chain unrolling about one shared hinge (no quaternion
// slerp, so it never folds through itself). The rotor spin is left out: the site has no spin control.
const clamp = THREE.MathUtils.clamp;
function sp(s, target, k, c, dt) { s.v += (-k * (s.a - target) - c * s.v) * dt; s.a += s.v * dt; }
const S = () => ({ a: 0, v: 0 });
const BALL_R = 0.924, WAVE_CONE = 120 * Math.PI / 180, LOCK_RAMP = 11;
const T = { ear: 0.8, hoof: 1.0, jig: 0.10, flop: 1.5, lock: 1.0 };
const ringW = (i) => Math.pow(Math.sin(Math.min(i / LOCK_RAMP, 1) * Math.PI / 2), T.lock);
function coneAngles(D, angle, flat, ax) {   // signed hinge angle per ring, unwrapped so it stays continuous past 180
  const Dt = flat.clone().applyAxisAngle(ax, angle).normalize();
  const raw = D.map((d) => {
    const dp = d.clone().addScaledVector(ax, -d.dot(ax)).normalize();
    let th = Math.acos(clamp(dp.dot(Dt), -1, 1));
    if (new THREE.Vector3().crossVectors(dp, Dt).dot(ax) < 0) th = -th;
    return th;
  });
  const out = [raw[0]];
  for (let i = 1; i < raw.length; i++) {
    let th = raw[i];
    while (th - out[i - 1] > Math.PI) th -= 2 * Math.PI;
    while (th - out[i - 1] < -Math.PI) th += 2 * Math.PI;
    out.push(th);
  }
  return out;
}

export function buildEli3(root, slot, visual) {
  const doodle = tex('assets/tex/eli3_doodles.webp'), face = tex('assets/tex/eli3_face.webp');
  // her GLB origin is at mid-body: lift so the hooves sit on the ground (measured: 0.55 m sunk otherwise)
  root.updateMatrixWorld(true);
  const baseY = -new THREE.Box3().setFromObject(root).min.y;
  const P = {};
  root.traverse((o) => {
    if (o.name) P[o.name.replace(/[._ ]/g, '')] = o;   // the loader strips dots: Trunk.001 -> Trunk001
    if (!o.isMesh) return;
    (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => {
      if (m.name === 'Base') { m.map = doodle; m.color.set(0xffffff); m.metalness = 0; m.roughness = 0.55; m.needsUpdate = true; }
    });
    if (o.name === 'Screen') o.material = new THREE.MeshStandardMaterial({ color: 0x05070c, roughness: 0.12, map: face, emissive: 0xcfe8ff, emissiveMap: face, emissiveIntensity: 2.2 });
  });
  const rigRoot = P.ElieRoot || root;
  const rig = { ball: P.Ball, body: P.Body, hooves: [], ears: [], trunk: [], bx: S(), bz: S(), bsq: S(), tsx: S(), tsz: S() };
  const bodyRest = rig.body && rig.body.rotation.clone(), bodyRestScale = rig.body && rig.body.scale.clone();
  rigRoot.updateMatrixWorld(true);
  ['L', 'R'].forEach((side) => {   // hooves swing from a virtual shoulder (Pip's floating-hand trick)
    const hoof = P['Hoof' + side]; if (!hoof) return;
    const wp = new THREE.Vector3(); hoof.getWorldPosition(wp); rigRoot.worldToLocal(wp);
    const pv = new THREE.Object3D(); pv.position.set(wp.x * 0.48, wp.y + 0.06, 0);
    rigRoot.add(pv); rigRoot.updateMatrixWorld(true); pv.attach(hoof);
    rig.hooves.push({ pv, hoof, sign: Math.sign(pv.position.x) || 1, restY: hoof.position.y, pitch: S(), roll: S(), vert: S(), ph: Math.random() * 6.28 });
  });
  ['L', 'R'].forEach((side) => { const e = P['Ear' + side]; if (e) rig.ears.push({ node: e, sign: side === 'R' ? 1 : -1, rest: e.rotation.clone(), x: S(), z: S(), y: S() }); });
  const nodes = []; for (let i = 1; i <= 12; i++) { const n = P['Trunk' + String(i).padStart(3, '0')]; if (n) nodes.push(n); }
  const HINGE = new THREE.Vector3(1, 0, 0), SPIN = new THREE.Vector3(0, 0, 1);
  if (nodes.length > 1) {
    const D = []; for (let i = 0; i < nodes.length - 1; i++) D.push(nodes[i + 1].position.clone().normalize());
    D.push(D[D.length - 1].clone());
    const flat = new THREE.Vector3(D[0].x, 0, D[0].z); if (flat.lengthSq() < 1e-6) flat.set(0, 0, 1); flat.normalize();
    SPIN.copy(flat);   // forward: the wave swings about it
    HINGE.crossVectors(flat, new THREE.Vector3(0, 1, 0)).normalize();
    const wav = coneAngles(D, WAVE_CONE, flat, HINGE);
    nodes.forEach((node, i) => rig.trunk.push({ node, aWave: wav[i] }));
  }
  const _cq = new THREE.Quaternion(), _lq = new THREE.Quaternion(), _acc = new THREE.Quaternion(), _inv = new THREE.Quaternion(), _ax = new THREE.Vector3(), _sq = new THREE.Quaternion(), _sw = new THREE.Euler(), _wp = new THREE.Vector3(), _ws = new THREE.Vector3();
  const prevPos = new THREE.Vector3(), vel = new THREE.Vector3(), lastVel = new THREE.Vector3(), rawA = new THREE.Vector3(), sA = new THREE.Vector3(), sV = new THREE.Vector3();
  let first = true, prevYaw = 0, sYaw = 0, travel = 0, waveT = -1;
  root.userData.wave = () => { waveT = 0; };   // wave.js calls this: she waves with her trunk
  return {
    contactSize: 1.5,
    update(dt, t) {
      dt = Math.min(Math.max(dt, 1e-3), 0.033);
      visual.position.y = baseY;
      // kinematics in her own units (the holder is scaled), then rotated into body space
      slot.getWorldPosition(_wp); visual.getWorldScale(_ws); _wp.divideScalar(_ws.y || 1);
      if (first) { prevPos.copy(_wp); prevYaw = slot.rotation.y; first = false; }
      vel.subVectors(_wp, prevPos).multiplyScalar(1 / dt);
      rawA.subVectors(vel, lastVel).multiplyScalar(1 / dt).clampScalar(-25, 25);
      sA.lerp(rawA, 1 - Math.exp(-12 * dt)); sV.lerp(vel, 1 - Math.exp(-18 * dt));
      lastVel.copy(vel);
      const moved = Math.hypot(_wp.x - prevPos.x, _wp.z - prevPos.z); prevPos.copy(_wp);
      let dyaw = slot.rotation.y - prevYaw; while (dyaw > Math.PI) dyaw -= 2 * Math.PI; while (dyaw < -Math.PI) dyaw += 2 * Math.PI;
      sYaw = THREE.MathUtils.lerp(sYaw, clamp(dyaw / dt, -12, 12), 1 - Math.exp(-12 * dt)); prevYaw = slot.rotation.y;
      const cy = Math.cos(slot.rotation.y), sy = Math.sin(slot.rotation.y);
      const lvx = sV.x * cy - sV.z * sy, lvz = sV.x * sy + sV.z * cy, lvy = sV.y;
      const lax = sA.x * cy - sA.z * sy, laz = sA.x * sy + sA.z * cy;
      const spin = Math.abs(sYaw), Dm = 0.40;
      travel += moved; if (rig.ball) rig.ball.rotation.x = travel / BALL_R;   // the ball rolls with distance travelled
      if (rig.body) {   // underdamped lean: leans late, rolls past centre when she stops
        const j = T.jig;
        sp(rig.bx, clamp(-lvz * .075 - laz * .009, -.26, .26) * j * 2.4, 80, 4.5 * Dm, dt);
        sp(rig.bz, clamp(lvx * .075 + lax * .009, -.26, .26) * j * 2.4, 80, 4.5 * Dm, dt);
        sp(rig.bsq, clamp(Math.hypot(lvx, lvz) * 0.022, 0, 0.07) * j, 30, 3.4 * Dm, dt);
        const breathe = Math.sin(t * 2.2) * 0.016 * j, r = rig.bsq.a;
        rig.body.scale.set(bodyRestScale.x * (1 + r * 0.55), bodyRestScale.y * (1 + breathe - r), bodyRestScale.z * (1 + r * 0.55));
        const idle = Math.sin(t * 0.9) * 0.045 + Math.sin(t * 0.53) * 0.025;
        rig.body.rotation.x = bodyRest.x + idle * 0.5 + rig.bx.a; rig.body.rotation.z = bodyRest.z + idle + rig.bz.a;
      }
      let waveCone = 0, waveYaw = 0, waveEnv = 0;
      if (waveT >= 0) {
        waveT += dt; const u = clamp(waveT / 2.4, 0, 1), bell = Math.sin(u * Math.PI);
        waveEnv = bell; waveCone = bell * 0.92; waveYaw = Math.sin(waveT * 7.2) * bell * 0.55;
        if (u >= 1) waveT = -1;
      }
      rig.ears.forEach((E) => {   // ears flop, and pin back during the wave
        const g = T.ear;
        sp(E.x, clamp(-lvz * .07 - laz * .006, -.6, .6) * g + Math.sin(t * 1.9) * .02 * g, 60, 6 * Dm, dt);
        sp(E.z, (clamp(lvx * .07, -.5, .5) + E.sign * clamp(spin * .05, 0, .5)) * g, 60, 6 * Dm, dt);
        sp(E.y, E.sign * 0.45 * waveEnv, 60, 6 * Dm, dt);
        E.node.rotation.set(E.rest.x + E.x.a, E.rest.y + E.y.a, E.rest.z + E.z.a);
      });
      rig.hooves.forEach((H) => {
        const g = T.hoof, tang = clamp(-H.sign * sYaw * .048, -.6, .6) * g;
        sp(H.pitch, clamp(lvz * .105 + laz * .010, -.55, .55) * g + tang + Math.sin(t * 1.6 + H.ph) * .030, 30, 4.4 * Dm, dt);
        sp(H.roll, clamp(-lvx * .105 - lax * .010, -.55, .55) * g + H.sign * clamp(spin * .075, 0, .7) * g, 30, 4.4 * Dm, dt);
        sp(H.vert, clamp(-lvy * .045, -.28, .28) * g, 52, 6.0 * Dm, dt);
        H.pv.rotation.x = H.pitch.a; H.pv.rotation.z = H.roll.a; H.hoof.position.y = H.restY + H.vert.a;
      });
      // trunk: passive flop always; the wave unrolls the cone chain about the one hinge
      sp(rig.tsx, clamp(-lvz * .115 - laz * .013, -.55, .55) * T.flop, 38, 4.2 * Dm, dt);
      sp(rig.tsz, clamp(lvx * .115 + lax * .013, -.55, .55) * T.flop, 38, 4.2 * Dm, dt);
      const nR = Math.max(rig.trunk.length, 1);
      let aPrev = 0; _acc.identity();
      rig.trunk.forEach((s, i) => {
        const a = s.aWave * waveCone * ringW(i);   // ring 0 weight is exactly 0: the socket never opens
        _cq.setFromAxisAngle(HINGE, a - aPrev); aPrev = a;
        _inv.copy(_acc).invert(); _ax.copy(SPIN).applyQuaternion(_inv).normalize();
        _lq.setFromAxisAngle(_ax, i === 0 ? waveYaw : waveYaw * 0.10);
        _sw.set(rig.tsx.a / nR, 0, rig.tsz.a / nR); _sq.setFromEuler(_sw);
        s.node.quaternion.copy(_lq).multiply(_sq).multiply(_cq);
        _acc.multiply(s.node.quaternion);
      });
    },
  };
}

const CHARS = {
  pip: { url: 'assets/models/pip.glb', build: buildPip },
  moobi: { url: 'assets/models/moobi.glb', build: buildMoobi },
  eli3: { url: 'assets/models/eli3.glb', build: buildEli3 },
};

const LIGHT = {   // per time mode: key colour/intensity, hemisphere sky/ground
  light: { key: 0xffd7a0, k: 2.6, sky: 0xfff1dd, ground: 0x8a6a4a, h: 1.2 },
  dark: { key: 0xffb27a, k: 2.0, sky: 0xc7b8ff, ground: 0x2a1d45, h: 1.0 },
  night: { key: 0xbfd0ff, k: 1.5, sky: 0x8fa8e8, ground: 0x0b1024, h: 0.8 },
};

function blob() {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d'), gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  gr.addColorStop(0, 'rgba(0,0,0,.45)'); gr.addColorStop(.6, 'rgba(0,0,0,.16)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

export async function createCharStage(slotEl, { mode = 'dark', radius = 2.4 } = {}) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });   // keeps the last frame when off screen (and in full-page captures)
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.25));
  renderer.toneMapping = THREE.AgXToneMapping;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  slotEl.appendChild(renderer.domElement);
  const canvas = renderer.domElement;
  canvas.style.cssText = 'display:block;width:100%;height:100%;touch-action:pan-y';

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 60);
  camera.position.set(0, 2.7, 6.4);
  const look = new THREE.Vector3(0, 0.8, 0);
  const hemi = new THREE.HemisphereLight(0xffffff, 0x222222, 1);
  const key = new THREE.DirectionalLight(0xffffff, 2); key.position.set(3, 6, 4);
  const rim = new THREE.DirectionalLight(0x9a8cff, 1.4); rim.position.set(-4, 3, -5);
  scene.add(hemi, key, rim);
  const setMode = (m) => { const L = LIGHT[m] || LIGHT.dark; key.color.set(L.key); key.intensity = L.k; hemi.color.set(L.sky); hemi.groundColor.set(L.ground); hemi.intensity = L.h; };
  setMode(mode);

  const slot = new THREE.Group(), visual = new THREE.Group();
  slot.add(visual); scene.add(slot);
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: blob(), transparent: true, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2; shadow.position.y = 0.005; slot.add(shadow);

  const loaded = {};
  let refH = null;
  async function load(name) {
    if (loaded[name]) return loaded[name];
    const gltf = await loader.loadAsync(CHARS[name].url);
    const holder = new THREE.Group(); holder.add(gltf.scene); holder.updateMatrixWorld(true);
    // the GLBs are authored at different sizes: match every character to the first one's overall size
    // (largest bounding-box side, so Pip's antennae and Eli3's ears count the same as a body)
    const sz = new THREE.Box3().setFromObject(gltf.scene).getSize(new THREE.Vector3()), h = Math.max(sz.x, sz.y, sz.z);
    refH ??= h;
    holder.scale.setScalar(refH / h);
    holder.updateMatrixWorld(true);   // so the rig measures itself at its final scale
    const rig = CHARS[name].build(gltf.scene, slot, visual);
    visual.add(holder); holder.visible = false;
    return (loaded[name] = { holder, rig, wave: makeWave(gltf.scene, name) });
  }

  let active = null;
  async function set(name) {
    const c = await load(name);
    if (active) active.holder.visible = false;
    visual.position.set(0, 0, 0);
    c.holder.visible = true; active = c;
    if (seen) c.wave.start();
    shadow.scale.setScalar(c.rig.contactSize || 1.4);
  }

  function size() {
    const w = slotEl.clientWidth, h = slotEl.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false); camera.aspect = w / h;
    camera.fov = w / h < 1 ? 40 : 30; camera.updateProjectionMatrix();
    if (active) { camera.lookAt(look); renderer.render(scene, camera); }   // a resize clears the canvas; redraw even off screen
  }
  new ResizeObserver(size).observe(slotEl); size();

  // pointer -> ground target; leaving the stage sends the character home
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2(), plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), hit = new THREE.Vector3();
  let target = null;
  const aim = (e) => {
    const r = canvas.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    if (ray.ray.intersectPlane(plane, hit)) target = clampToDisc({ x: hit.x, z: hit.z }, radius);
  };
  canvas.addEventListener('pointermove', aim);
  canvas.addEventListener('pointerdown', aim);
  canvas.addEventListener('pointerleave', () => { target = { x: 0, z: 0 }; });

  let vel = { x: 0, z: 0 }, inView = true, last = performance.now(), t = 0;
  let seen = false;   // wave the first time the stage scrolls into view, and on every switch after that
  new IntersectionObserver(([e]) => { inView = e.isIntersecting; if (inView && !seen) { seen = true; setTimeout(() => active?.wave.start(), 400); } }, { threshold: 0.5 }).observe(slotEl);   // seen even if the character is still loading, or no switch ever waves
  renderer.setAnimationLoop(() => {
    const now = performance.now(), dt = Math.min((now - last) / 1000, 1 / 20); last = now;
    if (!inView || !active || dt < 1e-4) return;
    t += dt;
    const input = target ? steerTo({ x: slot.position.x, z: slot.position.z }, target, 0.08, 0.9) : { x: 0, z: 0 };
    vel = stepVelocity(vel, input, dt, 2.6);
    slot.position.x += vel.x * dt; slot.position.z += vel.z * dt;
    const sp = Math.hypot(vel.x, vel.z);
    const want = sp > 0.15 ? Math.atan2(vel.x, vel.z) : Math.atan2(camera.position.x - slot.position.x, camera.position.z - slot.position.z) * 0.6;
    let d = want - slot.rotation.y; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI;
    slot.rotation.y += d * (1 - Math.exp(-(sp > 0.15 ? 9 : 2.5) * dt));
    active.rig.update(dt, t);
    active.wave.apply(dt);
    camera.lookAt(look);
    renderer.render(scene, camera);
  });

  // one still per character for the dock: rendered here, so the thumbnails are the real models
  async function thumbs(names) {
    const out = {}, keep = active, cam = new THREE.PerspectiveCamera(24, 1, 0.05, 60);
    const w = slotEl.clientWidth, h = slotEl.clientHeight, box = new THREE.Box3(), c = new THREE.Vector3(), sz = new THREE.Vector3();
    const sp = slot.position.clone(), sr = slot.rotation.y;
    slot.position.set(0, 0, 0); slot.rotation.y = 0.45;
    shadow.visible = false;
    await Promise.all(names.map(load));
    await new Promise((r) => setTimeout(r, 1500));   // textures load async; a still taken before them is black
    for (const n of names) {
      const ch = await load(n);
      Object.values(loaded).forEach((o) => { o.holder.visible = o === ch; });
      ch.rig.update(1 / 60, 0.5);
      scene.updateMatrixWorld(true);
      box.setFromObject(ch.holder); box.getCenter(c); box.getSize(sz);
      const r = Math.max(sz.x, sz.y, sz.z) * 0.62, dist = r / Math.tan(THREE.MathUtils.degToRad(cam.fov / 2));
      cam.position.set(c.x + dist * 0.18, c.y + dist * 0.12, c.z + dist); cam.lookAt(c);
      renderer.setSize(160, 160, false);
      renderer.render(scene, cam);
      out[n] = canvas.toDataURL('image/png');
    }
    Object.values(loaded).forEach((o) => { o.holder.visible = o === keep; });
    slot.position.copy(sp); slot.rotation.y = sr;
    shadow.visible = true;
    renderer.setSize(w, h, false);
    return out;
  }

  // switching lagged on phones: the first switch downloaded the GLB and compiled its shaders mid-frame.
  // After the first character is up, fetch the others when the page is idle and compile them off screen.
  async function warm(names) {
    for (const n of names) {
      const c = await load(n);
      c.holder.visible = true; try { renderer.compile(scene, camera); } finally { c.holder.visible = c === active; }
    }
  }
  return { set, setMode, thumbs, warm, get active() { return active; } };
}
