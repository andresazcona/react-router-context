import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import OverviewPage from './pages/OverviewPage';
import ContactPage from './pages/ContactPage';
import PrivateRoute from './PrivateRoute'; 
import TestComponent from './TestComponent'; 

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
          <Route path="/home/*" element={<PrivateRoute element={<HomePage />} />} />
          <Route path="/overview/*" element={<PrivateRoute element={<OverviewPage />} />} />
          <Route path="/contact/*" element={<PrivateRoute element={<ContactPage />} />} />
          <Route path="/test/*" element={<TestComponent />} /> {/* Route for TestComponent */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </AuthContext.Provider>
    </Router>
  );
};

export default App;
