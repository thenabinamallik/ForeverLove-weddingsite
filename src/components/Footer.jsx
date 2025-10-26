import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const [theme] = useTheme();
  return (
    <footer
      className={`py-6 mt-20 flex flex-col items-center gap-2 ${
        theme === "dark"
          ? "bg-[rgba(0,0,0,0.6)] text-slate-200"
          : "bg-white text-deepGray"
      }`}
    >
      <p>
        &copy; {new Date().getFullYear()} Forever Love. All rights reserved.
      </p>
      <p>Designed with 💛 and ✨</p>
    </footer>
  );
}
