import React, { useState } from 'react';

const Login = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    if (username === 'example' && password === 'password') {
      // Successful login
      console.log('Login successful');
      // Redirect the user to another page
      history.push('/dashboard');
    } else {
      // Failed login
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-center text-6xl font-extrabold text-gray-900">Amafhha Enterprise</h1>
          <h2 className="mt-6 text-center text-3xl text-gray-900">Sign in to your account</h2>
          {errorMessage && <div className="mt-4 text-center text-red-500">{errorMessage}</div>}
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">Username</label>
              <input id="username" name="username" type="text" autoComplete="username" required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {/* <!-- Heroicon name: solid/lock-closed --> */}
                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd"
                    d="M10 12a2 2 0 100-4 2 2 0 000 4zM4 8V6a4 4 0 118 0v2h1a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6a1 1 0 011-1h1z"
                    clipRule="evenodd" />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
