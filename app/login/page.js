"use client";
import { IoPersonSharp } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "../context/UserProvider";

function Login() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [message, setMessage] = useState("")
  const [error, setError] = useState(null)
  const {setUserData} = useUser()
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev, [name]: value
    }))
  }
  
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();

  try {
    const res = await axios.post(`${apiUrl}/auth/login`, {
      username: formData.username,
      password: formData.password,
    });

    if (res.status === 200) {
      localStorage.setItem("token", res.data.token)
      setMessage("Login successful")
      setUserData((prev) => ({
        ...prev, isLoggedIn: true,
        username: res.data.username,
        id: res.data._id
      }))
      router.push("/")
      setFormData((prev) => ({
        ...prev, username: "", password: "",
      }))
    }

  } catch (err) {
    if (err.response.data.error) {
      const errorMessage = err.response.data.error;
      setError(errorMessage);
    } else {
      setError("An unexpected error occurred");
    }
    console.error("Error posting user data:", err);
    localStorage.removeItem("token")
  }
};

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="h-fit w-fit border bg-white/20 flex flex-col gap-6 p-12 text-lg drop-shadow-md"
      >
        <h1 className="self-center text-2xl font-bold text-Yellow">Login</h1>
        <div className="flex flex-col gap-5">
          {/* Username Field */}
          <div
            onClick={() => document.getElementById("name").focus()}
            className="flex items-center gap-3 border border-gray-500 rounded px-3 py-2 hover:scale-[1.05] transition-all duration-300"
          >
            <IoPersonSharp className="text-gray-400 text-xl" />
            <input
              id="name"
              type="text"
              value={formData.username}
              name="username"
              onChange={handleChange}
              placeholder="Username"
              className="w-full bg-transparent text-white outline-none placeholder-gray-400"
            />
          </div>

          {/* Password Field */}
          <div
            onClick={() => document.getElementById("password").focus()}
            className="flex items-center gap-3 border border-gray-500 rounded px-3 py-2 hover:scale-[1.05] transition-all duration-300"
          >
            <RiLockPasswordFill className="text-gray-400 text-xl" />
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              name="password"
              onChange={handleChange}
              className="w-full bg-transparent text-white outline-none placeholder-gray-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!formData.username && !formData.password}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-Yellow hover:text-black transition active:bg-sky-900 disabled:bg-blue-500 disabled:text-white"
          >
            Login
          </button>
          {message && (
            <div className="text-green-400 self-center">{message}</div>
          )}
          {error && <div className="text-red-500 self-center">{error}</div>}
          <p className="text-base text-white">
            Dont have an account?{" "}
            <Link
              href="/login/register"
              className="font-semibold underline active:text-blue-400 text-Yellow hover:text-blue-500"
            >
              Register here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
