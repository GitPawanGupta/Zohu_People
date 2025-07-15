import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Box,
  IconButton,
  Avatar,
  Button,
  MenuItem,
  Select,
  ToggleButton,
  ToggleButtonGroup
} from "@mui/material";
import {
  CalendarToday,
  ChevronLeft,
  ChevronRight,
  Alarm,
  Add,
  Search,
  Notifications
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

// Helper to format hours
const formatHour = (i) => {
  const hour = i % 12 || 12;
  const suffix = i < 12 ? 'AM' : 'PM';
  return `${hour} ${suffix}`;
};

const JobSchedule = () => {
  const location = useLocation();

  const hours = Array.from({ length: 24 }, (_, i) => formatHour(i));
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = ["08", "09", "10", "11", "12", "13", "14"];

  const tabValue =
    location.pathname.includes("job-schedule") ? 4 :
    location.pathname.includes("projects") ? 3 :
    location.pathname.includes("jobs") ? 2 :
    location.pathname.includes("time-sheets") ? 1 : 0;

  return (
    <Box>
      {/* Top App Bar */}
      <AppBar position="fixed" sx={{
        zIndex: theme => theme.zIndex.drawer + 1,
        width: `calc(100% - 80px)`,
        ml: `80px`,
        backgroundColor: "#243874",
        boxShadow: "none",
        height: "60px",
        justifyContent: "center"
      }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            sx={{ fontWeight: 'bold', color: 'white', textDecoration: 'none' }}
          >
            MyData
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton color="inherit"><Add /></IconButton>
            <IconButton color="inherit"><Search /></IconButton>
            <IconButton color="inherit"><Notifications /></IconButton>
            <Avatar sx={{ width: 32, height: 32, bgcolor: 'white', color: 'black', fontSize: 14 }}>P</Avatar>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Tabs */}
      <Box position="fixed" sx={{
        top: "60px",
        width: `calc(100% - 80px)`,
        ml: 0,
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #ccc",
        height: "40px",
        pl: 2,
        pt: 1,
      }}>
        <Tabs value={tabValue} textColor="primary" indicatorColor="primary">
          <Tab label="Time Logs" component={Link} to="/time/time-logs" />
          <Tab label="Timesheets" component={Link} to="/time/time-sheets" />
          <Tab label="Jobs" component={Link} to="/time/jobs" />
          <Tab label="Projects" component={Link} to="/time/projects" />
          <Tab label="Job Schedule" component={Link} to="/time/job-schedule" />
        </Tabs>
      </Box>

      {/* Content */}
      <Box sx={{ p: 3, ml: '80px', mt: '110px' }}>
        {/* Header Controls */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton><ChevronLeft /></IconButton>
            <CalendarToday fontSize="small" />
            <Typography>08-Jun-2025 - 14-Jun-2025</Typography>
            <IconButton><ChevronRight /></IconButton>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <ToggleButtonGroup exclusive size="small" value="Week">
              <ToggleButton value="Day">Day</ToggleButton>
              <ToggleButton value="Week">Week</ToggleButton>
            </ToggleButtonGroup>
            <Typography sx={{ fontSize: 14 }}>0 pending changes</Typography>
            <Button variant="contained" size="small">Published</Button>
          </Box>
        </Box>

        {/* Grid Section */}
        <Box sx={{ display: 'flex', border: '1px solid #ccc', overflowX: 'auto' }}>
          {/* Time Column */}
          <Box sx={{ width: 80, borderRight: '1px solid #ccc' }}>
            {hours.map((hr, i) => (
              <Box key={i} sx={{ height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #eee' }}>
                <Typography variant="caption">{hr}</Typography>
              </Box>
            ))}
          </Box>

          {/* Days Columns */}
          {days.map((day, index) => (
            <Box key={day} sx={{ minWidth: 130, borderRight: '1px solid #ccc' }}>
              <Box sx={{ height: 60, bgcolor: index === 0 ? '#fffbe6' : '#f9f9f9', borderBottom: '1px solid #ccc', textAlign: 'center' }}>
                <Typography variant="body2">{day}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 0.5 }}>
                  <Typography variant="subtitle2">{dates[index]}</Typography>
                  <Alarm sx={{ fontSize: 14 }} />
                  <Typography variant="caption">00:00 hrs</Typography>
                </Box>
              </Box>
              {/* Hour Rows */}
              {Array.from({ length: 24 }).map((_, i) => (
                <Box key={i} sx={{ height: 60, borderBottom: '1px solid #eee' }} />
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default JobSchedule;
