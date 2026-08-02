import { BrowserRouter, Routes, Route } from "react-router";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Hacemos } from "./components/Hacemos";
import { Contact } from "./components/Contact";
import { GaleriaPage } from "./pages/GaleriaPage";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Hacemos />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen" style={{ background: "#f6f1e8" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/galeria" element={<GaleriaPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
