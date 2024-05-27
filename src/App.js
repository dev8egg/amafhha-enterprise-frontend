import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import Jobs from './pages/Jobs/Jobs';
import Inventory from './pages/Inventory/Inventory';
import CuttingRequest from './pages/CuttingRequest/CuttingRequest';
import NewRequest from './pages/CuttingRequest/NewRequest/NewRequest';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [authChecked, setAuthChecked] = useState(false); // New state variable

  useEffect(() => {
    // Check if authentication token exists in local storage
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      // If token exists, set authenticated to true
      setAuthenticated(true);
    }
    setAuthChecked(true); // Set authChecked to true after checking authentication
  }, []);

  const onLogin = (isLoggedIn) => {
    setAuthenticated(isLoggedIn);
  };

  if (!authChecked) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or similar
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={onLogin} />} />
        <Route
          path="/dashboard/"
          element={authenticated ? <Layout><Dashboard /></Layout> : <Navigate to="/login" />}
        />
        <Route
          path="/dashboard/jobs/*"
          element={authenticated ? <Layout><Jobs /></Layout> : <Navigate to="/login" />}
        />
        <Route
          path="/dashboard/inventory/"
          element={authenticated ? <Layout><Inventory /></Layout> : <Navigate to="/login" />}
        />
        <Route
          path="/dashboard/cutting-request/"
          element={authenticated ? <Layout><CuttingRequest /></Layout> : <Navigate to="/login" />}
        />
        <Route
          path="/dashboard/cutting-request/new-request/:id"
          element={authenticated ? <Layout><NewRequest /></Layout> : <Navigate to="/login" />}
        />
        {/* Redirect to login if not authenticated */}
        <Route
          path="/*"
          element={authenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
