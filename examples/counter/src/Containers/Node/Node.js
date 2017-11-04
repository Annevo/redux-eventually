import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createCounterReducer } from 'redux-eventually';

import Counter from '../Counter';

const onlineReducer = (state = true, action) => (action.type === 'ONLINE_TOGGLE' ? !state : state);

class Node extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store: null,
    };
  }
  componentWillMount() {
    console.log('Node componentWillMount');
    /* eslint-disable no-underscore-dangle */
    const store = createStore(
      combineReducers({
        online: onlineReducer,
        pncounter: createCounterReducer('DEMO'),
      }),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
    /* eslint-enable */
    this.props.register(this.props.name, action => store.dispatch(action));
    const componentThis = this;
    function sync() {
      setTimeout(() => {
        const pnCounterSelector = state => state.pncounter;
        if (store.getState().online) {
          componentThis.props.onSync(componentThis.props.name, pnCounterSelector(store.getState()));
        }
        sync();
      }, Math.random() * (3000 - 2000) + 2000);
    }
    sync();

    this.setState({ store });
  }
  render() {
    return (
      <Provider store={this.state.store}>
        <Counter {...this.props} />
      </Provider>
    );
  }
}

export default Node;
