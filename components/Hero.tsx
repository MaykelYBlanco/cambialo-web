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
      <div className="text-2xl md:text-5xl font-serif text-brand-dark mb-6 md:mb-8 max-w-[320px] md:max-w-none mx-auto">
        Cualquiera crea una web genérica con IA...
      </div>

      {/* Padding reducido en móvil (p-6) y ancho ajustado */}
      <div className="bg-brand-blue rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 max-w-5xl w-full relative border-[3px] md:border-[4px] border-brand-dark shadow-[8px_8px_0_0_#0F1A2A] md:shadow-[12px_12px_0_0_#0F1A2A] z-20 flex flex-col items-center">
        
        {/* Texto más pequeño en móvil (text-4xl) */}
        <div className="text-4xl sm:text-5xl md:text-7xl font-serif text-white mb-4 leading-tight">
          Nosotros le damos
        </div>
        
        <div className="flex justify-center items-center gap-1 md:gap-4 mb-6 w-full">
          <div className="w-[30px] md:w-[60px] opacity-90 flex-shrink-0 transform scale-x-[-1]">
             <LottieNativo animacionData={animLineas} />
          </div>
          
          {/* Lottie ajustado para no desbordar en 360px */}
          <div className="w-[200px] sm:w-[300px] md:w-[480px] lg:w-[550px] flex-shrink-0 z-10">
            <LottieNativo animacionData={animGiro} />
          </div>

          <div className="w-[30px] md:w-[60px] opacity-90 flex-shrink-0">
             <LottieNativo animacionData={animLineas} />
          </div>
        </div>
        
        {/* Texto final ajustado para móvil */}
        <div className="text-2xl sm:text-3xl md:text-5xl font-serif text-white flex items-center justify-center gap-2 md:gap-4 flex-wrap mt-2">
          Que reflejara la calidad de 
          <span className="bg-brand-cream text-brand-dark px-3 py-1 md:px-4 md:py-1 italic shadow-sm font-serif">
            tu negocio
          </span>
        </div>
      </div>

      <div className="mt-8 w-[180px] sm:w-[280px] md:w-[400px] lg:w-[500px] pointer-events-none z-10 flex justify-center items-center">
        <LottieNativo animacionData={animSeraphim} />
      </div>
    </section>
  );
}