import React, { useState } from 'react';
import {
  Box, Typography, Paper, IconButton, Button, Menu, MenuItem, TextField, Divider,
  Select, FormControl, InputLabel, ListItemIcon
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ViewListIcon from '@mui/icons-material/ViewList';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import FilterListIcon from '@mui/icons-material/FilterList';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

const Holiday = () => {
  const [viewMode, setViewMode] = useState('list');
  const [dropdownAnchor, setDropdownAnchor] = useState(null);
  const [filterAnchor, setFilterAnchor] = useState(null);
  const [moreAnchor, setMoreAnchor] = useState(null);

  const openDropdown = Boolean(dropdownAnchor);
  const openFilter = Boolean(filterAnchor);
  const openMore = Boolean(moreAnchor);

  return (
    <Box sx={{ p: 0, backgroundColor: '#f1f4f8', minHeight: '100vh', minWidth:'1450px', position:'fixed', mt:-42, ml:-10 }}>
      {/* Top Toolbar */}
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
        <IconButton>
          <CalendarTodayIcon />
        </IconButton>

        <Typography variant="h6">01-Jan-2025 - 31-Dec-2025</Typography>

        <Box display="flex" alignItems="center" gap={1}>
          <IconButton onClick={() => setViewMode('list')}>
            <ViewListIcon color={viewMode === 'list' ? 'primary' : 'inherit'} />
          </IconButton>
          <IconButton onClick={() => setViewMode('calendar')}>
            <CalendarViewMonthIcon color={viewMode === 'calendar' ? 'primary' : 'inherit'} />
          </IconButton>

          {/* Dropdown */}
          <Button
            variant="outlined"
            onClick={(e) => setDropdownAnchor(e.currentTarget)}
          >
            My Holidays
          </Button>

          {/* Filter Icon */}
          <IconButton onClick={(e) => setFilterAnchor(e.currentTarget)}>
            <FilterListIcon />
          </IconButton>

          {/* More Icon */}
          <IconButton onClick={(e) => setMoreAnchor(e.currentTarget)}>
            <MoreVertIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Content */}
      {viewMode === 'list' ? (
        <Paper sx={{ p: 4, textAlign: 'center', borderRadius: 2 }}>
          <img
            src="/no-data.png" // replace with your actual image path or use base64
            alt="No data"
            style={{ maxWidth: 150, marginBottom: 16 }}
          />
          <Typography>No holiday data to display currently</Typography>
        </Paper>
      ) : (
        <Paper sx={{ p: 4, minHeight: '400px', borderRadius: 2 }}>
          <Typography variant="h6" textAlign="center">
            [ Calendar View Placeholder ]
          </Typography>
        </Paper>
      )}

      {/* Dropdown Menu */}
      <Menu
        anchorEl={dropdownAnchor}
        open={openDropdown}
        onClose={() => setDropdownAnchor(null)}
      >
        <Box sx={{ p: 2, width: 250 }}>
          <TextField
            fullWidth
            placeholder="Search"
            size="small"
            InputProps={{
              startAdornment: <SearchIcon sx={{ mr: 1 }} />,
            }}
          />
          <MenuItem>All Shift</MenuItem>
          <MenuItem>General Shift</MenuItem>
        </Box>
      </Menu>

      {/* Filter Menu */}
      <Menu
        anchorEl={filterAnchor}
        open={openFilter}
        onClose={() => setFilterAnchor(null)}
      >
        <Box sx={{ p: 2, width: 250 }}>
          <Typography variant="subtitle1">Classification</Typography>
          <FormControl fullWidth sx={{ my: 1 }}>
            <InputLabel>Type</InputLabel>
            <Select label="Type" defaultValue="">
              <MenuItem value="optional">Optional</MenuItem>
              <MenuItem value="mandatory">Mandatory</MenuItem>
            </Select>
          </FormControl>
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Button variant="outlined" size="small">Reset</Button>
            <Button variant="contained" size="small">Apply</Button>
          </Box>
        </Box>
      </Menu>

      {/* More Menu */}
      <Menu
        anchorEl={moreAnchor}
        open={openMore}
        onClose={() => setMoreAnchor(null)}
      >
        <MenuItem onClick={() => alert('Exporting...')}>
          <ListItemIcon>
            <CalendarTodayIcon fontSize="small" />
          </ListItemIcon>
          Export
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Holiday;
