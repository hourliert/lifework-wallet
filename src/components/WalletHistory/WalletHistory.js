import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';

@pureRender
export default class WalletHistory extends Component {
  static propTypes = {
    transactions: PropTypes.array,
  };

  static defaultProps = {
    transactions: [],
  };

  render() {
    const { transactions } = this.props;

    return (
      <div className="flex layout vertical">
        Wallet history
        {
          transactions.map(({ amount, date }, i) => (
            <div key={i}>
              Amount: {amount},
              Date: {date.toString()}
            </div>
          ))
        }
      </div>
    );
  }
}
