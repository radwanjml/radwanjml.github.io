// "Will it fit": a top-down plan. Room in metres, the Duolune footprint (1.74 × 1.10 m) drawn from the real plan shape,
// a 600 mm walkway halo, drag to move, turn in 15° steps. Status is spoken through an aria-live element.
export function initPlanner() {
  const cv = document.getElementById('fit-canvas'); if (!cv) return;
  const ctx = cv.getContext('2d');
  const wIn = document.getElementById('fit-w'), dIn = document.getElementById('fit-d'), status = document.getElementById('fit-status');
  const L = 1.74, W = 1.1, CLEAR = 0.6;
  let room = { w: +wIn.value, d: +dIn.value };
  let chair = { x: room.w / 2, y: room.d / 2, a: 0 };
  let scale = 100, ox = 0, oy = 0, drag = null;
  const css = getComputedStyle(document.documentElement);
  const ink = css.getPropertyValue('--ink').trim() || '#2a2420';

  function size() {
    const r = cv.getBoundingClientRect(); const dpr = Math.min(2, devicePixelRatio);
    cv.width = r.width * dpr; cv.height = r.height * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const pad = 36; scale = Math.min((r.width - pad * 2) / room.w, (r.height - pad * 2) / room.d);
    ox = (r.width - room.w * scale) / 2; oy = (r.height - room.d * scale) / 2; draw();
  }
  const corners = (ext) => {
    const hl = L / 2 + ext, hw = W / 2 + ext, c = Math.cos(chair.a), s = Math.sin(chair.a);
    return [[-hl, -hw], [hl, -hw], [hl, hw], [-hl, hw]].map(([x, y]) => [chair.x + x * c - y * s, chair.y + x * s + y * c]);
  };
  function check() {
    const inside = corners(0).every(([x, y]) => x >= 0 && y >= 0 && x <= room.w && y <= room.d);
    const walk = corners(CLEAR).filter(([x, y]) => x < 0 || y < 0 || x > room.w || y > room.d).length;
    if (!inside) { status.textContent = "Doesn't fit there. Part of the chair is outside the room."; status.classList.add('is-bad'); }
    else if (walk >= 3) { status.textContent = "Fits, but it's tight: less than 600 mm to walk past on most sides. Fine against a wall."; status.classList.remove('is-bad'); }
    else { status.textContent = 'Fits, with room to walk round it.'; status.classList.remove('is-bad'); }
  }
  function draw() {
    const r = cv.getBoundingClientRect(); ctx.clearRect(0, 0, r.width, r.height);
    // grid at 0.5 m
    ctx.strokeStyle = 'rgba(80,60,40,0.12)'; ctx.lineWidth = 1;
    for (let x = 0; x <= room.w + 1e-6; x += 0.5) { ctx.beginPath(); ctx.moveTo(ox + x * scale, oy); ctx.lineTo(ox + x * scale, oy + room.d * scale); ctx.stroke(); }
    for (let y = 0; y <= room.d + 1e-6; y += 0.5) { ctx.beginPath(); ctx.moveTo(ox, oy + y * scale); ctx.lineTo(ox + room.w * scale, oy + y * scale); ctx.stroke(); }
    ctx.strokeStyle = ink; ctx.lineWidth = 3; ctx.strokeRect(ox, oy, room.w * scale, room.d * scale);
    ctx.fillStyle = ink; ctx.font = '600 12px Archivo, sans-serif';
    ctx.fillText(`${room.w.toFixed(1)} m`, ox + room.w * scale / 2 - 16, oy - 12);
    ctx.save(); ctx.translate(ox - 14, oy + room.d * scale / 2 + 16); ctx.rotate(-Math.PI / 2); ctx.fillText(`${room.d.toFixed(1)} m`, 0, 0); ctx.restore();
    // chair
    ctx.save(); ctx.translate(ox + chair.x * scale, oy + chair.y * scale); ctx.rotate(chair.a); const S = scale;
    ctx.setLineDash([6, 5]); ctx.strokeStyle = 'rgba(42,36,32,0.45)'; ctx.lineWidth = 1.5;
    roundRect(-(L / 2 + CLEAR) * S, -(W / 2 + CLEAR) * S, (L + 2 * CLEAR) * S, (W + 2 * CLEAR) * S, 0.6 * S); ctx.stroke(); ctx.setLineDash([]);
    // arcs (feet to feet) and the lens of rollers, from the real plan
    ctx.fillStyle = 'rgba(42,36,32,0.9)';
    for (const sy of [-1, 1]) ctx.fillRect(-0.55 * S, sy * 0.495 * S - 0.03 * S, 1.1 * S, 0.06 * S);
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--stripe').trim() || '#a0582c';
    ctx.globalAlpha = 0.85;
    const n = 17;
    for (let i = 0; i < n; i++) {
      const t = i / (n - 1); const x = (-0.71 + t * 1.6) * S; const half = (0.225 + 0.2 * Math.sin(Math.PI * Math.min(1, t * 1.05))) * S;
      ctx.fillRect(x - 0.022 * S, -half, (i === 0 ? 0.1 : 0.05) * S, half * 2);
    }
    ctx.globalAlpha = 1; ctx.restore();
    check();
  }
  function roundRect(x, y, w, h, r) { ctx.beginPath(); ctx.roundRect ? ctx.roundRect(x, y, w, h, r) : ctx.rect(x, y, w, h); }
  const toRoom = (e) => { const r = cv.getBoundingClientRect(); return [(e.clientX - r.left - ox) / scale, (e.clientY - r.top - oy) / scale]; };
  cv.addEventListener('pointerdown', (e) => { const [x, y] = toRoom(e); if (Math.hypot(x - chair.x, y - chair.y) < 1.1) { drag = [x - chair.x, y - chair.y]; cv.setPointerCapture(e.pointerId); } });
  cv.addEventListener('pointermove', (e) => { if (!drag) return; const [x, y] = toRoom(e); chair.x = x - drag[0]; chair.y = y - drag[1]; draw(); });
  cv.addEventListener('pointerup', () => { drag = null; });
  const upd = () => { room = { w: Math.min(12, Math.max(1.8, +wIn.value || 4)), d: Math.min(12, Math.max(1.8, +dIn.value || 3.5)) }; chair.x = Math.min(chair.x, room.w); chair.y = Math.min(chair.y, room.d); size(); };
  wIn.addEventListener('input', upd); dIn.addEventListener('input', upd);
  document.getElementById('fit-rot').addEventListener('click', () => { chair.a += Math.PI / 12; draw(); });
  document.getElementById('fit-reset').addEventListener('click', () => { chair = { x: room.w / 2, y: room.d / 2, a: 0 }; draw(); });
  new ResizeObserver(size).observe(cv); size();
  // keyboard: arrows move 10 cm, R turns
  cv.tabIndex = 0;
  cv.addEventListener('keydown', (e) => {
    const k = { ArrowLeft: [-0.1, 0], ArrowRight: [0.1, 0], ArrowUp: [0, -0.1], ArrowDown: [0, 0.1] }[e.key];
    if (k) { chair.x += k[0]; chair.y += k[1]; e.preventDefault(); draw(); } else if (e.key === 'r' || e.key === 'R') { chair.a += Math.PI / 12; draw(); }
  });
}
