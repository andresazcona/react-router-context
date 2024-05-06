// Codificado por Andres Azcona

import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';

// Creamos un contexto para manejar la autenticación
const AuthContext = React.createContext();

// Componente para el login
const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí podrías hacer una llamada a tu backend para verificar las credenciales
    if (email === 'admin@admin.com' && password === 'admin') {
      onLogin(email);
      // Redirigir al usuario a la página de inicio después de iniciar sesión correctamente
      window.location.href = '/';
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

// Componente para el contenido protegido
const PrivateRoute = ({ element }) => {
  const { user } = useContext(AuthContext);

  return user ? element : <Navigate to="/login" />;
};

// Componente para la página Home
const Home = () => (
  <>
    <h2>WELCOME TO HOME</h2>
    <p>Este proyecto fue hecho con amor y cariño, y alimentado por mis lágrimas y mi insomnio </p>
    <p>Att: Andres Azcona</p>
  </>
);

// Componente para la página Overview
const Overview = () => (
  <>
    <h2>WELCOME TO OVERVIEW</h2>
<p>Querido yo,</p>
<p>Quiero agradecerme sinceramente por el esfuerzo y dedicación que he demostrado en este proyecto. 
Ha sido una experiencia enriquecedora donde he aprendido mucho, tanto técnica como personalmente. 
Estoy agradecido por haber tenido la oportunidad de colaborar conmigo mismo y estoy emocionado 
por lo que vendrá en el futuro.</p>
<p>Gracias,<br />Andres Azcona</p>

  </>
);

// Componente para la página de Contacto
const Contact = () => (
  <>
    <h2>WELCOME TO CONTACT</h2>
    <p>Andres Azcona</p>
    <p>Contacto: <a href="mailto:andresazgo@unisabana.edu.co">andresazgo@unisabana.edu.co</a></p>

  </>
);

// Componente de encabezado que muestra el botón de cierre de sesión
const Header = () => {
  const { onLogout } = useContext(AuthContext);

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/overview">Overview</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <button onClick={onLogout}>Logout</button>
      </nav>
    </header>
  );
};

// Componente principal de la aplicación
const App = () => {
  const [user, setUser] = useState(localStorage.getItem('user'));

  const handleLogin = (email) => {
    setUser(email);
    localStorage.setItem('user', email);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'user' && !event.newValue) {
        window.location.reload();
      } else if (event.key === 'user') {
        setUser(localStorage.getItem('user'));
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, onLogin: handleLogin, onLogout: handleLogout }}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/" element={<PrivateRoute element={<Home />} />} />
          <Route path="/overview" element={<PrivateRoute element={<Overview />} />} />
          <Route path="/contact" element={<PrivateRoute element={<Contact />} />} />
          {/* Ruta adicional para redireccionar al usuario a la misma página */}
          <Route path="/redirect" element={<Navigate to="/" replace />} />
        </Routes>
        {user && <Header />}
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
