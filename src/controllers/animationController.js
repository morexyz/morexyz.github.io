import { createAnimationEngine } from '../modules/animation/engine.js';
export function createAnimationController(ctx){
  const engine = createAnimationEngine({ state: ctx.state });
  return {
    onPageMounted(root){ engine.routeEnter(root); engine.revealSections(root); engine.animateSvgStrokes(root); }
  };
}
