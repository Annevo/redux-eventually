/* eslint immutable/no-this: 0 */
/* eslint immutable/no-mutation: 0 */

import { connect } from 'react-redux';
import { createCounterAction, counterSelector } from 'redux-eventually';

import Counter from '../../Components/Counter';

const incAction = createCounterAction('DEMO');
const decAction = createCounterAction('DEMO');

const mapStateToProps = state => ({
  online: state.online,
  value: counterSelector(state.pncounter),
});

const mapDispatchToProps = dispatch => ({
  onInc: id => dispatch(incAction(id, 1)),
  onDec: id => dispatch(decAction(id, -1)),
  onSync: () => dispatch({ type: 'ONLINE_TOGGLE' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
