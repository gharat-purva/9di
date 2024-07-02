import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Typography, TextField, MenuItem, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import LayersIcon from '@mui/icons-material/Layers';
import GetAppIcon from '@mui/icons-material/GetApp';
import rowsData from './contracts.json'; 
import clients from './clients.json';

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
  const [rows, setRows] = React.useState(rowsData);
  const [clientFilter, setClientFilter] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleClientChange = (event) => {
    setClientFilter(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRows = rows.filter((row) => {
    return (
      (clientFilter === 'All' || row.client === clientFilter) &&
      (row.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.subject.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <Box sx={{ backgroundColor: 'white', minHeight: '100vh', pt: 0 }}>
      <Box sx={{ backgroundColor: 'white', pb: 2, display: 'flex', alignItems: 'center', px: 2 }}>
        <Typography variant="h4">Contracts</Typography>
        <Typography variant="subtitle1" color="textSecondary" sx={{ ml: 2 }}>Home • Contracts</Typography>
      </Box>
      <Box sx={{ backgroundColor: 'white', px: 2, borderBottom: '1px solid #ccc', pb: 1 }}>
        <Button variant="text" sx={{ borderRight: '1px solid #ccc', borderRadius: 0, color: 'gray', '&:hover': { backgroundColor: 'transparent' }, '&:focus': { backgroundColor: 'transparent' } }}>
          Duration Start Date To End Date
        </Button>
        <Button variant="text" sx={{ borderRight: '1px solid #ccc', borderRadius: 0, color: 'gray', '&:hover': { backgroundColor: 'transparent' }, '&:focus': { backgroundColor: 'transparent' } }}>
          Client
          <TextField
            select
            size="small"
            value={clientFilter}
            onChange={handleClientChange}
            sx={{ ml: 1, width: 'auto', minWidth: 50, '& .MuiOutlinedInput-root': { border: 'none' } }}
          >
            {clients.map((client) => (
              <MenuItem key={client.value} value={client.value}>
                {client.label}
              </MenuItem>
            ))}
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
          value={searchTerm}
          onChange={handleSearchChange}
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
        <DataGrid rows={filteredRows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
      </Box>
    </Box>
  );
}
