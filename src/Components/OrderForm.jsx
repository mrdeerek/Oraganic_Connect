import React, { useState } from 'react';

const OrderForm = ({ farmer }) => {
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState('');
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  const handleSubmit = (e) => {
    e.preventDefault();

    const newOrder = {
      farmer: farmer.name,
      product: farmer.product,
      location: farmer.location,
      quantity: form.quantity,
      consumerEmail: loggedIn.email,
      timestamp: Date.now(),
      status: 'Pending'
    };


    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));

    alert('Order placed successfully!');
    setQuantity(1);
    setNote('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 bg-green-50 p-3 rounded text-sm space-y-2">
      <label className="block text-sm font-medium">Quantity (kg):</label>
      <input
        type="number"
        value={quantity}
        min="1"
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="w-full p-1 border rounded"
        required
      />
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Any delivery instructions?"
        className="w-full p-1 border rounded"
      ></textarea>
      <button type="submit" className="w-full bg-green-600 text-white py-1 rounded hover:bg-green-700">
        Place Order
      </button>
    </form>
  );
};

export default OrderForm;
