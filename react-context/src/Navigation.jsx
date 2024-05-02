// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Navigation = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {isLoggedIn && (
          <>
            <li>
              <Link to="/overview">Overview</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
