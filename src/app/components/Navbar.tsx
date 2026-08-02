import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";

const LOGO = "https://nwopkcvdgbwomplkfwdx.supabase.co/storage/v1/object/public/media/logo/Logo_FincaMJ.svg";

const mainLinks = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Lo que Hacemos", href: "#hacemos" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isGaleria = location.pathname === "/galeria";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // En páginas internas siempre mostrar fondo
  const showBg = scrolled || isGaleria;

  const goTo = (href: string) => {
    setMenuOpen(false);
    if (isGaleria) {
      // Navegar primero a home, luego hacer scroll
      navigate("/");
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        showBg
          ? "bg-[#f6f1e8]/95 backdrop-blur-md border-b border-black/8 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={LOGO}
            alt="Hacienda Maria Jose"
            className={`h-9 w-9 object-contain rounded-full p-1 ${showBg ? "bg-[#1a1208]/5" : "bg-white/15"}`}
          />
          <div
            className={`hidden sm:block transition-colors ${showBg ? "text-[#1a1208]" : "text-white"}`}
            style={{ fontFamily: "Georgia, serif", letterSpacing: "0.01em" }}
          >
            <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>Hacienda</span>
            <span style={{ fontWeight: 400, fontSize: "0.95rem", marginLeft: "0.3em" }}>Maria Jose</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {mainLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => goTo(l.href)}
              className={`text-sm tracking-wide transition-colors hover:opacity-60 ${
                showBg ? "text-[#1a1208]" : "text-white/90"
              }`}
            >
              {l.label}
            </button>
          ))}
          <Link
            to="/galeria"
            className={`text-sm tracking-wide transition-colors hover:opacity-60 ${
              showBg ? "text-[#1a1208]" : "text-white/90"
            } ${isGaleria ? "opacity-40 pointer-events-none" : ""}`}
          >
            Galería
          </Link>
          <button
            onClick={() => goTo("#contacto")}
            className={`text-sm px-5 py-2 rounded-full border transition-all hover:opacity-70 ${
              showBg
                ? "border-[#1a1208] text-[#1a1208]"
                : "border-white/60 text-white"
            }`}
          >
            Escríbenos
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className={`md:hidden transition-colors ${showBg ? "text-[#1a1208]" : "text-white"}`}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu — sin animación de height para que los clicks funcionen */}
      {menuOpen && (
        <div className="md:hidden bg-[#f6f1e8] border-t border-black/8">
          <nav className="px-6 py-4 flex flex-col gap-1">
            {mainLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => goTo(l.href)}
                className="text-left py-3.5 text-[#1a1208] border-b border-black/6 text-base"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {l.label}
              </button>
            ))}
            <Link
              to="/galeria"
              onClick={() => setMenuOpen(false)}
              className="py-3.5 text-[#1a1208] border-b border-black/6 text-base"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Galería
            </Link>
            <button
              onClick={() => goTo("#contacto")}
              className="mt-3 py-3 rounded-full bg-[#1a1208] text-[#f6f1e8] text-center text-sm"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Escríbenos
            </button>
          </nav>
        </div>
      )}
    </motion.header>
  );
}
