import React, { PropTypes, Component } from 'react';

import pureRender from 'pure-render-decorator';

import { WalletCard, WalletHistoryCard } from 'components';

@pureRender
export default class WrapperWalletPage extends Component {
  static propTypes = {
    walletBalance: PropTypes.number,
    transactions: PropTypes.array,

    addToWallet: PropTypes.func,
    removeFromWallet: PropTypes.func,
  };

  render() {
    const { walletBalance, transactions, addToWallet, removeFromWallet } = this.props;

    return (
      <div className="flex layout vertical center">
        <WalletCard
          walletBalance={walletBalance}
          addToWallet={addToWallet}
          removeFromWallet={removeFromWallet}
        />
        <WalletHistoryCard transactions={transactions} />
      </div>
    );
  }
}
