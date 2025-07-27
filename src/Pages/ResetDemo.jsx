import React from 'react';

const ResetDemo = () => {
  const handleReset = () => {
    const confirm = window.confirm("Are you sure you want to reset all demo data?");
    if (!confirm) return;

    localStorage.removeItem('registeredFarmers');
    localStorage.removeItem('users');
    localStorage.removeItem('loggedInUser');
    alert("Demo data cleared!");
    window.location.href = "/";
  };

  return (
    <div className="p-6 max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Reset Demo Data</h2>
      <p className="mb-4 text-sm text-gray-600">This will clear all registered users, farmers, and login session.</p>
      <button
        onClick={handleReset}
        className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
      >
        Reset Now
      </button>
    </div>
  );
};

export default ResetDemo;
