// Duolune configurator: three.js r160. One GLB (330 KB, Draco) + four tileable fabric normal maps.
// Stitching, seams, the stripe and the bent-ply wood are procedural in the shader, ported from the Blender node trees.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import { KINDS, COLOURS, METALS, WOODS, STRIPES, HOTSPOTS } from './data.js?v=38';

const lin = (a) => new THREE.Color().setRGB(a[0], a[1], a[2], THREE.LinearSRGBColorSpace);
export const fromHex = (hex) => new THREE.Color(hex);              // sRGB in, three converts
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------------------------------------------------------------- GLSL
const NOISE = /* glsl */`
// 3D simplex noise, Ashima Arts / Stefan Gustavson (MIT)
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+10.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0); const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy)); vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz); vec3 l=1.0-g; vec3 i1=min(g.xyz,l.zxy); vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx; vec3 x2=x0-i2+C.yyy; vec3 x3=x0-D.yyy; i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857; vec3 ns=n_*D.wyz-D.xzx; vec4 j=p-49.0*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z); vec4 y_=floor(j-7.0*x_); vec4 x=x_*ns.x+ns.yyyy; vec4 y=y_*ns.x+ns.yyyy; vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy); vec4 b1=vec4(x.zw,y.zw); vec4 s0=floor(b0)*2.0+1.0; vec4 s1=floor(b1)*2.0+1.0; vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy; vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x); vec3 p1=vec3(a0.zw,h.y); vec3 p2=vec3(a1.xy,h.z); vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3))); p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
  vec4 m=max(0.5-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0); m=m*m;
  return 105.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}
float hash11(float p){p=fract(p*0.1031);p*=p+33.33;p*=p+p;return fract(p);}
vec3 perturbBump(vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection){
  vec3 vSigmaX=normalize(dFdx(surf_pos.xyz)); vec3 vSigmaY=normalize(dFdy(surf_pos.xyz)); vec3 vN=surf_norm;
  vec3 R1=cross(vSigmaY,vN); vec3 R2=cross(vN,vSigmaX); float fDet=dot(vSigmaX,R1)*faceDirection;
  vec3 vGrad=sign(fDet)*(dHdxy.x*R1+dHdxy.y*R2); return normalize(abs(fDet)*surf_norm-vGrad);
}`;

