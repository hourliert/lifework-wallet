import { createStructuredSelector } from 'reselect';

import { walletBalanceSelector, transactionsArraySelector } from 'selectors';

export default createStructuredSelector({
  walletBalance: walletBalanceSelector,
  transactions: transactionsArraySelector,
});
