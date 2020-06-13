import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to='/'>Home </Link>
      <Link to='/login'>Sign in/Sign out </Link>
    </div>
  );
}