import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Heart, ShieldCheck, HandHeart } from "lucide-react";

const values = [
  {
    icon: <Heart size={22} />,
    title: "Trabajo Familiar",
    desc: "La finca la llevamos entre todos. El ordeño, el queso, la distribución — cada paso lo hacemos nosotros mismos, con dedicación diaria.",
  },
  {
    icon: <HandHeart size={22} />,
    title: "Leche Fresca del Día",
    desc: "Recogemos la leche cada mañana directamente de nuestro ganado. Sin intermediarios, sin días de espera. Fresca de origen.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Queso Artesanal",
    desc: "Elaboramos nuestro queso a mano, con recetas propias y cuidado en cada etapa. El resultado habla por sí solo.",
  },
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="nosotros" className="py-24 bg-[#faf7f0]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#3a5e2f] text-xs tracking-widest uppercase"
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}>
            Nuestra Historia
          </span>
          <h2 className="text-[#2c1f0e] mt-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 600 }}>
            Una Finca con Alma
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Image stack */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="/assets/photos/IMG-20260608-WA0064.jpg"
                alt="Vista principal de la finca"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 z-20 bg-[#fff8ee] rounded-2xl shadow-xl p-5 border border-[#e8dfc8]"
            >
              <p className="text-[#3a5e2f]" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.5rem", fontWeight: 700 }}>
                Campo de la Cruz
              </p>
              <p className="text-[#7a6b52] text-sm mt-1" style={{ fontFamily: "'Nunito', sans-serif" }}>Atlántico · Producción familiar</p>
            </motion.div>
            {/* Small accent image */}
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-xl overflow-hidden shadow-lg border-4 border-[#faf7f0] z-20">
              <img
                src="/assets/photos/4987818660302883932.jpg"
                alt="Detalle de la finca"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p
              className="text-[#7a6b52] mb-6"
              style={{ fontFamily: "'Nunito', sans-serif", fontSize: "1.05rem", lineHeight: 1.85, fontWeight: 300 }}
            >
              Hacienda Maria Jose está en Campo de la Cruz, Atlántico. Aquí la jornada
              empieza antes del amanecer — con el ordeño, el cuidado del ganado y el
              trabajo silencioso que hace posible todo lo que ponemos en tus manos.
            </p>
            <p
              className="text-[#7a6b52] mb-8"
              style={{ fontFamily: "'Nunito', sans-serif", fontSize: "1.05rem", lineHeight: 1.85, fontWeight: 300 }}
            >
              No somos una empresa grande ni una marca de diseño. Somos una familia que
              trabaja su tierra, cuida sus vacas y elabora queso artesanal con el mismo
              proceso de siempre — con paciencia, manos propias y sabor verdadero.
            </p>
            <div className="flex gap-4 flex-wrap">
              <div className="px-5 py-3 rounded-full bg-[#3a5e2f]/10 text-[#3a5e2f] text-sm"
                style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}>
                Queso artesanal
              </div>
              <div className="px-5 py-3 rounded-full bg-[#c8a96e]/15 text-[#7a6b52] text-sm"
                style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}>
                Leche fresca de finca
              </div>
              <div className="px-5 py-3 rounded-full bg-[#e8dfc8] text-[#5a4a32] text-sm"
                style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}>
                Campo de la Cruz, Atlántico
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values grid — 3 items centered */}
        <div className="flex flex-wrap justify-center gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
              className="bg-[#fff8ee] rounded-2xl p-6 border border-[#e8dfc8] hover:shadow-md transition-shadow"
              style={{ width: "clamp(260px, 30%, 340px)" }}
            >
              <div className="w-10 h-10 rounded-full bg-[#3a5e2f]/10 text-[#3a5e2f] flex items-center justify-center mb-4">
                {v.icon}
              </div>
              <h3 className="text-[#2c1f0e] mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600, fontSize: "1.1rem" }}>
                {v.title}
              </h3>
              <p className="text-[#7a6b52] text-sm" style={{ fontFamily: "'Nunito', sans-serif", lineHeight: 1.75, fontWeight: 300 }}>
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}