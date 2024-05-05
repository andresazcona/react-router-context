import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Utiliza una función de callback para obtener el valor inicial de isLoggedIn
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  const login = (email, password) => {
    // Aquí podrías hacer una llamada a una API para autenticar al usuario
    if (email === 'admin@admin.com' && password === 'admin') {
      localStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true);
      console.log("isLoggedIn set to true:", isLoggedIn); // Agregamos este console.log
    }
  };

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    console.log("isLoggedIn set to false:", isLoggedIn); // Agregamos este console.log
  };

  console.log("AuthProvider initialized with login function:", login);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
