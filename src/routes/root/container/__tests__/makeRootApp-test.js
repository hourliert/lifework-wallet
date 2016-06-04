import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
chai.use(dirtyChai);

import { shallow } from 'enzyme';

import React from 'react';

describe.skip('Make RootApp', () => {
  it('should exists', () => {
    const makeRootApp = require('../makeRootApp');

    const RootApp = makeRootApp('all', () => (<div>Hey</div>));

    const wrapper = shallow((
      <RootApp />
    ));

    expect(wrapper).to.have.length(1);
  });

  it('should render the RootApp components', () => {
    const makeRootApp = require('../makeRootApp');

    const AppPage = () => (<div>Hey</div>);
    AppPage.displayName = 'AppPage';

    const RootApp = makeRootApp('all', AppPage);

    const wrapper = shallow((
      <RootApp />
    ));

    expect(wrapper.find('Style')).to.have.length(1);
    expect(wrapper.find('StyleRoot')).to.have.length(1);
    expect(wrapper.find('AppPage')).to.have.length(1);
  });
});
