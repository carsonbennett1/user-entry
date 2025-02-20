import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserEntry from './components/UserEntry.jsx';
import ReadUsers from './components/ReadUsers.jsx';
 // Import your form component

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<UserEntry />} /> 
      <Route path="/read" element={<ReadUsers />} />
      {/* You can define other routes here */}
      </Routes>
    </Router>
  );
};

export default App;