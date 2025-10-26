import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const images = [
  { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80", title: "Golden Hour Bride" },
  { src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80", title: "Elegant Silhouettes" },
  { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80", title: "Cinematic Romance" },
  { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80", title: "Pure Joy" },
  { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80", title: "Timeless Beauty" },
  { src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80", title: "Vows & Dreams" },
  { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80", title: "Whispered Promises" },
  { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80", title: "Captured Emotion" },
];

export default function Gallery() {
  const [theme] = useTheme();
  const [selectedImage, setSelectedImage] = useState(null);
  const [spans, setSpans] = useState([]);

  // Generate random spans once
  useEffect(() => {
    const sizes = [
      "row-span-1 col-span-1",
      "row-span-2 col-span-1",
      "row-span-1 col-span-2",
      "row-span-2 col-span-2",
    ];
    const assignedSpans = images.map(() => sizes[Math.floor(Math.random() * sizes.length)]);
    setSpans(assignedSpans);
  }, []);

  return (
    <section id="gallery" className="mt-20 px-6">
      {/* Heading */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="text-sm text-roseAccent font-semibold">Gallery</div>
        <h2 className={`text-3xl md:text-4xl font-serif mt-2 ${theme === "dark" ? "text-luxuryGold" : "text-deepGray"}`}>
          Moments we've created
        </h2>
      </motion.div>

      {/* Masonry Grid */}
      <div
        className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[150px] md:auto-rows-[150px] [grid-flow-dense]"
      >
        {images.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedImage(item.src)}
            className={`relative overflow-hidden rounded-xl cursor-pointer ${spans[i]}`}
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-300"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-70" />
            {/* Title */}
            <div className="absolute bottom-3 left-3 text-white font-medium text-sm md:text-base tracking-wide drop-shadow-md">
              {item.title}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div key="overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50" onClick={() => setSelectedImage(null)}>
            <motion.div
              key="image"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-[90%] max-h-[85vh] rounded-2xl overflow-hidden shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage} alt="enlarged" className="w-full h-full object-contain bg-black" />
              <button onClick={() => setSelectedImage(null)} className="absolute top-3 right-3 bg-black/60 text-white p-2 rounded-full hover:bg-black transition">
                <X size={22} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
