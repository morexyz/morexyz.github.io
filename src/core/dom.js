export const qs = (s, root = document) => root.querySelector(s);
export const qsa = (s, root = document) => [...root.querySelectorAll(s)];
export function html(strings, ...vals) {
  return strings.reduce((acc, s, i) => acc + s + (vals[i] ?? ''), '');
}
