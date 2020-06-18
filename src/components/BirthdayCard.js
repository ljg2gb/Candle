import React, { Component } from 'react';

const friendsURL = "http://localhost:3000/friends/"

export default class BirthdayCard extends Component {

  state = {
    age: 0,
    birthYear: 1,
    birthMonth: 1,
    birthDay: 1,
  }
  componentDidMount(){
    this.handleTime(this.props.myFriend)
  }

  handleClick = () => {
    this.props.deletePermanently(this.props.myFriend.id)
  }

  deleteFriend = (friend) => {
    fetch(`${friendsURL}${friend.id}`, {
      method: "DELETE"
    })
    .then(response => response.json())
    .then(console.log)
  }

  handleTime = (friend) => {
    const dateOfBirth = friend.dob
    if (dateOfBirth) {
      const split = dateOfBirth.split('-')
      const currentDate = new Date()
      const currentYear = currentDate.getFullYear() 
      const currentMonth = currentDate.getMonth() + 1   
      const currentDay = currentDate.getDate() 
      this.setState({
        birthYear: parseInt(split[0]),
        birthMonth: parseInt(split[1]),
        birthDay: parseInt(split[2])
      })
      if ( (this.state.birthMonth < currentMonth) || ((this.state.birthMonth === currentMonth) && ((this.state.birthDay < currentDay) || (this.state.birthDay === currentDay) ))) {
        console.log("option1")
        console.log(currentYear - (parseInt(split[0])))
        this.setState({
          age: (currentYear - (parseInt(split[0])))
        })
      } 
      else {
        this.setState({
          age: (currentYear - (parseInt(split[0])) - 1)
        })
      }
    } 
    else {
      this.setState({
        age: friend.age,
        birthYear: friend.birth_year,
        birthMonth: friend.birthday_month,
        birthDay: friend.birthday_day,
      })
    }
  }

  render() {
    return (
      <div className="birthday-card">
        <p>{`${this.props.myFriend.name} is turning ${parseInt(this.state.age) + 1} on ${`${this.state.birthMonth}/${this.state.birthDay}`}.`}</p>
        <button onClick={this.handleClick}>Delete from list</button>
      </div>
    );
  }
}
