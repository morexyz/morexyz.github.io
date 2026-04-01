# morexyz.github.io

Production-ready Vanilla JS SPA for the MMU FAIE research proposal **“On-Device Adaptive Audio Intelligence for IoT Agents.”**

## Overview
- Pure Vanilla JS, no frameworks, no build step, no external runtime dependencies.
- Hash-based routing for GitHub Pages compatibility.
- MVC-style modular architecture with dynamic route module loading.
- Accessible, responsive, dark technical-academic visual language.
- Motion system with reduced-motion support.

## Architecture
- **Model**: `src/models` for app state, content metadata, animation state.
- **View**: `src/views` for shell, nav/footer, reusable components.
- **Controller**: `src/controllers` for app orchestration, route loading, interactions, animation hooks.
- **Core**: `src/core` router, flags, capabilities, event bus, utilities.
- **Modules**:
  - `src/modules/pages` route pages.
  - `src/modules/animation` engine, timeline, scheduler, drivers.
  - `src/modules/svg` hero + architecture visuals.
  - `src/modules/canvas` optional placeholder (disabled by default).
  - `src/modules/optional` scaffolds for workers/scroll/pointer/audio motion.

## Folder Structure
```text
index.html
404.html
README.md
src/
  app/
  core/
  models/
  views/
    components/
  controllers/
  modules/
    animation/
    svg/
    canvas/
    optional/
    pages/
  assets/
  styles/
```

## Run Locally
Use a static server (recommended; some browsers block `file://` ESM imports).

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Routing
- Hash router paths:
  - `#/home`, `#/research`, `#/system`, `#/methodology`, `#/evaluation`, `#/timeline`, `#/references`, `#/about`
- Unknown routes render a graceful not-found message.
- `404.html` redirects to `#/home` for GitHub Pages fallback behavior.

## Feature Flags
`src/core/flags.js` controls optional capabilities:
- `enableWAAPI`, `enableSVGAnimations`
- `enableCanvasEffects` (off by default)
- `enableScrollEffects`, `enablePointerEnhancements`, `enableAudioReactiveMotion`, `enableWorkers`
- `debugAnimations`

## Enabling Optional Modules
1. Set desired flags in `src/core/flags.js`.
2. Ensure capability checks in `src/core/capabilities.js` pass.
3. Wire optional module initialization in `appController` (already scaffold-ready).

## GitHub Pages Deployment (User Site)
Repository: `morexyz.github.io`
1. Commit and push branch to `main` of the user-site repo.
2. Ensure files are at repo root (`index.html`, `404.html`, `/src`).
3. GitHub Pages serves automatically from root; hash routing needs no server rewrites.

## Extending the Site
- Add page module in `src/modules/pages/newPage.js` exporting `render()`.
- Register route in `src/core/config.js`.
- Add component(s) in `src/views/components` for reusable UI patterns.
- Keep model/controller responsibilities isolated to avoid cross-layer coupling.

## Future Integrations
- **Workers**: integrate expensive profiling/calculations with `workerBridge.js`.
- **Scroll effects**: progressive scroll-linked animations in `scrollFx.js`.
- **Pointer & multi-touch**: richer spatial interactions in `pointerFx.js`.
- **Audio reactive visuals**: subtle, optional interaction layer in `audioMotion.js`.
