import React, { useState } from 'react';

export default function SignupForm() {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const handleForm = (event) => {
        setName(event.target.value)
        setUsername(event.target.value)
        setPassword(event.target.value)
        setEmail(event.target.value)
        setPhoneNumber(event.target.value)
    }

  return (
    <div className="login-form">
        <h3>Sign Up</h3>
        <form onChange={handleForm}>
            <input type="text" name="name" value={name} placeholder="name"/>
            <input type="text" name="username" value={username} placeholder="username"/>
            <input type="password" name="password" value={password} placeholder="password"/>
            <input type="text" name="email" value={email} placeholder="email"/>
            <input type="text" name="phoneNumber" value={phoneNumber} placeholder="phone number"/>
            <input type="submit" value="submit" />
        </form>
    </div>
  );
}