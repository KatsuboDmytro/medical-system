import React, { useEffect, useState } from 'react';
import { TextField, Box } from '@mui/material';

import Header from '../component/Header';
import SoldiersList from '../component/SoldiersList';
import Loader from '../component/Loader';
import { useGetSoldiersQuery } from '../store/api';
import { transformSoldiersData } from '../utils';

export const AllSoldiers = () => {
  const [searchValue, setSearchValue] = useState('');
  const [soldiersData, setSoldiersData] = useState(null);
  const { data, isLoading } = useGetSoldiersQuery({ searchValue });

  useEffect(() => {
    if (!isLoading && data) {
      setSoldiersData(data.map(item => transformSoldiersData(item)));
    }
  }, [data, isLoading]);

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
      {
        soldiersData
          ? <SoldiersList data={soldiersData} />
          : <Loader />
      }
    </>
  );   
};
