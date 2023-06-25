import { Fragment } from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';

export default function BasicCard() {
  return (
    <Fragment>
      <Box display='flex' width='56%' justifyContent='center' ml={3}>
        <Card sx={{ minWidth: '33rem', paddingBottom: '4rem' }}>
          <CardContent>
            <Typography variant='h4' mb={1}>
              Shoes
            </Typography>
            <Typography variant='body2' mb={1}>
              Quantity: 1
            </Typography>
            <Typography variant='body2' mb={2}>
              Category: <strong>Footwear</strong>
            </Typography>
            <Typography variant='body2' mb={1}>
              <i>
                lorem ipsum something something lorem ipsum something something lorem ipsum
                something something lorem ipsum something something lorem ipsum something something
              </i>
            </Typography>
            <Typography variant='h6' mt={2} color='secondary'>
              Rs. 1000000
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: '22rem' }}>
          <CardContent>
            <Typography variant='h4' mb={1}>
              Address Details :
            </Typography>
            <Typography variant='body2' mb={1}>
              lorem ipsum something <br />
              something lorem ipsum <br />
              something something
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box mt={6}>
        <Button>BACK</Button>
        <Button variant='contained'>PLACE ORDER</Button>
      </Box>
    </Fragment>
  );
}
