import type { Metadata } from "next";
import "./globals.css";
import ClientEffects from "@/components/ClientEffects";

export const metadata: Metadata = {
  title: "Entre Mundos: O Chamado — A. Phoenix",
  description:
    "Entre Mundos: O Chamado — Livro I, de A. Phoenix. Uma saga de fantasia romântica onde a luz e a sombra se encontram. Adquira já o seu exemplar.",
  icons: {
    icon: [
      { url: "/rose-icon.svg", type: "image/svg+xml" },
      { url: "/favicon-64.png", type: "image/png", sizes: "64x64" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT">
      <body>
        {children}
        <ClientEffects />
      </body>
    </html>
  );
}
