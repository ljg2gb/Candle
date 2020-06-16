import React from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

 export default function Authenticate() {
     return(
         <div>
            <LoginForm />
            <SignupForm />
         </div>
     )
 }