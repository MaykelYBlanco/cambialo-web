"use client";

import React from "react";
import { LottieNativo } from "@/components/LottieAnimators";

import animGiro from "@/assets/animaciones/Camb_Giro creativo_Idel.json";
import animLineas from "@/assets/animaciones/Camb_Lineas_Idel.json";
import animSeraphim from "@/assets/animaciones/Camb_Seraphim_Idel.json";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen bg-brand-cream pt-32 pb-10 flex flex-col items-center justify-center text-center px-4 overflow-hidden"
    >
      {/* 1. Texto superior: de text-2xl a text-3xl en móvil */}
      <div className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-dark mb-8 md:mb-8 max-w-[320px] sm:max-w-[400px] md:max-w-none mx-auto leading-tight">
        Cualquiera crea una web genérica con IA...
      </div>

      <div className="bg-brand-blue rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 max-w-[92%] md:max-w-5xl w-full mx-auto relative border-[3px] md:border-[4px] border-brand-dark shadow-[6px_6px_0_0_#0F1A2A] md:shadow-[12px_12px_0_0_#0F1A2A] z-20 flex flex-col items-center">
        
        {/* 2. Título principal: de text-3xl a text-4xl/5xl en móvil */}
        <div className="text-4xl sm:text-5xl md:text-7xl font-serif text-white mb-6 md:mb-4 leading-none text-center">
          Nosotros le damos
        </div>
        
        {/* 3. Lotties centrales: aumentamos el ancho mínimo de 180px a 240px */}
        <div className="flex justify-center items-center gap-2 md:gap-4 mb-6 md:mb-6 w-full">
          <div className="w-[40px] md:w-[60px] opacity-90 flex-shrink-0 transform scale-x-[-1]">
             <LottieNativo animacionData={animLineas} />
          </div>
          
          <div className="w-[240px] sm:w-[320px] md:w-[480px] lg:w-[550px] flex-shrink-0 z-10">
            <LottieNativo animacionData={animGiro} />
          </div>

          <div className="w-[40px] md:w-[60px] opacity-90 flex-shrink-0">
             <LottieNativo animacionData={animLineas} />
          </div>
        </div>
        
        {/* 4. Texto inferior: de text-xl a text-2xl en móvil, con padding más grande en la caja */}
        <div className="text-2xl sm:text-3xl md:text-5xl font-serif text-white flex items-center justify-center gap-2 md:gap-4 flex-wrap mt-2 text-center leading-tight">
          Que reflejara la calidad de 
          <span className="bg-brand-cream text-brand-dark px-3 md:px-4 py-1.5 md:py-1 italic shadow-sm font-serif whitespace-nowrap">
            tu negocio
          </span>
        </div>
      </div>

      {/* 5. Serafín inferior: de 180px a 220px en móvil */}
      <div className="mt-10 md:mt-8 w-[220px] sm:w-[280px] md:w-[400px] lg:w-[500px] pointer-events-none z-10 flex justify-center items-center">
        <LottieNativo animacionData={animSeraphim} />
      </div>
    </section>
  );
}