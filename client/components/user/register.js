import React from 'react';
import { connect } from 'react-redux';
import { userRegisterRequest } from './register.actions';

class UserRegister extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit(event) {
        event.preventDefault();

        console.log(this.state);

        this.props.userRegisterRequest(this.state);
    }

    render() {
        return (
            <section>
                <h2>Register</h2>

                <form onSubmit={ this.onSubmit.bind(this) }>
                    <div className="form-group">
                        <label htmlFor="user-username">Username</label>

                        <input
                            type="text"
                            value={ this.state.username }
                            onChange={ this.onChange.bind(this) }
                            name="username"
                            className="form-control"
                            id="user-username"
                            placeholder="Eg: jonsnow"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="user-password">Password</label>

                        <input
                            type="password"
                            value={ this.state.password }
                            onChange={ this.onChange.bind(this) }
                            name="password"
                            className="form-control"
                            id="user-password"
                            placeholder="Password"
                        />
                    </div>

                    <button type="submit" className="btn btn-default">Register</button>
                </form>
            </section>
        );
    }
}

UserRegister.propTypes = {
    userRegisterRequest: React.PropTypes.func.isRequired
};

export default connect((state) => { return {} }, { userRegisterRequest })(UserRegister);