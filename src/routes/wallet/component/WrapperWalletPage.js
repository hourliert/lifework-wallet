import React, { PropTypes, Component } from 'react';

import pureRender from 'pure-render-decorator';

import { WalletCard, WalletHistory } from 'components';

@pureRender
export default class WrapperWalletPage extends Component {
  static propTypes = {
    walletValue: PropTypes.number,
    transactions: PropTypes.array,

    addToWallet: PropTypes.func,
    removeFromWallet: PropTypes.func,
  };

  render() {
    const { walletValue, transactions, addToWallet, removeFromWallet } = this.props;

    return (
      <div className="flex layout vertical">
        <WalletCard
          walletValue={walletValue}
          addToWallet={addToWallet}
          removeFromWallet={removeFromWallet}
        />
        <WalletHistory transactions={transactions} />
      </div>
    );
  }
}
