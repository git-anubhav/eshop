import { Box, Typography, TextField, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Copyright from '../copyright/Copyright';

export default function MutateProduct() {
  return (
    <Box display={'flex'} justifyContent={'center'} pt={5}>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} maxWidth={'20rem'}>
        <Typography variant='h5' m={3}>
          Modify Product
        </Typography>
        <TextField required id='name' label='Name' sx={{ width: '20rem', marginBottom: '1rem' }} />
        <TextField
          required
          id='category'
          label='Category'
          sx={{ width: '20rem', marginBottom: '1rem' }}
        />
        <TextField
          required
          id='manufacturer'
          label='Manufacturer'
          sx={{ width: '20rem', marginBottom: '1rem' }}
        />
        <TextField
          required
          id='availableQuantity'
          label='Available Quantity'
          sx={{ width: '20rem', marginBottom: '1rem' }}
        />
        <TextField
          required
          id='price'
          label='Price'
          type='number'
          sx={{ width: '20rem', marginBottom: '1rem' }}
        />
        <TextField
          required
          id='imageUrl'
          label='Image URL'
          sx={{ width: '20rem', marginBottom: '1.5rem' }}
        />
        <TextField
          required
          id='productDescription'
          label='Product Description'
          sx={{ width: '20rem', marginBottom: '1.5rem' }}
        />
        <Button fullWidth variant='contained'>
          MODIFY PRODUCT
        </Button>
      </Box>
    </Box>
  );
}
