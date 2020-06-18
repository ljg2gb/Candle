import React, { Component } from 'react';

const friendsURL = 'http://localhost:3000/friends'

export default class BirthdayForm extends Component {
  state = {
    name: '',
    // dob: '',
    age: '',
    birthday_month: '',
    birthday_day: ''
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value })
  }
 
  handleSubmit = (event) => {
    event.preventDefault();
    this.handleTime();
    // this.handleFetch();
  }

  handleTime = () => {
    
    let birthDay = this.state.birthday_day
    let birthMonth = this.state.birthday_month
    const age = this.state.age
    
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear() 
    const currentMonth = currentDate.getMonth() + 1   
    const currentDay = currentDate.getDate() 
    let birthYear = 0
    
    if ( (birthMonth < currentMonth) || ((birthMonth === currentMonth) && ((birthDay < currentDay) || (birthDay === currentDay) ))) {
      birthYear = (currentYear - age)
    } else {
      birthYear = (currentYear - age - 1)
    }
    
    if (birthDay.length === 1) {
      birthDay = `0${birthDay}`
    }
    
    if (birthMonth.length === 1) {
      birthMonth = `0${birthMonth}`
    }
    
    const dateOfBirth = `${birthYear}-${birthMonth}-${birthDay}`;
    // this.setState({dob: dateOfBirth})
    this.handleFetch(dateOfBirth)
    // console.log("birthDay", birthDay)
    // console.log("dob", dateOfBirth)
  }
  
  handleFetch = (dob) => {
    const params = {
      name: this.state.name,
      dob: dob
    };

    fetch(friendsURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}`
      },
      body: JSON.stringify(params)
      })
      .then(response => response.json())
      .then(this.props.setFriends(this.state));
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
              <input className='button' type="submit" value="Add Birthday!"/>
          </form>
      </div>
    );
  }
}