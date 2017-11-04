import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createCounterReducer, createCounterMergeAction } from 'redux-eventually';

import Node from './Containers/Node';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: [],
    };
    this.sync = this.sync.bind(this);
    this.registerNode = this.registerNode.bind(this);
    this.toggleOnline = this.toggleOnline.bind(this);
  }

  sync(nodeId, pnstate) {
    // console.log('Broadcast', pnstate);
    this.state.online.map((id) => {
      if (id !== nodeId) {
        console.log(createCounterMergeAction('DEMO')(pnstate));
        this.state[id](createCounterMergeAction('DEMO')(pnstate));
      }
    });
  }

  registerNode(nodeId, dispatch) {
    console.log(`register node ${nodeId}`);

    const online = this.state.online;
    online.push(nodeId);
    this.setState(Object.assign({}, { [nodeId]: dispatch, online }));
  }

  toggleOnline(nodeId) {
    if (this.state.online.indexOf(nodeId) >= 0) {
      console.log(`node ${nodeId} has come online`);
      this.setState({
        online: this.state.online.filter(id => nodeId !== id),
      });
    } else {
      console.log(`node ${nodeId} has gone offline`);
      this.setState({
        online: this.state.online.concat(nodeId),
      });
    }
  }

  render() {
    return (
      <div
        className="App"
        style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}
      >
        <Node
          name="Adam"
          onSync={this.sync}
          register={this.registerNode}
          toggleOnline={this.toggleOnline}
        />
        <Node
          name="Gustav"
          onSync={this.sync}
          register={this.registerNode}
          toggleOnline={this.toggleOnline}
        />
        <Node
          name="Lisa"
          onSync={this.sync}
          register={this.registerNode}
          toggleOnline={this.toggleOnline}
        />
      </div>
    );
  }
}

export default App;
