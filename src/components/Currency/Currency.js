import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';

import styles from './styles';

@pureRender
export default class Currency extends Component {
  static propTypes = {
    currency: PropTypes.string,
    value: PropTypes.number,
  };

  static defaultProps = {
    currency: '$',
  };

  render() {
    const { currency, value } = this.props;

    return (
      <div style={styles.container}>{currency}{value}</div>
    );
  }
}
