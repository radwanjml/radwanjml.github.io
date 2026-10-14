// Topographic background (Addendum 31: one fixed layer behind the whole site, simple v2 terrain, slow, faint),
// after Red's Blender "Topographic Map" (glowing contour lines over shaded relief, dark basins,
// a faint survey grid). Raw WebGL, one full-screen triangle, no three.js; ~0.1 ms a frame.
// Colours per time mode; only animates while on screen; a still frame under reduced motion.

const PALETTE = {   // basin, slope, crest, line  (linear-ish sRGB 0..1)
  light: { low: [0.80, 0.45, 0.32], mid: [0.92, 0.66, 0.50], high: [0.97, 0.84, 0.72], line: [0.62, 0.27, 0.15], ink: 1 },     // peach / terracotta
  dark: { low: [0.12, 0.09, 0.19], mid: [0.24, 0.15, 0.24], high: [0.42, 0.27, 0.27], line: [0.70, 0.52, 0.40] },     // dusk: muted ember on plum (bright amber hurt legibility)
  night: { low: [0.03, 0.05, 0.12], mid: [0.10, 0.17, 0.33], high: [0.25, 0.40, 0.62], line: [0.70, 0.86, 1.0] },   // deep sea / moonlit
};

export const FRAG = `#extension GL_OES_standard_derivatives : enable
precision highp float;
uniform vec2 uRes; uniform float uTime, uDpr, uScale, uScroll, uVariety;
uniform vec3 uLow, uMid, uHigh, uLine; uniform float uInk;   // uInk 1 = printed-map lines (light mode), 0 = glowing lines
// sin-free hash (Dave Hoskins): fract(sin(x)*43758) loses precision on phone GPUs and the relief shading turned the
// mismatched noise cells into visible seams (Red's phone, Addendum 59)
// floor(p + 0.5): Adreno reassociates hash(i + 1) into i*k + k, so neighbouring cells hashed the same corner from
// inputs one ulp apart and got different values. Snapping makes both sides hash the identical integer (Addendum 62)
float hash(vec2 p){ p = floor(p + 0.5); vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float noise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y); }
float fbm(vec2 p){ float s = 0.0, a = 0.5; for (int i = 0; i < 3; i++) { s += a * noise(p); p = p * 2.02 + 17.3; a *= 0.5; } return s; }
float height(vec2 p){
  vec2 w = vec2(fbm(p + vec2(0.0, uTime * 0.03)), fbm(p + vec2(5.2, 1.3) - uTime * 0.025));
  return fbm(p + 1.1 * w);                                       // domain-warped: the swirls
}
// variety: a slow low-frequency mask blends the terrain with a broader, offset copy of itself, so some regions carry
// wide calm contours and others tight ones (the uniform look Red flagged in the loader)
float terrain(vec2 p){
  float h = height(p);
  if (uVariety <= 0.0) return h;
  float m = smoothstep(0.32, 0.68, noise(p * 0.11 + vec2(3.1, 7.7) + uTime * 0.004)) * uVariety;
  return mix(h, height(p * 0.42 + vec2(11.0, 5.0)) * 0.95 + 0.03, m);
}
void main(){
  vec2 uv = gl_FragCoord.xy / uRes;
  vec2 p = (gl_FragCoord.xy / uDpr + vec2(0.0, uScroll)) / uScale;   // the ground scrolls slowly under the page                    // terrain scale in CSS px
  float h = terrain(p);
  // shaded relief: light from the upper left
  float e = 0.012, hx = terrain(p + vec2(e, 0.0)) - h, hy = terrain(p + vec2(0.0, e)) - h;
  vec3 n = normalize(vec3(-hx / e, -hy / e, 1.6));   // stronger relief: the depth Red liked in v1
  float lit = clamp(dot(n, normalize(vec3(-0.55, 0.6, 0.6))), 0.0, 1.0);
  float t = smoothstep(0.25, 0.75, h);
  vec3 col = mix(uLow, uMid, smoothstep(0.0, 0.55, t));
  col = mix(col, uHigh, smoothstep(0.55, 1.0, t));
  col *= 0.55 + 0.6 * lit;
  col *= mix(0.6, 1.0, smoothstep(0.2, 0.5, h));    // deeper basins              // deep basins go dark, like the reference
  // contour lines, anti-aliased with screen-space derivatives (approximated by the relief gradient)
  float levels = 30.0, v = h * levels;
  float g = fwidth(v) + 1e-4;                                    // level change per pixel
  float d = abs(fract(v - 0.5) - 0.5) / g;                       // pixels to the nearest contour
  float major = 1.0 - step(0.1, mod(floor(v + 0.5), 5.0));       // every 5th line is an index contour
  float w = mix(0.35, 0.8, major) * uDpr;
  float line = smoothstep(w + uDpr, w, d);
  float glow = exp(-d / (2.5 * uDpr)) * 0.05;
  float lineK = line * mix(0.42, 0.85, major);
  vec3 glowLines = col + uLine * (lineK * (0.55 + 0.45 * t) + glow * (0.3 + 0.7 * t));
  vec3 inkLines = mix(col, uLine, lineK * 0.8);
  col = mix(glowLines, inkLines, uInk);
  // faint survey grid
  vec2 gp = (gl_FragCoord.xy / uDpr + vec2(0.0, uScroll)) / 64.0;
  vec2 gf = abs(fract(gp) - 0.5);
  col = mix(col + uLine * 0.035, mix(col, uLine, 0.06), uInk) * smoothstep(0.485, 0.5, max(gf.x, gf.y)) + col * (1.0 - smoothstep(0.485, 0.5, max(gf.x, gf.y)));
  gl_FragColor = vec4(col, 1.0);
}`;

