export function createAnimationState(debug = false) {
  return { debug, activeRaf: new Set() };
}
