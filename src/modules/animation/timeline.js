export function createTimeline() {
  const steps = [];
  return {
    add(fn, delay = 0) { steps.push({ fn, delay }); return this; },
    async play() { for (const s of steps) { if (s.delay) await new Promise(r => setTimeout(r, s.delay)); await s.fn(); } }
  };
}
