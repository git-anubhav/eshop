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
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function AddressDetails({ address, setAddress, snackbarState, setSnackbarState }) {
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
  const [refresh, setRefresh] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getAddresses().then((r) => {
      if (r.status === 200) {
        setAddresses(r.data);
      } else if (r.status === 401) {
        Cookies.remove('token');
        Cookies.remove('role');
        navigate('/login');
      } else {
        setAddresses([]);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  const handleAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleChange = (e) => {
    setUnsavedAddress({ ...unsavedAddress, [e.target.name]: e.target.value });
  };

  const handleSaveAddress = async (e) => {
    const response = await addAddress(unsavedAddress);
    if (response.status === 400) {
      setSnackbarState({
        ...snackbarState,
        open: true,
        variant: 'error',
        message: 'Please enter all mandatory fields.',
      });
      return;
    }
    setRefresh(!refresh);
    setSnackbarState({
      ...snackbarState,
      open: true,
      variant: 'success',
      message: `Address added successfully`,
    });
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
