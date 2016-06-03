import { fromJS } from 'immutable';
import { reducerFactory } from 'retax';

import {
  ADD_TO_WALLET,
  REMOVE_FROM_WALLET,
  SET_TRANSATIONS,
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
      return state.set('transactions', action.payload);
    },

    [SET_TRANSATIONS](state, action) {
      return state.set('value', action.payload);
    },

    [ADD_TO_WALLET](state, action) {
      const { payload: { amount, date } } = action;

      return state
        .update('value', v => v + amount)
        .update('transactions', t => t.unshift(fromJS({ amount, date })));
    },

    [REMOVE_FROM_WALLET](state, action) {
      const { payload: { amount, date } } = action;

      return state
        .update('value', v => v - amount)
        .update('transactions', t => t.unshift(fromJS({ amount: -amount, date })));
    },
  }
);
