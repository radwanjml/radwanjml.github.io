// Herrand 3D viewer: orbit, explode, isolate a system (others ghost), tap a part for its name.
// The GLB carries per-mesh extras: sys (pod|frame|drive|sensors|power) and off (explode vector, metres).
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const NAMES = [
  ['Seedpod_pod', 'Cargo pod · 40 L, ceramic-white shell'], ['Seedpod_lidseam', 'Lid seam light'], ['Seedpod_hinge', 'Lid hinge'],
  ['Seedpod_latch', 'Lid latch'], ['Seedpod_trunnion', 'Pendulum trunnion'], ['Seedpod_yoke', 'Pendulum yoke · keeps the pod level'],
  ['Seedpod_isolator', 'Rubber isolator'], ['Seedpod_endstop', 'Swing end-stop'], ['Seedpod_frame', 'Cast A356 frame · 3.99 kg, topology-optimised'],
  ['Robot_wheel_', 'Wheel · r 130 mm'], ['Bogie_', 'Rocker-bogie'], ['Robot_bogie', 'Rocker-bogie arm'], ['Robot_pivotpin', 'Bogie pivot pin'],
  ['Robot_bumpstop', 'Bump stop'], ['Robot_axleboss', 'Axle boss'], ['Robot_rear', 'Rear axle mount'],
  ['Lidar_', 'Lidar · 32 beams, 360°'], ['Seedpod_batt', 'Battery · 360 Wh, 21.8 km'], ['Seedpod_charge', 'Charging pad'],
  ['Seedpod_bumper', 'Front bumper'], ['Seedpod_ultrasonic', 'Ultrasonic sensor'], ['Seedpod_cam', 'Camera'],
  ['Seedpod_headlight', 'Headlight'], ['Seedpod_taillight', 'Tail light'], ['Seedpod_rearpod', 'Rear electronics pod'], ['Seedpod_estop', 'Emergency stop'],
  ['Logo_', 'Herrand mark'],
];
const nameOf = (n) => (NAMES.find(([p]) => n.startsWith(p)) || [, n.replace(/_/g, ' ')])[1];

