import React from 'react';
import NavBar from './components/navbar/Navbar';
import { Box } from '@mui/material';

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <NavBar />
      <Box display={'flex'} justifyContent={'center'} pt={7}>
        {children}
      </Box>
    </React.Fragment>
  );
}
