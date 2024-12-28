"use client"

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "../context/UserProvider";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { userData, setUserData } = useUser()

  const handleLogout = () => {
    setUserData((prev) => ({
      ...prev,
      username: "",
      isLoggedIn: false,
      id: "",
    }));
    localStorage.removeItem("token");
  };

  return (
    <nav className="w-full bg-Black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo and "Logged in as user" next to it */}
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center">
            <span className="self-center text-2xl font-bold text-Yellow">
              M2 HQ
            </span>
          </Link>
          {userData.isLoggedIn && (
            <span className="text-Charcoal pl-5 font-bold">
              Welcome, {userData.username || "User"}
            </span>
          )}
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)} // Toggle state
          className="inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg md:hidden focus:outline-none text-Yellow hover:bg-Yellow hover:text-DeepBlue duration-[300ms] transition-all"
          aria-controls="navbar-menu"
          aria-expanded={menuOpen}
        >
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
          <ul className="flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-Black text-Yellow md:text-Charcoal md:font-semibold">
            <li>
              <Link
                href="/"
                className={`block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:p-0 hover:bg-Yellow hover:bg-opacity-50 md:hover:text-MutedTeal md:hover:bg-Charcoal  ${
                  pathname === "/"
                    ? "font-semibold text-MutedTeal underline decoration-solid underline-offset-4 decoration-MutedTeal"
                    : ""
                }`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
                className={`block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:p-0 hover:bg-Yellow hover:bg-opacity-50 md:hover:text-MutedTeal md:hover:bg-Charcoal  ${
                  pathname === "/contacts"
                    ? "font-semibold text-MutedTeal underline decoration-solid underline-offset-4 decoration-MutedTeal"
                    : ""
                }`}
              >
                Contacts
              </Link>
            </li>
            <li>
              <Link
                href="/reviews"
                className={`block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:p-0 hover:bg-Yellow hover:bg-opacity-50 md:hover:text-MutedTeal md:hover:bg-Charcoal  ${
                  pathname === "/reviews"
                    ? "font-semibold text-MutedTeal underline decoration-solid underline-offset-4 decoration-MutedTeal"
                    : ""
                }`}
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                href="/mission"
                className={`block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:p-0 hover:bg-Yellow hover:bg-opacity-50 md:hover:text-MutedTeal md:hover:bg-Charcoal  ${
                  pathname === "/mission"
                    ? "font-semibold text-MutedTeal underline decoration-solid underline-offset-4 decoration-MutedTeal"
                    : ""
                }`}
              >
                Mission Statement
              </Link>
            </li>
            {userData.isLoggedIn ? (
              <li
                className={`block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:p-0 text-red-500 hover:md:bg-Charcoal cursor-pointer hover:bg-Yellow hover:bg-opacity-50`}
                onClick={handleLogout}
              >
                Logout
              </li>
            ) : (
              <li>
                <Link
                  href="/login"
                  className={`block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:p-0 hover:bg-Yellow hover:bg-opacity-50 md:hover:text-MutedTeal md:hover:bg-Charcoal ${
                    pathname === "/login"
                      ? "font-semibold text-MutedTeal underline decoration-solid underline-offset-4 decoration-MutedTeal"
                      : " "
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