import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
chai.use(dirtyChai);

import { shallow } from 'enzyme';

import React from 'react';

describe('WalletTransaction', () => {
  it('should exists', () => {
    const WalletTransaction = require('../WalletTransaction');

    const wrapper = shallow((
      <WalletTransaction />
    ));

    expect(wrapper).to.have.length(1);
  });

  it('should render inner components', () => {
    const WalletTransaction = require('../WalletTransaction');

    const wrapper = shallow((
      <WalletTransaction />
    ));

    expect(wrapper.find('div')).to.have.length(1);
  });
});
