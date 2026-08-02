import { useRef, useEffect, useState, useCallback } from "react";
import { useInView } from "motion/react";
import { motion, AnimatePresence } from "motion/react";
import { Play, X, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { fetchMedia, type MediaItem, type Categoria } from "../../lib/supabase";

// ─── Video thumbnail — preload="none" hasta que el usuario interactúe ────────
function VideoThumb({ src, onClick }: { src: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative w-full h-full group/play focus:outline-none"
      aria-label="Reproducir video"
    >
      <video
        src={src}
        preload="none"
        muted
        playsInline
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30 group-hover/play:bg-black/45 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover/play:scale-110 transition-transform">
          <Play size={22} className="text-[#1a1208] ml-1" fill="#1a1208" />
        </div>
      </div>
    </button>
  );
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: MediaItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const item = items[index];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  // Bloquear scroll del body
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.93 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.93 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-5xl max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {item.tipo === "video" ? (
          <video
            key={item.url}
            src={item.url}
            controls
            autoPlay
            playsInline
            className="rounded-xl w-full max-h-[80vh] object-contain"
          />
        ) : (
          <img
            src={item.url}
            alt={item.titulo ?? ""}
            className="rounded-xl w-full max-h-[80vh] object-contain"
          />
        )}
        {item.titulo && (
          <p className="mt-3 text-white/70 text-sm text-center"
            style={{ fontFamily: "Georgia, serif" }}>
            {item.titulo}
          </p>
        )}
      </motion.div>

      {/* Controles */}
      <button onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
        <X size={18} />
      </button>
      {items.length > 1 && (
        <>
          <button onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
            <ChevronRight size={20} />
          </button>
          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {items.map((_, i) => (
              <div key={i}
                className={`rounded-full transition-all ${i === index ? "bg-white w-4 h-1.5" : "bg-white/30 w-1.5 h-1.5"}`}
              />
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
}

// ─── Grid item ────────────────────────────────────────────────────────────────
function GridItem({
  item,
  index,
  inView,
  onOpen,
}: {
  item: MediaItem;
  index: number;
  inView: boolean;
  onOpen: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: (index % 12) * 0.04 }}
      className="relative rounded-xl overflow-hidden bg-[#ede8d8] group"
      style={{ aspectRatio: "4/3" }}
    >
      {item.tipo === "video" ? (
        <VideoThumb src={item.url} onClick={onOpen} />
      ) : (
        <button onClick={onOpen} className="w-full h-full focus:outline-none">
          <img
            src={item.url}
            alt={item.titulo ?? ""}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />
          {item.titulo && (
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <p className="text-white text-xs text-left"
                style={{ fontFamily: "Georgia, serif" }}>{item.titulo}</p>
            </div>
          )}
        </button>
      )}
    </motion.div>
  );
}

// ─── Sección principal exportable ─────────────────────────────────────────────
interface GaleriaSectionProps {
  categoria: Categoria;
  titulo: string;
  subtitulo: string;
  numero: string;
}

export function GaleriaSection({ categoria, titulo, subtitulo, numero }: GaleriaSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [items, setItems] = useState<MediaItem[]>([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [initialLoaded, setInitialLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  // Carga inicial — solo cuando la sección entra al viewport
  useEffect(() => {
    if (!inView || initialLoaded) return;
    load(0);
  }, [inView]);

  const load = useCallback(async (pageNum: number) => {
    setLoading(true);
    setError(null);
    try {
      const { items: newItems, hasMore: more } = await fetchMedia(categoria, pageNum);
      setItems((prev) => pageNum === 0 ? newItems : [...prev, ...newItems]);
      setHasMore(more);
      setPage(pageNum);
      setInitialLoaded(true);
    } catch {
      setError("No se pudo cargar el contenido.");
    } finally {
      setLoading(false);
    }
  }, [categoria]);

  const loadMore = () => load(page + 1);

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((i) => (i! > 0 ? i! - 1 : items.length - 1));
  const next = () => setLightbox((i) => (i! < items.length - 1 ? i! + 1 : 0));

  return (
    <div ref={ref} className="py-16 md:py-24 border-t border-black/8 first:border-t-0">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65 }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14"
      >
        <div>
          <span className="text-[#b87c2a] text-xs tracking-widest uppercase">
            {numero}
          </span>
          <h2
            className="text-[#1a1208] mt-2"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
              lineHeight: 1.2,
            }}
          >
            {titulo}
          </h2>
        </div>
        <p className="text-[#6b5840] text-sm max-w-xs" style={{ lineHeight: 1.7 }}>
          {subtitulo}
        </p>
      </motion.div>

      {/* Cargando inicial */}
      {loading && items.length === 0 && (
        <div className="flex justify-center py-16">
          <Loader2 size={32} className="text-[#b87c2a] animate-spin" />
        </div>
      )}

      {/* Error */}
      {error && (
        <p className="text-center text-[#6b5840] py-12 text-sm"
          style={{ fontFamily: "Georgia, serif" }}>
          {error}
        </p>
      )}

      {/* Vacío */}
      {!loading && !error && initialLoaded && items.length === 0 && (
        <p className="text-center text-[#6b5840] py-12 text-sm"
          style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}>
          Próximamente contenido en esta sección.
        </p>
      )}

      {/* Grid */}
      {items.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {items.map((item, i) => (
            <GridItem
              key={item.id}
              item={item}
              index={i}
              inView={inView}
              onOpen={() => openLightbox(i)}
            />
          ))}
        </div>
      )}

      {/* Cargar más */}
      {hasMore && initialLoaded && items.length > 0 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={loadMore}
            disabled={loading}
            className="px-8 py-3 rounded-full border border-[#1a1208]/20 text-[#1a1208] text-sm hover:bg-[#1a1208] hover:text-[#f6f1e8] transition-all disabled:opacity-40"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 size={14} className="animate-spin" /> Cargando...
              </span>
            ) : (
              "Ver más"
            )}
          </button>
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <Lightbox
            items={items}
            index={lightbox}
            onClose={closeLightbox}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
