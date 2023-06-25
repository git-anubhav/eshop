import { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Copyright from '../copyright/Copyright';
import { login } from '../../common/services/auth.service';

export default function Login() {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const response = await login(state);
  };

  return (
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
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href='#'>Don't have an account? Sign Up</a>
        </Typography>
        <Copyright />
      </Box>
    </Box>
  );
}
