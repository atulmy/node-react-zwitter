// Client / Components / Pages / Tweet Item

import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

class TweetItem extends React.Component {
    render() {
        const  { id, tweet, user, created_at } = this.props.tweet;

        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    { tweet }
                </div>

                <div className="panel-footer">
                    {
                        (user && user.username) ? <span><Link to={`/profile/${ user.username }`}>{ user.username }</Link> &bull; </span> : ''
                    }

                    { moment(created_at).fromNow() }
                </div>
            </div>
        );
    }
}

TweetItem.propTypes = {
    tweet: React.PropTypes.object.isRequired
};

export default TweetItem;