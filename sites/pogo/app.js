// POGO lamp builder v3 (22 Nov 2026): arm rolls (ik3), smoothed displayed pose, camera tween, fold chevrons. From v2 (21 Nov 2026): three steps (build, pose, finish), hold-to-move, per-part handles, 2-5 segments, summary + share link.
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { toCreasedNormals, mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { fk } from "./lamp_fk.js";
import * as IK from "./ik3.js";
import { analyse } from "./checks.js";
THREE.Object3D.DEFAULT_UP.set(0, 0, 1);
const V = "";   // bump when rig.json / presets.json / glb change (browsers cache them)
const $ = (s, r = document) => r.querySelector(s), el = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h !== undefined) e.innerHTML = h; return e; };
const toast = (msg, ms = 2600) => { const t = $("#toast"); t.textContent = msg; t.classList.add("on"); clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("on"), ms); };
const safe = (fn, d) => { try { return fn(); } catch (e) { return d; } };
const isTouch = matchMedia("(pointer: coarse)").matches, isNarrow = () => innerWidth < 820;

// ------------------------------------------------------------------------------------------------ data
let rig, presets;
async function boot() {
  try { [rig, presets] = await Promise.all([fetch("rig.json" + V).then((r) => r.json()), fetch("presets.json" + V).then((r) => r.json())]); }
  catch (e) { return fail("Could not load the lamp data (" + e.message + ")."); }
  start();
}
function fail(msg) { const b = $("#boot"); b.classList.add("err"); $("#boot-msg").textContent = msg; }
// ------------------------------------------------------------------------------------------------ renderer / scene
let renderer, scene, camera, controls, lamp, ghosts, glow, key, fill, rim, floorGlow, contact, shadowCatcher;
const stage = $("#stage"), canvas = $("#cv"), overlay = $("#overlay");
function initGL() {
  try { renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" }); } catch (e) { fail("This browser could not start WebGL, which the 3D view needs."); return false; }
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, isTouch ? 2 : 2)); renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.15;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap; renderer.setClearColor(0x000000, 0);
  scene = new THREE.Scene(); const pm = new THREE.PMREMGenerator(renderer); scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture; scene.environmentIntensity = 0.75;
  camera = new THREE.PerspectiveCamera(30, 1, 0.02, 30); camera.up.set(0, 0, 1); camera.position.set(1.55, -1.45, 0.8);
  controls = new OrbitControls(camera, canvas); controls.target.set(0, 0, 0.3); controls.enableDamping = true; controls.dampingFactor = 0.12; controls.minDistance = 0.35; controls.maxDistance = 4; controls.maxPolarAngle = Math.PI * 0.495; controls.screenSpacePanning = true; controls.touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN }; controls.addEventListener("change", () => (dirty = true));
  controls.addEventListener("start", () => { camTw = null; });
  canvas.tabIndex = 0;
  canvas.addEventListener("keydown", (e) => { const k = e.key; if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "+", "=", "-", "_"].includes(k) || e.ctrlKey || e.metaKey || e.altKey) return; e.preventDefault(); camTw = null; const off = camera.position.clone().sub(controls.target), sp = new THREE.Spherical().setFromVector3(off), st = (e.shiftKey ? 0.05 : 0.15); if (k === "ArrowLeft") sp.theta -= st; else if (k === "ArrowRight") sp.theta += st; else if (k === "ArrowUp") sp.phi = Math.max(0.05, sp.phi - st); else if (k === "ArrowDown") sp.phi = Math.min(controls.maxPolarAngle, sp.phi + st); else if (k === "+" || k === "=") sp.radius *= 0.88; else sp.radius *= 1.14; sp.radius = Math.max(controls.minDistance, Math.min(controls.maxDistance, sp.radius)); off.setFromSpherical(sp); camera.position.copy(controls.target).add(off); controls.update(); dirty = true; });
  // v3 studio: warm key (soft shadow), cool fill, strong rim from behind, contact shadow; per-theme values in applySceneTheme()
  renderer.shadowMap.type = THREE.PCFShadowMap;                          // PCF + radius = soft edge (PCFSoft ignores radius)
  key = new THREE.DirectionalLight(0xffe6c8, 3.0); key.position.set(1.3, -1.1, 2.0); key.castShadow = !DBG.has("noshadow"); const sm = isNarrow() ? 1024 : 2048; key.shadow.mapSize.set(sm, sm); Object.assign(key.shadow.camera, { left: -0.9, right: 0.9, top: 0.9, bottom: -0.9, near: 0.5, far: 5 }); key.shadow.bias = -0.0004; key.shadow.normalBias = 0.003; key.shadow.radius = 6; key.shadow.blurSamples = 16; scene.add(key);
  fill = new THREE.DirectionalLight(0xc8d8ff, 0.7); fill.position.set(-1.6, -1.2, 0.6); scene.add(fill);
  rim = new THREE.DirectionalLight(0xd8e6ff, 3.2); rim.position.set(-0.6, 1.8, 1.4); scene.add(rim);
  const g = document.createElement("canvas"); g.width = g.height = 256; const c = g.getContext("2d"), gr = c.createRadialGradient(128, 128, 10, 128, 128, 128); gr.addColorStop(0, "rgba(255,255,255,0.20)"); gr.addColorStop(0.55, "rgba(255,255,255,0.07)"); gr.addColorStop(1, "rgba(255,255,255,0)"); c.fillStyle = gr; c.fillRect(0, 0, 256, 256);
  floorGlow = new THREE.Mesh(new THREE.CircleGeometry(1.5, 64), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(g), transparent: true, depthWrite: false })); floorGlow.position.z = -0.0006; scene.add(floorGlow);
  const g2 = document.createElement("canvas"); g2.width = g2.height = 128; const c2 = g2.getContext("2d"), gr2 = c2.createRadialGradient(64, 64, 0, 64, 64, 64); gr2.addColorStop(0, "rgba(0,0,0,0.55)"); gr2.addColorStop(0.5, "rgba(0,0,0,0.22)"); gr2.addColorStop(1, "rgba(0,0,0,0)"); c2.fillStyle = gr2; c2.fillRect(0, 0, 128, 128);
  contact = new THREE.Mesh(new THREE.CircleGeometry(0.16, 48), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(g2), transparent: true, depthWrite: false })); contact.position.z = -0.0003; scene.add(contact);
  shadowCatcher = new THREE.Mesh(new THREE.PlaneGeometry(4, 4), new THREE.ShadowMaterial({ opacity: 0.22 })); shadowCatcher.receiveShadow = true; scene.add(shadowCatcher);
  lamp = new THREE.Group(); scene.add(lamp); ghosts = new THREE.Group(); scene.add(ghosts); return true;
}
let dirty = true;
function resize() { const w = stage.clientWidth, h = stage.clientHeight; if (!w || !h) return; renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); dirty = true; }
// ------------------------------------------------------------------------------------------------ colours
const ROLE0 = { shell: [[0.035, 0.036, 0.04], 0.35, 0.38], dgal: [[0.13, 0.135, 0.145], 0.9, 0.34], alu: [[0.82, 0.83, 0.85], 1.0, 0.28], org: [[0.95, 0.45, 0.06], 0.4, 0.3], steel: [[0.42, 0.43, 0.45], 1.0, 0.3], dark: [[0.02, 0.02, 0.022], 0.6, 0.35],
  blk: [[0.02, 0.02, 0.022], 0.8, 0.28], pad: [[0.015, 0.015, 0.016], 0.0, 0.7], leg: [[0.09, 0.09, 0.10], 0.3, 0.45], plinth: [[0.012, 0.012, 0.014], 0.7, 0.3], rubber: [[0.012, 0.012, 0.013], 0.0, 0.85], glow: [[1, 0.95, 0.8], 0.0, 0.3], eyeGlow: [[1, 0.96, 0.86], 0.0, 0.4], projGlow: [[0.9, 0.95, 1], 0.0, 0.4], glass: [[1, 1, 1], 0.0, 0.02], grille: [[0.02, 0.02, 0.022], 0.6, 0.35] };
