import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const HeaderMobile = ({ options, handleLogout, displayName }) => {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const handleMenuOpen = event => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center">
          <IconButton color="inherit" edge="start" onClick={handleMenuOpen} sx={{ mr: 1 }}>
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={menuAnchorEl} open={Boolean(menuAnchorEl)} onClose={handleMenuClose}>
            {options.map(link => (
              <MenuItem key={link.id} component={Link} to={link.path} onClick={handleMenuClose}>
                {link.text}
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
          {displayName}
        </Typography>
        <Button variant="contained" color="error" onClick={handleLogout}>
          Вийти
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderMobile;