function upholsteryMaterial(tex) {
  const m = new THREE.MeshPhysicalMaterial({ roughness: 0.5, sheen: 1, sheenRoughness: 0.4 });
  m.normalMap = tex.leather; m.normalScale = new THREE.Vector2(0.5, 0.5);
  const u = {
    uColA: { value: new THREE.Color() }, uColA2: { value: new THREE.Color() },
    uColB: { value: new THREE.Color() }, uColB2: { value: new THREE.Color() },
    uThread: { value: new THREE.Color() },
    uStripe: { value: new THREE.Vector3(0, 0, 0) },             // in, out, mode (0 none, 1 single, 2 twin)
    tNormB: { value: tex.leather }, tGrain: { value: tex.leatherR }, tStitch: { value: tex.stitch },
    uTile: { value: new THREE.Vector2(0.08, 0.08) },            // A, B tile size (m)
    uNScale: { value: new THREE.Vector2(0.55, 0.55) },
    uRough: { value: new THREE.Vector2(0.42, 0.42) },
    uSheen: { value: new THREE.Vector4(0.08, 0.08, 0.4, 0.4) }, // weightA, weightB, roughA, roughB
    uCoat: { value: new THREE.Vector2(0.15, 0.15) },
    uLeather: { value: new THREE.Vector2(1, 1) },
    uVelvet: { value: new THREE.Vector2(0, 0) },
  };
  m.userData.u = u;
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, u);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec2 vUv0;\nvarying float vTone;\nvarying vec3 vObj;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvUv0 = uv; vTone = uv1.x; vObj = position;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
varying vec2 vUv0; varying float vTone; varying vec3 vObj;
uniform vec3 uColA, uColA2, uColB, uColB2, uThread; uniform vec3 uStripe;
uniform sampler2D tNormB, tGrain, tStitch; uniform vec2 uTile, uNScale, uRough, uCoat, uLeather, uVelvet; uniform vec4 uSheen;
${NOISE}
float gMask; float gStitch; float gH; float gBurn;
void duoluneFields(){
  float u = vUv0.x, v = 1.0 - vUv0.y; float ay = abs(vObj.z);   // glTF export flips V
  float fw = fwidth(v) + fwidth(u);
  float aa = 1.0 - smoothstep(0.0008, 0.004, fw);                       // fade 1 mm detail out with distance
  // stripe mask (object-space |z|: exact through subdivision)
  float m = 0.0;
  if (uStripe.z > 0.5) {
    m = 1.0 - smoothstep(uStripe.y - 0.0003, uStripe.y + 0.0003, ay);
    if (uStripe.z > 1.5) m *= smoothstep(uStripe.x - 0.0003, uStripe.x + 0.0003, ay);
  }
  gMask = m;
  float jit = (texture2D(tGrain, vUv0 * 3.1).r - 0.5) * 0.0018;
  // top-stitch ring 16.5 mm from each end
  float dv = abs(v - 0.0165);
  float ph = fract((u + jit + dv * 1.2) / 0.004);
  // thread: sampled from a mipmapped stitch texture (x along the thread, one dash per 4 mm; y across, 1.8 mm), so the
  // GPU filters it at every distance and angle instead of the shader aliasing it.
  vec4 sRing = texture2D(tStitch, vec2(ph, (v - 0.0165) / 0.0018 + 0.5));
  float ring = sRing.r;
  float groove = 1.0 - smoothstep(0.0004, 0.0019, dv);
  // underside seam (u = 0 faces the floor) with two stitch rows
  float su = abs(u);
  float sgroove = 1.0 - smoothstep(0.0, 0.0017, su);
  float sph = fract((v + jit) / 0.004);
  vec4 sRow = texture2D(tStitch, vec2(sph, (su - 0.0036) / 0.0018 + 0.5));
  float srow = sRow.r * step(0.0165, v);
  // stripe seams + double top-stitch
  float sd = 9.0;
  if (uStripe.z > 0.5) { sd = abs(ay - uStripe.y); if (uStripe.z > 1.5) sd = min(sd, abs(ay - uStripe.x)); }
  float stgroove = 1.0 - smoothstep(0.0, 0.0015, sd);
  float stph = fract((u + jit) / 0.004);
  vec4 sSt = texture2D(tStitch, vec2(stph, (sd - 0.0036) / 0.0018 + 0.5));
  float strow = sSt.r;
  // puckering where the cover pulls round the end
  float pm = smoothstep(0.003, 0.0066, v) * (1.0 - smoothstep(0.0066, 0.025, v));
  float nA = texture2D(tGrain, vUv0 * 0.9).r; float nB = texture2D(tGrain, vUv0 * 0.45 + 0.37).r;
  float pk = sin(u * 6.2831 / 0.0115 + (nA - 0.5) * 10.0) * pm * smoothstep(0.35, 0.65, nB) * (1.0 - smoothstep(0.0015, 0.004, fwidth(u)));
  gStitch = max(max(ring, srow), strow) * aa;
  gH = (sRing.g * 0.9 + sRow.g * step(0.0165, v) * 0.6 + sSt.g * 0.6) * aa - groove * 0.35 - sgroove * 0.9 - stgroove * 0.9 + pk * 0.25;
  gBurn = max(1.0 - smoothstep(0.0, 0.0165, v), max(sgroove, stgroove) * 0.6);
}`)
      .replace('#include <color_fragment>', `#include <color_fragment>
duoluneFields();
float lea = mix(uLeather.x, uLeather.y, gMask);
float grainT = texture2D(tGrain, vUv0 / 0.08).r;
float drift = (texture2D(tGrain, vObj.xz * 0.35 + vObj.y * 0.2).r - 0.55) * 0.3 + (vTone - 0.5) * 0.28;
float tA = clamp(0.35 + drift + gBurn * mix(0.25, 0.6, uLeather.x) + (grainT - 0.6) * 0.6 * uLeather.x, 0.0, 1.0);
float tB = clamp(0.35 + drift + gBurn * mix(0.25, 0.6, uLeather.y) + (grainT - 0.6) * 0.6 * uLeather.y, 0.0, 1.0);
vec3 cA = mix(uColA, uColA2, tA); vec3 cB = mix(uColB, uColB2, tB);
diffuseColor.rgb = mix(mix(cA, cB, gMask), uThread, gStitch);`)
      .replace('#include <normal_fragment_maps>', `
