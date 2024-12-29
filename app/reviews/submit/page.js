"use client"
import { FaStar } from "react-icons/fa";
import { useReducer, useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineRateReview } from "react-icons/md";
import { useUser } from "@/app/context/UserProvider";
import Link from "next/link";

function AddReview() {
  const {userData} = useUser()
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
    <div className="h-screen w-full flex items-center justify-center text-black">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-5 border w-2/4 h-2/4 items-center justify-center bg-white/20 rounded scale-110"
      >
        {!userData.isLoggedIn && (
          <div className="text-Yellow font-bold">
            We value your feedback! Please {" "}
            <Link className="underline text-blue-500" href="/login">
              login
            </Link>
            {" "}
            to leave a review.
          </div>
        )}
        <div className="flex items-center gap-3 border border-gray-500 rounded px-3 py-2 hover:scale-[1.05] transition-all duration-300">
          <IoPersonSharp className="text-Yellow" />
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
            className="w-full bg-transparent text-white outline-none placeholder-gray-400"
          />
        </div>
        <div className="flex items-center gap-3 border border-gray-500 rounded px-3 py-2 hover:scale-[1.05] transition-all duration-300">
          <MdOutlineRateReview className="text-Yellow" />
          <input
            type="text"
            placeholder="Review"
            required
            onChange={(e) =>
              dispatch({
                type: "update_input",
                key: "review",
                value: e.target.value,
              })
            }
            className="w-full bg-transparent text-white outline-none placeholder-gray-400"
          />
        </div>
        <div className="flex gap-1 items-center">
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
          className="bg-blue-500 text-white py-2 px-4 rounded mt-6
          hover:bg-Yellow active:bg-blue-200 disabled:bg-gray-400 hover:text-black disabled:hover:text-white"
          disabled={!state.username || !state.review || !userData.isLoggedIn}
        >
          Submit
        </button>
        {status && <p className="text-white mt-4">{status}</p>}
      </form>
    </div>
  );
}

export default AddReview;
