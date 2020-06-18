import React, { Component } from 'react';

export default class Announcements extends Component {

  state = {
    currentMonth: 0,
    months: []
  }


  componentDidMount() {
    this.setCurrentDate()
  }
  setCurrentDate = () => {
    const currentDate = new Date()
    this.setState({
      currentMonth: currentDate.getMonth() + 1 ,
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    })
  }

  birthdaysThisMonth = (friends) => {
    console.log('friends in announcements', friends)
    const dobFriends = friends.filter((friend) => {return friend.dob} )
    console.log('friends with dob', dobFriends)
    
    const friendWBirthMonth = dobFriends.map((friend) => {
        const split = friend.dob.split('-')
        const birthMonth = parseInt(split[1])
        return Object.assign(friend, {bMonth: birthMonth})
    });

    const friendsWBirthdaysThisMonth = friendWBirthMonth.filter((friend) => {
      return friend.bMonth === this.state.currentMonth
    })

    return this.displayInfo(friendsWBirthdaysThisMonth)
  }

  displayInfo = (friends) => {
    if(friends.length > 0){
      const monthText = this.state.months[this.state.currentMonth -1]
      return (
        friends.map((friend) => {
         return <h4>{`${friend.name} has a birthday in ${monthText}.`} </h4>
        })
      )
    } else {
    return <h4>You have no birthday reminders this month.</h4>
    }

  }

  render() {
    return (
      <div className="announcements">
          <h3>Upcoming Birthdays:</h3>
          {this.birthdaysThisMonth(this.props.myFriends)}
      </div>
    );
  }
}