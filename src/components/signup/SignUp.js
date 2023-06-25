import { Box, Typography, TextField, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Copyright from '../copyright/Copyright';

export default function SignUp() {
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
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
        id='firstName'
        label='First Name'
        sx={{ width: '20rem', marginBottom: '1rem' }}
      />
      <TextField
        required
        id='lastName'
        label='Last Name'
        sx={{ width: '20rem', marginBottom: '1rem' }}
      />
      <TextField
        required
        id='emailAdress'
        label='Email Address'
        sx={{ width: '20rem', marginBottom: '1rem' }}
      />
      <TextField
        required
        id='password'
        label='Password'
        type='password'
        sx={{ width: '20rem', marginBottom: '1rem' }}
      />
      <TextField
        required
        id='confirmPassword'
        label='Confirm Password'
        type='password'
        sx={{ width: '20rem', marginBottom: '1rem' }}
      />
      <TextField
        required
        id='contactNumber'
        label='Contact Number'
        sx={{ width: '20rem', marginBottom: '1.5rem' }}
      />
      <Button fullWidth variant='contained'>
        SIGN IN
      </Button>
      <Typography variant='subtitle2' mt={2} alignSelf={'flex-end'}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href='#'>Already have an account? Sign in</a>
      </Typography>
      <Copyright />
    </Box>
  );
}
