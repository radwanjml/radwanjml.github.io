// Live layer on the island plate (handoff Addenda 5, 7, 21, 25, 26).
// The plate is a Blender render. This canvas sits exactly over it with the same camera:
//   1. a full-screen pass writes the render's depth (no colour), so anything in front hides the character;
//   2. pass A draws the character, lit like the plate (suns, nearest lamps with the plate's flicker,
//      fireflies), shaded by invisible proxies of trees and ruins, plus the glow rings;
//   3. pass B draws walk.glb as a shadow-only ground that receives ONLY the character's shadow
//      (the plate already has the island's own shadows). Both passes depth-test against the plate.
// Note (three r170): the shadow map keeps casters that pass the MAIN camera's layer test, not the
// shadow camera's. So casters are chosen by which layers the main camera sees in each pass; the
// proxies are drawn in pass A with no colour/depth writes, the character re-drawn in pass B the same way.
// Movement: walk.glb heights; layout.json circles -> ponds -> island edge, one authority per contact.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { buildPip, buildMoobi } from '../js/rigs.js';
import { stepVelocity, steerTo, isTap } from '../js/motion.js';
import { buildEli3 } from './chars.js';
import { makeWave } from './wave.js';

const DATA = 'assets/island/data/';
const MEDIA = { wide: [1920, 1080], portrait: [1215, 1519] };   // plate pixels (WebM; MP4 portrait is 1216x1520)
const CHARS = {
  pip: { url: 'assets/models/pip.glb', build: buildPip, h: 1.3 },
  moobi: { url: 'assets/models/moobi.glb', build: buildMoobi, h: 1.3 },
  eli3: { url: 'assets/models/eli3.glb', build: buildEli3, h: 1.15 },
};
// Characters are drawn larger than life so they read at plate scale (stylised, like the plate's own props).
const BOOST = { wide: 1.2, portrait: 1.45 };
const SPEED = 3.2;        // m/s; the walkable island is ~16 m across
const BODY_R = 0.32;      // character radius for colliders
const HOP_TOP = 0.35;     // colliders lower than this are stepped over
const LABEL_LIFT = { work: 3.15, lab: 4.1, models: 1.55, about: 2.9 };
const LAYER = { char: 1, proxy: 2, ground: 3 };
// The plate's depth includes grass (~0.2-0.5 m above walk.glb's soil), so ground-hugging things are
// lifted toward the camera by this much: they sit on the grass tops, and anything further in front still wins.
const GRASS_LIFT = 0.55;
// Light calibration (tuned against the plate, Addendum 26)
const SUN_K = 0.34, LAMP_K = 0.085, FLY_K = 18, LAMP_RANGE = 7;
const MODE = {
  dark: { exposure: 0.86, shadow: 0x140c28, shadowOpacity: 0.62, rim: 0.7, ring: 0xe8b04a },
  light: { exposure: 1.0, shadow: 0x3a2a3a, shadowOpacity: 0.62, rim: 0.5, ring: 0x6a55e8 },
  night: { exposure: 0.64, shadow: 0x050818, shadowOpacity: 0.66, rim: 1.0, ring: 0x8fa8e8 },
};
const RING = { peak: 0.7, near: 3, far: 5 };
const GLOW = { transparent: true, depthWrite: false, blending: THREE.CustomBlending, blendEquation: THREE.AddEquation,
  blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor, blendSrcAlpha: THREE.ZeroFactor, blendDstAlpha: THREE.OneFactor };

const b2t = (x, y, z) => new THREE.Vector3(x, z, -y);   // Blender (+Z up) -> three (+Y up)
globalThis.__meshoptWorkers ||= (MeshoptDecoder.useWorkers?.(2), true);   // Addendum 54: decode GLB geometry off the main thread (load-time microtask bursts in Red's trace)
const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
const getJSON = (f) => fetch(DATA + f).then((r) => r.json());
const flicker = (t, k) => (k == null ? 1 : 1 + 0.07 * Math.sin(2 * Math.PI * (7 * t + 0.13 * k)) + 0.045 * Math.sin(2 * Math.PI * (17 * t + 0.41 * k))
  + 0.03 * Math.sin(2 * Math.PI * (31 * t + 0.77 * k)) - 0.06 * Math.max(0, Math.sin(2 * Math.PI * (3 * t + 0.29 * k))) ** 8);

/** A three.js camera identical to the Blender one: sensor fit AUTO, lens shift, Z-up -> Y-up. */
function blenderCamera(c, W, H) {
  const max = Math.max(W, H);
  const tanV = (c.sensor_width_mm / 2 / c.lens_mm) * (H / max);
  const cam = new THREE.PerspectiveCamera(THREE.MathUtils.radToDeg(2 * Math.atan(tanV)), W / H, 0.5, 200);
  cam.position.copy(b2t(...c.position));
  const [w, x, y, z] = c.quaternion_wxyz;
  cam.quaternion.setFromAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI / 2).multiply(new THREE.Quaternion(x, y, z, w));
  cam.updateProjectionMatrix();
  const e = cam.projectionMatrix.elements;   // lens shift, in units of the larger sensor side
  e[8] += 2 * c.shift_x * max / W;
  e[9] += 2 * c.shift_y * max / H;
  cam.projectionMatrixInverse.copy(cam.projectionMatrix).invert();
  cam.updateMatrixWorld(true);
  return cam;
}

