import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';

import * as Colors from 'material-ui/styles/colors';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';

import Currency from 'components/Currency';

@pureRender
export default class WalletHistory extends Component {
  static propTypes = {
    transactions: PropTypes.array,
  };

  static defaultProps = {
    transactions: [],
  };

  _renderEmptyItem() {
    return (
      <ListItem
        leftAvatar={
          <Avatar
            backgroundColor={Colors.grey100}
            color={Colors.blue300}
            icon={<FontIcon className="material-icons">trending_flat</FontIcon>}
          />
        }
        primaryText="Your wallet is empty."
      />
    );
  }

  _renderTransactionsList() {
    const { transactions } = this.props;

    return transactions.map(({ amount, date, kind }, i) => {
      let color;
      let icon;

      if (kind === '+') {
        color = Colors.green500;
        icon = 'trending_up';
      } else {
        color = Colors.red500;
        icon = 'trending_down';
      }

      return (
        <ListItem
          key={i}
          leftAvatar={
            <Avatar
              backgroundColor={Colors.grey100}
              color={color}
              icon={
                <FontIcon className="material-icons">{icon}</FontIcon>
              }
            />
          }
          primaryText={
            <Currency value={amount} />
          }
          secondaryText={
            <p>{date.toLocaleString()}</p>
          }
          secondaryTextLines={1}
        />
      );
    });
  }

  render() {
    const { transactions } = this.props;

    return (
      <div className="flex layout vertical">
        <List>
          <Subheader>Transactions History</Subheader>

          { !transactions.length ?
            this._renderEmptyItem() :
            this._renderTransactionsList()
          }
        </List>
      </div>
    );
  }
}
