import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {  
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();    
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const countDigits = (phoneNumber) => {
      // Remove non-digit characters
      const digitsOnly = phoneNumber.replace(/\D/g, '');
      return digitsOnly.length;
    };

    if (countDigits(phoneNumber) < 10) {
      alert('Phone number must have at least 10 digits!');
      return;
    }

    // Handle sign-up logic here
    console.log('Last Name:', lastName);
    console.log('First Name:', firstName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Country:', country);
    console.log('Phone Number:', phoneNumber);
  }

  return (
    <section className="bg-full bg-teal-500 flex justify-center items-center pt-10 pb-[80px]">
      <div className="w-full min-h-fit max-w-sm max-h-sm bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-xl text-teal-300 font-bold pr-2 mb-2 text-center">Spicy</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="first-name" className="block text-gray-700 font-bold mb-1">First Name</label>
            <input
              type="text"
              id="first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="last-name" className="block text-gray-700 font-bold mb-2">Last Name</label>
            <input
              type="text"
              id="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="confirm-password" className="block text-gray-700 font-bold mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="country" className="block text-gray-700 font-bold mb-2">Country</label>
            <input
              type="text"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone-number" className="block text-gray-700 font-bold mb-2">Phone Number</label>
            <input
              type="text"
              id="phone-number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <button type="submit" className="w-full bg-teal-500 text-white py-2 pt-1 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500">
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account? <Link to="/login" className="text-teal-500 hover:underline">Log in</Link>
        </p>
      </div>
    </section>
  );
}

export default Signup;
