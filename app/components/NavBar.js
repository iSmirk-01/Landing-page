"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "../context/UserProvider";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // login the user on mount if there is a token in localstorage
  const { setUserData, userData } = useUser();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      const username = localStorage.getItem("username");
      if (token) {
        setUserData((prev) => ({
          ...prev,
          isLoggedIn: true,
          username: username
        }));
      }
    }
  }, [setUserData]);

  const handleLogout = () => {
    setUserData((prev) => ({
      ...prev,
      username: "",
      isLoggedIn: false,
      id: "",
    }));
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo and "Logged in as user" next to it */}
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              M2 HQ
            </span>
          </Link>
          {userData.isLoggedIn && (
            <span className="text-base text-gray-200 pl-5 ">
              Welcome, {userData.username}
            </span>
          )}
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)} // Toggle state
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700"
          aria-controls="navbar-menu"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Menu Links */}
        <div
          id="navbar-menu"
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:items-center`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className={`block py-2 px-3 rounded hover:bg-gray-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 focus:text-blue-700 ${
                  pathname === "/"
                    ? "text-blue-400 underline decoration-solid underline-offset-4 decoration-sky-500"
                    : " text-white"
                }`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
                className={`block py-2 px-3 rounded hover:bg-gray-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 focus:text-blue-700 ${
                  pathname === "/contacts"
                    ? "text-blue-400 underline decoration-solid underline-offset-4 decoration-sky-500"
                    : " text-white"
                }`}
              >
                Contacts
              </Link>
            </li>
            <li>
              <Link
                href="/reviews"
                className={`block py-2 px-3 rounded hover:bg-gray-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 focus:text-blue-700 ${
                  pathname === "/reviews"
                    ? "text-blue-400 underline decoration-solid underline-offset-4 decoration-sky-500"
                    : " text-white"
                }`}
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                href="/mission"
                className={`block py-2 px-3 rounded hover:bg-gray-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 focus:text-blue-700 ${
                  pathname === "/mission"
                    ? "text-blue-400 underline decoration-solid underline-offset-4 decoration-sky-500"
                    : " text-white"
                }`}
              >
                Mission Statement
              </Link>
            </li>
            {userData.isLoggedIn ? (
              <li
                className={`block py-2 px-3 rounded hover:bg-gray-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 text-red-500 cursor-pointer `}
                onClick={handleLogout}
              >
                Logout
              </li>
            ) : (
              <li>
                <Link
                  href="/login"
                  className={`block py-2 px-3 rounded hover:bg-gray-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 focus:text-blue-700 ${
                    pathname === "/mission"
                      ? "text-blue-400 underline decoration-solid underline-offset-4 decoration-sky-500"
                      : " text-white"
                  }`}
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
