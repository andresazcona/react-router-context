import React from 'react';
import { Route } from 'react-router';
import { useHistory } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth();
  const history = useHistory();

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          history.replace('/login') // Redirige a la página de login
        )
      }
    />
  );
};

export default PrivateRoute;
