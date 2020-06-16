import React from 'react';
import BirthdayForm from './BirthdayForm';

export default function NewBirthday({setFriends}) {
  return (
    <div className="new-birthday">
        <p>new-birthday</p>
        <BirthdayForm setFriends={setFriends} />
    </div>
  );
}