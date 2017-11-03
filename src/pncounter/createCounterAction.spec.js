import { createCounterAction } from './createCounterAction';

describe('createCounterAction', () => {
  it('should be a function', () => {
    expect(typeof createCounterAction).toBe('function');
  });

  it('should return an action object', () => {
    const expected = {
      type: 'PN_COUNTER_AA',
      payload: {
        id: 'A',
        value: 1,
      },
    };
    const countA = createCounterAction('AA');
    const result = countA('A', 1);
    expect(result).toEqual(expected);
  });
});
