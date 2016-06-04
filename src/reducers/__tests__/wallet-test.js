import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
chai.use(dirtyChai);

import { fromJS } from 'immutable';

import walletReducer from '../wallet';
import {
  UPDATE_TO_WALLET,
  SET_TRANSACTIONS,
  SET_WALLET,
} from 'constants/actions';

function getInitialState(amount = 0) {
  return fromJS({
    value: amount,
    transactions: [],
  });
}

describe('Wallet Reducer', () => {
  it('should exists', () => {
    expect(walletReducer).to.be.ok();
  });

  it('should set the wallet balance the left nav', () => {
    let state = getInitialState();

    const action = {
      type: SET_WALLET,
      payload: 5,
    };

    expect(state.get('value')).to.be.equal(0);
    state = walletReducer(state, action);
    expect(state.get('value')).to.be.equal(5);
  });

  it('should set transactions', () => {
    let state = getInitialState();
    const aTransaction = { amount: 5, kind: '+', date: new Date() };

    const action = {
      type: SET_TRANSACTIONS,
      payload: [aTransaction],
    };

    expect(state.get('transactions').toJS()).to.be.deep.equal([]);
    state = walletReducer(state, action);
    expect(state.get('transactions').toJS()).to.be.deep.equal([aTransaction]);
  });

  it('should add an amount to the wallet', () => {
    let state = getInitialState();
    const aTransaction = { amount: 5, kind: '+', date: new Date() };

    const action = {
      type: UPDATE_TO_WALLET,
      payload: aTransaction,
    };

    expect(state.get('value')).to.be.equal(0);
    expect(state.get('transactions').toJS()).to.be.deep.equal([]);
    state = walletReducer(state, action);
    expect(state.get('value')).to.be.equal(5);
    expect(state.get('transactions').toJS()).to.be.deep.equal([aTransaction]);
  });

  it('should remove an amount to the wallet', () => {
    let state = getInitialState(5);
    const aTransaction = { amount: 5, kind: '-', date: new Date() };

    const action = {
      type: UPDATE_TO_WALLET,
      payload: aTransaction,
    };

    expect(state.get('value')).to.be.equal(5);
    expect(state.get('transactions').toJS()).to.be.deep.equal([]);
    state = walletReducer(state, action);
    expect(state.get('value')).to.be.equal(0);
    expect(state.get('transactions').toJS()).to.be.deep.equal([aTransaction]);
  });
});
