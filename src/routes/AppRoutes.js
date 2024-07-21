import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import Signup from '../components/Signup';
import PrivateRoute from './PrivateRoute'; // Assuming you have a PrivateRoute component for protected routes

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<PrivateRoute />} />
    </Routes>
  );
};

export default AppRoutes;
