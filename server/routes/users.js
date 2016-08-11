// Server

import express from 'express';

import validateRegister from '../../shared/validations/register';

let routesUsers = express.Router();

routesUsers.post('/', (request, response) => {
    let responseData = {
        success: false,

        errors: {}
    };

    console.log(request.body);

    let validateResult = validateRegister(request.body);

    responseData.success = validateResult.isValid;
    responseData.errors = validateResult.errors;

    if(!validateResult.isValid) {
        response.status(400);
    }

    return response.json(responseData);
});

export default routesUsers;