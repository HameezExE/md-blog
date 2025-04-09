import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `Personal Blog | ${process.env.YOUR_NAME}`,
    template: "%s | " + `${process.env.YOUR_NAME}`,
  },
  description:
    "A growing collection of thoughts, tutorials, and explorations in tech. Less blog, more personal wiki of things I'm curious about.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-6 xl:px-6`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
