import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Hero({ onCTAClick = () => {} }) {
  const [theme] = useTheme();
  const titleClass = theme === "dark" ? "text-luxuryGold" : "text-deepGray";

  const images = [
    "./bg0.jpg",
    "./bg1.jpg",
    "./bg2.jpg",
    "./bg3.jpg",
  ];

  const [offset, setOffset] = useState(0);
  const containerRef = useRef(null);
  const speed = 5; // pixels per frame

  // Duplicate slides for seamless loop
  const carouselImages = [...images, ...images];

  useEffect(() => {
    let animationFrame;

    const animate = () => {
      setOffset((prev) => {
        const totalWidth = containerRef.current.scrollWidth / 2;
        const next = prev + speed;
        return next >= totalWidth ? 0 : next;
      });
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <div
        ref={containerRef}
        className="absolute flex h-full"
        style={{
          transform: `translateX(-${offset}px)`,
          width: `${carouselImages.length * 100}vw`,
        }}
      >
        {carouselImages.map((src, i) => (
          <div key={i} className="w-screen h-full shrink-0 relative">
            <img src={src} alt={`hero-${i}`} className="w-full h-full object-cover" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  theme === "dark"
                    ? "rgba(8,10,12,0.5)"
                    : "rgba(255,255,255,0.16)",
              }}
            />
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-5xl mx-auto px-6">
        <h1 className={`text-5xl md:text-6xl font-serif leading-tight ${titleClass}`}>
          Dream weddings, <span className="text-roseAccent">cinematically</span> told.
        </h1>
        <p
          className={`mt-4 text-lg md:text-xl max-w-xl ${
            theme === "dark" ? "text-slate-200" : "text-slate-700"
          }`}
        >
          We craft cinematic experiences — think wedding film vibes, not a photo album. Large scale production, delicate emotion.
        </p>
        <div className="mt-6 flex gap-3">
          <button
            onClick={onCTAClick}
            className="px-5 py-3 rounded-full bg-luxuryGold text-deepGray font-medium shadow hover:scale-[1.02] transition-transform"
          >
            Book a consult
          </button>
          <a
            href="#gallery"
            className={`px-5 py-3 rounded-full border ${
              theme === "dark"
                ? "border-white/10 text-slate-200"
                : "border-slate-200 text-deepGray"
            }`}
          >
            View gallery
          </a>
        </div>
      </div>
    </section>
  );
}
