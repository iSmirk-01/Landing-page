"use client";
import { IoPersonSharp } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import Link from "next/link";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-screen w-full bg-slate-900 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="h-fit w-fit bg-gray-700 flex flex-col gap-6 p-12 text-lg text-white drop-shadow-md"
      >
        <h1 className="self-center text-2xl font-bold">Login</h1>
        <div className="flex flex-col gap-5">
          {/* Username Field */}
          <div className="flex items-center gap-3 border border-gray-500 rounded px-3 py-2 bg-gray-700 hover:scale-[1.05] transition-all duration-300">
            <IoPersonSharp className="text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Username"
              className="w-full bg-transparent text-white outline-none placeholder-gray-400"
            />
          </div>

          {/* Password Field */}
          <div className="flex items-center gap-3 border border-gray-500 rounded px-3 py-2 bg-gray-700 hover:scale-[1.05] transition-all duration-300">
            <RiLockPasswordFill className="text-gray-400 text-xl" />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-transparent text-white outline-none placeholder-gray-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-slate-600 text-white py-2 rounded hover:bg-slate-700 transition active:bg-sky-900"
          >
            Login
          </button>
          <p className="text-base">Dont have an account? <Link href="/login/register" className="font-semibold underline active:text-blue-400">Register here</Link></p>
        </div>
      </form>
    </div>
  );
}

export default Login;
