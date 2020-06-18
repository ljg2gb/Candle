import React from 'react';

export default function Announcements({myFriends}) {
  const birthdaysThisMonth = (friends) => {
    console.log('friends in announcements', friends)
    const dobFriends = myFriends.filter(friend => friend.dob )
    const friendsWithBirthdaysThisMonth = dobFriends.filter(friend => {
        const split = friend.dob.split('-')
        const birthMonth = parseInt(split[1])
        const currentDate = new Date()
        const currentMonth = currentDate.getMonth() + 1  
        return (birthMonth === currentMonth) ? friend : null
    });
    return friendsWithBirthdaysThisMonth
  }
  return (
    <div className="announcements">
        <h3>Upcoming Birthdays</h3>
        <p>You have no upcoming birthdays</p>
        <p>{birthdaysThisMonth(myFriends)}</p>
        
    </div>
  );
}