import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';

import Paper from 'material-ui/Paper';

import WalletHistory from 'components/WalletHistory';

import styles from './styles';

@pureRender
export default class WalletHistoryCard extends Component {
  static propTypes = {
    transactions: PropTypes.array,
  };

  render() {
    const { transactions } = this.props;

    return (
      <Paper style={styles.paper}>
        <WalletHistory transactions={transactions} />
      </Paper>
    );
  }
}
