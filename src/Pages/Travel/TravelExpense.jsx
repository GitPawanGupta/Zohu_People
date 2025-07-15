import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
  TextField,
  Grid,
  Paper,
  InputAdornment,
  Button,
  FormControl,
  Select,
  MenuItem
} from '@mui/material';

import {
  Add,
  Search,
  Notifications,
  Info,
  BeachAccess,
  AccessTime,
  Star
} from '@mui/icons-material';

import AddIcon from '@mui/icons-material/Add';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import FilterListIcon from '@mui/icons-material/FilterList';

import { Link } from 'react-router-dom';

const TravelRequest = () => {
  // State for dropdowns
  const [view, setView] = React.useState('Travel Request View');
  const [filter, setFilter] = React.useState('My Data');

  return (
    <Box sx={{ display: 'flex', mt: '-60px', minWidth: 1300 }}>
      
      {/* Top AppBar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: theme => theme.zIndex.drawer + 1,
          width: `calc(100% - 90px)`,
          ml: `0px`,
          backgroundColor: "#243874",
          boxShadow: "none",
          height: "60px",
          justifyContent: "center",
          left: '80px'
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Typography
              component={Link}
              to="/travel-request"
              variant="h6"
              sx={{ fontWeight: 'bold', color: 'white', textDecoration: 'none', cursor: 'pointer' }}
            >
              Travel Request
            </Typography>
            <Typography
              component={Link}
              to="/travel-expense"
              variant="h6"
              sx={{ color: 'white', textDecoration: 'none', cursor: 'pointer' }}
            >
              Travel Expense
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton color="inherit"><Add /></IconButton>
            <IconButton color="inherit"><Search /></IconButton>
            <IconButton color="inherit"><Notifications /></IconButton>
            <Avatar sx={{ width: 32, height: 32, bgcolor: 'white', color: 'black', fontSize: 14 }}>P</Avatar>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Controls */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 3,
          py: 2,
          mt: '70px',
          width: '100%',
        }}
      >
        {/* View Dropdown */}
        <FormControl sx={{ minWidth: 300 }}>
          <Select value={view} onChange={(e) => setView(e.target.value)} size="small">
            <MenuItem value="Travel Request View">Travel Request View</MenuItem>
            <MenuItem value="All Requests">All Requests</MenuItem>
          </Select>
        </FormControl>

        {/* Filter and Actions */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <FormControl sx={{ minWidth: 140 }}>
            <Select value={filter} onChange={(e) => setFilter(e.target.value)} size="small">
              <MenuItem value="My Data">My Data</MenuItem>
              <MenuItem value="Team">Team</MenuItem>
            </Select>
          </FormControl>

          <Button variant="contained" startIcon={<AddIcon />} size="small">
            Add Record
          </Button>
          <IconButton>
            <OpenInFullIcon />
          </IconButton>
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Table Placeholder */}
      <Box sx={{ px: 3, width: '100%' }}>
        <Paper
          elevation={1}
          sx={{
            borderRadius: 2,
            minHeight: 400,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#ffffff',
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/10290/10290223.png"
            alt="No records"
            style={{ width: 150, marginBottom: 20 }}
          />
          <Typography variant="subtitle1" color="text.secondary">
            No records found
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default TravelRequest;
