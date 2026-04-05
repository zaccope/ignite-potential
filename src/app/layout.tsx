import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
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
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
