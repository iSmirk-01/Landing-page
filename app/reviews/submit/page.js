"use client"
import axios from "axios";

function AddReview() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const username = localStorage.getItem("username")

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await axios.post(`${apiUrl}/auth/reviews`, {
            username: username,
            review: "",
            rating: ""
        })
    }

    const handleChange = (e) => {
        const {value, name} = e.target
        
    }

  return (
    <div className="h-screen w-full bg-slate-800 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-slate-700 p-4">
        <label className="flex gap-2">
          Review:
          <input type="text" placeholder="Nice job!" />
        </label>
        <input type="number" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddReview
