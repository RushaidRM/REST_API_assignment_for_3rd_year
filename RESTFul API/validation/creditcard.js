const Validator = require('validator');
const isEmpty = require('./is-empty');



module.exports = function validateCreditcardInput(data) {
    let errors = {};
  
    data.nameOnCard = !isEmpty(data.nameOnCard) ? data.nameOnCard : '';
    data.cardNumber = !isEmpty(data.cardNumber) ? data.cardNumber : '';
    data.Amount = !isEmpty(data.Amount) ? data.Amount : '';
    data.cvcNumber = !isEmpty(data.cvcNumber) ? data.cvcNumber : '';
  
    if (!Validator.isLength(data.nameOnCard, { min: 2, max: 30 })) {
      errors.nameOnCard = 'name On Card must be between 2 and 30 characters';
    }
  
    if (Validator.isEmpty(data.nameOnCard)) {
      errors.nameOnCard = 'name field is required';
    }
  
    if (Validator.isEmpty(data.cardNumber)) {
      errors.cardNumber = 'card number field is required';
    }
  
    if (!Validator.isLength(data.cardNumber, { max: 16 })) {
      errors.cardNumber = 'card number is invalid';
    }
  
    if (Validator.isEmpty(data.Amount )) {
      errors.Amount  = 'Amount field is required';
    }
  
    if (Validator.isEmpty(data.cvcNumber)) {
      errors.cvcNumber = 'cvc field is required';
    }
    if (!Validator.isLength(data.cvcNumber, { min: 3 })) {
        errors.cvcNumber = 'cvc number is invalid';
      }

  
    return {
      errors,
      isValid: isEmpty(errors)
    };
  };