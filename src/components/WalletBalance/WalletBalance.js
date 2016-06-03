import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';

@pureRender
export default class WalletBalance extends Component {
  static propTypes = {
    walletBalance: PropTypes.number,

    onTouchTap: PropTypes.func,
  };

  render() {
    const { walletBalance, onTouchTap } = this.props;

    return (
      <div className="flex layout vertical" onTouchTap={onTouchTap}>
        Current wallet balance: ${walletBalance}.

        Tap here to add or remove money.
      </div>
    );
  }
}
