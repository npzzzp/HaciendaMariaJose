import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Milk, ChefHat, Truck, Leaf } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    label: "Colaboradores del campo",
    caption: "Campesinos de la zona aportando leche fresca cada mañana.",
    image: "https://nwopkcvdgbwomplkfwdx.supabase.co/storage/v1/object/public/media/photos/IMG-20260608-WA0047.jpg",
    span: "row-span-2",
  },
  {
    id: 2,
    label: "Nuestros animales",
    caption: "Vacas que dan vida a nuestra leche fresca.",
    image: "https://nwopkcvdgbwomplkfwdx.supabase.co/storage/v1/object/public/media/photos/4987818660302883936.jpg",
    span: "",
  },
  {
    id: 3,
    label: "Equipo local",
    caption: "Personas que hacen posible la producción diaria.",
    image: "https://nwopkcvdgbwomplkfwdx.supabase.co/storage/v1/object/public/media/photos/IMG-20260608-WA0050.jpg",
    span: "",
  },
  {
    id: 4,
    label: "Proveedor de leche",
    caption: "Proveedores que confían en Hacienda Maria Jose.",
    image: "https://nwopkcvdgbwomplkfwdx.supabase.co/storage/v1/object/public/media/photos/IMG-20260608-WA0053.jpg",
    span: "",
  },
  {
    id: 5,
    label: "Sabor de la tierra",
    caption: "El entorno y la vida del campo que dan identidad a nuestra producción.",
    image: "https://nwopkcvdgbwomplkfwdx.supabase.co/storage/v1/object/public/media/photos/4987818660302883935.jpg",
    span: "",
  },
];

const highlights = [
  {
    icon: <Milk size={20} />,
    title: "Leche Fresca",
    desc: "Recogida cada mañana directamente de nuestro ganado. Sin pasteurizar industrialmente ni almacenar días.",
  },
  {
    icon: <ChefHat size={20} />,
    title: "Queso Artesanal",
    desc: "Elaborado a mano con recetas propias. Queso blanco fresco, firme y de sabor genuino de finca.",
  },
  {
    icon: <Leaf size={20} />,
    title: "Sin Aditivos",
    desc: "Solo leche, sal y cuajo natural. Sin conservantes ni procesos industriales que cambien el sabor.",
  },
  {
    icon: <Truck size={20} />,
    title: "Directo de la Finca",
    desc: "Vendemos directo, sin intermediarios. Sabes exactamente de dónde viene lo que comes.",
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
          className="text-center mb-4"
        >
          <span className="text-[#3a5e2f] text-xs tracking-widest uppercase"
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}>
            Lo que Hacemos
          </span>
          <h2
            className="text-[#2c1f0e] mt-3"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 600,
            }}
          >
            Producción de Queso y Leche
          </h2>
        </motion.div>

        {/* Intro copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="text-[#7a6b52]"
            style={{ fontFamily: "'Nunito', sans-serif", lineHeight: 1.85, fontSize: "1.05rem", fontWeight: 300 }}>
            En Hacienda Maria Jose nos dedicamos a dos cosas y las hacemos bien:
            producir leche fresca y elaborar queso artesanal. Todo sale de nuestras
            manos, de nuestra finca, del mismo lugar de siempre.
          </p>
        </motion.div>

        {/* Product highlights grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16"
        >
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
              className="bg-[#fff8ee] rounded-2xl p-6 border border-[#e8dfc8] shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-full bg-[#3a5e2f]/10 text-[#3a5e2f] flex items-center justify-center mb-4">
                {h.icon}
              </div>
              <h3 className="text-[#2c1f0e] mb-2"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600, fontSize: "1.05rem" }}>
                {h.title}
              </h3>
              <p className="text-[#7a6b52] text-sm"
                style={{ fontFamily: "'Nunito', sans-serif", lineHeight: 1.7, fontWeight: 300 }}>
                {h.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Section title for gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-10"
        >
          <h3
            className="text-[#2c1f0e]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.3rem, 3vw, 1.8rem)", fontWeight: 600 }}
          >
            La Gente y el Lugar Detrás del Sabor
          </h3>
          <p className="text-[#7a6b52] mt-2 text-sm"
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400 }}>
            Campesinos proveedores, vacas y una finca con alma propia.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
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
                <p className="text-white text-sm font-medium"
                  style={{ fontFamily: "'Nunito', sans-serif" }}>{item.label}</p>
                <p className="text-white/80 text-xs mt-0.5"
                  style={{ fontFamily: "'Nunito', sans-serif", lineHeight: 1.4 }}>
                  {item.caption}
                </p>
              </div>
              {/* Always-visible label on mobile */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/50 to-transparent md:hidden">
                <p className="text-white text-xs" style={{ fontFamily: "'Nunito', sans-serif" }}>{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}