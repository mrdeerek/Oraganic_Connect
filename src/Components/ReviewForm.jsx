import React, { useState } from "react";

const ReviewForm = ({ farmerName }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    const newReview = {
      farmer: farmerName,
      reviewer: user.name,
      rating,
      comment,
      date: new Date().toLocaleDateString(),
    };

    reviews.push(newReview);
    localStorage.setItem("reviews", JSON.stringify(reviews));
    setComment("");
    setRating(5);
    alert("Review submitted!");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-2">
      <div className="flex gap-2 items-center">
        <label className="text-sm font-medium">⭐ Rating:</label>
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="border p-1 rounded"
        >
          {[5, 4, 3, 2, 1].map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Leave a comment..."
        className="w-full border p-2 rounded text-sm"
        required
      ></textarea>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 text-sm"
      >
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;
