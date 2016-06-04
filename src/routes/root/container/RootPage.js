import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import pureRender from 'pure-render-decorator';
import { WrapperRootPage } from 'routes/root/component';
import { RootPageSelector } from 'routes/root/selector';

import * as APP_ACTIONS from 'actions/app';
import { reset } from 'actions/wallet';

import { CURRENT_VERSION } from 'config/frontEndServer';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...APP_ACTIONS,
    goToLink: push,
    resetWallet: reset,
  }, dispatch);
}

@pureRender
@connect(RootPageSelector, mapDispatchToProps)
export default class RootPage extends Component {
  static propTypes = {
    children: PropTypes.node,

    menus: PropTypes.array,
    appBarDepth: PropTypes.number,
    leftNavOpen: PropTypes.bool,

    resetWallet: PropTypes.func,
    closeLeftNav: PropTypes.func,
    toggleLeftNav: PropTypes.func,
    goToLink: PropTypes.func,
  };

  constructor(...args) {
    super(...args);

    this._onLinkTouch = ::this._onLinkTouch;
  }

  _onLinkTouch(menuItem) {
    const { goToLink, resetWallet } = this.props;

    if (menuItem.internal) {
      goToLink(menuItem.url);
    } else if (menuItem.external) {
      window.open(menuItem.url, '_blank');
    } else {
      if (menuItem.actionName === 'RESET') {
        resetWallet();
      }
    }
  }

  render() {
    const { children } = this.props;
    const { leftNavOpen, closeLeftNav, toggleLeftNav } = this.props;
    const { menus } = this.props;
    const { appBarDepth } = this.props;

    return (
      <WrapperRootPage
        version={CURRENT_VERSION}
        appBarDepth={appBarDepth}
        menus={menus}
        leftNavOpen={leftNavOpen}
        closeLeftNav={closeLeftNav}
        toggleLeftNav={toggleLeftNav}
        goToLink={this._onLinkTouch}
      >
        {children}
      </WrapperRootPage>
    );
  }
}
