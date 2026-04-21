import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "SponsorGrid - Turn Your Space Into Sponsorship Revenue",
  description:
    "The modern platform for organizations to sell sponsorship space on any visual asset. Courts, fields, websites, events - monetize them all with our interactive grid system.",
  keywords: [
    "sponsorship",
    "fundraising",
    "sports",
    "events",
    "advertising",
    "monetization",
  ],
  openGraph: {
    title: "SponsorGrid - Turn Your Space Into Sponsorship Revenue",
    description:
      "The modern platform for organizations to sell sponsorship space on any visual asset.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[var(--background)]">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
