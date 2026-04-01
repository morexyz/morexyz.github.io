export function detectCapabilities() {
  return {
    waapi: typeof Element !== 'undefined' && 'animate' in Element.prototype,
    worker: typeof Worker !== 'undefined',
    pointer: typeof window !== 'undefined' && 'PointerEvent' in window,
    reducedMotion: typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  };
}
