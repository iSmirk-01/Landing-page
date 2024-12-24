"use client"
import axios from "axios";
import { useEffect, useState } from "react";

function Reviews() {
  const [reviews, setReviews] = useState([])
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(`${apiUrl}/auth/reviews`);
        setReviews(res.data.reviews)
        console.log(res.data.reviews)
      } catch (error) {
        console.error("error fetching reviews: ", error)
      }
    }
    fetchReviews()
  },[apiUrl])

  return (
    <div className="bg-stone-600 w-full h-screen flex items-center justify-center">
      <div className="bg-slate-800 flex gap-4 overflow-x-auto w-full h-2/4 items-center p-5">
        {reviews &&
          reviews[0] &&
          reviews.map((item) => (
            <div
              key={item._id}
              className="border shrink-0 w-2/12 h-[200px] rounded-md overflow-hidden hover:scale-[1.05] duration-300 transition-all"
            >
              <header className="w-full bg-slate-900 p-2 flex justify-center">
                <div className="">{item.name}</div>
              </header>
              <main className="flex justify-center p-4">
                <div>{item.review}</div>
              </main>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Reviews
