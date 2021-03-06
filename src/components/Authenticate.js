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
        const { isLogin } = this.state;
        const { setFriends, setIsLoggedIn, login, alertMessage } = this.props; 
        return(
            <div className="signin-signup">
                {isLogin ? <LoginForm login={login} alertMessage={alertMessage} setIsLoggedIn={setIsLoggedIn} setFriends={setFriends} /> : <SignupForm /> }
                <button className='button' onClick={this.toggleForms}>
                    {isLogin ? "Need to Signup?" : "Need to Login?"}
                </button>
            </div>
        )
     }
 }