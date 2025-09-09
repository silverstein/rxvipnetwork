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
  description: "Join 500+ forward-thinking independent pharmacies using AI-powered outcomes reporting and medication synchronization to win in value-based care.",
  keywords: "independent pharmacy, pharmacy network, medication synchronization, outcomes reporting, value-based care, Dan Benamoz, RxVIP Network",
  openGraph: {
    title: "RxVIP Network — Transform Your Pharmacy",
    description: "Turn declining margins into competitive advantage with AI-powered outcomes reporting and proven transformation strategies.",
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
    title: "RxVIP Network — Transform Your Pharmacy",
    description: "Join 500+ independent pharmacies winning in value-based care",
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
