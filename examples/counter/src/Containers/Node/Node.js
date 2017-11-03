import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createCounterReducer } from 'redux-eventually';

import Counter from '../Counter';

export default (props) => {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
    createCounterReducer('DEMO'),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  /* eslint-enable */
  store.subscribe(props.broadcast);
  return (
    <Provider store={store}>
      <Counter name={props.name} />
    </Provider>
  );
};
