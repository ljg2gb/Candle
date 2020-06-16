import React from 'react';
import BirthdayCard from './BirthdayCard';

export default function BirthdayContainer({myFriends}) {
  // const myFriend = myFriends.map(friend => <BirthdayCard key={friend.id} myFriend={friend} />)
  return (
    <div className="birthday-container">
        <p>birthday container</p>
        {/* {myFriend} */}
    </div>
  );
}