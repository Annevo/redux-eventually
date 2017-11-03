import React from 'react';
import { connect } from 'redux';
import counterSelector from '../../../../../src/pncounter/counterSelector';

const Counter = props =>
  (<div className="counter">
    <div className="counter">
      {props.value}
    </div>
   </div>);

const mapStateToProps = state => ({
  value: counterSelector(state),
});

export default connect(mapStateToProps)(Counter);
