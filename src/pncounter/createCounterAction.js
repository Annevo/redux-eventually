export const PN_COUNTER = 'PN_COUNTER';

export default (id, value) => ({
  type: PN_COUNTER,
  payload: {
    id,
    value,
  },
});
