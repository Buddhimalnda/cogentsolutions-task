import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav";

import logo from "@/public/images/cogent-logo-01.png";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cogent Solutions",
  description: "Cogent Solutions Conference 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const main_links = [
    { name: "Event Overview", href: "#event-overview" },
    { name: "Agenda", href: "#agenda" },
  ];
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative top-0 z-50 bg-[#171717] w-full">
          {/* navbar */}
          <Navbar links={main_links} logo={logo} />
        </div>
        {children}
      </body>
    </html>
  );
}
