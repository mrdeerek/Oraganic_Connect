import React, { useEffect, useState } from 'react';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  useEffect(() => {
    if (user?.userType === "consumer") {
      const allOrders = JSON.parse(localStorage.getItem("orders")) || [];
      const myOrders = allOrders.filter(order => order.consumerEmail === user.email);
      setOrders(myOrders);
    }
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">📜 My Order History</h2>
      {orders.length === 0 ? (
        <p className="text-gray-600">You haven't placed any orders yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((order, index) => (
            <div key={index} className="bg-white border rounded p-4 shadow">
              <p><strong>Product:</strong> {order.product}</p>
              <p><strong>Farmer:</strong> {order.farmer}</p>
              <p><strong>Location:</strong> {order.location}</p>
              <p><strong>Quantity:</strong> {order.quantity}</p>
              <p><strong>Status:</strong>
                <span className={
                  order.status === 'Delivered' ? 'text-green-600' :
                    order.status === 'Shipped' ? 'text-blue-600' :
                      'text-yellow-600'
                }> {order.status}</span>
              </p>
              <p className="text-xs text-gray-500 mt-2">📅 {new Date(order.timestamp).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
