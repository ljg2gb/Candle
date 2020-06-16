import React from 'react';
import Navbar from './Navbar'
import Announcements from './Announcements';
import BirthdayContainer from './BirthdayContainer';
import NewBirthday from './NewBirthday';

export default function Dashboard({myFriends}) {
  return (
    <div className="dashboard">
        <Navbar />
        <Announcements myFriends={myFriends}/>
        <BirthdayContainer myFriends={myFriends}/>
        <NewBirthday />
    </div>
  );
}