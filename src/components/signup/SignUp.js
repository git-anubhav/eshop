import { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Copyright from '../copyright/Copyright';
import { signUp } from '../../common/services/auth.service';

export default function SignUp() {
  const [state, setState] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    contactNumber: '',
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const response = await signUp(state);
  };

  return (
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
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href='#'>Already have an account? Sign in</a>
        </Typography>
        <Copyright />
      </Box>
    </Box>
  );
}
