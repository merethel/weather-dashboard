"use client";

import { useEffect, useState } from "react";
import {
  THEME_STORAGE_KEY,
  type Theme,
} from "@/constants/theme.constants";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
    const initialTheme = savedTheme ?? "light";

    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";

    setTheme(nextTheme);
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "Dark mode" : "Light mode"}
    </button>
  );
}