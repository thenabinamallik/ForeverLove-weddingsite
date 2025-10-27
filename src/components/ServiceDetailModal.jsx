import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ServiceDetailModal({ service, onClose }) {
  const [theme] = useTheme();
  const [mainImage, setMainImage] = useState(service?.mainImage || service?.images?.[0]);

  // Reset main image when modal opens for a new service
  useEffect(() => {
    setMainImage(service?.mainImage || service?.images?.[0]);
  }, [service]);

  if (!service) return null;

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-center items-center p-6"
          onClick={onClose}
        >
          <motion.div
            key="modal"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`relative w-full max-w-5xl bg-white dark:bg-deepGray rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2 h-[60vh] bg-black">
              <img
                src={mainImage}
                alt={service.title}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-10 flex flex-col justify-between w-full md:w-1/2">
              <div>
                <h2
                  className={`text-3xl font-serif ${
                    theme === "dark" ? "text-luxuryGold" : "text-deepGray"
                  }`}
                >
                  {service.title}
                </h2>
                <p className="mt-2 text-roseAccent text-xl font-semibold">
                  {service.price}
                </p>
                <p
                  className={`mt-4 leading-relaxed ${
                    theme === "dark" ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {service.fullDesc ||
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae lorem sed eros egestas tempor. Phasellus in lacus dignissim, accumsan justo nec, hendrerit augue."}
                </p>
              </div>

              {/* Related Thumbnails */}
              {service.images && service.images.length > 1 && (
                <div className="flex gap-3 mt-6">
                  {service.images.slice(1, 4).map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`related-${idx}`}
                      className={`w-1/3 aspect-3/4 object-cover rounded-xl cursor-pointer hover:opacity-80 transition ${
                        img === mainImage ? "ring-2 ring-roseAccent" : ""
                      }`}
                      onClick={() => setMainImage(img)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full hover:bg-black transition"
            >
              <X size={22} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
