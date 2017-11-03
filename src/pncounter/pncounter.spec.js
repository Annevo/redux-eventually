import { createStore } from 'redux';
import reducer from './counterReducer';
import counterAction from './createCounterAction';
import counterSelector from './counterSelectors';

describe('pncounter', () => {
  it('should increment on a single store', () => {
    const store = createStore(reducer);
    store.dispatch(counterAction('a', 1));
    store.dispatch(counterAction('a', 1));
    store.dispatch(counterAction('b', 1));
    store.dispatch(counterAction('b', 1));
    const result = counterSelector(store.getState());
    const expected = 4;
    expect(result).toEqual(expected);
  });
});

describe('pncounter', () => {
  it('should decrement on a single store', () => {
    const store = createStore(reducer);
    store.dispatch(counterAction('a', -1));
    store.dispatch(counterAction('a', -1));
    store.dispatch(counterAction('b', -1));
    store.dispatch(counterAction('b', -1));
    const result = counterSelector(store.getState());
    const expected = -4;
    expect(result).toEqual(expected);
  });
});
