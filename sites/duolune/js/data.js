// Duolune: every finish, price and hotspot lives here. Colours are linear RGB (same values as the Blender materials).
export const KINDS = {
  leather: { label: 'Leather', tex: 'leather', tile: 0.05, rough: 0.44, sheen: 0.03, sheenRough: 0.4, coat: 0.1, normal: 0.4, price: 0 },
  wool:    { label: 'Wool',    tex: 'wool',    tile: 0.04, rough: 0.9,  sheen: 0.6,  sheenRough: 0.45, coat: 0,    normal: 0.8,  price: -12000 },
  boucle:  { label: 'Bouclé',  tex: 'boucle',  tile: 0.06, rough: 0.96, sheen: 0.7,  sheenRough: 0.5,  coat: 0,    normal: 1.1,  price: 6000 },
  velvet:  { label: 'Velvet',  tex: 'velvet',  tile: 0.2,  rough: 0.68, sheen: 1.0,  sheenRough: 0.32, coat: 0,    normal: 0.35, price: 9000 },
};

export const COLOURS = {
  leather: [
    { id: 'cognac', name: 'Cognac', a: [0.2, 0.085, 0.035], b: [0.12, 0.048, 0.02], thread: [0.42, 0.28, 0.15] },
    { id: 'noir', name: 'Noir', a: [0.022, 0.02, 0.019], b: [0.009, 0.008, 0.008], thread: [0.06, 0.055, 0.05] },
    { id: 'oxblood', name: 'Oxblood', a: [0.075, 0.016, 0.015], b: [0.035, 0.008, 0.008], thread: [0.22, 0.07, 0.055] },
    { id: 'espresso', name: 'Espresso', a: [0.06, 0.032, 0.019], b: [0.032, 0.017, 0.01], thread: [0.28, 0.19, 0.11] },
    { id: 'sand', name: 'Sand', a: [0.48, 0.36, 0.24], b: [0.36, 0.26, 0.16], thread: [0.55, 0.45, 0.32] },
  ],
  wool: [
    { id: 'charcoal', name: 'Charcoal', a: [0.065, 0.065, 0.068], b: [0.03, 0.03, 0.032], thread: [0.05, 0.05, 0.05] },
    { id: 'oatmeal', name: 'Oatmeal', a: [0.44, 0.38, 0.29], b: [0.3, 0.25, 0.18], thread: [0.36, 0.3, 0.22] },
    { id: 'slate', name: 'Slate', a: [0.07, 0.09, 0.12], b: [0.04, 0.05, 0.07], thread: [0.06, 0.07, 0.09] },
  ],
  boucle: [
    { id: 'ivory', name: 'Ivory', a: [0.66, 0.62, 0.54], b: [0.47, 0.43, 0.36], thread: [0.6, 0.56, 0.48] },
    { id: 'stone', name: 'Stone', a: [0.36, 0.33, 0.28], b: [0.24, 0.22, 0.18], thread: [0.3, 0.28, 0.24] },
  ],
  velvet: [
    { id: 'bottle', name: 'Bottle green', a: [0.018, 0.07, 0.045], b: [0.008, 0.035, 0.022], thread: [0.02, 0.06, 0.04] },
    { id: 'rust', name: 'Rust', a: [0.25, 0.07, 0.025], b: [0.13, 0.035, 0.012], thread: [0.2, 0.06, 0.03] },
    { id: 'midnight', name: 'Midnight', a: [0.012, 0.016, 0.045], b: [0.006, 0.008, 0.022], thread: [0.02, 0.025, 0.05] },
  ],
};

// Metal is limited on purpose: these are the finishes a powder-coat line actually runs.
export const METALS = [
  { id: 'black', name: 'Satin black', c: [0.016, 0.016, 0.018], rough: 0.36, metal: 0, coat: 0.25, price: 0 },
  { id: 'warmwhite', name: 'Warm white', c: [0.72, 0.69, 0.63], rough: 0.42, metal: 0, coat: 0.15, price: 0 },
  { id: 'sage', name: 'Sage', c: [0.17, 0.21, 0.15], rough: 0.42, metal: 0, coat: 0.15, price: 0 },
  { id: 'terracotta', name: 'Terracotta', c: [0.24, 0.085, 0.045], rough: 0.48, metal: 0, coat: 0.15, price: 0 },
  { id: 'bronze', name: 'Bronze', c: [0.48, 0.33, 0.2], rough: 0.3, metal: 1, coat: 0.1, price: 14000 },
  { id: 'stainless', name: 'Brushed steel', c: [0.75, 0.75, 0.73], rough: 0.22, metal: 1, coat: 0, price: 16000 },
];
export const WOODS = [
  { id: 'walnut', name: 'Walnut', light: [0.15, 0.075, 0.038], dark: [0.035, 0.017, 0.009], price: 22000 },
  { id: 'whiteoak', name: 'White oak', light: [0.5, 0.36, 0.21], dark: [0.24, 0.15, 0.075], price: 18000 },
  { id: 'ash', name: 'Ash', light: [0.62, 0.5, 0.34], dark: [0.36, 0.26, 0.15], price: 16000 },
  { id: 'smokedoak', name: 'Smoked oak', light: [0.17, 0.11, 0.065], dark: [0.075, 0.045, 0.025], price: 24000 },
];

