import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <nav className="bg-green-600 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Organic-Connect
        </Link>

        <div className="flex items-center gap-4 text-sm sm:text-base">
          <Link to="/">Home</Link>
          <Link to="/marketplace">Marketplace</Link>
          <Link to="/onboarding">Onboard</Link>
          <Link to="/learning">Learn</Link>
          <Link to="/contact">Contact</Link>

          {loggedIn && (
            <div className="relative">
              <button onClick={toggleDropdown}>
                <BsThreeDotsVertical size={20} />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-50">
                  <div className="p-2 border-b font-semibold">Your Account</div>

                  {loggedIn.userType === "consumer" && (
                    <>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        👤 Profile
                      </Link>
                      <Link
                        to="/order-history"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        📜 My Orders
                      </Link>
                      <Link
                        to="/wishlist"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        💚 Wishlist
                      </Link>
                      <Link
                        to="/cart"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        🛒 Cart
                      </Link>
                    </>
                  )}

                  {loggedIn.userType === "admin" && (
                    <Link
                      to="/admin-dashboard"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      📊 Admin Panel
                    </Link>
                  )}

                  {loggedIn.userType === "farmer" && (
                    <>
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        📋 Dashboard
                      </Link>
                      <Link
                        to="/reset"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        🔄 Reset
                      </Link>
                    </>
                  )}

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-600"
                  >
                    🚪 Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {!loggedIn && (
            <>
              <Link to="/login" className="hover:underline">
                Login
              </Link>
              <Link to="/signup" className="hover:underline">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
