import { useRef } from "react";
import { motion, useInView } from "motion/react";

const IMG_BIG = "https://nwopkcvdgbwomplkfwdx.supabase.co/storage/v1/object/public/media/photos/IMG-20260608-WA0064.jpg";
const SENA = "https://nwopkcvdgbwomplkfwdx.supabase.co/storage/v1/object/public/media/logo/sena-seeklogo.png";
const FONDO = "https://nwopkcvdgbwomplkfwdx.supabase.co/storage/v1/object/public/media/logo/fondo-emprender-sena-seeklogo.png";

const pillars = [
  {
    title: "Trabajo Familiar",
    desc: "La finca la llevamos entre todos. El ordeño, el queso, la distribución — cada paso lo hacemos nosotros mismos, con dedicación diaria.",
  },
  {
    title: "Leche Fresca del Día",
    desc: "Recogemos la leche cada mañana directamente de nuestro ganado. Sin intermediarios, sin días de espera. Fresca de origen.",
  },
  {
    title: "Queso Artesanal",
    desc: "Elaboramos nuestro queso a mano, con recetas propias y cuidado en cada etapa. El resultado habla por sí solo.",
  },
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="bg-[#f6f1e8]" ref={ref}>
      {/* Top: full-bleed image */}
      <div className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <img
          src={IMG_BIG}
          alt="Hacienda Maria Jose"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/10" />
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center"
        >
          <div className="max-w-6xl mx-auto w-full px-6 md:px-10">
            <p
              className="text-white max-w-xl"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.3rem, 3vw, 2rem)",
                lineHeight: 1.55,
                fontStyle: "italic",
              }}
            >
              "Aquí la jornada empieza antes del amanecer — con el ordeño, el
              cuidado del ganado y el trabajo silencioso que hace posible todo lo
              que ponemos en tus manos."
            </p>
          </div>
        </motion.div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            <span className="text-[#b87c2a] text-xs tracking-widest uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Quiénes Somos
            </span>
            <h2
              className="text-[#1a1208] mt-3 mb-6"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)",
                lineHeight: 1.2,
              }}
            >
              Una familia que trabaja<br />su tierra.
            </h2>
            <div className="space-y-5 text-[#6b5840]"
              style={{ lineHeight: 1.85, fontSize: "1.02rem", fontFamily: "'DM Sans', sans-serif" }}>
              <p>
                Hacienda Maria Jose está en Campo de la Cruz, Atlántico. No somos
                una empresa grande ni una marca de diseño. Somos una familia que
                trabaja su tierra, cuida sus vacas y elabora queso artesanal con
                el mismo proceso de siempre.
              </p>
              <p>
                Con el respaldo del Fondo Emprender del SENA, hemos podido
                fortalecer nuestra producción y llevar nuestros productos a más
                familias de la región.
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-black/10">
              <div className="flex gap-10 flex-wrap mb-8">
                {[
                  { value: "Campo de la Cruz", label: "Atlántico" },
                  { value: "Familiar", label: "100% artesanal" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-[#1a1208]"
                      style={{ fontFamily: "Georgia, serif", fontSize: "1.15rem", fontWeight: 700 }}>
                      {s.value}
                    </p>
                    <p className="text-[#6b5840] text-sm mt-0.5"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.label}</p>
                  </div>
                ))}
              </div>
              {/* Logos Sena / Fondo Emprender */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[#6b5840] text-xs mr-2"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}>Con el apoyo de</span>
                <img src={SENA} alt="SENA" className="h-7 object-contain opacity-60" />
                <div className="w-px h-4 bg-black/15 mx-1" />
                <img src={FONDO} alt="Fondo Emprender" className="h-7 object-contain opacity-60" />
              </div>
            </div>
          </motion.div>

          {/* Right: pillars */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.25 }}
            className="divide-y divide-black/8"
          >
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.35 + i * 0.12 }}
                className="py-8 first:pt-0 last:pb-0"
              >
                <div className="flex items-start gap-5">
                  <span
                    className="text-[#b87c2a] shrink-0 mt-0.5"
                    style={{ fontFamily: "Georgia, serif", fontSize: "1.4rem", fontWeight: 700, lineHeight: 1 }}
                  >
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-[#1a1208] mb-2"
                      style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem" }}>
                      {p.title}
                    </h3>
                    <p className="text-[#6b5840] text-sm"
                      style={{ lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif" }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
