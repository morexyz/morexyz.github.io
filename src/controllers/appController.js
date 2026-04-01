import { renderLayout } from '../views/layoutView.js';
import { createRouter } from '../core/router.js';
import { createRouteController } from './routeController.js';
import { createAnimationController } from './animationController.js';
import { createInteractionController } from './interactionController.js';

export function createAppController(ctx) {
  const root = document.getElementById('app');
  const animationController = createAnimationController(ctx);
  const routeController = createRouteController({ ...ctx, animationController });
  const interactionController = createInteractionController();
  let interactionsInitialized = false;
  const router = createRouter({ onRoute: async (route) => {
    renderLayout(root, route.path || '/home');
    await routeController.load(route);
  }});

  return {
    start() {
      root.dataset.jsEnabled = 'true';
      if (!interactionsInitialized) {
        interactionController.init(root);
        interactionsInitialized = true;
      }
      router.start();
    }
  };
}
