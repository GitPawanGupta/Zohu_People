import React, { useState } from 'react';
import {
  AppBar, Toolbar, Box, Typography, Select, MenuItem, Button,
  IconButton, Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, FormControlLabel, Checkbox, TableContainer, Paper,
  Table, TableHead, TableRow, TableCell, TableBody, Tabs, Tab
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useNavigate } from 'react-router-dom';

const HrLetter = ({ title }) => {
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState('My Data');
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    employeeID: '', date: '', isChange: false,
    reason: '', additionalReason: '', newAddress: ''
  });
  const [records, setRecords] = useState([]);

  const Change = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const Submit = () => {
    setRecords([...records, formData]);
    setFormData({
      employeeID: '', date: '', isChange: false,
      reason: '', additionalReason: '', newAddress: ''
    });
    setOpen(false);
  };

  const handleTabChange = (e, newVal) => {
    if (newVal === 0) navigate('/hrletters/address');
    else if (newVal === 1) navigate('/hrletters/bonafide');
    else if (newVal === 2) navigate('/hrletters/experience');
  };

  const getTabIndex = () => {
    if (title === 'Bonafide Letter') return 1;
    if (title === 'Experience Letter') return 2;
    return 0;
  };

  return (
    <Box sx={{ bgcolor: '#f0f2f5', minHeight: '100vh',mt:-25, position:'fixed', minWidth: '1400px' }}>
      <AppBar position="fixed" sx={{ bgcolor: '#28304d', mt:7, left:50, marginRight:10 }}>
        <Toolbar>
          <Tabs value={getTabIndex()} onChange={handleTabChange} textColor="inherit" indicatorColor="primary" sx={{mr:5}}>
            <Tab label="Address Proof" sx={{ color: 'white', fontWeight: 'bold' }} />
            <Tab label="Bonafide Letter" sx={{ color: 'white' }} />
            <Tab label="Experience Letter" sx={{ color: 'white' }} />
          </Tabs>
          <Box sx={{ flexGrow: 1 }} />
          <Select
            value={dropdown}
            onChange={(e) => setDropdown(e.target.value)}
            size="small"
            sx={{ bgcolor: 'white', mr: 2 }}
          >
            <MenuItem value="My Data">My Data</MenuItem>
            <MenuItem value="Team Data">Team Data</MenuItem>
          </Select>
          <Button variant="contained" startIcon={<AddIcon />} sx={{ bgcolor: '#007bff', mr: 2 }} onClick={() => setOpen(true)}>
            Add Record
          </Button>
          
        </Toolbar>
      </AppBar>

      {/* Dropdown Filter */}
      <Box sx={{ p: 2 }}>
        <Select defaultValue={`${title} View`} sx={{ bgcolor: 'white' }}>
          <MenuItem value={`${title} View`}>{title} View</MenuItem>
          <MenuItem value="All Requests">All Requests</MenuItem>
        </Select>
      </Box>

      {/* Table */}
      
      <Box sx={{ px: 2 }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ bgcolor: '#f3f2f7' }}>
              <TableRow>
                <TableCell><strong>EmployeeID</strong></TableCell>
                <TableCell><strong>Date of request</strong></TableCell>
                <TableCell><strong>Is there any change?</strong></TableCell>
                <TableCell><strong>Reason for request</strong></TableCell>
                <TableCell><strong>Enter the Reason (if others)</strong></TableCell>
                <TableCell><strong>New Present Address</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {records.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    <Box sx={{ textAlign: 'center', py: 4 }}>
                      <img
                        src="https://cdni.iconscout.com/illustration/premium/thumb/no-data-found-9881644-8029052.png"
                        alt="No records"
                        style={{ width: 150, marginBottom: 10 }}
                      />
                      <Typography>No records found</Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              ) : (
                records.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.employeeID}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.isChange ? 'Yes' : 'No'}</TableCell>
                    <TableCell>{row.reason}</TableCell>
                    <TableCell>{row.additionalReason}</TableCell>
                    <TableCell>{row.newAddress}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Add Record Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>Add {title} Record</DialogTitle>
        <DialogContent dividers>
          <TextField margin="dense" label="Employee ID" name="employeeID" fullWidth value={formData.employeeID} onChange={Change} />
          <TextField margin="dense" label="Date of Request" name="date" type="date" fullWidth InputLabelProps={{ shrink: true }} value={formData.date} onChange={Change} />
          <FormControlLabel
            control={<Checkbox checked={formData.isChange} onChange={Change} name="isChange" />}
            label="Is there any change in Address?"
          />
          <TextField margin="dense" label="Reason for Request" name="reason" fullWidth value={formData.reason} onChange={Change} />
          <TextField margin="dense" label="Enter Additional Reason (if any)" name="additionalReason" fullWidth value={formData.additionalReason} onChange={Change} />
          <TextField margin="dense" label="New Present Address" name="newAddress" fullWidth multiline value={formData.newAddress} onChange={Change} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="error">Cancel</Button>
          <Button onClick={Submit} variant="contained">Submit</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default HrLetter;
