import React from 'react';

export default function BirthdayCard({myFriend}) {
  return (
    <div className="birthday-card">
      <h3>birthday-card</h3>
      <p>{myFriend.name}</p>
      <p>{myFriend.birthday}</p>
      <p>{myFriend.age}</p>
    </div>
  );
}