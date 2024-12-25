// app/reviews/page.js
import axios from "axios";
import Rating from "../components/Rating";
import Link from "next/link";

export default async function Reviews() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  let reviews = [];
  try {
    const res = await axios.get(`${apiUrl}/auth/reviews`);
    reviews = res.data.reviews;
  } catch (error) {
    console.error("Error fetching reviews: ", error);
  }

  return (
    <div className="bg-stone-600 w-full h-screen flex flex-col items-center justify-center">
      <div className="bg-slate-800 flex gap-4 overflow-x-auto w-full h-2/4 items-center p-5">
        {reviews.length > 0 ? (
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
      <div>
        Want to leave a review?{" "}
        <Link href="/reviews/submit">
          Click here
        </Link>
      </div>
    </div>
  );
}
