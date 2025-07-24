import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  return (
    <nav className="bg-green-600 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">OrganicConnect</Link>

        <div className="flex gap-4 text-sm items-center">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/marketplace" className="hover:underline">Marketplace</Link>
          <Link to="/onboarding" className="hover:underline">Onboard</Link>
          <Link to="/learning" className="hover:underline">Learn</Link>
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          {!user ? (
            <>
              <Link to="/login" className="hover:underline">Login</Link>
              <Link to="/signup" className="hover:underline">Signup</Link>
            </>
          ) : (
            <span className="ml-4 text-sm text-white">Hi, {user.name} ({user.userType})</span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
