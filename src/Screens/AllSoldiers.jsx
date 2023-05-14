import React, { useEffect, useState } from 'react';
import { TextField, Box } from '@mui/material';

import Header from '../component/Header';
import SoldiersList from '../component/SoldiersList';
import Loader from '../component/Loader';
import { useGetSoldiersQuery } from '../store/api';

function createData(id, name, age, bloodType, infections, alergions, battleRoster) {
  return { id, name, age, bloodType, infections, alergions, battleRoster };
}

const rows = [
  createData(1, 'Вале́рій Фе́дорович Залу́жний', 25, 'R(II) -', 'none', 'none', 'No Info', 'Alpha Team'),
  createData(2, 'Вале́рій Фе́дорович Залу́жний', 5, 'R(II) -', 'none', 'none', 'No Info', 'Beta Team'),
  createData(3, 'Вале́рій Фе́дорович Залу́жний', 2, 'R(II) -', 'none', 'none', 'No Info', 'Gamma Team'),
];

export const AllSoldiers = () => {
  const [searchValue, setSearchValue] = useState('');
  const [soldiersData, setSoldiersData] = useState(null);
  const { data, isLoading } = useGetSoldiersQuery({ searchValue });

  useEffect(() => {
    if (!isLoading && data) {
      setSoldiersData(soldiersData);
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
          ? <SoldiersList data={soldiersData || rows} />
          : <Loader />
      }
    </>
  );   
};
