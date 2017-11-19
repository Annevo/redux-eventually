import { createLseqInsertAction, createLseqRemoveAction } from './createLseqAction';

describe('createLseqAction', () => {
  describe('createLseqInsertAction', () => {
    it('should be a function', () => {
      expect(typeof createLseqInsertAction).toBe('function');
    });

    it('should return an action object', () => {
      const expected = {
        type: 'LSEQ_INSERT_AA',
        payload: {
          id: 'A',
          value: 1,
        },
      };
      const countA = createLseqInsertAction('AA');
      const result = countA('A', 1);
      expect(result).toEqual(expected);
    });
  });

  describe('createLseqRemoveAction', () => {
    it('should be a function', () => {
      expect(typeof createLseqRemoveAction).toBe('function');
    });

    it('should return an action object', () => {
      const expected = {
        type: 'LSEQ_REMOVE_AA',
        payload: {
          id: 'A',
          value: 1,
        },
      };
      const countA = createLseqRemoveAction('AA');
      const result = countA('A', 1);
      expect(result).toEqual(expected);
    });
  });
});
