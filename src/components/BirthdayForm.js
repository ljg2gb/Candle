import React, { Component } from 'react';

const friendsURL = 'http://localhost:3000/friends'

export default class BirthdayForm extends Component {
  state = {
    name: '',
    age: '',
    birthday_month: '',
    birthday_day: ''

  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value })
  }
 
  handleSubmit = (event) => {
    event.preventDefault()
    this.handleTime()

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
  
  handleTime = () => {

    const birthDay = this.state.birthday_day
    const birthMonth = this.state.birthday_month
    const age = this.state.age

    const currentDate = new Date()
    const currentYear = currentDate.getFullYear() 
    const currentMonth = currentDate.getMonth() + 1   
    const currentDay = currentDate.getDate() 
    let birthYear = 0

    if ( (birthMonth < currentMonth) || ((birthMonth == currentMonth) && ((birthDay < currentDay) || (birthDay == currentDay) ))) {
      birthYear = (currentYear - age)
    } else {
      birthYear = (currentYear - age - 1)
    }

    console.log(birthYear)

  }

  render() {
    const { name, age, birthday_month, birthday_day } = this.state;
    return (
      <div className="birthday-form">
          <form onSubmit={this.handleSubmit}>
              <input name="name" value={name} placeholder="name" onChange={this.handleChange}/>
              <input type="number" min="1" max="110" name="age" value={age} placeholder="age" onChange={this.handleChange}/>
              <input type="number" min="1" max="12" name="birthday_month" value={birthday_month} placeholder="12" onChange={this.handleChange}/>
              <input type="number" min="1" max="31" name="birthday_day" value={birthday_day} placeholder="22" onChange={this.handleChange}/>
              <input type="submit" value="Add Birthday!"/>
          </form>
      </div>
    );
  }
}