import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Sunrise, Droplets, FlaskConical, Package } from "lucide-react";

const steps = [
  {
    icon: <Sunrise size={28} />,
    time: "5:00 AM",
    title: "Ordeña al Amanecer",
    desc: "Con las primeras luces del día, nuestros ganaderos recogen la leche fresca de manera manual y cuidadosa, respetando el bienestar animal.",
    color: "#fdebd0",
    iconBg: "#c8a96e",
  },
  {
    icon: <Droplets size={28} />,
    time: "6:30 AM",
    title: "Control de Calidad",
    desc: "La leche se analiza en nuestro pequeño laboratorio: densidad, acidez y temperatura óptimas antes de ingresar a la quesería.",
    color: "#e8f0fa",
    iconBg: "#4a7fc1",
  },
  {
    icon: <FlaskConical size={28} />,
    time: "7:00 AM",
    title: "Elaboración Artesanal",
    desc: "Nuestros maestros queseros añaden cultivos naturales y cuajo de origen animal. Cada queso se moldea y prensa a mano.",
    color: "#e8f5d4",
    iconBg: "#3a5e2f",
  },
  {
    icon: <Package size={28} />,
    time: "Variable",
    title: "Maduración & Despacho",
    desc: "Los frescos salen ese mismo día. Los madurados descansan en nuestra cueva de piedra hasta alcanzar su punto perfecto.",
    color: "#fde8d8",
    iconBg: "#c0541a",
  },
];

export function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="proceso" className="py-24 bg-[#faf7f0] overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#3a5e2f] text-sm tracking-widest uppercase">
            Transparencia Total
          </span>
          <h2
            className="text-[#2c1f0e] mt-3"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
            }}
          >
            Cómo Hacemos Nuestros Quesos
          </h2>
          <p
            className="text-[#7a6b52] mt-4 max-w-xl mx-auto"
            style={{ lineHeight: 1.7 }}
          >
            De la pradera a tu mesa en menos de 24 horas. Sin intermediarios, sin
            misterios.
          </p>
        </motion.div>

        {/* Steps — horizontal timeline on desktop */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-20 left-[12.5%] right-[12.5%] h-0.5 bg-[#e8dfc8] z-0" />
          <motion.div
            className="hidden lg:block absolute top-20 left-[12.5%] h-0.5 bg-[#3a5e2f] z-0 origin-left"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            style={{ right: "12.5%" }}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg mb-5 border-4 border-[#faf7f0]"
                  style={{ background: step.iconBg, color: "#fff" }}
                >
                  {step.icon}
                </div>
                {/* Card */}
                <div
                  className="rounded-2xl p-6 w-full border border-[#e8dfc8] shadow-sm"
                  style={{ background: step.color }}
                >
                  <span className="text-[#7a6b52] text-xs tracking-widest uppercase">
                    {step.time}
                  </span>
                  <h3
                    className="text-[#2c1f0e] mt-2 mb-3"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#7a6b52] text-sm" style={{ lineHeight: 1.7 }}>
                    {step.desc}
                  </p>
                </div>
                {/* Step number */}
                <div className="mt-4 w-7 h-7 rounded-full bg-[#3a5e2f] text-white text-xs flex items-center justify-center">
                  {i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Banner strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-20 rounded-3xl overflow-hidden relative"
          style={{ minHeight: "280px" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1573731281021-d1cc573b3310?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWlyeSUyMGZhcm0lMjBncmVlbiUyMHBhc3R1cmUlMjBjb3dzfGVufDF8fHx8MTc4MDk0NzI0M3ww&ixlib=rb-4.1.0&q=80&w=1400')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2c1f0e]/80 to-[#3a5e2f]/60" />
          <div className="relative z-10 p-12 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h3
                className="text-white mb-3"
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                }}
              >
                ¿Dónde estamos?
              </h3>
              <p className="text-white/80 mb-4" style={{ lineHeight: 1.7 }}>
                Nos encontramos en la vereda El Roble, vía Salento km 12,
                municipio de Salento, Quindío, Colombia. En el corazón del
                Eje Cafetero, rodeados de montañas y praderas verdes.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 text-white/90">
                  📍 Salento, Quindío
                </span>
                <span className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 text-white/90">
                  🏔️ 2.400 m.s.n.m.
                </span>
                <span className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 text-white/90">
                  🌿 Eje Cafetero
                </span>
              </div>
            </div>
            {/* Mini map embed placeholder */}
            <div className="shrink-0 w-full md:w-64 h-44 rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl">
              <iframe
                title="Ubicación Hacienda Maria Jose"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31766.060398890037!2d-75.57515!3d4.63799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38878b48bdfe89%3A0x3d7ababf0e6c31!2sSalento%2C%20Quind%C3%ADo!5e0!3m2!1ses!2sco!4v1699999999999"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
