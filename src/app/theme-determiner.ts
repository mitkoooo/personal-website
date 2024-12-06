"use client";

// PRIORITY : LOCAL_STORAGE <-- SYSTEM <-- USER_TOOGLE

// 1. Check whether the system is set to dark mode

export const systemTheme = window?.matchMedia("(prefers-color-scheme: dark)")
  .matches
  ? "dark"
  : "light";

export const handleToggle = (curTheme: "dark" | "light") => {
  if (localStorage.getItem("theme-data") === systemTheme)
    localStorage.removeItem("theme-data");
  else {
    const newTheme = curTheme === "dark" ? "light" : "dark";
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

export const turnOnTheme = (theme: "dark" | "light") => {
  if (theme === "dark") document.documentElement.classList.add("dark");

  if (theme === "light") document.documentElement.classList.remove("dark");
};

export const theme = getTheme();
