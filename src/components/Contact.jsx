import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Mail, Phone, MapPin } from "lucide-react";
import TitleTop from "./TitleTop";

export default function Contact() {
  const [theme] = useTheme();

  return (
    <section id="contact" className="mt-20 px-6 mb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <TitleTop title="Get in touch" subTitle="Let's plan your day"/>
      </motion.div>
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative rounded-2xl overflow-hidden h-[500px] flex items-center justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80"
            alt="contact-bg"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
            style={{
              background:
                theme === "dark"
                  ? "rgba(8,10,12,0.6)"
                  : "rgba(255,255,255,0.16)",
            }}
          />
          <div className="relative z-10 p-8 text-center text-white">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-serif text-2xl md:text-3xl"
            >
              “Every story deserves a cinematic telling.”
            </motion.h3>
            <p className="mt-4 text-sm text-white/80">
              We’d love to bring your love story to life — reach out and let’s
              start crafting something unforgettable.
            </p>

            {/* Contact Details */}
            <div className="mt-6 flex flex-col gap-3 text-sm text-white/80">
              <div className="flex justify-center items-center gap-2">
                <Mail size={16} /> hello@example.com
              </div>
              <div className="flex justify-center items-center gap-2">
                <Phone size={16} /> +91 12345 67890
              </div>
              <div className="flex justify-center items-center gap-2">
                <MapPin size={16} /> Dhenkanal, OD
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks! We'll get back to you soon.");
          }}
          className="flex flex-col gap-4"
        >
          {["Your name", "Email", "Phone"].map((placeholder, i) => (
            <motion.input
              key={i}
              required={placeholder !== "Phone"}
              placeholder={placeholder}
              type={placeholder === "Email" ? "email" : "text"}
              whileFocus={{ scale: 1.02, boxShadow: "0 0 15px rgba(212,169,65,0.3)" }}
              className={`p-3 rounded-lg border outline-none transition-all ${
                theme === "dark"
                  ? "bg-[rgba(255,255,255,0.03)] text-slate-100 border-white/10"
                  : "bg-white text-deepGray border-slate-200"
              }`}
            />
          ))}

          <select
            className={`p-3 rounded-lg border ${
              theme === "dark"
                ? "bg-[rgba(255,255,255,0.03)] text-slate-100 border-white/10"
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
            rows={5}
            className={`p-3 rounded-lg border resize-none ${
              theme === "dark"
                ? "bg-[rgba(255,255,255,0.03)] text-slate-100 border-white/10"
                : "bg-white text-deepGray border-slate-200"
            }`}
          />

          {/* Submit Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(212,169,65,0.4)",
            }}
            whileTap={{ scale: 0.97 }}
            className="py-3 rounded-lg bg-luxuryGold text-deepGray font-medium hover:bg-roseAccent transition"
          >
            Send message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
