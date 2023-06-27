import { styled, alpha } from '@mui/material/styles';
import { AppBar, Toolbar, Box, Typography, InputBase, Button } from '@mui/material';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import NavLink from '../nav_link/NavLink';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

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

export default function Navbar({ search, setSearch }) {
  const [view, setView] = useState(Cookies.get('role'));
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove('token');
    Cookies.remove('role');
    setView(undefined);

    navigate('/login');
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <AppBar position='static'>
      <Toolbar>
        <ShoppingCart />
        <Typography variant='h6' component='div' ml={2}>
          upGrad E-Shop
        </Typography>
        {view && (
          <Box
            sx={{
              width: '60%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginLeft: 'auto',
            }}
          >
            <Search sx={{ visibility: search !== undefined ? 'visible' : 'hidden' }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Search…'
                inputProps={{ 'aria-label': 'search' }}
                value={search}
                onChange={handleChange}
              />
            </Search>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <NavLink to='/'>Home</NavLink>
              {view === 'ADMIN' && <NavLink to='/product/add'>AddProduct</NavLink>}
              <Button
                variant='contained'
                color='error'
                onClick={handleLogout}
                sx={{ marginLeft: '2rem' }}
              >
                LOGOUT
              </Button>
            </Box>
          </Box>
        )}
        {!view && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: 'auto',
            }}
          >
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/signup'>Sign Up</NavLink>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
