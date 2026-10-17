import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import Contacto from "@/components/Contacto"; // <-- Importamos

export default function Home() {
  return (
    <main className="relative bg-brand-dark selection:bg-brand-teal selection:text-brand-dark">
      <Navbar />
      
      <div className="flex flex-col">
        <Hero />
        <Servicios />
        <Contacto />
      </div>
    </main>
  );
}