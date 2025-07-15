import React from 'react';
import { Box, Typography } from '@mui/material';
import photo from '../../../src/assets/photo.png'; // adjust path as needed

const LeaveSummary = () => {
  return (
    <Box
      sx={{
        minHeight: '60vh',
        backgroundColor: '#F1F4F8',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        mt:10,
        minWidth:'1300px'
      }}
    >
      <img src={photo} alt="Placeholder" style={{ width: 160, height: 160, marginBottom: 16 }} />
      <Typography sx={{ color: '#2E3A59', fontSize: 14 }}>
        You can't view leave information or perform leave related actions for this employee
      </Typography>
      <Typography sx={{ color: '#2E3A59', fontSize: 14 }}>
        as Date of Joining is not yet updated.
      </Typography>
    </Box>
  );
};

export default LeaveSummary;
