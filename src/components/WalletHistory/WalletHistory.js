import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';

import * as Colors from 'material-ui/styles/colors';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';

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
        <List>
          <Subheader>Transactions History</Subheader>

          { !transactions.length ?
            <ListItem
              leftAvatar={
                <Avatar
                  backgroundColor={Colors.grey100}
                  color={Colors.blue300}
                  icon={<FontIcon className="material-icons">trending_flat</FontIcon>}
                />
              }
              primaryText="Your wallet is empty."
            /> :
            transactions.map(({ amount, date, kind }, i) => {
              let color;
              let icon;

              if (kind === 'add') {
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
                  primaryText={`$${amount}`}
                  secondaryText={
                    <p>
                      <span>{date.toLocaleString()}</span>
                    </p>
                  }
                  secondaryTextLines={1}
                />
              );
            })
          }
        </List>
      </div>
    );
  }
}