/** Full-screen pass that writes the render's depth and no colour. Runs before everything else. */
function depthPass(near, far) {
  const mat = new THREE.ShaderMaterial({
    uniforms: { tDepth: { value: null }, near: { value: near }, far: { value: far }, camNear: { value: 0.5 }, camFar: { value: 200 } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
    fragmentShader: `#include <packing>
      uniform sampler2D tDepth; uniform float near, far, camNear, camFar; varying vec2 vUv;
      void main() {
        vec3 t = texture2D(tDepth, vUv).rgb;
        float d = (t.r * 65280.0 + t.g * 255.0) / 65535.0;   // 16-bit linear view Z, packed R=high G=low
        gl_FragDepth = d > 0.9997 ? 1.0 : viewZToPerspectiveDepth(-(near + (far - near) * d), camNear, camFar);
        gl_FragColor = vec4(0.0);
      }`,
    colorWrite: false, depthWrite: true, depthTest: true, depthFunc: THREE.AlwaysDepth,
  });
  const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
  quad.frustumCulled = false;
  quad.renderOrder = -1000;   // layer 0 only: pass B must keep pass A's depth (plate + character)
  return quad;
}

/** Pull a ground-hugging material toward the camera in view space, so walk.glb's approximation of the
 *  terrain never z-fights with (or sinks under) the plate's depth, while real things in front still win. */
function liftTowardCamera(material, metres) {
  material.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader.replace('#include <project_vertex>', `#include <project_vertex>
      mvPosition.xyz += normalize(-mvPosition.xyz) * ${metres.toFixed(3)};
      gl_Position = projectionMatrix * mvPosition;`);
  };
  // three keys programs by the onBeforeCompile source text, which is identical for every lift amount
  material.customProgramCacheKey = () => 'lift' + metres.toFixed(3);
  return material;
}

