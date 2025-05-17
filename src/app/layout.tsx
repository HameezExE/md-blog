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
    default: `Personal Blog | ${process.env.NAME}`,
    template: "%s | " + `${process.env.NAME}'s Personal Blog`,
  },
  description:
    "Discover interesting articles about Topic A, Topic B, and emerging trends in Topic C. Minimal, fast, and insightful.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.WEBSITE_URL,
    siteName: `Personal Blog | ${process.env.NAME}`,
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: `Personal Blog | ${process.env.NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@hameezexe",
    creator: "@hameezexe",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${montserrat.variable} font-body antialiased `}
      >
        <Header />
        <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-6 xl:px-6">
          {children}
        </section>
        <Footer />
      </body>
    </html>
  );
}
