import type { Metadata } from "next";
import type { ReactNode } from "react";
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

const title = "RJ B. Tolibas | Web Designer & Developer";
const description =
  "Portfolio of RJ B. Tolibas, a web designer and developer creating accessible, responsive digital experiences.";

const deploymentUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const metadataBase = new URL(
  deploymentUrl ? `https://${deploymentUrl}` : "http://localhost:3000",
);

export const metadata: Metadata = {
  metadataBase,
  title,
  description,
  applicationName: "RJ B. Tolibas Portfolio",
  authors: [{ name: "RJ B. Tolibas" }],
  creator: "RJ B. Tolibas",
  category: "portfolio",
  keywords: [
    "RJ B. Tolibas",
    "web designer",
    "frontend developer",
    "UI/UX design",
    "responsive web design",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title,
    description,
    siteName: "RJ B. Tolibas Portfolio",
    images: [
      {
        url: "/images/projects/velora-coffee.webp",
        width: 1448,
        height: 1086,
        alt: "Velora Coffee and Provisions responsive website design by RJ B. Tolibas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/projects/velora-coffee.webp"],
  },
  icons: {
    icon: [{ url: "/brand/rj-icon.svg", type: "image/svg+xml" }],
    shortcut: "/brand/rj-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
