import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faSignInAlt } from '@fortawesome/free-solid-svg-icons'; // Import necessary Font Awesome icons

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement your login logic here
    if (username === 'example' && password === 'password') {
      // Successful login
      localStorage.setItem('authToken', 'authenticated');
      // Redirect the user to another page
      navigate('/dashboard');
    } else {
      // Failed login
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-700">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg px-8 py-6">
        <h1 className="text-3xl font-extrabold text-indigo-700 text-center mb-6">Welcome to Amafhha Enterprise</h1>
        <h2 className="text-xl text-gray-700 text-center mb-8">Sign in to your account</h2>
        {errorMessage && <div className="text-red-500 text-center mb-4">{errorMessage}</div>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <div className="relative border-b-2 border-indigo-500 pb-2">
              <FontAwesomeIcon icon={faUser} className="absolute top-2 left-0 text-gray-400" />
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                className="w-full py-2 pl-10 border-none focus:outline-none bg-transparent placeholder-gray-400"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                aria-label="Username"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="relative border-b-2 border-indigo-500 pb-2">
              <FontAwesomeIcon icon={faLock} className="absolute top-2 left-0 text-gray-400" />
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className="w-full py-2 pl-10 border-none focus:outline-none bg-transparent placeholder-gray-400"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                aria-label="Password"
              />
            </div>
          </div>
          <button type="submit" className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <FontAwesomeIcon icon={faSignInAlt} className="mr-2" /> Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;