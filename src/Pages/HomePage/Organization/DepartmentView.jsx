import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  InputBase,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Avatar,
  Popover,
  ListItem,
  ListItemIcon
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import ChatIcon from '@mui/icons-material/Chat';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import CallIcon from '@mui/icons-material/Call';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const departments = ['HR', 'IT', 'Management', 'Marketing'];

const membersData = {
  HR: [],
  IT: [],
  Management: [
    {
      id: 1,
      name: 'Shubham bhaskar',
      email: 'skbhasakr735@gmail.com',
      role: 'CEO',
      department: 'Management'
    }
  ],
  Marketing: []
};

const DepartmentView = () => {
  const [selected, setSelected] = useState('HR');
  const [search, setSearch] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [popupMember, setPopupMember] = useState(null);

  const filtered = departments.filter((dept) =>
    dept.toLowerCase().includes(search.toLowerCase())
  );

  const handleCallClick = (event, member) => {
    setAnchorEl(event.currentTarget);
    setPopupMember(member);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setPopupMember(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'call-popup' : undefined;

  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#f1f4f9', p: 2, minWidth: 1300 }}>

      {/* Sidebar */}
      <Paper elevation={1} sx={{ width: 280, p: 2, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <SearchIcon />
          <InputBase
            placeholder="Search Department"
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ ml: 1 }}
          />
          {search && (
            <IconButton onClick={() => setSearch('')}>
              <CloseIcon />
            </IconButton>
          )}
        </Box>
        <List>
          {filtered.map((dept) => (
            <ListItemButton
              key={dept}
              selected={dept === selected}
              onClick={() => setSelected(dept)}
              sx={{
                borderRadius: 1,
                mb: 1,
                bgcolor: dept === selected ? '#f0f1fb' : 'transparent'
              }}
            >
              <ListItemText primary={dept} />
            </ListItemButton>
          ))}
        </List>
      </Paper>

      {/* Content Panel */}
      <Box sx={{ flex: 1, ml: 2 }}>
        <Paper elevation={1} sx={{ p: 2, mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: 2 }}>
          <Typography variant="h6">{selected}</Typography>
          <Typography variant="subtitle2">
            <strong>{membersData[selected]?.length || 0}</strong> Members
          </Typography>
        </Paper>

        {membersData[selected]?.length === 0 ? (
          <Paper
            elevation={1}
            sx={{
              borderRadius: 2,
              height: '100%',
              minHeight: 400,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: 4,
              bgcolor: '#f7f9fc'
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/10290/10290223.png"
                alt="No files"
                style={{ width: 160, marginBottom: 16 }}
              />
              <Typography variant="subtitle1">No users found</Typography>
            </Box>
          </Paper>
        ) : (
          <List>
            {membersData[selected].map((member) => (
              <Paper
                key={member.id}
                sx={{
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  width: 400,
                  mb: 2,
                  borderRadius: 2
                }}
              >
                <Avatar sx={{ width: 70, height: 70 }} />
                <Box sx={{ flex: 1 }}>
                  <Typography><strong>{member.id} - {member.name}</strong></Typography>
                  <Typography variant="body2" color="text.secondary">{member.email}</Typography>
                  <Typography variant="body2">{member.role}</Typography>
                  <Typography variant="body2" color="text.secondary">{member.department}</Typography>
                </Box>
                <Box>
                  <IconButton><StarBorderIcon /></IconButton>
                  <IconButton onClick={(e) => handleCallClick(e, member)}><PhoneIcon /></IconButton>
                </Box>
              </Paper>
            ))}
          </List>
        )}

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          PaperProps={{ sx: { p: 1.5, width: 180, borderRadius: 2 } }}
        >
          <List>
            <ListItem button>
              <ListItemIcon><ChatIcon /></ListItemIcon>
              <ListItemText primary="Chat" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><CallIcon /></ListItemIcon>
              <ListItemText primary="Audio Call" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><VideoCallIcon /></ListItemIcon>
              <ListItemText primary="Video Call" />
            </ListItem>
          </List>
        </Popover>
      </Box>
    </Box>
  );
};

export default DepartmentView;
