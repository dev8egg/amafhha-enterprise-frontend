// Layout.js
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  const handleLogout = () => {
    // Implement logout functionality here
    // For example, clear the authentication token from localStorage
    localStorage.removeItem('authToken');
    // Redirect the user to the login page
    window.location.href = '/#/login'; // or use history.push('/login') if you have access to history object
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4 px-4 flex">
        <h1 className="text-2xl font-bold">Amafhha Enterprise</h1>
        {/* Logout Button */}
        <button onClick={handleLogout} className="text-blue-300 hover:text-white ml-auto">Logout</button>
      </header>
      
      {/* Main Content */}
      <div className="flex flex-grow">
        {/* Side Menu */}
        <div className="w-1/4 mr-8 bg-blue-600">
          <nav>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="block py-2 px-4 text-white rounded-lg bg-blue-600 hover:bg-blue-700">Dashboard</Link>
              </li>
              <li>
                <Link to="/dashboard/jobs" className="block py-2 px-4 text-white rounded-lg bg-blue-600 hover:bg-blue-700">Jobs</Link>
              </li>
              <li>
                <Link to="/dashboard/cutting-request" className="block py-2 px-4 text-white rounded-lg bg-blue-600 hover:bg-blue-700">Cutting Request</Link>
              </li>
              <li>
                <Link to="/dashboard/inventory" className="block py-2 px-4 text-white rounded-lg bg-blue-600 hover:bg-blue-700">Inventory</Link>
              </li>
            </ul>
          </nav>
        </div>
        
        {/* Content Area */}
        <div className="w-3/4 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
