import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import MedicationList from './components/MedicationList';
import AddMedication from './components/AddMedication';
import AddReminder from './components/AddReminder';
import './styles/Home.css';




const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/medications" element={<MedicationList />} />
            <Route path="/add-medication" element={<AddMedication />} />
            <Route path="/add-reminder" element={<AddReminder />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