export const BASE_PRICE = 164000;
export const PRICE = { customColour: 7500, stripe: { none: 0, single: 8000, twin: 11500 }, stripeCustom: 4000, frameCustom: 9000 };

// Signature builds: the twelve rendered in Blender. Each maps to a full configuration.
const up = (kind, id) => ({ kind, colour: id, custom: null });
export const SIGNATURES = [
  { id: '01', name: 'Cognac / Black', img: '01_cognac_black', cfg: { up: up('leather', 'cognac'), stripe: { mode: 'none' }, frame: { type: 'metal', id: 'black' } } },
  { id: '02', name: 'Noir / Walnut', img: '02_noir_walnut', cfg: { up: up('leather', 'noir'), stripe: { mode: 'none' }, frame: { type: 'wood', id: 'walnut' } } },
  { id: '03', name: 'Oxblood / Bronze', img: '03_oxblood_bronze', cfg: { up: up('leather', 'oxblood'), stripe: { mode: 'none' }, frame: { type: 'metal', id: 'bronze' } } },
  { id: '04', name: 'Bouclé / White oak', img: '04_boucle_whiteoak', cfg: { up: up('boucle', 'ivory'), stripe: { mode: 'none' }, frame: { type: 'wood', id: 'whiteoak' } } },
  { id: '05', name: 'Charcoal / Sage', img: '05_charcoal_sage', cfg: { up: up('wool', 'charcoal'), stripe: { mode: 'none' }, frame: { type: 'metal', id: 'sage' } } },
  { id: '06', name: 'Bottle velvet / Ash', img: '06_velvet_ash', cfg: { up: up('velvet', 'bottle'), stripe: { mode: 'none' }, frame: { type: 'wood', id: 'ash' } } },
  { id: '07', name: 'Sand / Warm white', img: '07_sand_white', cfg: { up: up('leather', 'sand'), stripe: { mode: 'none' }, frame: { type: 'metal', id: 'warmwhite' } } },
  { id: '08', name: 'Rust velvet / Smoked oak', img: '08_rust_smokedoak', cfg: { up: up('velvet', 'rust'), stripe: { mode: 'none' }, frame: { type: 'wood', id: 'smokedoak' } } },
  { id: '09', name: 'Oatmeal, cognac stripe', img: '09_stripe_oatmeal_cognac', cfg: { up: up('wool', 'oatmeal'), stripe: { mode: 'single', kind: 'leather', colour: 'cognac', custom: null }, frame: { type: 'metal', id: 'black' } } },
  { id: '10', name: 'Noir, sand twin stripe', img: '10_stripe_noir_sand_twin', cfg: { up: up('leather', 'noir'), stripe: { mode: 'twin', kind: 'leather', colour: 'sand', custom: null }, frame: { type: 'metal', id: 'black' } } },
  { id: '11', name: 'Charcoal, cognac stripe / Walnut', img: '11_stripe_charcoal_cognac', cfg: { up: up('wool', 'charcoal'), stripe: { mode: 'single', kind: 'leather', colour: 'cognac', custom: null }, frame: { type: 'wood', id: 'walnut' } } },
  { id: '12', name: 'Cognac, noir twin / Bronze', img: '12_stripe_cognac_noir_twin', cfg: { up: up('leather', 'cognac'), stripe: { mode: 'twin', kind: 'leather', colour: 'noir', custom: null }, frame: { type: 'metal', id: 'bronze' } } },
];

// Stripe edges, metres from the centreline (model units × 0.55)
export const STRIPES = { none: [0, 0], single: [0, 0.0605], twin: [0.01925, 0.05225] };

