"use client";

// PRIORITY : LOCAL_STORAGE <-- SYSTEM <-- USER_TOOGLE

// 1. Check whether the system is set to dark mode

// export const handleToggle = (currentTheme: Theme, systemTheme: Theme) => {
//   console.log(localStorage.getItem("theme-data"), systemTheme);

//   if (localStorage.getItem("theme-data") === systemTheme)
//     localStorage.removeItem("theme-data");
//   else {
//     const newTheme = currentTheme === "dark" ? "light" : "dark";
//     localStorage.setItem("theme-data", newTheme);
//     turnOnTheme(newTheme);
//   }
// };

export default function themeSetter(systemTheme: string | null) {
  let theme = localStorage.getItem("theme-data");

  if (null === theme) theme = systemTheme;

  const contentColor = theme === "dark" ? "#282828" : "#ffff";
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

  return theme;
}
