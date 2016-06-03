import chai, { expect } from 'chai';
import mockery from 'mockery';
import dirtyChai from 'dirty-chai';
chai.use(dirtyChai);

import { shallow } from 'enzyme';

import React from 'react';

describe('WalletPage', () => {
  beforeEach(() => {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true,
    });
    mockery.registerMock(
      'decorators',
      require('helpers/test/decoratorsMock')
    );
    mockery.registerMock(
      'components/WrapperWalletPage ',
      require('helpers/test/componentsMock').WrapperWalletPage
    );
    mockery.registerMock(
      'react-redux',
      require('helpers/test/reactReduxMock')
    );
  });

  afterEach(() => {
    mockery.deregisterMock('decorators');
    mockery.deregisterMock('components/WrapperWalletPage');
    mockery.deregisterMock('react-redux');
    mockery.disable();
  });

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
