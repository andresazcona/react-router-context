import React from 'react';
import { Route, useHistory } from 'react-router-dom';
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
          history.replace('/login') 
        )
      }
    />
  );
};

export default PrivateRoute;
