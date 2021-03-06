import { fromJS } from 'immutable';
import { reducerFactory } from 'retax';

import {
  UPDATE_TO_WALLET,
  SET_TRANSACTIONS,
  SET_WALLET,
} from 'constants/actions';

function getInitialState() {
  return fromJS({
    value: 0,
    transactions: [],
  });
}

export default reducerFactory(
  getInitialState(),
  {
    [SET_WALLET](state, action) {
      return state.set('value', fromJS(action.payload));
    },

    [SET_TRANSACTIONS](state, action) {
      return state.set('transactions', fromJS(action.payload));
    },

    [UPDATE_TO_WALLET](state, action) {
      const { payload: { amount, date, kind } } = action;

      return state
        .update('value', v => (kind === '+' ? (v + amount) : (v - amount)))
        .update('transactions', t => t.unshift(fromJS({ amount, date, kind })));
    },
  }
);
