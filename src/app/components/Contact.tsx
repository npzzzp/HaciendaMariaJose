import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Instagram, MessageCircle, ExternalLink } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <section id="contacto" className="py-24 bg-[#faf7f0]" ref={ref}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#3a5e2f] text-sm tracking-widest uppercase">
              Contáctanos
            </span>
            <h2
              className="text-[#2c1f0e] mt-3 mb-4"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
              }}
            >
              Escríbenos Directamente
            </h2>
            <p
              className="text-[#7a6b52] mb-14 max-w-lg mx-auto"
              style={{ lineHeight: 1.8 }}
            >
              Para pedidos, consultas o simplemente para saludarnos, estamos al
              otro lado del mensaje. Sin formularios, sin esperas.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/573134567890"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-4 px-10 py-6 rounded-2xl border border-[#e8dfc8] bg-[#fff8ee] shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 shadow-md"
                style={{ background: "#25d366" }}
              >
                <MessageCircle size={28} color="white" />
              </div>
              <div className="text-left">
                <p
                  className="text-[#2c1f0e]"
                  style={{ fontFamily: "Georgia, serif", fontSize: "1.15rem" }}
                >
                  WhatsApp
                </p>
                <p className="text-[#7a6b52] text-sm mt-0.5">+57 313 456 7890</p>
              </div>
              <ExternalLink
                size={16}
                className="text-[#b0a088] ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://instagram.com/fincalapradera"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-4 px-10 py-6 rounded-2xl border border-[#e8dfc8] bg-[#fff8ee] shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 shadow-md"
                style={{
                  background:
                    "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                }}
              >
                <Instagram size={28} color="white" />
              </div>
              <div className="text-left">
                <p
                  className="text-[#2c1f0e]"
                  style={{ fontFamily: "Georgia, serif", fontSize: "1.15rem" }}
                >
                  Instagram
                </p>
                <p className="text-[#7a6b52] text-sm mt-0.5">@fincalapradera</p>
              </div>
              <ExternalLink
                size={16}
                className="text-[#b0a088] ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2c1f0e] text-white/70 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#3a5e2f] flex items-center justify-center">
              <span className="text-sm">🌿</span>
            </div>
            <span style={{ fontFamily: "Georgia, serif", color: "white" }}>
              Finca La Pradera
            </span>
          </div>
          <p>© 2024 Finca La Pradera. Todos los derechos reservados.</p>
          <p>Hecho con amor desde el Quindío 🇨🇴</p>
        </div>
      </footer>
    </>
  );
}
