import React, { Component } from 'react';

const loginURL = 'http://localhost:3000/login'

export default class LoginForm extends Component {
    state = {
      name: '',
      email: '',
      password: '',
      phone_number: ''
    }

    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
      event.preventDefault()

      fetch(loginURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state)
        })
          .then(response => {
            if (response.status === 200) {
            this.setState({error: ""})
            return response.json() 
          } else if (response.status === 401) {
            throw new Error("Something is wrong with the username or password")
          }
          }) 
          .then(result => {
            localStorage.setItem("token", result.token)
          })
          .catch(error => this.setState({ error: error.message }))
    }

    render() {
      const { name, email, password, phone_number } = this.state;
      return (
        <div className="login-form">
            <h3>Login</h3>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" value={name} placeholder="name" onChange={this.handleChange} />
                <input type="password" name="password" value={password} placeholder="password" onChange={this.handleChange}/>
                <input type="text" name="email" value={email} placeholder="email" onChange={this.handleChange}/>
                <input type="text" name="phone_number" value={phone_number} placeholder="phone number" onChange={this.handleChange}/>
                <input type="submit" value="login" />
                { this.state.error ? <p>{this.state.error}</p> : null }
            </form>
        </div> 
      );
    } 
}