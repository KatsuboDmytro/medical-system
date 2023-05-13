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

function createData(id, name, helpDate, feedback) {
  return { id, name, helpDate, feedback };
}

const rows = [
  createData(1, 'Вале́рій Фе́дорович Залу́жний', '2023-04-25', 'Ви недостатньо затягнули йому шину'),
  createData(2, 'Вале́рій Фе́дорович Залу́жний', '2023-04-28', 'Ви недостатньо затягнули йому шину'),
  createData(3, 'Вале́рій Фе́дорович Залу́жний', '2023-04-29', 'Ви недостатньо затягнули йому шину'),
];

export const FeedbackTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ПІБ</TableCell>
            <TableCell align="center">Дата надання допомоги</TableCell>
            <TableCell align="center">Відгук</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            rows.map(row => (
              <TableRow key={row.id}>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.helpDate}</TableCell>
                <TableCell align="center">{row.feedback}</TableCell>
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
