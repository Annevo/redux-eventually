import React from 'react';
import { connect } from 'react-redux';
import { createCounterAction, counterSelector } from 'redux-eventually';

const incAction = createCounterAction('DEMO');
const decAction = createCounterAction('DEMO');

const Counter = props =>
  (<div className="counter">
    <div className="counter">
      {props.value}
      <button onClick={() => props.onInc(props.name)}>+</button>
      <button onClick={() => props.onDec(props.name)}>-</button>
    </div>
   </div>);

const mapStateToProps = state => ({
  value: counterSelector(state),
});

const mapDispatchToProps = dispatch => ({
  onInc: id => dispatch(incAction(id, 1)),
  onDec: id => dispatch(decAction(id, -1)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
