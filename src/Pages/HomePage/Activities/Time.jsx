import React, { useState } from 'react';
import {
  Box,
  Paper,
  TextField,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  IconButton,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import TimerIcon from '@mui/icons-material/Timer';

const TimeLogs = () => {
  const [openProjectDialog, setOpenProjectDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');
  const [selectedJob, setSelectedJob] = useState('');
  const photo = "https://via.placeholder.com/150";

  const handleProjectSelect = (event) => {
    setSelectedProject(event.target.value);
  };

  const handleJobSelect = (event) => {
    setSelectedJob(event.target.value);
  };

  return (
    <Box sx={{ p: 3, minWidth:'1300px' }}>
      {/* Top Filter Section */}
      <Paper
        elevation={2}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          p: 2,
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          borderRadius: 2,
        }}
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {/* Select Project Button */}
          <Button
            variant="outlined"
            onClick={() => setOpenProjectDialog(true)}
            sx={{ minWidth: 140 }}
          >
            {selectedProject ? selectedProject : 'Select Project'}
          </Button>

          {/* Select Job */}
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Select Job</InputLabel>
            <Select
              label="Select Job"
              value={selectedJob}
              onChange={handleJobSelect}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="Developer">Developer</MenuItem>
              <MenuItem value="Designer">Designer</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="What are you working on?"
            size="small"
            sx={{ minWidth: 200 }}
          />

          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Billable</InputLabel>
            <Select label="Billable" defaultValue="">
              <MenuItem value="">None</MenuItem>
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </Select>
          </FormControl>

          <IconButton color="primary" size="medium" sx={{ bgcolor: '#f2f4f8' }}>
            <AccessTimeIcon />
          </IconButton>
        </Box>

        {/* Timer Box */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#00c853',
            color: 'white',
            px: 2,
            py: 1,
            borderRadius: 1.5,
            fontWeight: 'bold',
            fontSize: '1.1rem',
            minWidth: '120px',
            justifyContent: 'space-between',
          }}
        >
          00:00:00
          <IconButton sx={{ color: 'white', ml: 1 }}>
            <TimerIcon />
          </IconButton>
        </Box>
      </Paper>

      {/* No Time Logs Message */}
      <Paper
        elevation={1}
        sx={{
          mt: 4,
          p: 5,
          textAlign: 'center',
          backgroundColor: '#f5f9fc',
          borderRadius: 2,
        }}
      >
        <SentimentVeryDissatisfiedIcon sx={{ fontSize: 80, color: '#90a4ae', mb: 2 }} />
        <Typography variant="h6" color="text.secondary">
          No time logs added for today
        </Typography>
      </Paper>

      {/* Project Selection Dialog */}
      <Dialog open={openProjectDialog} onClose={() => setOpenProjectDialog(false)}>
        <DialogTitle>Select a Project</DialogTitle>
        <DialogContent>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Project</InputLabel>
            <Select value={selectedProject} onChange={handleProjectSelect} label="Project">
              <MenuItem value="Project Alpha">Project Alpha</MenuItem>
              <MenuItem value="Project Beta">Project Beta</MenuItem>
              <MenuItem value="Project Gamma">Project Gamma</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenProjectDialog(false)}>Cancel</Button>
          <Button onClick={() => setOpenProjectDialog(false)} variant="contained">
            Select
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TimeLogs;
