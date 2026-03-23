import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import QueryProvider from "@/components/query-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Logic & Pixels | Custom IT Solutions",
    template: "%s | Logic & Pixels"
  },
  description:
    "Professional IT solutions including thesis/capstone systems, business websites, and custom enterprise applications.",
  keywords: [
    "IT solutions",
    "web development",
    "custom software",
    "thesis systems",
    "capstone projects",
    "business websites"
  ],
  authors: [{ name: "Logic & Pixels Team" }],
  creator: "Logic & Pixels",
  publisher: "Logic & Pixels",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  metadataBase: new URL("https://logicandpixels.dev"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://logicandpixels.dev",
    title: "Logic & Pixels | Custom IT Solutions",
    description:
      "Logic & Pixels specializes in developing custom IT solutions, from thesis/capstone projects to business websites and enterprise systems. Explore Services",
    siteName: "Logic & Pixels"
  },
  twitter: {
    card: "summary_large_image",
    title: "Logic & Pixels | Custom IT Solutions",
    description:
      "Logic & Pixels specializes in developing custom IT solutions, from thesis/capstone projects to business websites and enterprise systems.",
    creator: "@logicandpixels"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code"
  },
  category: "technology"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
