import React, { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

const TestComponent = () => {
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  const handleLogin = () => {
    // Llamamos a la función login con credenciales conocidas
    login('admin@admin.com', 'admin');
  };

  const handleLogout = () => {
    // Llamamos a la función logout
    logout();
  };

  return (
    <div>
      <h2>Test Component</h2>
      <p>isLoggedIn: {isLoggedIn ? 'true' : 'false'}</p>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default TestComponent;
