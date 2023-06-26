import { createBrowserRouter } from 'react-router-dom';

import Products from './components/products/Products';
import Order from './components/order/Order';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import MutateProduct from './components/mutate_product/MutateProduct';
import PrivateRoute from './common/route_components/PrivateRoute';
import AdminRoute from './common/route_components/AdminRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateRoute>
        <Products />
      </PrivateRoute>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/product',
    element: (
      <PrivateRoute>
        <Order />
      </PrivateRoute>
    ),
  },
  {
    path: '/product/:action',
    element: (
      <AdminRoute>
        <MutateProduct />
      </AdminRoute>
    ),
  },
]);
