// Server / Repositories / Tweet

import isEmpty from 'lodash/isEmpty';

import sharedConfig from '../../shared/configs/shared';
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
export function getAllTweets(page = 1) {
    const pagingLimit = sharedConfig.pagination;

    console.log(pagingLimit);

    return Tweet.query((qb) => {
        qb.orderBy('created_at','DESC');

        qb.limit(pagingLimit);

        qb.offset((page - 1) * pagingLimit);
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

/*
 * Get list of all tweets
 * Returns: Promise
 */
export function getTweetCount() {
    return Tweet.count();
}