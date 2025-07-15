import React from 'react';
import { Box, Typography ,Avatar,} from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
const EmployeeTree = () => {
  return (
    <Box sx={{ mt: '10px', ml: 0, mr: '30px', width: '100%', p: 3 }}>
      <Box
        sx={{
          px: 2, py: 1 ,
          mt: 3,
          bgcolor: '#fff',
          borderRadius: 2,
          boxShadow: 1,
          maxWidth: 800,
          ml: 0,
          display: 'flex',
          textAlign: 'flex-start',
          pl:2,
          border: '1px solid black'

         
        }}
      >
        <Avatar src="https://via.placeholder.com/40" sx={{ mr: 2 }} />
        <Box>
        <Typography variant="subtitle1" fontWeight="bold">    
          Shubham bhaskar 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          CEO
        </Typography>
        </Box>
      </Box>
       {/* <ThumbUpOffAltIcon sx={{ color: '#555' }} /> */}
       <Box
        sx={{
          px: 2, py: 1 ,
          mt: 3,
          bgcolor: '#fff',
          borderRadius: 2,
          boxShadow: 1,
          maxWidth: 800,
          ml: 0,
          display: 'flex',
          textAlign: 'flex-start',
          pl:2,
          border: '1px solid black'

         
        }}
      >
        <Avatar src="https://via.placeholder.com/40" sx={{ mr: 2 }} />
        <Box>
        <Typography variant="subtitle1" fontWeight="bold">    
          satyam Ray 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          -
        </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          px: 2, py: 1 ,
          mt: 3,
          bgcolor: '#fff',
          borderRadius: 2,
          boxShadow: 1,
          maxWidth: 800,
          ml: 0,
          display: 'flex',
          textAlign: 'flex-start',
          pl:2,
          border: '1px solid black'

         
        }}
      >
        <Avatar src="https://via.placeholder.com/40" sx={{ mr: 2 }} />
        <Box>
        <Typography variant="subtitle1" fontWeight="bold">    
          Pawan Kumar 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          -
        </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          px: 2, py: 1 ,
          mt: 3,
          bgcolor: '#fff',
          borderRadius: 2,
          boxShadow: 1,
          maxWidth: 800,
          ml: 0,
          display: 'flex',
          textAlign: 'flex-start',
          pl:2,
          border: '1px solid black'

         
        }}
      >
        <Avatar src="https://via.placeholder.com/40" sx={{ mr: 2 }} />
        <Box>
        <Typography variant="subtitle1" fontWeight="bold">    
          Sakshi Kumari 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          -
        </Typography>
        </Box>
      </Box>
      
      
    </Box>
  );
};

export default EmployeeTree;
