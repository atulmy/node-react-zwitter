// Client / Components / Pages / Tweet

import React from 'react';
import { connect } from 'react-redux';

import { validateTweet } from '../../../shared/validations/tweets';
import { tweetRequest } from '../../actions/pages/tweet';
import { flashMessageAdd } from '../../actions/flash-messages';
import InputTextarea from '../common/inputs/textarea';

class TweetPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tweet: '',
            errors: {},
            isLoading: false
        };
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    isValid() {
        const { errors, isValid } = validateTweet(this.state);

        if(!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    onSubmit(event) {
        event.preventDefault();

        if(this.isValid()) {
            this.setState({errors: {}, isLoading: true});

            this.props.tweetRequest(this.state).then(
                (response) => {
                    console.log(response);

                    this.props.flashMessageAdd({
                        type: 'success',
                        text: 'Tweet sent!'
                    });

                    this.setState({isLoading: false, tweet: ''});

                    this.context.router.push('/');
                },

                (error) => {
                    console.log(error.response.data);

                    this.setState({errors: error.response.data.errors, isLoading: false});
                }
            );
        }
    }

    render() {
        return (
            <section>
                <h2>Tweet to the world</h2>

                <form onSubmit={ this.onSubmit.bind(this) }>
                    <InputTextarea
                        error={ this.state.errors.tweet }
                        value={ this.state.tweet }
                        onChange={ this.onChange.bind(this) }
                        name="tweet"
                        id="tweet"
                        label="Tweet"
                        placeholder="What's on your mind?"
                        rows="3"
                    />

                    <button type="submit" disabled={ this.state.isLoading } className="btn btn-default">Submit</button>
                </form>
            </section>
        );
    }
}

TweetPage.propTypes = {
    tweetRequest: React.PropTypes.func.isRequired,
    flashMessageAdd: React.PropTypes.func.isRequired
};

TweetPage.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default connect((state) => { return {} }, { tweetRequest, flashMessageAdd })(TweetPage);