"use client";
import { AiOutlineMail } from "react-icons/ai";
import { IoLogoDiscord } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import Image from "next/image";



function Contacts() {

  return (
    <div className="flex flex-col overflow-x-hidden h-screen gap-4 items-center w-full text-white">
      <div className="flex gap-4 flex-col bg-white/20 p-5 rounded-lg w-3/4 justify-center items-center border border-sky-300/60 m-4">
        <h1 className="font-semibold self-center text-2xl shadow-md mb-4 text-Yellow">
          Contacts
        </h1>
        <div className="flex items-center bg-red-700/40 rounded gap-2 p-3 border cursor-pointer w-full justify-center">
          <span className="text-red-500">
            <AiOutlineMail className="scale-[1.3]" />
          </span>
          Mtwotech.business@gmail.com
        </div>
        <div className="flex items-center bg-blue-600/20 rounded gap-2 p-3 border cursor-pointer w-full justify-center">
          <span className="text-blue-400">
            <IoLogoDiscord className="scale-[1.3]" />
          </span>
          Discord example link
        </div>
        <div className="flex items-center border p-3 rounded bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-orange-500/30 cursor-pointer w-full h-[49.33px] gap-[0.1rem] justify-center">
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="w-[30px] h-full"
            >
              <defs>
                <radialGradient
                  id="gradient"
                  cx="19.38"
                  cy="42.035"
                  r="44.899"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#fdf497" />
                  <stop offset="35%" stopColor="#fc465b" />
                  <stop offset="70%" stopColor="#d6249f" />
                  <stop offset="100%" stopColor="#285aeb" />
                </radialGradient>
              </defs>
              <path
                fill="url(#gradient)"
                d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20C42.014,38.383,38.417,41.986,34.017,41.99z"
              ></path>
              <path
                fill="#fff"
                d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
              ></path>
              <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
              <path
                fill="#fff"
                d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
              ></path>
            </svg>
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