export function initTopo(canvas, { mode = 'dark', reducedMotion = false, scale = 360, seed = 7.0, speed = 0.3, variety = 0, maxDpr = 0.75 } = {}) {
  const gl = canvas.getContext('webgl', { antialias: false, alpha: false, premultipliedAlpha: false });
  if (!gl || !gl.getExtension('OES_standard_derivatives')) return null;
  const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s)); return s; };
  const prog = gl.createProgram();
  gl.attachShader(prog, sh(gl.VERTEX_SHADER, 'attribute vec2 a; void main(){ gl_Position = vec4(a, 0.0, 1.0); }'));
  gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FRAG));
  gl.linkProgram(prog); gl.useProgram(prog);
  const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, 'a'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const U = (n) => gl.getUniformLocation(prog, n);
  const u = { scale: U('uScale'), ink: U('uInk'), res: U('uRes'), time: U('uTime'), scroll: U('uScroll'), variety: U('uVariety'), dpr: U('uDpr'), low: U('uLow'), mid: U('uMid'), high: U('uHigh'), line: U('uLine') };

  const cur = JSON.parse(JSON.stringify(PALETTE[mode] || PALETTE.dark));
  let target = PALETTE[mode] || PALETTE.dark;
  let dpr = 1, paused = false, lastDraw = 0, t = seed, scroll = 0, scaleTarget = scale, last = performance.now(), visible = false, raf = 0;

  function size() {
    dpr = Math.min(devicePixelRatio || 1, maxDpr);   // maxDpr: the short-lived loader asks for more (Addendum 59)   // a faint (~25% opacity) background: below 1x is invisible and costs ~4x less than 1.5x (Addendum 46)
    const w = Math.round(canvas.clientWidth * dpr), h = Math.round(canvas.clientHeight * dpr);
    if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
    gl.viewport(0, 0, w, h);
  }
  function draw(dt) {
    const k = 1 - Math.exp(-dt * 3.2);   // colours cross-fade with the plate (~1.2 s)
    scale += (scaleTarget - scale) * (1 - Math.exp(-dt * 1.2));   // per-section zoom eases in slowly
    gl.uniform1f(u.scroll, scroll);
    cur.ink = (cur.ink ?? 0) + ((target.ink || 0) - (cur.ink ?? 0)) * k; gl.uniform1f(u.ink, cur.ink);
    for (const key of ['low', 'mid', 'high', 'line']) for (let i = 0; i < 3; i++) cur[key][i] += (target[key][i] - cur[key][i]) * k;
    gl.uniform2f(u.res, canvas.width, canvas.height); gl.uniform1f(u.time, t); gl.uniform1f(u.dpr, dpr); gl.uniform1f(u.scale, scale); gl.uniform1f(u.variety, variety);
    gl.uniform3fv(u.low, cur.low); gl.uniform3fv(u.mid, cur.mid); gl.uniform3fv(u.high, cur.high); gl.uniform3fv(u.line, cur.line);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }
  let settle = 0;   // frames left to finish a colour fade while paused
  function loop() {
    raf = 0;
    const now = performance.now();
    if (now - lastDraw < 1000 / 30 - 2 && settle <= 0) { if (visible && !paused) raf = requestAnimationFrame(loop); return; }   // 30 fps cap: a slow drift needs no more
    lastDraw = now;
    const dt = Math.min((now - last) / 1000, 0.05); last = now;
    if (!reducedMotion) t += dt * speed;   // slow drift
    draw(dt);
    if (visible && ((!reducedMotion && !paused) || settle-- > 0)) raf = requestAnimationFrame(loop);
  }
  const kick = () => { if (!raf) { last = performance.now(); raf = requestAnimationFrame(loop); } };
  new ResizeObserver(() => { size(); kick(); }).observe(canvas);
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) kick(); }).observe(canvas);
  size(); draw(1);
  return {
    setPaused(p) { if (paused === p) return; paused = p; if (!p) kick(); },
    setMode(m) { target = PALETTE[m] || PALETTE.dark; settle = 90; kick(); },
    setScroll(y) { scroll = -y; kick(); },
    setScale(s) { scaleTarget = s; settle = 120; kick(); },
    stop() { visible = false; cancelAnimationFrame(raf); raf = 0; gl.getExtension('WEBGL_lose_context')?.loseContext(); },
  };
}
