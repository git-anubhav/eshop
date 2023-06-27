import { useState, Fragment } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Copyright from '../copyright/Copyright';
import NavBar from '../navbar/Navbar';
import { login } from '../../common/services/auth.service';
import { getUserRole } from '../../common/services/users.service';
import { useNavigate, Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import Snackbar from '../snackbar/Snackbar';

export default function Login() {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const [snackbarState, setSnackbarState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'right',
    variant: 'success',
    message: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const response = await login(state);
    if (response.status === 401) {
      setSnackbarState({
        ...snackbarState,
        open: true,
        variant: 'error',
        message: 'Invalid credentials',
      });
      return;
    }
    Cookies.set('token', response.data.token);

    const role = await getUserRole();
    Cookies.set('role', role);

    navigate('/');
  };

  return (
    <Fragment>
      <NavBar />
      <Snackbar state={snackbarState} setState={setSnackbarState} />
      <Box display={'flex'} justifyContent={'center'} pt={5}>
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          mt={5}
          maxWidth={'20rem'}
        >
          <Box
            backgroundColor={'secondary.main'}
            p={1}
            borderRadius={'50%'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <LockOutlinedIcon color='white' />
          </Box>
          <Typography variant='h5' m={3}>
            Sign in
          </Typography>
          <TextField
            required
            name='email'
            label='Email'
            onChange={handleChange}
            sx={{ width: '20rem', marginBottom: '1.5rem' }}
          />
          <TextField
            required
            name='password'
            label='Password'
            type='password'
            onChange={handleChange}
            sx={{ width: '20rem', marginBottom: '2rem' }}
          />
          <Button fullWidth variant='contained' onClick={handleSubmit}>
            SIGN IN
          </Button>
          <Typography variant='subtitle2' mt={3}>
            <Link to='/signup'>Don't have an account? Sign Up</Link>
          </Typography>
          <Copyright />
        </Box>
      </Box>
    </Fragment>
  );
}
