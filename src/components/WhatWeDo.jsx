import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function WhatWeDo() {
  const [theme] = useTheme();

  return (
    <section id="what-we-do" className="mt-24 mb-16 px-6 text-center">
      {/* Animated Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2
          className={`text-3xl md:text-4xl font-serif ${
            theme === "dark" ? "text-luxuryGold" : "text-deepGray"
          }`}
        >
          What We Do
        </h2>

        {/* Elegant Divider Line */}
        <div className="flex justify-center items-center my-4">
          <div
            className={`w-16 h-[2px] ${
              theme === "dark" ? "bg-luxuryGold" : "bg-roseAccent"
            }`}
          ></div>
        </div>

        <p
          className={`text-lg md:text-xl font-light ${
            theme === "dark" ? "text-slate-200" : "text-slate-600"
          }`}
        >
          Services crafted with love
        </p>
      </motion.div>
    </section>
  );
}
