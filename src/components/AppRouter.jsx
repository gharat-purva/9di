// src/components/AppRouter.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import NavBar from './NavBar';
import EventsPage from './EventsPage';
import ContractsTable from './ContractsTable';
import AddLeadContactInfo from './AddLeadContactInfo';
import TasksPage from './TasksPage'; 
import AddTaskPage from './AddTaskPage'; 
import ProductsPage from './ProductsPage';
import AddProductsPage from './AddProductsPage';

const theme = createTheme();

const AppRouter = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <NavBar />
        <Routes>
          <Route path="/events" element={<EventsPage />} />
          <Route path="/contracts" element={<ContractsTable />} />
          <Route path="/add-lead" element={<AddLeadContactInfo />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/add-task" element={<AddTaskPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/add-products" element={<AddProductsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;
