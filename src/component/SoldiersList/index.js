import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import SoldiersCards from './SoldiersCards';
import { SoldiersTable } from './SoldiersTable';

const SoldiersList = ({ data }) => {
  const isMobile = useWindowSize();

  return isMobile ? <SoldiersCards data={data} /> : <SoldiersTable rows={data} />;
};

export default SoldiersList;
