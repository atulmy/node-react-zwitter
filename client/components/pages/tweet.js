// Client / Components / Pages / Tweet

import React from 'react';
import { connect } from 'react-redux';

import { validateUserLogin } from '../../../shared/validations/user/login';
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

    onSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <section>
                <h2>Tweet to the world</h2>

                { this.state.errors.form && <div className="alert alert-danger">{ this.state.errors.form }</div> }

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