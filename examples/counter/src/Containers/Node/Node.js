/* eslint immutable/no-this: 0 */
/* eslint immutable/no-mutation: 0 */
/* eslint no-console: 0 */
/* eslint no-mixed-operators: 0 */
/* eslint no-underscore-dangle: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createCounterReducer } from 'redux-eventually';

import Counter from '../Counter';

const onlineReducer = (state = true, action) => (action.type === 'ONLINE_TOGGLE' ? !state : state);

class Node extends React.Component {
  constructor(props) {
    super(props);
    this.sync = this.sync.bind(this);
    this.state = {
      store: null,
    };
  }
  componentWillMount() {
    const store = createStore(
      combineReducers({
        online: onlineReducer,
        pncounter: createCounterReducer('DEMO'),
      }),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
    this.props.register(this.props.name, action => store.dispatch(action));
    this.sync();
    this.setState({ store });
  }
  sync() {
    setTimeout(() => {
      const pnCounterSelector = state => state.pncounter;
      if (this.state.store.getState().online) {
        this.props.onSync(this.props.name, pnCounterSelector(this.state.store.getState()));
      }
      this.sync();
    }, Math.random() * (6000 - 2000) + 2000);
  }
  render() {
    return (
      <Provider store={this.state.store}>
        <Counter {...this.props} />
      </Provider>
    );
  }
}

Node.propTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  onSync: PropTypes.func.isRequired,
};

export default Node;