const NODE_ROLE = { round_lens: "glass", round_emitter: "eyeGlow", hex_emitter: "projGlow", hex_grille: "grille" };   // v3: these head parts get their own material (lights, glass)
const emitPos = {}, emitBox = {};
const MOVERS = { brow: "brow", brow_stem: "iris", iris_ring: "iris", iris_drive_pins: "iris", iris_blades: "blades" };          // v3c: CAD head v6 laws (ENGINEERING-SHEET s.13): iris ring + stem turn 0..7.39 deg about (32,-,-3), brow 0..26.2 deg about (32,-,16), axis = look (Y)
const PIVOT = { iris: [0.032, 0, -0.003], brow: [0.032, 0, 0.016] };
const BLADE_LAW = [[0, 0], [1.95, -11.1], [3.81, -21.1], [5.61, -30.6], [7.39, -39.8]];   // ring deg -> blade deg (sheet s.13, non-linear)
const bladeAngle = (r) => { for (let i = 1; i < BLADE_LAW.length; i++) if (r <= BLADE_LAW[i][0]) { const [a0, b0] = BLADE_LAW[i - 1], [a1, b1] = BLADE_LAW[i]; return b0 + ((r - a0) / (a1 - a0)) * (b1 - b0); } return BLADE_LAW[BLADE_LAW.length - 1][1]; };
function splitParts(geo) {         // connected pieces of a merged mesh (positions welded at 0.01 mm)
  const P = geo.attributes.position.array, N = geo.attributes.normal ? geo.attributes.normal.array : null, I = geo.index ? geo.index.array : [...Array(P.length / 3).keys()];
  const id = new Map(), par = []; const vid = (i) => { const k = Math.round(P[i * 3] * 1e5) + "," + Math.round(P[i * 3 + 1] * 1e5) + "," + Math.round(P[i * 3 + 2] * 1e5); if (!id.has(k)) { id.set(k, par.length); par.push(par.length); } return id.get(k); };
  const f = (x) => { while (par[x] !== x) x = par[x] = par[par[x]]; return x; };
  for (let t = 0; t < I.length; t += 3) { const a = vid(I[t]), b = vid(I[t + 1]), c = vid(I[t + 2]); par[f(b)] = f(a); par[f(c)] = f(a); }
  const out = new Map(); for (let t = 0; t < I.length; t += 3) { const r = f(vid(I[t])); if (!out.has(r)) out.set(r, { pos: [], nor: [] }); const o = out.get(r); for (let q = 0; q < 3; q++) { const v = I[t + q]; o.pos.push(P[v * 3], P[v * 3 + 1], P[v * 3 + 2]); if (N) o.nor.push(N[v * 3], N[v * 3 + 1], N[v * 3 + 2]); } }
  return [...out.values()].map((o) => { const g = new THREE.BufferGeometry(); g.setAttribute("position", new THREE.Float32BufferAttribute(o.pos, 3)); if (N) g.setAttribute("normal", new THREE.Float32BufferAttribute(o.nor, 3)); else g.computeVertexNormals(); g.computeBoundingBox(); return g; });
}
const lin2hex = (c) => "#" + new THREE.Color().setRGB(c[0], c[1], c[2], THREE.LinearSRGBColorSpace).getHexString(THREE.SRGBColorSpace);
const CATS = [ // [id, label, roles, hint, swatches]
  ["body", "Body", ["shell"], "Tubes, head shell, arm links", ["#2b2c31", "#d8d5cd", "#1f3b2e", "#8c929c", "#e9e9ec", "#3a4a6b", "#7a2e2e"]],
  ["accent", "Accent", ["org"], "Rings, knobs, focus ring", ["#f27316", "#1fa89a", "#c89b3c", "#e5e5e5", "#2c4fd0", "#d6336c", "#7bc043"]],
  ["trim", "Trim", ["dgal"], "End bands, saddles, thin bands", ["#212227", "#b08d57", "#c8ccd2", "#3a3f45", "#6a4a2c", "#0b0b0c"]],
  ["metal", "Metal", ["alu", "steel"], "Ball joints, collars, neck", ["#d2d4d8", "#c9a24d", "#b87333", "#8b8f98", "#ede8dd", "#2c2d31"]],
  ["detail", "Head details", ["dark"], "Lens, visor, grille", ["#05060a", "#1b2330", "#2a2a2a", "#10261f"]],
  ["pads", "Pads", ["pad", "rubber"], "Gripper pads, feet", ["#050505", "#2a2a2c", "#5a4a3a"]],
  ["base", "Base", ["leg", "plinth"], "Legs and plinth", ["#1a1b1e", "#33353b", "#d8d5cd", "#1f3b2e", "#555a63"]],
  ["light", "Light ring", ["glow"], "Base LED ring", ["#fff0cf", "#ffd9a0", "#d6ecff", "#ff9a6b", "#c7ffd8"]]];
const FINISH = { matte: [0.05, 0.62], satin: [0.35, 0.38], metal: [0.95, 0.28] };
const DEFAULT_COLORS = () => { const o = {}; for (const [id, , roles] of CATS) { const r = ROLE0[roles[0]]; o[id] = { hex: lin2hex(r[0]), finish: r[1] > 0.8 ? "metal" : r[1] > 0.3 ? "satin" : "matte" }; } return o; };
const THEMES = {
  "Graphite & Orange": null,
  "Bone & Teal": { body: ["#d8d5cd", "satin"], accent: ["#1fa89a", "satin"], trim: ["#3a3f45", "metal"], metal: ["#d2d4d8", "metal"], detail: ["#10151c", "satin"], pads: ["#0b0b0c", "matte"], base: ["#2a2d31", "satin"], light: ["#fff0cf", "matte"] },
  "Forest & Brass": { body: ["#1f3b2e", "satin"], accent: ["#c89b3c", "metal"], trim: ["#b08d57", "metal"], metal: ["#c9a24d", "metal"], detail: ["#0b1410", "satin"], pads: ["#0b0b0c", "matte"], base: ["#14211b", "satin"], light: ["#ffd9a0", "matte"] },
  "Blackout": { body: ["#0e0f11", "matte"], accent: ["#e5e5e5", "satin"], trim: ["#2c2d31", "metal"], metal: ["#2c2d31", "metal"], detail: ["#000000", "satin"], pads: ["#050505", "matte"], base: ["#0a0a0b", "matte"], light: ["#d6ecff", "matte"] },
  "Sand & Cobalt": { body: ["#c8b8a0", "satin"], accent: ["#2c4fd0", "satin"], trim: ["#6a4a2c", "metal"], metal: ["#ede8dd", "metal"], detail: ["#10131f", "satin"], pads: ["#2a2a2c", "matte"], base: ["#8c7f6c", "satin"], light: ["#fff0cf", "matte"] },
  "Steel & Rose": { body: ["#8c929c", "metal"], accent: ["#d6336c", "satin"], trim: ["#3a3f45", "metal"], metal: ["#d2d4d8", "metal"], detail: ["#0b0b10", "satin"], pads: ["#0b0b0c", "matte"], base: ["#33353b", "satin"], light: ["#ff9a6b", "matte"] }};
let colors = DEFAULT_COLORS(); const roleMat = {};
const DBG = new URLSearchParams(location.search);   // dev flags: ?noglass ?nolights ?noshadow
function makeGlass() { if (DBG.has("noglass")) return new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.05 }); return new THREE.MeshPhysicalMaterial({ color: 0xffffff, metalness: 0, roughness: 0.02, transmission: 1, thickness: 0.004, ior: 1.5, specularIntensity: 1, envMapIntensity: 1.6 }); }
function addHeadLights(root) { if (DBG.has("nolights")) return;        // real lights at the apertures, aimed along the head's look axis (rig.physics.head.look_local)
  const L = rig.physics.head.look_local, lb = emitBox.round_lens, hb = emitBox.hex_bezel;
  // aperture = where the light leaves the head: round = lens front face, radius = lens radius; hex = bezel front face, opening ~70 % of the bezel's outer half-width (circumradius, points left/right)
  const AP = { eye: lb ? { c: new THREE.Vector3((lb.min.x + lb.max.x) / 2, lb.min.y, (lb.min.z + lb.max.z) / 2), r: (lb.max.x - lb.min.x) / 2 * 0.92, segs: 64 } : null,
               proj: hb ? { c: new THREE.Vector3((hb.min.x + hb.max.x) / 2, hb.min.y, (hb.min.z + hb.max.z) / 2 + 0.0), r: (hb.max.x - hb.min.x) / 2 * 0.7, segs: 6 } : null };
  for (const [k, col, ang, pen, nm] of [["round_emitter", 0xf3f6ff, 0.42, 0.65, "eye"], ["hex_emitter", 0xffb25e, 0.2, 0.3, "proj"]]) {   // round = cool white, hex = warm (Red 22 Nov)
    const p = emitPos[k], ap = AP[nm]; if (!p || !ap) continue; const sp = new THREE.SpotLight(col, 0, 0, ang, pen, 2); sp.position.copy(ap.c); sp.userData.key = nm; sp.userData.ang0 = ang; sp.userData.pen0 = pen; sp.castShadow = false;
    const t = new THREE.Object3D(); t.name = "tgt_" + nm; t.position.set(ap.c.x + L[0] * 0.5, ap.c.y + L[1] * 0.5, ap.c.z + L[2] * 0.5); sp.userData.tgt = t.name; root.add(sp, t); sp.target = t;
    root.add(makeBeam(ap, L, nm === "eye" ? 0.34 : 0.5, nm === "eye" ? 0.16 : 0.07, col, nm));
    const pl = new THREE.PointLight(col, 0, 0.12, 2); pl.position.set(p.x + L[0] * 0.012, p.y + L[1] * 0.012, p.z + L[2] * 0.012); pl.userData.key = nm; pl.userData.glow = 1; root.add(pl);
  }
}
let beamTex = null;
function makeBeam(ap, L, len, spread, col, nm) {      // frustum: starts exactly at the aperture (same size + shape), opens by tan(spread)
  if (!beamTex) { const c = document.createElement("canvas"); c.width = 4; c.height = 128; const x = c.getContext("2d"), gr = x.createLinearGradient(0, 0, 0, 128); gr.addColorStop(0, "#fff"); gr.addColorStop(0.3, "#888"); gr.addColorStop(1, "#000"); x.fillStyle = gr; x.fillRect(0, 0, 4, 128); beamTex = new THREE.CanvasTexture(c); }
  const r1 = ap.r + len * Math.tan(spread), geo = new THREE.CylinderGeometry(ap.r, r1, len, ap.segs, 1, true); geo.translate(0, -len / 2, 0);
  if (ap.segs === 6) geo.rotateY(Math.PI / 6);         // hexagon points left/right like the bezel
  const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: col, alphaMap: beamTex, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, toneMapped: false }));
  m.position.copy(ap.c); m.quaternion.setFromUnitVectors(new THREE.Vector3(0, -1, 0), new THREE.Vector3(L[0], L[1], L[2])); m.userData.beam = nm; m.userData.r0 = ap.r; m.userData.len = len; m.userData.spread = spread; m.userData.base = geo.attributes.position.array.slice(); m.renderOrder = 5; return m;
}
function addBaseLight(root) { const p = emitPos.ring; if (!p) return; const pl = new THREE.PointLight(0xffe2b0, 0, 0.35, 2); pl.position.set(p.x, p.y, p.z + 0.01); pl.userData.key = "ring"; root.add(pl); }
function makeRoleMats() { for (const [role, [c, m, r]] of Object.entries(ROLE0)) { if (role === "glass") { roleMat.glass = makeGlass(); continue; } const mat = new THREE.MeshStandardMaterial({ color: new THREE.Color().setRGB(c[0], c[1], c[2], THREE.LinearSRGBColorSpace), metalness: m, roughness: r, envMapIntensity: 2.2 }); if (role === "glow") { mat.emissive = new THREE.Color(1, 0.85, 0.55); mat.emissiveIntensity = 0.9; } if (role === "grille") { mat.emissive = new THREE.Color(1, 0.62, 0.25); mat.emissiveIntensity = 0; } if (role === "eyeGlow" || role === "projGlow") { mat.emissive = new THREE.Color(c[0], c[1], c[2]); mat.emissiveIntensity = 0; } roleMat[role] = mat; } }
function applyColors() {
  for (const [id, , roles] of CATS) { const c = colors[id]; if (!c) continue; const [met, rough] = FINISH[c.finish] || FINISH.satin;
    for (const r of roles) { const m = roleMat[r]; m.color.set(c.hex); if (r !== "blk") { m.metalness = (r === "steel" || r === "alu") && c.finish === "metal" ? 1 : met; m.roughness = rough; } if (r === "glow") m.emissive.set(c.hex); } }
  dirty = true; for (const t of thumbs.values()) t.stale = true;
}
// ------------------------------------------------------------------------------------------------ loading
const proto = {}, essential = ["base", "joint_low", "joint_sw", "joint_hi", "joint1_sw", "joint1_hi", "m3screw", "neck_low", "neck_pan", "head", "stub_root", "tent_root", "tent_link", "tent_tip", "gripper", "ring", "tube_B60", "tube_B90", "tube_B90pR", "tube_B75pLR"];
let MODE = "glb"; const loader = new GLTFLoader();
async function b64buf(name) { { const r = await fetch(`glb/${name}.glb.gz${V}`); if (!r.ok) throw new Error("model " + name); return await new Response(r.body.pipeThrough(new DecompressionStream("gzip"))).arrayBuffer(); }
  /* unused: */ const t = await (await fetch(`b64/${name}.glb.txt${V}`)).text(); const bin = atob(t.trim()); const a = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) a[i] = bin.charCodeAt(i); return a.buffer; }
