import React from "react";
import { motion } from "framer-motion";
import { team } from "../data/siteData";
import { useTheme } from "../context/ThemeContext";
import TitleTop from "./TitleTop";

export default function Team() {
  const [theme] = useTheme();
  return (
    <section id="team" className="mt-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <TitleTop title="Pricing" subTitle="Perfect packages for every couple"/>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
        {team.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className={`p-6 rounded-2xl text-center shadow-lg border ${
              theme === "dark"
                ? "border-white/5 bg-[rgba(255,255,255,0.02)] text-slate-100"
                : "border-slate-200 bg-white text-slate-900"
            }`}
          >
            <img
              src={t.img}
              alt={t.name}
              className="mx-auto w-28 h-28 rounded-full object-cover"
            />
            <h5 className="mt-4 font-semibold text-roseAccent">{t.name}</h5>
            <p className="text-sm mt-1 text-luxuryGold">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
