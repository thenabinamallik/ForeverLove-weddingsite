import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function TitleTop({ title, subTitle }) {
  const [theme] = useTheme();

  // 🎨 Accent color for divider
  const accentLine = theme === "dark" ? "bg-luxuryGold" : "bg-roseAccent";

  return (
    <section
      id="what-we-do"
      className="mt-24 mb-16 px-6 text-center"
    >
      {/* Animated Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2
          className={`text-3xl md:text-4xl font-serif mb-3 ${
            theme === "dark" ? "text-luxuryGold" : "text-deepGray"
          }`}
        >
          {title}
        </h2>

        {/* Elegant Divider Line */}
        <div className="flex justify-center items-center my-4">
          <div className={`w-16 h-0.5 ${accentLine}`}></div>
        </div>

        <p
          className={`text-lg md:text-xl font-light ${
            theme === "dark" ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {subTitle}
        </p>
      </motion.div>
    </section>
  );
}
