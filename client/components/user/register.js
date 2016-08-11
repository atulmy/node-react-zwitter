// Client

import React from 'react';
import { connect } from 'react-redux';

import validateRegister from '../../../shared/validations/register';
import { userRegisterRequest } from './register-actions';
import InputText from '../common/input-text';

class UserRegister extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            errors: {},
            isLoading: false
        };
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    isValid() {
        let validateResult = validateRegister(this.state);

        if(!validateResult.isValid) {
            this.setState({errors: validateResult.errors});
        }

        return validateResult.isValid;
    }

    onSubmit(event) {
        event.preventDefault();

        if(this.isValid()) {
            this.setState({errors: {}, isLoading: true});

            this.props.userRegisterRequest(this.state).then(
                (response) => {
                    console.log(response.data);

                    this.setState({isLoading: false});
                },

                (error) => {
                    console.log(error.response.data);

                    this.setState({errors: error.response.data.errors, isLoading: false});
                }
            );
        }
    }

    render() {
        return (
            <section>
                <h2>Register</h2>

                <form onSubmit={ this.onSubmit.bind(this) }>

                    <InputText
                        error={ this.state.errors.username }
                        type="text"
                        value={ this.state.username }
                        onChange={ this.onChange.bind(this) }
                        name="username"
                        id="user-username"
                        label="Username"
                        placeholder="Eg: jonsnow"
                    />


                    <InputText
                        error={ this.state.errors.password }
                        type="password"
                        value={ this.state.password }
                        onChange={ this.onChange.bind(this) }
                        name="password"
                        id="user-password"
                        label="Password"
                        placeholder="Password"
                    />

                    <button type="submit" disabled={ this.state.isLoading } className="btn btn-default">Register</button>
                </form>
            </section>
        );
    }
}

UserRegister.propTypes = {
    userRegisterRequest: React.PropTypes.func.isRequired
};

export default connect((state) => { return {} }, { userRegisterRequest })(UserRegister);