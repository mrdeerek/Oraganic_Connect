import React, { useState } from 'react';

const Login = () => {
  const [userType, setUserType] = useState('consumer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = users.find(user => user.email === email && user.password === password && user.userType === userType);

    if (foundUser) {
      alert(`Welcome back, ${foundUser.name}!`);
      localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
      window.location.href = "/dashboard";
    } else {
      alert("Invalid credentials or user type.");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

      <div className="flex justify-center mb-4 gap-4">
        <button onClick={() => setUserType('consumer')} className={`px-4 py-2 rounded ${userType === 'consumer' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
          Consumer
        </button>
        <button onClick={() => setUserType('farmer')} className={`px-4 py-2 rounded ${userType === 'farmer' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
          Farmer
        </button>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        <input type="email" className="w-full p-2 border rounded" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" className="w-full p-2 border rounded" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Login</button>
      </form>
    </div>
  );
};

export default Login;
