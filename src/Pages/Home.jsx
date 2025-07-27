import React from 'react';

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-[url(/back.jpg)] bg-cover bg-no-repeat bg-green-100 text-center">
      <h1 className="text-7xl font-bold mb-4">
        Welcome to <span className='text-white stroke-black stroke-2'>Organic-Connect</span>
      </h1>
      <p className="text-3xl max-w-3xl mb-6 uppercase">
        Bridging the gap between <span className="text-red-600 font-semibold">genuine organic</span> farmers and health-conscious consumers.
      </p>
      <a
        href="/marketplace"
        className="px-6 font-bold py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Explore Marketplace
      </a>
    </section>
  );
};

export default Home;
