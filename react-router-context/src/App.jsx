import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import LoginPage from './pages/LoginPage'; // Import default export
import HomePage from './pages/HomePage'; // Import default export
import OverviewPage from './pages/OverviewPage'; // Import default export
import ContactPage from './pages/ContactPage'; // Import default export

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
