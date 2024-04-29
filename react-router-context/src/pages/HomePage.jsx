import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';

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

  export default HomePage;