import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Instagram, MessageCircle, MapPin, ExternalLink } from "lucide-react";

const LOGO = "https://nwopkcvdgbwomplkfwdx.supabase.co/storage/v1/object/public/media/logo/Logo_FincaMJ.svg";
const SENA = "https://nwopkcvdgbwomplkfwdx.supabase.co/storage/v1/object/public/media/logo/sena-seeklogo.png";
const FONDO = "https://nwopkcvdgbwomplkfwdx.supabase.co/storage/v1/object/public/media/logo/fondo-emprender-sena-seeklogo.png";

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <section id="contacto" className="bg-[#1a1208]" ref={ref}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left: copy */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75 }}
            >
              <span className="text-[#b87c2a] text-xs tracking-widest uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Contacto
              </span>
              <h2
                className="text-[#f6f1e8] mt-4 mb-6"
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  lineHeight: 1.2,
                }}
              >
                Escríbenos<br />Directamente
              </h2>
              <p className="text-[#6b5840] mb-10"
                style={{ lineHeight: 1.85, fontSize: "1.02rem", fontFamily: "'DM Sans', sans-serif" }}>
                Para pedidos, consultas o simplemente para saludarnos, estamos al
                otro lado del mensaje. Sin formularios, sin esperas.
              </p>

              {/* Ubicación */}
              <a
                href="https://www.google.com/maps/search/Campo+de+la+Cruz,+Atlántico,+Colombia"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-[#6b5840] hover:text-[#b87c2a] transition-colors"
              >
                <MapPin size={16} />
                <span className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Campo de la Cruz, Atlántico · Ver en Maps
                </span>
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </motion.div>

            {/* Right: contact buttons */}
            <div className="flex flex-col gap-4">
              <motion.a
                href="https://wa.me/573103635071"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.15 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-5 p-6 rounded-2xl border border-white/8 bg-white/4 hover:bg-white/8 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "#25d366" }}>
                  <MessageCircle size={26} color="white" />
                </div>
                <div>
                  <p className="text-[#f6f1e8] mb-0.5"
                    style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem" }}>
                    WhatsApp
                  </p>
                  <p className="text-[#6b5840] text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    +57 310 363 5071
                  </p>
                </div>
                <span className="ml-auto text-[#6b5840] group-hover:text-[#b87c2a] transition-colors text-lg">→</span>
              </motion.a>

              <motion.a
                href="https://instagram.com/hdamariajose"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.28 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-5 p-6 rounded-2xl border border-white/8 bg-white/4 hover:bg-white/8 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "linear-gradient(135deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)" }}>
                  <Instagram size={26} color="white" />
                </div>
                <div>
                  <p className="text-[#f6f1e8] mb-0.5"
                    style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem" }}>
                    Instagram
                  </p>
                  <p className="text-[#6b5840] text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    @hdamariajose
                  </p>
                </div>
                <span className="ml-auto text-[#6b5840] group-hover:text-[#b87c2a] transition-colors text-lg">→</span>
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/6 py-10">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo + nombre */}
            <div className="flex items-center gap-3">
              <img src={LOGO} alt="Logo" className="h-9 w-9 object-contain rounded-full bg-white/10 p-1" />
              <div>
                <p style={{ fontFamily: "Georgia, serif", color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", fontWeight: 700 }}>
                  Hacienda Maria Jose
                </p>
                <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif" }}>
                  Campo de la Cruz · Atlántico
                </p>
              </div>
            </div>

            <span className="text-xs" style={{ color: "rgba(255,255,255,0.25)", fontFamily: "'DM Sans', sans-serif" }}>
              © {new Date().getFullYear()} Todos los derechos reservados
            </span>

            {/* Con el apoyo de */}
            <div className="flex flex-col items-center md:items-end gap-1.5">
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)", fontFamily: "'DM Sans', sans-serif" }}>
                Con el apoyo de
              </p>
              <div className="flex items-center gap-3">
                <img src={SENA} alt="SENA" className="h-6 object-contain brightness-0 invert opacity-30" />
                <div className="w-px h-4 bg-white/15" />
                <img src={FONDO} alt="Fondo Emprender" className="h-6 object-contain brightness-0 invert opacity-30" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
