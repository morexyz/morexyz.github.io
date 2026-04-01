import { ROUTES } from '../core/config.js';

export function renderNav(activePath) {
  const links = Object.values(ROUTES)
    .map((r) => `<li><a class="nav-link ${r.path === activePath ? 'is-active' : ''}" href="#${r.path}" ${r.path === activePath ? 'aria-current="page"' : ''}>${r.label}</a></li>`)
    .join('');

  return `
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav">
      <span class="sr-only">Toggle navigation menu</span>
      <span aria-hidden="true">☰</span>
    </button>
    <nav id="primary-nav" class="site-nav" aria-label="Primary" hidden>
      <ul class="nav-list">${links}</ul>
    </nav>
  `;
}
