import { qs } from '../core/dom.js';

export function createRouteController({ state, animationController }) {
  return {
    async load(route) {
      state.setRoute(route.path || '/404');
      const main = qs('#main-content');
      if (route.notFound) {
        main.innerHTML = `<article class='route-shell panel'><h1>Route Not Found</h1><p>The requested route was not found. Returning to <a href='#/home'>home</a>.</p></article>`;
        return;
      }
      const mod = await import(route.module);
      main.innerHTML = mod.render();
      const shell = main.querySelector('.route-shell');
      animationController.onPageMounted(shell || main);
      main.focus();
    }
  };
}
