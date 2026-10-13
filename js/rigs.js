// Procedural rigs for Moobi and Pip. Their GLBs have no bones and no clips:
// every motion below is code, ported from Closer (cove.html buildPipRig :3213,
// buildMoobiRig :3456). Kept: idle life, velocity/accel-driven springs, wheel roll,
// bell, ears, arms, antennae, hover. Dropped: hug solve, tumble, call, network.
import * as THREE from 'three';
import { spring, damp, clamp, pipBob, wheelRoll } from './motion.js';

const texLoader = new THREE.TextureLoader();
function loadTex(url) {
  const t = texLoader.load(url);
  t.flipY = false;                       // glTF UV convention
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
const FACE_URL = 'assets/tex/face_happy.webp';

// Shared kinematics: smoothed velocity + accel in body-local space, and yaw rate.
function makeKinematics(slot) {
  const prev = slot.position.clone();
  const vel = new THREE.Vector3(), lastVel = new THREE.Vector3();
  const rawA = new THREE.Vector3(), sA = new THREE.Vector3(), sV = new THREE.Vector3();
  let prevYaw = slot.rotation.y, sYaw = 0;
  const out = { lvx: 0, lvz: 0, lvy: 0, lax: 0, laz: 0, yawRate: 0, moved: 0 };
  return function step(dt) {
    if (!(dt > 1e-4)) return out;
    out.moved = Math.hypot(slot.position.x - prev.x, slot.position.z - prev.z);
    vel.subVectors(slot.position, prev).multiplyScalar(1 / dt);
    rawA.subVectors(vel, lastVel).multiplyScalar(1 / dt);
    rawA.set(clamp(rawA.x, -25, 25), clamp(rawA.y, -25, 25), clamp(rawA.z, -25, 25));
    sA.lerp(rawA, 1 - Math.exp(-12 * dt));
    sV.lerp(vel, 1 - Math.exp(-18 * dt));
    lastVel.copy(vel);
    prev.copy(slot.position);
    const yaw = slot.rotation.y;
    let dy = yaw - prevYaw;
    while (dy > Math.PI) dy -= Math.PI * 2;
    while (dy < -Math.PI) dy += Math.PI * 2;
    sYaw = THREE.MathUtils.lerp(sYaw, clamp(dy / dt, -12, 12), 1 - Math.exp(-12 * dt));
    prevYaw = yaw;
    const cy = Math.cos(yaw), sy = Math.sin(yaw);
    out.lvx = sV.x * cy - sV.z * sy; out.lvz = sV.x * sy + sV.z * cy; out.lvy = sV.y;
    out.lax = sA.x * cy - sA.z * sy; out.laz = sA.x * sy + sA.z * cy;
    out.yawRate = sYaw;
    return out;
  };
}

function indexParts(root) {
  const P = {};
  root.traverse((o) => { if (o.name) P[o.name] = o; });
  return P;
}

function screenMaterial(faceTex, emissive, intensity) {
  return new THREE.MeshStandardMaterial({
    color: 0x05070c, roughness: 0.12, metalness: 0, map: faceTex,
    emissive: new THREE.Color(emissive), emissiveMap: faceTex, emissiveIntensity: intensity,
  });
}

export function buildPip(root, slot, visual) {
  const TUNE = { hover: 0.80, spring: 1.5, damp: 0.55, idle: 1.75 };
  const P = indexParts(root);
  const doodle = loadTex('assets/tex/pip_doodles.webp');
  const face = loadTex(FACE_URL);
  root.traverse((o) => {
    if (!o.isMesh) return;
    (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => {
      if (m.name === 'Base') { m.map = doodle; m.metalness = 0; m.roughness = 1; m.needsUpdate = true; }
    });
  });
  if (P.Screen) P.Screen.material = screenMaterial(face, 0xcfe8ff, 2.2);

  root.updateMatrixWorld(true);
  let ringMinY = -0.555;
  if (P.HoverRing) ringMinY = new THREE.Box3().setFromObject(P.HoverRing).min.y;
  const hoverY = TUNE.hover - ringMinY;

  const hands = {}, ants = {};
  ['L', 'R'].forEach((side) => {
    const hand = P['Hand' + side], disc = P['EarDisc' + side];
    if (!hand || !disc || !P.Body) return;
    const pv = new THREE.Object3D();
    const dp = new THREE.Vector3();
    disc.getWorldPosition(dp);
    P.Body.worldToLocal(dp);
    pv.position.copy(dp);
    P.Body.add(pv);
    P.Body.updateMatrixWorld(true);
    pv.attach(hand);
    hands[side] = {
      pv, hand, sign: Math.sign(pv.position.x) || 1, restRot: hand.rotation.clone(), restY: hand.position.y,
      pitch: { a: 0, v: 0 }, roll: { a: 0, v: 0 }, vert: { a: 0, v: 0 }, wrist: { a: 0, v: 0 },
    };
    const a = P['Antenna' + side];
    if (a) ants[side] = { a, sign: Math.sign(a.position.x) || 1, rest: a.rotation.clone(), x: { a: 0, v: 0 }, z: { a: 0, v: 0 } };
  });

  const kin = makeKinematics(slot);
  return {
    contactSize: 1.35,
    update(dt, t) {
      visual.position.y = hoverY + pipBob(t, TUNE.idle);
      const { lvx, lvz, lvy, lax, laz, yawRate } = kin(dt);
      const spinAbs = Math.abs(yawRate), Gn = TUNE.spring, D = TUNE.damp;
      if (P.Body) {
        P.Body.rotation.x = damp(P.Body.rotation.x, clamp(-lvz * 0.030 * Gn, -0.13, 0.13), 6, dt);
        P.Body.rotation.z = damp(P.Body.rotation.z, clamp(lvx * 0.030 * Gn, -0.13, 0.13), 6, dt);
        P.Body.scale.setScalar(1 + Math.sin(t * 1.5) * 0.010 * TUNE.idle);
      }
      for (const s in ants) {
        const A = ants[s];
        const tang = clamp(A.sign * yawRate * 0.050, -0.55, 0.55) * Gn;
        const xT = clamp(-lvz * 0.055 - laz * 0.005, -0.45, 0.45) * Gn + tang + Math.sin(t * 2.1) * 0.012 * TUNE.idle;
        const zT = clamp(lvx * 0.055 + lax * 0.005, -0.45, 0.45) * Gn
                 - A.sign * clamp(spinAbs * 0.045, 0, 0.5) * Gn + Math.cos(t * 1.7) * 0.010 * TUNE.idle;
        spring(A.x, xT, 72, 5.0 * D, dt);
        spring(A.z, zT, 72, 5.0 * D, dt);
        A.a.rotation.x = A.rest.x + A.x.a;
        A.a.rotation.z = A.rest.z + A.z.a;
      }
      for (const s in hands) {
        const H = hands[s];
        const tangT = clamp(-H.sign * yawRate * 0.048, -0.6, 0.6) * Gn;
        const pitchT = clamp(lvz * 0.105 + laz * 0.010, -0.55, 0.55) * Gn + tangT
                     + Math.sin(t * 1.6 + (s === 'L' ? 0 : Math.PI)) * 0.030 * TUNE.idle;
        const rollT = clamp(-lvx * 0.105 - lax * 0.010, -0.55, 0.55) * Gn + H.sign * clamp(spinAbs * 0.075, 0, 0.7) * Gn;
        const vertT = clamp(-lvy * 0.045, -0.28, 0.28) * Gn;
        spring(H.pitch, pitchT, 30, 4.4 * D, dt);
        spring(H.roll, rollT, 30, 4.4 * D, dt);
        spring(H.vert, vertT, 52, 6.0 * D, dt);
        spring(H.wrist, H.pitch.a * 0.5, 46, 5.2 * D, dt);
        H.pv.rotation.x = H.pitch.a;
        H.pv.rotation.z = H.roll.a;
        H.hand.rotation.x = H.restRot.x + H.wrist.a;
        H.hand.position.y = H.restY + H.vert.a;
      }
      if (P.HoverRing) P.HoverRing.rotation.y += dt * 0.7;
    },
  };
}

export function buildMoobi(root, slot, visual) {
  const TUNE = { jig: 0.45, ear: 2.0, arm: 2.5, bell: 0.7, damp: 0.4 };
  const WHEEL_R = 0.965;
  const P = indexParts(root);
  const doodle = loadTex('assets/tex/mlkshk_doodles.webp');
  doodle.wrapS = doodle.wrapT = THREE.RepeatWrapping;
  doodle.offset.set(0.08, 0.04);
  const face = loadTex(FACE_URL);
  root.traverse((o) => {
    if (!o.isMesh) return;
    const mats = Array.isArray(o.material) ? o.material : [o.material];
    mats.forEach((m, i) => {
      if (m.name === 'Base') { m.map = doodle; m.metalness = 0; m.roughness = 0.55; m.needsUpdate = true; }
      if (m.name === 'Black Glass') {
        const sm = screenMaterial(face, 0xffb0d0, 2.0);
        if (Array.isArray(o.material)) o.material[i] = sm; else o.material = sm;
      }
      if (m.name === 'Light') m.emissiveIntensity = 0.6;
    });
  });

  const ears = [], arms = [];
  ['L', 'R'].forEach((s) => {
    const sign = s === 'L' ? -1 : 1;
    const ear = P['Ear' + s];
    if (ear) ears.push({ node: ear, sign, rest: ear.rotation.clone(), x: { a: 0, v: 0 }, z: { a: 0, v: 0 } });
    const soc = P['Socket' + s];
    if (soc) arms.push({ sign, socket: soc, restS: soc.rotation.clone(), s: { a: 0, v: 0 }, x: { a: 0, v: 0 } });
  });
  const bell = P.Bell ? { node: P.Bell, rest: P.Bell.rotation.clone(), x: { a: 0, v: 0 }, z: { a: 0, v: 0 } } : null;
  const bodyRest = P.Body?.rotation.clone(), bodyRestScale = P.Body?.scale.clone();
  let roll = 0;

  const kin = makeKinematics(slot);
  return {
    contactSize: 1.6,
    update(dt, t) {
      const { lvx, lvz, lvy, laz, yawRate, moved } = kin(dt);
      const D = TUNE.damp;
      if (P.Wheel) { roll += wheelRoll(moved, WHEEL_R); P.Wheel.rotation.x = roll; }
      if (P.Body) {
        const j = TUNE.jig;
        const sq = 1 + Math.sin(t * 2.2) * 0.018 * j;
        const react = clamp(Math.hypot(lvx, lvz) * 0.02, 0, 0.06) * j;
        P.Body.scale.set(bodyRestScale.x * (1 + react * 0.5), bodyRestScale.y * (sq - react), bodyRestScale.z * (1 + react * 0.5));
        const idleRock = Math.sin(t * 0.9) * 0.045 + Math.sin(t * 0.53) * 0.025;
        P.Body.rotation.x = bodyRest.x + idleRock * 0.5 + clamp(-lvz * 0.02 * j, -0.1, 0.1);
        P.Body.rotation.z = bodyRest.z + idleRock + clamp(lvx * 0.02 * j, -0.1, 0.1);
      }
      for (const E of ears) {
        const g = TUNE.ear;
        const xT = clamp(-lvz * 0.07 - laz * 0.006, -0.6, 0.6) * g + Math.sin(t * 1.9) * 0.02 * g;
        const zT = (clamp(lvx * 0.07, -0.5, 0.5) + E.sign * clamp(Math.abs(yawRate) * 0.05, 0, 0.5)) * g;
        spring(E.x, xT, 60, 6 * D, dt);
        spring(E.z, zT, 60, 6 * D, dt);
        E.node.rotation.x = E.rest.x + E.x.a;
        E.node.rotation.z = E.rest.z + E.z.a;
      }
      for (const A of arms) {
        const g = TUNE.arm;
        const swing = clamp(-lvz * 0.11 - laz * 0.010, -0.7, 0.7) * g + Math.sin(t * 1.5 + (A.sign < 0 ? 0 : Math.PI)) * 0.045 * g;
        const lat = clamp(lvx * 0.06, -0.5, 0.5) * g + A.sign * clamp(Math.abs(yawRate) * 0.05, 0, 0.5) * g;
        spring(A.s, swing, 24, 9 * D, dt);
        spring(A.x, lat, 26, 9 * D, dt);
        A.socket.rotation.x = A.restS.x + A.s.a;
        A.socket.rotation.z = A.restS.z + A.x.a;
      }
      if (bell) {
        const g = TUNE.bell;
        const xT = clamp(-lvz * 0.08 - lvy * 0.05, -0.7, 0.7) * g;
        const zT = clamp(lvx * 0.08, -0.6, 0.6) * g + Math.sin(t * 1.3) * 0.015 * g;
        spring(bell.x, xT, 80, 4.5 * D, dt);
        spring(bell.z, zT, 80, 4.5 * D, dt);
        bell.node.rotation.x = bell.rest.x + bell.x.a;
        bell.node.rotation.z = bell.rest.z + bell.z.a;
      }
    },
  };
}
