import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

const SENA = "https://nwopkcvdgbwomplkfwdx.supabase.co/storage/v1/object/public/media/logo/sena-seeklogo.png";
const FONDO = "https://nwopkcvdgbwomplkfwdx.supabase.co/storage/v1/object/public/media/logo/fondo-emprender-sena-seeklogo.png";
const BG = "https://nwopkcvdgbwomplkfwdx.supabase.co/storage/v1/object/public/media/photos/IMG-20260608-WA0066.jpg";

export function Hero() {
  const goTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="inicio"
      className="relative h-screen min-h-[600px] flex flex-col justify-end overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${BG}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 md:px-10 pb-16 md:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/60 text-sm tracking-widest uppercase mb-4"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Campo de la Cruz, Atlántico · Colombia
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-white"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(2.8rem, 7vw, 6rem)",
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.01em",
            maxWidth: "16ch",
          }}
        >
          Hacienda<br />Maria Jose
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.65 }}
          className="text-white/75 mt-5 max-w-md"
          style={{ fontSize: "1.1rem", lineHeight: 1.75, fontFamily: "'DM Sans', sans-serif" }}
        >
          Leche fresca y queso artesanal.<br />
          Del campo a tus manos, sin intermediarios.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.82 }}
          className="flex gap-4 mt-8 flex-wrap"
        >
          <button
            onClick={() => goTo("#nosotros")}
            className="px-7 py-3 rounded-full bg-white text-[#1a1208] hover:bg-[#f6f1e8] transition-colors text-sm"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Conocer la Hacienda
          </button>
          <button
            onClick={() => goTo("#contacto")}
            className="px-7 py-3 rounded-full border border-white/40 text-white hover:bg-white/10 transition-colors text-sm"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Escríbenos
          </button>
        </motion.div>

        {/* Con el apoyo de */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-12 flex items-center gap-6"
        >
          <p className="text-white/35 text-xs tracking-widest uppercase"
            style={{ fontFamily: "Georgia, serif" }}>
            Con el apoyo de
          </p>
          <div className="flex items-center gap-5">
            <img src={SENA} alt="SENA" className="h-8 object-contain brightness-0 invert opacity-50" />
            <div className="w-px h-5 bg-white/20" />
            <img src={FONDO} alt="Fondo Emprender" className="h-8 object-contain brightness-0 invert opacity-50" />
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.button
        onClick={() => goTo("#nosotros")}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 right-8 md:right-10 text-white/40 hover:text-white/70 transition-colors z-10"
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  );
}
