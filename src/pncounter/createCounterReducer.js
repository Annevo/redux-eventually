export const counterInitalState = {
  type: 'pn-counter',
  p: {},
  n: {},
};

export const createCounterReducer = name => (state = counterInitalState, action) => {
  if (!state || !action) {
    return counterInitalState;
  }
  switch (action.type) {
    case `PN_COUNTER_${name}`:
      if (action.payload.value >= 0) {
        const value = Math.abs(action.payload.value);
        const p = Object.assign({}, state.p, {
          [action.payload.id]: state.p[action.payload.id]
            ? state.p[action.payload.id] + value
            : value,
        });
        return Object.assign({}, state, { p });
      } else if (action.payload.value < 0) {
        const value = Math.abs(action.payload.value);
        const n = Object.assign({}, state.n, {
          [action.payload.id]: state.n[action.payload.id]
            ? state.n[action.payload.id] + value
            : value,
        });
        return Object.assign({}, state, { n });
      }
      break;
    case `PN_COUNTER_MERGE_${name}`:
      if (action.payload) {
        const statePKeys = Object.keys(state.p);
        const actionPKeys = Object.keys(action.payload.p);
        const uniqePKeys = [...new Set(statePKeys.concat(actionPKeys))];
        const p = uniqePKeys
          .map(key => ({
            [key]: Math.max(state.p[key] || 0, action.payload.p[key] || 0),
          }))
          .reduce((a, b) => Object.assign({}, a, b), {});
        const stateNKeys = Object.keys(state.n);
        const actionNKeys = Object.keys(action.payload.n);
        const uniqeNKeys = [...new Set(stateNKeys.concat(actionNKeys))];
        const n = uniqeNKeys
          .map(key => ({
            [key]: Math.max(state.n[key] || 0, action.payload.n[key] || 0),
          }))
          .reduce((a, b) => Object.assign({}, a, b), {});
        return Object.assign({}, state, { p, n });
      }
      return state;
    default:
      return state;
  }
  return state;
};
