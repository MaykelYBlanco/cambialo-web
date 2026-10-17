import type { Metadata } from "next";
import { Instrument_Serif, Noto_Sans } from "next/font/google";
import "./globals.css";

// 1. Configuramos Instrument Serif
const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

// 2. Configuramos Noto Sans
const notoSans = Noto_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "CámbiAlo | Agencia Creativa",
  description: "Cualquiera crea una web genérica con IA... Nosotros le damos un giro más creativo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${instrumentSerif.variable} ${notoSans.variable} scroll-smooth`}>
      {/* 3. Aplicamos la fuente sans por defecto a todo el body */}
      <body className="font-sans antialiased bg-brand-dark">
        {children}
      </body>
    </html>
  );
}