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
  Button,
  MenuItem,
  Select
} from '@mui/material';
import { Add, Search, Notifications } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import photo from '../../../src/assets/photo.png'; // add your illustration image here

const Jobs = () => {
  const location = useLocation();

  const tabValue =
    location.pathname.includes("projects") ? 3 :
    location.pathname.includes("jobs") ? 2 :
    location.pathname.includes("time-sheets") ? 1 :
    0;

  return (
    <Box>
      {/* Top App Bar */}
      <AppBar position="fixed" sx={{
        zIndex: theme => theme.zIndex.drawer + 1,
        width: `calc(100% - 80px)`,
        ml: `80px`,
        backgroundColor: "#243874",
        boxShadow: "none",
        height: "60px",
        justifyContent: "center"
      }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography component={Link} to="/" variant="h6" sx={{ fontWeight: 'bold', color: 'white', textDecoration: 'none' }}>
            MyData
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
        pt: 1, 
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
      <Box sx={{
        mt: "10px",
        px: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth:'1300px'
      }}>
        <Box sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4
        }}>
          <Select defaultValue="Jobs" sx={{ minWidth: 150 }}>
            <MenuItem value="Jobs">Jobs</MenuItem>
          </Select>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button variant="contained" sx={{ backgroundColor: '#1976d2' }}>Employee</Button>
            <Button variant="contained" disabled>Department</Button>
            <Button variant="contained" sx={{ backgroundColor: '#1976d2' }}>Add Job</Button>
          </Box>
        </Box>

        {/* No Jobs Message */}
        <Box sx={{
          width: 1000,
          height: 200,
          border: '1px solid #ccc',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: "#f0f0f0"
        }}>
          <img
            src={photo}
            alt="No Jobs"
            style={{ width: 150, height: 100, marginBottom: 16 }}
          />
          <Typography>No Jobs added currently. To add new Jobs, click Add Job</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Jobs;