async function loadType(name) {
  if (proto[name]) return proto[name]; const t0 = performance.now(); const _T = (window.__lt = window.__lt || {});
  const g = MODE === "glb" ? await loader.loadAsync(`glb/${name}.glb${V}`) : await loader.parseAsync(await b64buf(name), ""); _T[name + "_parsed"] = Math.round(performance.now() - t0);
  g.scene.updateMatrixWorld(true); const groups = new Map(), movers = {};                       // merge every material of a body type into ONE mesh: far fewer draw calls (phones)
  g.scene.traverse((o) => { if (!o.isMesh) return; const n = o.material && o.material.name, nn = ((o.name || "") + " " + (o.parent ? o.parent.name : "")).replace(/head6_V4_/g, ""), nk = Object.keys(NODE_ROLE).find((k) => nn.includes(k)), role = nk ? NODE_ROLE[nk] : roleMat[n] ? n : "shell"; let geo = o.geometry.clone(); if (!geo.attributes.normal || nk === "round_lens") geo = toCreasedNormals(geo, nk === "round_lens" ? Math.PI / 3 : Math.PI / 5.5);
    const toks = nn.split(" "), bare = (o.name || "").replace(/head6_V4_/g, ""), mk = name === "head" ? Object.keys(MOVERS).find((k) => toks.includes(k) || bare === k) : null;
    if (nk || nn.includes("ring_diffuser") || toks.includes("hex_bezel")) { const bb = new THREE.Box3().setFromBufferAttribute(geo.attributes.position).applyMatrix4(o.matrixWorld); const key = nk || (toks.includes("hex_bezel") ? "hex_bezel" : "ring"); emitPos[key] = bb.getCenter(new THREE.Vector3()); emitBox[key] = bb; }
    for (const n of ["position", "normal"]) { const a = geo.attributes[n]; if (a && a.normalized) { const f = new Float32Array(a.count * 3); for (let i = 0; i < a.count; i++) { f[i * 3] = a.getX(i); f[i * 3 + 1] = a.getY(i); f[i * 3 + 2] = a.getZ(i); } geo.setAttribute(n, new THREE.BufferAttribute(f, 3)); } }   /* quantised on the wire, float in memory: the head code reads raw arrays */ geo.applyMatrix4(o.matrixWorld); for (const k of Object.keys(geo.attributes)) if (k !== "position" && k !== "normal") geo.deleteAttribute(k);
    if (mk) { (movers[MOVERS[mk]] = movers[MOVERS[mk]] || []).push([geo, role]); return; }
    if (!groups.has(role)) groups.set(role, []); groups.get(role).push(geo); });
  const root = new THREE.Group(); for (const [role, list] of groups) { const merged = list.length > 1 ? mergeGeometries(list.map((x) => (x.index ? x.toNonIndexed() : x)), false) : list[0]; const m = new THREE.Mesh(merged, roleMat[role]); m.castShadow = name !== "base"; m.receiveShadow = true; root.add(m); }
  if (name === "head" && movers.blades) {      // 6 blades, each about its own pivot on r 25 at 90 + 60*i deg around the iris centre (32,-3); web decimation split each blade in 2 -> assign every piece to the pivot nearest in angle
    const C = PIVOT.iris, R = 0.025, piv = [...Array(6).keys()].map((i) => { const a = ((90 + 60 * i) * Math.PI) / 180; return [C[0] + R * Math.cos(a), 0, C[2] + R * Math.sin(a), 90 + 60 * i]; });
    const bins = piv.map(() => []);
    for (const [geo, role] of movers.blades) for (const part of splitParts(geo)) { const c = part.boundingBox.getCenter(new THREE.Vector3()), ang = ((Math.atan2(c.z - C[2], c.x - C[0]) * 180) / Math.PI + 360) % 360;
      let best = 0, bd = 1e9; piv.forEach((p, i) => { const d = Math.abs(((ang - p[3] + 540) % 360) - 180); if (d < bd) { bd = d; best = i; } }); bins[best].push([part, role]); }
    bins.forEach((list, i) => { const pv = new THREE.Group(); pv.name = "mv_blade"; pv.position.set(piv[i][0], 0, piv[i][2]); for (const [g2, role] of list) { g2.translate(-piv[i][0], 0, -piv[i][2]); const m = new THREE.Mesh(g2, roleMat[role]); m.castShadow = true; pv.add(m); } root.add(pv); });
    delete movers.blades; _T.bladeParts = bins.map((b) => b.length).join("/");
  }
  if (name === "head") { for (const [k, list] of Object.entries(movers)) { const pv = new THREE.Group(); pv.name = "mv_" + k; pv.position.fromArray(PIVOT[k]); for (const [geo, role] of list) { geo.translate(-PIVOT[k][0], -PIVOT[k][1], -PIVOT[k][2]); const m = new THREE.Mesh(geo, roleMat[role]); m.castShadow = true; pv.add(m); } root.add(pv); }
    addHeadLights(root); }
  if (name === "base") addBaseLight(root);
  g.scene = root; _T[name] = Math.round(performance.now() - t0);
  proto[name] = g.scene; return g.scene;
}
async function loadAll() {
  MODE = "b64";
  const S1 = ["base", "head", "joint1_sw", "joint1_hi", "joint_sw", "joint_hi", "joint_low", "neck_low", "neck_pan", "ring", "tube_B60", "tube_B90pR", "tube_B75pLR"]; window.__STAGE2 = essential.filter((k) => !S1.includes(k)).concat(["tube_D60", "tube_D90", "tube_T90", "tube_B90"]);
  let n = 0; const total = S1.length;
  await Promise.all(S1.map(async (k) => { await loadType(k); n++; $("#boot-msg").textContent = `Loading parts ${n} / ${total}`; $("#boot-bar").style.width = (100 * n / total) + "%"; }));
}
// ------------------------------------------------------------------------------------------------ lamp state
let cfg, history = [], hIdx = -1, bodies = [], hdl = [], selected = null;
const lampObjs = new Map();
function relinkTargets(obj) { obj.traverse((l) => { if (l.isSpotLight && l.userData.tgt) { const t = obj.getObjectByName(l.userData.tgt); if (t) l.target = t; } }); }
const mat4 = new THREE.Matrix4();
function place(o, M) { mat4.set(M[0], M[1], M[2], M[3] * 0.001, M[4], M[5], M[6], M[7] * 0.001, M[8], M[9], M[10], M[11] * 0.001, 0, 0, 0, 1); o.matrixAutoUpdate = false; o.matrix.copy(mat4); o.matrixWorldNeedsUpdate = true; }
function cloneType(t) { const p = proto[t]; if (!p) return new THREE.Group(); const o = p.clone(); return o; }
function syncLamp() {
  const seen = new Set();
  for (const b of bodies) { seen.add(b.name); let e = lampObjs.get(b.name); if (!e || e.type !== b.type || (e.empty && proto[b.type])) { if (e) lamp.remove(e.obj); const obj = cloneType(b.type); relinkTargets(obj); if (b.type === "head") setTimeout(applyDiffuser, 0); obj.userData.name = b.name; lamp.add(obj); e = { obj, type: b.type, empty: !proto[b.type] }; lampObjs.set(b.name, e); } place(e.obj, b.M); }
  for (const [k, e] of lampObjs) if (!seen.has(k)) { lamp.remove(e.obj); lampObjs.delete(k); }
}
// ---- smoothed display (v3): cfg = target, shown = what is drawn; critically damped spring per number
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
let shown = null, omega = 44; const vel = new Map();        // omega 44/s ~ 90 ms settle (drag); 11/s ~ 400 ms (pose chips)
const shapeOf = (c) => JSON.stringify([c.spine, Object.entries(c.ports || {}).map(([k, a]) => [k, a.type, (a.balls || a.joints || []).length])]);
function springStep(dt) {          // returns true while still moving
  let moving = false;
  const walk = (t, d, path) => { for (const k in t) { const tv = t[k], key = path + "." + k;
    if (typeof tv === "number") { let x = d[k], v = vel.get(key) || 0; let diff = tv - x; if (Math.abs(diff) > 180) diff = ((diff + 540) % 360) - 180;   // angles: shortest way
      if (Math.abs(diff) < 0.02 && Math.abs(v) < 0.05) { d[k] = tv; vel.delete(key); continue; }
      // exact critically damped step (stable at any dt; explicit Euler blew up when a frame took > 2/omega = 45 ms)
      const e = -diff, ex = Math.exp(-omega * dt), c = v + omega * e, ne = (e + c * dt) * ex; v = (c - omega * (e + c * dt)) * ex; d[k] = tv + ne; vel.set(key, v); moving = true; }
    else if (tv && typeof tv === "object") walk(tv, d[k], key); } };
  walk(cfg, shown, ""); return moving;
}
let camTw = null;
let checkT = 0, lastCheck = null;
function refresh(opts = {}) {
  if (!shown || reduceMotion || opts.snap || shapeOf(shown) !== shapeOf(cfg)) { shown = IK.cloneCfg(cfg); vel.clear(); }
  bodies = fk(shown, rig); hdl = IK.handles(shown, rig, bodies); syncLamp(); dirty = true;
  const now = performance.now(); if (opts.force || now - checkT > 120) { checkT = now; lastCheck = analyse(cfg, rig, fk(cfg, rig)); renderChecks(); }
  if (!opts.noSliders) syncSliders();
}
function snapshot() { return JSON.stringify({ cfg, colors }); }
function commit() { const s = snapshot(); if (hIdx >= 0 && history[hIdx] === s) return; history = history.slice(0, hIdx + 1); history.push(s); if (history.length > 80) history.shift(); hIdx = history.length - 1; updateUndo(); saveLocal(); }
function restore(s) { const o = JSON.parse(s); cfg = o.cfg; colors = o.colors; applyColors(); buildPanels(); refresh({ force: true }); updateUndo(); saveLocal(); }
function undo() { if (hIdx > 0) { hIdx--; restore(history[hIdx]); } } function redo() { if (hIdx < history.length - 1) { hIdx++; restore(history[hIdx]); } }
function updateUndo() { $("#undo").disabled = hIdx <= 0;  }
const saveLocal = () => safe(() => localStorage.setItem("pogo-builder-v2", snapshot()));
// ================================================================================================ v2 (21 Nov): three steps, hold-to-move, per-part handles, 2-5 segments
const STARTS = [
  { id: "minimal", name: "Minimal", desc: "Three segments and the head. Nothing else.", spine: ["B60", "B90", "B60"], ports: {} },
  { id: "desk", name: "Desk light", desc: "Adds a pen cup on the side.", spine: ["B60", "B90pR", "B90"], ports: { "2:-1": "stub" } },
  { id: "maker", name: "Maker", desc: "Pen cup and an arm that holds things.", spine: ["B60", "B90pR", "B75pLR"], ports: { "2:-1": "stub", "3:1": "arm" } },
  { id: "full", name: "Full kit", desc: "Pen cup, arm and the bendy tentacle.", spine: ["B60", "B90pR", "B75pLR"], ports: { "2:-1": "stub", "3:1": "arm", "3:-1": "tentacle" } }];
