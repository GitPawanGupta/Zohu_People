// src/Pages/HomePage/Activities/Feeds.jsx
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Avatar,
  TextField,
  Tabs,
  Tab
} from '@mui/material';
import photo from '../../../assets/photo.png';

const Feeds = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    'All',
    'Status',
    'Announcement',
    'Approvals',
    'Mail Alerts',
    'Holidays',
    '...'
  ];

  return (
    <Box sx={{ px: 6, py: 3, backgroundColor: '#f1f4f8', minHeight: '100vh', marginTop:'50px' }}>
      <Paper sx={{ p: 2, mb: 2, borderRadius: 2 }}>
        {/* Input Field */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 1 }}>
          <Avatar />
          <TextField
            fullWidth
            placeholder="Type @ to mention someone"
            variant="standard"
            InputProps={{ disableUnderline: true }}
          />
        </Box>

        {/* Tabs */}
        <Tabs
          value={activeTab}
          onChange={(e, newValue) => setActiveTab(newValue)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ mt: 2, px: 2, borderBottom: '1px solid #e0e0e0' }}
        >
          {tabs.map((label, index) => (
            <Tab
              key={index}
              label={label}
              sx={{
                textTransform: 'none',
                fontWeight: activeTab === index ? 'bold' : 'normal',
                color: '#333'
              }}
            />
          ))}
        </Tabs>
      </Paper>

      {/* Empty State */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: 400,
          backgroundColor: '#f1f4f8',
        }}
      >
        <img
          src={photo}
          alt="No Feeds"
          style={{ width: 180, height: 'auto', marginBottom: 16 }}
        />
        <Typography variant="body1" sx={{ color: 'gray' }}>
          No Feeds Yet
        </Typography>
      </Box>
    </Box>
  );
};

export default Feeds;
