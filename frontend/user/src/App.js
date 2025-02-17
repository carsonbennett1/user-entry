import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserEntry from './components/UserEntry.jsx';
 // Import your form component

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/form" element={<UserEntry />} /> {/* Updated to use 'element' */}
      {/* You can define other routes here */}
      </Routes>
    </Router>
  );
};

export default App;