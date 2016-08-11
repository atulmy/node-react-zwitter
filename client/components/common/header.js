// Client

import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>Zwitter</h1>

                <Link to="/">Home</Link>

                &nbsp; &bull; &nbsp;

                <Link to="/tweet">Tweet</Link>

                &nbsp; &bull; &nbsp;

                <Link to="/login">Login</Link>

                &nbsp; &bull; &nbsp;

                <Link to="/register">Register</Link>
            </header>
        );
    }
}

export default Header;