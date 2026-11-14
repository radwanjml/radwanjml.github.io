// Duolune AR (Android Chrome, WebXR). Loaded only when "See it in your room" is tapped on a device that supports immersive-ar.
// Design (Red's brief, refined):
//  - Find the floor: a soft ring follows the floor under the centre of the screen.
//  - Tap once: the ring locks and glows ("Tap again to place"). Tap again within 4 s: the chair is placed there,
//    facing you. No second tap within 4 s: it disarms, so a stray touch never moves the chair.
//  - Tap the chair: a control bar appears (turn left / turn right / move / done). It hides after 6 s idle.
//    Taps anywhere else do nothing while the chair is placed.
//  - "Move" goes back to the ring with the same two-tap confirm.
//  - Scale is locked at 1:1 (1.74 m long). No pinch, so the size can't drift.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

const ARM_MS = 4000, CTRL_MS = 6000, STEP = Math.PI / 12;   // 15 degrees per turn tap

export async function startAR({ paint, name }) {
  // ---- DOM overlay (buttons + hints live in the page, drawn over the camera)
  const ov = document.createElement('div'); ov.className = 'xr-ov';
  ov.innerHTML = `
    <button type="button" class="xr-exit" aria-label="Close AR">×</button>
    <p class="xr-hint" role="status" aria-live="polite">Move your phone slowly to find the floor</p>
    <p class="xr-size">${name} · true size 1.74 × 1.10 m</p>
    <div class="xr-ctrl" hidden>
      <button type="button" data-a="l" aria-label="Turn left">⟲</button>
      <button type="button" data-a="r" aria-label="Turn right">⟳</button>
      <button type="button" data-a="m">Move</button>
      <button type="button" data-a="d">Done</button>
    </div>`;
  document.body.appendChild(ov);
  const hint = ov.querySelector('.xr-hint'), ctrl = ov.querySelector('.xr-ctrl');
  // taps on overlay buttons must not also count as taps in the AR scene
  ov.addEventListener('beforexrselect', (e) => { if (e.target.closest('button')) e.preventDefault(); });

  // ---- three.js
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2)); renderer.setSize(innerWidth, innerHeight);
  renderer.xr.enabled = true; renderer.shadowMap.enabled = true;
  renderer.domElement.className = 'xr-canvas'; document.body.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.01, 30);
  scene.add(new THREE.HemisphereLight(0xfff6ea, 0x5a5048, 1.6));
  const sun = new THREE.DirectionalLight(0xffffff, 1.6); sun.position.set(1.5, 3, 1); sun.castShadow = true;
  sun.shadow.mapSize.setScalar(1024); Object.assign(sun.shadow.camera, { left: -2, right: 2, top: 2, bottom: -2 }); scene.add(sun, sun.target);

  // reticle: thin ring + soft disc; armed = brighter, pulsing
  const ret = new THREE.Group(); ret.matrixAutoUpdate = false; ret.visible = false; scene.add(ret);
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.16, 0.18, 48).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0xf2e8d8, transparent: true, opacity: 0.85 }));
  const disc = new THREE.Mesh(new THREE.CircleGeometry(0.16, 48).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0xc8743a, transparent: true, opacity: 0 }));
  ret.add(ring, disc);

  // the chair, painted with the current build
  // round 16: the session starts first (Chrome only allows it right after the tap); the chair loads inside it
  const chair = new THREE.Group(); let model = null;
  const loadChair = async () => {
    const draco = new DRACOLoader().setDecoderPath('https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/libs/draco/gltf/');
    const gltf = await new GLTFLoader().setDRACOLoader(draco).loadAsync('assets/model/duolune.glb?v=45');
    model = gltf.scene;
    const box = new THREE.Box3().setFromObject(model); const c = box.getCenter(new THREE.Vector3());
    model.position.set(-c.x, -box.min.y, -c.z);                      // centred on its footprint, feet on the floor
    model.traverse((o) => { if (!o.isMesh) return; o.castShadow = true;
      const p = paint[o.material?.name] || paint[o.name]; if (!p) return;
      o.material = new THREE.MeshStandardMaterial({ color: new THREE.Color().setRGB(p[0], p[1], p[2], THREE.LinearSRGBColorSpace), roughness: p[3], metalness: p[4] }); });
    chair.add(model);
  };
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(4, 4).rotateX(-Math.PI / 2), new THREE.ShadowMaterial({ opacity: 0.35 }));
  shadow.receiveShadow = true; chair.add(shadow);
  chair.visible = false; scene.add(chair);

  const say = (t) => { hint.textContent = t; };
  // ---- session
  let session, hitSrc = null;
  try {
    session = await navigator.xr.requestSession('immersive-ar', { requiredFeatures: ['hit-test'], optionalFeatures: ['dom-overlay', 'local-floor'], domOverlay: { root: ov } });
  } catch (e) { cleanup(); throw e; }
  // local-floor gives a real floor height (y = 0), used when the hit test finds no plane yet
  const hasFloor = !session.enabledFeatures || session.enabledFeatures.includes('local-floor');
  renderer.xr.setReferenceSpaceType(hasFloor ? 'local-floor' : 'local');
  try { await renderer.xr.setSession(session); }
  catch { renderer.xr.setReferenceSpaceType('local'); await renderer.xr.setSession(session); }
  const floorKnown = renderer.xr.getReferenceSpace && hasFloor;
  const viewer = await session.requestReferenceSpace('viewer');
  hitSrc = await session.requestHitTestSource({ space: viewer }).catch(() => null);
  let ready = false; const t0 = performance.now(); let lastRealHit = 0;
  say('Loading the chair…');
  loadChair().then(() => { ready = true; say('Move your phone slowly to find the floor'); }).catch(() => { say('The chair could not load. Close and try again.'); });

  // ---- state machine: seek -> armed -> placed (-> controls) ; move = back to seek
  let mode = 'seek', armedAt = 0, ctrlAt = 0, lastHit = null;
  const showCtrl = (on) => { ctrl.hidden = !on; ctrlAt = performance.now(); };
  const ray = new THREE.Raycaster(); const tmp = new THREE.Matrix4();

  session.addEventListener('select', (ev) => {
    const now = performance.now();
    if (!ready) return;
    if (mode === 'seek' && lastHit) { mode = 'armed'; armedAt = now; say('Tap again to place it here'); return; }
    if (mode === 'armed') {
      if (now - armedAt > ARM_MS || !lastHit) { mode = 'seek'; say('Tap the floor where you want it'); return; }
      const pos = new THREE.Vector3().setFromMatrixPosition(lastHit);
      chair.position.copy(pos);
      const cam = renderer.xr.getCamera(); const cp = new THREE.Vector3().setFromMatrixPosition(cam.matrixWorld);
      chair.rotation.set(0, Math.atan2(cp.x - pos.x, cp.z - pos.z) + Math.PI / 2, 0);   // long side faces you
      sun.position.copy(pos).add(new THREE.Vector3(1.5, 3, 1)); sun.target.position.copy(pos);
      chair.visible = true; ret.visible = false; mode = 'placed'; say('Placed. Tap the chair to turn or move it');
      return;
    }
    if (mode === 'placed') {
      // did this tap land on the chair? ray from the input source
      const pose = ev.frame.getPose(ev.inputSource.targetRaySpace, renderer.xr.getReferenceSpace());
      if (!pose) return;
      tmp.fromArray(pose.transform.matrix);
      ray.ray.origin.setFromMatrixPosition(tmp); ray.ray.direction.set(0, 0, -1).transformDirection(tmp);
      if (model && ray.intersectObject(model, true).length) { showCtrl(true); say('Turn it, move it, or tap Done'); }
    }
  });
  ctrl.addEventListener('click', (e) => {
    const a = e.target.closest('button')?.dataset.a; if (!a) return; ctrlAt = performance.now();
    if (a === 'l') chair.rotation.y += STEP;
    if (a === 'r') chair.rotation.y -= STEP;
    if (a === 'm') { showCtrl(false); mode = 'seek'; say('Point at the new spot, then tap twice'); }
    if (a === 'd') { showCtrl(false); say('Tap the chair any time to change it'); }
  });
  ov.querySelector('.xr-exit').addEventListener('click', () => session.end());
  session.addEventListener('end', cleanup);

  // where the screen centre meets the floor: y = 0 with local-floor, else about 1.4 m below the phone
  const fo = new THREE.Vector3(), fd = new THREE.Vector3(); let camY0 = null;
  function floorGuess() {
    const cam = renderer.xr.getCamera(); fo.setFromMatrixPosition(cam.matrixWorld); fd.set(0, 0, -1).transformDirection(cam.matrixWorld);
    if (camY0 === null) camY0 = fo.y;
    const fy = floorKnown ? 0 : camY0 - 1.4;
    if (fd.y > -0.2) return null;                                   // looking too flat: ask to point down
    const k = (fy - fo.y) / fd.y; if (k <= 0 || k > 6) return null;
    return new THREE.Matrix4().makeTranslation(fo.x + fd.x * k, fy, fo.z + fd.z * k);
  }
  renderer.setAnimationLoop((t, frame) => {
    if (!frame) return;
    const now = performance.now();
    if (mode === 'armed' && now - armedAt > ARM_MS) { mode = 'seek'; say('Tap the floor where you want it'); }
    if (!ctrl.hidden && now - ctrlAt > CTRL_MS) showCtrl(false);
    if (mode === 'seek' || mode === 'armed') {
      const hits = hitSrc ? frame.getHitTestResults(hitSrc) : [];
      const pose = hits.length ? hits[0].getPose(renderer.xr.getReferenceSpace()) : null;
      let m = null;
      if (pose) { m = new THREE.Matrix4().fromArray(pose.transform.matrix); lastRealHit = now; }
      else if (now - lastRealHit > 2500 && now - t0 > 2500) m = floorGuess();   // no plane yet: the view's centre on the floor
      if (!ready) m = null;
      if (m) {
        if (mode === 'seek') { lastHit = m; ret.matrix.copy(lastHit); if (/^Move your phone|^Loading/.test(hint.textContent)) say('Tap the floor where you want it'); }
        ret.visible = true;
      } else if (mode === 'seek') { ret.visible = false; lastHit = null; }
      const k = mode === 'armed' ? 0.35 + 0.15 * Math.sin(now / 160) : 0;
      disc.material.opacity = k; ring.material.color.set(mode === 'armed' ? 0xffd7a8 : 0xf2e8d8);
    }
    renderer.render(scene, camera);
  });

  function cleanup() {
    renderer.setAnimationLoop(null); renderer.dispose(); renderer.domElement.remove(); ov.remove(); hitSrc?.cancel?.();
  }
}
