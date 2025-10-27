import React from "react";
import { motion } from "framer-motion";
import { services } from "../data/siteData";
import { useTheme } from "../context/ThemeContext";
import TitleTop from "./TitleTop";

export default function Services() {
  const [theme] = useTheme();

  const cardBg =
    theme === "dark"
      ? "bg-[rgba(255,255,255,0.04)] text-slate-100 border-white/5"
      : "bg-white text-slate-900 border-slate-200";

  const iconBg =
    theme === "dark"
      ? "bg-gradient-to-br from-roseAccent/20 to-luxuryGold/20"
      : "bg-gradient-to-br from-roseAccent/10 to-luxuryGold/10";

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="mt-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <TitleTop title="What We Do" subTitle="Services crafted with love"/>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
      >
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              boxShadow:
                theme === "dark"
                  ? "0 0 30px rgba(212,169,65,0.2)"
                  : "0 0 20px rgba(212,169,65,0.15)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className={`p-8 rounded-2xl shadow-md border ${cardBg} transition-all cursor-pointer`}
          >
            {/* Icon Section */}
            <div
              className={`w-16 h-16 ${iconBg} rounded-2xl flex items-center justify-center mb-4`}
            >
              <div className="text-4xl">{s.icon}</div>
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p
              className={`mt-3 text-sm ${
                theme === "dark" ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {s.desc}
            </p>

            {/* Button */}
            <motion.button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              whileHover={{
                scale: 1.05,
                boxShadow:
                  theme === "dark"
                    ? "0 0 15px rgba(233, 79, 79, 0.4)"
                    : "0 0 15px rgba(233, 79, 79, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className={`mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition ${
                theme === "dark"
                  ? "bg-roseAccent text-deepGray"
                  : "bg-roseAccent text-deepGray"
              }`}
            >
              Book a consult
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
