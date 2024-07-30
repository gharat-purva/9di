import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText, useMediaQuery, IconButton, Drawer, ThemeProvider, createTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import logoDesktop from '../assets/logoDesktop.png'; 
import logoMobile from '../assets/logoMobile.png';  

const NavBar = () => {
  const theme = createTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{
        width: 250,
        backgroundColor: '#415b75',
        height: '100%',
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
        <img src={logoMobile} alt="Logo" style={{ width: '100px' }} />
      </Box>
      <List>
        <ListItem button component={Link} to="/login">
          <ListItemText primary="Login" sx={{ color: 'white' }} />
        </ListItem>
        <ListItem button component={Link} to="/events">
          <ListItemText primary="Events" sx={{ color: 'white' }} />
        </ListItem>
        <ListItem button component={Link} to="/contracts">
          <ListItemText primary="Contracts" sx={{ color: 'white' }} />
        </ListItem>
        <ListItem button component={Link} to="/add-lead">
          <ListItemText primary="Add Lead" sx={{ color: 'white' }} />
        </ListItem>
        <ListItem button component={Link} to="/tasks">
          <ListItemText primary="Tasks" sx={{ color: 'white' }} />
        </ListItem>
        <ListItem button component={Link} to="/products">
          <ListItemText primary="Products" sx={{ color: 'white' }} />
        </ListItem>
        <ListItem button component={Link} to="/knowledge-base">
          <ListItemText primary="Knowledge Base" sx={{ color: 'white' }} />
        </ListItem>
        <ListItem button component={Link} to="/add-offer-letter">
          <ListItemText primary="Offer Letter" sx={{ color: 'white' }} />
        </ListItem>
        <ListItem button component={Link} to="/interview-schedule">
          <ListItemText primary="Interview Schedule" sx={{ color: 'white' }} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      {isMobile ? (
        <>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ position: 'fixed', top: 16, left: 16, zIndex: 1300, mb: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            {drawerContent}
          </Drawer>
        </>
      ) : (
        <Box
          sx={{
            width: 250,
            height: '100vh',
            position: 'fixed',
            top: 0,
            left: 0,
            backgroundColor: '#415b75',
            display: 'flex',
            flexDirection: 'column',
            padding: 2,
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
            <img src={logoDesktop} alt="Logo" style={{ width: '150px' }} />
          </Box>
          <List sx={{ flexGrow: 1 }}>
            <ListItem button component={Link} to="/login">
              <ListItemText primary="Login" sx={{ color: 'white' }} />
            </ListItem>
            <ListItem button component={Link} to="/events">
              <ListItemText primary="Events" sx={{ color: 'white' }} />
            </ListItem>
            <ListItem button component={Link} to="/contracts">
              <ListItemText primary="Contracts" sx={{ color: 'white' }} />
            </ListItem>
            <ListItem button component={Link} to="/add-lead">
              <ListItemText primary="Add Lead" sx={{ color: 'white' }} />
            </ListItem>
            <ListItem button component={Link} to="/tasks">
              <ListItemText primary="Tasks" sx={{ color: 'white' }} />
            </ListItem>
            <ListItem button component={Link} to="/products">
              <ListItemText primary="Products" sx={{ color: 'white' }} />
            </ListItem>
            <ListItem button component={Link} to="/knowledge-base">
              <ListItemText primary="Knowledge Base" sx={{ color: 'white' }} />
            </ListItem>
            <ListItem button component={Link} to="/add-offer-letter">
              <ListItemText primary="Offer Letter" sx={{ color: 'white' }} />
            </ListItem>
            <ListItem button component={Link} to="/interview-schedule">
              <ListItemText primary="Interview Schedule" sx={{ color: 'white' }} />
            </ListItem>
          </List>
        </Box>
      )}
    </ThemeProvider>
  );
};

export default NavBar;
