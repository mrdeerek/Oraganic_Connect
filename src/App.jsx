import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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


const App = () => {
  return (
    <Router>
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
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
