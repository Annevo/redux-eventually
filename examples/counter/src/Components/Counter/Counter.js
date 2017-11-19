/* eslint immutable/no-mutation: 0 */

import React from 'react';
import PropTypes from 'prop-types';

const Counter = props => (
  <div
    className="counter"
    style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      width: '100%',
      padding: '50px',
      boxShadow: `0 0 100px ${props.online ? '#23d160' : '#ff3860'} inset`,
      border: `3px solid ${props.online ? '#23d160' : '#ff3860'}`,
      borderRadius: '30px',
      margin: '5px',
    }}
  >
    <span style={{ textAlign: 'center', fontSize: '1.5em' }}>{props.name}</span>
    <span style={{ fontSize: '12em', textAlign: 'center' }}>{props.value}</span>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
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
);

Counter.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  online: PropTypes.bool.isRequired,
  onInc: PropTypes.func.isRequired,
  onDec: PropTypes.func.isRequired,
  onSync: PropTypes.func.isRequired,
  toggleOnline: PropTypes.func.isRequired,
};

export default Counter;
