import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';

import Snackbar from 'material-ui/Snackbar';

import WalletBalance from 'components/WalletBalance';
import WalletTransactionForm from 'components/WalletTransactionForm';

@pureRender
export default class WalletCard extends Component {
  static propTypes = {
    walletBalance: PropTypes.number,

    addToWallet: PropTypes.func,
    removeFromWallet: PropTypes.func,
  };

  constructor(...args) {
    super(...args);
    this.state = { transacting: false, formError: '' };

    this._onBalanceTouch = ::this._onBalanceTouch;
    this._onCancelTransaction = ::this._onCancelTransaction;
    this._updateWalletBalance = ::this._updateWalletBalance;
    this._onToastClose = ::this._onToastClose;
    this._onFormError = ::this._onFormError;
  }

  _onToastClose() {
    this.setState({ formError: '' });
  }

  _onBalanceTouch() {
    this.setState({ transacting: true });
  }

  _onCancelTransaction() {
    this.setState({ transacting: false });
  }

  _onFormError(errorMessages) {
    this.setState({ formError: errorMessages.join(' ') });
  }

  _updateWalletBalance({ amount, kind }) {
    const { addToWallet, removeFromWallet } = this.props;
    const parsedAmount = parseFloat(amount);

    if (kind === 'add') {
      addToWallet(parsedAmount);
    } else if (kind === 'remove') {
      removeFromWallet(parsedAmount);
    }

    this.setState({ transacting: false });
  }

  render() {
    const { walletBalance } = this.props;
    const { transacting, formError } = this.state;

    return (
      <div className="flex layout vertical">

        { !transacting ?
          <WalletBalance
            onTouchTap={this._onBalanceTouch}
            walletBalance={walletBalance}
          /> :
          <WalletTransactionForm
            walletBalance={walletBalance}
            onSubmit={this._updateWalletBalance}
            onError={this._onFormError}
            onCancel={this._onCancelTransaction}
          />
        }

        <Snackbar
          open={!!formError}
          message={formError}
          autoHideDuration={5000}
          onRequestClose={this._onToastClose}
        />
      </div>
    );
  }
}
