// POGO builder v3 copy of ik.js (22 Nov: arm rolls). handles + inverse kinematics (16 Nov 2026). Pure math on lamp_fk.js. mm, deg.
import { fk } from "./lamp_fk.js";
export const D2R = Math.PI / 180, R2D = 180 / Math.PI;
export const xf = (M, p) => [M[0] * p[0] + M[1] * p[1] + M[2] * p[2] + M[3], M[4] * p[0] + M[5] * p[1] + M[6] * p[2] + M[7], M[8] * p[0] + M[9] * p[1] + M[10] * p[2] + M[11]];
export const xv = (M, v) => [M[0] * v[0] + M[1] * v[1] + M[2] * v[2], M[4] * v[0] + M[5] * v[1] + M[6] * v[2], M[8] * v[0] + M[9] * v[1] + M[10] * v[2]];
export const origin = (M) => [M[3], M[7], M[11]];
export const col = (M, i) => [M[i], M[4 + i], M[8 + i]];
export const invRigid = (M) => [M[0], M[4], M[8], -(M[0] * M[3] + M[4] * M[7] + M[8] * M[11]), M[1], M[5], M[9], -(M[1] * M[3] + M[5] * M[7] + M[9] * M[11]), M[2], M[6], M[10], -(M[2] * M[3] + M[6] * M[7] + M[10] * M[11]), 0, 0, 0, 1];
export const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]], add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]], dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
export const len = (a) => Math.hypot(a[0], a[1], a[2]), norm = (a) => { const l = len(a) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
export const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
export const wrap180 = (a) => ((((a + 180) % 360) + 360) % 360) - 180;
export const snap = (v, step) => Math.round(v / step) * step;
export const byName = (bodies) => { const m = {}; for (const b of bodies) m[b.name] = b.M; return m; };
export const cloneCfg = (c) => JSON.parse(JSON.stringify(c));
const tagOf = (pk) => { const [s, d] = pk.split(":"); return `s${s}${+d > 0 ? "p" : "n"}`; };
export const portTag = tagOf;

// ---------------------------------------------------------------- handles
// every handle: {id, kind, label, pos(world mm), drag(cfg, target, ctx)}; positions come from the body list
export function handles(cfg, rig, bodies) {
  const B = byName(bodies), P = rig.physics, H = [];
  const n = cfg.spine.length;
  for (let j = 1; j <= n; j++) {
    const pos = origin(B[j < n ? `J${j + 1}:low` : "neck:low"]);
    H.push({ id: `seg${j}`, kind: "segment", label: `Segment ${j}: drag to bend joint ${j}`, pos, slot: j });
  }
  const hm = B["head"], hc = xf(hm, P.head.center_local);
  H.push({ id: "body", kind: "body", label: "Move the whole lamp (IK)", pos: add(hc, [0, 0, P.head.dot_top_up_mm]) });
  H.push({ id: "look", kind: "head", label: "Aim the head", pos: xf(hm, P.head.dot_look_local) });
  for (const [pk, a] of Object.entries(cfg.ports || {})) {
    const tag = tagOf(pk);
    if (a.type === "arm") {
      H.push({ id: `${pk}:elbow`, kind: "arm", label: "Arm: shoulder", pos: origin(B[`${tag}:el:hi`]), port: pk });
      H.push({ id: `${pk}:wrist`, kind: "arm", label: "Arm: elbow", pos: origin(B[`${tag}:wr:hi`]), port: pk });
      H.push({ id: `${pk}:tip`, kind: "arm", label: "Arm: wrist / gripper", pos: xf(B[`${tag}:grip`], P.grip_tip), port: pk });
    } else if (a.type === "tentacle") {
      H.push({ id: `${pk}:tip`, kind: "tentacle", label: "Tentacle: drag the tip", pos: xf(B[`${tag}:tip`], P.tent_tip), port: pk });
    }
  }
  return H;
}

// ---------------------------------------------------------------- generic damped least squares over a list of scalar params
function dls(cfg, rig, params, effector, target, iters = 14, lambda = 14, maxStep = 6) {
  const n = params.length;
  for (let it = 0; it < iters; it++) {
    const e0 = effector(cfg, rig), err = sub(target, e0); if (len(err) < 0.4) break;
    const J = [[], [], []];
    for (let k = 0; k < n; k++) {
      const p = params[k], v = p.get(cfg); p.set(cfg, v + 0.6); const e1 = effector(cfg, rig); p.set(cfg, v);
      for (let r = 0; r < 3; r++) J[r][k] = (e1[r] - e0[r]) / 0.6;
    }
    // dq = J^T (J J^T + l^2 I)^-1 err
    const A = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) { let s = 0; for (let k = 0; k < n; k++) s += J[r][k] * J[c][k]; A[r][c] = s + (r === c ? lambda * lambda : 0); }
    const x = solve3(A, err);
    for (let k = 0; k < n; k++) {
      let dq = 0; for (let r = 0; r < 3; r++) dq += J[r][k] * x[r];
      dq = clamp(dq, -maxStep, maxStep); const p = params[k]; p.set(cfg, clamp(p.get(cfg) + dq, p.min, p.max));
    }
  }
}
function solve3(A, b) {
  const [a, bb, c] = A[0], [d, e, f] = A[1], [g, h, i] = A[2]; const det = a * (e * i - f * h) - bb * (d * i - f * g) + c * (d * h - e * g) || 1e-9;
  const inv = [[(e * i - f * h), -(bb * i - c * h), (bb * f - c * e)], [-(d * i - f * g), (a * i - c * g), -(a * f - c * d)], [(d * h - e * g), -(a * h - bb * g), (a * e - bb * d)]].map((r) => r.map((v) => v / det));
  return [0, 1, 2].map((r) => inv[r][0] * b[0] + inv[r][1] * b[1] + inv[r][2] * b[2]);
}
const effAt = (name, local) => (cfg, rig) => xf(byName(fk(cfg, rig))[name], local || [0, 0, 0]);

