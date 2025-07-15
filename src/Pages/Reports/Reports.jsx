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
  Button
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

const Reports = () => {
  return (
    <Box sx={{ display: 'flex', position:'', mt: '-60px', minWidth: 1300 }}>
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
      <Box sx={{ flexGrow: 1, mt: '0px', ml: '0px', p: 2, width: '1000px' }}>
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
          {/* Employee Info */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Info fontSize="small" />
                <Typography variant="subtitle1">Employee Information</Typography>
              </Box>
              <Box sx={{ mt: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                <Star fontSize="small" />
                <Button
                  component={Link}
                  to="/career-history"
                  size="small"
                  sx={{ textTransform: 'none', padding: 0, minWidth: 0 }}
                >
                  Career History
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Leave Tracker */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <BeachAccess fontSize="small" />
                <Typography variant="subtitle1" fontWeight="bold">Leave Tracker</Typography>
              </Box>
              <Box sx={{ mt: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                <Star fontSize="small" />
                <Button
                  component={Link}
                  to="/leaves-balance"
                  size="small"
                  sx={{ textTransform: 'none', padding: 0, minWidth: 0 }}
                >
                  Leave Balance
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Reports;
