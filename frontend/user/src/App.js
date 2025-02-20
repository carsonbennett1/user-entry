import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserEntry from './components/UserEntry.jsx';
import ReadUsers from './components/ReadUsers.jsx';
import CheckUsers from './components/CheckUsers.jsx';
 // Import your form component

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<UserEntry />} /> 
      <Route path="/read" element={<ReadUsers />} />
      <Route path="/form" element={<CheckUsers />} />
      {/* You can define other routes here */}
      </Routes>
    </Router>
  );
};

export default App;