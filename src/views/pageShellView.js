export function renderPageShell({ title, lead = '', body = '' }) {
  return `<article class="route-shell is-entering" aria-labelledby="page-title">
    <header class="page-head"><h1 id="page-title">${title}</h1>${lead ? `<p class="page-lead">${lead}</p>` : ''}</header>
    ${body}
  </article>`;
}
