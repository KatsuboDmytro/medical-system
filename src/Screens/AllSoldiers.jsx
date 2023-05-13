import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';

import Header from '../component/Header';
import SoldiersList from '../component/SoldiersList';

export const AllSoldiers = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = ({ target: { value } }) => {
    setSearchValue(value);
  };

  return (
    <>
      <Header />
      <Box>
        <TextField
          style={{margin: '25px 10px 20px 25px'}}
          label="Знайти військового"
          variant="outlined"
          value={searchValue}
          onChange={handleInputChange}
        />
      </Box>
      <SoldiersList />
    </>
  );   
};
