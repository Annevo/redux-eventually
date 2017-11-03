import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createCounterReducer } from '../../../../../src/pncounter/createCounterReducer';

import Counter from '../Counter';

export default (name) => {
  const store = createStore(createCounterReducer(name));
  return props =>
    (<Provider store={store}>
      <Counter />
     </Provider>);
};
