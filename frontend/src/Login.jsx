import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/login', loginData);
      const { success, message } = response.data;

      if (success) {
        console.log('Login Successfully');
      } else {
        console.log(message);
      }
    } catch (error) {
      console.error('Login error', error);
    }
    setLoginData({
      username: '',
      password: ''
    });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-2xl font-bold text-center mb-6">Login Page</h1>
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-4">
              <input
                type='text'
                name='username'
                placeholder='Username'
                value={loginData.username}
                onChange={handleLoginChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <input
                type='password'
                name='password'
                placeholder='Password'
                value={loginData.password}
                onChange={handleLoginChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type='submit'
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </div>
            <p className="mt-4 text-center text-gray-700">
              Not registered yet?{' '}
              <Link to='/register' className="text-blue-500 hover:text-blue-700">
                Register Here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
