import { useRef } from "react";
import { motion, useInView } from "motion/react";

const IMG_LECHE = "https://nwopkcvdgbwomplkfwdx.supabase.co/storage/v1/object/public/media/photos/IMG-20260608-WA0047.jpg";
const IMG_QUESO = "https://nwopkcvdgbwomplkfwdx.supabase.co/storage/v1/object/public/media/photos/IMG-20260608-WA0053.jpg";

export function Hacemos() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="hacemos" className="bg-[#1a1208]" ref={ref}>
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="text-[#b87c2a] text-xs tracking-widest uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Producción
            </span>
            <h2
              className="text-[#f6f1e8] mt-3"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                lineHeight: 1.15,
              }}
            >
              Lo que Hacemos
            </h2>
          </div>
          <p className="text-[#6b5840] max-w-sm text-sm"
            style={{ lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif" }}>
            En Hacienda Maria Jose nos dedicamos a dos cosas y las hacemos bien:
            producir leche fresca y elaborar queso artesanal.
          </p>
        </motion.div>
      </div>

      {/* Two product panels */}
      <div className="grid md:grid-cols-2">
        {/* Leche Fresca */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative overflow-hidden group"
          style={{ minHeight: "520px" }}
        >
          <img
            src={IMG_LECHE}
            alt="Leche fresca"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <span className="text-[#b87c2a] text-xs tracking-widest uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>01</span>
            <h3
              className="text-white mt-2 mb-4"
              style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
            >
              Leche Fresca
            </h3>
            <p className="text-white/70 text-sm max-w-xs"
              style={{ lineHeight: 1.85, fontFamily: "'DM Sans', sans-serif" }}>
              Recogida cada mañana directamente de nuestro ganado. Sin pasteurizar
              industrialmente ni almacenar días. Fresca de origen, del mismo día.
            </p>
          </div>
        </motion.div>

        {/* Queso Artesanal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative overflow-hidden group"
          style={{ minHeight: "520px" }}
        >
          <img
            src={IMG_QUESO}
            alt="Queso artesanal"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <span className="text-[#b87c2a] text-xs tracking-widest uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>02</span>
            <h3
              className="text-white mt-2 mb-4"
              style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
            >
              Queso Artesanal
            </h3>
            <p className="text-white/70 text-sm max-w-xs"
              style={{ lineHeight: 1.85, fontFamily: "'DM Sans', sans-serif" }}>
              Elaborado a mano con recetas propias. Queso blanco fresco, firme y
              de sabor genuino de finca. Sin aditivos — solo leche, sal y cuajo
              natural.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom strip */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 border-t border-white/8">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {[
            { label: "Sin Aditivos", desc: "Solo leche, sal y cuajo natural." },
            { label: "Sin Conservantes", desc: "Ningún proceso industrial altera el sabor." },
            { label: "Directo de la Finca", desc: "Sin intermediarios. Trazabilidad total." },
            { label: "Producción Familiar", desc: "Todo sale de nuestras manos, del mismo lugar." },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
              className="border-l border-white/12 pl-5"
            >
              <p className="text-[#f6f1e8] mb-1.5"
                style={{ fontFamily: "Georgia, serif", fontSize: "0.95rem" }}>
                {item.label}
              </p>
              <p className="text-[#6b5840] text-xs"
                style={{ lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif" }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
