import { Fragment } from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';

export default function BasicCard({ product, quantity, address }) {
  return (
    <Fragment>
      <Box display='flex' width='56%' justifyContent='center' ml={3}>
        <Card sx={{ minWidth: '33rem', paddingBottom: '4rem' }}>
          <CardContent>
            <Typography variant='h4' mb={1}>
              {product.name}
            </Typography>
            <Typography variant='body2' mb={1}>
              Quantity: {quantity}
            </Typography>
            <Typography variant='body2' mb={2}>
              Category: <strong>{product.category}</strong>
            </Typography>
            <Typography variant='body2' mb={1}>
              <i>{product.description}</i>
            </Typography>
            <Typography variant='h6' mt={2} color='secondary'>
              $ {parseFloat(product.price) * quantity}
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: '22rem' }}>
          <CardContent>
            <Typography variant='h4' mb={1}>
              Address Details :
            </Typography>
            <Typography variant='body2' mb={1}>
              {address.name} <br />
              Contact Number: {address.contactNumber} <br />
              {address.street}, {address.city} <br />
              {address.state} <br />
              {address.zipcode}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Fragment>
  );
}
