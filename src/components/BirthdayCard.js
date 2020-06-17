import React from 'react';

export default function BirthdayCard({myFriend}) {
  return (
    <div className="birthday-card">
      <h3>{myFriend.name}</h3>
      <p>{myFriend.birthday}</p>
      <p>{myFriend.age}</p>
    </div>
  );
}