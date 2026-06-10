import { useRef, useEffect, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Play, X, ChevronLeft, ChevronRight, Loader2, Video } from "lucide-react";
import { supabase, type MediaItem } from "../../lib/supabase";

export function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [videos, setVideos] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    async function fetchVideos() {
      const { data, error } = await supabase
        .from("media")
        .select("*")
        .eq("tipo", "video")
        .order("orden", { ascending: true });

      if (error) {
        setError("No se pudieron cargar los videos.");
      } else {
        setVideos(data as MediaItem[]);
      }
      setLoading(false);
    }
    fetchVideos();
  }, []);

  const close = () => setActive(null);
  const prev = () => setActive((i) => (i! > 0 ? i! - 1 : videos.length - 1));
  const next = () => setActive((i) => (i! < videos.length - 1 ? i! + 1 : 0));

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (active === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active, videos.length]);

  return (
    <>
      {/* Separador visual */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#c8a96e]/30 to-transparent" />

      <section id="galeria" className="py-24 bg-[#f5f0e8]" ref={ref}>
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            {/* Icono + etiqueta */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#3a5e2f]/10 text-[#3a5e2f] flex items-center justify-center">
                <Video size={18} />
              </div>
              <span
                className="text-[#3a5e2f] text-xs tracking-widest uppercase"
                style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
              >
                La Finca en Movimiento
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2
                className="text-[#2c1f0e]"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  fontWeight: 600,
                  lineHeight: 1.1,
                }}
              >
                Actividades del
                <br />
                <em>Día a Día</em>
              </h2>
              <p
                className="text-[#7a6b52] max-w-sm"
                style={{ fontFamily: "'Nunito', sans-serif", lineHeight: 1.75, fontWeight: 300, fontSize: "0.95rem" }}
              >
                Lo que pasa cada mañana en Hacienda Maria Jose — el ordeño,
                el campo y el trabajo que hay detrás de cada producto.
              </p>
            </div>

            {/* Línea decorativa */}
            <div className="mt-8 h-px bg-gradient-to-r from-[#3a5e2f]/30 via-[#c8a96e]/20 to-transparent" />
          </motion.div>

          {/* Loading */}
          {loading && (
            <div className="flex justify-center py-20">
              <Loader2 size={36} className="text-[#3a5e2f] animate-spin" />
            </div>
          )}

          {/* Error */}
          {error && (
            <p className="text-center text-[#7a6b52] py-12"
              style={{ fontFamily: "'Nunito', sans-serif" }}>
              {error}
            </p>
          )}

          {/* Empty */}
          {!loading && !error && videos.length === 0 && (
            <p className="text-center text-[#7a6b52] py-12"
              style={{ fontFamily: "'Nunito', sans-serif" }}>
              Próximamente videos de la finca.
            </p>
          )}

          {/* Grid de videos */}
          {!loading && videos.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, i) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  onClick={() => setActive(i)}
                  className="group cursor-pointer"
                >
                  {/* Thumbnail */}
                  <div className="relative rounded-2xl overflow-hidden bg-[#2c1f0e]/5 aspect-video shadow-md group-hover:shadow-xl transition-shadow duration-300">
                    <video
                      src={video.url}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                      preload="metadata"
                    />

                    {/* Overlay oscuro */}
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors duration-300" />

                    {/* Botón play centrado */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl"
                      >
                        <Play size={26} className="text-[#3a5e2f] ml-1" fill="#3a5e2f" />
                      </motion.div>
                    </div>


                  </div>


                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {active !== null && videos[active] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
              onClick={close}
            >
              <motion.div
                initial={{ scale: 0.93, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.93, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-4xl"
                onClick={(e) => e.stopPropagation()}
              >
                <video
                  key={videos[active].url}
                  src={videos[active].url}
                  controls
                  autoPlay
                  className="w-full rounded-2xl shadow-2xl"
                  style={{ maxHeight: "80vh" }}
                />


              </motion.div>

              {/* Cerrar */}
              <button
                onClick={close}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <X size={20} />
              </button>

              {/* Anterior */}
              {videos.length > 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); prev(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <ChevronLeft size={22} />
                </button>
              )}

              {/* Siguiente */}
              {videos.length > 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); next(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <ChevronRight size={22} />
                </button>
              )}

              {/* Contador */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {videos.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setActive(i); }}
                    className={`w-2 h-2 rounded-full transition-all ${i === active ? "bg-white w-5" : "bg-white/30"}`}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}