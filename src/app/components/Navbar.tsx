import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Productos", href: "#productos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#faf7f0]/95 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleLink("#inicio")} className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-[#3a5e2f] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <span className="text-[#f9f6ef] text-lg">🌿</span>
          </div>
          <div className="text-left">
            <p className={`leading-none tracking-wide transition-colors ${scrolled ? "text-[#2c1f0e]" : "text-white"}`}
               style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem", fontWeight: 600 }}>
              Finca La Pradera
            </p>
            <p className={`text-xs tracking-widest uppercase transition-colors ${scrolled ? "text-[#7a6b52]" : "text-white/80"}`}>
              Quesos & Leche Artesanal
            </p>
          </div>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleLink(link.href)}
                className={`text-sm tracking-wide transition-colors hover:text-[#3a5e2f] ${
                  scrolled ? "text-[#2c1f0e]" : "text-white/90"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleLink("#contacto")}
          className="hidden md:block px-5 py-2 rounded-full text-sm bg-[#3a5e2f] text-white hover:bg-[#2d4a24] transition-colors shadow"
        >
          Pedir Ahora
        </button>

        {/* Mobile menu toggle */}
        <button
          className={`md:hidden transition-colors ${scrolled ? "text-[#2c1f0e]" : "text-white"}`}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#faf7f0]/98 overflow-hidden shadow-lg"
          >
            <ul className="flex flex-col gap-1 px-6 pb-6 pt-2">
              {links.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleLink(link.href)}
                    className="w-full text-left py-3 border-b border-[#e8dfc8] text-[#2c1f0e] text-base"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-3">
                <button
                  onClick={() => handleLink("#contacto")}
                  className="w-full py-3 rounded-full bg-[#3a5e2f] text-white text-center"
                >
                  Pedir Ahora
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
