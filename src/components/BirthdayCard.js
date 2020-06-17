import React, { Component } from 'react';

export default class BirthdayCard extends Component {

  handleTime = (friend) => {
    const dateOfBirth = friend.dob
    let age = 0
    let date = ''
    if (dateOfBirth) {
      const split = dateOfBirth.split('-')
      console.log("split", split)
      const birthYear = parseInt(split[0])
      const birthMonth = parseInt(split[1])
      const birthDay = parseInt(split[2])

      date = `${birthMonth}/${birthDay}`

      const currentDate = new Date()
      const currentYear = currentDate.getFullYear() 
      const currentMonth = currentDate.getMonth() + 1   
      const currentDay = currentDate.getDate() 
      
      if ( (birthMonth < currentMonth) || ((birthMonth == currentMonth) && ((birthDay < currentDay) || (birthDay == currentDay) ))) {
        age = currentYear - birthYear
      } else {
        age = currentYear - birthYear - 1
      }
      return( 
        <div>
          <h3>{date}</h3>
          <h3>{`They're turning ${age}.`}</h3>
        </div>
      )
    } else {
        return(
          <div>
            <h3>{`${friend.birthday_month}/${friend.birthday_day}`}</h3>
            <h3>{`They're turning ${friend.age}.`}</h3>
          </div>
        )
    }

  }

  render() {
    const { myFriend } = this.props;
    return (
      <div className="birthday-card">
        <h3>{`${myFriend.name}'s birthday is`}</h3>
        <p>{this.handleTime(myFriend)}</p>
      </div>
    );
  }
}
