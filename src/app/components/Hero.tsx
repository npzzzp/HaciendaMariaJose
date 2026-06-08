import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/photos/IMG-20260608-WA0066.jpg')",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/20"
            style={{
              left: `${15 + i * 14}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-16 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-5 py-2 mb-8"
        >
          <span className="text-sm text-white/90 tracking-[0.18em] uppercase">
            🌿 Leche y queso de finca
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-white mb-6 tracking-[-0.02em]"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(2.25rem, 5.5vw, 4.75rem)",
            fontWeight: 700,
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
          }}
        >
          Hacienda <em>Maria Jose</em><br />
          <span style={{ color: "#c8e6a0" }}>Leche fresca y queso artesanal</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-white/85 max-w-2xl mx-auto mb-10"
          style={{ fontSize: "1.15rem", lineHeight: 1.7 }}
        >
          En Hacienda Maria Jose elaboramos quesos artesanales y leche fresca con el
          cuidado de nuestras familias. Cada producto lleva el sabor auténtico de
          nuestros campos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => handleScroll("#productos")}
            className="px-8 py-4 rounded-full bg-[#3a5e2f] text-white hover:bg-[#2d4a24] transition-all hover:scale-105 shadow-xl"
            style={{ fontSize: "1rem" }}
          >
            Ver Productos
          </button>
          <button
            onClick={() => handleScroll("#nosotros")}
            className="px-8 py-4 rounded-full bg-white/15 backdrop-blur-sm border border-white/40 text-white hover:bg-white/25 transition-all"
            style={{ fontSize: "1rem" }}
          >
            Conocer la Finca
          </button>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => handleScroll("#nosotros")}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white/90 transition-colors"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
}
