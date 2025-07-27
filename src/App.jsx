import React from 'react';
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Context/CartContext.jsx';


import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';

import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Marketplace from './Pages/Marketplace.jsx';
import FarmerOnboarding from './Pages/FarmerOnboarding.jsx';
import LearningHub from './Pages/LearningHub.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Contact from './Pages/Contact.jsx';
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import ResetDemo from './Pages/ResetDemo.jsx';
import Profile from './Pages/Profile.jsx';
import AllOrders from './Pages/AllOrders.jsx';
import Cart from './Pages/Cart.jsx';
import OrderHistory from './Pages/OrderHistory.jsx';
import AdminDashboard from './Pages/AdminDashboard.jsx';
import Wishlist from './Pages/Wishlist.jsx';
import AdminOrders from './Pages/AdminOrders.jsx';
import ThankYou from './Pages/ThankYou';

// import { useTranslation } from 'react-i18next';







const App = () => {
  return (
     <BrowserRouter>
      <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/onboarding" element={<FarmerOnboarding />} />
        <Route path="/learning" element={<LearningHub />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reset" element={<ResetDemo />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<AllOrders />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thankyou" element={<ThankYou />} />


        <Route path="/admin-orders" element={<AdminOrders />} />


        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
      </Routes>
      <Footer />
    </CartProvider>
    </BrowserRouter>
  );
};

export default App;
