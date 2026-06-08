import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Heart, ShieldCheck, HandHeart } from "lucide-react";

const values = [
  {
    icon: <Heart size={22} />,
    title: "Producción Familiar",
    desc: "Todo se hace con dedicación, cuidado y trabajo diario en la finca, como en casa.",
  },
  {
    icon: <HandHeart size={22} />,
    title: "Leche y Queso de Finca",
    desc: "La base de nuestra producción es la leche fresca y el queso artesanal de origen local.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Proceso Responsable",
    desc: "Cuidamos la higiene, la calidad y el bienestar de la producción sin exagerar el lenguaje comercial.",
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
          <span className="text-[#3a5e2f] text-sm tracking-widest uppercase">
            Nuestra Historia
          </span>
          <h2 className="text-[#2c1f0e] mt-3" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
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
              <p className="text-[#3a5e2f]" style={{ fontFamily: "Georgia, serif", fontSize: "2rem", fontWeight: 700 }}>
                Campo de la Cruz
              </p>
              <p className="text-[#7a6b52] text-sm">Producción familiar en la finca</p>
            </motion.div>
            {/* Small accent image */}
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-xl overflow-hidden shadow-lg border-4 border-[#faf7f0] z-20">
              <img
                src="/assets/photos/4987818660302883932.jpg"
                alt="Detalle decorativo de la finca"
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
              style={{ fontSize: "1.05rem", lineHeight: 1.8 }}
            >
              Nuestra historia nace en Hacienda Maria Jose, ubicada en Campo de la Cruz.
              Allí, cada mañana comienza con el ordeño directo y el cuidado del ganado,
              en un trabajo familiar que se realiza con dedicación y respeto por la tierra.
            </p>
            <p
              className="text-[#7a6b52] mb-8"
              style={{ fontSize: "1.05rem", lineHeight: 1.8 }}
            >
              El trabajo en la finca se desarrolla de forma cercana y constante.
              La leche se recoge y se transforma en queso artesanal con cuidado,
              manteniendo el valor de una producción familiar y auténtica.
            </p>
            <div className="flex gap-4 flex-wrap">
              <div className="px-5 py-3 rounded-full bg-[#3a5e2f]/10 text-[#3a5e2f] text-sm">
                Leche fresca y queso artesanal
              </div>
              <div className="px-5 py-3 rounded-full bg-[#c8a96e]/15 text-[#7a6b52] text-sm">
                Producción familiar en Campo de la Cruz
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
              className="bg-[#fff8ee] rounded-2xl p-6 border border-[#e8dfc8] hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-full bg-[#3a5e2f]/10 text-[#3a5e2f] flex items-center justify-center mb-4">
                {v.icon}
              </div>
              <h3 className="text-[#2c1f0e] mb-2" style={{ fontFamily: "Georgia, serif" }}>
                {v.title}
              </h3>
              <p className="text-[#7a6b52] text-sm" style={{ lineHeight: 1.7 }}>
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