vec2 nuvA = vUv0 / uTile.x; vec2 nuvB = vUv0 / uTile.y;
vec3 nA = texture2D(normalMap, nuvA).xyz * 2.0 - 1.0; nA.xy *= uNScale.x;
vec3 nB = texture2D(tNormB, nuvB).xyz * 2.0 - 1.0; nB.xy *= uNScale.y;
vec3 mapN = normalize(mix(nA, nB, gMask));
normal = normalize(tbn * mapN);
{ float bf = 1.0 - smoothstep(0.0006, 0.003, fwidth(vUv0.y) + fwidth(vUv0.x)); vec2 dH = vec2(dFdx(gH), dFdy(gH)) * 0.0011 * bf; normal = perturbBump(-vViewPosition, normal, dH * 900.0, faceDirection); }`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
roughnessFactor = mix(uRough.x, uRough.y, gMask) + gStitch * 0.2 + (grainT - 0.55) * 0.2 * lea;`)
      .replace('#include <lights_physical_fragment>', `#include <lights_physical_fragment>
material.sheenColor = vec3(mix(uSheen.x, uSheen.y, gMask)) * mix(vec3(1.0), diffuseColor.rgb * 2.0 + 0.3, 0.5);
material.sheenRoughness = clamp(mix(uSheen.z, uSheen.w, gMask), 0.07, 1.0);
{ float vel = mix(uVelvet.x, uVelvet.y, gMask);
  if (vel > 0.0) {
    float nv = clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0);
    material.diffuseColor *= mix(1.0, mix(1.25, 0.62, nv), vel);                 // pile: lighter at the silhouette, deep where it faces you
    material.sheenColor = mix(material.sheenColor, diffuseColor.rgb * 1.8 + 0.05, vel);
    material.sheenRoughness = mix(material.sheenRoughness, 0.28, vel);
    material.specularF90 = mix(material.specularF90, 0.15, vel);
    material.specularColor *= mix(1.0, 0.25, vel);
  } }
`);
    // the tbn variable only exists with tangent-space normal maps (USE_NORMALMAP_TANGENTSPACE) in r160 normal_fragment_begin
  };
  return m;
}

function frameMaterial() {
  const m = new THREE.MeshPhysicalMaterial({ roughness: 0.4, clearcoat: 0.2, clearcoatRoughness: 0.25 });
  const u = { uWood: { value: 0 }, uLight: { value: new THREE.Color() }, uDark: { value: new THREE.Color() } };
  m.userData.u = u;
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, u);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vObj;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvObj = position;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
varying vec3 vObj; uniform float uWood; uniform vec3 uLight, uDark;
${NOISE}
float gLines; float gGlue; float gPore;`)
      .replace('#include <color_fragment>', `#include <color_fragment>
if (uWood > 0.5) {
  // bent laminated wood: plies concentric with the arc (centre = origin, axis = Z); long grain follows the bend
  float r = length(vObj.xy); float th = atan(vObj.y, vObj.x); float lat = vObj.z;
  // long grain follows the bend (theta stretched), figure varies across the face (r, lat). Two octaves so there is always
  // visible grain: a coarse figure that never fades, and fine lines that fade only when smaller than ~2 px.
  vec3 q = vec3(r * 70.0, lat * 70.0, th * 1.2);
  float g = snoise(q) * 0.5 + 0.5 + snoise(q * vec3(2.1, 2.1, 0.6) + 7.3) * 0.18;
  float fq = length(fwidth(q));
  float coarse = smoothstep(0.25, 0.75, fract(g * 3.0));
  float fine = smoothstep(0.4, 1.0, fract(g * 11.0));
  float lineFade = 1.0 - smoothstep(0.35, 1.2, fq * 11.0);
  gLines = clamp(coarse * 0.55 + mix(0.3, fine, lineFade) * 0.45, 0.0, 1.0);
  float big = snoise(q * 0.08);
  float ply = floor(r / 0.0018);
  gGlue = 1.0 - smoothstep(0.0, 0.07, fract(r / 0.0018));
  gPore = mix(0.5, fract(sin(dot(floor(q * 5.0), vec3(12.9898, 78.233, 37.719))) * 43758.5453), 1.0 - smoothstep(0.15, 0.5, fq * 5.0));
  float f = clamp(gLines * 0.85 + hash11(ply) * 0.15 + big * 0.25 + gPore * 0.06, 0.0, 1.0);
  vec3 c = mix(uLight, uDark, f);
  c = mix(c, uDark * 0.5, gGlue * 0.7 * (1.0 - smoothstep(0.0006, 0.004, fwidth(r))));
  diffuseColor.rgb = c;
}`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
if (uWood > 0.5) roughnessFactor = 0.42 + gLines * 0.12;`);
  };
  return m;
}

