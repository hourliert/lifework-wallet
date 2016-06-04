import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import dirtyChai from 'dirty-chai';
chai.use(sinonChai);
chai.use(dirtyChai);

import * as WALLET_ACTIONS from '../wallet';

describe('Wallet Actions', () => {
  it('should add an amount to the wallet balance', () => {
    const action = WALLET_ACTIONS.updateWallet(5, '+');

    expect(action.type).to.equal('UPDATE_TO_WALLET');
    expect(action.payload.amount).to.equal(5);
    expect(action.payload.kind).to.equal('+');
    expect(action.payload.date).to.be.ok();
  });

  it('should remove an amount to the wallet balance', () => {
    const action = WALLET_ACTIONS.updateWallet(5, '-');

    expect(action.type).to.equal('UPDATE_TO_WALLET');
    expect(action.payload.amount).to.equal(5);
    expect(action.payload.kind).to.equal('-');
    expect(action.payload.date).to.be.ok();
  });

  it('should reset the wallet balance', () => {
    const action = WALLET_ACTIONS.reset();

    const spy = sinon.spy();
    action(spy);

    expect(spy).to.have.been.calledTwice();
  });
});
