import { ROUTES } from '../core/config.js';

export function renderNav(activePath) {
  const links = Object.values(ROUTES).map((r) => `<li><a class="nav-link" href="#${r.path}" ${r.path===activePath?'aria-current="page"':''}>${r.label}</a></li>`).join('');
  return `<nav aria-label="Primary"><ul class="nav-list">${links}</ul></nav>`;
}
