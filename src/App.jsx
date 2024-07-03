import React from 'react';
import ContractsTable from './components/ContractsTable';
import AddLeadContactInfo from './components/AddLeadContactInfo';
import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ padding: '20px' }}>
        <ContractsTable />
        <AddLeadContactInfo />
      </Box>
    </ThemeProvider>
  );
}

export default App;
