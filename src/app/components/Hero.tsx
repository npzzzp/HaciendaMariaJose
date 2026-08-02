import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

const SENA =
  "https://nwopkcvdgbwomplkfwdx.supabase.co/storage/v1/object/public/media/logo/sena-seeklogo.png";

const FONDO =
  "https://nwopkcvdgbwomplkfwdx.supabase.co/storage/v1/object/public/media/logo/fondo-emprender-sena-seeklogo.png";

const BG =
  "https://nwopkcvdgbwomplkfwdx.supabase.co/storage/v1/object/public/media/photos/IMG-20260608-WA0066.jpg";

export function Hero() {
  const goTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="inicio"
      className="relative h-screen min-h-[720px] flex items-end overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BG})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 xl:px-32 pb-20 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.35em] text-white/70 mb-6 text-xs md:text-sm"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Campo de la Cruz · Atlántico · Colombia
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-white"
          style={{
            fontFamily: "'Lora', serif",
            fontWeight: 700,
            fontSize: "clamp(4rem, 8vw, 7rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            maxWidth: "12ch",
          }}
        >
          Hacienda
          <br />
          Maria Jose
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/80 mt-8 max-w-2xl"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.2rem",
            lineHeight: 1.8,
          }}
        >
          Leche fresca y queso artesanal.
          <br />
          Del campo a tus manos, sin intermediarios.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex gap-5 mt-10 flex-wrap"
        >
          <button
            onClick={() => goTo("#nosotros")}
            className="rounded-full bg-white px-8 py-3 text-[#1a1208] hover:bg-[#f6f1e8] transition"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Conocer la Hacienda
          </button>

          <button
            onClick={() => goTo("#contacto")}
            className="rounded-full border border-white/40 px-8 py-3 text-white hover:bg-white/10 transition"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Escríbenos
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="mt-16 flex items-center gap-6"
        >
          <p
            className="uppercase tracking-[0.3em] text-xs text-white/45"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Con el apoyo de
          </p>

          <div className="flex items-center gap-5">
            <img
              src={SENA}
              alt="SENA"
              className="h-8 brightness-0 invert opacity-50"
            />

            <div className="h-5 w-px bg-white/20" />

            <img
              src={FONDO}
              alt="Fondo Emprender"
              className="h-8 brightness-0 invert opacity-50"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.button
        animate={{ y: [0, 8, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        onClick={() => goTo("#nosotros")}
        className="absolute bottom-8 right-8 text-white/50 hover:text-white transition"
      >
        <ArrowDown size={22} />
      </motion.button>
    </section>
  );
}