import { Box, Typography, Chip, TextField, Button, CardMedia } from '@mui/material';
import './ProductDetails.css';
import { Fragment, useEffect, useState } from 'react';
import { getProduct } from '../../common/services/products.service';
import { useSearchParams } from 'react-router-dom';

export default function ProductDetails({
  quantity,
  setQuantity,
  step,
  setStep,
  product,
  setProduct,
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id');

  useEffect(() => {
    getProduct(id).then((r) => setProduct(r.data));
  }, [id]);

  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  const handlePlaceOrder = () => {
    setStep(0);
  };

  return (
    <Box display={'flex'} mt={5}>
      <img src={product.imageUrl} alt={product.name} className='product-img' />
      <Box alignSelf={'flex-start'} p={2} pl={4} maxWidth='30rem'>
        <Box display={'flex'} alignItems={'center'}>
          <Typography variant='h4' mr={2}>
            {product.name}
          </Typography>
          <Chip label={`Available Quantity: ${product.availableItems}`} color={'primary'} />
        </Box>
        {step === 0 && (
          <Typography variant='subtitle1' mt={1}>
            Quantity: {quantity}
          </Typography>
        )}
        <Typography variant='subtitle1' mt={1}>
          Category: <strong>{product.category}</strong>
        </Typography>
        <Typography variant='subtitle2' mt={1}>
          <i>{product.description}</i>
        </Typography>
        <Typography variant='h6' mt={2} color='secondary'>
          $ {step < 0 ? product.price : parseFloat(product.price) * quantity}
        </Typography>
        {step < 0 && (
          <Fragment>
            <TextField
              required
              value={quantity}
              label='Enter Quantity'
              type='number'
              onChange={handleChange}
              sx={{ width: '18rem', marginTop: '1.5rem' }}
            />
            <Box mt={3}>
              <Button variant='contained' onClick={handlePlaceOrder}>
                PLACE ORDER
              </Button>
            </Box>
          </Fragment>
        )}
      </Box>
    </Box>
  );
}