export async function createViewer(el, { onPick } = {}) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.AgXToneMapping ?? THREE.ACESFilmicToneMapping;
  el.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.04).texture;
  const cam = new THREE.PerspectiveCamera(30, 1, 0.05, 50);
  cam.position.set(2.1, 1.0, 2.3);
  const ctl = new OrbitControls(cam, renderer.domElement);
  ctl.enableDamping = true; ctl.minDistance = 1.0; ctl.maxDistance = 6; ctl.maxPolarAngle = Math.PI * 0.53; ctl.enablePan = false;
  const key = new THREE.DirectionalLight(0xffffff, 1.6); key.position.set(2, 3, 2); scene.add(key);
  scene.add(new THREE.HemisphereLight(0xffffff, 0xd8d8de, 0.6));
  const floor = new THREE.Mesh(new THREE.CircleGeometry(1.6, 64), new THREE.ShadowMaterial({ opacity: 0.12 }));
  floor.rotation.x = -Math.PI / 2; scene.add(floor);
  renderer.shadowMap.enabled = true; key.castShadow = true; key.shadow.mapSize.set(1024, 1024); floor.receiveShadow = true;

  const gltf = await new GLTFLoader().loadAsync('assets/models/herrand.glb');
  const root = gltf.scene; scene.add(root);
  const parts = [];
  root.traverse((o) => {
    if (!o.isMesh) return;
    o.castShadow = true;
    const ex = o.userData || {};
    o.material = o.material.clone();
    parts.push({ o, sys: ex.sys || 'sensors', off: new THREE.Vector3(...(ex.off || [0, 0, 0])), base: o.position.clone(), mat: o.material });
  });
  // centre the robot on the floor
  const box = new THREE.Box3().setFromObject(root); const c = box.getCenter(new THREE.Vector3());
  root.position.x -= c.x; root.position.z -= c.z; root.position.y -= box.min.y;
  ctl.target.set(0, (box.max.y - box.min.y) * 0.45, 0); ctl.update();

  let explode = 0, isolated = null;
  function apply() {
    for (const p of parts) {
      p.o.position.copy(p.base).addScaledVector(p.off, explode * 1.9);
      const ghost = isolated && p.sys !== isolated;
      p.mat.transparent = ghost; p.mat.opacity = ghost ? 0.07 : 1; p.mat.depthWrite = !ghost;
    }
  }
  // pick
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  function pick(ev) {
    const r = renderer.domElement.getBoundingClientRect();
    ndc.set(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, cam);
    const hit = ray.intersectObjects(parts.filter((p) => !isolated || p.sys === isolated).map((p) => p.o), false)[0];
    onPick?.(hit ? nameOf(hit.object.name) : null, ev);
  }
  let down = null;
  renderer.domElement.addEventListener('pointerdown', (e) => { down = [e.clientX, e.clientY]; });
  renderer.domElement.addEventListener('pointerup', (e) => { if (down && Math.hypot(e.clientX - down[0], e.clientY - down[1]) < 6) pick(e); down = null; });

  function size() { const w = el.clientWidth, h = el.clientHeight; renderer.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix(); }
  new ResizeObserver(size).observe(el); size();
  let running = true;
  new IntersectionObserver(([e]) => { running = e.isIntersecting; if (running) loop(); }).observe(el);
  function loop() { if (!running) return; ctl.update(); renderer.render(scene, cam); requestAnimationFrame(loop); }
  // keep the whole robot in view as it comes apart: ease the camera back and the target up
  const baseDist = cam.position.distanceTo(ctl.target), baseTy = ctl.target.y;
  function frame() {
    const dir = cam.position.clone().sub(ctl.target).normalize();
    ctl.target.y = baseTy + explode * 0.32;
    cam.position.copy(ctl.target).addScaledVector(dir, Math.max(cam.position.distanceTo(ctl.target), baseDist * (1 + explode * 0.55)));
  }
  // ---- animated explode / assemble
  let anim = null;
  function animateTo(target, onStep) {
    const from = explode, t0 = performance.now(), dur = 1100;
    cancelAnimationFrame(anim);
    const step = (t) => {
      const k = Math.min(1, (t - t0) / dur), e = k < .5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
      explode = from + (target - from) * e; apply(); onStep?.(explode); frame();
      if (k < 1) anim = requestAnimationFrame(step);
    };
    anim = requestAnimationFrame(step);
  }

  // ---- lidar view: Herrand's own 32-beam sensor sweeping a small virtual street
  const lidarPart = parts.find((p) => p.o.name.startsWith('Lidar_base')) || parts.find((p) => p.o.name.startsWith('Lidar_'));
  const world = new THREE.Group(); world.visible = false; scene.add(world);
  const wallMat = new THREE.MeshStandardMaterial({ color: 0xe9e9ee, transparent: true, opacity: 0.18 });
  const add = (g, x, y, z) => { const m = new THREE.Mesh(g, wallMat); m.position.set(x, y, z); world.add(m); return m; };
  add(new THREE.BoxGeometry(6, 0.12, 0.25), 0, 0.06, 0.95);               // kerb ahead-left
  add(new THREE.BoxGeometry(6, 2.4, 0.1), 0, 1.2, -1.6);                  // shopfront wall
  add(new THREE.CylinderGeometry(0.06, 0.06, 0.9, 16), 1.3, 0.45, 0.6);   // bollard
  add(new THREE.CylinderGeometry(0.06, 0.06, 1.0, 16), -1.2, 0.5, -0.9);  // bike-stand post
  add(new THREE.BoxGeometry(0.5, 1.1, 0.5), 1.9, 0.55, -0.9);             // bin
  const ground = add(new THREE.PlaneGeometry(8, 6), 0, 0.001, 0); ground.rotation.x = -Math.PI / 2; ground.material = wallMat.clone(); ground.material.opacity = 0;
  const MAXP = 26000, pos = new Float32Array(MAXP * 3), col = new Float32Array(MAXP * 3);
  const pgeo = new THREE.BufferGeometry(); pgeo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); pgeo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const pts = new THREE.Points(pgeo, new THREE.PointsMaterial({ size: 0.018, vertexColors: true, transparent: true, opacity: 0.95, depthWrite: false }));
  pts.frustumCulled = false; world.add(pts);
  const targets = world.children.filter((c) => c.isMesh);
  const lray = new THREE.Raycaster(); let head = 0, az = 0, lidarOn = false;
  const ELEV = Array.from({ length: 32 }, (_, i) => THREE.MathUtils.degToRad(-16 + i * 1.0));
  function sweep() {
    const o = new THREE.Vector3(); (lidarPart ? lidarPart.o : root).getWorldPosition(o); o.y += 0.03;
    for (let s = 0; s < 40; s++) {
      az += 0.0165;
      for (const el of ELEV) {
        const d = new THREE.Vector3(Math.cos(el) * Math.cos(az), Math.sin(el), Math.cos(el) * Math.sin(az));
        lray.set(o, d); lray.far = 4;
        const h = lray.intersectObjects(targets, false)[0];
        if (!h) continue;
        const i = (head++ % MAXP) * 3, near = 1 - Math.min(1, h.distance / 4);
        pos[i] = h.point.x; pos[i + 1] = h.point.y; pos[i + 2] = h.point.z;
        col[i] = 0.2 + 0.5 * near; col[i + 1] = 0.85 + 0.15 * near; col[i + 2] = 1.0;
      }
    }
    pgeo.attributes.position.needsUpdate = true; pgeo.attributes.color.needsUpdate = true;
    pgeo.setDrawRange(0, Math.min(head, MAXP));
  }
  const baseLoop = loop;
  function lidarLoop() { if (lidarOn && running) { sweep(); requestAnimationFrame(lidarLoop); } }

  loop();
  return {
    setExplode(v) { cancelAnimationFrame(anim); explode = v; apply(); frame(); },
    toggleExplode(onStep) { animateTo(explode > 0.5 ? 0 : 1, onStep); return explode <= 0.5; },
    isolate(sys) { isolated = sys === 'all' ? null : sys; apply(); },
    setLidar(on) {
      lidarOn = on; world.visible = on; el.classList.toggle('night', on);
      wallMat.opacity = on ? 0.05 : 0.18; floor.material.opacity = on ? 0.0 : 0.12;
      for (const p of parts) { if (!isolated) { p.mat.transparent = on; p.mat.opacity = on ? 0.45 : 1; } }
      if (on) { head = 0; animateTo(0); cam.position.set(2.6, 1.8, 2.6); lidarLoop(); }
    },
  };
}
