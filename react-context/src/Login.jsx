// Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    // Aquí podrías realizar la lógica de autenticación real con una API
    login();
    navigate('/');
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
