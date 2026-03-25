import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getBaseUrl, siteConfig } from "@/src/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = getBaseUrl();

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: baseUrl,
  image: `${baseUrl}/pp_web.jpeg`,
  jobTitle: siteConfig.title,
  description: siteConfig.description,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    "addressLocality": siteConfig.location,
    "addressCountry": "IN",
  },
  sameAs: siteConfig.sameAs,
  knowsAbout: siteConfig.keywords,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  verification: {
    // FIXED: Moved inside the main metadata object and removed the "google-site-verification=" prefix
    // Google just needs the token string itself.
    google: "KiUCVH3CeR-1xNbfWXAZJM1KK6IRRTuEvBueqlgZUV8",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: baseUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    images: [
      {
        url: "/pp_web.jpeg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} portfolio preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    images: ["/pp_web.jpeg"],
    creator: "@supriyo__9",
  },
  appleWebApp: {
    title: siteConfig.name,
    statusBarStyle: "default",
    capable: true,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}