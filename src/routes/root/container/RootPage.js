import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { annotator } from 'retax-components';

import pureRender from 'pure-render-decorator';
import { WrapperRootPage } from 'routes/root/component';
import { RootPageSelector } from 'routes/root/selector';

import AppActionsCreator from 'actions/app';
import ErrorsActionsCreator from 'actions/errors';

import { CURRENT_VERSION } from 'config/frontEndServer';

function mapDispatchToProps(dispatch, props) {
  const { appActions, errorsActions } = props;

  return bindActionCreators({
    ...appActions.export(),
    ...errorsActions.export(),
    goToLink: push,
  }, dispatch);
}

@pureRender
@annotator.RetaxComponent({
  actionsCreators: {
    appActions: AppActionsCreator,
    errorsActions: ErrorsActionsCreator,
  },
})
@connect(RootPageSelector, mapDispatchToProps)
export default class RootPage extends Component {
  static propTypes = {
    children: PropTypes.node,

    menus: PropTypes.array,
    appBarDepth: PropTypes.number,
    leftNavOpen: PropTypes.bool,
    errors: PropTypes.object,

    closeLeftNav: PropTypes.func,
    toggleLeftNav: PropTypes.func,
    markAllErrorsAsViewed: PropTypes.func,
    clearErrors: PropTypes.func,
    goToLink: PropTypes.func,
  };

  render() {
    const { children } = this.props;
    const { errors, markAllErrorsAsViewed, clearErrors } = this.props;
    const { leftNavOpen, closeLeftNav, toggleLeftNav, goToLink } = this.props;
    const { menus } = this.props;
    const { appBarDepth } = this.props;

    return (
      <WrapperRootPage
        version={CURRENT_VERSION}
        appBarDepth={appBarDepth}
        menus={menus}
        errors={errors}
        markErrorsAsViewed={markAllErrorsAsViewed}
        clearErrors={clearErrors}
        leftNavOpen={leftNavOpen}
        closeLeftNav={closeLeftNav}
        toggleLeftNav={toggleLeftNav}
        goToLink={goToLink}
      >
        {children}
      </WrapperRootPage>
    );
  }
}
