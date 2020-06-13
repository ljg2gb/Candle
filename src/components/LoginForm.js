import React, { useState } from 'react';

export default function LoginForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleForm = (event) => {
        setUsername(event.target.value)
        setPassword(event.target.value)
    }

  return (
    <div className="login-form">
        <h3>Login</h3>
        <form onChange={handleForm}>
            <input type="text" name="username" value={username} placeholder="username" />
            <input type="password" name="password" value={password} placeholder="password"/>
            <input type="submit" value="submit" />
        </form>
    </div>
  );
}