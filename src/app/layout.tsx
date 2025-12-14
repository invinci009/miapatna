import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from 'next/font/google';
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AOSProvider from "@/components/providers/AOSProvider";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/seo/JsonLd";

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

// Viewport configuration for mobile optimization
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1e40af' },
    { media: '(prefers-color-scheme: dark)', color: '#1e3a8a' },
  ],
  colorScheme: 'light',
};

export const metadata: Metadata = {
  title: {
    default: "Ignius Paramedical College | Best Paramedical Institute in Patna",
    template: "%s | Ignius Paramedical College"
  },
  description: "Best Paramedical College in Patna, Bihar. Ignius Paramedical College offers BMLT, DMLT, BPT, BOTT courses with globally recognized certificates. 2000+ students trained since 2000.",
  keywords: ["Best Paramedical College Patna", "Ignius Paramedical College", "IPC", "paramedical institute Patna", "BMLT course Bihar", "DMLT Patna", "BPT course", "healthcare education Bihar"],
  authors: [{ name: "Ignius Paramedical College" }],
  creator: "Ignius Paramedical College",
  publisher: "Ignius Paramedical College",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    url: "https://miapatna.vercel.app/",
    title: "Ignius Paramedical College | Best Paramedical Institute in Patna",
    description: "Best Paramedical College in Patna. BMLT, DMLT, BPT, BOTT courses with globally recognized certificates. 2000+ students trained.",
    siteName: "Ignius Paramedical College",
    locale: "en_IN",
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
    description: "Best Paramedical College in Patna. BMLT, DMLT, BPT, BOTT courses with globally recognized certificates.",
    images: ["https://miapatna.vercel.app/logo.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-verification-code',
  },
  alternates: {
    canonical: 'https://miapatna.vercel.app',
  },
  metadataBase: new URL("https://miapatna.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Structured Data */}
        <OrganizationJsonLd />
        <WebsiteJsonLd />

        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/logo.png" />

        {/* Manifest for PWA (optional) */}
        {/* <link rel="manifest" href="/manifest.json" /> */}
      </head>
      <body className="font-display bg-background-light text-base-content min-h-screen flex flex-col">
        <AOSProvider>
          <Header />
          <Breadcrumb />
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
