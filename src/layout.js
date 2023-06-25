import React from 'react';
import NavBar from './components/navbar/Navbar';
import { Box } from '@mui/material';

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <NavBar />
      <Box width={'98vw'}>{children}</Box>
    </React.Fragment>
  );
}
