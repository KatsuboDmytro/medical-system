import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Button} from '@mui/material';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

function createData(id, name, age, bloodType, infections, alergions, battleRoster) {
  return { id, name, age, bloodType, infections, alergions, battleRoster };
}

const rows = [
  createData(1, 'Вале́рій Фе́дорович Залу́жний', 25, 'R(II) -', 'none', 'none', 'No Info', 'Alpha Team'),
  createData(2, 'Вале́рій Фе́дорович Залу́жний', 5, 'R(II) -', 'none', 'none', 'No Info', 'Beta Team'),
  createData(3, 'Вале́рій Фе́дорович Залу́жний', 2, 'R(II) -', 'none', 'none', 'No Info', 'Gamma Team'),
];

export const SoldiersTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ПІБ</TableCell>
            <TableCell align="center">Бригада</TableCell>
            <TableCell align="center">Вік</TableCell>
            <TableCell align="center">Група крові</TableCell>
            <TableCell align="center">Інфекції</TableCell>
            <TableCell align="center">Алергії</TableCell>
            <TableCell align="center">Переливання крові</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            rows.map(row => (
              <TableRow>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.age}</TableCell>
                <TableCell align="center">{row.bloodType}</TableCell>
                <TableCell align="center">{row.infections}</TableCell>
                <TableCell align="center">{row.alergions}</TableCell>
                <TableCell align="center">{row.battleRoster}</TableCell>
                <TableCell align="center">
                  <Link to={`/soldiers/:${row.id}`}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary">
                      Деталі
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};
