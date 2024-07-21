import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Home from '../components/Home';
import PrivateRoute from './PrivateRoute';
import MedicationList from '../components/MedicationList';
import AddMedication from '../components/AddMedication';
import AddReminder from '../components/AddReminder';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<PrivateRoute component={Home} />} />
      <Route path="/medications" element={<MedicationList />} />
      <Route path="/add" element={<AddMedication />} />
      <Route path="/add/:id" element={<AddReminder />} />
    
    </Routes>
  </Router>
);

export default AppRoutes;
