// Client / Components / Common / Pagination

import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

import sharedConfig from '../../../shared/configs/shared';

class Pagination extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current: this.props.current,
            count: this.props.count,
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({ count: parseInt(newProps.count) });
    }


    links() {
        var rows = [];

        for (var i=1; i <= Math.ceil(this.state.count / sharedConfig.pagination); i++) {
            // className={ classnames({'active': this.state.current == i}) } @temp check for active
            rows.push(<li key={ i }><Link to={'/'+i }>{ i }</Link></li>);
        }

        return (<ul className="pagination">{rows}</ul>);
    }

    render() {
        return (
            <nav aria-label="Page navigation">
                { this.links() }
            </nav>
        );
    }
}

Pagination.propTypes = {
    current: React.PropTypes.number.isRequired,
    count: React.PropTypes.number.isRequired
};

export default Pagination;