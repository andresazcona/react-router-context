import React, { createContext, useState } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  user: null,
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Simular la validación del usuario (en un escenario real, se validaría contra una API)
    if (email === 'admin@admin.com' && password === 'admin') {
      setUser({ name: 'Administrador' });
      setIsLoggedIn(true);
      localStorage.setItem('token', 'token-de-ejemplo'); // Almacenar el token en localStorage
    } else {
      alert('Credenciales incorrectas');
    }
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('token'); // Eliminar el token de localStorage
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
