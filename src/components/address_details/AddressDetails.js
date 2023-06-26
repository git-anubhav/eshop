import { useEffect, useState } from 'react';
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
import { addAddress, getAddresses } from '../../common/services/address.service';

export default function AddressDetails({ address, setAddress }) {
  const [addresses, setAddresses] = useState([]);
  const [unsavedAddress, setUnsavedAddress] = useState({
    name: '',
    contactNumber: '',
    street: '',
    city: '',
    state: '',
    landmark: '',
    zipcode: '',
  });

  useEffect(() => {
    getAddresses().then((r) => {
      setAddresses(r.data);
    });
  }, []);

  const handleAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleChange = (e) => {
    setUnsavedAddress({ ...unsavedAddress, [e.target.name]: e.target.value });
  };

  const handleSaveAddress = async (e) => {
    const response = await addAddress(unsavedAddress);
  };

  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <FormControl fullWidth>
        <InputLabel>Select Address</InputLabel>
        <Select
          value={address}
          label='Select Address'
          onChange={handleAddress}
          sx={{ width: '30rem' }}
        >
          {addresses.map((address) => (
            <MenuItem
              key={address.id}
              value={address}
            >{`${address.name}--->${address.street}, ${address.city}`}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Typography my={2}>OR</Typography>
      <Typography variant='h6' mb={2}>
        Add Address
      </Typography>
      <TextField
        required
        name='name'
        label='Name'
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
      <TextField
        required
        name='street'
        label='Street'
        onChange={handleChange}
        sx={{ width: '20rem', marginBottom: '1rem' }}
      />
      <TextField
        required
        name='city'
        label='City'
        onChange={handleChange}
        sx={{ width: '20rem', marginBottom: '1rem' }}
      />
      <TextField
        required
        name='state'
        label='State'
        onChange={handleChange}
        sx={{ width: '20rem', marginBottom: '1rem' }}
      />
      <TextField
        name='landmark'
        label='Landmark'
        onChange={handleChange}
        sx={{ width: '20rem', marginBottom: '1rem' }}
      />
      <TextField
        required
        name='zipcode'
        label='Zip Code'
        onChange={handleChange}
        sx={{ width: '20rem', marginBottom: '1rem' }}
      />
      <Button variant='contained' sx={{ width: '20rem' }} onClick={handleSaveAddress}>
        SAVE ADDRESS
      </Button>
    </Box>
  );
}
