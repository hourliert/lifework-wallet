import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import { reduxForm } from 'redux-form';

import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import FlatButton from 'material-ui/FlatButton';

@pureRender
@reduxForm({
  form: 'transaction',
  fields: ['amount', 'kind']
})
export default class WalletTransaction extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func,
    resetForm: PropTypes.func,

    onSubmit: PropTypes.func,
  };

  static defaultProps = {
    fields: {},
  };


  render() {
    const { fields: { amount, kind } } = this.props;
    const { handleSubmit, resetForm } = this.props;

    return (
      <form
        className="flex layout vertical"
        onSubmit={handleSubmit}
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
          type="submit"
        />
      </form>
    );
  }
}
