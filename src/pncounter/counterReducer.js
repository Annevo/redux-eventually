import { PN_COUNTER } from './createCounterAction';

export const counterInitalState = {
  type: 'pn-counter',
  p: {},
  n: {},
};

export default (state = counterInitalState, action) => {
  if (!state || !action) {
    return counterInitalState;
  }
  switch (action.type) {
    case PN_COUNTER:
      console.log(state, action, state.p[action.payload.id]);
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
    default:
      return state;
  }
  return state;
};
