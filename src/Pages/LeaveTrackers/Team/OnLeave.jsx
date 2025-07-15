import React from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Paper,
  IconButton,
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ViewListIcon from '@mui/icons-material/ViewList';
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek';
import FilterListIcon from '@mui/icons-material/FilterList';
import phota from '../../../assets/photo.png' // update this path if needed
import { Photo } from '@mui/icons-material';


const OnLeave = () => {
  const [tabValue, setTabValue] = React.useState('onleave');

  return (
    <Box sx={{ p: 2, backgroundColor: '#f3f6fb', minHeight: '100vh',mr:15,ml:-10 }}>
      {/* Tabs */}
      {/* Toolbar */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#f3f6fb',
          px: 1,
          mb: 2,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton
            sx={{ backgroundColor: '#fff', borderRadius: 1, height: 36, width: 36, boxShadow: 1 }}
          >
            <CalendarMonthIcon fontSize="small" />
          </IconButton>
          <Typography sx={{ fontWeight: 500 }}>
            15-Jun-2025 - 21-Jun-2025
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton sx={{ backgroundColor: '#fff', borderRadius: 1, height: 36, width: 36 }}>
            <ViewListIcon fontSize="small" />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: '#fff',
              borderRadius: 1,
              height: 36,
              width: 36,
              border: '1px solid #1976d2',
            }}
          >
            <CalendarViewWeekIcon fontSize="small" sx={{ color: '#1976d2' }} />
          </IconButton>
          <IconButton sx={{ backgroundColor: '#fff', borderRadius: 1, height: 36, width: 36 }}>
            <FilterListIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* No Data Card */}
      <Paper
        elevation={0}
        sx={{
          py: 4,
          borderRadius: 2,
          backgroundColor: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src={Photo}
          alt="No Data"
          sx={{ width: 160, mb: 2 }}
        />
        <Typography variant="body1" fontWeight={500}>
          No team members on leave this week
        </Typography>
      </Paper>
      
    </Box>
  );
};

export default OnLeave;
