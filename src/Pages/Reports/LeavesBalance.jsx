// src/pages/LeaveBalance.jsx

import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Breadcrumbs,
  Link as MuiLink,
  ToggleButtonGroup,
  ToggleButton,
  IconButton
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ViewListIcon from '@mui/icons-material/ViewList';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const LeaveBalance = () => {
  return (
    <Box sx={{ backgroundColor: '#f1f4f9', height: '100vh', p: 2, minWidth: 1400, mt: 8, position:'' }}>
      
      {/* Breadcrumb */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <MuiLink color="inherit" href="#" sx={{ display: 'flex', alignItems: 'center' }}>
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Leave Tracker
          </MuiLink>
          <Typography color="text.primary">Leave balance</Typography>
        </Breadcrumbs>

        {/* User Info */}
        <Box sx={{ ml: 4, display: 'flex', alignItems: 'center' }}>
          <Avatar sx={{ width: 32, height: 32, mr: 1 }} />
          <Typography variant="subtitle1" fontWeight="medium">
            PawanK Pawan Kumar
          </Typography>
        </Box>

        {/* View toggles */}
        <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: 1 }}>
          <ToggleButtonGroup exclusive size="small">
            <ToggleButton value="day" selected>Day</ToggleButton>
            <ToggleButton value="hour">Hour</ToggleButton>
          </ToggleButtonGroup>
          <IconButton>
            <AccessTimeIcon />
          </IconButton>
          <IconButton>
            <ViewListIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>
      </Box>

      {/* No Report Illustration */}
      <Box
        sx={{
          mt: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/10290/10290223.png"
          alt="No reports"
          style={{ width: 200, marginBottom: 20 }}
        />
        <Typography variant="h6">No reports illustrated yet</Typography>
      </Box>
    </Box>
  );
};

export default LeaveBalance;
