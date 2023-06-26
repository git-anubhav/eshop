import { Fragment, useEffect, useState } from 'react';
import Card from '../card/Card';
import CategoryToggle from '../category_toggle/CategoryToggle';
import SortSelector from '../sort_selector/SortSelector';
import Navbar from '../navbar/Navbar';
import { Box, Grid } from '@mui/material';
import { getProducts } from '../../common/services/products.service';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((r) => setProducts(r.data));
  }, []);

  return (
    <Fragment>
      <Navbar />
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} px={9}>
        <CategoryToggle />
        <SortSelector />
        <Grid container px={3} py={5} spacing={7}>
          {products.map((product) => (
            <Grid key={product.id} item xs={4} display={'flex'} justifyContent={'center'}>
              <Card product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Fragment>
  );
}
