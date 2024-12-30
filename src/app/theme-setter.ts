"use client";

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
