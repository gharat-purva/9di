import React, { useState } from 'react';
import {
  Box, Button, Typography, TextField, MenuItem, IconButton, Tooltip, List, ListItem, ListItemText
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import InboxIcon from '@mui/icons-material/Inbox';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import MenuIcon from '@mui/icons-material/Menu';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

const KnowledgeBasePage = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);

  const handleAddProductClick = () => {
    navigate('/add-products'); 
  };

  const columns = [
    { field: '#', headerName: '#', width: 80 },
    { field: 'articleHeading', headerName: 'Article Heading', width: 200 },
    { field: 'articleCategory', headerName: 'Article Category', width: 200 },
    { field: 'to', headerName: 'To', width: 120 },
    {
      field: 'action',
      headerName: 'Action',
      width: 120,
      renderCell: (params) => (
        <Button onClick={() => handleDelete(params.rowIndex)} variant="outlined">Delete</Button>
      ),
    },
  ];

  const rows = []; // No data currently

  return (
    <Box sx={{ display: 'flex', backgroundColor: '#f3f4f8', minHeight: '100vh', overflowX: 'hidden' }}>
      <Box sx={{ flexGrow: 1, mr: 0, ml: 0 }}>
        <Box sx={{ backgroundColor: 'white', pb: 2, p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, borderBottom: '1px solid #eef2f6', ml: 30 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h5" fontWeight="bold" sx={{ textTransform: 'none', ml: 2}}>Knowledge Base</Typography>
            <Typography variant="subtitle1" color="textSecondary" sx={{ ml: 2, textTransform: 'none' }}>Home • Knowledge Base</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', color: '#616e7f' }}>
            <Tooltip title="Search"><IconButton><SearchIcon /></IconButton></Tooltip>
            <Tooltip title="Inbox"><IconButton><InboxIcon /></IconButton></Tooltip>
            <Tooltip title="Timer"><IconButton><AccessTimeIcon /></IconButton></Tooltip>
            <Tooltip title="Add Circle"><IconButton><AddCircleIcon /></IconButton></Tooltip>
            <Tooltip title="Notifications"><IconButton><NotificationsIcon /></IconButton></Tooltip>
            <Tooltip title="Power Settings"><IconButton><PowerSettingsNewIcon /></IconButton></Tooltip>
          </Box>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ width: '250px', height: 900, backgroundColor: '#fff', pl: 1.5, pt: 1, borderRight: '1px solid #eef2f6', ml: 30 }}>
            <IconButton 
              sx={{ 
                  my: 1, 
                  ml: 2, 
                  backgroundColor: '#ffffff',  
                  borderLeft: 'solid 1px', 
                  borderTop: 'solid 1px', 
                  borderBottom: 'solid 1px', 
                  borderColor: '#c4c4c4',
                  borderRadius: 0,
                  borderTopLeftRadius: '4px', 
                  borderBottomLeftRadius: '4px', 
                  p: 1, 
                  height: '40px', 
                  width: '45px' 
              }}
              >
              <SearchIcon />
            </IconButton>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search"
              sx={{
                  mt: 1,
                  ml: 0,
                  backgroundColor: 'white',
                  width: '65%',
                  '& .MuiOutlinedInput-root': {
                  height: '40px',
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                  borderLeft: 'none',
                  },
              }}
            />
            <List>
              <ListItem button onClick={() => setSelectedItem('all')} sx={{
                backgroundColor: selectedItem === 'all' ? '#e9eef4' : 'transparent',
                borderRight: selectedItem === 'all' ? '4px solid #c4c4c4' : 'none',
              }}>
                <ListItemText primary="All" />
              </ListItem>
              <ListItem button onClick={() => setSelectedItem('ruleBook')} sx={{
                backgroundColor: selectedItem === 'ruleBook' ? '#e9eef4' : 'transparent',
                borderRight: selectedItem === 'ruleBook' ? '4px solid #c4c4c4' : 'none',
              }}>
                <ListItemText primary="Rule Book" />
              </ListItem>
            </List>
          </Box>
          <Box sx={{ flexGrow: 1, p: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Button sx={{ backgroundColor: '#ff9000', textTransform: 'none', color: 'white', mr: 2 }} onClick={handleAddProductClick}>
                <AddIcon />
                Add New Article
              </Button>
              <Button variant="outlined" sx={{ backgroundColor: '#fff', textTransform: 'none', borderColor: '#616e7f', color: '#616e7f', mr: 2 }}>
                <AddIcon sx={{ mr: 1 }} />
                Manage Article Category
              </Button>
              <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
                <IconButton sx={{ my: 1, ml: 2, backgroundColor: '#e8ecef', border: 'solid 1px', borderColor: '#c4c4c4', borderRadius: 0, borderTopLeftRadius: '4px', borderBottomLeftRadius: '4px', p: 1, height: '40px', width: '35px' }}>
                  <SearchIcon />
                </IconButton>
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Start typing to search"
                  sx={{ ml: 0, backgroundColor: 'white', '& .MuiOutlinedInput-root': { height: '40px', borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderLeft: 'none' } }}
                />
              </Box>
            </Box>
            <Box sx={{ backgroundColor: 'white', height: 500, width: '100%', border: '1px solid #e0e0e0', borderRadius:'4px', position: 'relative' }}>
              <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                <MenuIcon sx={{ fontSize: 80, color: '#c4c4c4' }} />
                <Typography variant="h6" color="#a8b2c0" sx={{ mt: 2 }}>- No records found -</Typography>
              </Box>
              <Box sx={{ p: 2 }}>
                <Typography variant="h5" sx={{ textTransform: 'none', mb: 4, borderBottom: '1px solid #e0e0e0' }}>Knowledge Base</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', color: '#a8b2c0', backgroundColor: '#fff', borderBottom: '1px solid #e0e0e0', p: 1 }}>
                  {columns.map(col => (
                    <Box key={col.field} sx={{ flexBasis: col.width, flexGrow: 1, textAlign: 'center' }}>
                      <Typography variant="subtitle1">{col.headerName}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default KnowledgeBasePage;
