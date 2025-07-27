import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [myOrders, setMyOrders] = useState([]);
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    setLoggedIn(user);

    if (user && user.userType === "farmer") {
      const allOrders = JSON.parse(localStorage.getItem('orders')) || [];
      const filtered = allOrders.filter(order => order.farmer === user.name);
      setMyOrders(filtered);
    }
  }, []); // ✅ Empty dependency to run only once on mount

  if (!loggedIn || loggedIn.userType !== "farmer") {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold text-red-500">Access Denied</h2>
        <p className="text-sm mt-2">Only farmers can view this page.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📦 My Orders</h2>

      {myOrders.length === 0 ? (
        <p>No orders received yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {myOrders.map((order, idx) => (
            <div key={idx} className="bg-white p-4 border rounded shadow">
              <div className="text-sm">
                <p><strong>👤 Consumer:</strong> {order.consumer}</p>
                <p><strong>🌾 Product:</strong> {order.product}</p>
                <p><strong>⚖️ Quantity:</strong> {order.quantity} kg</p>
                <p><strong>📍 Location:</strong> {order.location}</p>
                <p><strong>📝 Note:</strong> {order.note || 'N/A'}</p>
                <p className="text-xs text-gray-500 mt-2"><strong>🕒 Placed on:</strong> {order.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
