/* eslint immutable/no-this: 0 */
/* eslint immutable/no-mutation: 0 */
/* eslint no-console: 0 */
import React from 'react';
import { createCounterMergeAction } from 'redux-eventually';

import Node from './Containers/Node';

import './App.css';

const syncAction = createCounterMergeAction('DEMO');

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
    this.state.online.forEach((id) => {
      if (id !== nodeId) {
        this.state[id](syncAction(pnstate));
      }
    });
  }

  registerNode(nodeId, dispatch) {
    console.log(`register node ${nodeId}`);
    const { state: { online } } = this;
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
          name="Vancouver"
          onSync={this.sync}
          register={this.registerNode}
          toggleOnline={this.toggleOnline}
        />
        <Node
          name="Stockholm"
          onSync={this.sync}
          register={this.registerNode}
          toggleOnline={this.toggleOnline}
        />
        <Node
          name="Tokyo"
          onSync={this.sync}
          register={this.registerNode}
          toggleOnline={this.toggleOnline}
        />
        <Node
          name="Oslo"
          onSync={this.sync}
          register={this.registerNode}
          toggleOnline={this.toggleOnline}
        />
      </div>
    );
  }
}

export default App;
