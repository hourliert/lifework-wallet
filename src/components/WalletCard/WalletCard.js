import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';

import Paper from 'material-ui/Paper';
import Snackbar from 'material-ui/Snackbar';

import WalletBalance from 'components/WalletBalance';
import WalletTransactionForm from 'components/WalletTransactionForm';

import styles from './styles';

@pureRender
export default class WalletCard extends Component {
  static propTypes = {
    walletBalance: PropTypes.number,

    onNewTransaction: PropTypes.func,
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
    const { onNewTransaction } = this.props;
    const parsedAmount = parseFloat(amount);

    onNewTransaction(parsedAmount, kind);

    this.setState({ transacting: false });
  }

  render() {
    const { walletBalance } = this.props;
    const { transacting, formError } = this.state;

    return (
      <Paper style={styles.paper}>
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
      </Paper>
    );
  }
}
