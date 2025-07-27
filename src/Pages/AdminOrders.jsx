import React, { useEffect, useState } from 'react';

const AdminOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const allOrders = JSON.parse(localStorage.getItem("orders")) || [];
        setOrders(allOrders);
    }, []);

    const handleStatusChange = (index, newStatus) => {
        const updatedOrders = [...orders];
        updatedOrders[index].status = newStatus;
        setOrders(updatedOrders);
        localStorage.setItem("orders", JSON.stringify(updatedOrders));
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-green-700 mb-4">📦 All Orders (Admin)</h2>
            {orders.length === 0 ? (
                <p className="text-gray-600">No orders found.</p>
            ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {orders.map((order, index) => (
                        <div key={index} className="bg-white border rounded p-4 shadow">
                            <p><strong>Product:</strong> {order.product}</p>
                            <p><strong>Farmer:</strong> {order.farmer}</p>
                            <p><strong>Consumer:</strong> {order.consumerEmail}</p>
                            <p><strong>Location:</strong> {order.location}</p>
                            <p><strong>Quantity:</strong> {order.quantity}</p>
                            <p className="text-sm text-gray-500 mb-2">📅 {new Date(order.timestamp).toLocaleString()}</p>

                            <div className="flex items-center gap-2">
                                <label className="text-sm">Status:</label>
                                <select
                                    value={order.status}
                                    onChange={(e) => handleStatusChange(index, e.target.value)}
                                    className="border px-2 py-1 rounded"
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="Shipped">Shipped</option>
                                    <option value="Delivered">Delivered</option>
                                </select>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AdminOrders;
