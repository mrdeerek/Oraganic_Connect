import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-green-200 px-6 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-green-700 mb-4">
        🙏 Thank You!
      </h1>
      <p className="text-lg sm:text-xl max-w-2xl text-gray-800 mb-6">
        We're truly grateful you chose <span className="text-green-800 font-semibold">OrganicConnect</span> for your journey—whether to buy fresh organic produce 🌾 or to learn about a healthier, sustainable future 🌱.
      </p>
      <p className="text-md sm:text-lg text-gray-700 mb-8">
        Together, we support genuine organic farmers and promote conscious living. Thank you for being a part of our mission. 💚
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/marketplace"
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg shadow transition"
        >
          🛒 Back to Marketplace
        </Link>
        <Link
          to="/learning"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg shadow transition"
        >
          📚 Explore More Learning
        </Link>
        <Link
          to="/"
          className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-3 rounded-lg shadow transition"
        >
          🏠 Go to Homepage
        </Link>
      </div>

      <footer className="mt-12 text-sm text-gray-600">
        — With gratitude, <br />
        <span className="font-semibold text-green-700">The Organic-Connect Team 🌿</span>
      </footer>
    </div>
  );
};

export default ThankYou;
