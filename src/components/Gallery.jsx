import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const images = [
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
];

export default function Gallery() {
  const [theme] = useTheme();
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="mt-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="text-sm text-roseAccent font-semibold">Gallery</div>
        <h2
          className={`text-3xl md:text-4xl font-serif mt-2 ${
            theme === "dark" ? "text-luxuryGold" : "text-deepGray"
          }`}
        >
          Moments we've created
        </h2>
      </motion.div>

      {/* Gallery grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
        {images.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(src)}
            className="overflow-hidden rounded-xl h-52 cursor-pointer bg-slate-700"
          >
            <img
              src={src}
              alt={`gallery-${i}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Enlarged image modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              key="image"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-[90%] max-h-[85vh] rounded-2xl overflow-hidden shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="enlarged"
                className="w-full h-full object-contain bg-black"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 bg-black/60 text-white p-2 rounded-full hover:bg-black transition"
              >
                <X size={22} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
