import React from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Box, IconButton, Avatar } from '@mui/material';
import { Add, Search, Notifications } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const File = () => {
  const location = useLocation();

  const tabValue = 
                   location.pathname.includes ("/shared-with-my-role") ? 1 : 
                   location.pathname.includes("/shared-with-me") ? 0 :
                 false;

  return (
    <Box>
      {/* Top Navigation Bar */}
      <AppBar position="fixed"
        sx={{
          zIndex: theme => theme.zIndex.drawer + 1,
          width: `calc(100% - 80px)`,
          ml: `0px`,
          backgroundColor: "#243874",
          boxShadow: "none",
          height: "60px",
          justifyContent: "center"
        }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Typography
              component={Link}
              to="/file/shared-with-me"
              variant="h6"
              sx={{ cursor: 'pointer', fontWeight: 'bold', color: 'white', textDecoration: 'none' }}>
              My Files
            </Typography>
            {/* <Typography
              component={Link}
              to="/team"
              variant="h6"
              sx={{ cursor: 'pointer', color: 'white', textDecoration: 'none' }}>
              Team
            </Typography>
            <Typography
              component={Link}
              to="/organization"
              variant="h6"
              sx={{ cursor: 'pointer', color: 'white', textDecoration: 'none' }}>
              Holidays
            </Typography> */}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton color="inherit"><Add /></IconButton>
            <IconButton color="inherit"><Search /></IconButton>
            <IconButton color="inherit"><Notifications /></IconButton>
            <Avatar sx={{ width: 32, height: 32, bgcolor: 'white', color: 'black', fontSize: 14 }}>S</Avatar>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Tabs Section */}
      <Box position="fixed"
        sx={{
          top: "60px",
          width: `calc(100% - 80px)`,
          ml: `80px`,
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #ccc",
          height: "40px",
          pl: 2,
          pt: 1
        }}>
        <Tabs value={tabValue} textColor="primary" indicatorColor="primary">
          <Tab label="Shared With Me" component={Link} to="/file/shared-with-me" />
          <Tab label="Shared With My Role" component={Link} to="/file/shared-with-my-role" />
          
        </Tabs>
      </Box>
    </Box>
  );
};

export default File;
