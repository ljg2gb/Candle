import React from 'react';
import Navbar from './Navbar'
import Announcements from './Announcements';
import BirthdayContainer from './BirthdayContainer';
import NewBirthday from './NewBirthday';

export default function Dashboard({myFriends, setFriends, deletePermanently}) {
  console.log('friends are in dashboard', myFriends)
  return (
    <div className="dashboard">
        <Navbar />
        <Announcements myFriends={myFriends}/>
        <div className="dashboard-flex">
        <BirthdayContainer deletePermanently={deletePermanently} myFriends={myFriends}/>
        <NewBirthday setFriends={setFriends} />
        </div>
    </div>
  );
}