import React from 'react';
import { FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import LoginPageStyles from './style';

class LoginPage extends React.Component {
    constructor(props) {
        super();
        this.state = {
            username: '',
            password: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <LoginPageStyles>
                <div className="Login-box">
                    <form className="Login-form">
                        <FormGroup className="form-group"
                            controlId="username"
                        >
                        <FormLabel>Username</FormLabel>
                        <FormControl className="form-input"
                            autoFocus
                            name="username"
                            type="username"
                            value={this.state.username}
                            placeholder="username"
                            onChange = {this.handleInputChange}
                        />
                        </FormGroup>
                        <FormGroup className="form-group"
                            controlId="password"
                        >
                        <FormLabel>Password</FormLabel>
                        <FormControl className="form-input"
                            autoFocus
                            name="password"
                            type="password"
                            value={this.state.password}
                            placeholder="password"
                            onChange = {this.handleInputChange}
                        />
                        </FormGroup>
                        <button className="Login-btn"
                        >
                            Login
                        </button>
                        <div className="register">
                            <Link to="/register">New User ? Click here to register</Link>
                        </div>
                    </form>
                </div>
            </LoginPageStyles>
        )
    }
}

const withConnect = connect()(LoginPage);


export { withConnect as LoginPage };