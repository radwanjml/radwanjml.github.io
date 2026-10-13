// Orbit viewer. Borrows the one renderer from the hero, gives it back on close.
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as stage from './stage.js';
import { loader } from './playground.js';

const MODELS = {
  headphones: { url: 'assets/models/headphones.glb' },
  perfume: { url: 'assets/models/perfume.glb', glass: true },
};

const dialog = document.getElementById('viewer');
const slot = document.getElementById('viewer-slot');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(32, 1, 0.01, 200);
const pmrem = new THREE.PMREMGenerator(stage.renderer);
scene.environment = pmrem.fromScene(studio(), 0.02).texture;

// A dark studio with three softboxes. Glossy glass mirrors its surroundings, and an evenly
// lit room (RoomEnvironment) turns it flat grey; contrast is what reads as glass.
function studio() {
  const s = new THREE.Scene();
  s.background = new THREE.Color(0x0a0612);
  const box = (w, h, color, intensity, pos, look) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(intensity), side: THREE.DoubleSide }));
    m.position.set(...pos);
    m.lookAt(...look);
    s.add(m);
  };
  box(2.5, 9, 0xfff1dc, 6, [-6, 2, 3], [0, 0, 0]);     // tall key strip, warm
  box(1.6, 9, 0xd8c8ff, 3.5, [6, 2, -2], [0, 0, 0]);   // rim strip, violet-white
  box(8, 4, 0xffffff, 1.6, [0, 8, 0], [0, 0, 0]);      // overhead fill
  box(10, 1, 0xe8b04a, 0.8, [0, -1, 7], [0, 0, 0]);    // low gold bounce
  // reflection cards placed where the default view's faces mirror: front face looks low-left-front,
  // top face looks up-left-back (reflect the view vector about each face normal)
  box(6, 3, 0xfff6ea, 2.2, [-4.5, -2.2, 8], [0, 0, 0]);
  // the model turns on a turntable, so ring it with strips: every face sweeps past a highlight
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    box(1.4, 6, 0xffffff, i % 2 ? 0.9 : 1.8, [Math.sin(a) * 9, 0, Math.cos(a) * 9], [0, 0, 0]);
  }
  box(6, 3, 0xffffff, 1.6, [-4.5, 3.2, -8], [0, 0, 0]);
  return s;
}
const key = new THREE.DirectionalLight(0xffe2b0, 1.6);
key.position.set(3, 5, 4);
scene.add(key);

const shadow = new THREE.Mesh(
  new THREE.PlaneGeometry(1, 1),
  new THREE.MeshBasicMaterial({ map: blob(), transparent: true, depthWrite: false }),
);
shadow.rotation.x = -Math.PI / 2;
scene.add(shadow);

const controls = new OrbitControls(camera, stage.canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.enablePan = false;
controls.enabled = false;

const cache = {};
let current = null, heroApi = null, spinning = true;
controls.addEventListener('start', () => { spinning = false; });

function blob() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, 'rgba(6,2,16,0.6)');
  grad.addColorStop(1, 'rgba(6,2,16,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

// Glass: physical transmission looks right but is the costliest material on a phone.
// Decide by measurement; this is the fallback path (env reflection + opacity).
// The JAMEEL label lives in the glass material's base-colour and transmission maps,
// so tune the exported material rather than replacing it.
function glassify(root, cheap) {
  root.traverse((o) => {
    if (!o.isMesh) return;
    const m = o.material;
    if (/glass/i.test(m.name || '')) {
      // Blender's exporter also wired the label into the normal and transmission slots,
      // which crumples the surface; the label belongs in base colour only.
      m.normalMap = null;
      m.transmissionMap = null;
      m.color.setScalar(0.3);   // smoked glass, as in the Cycles renders
      m.roughness = 0.03;
      m.clearcoat = 1;
      m.clearcoatRoughness = 0.05;
      m.envMapIntensity = 1.1;
      m.transmission = cheap ? 0 : 0.25;
      m.thickness = 0.35;
      m.needsUpdate = true;
    }
    if (/liquid/i.test(m.name || '')) {
      o.material = new THREE.MeshPhysicalMaterial({ color: 0x4a2a10, roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.1 });
    }
  });
}

async function load(id) {
  if (cache[id]) return cache[id];
  const def = MODELS[id];
  const gltf = await loader.loadAsync(def.url);
  const root = gltf.scene;
  if (def.glass) glassify(root, matchMedia('(pointer: coarse)').matches);
  // centre on the floor, measure for framing
  const box = new THREE.Box3().setFromObject(root);
  const size = box.getSize(new THREE.Vector3());
  const centre = box.getCenter(new THREE.Vector3());
  root.position.sub(new THREE.Vector3(centre.x, box.min.y, centre.z));
  const group = new THREE.Group();
  group.add(root);
  cache[id] = { group, size, radius: size.length() / 2 };
  return cache[id];
}

function frame(item) {
  const r = item.radius;
  // fit the bounding sphere to the narrower of the two fields of view, with breathing room
  const vFov = THREE.MathUtils.degToRad(camera.fov);
  const hFov = 2 * Math.atan(Math.tan(vFov / 2) * camera.aspect);
  const dist = (r / Math.sin(Math.min(vFov, hFov) / 2)) * 1.25;
  const dir = new THREE.Vector3(0.55, 0.32, 1).normalize();
  controls.target.set(0, item.size.y / 2, 0);
  camera.position.copy(dir.multiplyScalar(dist)).add(controls.target);
  controls.minDistance = dist * 0.55;
  controls.maxDistance = dist * 2;
  camera.near = r / 50; camera.far = r * 50;
  camera.updateProjectionMatrix();
  shadow.scale.setScalar(Math.max(item.size.x, item.size.z) * 1.8);
}

function tick(dt) {
  if (spinning && current) current.group.rotation.y += dt * 0.35;
  controls.update();
}

export async function open(id, hero) {
  heroApi = hero;
  dialog.showModal();
  stage.mount(slot);
  const item = await load(id);
  if (current) scene.remove(current.group);
  current = item;
  current.group.rotation.y = 0;
  scene.add(current.group);
  spinning = true;
  stage.run(scene, camera, tick);   // sets the real aspect before framing
  frame(item);
  controls.enabled = true;
}

export function close() {
  controls.enabled = false;
  if (dialog.open) dialog.close();
}

dialog.querySelector('.viewer-close').addEventListener('click', close);
dialog.addEventListener('close', () => {
  controls.enabled = false;
  if (!heroApi) return;
  stage.mount(document.getElementById('hero-slot'));
  stage.run(heroApi.scene, heroApi.camera, heroApi.tick, heroApi.onResize);
});
dialog.addEventListener('click', (e) => { if (e.target === dialog) close(); });   // backdrop click
