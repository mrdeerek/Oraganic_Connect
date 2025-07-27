import React from "react";
import { useCart } from "../Context/CartContext.jsx";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleCheckout = () => {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const newOrders = cart.map((item) => ({
      ...item,
      consumer: user?.name,
      date: new Date().toLocaleString(),
    }));

    localStorage.setItem("orders", JSON.stringify([...orders, ...newOrders]));
    clearCart();
    alert("Checkout complete! Order placed.");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-3 mb-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="border rounded p-3 flex justify-between items-center"
              >
                <div>
                  <p className="font-medium">{item.product}</p>
                  <p className="text-sm text-gray-500">
                    from {item.farmer} ({item.location})
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-600 hover:underline"
                >
                  ✖ Remove
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={handleCheckout}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
