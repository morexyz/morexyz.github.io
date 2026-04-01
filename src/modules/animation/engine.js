import { cssEnter } from './cssDriver.js';
import { stagger } from './scheduler.js';

export function createAnimationEngine({ state }) {
  const reduce = !state.motionAllowed();
  return {
    routeEnter(root) {
      if (reduce) return root.classList.remove('is-entering');
      cssEnter(root);
    },
    revealSections(root) {
      const els = [...root.querySelectorAll('[data-reveal]')];
      if (reduce) return els.forEach((el) => el.classList.add('in'));
      stagger(els, (el) => el.classList.add('in'), 70);
    },
    animateSvgStrokes(root) {
      if (reduce) return;
      [...root.querySelectorAll('[data-stroke]')].forEach((path, i) => {
        const len = path.getTotalLength?.() ?? 100;
        path.style.strokeDasharray = `${len}`;
        path.style.strokeDashoffset = `${len}`;
        path.animate([{ strokeDashoffset: len }, { strokeDashoffset: 0 }], { duration: 900 + i * 80, fill: 'forwards', easing: 'cubic-bezier(.22,.61,.36,1)' });
      });
    }
  };
}
