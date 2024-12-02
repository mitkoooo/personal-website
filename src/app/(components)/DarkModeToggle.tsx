"use client";

import { useEffect, useState } from "react";
import {
  handleToggle,
  systemTheme,
  theme,
  turnOnTheme,
} from "../theme-determiner";

const DarkModeToggle = (): React.ReactNode => {
  const [darkModeState, setDarkModeState] = useState(theme);
  const [isHovered, setIsHovered] = useState(false);

  const [isManuallyActivated, setIsManuallyActivated] = useState(
    localStorage.getItem("theme-data") !== null
  );

  useEffect(() => {
    turnOnTheme(darkModeState);
  }, [darkModeState]);

  const handleClick = () => {
    // Sync application state with the current theme
    if (localStorage.getItem("theme-data") !== systemTheme)
      setDarkModeState((state) => (state === "dark" ? "light" : "dark"));

    // Use the toggle function to determine the mode
    handleToggle(darkModeState);

    setIsManuallyActivated(localStorage.getItem("theme-data") !== null);
  };

  const handleHover = () => {
    setIsHovered((state) => !state);
  };

  const ToggleCSS = `${
    isManuallyActivated ? "bg-formal-grey dark:bg-darkmode-active" : ""
  } rounded-sm p-2.5 dark:p-[8px] cursor-pointer`;

  return (
    <>
      <span className="hidden md:block text-xs">
        {isHovered && (isManuallyActivated ? darkModeState : "system")}
      </span>
      <span
        className={`${ToggleCSS}`}
        onClick={handleClick}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        {darkModeState === "dark" ? MightySunIcon : DarkMoonIcon}
      </span>
    </>
  );
};

export default DarkModeToggle;

const DarkMoonIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
    <path
      fill="#000"
      d="M12.476 10.731c-4.372 0-7.117-2.632-7.117-6.85 0-1.181.237-2.261.542-2.801.102-.236.136-.338.136-.506A.592.592 0 0 0 5.46 0c-.068 0-.237 0-.44.101A8.294 8.294 0 0 0 1.37 3.15 8.243 8.243 0 0 0 .005 7.694a8 8 0 0 0 2.357 5.954 8.094 8.094 0 0 0 5.979 2.348c3.457 0 6.236-1.79 7.557-4.759l.102-.472c0-.338-.305-.54-.542-.54a1.02 1.02 0 0 0-.407.067c-.678.27-1.627.439-2.575.439ZM1.259 7.661c0-2.464 1.287-4.826 3.355-6.075-.272.675-.407 1.519-.407 2.43 0 4.927 3.05 7.862 8.1 7.862.813 0 1.524-.067 2.168-.337a7.038 7.038 0 0 1-2.624 2.415 7.073 7.073 0 0 1-3.476.825c-4.1-.034-7.116-3.071-7.116-7.12Z"
    />
  </svg>
);

const MightySunIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 18 18"
  >
    <path
      stroke="#E5E7EB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity=".85"
      d="M9 .75v1.5m0 13.5v1.5M3.165 3.165 4.23 4.23m9.54 9.54 1.065 1.065M.75 9h1.5m13.5 0h1.5M3.165 14.835 4.23 13.77m9.54-9.54 1.065-1.065M12.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
    />
  </svg>
);
