"use client"; // Add this at the top to indicate client-side rendering

import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Notice from "../components/Notice";
import TittleBar from "../components/TittleBar";
import { useTheme } from "../context/ThemeProvider";

function Contacts() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col overflow-x-hidden h-screen gap-4 items-center w-screen">
      <TittleBar header="M2 HQ" />
      <Notice />
      <Navigation
        link1=""
        link2="mission"
        link3="reviews"
        name1="Services"
        name2="Mission Statement"
        name3="Reviews"
      />
      <div className=" text-white flex flex-col h-screen justify-center items-center w-screen">
        <div className="flex flex-col bg-slate-800 p-4 rounded-lg w-4/5 h-2/4 justify-center text-2xl border border-sky-300">
          <h1 className="font-semibold">Contacts</h1>
          <br />

          <p>
            <span className="text-red-500">Email: </span>
            Mtwotech.business@gmail.com
          </p>
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
          <p>
            <span className="font-semibold text-cyan-300">Mobile: </span>
            808-494-1499
          </p>
        </div>
      </div>

      <Footer footer="Disclaimer: All custom build services come with a money back guarantee if parts are delivered damaged or defective. Replacements are subject to the supplier the component was purchased from. I 'do not' purchase parts for customers." />
    </div>
  );
}

export default Contacts;
