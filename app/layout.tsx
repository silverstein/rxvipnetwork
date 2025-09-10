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
  title: "RxVIP Network — The Future of Independent Pharmacy",
  description: "Dan Benamoz's Big Reveal - September 16, 2025. The exclusive webinar for independent pharmacy owners.",
  keywords: "independent pharmacy, Dan Benamoz, RxVIP Network",
  openGraph: {
    title: "RxVIP Network — Dan Benamoz's Big Reveal",
    description: "The exclusive webinar for independent pharmacy owners. September 16, 2025.",
    type: "website",
    url: "https://rxvipnetwork.com",
    siteName: "RxVIP Network",
    images: [
      {
        url: "https://rxvipnetwork.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RxVIP Network - The Future of Independent Pharmacy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RxVIP Network — Dan Benamoz's Big Reveal",
    description: "The exclusive webinar for independent pharmacy owners",
    images: ["https://rxvipnetwork.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://rxvipnetwork.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
