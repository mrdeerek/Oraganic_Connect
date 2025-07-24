import React from 'react';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    window.location.href = "/login";
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Welcome, {user?.name}</h2>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Product Views</h3>
          <p className="text-2xl">245</p>
        </div>
        <div className="bg-white border p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Customer Reviews</h3>
          <p className="text-2xl">30</p>
        </div>
        <div className="bg-white border p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Sales</h3>
          <p className="text-2xl">50</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
