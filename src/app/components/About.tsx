import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Leaf, Heart, Sun, Award } from "lucide-react";

const values = [
  {
    icon: <Leaf size={22} />,
    title: "Pastoreo Natural",
    desc: "Nuestras vacas se alimentan libremente en praderas sin pesticidas durante todo el año.",
  },
  {
    icon: <Heart size={22} />,
    title: "Tradición Familiar",
    desc: "Tres generaciones perfeccionando recetas transmitidas con amor y dedicación.",
  },
  {
    icon: <Sun size={22} />,
    title: "Sin Aditivos",
    desc: "Cero conservantes, cero colorantes. Solo leche fresca, sal y cultivos naturales.",
  },
  {
    icon: <Award size={22} />,
    title: "Calidad Certificada",
    desc: "Procesos artesanales con estándares de higiene y calidad de exportación.",
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
                src="https://images.unsplash.com/photo-1641939193329-7071068dc40f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxkYWlyeSUyMGZhcm0lMjBncmVlbiUyMHBhc3R1cmUlMjBjb3dzfGVufDF8fHx8MTc4MDk0NzI0M3ww&ixlib=rb-4.1.0&q=80&w=800"
                alt="Vacas pastando en La Pradera"
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
                1974
              </p>
              <p className="text-[#7a6b52] text-sm">Fundada por la familia Restrepo</p>
            </motion.div>
            {/* Small accent image */}
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-xl overflow-hidden shadow-lg border-4 border-[#faf7f0] z-20">
              <img
                src="https://images.unsplash.com/photo-1768850418251-17480117ac9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMG1pbGslMjBnbGFzcyUyMGJvdHRsZSUyMGZhcm18ZW58MXx8fHwxNzgwOTQ3MjUwfDA&ixlib=rb-4.1.0&q=80&w=300"
                alt="Leche fresca en botella"
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
              Todo comenzó cuando el abuelo Ernesto Restrepo decidió quedarse en
              estas montañas y criar el mejor ganado del departamento. Hoy, sus
              nietos continúan esa misión con el mismo amor y rigor artesanal,
              incorporando técnicas modernas sin perder la esencia.
            </p>
            <p
              className="text-[#7a6b52] mb-8"
              style={{ fontSize: "1.05rem", lineHeight: 1.8 }}
            >
              Cada mañana, antes del amanecer, comienza la ordeña manual. La leche
              viaja pocos metros hasta la quesería donde nuestros maestros
              queseros la transforman en quesos únicos que reflejan el terroir de
              nuestras tierras andinas.
            </p>
            <div className="flex gap-4 flex-wrap">
              <div className="px-5 py-3 rounded-full bg-[#3a5e2f]/10 text-[#3a5e2f] text-sm">
                🐄 Ganado Holstein & Normando
              </div>
              <div className="px-5 py-3 rounded-full bg-[#c8a96e]/15 text-[#7a6b52] text-sm">
                🏔️ 2.400 m.s.n.m.
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
