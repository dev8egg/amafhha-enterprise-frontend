import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/hdr-logo.png'; // Import your logo

const Layout = ({ children }) => {
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/#/login';
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-header-color text-header-color-light py-4 px-4 flex items-center">
        <img src={logo} alt="Logo" className="h-8 w-auto mr-4" /> {/* Adjust height and width as needed */}
        <h1 className="text-2xl font-bold">Amafhha Enterprise</h1>
        <button onClick={handleLogout} className="flex items-center text-header-color-light hover:text-white ml-auto">
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
          Logout
        </button>
      </header>
      
      {/* Main Content */}
      <div className="flex flex-grow">
        {/* Side Menu */}
        <div className="w-1/4 mr-8 bg-sidebar-color-dark">
          <nav>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="block py-2 px-4 text-white rounded-lg hover:bg-sidebar-color">Dashboard</Link>
              </li>
              <li>
                <Link to="/dashboard/jobs" className="block py-2 px-4 text-white rounded-lg hover:bg-sidebar-color">Jobs</Link>
              </li>
              <li>
                <Link to="/dashboard/inventory" className="block py-2 px-4 text-white rounded-lg hover:bg-sidebar-color">Inventory</Link>
              </li>
              <li>
                <Link to="/dashboard/cutting-request"  className="block py-2 px-4 text-white rounded-lg hover:bg-sidebar-color">Cutting Request</Link>
              </li>
            </ul>
          </nav>
        </div>
        
        {/* Content Area */}
        <div className="w-3/4 overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;