// ---------------------------------------------------------------- spine: one joint, closed form (a segment dot)
export function dragSegment(cfg, rig, slot, target) {
  const B = byName(fk(cfg, rig)), F = B[`J${slot}:low`], c = origin(F), d = norm(xv(invRigid(F), sub(target, c)));
  const prev = cfg.joints[slot - 1][0]; let b = Math.acos(clamp(d[2], -1, 1)) * R2D;
  if (b < 1.5) { cfg.joints[slot - 1][1] = 0; return; }
  const swA = Math.atan2(d[0], -d[1]) * R2D, candA = [wrap180(swA), b], candB = [wrap180(swA + 180), -b];
  const dA = Math.abs(wrap180(candA[0] - prev)), dB = Math.abs(wrap180(candB[0] - prev)); let pick = dB + 20 < dA ? candB : candA;
  let [sw, bend] = pick; bend = clamp(bend, -75, 75); sw = snap(sw, 15); cfg.joints[slot - 1] = [wrap180(sw), Math.round(bend * 2) / 2];
}
// ---------------------------------------------------------------- spine: whole body IK (all three joints, effector = the dot above the head)
export function dragBody(cfg, rig, target) {
  const yawBefore = headYaw(cfg, rig), nj = cfg.joints.length;
  const params = [];
  for (let j = 0; j < nj; j++) {
    const jj = j;   // tilt vector u = bend * (sin sw, -cos sw): smooth through zero
    params.push({ min: -75, max: 75, get: (c) => c.joints[jj][1] * Math.sin(c.joints[jj][0] * D2R), set: (c, v) => setU(c, jj, v, undefined) });
    params.push({ min: -75, max: 75, get: (c) => -c.joints[jj][1] * Math.cos(c.joints[jj][0] * D2R), set: (c, v) => setU(c, jj, undefined, v) });
  }
  const eff = (c, r) => { const B = byName(fk(c, r)); return add(xf(B["head"], rig.physics.head.center_local), [0, 0, rig.physics.head.dot_top_up_mm]); };
  const start = cloneCfg(cfg); dls(cfg, rig, params, eff, target, 12, 26, 3);
  for (let j = 0; j < nj; j++) { const [ux, uy] = [cfg.joints[j][1] * Math.sin(cfg.joints[j][0] * D2R), -cfg.joints[j][1] * Math.cos(cfg.joints[j][0] * D2R)]; settleJoint(cfg, start, j, ux, uy); }
  const bends = cfg.joints.map((_, j) => ({ min: -75, max: 75, get: (c) => c.joints[j][1], set: (c, v) => (c.joints[j][1] = v) }));      // swivels sit on 15-deg teeth: re-aim with the hinges only
  dls(cfg, rig, bends, eff, target, 10, 12, 4); cfg.joints.forEach((jt) => (jt[1] = Math.round(jt[1] * 2) / 2));
  keepHeading(cfg, rig, yawBefore);
}
function setU(c, j, ux, uy) {
  const cur = c.joints[j]; const ox = cur[1] * Math.sin(cur[0] * D2R), oy = -cur[1] * Math.cos(cur[0] * D2R);
  const x = ux === undefined ? ox : ux, y = uy === undefined ? oy : uy; const b = Math.hypot(x, y);
  if (b < 1e-6) { cur[1] = 0; return; }
  const bb = Math.min(b, 75), sw = Math.atan2(x, -y) * R2D; const alt = [sw + 180, -bb], main = [sw, bb];
  const dm = Math.abs(wrap180(main[0] - cur[0])), da = Math.abs(wrap180(alt[0] - cur[0])); const pick = da + 20 < dm ? alt : main; cur[0] = pick[0]; cur[1] = pick[1];
}
function settleJoint(cfg, start, j, ux, uy) {
  const b = Math.hypot(ux, uy); if (b < 1.5) { cfg.joints[j] = [start.joints[j][0], 0]; return; }
  const prev = start.joints[j][0], sw = Math.atan2(ux, -uy) * R2D, A = [wrap180(sw), Math.min(b, 75)], Bc = [wrap180(sw + 180), -Math.min(b, 75)];
  const pick = Math.abs(wrap180(Bc[0] - prev)) + 20 < Math.abs(wrap180(A[0] - prev)) ? Bc : A; cfg.joints[j] = [wrap180(snap(pick[0], 15)), Math.round(pick[1] * 2) / 2];
}
export function headYaw(cfg, rig) { const B = byName(fk(cfg, rig)); const f = xv(B["head"], rig.physics.head.look_local); return Math.atan2(f[1], f[0]) * R2D; }
function keepHeading(cfg, rig, yawBefore) {          // the swivels turn the head: take that out with the pan axis so the head keeps looking the same way
  for (let k = 0; k < 2; k++) { const d = wrap180(yawBefore - headYaw(cfg, rig)); if (Math.abs(d) < 2) break; cfg.head.pan = clamp(snap(cfg.head.pan + d, 5), -165, 165); }
}
// ---------------------------------------------------------------- head: aim at a point
export function dragHead(cfg, rig, target) {
  const P = rig.physics, eff = (c, r) => xf(byName(fk(c, r))["head"], P.head.dot_look_local);
  const pan = { min: rig.head.pan[0], max: rig.head.pan[1], get: (c) => c.head.pan, set: (c, v) => (c.head.pan = v) }, tilt = { min: rig.head.tilt[0], max: rig.head.tilt[1], get: (c) => c.head.tilt, set: (c, v) => (c.head.tilt = v) };
  dls(cfg, rig, [pan, tilt], eff, target, 14, 6, 10);
  cfg.head.pan = clamp(snap(cfg.head.pan, 5), rig.head.pan[0], rig.head.pan[1]); cfg.head.tilt = clamp(snap(cfg.head.tilt, 10), rig.head.tilt[0], rig.head.tilt[1]);
}
// ---------------------------------------------------------------- rigid arm (v3b, 22 Nov): continuous, all directions, no jumps
// Arm joint k = hinge then swivel (fk: Fb = Fh*Rx(-bend)*Rz(-sw)): swivel k spins tube k+1 on its axis = sets the plane of hinge k+1.
// v3a searched swivels on 15-deg teeth per move: reached well but jumped up to 90 deg between finger steps (Red's video, 22 Nov).
// v3b: swivels are continuous while dragging (DLS with the hinges, every joint capped at STEP deg per move), snapped to the
// 15-deg teeth on release (snapArm). Shoulder handle: only hinge 0 moves it (mechanical). DEFAULT, RED TO CONFIRM.
export let STEP = 6;
export function dragArm(cfg, rig, pk, which, target) {
  const tag = portTag(pk), P = rig.physics;
  const hing = (k) => ({ min: -75, max: 75, get: (c) => c.ports[pk].joints[k][1], set: (c, v) => (c.ports[pk].joints[k][1] = v) });
  const roll = (k) => ({ min: -1e9, max: 1e9, get: (c) => c.ports[pk].joints[k][0], set: (c, v) => (c.ports[pk].joints[k][0] = v) });
  const ef = which === "elbow" ? effAt(`${tag}:el:hi`) : which === "wrist" ? effAt(`${tag}:wr:hi`) : effAt(`${tag}:grip`, P.grip_tip);
  const ps = which === "elbow" ? [hing(0)] : which === "wrist" ? [hing(0), roll(0), hing(1)] : [hing(0), roll(0), hing(1), roll(1), hing(2)];
  const q0 = ps.map((p) => p.get(cfg));
  dls(cfg, rig, ps, ef, target, 6, 3, 2.5);
  ps.forEach((p, i) => p.set(cfg, clamp(p.get(cfg), q0[i] - STEP, q0[i] + STEP)));        // continuity: no joint moves more than STEP per finger move
  if (which === "tip" && LEVEL) levelGrip(cfg, rig, pk, target, ef, hing, roll);
  for (const jt of cfg.ports[pk].joints) { jt[0] = wrap180(jt[0]); jt[1] = clamp(jt[1], -75, 75); }
}
// Gripper level hold (23 Nov, DEFAULT on, RED TO CONFIRM): while the tip is dragged the gripper's approach axis is kept horizontal
// (a gripper that holds a phone or a note must not tip it out). The wrist hinge (hing 2) does the levelling; the other joints then
// re-aim the tip. Best effort: wrist bend is capped at +-75 and the other joints still move at most STEP per call, so a very steep reach stays tilted.
export let LEVEL = true;
export const setLevel = (v) => { LEVEL = !!v; };
export function gripTilt(cfg, rig, pk) {          // deg above horizontal of the gripper's approach axis (0 = level)
  const g = byName(fk(cfg, rig))[`${portTag(pk)}:grip`], d = norm(xv(g, norm(rig.physics.grip_tip)));
  return Math.asin(clamp(d[2], -1, 1)) * R2D;
}
function levelGrip(cfg, rig, pk, target, ef, hing, roll) {
  const J = cfg.ports[pk].joints, h2 = hing(2), rest = [hing(0), roll(0), hing(1)], keep = JSON.parse(JSON.stringify(J)), e0 = len(sub(target, ef(cfg, rig)));
  for (let pass = 0; pass < 3; pass++) {
    for (let it = 0; it < 4; it++) {        // 1-D secant on the wrist bend: tilt -> 0
      const t0 = gripTilt(cfg, rig, pk); if (Math.abs(t0) < 1) break; const v = h2.get(cfg); h2.set(cfg, v + 2); const t1 = gripTilt(cfg, rig, pk); h2.set(cfg, v);
      const s = (t1 - t0) / 2; if (Math.abs(s) < 0.05) break; h2.set(cfg, clamp(v - t0 / s, -75, 75));
    }
    const q = rest.map((p) => p.get(cfg)); dls(cfg, rig, rest, ef, target, 6, 3, 2.5);
    rest.forEach((p, i) => p.set(cfg, clamp(p.get(cfg), q[i] - STEP, q[i] + STEP)));
  }
  // soft rule: reaching the tip target beats staying level; if levelling cost accuracy, keep the unlevelled pose
  if (len(sub(target, ef(cfg, rig))) > Math.max(3, e0 + 1.5)) J.forEach((jt, k) => { jt[0] = keep[k][0]; jt[1] = keep[k][1]; });
}
export function snapArm(cfg, rig, pk) {          // on release: swivels onto their 15-deg teeth, hinges re-aimed to keep the tip where it was
  const tag = portTag(pk), P = rig.physics, ef = effAt(`${tag}:grip`, P.grip_tip), tip = ef(cfg, rig), J = cfg.ports[pk].joints;
  for (let k = 0; k < 3; k++) J[k][0] = wrap180(snap(J[k][0], 15));
  const hing = (k) => ({ min: -75, max: 75, get: (c) => c.ports[pk].joints[k][1], set: (c, v) => (c.ports[pk].joints[k][1] = v) });
  dls(cfg, rig, [hing(0), hing(1), hing(2)], ef, tip, 8, 3, 3);
  for (let k = 0; k < 3; k++) J[k][1] = Math.round(clamp(J[k][1], -75, 75) * 2) / 2;
}
// ---------------------------------------------------------------- tentacle IK (6 balls, bend vector per ball, max 40 deg)
export function dragTentacle(cfg, rig, pk, target) {
  const a = cfg.ports[pk], tag = portTag(pk), params = [];
  a.balls.forEach((bl, k) => {
    const kk = k;
    params.push({ min: -40, max: 40, get: (c) => c.ports[pk].balls[kk][0] * Math.cos(c.ports[pk].balls[kk][1] * D2R), set: (c, v) => setBall(c.ports[pk].balls[kk], v, undefined) });
    params.push({ min: -40, max: 40, get: (c) => c.ports[pk].balls[kk][0] * Math.sin(c.ports[pk].balls[kk][1] * D2R), set: (c, v) => setBall(c.ports[pk].balls[kk], undefined, v) });
  });
  dls(cfg, rig, params, effAt(`${tag}:tip`, rig.physics.tent_tip), target, 16, 10, 4);
  for (const bl of a.balls) { bl[0] = Math.round(bl[0] * 2) / 2; bl[1] = Math.round(bl[1]); }
}
function setBall(bl, vx, vy) {
  const ox = bl[0] * Math.cos(bl[1] * D2R), oy = bl[0] * Math.sin(bl[1] * D2R), x = vx === undefined ? ox : vx, y = vy === undefined ? oy : vy;
  const m = Math.hypot(x, y); if (m < 1e-6) { bl[0] = 0; return; } const mm = Math.min(m, 40); bl[0] = mm; bl[1] = (Math.atan2(y, x) * R2D + 360) % 360;
}
export function applyDrag(h, cfg, rig, target) {
  if (h.kind === "segment") dragSegment(cfg, rig, h.slot, target);
  else if (h.kind === "body") dragBody(cfg, rig, target);
  else if (h.kind === "head") dragHead(cfg, rig, target);
  else if (h.kind === "arm") dragArm(cfg, rig, h.port, h.id.split(":").pop(), target);
  else if (h.kind === "tentacle") dragTentacle(cfg, rig, h.port, target);
}
