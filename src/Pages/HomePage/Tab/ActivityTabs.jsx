import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

// Activity components
import Activity from '../Activities/Activity';
import Feeds from '../Activities/Feeds';
import Profile from '../Activities/Profiles';
import Approvals from '../Activities/Approvals';
import Leavs from '../Activities/Leavs';
import Attendances from '../Activities/Attendances';
import Time from '../Activities/Time';
import Timesheet from '../Activities/Timesheet';
import Job from '../Activities/Job';
import Files from '../Activities/Files';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`activity-tabpanel-${index}`}
      aria-labelledby={`activity-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `activity-tab-${index}`,
    'aria-controls': `activity-tabpanel-${index}`,
  };
}

export default function ActivityTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%',  }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto">
          <Tab label="Activities" {...a11yProps(0)} />
          <Tab label="Feeds" {...a11yProps(1)} />
          <Tab label="Profiles" {...a11yProps(2)} />
          <Tab label="Approvals" {...a11yProps(3)} />
          <Tab label="Leavs" {...a11yProps(4)} />
          <Tab label="Attendances" {...a11yProps(5)} />
          <Tab label="Time Logs" {...a11yProps(6)} />
          <Tab label="Timesheet" {...a11yProps(7)} />
          <Tab label="Job" {...a11yProps(8)} />
          <Tab label="Files" {...a11yProps(9)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}><Activity /></TabPanel>
      <TabPanel value={value} index={1}><Feeds /></TabPanel>
      <TabPanel value={value} index={2}><Profile /></TabPanel>
      <TabPanel value={value} index={3}><Approvals /></TabPanel>
      <TabPanel value={value} index={4}><Leavs /></TabPanel>
      <TabPanel value={value} index={5}><Attendances /></TabPanel>
      <TabPanel value={value} index={6}><Time /></TabPanel>
      <TabPanel value={value} index={7}><Timesheet /></TabPanel>
      <TabPanel value={value} index={8}><Job /></TabPanel>
      <TabPanel value={value} index={9}><Files /></TabPanel>
    </Box>
  );
}
