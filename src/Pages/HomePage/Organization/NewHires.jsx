import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

const NewHires = () => {
  return (
    <Box sx={{ p: 3, backgroundColor: '#edf1f7', minHeight: '100vh', minWidth:1300 }}>
      <Paper
        elevation={1}
        sx={{
          borderRadius: 2,
          height: 'calc(100vh - 100px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#fff',
          p: 4
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/10290/10290223.png"
          alt="No joinees"
          style={{ width: 160, marginBottom: 16 }}
        />
        <Typography variant="subtitle1">
          No New Joinees in past 15 days.
        </Typography>
      </Paper>
    </Box>
  );
};

export default NewHires;
