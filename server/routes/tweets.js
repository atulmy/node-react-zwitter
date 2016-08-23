// Server / Routes / Tweets

import express from 'express';

import middlewareAuthenticate from '../middlewares/auth';
import { createTweet, getAllTweets, getTweetCount } from '../repositories/tweet';
import { getAllTweetsByUsername } from '../repositories/user';
import { validateTweet } from '../../shared/validations/tweets';

let routesTweets = express.Router();

routesTweets.post('/', middlewareAuthenticate, (request, response) => {
    let responseData = {
        success: false,

        errors: {}
    };

    console.log(request.body);

    let { errors, isValid } = validateTweet(request.body);

    if(isValid) {
        const { tweet } = request.body;

        createTweet(request.currentUser.id, tweet)

            .then((tweetSaved) => {
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
});


routesTweets.get('/:page?', (request, response) => {

    let responseData = {
        success: false,

        tweets: [],

        tweetCount: 0,

        errors: {}
    };

    const page = request.params.page ? request.params.page : 1;

    getAllTweets(page)

        .then((tweets) => {
            responseData.success = true;
            responseData.tweets = tweets;

            getTweetCount().then((count) => {
                console.log(count);

                responseData.tweetCount = count;

                response.json(responseData);
            });
        })

        .catch((error) => {
            response.status(500);

            responseData.errors = error;

            response.json(responseData);
        });
});

routesTweets.get('/user/:username', (request, response) => {
    let responseData = {
        success: false,

        user: [],

        errors: {}
    };

    const { username } = request.params;

    getAllTweetsByUsername(username)

        .then((user) => {
            responseData.success = true;
            responseData.user = user;

            response.json(responseData);
        })

        .catch((error) => {
            response.status(500);

            responseData.errors = error;

            response.json(responseData);
        });
});

export default routesTweets;