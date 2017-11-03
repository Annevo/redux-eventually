import { createCounterReducer, counterInitalState } from './createCounterReducer';

describe('createCounterReducer', () => {
  it('should be a function', () => {
    expect(typeof createCounterReducer).toBe('function');
  });

  it('should return initial state for no action', () => {
    const reducer = createCounterReducer('A');
    const result = reducer();
    expect(result).toEqual(counterInitalState);
  });

  it('should return initial state for null', () => {
    const reducer = createCounterReducer('A');
    const result = reducer(null, null);
    expect(result).toEqual(counterInitalState);
  });

  it('should return initial state for false', () => {
    const reducer = createCounterReducer('A');
    const result = reducer(false, false);
    expect(result).toEqual(counterInitalState);
  });
});
