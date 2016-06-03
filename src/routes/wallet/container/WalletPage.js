import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import pureRender from 'pure-render-decorator';
import { WrapperWalletPage } from 'routes/wallet/component';
import { WalletPageSelector } from 'routes/wallet/selector';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch);
}

@pureRender
@connect(WalletPageSelector, mapDispatchToProps)
export default class WalletPage extends Component {
  static propTypes = {

  };

  render() {
    return (
      <WrapperWalletPage

      />
    );
  }
}
