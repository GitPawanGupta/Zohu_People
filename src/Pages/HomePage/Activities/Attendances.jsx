
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const attendanceData = [
  { day: 'Sun', date: '08', shift: 'General', time: '9:00 AM - 6:00 PM', status: 'Weekend', statusColor: 'orange', bgColor: '#fff7e6' },
  { day: 'Mon', date: '09', shift: 'General', time: '9:00 AM - 6:00 PM', status: 'Absent', statusColor: 'red', bgColor: '#fff' },
  { day: 'Tue', date: '10', shift: 'General', time: '9:00 AM - 6:00 PM', status: 'No check-in - No check-out', statusColor: 'gray', bgColor: '#fff' },
  { day: 'Wed', date: '11', shift: 'General', time: '9:00 AM - 6:00 PM', status: 'Absent', statusColor: 'red', bgColor: '#fff' },
  { day: 'Thu', date: '12', shift: 'General', time: '9:00 AM - 6:00 PM', statusColor: 'gray', bgColor: '#fff' },
  { day: 'Fri', date: '13', shift: 'General', time: '9:00 AM - 6:00 PM',  statusColor: 'gray', bgColor: '#fff' },
  { day: 'Sat', date: '14', shift: 'General', time: '9:00 AM - 6:00 PM', status: 'Weekend', statusColor: 'orange', bgColor: '#fff7e6' },
];



const Attendance = () => {
  return (
    <Box sx={{ px: 4, py: 4, minWidth:'1300px', marginTop:'20px' }}>
      <Typography variant="h6" sx={{ mb: 3 }}>
        This Week
      </Typography>

      {attendanceData.map((item, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Paper sx={{ display: 'flex', alignItems: 'center', p: 2, bgcolor: item.bgColor }}>
            {/* Left Section - Day and Date */}
            <Box sx={{ minWidth: 80 }}>
              <Typography variant="body2" color="text.secondary">
                {item.day}
              </Typography>
              <Typography variant="h6">{item.date}</Typography>
            </Box>

            {/* Middle Section - Shift and Time */}
            <Box sx={{ flex: 1, px: 3 }}>
              <Typography variant="body2">{item.shift}</Typography>
              <Typography variant="body2" color="text.secondary">
                {item.time}
              </Typography>
            </Box>

            {/* Right Section - Status */}
            <Box sx={{ textAlign: 'right', minWidth: 200 }}>
              <Typography variant="body2" sx={{ color: item.statusColor }}>
                {item.status}
              </Typography>
            </Box>
          </Paper>
        </Box>
      ))}
    </Box>
  );
};

export default Attendance;

