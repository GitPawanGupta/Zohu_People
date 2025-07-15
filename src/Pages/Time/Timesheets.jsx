import React from 'react';
import {
  AppBar, Toolbar, Typography, Tabs, Tab, Box, IconButton, Avatar, Button,
  FormControl, InputLabel, Select, MenuItem
} from '@mui/material';
import {
  Add, Search, Notifications, ChevronLeft, ChevronRight, FilterList, CalendarToday
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import photo from '../../../src/assets/photo.png';
const Timesheets = () => {
  const location = useLocation();

  const tabValue =
    location.pathname.includes("time-sheets") ? 1 :
    location.pathname.includes("jobs") ? 2 :
    location.pathname.includes("projects") ? 3 :
    location.pathname.includes("job-schedule") ? 4 :
    0;

  return (
    <Box>
      {/* Top App Bar */}
      <AppBar position="fixed"
        sx={{
          zIndex: theme => theme.zIndex.drawer + 1,
          width: `calc(100% - 80px)`,
          ml: `80px`,
          backgroundColor: "#243874",
          height: "60px",
          boxShadow: "none",
          justifyContent: "center"
        }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography component={Link} to="/" variant="h6" sx={{ fontWeight: 'bold', color: 'white', textDecoration: 'none' }}>
            My Data
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton color="inherit"><Add /></IconButton>
            <IconButton color="inherit"><Search /></IconButton>
            <IconButton color="inherit"><Notifications /></IconButton>
            <Avatar sx={{ width: 32, height: 32, bgcolor: 'white', color: 'black', fontSize: 14 }}>P</Avatar>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Tabs */}
      <Box position="fixed" sx={{
        top: "60px",
        width: `calc(100% - 80px)`,
        ml: `0px`,
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #ccc",
        height: "40px",
        pl: 2,
        pt: 1
      }}>
        <Tabs value={tabValue} textColor="primary" indicatorColor="primary">
          <Tab label="Time Logs" component={Link} to="/time/time-logs" />
          <Tab label="Timesheets" component={Link} to="/time/time-sheets" />
          <Tab label="Jobs" component={Link} to="/time/jobs" />
          <Tab label="Projects" component={Link} to="/time/projects" />
          <Tab label="Job Schedule" component={Link} to="/time/job-schedule" />
        </Tabs>
      </Box>

      {/* Content */}
      <Box sx={{ mt: "100px", px: 3 ,minWidth:'1300px'}}>
        {/* Filters */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
          <IconButton><ChevronLeft /></IconButton>
          <IconButton><CalendarToday /></IconButton>
          <Typography>Jun 2025</Typography>
          <IconButton><ChevronRight /></IconButton>

          <FormControl size="large" >
            <InputLabel>All</InputLabel>
            <Select label="All" defaultValue="">
              <MenuItem value="">All</MenuItem>
              <MenuItem value="">Draft</MenuItem>
              <MenuItem value="approved">Approved</MenuItem>
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="">Rejected</MenuItem>
            </Select>
          </FormControl>

          <Button variant="contained" sx={{ ml: 'auto', backgroundColor: "#1976d2" }}>
            Create Timesheet
          </Button>
          <IconButton>
            <FilterList />
          </IconButton>
        </Box>

        {/* No Data Section */}
        <Box
          sx={{
            mt: 5,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '60vh',
            backgroundColor: "#f5f7fa",
            borderRadius: 2,
            border: '1px solid #ccc'
          }}
        >
          <img src={photo} alt="no data" style={{ width: 150, marginBottom: 16 }} />
          <Typography>No timesheets found for the applied filters.</Typography>
          <Typography>To add new timesheets, click Create Timesheet</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Timesheets;

