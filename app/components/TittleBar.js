"use client"

import { useTheme } from "../context/ThemeProvider";
import ThemeToggle from "./ThemeToggleButton";

const TittleBar = ({ header }) => {
    const {theme} = useTheme()

    return (
      <div className={`flex p-5 w-screen justify-between ${theme ==='dark'? "text-white bg-DarkThemeMainBlue" : "text-black bg-LightThemeMainBlue"}`}>
        <h1 className="text-4xl font-semibold">{header}</h1>
        <ThemeToggle />
      </div>
    );
}

export default TittleBar