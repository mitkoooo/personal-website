"use client";

import { useState } from "react";
import useTheme from "../hooks/useTheme";
import MightySunIcon from "../icons/MightySunIcon";
import DarkMoonIcon from "../icons/DarkMoonIcon";

const ThemeToggle = (): React.ReactNode => {
  const { theme, updateTheme, isManuallyActivated } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    // Sync application state with the current theme
    updateTheme();
  };

  const ToggleCSS = `${
    isManuallyActivated ? "bg-formal-grey dark:bg-darkmode-active" : ""
  } rounded-sm p-2.5 dark:p-[8px] cursor-pointer select-none`;

  return (
    <div className="flex flex-row items-center gap-7 text-center">
      <span className="hidden text-xs md:block md:text-sm">
        {isHovered && (isManuallyActivated ? theme : "system")}
      </span>
      <button
        className={`${ToggleCSS}`}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {theme === "dark" ? <MightySunIcon /> : <DarkMoonIcon />}
      </button>
    </div>
  );
};

export default ThemeToggle;
