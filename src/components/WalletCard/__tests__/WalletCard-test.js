import chai, { expect } from 'chai';
import sinon from 'sinon';
import dirtyChai from 'dirty-chai';
import sinonChai from 'sinon-chai';
chai.use(dirtyChai);
chai.use(sinonChai);

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

    expect(wrapper.find('WalletBalance')).to.have.length(1);
    expect(wrapper.find('WalletTransactionForm')).to.have.length(0);
    expect(wrapper.find('Snackbar')).to.have.length(1);

    wrapper.setState({ transacting: true });

    expect(wrapper.find('WalletBalance')).to.have.length(0);
  });

  it('should update the wallet balance', () => {
    const WalletCard = require('../WalletCard');
    const onNewTransaction = sinon.spy();

    const wrapper = shallow((
      <WalletCard
        onNewTransaction={onNewTransaction}
      />
    ));

    wrapper.instance()._updateWalletBalance({
      amount: '5',
      kind: '+',
    });

    expect(onNewTransaction).to.have.been.calledWith(5, '+');
  });
});
