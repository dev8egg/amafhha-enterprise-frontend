import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check if authentication token exists in local storage
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      console.log(authToken, "------------------- yaye");
      // If token exists, set authenticated to true
      setAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* If authenticated, route to Dashboard, else route to Login */}
        <Route path="/dashboard" element={authenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/" element={authenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
};

export default App;
