import { createStructuredSelector } from 'reselect';

import { walletValueSelector, transactionsArraySelector } from 'selectors';

export default createStructuredSelector({
  walletValue: walletValueSelector,
  transactions: transactionsArraySelector,
});
