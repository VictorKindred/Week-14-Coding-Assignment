import React from "react";

function ReviewList({ reviews }) {
  return (
    <div>
      {reviews.map((review, index) => (
        <div key={index}>
          <p>
            <strong>{review.reviewer}</strong>: {review.comment}
          </p>
          <p>Rating: {review.rating} Stars</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
