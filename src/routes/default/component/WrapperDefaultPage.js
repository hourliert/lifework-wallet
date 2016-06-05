import React, { Component } from 'react';

import pureRender from 'pure-render-decorator';

@pureRender
export default class WrapperDefaultPage extends Component {
  render() {
    return (
      <div className="flex layout vertical center-center">
        <h1>Whoops! 404!</h1>
        <p>These are <em>not</em> the droids you are looking for! 🤖🤖🤖</p>
      </div>
    );
  }
}
