// Server / Repositories / User

import bcrypt from 'bcrypt';
import isEmpty from 'lodash/isEmpty';

import serverConfig from '../configs/server';
import User from '../models/user';

/*
 * Check if username already exists in 'users' table
 * Accepts: Object { username }
 * Returns: Promise
 */
export function checkUsernameAlreadyExists(data) {
    let errors = {};

    return User.query({
        where: { username: data.username }
    })
        .fetch()

        .then((user) => {
            // User found in database
            if(user) {
                if (user.get('username') === data.username) {
                    errors.username = 'This username already exists, please choose different one.';
                }
            }

            return {
                errors,
                isValid: isEmpty(errors)
            }
        });
}

/*
 * Create a new user record in 'users' table
 * Accepts: String username, String password
 * Returns: Promise
 */
export function createUser(username, password) {
    // Encrypt password
    const passwordEncrypted = bcrypt.hashSync(password, serverConfig.saltRounds);

    return User.forge(
        {
            username,
            password: passwordEncrypted
        },

        { hasTimestamps: true }
    ).save();
}


/*
 * Get user's all tweets
 * Accepts: String username
 * Returns: Promise
 */
export function getAllTweetsByUsername(username) {
    return User.where({ username: username })
        .fetchAll({
            withRelated: ['tweets']
        });
}