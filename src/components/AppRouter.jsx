import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import NavBar from './NavBar';
import LoginPage from './LoginPage';
import EventsPage from './EventsPage';
import ContractsTable from './ContractsTable';
import AddLeadContactInfo from './AddLeadContactInfo';
import TasksPage from './TasksPage'; 
import AddTaskPage from './AddTaskPage'; 
import ProductsPage from './ProductsPage';
import AddProductsPage from './AddProductsPage';
import KnowledgeBasePage from './KnowledgeBasePage';
import AddKnowledgeBase from './AddKnowledgeBase';
import AddOfferLetter from './AddOfferLetter';

const theme = createTheme();

const AppRouter = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!isLoginPage && <NavBar />}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contracts" element={<ContractsTable />} />
        <Route path="/add-lead" element={<AddLeadContactInfo />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/add-task" element={<AddTaskPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/add-products" element={<AddProductsPage />} />
        <Route path="/knowledge-base" element={<KnowledgeBasePage />} />
        <Route path="/add-knowledge-base" element={<AddKnowledgeBase />} />
        <Route path="/add-offer-letter" element={<AddOfferLetter />} />
      </Routes>
    </ThemeProvider>
  );
};

export default AppRouter;
