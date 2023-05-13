import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const HeaderDesktop = ({ options }) => {
  const handleLogout = () => {

  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="row"
          columnGap="20px"
        >
          {options.map(link => (
            <Link key={link.id} to={link.path} style={{ textDecoration: 'none' }}>
              <Typography variant="h6" color="white" sx={{ flexGrow: 1 }}>
                {link.text}
              </Typography>
            </Link>
          ))}
        </Box>
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
          Тамара Василівна
        </Typography>
        <Button variant="contained" color="error" onClick={handleLogout}>
          Вийти
        </Button>
      </Toolbar>
    </AppBar>
  );   
};
