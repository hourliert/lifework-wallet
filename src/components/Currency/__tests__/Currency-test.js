import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
chai.use(dirtyChai);

import { shallow } from 'enzyme';

import React from 'react';

describe('Currency', () => {
  it('should exists', () => {
    const Currency = require('../Currency');

    const wrapper = shallow((
      <Currency />
    ));

    expect(wrapper).to.have.length(1);
  });

  it('should render inner components', () => {
    const Currency = require('../Currency');

    const wrapper = shallow((
      <Currency />
    ));

    expect(wrapper.find('div')).to.have.length(1);
  });
});
