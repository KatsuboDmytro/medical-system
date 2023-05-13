import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          all soldiers
        </Typography>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'end' }}>
          hospital_doctor
        </Typography>
      </Toolbar>
    </AppBar>
  );   
};
