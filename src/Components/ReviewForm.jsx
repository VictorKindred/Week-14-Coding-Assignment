import React, { useState } from "react";

function ReviewForm({ addReview, movieId }) {
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(3);
  const [reviewerName, setReviewerName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addReview(movieId, {
      reviewer: reviewerName || "Anonymous", // Use the provided name or default to "Anonymous"
      comment: reviewText,
      rating: rating,
    });
    setReviewText("");
    setRating(3); // Reset rating
    setReviewerName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={reviewerName}
        onChange={(e) => setReviewerName(e.target.value)}
        placeholder="Your Name"
        required
      />
      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="Write your review here..."
        required
      />
      <select
        value={rating}
        onChange={(e) => setRating(parseInt(e.target.value, 10))}
      >
        <option value="1">1 Star</option>
        <option value="2">2 Stars</option>
        <option value="3">3 Stars</option>
        <option value="4">4 Stars</option>
        <option value="5">5 Stars</option>
      </select>
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;
