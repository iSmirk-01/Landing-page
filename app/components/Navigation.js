"use client"
import { useTheme } from '../context/ThemeProvider'
import Link from 'next/link';

function Navigation({ name1, name2, name3, link1, link2, link3 }) {
  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === "dark"
          ? " bg-DarkThemeMainBlue text-white"
          : " bg-LightThemeMainBlue text-black"
      } flex justify-evenly items-center text-lg p-4 w-screen rounded-md gap-1`}
    >
      <div className="cursor-pointer">
        <Link href={`/${link1}`}>{name1}</Link>
      </div>
      <div className="cursor-pointer">
        <Link href={`/${link2}`}>{name2}</Link>
      </div>
      <div className="cursor-pointer">
        <Link href={`/${link3}`}>{name3}</Link>
      </div>
    </div>
  );
}

export default Navigation;
