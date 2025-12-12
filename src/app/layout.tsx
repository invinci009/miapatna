import type { Metadata } from "next";
import { Inter, Poppins } from 'next/font/google';
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Ignius Paramedical College | Patna",
    template: "%s | Ignius Paramedical College"
  },
  description: "Ignius Paramedical College offers quality paramedical education in Patna, Bihar. Courses include BMLT, DMLT, BPT, BOTT with globally recognized certificates.",
  keywords: ["Ignius Paramedical College", "IPC", "paramedical institute Patna", "BMLT course Bihar", "DMLT Patna", "BPT course", "healthcare education"],
  authors: [{ name: "Ignius Paramedical College" }],
  openGraph: {
    type: "website",
    url: "https://miapatna.vercel.app/",
    title: "Ignius Paramedical College | Healthcare Education Since 2000",
    description: "Quality paramedical education in Patna. BMLT, DMLT, BPT, BOTT courses with globally recognized certificates. 2000+ students trained.",
    siteName: "Ignius Paramedical College",
    images: [{
      url: "https://miapatna.vercel.app/logo.png",
      width: 1200,
      height: 630,
      alt: "Ignius Paramedical College Logo"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ignius Paramedical College | Patna",
    description: "Quality paramedical education in Patna. BMLT, DMLT, BPT, BOTT courses with globally recognized certificates."
  },
  robots: "index, follow",
  metadataBase: new URL("https://miapatna.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-display bg-background-light text-base-content min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
