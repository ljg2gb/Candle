import React from 'react';
import BirthdayCard from './BirthdayCard';

export default function BirthdayContainer({myFriends, deletePermanently}) {
  const displayFriendBirthday = () => {
   return myFriends.map(friend => <BirthdayCard key={friend.id} deletePermanently={deletePermanently} myFriend={friend} />)
  }

  return (
    <div className="birthday-container">
        <h3>Birthdays</h3>
        <div className='birthday-cards'>
          {displayFriendBirthday()}
        </div>
    </div>
  );
}