const POSES = [["upright", "Upright", "L01"], ["reading", "Reading", "L21"], ["task", "Task light", "P3"], ["reach", "Reach", "L06"], ["side", "Side lean", "L04"], ["tidy", "Desk tidy", "L22"], ["tuck", "Tucked", "L07"]];
const TUBES = [["B60", "Straight 60", "60 mm. Strongest."], ["B90", "Straight 90", "90 mm. Strongest."], ["B90pR", "Port tube 90", "One port for an attachment."], ["B75pLR", "Port tube 75", "Two ports, left and right."], ["D60", "Cage 60", "Open cage. Light loads only."], ["D90", "Cage 90", "Open cage. Light loads only."], ["T90", "Window 90", "Solid below, open above."]];
const ATTS = [["arm", "Arm", "gripper", "Shoulder, elbow, wrist and a gripper. Holds a phone or a note."], ["tentacle", "Tentacle", "tent_link", "Six bendy links. Wraps cables, holds a pen."], ["stub", "Pen cup", "stub_root", "An upright cup on a short arm."]];
const NAMES = { stub: "Pen cup", arm: "Arm", tentacle: "Tentacle" }, TNAME = Object.fromEntries(TUBES.map((t) => [t[0], t[1]]));
const sideName = (pk) => (+pk.split(":")[1] > 0 ? "left" : "right");
let step = "build", startId = null, poseId = null, showAll = false, lightOn = true;
const lights = { eye: true, proj: false, ring: true, diffuse: false }; let difT = 0;   // difT animates 0..1   // v3: each light on its own (DEFAULT: eye + ring on)

// ---------------------------------------------------------------------------------------------- config edits
function defaultAtt(kind) { const p = presets.P1.config.ports; if (kind === "stub") return { type: "stub" }; return IK.cloneCfg(kind === "arm" ? p["3:1"] : p["3:-1"]); }
function applyStart(s) {
  const base = presets.P1.config; cfg = { spine: [...s.spine], joints: base.joints.map((j) => [...j]), head: { ...base.head }, ports: {} };
  for (const [pk, k] of Object.entries(s.ports)) cfg.ports[pk] = defaultAtt(k);
  startId = s.id; poseId = "upright"; applyPose("upright", true); afterEdit(); frameLamp();
}
function resample(js, n) { // spread a 3-joint pose over n joints, keeping the total bend
  if (n === js.length) return js.map((j) => [...j]); const out = [];
  for (let i = 0; i < n; i++) { const t = (i / Math.max(1, n - 1)) * (js.length - 1), a = Math.floor(t), b = Math.min(js.length - 1, a + 1), f = t - a; const sw = f < 0.5 ? js[a][0] : js[b][0]; out.push([sw, ((js[a][1] * (1 - f) + js[b][1] * f) * js.length) / n]); }
  return out.map(([s, b]) => [s, Math.max(-75, Math.min(75, Math.round(b)))]);
}
function poseInto(c, id) {
  const p = POSES.find((x) => x[0] === id); if (!p) return false; const src = presets[p[2]].config;
  c.joints = resample(src.joints, c.spine.length); c.head = { ...src.head };
  for (const [pk, a] of Object.entries(c.ports)) { const s = src.ports[pk]; if (s && s.type === a.type) c.ports[pk] = IK.cloneCfg(s); else if (a.type !== "stub") { const any = Object.values(src.ports).find((x) => x.type === a.type); if (any) c.ports[pk] = IK.cloneCfg(any); } }
  return true;
}
// v3d: test every pose chip against THIS build before offering it (Full kit + Reach used to lay the lamp on the desk)
const DESK_CLEAR_MM = 15;
function poseVerdict(id) {
  const c = IK.cloneCfg(cfg); if (!poseInto(c, id)) return { ok: false, why: "" };
  const bodies2 = fk(c, rig), an = analyse(c, rig, bodies2), lvl = an.level; let minZ = 1e9;
  for (const b of bodies2) if (b.name !== "base" && !/^J1:/.test(b.name)) minZ = Math.min(minZ, b.M[11]);
  if (minZ < DESK_CLEAR_MM) return { ok: false, why: "Hits the desk with this build" };
  if (lvl === "fail") { const f = an.items.find((x) => x.level === "fail"); return { ok: false, why: f ? `Too far with this build: ${f.label.toLowerCase()}` : "Too far with this build" }; }
  return { ok: true, warn: lvl !== "ok" };
}
function applyPose(id, quiet) {
  if (!poseInto(cfg, id)) return;
  poseId = id; omega = 11; if (!quiet) { afterEdit(); frameLamp(); }
}
function setSegments(n) {
  n = Math.max(2, Math.min(5, n)); const cur = cfg.spine.length; if (n === cur) return;
  if (n > cur) { // insert plain tubes after segment 1: ports above shift up
    const add = n - cur; cfg.spine.splice(1, 0, ...Array(add).fill("B60")); cfg.joints.splice(1, 0, ...Array.from({ length: add }, () => [0, 0]));
    const np = {}; for (const [pk, a] of Object.entries(cfg.ports)) { const [s, d] = pk.split(":").map(Number); np[`${s >= 2 ? s + add : s}:${d}`] = a; } cfg.ports = np;
  } else for (let k = cur; k > n; k--) { // remove a tube without ports if there is one, otherwise the lowest port tube above 1
    let idx = cfg.spine.findIndex((t, i) => i > 0 && !rig.tubes[t].ports.length); if (idx < 0) idx = cfg.spine.findIndex((t, i) => i > 0 && i < cfg.spine.length - 1); if (idx < 0) idx = 1;
    const slot = idx + 1; cfg.spine.splice(idx, 1); cfg.joints.splice(idx, 1);
    const np = {}; let lost = 0; for (const [pk, a] of Object.entries(cfg.ports)) { const [s, d] = pk.split(":").map(Number); if (s === slot) { lost++; continue; } np[`${s > slot ? s - 1 : s}:${d}`] = a; } cfg.ports = np; if (lost) toast("A segment with an attachment was removed, so the attachment came off.");
  }
  for (const t of cfg.spine) if (!proto["tube_" + t]) loadType("tube_" + t).then(() => refresh({ force: true }));
  afterEdit(); frameLamp();
}
function setTube(slot, key) {
  cfg.spine[slot - 1] = key; for (const pk of Object.keys(cfg.ports)) { const [s, d] = pk.split(":").map(Number); if (s === slot && !rig.tubes[key].ports.some((p) => p.side === d)) { delete cfg.ports[pk]; toast("That tube has no port on that side, so the attachment came off."); } }
  if (!proto["tube_" + key]) loadType("tube_" + key).then(() => refresh({ force: true })); afterEdit();
}
function setPort(pk, kind) { if (kind) cfg.ports[pk] = defaultAtt(kind); else delete cfg.ports[pk]; if (poseId && kind) applyPose(poseId, true); afterEdit(); }
function freePorts() { const out = []; cfg.spine.forEach((t, i) => { for (const p of rig.tubes[t].ports) { const pk = `${i + 1}:${p.side}`; out.push({ pk, slot: i + 1, side: p.side, z: p.z, used: !!cfg.ports[pk] }); } }); return out; }
function afterEdit() { commit(); refresh({ force: true }); buildPanels(); }

// ---------------------------------------------------------------------------------------------- handles: only for the selected part
const dots = new Map(); let drag = null, pending = null;
const proj = new THREE.Vector3();
function toScreen(p) { proj.set(p[0] * 0.001, p[1] * 0.001, p[2] * 0.001).project(camera); const r = canvas.getBoundingClientRect(); return { x: (proj.x * 0.5 + 0.5) * r.width, y: (-proj.y * 0.5 + 0.5) * r.height, z: proj.z }; }
const GLYPH = {
  segment: `<svg viewBox="-17 -17 34 34"><circle class="bg" r="16.5"/><circle class="b" r="6"/><path class="a" d="M-12 -4 A12.6 12.6 0 0 1 -4 -12M4 -12 A12.6 12.6 0 0 1 12 -4M12 4 A12.6 12.6 0 0 1 4 12M-4 12 A12.6 12.6 0 0 1 -12 4"/></svg>`,
  head: `<svg viewBox="-17 -17 34 34"><circle class="bg" r="16.5"/><circle class="b" r="7"/><path class="a" d="M0 -15V-8M0 8V15M-15 0H-8M8 0H15"/><circle r="2" fill="var(--signal)"/></svg>`,
  body: `<svg viewBox="-17 -17 34 34"><circle class="bg" r="16.5"/><rect class="b" x="-7" y="-7" width="14" height="14" rx="2"/><path class="a" d="M0 -15l-3 3M0 -15l3 3M0 15l-3 -3M0 15l3 -3M-15 0l3 -3M-15 0l3 3M15 0l-3 -3M15 0l-3 3"/></svg>`,
  arm: `<svg viewBox="-17 -17 34 34"><circle class="bg" r="16.5"/><rect class="b" x="-9" y="-9" width="18" height="18" rx="5"/><path class="a" d="M-4 0H4M0 -4V4"/></svg>`,
  tentacle: `<svg viewBox="-17 -17 34 34"><circle class="bg" r="16.5"/><rect class="b" x="-9" y="-9" width="18" height="18" rx="9"/><path class="a" d="M-4 0H4M0 -4V4"/></svg>` };
