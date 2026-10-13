// Pure motion maths, no three.js, so it runs under node:test.
// Constants are ported from Closer (Projects/Games/Closer/V1/cove.html); line refs beside each.

export const SPEED = 4.2;          // cove.html:3147 CHARACTERS.*.speed
export const VEL_RATE = 16;        // cove.html:3088 "snappy accel/decel"
const STOP_EPS = 1e-3;

/** Exponential approach to the wished velocity. input is -1..1 per axis. */
export function stepVelocity(v, input, dt, speed = SPEED, rate = VEL_RATE) {
  let wx = input.x, wz = input.z;
  const mag = Math.hypot(wx, wz);
  if (mag > 1) { wx /= mag; wz /= mag; }
  wx *= speed; wz *= speed;
  const k = 1 - Math.exp(-rate * dt);
  let x = v.x + (wx - v.x) * k;
  let z = v.z + (wz - v.z) * k;
  if (mag === 0 && Math.hypot(x, z) < STOP_EPS) { x = 0; z = 0; }
  return { x, z };
}

/** Damped spring on a {a, v} state, in place. cove.html:3204 */
export function spring(s, target, k, c, dt) {
  s.v += (-k * (s.a - target) - c * s.v) * dt;
  s.a += s.v * dt;
}

export const damp = (x, y, lambda, dt) => x + (y - x) * (1 - Math.exp(-lambda * dt));
export const clamp = (x, lo, hi) => Math.min(hi, Math.max(lo, x));

/** No-slip wheel spin for a travelled distance. cove.html:3726 */
export const wheelRoll = (distance, radius) => distance / radius;

/** Pip's idle hover bob. cove.html:3337, TUNE.idle = 1.75 */
export const pipBob = (t, idle = 1.75) => (Math.sin(t * 1.7) * 0.045 + Math.sin(t * 0.9) * 0.018) * idle;

/** A pointerup counts as a tap only if it barely moved and was quick. Swipes keep scrolling. */
export function isTap(down, up, maxTravel = 8, maxMs = 300) {
  return Math.hypot(up.x - down.x, up.y - down.y) <= maxTravel && up.t - down.t <= maxMs;
}

export function padHit(pos, pads) {
  for (const p of pads) if (Math.hypot(pos.x - p.x, pos.z - p.z) <= p.r) return p.id;
  return null;
}

export function clampToDisc(pos, radius) {
  const d = Math.hypot(pos.x, pos.z);
  if (d <= radius) return { x: pos.x, z: pos.z };
  return { x: (pos.x / d) * radius, z: (pos.z / d) * radius };
}

/** Unit input toward a target, eased to zero over the last `slow` units, zero inside `arrive`. */
export function steerTo(pos, target, arrive = 0.06, slow = 0.6) {
  const dx = target.x - pos.x, dz = target.z - pos.z;
  const d = Math.hypot(dx, dz);
  if (d <= arrive) return { x: 0, z: 0 };
  const s = Math.min(1, d / slow);
  return { x: (dx / d) * s, z: (dz / d) * s };
}
