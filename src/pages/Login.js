import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png'; // Adjust the path to your logo

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Implement your login logic here
    if (email && password) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "email": email,
        "password": password
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };


      fetch("/api/login", requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log("result----", result.status)
          if (result.status === 1) {
            localStorage.setItem('authToken', result.data.token);
            onLogin(true); // Notify parent component of successful login
          }
        })
        .catch(error => console.log('error', error));

      // if (email === 'mohammad' && password === 'testing123') {
      //   // Successful login
      navigate('/dashboard');
    } else {
      // Failed login
      setErrorMessage('Please enter email or password');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen" style={{ background: 'linear-gradient(to bottom right, #90252C, #545643)' }}>
      <div className="max-w-md w-full bg-white shadow-md rounded-lg px-8 py-6">
        {/* Logo at the top of the form */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Company Logo" className="h-20 w-auto" />
        </div>
        <h1 className="text-3xl font-extrabold text-center mb-6" style={{ color: '#90252C' }}>Welcome to Amafhha Enterprise</h1>
        <h2 className="text-xl text-gray-700 text-center mb-8">Sign in to your account</h2>
        {errorMessage && <div className="text-red-500 text-center mb-4" role="alert">{errorMessage}</div>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <div className="relative pb-2" style={{ borderBottom: '2px solid #90252C' }}>
              <FontAwesomeIcon icon={faUser} className="absolute top-2 left-0 text-gray-400" />
              <input
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                className="w-full py-2 pl-10 border-none focus:outline-none bg-transparent placeholder-gray-400"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="email"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="relative pb-2" style={{ borderBottom: '2px solid #90252C' }}>
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
          <button type="submit" className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
            <FontAwesomeIcon icon={faSignInAlt} className="mr-2" /> Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;