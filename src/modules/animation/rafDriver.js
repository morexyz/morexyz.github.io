export function rafAnimate({ duration = 300, draw, done }) {
  const start = performance.now();
  let id = 0;
  const tick = (t) => {
    const p = Math.min(1, (t - start) / duration);
    draw(p);
    if (p < 1) id = requestAnimationFrame(tick); else done?.();
  };
  id = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(id);
}
