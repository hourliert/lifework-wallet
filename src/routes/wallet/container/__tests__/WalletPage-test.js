import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
chai.use(dirtyChai);

import { shallow } from 'enzyme';

import React from 'react';

describe.skip('WalletPage', () => {
  it('should exists', () => {
    const WalletPage = require('../WalletPage');

    const wrapper = shallow((
      <WalletPage />
    ));

    expect(wrapper).to.have.length(1);
  });

  it('should render inner components', () => {
    const WalletPage = require('../WalletPage');

    const wrapper = shallow((
      <WalletPage />
    ));

    expect(wrapper.find('WrapperWalletPage')).to.have.length(1);
  });
});
