import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [farmers, setFarmers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const farmerData = JSON.parse(localStorage.getItem('registeredFarmers')) || [];
    const orderData = JSON.parse(localStorage.getItem('orders')) || [];
    const reviewData = JSON.parse(localStorage.getItem('reviews')) || [];

    setFarmers(farmerData);
    setOrders(orderData);
    setReviews(reviewData);
  }, []);

  const uniqueConsumers = new Set(orders.map(order => order.consumer));
  const avgRating =
    reviews.length > 0
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
      : 'N/A';

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">📊 Admin Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold">👨‍🌾 Total Farmers</h3>
          <p className="text-3xl font-bold">{farmers.length}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold">👥 Total Consumers</h3>
          <p className="text-3xl font-bold">{uniqueConsumers.size}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold">🧾 Total Orders</h3>
          <p className="text-3xl font-bold">{orders.length}</p>
        </div>
        <div className="bg-white p-4 rounded shadow col-span-1 sm:col-span-2">
          <h3 className="text-xl font-semibold">⭐ Average Review Rating</h3>
          <p className="text-3xl font-bold">{avgRating} / 5</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
