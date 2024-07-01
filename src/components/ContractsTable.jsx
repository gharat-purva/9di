import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Typography, TextField, MenuItem } from '@mui/material';

const rows = [
  { id: 1, subject: 'Website Redesign', client: 'Tata Consultancy', project: 'UI/UX Overhaul', amount: '₹3000', startDate: '01/01/2023', endDate: '01/31/2023' },
  { id: 2, subject: 'Mobile App Development', client: 'Reliance Industries', project: 'E-Commerce App', amount: '₹5000', startDate: '02/01/2023', endDate: '03/31/2023' },
  { id: 3, subject: 'Digital Marketing Campaign', client: 'Infosys', project: 'SEO Optimization', amount: '₹2000', startDate: '01/15/2023', endDate: '02/28/2023' },
];

const columns = [
  { field: 'id', headerName: '#', width: 70 },
  { field: 'subject', headerName: 'Subject', width: 200 },
  { field: 'client', headerName: 'Client', minWidth: 150 }, 
  { field: 'project', headerName: 'Project', width: 150 },
  { field: 'amount', headerName: 'Amount', width: 100 },
  { field: 'startDate', headerName: 'Start Date', width: 120 },
  { field: 'endDate', headerName: 'End Date', width: 120 },
];

export default function ContractsTable() {
  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h4">Contracts</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <TextField label="Duration" variant="outlined" size="small" sx={{ mr: 1 }} />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField label="Client" variant="outlined" size="small" sx={{ mr: 1 }} select>
            <MenuItem value="All">All</MenuItem>
          </TextField>
          <TextField label="Contract Type" variant="outlined" size="small" sx={{ mr: 1 }} select>
            <MenuItem value="All">All</MenuItem>
          </TextField>
        </Box>
        <TextField label="Search" variant="outlined" size="small" />
      </Box>
      <Box sx={{ display: 'flex', mb: 2 }}>
        <Button variant="contained" sx={{ backgroundColor: '#ff9000', color: 'white', mr: 1 }}>
          Create Contract
        </Button>
        <Button variant="outlined" sx={{ mr: 1 }}>
          Contract Template
        </Button>
        <Button variant="outlined">
          Export
        </Button>
      </Box>
      <Box sx={{ height: 400 }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
      </Box>
    </Box>
  );
}
