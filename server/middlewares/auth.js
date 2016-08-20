// Server / Middlewares / Auth

import jwt from 'jsonwebtoken';

import serverConfig from '../configs/server';
import User from '../models/user';

export default (request, response, next) => {
    const authorizationHeader = request.headers['authorization'];
    let token;

    if(authorizationHeader) {
        token = authorizationHeader.split(' ')[1];
    }

    if(token) {
        jwt.verify(token, serverConfig.secret, (error, decoded) => {
            if(error) {
                response.status(403).json({ errors: 'Authentication failed. Token is invalid.' });
            } else {
                User.query({
                    where: { id: decoded.id },

                    select: [ 'id', 'username' ]
                })
                    .fetch()

                    .then((user) => {
                        if(!user) {
                            response.status(404).json({ errors: 'Authentication failed. User not found.' });
                        } else {
                            request.currentUser = user;

                            next();
                        }
                    });
            }
        });
    } else {
        response.status(403).json({ errors: 'Authentication failed. No token provided.' });
    }
}