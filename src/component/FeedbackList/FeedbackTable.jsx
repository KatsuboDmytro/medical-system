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
import { TABLE_MIN_WIDTH } from '../../constants/common';

export const FeedbackTable = ({ rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: TABLE_MIN_WIDTH }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ПІБ</TableCell>
            <TableCell align="center">Дата надання допомоги</TableCell>
            <TableCell align="center">Відгук</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.helpDate}</TableCell>
              <TableCell align="center">{row.feedback}</TableCell>
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
