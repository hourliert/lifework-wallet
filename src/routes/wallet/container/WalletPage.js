import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import pureRender from 'pure-render-decorator';
import { WrapperWalletPage } from 'routes/wallet/component';
import { WalletPageSelector } from 'routes/wallet/selector';

import * as WALLET_ACTIONS from 'actions/wallet';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...WALLET_ACTIONS,
  }, dispatch);
}

@pureRender
@connect(WalletPageSelector, mapDispatchToProps)
export default class WalletPage extends Component {
  static propTypes = {
    walletBalance: PropTypes.number,
    transactions: PropTypes.array,

    updateWallet: PropTypes.func,
  };

  render() {
    const { walletBalance, transactions, updateWallet } = this.props;

    return (
      <WrapperWalletPage
        walletBalance={walletBalance}
        transactions={transactions}
        onNewTransaction={updateWallet}
      />
    );
  }
}