function selKeyOf(h) { if (h.kind === "segment") return "t" + h.slot; if (h.kind === "head" || h.kind === "body") return "head"; return "p" + h.port; }
function selKey(s) { return !s ? null : s.kind === "tube" ? "t" + s.slot : s.kind === "head" ? "head" : "p" + s.pk; }
function angleText(h) { if (h.kind !== "segment") return h.label.split(":")[0]; const b = cfg.joints[h.slot - 1][1]; return `Joint ${h.slot} · ${Math.round(b)}°`; }
function updateDots() {
  const keep = new Set(), sk = selKey(selected), on = step === "pose" || !!selected;
  for (const h of hdl) {
    const vis = on && (showAll ? step === "pose" : sk && selKeyOf(h) === sk); if (!vis) continue; keep.add(h.id); let d = dots.get(h.id);
    if (!d) { d = el("button", `h ${h.kind}`, GLYPH[h.kind] + `<span class="lbl"></span>`); d.type = "button"; d.dataset.id = h.id; d.setAttribute("aria-label", h.label); overlay.appendChild(d); dots.set(h.id, d); bindDot(d); }
    const s = toScreen(h.pos); d.style.transform = `translate(${s.x}px,${s.y}px)`; d.hidden = s.z > 1; d.querySelector(".lbl").textContent = angleText(h);
    d.classList.toggle("near", h.kind === "segment" && Math.abs(cfg.joints[h.slot - 1][1]) > 65);
  }
  for (const [id, d] of dots) if (!keep.has(id) && !(drag && drag.id === id)) { d.remove(); dots.delete(id); }
  updatePlus();
}
const ray = new THREE.Raycaster(), ndc = new THREE.Vector2(), plane = new THREE.Plane(), tmpV = new THREE.Vector3();
function rayAt(cx, cy) { const r = canvas.getBoundingClientRect(); ndc.set(((cx - r.left) / r.width) * 2 - 1, -((cy - r.top) / r.height) * 2 + 1); ray.setFromCamera(ndc, camera); return ray; }
function beginDrag(h, cx, cy, elx) {
  const p = new THREE.Vector3(h.pos[0] * 0.001, h.pos[1] * 0.001, h.pos[2] * 0.001); plane.setFromNormalAndCoplanarPoint(camera.getWorldDirection(tmpV.clone()), p);
  const hit = new THREE.Vector3(); rayAt(cx, cy).ray.intersectPlane(plane, hit); drag = { id: h.id, off: p.clone().sub(hit), el: elx || dots.get(h.id) }; if (drag.el) drag.el.classList.add("drag"); controls.enabled = false; hideHint(); dirty = true;
}
function endDrag() { if (!drag) return; { const h = hdl.find((x) => x.id === drag.id); if (h && h.kind === "arm") IK.snapArm(cfg, rig, h.port); } if (drag.el) drag.el.classList.remove("drag"); drag = null; pending = null; controls.enabled = true; poseId = null; commit(); refresh({ force: true }); if (step === "pose") buildPose(); }
function bindDot(d) {
  d.addEventListener("pointerdown", (e) => { e.preventDefault(); e.stopPropagation(); const h = hdl.find((x) => x.id === d.dataset.id); if (!h) return; try { d.setPointerCapture(e.pointerId); } catch (x) {} beginDrag(h, e.clientX, e.clientY, d); });
  d.addEventListener("pointermove", (e) => { if (drag && drag.el === d) pending = { x: e.clientX, y: e.clientY }; });
  d.addEventListener("pointerup", endDrag); d.addEventListener("pointercancel", endDrag);
  d.addEventListener("keydown", (e) => { const h = hdl.find((x) => x.id === d.dataset.id); if (!h || h.kind !== "segment") return; const j = cfg.joints[h.slot - 1]; const k = { ArrowUp: 5, ArrowRight: 5, ArrowDown: -5, ArrowLeft: -5 }[e.key]; if (!k) return; e.preventDefault(); j[1] = Math.max(-75, Math.min(75, j[1] + k)); refresh(); commit(); });
}
function processDrag() {
  if (!drag || !pending) return; const h = hdl.find((x) => x.id === drag.id); if (!h) return;
  const hit = new THREE.Vector3(); if (!rayAt(pending.x, pending.y).ray.intersectPlane(plane, hit)) return; pending = null; hit.add(drag.off);
  IK.applyDrag(h, cfg, rig, [hit.x * 1000, hit.y * 1000, hit.z * 1000]); refresh();
}
// + markers on free ports (build step)
const plus = new Map();
function updatePlus() {
  const want = step === "build" && !drag ? freePorts().filter((p) => !p.used) : [], keep = new Set(), B = IK.byName(bodies);
  for (const p of want) { keep.add(p.pk); let d = plus.get(p.pk); if (!d) { d = el("button", "plus", "+"); d.type = "button"; d.setAttribute("aria-label", `Add to segment ${p.slot}, ${sideName(p.pk)} port`); d.onclick = () => openPicker(p.pk); overlay.appendChild(d); plus.set(p.pk, d); }
    const tm = B[`tube${p.slot}`]; if (!tm) continue; const s = toScreen(IK.xf(tm, [p.side * 34, 0, p.z])); d.style.transform = `translate(${s.x}px,${s.y}px)`; }
  for (const [k, d] of plus) if (!keep.has(k)) { d.remove(); plus.delete(k); }
}

// ---------------------------------------------------------------------------------------------- touch: tap selects, press-and-hold (400 ms) grabs, a plain drag turns the view
const HOLD_MS = 400; let press = null; const holdEl = el("div", "hold", `<svg viewBox="0 0 56 56"><circle cx="28" cy="28" r="25"/></svg>`); holdEl.hidden = true;
// Finger-sized picking: the arms are ~10 px wide on a phone and sit beside the big head, so sample a ring around the tap and prefer thin parts (ports/arms) over tubes over the head.
function pickAt(cx, cy) {
  const PEN = { port: 0, tube: 6, head: 14 }, R = e_touchRadius(); let best = null, bs = 1e9;
  const pts = [[0, 0]]; for (const rr of [R * 0.5, R]) for (let k = 0; k < 8; k++) { const a = (k * Math.PI) / 4; pts.push([Math.cos(a) * rr, Math.sin(a) * rr]); }
  for (const [dx, dy] of pts) { const h = pickRay(cx + dx, cy + dy); if (!h) continue; const s = Math.hypot(dx, dy) + PEN[h.kind]; if (s < bs) { bs = s; best = h; } }
  return best;
}
function e_touchRadius() { return Math.min(22, Math.max(10, canvas.clientHeight * 0.03)); }
function pickRay(cx, cy) {
  const hits = rayAt(cx, cy).intersectObjects(lamp.children, true);
  for (const h of hits) { let o = h.object; while (o && !(o.userData && o.userData.name)) o = o.parent; if (!o) continue; const n = o.userData.name; let m;
    if ((m = /^s(\d)([pn]):/.exec(n))) return { kind: "port", pk: `${m[1]}:${m[2] === "p" ? 1 : -1}` };
    if ((m = /^tube(\d)/.exec(n)) || (m = /^J(\d)/.exec(n))) return { kind: "tube", slot: +m[1] };
    if (/^(head|neck)/.test(n)) return { kind: "head" }; return null; }
  return null;
}
function primaryHandle(s) { if (!s) return null; if (s.kind === "tube") return hdl.find((h) => h.id === "seg" + s.slot); if (s.kind === "head") return hdl.find((h) => h.id === "look"); if (s.kind === "port") return hdl.find((h) => h.id === `${s.pk}:tip`); return null; }
function wireTouch() {
  overlay.appendChild(holdEl); const pts = new Set();
  canvas.addEventListener("pointerdown", (e) => {
    if (e.isPrimary) pts.clear(); pts.add(e.pointerId); hideHint(); if (pts.size > 1) { cancelPress(); return; }
    const hit = pickAt(e.clientX, e.clientY); press = { x: e.clientX, y: e.clientY, t: performance.now(), hit, id: e.pointerId, timer: null };
    if (hit) { const r = canvas.getBoundingClientRect(); holdEl.style.transform = `translate(${e.clientX - r.left}px,${e.clientY - r.top}px)`; holdEl.hidden = false; holdEl.classList.remove("go"); void holdEl.offsetWidth; holdEl.classList.add("go");
      press.timer = setTimeout(() => { if (!press) return; holdEl.hidden = true; select(press.hit); const h = primaryHandle(press.hit); refresh(); if (h) { const hh = hdl.find((x) => x.id === h.id); beginDrag(hh, press.x, press.y, null); try { canvas.setPointerCapture(press.id); } catch (x) {} if (navigator.vibrate) navigator.vibrate(12); } press.held = true; }, HOLD_MS); }
  });
  canvas.addEventListener("pointermove", (e) => { if (drag && !drag.el) { pending = { x: e.clientX, y: e.clientY }; return; } if (press && !press.held && Math.hypot(e.clientX - press.x, e.clientY - press.y) > 8) cancelPress(); });
  const up = (e) => { pts.delete(e.pointerId); if (drag && !drag.el) { endDrag(); press = null; return; } if (press && !press.held) { const quick = performance.now() - press.t < HOLD_MS && Math.hypot(e.clientX - press.x, e.clientY - press.y) < 8; const hit = press.hit; cancelPress(); if (quick) select(hit); } press = null; };
  canvas.addEventListener("pointerup", up); canvas.addEventListener("pointercancel", up);
  canvas.addEventListener("dblclick", frameLamp);
}
function cancelPress() { if (press && press.timer) clearTimeout(press.timer); holdEl.hidden = true; holdEl.classList.remove("go"); if (press) press.held = false; press = null; }

