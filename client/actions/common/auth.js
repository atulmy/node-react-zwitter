// Client / Actions / Common / Auth

import axios from 'axios';

import { USER_CURRENT_SET } from '../types';

export function setAuthorizationToken(token) {
    if(token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

export function setCurrentUser(user) {
    return {
        type: USER_CURRENT_SET,
        user
    };
}