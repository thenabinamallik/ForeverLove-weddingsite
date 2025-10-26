import React from "react";
import { motion } from "framer-motion";
import { services } from "../data/siteData";
import { useTheme } from "../context/ThemeContext";

export default function Services() {
  const [theme] = useTheme();
  const cardBg =
    theme === "dark"
      ? "bg-[rgba(255,255,255,0.04)] text-slate-100"
      : "bg-white text-slate-900";

  return (
    <section id="services" className="mt-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="text-sm text-roseAccent font-semibold">What We Do</div>
        <h2
          className={`text-3xl md:text-4xl font-serif mt-2 ${
            theme === "dark" ? "text-luxuryGold" : "text-deepGray"
          }`}
        >
          Services crafted with love
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className={`p-6 rounded-2xl shadow-lg border ${
              theme === "dark" ? "border-white/5" : "border-slate-200"
            } ${cardBg}`}
          >
            <div className="text-4xl">{s.icon}</div>
            <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
            <p
              className={`${
                theme === "dark" ? "text-slate-300" : "text-slate-600"
              } mt-2`}
            >
              {s.desc}
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                theme === "dark"
                  ? "bg-roseAccent text-deepGray"
                  : "bg-roseAccent text-deepGray"
              } shadow hover:scale-[1.02] transition-transform`}
            >
              Book a consult
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
