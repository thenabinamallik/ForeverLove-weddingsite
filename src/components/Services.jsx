import React, { useState } from "react";
import { motion } from "framer-motion";
import ServiceDetailModal from "./ServiceDetailModal";
import { services } from "../data/siteData";
import TitleTop from "./TitleTop";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="mt-20 px-6 relative">
      {/* Title */}
      <div>
        <TitleTop title="What We Do" subTitle="Services crafted with love" />
      </div>

      {/* 🌳 Central Vertical Root Line (moved below title) */}
      <div className="relative">
        {/* This wrapper ensures the line starts below the title */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-rose-400 via-rose-300 to-rose-400 rounded-full z-0"></div>

        {/* 🌿 Service Cards */}
        <div className="flex flex-col items-center gap-24 mt-16 relative z-10">
          {services.map((s, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                onClick={() => setSelectedService(s)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className={`relative flex w-full md:w-[80%] ${
                  isLeft ? "justify-start" : "justify-end"
                } cursor-pointer`}
              >
                {/* 🌿 Branch Line */}
                <div
                  className={`absolute top-1/2 w-[70px] h-[3px] bg-gradient-to-r from-rose-400 to-rose-300 ${
                    isLeft
                      ? "right-[calc(50%+1.5px)]"
                      : "left-[calc(50%+1.5px)] rotate-180"
                  }`}
                ></div>

                {/* 🌸 Card */}
                <div
                  className={`relative shadow-xl rounded-3xl flex bg-white/90 backdrop-blur-md transition-all duration-300 overflow-hidden md:w-[45%] h-[340px] ${
                    isLeft ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Image */}
                  <div className="w-1/2 h-full overflow-hidden">
                    <img
                      src={s.images[0]}
                      alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex flex-col justify-center p-6 w-1/2">
                    <h3 className="text-2xl font-semibold text-deepGray mb-3 flex items-center gap-2">
                      <span className="text-3xl">{s.icon}</span> {s.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-4">
                      {s.desc}
                    </p>
                    <span className="mt-4 text-lg font-semibold text-roseAccent">
                      {s.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 💬 Modal */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
}
