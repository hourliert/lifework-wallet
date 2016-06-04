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

    expect(wrapper.find('List')).to.have.length(1);
    expect(wrapper.find('Subheader')).to.have.length(1);
    expect(wrapper.find('ListItem')).to.have.length(1);
  });

  it('should render inner components when they are transactions', () => {
    const WalletHistory = require('../WalletHistory');

    const wrapper = shallow((
      <WalletHistory
        transactions={[
          { amount: 5, kind: '+', date: new Date() },
          { amount: 15, kind: '+', date: new Date() },
          { amount: 3, kind: '-', date: new Date() },
        ]}
      />
    ));

    expect(wrapper.find('List')).to.have.length(1);
    expect(wrapper.find('Subheader')).to.have.length(1);
    expect(wrapper.find('ListItem')).to.have.length(3);
  });
});
