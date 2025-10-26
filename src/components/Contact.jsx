import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function Contact() {
  const [theme] = useTheme();
  return (
    <section id="contact" className="mt-20 px-6 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="text-sm text-roseAccent font-semibold">
          Get in touch
        </div>
        <h2
          className={`text-3xl md:text-4xl font-serif mt-2 ${
            theme === "dark" ? "text-luxuryGold" : "text-deepGray"
          }`}
        >
          Let's plan your day
        </h2>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thanks! We'll get back to you soon.");
        }}
        className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <input
          required
          placeholder="Your name"
          className={`p-3 rounded-lg border ${
            theme === "dark"
              ? "bg-[rgba(255,255,255,0.02)] text-slate-100 border-white/5"
              : "bg-white text-deepGray border-slate-200"
          }`}
        />
        <input
          required
          placeholder="Email"
          type="email"
          className={`p-3 rounded-lg border ${
            theme === "dark"
              ? "bg-[rgba(255,255,255,0.02)] text-slate-100 border-white/5"
              : "bg-white text-deepGray border-slate-200"
          }`}
        />
        <input
          placeholder="Phone"
          className={`p-3 rounded-lg border ${
            theme === "dark"
              ? "bg-[rgba(255,255,255,0.02)] text-slate-100 border-white/5"
              : "bg-white text-deepGray border-slate-200"
          }`}
        />
        <select
          className={`p-3 rounded-lg border ${
            theme === "dark"
              ? "bg-[rgba(255,255,255,0.02)] text-slate-100 border-white/5"
              : "bg-white text-deepGray border-slate-200"
          }`}
        >
          <option>Inquiry type</option>
          <option>Wedding</option>
          <option>Event</option>
          <option>Consultation</option>
        </select>
        <textarea
          placeholder="Tell us about your vision"
          className={`p-3 rounded-lg border col-span-1 md:col-span-2 ${
            theme === "dark"
              ? "bg-[rgba(255,255,255,0.02)] text-slate-100 border-white/5"
              : "bg-white text-deepGray border-slate-200"
          }`}
          rows={5}
        />
        <button className="col-span-1 md:col-span-2 py-3 rounded-lg bg-luxuryGold text-deepGray font-medium hover:bg-roseAccent transition">
          Send message
        </button>
      </motion.form>
    </section>
  );
}
