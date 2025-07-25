import React, { useEffect, useState } from 'react';
import ReviewForm from '../components/ReviewForm.jsx';
import ReviewList from '../components/ReviewList.jsx';
import OrderForm from '../Components/OrderForm.jsx';


const Marketplace = () => {
  const [farmers, setFarmers] = useState([]);
  const [filteredFarmers, setFilteredFarmers] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});
  const loggedIn = JSON.parse(localStorage.getItem('loggedInUser'));

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('registeredFarmers')) || [];
    setFarmers(stored);
    setFilteredFarmers(stored);
  }, []);

  useEffect(() => {
    let data = [...farmers];

    if (search) {
      data = data.filter(farmer =>
        farmer.name.toLowerCase().includes(search.toLowerCase()) ||
        farmer.location.toLowerCase().includes(search.toLowerCase()) ||
        farmer.product.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (filter) {
      data = data.filter(farmer => farmer.product === filter);
    }

    setFilteredFarmers(data);
  }, [search, filter, farmers]);

  const handleDelete = (indexToDelete) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    const updated = farmers.filter((_, index) => index !== indexToDelete);
    localStorage.setItem('registeredFarmers', JSON.stringify(updated));
    setFarmers(updated);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditData(farmers[index]);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    const updatedFarmers = [...farmers];
    updatedFarmers[editIndex] = editData;
    localStorage.setItem('registeredFarmers', JSON.stringify(updatedFarmers));
    setFarmers(updatedFarmers);
    setEditIndex(null);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Explore Verified Organic Farmers</h2>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name, product, or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border p-2 rounded"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Crops</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Fruits">Fruits</option>
          <option value="Grains">Grains</option>
          <option value="Herbs">Herbs</option>
        </select>
      </div>

      {filteredFarmers.length === 0 ? (
        <p>No matching farmers found.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFarmers.map((farmer, index) => {
            const isOwner = loggedIn && farmer.name === loggedIn.name && loggedIn.userType === "farmer";
            const isEditing = editIndex === index;

            return (
              <div key={index} className="bg-white border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                {farmer.photo && <img src={farmer.photo} alt={farmer.name} className="w-full h-48 object-cover" />}
                <div className="p-4">
                  {isEditing ? (
                    <>
                      <input name="name" value={editData.name} onChange={handleEditChange} className="w-full mb-2 p-1 border rounded" />
                      <input name="location" value={editData.location} onChange={handleEditChange} className="w-full mb-2 p-1 border rounded" />
                      <input name="product" value={editData.product} onChange={handleEditChange} className="w-full mb-2 p-1 border rounded" />
                      <textarea name="bio" value={editData.bio} onChange={handleEditChange} className="w-full mb-2 p-1 border rounded"></textarea>
                      <button onClick={handleUpdate} className="bg-green-600 text-white text-sm px-4 py-1 rounded hover:bg-green-700">✅ Save</button>
                    </>
                  ) : (
                    <>
                      <h3 className="text-xl font-semibold">{farmer.name}</h3>
                      <p className="text-sm text-gray-600">{farmer.location}</p>
                      <p className="text-green-700 font-medium">{farmer.product}</p>
                      <p className="text-sm mt-2">{farmer.bio}</p>

                      <div className="mt-3 flex flex-col gap-2">
                        {farmer.certification ? (
                          <>
                            <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-xs font-medium rounded">
                              ✅ Verified Organic
                            </span>
                            <a
                              href={farmer.certification}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block bg-blue-100 text-blue-800 px-3 py-1 text-xs font-medium rounded hover:underline"
                            >
                              📄 View Certification
                            </a>
                          </>
                        ) : (
                          <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 text-xs font-medium rounded">
                            ⚠️ Self-Declared Organic
                          </span>
                        )}

                        {isOwner && (
                          <>
                            <button
                              onClick={() => handleEdit(index)}
                              className="bg-yellow-500 text-white text-xs px-3 py-1 rounded hover:bg-yellow-600"
                            >
                              ✏️ Edit
                            </button>
                            <button
                              onClick={() => handleDelete(index)}
                              className="bg-red-500 text-white text-xs px-3 py-1 rounded hover:bg-red-600"
                            >
                              🗑️ Delete
                            </button>
                          </>
                        )}

                        {/* Review Form for consumers */}
                        {loggedIn && loggedIn.userType === 'consumer' && (
                          <ReviewForm farmerName={farmer.name} />
                        )}

                        {/* Order Form (Consumers Only) */}
                        {loggedIn && loggedIn.userType === 'consumer' && (
                          <OrderForm farmer={farmer} />
                        )}

                        {/* Reviews Display */}
                        <ReviewList farmerName={farmer.name} />
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Marketplace;
