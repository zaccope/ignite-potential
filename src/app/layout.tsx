import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ignite Potential — Maximise People Potential",
  description:
    "Expert people development for individuals, groups, and organisations of all sizes and sectors. Personalised coaching, leadership programmes, and consultancy.",
  openGraph: {
    title: "Ignite Potential — Maximise People Potential",
    description:
      "Expert people development for individuals, groups, and organisations of all sizes and sectors.",
    url: "https://ignitepotential.ltd",
    siteName: "Ignite Potential",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