// ---------------------------------------------------------------------------------------------- selection bar
function select(sel) {
  selected = sel; const b = $("#selbar"); dirty = true; if (!sel) { b.hidden = true; return; } b.hidden = false;
  if (sel.kind === "port") { const a = cfg.ports[sel.pk]; if (!a) return select(null); $("#sel-t").textContent = `${NAMES[a.type]} · segment ${sel.pk.split(":")[0]}, ${sideName(sel.pk)}`; $("#sel-rm").hidden = false; $("#sel-swap").hidden = false; }
  else if (sel.kind === "tube") { $("#sel-t").textContent = `Segment ${sel.slot} · ${TNAME[cfg.spine[sel.slot - 1]]}`; $("#sel-rm").hidden = true; $("#sel-swap").hidden = false; }
  else { $("#sel-t").textContent = "Head · drag the crosshair to aim the light"; $("#sel-rm").hidden = true; $("#sel-swap").hidden = true; }
}

// ---------------------------------------------------------------------------------------------- thumbnails (whole lamps for the start cards, single parts for the picker)
const thumbScene = new THREE.Scene(), thumbCam = new THREE.PerspectiveCamera(28, 1, 0.01, 10); thumbCam.up.set(0, 0, 1);
const thumbs = new Map();
function renderObj(o, W = 240, H = 240, view = [1.5, -1.7, 0.9]) {
  thumbScene.clear(); thumbScene.environment = scene.environment; thumbScene.add(o); const l = new THREE.DirectionalLight(0xffffff, 3.0); l.position.set(1, -1.4, 1.6); thumbScene.add(l); const l2 = new THREE.DirectionalLight(0xbcd2ff, 1.4); l2.position.set(-1.2, 1, 0.8); thumbScene.add(l2);
  const box = new THREE.Box3().setFromObject(o), c = box.getCenter(new THREE.Vector3()), sz = box.getSize(new THREE.Vector3()), r = sz.length() * 0.78; thumbCam.aspect = W / H; thumbCam.position.set(c.x + r * view[0], c.y + r * view[1], c.z + r * view[2]); thumbCam.lookAt(c); thumbCam.updateProjectionMatrix();
  const rt = new THREE.WebGLRenderTarget(W, H, { samples: 4 }); const oldT = renderer.getRenderTarget(); renderer.setRenderTarget(rt); renderer.setClearColor(0x000000, 0); renderer.clear(); renderer.render(thumbScene, thumbCam); renderer.setRenderTarget(oldT);
  const buf = new Uint8Array(W * H * 4); renderer.readRenderTargetPixels(rt, 0, 0, W, H, buf); rt.dispose(); const cv = document.createElement("canvas"); cv.width = W; cv.height = H; const ctx = cv.getContext("2d"), id = ctx.createImageData(W, H);
  for (let y = 0; y < H; y++) id.data.set(buf.subarray((H - 1 - y) * W * 4, (H - y) * W * 4), y * W * 4); ctx.putImageData(id, 0, 0); thumbScene.clear(); return cv.toDataURL("image/png");
}
function lampGroup(c) { const g = new THREE.Group(); for (const b of fk(c, rig)) { if (!proto[b.type]) continue; const o = proto[b.type].clone(); place(o, b.M); g.add(o); } return g; }
function thumb(key, make) { let t = thumbs.get(key); if (!t || t.stale) { const o = make(); if (!o) return ""; t = { url: renderObj(o), stale: false }; thumbs.set(key, t); } return t.url; }
const startThumb = (s) => thumb("start:" + s.id, () => { const base = presets.P1.config, c = { spine: s.spine, joints: base.joints, head: base.head, ports: {} }; for (const [pk, k] of Object.entries(s.ports)) c.ports[pk] = defaultAtt(k); return lampGroup(c); });
const partThumb = (type) => thumb(type, () => (proto[type] ? proto[type].clone() : null));
function attThumb(k) { return thumb("att:" + k, () => { const c = { spine: ["B60", "B60", "B75pLR"], joints: [[0, 0], [0, 0], [0, 0]], head: { pan: 0, tilt: 0 }, ports: { "3:1": defaultAtt(k) } }; const g = new THREE.Group(); for (const b of fk(c, rig)) { if (!/^s3p:/.test(b.name) || !proto[b.type]) continue; const o = proto[b.type].clone(); place(o, b.M); g.add(o); } return g; }); }
window.__thumbDbg = { renderObj, thumbs }; function markThumbsStale() { for (const t of thumbs.values()) t.stale = true; }

// ---------------------------------------------------------------------------------------------- panels
function buildPanels() { if (step === "build") buildBuild(); else if (step === "pose") buildPose(); else buildFinish(); }
function card(img, name, desc, on, fn, label) { const b = el("button", "card" + (on ? " on" : ""), `${img ? `<img alt="" src="${img}">` : ""}<b>${name}</b><small>${desc}</small>`); b.type = "button"; if (label) b.setAttribute("aria-label", label); b.onclick = fn; return b; }
function buildBuild() {
  const host = $("#p-build"); host.innerHTML = "";
  host.append(el("h3", "", "Start from")); const g = el("div", "cards"); for (const s of STARTS) g.append(card(startThumb(s), s.name, s.desc, startId === s.id, () => applyStart(s))); host.append(g);
  host.append(el("h3", "", "Spine")); const st = el("div", "stepper", `<span><b>Segments</b><br><small class="lead">2 to 5. More segments reach further.</small></span><span class="ctl"><button class="ibtn" type="button" aria-label="Fewer segments">−</button><output aria-live="polite">${cfg.spine.length}</output><button class="ibtn" type="button" aria-label="More segments">+</button></span>`);
  const [mi, pl] = st.querySelectorAll("button"); mi.disabled = cfg.spine.length <= 2; pl.disabled = cfg.spine.length >= 5; mi.onclick = () => setSegments(cfg.spine.length - 1); pl.onclick = () => setSegments(cfg.spine.length + 1); host.append(st);
  const rows = el("div", "rows"); rows.style.marginTop = "8px";
  cfg.spine.map((t, i) => [t, i]).reverse().forEach(([t, i]) => { const r = el("button", "slot", `<span class="n">${String(i + 1).padStart(2, "0")}</span><b>${TNAME[t]}</b><small>Change</small>`); r.type = "button"; r.onclick = () => { select({ kind: "tube", slot: i + 1 }); openTubePicker(i + 1); }; rows.append(r); });
  host.append(rows);
  host.append(el("h3", "", "Attachments")); const ports = freePorts();
  if (!ports.length) { const p = el("p", "lead", "Arms clip onto port tubes. "); const b = el("button", "chipb", "Make segment 2 a port tube"); b.type = "button"; b.onclick = () => setTube(Math.min(2, cfg.spine.length), "B90pR"); host.append(p, b); }
  else { const r2 = el("div", "rows"); for (const p of ports) { const a = cfg.ports[p.pk]; const r = el("button", "slot" + (a ? "" : " empty"), `<span class="n">${String(p.slot).padStart(2, "0")}${p.side > 0 ? "L" : "R"}</span><b>${a ? NAMES[a.type] : "Empty port"}</b><small>${a ? "Change" : "Add"}</small>`); r.type = "button"; r.onclick = () => openPicker(p.pk); r2.append(r); } host.append(r2); host.append(el("p", "lead", "Or tap a + on the lamp.")); }
}
function buildPose() {
  const host = $("#p-pose"); host.innerHTML = ""; host.append(el("p", "lead", "Pick a pose, or press and hold any part of the lamp and drag it."));
  const c = el("div", "chips"); let blocked = 0;
  for (const [id, name] of POSES) { const v = poseVerdict(id), b = el("button", "chipb" + (poseId === id ? " on" : "") + (v.ok ? (v.warn ? " warn" : "") : " off"), name); b.type = "button";
    if (!v.ok) { blocked++; b.setAttribute("aria-disabled", "true"); b.title = v.why; b.onclick = () => toast(`${name}: ${v.why.toLowerCase()}. Try fewer segments or a gentler pose.`); } else b.onclick = () => applyPose(id); c.append(b); }
  host.append(c); if (blocked) host.append(el("p", "note", `${blocked} pose${blocked > 1 ? "s" : ""} greyed out: they don't work with this build.`));
  const t = el("label", "toggle", `<span>Show every handle</span>`); const i = el("input", "sw"); i.type = "checkbox"; i.checked = showAll; i.onchange = () => { showAll = i.checked; dirty = true; }; t.append(i); host.append(t);
  const arm = Object.entries(cfg.ports).find(([, a]) => a.type === "arm");
  if (arm) { const l = el("label", "toggle", `<span>The arm is holding</span>`); const s = el("select", "ibtn"); for (const gr of rig.physics.payload_options_g) s.add(new Option(gr ? gr + " g" : "nothing", gr)); s.value = arm[1].payload_g || 0; s.onchange = () => { arm[1].payload_g = +s.value; commit(); refresh({ force: true }); }; l.append(s); host.append(l); }
}
function buildFinish() {
  const host = $("#p-finish"); host.innerHTML = ""; host.append(el("h3", "", "Finish")); const tg = el("div", "themes"); const cur = JSON.stringify(colors);
  for (const name of Object.keys(THEMES)) { const t = THEMES[name], d = DEFAULT_COLORS(), sw = (k) => (t ? t[k][0] : d[k].hex); const target = themeColors(name);
    const b = el("button", "theme" + (JSON.stringify(target) === cur ? " on" : ""), `<span class="dots"><i style="background:${sw("body")}"></i><i style="background:${sw("accent")}"></i><i style="background:${sw("metal")}"></i></span><em>${name}</em>`); b.type = "button"; b.onclick = () => { colors = themeColors(name); applyColors(); markThumbsStale(); commit(); buildFinish(); }; tg.append(b); }
  const lh = el("details", "fold lights"); lh.open = safe(() => localStorage.getItem("pogo-lights-open"), "1") !== "0"; lh.append(el("summary", "", "Lights")); lh.addEventListener("toggle", () => safe(() => localStorage.setItem("pogo-lights-open", lh.open ? "1" : "0")));
  for (const [k, label, hint] of [["eye", "Eye light", "Round eye, cool white, through the glass lens"], ["proj", "Projector", "Hex eye, warm, narrow beam"], ["diffuse", "Diffuser", "Closes the iris on the hex eye: brow tilts, beam softens"], ["ring", "Base ring", "Glow around the base"]]) {
    const lt = el("label", "toggle", `<span class="tl">${label}<small>${hint}</small></span>`); const li = el("input", "sw"); li.type = "checkbox"; li.checked = lights[k]; li.setAttribute("aria-label", label);
    li.onchange = () => { lights[k] = li.checked; if (k === "diffuse" && li.checked && !lights.proj) { lights.proj = true; const pj = lh.querySelector('[aria-label="Projector"]'); if (pj) pj.checked = true; } setLight(); if (k !== "ring") frameHead(); else frameLamp(); }; lt.append(li); lh.append(lt); }
  host.insertBefore(lh, host.firstChild); host.append(tg);
  const d = el("details", "fold"); d.append(el("summary", "", "Custom colours")); for (const [id, label, , hint, sw] of CATS) { const c = colors[id], row = el("div", "crow"); row.append(el("div", "", `<b>${label}</b><small>${hint}</small>`)); const swa = el("div", "swatches");
    for (const h of sw) { const b = el("button", "swb" + (h.toLowerCase() === c.hex.toLowerCase() ? " on" : "")); b.type = "button"; b.style.background = h; b.setAttribute("aria-label", `${label} ${h}`); b.onclick = () => { colors[id].hex = h; applyColors(); commit(); buildFinish(); $("#p-finish details").open = true; }; swa.append(b); }
    row.append(swa); const fin = el("div", "seg"); for (const f of ["matte", "satin", "metal"]) { const b = el("button", f === c.finish ? "on" : "", f); b.type = "button"; b.onclick = () => { colors[id].finish = f; applyColors(); commit(); buildFinish(); $("#p-finish details").open = true; }; fin.append(b); } row.append(fin); d.append(row); }
  host.append(d);
}
function themeColors(name) { const o = DEFAULT_COLORS(), t = THEMES[name]; if (t) for (const [id, [hex, fin]] of Object.entries(t)) o[id] = { hex, finish: fin }; return o; }
function applyDiffuser() {        // CAD law (linear between the ends, sheet s.13): ring 7.39 deg, brow 26.2 deg at full; hex light softens + widens
  const t = difT, ring = 7.39 * t, brow = 26.2 * t, D = Math.PI / 180;
  if (!lamp) return; lamp.traverse((o) => {
    if (o.name === "mv_iris") o.rotation.y = ring * D; else if (o.name === "mv_blade") o.rotation.y = bladeAngle(ring) * D; else if (o.name === "mv_brow") o.rotation.y = brow * D;
    if (o.isSpotLight && o.userData.key === "proj") { o.angle = o.userData.ang0 + 0.24 * t; o.penumbra = o.userData.pen0 + 0.6 * t; }
    if (o.userData.beam === "proj") { const pos = o.geometry.attributes.position, b = o.userData.base, k = 1 + 1.6 * t; for (let i = 0; i < pos.count; i++) { const y = b[i * 3 + 1]; if (y < -1e-4) { pos.array[i * 3] = b[i * 3] * k; pos.array[i * 3 + 2] = b[i * 3 + 2] * k; } } pos.needsUpdate = true; }
  }); setLight(true); dirty = true;
}
function setLight(fromDif) {
  const dark = isDark(), W = { eye: dark ? 9 : 5, proj: dark ? 14 : 8, ring: dark ? 0.35 : 0.15 };
  if (roleMat.glow) roleMat.glow.emissiveIntensity = lights.ring ? 0.9 : 0; if (roleMat.eyeGlow) roleMat.eyeGlow.emissiveIntensity = lights.eye ? 3.2 : 0; if (roleMat.projGlow) roleMat.projGlow.emissiveIntensity = lights.proj ? 3.2 : 0; if (roleMat.grille) roleMat.grille.emissiveIntensity = lights.proj ? 0.9 * (1 + 0.6 * difT) : 0;   // light through the hex grille; diffused = brighter, softer face
  const dif = 1 - 0.45 * difT;   // diffused hex light: same lumens spread wider -> dimmer per area
  // light mode: additive light is invisible on a bright stage, so beams are drawn as a warm tinted volume (normal blending, darker tint); dark mode keeps additive
  if (lamp) lamp.traverse((m) => { if (m.userData.beam) { const mt = m.material; if (!m.userData.col0) m.userData.col0 = mt.color.clone(); const bl = dark ? THREE.AdditiveBlending : THREE.NormalBlending; if (mt.blending !== bl) { mt.blending = bl; mt.needsUpdate = true; } if (dark || m.userData.beam === "proj") mt.color.copy(m.userData.col0); else mt.color.set(0x8fb0e0);   // projector keeps its warm 0xffb25e; the white eye beam gets a cool grey-blue shade in light mode, white cannot show on a white stage
    mt.opacity = lights[m.userData.beam] ? (dark ? 0.2 : 0.3) *(m.userData.beam === "proj" ? dif * 0.8 : 1) : 0; } });
  if (lamp) lamp.traverse((l) => { if (l.isLight && l.userData.key) l.intensity = lights[l.userData.key] ? (l.userData.glow ? W[l.userData.key] * 0.012 : W[l.userData.key]) * (l.userData.key === "proj" ? dif : 1) : 0; }); dirty = true; }

