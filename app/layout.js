"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
import Lenis from "lenis";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>{children}<Footer /></body>
    </html>
  );
}
