"use client"
import { IoPersonSharp } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import Link from "next/link";

function Register() {
    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <div className="h-screen w-full bg-slate-900 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-12 drop-shadow-md gap-6 text-lg bg-gray-700"
      >
        <h1 className="self-center font-bold text-2xl">Register</h1>
        {/* {username} */}
        <div className="flex items-center px-2 py-3 gap-3 rounded border border-gray-500 hover:scale-[1.05] transition-all duration-300">
          <IoPersonSharp />
          <input
            placeholder="Username"
            name=""
            value={""}
            className="bg-transparent outline-none w-full text-white placeholder:text-gray-400"
          />
        </div>
        {/* {password} */}
        <div className="flex items-center px-2 py-3 gap-3 rounded border border-gray-500 hover:scale-[1.05] transition-all duration-300">
          <RiLockPasswordFill />
          <input
            placeholder="Password"
            name=""
            value={""}
            className="bg-transparent outline-none w-full text-white placeholder:text-gray-400"
          />
        </div>
        {/* {confirm password} */}
        <div className="flex items-center px-2 py-3 gap-3 rounded border border-gray-500 hover:scale-[1.05] transition-all duration-300">
          <RiLockPasswordFill />
          <input
            placeholder="Confirm Password"
            name=""
            value={""}
            className="bg-transparent outline-none w-full text-white placeholder:text-gray-400"
          />
        </div>
        <button className="w-full bg-slate-600 text-white py-2 rounded hover:bg-slate-700 transition active:bg-sky-900">
          Register
        </button>
        <p className="text-base">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold underline active:text-blue-400">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