function blobTex() {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d'), gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  gr.addColorStop(0, 'rgba(0,0,0,.55)'); gr.addColorStop(.5, 'rgba(0,0,0,.2)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

// ---------- glow ring + rising motes (additive, depth-tested) ----------
function makeRing(radius) {
  const group = new THREE.Group();
  const uniforms = { uColor: { value: new THREE.Color() }, uOpacity: { value: 0 }, uTime: { value: 0 }, uInside: { value: 0 } };
  const ringMat = liftTowardCamera(new THREE.ShaderMaterial({
    uniforms, ...GLOW,
    vertexShader: 'varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: `uniform vec3 uColor; uniform float uOpacity, uTime, uInside; varying vec2 vP;
      void main(){
        float r = length(vP);                                     // ring at r = 1
        vec3 core = mix(uColor, vec3(1.0), 0.7);                  // hot near-white line, accent halo: reads as light, not paint
        float line = exp(-pow((r - 1.0) / 0.035, 2.0));
        float halo = exp(-pow((r - 1.0) / 0.2, 2.0));
        float inner = exp(-pow((r - 0.82) / 0.02, 2.0)) * 0.35;   // fine inner hairline, like an engraved rim
        float floorL = smoothstep(1.05, 0.0, r) * 0.22;
        float ang = atan(vP.y, vP.x);
        float sweep = 0.7 + 0.3 * sin(ang * 2.0 - uTime * 1.4);
        // inside the ring: ripples run outward from the centre
        float rip = uInside * exp(-pow((r - fract(uTime * 0.6) * 1.25) / 0.05, 2.0)) * (1.0 - fract(uTime * 0.6)) * 0.9;
        vec3 col = core * (line * 1.5 + inner) + uColor * (halo * 0.75 * sweep + floorL + rip);
        gl_FragColor = vec4(col * uOpacity, 1.0);
      }`,
  }), GRASS_LIFT + 0.25);   // sits on the grass tops, not in them
  // shader works in units of the ring radius
  const ring = new THREE.Mesh(new THREE.CircleGeometry(1.25, 72), ringMat);
  ring.rotation.x = -Math.PI / 2; ring.scale.setScalar(radius);
  group.add(ring);
  const N = 22, pos = new Float32Array(N * 3), seed = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    const a = Math.random() * Math.PI * 2, rr = radius * (0.55 + Math.random() * 0.5);
    pos[i * 3] = Math.cos(a) * rr; pos[i * 3 + 2] = Math.sin(a) * rr; seed[i] = Math.random();
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('seed', new THREE.BufferAttribute(seed, 1));
  const motes = new THREE.Points(g, new THREE.ShaderMaterial({
    uniforms: { ...uniforms, uScale: { value: 300 } }, ...GLOW,
    vertexShader: `attribute float seed; uniform float uTime, uScale; varying float vA;
      void main(){
        float k = fract(uTime * (0.16 + seed * 0.12) + seed);
        vec3 p = position; p.y += k * 1.7; p.xz *= 1.0 - k * 0.25;
        vA = sin(k * 3.14159) * (0.5 + 0.5 * seed) * (0.65 + 0.35 * sin(uTime * 7.0 + seed * 40.0));   // twinkle
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = uScale * (0.13 + 0.1 * seed) / -mv.z;
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `uniform vec3 uColor; uniform float uOpacity; varying float vA;
      void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d); a *= a; gl_FragColor = vec4(mix(uColor, vec3(1.0), 0.45 * a) * a * vA * uOpacity * 1.4, 1.0); }`,
  }));
  motes.frustumCulled = false;
  group.add(motes);
  return { group, uniforms, motes, level: 0 };
}

// ---------- movement rules, in Blender XY (layout.json's own space) ----------
function makeWorld(L) {
  const solid = L.colliders.filter((c) => c.top >= HOP_TOP);
  const I = L.island, [cx, cy] = I.center;
  const taper = (x) => 0.8 + 0.2 * Math.min(1, Math.max(0, (x - cx + I.rx) / (2 * I.rx)));
  const edgeRatio = (x, y) => ((x - cx) / I.rx) ** 2 + ((y - cy) / (I.ry * taper(x))) ** 2;
  function resolve(p) {
    for (const c of solid) {                         // 1. circles
      const dx = p.x - c.x, dy = p.y - c.y, d = Math.hypot(dx, dy), m = c.r + BODY_R;
      if (d < m) { if (d > 1e-5) { p.x = c.x + dx / d * m; p.y = c.y + dy / d * m; } else p.x = c.x + m; }
    }
    for (const e of L.ponds) {                       // 2. ponds (ellipses x1.05)
      const rx = e.rx * 1.05 + BODY_R, ry = e.ry * 1.05 + BODY_R;
      const u = (p.x - e.x) / rx, v = (p.y - e.y) / ry, k = u * u + v * v;
      if (k < 1) { const s = 1 / Math.sqrt(Math.max(k, 1e-6)); p.x = e.x + (p.x - e.x) * s; p.y = e.y + (p.y - e.y) * s; }
    }
    for (let i = 0; i < 3; i++) {                    // 3. island edge, last word
      const r = edgeRatio(p.x, p.y);
      if (r <= 0.82) break;
      const s = Math.sqrt(0.82 / r) - 1e-3;
      p.x = cx + (p.x - cx) * s; p.y = cy + (p.y - cy) * s;
    }
    return p;
  }
  /** How far p is inside anything solid (0 = legal). Used by the self-test. */
  function violation(p) {
    let v = 0;
    for (const c of solid) v = Math.max(v, c.r + BODY_R - Math.hypot(p.x - c.x, p.y - c.y));
    for (const e of L.ponds) { const u = (p.x - e.x) / (e.rx * 1.05 + BODY_R), w = (p.y - e.y) / (e.ry * 1.05 + BODY_R); v = Math.max(v, (1 - Math.hypot(u, w)) * Math.min(e.rx, e.ry)); }
    return Math.max(v, (edgeRatio(p.x, p.y) - 0.82) * I.rx);
  }
  // trail graph: every path is a polyline; branch paths join the main path at their nearest point
  const nodes = [], adj = [];
  const add = (pt) => { nodes.push({ x: pt[0], y: pt[1] }); adj.push([]); return nodes.length - 1; };
  const link = (a, b) => { adj[a].push(b); adj[b].push(a); };
  const mainCount = L.paths.main.length;
  for (const [name, pts] of Object.entries(L.paths)) {
    let prev = null;
    const first = nodes.length;
    pts.forEach((pt) => { const n = add(pt); if (prev !== null) link(prev, n); prev = n; });
    if (name !== 'main') {
      let best = 0, bd = Infinity;
      for (let j = 0; j < mainCount; j++) { const d = Math.hypot(nodes[j].x - pts[0][0], nodes[j].y - pts[0][1]); if (d < bd) { bd = d; best = j; } }
      link(best, first);
    }
  }
  const nearestNode = (p) => { let b = 0, bd = Infinity; nodes.forEach((n, i) => { const d = Math.hypot(n.x - p.x, n.y - p.y); if (d < bd) { bd = d; b = i; } }); return b; };
  function route(from, to) {   // BFS on the trail graph, then straight to the goal
    const s = nearestNode(from), g = nearestNode(to), prev = new Array(nodes.length).fill(-1), seen = new Set([s]), q = [s];
    while (q.length) { const n = q.shift(); if (n === g) break; for (const m of adj[n]) if (!seen.has(m)) { seen.add(m); prev[m] = n; q.push(m); } }
    const out = []; for (let n = g; n !== -1; n = prev[n]) out.unshift({ ...nodes[n] });
    out.push({ ...to });
    return out;
  }
  return { resolve, route, edgeRatio, violation };
}

/** Invisible stand-ins for what shades the character: tree canopies, arch, observatory, hut, lanterns.
 *  Sizes come from layout.json colliders (positions, radii, tops) plus canopy estimates. */
function makeProxies(L, groundAt) {
  const group = new THREE.Group(), mat = new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: false, depthTest: false });
  const add = (geo, x, y, z) => { const m = new THREE.Mesh(geo, mat); m.position.copy(b2t(x, y, z)); m.castShadow = true; m.layers.set(LAYER.proxy); group.add(m); return m; };
  for (const c of L.colliders) {
    const base = groundAt(c.x, -c.y, 0);
    if (c.kind === 'tree_trunk') {
      add(new THREE.CylinderGeometry(c.r * 0.7, c.r, c.top - base, 10), c.x, c.y, base + (c.top - base) / 2);
      add(new THREE.SphereGeometry(1.9, 16, 12), c.x, c.y, c.top - 1.2).scale.set(1, 0.72, 1);   // canopy
    } else if (c.kind === 'hut') {
      add(new THREE.CylinderGeometry(c.r, c.r, c.top - base - 0.9, 12), c.x, c.y, base + (c.top - base - 0.9) / 2);
      add(new THREE.ConeGeometry(c.r * 1.75, 1.3, 12), c.x, c.y, c.top - 0.55);                     // roof overhang
    } else {
      add(new THREE.CylinderGeometry(c.r * 0.8, c.r * 0.8, c.top - base, 10), c.x, c.y, base + (c.top - base) / 2);
    }
  }
  const arch = L.colliders.filter((c) => c.kind === 'arch_pillar');
  if (arch.length === 2) {   // lintel across the pillars
    const [a, b] = arch, top = Math.max(a.top, b.top);
    add(new THREE.BoxGeometry(Math.hypot(a.x - b.x, a.y - b.y) + 0.8, 0.6, 0.7), (a.x + b.x) / 2, (a.y + b.y) / 2, top - 0.3);
  }
  const s = L.sections.lab;   // observatory dome: a half shell over the back wall
  if (s) {
    const dome = add(new THREE.SphereGeometry(2.0, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), s.x, s.y + 0.3, s.z + 2.4);
    dome.scale.set(1, 0.9, 1);
  }
  return group;
}