// ---------------------------------------------------------------- the viewer
export async function createConfigurator({ canvas, overlay, onProgress, onReady, onHotspot, glb }) {
  const QP = new URLSearchParams(location.search);   // dev A/B only: ?m=<folder under assets/model> &lite=0|1
  const MD = 'assets/model/' + (QP.get('m') ? QP.get('m').replace(/[^\w-]/g, '') + '/' : '');
  const LITE = QP.has('lite') ? QP.get('lite') === '1' : innerWidth < 760 || (navigator.deviceMemory || 8) <= 4 || matchMedia('(pointer: coarse)').matches;
  let dprCap = LITE ? 1.25 : 1.5;
  let dirty = true;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, preserveDrawingBuffer: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, dprCap));
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap; renderer.shadowMap.autoUpdate = false;
  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;
  scene.environmentIntensity = 0.28;
  const camera = new THREE.PerspectiveCamera(32, 1, 0.05, 50);
  camera.position.set(2.6, 1.35, 2.9);
  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0.1, 0.42, 0); controls.enableDamping = true; controls.dampingFactor = 0.07;
  controls.minDistance = 0.55; controls.maxDistance = 6; controls.maxPolarAngle = Math.PI * 0.56; controls.enablePan = false;
  controls.autoRotate = false; controls.autoRotateSpeed = 0.45;
  const key = new THREE.DirectionalLight(0xfff2e2, 3.4); key.position.set(2.5, 3.2, 2.2); key.castShadow = true;
  key.shadow.mapSize.setScalar(LITE ? 1024 : 2048); key.shadow.camera.left = -3; key.shadow.camera.right = 3; key.shadow.camera.top = 3; key.shadow.camera.bottom = -3; key.shadow.camera.far = 14;   // wide enough that the frustum edge never shows on the floor
  key.shadow.radius = 6; key.shadow.blurSamples = 16; key.shadow.bias = -0.0004; key.shadow.normalBias = 0.01;
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xdfe8ff, 2.0); rim.position.set(-2.4, 1.6, -2.2); scene.add(rim);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(12, 12), new THREE.ShadowMaterial({ opacity: 0.18 }));   // r11: 0.32 read as a black slab against Cycles
  ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground);
  const tl = new THREE.TextureLoader();
  tl.load('assets/model/contact_shadow_a.jpg?v=38', (shadowTex) => {   // not awaited: the chair must not wait on its shadow
    shadowTex.colorSpace = THREE.NoColorSpace;   // greyscale alpha (was the PNG alpha channel)
    const sp = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 2.6), new THREE.MeshBasicMaterial({ color: 0x000000, alphaMap: shadowTex, transparent: true, opacity: 0.55, depthWrite: false, toneMapped: false }));
    sp.rotation.x = -Math.PI / 2; sp.position.set(0.1, 0.001, 0); sp.renderOrder = -1; scene.add(sp); dirty = true;
  });

  // textures
  const ldTex = (n, srgb = false) => new Promise((res, rej) => tl.load(`assets/tex/${n}.${n.endsWith("_n") && !QP.has("jpgn") ? "webp" : "jpg"}`, (t) => {
    t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
    if (srgb) t.colorSpace = THREE.SRGBColorSpace; dirty = true; res(t);
  }, undefined, rej));
  const tex = {};
  let loaded = 0; const total = 6;
  const tick = (what) => { loaded++; onProgress?.(loaded / total, what); };
  // upholstery normal maps load on demand (only the kinds in the build; ~250 KB each), a flat normal stands in until then
  const flatN = new THREE.DataTexture(new Uint8Array([128, 128, 255, 255]), 1, 1); flatN.wrapS = flatN.wrapT = THREE.RepeatWrapping; flatN.needsUpdate = true;
  for (const n of ['leather_n', 'wool_n', 'boucle_n', 'velvet_n']) tex[n] = flatN;
  const texJobs = ['leather_r', 'leather_n'].map((n) => ldTex(n).then((t) => { tex[n] = t; loaded = Math.max(loaded, total - 3); tick(n); }));

  const draco = new DRACOLoader().setDecoderPath('https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/libs/draco/gltf/');
  const gl = new GLTFLoader().setDRACOLoader(draco);
  const pre = glb ? await glb : null;   // app.js started this download alongside the module import
  const gltf = pre ? await gl.parseAsync(pre, '') : await new Promise((res, rej) => gl.load(MD + (LITE ? 'duolune_lite.glb?v=38' : 'duolune.glb?v=38'), res, (e) => e.total && onProgress?.(loaded / total + (e.loaded / e.total) / total, 'model'), rej));
  tick('model');
  await Promise.all(texJobs);
  tex.leather = tex.leather_n; tex.leatherR = tex.leather_r;
  { // stitch texture: R = thread coverage, G = thread height. 128 (along) x 64 (across). Capsule-shaped dash, 62% duty.
    const W = 128, H = 64, d = new Uint8Array(W * H * 4);
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const fx = (x + 0.5) / W, fy = (y + 0.5) / H;
      const cx = Math.min(Math.max(fx, 0.12), 0.50), dx = (fx - cx) / 0.12, dy = (fy - 0.5) / 0.25;   // thread = middle half
      const r2 = dx * dx + dy * dy; const cov = Math.max(0, Math.min(1, (1 - Math.sqrt(r2)) * 4));
      const i = (y * W + x) * 4; d[i] = cov * 255; d[i + 1] = Math.sqrt(Math.max(0, 1 - r2)) * 255; d[i + 2] = 0; d[i + 3] = 255;
    }
    const st = new THREE.DataTexture(d, W, H); st.wrapS = THREE.RepeatWrapping; st.wrapT = THREE.ClampToEdgeWrapping;
    st.minFilter = THREE.LinearMipmapLinearFilter; st.magFilter = THREE.LinearFilter; st.generateMipmaps = true;
    st.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy()); st.needsUpdate = true; tex.stitch = st;
  }
  const NT = { leather: tex.leather_n, wool: flatN, boucle: flatN, velvet: flatN };
  const ntWant = { leather: true }; let lastCfg = null;
  const needKind = (k) => { if (ntWant[k]) return; ntWant[k] = ldTex(k + '_n').then((t) => { NT[k] = t; if (lastCfg) apply(lastCfg); }).catch(() => {}); };

  const root = gltf.scene; scene.add(root);
  const parts = {}; root.traverse((o) => { if (o.isMesh) { parts[o.name] = o; o.castShadow = true; o.receiveShadow = true; } });
  const mats = {
    rollers: upholsteryMaterial(tex),
    trim: new THREE.MeshPhysicalMaterial({ roughness: 0.5, sheen: 1, sheenRoughness: 0.4, clearcoat: 0.1 }),
    frame: frameMaterial(),
    rail: new THREE.MeshPhysicalMaterial({ roughness: 0.38, clearcoat: 0.2 }),
    hardware: new THREE.MeshPhysicalMaterial({ color: lin([0.75, 0.75, 0.73]), metalness: 1, roughness: 0.28 }),
    feet: new THREE.MeshStandardMaterial({ color: 0x080808, roughness: 0.85 }),
  };
  for (const [k, m] of Object.entries(mats)) if (parts[k]) parts[k].material = m;
  // baked Cycles ambient occlusion (greyscale, colour-independent): contact shadows between rollers, under the seat, round the bolts.
  // Loaded after first paint; each part has its own lightmap UV (rollers: 3rd UV set, others: the only one).
  const GI = 0.7;   // decoded x2 then x0.35: bounce adds shape and colour bleed without lifting blacks (1.6 washed the frame grey)
  for (const [k, m] of Object.entries(mats)) {
    tl.load(`${MD}${LITE ? 'ao_lite_' : 'ao_'}${k}.jpg?v=38`, (t) => {
      t.flipY = false; t.channel = k === 'rollers' ? 2 : 0; t.colorSpace = THREE.NoColorSpace;
      m.aoMap = t; m.aoMapIntensity = k === 'rollers' ? 0.9 : 1.0; m.needsUpdate = true; dirty = true;
    });
    // baked Cycles bounce light (indirect diffuse, studio lights + floor), stored x0.5; three adds it to the live direct light
    if (!['hardware', 'feet'].includes(k)) tl.load(`${MD}${LITE ? 'gi_lite_' : 'gi_'}${k}.jpg?v=38`, (t) => {
      t.flipY = false; t.channel = k === 'rollers' ? 2 : 0; t.colorSpace = THREE.NoColorSpace;
      m.lightMap = t; m.lightMapIntensity = GI; m.needsUpdate = true; dirty = true;
    });
  }
  window.__duo = { scene, parts, mats, camera, controls, renderer, ground, key, rim, U: mats.rollers.userData.u, redraw: () => { renderer.shadowMap.needsUpdate = true; dirty = true; } };

  // ---------------- apply a configuration
  function colourSet(kind, colour, custom) {
    if (custom) {
      const a = fromHex(custom); const b = a.clone().multiplyScalar(0.6);
      const t = a.clone().lerp(new THREE.Color(1, 1, 1), 0.35);
      return { a, b, t };
    }
    const c = COLOURS[kind].find((x) => x.id === colour) || COLOURS[kind][0];
    return { a: lin(c.a), b: lin(c.b), t: lin(c.thread) };
  }
  function apply(cfg) {
    const U = mats.rollers.userData.u;
    lastCfg = cfg;
    const A = colourSet(cfg.up.kind, cfg.up.colour, cfg.up.custom); const KA = KINDS[cfg.up.kind];
    const st = cfg.stripe || { mode: 'none' };
    const on = st.mode && st.mode !== 'none';
    const kB = on ? st.kind : cfg.up.kind; const KB = KINDS[kB];
    const B = on ? colourSet(st.kind, st.colour, st.custom) : A;
    U.uColA.value.copy(A.a); U.uColA2.value.copy(A.b); U.uColB.value.copy(B.a); U.uColB2.value.copy(B.b); U.uThread.value.copy(A.t);
    const e = STRIPES[on ? st.mode : 'none'];
    U.uStripe.value.set(e[0], e[1], on ? (st.mode === 'twin' ? 2 : 1) : 0);
    needKind(cfg.up.kind); needKind(kB);
    mats.rollers.normalMap = NT[cfg.up.kind]; U.tNormB.value = NT[kB];
    U.uTile.value.set(KA.tile, KB.tile); U.uNScale.value.set(KA.normal, KB.normal);
    U.uRough.value.set(KA.rough, KB.rough); U.uSheen.value.set(KA.sheen, KB.sheen, KA.sheenRough, KB.sheenRough);
    U.uCoat.value.set(KA.coat, KB.coat); U.uLeather.value.set(cfg.up.kind === 'leather' ? 1 : 0, kB === 'leather' ? 1 : 0); U.uVelvet.value.set(cfg.up.kind === 'velvet' ? 1 : 0, kB === 'velvet' ? 1 : 0);
    mats.trim.color.copy(A.b.clone().lerp(A.a, 0.4)); mats.trim.roughness = KA.rough; mats.trim.sheen = KA.sheen; mats.trim.clearcoat = KA.coat;
    const F = mats.frame, FU = F.userData.u;
    if (cfg.frame.type === 'wood') {
      const w = WOODS.find((x) => x.id === cfg.frame.id) || WOODS[0];
      FU.uWood.value = 1; FU.uLight.value.copy(lin(w.light)); FU.uDark.value.copy(lin(w.dark));
      F.metalness = 0; F.clearcoat = 0.35; F.clearcoatRoughness = 0.18; F.color.set(0xffffff);
      mats.rail.color.copy(lin(METALS[0].c)); mats.rail.metalness = 0; mats.rail.roughness = METALS[0].rough;
    } else {
      const mt = METALS.find((x) => x.id === cfg.frame.id) || METALS[0];
      const mc = cfg.frame.custom ? fromHex(cfg.frame.custom) : lin(mt.c);     // custom powder coat: satin, non-metallic
      FU.uWood.value = 0; F.color.copy(mc); F.metalness = mt.metal; F.roughness = mt.rough; F.clearcoat = mt.coat;
      mats.rail.color.copy(mc); mats.rail.metalness = mt.metal; mats.rail.roughness = mt.rough;
      if (cfg.frame.custom) { F.metalness = mats.rail.metalness = 0; F.roughness = mats.rail.roughness = 0.4; F.clearcoat = 0.2; }
    }
    mats.rollers.needsUpdate = true; dirty = true;
  }

  // ---------------- dimensions + scale figure
  const dims = new THREE.Group(); dims.visible = false; scene.add(dims);
  const lineMat = new THREE.LineDashedMaterial({ color: 0xf1e7d6, dashSize: 0.03, gapSize: 0.018, transparent: true, opacity: 0.9, depthTest: false });
  const box = new THREE.Box3().setFromObject(root);
  const seg = (a, b) => { const g = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(...a), new THREE.Vector3(...b)]); const l = new THREE.Line(g, lineMat); l.computeLineDistances(); l.renderOrder = 10; dims.add(l); };
  const { min, max } = box; const zf = max.z + 0.12, xr = max.x + 0.12;
  seg([min.x, 0.002, zf], [max.x, 0.002, zf]); seg([min.x, 0.002, zf - 0.04], [min.x, 0.002, zf + 0.04]); seg([max.x, 0.002, zf - 0.04], [max.x, 0.002, zf + 0.04]);
  seg([xr, 0.002, min.z], [xr, 0.002, max.z]);
  seg([min.x - 0.1, 0, min.z], [min.x - 0.1, max.y, min.z]);
  const dimLabels = [
    { p: new THREE.Vector3((min.x + max.x) / 2, 0.01, zf), t: `${Math.round((max.x - min.x) * 1000)} mm` },
    { p: new THREE.Vector3(xr, 0.01, 0), t: `${Math.round((max.z - min.z) * 1000)} mm` },
    { p: new THREE.Vector3(min.x - 0.1, max.y / 2, min.z), t: `${Math.round(max.y * 1000)} mm` },
  ];
  // 170 cm figure, drawn flat and turned to face the camera
  const fc = document.createElement('canvas'); fc.width = 256; fc.height = 1024; const fx = fc.getContext('2d');
  fx.fillStyle = 'rgba(241,231,214,0.18)'; fx.strokeStyle = 'rgba(241,231,214,0.8)'; fx.lineWidth = 5;
  const P = new Path2D('M128 30a62 62 0 1 1 0 124a62 62 0 1 1 0-124ZM70 190h116q34 0 38 36l14 270q2 24-20 24t-24-22l-10-200v650q0 30-30 30t-30-30V630h-12v348q0 30-30 30t-30-30V328l-10 200q-2 22-24 22t-20-24l14-270q4-36 38-36Z');
  fx.fill(P); fx.stroke(P);
  const fig = new THREE.Mesh(new THREE.PlaneGeometry(0.425, 1.7), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(fc), transparent: true, depthWrite: false, toneMapped: false }));
  fig.material.map.colorSpace = THREE.SRGBColorSpace; fig.position.set(max.x + 0.55, 0.85, 0.35); dims.add(fig);

  // ---------------- hotspots
  const hsEls = HOTSPOTS.map((h) => {
    const b = document.createElement('button');
    b.className = 'hs'; b.type = 'button'; b.dataset.id = h.id; b.setAttribute('aria-label', `${h.title}: ${h.kicker}`);
    b.innerHTML = `<span class="hs-dot"></span><span class="hs-lbl">${h.title}</span>`;
    b.addEventListener('click', () => focus(h.id));
    overlay.appendChild(b); return { h, b, v: new THREE.Vector3(...h.pos), vis: 1 };
  });
  const lblEls = dimLabels.map((d) => { const s = document.createElement('span'); s.className = 'dim-label'; s.textContent = d.t; overlay.appendChild(s); return { d, s }; });
  const ray = new THREE.Raycaster(); const meshes = Object.values(parts);
  let showHs = true; let frameN = 0;

  // ---------------- camera moves
  let home = { cam: camera.position.clone(), tgt: controls.target.clone() };
  let tween = null;
  function moveTo(cam, tgt, dur = 1.1) {
    tween?.kill?.(); controls.autoRotate = false;
    const g = window.gsap;
    if (!g || reduced) { camera.position.set(...cam); controls.target.set(...tgt); return; }
    const from = { cx: camera.position.x, cy: camera.position.y, cz: camera.position.z, tx: controls.target.x, ty: controls.target.y, tz: controls.target.z };
    tween = g.to(from, { cx: cam[0], cy: cam[1], cz: cam[2], tx: tgt[0], ty: tgt[1], tz: tgt[2], duration: dur, ease: 'power3.inOut',
      onUpdate: () => { camera.position.set(from.cx, from.cy, from.cz); controls.target.set(from.tx, from.ty, from.tz); dirty = true; } });
  }
  function focus(id) {
    const h = HOTSPOTS.find((x) => x.id === id); if (!h) return;
    home = home || { cam: camera.position.clone(), tgt: controls.target.clone() };
    moveTo(h.view.cam, h.view.tgt);
    if (h.under) controls.maxPolarAngle = Math.PI * 0.62;
    hsEls.forEach((e) => e.b.classList.toggle('is-active', e.h.id === id));
    onHotspot?.(h);
  }
  function reset() {
    controls.maxPolarAngle = Math.PI * 0.56;
    moveTo([2.6, 1.35, 2.9], [0.1, 0.42, 0]); hsEls.forEach((e) => e.b.classList.remove('is-active'));
  }
  controls.addEventListener('start', () => { controls.autoRotate = false; tween?.kill?.(); });

  // ---------------- loop
  const tmp = new THREE.Vector3();
  controls.addEventListener('change', () => { dirty = true; });
  function resize() {
    const r = canvas.getBoundingClientRect(); const w = Math.max(1, r.width), h = Math.max(1, r.height);
    renderer.setSize(w, h, false); camera.aspect = w / h;
    camera.fov = w / h < 0.9 ? 38 : 32; camera.updateProjectionMatrix(); dirty = true;
  }
  new ResizeObserver(resize).observe(canvas); resize();
  let running = true; let visible = true;
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(canvas);
  // hotspot facing: shown when the camera is on the outer side of the surface it marks (cheap, no raycasts)
  const C = new THREE.Vector3(0.1, 0.42, 0);
  for (const e of hsEls) e.n = e.h.under ? new THREE.Vector3(0, -1, 0.2).normalize() : e.v.clone().sub(C).setY(Math.max(0.15, e.v.y - C.y)).normalize();
  let slow = 0, lastT = performance.now();
  const dv = new THREE.Vector3();
  function frame(t) {
    requestAnimationFrame(frame);
    if (!running || !visible) return;
    const moved = controls.update();
    if (!(moved || dirty || controls.autoRotate)) { lastT = t; return; }
    dirty = false;
    if (dims.visible) fig.rotation.set(0, Math.atan2(camera.position.x - fig.position.x, camera.position.z - fig.position.z), 0);
    renderer.render(scene, camera);
    // adaptive resolution: frames slower than ~35 fps for a while step the pixel ratio down
    const dt = t - lastT; lastT = t;
    if (dt > 28 && dt < 200) { if (++slow > 20 && dprCap > 0.85) { dprCap = Math.max(0.85, dprCap - 0.25); renderer.setPixelRatio(Math.min(devicePixelRatio, dprCap)); resize(); slow = 0; } } else slow = Math.max(0, slow - 1);
    const r = canvas.getBoundingClientRect();
    for (const e of hsEls) {
      tmp.copy(e.v).project(camera);
      const x = (tmp.x * 0.5 + 0.5) * r.width, y = (-tmp.y * 0.5 + 0.5) * r.height;
      e.vis = tmp.z < 1 && e.n.dot(dv.copy(camera.position).sub(e.v)) > 0 ? 1 : 0;
      e.b.style.transform = `translate(${x}px, ${y}px)`;
      e.b.classList.toggle('is-hidden', !showHs || !e.vis);
    }
    for (const l of lblEls) {
      tmp.copy(l.d.p).project(camera);
      l.s.style.transform = `translate(${(tmp.x * 0.5 + 0.5) * r.width}px, ${(-tmp.y * 0.5 + 0.5) * r.height}px)`;
      l.s.classList.toggle('is-hidden', !dims.visible);
    }
  }

  // ---------------- room: blurred CC0 interior (Poly Haven "lebombo") + a side table and plant, loaded after the chair (no props)
  const studioEnv = scene.environment;
  const room = { loaded: false, on: false, group: new THREE.Group(), env: null, bg: null };
  room.group.visible = false; scene.add(room.group);
  const fc2 = document.createElement('canvas'); fc2.width = fc2.height = 256; const g2 = fc2.getContext('2d');
  const grd = g2.createRadialGradient(128, 128, 20, 128, 128, 128); grd.addColorStop(0, '#fff'); grd.addColorStop(0.55, '#fff'); grd.addColorStop(1, '#000');
  g2.fillStyle = grd; g2.fillRect(0, 0, 256, 256);
  const floor = new THREE.Mesh(new THREE.CircleGeometry(4.2, 64), new THREE.MeshStandardMaterial({ color: new THREE.Color().setRGB(0.21, 0.175, 0.14, THREE.LinearSRGBColorSpace), roughness: 0.75, transparent: true, alphaMap: new THREE.CanvasTexture(fc2), depthWrite: false }));
  floor.rotation.x = -Math.PI / 2; floor.position.y = -0.0015; floor.renderOrder = -2; room.group.add(floor);
  async function loadRoom() {
    const hdr = await new RGBELoader().loadAsync('assets/env/lebombo_512.hdr');
    hdr.mapping = THREE.EquirectangularReflectionMapping;
    room.bg = hdr; room.env = pmrem.fromEquirectangular(hdr).texture;
    // the side table and plant were removed on 13 Nov (rustic Poly Haven props fought the satin steel and cast a stray shadow); scale comes from Dimensions and the fit planner
    room.loaded = true;
  }
  async function setRoom(on) {
    room.on = on;
    if (!room.loaded) { try { await loadRoom(); } catch (e) { console.warn('room assets', e); } }
    if (!room.on) { renderer.shadowMap.needsUpdate = true; dirty = true; scene.background = null; scene.environment = room.env || studioEnv; scene.environmentIntensity = room.env ? 0.4 : 0.28; room.group.visible = false; key.intensity = 3.2; return; }
    scene.background = room.bg; scene.backgroundBlurriness = 0.32; scene.backgroundIntensity = 0.55;
    scene.environment = room.env; scene.environmentIntensity = 0.55; room.group.visible = true; key.intensity = 2.6;
    renderer.shadowMap.needsUpdate = true; dirty = true;
  }

  renderer.shadowMap.needsUpdate = true;
  requestAnimationFrame(frame);
  onReady?.();
  return {
    apply, focus, reset, setRoom,
    setDims(v) { dims.visible = v; dirty = true; if (v) moveTo([0.4, 1.6, 3.9], [0.35, 0.45, 0]); },
    setHotspots(v) { showHs = v; dirty = true; },
    setAutoRotate(v) { controls.autoRotate = v && !reduced; dirty = true; },
    snapshot() { renderer.render(scene, camera); return canvas.toDataURL('image/png'); },
    pause(v) { running = !v; },
  };
}
