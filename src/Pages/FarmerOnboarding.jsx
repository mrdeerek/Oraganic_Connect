import React, { useState } from "react";

const FarmerOnboarding = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    product: "",
    bio: "",
    photo: "",
    contact: "",
    certification: "",
    selfDeclared: false,
  });

  const [status, setStatus] = useState("");
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, photo: reader.result }));
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.certification && !formData.selfDeclared) {
      alert("Please upload a certification or check Self-Declared option.");
      return;
    }

    const allFarmers =
      JSON.parse(localStorage.getItem("registeredFarmers")) || [];
    allFarmers.push(formData);
    localStorage.setItem("registeredFarmers", JSON.stringify(allFarmers));

    setStatus("Registered successfully!");
    setFormData({
      name: "",
      location: "",
      product: "",
      bio: "",
      photo: "",
      contact: "",
      certification: "",
      selfDeclared: false,
    });
    setPreview(null);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-green-700">
        🌾 Farmer Onboarding
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        Register as a verified organic farmer by sharing your details.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <select
          name="product"
          value={formData.product}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        >
          <option value="">-- Select Crop Type --</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Fruits">Fruits</option>
          <option value="Grains">Grains</option>
          <option value="Herbs">Herbs</option>
        </select>

        <textarea
          name="bio"
          placeholder="Short Bio (experience, farm practices, etc.)"
          value={formData.bio}
          onChange={handleChange}
          required
          className="border p-2 rounded"
          rows={4}
        />

        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoUpload}
          required
          className="border p-2 rounded"
        />
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="w-full max-h-48 object-cover rounded"
          />
        )}

        <input
          type="tel"
          name="contact"
          placeholder="WhatsApp Contact Number"
          value={formData.contact}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />

        <input
          type="url"
          name="certification"
          placeholder="Certification Document URL (optional)"
          value={formData.certification}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <label className="text-sm flex items-center gap-2">
          <input
            type="checkbox"
            name="selfDeclared"
            checked={formData.selfDeclared}
            onChange={handleChange}
          />
          I don't have a certification (Self-Declared Organic)
        </label>

        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Submit Details
        </button>
      </form>

      {status && (
        <p className="mt-4 text-sm text-center text-blue-700 font-medium">
          {status}
        </p>
      )}
    </div>
  );
};

export default FarmerOnboarding;
