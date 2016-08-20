// Client

import axios from 'axios';
import jwt from 'jsonwebtoken';

import { setAuthorizationToken, setCurrentUser } from '../common/auth';

export function tweetRequest(tweet) {
    return dispatch => {
        return axios.post('/api/auth', tweet);
    }
}