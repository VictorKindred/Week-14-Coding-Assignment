import React, { useState } from "react";

function ReviewForm({ addReview, movieId }) {
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(3);  // Default rating, adjust as needed

    const handleSubmit = (event) => {
        event.preventDefault();
        // Assuming addReview is a function passed down that handles the addition of a new review to the state
        addReview(movieId, {
            reviewer: "Anonymous", // Enhance by allowing users to input their name
            comment: reviewText,
            rating: rating,
            date: new Date().toISOString().split('T')[0] // Formatting date to YYYY-MM-DD
        });
        // Reset form fields
        setReviewText('');
        setRating(3);
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Write your review here..."
                required
            />
            <select value={rating} onChange={(e) => setRating(parseInt(e.target.value, 10))}>
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


export default ReviewForm