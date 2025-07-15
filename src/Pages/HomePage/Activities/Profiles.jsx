import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Divider,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import EmailIcon from '@mui/icons-material/Email';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Profile = () => {
  return (
    <Box sx={{ p: 2, mt: 10, width: '100%' }}>
      {/* Top Info: Shift, Timezone, Email */}
      <Paper sx={{ p: 2, mb: 2 }} elevation={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Box display="flex" alignItems="center" gap={1}>
              <WorkHistoryIcon color="primary" />
              <Box>
                <Typography variant="body2" fontWeight="bold">Shift</Typography>
                <Typography variant="body2">General</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box display="flex" alignItems="center" gap={1}>
              <AccessTimeIcon color="primary" />
              <Box>
                <Typography variant="body2" fontWeight="bold">Time zone</Typography>
                <Typography variant="body2">(GMT+05:30)</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box display="flex" alignItems="center" gap={1}>
              <EmailIcon color="primary" />
              <Box>
                <Typography variant="body2" fontWeight="bold">Email ID</Typography>
                <Typography variant="body2">erpawan459@gmail.com</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* About Section */}
      <Paper sx={{ p: 2, mb: 2 }} elevation={2}>
        <Typography variant="body2" fontWeight="bold" sx={{ mb: 1, borderBottom: '1px solid #ddd' }}>
          About
        </Typography>
        <Box
          sx={{
            p: 2,
            backgroundColor: '#fafafa',
            borderRadius: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 100,
          }}
        >
          <IconButton>
            <AddCircleOutlineIcon color="primary" fontSize="large" />
          </IconButton>
          <Typography color="text.secondary" sx={{ ml: 1 }}>
            Add About
          </Typography>
        </Box>
      </Paper>

      {/* Tags Section */}
      <Paper sx={{ p: 2, mb: 3 }} elevation={2}>
        <Typography variant="body2" fontWeight="bold" sx={{ mb: 1, borderBottom: '1px solid #ddd' }}>
          Tags
        </Typography>
        <Box
          sx={{
            p: 2,
            backgroundColor: '#fafafa',
            borderRadius: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 100,
          }}
        >
          <IconButton>
            <AddCircleOutlineIcon color="primary" fontSize="large" />
          </IconButton>
          <Typography color="text.secondary" sx={{ ml: 1 }}>
            Add Tags
          </Typography>
        </Box>
      </Paper>

      {/* Identity Information */}
      <Paper sx={{ p: 2, mb: 3 }} elevation={2}>
        <Typography variant="body2" fontWeight="bold" sx={{ mb: 2 }}>
          Identity Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}><Typography variant="body2"><strong>UAN:</strong> ****</Typography></Grid>
          <Grid item xs={12} sm={4}><Typography variant="body2"><strong>PAN:</strong> ****</Typography></Grid>
          <Grid item xs={12} sm={4}><Typography variant="body2"><strong>Aadhaar:</strong> ****</Typography></Grid>
        </Grid>
      </Paper>

      {/* Contact Details */}
      <Paper sx={{ p: 2, mb: 3 }} elevation={2}>
        <Typography variant="body2" fontWeight="bold" sx={{ mb: 2 }}>
          Contact Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2"><strong>Work Phone Number:</strong> -</Typography>
            <Typography variant="body2"><strong>Extension:</strong> -</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2"><strong>Personal Mobile Number:</strong> -</Typography>
            <Typography variant="body2"><strong>Personal Email Address:</strong> -</Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* System Fields */}
      <Paper sx={{ p: 2, mb: 3 }} elevation={2}>
        <Typography variant="body2" fontWeight="bold" sx={{ mb: 2 }}>
          System Fields
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2"><strong>Added By:</strong> 1 - Shubham bhaskar -</Typography>
            <Typography variant="body2"><strong>Added Time:</strong> 04-Jun-2025 10:44 AM</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2"><strong>Modified By:</strong> 1 - Shubham bhaskar -</Typography>
            <Typography variant="body2"><strong>Modified Time:</strong> 04-Jun-2025 10:44 AM</Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Work Experience */}
      <Paper sx={{ p: 2, mb: 3 }} elevation={2}>
        <Typography variant="body2" fontWeight="bold" sx={{ mb: 2 }}>
          Work Experience
        </Typography>
        <TableContainer sx={{ overflowX: 'auto' }}>
          <Table>
            <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
              <TableRow>
                <TableCell>Company Name</TableCell>
                <TableCell>Job Title</TableCell>
                <TableCell>From Date</TableCell>
                <TableCell>To Date</TableCell>
                <TableCell>Job Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell colSpan={5} align="center">No rows found.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Education Details */}
      <Paper sx={{ p: 2, mb: 3 }} elevation={2}>
        <Typography variant="body2" fontWeight="bold" sx={{ mb: 2 }}>
          Education Details
        </Typography>
        <TableContainer sx={{ overflowX: 'auto' }}>
          <Table>
            <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
              <TableRow>
                <TableCell>Institute Name</TableCell>
                <TableCell>Degree/Diploma</TableCell>
                <TableCell>Specialization</TableCell>
                <TableCell>Date of Completion</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell colSpan={4} align="center">No rows found.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Dependent Details */}
      <Paper sx={{ p: 2 }} elevation={2}>
        <Typography variant="body2" fontWeight="bold" sx={{ mb: 2 }}>
          Dependent Details
        </Typography>
        <TableContainer sx={{ overflowX: 'auto' }}>
          <Table>
            <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Relationship</TableCell>
                <TableCell>Date of Birth</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell colSpan={3} align="center">No rows found.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default Profile;
