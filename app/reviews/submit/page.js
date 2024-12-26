"use client"
import { FaStar } from "react-icons/fa";
import { useReducer, useState } from "react";
import axios from "axios";

function AddReview() {
  const [status, setStatus] = useState("");
  const initState = {
    username: "",
    review: "",
    rating: 1, // Default rating
  };
  const [state, dispatch] = useReducer(Reducer, initState);

  function Reducer(state, action) {
    switch (action.type) {
      case "update_input":
        return {
          ...state,
          [action.key]: action.value,
        };
      case "set_rating":
        return {
          ...state,
          rating: action.value, // Update the rating
        };
      default:
        return state;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, review, rating } = state;


    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setStatus("You must be logged in to submit a review.");
        return;
      }

      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      await axios.post(
        `${apiUrl}/auth/reviews`,
        {
          name: username,
          review,
          rating: Number(rating),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setStatus("Review submitted successfully!");
    } catch (error) {
      setStatus("Failed to submit review. Please try again.");
    }
  };

  return (
    <div className="h-screen w-full bg-slate-800 flex items-center justify-center text-black">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-slate-700 p-4"
      >
        <label className="flex gap-2">
          Username:
          <input
            type="text"
            placeholder="Your Name"
            required
            onChange={(e) =>
              dispatch({
                type: "update_input",
                key: "username",
                value: e.target.value,
              })
            }
          />
        </label>
        <label className="flex gap-2">
          Review:
          <input
            type="text"
            placeholder="Nice job!"
            required
            onChange={(e) =>
              dispatch({
                type: "update_input",
                key: "review",
                value: e.target.value,
              })
            }
          />
        </label>
        <div className="flex gap-1 items-center">
          <span className="text-white">Rating:</span>
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              onClick={() => dispatch({ type: "set_rating", value: star })}
              size={24}
              className={`cursor-pointer ${
                star <= state.rating ? "text-yellow-500" : "text-gray-400"
              }`}
            />
          ))}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
        {status && <p className="text-white mt-4">{status}</p>}
      </form>
    </div>
  );
}

export default AddReview;
