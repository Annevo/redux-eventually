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

// createEventualAction(actionType, operation)
export addTodoEventually = createEventualAction(ADD_TODO, lseq.LSEQ_INSERT);

export removeTodoEventually = createEventualAction(REMOVE_TODO, lseq.LSEQ_DELETE);

// createEventualReducer(stateConfig)
export todosReducer = createEventualReducer(lseq);

// eventualSelector returns a non-crdt representation
export todosSelector = createEventualSelector(lseq, state => state);

// Simple usage
const state = todosReducer(addTodoEventually("Buy flowers"));
const todos = todosSelector(state);
```