import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

const Timesheet = () => {
  return (
    <Box sx={{ px: 2, py: 4 }}>
      <Paper
        elevation={0}
        sx={{
          width: '100%',
          minHeight: '300px',
          backgroundColor: '#f1f4f9',
          borderRadius: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: { xs: 2, md: 4 },
        }}
      >
        <Box textAlign="center" maxWidth={600} mx="auto">
          <HourglassEmptyIcon sx={{ fontSize: 80, color: '#90a4ae', mb: 2 }} />
          <Typography variant="h6" fontWeight="medium">
            No timesheets added for current month
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Timesheet;
