import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      {/* <Link className='link' to='/'>Home </Link> */}
      <Link className='link' to='/login'>Sign out </Link>
    </div>
  );
} 