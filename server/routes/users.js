// Server / Routes / Users

import express from 'express';

import { checkUsernameAlreadyExists, createUser } from '../repositories/user';
import { validateUserRegister } from '../../shared/validations/user/register';

let routesUsers = express.Router();

routesUsers.post('/', (request, response) => {
    let responseData = {
        success: false,

        errors: {}
    };

    console.log(request.body);

    checkUsernameAlreadyExists(request.body).then(({ errors, isValid}) => {
        console.log(isValid);
        console.log(errors);

        responseData.success = isValid;
        responseData.errors = errors;

        if(isValid) {
            let { errors, isValid } = validateUserRegister(request.body);

            if(isValid) {
                const { username, password } = request.body;

                createUser(username, password)

                    .then((user) => {
                        responseData.success = true;

                        response.status(201); // created status

                        response.json(responseData);
                    })

                    .catch((error) => {
                        response.status(500);

                        responseData.errors = error;

                        response.json(responseData);
                    });
            } else {
                response.status(400);

                responseData.errors = errors;

                response.json(responseData);
            }
        } else {
            response.status(400);

            response.json(responseData);
        }
    });
});

export default routesUsers;