import counterReducer, { counterInitalState } from './counterReducer';

describe('counterReducer', () => {
  it('should be a function', () => {
    expect(typeof counterReducer).toBe('function');
  });

  it('should return initial state for no action', () => {
    const result = counterReducer();
    expect(result).toEqual(counterInitalState);
  });

  it('should return initial state for null', () => {
    const result = counterReducer(null, null);
    expect(result).toEqual(counterInitalState);
  });

  it('should return initial state for false', () => {
    const result = counterReducer(false, false);
    expect(result).toEqual(counterInitalState);
  });
});
