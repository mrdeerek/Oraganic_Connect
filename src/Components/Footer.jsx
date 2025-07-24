import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white p-6 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div>
          <h3 className="text-lg font-semibold mb-2">OrganicConnect</h3>
          <p className="text-sm">Empowering verified organic farmers and health-conscious consumers through transparency and education.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/marketplace" className="hover:underline">Marketplace</Link></li>
            <li><Link to="/onboarding" className="hover:underline">Farmer Onboarding</Link></li>
            <li><Link to="/learning" className="hover:underline">Learning Hub</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-sm">Email: kunalraj845438.com</p>
          <p className="text-sm">Phone: +91-7564825637</p>
          <p className="text-sm">Chandigarh University, India</p>
        </div>

      </div>
      <div className="text-center mt-6 text-sm text-green-100">
        © {new Date().getFullYear()} OrganicConnect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
