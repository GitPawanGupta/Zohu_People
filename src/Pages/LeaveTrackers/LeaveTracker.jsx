import React from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Box, IconButton, Avatar } from '@mui/material';
import { Add, Search, Notifications } from '@mui/icons-material';
import { Link, useLocation, Outlet } from 'react-router-dom';
//import TeamTab from './Team/TeamTab';

const LeaveTracker = () => {
  const location = useLocation();

  const tabValue =
    location.pathname.includes("/leave/leave-requests") ? 2 :
    location.pathname.includes("/leave/leave-balance") ? 1 :
    location.pathname.includes("/leave/leave-summary") ? 0 :
    false;

  return (
    <Box>
      {/* Top Navigation Bar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          width: `calc(100% - 80px)`,
          ml: `80px`,
          backgroundColor: "#243874",
          boxShadow: "none",
          height: "60px",
          justifyContent: "center",
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Typography
              component={Link}
              to="/leave/leave-summary"
              variant="h6"
              sx={{ cursor: 'pointer', fontWeight: 'bold', color: 'white', textDecoration: 'none' }}
            >
              MyData
            </Typography>
            <Box >
               <Typography
              component={Link}
              to="/leave/team-tab"
              variant="h6"
              sx={{ cursor: 'pointer', color: 'white', textDecoration: 'none' }}
            >
              Team
            </Typography>
            </Box>
            
            <Typography
              component={Link}
              to="/leave/holidays"
              variant="h6"
              sx={{ cursor: 'pointer', color: 'white', textDecoration: 'none' }}
            >
              Holidays
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
      <Box
        sx={{
          position: 'fixed',
          top: "60px",
          left: 80,
          width: `calc(100% - 80px)`,
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #ccc",
          height: "40px",
          pl: 2,
          pt: 1
        }}
      >
        <Tabs value={tabValue} textColor="primary" indicatorColor="primary">
          <Tab label="Leave Summary" component={Link} to="/leave/leave-summary" />
          <Tab label="Leave Balance" component={Link} to="/leave/leave-balance" />
          <Tab label="Leave Requests" component={Link} to="/leave/leave-requests" />
        </Tabs>
      </Box>

      {/* Page Content */}
      <Box sx={{ mt: "110px", ml: '80px', pr: 2 }}>
        <Outlet />
      </Box>
      
    </Box>
  );
};

export default LeaveTracker;
