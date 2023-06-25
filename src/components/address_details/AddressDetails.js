import { useState } from 'react';
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  Button,
  Typography,
} from '@mui/material';

export default function SortSelector() {
  const [address, setAddress] = useState('');

  const handleChange = (event) => {
    setAddress(event.target.value);
  };

  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <FormControl fullWidth>
        <InputLabel>Select Address</InputLabel>
        <Select
          value={address}
          label='Select Address'
          onChange={handleChange}
          sx={{ width: '30rem' }}
        >
          <MenuItem value={'default'}>Default</MenuItem>
        </Select>
      </FormControl>
      <Typography my={2}>OR</Typography>
      <Typography variant='h6' mb={2}>
        Add Address
      </Typography>
      <TextField required id='ame' label='Name' sx={{ width: '20rem', marginBottom: '1rem' }} />
      <TextField
        required
        id='contactNumber'
        label='Contact Number'
        sx={{ width: '20rem', marginBottom: '1.5rem' }}
      />
      <TextField
        required
        id='street'
        label='Street'
        sx={{ width: '20rem', marginBottom: '1rem' }}
      />
      <TextField required id='city' label='City' sx={{ width: '20rem', marginBottom: '1rem' }} />
      <TextField required id='state' label='State' sx={{ width: '20rem', marginBottom: '1rem' }} />
      <TextField id='landmark' label='Landmark' sx={{ width: '20rem', marginBottom: '1rem' }} />
      <TextField
        required
        id='state'
        label='Zip Code'
        sx={{ width: '20rem', marginBottom: '1rem' }}
      />
      <Button variant='contained' sx={{ width: '20rem' }}>
        SAVE ADDRESS
      </Button>
      <Box m={3}>
        <Button>BACK</Button>
        <Button variant='contained'>NEXT</Button>
      </Box>
    </Box>
  );
}
