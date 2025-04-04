import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-6 xl:px-6`}
      >
        {children}
      </body>
    </html>
  );
}
