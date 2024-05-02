// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute'; // Asegúrate de importar correctamente

// Otros componentes
import Login from './Login';
import Home from './Home';
import Overview from './Overview';
import Contact from './Contact';
import Navigation from './Navigation';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <PrivateRoute path="/overview" element={<Overview />} />
          <PrivateRoute path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
