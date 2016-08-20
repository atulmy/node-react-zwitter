// Shared / Validations / User / Register

import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export function validateUserRegister(data) {
    let errors = {};

    if(Validator.isNull(data.username)) {
        errors.username = 'Username cannot be empty.';
    } else if(!Validator.isLength(data.username, {min: 6})) {
        errors.username = 'Username should be atleast 6 characters long.';
    }

    if(Validator.isNull(data.password)) {
        errors.password = 'Password cannot be empty.';
    } else if(!Validator.isLength(data.password, {min: 6})) {
        errors.password = 'Password should be atleast 6 characters long.';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}