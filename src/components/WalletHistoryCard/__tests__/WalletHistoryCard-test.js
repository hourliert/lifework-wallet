import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
chai.use(dirtyChai);

import { shallow } from 'enzyme';

import React from 'react';

describe('WalletHistoryCard', () => {
  it('should exists', () => {
    const WalletHistoryCard = require('../WalletHistoryCard');

    const wrapper = shallow((
      <WalletHistoryCard />
    ));

    expect(wrapper).to.have.length(1);
  });

  it('should render inner components', () => {
    const WalletHistoryCard = require('../WalletHistoryCard');

    const wrapper = shallow((
      <WalletHistoryCard />
    ));

    expect(wrapper.find('div')).to.have.length(1);
  });
});
