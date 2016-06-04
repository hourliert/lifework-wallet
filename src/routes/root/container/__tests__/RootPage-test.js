import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
chai.use(dirtyChai);

import { shallow } from 'enzyme';

import React from 'react';

describe.skip('RootPage', () => {
  it('should exists', () => {
    const RootPage = require('../RootPage');

    const wrapper = shallow((
      <RootPage />
    ));

    expect(wrapper).to.have.length(1);
  });

  it('should render inner components', () => {
    const RootPage = require('../RootPage');

    const wrapper = shallow((
      <RootPage />
    ));

    expect(wrapper.find('WrapperRootPage')).to.have.length(1);
  });
});
