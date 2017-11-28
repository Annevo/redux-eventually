export const lseqInitalState = {
  type: 'pn-counter',
  p: {},
  n: {},
};

export const createLseqReducer = name => (state = lseqInitalState, action) => {
  if (!state || !action) {
    return lseqInitalState;
  }
  switch (action.type) {
    case `LSEQ_INSERT_${name}`:
      if (action.payload) {
        return state;
      }
      break;
    case `LSEQ_REMOVE_${name}`:
      if (action.payload) {
        return state;
      }
      break;
    case `LSEQ_MERGE_${name}`:
      if (action.payload) {
        return state;
      }
      break;
    default:
      return state;
  }
  return state;
};
