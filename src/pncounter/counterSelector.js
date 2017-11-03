export default (state) => {
  const pValues = Object.values(state.p);
  const nValues = Object.values(state.n);
  return pValues.reduce((a, b) => a + b, 0) - nValues.reduce((a, b) => a + b, 0);
};
