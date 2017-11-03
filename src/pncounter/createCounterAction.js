export const createCounterAction = name => (id, value) => ({
  type: `PN_COUNTER_${name}`,
  payload: {
    id,
    value,
  },
});

// createMergeAction merges another pn-counter with the current one.
export const createCounterMergeAction = name => ({ p, n }) => ({
  type: `PN_COUNTER_MERGE_${name}`,
  payload: {
    p,
    n,
  },
});
