import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Paper,
  TextField,
  Button,
  Drawer
} from '@mui/material';
import ListIcon from '@mui/icons-material/ViewList';
import FolderIcon from '@mui/icons-material/Folder';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const Policies = () => {
  const [view, setView] = useState('list');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [fileName, setFileName] = useState('');

  const SharedContent = () => (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 2,
        bgcolor: '#ffffff',
        maxWidth: '100%',
        minHeight: '360px',
        justifyContent: 'center',
      }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/10290/10290223.png"
        alt="No files"
        style={{ width: 160, marginBottom: 16 }}
      />
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        No shared files to display
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Files shared to you by other employees will be listed here
      </Typography>
    </Paper>
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ backgroundColor: '#f1f4f9', minHeight: '100vh', p: 2 , minWidth:'1300px'}}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mb: 2 }}>
          <IconButton
            sx={{
              border: view === 'list' ? '1px solid #2196f3' : '1px solid #ccc',
              bgcolor: view === 'list' ? '#e3f2fd' : '#fff',
            }}
            onClick={() => setView('list')}
          >
            <ListIcon sx={{ color: view === 'list' ? '#2196f3' : 'inherit' }} />
          </IconButton>
          <IconButton
            sx={{
              border: view === 'folder' ? '1px solid #2196f3' : '1px solid #ccc',
              bgcolor: view === 'folder' ? '#e3f2fd' : '#fff',
            }}
            onClick={() => setView('folder')}
          >
            <FolderIcon sx={{ color: view === 'folder' ? '#2196f3' : 'inherit' }} />
          </IconButton>
          <IconButton onClick={() => setIsFilterOpen(true)} sx={{ border: '1px solid #ccc', bgcolor: '#fff' }}>
            <FilterListIcon />
          </IconButton>
        </Box>

        {view === 'list' && <SharedContent />}
        {view === 'folder' && <SharedContent />}

        <Drawer anchor="right" open={isFilterOpen} onClose={() => setIsFilterOpen(false)}>
          <Box sx={{ width: 300, p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h6">Filter</Typography>
              <IconButton onClick={() => setIsFilterOpen(false)}>
                <CloseIcon />
              </IconButton>
            </Box>

            <TextField
              fullWidth
              label="File name"
              placeholder="Enter the file name"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              sx={{ mb: 3 }}
            />

            <DatePicker
              label="From"
              value={fromDate}
              onChange={(newValue) => setFromDate(newValue)}
              format="DD-MMM-YYYY"
              sx={{ mb: 3 }}
            />

            <DatePicker
              label="To"
              value={toDate}
              onChange={(newValue) => setToDate(newValue)}
              format="DD-MMM-YYYY"
              sx={{ mb: 3 }}
            />

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="contained">Search</Button>
              <Button variant="outlined" onClick={() => {
                setFileName('');
                setFromDate(null);
                setToDate(null);
              }}>Reset</Button>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </LocalizationProvider>
  );
};

export default Policies;
