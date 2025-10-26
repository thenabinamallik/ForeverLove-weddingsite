import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function Hero({ onCTAClick = () => {} }) {
  const [theme] = useTheme();
  const titleClass = theme === "dark" ? "text-luxuryGold" : "text-deepGray";
  const subtitleClass =
    theme === "dark" ? "text-roseAccent" : "text-roseAccent";

  return (
    <section id="home" className={`relative h-screen overflow-hidden`}>
      <motion.img
        src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80"
        alt="hero"
        className="absolute w-full h-full object-cover"
        initial={{ y: "-8%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 2 }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            theme === "dark" ? "rgba(8,10,12,0.6)" : "rgba(255,255,255,0.16)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-start justify-center h-full max-w-5xl mx-auto px-6"
      >
        <h1
          className={`text-5xl md:text-6xl font-serif leading-tight ${titleClass}`}
        >
          Dream weddings, <span className="text-roseAccent">cinematically</span>{" "}
          told.
        </h1>
        <p
          className={`mt-4 text-lg md:text-xl max-w-xl ${
            theme === "dark" ? "text-slate-200" : "text-slate-700"
          }`}
        >
          We craft cinematic experiences — think wedding film vibes, not a photo
          album. Large scale production, delicate emotion.
        </p>
        <div className="mt-6 flex gap-3">
          <button
            onClick={onCTAClick}
            className={`px-5 py-3 rounded-full ${
              theme === "dark"
                ? "bg-luxuryGold text-deepGray"
                : "bg-luxuryGold text-deepGray"
            } font-medium shadow hover:scale-[1.02] transition-transform`}
          >
            Book a consult
          </button>
          <a
            href="#gallery"
            className={`px-5 py-3 rounded-full border ${
              theme === "dark"
                ? "border-white/10 text-slate-200"
                : "border-slate-200 text-deepGray"
            }`}
          >
            View gallery
          </a>
        </div>
      </motion.div>
    </section>
  );
}
