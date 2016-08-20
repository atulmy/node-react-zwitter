// Client / Components / Common / Message

import React from 'react';
import classnames from 'classnames';

class Message extends React.Component {

    closeMessage() {
        this.props.flashMessageDelete(this.props.message.id);
    }

    render() {
        const  { id, type, text } = this.props.message;

        return (
            <div className={
                    classnames('alert', {
                        'alert-success': type === 'success',
                        'alert-danger': type === 'error'
                    })
                }
            >
                { text }

                <button onClick={ this.closeMessage.bind(this) } className="close">&times;</button>
            </div>
        );
    }
}

Message.propTypes = {
    message: React.PropTypes.object.isRequired,
    flashMessageDelete: React.PropTypes.func.isRequired
};

export default Message;