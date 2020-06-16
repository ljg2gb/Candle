import React from 'react';
import BirthdayCard from './BirthdayCard';

export default function BirthdayContainer({myFriends}) {
  console.log("friends are in the container", myFriends)
  const displayFriendBirthday = () => {
   return myFriends.map(friend => <BirthdayCard key={friend.id} myFriend={friend} />)
  }
  return (
    <div className="birthday-container">
        <h3>All the birthdays</h3>
        {displayFriendBirthday()}
    </div>
  );
}