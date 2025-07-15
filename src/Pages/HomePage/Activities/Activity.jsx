import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const Activity = () => {
  return (
    <>
        {/* Scrollable Section */}
          <Box sx={{ maxHeight: { xs: 'auto', md: '420px' }, overflowY: 'auto', pr: 1 }}>
            {/* Welcome Section */}
            <Paper sx={{ p: 2, mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box>
                <Typography variant="body1"><strong>Good Afternoon Pawan Kumar</strong></Typography>
                <Typography variant="body2">Have a productive day!</Typography>
              </Box>
              <Box>
                <img src="https://cdn-icons-png.flaticon.com/512/869/869869.png" alt="Sun Icon" width={48} />
              </Box>
            </Paper>

            {/* Check-in Reminder */}
            <Paper sx={{ p: 2, mb: 2, display: 'flex', justifyContent: 'space-between', backgroundColor: '#fff6f2' }}>
              <Box>
                <Typography variant="body1" sx={{ color: '#ff7043' }}><strong>Check-in reminder</strong></Typography>
                <Typography variant="body2">Your shift has already started</Typography>
              </Box>
              <Box>
                <Typography variant="body2">General</Typography>
                <Typography variant="body2">9:00 AM - 6:00 PM</Typography>
              </Box>
            </Paper>

            {/* Work Schedule */}
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>Work Schedule</Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>08-Jun-2025 - 14-Jun-2025</Typography>

              <Paper sx={{ p: 2, backgroundColor: "#f1f1f1", mb: 2 }}>
                <Typography>General: 9:00 AM - 6:00 PM</Typography>
              </Paper>

              <Grid container justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                {[
                  { day: 'Sun', date: '08', status: 'Weekend' },
                  { day: 'Mon', date: '09', status: 'Working' },
                  { day: 'Tue', date: '10' },
                  { day: 'Wed', date: '11' },
                  { day: 'Thu', date: '12' },
                  { day: 'Fri', date: '13' },
                  { day: 'Sat', date: '14', status: 'Weekend' },
                ].map((item, index) => (
                  <Grid item key={index} textAlign="center">
                    <Typography variant="caption" fontWeight="bold">{item.day}</Typography>
                    <Typography variant="body2">{item.date}</Typography>
                    {item.status === 'Weekend' && (
                      <Typography variant="caption" sx={{ color: 'orange' }}>Weekend</Typography>
                    )}
                  </Grid>
                ))}
              </Grid>

              {/* Time Log Reminder */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, backgroundColor: '#fffaf2', border: '1px solid #fde6cd', p: 2, borderRadius: 2 }}>
                <Box sx={{ bgcolor: '#fff1c2', p: 1.2, borderRadius: '50%' }}>
                  <img src="https://img.icons8.com/ios/50/alarm.png" alt="Clock Icon" width={24} height={24} />
                </Box>
                <Typography sx={{ color: '#ff9800', fontWeight: 500 }}>
                  You are yet to submit your time logs today!
                </Typography>
              </Box>
            </Paper>
          </Box>

    </>
  )
}

export default Activity
