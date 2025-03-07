"use client";
import { IoPersonSharp } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useUser } from "@/app/context/UserProvider";
import { useRouter } from "next/navigation";

function Register() {
  const router = useRouter()
  const [formData, setFromData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { setUserData } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const res = await axios.post(`${apiUrl}/auth/register`, {
        username: formData.username,
        password: formData.password,
      });

      // Check for success response
      if (res.status === 201) {
        localStorage.setItem("token", res.data.token);
        setMessage(res.data.message);
        router.push("/")
        setUserData((prev) => ({
          ...prev,
          username: res.data.username,
          isLoggedIn: true,
          id: res.data._id
        }));
        formData((prev) => ({
          ...prev, 
          username: "",
          password: "",
          confirmPassword: ""
        }))
      }
    } catch (err) {
      // Check for duplicate username error
      if (err.response?.status === 409) {
        setError("Username already taken. Please choose a different one.");
      } else {
        setError("An error occurred during registration.");
      }
      // Clear any stored user data on error
      localStorage.removeItem("token");
    }
  };

  const { password, confirmPassword } = formData;

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-12 drop-shadow-md gap-6 text-lg border bg-white/20"
      >
        <h1 className="self-center font-bold text-2xl text-Yellow">Register</h1>

        {/* Username */}
        <div
          className="flex items-center px-2 py-3 gap-3 rounded border border-gray-500 hover:scale-[1.05] transition-all duration-300"
          onClick={() => document.getElementById("username-input").focus()}
        >
          <IoPersonSharp className="text-white" />
          <input
            id="username-input"
            placeholder="Username"
            name="username"
            onChange={handleChange}
            value={formData.username}
            className="bg-transparent outline-none w-full text-white placeholder:text-gray-400"
          />
        </div>

        {/* Password */}
        <div
          className="flex items-center px-2 py-3 gap-3 rounded border border-gray-500 hover:scale-[1.05] transition-all duration-300"
          onClick={() => document.getElementById("password-input").focus()}
        >
          <RiLockPasswordFill className="text-white" />
          <input
            id="password-input"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="bg-transparent outline-none w-full text-white placeholder:text-gray-400"
          />
        </div>

        {/* Confirm Password */}
        <div
          className="flex items-center px-2 py-3 gap-3 rounded border border-gray-500 hover:scale-[1.05] transition-all duration-300"
          onClick={() =>
            document.getElementById("confirm-password-input").focus()
          }
        >
          <RiLockPasswordFill className="text-white" />
          <input
            id="confirm-password-input"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="bg-transparent outline-none w-full text-white placeholder:text-gray-400"
          />
        </div>

        {/* Error/Success Message */}
        {message && <p className="text-green-500 self-center text-sm">{message}</p>}
        {error && <p className="text-red-500 self-center text-sm">{error}</p>}

        <button
          disabled={
            !password || !confirmPassword || password !== confirmPassword
          }
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-Yellow hover:text-black transition active:bg-sky-900 disabled:bg-blue-500 disabled:text-white"
        >
          Register
        </button>

        <p className="text-base text-white">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold underline active:text-blue-400 text-Yellow"
          >
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
