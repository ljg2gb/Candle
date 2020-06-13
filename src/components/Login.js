import React from 'react';
import Navbar from './Navbar'
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

export default function Login() {
  return (
    <div className="login">
        <Navbar />
        <LoginForm />
        <SignupForm />
     
    </div>
  );
}