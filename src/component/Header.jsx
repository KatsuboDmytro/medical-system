import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import endpoints from '../Router/endpoints';

export const Header = () => {
  const navigationOptions = [
    {
      id: 1,
      text: 'Всі солдати',
      path: endpoints.soldiers,
    },
    {
      id: 2,
      text: 'Мій фідбек',
      path: endpoints.feedback,
    },
  ];

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
          {navigationOptions.map(link => (
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
