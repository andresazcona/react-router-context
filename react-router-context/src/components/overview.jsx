// OverviewPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

const OverviewPage = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Overview</h2>
      <p>System Information</p>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default OverviewPage;
