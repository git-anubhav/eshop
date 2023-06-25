import { useState } from 'react';

import { ToggleButton, ToggleButtonGroup } from '@mui/material';

export default function ToggleButtons() {
  const [category, setCategory] = useState('all');

  const handleCategory = (event, newCategory) => {
    setCategory(newCategory);
  };

  return (
    <ToggleButtonGroup
      value={category}
      exclusive
      onChange={handleCategory}
      sx={{ margin: '2rem 0' }}
    >
      <ToggleButton value='all'>ALL</ToggleButton>
      <ToggleButton value='apparel'>APPAREL</ToggleButton>
      <ToggleButton value='electornics'>ELECTRONICS</ToggleButton>
      <ToggleButton value='personalCare'>PERSONAL CARE</ToggleButton>
    </ToggleButtonGroup>
  );
}
