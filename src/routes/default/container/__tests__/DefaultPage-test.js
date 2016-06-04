import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
chai.use(dirtyChai);

import { shallow } from 'enzyme';

import React from 'react';

describe('DefaultPage', () => {
  it('should exists', () => {
    const DefaultPage = require('../DefaultPage');

    const wrapper = shallow((
      <DefaultPage />
    ));

    expect(wrapper).to.have.length(1);
  });

  it('should render inner components', () => {
    const DefaultPage = require('../DefaultPage');

    const wrapper = shallow((
      <DefaultPage />
    ));

    expect(wrapper.find('WrapperDefaultPage')).to.have.length(1);
  });
});
