const Validator = require('validator');
const isEmpty = require('./is-empty');


module.exports = function validateSearchInput(data) {
    let errors = {};
  
    data.from = !isEmpty(data.from) ? data.from : '';
    data.to = !isEmpty(data.to) ? data.to : '';
    data.quantity= !isEmpty(data.quantity) ? data.quantity : '';
    
    if (Validator.isEmpty(data.from)) {
      errors.name = 'from field is required';
    }
  
    if (Validator.isEmpty(data.to)) {
      errors.to = 'destination to field is required';
    }
  
    if (Validator.isEmpty(data.quantity)) {
        errors.name = 'quantity field is required';
      }

    if (!Validator.isLength(data.quantity, { max: 5 })) {
      errors.cardNumber = 'quantity number length  is invalid';
    }
  
    return {
      errors,
      isValid: isEmpty(errors)
    };
  };