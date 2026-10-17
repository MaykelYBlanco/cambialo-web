"use client";

import React, { useState } from "react";
import { AsteriscoSVG, FlechaRetorno } from "@/components/icons";
import { BotonLottieMenu, LottieNativoSimple } from "@/components/LottieAnimators";

// 1. Importamos la data desde constants
import { serviciosData } from "@/constants/serviciosData"; 

// 2. Importamos el Serafín para el hover
import animSeraphim from "@/assets/animaciones/Camb_Seraphim_Idel.json"; 

const servicios = Object.values(serviciosData);

export default function Servicios() {
  const [vistaActiva, setVistaActiva] = useState<string>("menu");
  const [hoverPrecio, setHoverPrecio] = useState(false); // <-- Estado del hover

  const contenidoActual = vistaActiva !== "menu" ? serviciosData[vistaActiva as keyof typeof serviciosData] : null;

  return (
    <section id="servicios" className="min-h-screen w-full bg-gradient-to-b from-brand-dark to-[#2677A6] pt-32 pb-32 flex flex-col items-center relative transition-all duration-500">
      
      {/* Ya no hay título estático aquí, el Navbar dinámico se encarga de mostrar "— Servicios" */}

      {vistaActiva === "menu" ? (
        <div className="flex flex-col items-center w-full max-w-[850px] px-4 z-10 animate-fade-in">
          {servicios.map((servicio, index) => (
            <BotonLottieMenu 
              key={servicio.id} 
              animacionData={servicio.animacion} 
              onClick={() => setVistaActiva(servicio.id)} 
              // Margen reducido en móvil (-mt-[20px]) y grande en escritorio
              margenNegativo={index === 0 ? "mt-0" : "-mt-[20px] sm:-mt-[40px] md:-mt-[100px] lg:-mt-[120px]"}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center w-full max-w-4xl px-4 animate-fade-in z-10 relative">
          
          {/* BOTÓN VOLVER MOVIDO ARRIBA DE LA TARJETA */}
          <div className="w-full flex justify-end mb-4">
            <button onClick={() => { setVistaActiva("menu"); setHoverPrecio(false); }} className="w-[50px] md:w-[70px] cursor-pointer hover:scale-105 transition-transform">
              <FlechaRetorno />
            </button>
          </div>

          <div className={`w-full ${contenidoActual!.bgMain} border-[4px] ${contenidoActual!.borderColor} rounded-[2.5rem] overflow-hidden flex flex-col shadow-[12px_12px_0_0_#0F1A2A] transition-colors duration-300`}>
            
            <div className={`w-full border-b-[4px] ${contenidoActual!.borderColor} py-6 md:py-8 flex justify-center items-center`}>
              <h3 className={`text-3xl md:text-5xl font-serif ${contenidoActual!.textTitle} text-center px-4`}>
                {contenidoActual!.titulo}
              </h3>
            </div>

            <div className="p-8 md:p-12 flex flex-col min-h-[350px]">
              
              {hoverPrecio ? (
                // --- VISTA EXPANDIDA (Hover) ---
                <div className="flex flex-col lg:flex-row items-stretch gap-x-4 w-full animate-fade-in">
                  <span className={`font-serif text-2xl md:text-4xl pt-2 lg:pt-6 shrink-0 tracking-tight mb-4 lg:mb-0 ${contenidoActual!.textMain}`}>
                    {contenidoActual!.priceTexto}
                  </span>
                  
                  <div 
                    className="relative bg-brand-cream border-[3px] border-brand-dark p-6 md:p-10 flex flex-col items-start w-full cursor-pointer shadow-[6px_6px_0_0_#0F1A2A]"
                    onMouseLeave={() => setHoverPrecio(false)}
                    onClick={() => setHoverPrecio(false)}
                  >
                    <span className="lg:hidden absolute top-4 right-5 text-brand-dark font-sans font-bold opacity-30 text-xl">✕</span>
                    <span className="font-serif text-3xl md:text-5xl text-brand-dark tracking-tight pr-6">
                      {contenidoActual!.priceBlancoHover}
                    </span>
                    <p className="font-serif text-xl md:text-3xl text-brand-dark mt-4 leading-tight">
                      {contenidoActual!.precioDescHover}
                    </p>
                    <div className="w-[120px] md:w-[180px] mt-6 mx-auto pointer-events-none">
                      <LottieNativoSimple animacionData={animSeraphim} />
                    </div>
                  </div>
                </div>
              ) : (
                // --- VISTA NORMAL ---
                <div className="flex flex-col animate-fade-in">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-4 mb-10">
                    <span className={`font-serif text-2xl md:text-4xl font-bold ${contenidoActual!.textMain}`}>
                      {contenidoActual!.priceTexto}
                    </span>
                    <span 
                      onMouseEnter={() => setHoverPrecio(true)}
                      onClick={() => setHoverPrecio(true)}
                      className={`cursor-pointer transition-transform hover:-translate-y-1 ${contenidoActual!.priceBotonBg} ${contenidoActual!.priceBotonText} px-4 py-1.5 font-serif text-2xl md:text-3xl font-bold shadow-[4px_4px_0_0_#0F1A2A] rounded-sm tracking-tight border-2 border-brand-dark`}
                    >
                      {contenidoActual!.priceBlanco}
                    </span>
                  </div>

                  <ul className="space-y-4 md:space-y-6">
                    {contenidoActual!.caracteristicas.map((caracteristica: string, index: number) => (
                      <li key={index} className="flex items-start gap-4">
                        <div className="w-6 h-6 flex-shrink-0 mt-1">
                           <AsteriscoSVG /> 
                        </div>
                        <span className={`font-serif text-xl md:text-2xl ${contenidoActual!.textMain} leading-tight`}>
                          {caracteristica}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          </div>

          <div className="flex gap-6 md:gap-10 mt-12 justify-center w-full">
            {servicios.filter(s => s.id !== vistaActiva).map((servicio) => (
              <div
                key={servicio.id}
                onClick={() => { setVistaActiva(servicio.id); setHoverPrecio(false); }}
                className={`w-[80px] md:w-[120px] h-[20px] md:h-[25px] rounded-full cursor-pointer ${servicio.pillColor} border-[3px] ${servicio.id === 'landing' ? 'border-[#68CFC2]' : 'border-brand-dark'} shadow-[4px_4px_0_0_#0F1A2A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#0F1A2A] transition-all`}
                title={servicio.titulo}
              />
            ))}
          </div>

        </div>
      )}
    </section>
  );
}