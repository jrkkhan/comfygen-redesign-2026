import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

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


export const metadata: Metadata = {
  title: "Comfygen Redesign",
  description: "High performance, SEO optimized platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${nataSans.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
