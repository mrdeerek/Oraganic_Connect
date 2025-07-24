import React, { useState } from 'react';

const Signup = () => {
  const [userType, setUserType] = useState('consumer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    const newUser = { name, email, password, userType };

    // Get existing users
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if email already exists
    const exists = users.some(user => user.email === email);
    if (exists) {
      alert("Email already registered!");
      return;
    }

    // Save user
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert("Signup successful!");
    // Optionally redirect
    window.location.href = "/login";
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Signup</h2>

      <div className="flex justify-center mb-4 gap-4">
        <button onClick={() => setUserType('consumer')} className={`px-4 py-2 rounded ${userType === 'consumer' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
          Consumer
        </button>
        <button onClick={() => setUserType('farmer')} className={`px-4 py-2 rounded ${userType === 'farmer' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
          Farmer
        </button>
      </div>

      <form onSubmit={handleSignup} className="space-y-4">
        <input type="text" className="w-full p-2 border rounded" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" className="w-full p-2 border rounded" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" className="w-full p-2 border rounded" placeholder="Create Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
