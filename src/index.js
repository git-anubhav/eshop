import React from 'react';
import ReactDOM from 'react-dom/client';
import Products from './components/products/Products';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import { ThemeProvider } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout';
import theme from './theme';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/products',
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
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </ThemeProvider>
  </React.StrictMode>
);
