"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AsteriscoSVG } from "./icons"; 

interface ContactFormProps {
  onVolver: () => void;
  onSiguiente: (datos: { nombre: string; email: string; mensaje: string }) => void; 
}

export default function ContactForm({ onVolver, onSiguiente }: ContactFormProps) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const validarYContinuar = (e: React.MouseEvent) => {
    e.preventDefault();

    if (nombre.trim() === "" || email.trim() === "" || mensaje.trim() === "") {
      setError("Por favor, completa todos los campos para continuar.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setError("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    setError("");
    onSiguiente({ nombre, email, mensaje });
  };

  return (
    <div className="w-full max-w-[800px] mx-auto animate-fade-in">
      
      {/* Contenedor Brutalista: Borde grueso y sombra sólida */}
      <form className="w-full border-[4px] border-[#0B1B30] shadow-[12px_12px_0_0_#0B1B30] rounded-[2rem] overflow-hidden flex flex-col text-left bg-[#0B1B30]">
        
        <div className="bg-[#FFF6E9] p-6 md:p-10 flex flex-col gap-6 md:gap-8 border-b-[4px] border-[#0B1B30]">
          
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <div className="flex items-center gap-2 shrink-0">
              <div className="w-6 h-6 text-[#0B1B30] flex items-center justify-center">
                <AsteriscoSVG />
              </div>
              <label className="text-[#0B1B30] font-bold text-lg whitespace-nowrap">Nombre y apellido</label>
            </div>
            <input 
              type="text" 
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
                if (error) setError("");
              }}
              className="flex-1 w-full bg-white border-[3px] border-[#0B1B30] rounded-xl px-4 py-3 outline-none focus:shadow-[4px_4px_0_0_#0B1B30] text-[#0B1B30] font-semibold transition-shadow" 
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <div className="flex items-center gap-2 shrink-0">
              <div className="w-6 h-6 text-[#0B1B30] flex items-center justify-center">
                <AsteriscoSVG />
              </div>
              <label className="text-[#0B1B30] font-bold text-lg whitespace-nowrap">Email</label>
            </div>
            <input 
              type="email" 
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
              className="flex-1 w-full bg-white border-[3px] border-[#0B1B30] rounded-xl px-4 py-3 outline-none focus:shadow-[4px_4px_0_0_#0B1B30] text-[#0B1B30] font-semibold transition-shadow" 
            />
          </div>
        </div>

        <div className="bg-[#0B1B30] p-6 md:p-10 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-white">
            <div className="w-6 h-6 text-white flex items-center justify-center">
              <AsteriscoSVG />
            </div>
            <label className="font-bold text-lg">Mensaje</label>
          </div>
          <textarea 
            rows={4} 
            value={mensaje}
            onChange={(e) => {
              setMensaje(e.target.value);
              if (error) setError("");
            }}
            className="w-full bg-[#0B1B30] border-[3px] border-white rounded-xl p-4 outline-none focus:shadow-[4px_4px_0_0_#FFF] resize-none text-white font-semibold transition-shadow"
          ></textarea>
        </div>

      </form>

      {/* bg-[#FFF6E9] en lugar del fondo rojo transparente */}
      {error && (
        <div className="mt-6 mx-auto max-w-[600px] text-center text-[#831111] font-bold bg-[#FFF6E9] py-3 px-4 rounded-xl border-[3px] border-[#831111] animate-fade-in shadow-[4px_4px_0_0_#831111]">
          {error}
        </div>
      )}

      {/* Botones inferiores */}
      <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 mt-12 w-full px-4">
        <button 
          onClick={onVolver}
          className="group relative bg-[#FFF6E9] text-[#0B1B30] font-bold text-xl px-10 py-3 rounded-full border-[4px] border-[#0B1B30] transition-transform duration-200 shadow-[6px_6px_0_0_rgba(11,27,48,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_rgba(11,27,48,1)] w-full md:w-auto"
        >
          Volver
        </button>

        <div className="flex gap-6 order-last md:order-none w-full md:w-auto justify-center">
          <a href="https://www.instagram.com/somos.cambialo/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <Image src="/svg/instagram.svg" alt="Instagram" width={45} height={45} />
          </a>
          <a href="https://www.behance.net/idgonza" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <Image src="/svg/behance.svg" alt="Behance" width={55} height={45} />
          </a>
        </div>

        <button 
          onClick={validarYContinuar} 
          className="group relative bg-[#FFF6E9] text-[#0B1B30] font-bold text-xl px-10 py-3 rounded-full border-[4px] border-[#0B1B30] transition-transform duration-200 shadow-[6px_6px_0_0_rgba(11,27,48,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_rgba(11,27,48,1)] w-full md:w-auto"
        >
          Siguiente
        </button>
      </div>

    </div>
  );
}