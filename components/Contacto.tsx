"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import ContactForm from "./ContactForm";
import CalendarView from "./CalendarView";
import SuccessView from "./SuccessView";
import { agendarCita } from "@/app/actions/citas"; 

const SkeletonLottie = dynamic(() => import("./SkeletonLottie"), {
  ssr: false,
  loading: () => <div className="w-[300px] h-[450px] bg-transparent"></div>,
});

export default function Contacto() {
  const [paso, setPaso] = useState(1);
  const [datosFormulario, setDatosFormulario] = useState({ nombre: "", email: "", mensaje: "" });
  const [fechaSeleccionada, setFechaSeleccionada] = useState<{ fecha: Date; hora: string } | null>(null);

  return (
    <section 
      id="contacto" className="min-h-screen w-full bg-[#63C3D1] pt-32 pb-32 flex flex-col items-center relative transition-all duration-500"
    >
      <div className="w-full max-w-5xl mx-auto relative px-4 flex flex-col items-center">
        
        {/* Título dinámico responsivo */}
        <div className="mb-12 w-full flex justify-center px-4">
          {(paso === 1 || paso === 2) && (
            // Agregamos flex-wrap para móvil, y tamaños de fuente escalonados
            <h3 className="flex flex-wrap justify-center items-center gap-y-3 gap-x-2 text-[36px] sm:text-5xl md:text-6xl lg:text-[68px] font-serif text-brand-dark leading-none text-center">
              <span>¿Tienes algún</span>
              {/* whitespace-nowrap solo aquí adentro para que la caja negra no se parta */}
              <span className="bg-brand-dark text-white px-3 py-1 md:px-5 md:py-2 rounded-sm italic tracking-wide whitespace-nowrap">proyecto en mente?</span>
            </h3>
          )}
          {paso === 3 && (
            <h3 className="flex flex-col items-center gap-y-2 md:gap-y-4 text-[36px] sm:text-5xl md:text-6xl lg:text-[68px] font-serif text-brand-dark leading-none text-center">
              <span>Reserva una cita</span>
              <span className="bg-brand-dark text-white px-3 py-1 md:px-5 md:py-2 rounded-sm italic text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 tracking-wide whitespace-nowrap">para que hablemos de tu idea</span>
            </h3>
          )}
        </div>

        {/* PASO 1: Intro con el Esqueleto */}
        {paso === 1 && (
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full animate-fade-in">
            <div className="w-[280px] md:w-[350px] flex-shrink-0">
              <SkeletonLottie />
            </div>

            <div className="flex flex-col items-center md:items-start gap-8">
              <button 
                onClick={() => setPaso(2)} 
                className="bg-brand-cream border-[4px] border-brand-dark rounded-full px-12 py-6 shadow-[8px_8px_0_0_#0F1A2A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_#0F1A2A] transition-all cursor-pointer group"
              >
                <span className="text-4xl md:text-5xl font-serif text-brand-dark group-hover:text-[#2677A6] transition-colors">
                  Trabajemos juntos
                </span>
              </button>
              
              <p className="text-2xl md:text-3xl font-georgian text-brand-dark text-center md:text-left max-w-[400px]">
                Envíanos un mensaje y nos pondremos <span className="font-bold text-brand-dark">en contacto contigo.</span>
              </p>
            </div>
          </div>
        )}

        {/* PASO 2: Formulario */}
        {paso === 2 && (
          <ContactForm
            onVolver={() => setPaso(1)}
            onSiguiente={(datos) => {
              if (datos) setDatosFormulario(datos);
              setPaso(3);
            }}
          />
        )}

        {/* PASO 3: Calendario */}
        {paso === 3 && (
          <CalendarView
            onVolver={() => setPaso(2)}
            onListo={async (fecha, hora) => {
              setFechaSeleccionada({ fecha, hora });
              
              const respuesta = await agendarCita({
                nombre: datosFormulario.nombre,
                email: datosFormulario.email,
                mensaje: datosFormulario.mensaje,
                fecha,
                hora,
              });

              if (respuesta.success) {
                setPaso(4);
              } else {
                alert(respuesta.error);
              }
            }}
          />
        )}

        {/* PASO 4: Éxito */}
        {paso === 4 && (
          <SuccessView
            onVolverInicio={() => setPaso(1)}
            fecha={fechaSeleccionada?.fecha.toISOString().split("T")[0]}
            hora={fechaSeleccionada?.hora}
          />
        )}

      </div>
    </section>
  );
}