import { useState, useEffect } from 'react';

import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { getCategories } from '../../common/services/products.service';

export default function CategoryToggle({ category, setCategory, refresh }) {
  const [categories, setCategories] = useState([]);

  const handleCategory = (event, newCategory) => {
    setCategory(newCategory ? newCategory : category);
  };

  useEffect(() => {
    getCategories().then((r) => setCategories(r.data));
  }, [refresh]);

  return (
    <ToggleButtonGroup
      value={category}
      exclusive
      onChange={handleCategory}
      sx={{ margin: '2rem 0' }}
    >
      <ToggleButton value='all'>ALL</ToggleButton>
      {categories.map((category, key) => (
        <ToggleButton key={key} value={category}>
          {category.toUpperCase()}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
