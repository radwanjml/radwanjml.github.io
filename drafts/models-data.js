// The model list, shared by the Models field and the model pages (Addendum 49).
// [slug, title, note?]: note replaces "Modelled and rendered in Blender" (fan art credits).
export const R = [
  ['perfume', 'JAMEEL perfume'], ['1966-headphones', '1966 Headphones'], ['wine', 'Wine pour'], ['snow-glode-paris', 'Snow globe, Paris'],
  ['potion', 'Potion'], ['zerene-cosmatics', 'Vitamin C serum'], ['milk-carton', 'Milk carton'], ['candy-geometry-nodes', 'Candy, geometry nodes'],
  ['statue-bust', 'Statue bust'], ['skull-on-fire', 'Skull on fire'], ['rocket', 'Rocket'], ['cosmetics', 'Magnolia strawberry perfume'],
  ['topographic-map', 'Topographic map'], ['smily-clip', 'Smiley clip'], ['jwellery', 'Silver ring'], ['statue-flake', 'Statue flake'],
  ['car-gls-600', 'Mercedes-Maybach GLS 600', 'Fan render · vehicle design © Mercedes-Benz · personal study, not affiliated'],
  ['baymax', 'Baymax', 'Fan art · Baymax © Disney · personal study, not affiliated'],
  ['doc-ock-robot-arms', 'Doc Ock robot arms', 'Fan art · Doctor Octopus © Marvel · personal study, not affiliated'],
  ['elmo', 'Elmo', 'Fan art · Elmo © Sesame Workshop · personal study, not affiliated'],
  ['huggy-wuggy', 'Huggy Wuggy', 'Fan art · Huggy Wuggy © Mob Entertainment · personal study, not affiliated'],
  ['car-show-room', 'Car showroom', 'Fan render · vehicle design © its manufacturer · personal study, not affiliated'],
  ['color-swatch-fans', 'Colour swatch fan'], ['color-swatch-fan-batom-outono', 'Swatch fan, Batom Outono'], ['cotton-candy-hand-moisturizer', 'Cotton candy hand cream'],
  ['asabco-motor-oil', 'Motor oil bottle'], ['geodesic-dome', 'Geodesic dome'], ['cappadocia', 'Cappadocia'], ['hot-air-baloon', 'Hot air balloon'],
  ['armored-warior-under-a-cherry-blossom', 'Warrior under a cherry blossom'], ['hotel-elevation-3d-model', 'Hotel elevation'], ['diwali-roof-top', 'Diwali rooftop'],
  ['road-car-drive', 'Night drive'], ['surfer', 'Surfer'],
];

// Per-model extras. video: assets/video/models/<slug>.mp4 (+ .webp poster). glb: id in the 3D viewer.
// info: Red's notes, added later. Leave empty rather than invent.
const VIDEO = ['wine', 'snow-glode-paris', 'milk-carton', 'zerene-cosmatics', 'candy-geometry-nodes', 'statue-bust', 'statue-flake', 'skull-on-fire', 'smily-clip', 'topographic-map', 'rocket', 'car-gls-600', 'car-show-room', 'diwali-roof-top', 'road-car-drive', 'doc-ock-robot-arms', 'color-swatch-fans', 'asabco-motor-oil'];
const GLB = { perfume: 'perfume', '1966-headphones': 'headphones', wine: 'wine', 'zerene-cosmatics': 'zerene', 'milk-carton': 'milk', rocket: 'rocket' };
export const EXTRA = Object.fromEntries(R.map(([slug]) => [slug, { video: VIDEO.includes(slug), glb: GLB[slug] || null, info: '' }]));
