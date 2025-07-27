import React, { useEffect, useState } from 'react';
import { useCart } from '../Context/CartContext';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const { addToCart } = useCart();
  const loggedIn = JSON.parse(localStorage.getItem('loggedInUser'));

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(stored);
  }, []);

  const handleRemove = (index) => {
    const updated = [...wishlist];
    updated.splice(index, 1);
    localStorage.setItem('wishlist', JSON.stringify(updated));
    setWishlist(updated);
  };

  const handleAddToCart = (item) => {
    addToCart({
      farmer: item.name,
      product: item.product,
      location: item.location,
      photo: item.photo,
    });
    alert(`${item.product} added to cart!`);
  };

  const handlePlaceOrder = (item, index) => {
    if (!loggedIn) {
      alert("Please login to place an order.");
      return;
    }

    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    const newOrder = {
      consumer: loggedIn.name,
      farmer: item.name,
      product: item.product,
      location: item.location,
      status: 'Pending',
      timestamp: new Date().toISOString(),
    };

    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Remove from wishlist after ordering
    handleRemove(index);

    alert("✅ Order placed successfully!");
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-green-700">💚 My Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="text-gray-600 text-sm">No items in your wishlist yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              {item.photo && (
                <img
                  src={item.photo}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-green-700 font-medium">{item.product}</p>
                <p className="text-sm text-gray-600">{item.location}</p>
                <p className="text-sm mt-1">{item.bio}</p>

                <div className="mt-4 flex flex-wrap gap-2 justify-between items-center">
                  <a
                    href={`https://wa.me/${item.contact}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white bg-green-500 px-3 py-1 rounded hover:bg-green-600"
                  >
                    💬 Contact
                  </a>

                  <button
                    onClick={() => handleAddToCart(item)}
                    className="text-sm text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
                  >
                    ➕ Add to Cart
                  </button>

                  <button
                    onClick={() => handlePlaceOrder(item, index)}
                    className="text-sm text-white bg-indigo-600 px-3 py-1 rounded hover:bg-indigo-700"
                  >
                    ✅ Order Now
                  </button>

                  <button
                    onClick={() => handleRemove(index)}
                    className="text-sm text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600"
                  >
                    ❌ Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
