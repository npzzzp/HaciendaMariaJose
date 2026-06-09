import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Instagram, MessageCircle, ExternalLink, MapPin } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <section id="contacto" className="py-24 bg-[#faf7f0]" ref={ref}>
        <div className="max-w-5xl mx-auto px-6">

          {/* Logo destacado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex justify-center mb-14"
          >
            <div className="relative">
              <div className="w-44 h-44 rounded-full bg-[#fff8ee] border-4 border-[#e8dfc8] shadow-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/logo/Logo_FincaMJ.svg"
                  alt="Logo Hacienda Maria Jose"
                  className="w-32 h-32 object-contain"
                />
              </div>
              {/* Anillo decorativo exterior */}
              <div className="absolute inset-0 rounded-full border-2 border-[#3a5e2f]/20 scale-110 pointer-events-none" />
            </div>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-center mb-14"
          >
            <span
              className="text-[#3a5e2f] text-xs tracking-widest uppercase"
              style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
            >
              Contáctanos
            </span>
            <h2
              className="text-[#2c1f0e] mt-3 mb-4"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                fontWeight: 600,
              }}
            >
              Escríbenos Directamente
            </h2>
            <p
              className="text-[#7a6b52] max-w-lg mx-auto"
              style={{ fontFamily: "'Nunito', sans-serif", lineHeight: 1.8, fontWeight: 300 }}
            >
              Para pedidos, consultas o simplemente para saludarnos, estamos al
              otro lado del mensaje. Sin formularios, sin esperas.
            </p>
          </motion.div>

          {/* Contacto + Ubicación en dos columnas */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Columna izquierda: canales */}
            <div className="flex flex-col gap-5">
              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/573103635071"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.25 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-4 px-8 py-5 rounded-2xl border border-[#e8dfc8] bg-[#fff8ee] shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 shadow-md"
                  style={{ background: "#25d366" }}
                >
                  <MessageCircle size={26} color="white" />
                </div>
                <div className="text-left flex-1">
                  <p
                    className="text-[#2c1f0e]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.1rem", fontWeight: 600 }}
                  >
                    WhatsApp
                  </p>
                  <p className="text-[#7a6b52] text-sm mt-0.5"
                    style={{ fontFamily: "'Nunito', sans-serif" }}>+57 310 363 5071</p>
                </div>
                <ExternalLink
                  size={16}
                  className="text-[#b0a088] opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://instagram.com/hdamariajose"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.38 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-4 px-8 py-5 rounded-2xl border border-[#e8dfc8] bg-[#fff8ee] shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 shadow-md"
                  style={{
                    background:
                      "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                  }}
                >
                  <Instagram size={26} color="white" />
                </div>
                <div className="text-left flex-1">
                  <p
                    className="text-[#2c1f0e]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.1rem", fontWeight: 600 }}
                  >
                    Instagram
                  </p>
                  <p className="text-[#7a6b52] text-sm mt-0.5"
                    style={{ fontFamily: "'Nunito', sans-serif" }}>@hdamariajose</p>
                </div>
                <ExternalLink
                  size={16}
                  className="text-[#b0a088] opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </motion.a>
            </div>

            {/* Columna derecha: Ubicación */}
            <motion.a
              href="https://www.google.com/maps/search/Campo+de+la+Cruz,+Atlántico,+Colombia"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex flex-col rounded-2xl border border-[#e8dfc8] bg-[#fff8ee] shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
            >
              {/* Mini mapa embed */}
              <div className="relative flex-1 min-h-[180px] pointer-events-none">
                <iframe
                  title="Ubicación Campo de la Cruz"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31376.77!2d-74.8833!3d10.3747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef5d7a1a1a1a1a1%3A0x1!2sCampo+de+la+Cruz%2C+Atl%C3%A1ntico!5e0!3m2!1ses!2sco!4v1699999999999"
                  width="100%"
                  height="100%"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0, minHeight: "180px" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {/* Overlay hover */}
                <div className="absolute inset-0 bg-[#3a5e2f]/0 group-hover:bg-[#3a5e2f]/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#3a5e2f] text-white text-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
                    style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}>
                    <ExternalLink size={14} /> Abrir en Google Maps
                  </span>
                </div>
              </div>

              {/* Info pie */}
              <div className="px-6 py-4 flex items-center gap-3 border-t border-[#e8dfc8]">
                <div className="w-9 h-9 rounded-full bg-[#3a5e2f]/10 text-[#3a5e2f] flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[#2c1f0e] text-sm"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600 }}>
                    Campo de la Cruz, Atlántico
                  </p>
                  <p className="text-[#7a6b52] text-xs mt-0.5"
                    style={{ fontFamily: "'Nunito', sans-serif" }}>
                    Colombia · Toca para abrir Maps
                  </p>
                </div>
              </div>
            </motion.a>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2c1f0e] text-white/70 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          {/* Logo + nombre */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#fff8ee] border-2 border-[#c8a96e]/40 flex items-center justify-center overflow-hidden shadow-md">
              <img
                src="/assets/logo/Logo_FincaMJ.svg"
                alt="Logo Hacienda Maria Jose"
                className="w-9 h-9 object-contain"
              />
            </div>
            <div>
              <p style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "white", fontSize: "1rem", fontWeight: 600 }}>
                Hacienda Maria Jose
              </p>
              <p className="text-white/50 text-xs mt-0.5"
                style={{ fontFamily: "'Nunito', sans-serif" }}>
                Campo de la Cruz · Atlántico
              </p>
            </div>
          </div>
          <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 300 }}>
            Hecho con amor desde Campo de la Cruz.
          </p>
        </div>
      </footer>
    </>
  );
}