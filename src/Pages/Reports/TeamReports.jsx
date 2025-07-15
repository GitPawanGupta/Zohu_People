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
  InputAdornment
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
import { Link } from 'react-router-dom';

const TeamReports = () => {
  return (
    <Box sx={{ display: 'flex', minWidth:1300 }}>
      {/* Top AppBar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: theme => theme.zIndex.drawer + 1,
          width: `calc(100% - 80px)`,
          ml: `0px`,
          backgroundColor: "#243874",
          boxShadow: "none",
          height: "60px",
          justifyContent: "center",
          left:'80px'
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Typography
              component={Link}
              to="/reports"
              variant="h6"
              sx={{ fontWeight: 'bold', color: 'white', textDecoration: 'none', cursor: 'pointer' }}
            >
              My Reports
            </Typography>
            <Typography
              component={Link}
              to="/team"
              variant="h6"
              sx={{ color: 'white', textDecoration: 'none', cursor: 'pointer' }}
            >
              Team Reports
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

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, mt: '60px', ml: '0px', p: 2 }}>
        {/* Search Bar */}
        <Box sx={{ mb: 4 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search Reports"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Report Sections */}
        <Grid container spacing={4}>
         

          {/* Leave Tracker */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 40 , textAlign: 'left', width: 350}}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, textAlign: 'left' }}>
                <BeachAccess fontSize="small" />
                <Typography variant="subtitle1" fontWeight="bold" sx={{ textAlign: 'left', pl: 0 }}>Leave Tracker</Typography>
              </Box>
              <Typography sx={{ mt: 1 }}>
                <Star fontSize="small" sx={{ mr: 1 }} /> Resource availability
              </Typography>
            </Paper>
          </Grid>

         
        </Grid>
      </Box>
    </Box>
  );
};

export default TeamReports;
