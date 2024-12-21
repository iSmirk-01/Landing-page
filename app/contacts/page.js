"use client";
import { useTheme } from "../context/ThemeProvider";

function Contacts() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col overflow-x-hidden h-screen gap-4 items-center w-full">
        <div className="flex gap-2 flex-col bg-slate-800 p-5 rounded-lg w-fit  h-auto justify-center sm:text-sm md:text-base lg:text-lg whitespace-nowrap  border border-sky-300 m-4">
          <h1 className="font-semibold self-center text-2xl shadow-md">Contacts</h1>
          <br />
          <p className="">
            <span className="text-red-500 font-bold">Email: </span>
            Mtwotech.business@gmail.com
          </p>
          <hr></hr>
          <p>
            Direct message via{" "}
            <a
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 font-semibold"
              href="https://www.instagram.com/cayydz/profilecard/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </p>
          <hr></hr>
          <p className="font-bold">
            <span className="font-semibold text-cyan-300">Mobile: </span>
            808-494-1499
          </p>
        </div>
    </div>
  );
}

export default Contacts;
