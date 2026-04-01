import { DEFAULT_ROUTE, ROUTES } from './config.js';

export function createRouter({ onRoute }) {
  function parseHash() {
    const raw = (location.hash || `#${DEFAULT_ROUTE}`).replace('#', '');
    return raw.startsWith('/') ? raw : `/${raw}`;
  }
  async function handle() {
    const path = parseHash();
    const route = Object.values(ROUTES).find((r) => r.path === path);
    if (!route) return onRoute({ path, notFound: true });
    onRoute({ ...route, notFound: false });
  }
  return {
    start() {
      window.addEventListener('hashchange', handle);
      if (!location.hash) location.hash = `#${DEFAULT_ROUTE}`;
      handle();
    },
    go(path) { location.hash = `#${path}`; }
  };
}
