# redux-eventually

[![Build Status](https://semaphoreci.com/api/v1/annevo/redux-eventually/branches/master/badge.svg)](https://semaphoreci.com/annevo/redux-eventually)
[![npm](https://img.shields.io/npm/v/redux-eventually.svg)](https://www.npmjs.com/package/redux-eventually)
[![npm](https://img.shields.io/npm/dm/redux-eventually.svg)](https://www.npmjs.com/package/redux-eventually)

Redux-eventually facilitates using CRDTs inside of the redux store. This library consists of factory
methods for easier usage with these otherwise quite cumbersome data-structures.

## Example Counter

```javascript
import { createCounterAction, createCounterReducer, createCounterSelector } from "redux-eventually";

const COUNTER = "COUNTER";

export countAction = createCounterAction(COUNTER);
/*
{
  type: COUNTER,
  payload: {
    id: "adam",
    value: 1
  }
}
*/

export counterReducer = createCounterReducer();
/*
{
  type: "pn-counter",
  p: {
    adam: 1,
    gustav: 0
  },
  n: {
    adam: 1,
    gustav: 1
  }
}
*/

export counterSelector = createCounterSelector();

let store = createStore(todosReducer);
const state = todosReducer(countAction("adam", 1));
const todos = todosSelector(state);
```
