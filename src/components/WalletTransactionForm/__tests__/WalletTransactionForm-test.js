import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
chai.use(dirtyChai);

import { shallow } from 'enzyme';

import React from 'react';

describe('WalletTransactionForm', () => {
  it('should exists', () => {
    const WalletTransactionForm = require('../WalletTransactionForm');

    const wrapper = shallow((
      <WalletTransactionForm />
    ));

    expect(wrapper).to.have.length(1);
  });

  it('should render inner components', () => {
    const WalletTransactionForm = require('../WalletTransactionForm');

    const wrapper = shallow((
      <WalletTransactionForm />
    ));

    expect(wrapper.find('div')).to.have.length(1);
  });
});
