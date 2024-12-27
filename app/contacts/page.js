"use client";
import { AiOutlineMail } from "react-icons/ai";
import { IoLogoDiscord } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";



function Contacts() {

  return (
    <div className="flex flex-col overflow-x-hidden h-screen gap-4 items-center w-full text-white">
      <div className="flex gap-3 flex-col bg-slate-800 p-5 rounded-lg w-3/4 justify-center items-center border border-sky-300 m-4">
        <h1 className="font-semibold self-center text-2xl shadow-md">
          Contacts
        </h1>
        <div className="flex items-center bg-gray-500 rounded gap-2 p-3 border cursor-pointer w-full justify-center">
          <span className="text-red-500">
            <AiOutlineMail className="scale-[1.3]" />
          </span>
          Mtwotech.business@gmail.com
        </div>
        <div className="flex items-center bg-gray-500 rounded gap-2 p-3 border cursor-pointer w-full justify-center">
          <span className="text-blue-400">
            <IoLogoDiscord className="scale-[1.3]" />
          </span>
          Discord exmaple link
        </div>
        <div className="flex items-center border p-3 rounded bg-gray-500 cursor-pointer w-full gap-2 justify-center">
          <span className="">
            <FaInstagramSquare className="scale-[1.1]"/>
          </span>
          <a
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 font-bold"
            href="https://www.instagram.com/cayydz/profilecard/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
        <div className="font-bold">
          <span className="font-semibold text-cyan-300">Mobile: </span>
          808-494-1499
        </div>
      </div>
    </div>
  );
}

export default Contacts;
