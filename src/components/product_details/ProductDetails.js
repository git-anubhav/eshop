import { Box, Typography, Chip, TextField, Button } from '@mui/material';
import './ProductDetails.css';

export default function ProductDetails() {
  return (
    <Box display={'flex'} mt={5}>
      <img
        src='https://images-americanas.b2w.io/produtos/01/00/img/4864624/1/4864624187_1GG.jpg'
        alt='iphone'
        className='product-img'
      />
      <Box alignSelf={'flex-start'} p={2}>
        <Box display={'flex'} alignItems={'center'}>
          <Typography variant='h4' mr={2}>
            iPhone 12
          </Typography>
          <Chip label='Available Quantity: 146' color={'primary'} />
        </Box>
        {/* <Typography variant='subtitle1' mt={1}>
          Quantity: 1
        </Typography> */}
        <Typography variant='subtitle1' mt={1}>
          Category: <strong>Electronics</strong>
        </Typography>
        <Typography variant='subtitle2' mt={1}>
          <i>A14 bionic something something lorem ipsum something something</i>
        </Typography>
        <Typography variant='h6' mt={2} color='secondary'>
          Rs. 1000000
        </Typography>
        <TextField
          required
          id='enterQuantity'
          label='Enter Quantity'
          type='number'
          sx={{ width: '18rem', marginTop: '1.5rem' }}
        />
        <Box mt={3}>
          <Button variant='contained'>PLACE ORDER</Button>
        </Box>
        {/* <Box mt={6}>
          <Button>BACK</Button>
          <Button variant='contained'>NEXT</Button>
        </Box> */}
      </Box>
    </Box>
  );
}
