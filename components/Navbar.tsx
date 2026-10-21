"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { LogoCambialo } from "@/components/LayoutIcons";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 120) {
          current = section.id;
        }
      });

      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        current = "contacto";
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-dark text-white rounded-b-[1.5rem] md:rounded-b-[2rem] shadow-lg transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-4 md:px-16 py-3 md:py-4 flex justify-between items-center min-h-[60px] md:min-h-[80px]">
        
        {/* LADO IZQUIERDO */}
        <div className="flex-shrink-0 flex items-center transition-all duration-500">
          {activeSection === "home" ? (
            <Link href="#home">
              <div className="w-[80px] md:w-[140px] cursor-pointer hover:opacity-80 transition-opacity">
                <LogoCambialo className="w-full h-auto drop-shadow-md" />
              </div>
            </Link>
          ) : activeSection === "servicios" ? (
            <div className="flex items-center animate-fade-in -ml-2 md:-ml-16">
              <div className="h-[2px] w-6 md:w-32 bg-white mr-2 md:mr-6"></div>
              <h2 className="text-2xl md:text-6xl font-serif text-white tracking-wide">Servicios</h2>
            </div>
          ) : (
            <div className="flex items-center animate-fade-in -ml-2 md:-ml-16">
              <div className="h-[2px] w-6 md:w-32 bg-white mr-2 md:mr-6"></div>
              <h2 className="text-2xl md:text-6xl font-serif text-white tracking-wide">Contáctanos</h2>
            </div>
          )}
        </div>

        {/* LADO DERECHO: Menú de navegación completo */}
        <div className="flex items-center text-sm md:text-2xl space-x-1 md:space-x-4">
          
          {/* NUEVO: Botón INICIO (Solo aparece cuando NO estamos en home) */}
          {activeSection !== "home" && (
            <Link 
              href="#home" 
              className="relative px-3 md:px-6 py-1 md:py-2 rounded-full transition-colors duration-500 hover:bg-[#FFF8EB] text-white hover:text-[#0F1A2A] group"
            >
              <span className="invisible font-bold">Inicio</span>
              <span className="absolute inset-0 flex items-center justify-center font-light group-hover:font-bold transition-colors duration-500">
                Inicio
              </span>
            </Link>
          )}

          {(activeSection === "home" || activeSection === "contacto") && (
            <Link 
              href="#servicios" 
              className="relative px-3 md:px-6 py-1 md:py-2 rounded-full transition-colors duration-500 hover:bg-[#FFF8EB] text-white hover:text-[#0F1A2A] group"
            >
              <span className="invisible font-bold">Servicios</span>
              <span className="absolute inset-0 flex items-center justify-center font-light group-hover:font-bold transition-colors duration-500">
                Servicios
              </span>
            </Link>
          )}

          {(activeSection === "home" || activeSection === "servicios") && (
            <Link 
              href="#contacto" 
              className="relative px-3 md:px-6 py-1 md:py-2 rounded-full transition-colors duration-500 hover:bg-[#FFF8EB] text-white hover:text-[#0F1A2A] group"
            >
              <span className="invisible font-bold">Contáctanos</span>
              <span className="absolute inset-0 flex items-center justify-center font-light group-hover:font-bold transition-colors duration-500">
                Contáctanos
              </span>
            </Link>
          )}
          
        </div>
      </div>
    </nav>
  );
}