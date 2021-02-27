import React from 'react';
import { FormGroup, FormControl, FormLabel } from 'react-bootstrap';

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
            <div className="Login-box">
                <form className="Login-form">
                    <FormGroup
                        controlId="userName"
                    >
                    <FormLabel>Username</FormLabel>
                    <FormControl
                        autoFocus
                        name="username"
                        type="username"
                        value={this.state.username}
                        placeholder="Please enter your Email"
                        onChange = {this.handleInputChange}
                    />
                    </FormGroup>
                    <FormGroup
                        controlId="password"
                    >
                    <FormLabel>Password</FormLabel>
                    <FormControl
                        autoFocus
                        name="password"
                        type="password"
                        value={this.state.password}
                        placeholder="Please enter your Password"
                        onChange = {this.handleInputChange}
                    />
                    </FormGroup>
                </form>
            </div>
        )
    }
}

export default (LoginPage);