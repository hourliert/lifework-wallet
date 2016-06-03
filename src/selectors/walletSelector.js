import { createSelector } from 'reselect';

export function walletValueSelector(state) {
  return state.wallet.get('value');
}

export function transactionsSelector(state) {
  return state.wallet.get('transactions');
}

export const transactionsArraySelector = createSelector(
  transactionsSelector,
  t => t.toJS()
);
