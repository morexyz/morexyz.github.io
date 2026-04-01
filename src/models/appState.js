export function createAppState({ flags, capabilities }) {
  let state = { route: '/home', flags, capabilities };
  return {
    get: () => state,
    setRoute: (route) => { state = { ...state, route }; },
    motionAllowed: () => !state.capabilities.reducedMotion
  };
}
