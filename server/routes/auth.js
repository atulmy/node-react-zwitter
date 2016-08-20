// Server / Routes / Auth

import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import serverConfig from '../configs/server';
import User from '../models/user';

let routesAuth = express.Router();

routesAuth.post('/', (request, response) => {
    let responseData = {
        success: false,

        token: '',

        errors: {}
    };

    console.log(request.body);

    const { username, password } = request.body;

    User.query({
        where: { username }
    })
        .fetch()

        .then((user) => {
            if(user) {
                if(bcrypt.compareSync(password, user.get('password'))) {

                    responseData.token = jwt.sign({
                        id: user.get('id'),
                        username: user.get('username')
                    }, serverConfig.secret);

                    console.log(responseData.token);

                    responseData.success = true;
                } else {
                    response.status(401);

                    responseData.errors.form = 'The password you entered is invalid.';
                }
            } else {
                response.status(401);

                responseData.errors.form = 'User with such username does not exists.';
            }

            return response.json(responseData);
        });
});

export default routesAuth;