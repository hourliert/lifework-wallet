import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
chai.use(dirtyChai);

import { shallow } from 'enzyme';

import React from 'react';

describe('WalletHistory', () => {
  it('should exists', () => {
    const WalletHistory = require('../WalletHistory');

    const wrapper = shallow((
      <WalletHistory />
    ));

    expect(wrapper).to.have.length(1);
  });

  it('should render inner components', () => {
    const WalletHistory = require('../WalletHistory');

    const wrapper = shallow((
      <WalletHistory />
    ));

    expect(wrapper.find('div')).to.have.length(1);
  });
});
