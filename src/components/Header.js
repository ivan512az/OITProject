import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1>Volunteer Management System</h1>
      <nav>
        <Link to="/">Volunteer Dashboard</Link>
        <Link to="/event-signup">Sign Up for Events</Link>
        <Link to="/admin">Admin Dashboard</Link>
      </nav>
    </header>
  );
}

export default Header;