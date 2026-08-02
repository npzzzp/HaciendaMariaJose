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
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });

  return (
    <section
      id="inicio"
      className="relative flex items-end overflow-hidden"
      style={{
        minHeight: "700px",
        height: "100svh",
      }}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" />

      {/* Content */}
      <div
        className="relative z-10 mx-auto w-full max-w-[1440px]"
        style={{
          paddingInline: "clamp(24px,6vw,96px)",
          paddingBottom: "clamp(56px,10vh,120px)",
        }}
      >
        {/* Ubicación */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase text-white/70"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(.75rem,.8vw,.95rem)",
            letterSpacing: ".35em",
            marginBottom: "clamp(20px,2vh,32px)",
          }}
        >
          Campo de la Cruz · Atlántico · Colombia
        </motion.p>

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-white"
          style={{
            fontFamily: "'Lora', serif",
            fontWeight: 700,
            fontSize: "clamp(3.5rem,7vw,7rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            maxWidth: "11ch",
          }}
        >
          Hacienda
          <br />
          Maria Jose
        </motion.h1>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="text-white/80"
          style={{
            marginTop: "clamp(24px,3vh,40px)",
            maxWidth: "clamp(320px,42vw,620px)",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1rem,1.2vw,1.25rem)",
            lineHeight: 1.8,
          }}
        >
          Leche fresca y queso artesanal.
          <br />
          Del campo a tus manos, sin intermediarios.
        </motion.p>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .35 }}
          className="flex flex-wrap gap-4"
          style={{
            marginTop: "clamp(32px,4vh,48px)",
          }}
        >
          <button
            onClick={() => goTo("#nosotros")}
            className="rounded-full bg-white text-[#1A1208] transition hover:bg-[#F6F1E8]"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              padding: "clamp(12px,1vw,16px) clamp(24px,2vw,34px)",
              fontSize: "clamp(.9rem,.9vw,1rem)",
            }}
          >
            Conocer la Hacienda
          </button>

          <button
            onClick={() => goTo("#contacto")}
            className="rounded-full border border-white/40 text-white transition hover:bg-white/10"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              padding: "clamp(12px,1vw,16px) clamp(24px,2vw,34px)",
              fontSize: "clamp(.9rem,.9vw,1rem)",
            }}
          >
            Escríbenos
          </button>
        </motion.div>

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .55 }}
          className="flex items-center gap-6"
          style={{
            marginTop: "clamp(48px,6vh,80px)",
          }}
        >
          <p
            className="uppercase text-white/45"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: ".3em",
              fontSize: "clamp(.65rem,.7vw,.8rem)",
            }}
          >
            Con el apoyo de
          </p>

          <div className="flex items-center gap-5">
            <img
              src={SENA}
              alt="SENA"
              style={{
                height: "clamp(24px,2vw,34px)",
              }}
              className="brightness-0 invert opacity-50"
            />

            <div className="w-px h-5 bg-white/20" />

            <img
              src={FONDO}
              alt="Fondo Emprender"
              style={{
                height: "clamp(24px,2vw,34px)",
              }}
              className="brightness-0 invert opacity-50"
            />
          </div>
        </motion.div>
      </div>

      {/* Flecha */}
      <motion.button
        onClick={() => goTo("#nosotros")}
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute z-20 text-white/50 transition hover:text-white"
        style={{
          right: "clamp(24px,4vw,48px)",
          bottom: "clamp(24px,4vh,48px)",
        }}
      >
        <ArrowDown size={22} />
      </motion.button>
    </section>
  );
}