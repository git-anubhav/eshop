import { Box, Typography, TextField, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Copyright from '../copyright/Copyright';

export default function Login() {
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={5}>
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
        id='email'
        label='Email'
        sx={{ width: '20rem', marginBottom: '1.5rem' }}
      />
      <TextField
        required
        id='password'
        label='Password'
        type='password'
        sx={{ width: '20rem', marginBottom: '2rem' }}
      />
      <Button fullWidth variant='contained'>
        SIGN IN
      </Button>
      <Typography
        variant='subtitle2'
        mt={3}
        alignSelf={'flex-start'}
        color={'primary'}
        sx={{ textDecoration: 'underline' }}
      >
        Don't have an account? Sign Up
      </Typography>
      <Copyright />
    </Box>
  );
}
