import React from 'react';

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-green-100 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to OrganicConnect</h1>
      <p className="text-lg max-w-xl mb-6">
        Bridging the gap between genuine organic farmers and health-conscious consumers.
      </p>
      <a href="/marketplace" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
        Explore Marketplace
      </a>
    </section>
  );
};

export default Home;
