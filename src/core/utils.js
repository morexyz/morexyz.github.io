export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
export const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
