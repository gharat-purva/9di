import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Typography, TextField, MenuItem, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import LayersIcon from '@mui/icons-material/Layers';
import GetAppIcon from '@mui/icons-material/GetApp';

const rows = [
  { id: 1, subject: 'Website Redesign', client: 'Tata Consultancy', project: 'UI/UX Overhaul', amount: '₹3000', startDate: '01/01/2023', endDate: '01/31/2023' },
  { id: 2, subject: 'Mobile App Development', client: 'Reliance Industries', project: 'E-Commerce App', amount: '₹5000', startDate: '02/01/2023', endDate: '03/31/2023' },
  { id: 3, subject: 'Digital Marketing Campaign', client: 'Infosys', project: 'SEO Optimization', amount: '₹2000', startDate: '01/15/2023', endDate: '02/28/2023' },
];

const columns = [
  { field: 'id', headerName: '#', width: 70 },
  { field: 'subject', headerName: 'Subject', width: 200, headerClassName: 'header-text' },
  { field: 'client', headerName: 'Client', minWidth: 150, headerClassName: 'header-text' }, 
  { field: 'project', headerName: 'Project', width: 150, headerClassName: 'header-text' },
  { field: 'amount', headerName: 'Amount', width: 100, headerClassName: 'header-text' },
  { field: 'startDate', headerName: 'Start Date', width: 120, headerClassName: 'header-text' },
  { field: 'endDate', headerName: 'End Date', width: 120, headerClassName: 'header-text' },
];

export default function ContractsTable() {
  return (
    <Box sx={{ backgroundColor: '#f3f4f8', minHeight: '100vh', pt: 0 }}>
      <Box sx={{ backgroundColor: 'white', pb: 2, display: 'flex',  alignItems: 'center', px: 2 }}>
        <Typography variant="h4">Contracts</Typography>
        <Typography variant="subtitle1" color="textSecondary"> Home • Contracts</Typography>
      </Box>
      <Box sx={{ backgroundColor: 'white', px: 2, borderBottom: '1px solid #ccc', pb: 1 }}>
        <Button variant="text" sx={{ borderRight: '1px solid #ccc', borderRadius: 0, color: 'gray', '&:hover': { backgroundColor: 'transparent' }, '&:focus': { backgroundColor: 'transparent' } }}>
          Duration Start Date To End Date
        </Button>
        <Button variant="text" sx={{ borderRight: '1px solid #ccc', borderRadius: 0, color: 'gray', '&:hover': { backgroundColor: 'transparent' }, '&:focus': { backgroundColor: 'transparent' } }}>
          Client
          <TextField select size="small" defaultValue="All" sx={{ ml: 1, width: 'auto', minWidth: 50, '& .MuiOutlinedInput-root': { border: 'none' } }}>
            <MenuItem value="All" sx={{ fontWeight: 'bold', color: 'black', border: 'none' }}>All</MenuItem>
          </TextField>
        </Button>
        <Button variant="text" sx={{ borderRight: '1px solid #ccc', borderRadius: 0, color: 'gray', '&:hover': { backgroundColor: 'transparent' }, '&:focus': { backgroundColor: 'transparent' } }}>
          Contract Type
          <TextField select size="small" defaultValue="All" sx={{ ml: 1, width: 'auto', minWidth: 50, '& .MuiOutlinedInput-root': { border: 'none' } }}>
            <MenuItem value="All" sx={{ fontWeight: 'bold', color: 'black', border: 'none' }}>All</MenuItem>
          </TextField>
        </Button>
        <TextField
          size="small"
          variant="outlined"
          placeholder="Start Typing to Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton edge="start">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ ml: 1, flex: 1, '& .MuiOutlinedInput-root': { border: 'none' } }}
        />
      </Box>
      <Box sx={{ display: 'flex', backgroundColor: 'white', px: 2, py: 2 }}>
        <Button variant="contained" sx={{ backgroundColor: '#ff9000', color: 'white', mr: 1, border: 'none' }}>
          <AddIcon sx={{ mr: 1 }} />
          Create Contract
        </Button>
        <Button variant="outlined" sx={{ mr: 1, color: 'gray', border: '1px solid gray', '&:hover': { backgroundColor: 'transparent' }, '&:focus': { backgroundColor: 'transparent' } }}>
          <LayersIcon sx={{ mr: 1 }} />
          Contract Template
        </Button>
        <Button variant="outlined" sx={{ color: 'gray', border: '1px solid gray', '&:hover': { backgroundColor: 'transparent' }, '&:focus': { backgroundColor: 'transparent' } }}>
          <GetAppIcon sx={{ mr: 1 }} />
          Export
        </Button>
      </Box>
      <Box sx={{ height: 400 }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
      </Box>
    </Box>
  );
}
