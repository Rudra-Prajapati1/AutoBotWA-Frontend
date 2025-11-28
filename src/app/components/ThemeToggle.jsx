"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  // Fix hydration mismatch
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initial = saved || (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // This triggers the full-page smooth transition
    document.documentElement.classList.add("theme-transition");
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);

    // Remove transition class after animation ends
    setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 600);
  };

  // Prevent rendering until mounted (fixes hydration)
  if (!mounted) return <div className="w-12 h-12" />;

  return (
    <button
      onClick={toggleTheme}
      className="relative p-3 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 transition-all hover:scale-110 active:scale-95 z-50"
      aria-label="Toggle theme"
    >
      <span
        className={`
          fixed inset-0 -z-10 rounded-full blur-3xl opacity-0 scale-0 
          transition-all duration-700 pointer-events-none
          ${theme === "dark" ? "bg-blue-600" : "bg-yellow-400"}
          animate-ping
        `}
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      />

      {/* Icons */}
      <div className="relative z-10">
        <Sun
          className={`w-5 h-5 transition-all duration-500 ${
            theme === "light"
              ? "opacity-100 rotate-0 text-yellow-600"
              : "opacity-0 rotate-180"
          }`}
        />
        <Moon
          className={`w-5 h-5 absolute inset-0 m-auto transition-all duration-500 ${
            theme === "dark"
              ? "opacity-100 rotate-0 text-blue-400"
              : "opacity-0 -rotate-180"
          }`}
        />
      </div>
    </button>
  );
}
