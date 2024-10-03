import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
        <section className="flex justify-center items-center min-h-screen bg-teal-500">
        <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
          <img src="" alt="" />      
          <h2 className="text-2xl text-teal-300 font-bold mb-6 text-center">Spicy</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                placeholder='Email'
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-10">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
              <input 
                placeholder='Password'
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button type="submit" className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500">Login</button> 
          </form>
          <p className="mt-4 text-center">
          New Here? <Link to="/signup" className="text-teal-500 hover:underline">Signup</Link>
        </p>
        </div>       
      </section>
  );
};

export default Login;



