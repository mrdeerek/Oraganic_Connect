import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!storedUser) {
      navigate("/login");
      return;
    }
    setUser(storedUser);
    setFormData({ name: storedUser.name, email: storedUser.email || "" });
  }, [navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    const updatedUser = { ...user, ...formData };
    localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
    setUser(updatedUser);
    const regKey =
      user.userType === "farmer" ? "registeredFarmers" : "registeredUsers";
    const list = JSON.parse(localStorage.getItem(regKey)) || [];
    const updatedList = list.map((u) =>
      u.name === user.name ? updatedUser : u
    );
    localStorage.setItem(regKey, JSON.stringify(updatedList));

    setEditMode(false);
    alert("Profile updated!");
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">👤 My Profile</h2>

      {editMode ? (
        <>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded"
            placeholder="Name"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded"
            placeholder="Email"
          />
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 mr-2"
          >
            Save
          </button>
          <button
            onClick={() => setEditMode(false)}
            className="text-gray-600 hover:underline"
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email || "Not Provided"}
          </p>
          <p>
            <strong>Role:</strong> {user.userType}
          </p>

          <div className="mt-4 flex gap-3">
            <button
              onClick={() => setEditMode(true)}
              className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
            >
              Edit
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
