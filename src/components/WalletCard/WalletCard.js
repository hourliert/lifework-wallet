import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';

import WalletBalance from 'components/WalletBalance';
import WalletTransaction from 'components/WalletTransaction';

@pureRender
export default class WalletCard extends Component {
  static propTypes = {
    walletValue: PropTypes.number,

    addToWallet: PropTypes.func,
    removeFromWallet: PropTypes.func,
  };

  constructor(...args) {
    super(...args);
    this.state = { transacting: false };

    this._onBalanceTouch = ::this._onBalanceTouch;
    this._updateWalletBalance = ::this._updateWalletBalance;
  }

  _onBalanceTouch() {
    this.setState({ transacting: true });
  }

  _updateWalletBalance({ amount, kind }) {
    const { addToWallet, removeFromWallet } = this.props;

    if (kind === 'add' || kind === undefined) {
      addToWallet(parseFloat(amount));
    } else {
      removeFromWallet(parseFloat(amount));
    }

    this.setState({ transacting: false });
  }

  render() {
    const { walletValue } = this.props;
    const { transacting } = this.state;

    return (
      <div className="flex layout vertical">

        { !transacting ?
          <WalletBalance
            onTouchTap={this._onBalanceTouch}
            walletValue={walletValue}
          /> :
          <WalletTransaction
            onSubmit={this._updateWalletBalance}
          />
        }
      </div>
    );
  }
}
