import { Fragment, useState } from 'react';
import Card from '../card/Card';
import CategoryToggle from '../category_toggle/CategoryToggle';
import SortSelector from '../sort_selector/SortSelector';
import { Box, Grid } from '@mui/material';

export default function Products() {
  const [products, setProducts] = useState(['', '', '', '', '']);
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} px={9}>
      <CategoryToggle />
      <SortSelector />
      <Grid container px={3} py={5} spacing={7}>
        {products.map(() => (
          <Grid item xs={4} display={'flex'} justifyContent={'center'}>
            <Card />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
