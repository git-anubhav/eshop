import { createBrowserRouter } from 'react-router-dom';

import Products from './components/products/Products';
import Order from './components/order/Order';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import MutateProduct from './components/mutate_product/MutateProduct';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Products />,
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
    element: <Order />,
  },
  {
    path: '/product/:action',
    element: <MutateProduct />,
  },
]);
