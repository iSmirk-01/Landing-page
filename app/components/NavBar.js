"use client"

import { useTheme } from "../context/ThemeProvider";
import ThemeToggle from "./ThemeToggleButton";

const NavNar = ({ header }) => {
    const {theme} = useTheme()

    return (
      <div className={`flex p-5 w-screen justify-between ${theme ==='dark'? "text-white bg-slate-700" : "text-black bg-customLime"}`}>
        <h1 className="text-4xl font-semibold">{header}</h1>
        <ThemeToggle />
      </div>
    );
}

export default NavNar