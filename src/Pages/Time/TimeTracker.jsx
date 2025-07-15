import React from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Box, IconButton, Avatar } from '@mui/material';
import { Add, Search, Notifications } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


const TimeTracker = () => {
  const location = useLocation();

  const tabValue = 
                   location.pathname.includes ("/job-schedule") ? 4 :
                   location.pathname.includes ("/projects") ? 3 :
                   location.pathname.includes ("/jobs") ? 2 :
                   location.pathname.includes ("/time-sheets") ? 1 : 0;
                   

  return (
    <Box>
      {/* Top Navigation Bar */}
      <AppBar position="fixed"
        sx={{
          zIndex: theme => theme.zIndex.drawer + 1,
          width: `calc(100% - 80px)`,
          ml: `80px`,
          backgroundColor: "#243874",
          boxShadow: "none",
          height: "60px",
          justifyContent: "center"
        }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Typography
              component={Link}
              to="/time"
              variant="h6"
              sx={{ cursor: 'pointer', fontWeight: 'bold', color: 'white', textDecoration: 'none' }}>
              MyData
            </Typography>
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
            left: isMobile ? 0 : '60px', // match AppBar offset
            width: isMobile ? '100%' : 'calc(100% - 60px)',
            backgroundColor: "#ffffff",
            borderBottom: "1px solid #ccc",
            height: "40px",
            pl: 2,
            pt: 1,
            overflowX: 'auto',
            mt:0,
            position:'fixed'

          }}>
        <Tabs value={tabValue} textColor="primary" indicatorColor="primary">
          <Tab label="Time Logs" component={Link} to="/time/time-logs" />
          <Tab label="Timesheets" component={Link} to="/time/time-sheets" />
          <Tab label="Jobs" component={Link} to="/time/jobs" />
          <Tab label="Projects" component={Link} to="/time/projects" />
          <Tab label="Job Schedule" component={Link} to="/time/job-schedule" />
        </Tabs>
      </Box>
      <Box>
  <Outlet />
</Box>

    </Box>
    
  );
};

export default TimeTracker;
