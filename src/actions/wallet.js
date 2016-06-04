import { actionsCreatorFactory } from 'retax';

import {
  ADD_TO_WALLET,
  REMOVE_FROM_WALLET,
  SET_TRANSATIONS,
  SET_WALLET,
} from 'constants/actions';

export const addToWallet = actionsCreatorFactory(
  ADD_TO_WALLET,
  amount => ({
    amount,
    date: new Date(),
  })
);
export const removeFromWallet = actionsCreatorFactory(
  REMOVE_FROM_WALLET,
  amount => ({
    amount,
    date: new Date(),
  })
);

export const setTransactions = actionsCreatorFactory(SET_TRANSATIONS);
export const setWallet = actionsCreatorFactory(SET_WALLET);

export function reset() {
  return dispatch => {
    dispatch(setTransactions([]));
    dispatch(setWallet(0));
  };
}
