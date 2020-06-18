import React, { Component } from 'react';

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
      this.props.login(this.state)
    }

    render() {
      const { name, email, password, phone_number } = this.state;
      return (
        <div className="login-form">
            <h5>LOGIN</h5>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" value={name} placeholder="name" onChange={this.handleChange} />
                <input type="password" name="password" value={password} placeholder="password" onChange={this.handleChange}/>
                <input type="text" name="email" value={email} placeholder="email" onChange={this.handleChange}/>
                <input type="text" name="phone_number" value={phone_number} placeholder="phone number" onChange={this.handleChange}/>
                <input  className='button' type="submit" value="login" />
                { this.state.error ? <p>{this.state.error}</p> : null }
            </form>
        </div> 
      );
    } 
}