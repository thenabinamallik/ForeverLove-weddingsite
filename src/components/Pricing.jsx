import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { pricing } from "../data/siteData"; // 👈 import your pricing data

export default function Pricing() {
  const [theme] = useTheme();

  return (
    <section id="pricing" className="mt-24 mb-20 px-6 text-center">
      {/* Animated Header */}
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
          Pricing
        </h2>

        {/* Divider Line */}
        <div className="flex justify-center items-center my-4">
          <div
            className={`w-16 h-0.5 ${
              theme === "dark" ? "bg-luxuryGold" : "bg-roseAccent"
            }`}
          ></div>
        </div>

        <p
          className={`text-lg md:text-xl font-light ${
            theme === "dark" ? "text-slate-200" : "text-slate-600"
          }`}
        >
          Perfect packages for every couple
        </p>
      </motion.div>

      {/* Pricing Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricing.map((pkg, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className={`p-8 rounded-2xl shadow-lg transition ${
              pkg.name === "Classic"
                ? theme === "dark"
                  ? "bg-roseAccent/10 border border-roseAccent"
                  : "bg-roseAccent/5 border border-roseAccent"
                : theme === "dark"
                ? "bg-[rgba(255,255,255,0.03)] border border-white/10"
                : "bg-white border border-slate-200"
            }`}
          >
            <h3
              className={`text-2xl font-serif ${
                theme === "dark" ? "text-luxuryGold" : "text-deepGray"
              }`}
            >
              {pkg.name}
            </h3>
            <p
              className={`mt-2 text-3xl font-semibold text-roseAccent`}
            >
              {pkg.price}
            </p>

            <ul className="mt-4 text-sm text-slate-400 space-y-2">
              {pkg.perks.map((perk, j) => (
                <li key={j}>{perk}</li>
              ))}
            </ul>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(212,169,65,0.4)",
              }}
              whileTap={{ scale: 0.96 }}
              className="mt-6 px-6 py-3 rounded-full bg-luxuryGold text-deepGray font-medium hover:bg-roseAccent transition"
            >
              Choose Plan
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
