import type { Metadata } from "next";
import { Cormorant, Source_Serif_4, Inter } from "next/font/google";
import "./globals.css";
import ClientEffects from "@/components/ClientEffects";
import SpotifyBar from "@/components/SpotifyBar";
import PromoPopup from "@/components/PromoPopup";
import OfertaGratisBanner from "@/components/OfertaGratisBanner";
import ChatPhoenix from "@/components/ChatPhoenix";

const cormorant = Cormorant({ variable: "--font-cormorant", style: ["normal", "italic"], weight: ["400", "500", "600", "700"], subsets: ["latin"], display: "swap" });
const sourceSerif = Source_Serif_4({ variable: "--font-source-serif", style: ["normal", "italic"], weight: ["400", "600"], subsets: ["latin"], display: "swap" });
const inter = Inter({ variable: "--font-inter", weight: ["400", "500", "600", "700"], subsets: ["latin"], display: "swap" });

const descricaoPadrao =
  "Entre Mundos: O Chamado — Livro I, de A. Phoenix. Uma saga de fantasia romântica onde a luz e a sombra se encontram. Adquira já o seu exemplar.";

export const metadata: Metadata = {
  title: {
    default: "Entre Mundos: O Chamado — A. Phoenix",
    template: "%s — A. Phoenix",
  },
  description: descricaoPadrao,
  icons: {
    icon: [
      { url: "/rose-icon.svg", type: "image/svg+xml" },
      { url: "/favicon-64.png", type: "image/png", sizes: "64x64" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    siteName: "A. Phoenix — Entre Mundos: O Chamado",
    title: "Entre Mundos: O Chamado — A. Phoenix",
    description: descricaoPadrao,
    images: ["/assets/livro/capa-frontal.webp"],
    locale: "pt_PT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Entre Mundos: O Chamado — A. Phoenix",
    description: descricaoPadrao,
    images: ["/assets/livro/capa-frontal.webp"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT" className={`${cormorant.variable} ${sourceSerif.variable} ${inter.variable}`}>
      <body>
        <OfertaGratisBanner />
        {children}
        <SpotifyBar />
        <PromoPopup />
        <ChatPhoenix />
        <ClientEffects />
      </body>
    </html>
  );
}
