import React from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Box, IconButton, Avatar } from '@mui/material';
import { Add, Search, Notifications } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import photo from '../../../src/assets/photo.png';
const SharedWithMyRole = () => {
  const location = useLocation();

  const tabValue =
  
  location.pathname.includes("shared-with-me") ? 0 :
  location.pathname.includes("shared-with-my-role") ? 1 :
  false; // or -1 to indicate no tab selected


  return (
    <Box>
      {/* Top Bar */}
      <AppBar position="fixed"
        sx={{
          zIndex: theme => theme.zIndex.drawer + 1,
          width: `calc(100% - 80px)`,
          ml: `80px`,
          backgroundColor: "#243874",
          boxShadow: "none",
          height: "60px",
          justifyContent: "center"
        }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Typography component={Link} to="/" variant="h6" sx={{ fontWeight: 'bold', color: 'white', textDecoration: 'none' }}>My Files</Typography>
          </Box>
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
        ml: `0px`,
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #ccc",
        height: "40px",
        pl: 2,
        pt: 1
      }}>
        

     <Tabs value={tabValue} textColor="primary" indicatorColor="primary">
               <Tab label="Shared With Me" component={Link} to="/file/shared-with-me" />
               <Tab label="Shared With My Role" component={Link} to="/file/shared-with-my-role" />
               
             </Tabs>
           </Box>
     
           {/* Content */}
           <Box sx={{ mt: "80px", px: 3 ,width: 1000,ml:10,
         height: 400,
         border: '1px solid #ccc',
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         flexDirection: 'column',
          backgroundColor: "#f0f0f0"}}>
                         <img
                            src={photo} // Change this path as per your actual image location
                            alt=""
                            style={{ width: 150, height: 100, marginBottom: 16 }}
                          />
             <Typography>No shared files to display</Typography>
<Typography>Files shared to you by other employees will be listed here</Typography>
           </Box>
         </Box>
       );
     };

export default SharedWithMyRole;
