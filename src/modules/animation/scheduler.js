export function stagger(elements, fn, gap = 55) {
  elements.forEach((el, i) => setTimeout(() => fn(el, i), i * gap));
}
