import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
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
    <html lang="pt-BR" className={inter.variable}>
      <body className="bg-vow-dark text-vow-text antialiased">{children}</body>
    </html>
  );
}