// Hotspots: three.js world space (metres, Y up). view = camera position + look-at target for the zoom.
export const HOTSPOTS = [
  { id: 'arc', pos: [0.0, 0.552, 0.5], view: { cam: [0.9, 0.75, 1.55], tgt: [0.0, 0.35, 0.5] },
    title: 'The arc', kicker: 'Frame',
    body: 'Each side is one half-circle, bent from a single length. Steel frames use 110 × 55 mm hollow section with a 3 mm wall. Wood frames are built from ~1.8 mm plies glued and pressed over a form, so the grain follows the curve.',
    points: ['No joints in the arc itself', 'Steel arc ≈ 13 kg, wood ≈ 7 kg', 'Feet sit on rubber glides'] },
  { id: 'hang', pos: [0.1045, 0.269, 0.546], view: { cam: [0.75, 0.42, 1.05], tgt: [0.1, 0.27, 0.5] },
    title: 'Six bolts hold the seat', kicker: 'Engineering',
    body: 'The roller chain hangs from the side rails at three points per side. At each one, a through-axle runs inside a roller, a spacer tube bridges the gap to the rail, and an acorn nut closes it off.',
    points: ['Load goes straight into the arcs', 'Axles also tie left and right together', 'Everything unbolts for repair'] },
  { id: 'stitch', pos: [0.887, 0.373, 0.2075], view: { cam: [1.15, 0.52, 0.52], tgt: [0.86, 0.33, 0.2] },
    title: 'Top-stitching', kicker: 'Upholstery',
    body: 'A single row of lock-stitch runs 16 mm in from each end, slightly angled, at about four stitches per centimetre. It holds the cover tight against the welt and keeps the end from creeping.',
    points: ['Thread matched or contrasted per build', 'Underside seam is double-stitched', 'Hand-finished ends'] },
  { id: 'end', pos: [0.887, 0.318, 0.226], view: { cam: [1.05, 0.36, 0.62], tgt: [0.88, 0.31, 0.2] },
    title: 'Tailored ends', kicker: 'Upholstery',
    body: 'Every roller is closed with a flat leather or fabric panel, piped round the edge with a welt cord and finished with a covered button. The three rollers that carry axles get a steel grommet instead.',
    points: ['Welt cord protects the edge', 'Covered button hides the fixing', 'Panels can be replaced one by one'] },
  { id: 'stripe', pos: [0.216, 0.305, 0.0], view: { cam: [0.75, 0.95, 0.55], tgt: [0.2, 0.3, 0.0] },
    title: 'The stripe', kicker: 'Option',
    body: 'An optional band of a second material, sewn into every roller and wrapped all the way round. Run it single or twin, in any upholstery and any colour. Line up the rollers and it reads as one stripe, head to foot.',
    points: ['Flush seam, double top-stitch on each edge', 'Single 121 mm or twin 33 mm bands', 'Set it to any colour'] },
  { id: 'head', pos: [-0.70, 0.99, 0.12], view: { cam: [-0.1, 1.25, 0.9], tgt: [-0.68, 0.93, 0.0] },
    title: 'Head pillow', kicker: 'Comfort',
    body: 'The last roller is 200 mm across, nearly twice the others, and sits where the curve turns steepest. It catches the back of your head when you recline fully.',
    points: ['Ø 200 mm, same tailoring as the rollers', 'Fixed to the spine, no straps', 'Swap it for a flatter one on request'] },
  { id: 'feet', pos: [0.52, 0.012, 0.495], view: { cam: [1.05, 0.22, 1.0], tgt: [0.52, 0.06, 0.48] },
    title: 'Four points of contact', kicker: 'Frame',
    body: 'The arcs meet the floor at four rubber glides, so the chair stands still and doesn\'t mark wood or stone. The footprint is 1740 × 1100 mm.',
    points: ['Natural rubber glides', 'Stable: the seat\'s weight sits between the feet', 'Levels on uneven floors'] },
  { id: 'underside', pos: [0.216, 0.19, 0.0], view: { cam: [0.9, 0.08, 0.75], tgt: [0.2, 0.25, 0.0] }, under: true,
    title: 'Underneath', kicker: 'Detail',
    body: 'Two steel stringers run through the centre of every roller, so the rollers follow the curve and don\'t sag. Underneath, each roller is closed with a double-stitched seam that faces the floor.',
    points: ['11 × 44 mm steel spine, on edge', 'Seam faces down, out of sight', 'Back load deflects about 0.1 mm'] },
];
