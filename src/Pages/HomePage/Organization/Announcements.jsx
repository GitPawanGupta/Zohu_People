import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Avatar,
  IconButton,
  Drawer,
  Checkbox,
  FormControlLabel,
  Button,
  Divider,
  TextField,
  MenuItem,
  InputAdornment
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import ClearIcon from '@mui/icons-material/Clear';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const Announcements = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const announcements = [
    {
      id: 1,
      title: 'Welcome to Zoho People',
      author: 'Shubham bhaskar',
      time: '27 May 1:31 PM',
      likes: 0,
      comments: 0
    }
  ];

  const filteredAnnouncements = announcements.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ p: 2, backgroundColor: '#f2f5f9', minHeight: '100vh', minWidth: '1300px',position:'fixed', marginTop:'-250px' }}>
      {/*  Search + Filter Icons */}
      {!showSearchBar && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mb: 2 }}>
          <IconButton sx={{ backgroundColor: 'white' }} onClick={() => setShowSearchBar(true)}>
            <SearchIcon />
          </IconButton>
          <IconButton sx={{ backgroundColor: 'white' }} onClick={() => setOpenFilter(true)}>
            <FilterListIcon />
          </IconButton>
        </Box>
      )}

      {/*  Search Bar Full Width */}
      {showSearchBar && (
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Announcement"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => {
                    setShowSearchBar(false);
                    setSearchTerm('');
                  }}>
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Box>
      )}

      {/*  Announcement Card */}
      {filteredAnnouncements.map((announcement) => (
        <Paper
          key={announcement.id}
          elevation={0}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 2,
            borderRadius: 2,
            mb: 1,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ mr: 2 }} />
            <Box>
              <Typography fontWeight="bold">{announcement.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {announcement.author} ・ {announcement.time}
              </Typography>
            </Box>
          </Box>

          {/* Reactions */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Typography variant="body2">{announcement.likes}</Typography>
              <ThumbUpAltOutlinedIcon fontSize="small" />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Typography variant="body2">{announcement.comments}</Typography>
              <ChatBubbleOutlineIcon fontSize="small" sx={{ color: '#0070f3' }} />
            </Box>
          </Box>
        </Paper>
      ))}

      {/*  Filter Drawer */}
      <Drawer anchor="right" open={openFilter} onClose={() => setOpenFilter(false)}>
        <Box sx={{ width: 300, p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Filter
          </Typography>

          <TextField select fullWidth label="Category" defaultValue="" sx={{ mb: 2 }}>
            <MenuItem value="HR">HR</MenuItem>
            <MenuItem value="Finance">Finance</MenuItem>
            <MenuItem value="General">General</MenuItem>
          </TextField>

          <TextField select fullWidth label="Location" defaultValue="" sx={{ mb: 2 }}>
            <MenuItem value="India">India</MenuItem>
            <MenuItem value="USA">USA</MenuItem>
            <MenuItem value="Remote">Remote</MenuItem>
          </TextField>

          <FormControlLabel control={<Checkbox />} label="Pinned Announcement" sx={{ mb: 3 }} />

          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button fullWidth variant="contained" onClick={() => setOpenFilter(false)}>
              Apply
            </Button>
            <Button fullWidth variant="outlined" onClick={() => setOpenFilter(false)}>
              Reset
            </Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Announcements;
