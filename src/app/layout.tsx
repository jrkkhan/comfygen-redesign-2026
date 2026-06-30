import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { GTMLoader } from '@/components/common/GTMLoader';

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const nataSans = localFont({
  src: "../../public/fonts/NataSans.woff2",
  variable: "--font-nata-sans",
  display: "swap",
  weight: "400 800",
});


import dynamic from 'next/dynamic';
const FloatingContact = dynamic(() => import("@/components/common/FloatingContact").then(mod => mod.FloatingContact));
import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#5556D1",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Comfygen Technologies – App & Software Development Experts",
  description: "Comfygen is a AI-based mobile app and web development company delivering scalable, secure, and high-performance digital solutions for startups and enterprises.",
  authors: [{ name: "Comfygen Technologies" }],
  publisher: "Comfygen Technologies",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  verification: {
    google: "Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg",
    other: {
      "msvalidate.01": "88C9F762357EB27E860762AE43E1BDF7",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.comfygen.com",
    title: "Comfygen Technologies – App & Software Development Experts",
    description: "Explore top-tier software, app, and blockchain development services by Comfygen Technologies.",
    siteName: "Comfygen Technologies",
    images: [
      {
        url: "https://www.comfygen.com/image/blockchain-and-mobile-app-development-company.webp",
        width: 1200,
        height: 630,
        alt: "Comfygen Technologies - App & Software Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@comfygentech",
    title: "Comfygen Technologies – Digital Transformation Partner",
    description: "Join hands with Comfygen for robust software and mobile solutions that scale.",
    images: ["https://www.comfygen.com/image/blockchain-and-mobile-app-development-company.webp"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Comfygen Technologies",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${nataSans.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <FloatingContact />
        <GTMLoader />
      </body>
    </html>
  );
}
