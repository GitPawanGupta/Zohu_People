
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
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper
} from '@mui/material';
import { Add, Search, Notifications, ChevronLeft, ChevronRight, PlayArrow } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import photo from '../../../src/assets/photo.png';

 

const TimeLogs = () => {
  const location = useLocation();

  const tabValue =
    location.pathname.includes("time-sheets") ? 1 :
    location.pathname.includes("jobs") ? 2 :
    location.pathname.includes("projects") ? 3 :
    location.pathname.includes("job-schedule") ? 4 : 0;

  return (
    <Box>
      {/* Top Navigation Bar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: theme => theme.zIndex.drawer + 1,
          width: `calc(100% - 80px)`,
          ml: `80px`,
          backgroundColor: "#243874",
          height: "60px",
          justifyContent: "center",
          boxShadow: "none"
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            sx={{ fontWeight: 'bold', color: 'white', textDecoration: 'none' }}
          >
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
      <Box
        position="fixed"
        sx={{
          top: "60px",
          width: `calc(100% - 80px)`,
          ml: `0px`,
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #ccc",
          height: "40px",
          pl: 2,
          pt: 1
        }}
      >
        <Tabs value={tabValue} textColor="primary" indicatorColor="primary">
          <Tab label="Time Logs" component={Link} to="/time/time-logs" />
          <Tab label="Timesheets" component={Link} to="/time/time-sheets" />
          <Tab label="Jobs" component={Link} to="/time/jobs" />
          <Tab label="Projects" component={Link} to="/time/projects" />
          <Tab label="Job Schedule" component={Link} to="/time/job-schedule" />
        </Tabs>
      </Box>

      {/* Main Page Content */}
      <Box sx={{ mt: "-200px", p: 3, backgroundColor: '#f4f6f8', minHeight: '100vh', minWidth: '1300px', position:'fixed' }}>
        
        {/* Date Navigation & Timer */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <IconButton><ChevronLeft /></IconButton>
          <Typography>08-Jun-2025 - 14-Jun-2025</Typography>
          <IconButton><ChevronRight /></IconButton>
          <Button variant="contained" sx={{ ml: 2 }}>Log Time</Button>

          <Box sx={{ flexGrow: 1 ,backgroundColor: 'green'}} />
          <TextField label="00:00:00" size="small" sx={{ width: 120,backgroundColor: 'green' }} />
          <IconButton color="success"><PlayArrow /></IconButton>
        </Box>

        {/* Filter Row */}
        <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', mb: 3 }}>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Select Project</InputLabel>
            <Select>
              <MenuItem value="">None</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Select Job</InputLabel>
            <Select>
              <MenuItem value="">None</MenuItem>
            </Select>
          </FormControl>
          <TextField fullWidth label="What are you working on?" />
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel>Billable</InputLabel>
            <Select>
              <MenuItem value="billable">Billable</MenuItem>
              <MenuItem value="non-billable">Non-billable</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* No Data View */}
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <img
            src={photo}
            alt="no time logs"
            style={{ width: 150, height: 100, marginBottom: 16 }}
          />
          <Typography>No time logs added currently. To add new time logs, click Log Time</Typography>
        </Box>

        {/* Totals Summary */}
        <Paper sx={{ display: 'flex', justifyContent: 'space-around', p: 2, mt: 2 }}>
          <Box>
            <Typography fontWeight="bold">00:00 Hrs</Typography>
            <Typography variant="caption">Total</Typography>
          </Box>
          <Box>
            <Typography fontWeight="bold" color="green">00:00 Hrs</Typography>
            <Typography variant="caption">Submitted</Typography>
          </Box>
          <Box>
            <Typography fontWeight="bold" color="orange">00:00 Hrs</Typography>
            <Typography variant="caption">Not Submitted</Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default TimeLogs;
