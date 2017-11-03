import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = editorState => this.setState({ editorState });
  }
  render() {
    return (
      <div
        style={{
          boxSizing: 'border-box',
          padding: '1%',
          height: '100%',
          width: '100%',
          backgroundColor: '#eee',
          border: '1px solid #ccc'
        }}
      >
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
        {this.props.count}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state
  };
};

export default connect(mapStateToProps)(App);
