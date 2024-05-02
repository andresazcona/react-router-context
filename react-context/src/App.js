// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import OverviewPage from './pages/OverviewPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (email, password) => {
    // Aquí podrías hacer una llamada a una API para autenticar el usuario
    if (email === 'admin@admin.com' && password === 'admin') {
      localStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true);
    }
  };

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <PrivateRoute path="/home" element={<HomePage />} />
          <PrivateRoute path="/overview" element={<OverviewPage />} />
          <PrivateRoute path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </AuthContext.Provider>
    </Router>
  );
};

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { isLoggedIn } = React.useContext(AuthContext);
  return (
    <Route
      {...rest}
      element={isLoggedIn ? <Element /> : <Navigate to="/login" />}
    />
  );
};

export default App;
