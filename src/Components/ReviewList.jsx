import React, { useEffect, useState } from "react";

const ReviewList = ({ farmerName }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const allReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    const filtered = allReviews.filter((r) => r.farmer === farmerName);
    setReviews(filtered);
  }, [farmerName]);

  if (reviews.length === 0) return null;

  return (
    <div className="mt-4">
      <h4 className="text-sm font-semibold mb-2">Reviews:</h4>
      {reviews.map((r, i) => (
        <div key={i} className="bg-gray-50 p-2 rounded mb-2 text-sm">
          <div className="flex justify-between">
            <span className="font-medium">{r.reviewer}</span>
            <span className="text-yellow-600">⭐ {r.rating}</span>
          </div>
          <p className="text-gray-700">{r.comment}</p>
          <p className="text-xs text-gray-400 mt-1">{r.date}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
