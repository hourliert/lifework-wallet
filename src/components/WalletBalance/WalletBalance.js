import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';

@pureRender
export default class WalletBalance extends Component {
  static propTypes = {
    walletValue: PropTypes.number,

    onTouchTap: PropTypes.func,
  };

  render() {
    const { walletValue, onTouchTap } = this.props;

    return (
      <div className="flex layout vertical" onTouchTap={onTouchTap}>
        Current wallet balance: ${walletValue}.

        Tap here to add or remove money.
      </div>
    );
  }
}