// ---------------------------------------------------------------------------------------------- theme (light / dark) + dev panel (v3)
const mqDark = matchMedia("(prefers-color-scheme: dark)");
let themePref = safe(() => localStorage.getItem("pogo-theme"), null) || "light", turntable = false, quality = "auto";
function isDark() { return themePref === "dark" || (themePref === "auto" && mqDark.matches); }
function applyTheme() {
  if (themePref === "auto") document.documentElement.removeAttribute("data-theme"); else document.documentElement.setAttribute("data-theme", themePref);
  applySceneTheme(); setLight();
}
function applySceneTheme() {          // light = bright product studio; dark = low key, the lamp's own lights do the work
  if (!renderer) return; const d = isDark();
  renderer.toneMappingExposure = d ? 0.85 : 1.1; scene.environmentIntensity = d ? 0.22 : 0.7;
  key.intensity = d ? 1.1 : 3.0; fill.intensity = d ? 0.15 : 0.7; rim.intensity = d ? 3.6 : 2.6; rim.color.set(d ? 0x9fbaff : 0xd8e6ff);
  shadowCatcher.material.opacity = d ? 0.45 : 0.22; floorGlow.material.opacity = d ? 0.25 : 1; dirty = true;
}
function wireDev() {
  const b = $("#devbtn"), pnl = $("#dev"); if (!b) return;
  b.onclick = () => { pnl.hidden = !pnl.hidden; b.setAttribute("aria-expanded", !pnl.hidden); };
  for (const x of pnl.querySelectorAll("[data-theme-set]")) x.onclick = () => { themePref = x.dataset.themeSet; safe(() => localStorage.setItem("pogo-theme", themePref)); syncDev(); applyTheme(); };
  $("#dev-turn").onchange = (e) => { turntable = e.target.checked; controls.autoRotate = turntable; controls.autoRotateSpeed = 0.6; };
  $("#dev-q").onchange = (e) => { quality = e.target.value; const hi = quality === "high" || (quality === "auto" && !isTouch); renderer.setPixelRatio(Math.min(devicePixelRatio || 1, hi ? 2 : 1.25)); key.shadow.mapSize.set(hi ? 2048 : 1024, hi ? 2048 : 1024); key.shadow.map && key.shadow.map.dispose(); key.shadow.map = null; if (roleMat.glass) { roleMat.glass.transmission = hi ? 1 : 0; roleMat.glass.transparent = !hi; roleMat.glass.opacity = hi ? 1 : 0.18; roleMat.glass.needsUpdate = true; } resize(); };
  document.addEventListener("pointerdown", (e) => { if (!pnl.hidden && !pnl.contains(e.target) && !b.contains(e.target)) { pnl.hidden = true; b.setAttribute("aria-expanded", "false"); } });
  const fit = el("button", "ibtn", `<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>`); fit.id = "fitbtn"; fit.type = "button"; fit.setAttribute("aria-label", "Fit the lamp in view"); fit.onclick = frameLamp; stage.append(fit);
  mqDark.addEventListener("change", () => { if (themePref === "auto") applyTheme(); });
  syncDev();
}
function syncDev() { for (const x of document.querySelectorAll("[data-theme-set]")) x.setAttribute("aria-pressed", x.dataset.themeSet === themePref); }
// ---------------------------------------------------------------------------------------------- pickers
function openSheet(title, items) { $("#picker-t").textContent = title; const L = $("#picker-list"); L.innerHTML = ""; for (const it of items) L.append(it); $("#picker").hidden = false; setTimeout(() => { const f = L.querySelector("button"); if (f) f.focus(); }, 30); }
function closeSheet() { $("#picker").hidden = true; }
function openPicker(pk) {
  const a = cfg.ports[pk], items = ATTS.map(([k, n, t, d]) => card(attThumb(k), n, d, a && a.type === k, () => { closeSheet(); setPort(pk, k); select({ kind: "port", pk }); }));
  if (a) items.push(card("", "Nothing", "Leave this port empty.", false, () => { closeSheet(); setPort(pk, null); select(null); }));
  openSheet(`Segment ${pk.split(":")[0]}, ${sideName(pk)} port`, items);
}
function openTubePicker(slot) { openSheet(`Segment ${slot}`, TUBES.map(([k, n, d]) => card(partThumb("tube_" + k), n, d, cfg.spine[slot - 1] === k, () => { closeSheet(); setTube(slot, k); select({ kind: "tube", slot }); }))); }

