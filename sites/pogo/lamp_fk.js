// POGO rig forward kinematics: line-by-line port of lamp_fk.py (tested by test_fk.mjs). mm, deg. Matrices are row-major arrays of 16 numbers.
export const Z_M = 30.2, Z_T = 27.5, J1_Z = 64.2 + 27.5, R_B = 10.95, PITCH = 36.0;
export const BALL0 = 17.5 + 36.0 + 2.0 + Math.sqrt(R_B * R_B - 25) - 0.3;
const rad = (a) => (a * Math.PI) / 180;
export const I4 = () => [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
export const T = (x = 0, y = 0, z = 0) => [1, 0, 0, x, 0, 1, 0, y, 0, 0, 1, z, 0, 0, 0, 1];
export const Rx = (a) => { const c = Math.cos(rad(a)), s = Math.sin(rad(a)); return [1, 0, 0, 0, 0, c, -s, 0, 0, s, c, 0, 0, 0, 0, 1]; };
export const Ry = (a) => { const c = Math.cos(rad(a)), s = Math.sin(rad(a)); return [c, 0, s, 0, 0, 1, 0, 0, -s, 0, c, 0, 0, 0, 0, 1]; };
export const Rz = (a) => { const c = Math.cos(rad(a)), s = Math.sin(rad(a)); return [c, -s, 0, 0, s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]; };
export const mul = (...ms) => ms.reduce((A, B) => { const R = new Array(16).fill(0); for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) for (let k = 0; k < 4; k++) R[i * 4 + j] += A[i * 4 + k] * B[k * 4 + j]; return R; });
export const ballRot = (th, ph) => mul(Rz(ph), Rx(th), Rz(-ph));
const RING_ARM = mul(Ry(180), T(0, 0, -30.2)), HEAD_TO_NECK = T(0, 11.0, 79.0), ARM_TUBES = [["B90", 90], ["B60", 60]];
export function fk(cfg, rig) {
  const out = []; const add = (name, type, M) => out.push({ name, type, M }); add("base", "base", I4()); const tubes = rig.tubes; let F = mul(T(0, 0, J1_Z), Rz(90)); const TF = {};
  cfg.spine.forEach((key, idx) => {
    const i = idx + 1, [sw, bend] = cfg.joints[idx], L = tubes[key].L;
    const j1 = i === 1 && rig.frames && rig.frames.J1_hinge_lift ? rig.frames.J1_hinge_lift : 0;   // J1 v2 (22 Nov): bigger clutch housing, hinge axis lifted over the swivel
    add(`J${i}:low`, "joint_low", F); const Fs = mul(F, Rz(sw)); add(`J${i}:sw`, j1 ? "joint1_sw" : "joint_sw", Fs); const Fh = mul(mul(Fs, T(0, 0, j1)), Rx(bend)); add(`J${i}:hi`, j1 ? "joint1_hi" : "joint_hi", Fh);
    const Fu = mul(Fh, T(0, 0, Z_M)); TF[i] = Fu; add(`tube${i}`, "tube_" + key, Fu); add(`tube${i}:m3`, "m3screw", mul(Fu, T(0, 0, L - 8.0))); F = mul(Fu, T(0, 0, L + Z_T));
  });
  add("neck:low", "neck_low", F); const Fp = mul(F, Rz(cfg.head.pan)); add("neck:pan", "neck_pan", Fp);
  add("head", "head", mul(Fp, T(0, 0, 16.0), Rx(cfg.head.tilt), T(0, 0, -16.0), HEAD_TO_NECK));
  for (const [pk, att] of Object.entries(cfg.ports || {})) {
    const [slotS, sideS] = pk.split(":"), slot = +slotS, side = +sideS, key = cfg.spine[slot - 1]; let z = null;
    for (const p of tubes[key].ports) if (p.side === side) z = p.z;
    if (z === null) throw new Error(`tube ${key} has no port on side ${side}`);
    const F0 = mul(TF[slot], T(side * 28.0, 0, z), Ry(90 * side)), tag = `s${slot}${side > 0 ? "p" : "n"}`, t = att.type;
    if (t === "stub") { add(`${tag}:root`, "stub_root", F0); add(`${tag}:ring`, "ring", mul(F0, RING_ARM)); }
    else if (t === "tentacle") {
      add(`${tag}:root`, "tent_root", F0); add(`${tag}:ring`, "ring", mul(F0, RING_ARM)); let G = mul(F0, T(0, 0, BALL0));
      att.balls.forEach(([th, ph], k) => { const S = mul(G, ballRot(th, ph)); add(`${tag}:L${String(k).padStart(2, "0")}`, "tent_link", S); G = mul(S, T(0, 0, PITCH)); });
      add(`${tag}:tip`, "tent_tip", G);
    } else if (t === "arm") {
      let Fh = mul(F0, T(0, 0, Z_M), Ry(180));
      ["sh", "el", "wr"].forEach((nm, k) => {
        const [sw, bend] = att.joints[k], Fb = mul(Fh, Rx(-bend), Rz(-sw)), Fs = mul(Fb, Rz(sw));
        add(`${tag}:${nm}:hi`, "joint_hi", Fh); add(`${tag}:${nm}:sw`, "joint_sw", Fs); add(`${tag}:${nm}:low`, "joint_low", Fb);
        if (k < 2) { const [key2, Lk] = ARM_TUBES[k], Fu = mul(Fb, T(0, 0, -(Z_T + Lk))); add(`${tag}:T${k + 1}`, "tube_" + key2, Fu); add(`${tag}:T${k + 1}:m3`, "m3screw", mul(Fu, T(0, 0, Lk - 8.0))); Fh = mul(Fu, T(0, 0, -Z_M)); }
        else add(`${tag}:grip`, "gripper", mul(Fb, T(0, 0, -Z_T), Ry(180)));
      });
    } else if (t !== "none") throw new Error("unknown attachment " + t);
  }
  return out;
}
