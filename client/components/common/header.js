// Client / Components / Common / Header

import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { flashMessageAdd } from '../../actions/flash-messages';
import { userLogout } from '../../actions/user/logout';

class Header extends React.Component {
    logout(event) {
        event.preventDefault();

        this.props.userLogout();

        this.props.flashMessageAdd({
            type: 'success',
            text: 'You have logged out successfully.'
        });
    }

    render() {
        const { isAuthenticated } = this.props.auth;

        const userLinks = (
            <span>
                &nbsp; &bull; &nbsp;

                <Link to="/tweet">Tweet</Link>

                &nbsp; &bull; &nbsp;

                <a href="#" onClick={ this.logout.bind(this) }>Logout</a>
            </span>
        );

        const guestLinks = (
            <span>
                &nbsp; &bull; &nbsp;

                <Link to="/login">Login</Link>

                &nbsp; &bull; &nbsp;

                <Link to="/register">Register</Link>
            </span>
        );

        return (
            <header>
                <h1>Zwitter</h1>

                <Link to="/">Home</Link>

                { isAuthenticated ? userLinks : guestLinks }
            </header>
        );
    }
}

Header.propTypes = {
    auth: React.PropTypes.object.isRequired,
    userLogout: React.PropTypes.func.isRequired,
    flashMessageAdd: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { userLogout, flashMessageAdd })(Header);