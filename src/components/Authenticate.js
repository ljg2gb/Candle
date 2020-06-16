import React, { Component } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

 export default class Authenticate extends Component {
    state = {
        isLogin: true
    } 

    toggleForms = () => {
        this.setState({ isLogin: !this.state.isLogin})
    }

     render() {
        return(
            <div>
                {this.state.isLogin ? <LoginForm /> : <SignupForm /> }
                <button onClick={this.toggleForms}>
                    {this.state.isLogin ? "Need to Signup?" : "Need to Login?"}
                </button>
            </div>
        )
     }
 } 