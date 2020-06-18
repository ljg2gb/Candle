import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const usersURL = 'http://localhost:3000/users'

export default class SignupForm extends Component {
    state = {
      name: '',
      email: '',
      password: '',
      phone_number: ''
    }

    redirectToDashboard = () => {
      if(localStorage.getItem('token'))
        return <Redirect to='/' />

    }

    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
      event.preventDefault()

      fetch(usersURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({user: this.state})
        })
          .then(response => response.json()) 
          .then(result => {
            localStorage.setItem("token", result.token)
          })
          .then(this.redirectToDashboard)
    }

    render() {
      const { name, email, password, phone_number } = this.state;
      return (
        <div className="signup">
            <h5>Signup</h5>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" value={name} placeholder="name" onChange={this.handleChange} />
                <input type="password" name="password" value={password} placeholder="password" onChange={this.handleChange}/>
                <input type="text" name="email" value={email} placeholder="email" onChange={this.handleChange}/>
                <input type="text" name="phone_number" value={phone_number} placeholder="phone number" onChange={this.handleChange}/>
                <input className='button' type="submit" value="Signup" />
            </form>
        </div>
      );
    } 
}