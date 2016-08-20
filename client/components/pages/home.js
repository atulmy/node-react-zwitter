// Client / Components / Pages / Home

import React from 'react';
import { connect } from 'react-redux';

import { tweetGetRequest } from '../../actions/pages/tweet';
import TweetItem from './tweet-item';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tweets: [],
            errors: {},
            isLoading: false
        }
    }

    componentWillMount() {
        this.props.tweetGetRequest(this.state).then(
            (response) => {
                console.log(response);

                this.setState({ isLoading: false, tweets: response.data.tweets });
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

        return (
            <section>
                <h2>Tweets from all around the world</h2>

                { tweets }
            </section>
        );
    }
}

HomePage.propTypes = {
    tweetGetRequest: React.PropTypes.func.isRequired
};

export default connect((state) => { return {} }, { tweetGetRequest })(HomePage);