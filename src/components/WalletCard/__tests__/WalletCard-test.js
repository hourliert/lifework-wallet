import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
chai.use(dirtyChai);

import { shallow } from 'enzyme';

import React from 'react';

describe('WalletCard', () => {
  it('should exists', () => {
    const WalletCard = require('../WalletCard');

    const wrapper = shallow((
      <WalletCard />
    ));

    expect(wrapper).to.have.length(1);
  });

  it('should render inner components', () => {
    const WalletCard = require('../WalletCard');

    const wrapper = shallow((
      <WalletCard />
    ));

    expect(wrapper.find('div')).to.have.length(1);
  });
});
