import { createStore, combineReducers } from 'redux';
import { createCounterReducer } from './createCounterReducer';
import { createCounterAction, createCounterMergeAction } from './createCounterAction';
import counterSelector from './counterSelector';

describe('pncounter', () => {
  it('should increment on a single store', () => {
    const reducer = createCounterReducer('A');
    const counterAction = createCounterAction('A');
    const store = createStore(reducer);
    store.dispatch(counterAction('a', 1));
    store.dispatch(counterAction('a', 1));
    store.dispatch(counterAction('b', 1));
    store.dispatch(counterAction('b', 1));
    const result = counterSelector(store.getState());
    const expected = 4;
    expect(result).toEqual(expected);
  });

  it('should decrement on a single store', () => {
    const reducer = createCounterReducer('A');
    const counterAction = createCounterAction('A');
    const store = createStore(reducer);
    store.dispatch(counterAction('a', -1));
    store.dispatch(counterAction('a', -1));
    store.dispatch(counterAction('b', -1));
    store.dispatch(counterAction('b', -1));
    const result = counterSelector(store.getState());
    const expected = -4;
    expect(result).toEqual(expected);
  });

  it('should increment on two reducers in same store', () => {
    const savingsAction = createCounterAction('SAVINGS');
    const checkAction = createCounterAction('CHECK');

    const savingsReducer = createCounterReducer('SAVINGS');
    const checkReducer = createCounterReducer('CHECK');

    const store = createStore(combineReducers({ savings: savingsReducer, check: checkReducer }));
    store.dispatch(savingsAction('a', 1));
    store.dispatch(savingsAction('a', 1));
    store.dispatch(savingsAction('b', 1));
    store.dispatch(savingsAction('b', 1));

    store.dispatch(checkAction('a', 1));
    store.dispatch(checkAction('a', 1));
    store.dispatch(checkAction('b', 1));
    store.dispatch(checkAction('b', 1));

    const resultSavings = counterSelector(store.getState().savings);
    const resultCheck = counterSelector(store.getState().check);

    const expected = 4;

    expect(resultSavings).toEqual(expected);
    expect(resultCheck).toEqual(expected);
  });

  // TODO: Add decrement for above test

  it('should increment and merge on two stores', () => {
    const savingsAction = createCounterAction('SAVINGS');
    const savingsMergeAction = createCounterMergeAction('SAVINGS');
    const savingsReducer = createCounterReducer('SAVINGS');

    const storeA = createStore(savingsReducer);
    storeA.dispatch(savingsAction('a', 10));
    storeA.dispatch(savingsAction('b', 4));
    const merge = savingsMergeAction(storeA.getState());

    const storeB = createStore(savingsReducer);
    storeB.dispatch(savingsAction('a', 5));
    storeB.dispatch(savingsAction('b', 11));
    storeB.dispatch(merge);

    const result = counterSelector(storeB.getState());
    const expected = 21;
    expect(result).toEqual(expected);
  });
});
