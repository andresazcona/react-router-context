import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';

const LoginPage = () => {
    const { login } = useContext(AuthContext);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const email = event.target.elements.email.value;
      const password = event.target.elements.password.value;
      login(email, password);
    };
  
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Correo electrónico:</label>
          <input type="email" name="email" />
          <label>Contraseña:</label>
          <input type="password" name="password" />
          <button type="submit">Ingresar</button>
        </form>
      </div>
    );
  };

  export default LoginPage;