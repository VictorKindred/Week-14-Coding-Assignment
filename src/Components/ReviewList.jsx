import React from 'react';

function ReviewList({ reviews }) {
    return (
        <div>
            {reviews.map((review, index) => (
                <div key={index}>
                    <p>{review.reviewer}: {review.comment}</p>
                    <p>Rating: {review.rating} stars</p>
                </div>
            ))}
        </div>
    );
}

export default ReviewList;
