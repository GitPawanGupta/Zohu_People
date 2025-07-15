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
  useMediaQuery
} from '@mui/material';
import { Add, Search, Notifications, Menu } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const Header = ({ onSidebarToggle }) => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Determine the selected tab based on route
  const tabValue =
    location.pathname === "/" ? 0 :
    location.pathname.includes("/dashboard") ? 1 :
    location.pathname.includes("/calendar") ? 2 :
    false;

  return (
    <Box sx={{ width: '100%' }}>
      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: theme.zIndex.drawer + 1,
          width: isMobile ? '100%' : 'calc(100% - 60px)', // Responsive width
          left: isMobile ? 0 : '60px', // Responsive sidebar alignment
          backgroundColor: "#243874",
          boxShadow: "none",
          height: "60px",
          justifyContent: "center",
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            {isMobile && (
              <IconButton color="inherit" onClick={onSidebarToggle}>
                <Menu />
              </IconButton>
            )}
            <Typography
              component={Link}
              to="/"
              variant="h6"
              sx={{
                fontWeight: 'bold',
                color: 'white',
                textDecoration: 'none'
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
      {['/', '/dashboard', '/calendar'].includes(location.pathname) && (
        <Box
          position="fixed"
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

          }}
        >
          <Tabs
            value={tabValue}
            textColor="primary"
            indicatorColor="primary"
            variant={isMobile ? 'scrollable' : 'standard'}
            scrollButtons={isMobile ? 'auto' : false}
          >
            <Tab label="Overview" component={Link} to="/" />
            <Tab label="Dashboard" component={Link} to="/dashboard" />
            <Tab label="Calendar" component={Link} to="/calendar" />
          </Tabs>
        </Box>
      )}
    </Box>
  );
};

export default Header;
