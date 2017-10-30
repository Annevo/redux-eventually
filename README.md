# redux-eventually

[![Build Status](https://semaphoreci.com/api/v1/annevo/redux-eventually/branches/master/badge.svg)](https://semaphoreci.com/annevo/redux-eventually)
[![npm](https://img.shields.io/npm/v/redux-eventually.svg)](https://www.npmjs.com/package/redux-eventually)
[![npm](https://img.shields.io/npm/dm/redux-eventually.svg)](https://www.npmjs.com/package/redux-eventually)

Eventual consistency helpers for Redux apps


## Example
```javascript
import { createEventualAction, lseq, createEventualReducer, createEventualSelector } from "redux-eventually";

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";

// createEventualAction(actionType, operation, selector)
export addTodoEventually = createEventualAction(ADD_TODO, lseq.insert, state => state.todos);

export removeTodoEventually = createEventualAction(REMOVE_TODO, lseq.delete, state => state.todos);

// createEventualReducer(stateConfig)
export reducer = createEventualReducer({
  todos: lseq
});

export todosSelector = createEventualSelector(lseq, state => state.todos);
```