import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
chai.use(dirtyChai);

import { shallow } from 'enzyme';

import React from 'react';

describe('WalletBalance', () => {
  it('should exists', () => {
    const WalletBalance = require('../WalletBalance');

    const wrapper = shallow((
      <WalletBalance />
    ));

    expect(wrapper).to.have.length(1);
  });

  it('should render inner components', () => {
    const WalletBalance = require('../WalletBalance');

    const wrapper = shallow((
      <WalletBalance />
    ));

    expect(wrapper.find('div')).to.have.length(1);
  });
});
