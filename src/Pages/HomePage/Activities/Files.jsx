import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import FolderOffIcon from '@mui/icons-material/FolderOff'; // MUI icon for empty folders

const Files = () => {
  return (
    <Box sx={{ px: 4, py: 6 }}>
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
          <FolderOffIcon sx={{ fontSize: 100, color: '#90a4ae', mb: 2 }} />
          <Typography variant="h6" fontWeight="medium">
            Personal uploads and files shared with you will be displayed here
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Files;
