import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  MenuItem,
  Select,
  IconButton,
  TextField
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SearchIcon from '@mui/icons-material/Search';

const BirthdayPage = () => {
  const [filter, setFilter] = useState('Today');
  const [selectedDate, setSelectedDate] = useState('2025-06-30');

  return (
    <Box sx={{ p: 3, backgroundColor: '#edf1f7', minHeight: '100vh', minWidth:1300 }}>
      {/* Top Controls */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
        <Select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          size="small"
          sx={{ width: 200, backgroundColor: '#fff' }}
        >
          <MenuItem value="Today">Today</MenuItem>
          <MenuItem value="Current Month">Current Month</MenuItem>
          <MenuItem value="Favorites">Favorites</MenuItem>
          <MenuItem value="My Department">My Department</MenuItem>
        </Select>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: 1,
            px: 1,
            height: 40
          }}
        >
          <IconButton size="small">
            <CalendarTodayIcon fontSize="small" />
          </IconButton>
          <TextField
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            variant="standard"
            InputProps={{ disableUnderline: true }}
            sx={{ width: 140 }}
          />
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <IconButton sx={{ backgroundColor: '#fff', height: 40, width: 40 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* Birthday Card */}
      <Paper
        elevation={1}
        sx={{
          borderRadius: 2,
          height: 'calc(100vh - 120px)',
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
          alt="No birthday"
          style={{ width: 160, marginBottom: 16 }}
        />
        <Typography variant="subtitle1">No Birthday buddies found.</Typography>
      </Paper>
    </Box>
  );
};

export default BirthdayPage;
