"use client";
import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";
import { useTheme } from "next-themes";

export const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemTheme(mediaQuery.matches ? "dark" : "light");
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const SWITCH_THEME = () => {
    switch (theme) {
      case "system": {
        setTheme(systemTheme === "dark" ? "light" : "dark");
        return;
      }
      case "light": {
        setTheme("dark");
        return;
      }
      case "dark": {
        setTheme("light");
        return;
      }
    }
  };

  return (
    <button
      className="absolute size-6  border border-neutral-200 dark:border-neutral-800 rounded-md top-4 right-4 z-20 flex items-center justify-center"
      onClick={SWITCH_THEME}
    >
      <SunIcon className="absolute inset-0 size-4 shrink-0 dark:scale-0 scale-100 dark:rotate-45 transition duration-400 ease-out m-auto text-neutral-500" />
      <MoonIcon className="absolute inset-0 size-4 shrink-0 dark:scale-100 scale-0 rotate-45 transition duration-400 ease-out m-auto dark:text-neutral-200"/>
    </button>
  );
};
