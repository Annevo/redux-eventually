import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createCounterReducer } from 'redux-eventually';

import Node from './Containers/Node';

import './App.css';

class App extends React.Component {
  onBroadcast = action => {
    console.log('Broadcast', action);
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Node name="Adam" broadcast={this.onBroadcast} />
        <Node name="Gustav" broadcast={this.onBroadcast} />
        <Node name="Lisa" broadcast={this.onBroadcast} />
      </div>
    );
  }
}

export default App;
