import React, { useState, useEffect, useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  Box,
  Typography,
  Avatar,
  Button,
  Paper,
  Divider,
  Grid,
  Container
} from '@mui/material';
import CustomeTabs from './Tab/ActivityTabs.jsx'; // 
import ActivityTabs from './Tab/ActivityTabs.jsx';
const Home = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const timerRef = useRef(null);
  const location = useLocation();

  // const tabList = [
  //   { label: 'Activities', path: '/' },
  //   { label: 'Feeds', path: '/feeds' },
  //   { label: 'Profiles', path: '/profiles' },
  //   { label: 'Approvals', path: '/approvals' },
  //   { label: 'Leavs', path: '/leavs' },
  //   { label: 'Attendances', path: '/attendances' },
  //   { label: 'Time Logs', path: '/times' },
  //   { label: 'Timesheet', path: '/timesheet' },
  //   { label: 'Job', path: '/job' },
  //   { label: 'Files', path: '/files' },
  //   { label: 'Career History', path: '/history' },
  // ];

  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs} : ${mins} : ${secs}`;
  };

  const CheckIn = () => {
    setIsCheckedIn(true);
    timerRef.current = setInterval(() => {
      setElapsedTime(prev => prev + 1);
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
    <Box sx={{width:'100%'}}>
      {/* Banner */}
      <Box sx={{position:'', mt:11, ml:-5, }}>
            <Box
        sx={{
          width: '100%',
          height: { xs: 60, sm: 100, md: 120 },
          backgroundImage: 'url("/public/bg1-banner.jpg")', 
          backgroundSize: 'cover',
          backgroundPosition: "center",
          mb: 2,
          
        }}
      />
      </Box>
  

      {/* Layout */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2}}>
        {/* Left Panel */}
        <Paper
          sx={{
            p: 2,
            width: { xs: '20%', md: 280 },
            textAlign: 'center',
            flexShrink: 0,
            borderRadius: 2,
            boxShadow: 3,
            height: '100%',
            mt:0,
            
          }}
        >
          <Avatar sx={{ width: 80, height: 80, mx: 'auto', mb: 1 }} />
          <Typography variant="h6">Pawan Kumar</Typography>
          <Typography color={isCheckedIn ? 'green' : 'gray'}>
            {isCheckedIn ? 'In' : 'Out'}
          </Typography>
          <Typography variant="h5" sx={{ my: 1 }}>
            {formatTime(elapsedTime)}
          </Typography>
          <Button
            variant="outlined"
            fullWidth
            color={isCheckedIn ? 'error' : 'success'}
            onClick={isCheckedIn ? CheckOut : CheckIn}
            sx={{ mt: 1 }}
          >
            {isCheckedIn ? 'Check-out' : 'Check-in'}
          </Button>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body2">Department Members</Typography>
          <Typography variant="caption">No Data Found</Typography>
        </Paper>

        {/* Right Panel */}
        <Box sx={{mt:0, }}>
       <ActivityTabs/>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
