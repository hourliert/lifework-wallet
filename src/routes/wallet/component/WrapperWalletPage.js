import React, { PropTypes, Component } from 'react';

import pureRender from 'pure-render-decorator';

import { WalletCard, WalletHistoryCard } from 'components';

@pureRender
export default class WrapperWalletPage extends Component {
  static propTypes = {
    walletBalance: PropTypes.number,
    transactions: PropTypes.array,

    onNewTransaction: PropTypes.func,
  };

  render() {
    const { walletBalance, transactions, onNewTransaction } = this.props;

    return (
      <div className="flex layout vertical center">
        <WalletCard
          walletBalance={walletBalance}
          onNewTransaction={onNewTransaction}
        />
        <WalletHistoryCard transactions={transactions} />
      </div>
    );
  }
}
