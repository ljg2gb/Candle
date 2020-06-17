import React from 'react';
import BirthdayForm from './BirthdayForm';

export default function NewBirthday({setFriends}) {
  return (
    <div className="new-birthday">
        <h3>Add a Friend's Birthday</h3>
        <BirthdayForm setFriends={setFriends} />
    </div>
  );
}