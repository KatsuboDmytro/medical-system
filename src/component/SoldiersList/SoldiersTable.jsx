import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

export const SoldiersTable = ({ rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ПІБ</TableCell>
            <TableCell align="center">Вік</TableCell>
            <TableCell align="center">Група крові</TableCell>
            <TableCell align="center">Інфекції</TableCell>
            <TableCell align="center">Алергії</TableCell>
            <TableCell align="center">Переливання крові</TableCell>
            <TableCell align="center">Бригада</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.age}</TableCell>
              <TableCell align="center">{row.bloodType}</TableCell>
              <TableCell align="center">{row.infections}</TableCell>
              <TableCell align="center">{row.alergions}</TableCell>
              <TableCell align="center">{row.transfusion}</TableCell>
              <TableCell align="center">{row.battleRoster}</TableCell>
              <TableCell align="center">
                <Link to={`/soldiers/${row.id}`}>
                  <Button type="submit" variant="contained" color="primary">
                    Деталі
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
