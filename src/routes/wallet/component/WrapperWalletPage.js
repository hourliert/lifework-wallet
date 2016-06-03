import React, { PropTypes, Component } from 'react';

import pureRender from 'pure-render-decorator';

@pureRender
export default class WrapperWalletPage extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div className="flex layout vertical">
        Yay!
      </div>
    );
  }
}
