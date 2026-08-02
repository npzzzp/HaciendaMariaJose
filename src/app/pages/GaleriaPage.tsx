import { useEffect } from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { GaleriaSection } from "../components/GaleriaSection";

export function GaleriaPage() {
  // Volver al top al entrar
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-[#f6f1e8]">
      {/* Header de página */}
      <div className="bg-[#1a1208] pt-24 pb-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm transition-colors mb-8"
            style={{ fontFamily: "Georgia, serif" }}
          >
            <ArrowLeft size={15} />
            Volver a la hacienda
          </Link>
          <p className="text-[#b87c2a] text-xs tracking-widest uppercase mb-3">
            Hacienda Maria Jose
          </p>
          <h1
            className="text-[#f6f1e8]"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1.1,
              fontWeight: 700,
            }}
          >
            Galería
          </h1>
          <p className="text-[#6b5840] mt-4 max-w-lg text-sm" style={{ lineHeight: 1.8 }}>
            Fotos y videos de la finca — la inauguración, el trabajo diario y
            las personas que hacen posible Hacienda Maria Jose.
          </p>
        </div>
      </div>

      {/* Secciones */}
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <GaleriaSection
          numero="01"
          categoria="inauguracion"
          titulo="La Inauguración"
          subtitulo="El día que abrimos las puertas. El comienzo de todo."
        />
        <GaleriaSection
          numero="02"
          categoria="actividades"
          titulo="Actividades del Día a Día"
          subtitulo="El ordeño, el campo, la producción. Lo que pasa cada mañana en la finca."
        />
        <GaleriaSection
          numero="03"
          categoria="equipo"
          titulo="Trabajadores y Proveedores"
          subtitulo="Las personas que trabajan con nosotros y hacen posible cada producto."
        />
      </div>

      {/* Footer mínimo */}
      <footer className="mt-24 border-t border-black/8 py-8 px-6 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6b5840]">
          <span style={{ fontFamily: "Georgia, serif" }}>Hacienda Maria Jose</span>
          <span>Campo de la Cruz, Atlántico · Colombia</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
