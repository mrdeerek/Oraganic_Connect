import React, { useState } from 'react';

const FarmerOnboarding = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    product: '',
    photo: '',
    certification: '',
    bio: '',
  });

  const handleChange = (e) => {
  const { name, value, files } = e.target;

  if (files && files.length > 0) {
    const reader = new FileReader();
    reader.onload = () => {
      setFormData((prev) => ({
        ...prev,
        [name]: reader.result, // base64 string
      }));
    };
    reader.readAsDataURL(files[0]);
  } else {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
};


  const handleSubmit = (e) => {
    e.preventDefault();

    const farmers = JSON.parse(localStorage.getItem('registeredFarmers')) || [];
    farmers.push(formData);
    localStorage.setItem('registeredFarmers', JSON.stringify(farmers));

    alert('Farmer registered successfully!');
    setFormData({
      name: '',
      location: '',
      product: '',
      photo: '',
      certification: '',
      bio: '',
    });
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Farmer Onboarding</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full p-2 border rounded" required />
        <input name="location" type="text" value={formData.location} onChange={handleChange} placeholder="Farm Location" className="w-full p-2 border rounded" required />

        <select name="product" value={formData.product} onChange={handleChange} className="w-full p-2 border rounded" required>
          <option value="">Select Main Crop</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Fruits">Fruits</option>
          <option value="Grains">Grains</option>
          <option value="Herbs">Herbs</option>
        </select>

        <textarea name="bio" value={formData.bio} onChange={handleChange} rows="4" placeholder="Short Bio (optional)" className="w-full p-2 border rounded"></textarea>

        <input name="photo" type="file" accept="image/*" onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="certification" type="file" accept=".pdf,.jpg,.png" onChange={handleChange} className="w-full p-2 border rounded" />

        <button type="submit" className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700">Submit</button>
      </form>
    </div>
  );
};

export default FarmerOnboarding;
