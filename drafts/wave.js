// A one-off "hello" wave, layered on top of the procedural rigs (call after rig.update each frame).
// Pip raises his right hand pivot, Moobi lifts his right arm socket, Eli3 curls her trunk up and waves it.
const ease = (x) => x * x * (3 - 2 * x);

export function makeWave(root, name) {
  let t = -1, dur = 2.2;
  let parts;
  if (name === 'pip') {
    const hand = root.getObjectByName('HandR');
    parts = hand ? [{ node: hand.parent, kind: 'pip' }] : [];
  } else if (name === 'moobi') {
    const s = root.getObjectByName('SocketR');
    parts = s ? [{ node: s, kind: 'moobi' }] : [];
  } else if (root.userData.wave) {
    // Eli3 runs her real rig (chars.js): it owns the trunk wave, so just trigger it
    return { apply() {}, start() { root.userData.wave(); }, get active() { return false; } };
  } else {
    const trunk = [];
    root.traverse((o) => { if (/^Trunk/.test(o.name)) trunk.push(o); });
    trunk.sort((a, b) => a.name.localeCompare(b.name));
    parts = trunk.map((node, i) => ({ node, kind: 'eli3', i, n: trunk.length }));
    dur = 2.6;
  }
  function apply(dt) {
    if (t < 0) return;
    t += dt;
    if (t > dur) { t = -1; return; }
    const env = ease(Math.min(1, t / 0.35)) * ease(Math.min(1, (dur - t) / 0.45));   // raise, wave, lower
    const w = Math.sin(t * Math.PI * 2 * 2.2);                                    // ~2 waves a second
    for (const p of parts) {
      if (p.kind === 'pip') { p.node.rotation.z += env * (1.9 + w * 0.35); p.node.rotation.x -= env * 0.3; }
      else if (p.kind === 'moobi') { p.node.rotation.z += env * (2.0 + w * 0.4); }
      else { const k = (p.i + 1) / p.n; p.node.rotation.x -= env * 0.16 * (1 + k); p.node.rotation.z += env * w * 0.12 * k; }
    }
  }
  return { apply, start() { t = 0; }, get active() { return t >= 0; } };
}
