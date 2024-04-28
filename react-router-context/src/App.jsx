// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import LoginPage from './components/LogIn';
import HomePage from './components/Home';
import OverviewPage from './components/overview'; //posuble error
import ContactPage from './components/Contact';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <PrivateRoute exact path="/" component={HomePage} />
          <PrivateRoute path="/overview" component={OverviewPage} />
          <PrivateRoute path="/contact" component={ContactPage} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
