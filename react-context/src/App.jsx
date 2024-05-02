// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';

// Components
import Login from './Login';
import Home from './Home';
import Overview from './Overview';
import Contact from './Contact';
import Navigation from './Navigation';

const PrivateRoute = ({ element, ...rest }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/login" element={<Login />} />
          <PrivateRoute path="/" element={<Home />} />
          <PrivateRoute path="/overview" element={<Overview />} />
          <PrivateRoute path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
