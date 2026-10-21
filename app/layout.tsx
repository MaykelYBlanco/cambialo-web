import type { Metadata } from "next";
import { Instrument_Serif, Instrument_Sans, Noto_Sans_Georgian} from "next/font/google";
import "./globals.css";


const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

const instruments = Instrument_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-instrument-sans",
}); 

const notoSansGeorgian = Noto_Sans_Georgian({
  weight: ["400", "500", "600"],
  subsets: ["latin", "georgian"],
  variable: "--font-noto-georgian",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${instrumentSerif.variable} ${instruments.variable} ${notoSansGeorgian.variable} scroll-smooth`}>
      {/* 3. Aplicamos la fuente sans por defecto a todo el body */}
      <body className="font-sans antialiased bg-brand-dark">
        {children}
      </body>
    </html>
  );
}