import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar({
  navLinks = [],
  active = "home",
  onNavigate = () => {},
}) {
  const [theme, setTheme] = useTheme();

  // conditional classes for container
  const containerClass =
    theme === "dark"
      ? "bg-[rgba(10,12,20,0.5)] text-gray-200"
      : "bg-white/20 text-gray-900";

  return (
    <header className={`fixed w-full z-40 top-4 ${theme === "dark" ? "" : ""}`}>
      <div className={`max-w-7xl mx-auto px-6`}>
        <div
          className={`backdrop-blur rounded-2xl py-3 px-4 shadow-lg border border-transparent flex items-center justify-between ${containerClass}`}
        >
          <div className="flex items-center gap-4">
            <button
              className="text-2xl font-serif text-luxuryGold leading-none"
              onClick={() => onNavigate("home")}
            >
              ForeverLove
            </button>
            <div className="hidden md:flex items-center gap-6 ml-6">
              {navLinks.map((n) => (
                <button
                  key={n.id}
                  onClick={() => onNavigate(n.id)}
                  className={`text-sm font-medium py-1 px-2 rounded ${
                    active === n.id
                      ? "text-roseAccent"
                      : theme === "dark"
                      ? "text-slate-200"
                      : "text-slate-700"
                  }`}
                >
                  {n.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              aria-label="toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:scale-[1.04] transition-transform"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <div className="hidden md:block">
              <button
                className="px-4 py-2 rounded-lg bg-luxuryGold text-deepGray font-medium"
                onClick={() => onNavigate("contact")}
              >
                Book a consult
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => onNavigate("contact")}
                className="p-2 rounded"
              >
                Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
