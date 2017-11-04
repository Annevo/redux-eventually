import React from 'react';
import { connect } from 'react-redux';
import { createCounterAction, createCounterMergeAction, counterSelector } from 'redux-eventually';

const incAction = createCounterAction('DEMO');
const decAction = createCounterAction('DEMO');
const syncAction = createCounterMergeAction('DEMO');

const Counter = props =>
  (<div className="counter">
    <div
      className="counter"
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '50px',
        backgroundColor: props.online ? 'green' : 'red',
      }}
    >
      {props.name}
      <span style={{ fontSize: '12em', textAlign: 'center' }}>
        {props.value}
      </span>
      <div
        style={{
          display: 'flex',
        }}
      >
        <button style={{ fontSize: '1.5em' }} onClick={() => props.onInc(props.name)}>
          +
        </button>
        <button style={{ fontSize: '1.5em' }} onClick={() => props.onDec(props.name)}>
          -
        </button>
        <button
          style={{ fontSize: '1.5em' }}
          onClick={() => {
            props.toggleOnline(props.name);
            props.onSync();
          }}
        >
          Go {props.online ? 'Offline' : 'Online'}
        </button>
      </div>
    </div>
   </div>);

const mapStateToProps = state => ({
  online: state.online,
  value: counterSelector(state.pncounter),
});

const mapDispatchToProps = dispatch => ({
  onInc: id => dispatch(incAction(id, 1)),
  onDec: id => dispatch(decAction(id, -1)),
  onSync: id => dispatch({ type: 'ONLINE_TOGGLE' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
