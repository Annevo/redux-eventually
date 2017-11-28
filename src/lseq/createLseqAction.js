export const createLseqInsertAction = name => (id, value) => ({
  type: `LSEQ_INSERT_${name}`,
  payload: {
    id,
    value,
  },
});

export const createLseqRemoveAction = name => (id, value) => ({
  type: `LSEQ_REMOVE_${name}`,
  payload: {
    id,
    value,
  },
});
