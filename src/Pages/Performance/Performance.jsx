import React from 'react';
import { Box, Typography } from '@mui/material';
import photo from '../../../src/assets/photo.png';


const Performance = () => {
  return (
    

    
    <Box
    
    
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#fff',
        px: 2,
      }}
    >
      
                                  <img
                                      src={photo} // Change this path as per your actual image location
                                      alt=""
                                      style={{ width: 150, height: 100, marginBottom: 16 }}
                                    />
      
      <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>
        The performance getting started process has not been completed yet.
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        Please contact administrator.
      </Typography>
    </Box>
  );
};

export default Performance;