// ---------------------------------------------------------------------------------------------- checks + summary
function renderChecks() {
  if (!lastCheck) return; const c = lastCheck, pill = $("#status"); pill.className = c.level; const bad = c.items.filter((i) => i.level !== "ok");
  pill.querySelector("span").textContent = c.level === "ok" ? "Stable" : c.level === "fail" ? "Too far" : "Check pose";
  let h = `<p class="mono">Stability</p><p class="lead">${c.level === "ok" ? "This lamp holds this pose." : bad.map((i) => i.note).filter(Boolean)[0] || "Some parts are near their limit in this pose."}</p>`;
  for (const i of c.items) { const w = Math.round(Math.min(1, Math.max(0.02, i.ratio)) * 100); h += `<div class="chk ${i.level}"><div class="top"><span>${i.label}</span><b>${Math.round(i.ratio * 100)} %</b></div><div class="bar"><i style="width:${w}%"></i></div></div>`; }
  $("#checks-pop").innerHTML = h;
}
function partsList() {
  const rows = [["Base with fold-out legs", 1], ["Joints", cfg.spine.length]]; const tc = {}; for (const t of cfg.spine) tc[t] = (tc[t] || 0) + 1; for (const [t, n] of Object.entries(tc)) rows.push([TNAME[t], n]);
  rows.push(["Head", 1]); const ac = {}; for (const a of Object.values(cfg.ports)) ac[a.type] = (ac[a.type] || 0) + 1; for (const [t, n] of Object.entries(ac)) rows.push([NAMES[t], n]); return rows;
}
function shareURL() { const s = btoa(unescape(encodeURIComponent(JSON.stringify({ cfg, colors })))); return location.href.split("#")[0] + "#l=" + s; }
function readHash() { const m = /#l=([^&]+)/.exec(location.hash); if (!m) return null; return safe(() => JSON.parse(decodeURIComponent(escape(atob(m[1])))), null); }
function openSummary() {
  select(null); renderer.render(scene, camera); const img = renderer.domElement.toDataURL("image/png"); $("#sum-img").src = img;
  const c = lastCheck; $("#sum-h").textContent = `POGO · ${cfg.spine.length} segments`; $("#sum-lead").textContent = `${(c.total_g / 1000).toFixed(2)} kg · ${c.level === "ok" ? "stable in this pose" : "near its limit in this pose"}`;
  $("#sum-parts").innerHTML = partsList().map(([n, q]) => `<tr><td>${n}</td><td>× ${q}</td></tr>`).join(""); $("#sum").hidden = false; $("#sum-share").focus();
}

// ---------------------------------------------------------------------------------------------- wiring
function setStep(s) { step = s; if (s !== "build") { const hn = $("#hint"); if (hn && !hn.hidden) { hn.hidden = true; safe(() => localStorage.setItem("pogo-hint2", "1")); } } for (const t of document.querySelectorAll(".step")) t.setAttribute("aria-selected", t.dataset.step === s); for (const p of document.querySelectorAll(".panel")) p.hidden = p.id !== "p-" + s;
  $("#back").disabled = s === "build"; $("#next").textContent = s === "finish" ? "Done" : "Next"; buildPanels(); dirty = true; }
function hideHint() { const h = $("#hint"); if (h && !h.hidden) { h.hidden = true; safe(() => localStorage.setItem("pogo-hint2", "1")); } }
function frameHead() {          // close 3/4 view of the head, so a light change is visible
  const B = byNameBodies(), M = B && B.head; if (!M) return; const c = new THREE.Vector3(M[3] * 0.001, M[7] * 0.001, M[11] * 0.001), f = rig.physics.head.look_local;
  const look = new THREE.Vector3(M[0] * f[0] + M[1] * f[1] + M[2] * f[2], M[4] * f[0] + M[5] * f[1] + M[6] * f[2], M[8] * f[0] + M[9] * f[1] + M[10] * f[2]).normalize();
  const side = new THREE.Vector3(0, 0, 1).cross(look).normalize(), k = Math.max(1, 1 / (camera.aspect * 1.05)), pEnd = c.clone().addScaledVector(look, 0.42 * k).addScaledVector(side, 0.17 * k).add(new THREE.Vector3(0, 0, 0.05 * k));   // portrait stage: back off so the head + first part of the beams fit
  const tEnd = c.clone().addScaledVector(look, 0.05);
  if (reduceMotion) { controls.target.copy(tEnd); camera.position.copy(pEnd); controls.update(); dirty = true; return; }
  camTw = { t0: performance.now(), t1: controls.target.clone(), t2: tEnd, p1: camera.position.clone(), p2: pEnd }; dirty = true;
}
function byNameBodies() { const o = {}; for (const b of bodies) o[b.name] = b.M; return o; }
function frameLamp() { camTw0.t = controls.target.clone(); camTw0.p = camera.position.clone(); const fb = fk(cfg, rig), pts = fb.map((b) => IK.origin(b.M)).concat(IK.handles(cfg, rig, fb).map((h) => h.pos)); const lo = [1e9, 1e9, 1e9], hi = [-1e9, -1e9, -1e9];
  for (const p of pts) for (let k = 0; k < 3; k++) { lo[k] = Math.min(lo[k], p[k]); hi[k] = Math.max(hi[k], p[k]); }
  const c = lo.map((v, k) => (v + hi[k]) / 2000); let r = 0; for (const p of pts) r = Math.max(r, Math.hypot(p[0] / 1000 - c[0], p[1] / 1000 - c[1], p[2] / 1000 - c[2])); r += 0.06;
  controls.target.set(c[0], c[1], Math.max(0.14, c[2])); const vf = (camera.fov * Math.PI) / 360, hf = Math.atan(Math.tan(vf) * camera.aspect), fit = r / Math.sin(Math.min(vf, hf));
  const dir = camera.position.clone().sub(controls.target).normalize(); const tEnd = controls.target.clone(), pEnd = tEnd.clone().add(dir.multiplyScalar(Math.min(3.8, Math.max(0.6, fit))));
  if (reduceMotion || !camFramed) { camera.position.copy(pEnd); camFramed = true; camTw = null; } else { controls.target.copy(camTw0.t); camTw = { t0: performance.now(), t1: camTw0.t, t2: tEnd, p1: camTw0.p, p2: pEnd }; }
  controls.update(); dirty = true; }
let camFramed = false; const camTw0 = { t: null, p: null };
function wireUI() {
  for (const t of document.querySelectorAll(".step")) t.onclick = () => setStep(t.dataset.step);
  const order = ["build", "pose", "finish"]; $("#next").onclick = () => { const i = order.indexOf(step); if (i < 2) setStep(order[i + 1]); else openSummary(); }; $("#back").onclick = () => { const i = order.indexOf(step); if (i > 0) setStep(order[i - 1]); };
  $("#done").onclick = openSummary; $("#undo").onclick = undo; $("#hint-x").onclick = hideHint;
  $("#status").onclick = () => { const p = $("#checks-pop"); p.hidden = !p.hidden; };
  $("#sel-x").onclick = () => select(null); $("#sel-rm").onclick = () => { if (selected && selected.kind === "port") { setPort(selected.pk, null); select(null); } };
  $("#sel-swap").onclick = () => { if (!selected) return; if (selected.kind === "port") openPicker(selected.pk); else if (selected.kind === "tube") openTubePicker(selected.slot); };
  $("#picker-x").onclick = closeSheet; $("#picker").addEventListener("click", (e) => { if (e.target.id === "picker") closeSheet(); });
  $("#sum-back").onclick = () => ($("#sum").hidden = true);
  $("#sum-share").onclick = async () => { const u = shareURL(); window.history.replaceState(null, "", u); try { await navigator.clipboard.writeText(u); toast("Link copied"); } catch (e) { toast("Copy the address bar to share"); } };
  $("#sum-dl").onclick = () => { const a = document.createElement("a"); a.href = $("#sum-img").src; a.download = "my-pogo-lamp.png"; a.click(); };
  addEventListener("keydown", (e) => { if (e.target.closest("input,select,textarea")) return; if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") { e.preventDefault(); e.shiftKey ? redo() : undo(); } else if (e.key === "Escape") { closeSheet(); $("#sum").hidden = true; $("#checks-pop").hidden = true; select(null); } });
  new ResizeObserver(resize).observe(stage);
}
async function start() {
  if (!initGL()) return; window.THREE_OK = true; if (DBG.has("dbg")) window.__gl = { renderer, scene, camera }; makeRoleMats(); await loadAll();
  const shared = readHash(), saved = safe(() => JSON.parse(localStorage.getItem("pogo-builder-v2")), null), src = shared || saved;
  if (src && src.cfg && src.cfg.spine) { cfg = src.cfg; if (src.colors) colors = Object.assign(DEFAULT_COLORS(), src.colors); } else { cfg = null; }
  wireUI(); wireTouch(); applyColors(); wireDev(); applyTheme();
  if (!cfg) { applyStart(STARTS[3]); } else { refresh({ force: true }); commit(); }
  for (const t of cfg.spine) if (!proto["tube_" + t]) await loadType("tube_" + t);
  setStep("build"); resize(); refresh({ force: true }); frameLamp(); if (!safe(() => localStorage.getItem("pogo-hint2"), null)) $("#hint").hidden = false;
  $("#boot").classList.add("done"); setTimeout(() => $("#boot").remove(), 600); loop();
  (async () => { for (const t of window.__STAGE2) { try { await loadType(t); syncLamp(); dirty = true; } catch (e) { console.warn(e); } } markThumbsStale(); buildPanels(); window.__stage2done = performance.now(); })();
  window.__builder = { scene, proto, renderer, get cfg() { return cfg; }, refresh, get hdl() { return hdl; }, rig, camera, controls, setSegments, applyPose, select, setStep, pickAt, analyse };
}
let lastT = performance.now(); window.__frames = 0;
let shadowTick = 0;
function loop() { requestAnimationFrame(loop); const now = performance.now(), dt = Math.min(0.05, (now - lastT) / 1000); lastT = now;
  if (camTw) { const k = Math.min(1, (now - camTw.t0) / 400), e = 1 - Math.pow(1 - k, 3); controls.target.lerpVectors(camTw.t1, camTw.t2, e); camera.position.lerpVectors(camTw.p1, camTw.p2, e); if (k >= 1) camTw = null; dirty = true; }
  processDrag();
  { const tgt = lights.diffuse ? 1 : 0; if (Math.abs(difT - tgt) > 1e-3) { difT = reduceMotion ? tgt : difT + (tgt - difT) * Math.min(1, dt * 7); if (Math.abs(difT - tgt) < 2e-3) difT = tgt; applyDiffuser(); } }
  if (shown && springStep(dt)) { bodies = fk(shown, rig); hdl = IK.handles(shown, rig, bodies); syncLamp(); dirty = true; } else if (!drag) omega = 44;
  const moved = controls.update() || (turntable && !drag); if (dirty || moved || drag) { updateDots(); renderer.shadowMap.autoUpdate = false; shadowTick++; renderer.shadowMap.needsUpdate = !drag || (shadowTick & 1) === 0; renderer.render(scene, camera); window.__frames++; dirty = false; } }
boot();

function syncSliders() {}
