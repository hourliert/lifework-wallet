import { actionsCreatorFactory } from 'retax';

import {
  UPDATE_TO_WALLET,
  SET_TRANSACTIONS,
  SET_WALLET,
} from 'constants/actions';

export const updateWallet = actionsCreatorFactory(
  UPDATE_TO_WALLET,
  (amount, kind) => ({
    amount,
    kind,
    date: new Date(),
  })
);

export const setTransactions = actionsCreatorFactory(SET_TRANSACTIONS);
export const setWallet = actionsCreatorFactory(SET_WALLET);

export function reset() {
  return dispatch => {
    dispatch(setTransactions([]));
    dispatch(setWallet(0));
  };
}
