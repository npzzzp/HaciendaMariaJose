import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: "#faf7f0", fontFamily: "'Nunito', system-ui, sans-serif" }}>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Gallery />
      <Contact />
    </div>
  );
}