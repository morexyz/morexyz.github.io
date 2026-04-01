import { renderNav } from './navView.js';
import { renderFooter } from './footerView.js';

export function renderLayout(root, activePath) {
  root.innerHTML = `<div class="site-shell">
      <header class="site-header"><div class="site-header-inner"><div class="brand">On-Device Adaptive Audio Intelligence</div>${renderNav(activePath)}</div></header>
      <main id="main-content" class="page-container" tabindex="-1"></main>
      <footer class="site-footer">${renderFooter()}</footer>
    </div>`;
}
