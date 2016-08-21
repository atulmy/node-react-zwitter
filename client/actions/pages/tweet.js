// Client

import axios from 'axios';

export function tweetRequest(tweet) {
    return dispatch => {
        return axios.post('/api/tweets', tweet);
    }
}

export function tweetGetRequest(tweet) {
    return dispatch => {
        return axios.get('/api/tweets', tweet);
    }
}

export function tweetGetByUsernameRequest(username) {
    return dispatch => {
        return axios.get(`/api/tweets/${ username }`);
    }
}
