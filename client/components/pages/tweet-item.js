// Client / Components / Pages / Tweet Item

import React from 'react';

class TweetItem extends React.Component {
    render() {
        const  { id, tweet, user_id, created_at } = this.props.tweet;

        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    { tweet }
                </div>

                <div className="panel-footer">{ user_id } &bull; { created_at }</div>
            </div>
        );
    }
}

TweetItem.propTypes = {
    tweet: React.PropTypes.object.isRequired
};

export default TweetItem;