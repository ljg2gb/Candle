import React from 'react';
import Navbar from './Navbar'
import Announcements from './Announcements';
import BirthdayContainer from './BirthdayContainer';
import NewBirthday from './NewBirthday';

export default function Dashboard() {
  return (
    <div className="dashboard">
        <Navbar />
        <Announcements />
        <BirthdayContainer />
        <NewBirthday />
    </div>
  );
}