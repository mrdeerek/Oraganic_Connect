import React, { useEffect, useState } from 'react';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        setUser(loggedInUser);
    }, []);

    useEffect(() => {
        if (!user) return;

        const allOrders = JSON.parse(localStorage.getItem('orders')) || [];

        if (user.userType === 'consumer') {
            const myOrders = allOrders.filter(order => order.consumer === user.name);
            setOrders(myOrders);
        } else if (user.userType === 'admin') {
            setOrders(allOrders);
        } else {
            setOrders([]);
        }
    }, [user]);

    if (!user) {
        return (
            <div className="p-6 text-center text-red-500">
                <h2 className="text-xl font-bold">Access Denied</h2>
                <p>You must be logged in to view orders.</p>
            </div>
        );
    }

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">
                {user.userType === 'admin' ? '📋 All Orders' : '🧾 My Orders'}
            </h2>

            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                <div className="grid md:grid-cols-2 gap-4">
                    {orders.map((order, index) => (
                        <div key={index} className="border rounded-lg p-4 shadow">
                            <p><strong>👤 Consumer:</strong> {order.consumer}</p>
                            <p><strong>🌾 Product:</strong> {order.product}</p>
                            <p><strong>📦 Quantity:</strong> {order.quantity} kg</p>
                            <p><strong>👨‍🌾 Farmer:</strong> {order.farmer}</p>
                            <p><strong>📍 Location:</strong> {order.location}</p>
                            <p><strong>📝 Note:</strong> {order.note || 'N/A'}</p>
                            <p className="text-xs text-gray-500 mt-2"><strong>📅 Date:</strong> {order.date}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllOrders;
