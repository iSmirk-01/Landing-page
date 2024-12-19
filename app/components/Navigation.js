"use client"
import { useTheme } from '../context/ThemeProvider'
import DivLink from './DivLink';

function Navigation({ name }) {
  const { theme } = useTheme();
  //flex justify-evenly text-2xl p-4 bg-red-400 w-3/4 rounded-md
  return (
    <div
      className={`${
        theme === "dark"
          ? " bg-DarkThemeMainBlue text-white"
          : " bg-LightThemeMainBlue text-black"
      } flex justify-evenly text-lg p-4 w-screen rounded-md gap-1`}
    >
      <DivLink link="contacts" name="Contacts" />
      <DivLink link="mission-statement" name="Mission Statement" />
      <DivLink link="reviews" name="Reviews" />
    </div>
  );
}

export default Navigation;
