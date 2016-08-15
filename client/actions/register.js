// Client

import axios from 'axios';

export function userRegisterRequest(userData) {
    return dispatch => {
        return axios.post('/api/users', userData);
    }
}