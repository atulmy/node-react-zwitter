// Client

import axios from 'axios';

export function tweetRequest(tweet) {
    return dispatch => {
        return axios.post('/api/tweets', tweet);
    }
}

export function tweetGetRequest(page) {
    return dispatch => {
        return axios.get(`/api/tweets/${ page }`);
    }
}

export function tweetGetByUsernameRequest(username) {
    return dispatch => {
        return axios.get(`/api/tweets/user/${ username }`);
    }
}
