import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
chai.use(dirtyChai);

import { shallow } from 'enzyme';

import React from 'react';

import validate from '../validationRules';

describe('WalletTransactionForm', () => {
  it('should exists', () => {
    const WalletTransactionForm = require('../WalletTransactionForm');

    const wrapper = shallow((
      <WalletTransactionForm />
    ));

    expect(wrapper).to.have.length(1);
  });

  it('should validate the form', () => {
    const walletBalance = 5;

    let amount = undefined;
    let kind = 'test';
    let errors = validate({ amount, kind }, { walletBalance });

    expect(errors.amount).to.be.equal('Required');
    expect(errors.kind).to.be.undefined();

    amount = null;
    kind = 'test';
    errors = validate({ amount, kind }, { walletBalance });

    expect(errors.amount).to.be.equal('Required');
    expect(errors.kind).to.be.undefined();

    amount = 'test';
    kind = 'test';
    errors = validate({ amount, kind }, { walletBalance });

    expect(errors.amount).to.be.equal('Must be a number');
    expect(errors.kind).to.be.undefined();

    amount = -5;
    kind = 'test';
    errors = validate({ amount, kind }, { walletBalance });

    expect(errors.amount).to.be.equal('Must be a positive number');
    expect(errors.kind).to.be.undefined();

    amount = 5;
    kind = 'test';
    errors = validate({ amount, kind }, { walletBalance });

    expect(errors.amount).to.be.undefined();
    expect(errors.kind).to.be.equal('Required');

    amount = 5;
    kind = '+';
    errors = validate({ amount, kind }, { walletBalance });

    expect(errors.amount).to.be.undefined();
    expect(errors.kind).to.be.undefined();

    amount = 5;
    kind = '-';
    errors = validate({ amount, kind }, { walletBalance });

    expect(errors.amount).to.be.undefined();
    expect(errors.kind).to.be.undefined();

    amount = 7;
    kind = '-';
    errors = validate({ amount, kind }, { walletBalance });

    expect(errors.amount).to.be.equal(`Your amount must be less than ${walletBalance}`);
    expect(errors.kind).to.be.undefined();
  });
});
