// src/pages/CareerHistory.jsx

import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Breadcrumbs,
  Link as MuiLink,
  Paper
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const CareerHistory = () => {
  return (
    <Box sx={{ p: 2, backgroundColor: '#f1f4f9', height: '100vh', minWidth: 1400, mt:10 }}>
      {/* Breadcrumb */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <MuiLink color="inherit" href="#" sx={{ display: 'flex', alignItems: 'center' }}>
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Employee Info
          </MuiLink>
          <Typography color="text.primary">Career History</Typography>
        </Breadcrumbs>
      </Box>

      {/* Main Content */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        {/* Left Profile Panel */}
        <Paper elevation={1} sx={{ width: 280, p: 3, textAlign: 'center' }}>
          <Avatar
            sx={{
              width: 100,
              height: 100,
              mx: 'auto',
              mb: 2,
              bgcolor: '#e0e0e0'
            }}
          />
          <Typography variant="h6">
            <span style={{ fontWeight: 500 }}>PawanK</span> - <strong>Pawan Kumar</strong>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            erpawan459@gmail.com
          </Typography>
        </Paper>

        {/* Center Panel */}
        <Paper
          elevation={1}
          sx={{
            flex: 1,
            p: 4,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 300,
            textAlign: 'center'
          }}
        >
          <Box>
            <img
              src="https://cdn-icons-png.flaticon.com/512/10290/10290223.png"
              alt="No Data"
              style={{ width: 180, marginBottom: 20 }}
            />
            <Typography variant="h6" gutterBottom>
              No career history data
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Ensure that the Date of Joining is updated for this employee to view their career history information.
            </Typography>
          </Box>
        </Paper>

        {/* Right Timeline */}
        <Paper elevation={1} sx={{ width: 150, p: 2 }}>
          <Typography fontWeight="bold">The Journey</Typography>
          {/* Placeholder timeline dot */}
          <Box sx={{ height: 10, width: 10, borderRadius: '50%', backgroundColor: '#ccc', mt: 2, mx: 'auto' }}></Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default CareerHistory;
