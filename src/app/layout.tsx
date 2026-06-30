import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Script from 'next/script';

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
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
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5K96GNBB"
          height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
        {children}
        <FloatingContact />
        <Script id="google-tag-manager" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5K96GNBB');
          `}
        </Script>
      </body>
    </html>
  );
}
