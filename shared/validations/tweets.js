// Shared / Validations / Tweets

import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export function validateTweet(data) {
    let errors = {};

    if(Validator.isNull(data.tweet)) {
        errors.tweet = 'Tweet cannot be empty.';
    } else if(!Validator.isLength(data.tweet, {min: 10})) {
        errors.tweet = 'Tweet should be atleast 10 characters long.';
    } else if(!Validator.isLength(data.tweet, {max: 160})) {
        errors.tweet = 'Tweet should be less than 160 characters long.';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}