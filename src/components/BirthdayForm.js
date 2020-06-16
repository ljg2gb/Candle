import React, { Component } from 'react';

const friendsURL = 'http://localhost:3000/friends'

export default class BirthdayForm extends Component {
  state = {
    name: '',
    age: '',
    birthday: '',

  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value })
  }
 
  handleSubmit = (event) => {
    event.preventDefault()

    fetch(friendsURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}`
      },
      body: JSON.stringify(this.state)
    }).then(response => response.json())
      .then(this.props.setFriends(this.state));
  } 

  render() {
    const { name, age, birthday } = this.state;
    return (
      <div className="birthday-form">
          <p>Add a birthday: make a post request to the backend</p>
          <form onSubmit={this.handleSubmit}>
              <input name="name" value={name} placeholder="name" onChange={this.handleChange}/>
              <input type="number" name="age" value={age} placeholder="current age" onChange={this.handleChange}/>
              <input type="date" name="birthday" value={birthday} placeholder="birthday" onChange={this.handleChange}/>
              <input type="submit" value="Add Birthday!"/>
          </form>
      </div>
    );
  }
}