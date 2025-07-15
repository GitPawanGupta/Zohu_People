import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const History = () => {
  return (
    <Box sx={{ px: 4, py: 6 }}>
      <Paper
        elevation={0}
        sx={{
          backgroundColor: '#f5f7fb',
          borderRadius: 2,
          minHeight: 350,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 3,
        }}
      >
        <Box textAlign="center">
          <InfoOutlinedIcon sx={{ fontSize: 80, color: '#90a4ae', mb: 2 }} />
          <Typography variant="h6" fontWeight="medium">
            No career history data
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={1}>
            Ensure that the Date of Joining is updated for this employee to view their<br />
            career history information.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default History;
