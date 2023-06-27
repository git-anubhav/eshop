import { Box, Typography, TextField, Button } from '@mui/material';
import { Fragment, useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import { useSearchParams, useParams } from 'react-router-dom';
import { getProduct } from '../../common/services/products.service';
import { useState } from 'react';
import { addProduct, modifyProduct } from '../../common/services/products.service';
import Snackbar from '../snackbar/Snackbar';

export default function MutateProduct() {
  const [searchParams] = useSearchParams();
  const [product, setProduct] = useState({
    id: '',
    name: '',
    description: '',
    manufacturer: '',
    imageUrl: '',
    category: '',
    price: 0,
    availableItems: 0,
  });
  const [snackbarState, setSnackbarState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'right',
    variant: 'success',
    message: '',
  });
  const { action } = useParams();
  const id = searchParams.get('id');

  useEffect(() => {
    if (id !== null) {
      getProduct(id).then((r) => setProduct(r.data));
    }
  }, [id]);

  const handleAdd = async () => {
    const response = await addProduct(product);
    if (response.status === 400) {
      setSnackbarState({
        ...snackbarState,
        open: true,
        variant: 'error',
        message: 'Please enter all mandatory fields.',
      });
      return;
    }
    setSnackbarState({
      ...snackbarState,
      open: true,
      variant: 'success',
      message: `Product ${product.name} added successfully`,
    });
  };

  const handleModify = async () => {
    const response = await modifyProduct(id, product);
    if (response.status === 400) {
      setSnackbarState({
        ...snackbarState,
        open: true,
        variant: 'error',
        message: 'Please enter all mandatory fields.',
      });
      return;
    }
    setSnackbarState({
      ...snackbarState,
      open: true,
      variant: 'success',
      message: `Product ${product.name} modified successfully`,
    });
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <Navbar />
      <Snackbar state={snackbarState} setState={setSnackbarState} />
      <Box display={'flex'} justifyContent={'center'} pt={5}>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} maxWidth={'20rem'}>
          <Typography variant='h5' m={3}>
            {action === 'add' ? 'Add' : 'Modify'} Product
          </Typography>
          <TextField
            required
            name='name'
            label='Name'
            value={product?.name}
            onChange={handleChange}
            sx={{ width: '20rem', marginBottom: '1rem' }}
          />
          <TextField
            required
            name='category'
            label='Category'
            value={product?.category}
            onChange={handleChange}
            sx={{ width: '20rem', marginBottom: '1rem' }}
          />
          <TextField
            required
            name='manufacturer'
            label='Manufacturer'
            value={product?.manufacturer}
            onChange={handleChange}
            sx={{ width: '20rem', marginBottom: '1rem' }}
          />
          <TextField
            required
            name='availableItems'
            label='Available Items'
            value={product?.availableItems}
            onChange={handleChange}
            type='number'
            sx={{ width: '20rem', marginBottom: '1rem' }}
          />
          <TextField
            required
            name='price'
            label='Price'
            type='number'
            value={product?.price}
            onChange={handleChange}
            sx={{ width: '20rem', marginBottom: '1rem' }}
          />
          <TextField
            required
            name='imageUrl'
            label='Image URL'
            value={product?.imageUrl}
            onChange={handleChange}
            sx={{ width: '20rem', marginBottom: '1.5rem' }}
          />
          <TextField
            required
            name='description'
            label='Product Description'
            value={product?.description}
            onChange={handleChange}
            sx={{ width: '20rem', marginBottom: '1.5rem' }}
          />
          <Button
            fullWidth
            variant='contained'
            sx={{ marginBottom: '3rem' }}
            onClick={action === 'add' ? handleAdd : handleModify}
          >
            SAVE PRODUCT
          </Button>
        </Box>
      </Box>
    </Fragment>
  );
}
