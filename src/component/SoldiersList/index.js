import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import SoldiersCards from './SoldiersCards';
import { SoldiersTable } from './SoldiersTable';

function createData(id, name, age, bloodType, infections, alergions, transfusion, battleRoster) {
  return { id, name, age, bloodType, infections, alergions, transfusion, battleRoster };
}

const rows = [
  createData(1, 'Вале́рій Фе́дорович Залу́жний', 25, 'R(II) -', 'none', 'none', 'No Info', 'Alpha Team'),
  createData(2, 'Вале́рій Фе́дорович Залу́жний', 5, 'R(II) -', 'none', 'none', 'No Info', 'Beta Team'),
  createData(3, 'Вале́рій Фе́дорович Залу́жний', 2, 'R(II) -', 'none', 'none', 'No Info', 'Gamma Team'),
];

const SoldiersList = () => {
  const isMobile = useWindowSize();

  return isMobile ? <SoldiersCards data={rows} /> : <SoldiersTable rows={rows} />;
};

export default SoldiersList;
