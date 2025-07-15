import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import photo from '../../../src/assets/photo.png'; // Make sure this matches your project structure

const LeaveRequests = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        mx: 2,
        mt: 12,
        mb: 4,
        height: 340,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: 2,
        backgroundColor: '#f3f6fb',
        minWidth:'1300px'
      }}
    >
      <Box
        component="img"
        src={photo}
        alt="No Data"
        sx={{
          width: 160,
          height: 'auto',
          mb: 1,
        }}
      />
      <Typography variant="body1" fontWeight={500} color="text.primary">
        No Data Found
      </Typography>
    </Paper>
  );
};

export default LeaveRequests;
