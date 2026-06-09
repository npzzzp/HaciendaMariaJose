import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Productos", href: "#productos" },
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
          <img src="/assets/logo/Logo_FincaMJ.svg" alt="Logo Hacienda Maria Jose" className="w-10 h-10 rounded-full bg-white p-2 shadow-lg" />
          <div className="text-left">
            <p className={`leading-none tracking-wide transition-colors ${scrolled ? "text-[#2c1f0e]" : "text-white"}`}
               style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.1rem", fontWeight: 600 }}>
              Hacienda Maria Jose
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

        {/* Mobile menu toggle */}
        <button
          className={`md:hidden transition-colors ${scrolled ? "text-[#2c1f0e]" : "text-white"}`}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#faf7f0] shadow-lg border-t border-[#e8dfc8]">
          <ul className="flex flex-col px-6 pb-6 pt-2">
            {links.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleLink(link.href)}
                  className="w-full text-left py-4 border-b border-[#e8dfc8] text-[#2c1f0e] text-base active:bg-[#f0ebe0]"
                  style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 500 }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.nav>
  );
}