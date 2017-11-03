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
      console.log(state, action, state.p[action.payload.id]);
    default:
      return state;
  }
  return state;
};
