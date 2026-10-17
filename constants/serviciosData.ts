import animLanding from "@/assets/animaciones/Camb_Boton Landing_Hover.json";
import animWeb from "@/assets/animaciones/Camb_Boton Pagina web_Hover.json";
import animRedes from "@/assets/animaciones/Camb_Redes sociales_Hover.json";
import animVideo from "@/assets/animaciones/Camb_Video Animado_Hover.json";

export const serviciosData = {
  landing: { 
    id: "landing", 
    titulo: "Creación de Landing Page", 
    animacion: animLanding,
    bgMain: "bg-[#0F1A2A]", 
    textMain: "text-white", 
    textTitle: "text-[#68CFC2]",
    borderColor: "border-[#68CFC2]", 
    pillColor: "bg-[#68CFC2]", 
    priceTexto: "239€ + ", 
    priceBlanco: "Mantenimiento y Host", 
    priceBotonBg: "bg-[#68CFC2]", 
    priceBotonText: "text-[#0F1A2A]", 
    priceBlancoHover: "11,99/mes", 
    precioDescHover: "Si ya posee host y dominio, el pago único es de $239.",
    caracteristicas: ["Estructura One-Page.", "Redacción.", "Animación de logo.", "Implementación de etiquetas para la búsqueda."] 
  },
  web: { 
    id: "web", 
    titulo: "Creación de página web", 
    animacion: animWeb,
    bgMain: "bg-[#36DB75]", 
    textMain: "text-[#0F1A2A]", 
    textTitle: "text-[#0F1A2A]",
    borderColor: "border-[#0F1A2A]", 
    pillColor: "bg-[#36DB75]", 
    priceTexto: "Desde 800€ + ", 
    priceBlanco: "Mantenimiento y Host", 
    priceBotonBg: "bg-[#0F1A2A]", 
    priceBotonText: "text-white", 
    priceBlancoHover: "11,99/mes", 
    precioDescHover: "Si ya posee host y dominio, el pago único se mantiene base.",
    caracteristicas: ["El precio final se establece en una reunión con el cliente.", "Interacción con base de datos.", "Sistema de iconos animados.", "Implementación de etiquetas para la búsqueda."] 
  },
  redes: { 
    id: "redes", 
    titulo: "Gestión de redes sociales", 
    animacion: animRedes,
    bgMain: "bg-[#B2A798]", 
    textMain: "text-[#0F1A2A]", 
    textTitle: "text-[#0F1A2A]",
    borderColor: "border-[#0F1A2A]", 
    pillColor: "bg-[#B2A798]", 
    priceTexto: "Desde 500€ + ", 
    priceBlanco: "Inversión en ADS", 
    priceBotonBg: "bg-[#0F1A2A]", 
    priceBotonText: "text-white", 
    priceBlancoHover: "Presupuesto Ads", 
    precioDescHover: "El presupuesto de anuncios se define en conjunto según tus objetivos.",
    caracteristicas: ["Diseño de estrategia de contenidos.", "Creación de diseño y redacción de guiones.", "Publicación de contenido y monitoreo de resultados.", "Configuración y asesoría de campañas de ADS."] 
  },
  video: { 
    id: "video", 
    titulo: "Video corporativo animado", 
    animacion: animVideo,
    bgMain: "bg-[#FFF8EB]", 
    textMain: "text-[#0F1A2A]", 
    textTitle: "text-[#0F1A2A]",
    borderColor: "border-[#0F1A2A]", 
    pillColor: "bg-[#FFF8EB]", 
    priceTexto: "300€/minuto + ", 
    priceBlanco: "50€/formato adicional", 
    priceBotonBg: "bg-[#0F1A2A]", 
    priceBotonText: "text-white", 
    priceBlancoHover: "Formatos Extra", 
    precioDescHover: "Adaptamos tu video para Reels, TikTok o YouTube Shorts.",
    caracteristicas: ["Entrega previa de Storyboard.", "2 revisiones de Storyboard antes de iniciar la animación.", "Diseño de sonido."] 
  }
};