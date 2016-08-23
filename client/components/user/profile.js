// Client / Components / User / Profile

import React from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import { tweetGetByUsernameRequest } from '../../actions/pages/tweet';
import TweetItem from '../pages/tweet-item';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: this.props.params.username,
            tweets: [],
            noTweets: false,
            errors: {},
            isLoading: false
        };

        console.log();
    }

    componentWillMount() {
        this.setState({ errors: {}, isLoading: true });

        this.props.tweetGetByUsernameRequest(this.state.username).then(
            (response) => {
                console.log(response.data);

                this.setState({ isLoading: false });

                if(!isEmpty(response.data.user[0].tweets)) {
                    this.setState({ tweets: response.data.user[0].tweets });
                } else {
                    this.setState({ noTweets: true });
                }
            },

            (error) => {
                console.log(error.response.data);

                this.setState({ errors: error.response.data.errors, isLoading: false });
            }
        );
    }

    render() {
        const tweets = this.state.tweets.map((tweet) => {
            return <TweetItem key={ tweet.id } tweet={ tweet } />
        });

        const pleaseWaitMessage = <p>Please wait...</p>;

        const noTweetsMessage = <p>{ this.state.username } has not tweeted yet.</p>;

        return (
            <section>
                <h2>Tweets by { this.state.username }</h2>

                { this.state.isLoading ? pleaseWaitMessage : tweets }

                { this.state.noTweets ? noTweetsMessage : '' }
            </section>
        );
    }
}

UserProfile.propTypes = {
    tweetGetByUsernameRequest: React.PropTypes.func.isRequired
};

export default connect((state) => { return {} }, { tweetGetByUsernameRequest })(UserProfile);