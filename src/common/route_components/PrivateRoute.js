import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
import { Fragment } from 'react';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = Cookies.get('token') !== undefined;
  return <Fragment>{isAuthenticated ? children : <Navigate to='/login' />}</Fragment>;
};

export default PrivateRoute;
