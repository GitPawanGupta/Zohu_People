import React from 'react';
import {
  Box,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Avatar,
  Typography,
  Paper,
  
} from '@mui/material';

const employees = [
  {
    id: "kmsakshi",
    firstName: "Sakshi",
    lastName: "Kumari",
    nickName: "",
    email: "sakshi765447@gmail.com",
    photo: "",
    department: "",
  },
  {
    id: "PawanK",
    firstName: "Pawan",
    lastName: "Kumar",
    nickName: "",
    email: "erpawan459@gmail.com",
    photo: "",
    department: "",
  },
  {
    id: "SatyamR",
    firstName: "Satyam",
    lastName: "Ray",
    nickName: "",
    email: "satyamray43@gmail.com",
    photo: "",
    department: "",
  },
  {
    id: "S20",
    firstName: "Christopher",
    lastName: "Brown",
    nickName: "Chris",
    email: "christopherbrown@zylker.com",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    department: "Management",
    Designation: "Administration",
    ZohoRole: "Team Member",
    EmploymentType: "On Contract"
  },
  {
    id: "S19",
    firstName: "Michael",
    lastName: "Johnson",
    nickName: "Mike",
    email: "michaeljohnson@zylker.com",
    photo: "",
    department: "Management",
    Designation: "Administration",
    ZohoRole: "Team Member",
    EmploymentType: "On Contract"
  },
  {
    id: "S18",
    firstName: "William",
    lastName: "Smith",
    nickName: "William",
    email: "williamsmith@zylker.com",
    photo: "",
    department: "IT",
    Designation: "Team Member",
    ZohoRole: "Team Member",
    EmploymentType: "Permanent"
  },
  {
    id: "S17",
    firstName: "Amardeep",
    lastName: "Banjeet",
    nickName: "Amardeep",
    email: "amardeepbanjeet@zylker.com",
    photo: "",
    department: "IT",
    Designation: "Team Member",
    ZohoRole: "Team Member",
    EmploymentType: "Permanent"
  },
  {
    id: "S16",
    firstName: "Andrea",
    lastName: "Garcia",
    nickName: "Andrea",
    email: "michaeljohnson@zylker.com",
    photo: "",
    department: "IT",
    Designation: "Team Member",
    ZohoRole: "Team Member",
    EmploymentType: "On Contract"

  },
];

const EmployeeList = () => {
  return (
    <Box sx={{ mt: 10, mx: 'auto', width: '100%',marginTop:'-50px' }}>
        <Box sx={{ mt: "110px", px: 3 }}>
          <select style={{ padding: '8px 80px', marginBottom: '16px' ,textAlign: 'left'}}>
            <option value="">Employee View</option>
            <option value="">Inactive Employee View</option>
            
            
          </select>
          
          
                
              
        </Box>
        {/* <Box sx={{ p:5 }}>
        <Typography>Employee View</Typography>
        </Box> */}
      <Paper elevation={2} >
        <Table sx={{ minWidth: 1350, borderRadius: 2 }}>
          <TableHead>
            <TableRow>
              <TableCell>Employee ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Nick Name</TableCell>
              <TableCell>Email Address</TableCell>
              <TableCell>Photo</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Designation</TableCell>
              <TableCell>Zoho Role</TableCell>
              <TableCell>Employment Type</TableCell>

              
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((emp) => (
              <TableRow key={emp.id}>
                <TableCell>{emp.id}</TableCell>
                <TableCell>{emp.firstName}</TableCell>
                <TableCell>{emp.lastName}</TableCell>
                <TableCell>{emp.nickName || "-"}</TableCell>
                <TableCell>{emp.email}</TableCell>
                <TableCell>
                  <Avatar src={emp.photo} alt={emp.firstName} />
                </TableCell>
                <TableCell>{emp.department || "-"}</TableCell>
                <TableCell>{emp.Designation || "-"}</TableCell>
                <TableCell>{emp.ZohoRole || "-"}</TableCell>
                <TableCell>{emp.EmploymentType || "-"}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default EmployeeList;
