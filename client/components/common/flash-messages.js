// Client / Components / Common / Flash Message

import React from 'react';
import { connect } from 'react-redux';

import Message from './message';
import { flashMessageDelete } from '../../actions/flash-messages';

class FlashMessages extends React.Component {

    render() {
        const messages = this.props.messages.map((message) => {
            return <Message key={ message.id } message={ message } flashMessageDelete={ this.props.flashMessageDelete } />
        });

        return (
            <div>
                { messages }
            </div>
        );
    }
}

FlashMessages.propTypes = {
    messages: React.PropTypes.array.isRequired,
    flashMessageDelete: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        messages: state.flashMessages
    }
}

export default connect(mapStateToProps, { flashMessageDelete })(FlashMessages);