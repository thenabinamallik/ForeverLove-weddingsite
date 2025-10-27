import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import TitleTop from "./TitleTop";
import { services } from "../data/siteData";

export default function Gallery() {
  const [theme] = useTheme();
  const [selectedImage, setSelectedImage] = useState(null);
  const [spans, setSpans] = useState([]);

  // ✅ Collect all images from siteData
  const allImages = services.flatMap((s) =>
    s.images.map((img, index) => ({
      src: img,
      title: `${s.title} #${index + 1}`,
    }))
  );

  // ✅ Generate random grid sizes for masonry layout
  useEffect(() => {
    const sizes = [
      "row-span-1 col-span-1",
      "row-span-2 col-span-1",
      "row-span-1 col-span-2",
      "row-span-2 col-span-2",
    ];
    const assignedSpans = allImages.map(
      () => sizes[Math.floor(Math.random() * sizes.length)]
    );
    setSpans(assignedSpans);
  }, []);

  return (
    <section id="gallery" className="mt-20 px-6">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <TitleTop title="Gallery" subTitle="Moments We've Created" />
      </motion.div>

      {/* ✅ Masonry Layout */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[150px] md:auto-rows-[150px] [grid-flow-dense]">
        {allImages.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedImage(item)}
            className={`relative overflow-hidden rounded-xl cursor-pointer ${spans[i]}`}
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-70" />
            <div className="absolute bottom-3 left-3 text-white font-medium text-sm md:text-base tracking-wide drop-shadow-md">
              {item.title}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ✅ Modal */}
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
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative flex flex-col items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[85vh] max-w-[90vw] h-auto w-auto rounded-2xl object-contain shadow-2xl"
              />
              <p className="text-white text-lg font-medium mt-3">
                {selectedImage.title}
              </p>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 bg-black/60 text-white p-2 rounded-full hover:bg-black transition"
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
