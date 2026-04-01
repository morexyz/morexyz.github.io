import { FLAGS } from '../core/flags.js';
import { detectCapabilities } from '../core/capabilities.js';
import { createEventBus } from '../core/eventBus.js';
import { createAppState } from '../models/appState.js';
import { createAnimationState } from '../models/animationState.js';
import { createAppController } from '../controllers/appController.js';

export function createApp() {
  const capabilities = detectCapabilities();
  const eventBus = createEventBus();
  const state = createAppState({ flags: FLAGS, capabilities });
  const animationState = createAnimationState(FLAGS.debugAnimations);
  return createAppController({ capabilities, eventBus, state, animationState, flags: FLAGS });
}
