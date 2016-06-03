export default (values, props) => {
  const errors = {};
  const { amount, kind } = values;
  const { walletBalance } = props;

  const transactionAmount = parseFloat(amount);

  if (amount === undefined || amount === null) {
    errors.amount = 'Required';
  } else if (isNaN(transactionAmount)) {
    errors.amount = 'Must be a number';
  } else if (transactionAmount <= 0) {
    errors.amount = 'Must be a positive number';
  } else {
    if (!['add', 'remove'].includes(kind)) {
      errors.kind = 'Required';
    } else if (kind === 'remove') {
      if (walletBalance - transactionAmount < 0) {
        errors.amount = `Your amount must be less than ${walletBalance}`;
      }
    }
  }

  return errors;
};
