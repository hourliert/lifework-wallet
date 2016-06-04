import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
chai.use(dirtyChai);

import { shallow } from 'enzyme';

import React from 'react';

describe('WrapperWalletPage', () => {
  it('should exists', () => {
    const WrapperWalletPage = require('../WrapperWalletPage');

    const wrapper = shallow((
      <WrapperWalletPage />
    ));

    expect(wrapper).to.have.length(1);
  });

  it('should render inner components', () => {
    const WrapperWalletPage = require('../WrapperWalletPage');

    const wrapper = shallow((
      <WrapperWalletPage />
    ));

    expect(wrapper.find('div')).to.have.length(1);
  });
});
