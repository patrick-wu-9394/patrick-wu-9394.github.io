"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggleSwitch() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    // Read from localStorage on initial load
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDark(true);
      setTheme("dark");
    } else {
      setIsDark(false);
      setTheme("light");
    }
  }, [setTheme]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    setTheme(isDark ? "light" : "dark");
    localStorage.setItem("theme", newTheme ? "dark" : "light"); // Save to localStorage
  };

  return (
    <label className="flex cursor-pointer items-center">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={isDark}
          onChange={toggleTheme}
        />
        <div
          className={`block h-8 w-14 rounded-full ${isDark ? "bg-gray-600" : "bg-gray-300"}`}
        ></div>
        <div
          className={`dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition-transform duration-300 ease-in-out ${
            isDark ? "translate-x-6 transform" : ""
          }`}
        >
          {isDark ? (
            <Moon
              size={16}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-blue-600"
            />
          ) : (
            <Sun
              size={16}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-yellow-400"
            />
          )}
        </div>
      </div>
      <span className="ml-3 text-sm font-medium">
        {isDark ? "Dark Mode" : "Light Mode"}
      </span>
    </label>
  );
}
