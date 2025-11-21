"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="flex justify-center items-center w-10 h-10 rounded-full cursor-pointer"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <FaSun
        className="absolute h-10 w-10 rotate-0 scale-100 dark:rotate-90 dark:scale-0"
        size={1}
      ></FaSun>
      <FaMoon
        className="absolute h-10 w-10 rotate-90 scale-0 dark:rotate-0 dark:scale-100"
        size={1}
      ></FaMoon>
    </button>
  );
};

export default ThemeToggler;
