// Client / Components / Common / Footer

import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                &copy; 2016 <Link to="/">Zwitter</Link>
            </footer>
        );
    }
}

export default Footer;