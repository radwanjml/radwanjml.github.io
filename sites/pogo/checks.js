// POGO builder: live engineering checks (16 Nov 2026). Static gravity only, same model as cad/assembly_v3.analyse (point masses per body type).
// Numbers are estimates: tested against assembly3_meta.json for P1-P6 by test_checks.mjs. The real clash / strength checks stay in the CAD scripts.
import { fk } from "./lamp_fk.js";
import { xf, col, origin, byName, sub, len, dot, add } from "./ik.js";
const G = 9.81e-3;
export function analyse(cfg, rig, bodies) {
  bodies = bodies || fk(cfg, rig); const B = byName(bodies), P = rig.physics, rows = [];
  const levelOf = (nm) => { let m;
    if ((m = /^J(\d)/.exec(nm))) return +m[1] - 0.5; if ((m = /^tube(\d)/.exec(nm))) return +m[1]; if (nm === "neck:low" || nm === "neck:pan" || nm === "head") return 9; if ((m = /^s(\d)[pn]:/.exec(nm))) return +m[1]; return 0; };
  for (const b of bodies) {
    const inArm = /^s\d[pn]:/.test(b.name), md = rig.mass[b.type]; if (!md) continue;
    const m = inArm ? md.m_arm : md.m_spine, c = b.type === "head" ? md.com : inArm ? md.com_arm : md.com_spine;
    rows.push({ name: b.name, m, p: xf(b.M, c), level: levelOf(b.name), arm: inArm });
  }
  for (const [pk, a] of Object.entries(cfg.ports)) {
    const tag = `s${pk.split(":")[0]}${+pk.split(":")[1] > 0 ? "p" : "n"}`, slot = +pk.split(":")[0];
    if (a.type === "stub") rows.push({ name: tag + ":pens", m: P.stub_pens.m, p: xf(B[`${tag}:root`], P.stub_pens.p), level: slot, arm: true });
    if (a.type === "arm" && a.payload_g) rows.push({ name: tag + ":payload", m: a.payload_g, p: xf(B[`${tag}:grip`], P.grip_tip), level: slot, arm: true });
  }
  const total = rows.reduce((s, r) => s + r.m, P.base.m), com = [0, 0, P.base.m * P.base.com[2]];
  for (const r of rows) for (let k = 0; k < 3; k++) com[k] += r.m * r.p[k];
  for (let k = 0; k < 3; k++) com[k] /= total;
  const moment = (center, pred) => { const M = [0, 0, 0]; for (const r of rows) if (pred(r)) { const d = sub(r.p, center), f = -r.m * G; M[0] += d[1] * 1e-3 * f; M[1] += -d[0] * 1e-3 * f; } return M; }; // z-force only: M = d x F, F=(0,0,f)
  const momentFull = (center, pred) => { const M = [0, 0, 0]; for (const r of rows) if (pred(r)) { const d = [(r.p[0] - center[0]) * 1e-3, (r.p[1] - center[1]) * 1e-3, 0], f = -r.m * G; M[0] += d[1] * f; M[1] += -d[0] * f; } return M; };
  const out = { total_g: total, com, items: [] };
  const hinge = (j) => { const sw = B[`J${j}:sw`], c = origin(B[`J${j}:low`]); const Mv = momentFull(c, (r) => r.level > j - 0.5 && r.name !== `J${j}:low` && r.name !== `J${j}:sw`); return Math.abs(dot(Mv, col(sw, 0))); };
  out.hinge = cfg.spine.map((_, k) => k + 1).map(hinge);
  out.tube = cfg.spine.map((_, k) => k + 1).map((i) => { const c = origin(B[`tube${i}`]), ax = col(B[`tube${i}`], 2), Mv = momentFull(c, (r) => r.level >= i); const a = dot(Mv, ax); return Math.hypot(Mv[0] - a * ax[0], Mv[1] - a * ax[1], Mv[2] - a * ax[2]); });
  // lowest point: bounding boxes of every body (conservative)
  let lo = 1e9;
  for (const b of bodies) { const md = rig.mass[b.type]; if (!md || !md.bbox) continue; const [a, c] = md.bbox; for (const x of [a[0], c[0]]) for (const y of [a[1], c[1]]) for (const z of [a[2], c[2]]) lo = Math.min(lo, xf(b.M, [x, y, z])[2]); }
  out.lowest = lo;
  const r = Math.hypot(com[0], com[1]); out.com_r = r; out.margin_open = P.support_radius.open - P.support_radius.margin - r; out.margin_folded = P.support_radius.folded - P.support_radius.margin - r;
  const ports = cfg.spine.filter((k) => rig.tubes[k].ports.length).length; out.port_tubes = ports;
  const DF = P.design_factor, rated = P.j1_rated_Nm, rated23 = P.j23_rated_Nm || rated, it = out.items;   // J1 v2 has the bigger clutch (3.83); J2 and J3 keep the standard joint (2.75)
  const lv = (v, warn, fail) => (v >= fail ? "fail" : v >= warn ? "warn" : "ok");
  out.hinge.forEach((h, k) => { const rt = k === 0 ? rated : rated23; it.push({ id: `hinge${k + 1}`, label: `Joint ${k + 1} holding torque`, value: h, unit: "N·m", limit: rt, ratio: h / rt, level: lv(h / rt, 0.9, 1.0), note: h > rt ? "Over the clutch rating: this joint will slowly sag" : "Clutch holds" }); });
  out.tube.forEach((m, k) => { const cap = rig.tubes[cfg.spine[k]].capacity_Nm, d = m * DF; it.push({ id: `tube${k + 1}`, label: `Tube ${k + 1} (${cfg.spine[k]}) bending`, value: d, unit: "N·m", limit: cap, ratio: d / cap, level: lv(d / cap, 0.8, 1.0), note: d > cap ? "Tube too weak for this pose: pick a stronger tube" : "Within capacity" }); });
  it.push({ id: "tip", label: "Tipping margin (legs open)", value: out.margin_open, unit: "mm", limit: 0, ratio: 1 - Math.max(0, out.margin_open) / 60, level: out.margin_open < 0 ? "fail" : out.margin_open < 15 ? "warn" : "ok", note: out.margin_open < 0 ? "The lamp would fall over" : out.margin_open < 15 ? "Close to tipping: widen the legs or lean back" : "Stable" });
  it.push({ id: "desk", label: "Lowest point", value: lo, unit: "mm", limit: 0, ratio: lo < 0 ? 1 : 0, level: lo < -8 ? "fail" : lo < 0 ? "warn" : "ok", note: lo < -8 ? "Something goes through the desk" : "Above the desk (box estimate)" });
  it.push({ id: "ports", label: "Port tubes", value: ports, unit: "of 2", limit: 2, ratio: ports / 2, level: ports > 2 ? "warn" : "ok", note: ports > 2 ? "More than two port tubes: untested" : "OK" });
  out.level = it.some((x) => x.level === "fail") ? "fail" : it.some((x) => x.level === "warn") ? "warn" : "ok";
  return out;
}
