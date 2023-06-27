import { Fragment, useEffect, useState } from 'react';
import Card from '../card/Card';
import CategoryToggle from '../category_toggle/CategoryToggle';
import SortSelector from '../sort_selector/SortSelector';
import Navbar from '../navbar/Navbar';
import { Box, Grid } from '@mui/material';
import { getProducts } from '../../common/services/products.service';
import Snackbar from '../snackbar/Snackbar';
import { useLocation } from 'react-router-dom';

export default function Products() {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('default');
  const [refresh, setRefresh] = useState(true);
  const location = useLocation();
  const { message } = location.state || {};

  const [snackbarState, setSnackbarState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'right',
    variant: 'success',
    message: '',
  });

  useEffect(() => {
    if (message) {
      setSnackbarState({ ...snackbarState, open: true, variant: 'success', message: message });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getProducts().then((r) => {
      setProducts(r.data);
      setAllProducts(r.data);
    });
  }, [refresh]);

  useEffect(() => {
    // filter by search
    const searchedProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

    // filter by category
    const filteredProducts = searchedProducts.filter((product) =>
      category !== 'all' ? product.category === category : true
    );

    // sort by price
    const sortedProducts = filteredProducts.sort((a, b) => {
      if (sort === 'priceLowToHigh') {
        return parseFloat(a.price) - parseFloat(b.price);
      } else if (sort === 'priceHighToLow') {
        return parseFloat(b.price) - parseFloat(a.price);
      }
      return 0;
    });

    // sort by recency
    const finalProducts = sort === 'newest' ? sortedProducts.reverse() : sortedProducts;

    setProducts(finalProducts);
  }, [allProducts, search, sort, category]);

  return (
    <Fragment>
      <Navbar search={search} setSearch={setSearch} />
      <Snackbar state={snackbarState} setState={setSnackbarState} />
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} px={9}>
        <CategoryToggle category={category} setCategory={setCategory} refresh={refresh} />
        <SortSelector sort={sort} setSort={setSort} />
        <Grid container px={3} py={5} spacing={10} justifyContent='center'>
          {products.map((product) => (
            <Grid key={product.id} item display={'flex'} justifyContent={'center'}>
              <Card
                product={product}
                snackbarState={snackbarState}
                setSnackbarState={setSnackbarState}
                refresh={refresh}
                setRefresh={setRefresh}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Fragment>
  );
}
