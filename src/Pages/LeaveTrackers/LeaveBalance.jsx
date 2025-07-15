import React from 'react';
import { Box, Typography, Paper, Button, IconButton, MenuItem, Select } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import photo from '../../../src/assets/photo.png'; // Update this path if necessary

const LeaveBalance = () => {
  const [filter, setFilter] = React.useState("Leave");

  return (
    <Box sx={{ px: 2, py: 4, backgroundColor: '#f3f6fb', minHeight: '100vh',minWidth:'1300px' }}>
      {/* Header Controls */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          size="small"
          sx={{
            width: 160,
            backgroundColor: '#fff',
            borderRadius: 1,
            boxShadow: 1,
          }}
        >
          <MenuItem value="Leave">Leave</MenuItem>
          <MenuItem value="WFH">WFH</MenuItem>
          <MenuItem value="Sick">Sick</MenuItem>
        </Select>

        <IconButton
          sx={{
            backgroundColor: '#fff',
            boxShadow: 1,
            height: 36,
            width: 36,
            borderRadius: 1,
          }}
        >
          <FilterListIcon />
        </IconButton>
      </Box>

      {/* No Data Panel */}
      <Paper
        elevation={0}
        sx={{
          borderRadius: 2,
          backgroundColor: '#ffffff',
          py: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Box
          component="img"
          src={photo}
          alt="No Data"
          sx={{ width: 160, mb: 1 }}
        />
        <Typography variant="body1" fontWeight={500} color="text.primary">
          No Data Found
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: '#007bff',
            textTransform: 'none',
            fontWeight: 500,
            px: 3,
            '&:hover': {
              backgroundColor: '#006ae0',
            },
          }}
        >
          Add Request
        </Button>
      </Paper>
    </Box>
  );
};

export default LeaveBalance;