export async function initIsland({ stageEl, liveEl, plate, labels = [], onEnter, reducedMotion = false }) {
  const [cams, L] = await Promise.all([getJSON('cameras.json'), getJSON('layout.json')]);
  const world = makeWorld(L);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.debug.checkShaderErrors = /[?&]sc=1/.test(location.search);   // Addendum 54: off by default; the per-shader status query made the page wait on the GPU (1 s first frame, cold cache). ?sc=1 turns it back on for debugging
  renderer.toneMapping = THREE.AgXToneMapping;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setClearColor(0x000000, 0);
  renderer.autoClear = false;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const canvas = renderer.domElement;
  canvas.style.cssText = 'position:absolute;display:block;touch-action:pan-y;opacity:0;transition:opacity .8s ease';
  liveEl.appendChild(canvas);

  const scene = new THREE.Scene();
  const texLoader = new THREE.TextureLoader();
  const depthTex = {};
  const loadDepth = (view) => depthTex[view] || (depthTex[view] = new Promise((res) => texLoader.load(`assets/island/depth_${view}.webp`, (t) => {
    t.colorSpace = THREE.NoColorSpace; t.minFilter = t.magFilter = THREE.NearestFilter; t.generateMipmaps = false;
    const img = t.image, c = document.createElement('canvas'); c.width = img.width; c.height = img.height;
    const g = c.getContext('2d', { willReadFrequently: true }); g.drawImage(img, 0, 0);
    t.userData.pixels = g.getImageData(0, 0, c.width, c.height);
    res(t);
  })));
  const DN = cams.cam_wide.depth_png.near_m, DF = cams.cam_wide.depth_png.far_m;
  /** Height of the surface the plate shows at (x, z): march the camera ray to the depth-map's view Z. */
  function plateSurfaceY(x, z, guessY, tex) {
    const px = tex.userData.pixels, v = new THREE.Vector3(), P = new THREE.Vector3();
    let y = guessY;
    for (let i = 0; i < 4; i++) {
      v.set(x, y, z).project(camera);
      const u = (v.x + 1) / 2, w = (1 - v.y) / 2;
      if (u < 0 || u > 1 || w < 0 || w > 1) return guessY;
      const ix = Math.min(px.width - 1, Math.floor(u * px.width)), iy = Math.min(px.height - 1, Math.floor(w * px.height)), k = (iy * px.width + ix) * 4;
      const d = (px.data[k] * 256 + px.data[k + 1]) / 65535;
      if (d > 0.9997) return guessY;
      const viewZ = DN + (DF - DN) * d;
      P.set(v.x, v.y, 0.5).unproject(camera).sub(camera.position).normalize();     // ray through that pixel
      const fwd = new THREE.Vector3(); camera.getWorldDirection(fwd);
      P.multiplyScalar(viewZ / P.dot(fwd)).add(camera.position);                  // point at that view depth
      y = P.y;
    }
    return y;
  }
  const dp = depthPass(cams.cam_wide.depth_png.near_m, cams.cam_wide.depth_png.far_m);
  scene.add(dp);

  // walk mesh: invisible for raycasts; a clone is the shadow-only ground (pass B)
  const walk = (await loader.loadAsync(DATA + 'walk.glb')).scene;
  const groundMat = liftTowardCamera(new THREE.ShadowMaterial({ color: 0x000000, opacity: 0.5, transparent: true, depthWrite: false }), GRASS_LIFT);
  const ground = walk.clone(true);
  ground.traverse((o) => { if (o.isMesh) { o.material = groundMat; o.receiveShadow = true; o.layers.set(LAYER.ground); } });
  walk.traverse((o) => { if (o.isMesh) o.material = new THREE.MeshBasicMaterial({ visible: false }); });
  walk.updateMatrixWorld(true);
  scene.add(ground);
  const down = new THREE.Raycaster(), DOWN = new THREE.Vector3(0, -1, 0), from = new THREE.Vector3();
  const groundAt = (x, z, fallback) => {
    from.set(x, 20, z); down.set(from, DOWN);
    const h = down.intersectObject(walk, true)[0];
    return h ? h.point.y : fallback;
  };
  scene.add(makeProxies(L, groundAt));

  // ---------- lights ----------
  const suns = [0, 1, 2].map(() => {
    const d = new THREE.DirectionalLight(0xffffff, 0); d.shadow.mapSize.set(1024, 1024);
    d.shadow.bias = -0.0006; d.shadow.normalBias = 0.03; d.shadow.radius = 3;
    const c = d.shadow.camera; c.left = c.bottom = -2.4; c.right = c.top = 2.4; c.near = 0.5; c.far = 60;
    scene.add(d, d.target); return d;
  });
  const hemi = new THREE.HemisphereLight(0xffffff, 0x223322, 0.6);
  const rim = new THREE.DirectionalLight(0xffffff, 0);   // from behind the character, so it separates from the plate
  scene.add(hemi, rim, rim.target);
  // pass B light: same direction as the shade caster, casts only the character onto the ground
  const groundSun = new THREE.DirectionalLight(0xffffff, 0);
  groundSun.shadow.mapSize.set(1024, 1024); groundSun.shadow.bias = -0.0008; groundSun.shadow.radius = 4;
  { const c = groundSun.shadow.camera; c.left = c.bottom = -4; c.right = c.top = 4; c.near = 0.5; c.far = 60; }
  groundSun.layers.set(LAYER.ground);   // lights only count in a pass whose camera shares their layer
  scene.add(groundSun, groundSun.target);
  const lamps = [0, 1, 2, 3].map(() => { const p = new THREE.PointLight(0xffaa66, 0, LAMP_RANGE, 2); scene.add(p); return p; });
  const fly = new THREE.PointLight(0xc8ff70, 0, 2.2, 2); scene.add(fly);

  // light state lerps over the plate's crossfade (1.2 s)
  const cur = { suns: [0, 1, 2].map(() => ({ c: new THREE.Color(0), i: 0 })), hemiC: new THREE.Color(), hemiI: 0, rimC: new THREE.Color(), rimI: 0, exposure: 1, shadowC: new THREE.Color(), shadowO: 0.5, ring: new THREE.Color(0xe8b04a) };
  const sunDirs = [0, 1, 2].map(() => new THREE.Vector3(0, 1, 0));
  let tgt = null, lightsJ = null, casterDir = new THREE.Vector3(0, 1, 0), groundDir = new THREE.Vector3(0, 1, 0), caster = 0;
  // Addendum 59: shadow directions ease to the new time of day like a time-lapse instead of jumping
  const tgtSunDirs = [0, 1, 2].map(() => new THREE.Vector3(0, 1, 0)), tgtGroundDir = new THREE.Vector3(0, 1, 0);
  let dirsSet = false;
  const lightsCache = {};
  async function setMode(mode) {
    const J = lightsCache[mode] || (lightsCache[mode] = await getJSON(`lights_${mode}.json`));
    const M = MODE[mode] || MODE.dark;
    lightsJ = J;
    // the shadow comes from whichever sun lights the ground most: strength x elevation
    let best = -1;
    J.sun_moon.forEach((s, i) => { const v = s.strength * Math.max(s.dir_from[2], 0.15); if (v > best) { best = v; caster = i; } });
    casterDir.copy(b2t(...J.sun_moon[caster].dir_from)).normalize();
    // ground shadows from a 4-degree sunset sun would be 20 m long; keep them readable (min ~24 deg)
    tgtGroundDir.copy(casterDir); if (tgtGroundDir.y < 0.4) { tgtGroundDir.y = 0.4; tgtGroundDir.normalize(); }
    const fill = J.sun_moon[1];
    tgt = {
      suns: J.sun_moon.map((s) => ({ c: new THREE.Color().setRGB(...s.color), i: s.strength * SUN_K })),
      hemiC: new THREE.Color().setRGB(...fill.color), hemiI: 0.1 + fill.strength * 0.16,
      rimC: new THREE.Color().setRGB(...fill.color).lerp(new THREE.Color(1, 1, 1), 0.3), rimI: M.rim,
      exposure: M.exposure, shadowC: new THREE.Color(M.shadow), shadowO: M.shadowOpacity, ring: new THREE.Color(M.ring),
    };
    J.sun_moon.forEach((s, i) => tgtSunDirs[i].copy(b2t(...s.dir_from)).normalize());
    if (!dirsSet) { dirsSet = true; groundDir.copy(tgtGroundDir); sunDirs.forEach((d, i) => d.copy(tgtSunDirs[i])); }   // first load: no sweep
  }
  function stepLights(dt, phase) {
    if (!tgt) return;
    const k = 1 - Math.exp(-dt * 3.2);   // ~1.2 s to settle
    cur.suns.forEach((s, i) => { s.c.lerp(tgt.suns[i].c, k); s.i += (tgt.suns[i].i - s.i) * k; suns[i].color.copy(s.c); suns[i].intensity = s.i; });
    cur.hemiC.lerp(tgt.hemiC, k); cur.hemiI += (tgt.hemiI - cur.hemiI) * k; hemi.color.copy(cur.hemiC); hemi.groundColor.copy(cur.hemiC).multiplyScalar(0.25); hemi.intensity = cur.hemiI;
    cur.rimC.lerp(tgt.rimC, k); cur.rimI += (tgt.rimI - cur.rimI) * k; rim.color.copy(cur.rimC); rim.intensity = cur.rimI;
    cur.exposure += (tgt.exposure - cur.exposure) * k; renderer.toneMappingExposure = cur.exposure;
    cur.shadowC.lerp(tgt.shadowC, k); cur.shadowO += (tgt.shadowO - cur.shadowO) * k; groundMat.color.copy(cur.shadowC); groundMat.opacity = cur.shadowO;
    cur.ring.lerp(tgt.ring, k);
    const kd = 1 - Math.exp(-dt * 2.2);   // directions a little slower than colour: the shadow visibly swings round
    groundDir.lerp(tgtGroundDir, kd).normalize(); sunDirs.forEach((d, i) => d.lerp(tgtSunDirs[i], kd).normalize());

    // shadow cameras follow the character
    const p = slot.position;
    suns.forEach((d, i) => { d.target.position.copy(p); d.position.copy(sunDirs[i]).multiplyScalar(25).add(p); });
    groundSun.target.position.copy(p); groundSun.position.copy(groundDir).multiplyScalar(25).add(p);
    rim.target.position.copy(p); rim.position.copy(p).sub(camera.position).setY(0).normalize().multiplyScalar(10).add(p); rim.position.y += 6;

    // the 4 lamps nearest the character, with the plate's own flicker at the plate's own time
    const bx = p.x, by = -p.z, bz = p.y;
    const near4 = lightsJ.points.map((l) => ({ l, d: Math.hypot(l.pos[0] - bx, l.pos[1] - by, l.pos[2] - bz) })).sort((a, b) => a.d - b.d).slice(0, 4);
    near4.forEach(({ l }, i) => {
      lamps[i].position.copy(b2t(...l.pos));
      lamps[i].color.setRGB(...l.color);
      lamps[i].intensity = l.watts * LAMP_K * flicker(phase, l.flicker_k);
    });
    // a firefly within 1.5 m lights the character (dusk / night only; golden hour has none)
    let fi = 0;
    if (lightsJ.fireflies?.length) {
      const f = Math.floor(phase * 192) % 192;
      let bd = 1.5;
      for (const path of lightsJ.fireflies) { const q = path[f]; const d = Math.hypot(q[0] - bx, q[1] - by, q[2] - bz - 0.6); if (d < bd) { bd = d; fly.position.copy(b2t(q[0], q[1], q[2])); fi = q[3] * FLY_K * (1 - d / 1.5); } }
    }
    fly.intensity += (fi - fly.intensity) * (1 - Math.exp(-dt * 12));
  }

  // ---------- character ----------
  const slot = new THREE.Group(), visual = new THREE.Group();
  slot.add(visual); scene.add(slot);
  const blobMat = liftTowardCamera(new THREE.MeshBasicMaterial({ map: blobTex(), transparent: true, depthWrite: false, opacity: 0.4 }), GRASS_LIFT);
  const blob = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), blobMat);
  blob.rotation.x = -Math.PI / 2; blob.position.y = 0.02;
  slot.add(blob);
  const sp = L.spawn;
  slot.position.copy(b2t(sp.x, sp.y, 0)); slot.position.y = groundAt(slot.position.x, slot.position.z, sp.z);
  slot.rotation.y = Math.PI * 0.85;

  const loaded = {};
  async function load(name) {
    if (loaded[name]) return loaded[name];
    const gltf = await loader.loadAsync(CHARS[name].url);
    const root = gltf.scene, holder = new THREE.Group();
    holder.add(root); holder.updateMatrixWorld(true);
    const size = new THREE.Box3().setFromObject(root).getSize(new THREE.Vector3());
    const rig = CHARS[name].build(root, slot, visual);
    const mats = new Set();
    root.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; o.layers.enable(LAYER.char); (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => mats.add(m)); } });
    visual.add(holder); holder.visible = false;
    return (loaded[name] = { holder, rig, wave: makeWave(root, name), mats: [...mats], scale: CHARS[name].h / size.y });
  }
  let active = null, activeName = null, pop = 1, view = null;
  const applyScale = () => { if (active) slot.scale.setScalar(active.scale * (BOOST[view] || 1.2)); };
  async function setCharacter(name) {
    if (name === activeName || !CHARS[name]) return;
    const c = await load(name);
    if (active) active.holder.visible = false;
    visual.position.set(0, 0, 0);
    c.holder.visible = true; active = c; activeName = name;
    applyScale();
    blob.scale.setScalar((c.rig.contactSize || 1.4) * 0.8);
    pop = 0;
    if (!reducedMotion) setTimeout(() => active === c && c.wave.start(), firstFrame ? 900 : 350);   // say hello on arrival
  }

  // glow rings at the four destinations
  const rings = {};
  for (const [k, s] of Object.entries(L.sections)) {
    const r = makeRing(s.trigger.radius);
    r.group.position.copy(b2t(s.trigger.x, s.trigger.y, 0));
    r.group.position.y = Math.max(groundAt(r.group.position.x, r.group.position.z, s.z), s.z) + 0.03;   // raised floors (observatory) sit above walk.glb
    scene.add(r.group); rings[k] = r;
  }
  let preview = null;   // a hovered ruin label previews its ring

  // tap marker
  const tapMat = liftTowardCamera(new THREE.MeshBasicMaterial({ color: 0xffffff, opacity: 0, premultipliedAlpha: true, ...GLOW }), GRASS_LIFT - 0.1);
  const tapMark = new THREE.Mesh(new THREE.RingGeometry(0.22, 0.3, 40), tapMat);
  tapMark.rotation.x = -Math.PI / 2; scene.add(tapMark);
  let tapT = 1;

  // ---------- layout: the canvas covers the plate exactly like the <video> (object-fit: cover) ----------
  let camera = null, W = 1, H = 1;
  async function layout() {
    const v = plate.view, bw = liveEl.clientWidth, bh = liveEl.clientHeight;   // layout size, before any CSS zoom
    if (!bw || !bh) return;
    const zoom = liveEl.getBoundingClientRect().width / bw || 1;
    const [mw, mh] = MEDIA[v];
    const img = stageEl.querySelector('.plate-layer.on img') || stageEl.querySelector('.plate-poster');
    const [px, py] = (getComputedStyle(img).objectPosition || '50% 50%').split(' ').map((s) => parseFloat(s) / 100);
    const s = Math.max(bw / mw, bh / mh);
    W = mw * s; H = mh * s;
    Object.assign(canvas.style, { width: W + 'px', height: H + 'px', left: (bw - W) * px + 'px', top: (bh - H) * py + 'px' });
    renderer.setPixelRatio(Math.min(devicePixelRatio * zoom, 1.25, 2600 / W));   // was 2: the plate under it is video; 1.25x reads the same (Addendum 46)
    renderer.setSize(W, H, false);
    if (v !== view) {
      view = v;
      camera = blenderCamera(v === 'wide' ? cams.cam_wide : cams.cam_portrait, mw, mh);
      camera.layers.set(0);
      const tex = await loadDepth(v);
      dp.material.uniforms.tDepth.value = tex;
      applyScale();
      for (const [k, s] of Object.entries(L.sections)) {   // seat each ring on what the plate shows there (raised floors)
        const g = rings[k].group, walkY = groundAt(g.position.x, g.position.z, s.z);
        g.position.y = Math.max(walkY, Math.min(walkY + 0.8, plateSurfaceY(g.position.x, g.position.z, walkY, tex))) + 0.03;
      }
    }
    for (const r of Object.values(rings)) r.motes.material.uniforms.uScale.value = H * renderer.getPixelRatio() * 0.9;
    placeLabels();
  }

  // ruin labels pinned to their sections through the same camera
  const tmp = new THREE.Vector3();
  function placeLabels() {
    if (!camera) return;
    const cr = canvas.getBoundingClientRect(), sr = stageEl.getBoundingClientRect();
    for (const el of labels) {
      const s = L.sections[el.dataset.section];
      if (!s) continue;
      tmp.copy(b2t(s.x, s.y, s.z + (LABEL_LIFT[el.dataset.section] || 2.4))).project(camera);
      el.style.left = (cr.left - sr.left + (tmp.x + 1) / 2 * cr.width) + 'px';
      el.style.top = (cr.top - sr.top + (1 - tmp.y) / 2 * cr.height) + 'px';
    }
  }
  labels.forEach((el) => {
    el.addEventListener('pointerenter', () => { preview = el.dataset.section; });
    el.addEventListener('pointerleave', () => { preview = null; });
    el.addEventListener('focus', () => { preview = el.dataset.section; });
    el.addEventListener('blur', () => { preview = null; });
  });

  // ---------- input ----------
  const keys = new Set();
  let path = [], touched = false, goal = null;
  const KEYMAP = { KeyW: [0, 1], ArrowUp: [0, 1], KeyS: [0, -1], ArrowDown: [0, -1], KeyA: [-1, 0], ArrowLeft: [-1, 0], KeyD: [1, 0], ArrowRight: [1, 0] };
  const heroVisible = () => { const r = stageEl.getBoundingClientRect(); return r.bottom > 120 && r.top < innerHeight - 120; };
  addEventListener('keydown', (e) => {
    if (e.target.closest?.('input, textarea, select, dialog[open]') || !heroVisible()) return;
    if (KEYMAP[e.code]) { keys.add(e.code); path = []; goal = null; touched = true; if (e.code.startsWith('Arrow')) e.preventDefault(); }
    if (e.code === 'Enter' && near && !e.target.closest?.('a, button')) onEnter?.(near);
  });
  addEventListener('keyup', (e) => keys.delete(e.code));
  addEventListener('blur', () => keys.clear());

  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  let downAt = null;
  canvas.addEventListener('pointerdown', (e) => { downAt = { x: e.clientX, y: e.clientY, t: performance.now() }; });
  canvas.addEventListener('pointerup', (e) => {
    if (!downAt || !isTap(downAt, { x: e.clientX, y: e.clientY, t: performance.now() }, 10, 400) || !camera) { downAt = null; return; }
    downAt = null;
    const r = canvas.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const hit = ray.intersectObject(walk, true)[0];
    if (!hit) return;
    const p = world.resolve({ x: hit.point.x, y: -hit.point.z });
    // a tap inside a ruin's trigger means "go there": take the trail
    const inRing = Object.entries(L.sections).find(([, s]) => Math.hypot(p.x - s.trigger.x, p.y - s.trigger.y) < s.trigger.radius + 0.4);
    if (inRing) walkTo(inRing[0]); else { path = [p]; goal = null; touched = true; }
    tapMark.position.set(p.x, groundAt(p.x, -p.y, hit.point.y) + 0.03, -p.y); tapT = 0;
  });

  /** Walk to a section along the trails (used by the ruin labels and taps on a ring). */
  function walkTo(section) {
    const s = L.sections[section]; if (!s) return;
    const here = { x: slot.position.x, y: -slot.position.z };
    path = world.route(here, { x: s.trigger.x, y: s.trigger.y });
    goal = section; touched = true;
  }

  // ---------- loop ----------
  const stuck = { d: Infinity, t: 0 };
  let vel = { x: 0, z: 0 }, near = null, t = 0, last = performance.now(), inView = true, firstFrame = true;
  new IntersectionObserver(([e]) => { inView = e.isIntersecting; }).observe(stageEl);
  const camFwd = new THREE.Vector3(), camRight = new THREE.Vector3();

  function tick() {
    const now = performance.now(), dt = Math.min((now - last) / 1000, 1 / 20); last = now;
    if (!inView || document.hidden || !active || !camera || dt < 1e-4) return;
    t += dt;

    let input = { x: 0, z: 0 };
    if (keys.size) {
      camera.getWorldDirection(camFwd); camFwd.y = 0; camFwd.normalize();
      camRight.crossVectors(camFwd, THREE.Object3D.DEFAULT_UP).normalize();
      let f = 0, r = 0; for (const k of keys) { r += KEYMAP[k][0]; f += KEYMAP[k][1]; }
      input = { x: camFwd.x * f + camRight.x * r, z: camFwd.z * f + camRight.z * r };
      const m = Math.hypot(input.x, input.z); if (m > 1) { input.x /= m; input.z /= m; }
    } else if (path.length) {
      const wp = path[0], tg = { x: wp.x, z: -wp.y };
      const last1 = path.length === 1;
      input = steerTo({ x: slot.position.x, z: slot.position.z }, tg, last1 ? 0.12 : 0.45, last1 ? 0.8 : 0.01);
      // stuck guard: a waypoint we can't reach (blocked by a collider) is skipped after 0.8 s without progress
      const d = Math.hypot(tg.x - slot.position.x, tg.z - slot.position.z);
      if (d < stuck.d - 0.05) { stuck.d = d; stuck.t = 0; } else stuck.t += dt;
      if ((!input.x && !input.z) || stuck.t > 0.8) { path.shift(); stuck.d = Infinity; stuck.t = 0; }
    } else if (!touched && !reducedMotion) {
      // idle life before the first input: potter about the spawn pad
      input = steerTo({ x: slot.position.x, z: slot.position.z }, { x: sp.x + Math.sin(t * 0.4) * 1.6, z: -(sp.y + Math.cos(t * 0.4) * 0.9) }, 0.08, 1.4);
      input.x *= 0.55; input.z *= 0.55;   // big enough to read as alive in the first five seconds (16 Oct)
    }

    vel = stepVelocity(vel, input, dt, SPEED);
    const p = world.resolve({ x: slot.position.x + vel.x * dt, y: -(slot.position.z + vel.z * dt) });
    const nx = p.x, nz = -p.y;
    vel.x = (nx - slot.position.x) / dt; vel.z = (nz - slot.position.z) / dt;   // sliding along a wall doesn't build speed into it
    slot.position.x = nx; slot.position.z = nz;
    const gy = groundAt(nx, nz, slot.position.y);
    slot.position.y += (gy - slot.position.y) * (1 - Math.exp(-18 * dt));

    const sp2 = Math.hypot(vel.x, vel.z);
    if (sp2 > 0.15) {
      let d = Math.atan2(vel.x, vel.z) - slot.rotation.y;
      while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI;
      slot.rotation.y += d * (1 - Math.exp(-10 * dt));
    }
    if (pop < 1) { pop = Math.min(1, pop + dt * 3); const k = 1 - Math.pow(1 - pop, 3); visual.scale.setScalar(0.6 + 0.4 * k + Math.sin(pop * Math.PI) * 0.12); }
    active.rig.update(dt, t);
    active.wave.apply(dt);

    const phase = plate.phase();
    stepLights(dt, phase);

    // trigger zones + rings
    const bx = slot.position.x, by = -slot.position.z;
    let inside = null;
    for (const [k, s] of Object.entries(L.sections)) {
      const d = Math.hypot(bx - s.trigger.x, by - s.trigger.y);
      if (d < s.trigger.radius) inside = k;
      const r = rings[k];
      let want = d <= RING.near ? 1 : d >= RING.far ? 0 : 1 - (d - RING.near) / (RING.far - RING.near);
      want = want * want * (3 - 2 * want);
      if (preview === k) want = Math.max(want, 0.55);
      if (inside === k) want = 1.25;
      r.level += (want - r.level) * (1 - Math.exp(-dt / 0.2));   // ~0.6 s to settle
      r.uniforms.uOpacity.value = r.level * RING.peak;
      r.uniforms.uTime.value = t;
      r.uniforms.uInside.value += ((inside === k ? 1 : 0) - r.uniforms.uInside.value) * (1 - Math.exp(-dt * 4));
      r.uniforms.uColor.value.copy(cur.ring);
      r.group.visible = r.level > 0.004;
    }
    if (inside !== near) {
      near = inside;
      labels.forEach((el) => el.classList.toggle('near', el.dataset.section === near));
      if (near && goal === near) { goal = null; const n = near; setTimeout(() => near === n && onEnter?.(n), 650); }
    }
    if (tapT < 1) { tapT = Math.min(1, tapT + dt * 1.4); tapMat.opacity = (1 - tapT) * 0.8; tapMat.color.copy(cur.ring); tapMark.scale.setScalar(1 + tapT * 0.8); }

    // pass A: plate depth, character (lit, shaded by the proxies), rings. Proxies are seen (layer 2) so they
    // cast, but they write nothing.
    renderer.clear();
    suns.forEach((d, i) => { d.castShadow = i === caster; });
    groundSun.castShadow = false;
    camera.layers.set(0); camera.layers.enable(LAYER.proxy);
    renderer.render(scene, camera);
    // pass B: only the character casts, onto the shadow-only ground. The character is "drawn" again with
    // no colour or depth writes, purely so it lands in the shadow map; pass A's depth stays as it was.
    // Scene-sun materials refresh when castShadow flips; the ground material only ever sees this pass.
    suns.forEach((d) => { d.castShadow = false; });
    groundSun.castShadow = true;
    for (const m of active.mats) { m.colorWrite = false; m.depthWrite = false; }
    camera.layers.set(LAYER.char); camera.layers.enable(LAYER.ground);
    renderer.render(scene, camera);
    for (const m of active.mats) { m.colorWrite = true; m.depthWrite = true; }
    camera.layers.set(0);

    if (firstFrame) { firstFrame = false; canvas.style.opacity = '1'; }
  }

  await setMode(plate.mode);
  plate.onChange((m) => { setMode(m); layout(); });
  await setCharacter('pip');
  new ResizeObserver(() => { clearTimeout(layout.t); layout.t = setTimeout(layout, 220); }).observe(stageEl);
  await layout();
  // Addendum 53: Red's own Chrome trace showed the island's first frame blocking ~330 ms on every load (shader compile +
  // texture upload inside the first render). Upload textures and compile with KHR_parallel_shader_compile first.
  try {
    scene.traverse((o) => { (Array.isArray(o.material) ? o.material : o.material ? [o.material] : []).forEach((m) => { for (const k in m) { const v = m[k]; if (v && v.isTexture && v.image) renderer.initTexture(v); } }); });
    await renderer.compileAsync(scene, camera);
    // pass B sees another light set (only groundSun), so its program variants differ: compile those too (Addendum 63)
    groundSun.castShadow = true; suns.forEach((d) => { d.castShadow = false; });
    camera.layers.set(LAYER.char); camera.layers.enable(LAYER.ground);
    await renderer.compileAsync(scene, camera);
    camera.layers.set(0);
  } catch (e) { /* older browsers: the first frame compiles as before */ }
  renderer.setAnimationLoop(tick);

  // (debug handle window.__island removed for launch, Addendum 50)
  return { setCharacter, walkTo, get near() { return near; } };
}
