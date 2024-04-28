// ContactPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ContactPage = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Contact</h2>
      <p>Contact Form</p>
      <Link to="/">Home</Link>
      <Link to="/overview">Overview</Link>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default ContactPage;
