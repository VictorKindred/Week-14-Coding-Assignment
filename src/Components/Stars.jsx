import React from "react";
import "./Stars.css";
const Stars = ({ rating }) => {
  const starElements = [];
  for (let i = 0; i < rating; i++) {
    starElements.push(
      <span key={i} className="star">
        &#9733;
      </span>
    );
  }
  for (let i = rating; i < 5; i++) {
    starElements.push(
      <span key={i} className="star">
        &#9734;
      </span>
    ); // Unfilled star
  }

  return (
    <div>
      <p>Stars: {starElements}</p>
    </div>
  );
};
export default Stars;
