// Server / Repositories / Tweet

import isEmpty from 'lodash/isEmpty';

import Tweet from '../models/tweet';

/*
 * Create a new user record in 'tweet' table
 * Accepts: String username, String password
 * Returns: Promise
 */
export function createTweet(userId, tweet) {
    if(!isEmpty(tweet) && !isEmpty(tweet)) {
        return Tweet.forge(
            {
                user_id: userId,
                tweet
            },

            { hasTimestamps: true }
        ).save();
    }

    return false;
}

/*
 * Get list of all tweets
 * Returns: Promise
 */
export function getAllTweets() {
    return Tweet.query((qb) => {
        qb.orderBy('created_at','DESC');
    })
        .fetchAll({
            withRelated: [
                {
                    'user': function(qb) {
                        qb.column('id', 'username');
                    }
                }
            ]
        });
}