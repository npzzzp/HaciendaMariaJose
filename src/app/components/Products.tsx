import { useRef } from "react";
import { motion, useInView } from "motion/react";

const galleryItems = [
  {
    id: 1,
    label: "Gente y campo",
    caption: "La vida diaria de la finca y el trabajo que sostiene el sabor.",
    image: "/assets/photos/4987818660302883935.jpg",
    span: "row-span-2",
  },
  {
    id: 2,
    label: "Lugar detrás del sabor",
    caption: "Los paisajes y espacios donde nace nuestra leche y nuestro queso.",
    image: "/assets/photos/4987818660302883936.jpg",
    span: "",
  },
  {
    id: 3,
    label: "Praderas y ganado",
    caption: "El entorno natural que alimenta el bienestar de nuestras vacas.",
    image: "/assets/photos/4987818660302883934.jpg",
    span: "",
  },
  {
    id: 4,
    label: "Trabajo en finca",
    caption: "La dedicación de cada jornada en el cuidado de la leche y el campo.",
    image: "/assets/photos/4987818660302883933.jpg",
    span: "",
  },
  {
    id: 5,
    label: "Sabor de la tierra",
    caption: "Un vistazo al entorno que da identidad a nuestra producción.",
    image: "/assets/photos/4987818660302883932.jpg",
    span: "",
  },
];

export function Products() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="productos" className="py-24 bg-[#f0ebe0]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <span className="text-[#3a5e2f] text-sm tracking-widest uppercase">
            Lo que Hacemos
          </span>
          <h2
            className="text-[#2c1f0e] mt-3"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
            }}
          >
            Queso y Leche, Nada Más
          </h2>
        </motion.div>

        {/* Two pillars */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {[
            {
              emoji: "🧀",
              title: "Quesos Artesanales",
              desc: "Elaboramos quesos frescos y maduros usando leche recién ordeñada y recetas transmitidas de generación en generación. Sin conservantes, sin colorantes, solo el sabor verdadero del campo.",
              bg: "#fff8ee",
              border: "#e8dfc8",
            },
            {
              emoji: "🥛",
              title: "Leche Fresca",
              desc: "Nuestra leche entera llega directamente desde la ordeña matutina, pasteurizada en finca el mismo día. Cremosa, natural y con todo el valor nutricional intacto.",
              bg: "#edf4ff",
              border: "#c8d8f0",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="rounded-2xl p-8 border"
              style={{ background: item.bg, borderColor: item.border }}
            >
              <span style={{ fontSize: "2.5rem" }}>{item.emoji}</span>
              <h3
                className="text-[#2c1f0e] mt-4 mb-3"
                style={{ fontFamily: "Georgia, serif", fontSize: "1.3rem" }}
              >
                {item.title}
              </h3>
              <p className="text-[#7a6b52]" style={{ lineHeight: 1.8 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Section title for gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-10"
        >
          <h3
            className="text-[#2c1f0e]"
            style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.3rem, 3vw, 2rem)" }}
          >
            La Gente y el Lugar Detrás del Sabor
          </h3>
          <p className="text-[#7a6b52] mt-2 text-sm">
            Campesinos proveedores, vacas felices y una finca con alma propia.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group cursor-default ${
                item.id === 1 ? "row-span-2" : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-sm font-medium">{item.label}</p>
                <p className="text-white/80 text-xs mt-0.5" style={{ lineHeight: 1.4 }}>
                  {item.caption}
                </p>
              </div>
              {/* Always-visible label on mobile */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/50 to-transparent md:hidden">
                <p className="text-white text-xs">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
