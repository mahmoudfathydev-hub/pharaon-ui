import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
  import "./globals.css";
  import Navbar from "../components/global/Navbar";
  import Footer from "../components/global/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NovaUI - Modern React Component Library",
  description:
    "Production-ready React components with TypeScript, animations, and accessibility. Build beautiful interfaces faster.",
  keywords: [
    "React",
    "TypeScript",
    "Components",
    "UI Library",
    "Tailwind CSS",
    "Framer Motion",
  ],
  authors: [{ name: "Mahmoud Fathy" }],
  openGraph: {
    title: "NovaUI - Modern React Component Library",
    description:
      "Production-ready React components with TypeScript, animations, and accessibility.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}