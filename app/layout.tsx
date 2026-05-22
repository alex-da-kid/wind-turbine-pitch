import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vow Vistos — Mobilização Internacional para Operações Eólicas",
  description:
    "Imigração corporativa, logística global e suporte operacional para empresas do setor eólico. Especialistas em mobilização de equipes técnicas para o mercado americano.",
  keywords: [
    "mobilização internacional",
    "setor eólico",
    "imigração corporativa",
    "crew travel management",
    "visto de trabalho",
    "mercado americano",
    "energia eólica",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={dmSans.variable}>
      <body className="bg-white text-vow-text antialiased">{children}</body>
    </html>
  );
}
