import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
import { Fragment } from 'react';

const AdminRoute = ({ children }) => {
  const isAdmin = Cookies.get('role') === 'ADMIN';
  return <Fragment>{isAdmin ? children : <Navigate to='/' />}</Fragment>;
};

export default AdminRoute;
