import React from 'react';

export default function Announcements({myFriends}) {
  const birthdaysThisMonth = (friends) => {
    console.log('friends in announcements', friends)
    const dobFriends = myFriends.filter((friend) => {return friend.dob} )
    console.log('friends with dob', dobFriends)
    
    const friendWBirthMonth = dobFriends.map((friend) => {
        const split = friend.dob.split('-')
        const birthMonth = parseInt(split[1])
        const newFriendObject = Object.assign(friend, {bMonth: birthMonth})
        return newFriendObject
    });

    const friendsWBirthdaysThisMonth = friendWBirthMonth.filter((friend) => {
      const currentDate = new Date()
      const currentMonth = currentDate.getMonth() + 1  
      return friend.bMonth === currentMonth
    })

    return (
      friendsWBirthdaysThisMonth.map((friend) => {
       return <h3>{friend.name}</h3>
      })
    )
  }


  return (
    <div className="announcements">
        <h3>Upcoming Birthdays</h3>
        <p>You have no upcoming birthdays</p>
        {birthdaysThisMonth(myFriends)}
        
    </div>
  );
}