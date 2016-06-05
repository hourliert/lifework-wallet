import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';

import Currency from 'components/Currency';

import styles from './styles';

@pureRender
export default class WalletBalance extends Component {
  static propTypes = {
    walletBalance: PropTypes.number,

    onTouchTap: PropTypes.func,
  };

  render() {
    const { walletBalance, onTouchTap } = this.props;

    return (
      <div
        className="flex layout vertical around-justified"
        onTouchTap={onTouchTap}
        style={styles.container}
      >
        <span style={styles.balance}>Current balance: <Currency value={walletBalance} /></span>

        <span style={styles.edit}>Tap anywhere to edit.</span>
      </div>
    );
  }
}
