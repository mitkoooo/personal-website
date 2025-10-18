import { useCallback, useEffect, useState } from "react";
import applyTheme from "../utils/applyTheme";
import { Theme } from "../types/theme";

function useTheme() {
  const [systemTheme, setSystemTheme] = useState<Theme>(null);
  const [theme, setTheme] = useState<Theme>(null);
  const [isManuallyActivated, setIsManuallyActivated] = useState(false);

  const onStorageChange = useCallback(() => {
    const newTheme = applyTheme(systemTheme);
    setTheme(newTheme);
    const isSystemTheme = localStorage.getItem("theme-data") === "system";
    setIsManuallyActivated(!isSystemTheme);
  }, [systemTheme]);

  useEffect(() => {
    if (localStorage.getItem("theme-data") === null)
      localStorage.setItem("theme-data", "system");

    const systemTheme = window?.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    setSystemTheme(systemTheme);

    setTheme(applyTheme(systemTheme));

    const isSystemTheme = localStorage.getItem("theme-data") === "system";
    setIsManuallyActivated(!isSystemTheme);
  }, []);

  useEffect(() => {
    window.addEventListener("storage", onStorageChange);
    return () => window.removeEventListener("storage", onStorageChange);
  }, [onStorageChange]);

  const updateTheme = () => {
    if (localStorage.getItem("theme-data") === systemTheme)
      localStorage.setItem("theme-data", "system");
    else {
      const nextTheme = theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme-data", nextTheme);

      setTheme(applyTheme(systemTheme));
    }
    const isSystemTheme = localStorage.getItem("theme-data") === "system";
    setIsManuallyActivated(!isSystemTheme);
  };

  return {
    theme,
    updateTheme,
    isManuallyActivated,
  };
}

export default useTheme;
