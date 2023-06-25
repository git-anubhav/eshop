import { useState } from 'react';
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

export default function SortSelector() {
  const [sortBy, setSortBy] = useState('');

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 300, alignSelf: 'flex-start' }}>
      <FormControl fullWidth>
        <InputLabel>Sort By</InputLabel>
        <Select value={sortBy} label='Age' onChange={handleChange}>
          <MenuItem value={'default'}>Default</MenuItem>
          <MenuItem value={'priceHighToLow'}>Price: High to Low</MenuItem>
          <MenuItem value={'priceLowToHigh'}>Price: Low to High</MenuItem>
          <MenuItem value={'newest'}>Newest</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
