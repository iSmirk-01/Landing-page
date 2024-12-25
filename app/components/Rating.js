import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

function Rating({ rating, maxRating = 5 }) {
  return (
    <div className="flex space-x-1">
      {Array.from({ length: maxRating }, (_, index) => (
        <span key={index}>
          {index < rating ? (
            <FaStar className="text-yellow-500" />
          ) : (
            <FaRegStar className="text-gray-400" />
          )}
        </span>
      ))}
    </div>
  );
}

export default Rating;
