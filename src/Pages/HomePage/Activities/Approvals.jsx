import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import photo from '../../../assets/photo.png'; // ✅ Corrected relative path

const Approvals = () => {
  return (
    <Box sx={{ px: 8, py: 10, minWidth: '100vw' }}>
      <Paper
        sx={{
          height: 350,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 400
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <img
            src={photo}
            alt="No Approvals"
            style={{ width: 180, height: 180, objectFit: 'contain' }}
          />
          <Typography variant="body1" sx={{ mt: 2, color: 'gray' }}>
            All set! No requests pending approval
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Approvals;
