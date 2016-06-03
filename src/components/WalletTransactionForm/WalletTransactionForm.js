import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import { reduxForm } from 'redux-form';

import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import FlatButton from 'material-ui/FlatButton';

import validate from './validationRules';

@pureRender
@reduxForm({
  form: 'transaction',
  fields: ['amount', 'kind'],
  validate,
})
export default class WalletTransactionForm extends Component {
  static propTypes = {
    walletBalance: PropTypes.number,

    errors: PropTypes.object,
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func,
    initializeForm: PropTypes.func,
    resetForm: PropTypes.func,
    submitting: PropTypes.bool,

    onError: PropTypes.func,
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
  };

  static defaultProps = {
    fields: {},
  };

  constructor(...args) {
    super(...args);

    this._onSubmit = ::this._onSubmit;
  }

  componentWillMount() {
    const { initializeForm } = this.props;

    initializeForm({
      kind: 'add',
    });
  }

  _onSubmit(...args) {
    const { handleSubmit, errors, onError } = this.props;

    if (Object.keys(errors).length) {
      onError(Object.entries(errors).map(([k, v]) => `${k}: ${v}`));
    }

    handleSubmit(...args);
  }

  render() {
    const { fields: { amount, kind } } = this.props;
    const { resetForm, submitting, onCancel } = this.props;

    return (
      <form
        className="flex layout vertical"
        onSubmit={this._onSubmit}
        onReset={resetForm}
      >
        <TextField
          id="transaction-input-1"
          type="number"
          hintText="Amount of the transaction in $"
          errorText={amount.error}
          {...amount}
        />

        <RadioButtonGroup
          name="kind"
          defaultSelected="add"
          {...kind}
        >
          <RadioButton
            value="add"
            label="Add"
          />
          <RadioButton
            value="remove"
            label="Remove"
          />
        </RadioButtonGroup>

        <FlatButton
          label="Submit"
          disabled={submitting}
          type="submit"
        />

        <FlatButton
          label="Cancel"
          disabled={submitting}
          onTouchTap={onCancel}
        />
      </form>
    );
  }
}
