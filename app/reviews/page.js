"use client"

import { useState, useEffect } from "react";
import axios from "axios";
import Rating from "../components/Rating";
import Link from "next/link";

export default function Reviews() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [loading, setLoading] = useState(false);
  const [totalReviews, setTotalReviews] = useState(0);

  const fetchReviews = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${apiUrl}/auth/reviews`, {
        params: { page, limit },
      });
      setReviews(res.data.reviews);
      setTotalReviews(res.data.total || 0);
    } catch (error) {
      console.error("Error fetching reviews: ", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch reviews whenever page changes
  useEffect(() => {
    fetchReviews();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const totalPages = Math.ceil(totalReviews / limit);

  return (
    <div className="bg-stone-600 w-full h-screen flex flex-col items-center justify-center">
      <div className="bg-slate-800 flex gap-4 overflow-x-auto w-full h-2/4 items-center p-5">
        {loading ? (
          <div>Loading...</div>
        ) : reviews.length > 0 ? (
          reviews.map((item) => (
            <div
              key={item._id}
              className="border shrink-0 w-[200px] h-[200px] rounded-md overflow-hidden hover:scale-[1.05] duration-300 transition-all flex flex-col"
            >
              <header className="w-full bg-slate-900 p-2 flex justify-center">
                <div>{item.name}</div>
              </header>
              <main className="flex flex-col gap-4 justify-center p-4 flex-1">
                <div>{item.review}</div>
              </main>
              <footer className="flex justify-center bg-slate-700 p-2">
                <Rating rating={item.rating} maxRating={5} />
              </footer>
            </div>
          ))
        ) : (
          <div>No reviews available</div>
        )}
      </div>
      <div className="flex justify-center items-center gap-4 mt-4">
        {/* Pagination Controls */}
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="bg-gray-700 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-white">
          Page {page} {totalPages > 0 && `of ${totalPages}`}
        </span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page === totalPages}
          className="bg-gray-700 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
      <div className="mt-4 text-white">
        Want to leave a review?{" "}
        <Link href="/reviews/submit" className="underline">
          Click here
        </Link>
      </div>
    </div>
  );
}
