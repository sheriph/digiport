import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DigiPort Academy - Digital Transformation Masterclass in Porto",
  description:
    "Transform your digital leadership skills with our intensive 3-day masterclass in the heart of Porto, Portugal. Join industry experts and innovators.",
  keywords: "digital transformation, leadership, masterclass, Porto, Portugal, tech innovation",
  openGraph: {
    title: "DigiPort Academy - Digital Transformation Masterclass",
    description: "Elevate your digital leadership skills in Porto, Portugal",
    url: "https://digiportacademy.com",
    siteName: "DigiPort Academy",
    images: [
      {
        url: "https://digiportacademy.com/og-image.jpg", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "DigiPort Academy Masterclass",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiPort Academy - Digital Transformation Masterclass",
    description: "Elevate your digital leadership skills in Porto, Portugal",
    images: ["https://digiportacademy.com/twitter-image.jpg"], // Replace with actual image URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual Google verification code
    yandex: "your-yandex-verification-code", // Replace with actual Yandex verification code if needed
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

