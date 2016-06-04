import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
chai.use(dirtyChai);

import { shallow } from 'enzyme';

import React from 'react';

describe('WrapperDefaultPage', () => {
  it('should exists', () => {
    const WrapperDefaultPage = require('../WrapperDefaultPage');

    const wrapper = shallow((
      <WrapperDefaultPage />
    ));

    expect(wrapper).to.have.length(1);
  });

  it('should render inner components', () => {
    const WrapperDefaultPage = require('../WrapperDefaultPage');

    const wrapper = shallow((
      <WrapperDefaultPage />
    ));

    expect(wrapper.find('div')).to.have.length(1);
  });
});
