import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  IconButton,
  Avatar,
  Tabs,
  Tab,
  Badge,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormGroup,
  FormControlLabel,
  Switch,
  Button,
  Menu,
  MenuItem
} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import TuneIcon from '@mui/icons-material/Tune';
import PhoneIcon from '@mui/icons-material/Phone';

// Widget Card
const WidgetCard = ({ title, content }) => (
  <Paper elevation={2} sx={{ p: 2, height: 280, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: 10 }}>
    <Typography variant="h6" sx={{ fontWeight: 600 }}>{title}</Typography>
    <Typography variant="body1">{content}</Typography>
  </Paper>
);

// Updated FavoritesCard with popup for both users
const FavoritesCard = () => {
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleClick1 = (event) => setAnchorEl1(event.currentTarget);
  const handleClick2 = (event) => setAnchorEl2(event.currentTarget);

  const handleClose1 = () => setAnchorEl1(null);
  const handleClose2 = () => setAnchorEl2(null);

  return (
    <Paper elevation={2} sx={{ p: 2, height: 280, marginTop: 10 }}>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>Favorites</Typography>

      {/* First Favorite */}
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        mb: 1,
        backgroundColor: '',
        p: 1,
        borderRadius: 1,
        justifyContent: 'space-between',
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar sx={{ width: 30, height: 30, mr: 1 }} />
          <Typography>kmsakshi - <strong>Sakshi Kumari</strong></Typography>
        </Box>
        <IconButton onClick={handleClick1}>
          <PhoneIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl1}
          open={Boolean(anchorEl1)}
          onClose={handleClose1}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          <MenuItem onClick={handleClose1}>💬 Chat</MenuItem>
          <MenuItem onClick={handleClose1}>📞 Audio Call</MenuItem>
          <MenuItem onClick={handleClose1}>🎥 Video Call</MenuItem>
        </Menu>
      </Box>

      {/* Second Favorite */}
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '',
        p: 1,
        borderRadius: 1,
        justifyContent: 'space-between',
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar sx={{ width: 30, height: 30, mr: 1 }} />
          <Typography>SatyamR - <strong>satyam Ray</strong></Typography>
        </Box>
        <IconButton onClick={handleClick2}>
          <PhoneIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl2}
          open={Boolean(anchorEl2)}
          onClose={handleClose2}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          <MenuItem onClick={handleClose2}>💬 Chat</MenuItem>
          <MenuItem onClick={handleClose2}>📞 Audio Call</MenuItem>
          <MenuItem onClick={handleClose2}>🎥 Video Call</MenuItem>
        </Menu>
      </Box>
    </Paper>
  );
};

// Other Cards
const AnnouncementsCard = () => (
  <Paper elevation={2} sx={{ p: 2, height: 280, marginTop: 10 }}>
    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>Announcements</Typography>
    <Typography variant="body1">Welcome to Zoho People</Typography>
    <Typography variant="caption" color="text.secondary">27 May 1:31 PM</Typography>
  </Paper>
);

const PendingTasksCard = () => (
  <Paper elevation={2} sx={{ p: 2, height: 280, marginTop: 10 }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="h6" sx={{ fontWeight: 600 }}>My Pending Tasks</Typography>
      <Badge badgeContent={0} color="default" />
    </Box>
    <Typography variant="body1" sx={{ mt: 5 }}>There are no tasks available</Typography>
  </Paper>
);

const MyFilesCard = () => {
  const [value, setValue] = React.useState(0);
  return (
    <Paper elevation={2} sx={{ p: 2, minHeight: 280, marginTop: 10 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>My Files</Typography>
        <Typography variant="body2">Total Files <strong>0</strong></Typography>
      </Box>
      <Tabs
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Organization Files" />
        <Tab label="Employee Files" />
      </Tabs>
      <Box sx={{ mt: 4 }}>
        <Typography>No Files Found</Typography>
      </Box>
    </Paper>
  );
};

// Dashboard Component
const Dashboard = () => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [widgets, setWidgets] = React.useState({
    birthday: true,
    newHires: true,
    favorites: true,
    quickLinks: true,
    announcements: true,
    leaveReport: true,
    upcomingHolidays: true,
    pendingTasks: true,
    myFiles: true,
  });

  const handleToggle = (key) => {
    setWidgets((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Box sx={{ p: 2, mt: 0, backgroundColor: '#f5f5f5', borderRadius: 2, minWidth: 1400 }}>
      {/* Header Icons */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        position: 'fixed',
        top: 0,
        right: 0,
        px: 3,
        mt: 15
      }}>
        <IconButton color="primary" aria-label="refresh" sx={{ ml: 1 }}>
          <RefreshIcon />
        </IconButton>
        <IconButton color="primary" aria-label="customize-widgets" onClick={() => setOpenDialog(true)} sx={{ ml: 1 }}>
          <TuneIcon />
        </IconButton>
      </Box>

      {/* Widgets Grid */}
      <Grid container spacing={1} padding={5} mt={0} sx={{ width: '100%' }}>
        {widgets.birthday && (
          <Grid item xs={12} md={4} sx={{ width: 430, height: 300, mt: 2 }}>
            <WidgetCard title="Birthday" content="No birthdays today" />
          </Grid>
        )}
        {widgets.newHires && (
          <Grid item xs={12} md={4} sx={{ width: 430, height: 300, mt: 2 }}>
            <WidgetCard title="New Hires" content="No New Joinees in past 15 days." />
          </Grid>
        )}
        {widgets.favorites && (
          <Grid item xs={12} md={4} sx={{ width: 430, height: 300, mt: 2 }}>
            <FavoritesCard />
          </Grid>
        )}
        {widgets.quickLinks && (
          <Grid item xs={12} md={4} sx={{ width: 430, height: 300, mt: 2 }}>
            <WidgetCard title="Quick Links" content="No quick links" />
          </Grid>
        )}
        {widgets.announcements && (
          <Grid item xs={12} md={4} sx={{ width: 430, height: 300, mt: 2 }}>
            <AnnouncementsCard />
          </Grid>
        )}
        {widgets.leaveReport && (
          <Grid item xs={12} md={4} sx={{ width: 430, height: 300, mt: 2 }}>
            <WidgetCard title="Leave Report" content="No reports illustrated yet" />
          </Grid>
        )}
        {widgets.upcomingHolidays && (
          <Grid item xs={12} md={6} sx={{ width: 430, height: 300, mt: 2 }}>
            <WidgetCard title="Upcoming Holidays" content="No Data Found" />
          </Grid>
        )}
        {widgets.pendingTasks && (
          <Grid item xs={12} md={6} sx={{ width: 530, height: 300, mt: 2 }}>
            <PendingTasksCard />
          </Grid>
        )}
        {widgets.myFiles && (
          <Grid item xs={12} sx={{ width: 630, height: 300, mt: 2 }}>
            <MyFilesCard />
          </Grid>
        )}
      </Grid>

      {/* Customize Widgets Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="xs" fullWidth>
        <DialogTitle>Customize Widgets</DialogTitle>
        <DialogContent>
          <FormGroup>
            {Object.keys(widgets).map((key) => (
              <FormControlLabel
                key={key}
                control={
                  <Switch
                    checked={widgets[key]}
                    onChange={() => handleToggle(key)}
                    color="primary"
                  />
                }
                label={key
                  .replace(/([A-Z])/g, ' $1')
                  .replace(/^./, str => str.toUpperCase())}
              />
            ))}
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} variant="contained">Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Dashboard;
