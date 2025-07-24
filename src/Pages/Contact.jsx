import React from 'react';

const Contact = () => {
  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" required />
        <input type="email" placeholder="Email Address" className="w-full p-2 border rounded" required />
        <textarea placeholder="Your Message" rows="4" className="w-full p-2 border rounded" required></textarea>
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
