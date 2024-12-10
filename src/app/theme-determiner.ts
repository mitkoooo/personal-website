"use client";

// PRIORITY : LOCAL_STORAGE <-- SYSTEM <-- USER_TOOGLE

// 1. Check whether the system is set to dark mode

export type themeTypes = "dark" | "light" | null;

export const systemTheme = window?.matchMedia("(prefers-color-scheme: dark)")
  .matches
  ? "dark"
  : "light";

export const handleToggle = (currentTheme: themeTypes) => {
  console.log(localStorage.getItem("theme-data"), systemTheme);

  if (localStorage.getItem("theme-data") === systemTheme)
    localStorage.removeItem("theme-data");
  else {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("theme-data", newTheme);
    turnOnTheme(newTheme);
  }
};

export const getTheme = (): "dark" | "light" => {
  // 2. Check whether there is preferred theme in the local storage
  let theme = localStorage.getItem("theme-data");

  if (null === theme) theme = systemTheme;

  return theme as "dark" | "light";
};

export const turnOnTheme = (theme: themeTypes) => {
  const contentColor = theme === "dark" ? "#282828" : "#ffff";

  // Smooth out theme switch
  document.documentElement.classList.add("pause-transitions");

  // Switch theme
  if (theme === "dark") document.documentElement.classList.add("dark");

  if (theme === "light") document.documentElement.classList.remove("dark");

  // Add information about the content in the header
  document.head
    .querySelector("meta[name=theme-color]")
    ?.setAttribute("content", contentColor);

  // Return the transitions back
  requestAnimationFrame(() => {
    document.documentElement.classList.remove("pause-transitions");
  });
};

export const theme = getTheme();
