import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';


const Leavs = () => {
  return (
    <Box sx={{ p: 3, minWidth:'1300px' }}>
      <Paper
        elevation={1}
        sx={{
          borderRadius: '12px',
          p: 5,
          textAlign: 'center',
          backgroundColor: '#f5f9fc',
          minHeight: 250,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SentimentDissatisfiedIcon sx={{ fontSize: 80, color: '#90a4ae', mb: 2 }} />
        <Typography variant="h6" color="text.secondary">
          No Data Found
        </Typography>
      </Paper>
    </Box>
  );
};

export default Leavs;