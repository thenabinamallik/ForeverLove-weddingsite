import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "pricing", label: "Pricing" },
    { id: "team", label: "Team" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <ThemeProvider>
      <ThemedApp navLinks={navLinks} />
    </ThemeProvider>
  );
}

function ThemedApp({ navLinks }) {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const sections = [
        "home",
        "services",
        "pricing",
        "team",
        "gallery",
        "contact",
      ];
      let cur = "home";
      for (const s of sections) {
        const el = document.getElementById(s);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) cur = s;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={`min-h-screen transition-colors duration-500`}>
      <Navbar
        navLinks={navLinks}
        active={active}
        onNavigate={(id) => {
          scrollTo(id);
        }}
      />

      <main className="max-w-8xl mx-auto px-6 py-10">
        <Hero onCTAClick={() => scrollTo("contact")} />
        <Services />
        <Pricing />
        <Team />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
