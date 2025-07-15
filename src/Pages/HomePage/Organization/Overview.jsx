import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Avatar, Paper, Divider } from '@mui/material';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import TaskIcon from '@mui/icons-material/Task';

const Overview = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const timerRef = useRef(null);
  const [activeTab, setActiveTab] = useState('Services');

  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs} : ${mins} : ${secs}`;
  };

  const CheckIn = () => {
    setIsCheckedIn(true);
    timerRef.current = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);
  };

  const CheckOut = () => {
    setIsCheckedIn(false);
    clearInterval(timerRef.current);
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <Box sx={{ pt: 12, px: 3, backgroundColor: '#f5f7fa', minHeight: '100vh',marginRight:'150px', marginTop:'-250px',minWidth:'1300px' }}>
      {/* Background Banner */}
      <Box
              sx={{
                height: { xs: 190, sm: 300, md: 280 },
                backgroundImage: 'url("/public/bg1-banner.jpg")',
                backgroundSize: 'full',
                backgroundPosition: "center",
                borderRadius: 0,
                mb: 2,
                minWidth: '100%',
                left: '-150px',
              }}
            />

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
        {/* Left Check-in Card */}
        <Paper sx={{ p: 2, width: { xs: '100%', md: 280 }, textAlign: 'center' }}>
          <img
            src="https://static.zohocdn.com/zohopeople/people5/images/ppl_logo.b70dd01cd185414f1793c0a089d331d7.svg"
            alt="Zoho Logo"
            style={{ width: 100, height: 'auto', marginBottom: 8 }}
          />
          <Typography variant="h6">Spirale Infosoft Solution Pvt Ltd</Typography>
          <Typography color={isCheckedIn ? 'green' : 'gray'}>India</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body2">Quick Links</Typography>
          <Typography variant="caption">No quick links</Typography>
        </Paper>

        {/* Main Content */}
        <Box flex={1}>
          {/* Tabs */}
          <Paper sx={{ py: 1, px: 2, mb: 2 }}>
            <Box sx={{ display: 'flex', gap: 3 }}>
              {['Services', 'Location'].map((label) => (
                <Typography
                  key={label}
                  onClick={() => setActiveTab(label)}
                  sx={{
                    cursor: 'pointer',
                    fontWeight: activeTab === label ? 'bold' : 'normal',
                    borderBottom: activeTab === label ? '2px solid blue' : 'none',
                  }}
                >
                  {label}
                </Typography>
              ))}
            </Box>
          </Paper>

          {/* Content Section */}
          {activeTab === 'Services' && (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              {[
                { icon: <BeachAccessIcon sx={{ color: 'blue' }} />, label: 'Leave Tracker' },
                { icon: <AlarmOnIcon sx={{ color: 'orange' }} />, label: 'Time Tracker' },
                { icon: <FileCopyIcon sx={{ color: 'blue' }} />, label: 'Files' },
                { icon: <StarOutlineIcon sx={{ color: 'red' }} />, label: 'HR Letters' },
                { icon: <TaskIcon sx={{ color: 'red' }} />, label: 'Tasks' },
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    bgcolor: '#fff',
                    p: 2,
                    borderRadius: 2,
                    border: '1px solid #ccc',
                    minWidth: 250,
                    maxWidth: 350,
                  }}
                >
                  <Box sx={{ mr: 1 }}>{item.icon}</Box>
                  <Typography fontWeight="bold">{item.label}</Typography>
                </Box>
              ))}
            </Box>
          )}

          {activeTab === 'Location' && (
            <Typography sx={{ mt: 2 }}>No Location Found</Typography>
          )}

          {/* Footer Image */}
          
        </Box>
      </Box>
    </Box>
  );
};

export default Overview;
