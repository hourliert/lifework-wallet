import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

import pureRender from 'pure-render-decorator';
import LinksList from 'components/LinksList';

@pureRender
export default class LeftMenuDrawer extends Component {
  static propTypes = {
    open: PropTypes.bool,
    menuItems: PropTypes.array.isRequired,
    onClose: PropTypes.func.isRequired,
    onLinkTouch: PropTypes.func,
  };

  static defaultProps = {
    menuItems: [],
  };

  constructor(...args) {
    super(...args);

    this._onRequestChange = ::this._onRequestChange;
    this._onLinkTouch = ::this._onLinkTouch;
  }

  _onRequestChange(request) {
    if (!request) {
      this.props.onClose();
    }
  }

  _onLinkTouch(url) {
    const { onClose, onLinkTouch } = this.props;

    onClose();
    if (onLinkTouch) onLinkTouch(url);
  }

  render() {
    const { open, menuItems } = this.props;

    return (
      <Drawer
        open={open}
        docked={false}
        onRequestChange={this._onRequestChange}
      >
        <AppBar title="LifeworkWallet" showMenuIconButton={false} />
        <LinksList
          links={menuItems}
          onLinkTouch={this._onLinkTouch}
        />
      </Drawer>
    );
  }
}
