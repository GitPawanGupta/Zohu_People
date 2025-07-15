import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Box,
  IconButton,
  Avatar,
  useMediaQuery,
} from '@mui/material';
import { Add, Search, Notifications } from '@mui/icons-material';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const OrganizationPage = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Determine active tab value
  const tabValue =
    location.pathname === "/organization/overview" ? 0 :
    location.pathname.includes("/organization/announcements") ? 1 :
    location.pathname.includes("/organization/policies") ? 2 :
    location.pathname.includes("/organization/employee-tree") ? 3 :
    location.pathname.includes("/organization/employee-list") ? 4 :
    location.pathname.includes("/organization/department-tree") ? 5 :
    false;

  return (
    <Box sx={{ width: '100%' }}>
      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: theme => theme.zIndex.drawer + 1,
          width: { xs: '100%', sm: 'calc(100% - 80px)' },
          ml: { sm: '80px' },
          backgroundColor: '#243874',
          boxShadow: 'none',
          height: '60px',
          justifyContent: 'center',
          left:'0px',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            <Typography
              component={Link}
              to="/"
              variant="h6"
              sx={{
                fontWeight: 'bold',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              My Space
            </Typography>
            {!isMobile && (
              <Typography
                component={Link}
                to="/organization/overview"
                variant="h6"
                sx={{ color: 'white', textDecoration: 'none' }}
              >
                Organization
              </Typography>
            )}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton color="inherit"><Add /></IconButton>
            <IconButton color="inherit"><Search /></IconButton>
            <IconButton color="inherit"><Notifications /></IconButton>
            <Avatar sx={{ width: 32, height: 32, bgcolor: 'white', color: 'black', fontSize: 14 }}>
              P
            </Avatar>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Tabs */}
      <Box
        position="fixed"
        sx={{
          top: "60px",
          width: '100%',
          ml: 0,
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #ccc",
          height: "40px",
          pl: 2,
          pt: 1,
          overflowX: 'auto',
          left: 60
        }}
      >
        <Tabs
          value={tabValue}
          textColor="primary"
          indicatorColor="primary"
          variant={isMobile ? 'scrollable' : 'standard'}
          scrollButtons={isMobile ? 'auto' : false}
        >
          <Tab label="Overview" component={Link} to="/organization/overview" />
          <Tab label="Announcements" component={Link} to="/organization/announcements" />
          <Tab label="Policies" component={Link} to="/organization/policies" />
          <Tab label="Employee Tree" component={Link} to="/organization/employee-tree" />
          <Tab label="Employee List" component={Link} to="/organization/employee-list" />
          <Tab label="Department Tree" component={Link} to="/organization/department-tree" />
          <Tab label="Department Directory" component={Link} to="/organization/department-view" />
          <Tab label="Birthday Folks" component={Link} to="/organization/birthday-page" />
          <Tab label="New Hires" component={Link} to="/organization/new-hires" />
        </Tabs>
      </Box>

      {/* Routed content below tabs */}
      <Box sx={{ mt: '100px', p: 2 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default OrganizationPage;
