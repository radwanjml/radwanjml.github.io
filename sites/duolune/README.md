# Duolune: how the page works

A product page and live 3D configurator for Duolune, a concept lounge chair designed, engineered and rendered in Blender by Radwan Jameel. The code is AI-assisted.

## Run it
Any static server works, for example `python -m http.server 4190 --directory site`. The `duolune` entry in `.claude/launch.json` does the same thing.

## Files
| Path | What it is |
|---|---|
| `index.html` | Every section of the page, in order: hero film → statement → pattern book → configurator → gallery → fit planner → details → making-of |
| `css/style.css` | Tokens at the top: OKLCH colours, 6 type sizes, 8 pt spacing, named motion timings. World: a 1960s Milanese tailoring pattern book. |
| `js/data.js` | **Everything you'd change**: upholstery kinds, colours (linear RGB, the same values as the Blender materials), metal and wood finishes, prices, the 12 signature builds, stripe widths, hotspot positions and texts |
| `js/app.js` | Page logic: state and share links, the option panel, price, film sync, AR dialog, lightbox, header tone, the phone price dock |
| `js/configurator.js` | three.js r160 viewer. Loaded only when the build section comes near (or on tap when the connection is slow). |
| `js/planner.js` | "Will it fit" floor plan (2D canvas) |
| `assets/model/duolune.glb` | 330 KB. Draco-compressed and in metres. Six meshes: rollers, trim, frame, rail, hardware, feet |
| `assets/tex/*_n.jpg` | Seamless normal maps for leather, wool, bouclé and velvet (generated, tile by construction) |
| `assets/film/` | Hero film: one silent 24 s orbit, the finish changes every 2 s through the 12 signatures (`hero_1080`, `hero_720`, `hero_portrait`). Rendered by `Blender/.../scripts/film_orbit.py` |

## The tricks
1. **One model, every finish.** The rollers carry UV0 = (arc length round the roller, distance from its end) in metres, and UV1.x = a random tone per roller. The shader uses those to draw everything procedurally:
   - the top-stitch ring 16.5 mm from each end
   - the double-stitched underside seam
   - puckering where the cover pulls round the end
   - darker burnished ends
   - a per-roller tone shift, so no two rollers look cut from the same spot on the hide
   
   Changing a colour is a uniform update; nothing is downloaded.
2. **The racing stripe is a mask, not a texture.** It uses |z| in object space, which stays exact through Blender's subdivision (a stored UV drifts by up to 10 cm). Two upholsteries mix across it, each with its own normal map, roughness and sheen. Every edge gets a seam groove plus a double top-stitch. Single stripe: |z| < 60.5 mm. Twin: 19.25–52.25 mm.
3. **Bent-ply wood is procedural.** The arc's centre is at the origin, with its axis on Z:
   - Plies are rings of radius r, each 1.8 mm, with a glue line between them. They show on the side faces.
   - The long grain follows the bend: simplex noise on (r, z, θ), then `fract(n × 14)` for the figure lines.
4. **The hotspots are HTML** projected from 3D every frame. A raycast every 6 frames hides any that are behind the chair. Clicking one tweens the camera to a preset view with GSAP and opens an info card.
5. **AR uses `<model-viewer>`**, loaded only when someone taps "See it in your room". The same GLB is recoloured through its materials API to match the build. Android uses Scene Viewer, iPhone uses Quick Look (model-viewer generates the USDZ). Stripes and stitching don't carry into AR; colours do.

## Rebuilding the assets
- **Model:** `blender -b Arc_Recliner8.blend --python tools/export_web.py -- site/assets/model/duolune.glb`
- **Textures:** `blender -b --python tools/gen_textures.py -- tools/tex_src`, then convert to JPG with ffmpeg
- **Film:** `Blender/Furniture/Arc_Recliner/scripts/film.py`. See the session record there.

## Licences
- Room HDRI, side table and plant: Poly Haven, CC0 (see ../ASSETS.md). The page has no music.
- three.js (MIT), model-viewer (Apache 2.0), GSAP (free licence), simplex noise by Ashima Arts / Stefan Gustavson (MIT).
- Fonts: Bodoni Moda and Archivo (OFL), via Google Fonts.
- Every image and the model are original renders. No photographs, stock or AI imagery.
