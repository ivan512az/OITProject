import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import VolunteerDashboard from './pages/VolunteerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import EventSignUp from './pages/EventSignUp';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<VolunteerDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/event-signup" element={<EventSignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;