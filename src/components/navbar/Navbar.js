import { styled, alpha } from '@mui/material/styles';
import { AppBar, Toolbar, Box, Typography, InputBase, Button } from '@mui/material';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css';
import NavbarMenuItem from '../navbar_menu_item/NavbarMenuItem';
import { useState } from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(3),
  width: '40%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '20ch',
  },
}));

export default function NavBar() {
  const [view, setView] = useState('ADMIN');

  return (
    <AppBar position='static'>
      <Toolbar>
        <ShoppingCart />
        <Typography variant='h6' component='div' ml={2}>
          upGrad E-Shop
        </Typography>
        {view === 'USER' && (
          <Box
            sx={{
              width: '60%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginLeft: 'auto',
            }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder='Search…' inputProps={{ 'aria-label': 'search' }} />
            </Search>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <NavbarMenuItem>Home</NavbarMenuItem>
              <NavbarMenuItem>AddProduct</NavbarMenuItem>
              <Button variant='contained' color='error'>
                LOGOUT
              </Button>
            </Box>
          </Box>
        )}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: 'auto',
          }}
        >
          <NavbarMenuItem>Login</NavbarMenuItem>
          <NavbarMenuItem>Sign Up</NavbarMenuItem>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
