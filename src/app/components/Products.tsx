import { useRef } from "react";
import { motion, useInView } from "motion/react";

const galleryItems = [
  {
    id: 1,
    label: "Producción de leche",
    caption: "Campesinos y familias de la zona aportando leche fresca cada mañana.",
    image: "/assets/photos/IMG-20260608-WA0047.jpg",
    span: "row-span-2",
  },
  {
    id: 2,
    label: "Trabajo en campo",
    caption: "La gente y el lugar detrás del sabor de nuestra finca.",
    image: "/assets/photos/4987818660302883936.jpg",
    span: "",
  },
  {
    id: 3,
    label: "Equipo local",
    caption: "Hombres y mujeres que hacen posible la producción diaria.",
    image: "/assets/photos/IMG-20260608-WA0050.jpg",
    span: "",
  },
  {
    id: 4,
    label: "Proveedor de leche",
    caption: "Familias campesinas que confían en Hacienda Maria Jose.",
    image: "/assets/photos/IMG-20260608-WA0053.jpg",
    span: "",
  },
  {
    id: 5,
    label: "Sabor de la tierra",
    caption: "Un vistazo al entorno y la vida del campo que da identidad a nuestra producción.",
    image: "/assets/photos/4987818660302883935.jpg",
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

        {/* Intro copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-16 max-w-3xl rounded-3xl border border-[#e8dfc8] bg-[#fff8ee] p-8 text-center shadow-sm"
        >
          <h3
            className="text-[#2c1f0e] mb-3"
            style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.3rem, 3vw, 2rem)" }}
          >
            Producción de queso y leche, con el corazón de la finca
          </h3>
          <p className="text-[#7a6b52]" style={{ lineHeight: 1.8 }}>
            En Hacienda Maria Jose trabajamos la leche y el queso como centro de nuestra producción familiar, con dedicación diaria y un enfoque cercano a la gente y al campo.
          </p>
        </motion.div>

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
