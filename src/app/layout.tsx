import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from 'next/font/google';
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import AdmissionRibbon from "@/components/ui/AdmissionRibbon";
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
    default: "IPC Patna | Ignius Paramedical College - Best Healthcare Institute in Bihar",
    template: "%s | IPC Patna - Ignius Paramedical College"
  },
  description: "Ignius Paramedical College (IPC) Patna - Bihar's leading paramedical institute. Offering BMLT, DMLT, BPT, BOTT courses with 100% placement assistance. 2000+ trained healthcare professionals since 2018.",
  keywords: [
    "IPC Patna",
    "Ignius Paramedical College",
    "Best Paramedical College Patna",
    "BMLT course Bihar",
    "DMLT Patna",
    "BPT course Bihar",
    "BOTT course",
    "healthcare education Bihar",
    "paramedical institute Patna",
    "medical lab technician course",
    "physiotherapy college Patna"
  ],
  authors: [{ name: "Ignius Paramedical College", url: "https://miapatna.vercel.app" }],
  creator: "Ignius Paramedical College",
  publisher: "Ignius Paramedical College",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: "website",
    url: "https://miapatna.vercel.app/",
    title: "IPC Patna | Ignius Paramedical College - Best Healthcare Institute",
    description: "Bihar's leading paramedical institute. BMLT, DMLT, BPT, BOTT courses with 100% placement assistance. Join 2000+ trained healthcare professionals.",
    siteName: "IPC Patna - Ignius Paramedical College",
    locale: "en_IN",
    images: [{
      url: "https://miapatna.vercel.app/logo.png",
      width: 1200,
      height: 630,
      alt: "IPC Patna - Ignius Paramedical College Logo"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "IPC Patna | Ignius Paramedical College",
    description: "Bihar's leading paramedical institute. BMLT, DMLT, BPT, BOTT courses with placement assistance.",
    images: ["https://miapatna.vercel.app/logo.png"],
    creator: "@ipcpatna"
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
          <AdmissionRibbon />
        </AOSProvider>
      </body>
    </html>
  );
}
