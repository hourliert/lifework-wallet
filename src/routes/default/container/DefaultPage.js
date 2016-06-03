import React, { Component } from 'react';

import pureRender from 'pure-render-decorator';
import { WrapperDefaultPage } from 'routes/default/component';

@pureRender
export default class DefaultPage extends Component {
  render() {
    return (
      <WrapperDefaultPage />
    );
  }
}
