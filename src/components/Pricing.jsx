import React from "react";
import { motion } from "framer-motion";
import { pricing } from "../data/siteData";
import { useTheme } from "../context/ThemeContext";

export default function Pricing() {
  const [theme] = useTheme();
  return (
    <section id="pricing" className="mt-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="text-sm text-roseAccent font-semibold">Pricing</div>
        <h2
          className={`text-3xl md:text-4xl font-serif mt-2 ${
            theme === "dark" ? "text-luxuryGold" : "text-deepGray"
          }`}
        >
          Perfect packages for every couple
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {pricing.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className={`p-6 rounded-2xl shadow-lg border ${
              theme === "dark"
                ? "border-white/5 bg-[rgba(255,255,255,0.02)] text-slate-100"
                : "border-slate-200 bg-white text-slate-900"
            }`}
          >
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold">{p.name}</h4>
              <div className="text-2xl font-bold text-luxuryGold">
                {p.price}
              </div>
            </div>
            <ul
              className={`mt-4 space-y-2 text-sm ${
                theme === "dark" ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {p.perks.map((k) => (
                <li key={k}>• {k}</li>
              ))}
            </ul>
            <button className="mt-6 w-full py-2 rounded-lg bg-roseAccent text-deepGray font-medium">
              Choose
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
