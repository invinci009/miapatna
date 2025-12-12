import type { Metadata } from "next";
import { Inter, Poppins } from 'next/font/google';
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import AOSProvider from "@/components/providers/AOSProvider";

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
    default: "Ignius Paramedical College | Best Paramedical Institute in Patna",
    template: "%s | Ignius Paramedical College"
  },
  description: "Best Paramedical College in Patna, Bihar. Ignius Paramedical College offers BMLT, DMLT, BPT, BOTT courses with globally recognized certificates. 2000+ students trained since 2000.",
  keywords: ["Best Paramedical College Patna", "Ignius Paramedical College", "IPC", "paramedical institute Patna", "BMLT course Bihar", "DMLT Patna", "BPT course", "healthcare education Bihar"],
  authors: [{ name: "Ignius Paramedical College" }],
  openGraph: {
    type: "website",
    url: "https://miapatna.vercel.app/",
    title: "Ignius Paramedical College | Best Paramedical Institute in Patna",
    description: "Best Paramedical College in Patna. BMLT, DMLT, BPT, BOTT courses with globally recognized certificates. 2000+ students trained.",
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
    title: "Ignius Paramedical College | Best Paramedical Institute in Patna",
    description: "Best Paramedical College in Patna. BMLT, DMLT, BPT, BOTT courses with globally recognized certificates."
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
        <AOSProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
        </AOSProvider>
      </body>
    </html>
  );
}
