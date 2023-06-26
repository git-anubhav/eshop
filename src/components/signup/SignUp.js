import { Fragment, useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Copyright from '../copyright/Copyright';
import { signUp } from '../../common/services/auth.service';
import { useNavigate, Link } from 'react-router-dom';
import NavBar from '../navbar/Navbar';

export default function SignUp() {
  const [state, setState] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    contactNumber: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const response = await signUp(state);
    navigate('/login');
  };

  return (
    <Fragment>
      <NavBar />
      <Box display={'flex'} justifyContent={'center'} pt={5}>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} maxWidth={'20rem'}>
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
            Sign up
          </Typography>
          <TextField
            required
            name='firstName'
            label='First Name'
            onChange={handleChange}
            sx={{ width: '20rem', marginBottom: '1rem' }}
          />
          <TextField
            required
            name='lastName'
            label='Last Name'
            onChange={handleChange}
            sx={{ width: '20rem', marginBottom: '1rem' }}
          />
          <TextField
            required
            name='email'
            label='Email Address'
            onChange={handleChange}
            sx={{ width: '20rem', marginBottom: '1rem' }}
          />
          <TextField
            required
            name='password'
            label='Password'
            type='password'
            onChange={handleChange}
            sx={{ width: '20rem', marginBottom: '1rem' }}
          />
          <TextField
            required
            name='confirmPassword'
            label='Confirm Password'
            type='password'
            onChange={handleChange}
            sx={{ width: '20rem', marginBottom: '1rem' }}
          />
          <TextField
            required
            name='contactNumber'
            label='Contact Number'
            onChange={handleChange}
            sx={{ width: '20rem', marginBottom: '1.5rem' }}
          />
          <Button fullWidth variant='contained' onClick={handleSubmit}>
            SIGN IN
          </Button>
          <Typography variant='subtitle2' mt={2} alignSelf={'flex-end'}>
            <Link to='/login'>Already have an account? Sign in</Link>
          </Typography>
          <Copyright />
        </Box>
      </Box>
    </Fragment>
  );
}
