import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

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

const HomePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2>Home</h2>
      <p>Bienvenido {user.name}</p>
      <p><a href="#" onClick={() => alert('Implementar logout')}>Logout</a></p>
      {/* Menú de navegación (implementar según sus preferencias) */}
    </div>
  );
};

const OverviewPage = () => {
  // Similar a HomePage
  return (
    <div>
      <h2>Overview</h2>
      {/* Contenido de la página Overview */}
      {/* Menú de navegación (implementar según sus preferencias) */}
    </div>
  );
};

const ContactPage = () => {
  // Similar a HomePage
  return (
    <div>
      <h2>Contact</h2>
      {/* Contenido de la página Contact */}
      {/* Menú de navegación (implementar según sus preferencias) */}
    </div>
  );
};
