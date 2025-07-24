import React, { useEffect, useState } from 'react';

const Marketplace = () => {
  const [farmers, setFarmers] = useState([]);
  const loggedIn = JSON.parse(localStorage.getItem('loggedInUser'));

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('registeredFarmers')) || [];
    setFarmers(stored);
  }, []);

  const handleDelete = (indexToDelete) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    const updated = farmers.filter((_, index) => index !== indexToDelete);
    localStorage.setItem('registeredFarmers', JSON.stringify(updated));
    setFarmers(updated);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Explore Verified Organic Farmers</h2>
      {farmers.length === 0 ? (
        <p>No farmers registered yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {farmers.map((farmer, index) => {
            const isOwner = loggedIn && farmer.name === loggedIn.name && loggedIn.userType === "farmer";

            return (
              <div key={index} className="bg-white border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                {farmer.photo && <img src={farmer.photo} alt={farmer.name} className="w-full h-48 object-cover" />}
                <div className="p-4">
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
                      <button
                        onClick={() => handleDelete(index)}
                        className="mt-2 bg-red-500 text-white text-xs px-3 py-1 rounded hover:bg-red-600"
                      >
                        🗑️ Delete Product
                      </button>
                    )}
                  </div>
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
