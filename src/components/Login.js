import React from 'react';
import Navbar from './Navbar';
import Authenticate from './Authenticate';
// import LoginForm from './LoginForm';
// import SignupForm from './SignupForm';

export default function Login({setFriends, setIsLoggedIn}) {
  return (
    <div className='login'>
        <Navbar />
        <Authenticate setIsLoggedIn={setIsLoggedIn} setFriends={setFriends} />
        {/* <LoginForm />
        <SignupForm /> */}
     
    </div>
  );
}